console.log("Hello World Studio Ghibli");

async function obtenerPeliculas() {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const data = await response.json();

    // Ghibli devuelve directamente el array, no usa 'data.results'
    console.log('Películas:', data);
    return data;
}

function pintarPeliculas(peliculas) {
    console.log("Pintando películas:", peliculas);
    let tarjetasHTML = "";

    peliculas.forEach(pelicula => {

        const imageUrl = pelicula.image || 'https://via.placeholder.com/300x450?text=Ghibli';

        tarjetasHTML += `
        <div class="card">
            <img src="${imageUrl}" alt="${pelicula.title}">
            <div class="card-info">
                <h3>${pelicula.title}</h3>
                <p class="species">Director: ${pelicula.director}</p>
                <p class="status">Año: ${pelicula.release_date}</p>
            </div>
        </div>
        `;
    });
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerPeliculas().then(pintarPeliculas);