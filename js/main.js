document.addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById("busqueda");
    const resultados = document.getElementById("resultados");

    function filtrarResultados() {
        const texto = input.value.toLowerCase().trim();
        resultados.innerHTML = ""; 

        if (texto === "") {
            resultados.style.display = "none";
            return;
        }

        const idsEncontrados = Object.keys(dbAnimes).filter(id => {
            const anime = dbAnimes[id];
            
            const nombreA_Buscar = anime.tituloBusqueda || anime.titulo;
            return nombreA_Buscar.toLowerCase().includes(texto) || id.includes(texto);
        });

        if (idsEncontrados.length === 0) {
            resultados.style.display = "block";
            resultados.innerHTML = "<div><p>No se encontraron resultados.</p></div>";
        } else {
            resultados.style.display = "block";
            
            idsEncontrados.forEach(id => {
                const anime = dbAnimes[id];
                
                const enlace = document.createElement("a");
                
                if (anime.urlVieja) {
                    enlace.href = anime.urlVieja;
                } else {
                    enlace.href = `ver.html?id=${id}`;
                }

                const img = document.createElement("img");
                
                img.src = anime.portadaBusqueda || anime.portada;
                img.alt = anime.titulo;

                const textoSpan = document.createElement("span");
                
                textoSpan.textContent = anime.tituloBusqueda || anime.titulo;

                enlace.appendChild(img);
                enlace.appendChild(textoSpan);
                resultados.appendChild(enlace);
            });
        }
    }

    if (input) {
        input.addEventListener("input", filtrarResultados);
    }
});