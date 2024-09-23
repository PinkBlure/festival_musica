const cerrarModal = () => {
    const modal = document.querySelector('.modal')
    modal?.remove()
}

const mostrarImagen = index => {
    const imagen = document.createElement('IMG')
    imagen.src= `src/img/gallery/full/${index}.jpg`
    imagen.alt = 'galeria'

    // Generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    modal.appendChild(imagen)

    // Agregar al html
    const body = document.querySelector('body')
    body.appendChild(modal)
}

const crearGaleria = () => {
    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i=1; i<=CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src= `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'galeria'

        // Event handler
        imagen.onclick = () => {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    crearGaleria()
    
})

