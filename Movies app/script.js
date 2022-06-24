const cargarPelis = async()=>{
    try{const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}");
    if(respuesta.status=200){
        const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                            <h3 class="titulo">${pelicula.title}</h3>`
                            if(pelicula.vote_average>7.4){
                            peliculas+=   `<div class="cualification verde">${pelicula.vote_average}</div>`
                            }
                            else if(pelicula.vote_average>6.7){
                                peliculas+=   `<div class="cualification amarillo">${pelicula.vote_average}</div>`
                                }
                            else{
                            peliculas+=   `<div class="cualification rojo">${pelicula.vote_average}</div>`
                            }
                    peliculas+=   `<div class="overview_container">
                            <h2 class="overview_title">Overview</h2>
                            <h3 class="overview">${pelicula.overview}</h3>
                        </div>
					</div>
				`;
			});
			document.getElementById('container_pelis').innerHTML = peliculas;
    }
    }
    catch(error){
        console.log(error)
    }
}
cargarPelis()