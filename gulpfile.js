const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css( done ) {
    src('src/scss/**/*.scss') // Identificar el archivo .SCSS a compilar
        // .pipe(sourcemaps.init())
        .pipe( plumber())
        .pipe( sass() ) // Compilarlo
        // .pipe( postcss([ autoprefixer(), cssnano() ]) )
        // .pipe(sourcemaps.write('.'))
        .pipe( dest('build/css') ) // Almacenarla en el disco duro
    done();
}


function dev( done ) {
    watch('src/scss/**/*.scss', css);
    // watch('src/js/**/*.js', javascript);
    done();
}
exports.css = css;
exports.dev = dev;