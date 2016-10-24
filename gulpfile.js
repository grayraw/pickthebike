var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var pug = require('gulp-pug');
var path = require('path');
// var livereload = require('gulp-livereload');
// var del = require('del');

gulp.task('serve', function() {
    return nodemon({
		script: 'build/server/server.js',
        tasks: ['build'],
        watch: ['server/**/*.*', 'public/**/*.*'],
		env: { 'NODE_ENV': 'development' }
	}).on('restart', ()=>{
        console.log('Restarted');
    });
});

// gulp.task('build', ['clean', 'lint', 'html'], function(){
//     return gulp.src([__dirname + '/**/*.ts', '!' + __dirname + '/node_modules/**/*'])
//     .pipe(ts({}))
//     .pipe(gulp.dest(__dirname + '/build/'))
// });

gulp.task('watch', function (){
    return gulp.watch([__dirname + '/public/**/*', __dirname + '/server/**/*'], ['build'])    
})

gulp.task('build', ['clean'], function(){
    return gulp.start(['lint', 'js', 'html'])
})

gulp.task('js', function(){
    return gulp.src([__dirname + '/**/*.ts', '!' + __dirname + '/node_modules/**/*'])
    .pipe(ts({}))
    .pipe(gulp.dest(__dirname + '/build/'))
});

gulp.task('lint', function(){
    return gulp.src([__dirname + '/server/**/*.ts'])
    .pipe(tslint({
        formatter: "prose",
        configuration: {
            rules: {
                quotemark: [false]
            }
        }
    }))
    .pipe(tslint.report())
});

gulp.task('clean', function(){
    var cleanPath = path.join(__dirname + '/build/**/*');
    return gulp.src( cleanPath, {read: false})
    .pipe(clean())
})

// gulp.task('clean', function(){
//     return del([__dirname + '/build/**/*'])
// })

gulp.task('html', function(){
    return gulp.src([__dirname + '/public/views/**/*.pug', '!' + __dirname + '/public/views/includes/*.pug'])
    .pipe(pug({}))
    .pipe(gulp.dest(__dirname + '/build/public/views/')) 
})