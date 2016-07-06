'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	prefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	less = require('gulp-less'),
	sass = require('gulp-sass'),
	sourcemaps = require ('gulp-sourcemaps'),
	rigger = require ('gulp-rigger'),
	cssmin = require('gulp-minify-css'),
	imagemin = require ('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	rimraf = require ('rimraf'),
	browserSync = require ("browser-sync"),
	reload = browserSync.reload;


	var path = {
		build: {   //сюда выплевываем готовые доки
			html: '',
			css: 'build/css',
			img: 'build/img',
			fonts: 'build/fonts',
			dep: 'build/dependencies',
			js: 'build/js',
			json: 'build/json'
		},
		src: {   // отсюда берем чтоб собрать
			html: 'source/html/*.html',
			style: 'source/sass/style.scss',
			img: 'source/img/**/*.*',
			fonts: 'source/fonts/**/*.*',
			dep: 'source/dependencies/**/**/*.*',
			js: 'source/js/main.js',
			json: 'source/json/localizations.json'
		},
		watch: {   //за чем следим 
			html: 'source/html/*.html',
			style: 'source/sass/style.scss',
			img: 'source/img/**/*.*',
			fonts: 'source/fonts/**/*.*',
			dep: 'source/dependencies/**/**/*.*',
			js: 'source/js/main.js',
			json: 'source/json/localizations.json'
		},
		clean: "./build"
	};


	var config = {
		server: {
			baseDir: "./build"
		},
		tunnel: true,
		host: 'localhost',
		port: 9000,
		logPrefix: "evgeny2234"
	};

	gulp.task('clean', function (cb) {
	    return rimraf(path.clean, cb);
	});


	//сборщик html кода
	gulp.task('html:build', function () {
	    return gulp.src(path.src.html) //Выберем файлы по нужному пути
	        .pipe(rigger()) //Прогоним через rigger
	        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
	        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
	});


	//сборщик javascript кода
	gulp.task('js:build', function() {
		return gulp.src(path.src.js) //выбераем main.js
			//.pipe(rigger()) //Прогоним через rigger
	       // .pipe(sourcemaps.init()) //Инициализируем sourcemap
	        //.pipe(uglify()) //Сожмем наш js
	       // .pipe(sourcemaps.write()) //Пропишем карты
	        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
	        .pipe(reload({stream: true})); //И перезагрузим сервер
	});


	//сборщик css кода из sass
	gulp.task('style:build', function () {
	    return gulp.src(path.src.style) //Выберем наш main.scss
	       // .pipe(sourcemaps.init()) //То же самое что и с js
	        .pipe(sass()) //Скомпилируем
	        .pipe(prefixer()) //Добавим вендорные префиксы
	        .pipe(cssmin()) //Сожмем
	       // .pipe(sourcemaps.write())
	        .pipe(gulp.dest(path.build.css)) //И в build
	        .pipe(reload({stream: true}));
	});


	//сборщик для картинок
	gulp.task('image:build', function() {
		return gulp.src(path.src.img) //выборка картинок из указанной директории
			.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()],
				interlaced: true
			}))
			.pipe(gulp.dest(path.build.img))
			.pipe(reload({stream: true}));
	});


	//для симметрии копипастим шрифты

	gulp.task('fonts:build', function() {
	    return gulp.src(path.src.fonts)
	        .pipe(gulp.dest(path.build.fonts))
	});


	//для симметрии копипастим зависимости гальпа

	gulp.task('dep:build', function() {
	    return gulp.src(path.src.dep)
	        .pipe(gulp.dest(path.build.dep))
	});

	gulp.task('json:build', function() {
	    return gulp.src(path.src.json)
	        .pipe(gulp.dest(path.build.json))
	});

	//чистим все, что накомпилили
	


	gulp.task('build', [
		//'clean',
		'html:build',
		'js:build',
		'style:build',
		'image:build',
		'fonts:build',
		'json:build',
		'dep:build'
	])


	gulp.task('watch', function(){
	    watch([path.watch.html], function(event, cb) {
	        gulp.start('html:build');
	    });
	    watch([path.watch.style], function(event, cb) {
	        gulp.start('style:build');
	    });
	    watch([path.watch.js], function(event, cb) {
	        gulp.start('js:build');
	    });
	    watch([path.watch.img], function(event, cb) {
	        gulp.start('image:build');
	    });
	    watch([path.watch.fonts], function(event, cb) {
	        gulp.start('fonts:build');
	    });
	});

	gulp.task('webserver', function () {
    	browserSync(config);
	});


	gulp.task('default', ['build', 'webserver', 'watch']);

