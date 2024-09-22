import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export const css = done => {
    src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css'))

    done()
}

export const dev = () => {
    watch('src/scss/**/*.scss', css)
}