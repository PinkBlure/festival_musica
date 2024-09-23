import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export const js = done => {
    src('src/app/app.js')
        .pipe(dest('build/js')) 

    done()
}

export const css = done => {
    src('src/scss/app.scss', {sourcemaps:true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps: true}))

    done()
}

export const dev = () => {
    watch('src/scss/**/*.scss', css)
    watch('src/app/**/*.js', js)
}

export default series(js, css, dev)