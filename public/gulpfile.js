var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var htmlmin = require('gulp-htmlmin');

//压缩html文件, Html替换css、js文件版本
gulp.task('build-htmlmin',function(){
    return gulp.src('views/vico/src/vico-download.html')
    .pipe(htmlmin({
        removeComments: true,  //清除HTML注释
        collapseWhitespace: true,  //压缩HTML
        minifyJS: true,  //压缩页面JS
        minifyCSS: true  //压缩页面CSS
    })) //设置是否压缩html文件 true
    .pipe(gulp.dest('views/vico'))
    .pipe(browserSync.stream())
});

//监听文件修改
gulp.task('watch',function(){
    // 建立浏览器自动刷新服务器
    browserSync.init({
        port: 10086,
        server: {
            baseDir: "views"
        }
    });

    // 自动刷新
    // gulp.watch('views/**/*.html', function() {
    //     browserSync.reload();
    // });
    gulp.watch('views/vico/src/*.html', ['build-htmlmin'])
})

//使用gulp.task('default')定义默认任务
gulp.task('default',['build-htmlmin', 'watch'])

gulp.task('htmlmin', ['build-htmlmin'])