/* js/animes.js */

// IMÁGENES REUTILIZABLES
const recursos = {
    // Estas rutas asumen que estás usando links de internet (Twitter/PBS) como vi en tu código
    sinopsisHeader: "https://pbs.twimg.com/media/GbvX4HlXAAIgKNK?format=png&name=4096x4096",
    fichaHeader: "https://pbs.twimg.com/media/GbvXzIZWkBIACd4?format=png&name=4096x4096",
    capturasHeader: "https://pbs.twimg.com/media/GbvXmECWMAszZPS?format=png&name=4096x4096",
    descargasHeader: "https://pbs.twimg.com/media/GbvXs-LXYAYoARG?format=png&name=4096x4096",
    btnMega: "https://pbs.twimg.com/media/GbyHLvyW0BATwpb?format=png&name=900x900",
    btnDrive: "https://pbs.twimg.com/media/GbyHJ2vWIAYpORQ?format=png&name=medium",
    btnMediafire: "https://pbs.twimg.com/media/Gbyf69LXgBsoN9Y?format=png&name=large",
    btnTerabox: "terabox.png" 

};

// BASE DE DATOS
const dbAnimes = {
    "nana": {
        // Datos para la página (Grandes)
        titulo: "Nana [Dual audio] [47/47 + recaps]",
        portada: "https://pbs.twimg.com/media/GbvW_LgWAAAYY8L?format=jpg&name=large",
        
        // --- DATOS PARA EL BUSCADOR (Pequeños) ---
        tituloBusqueda: "Nana",  // <--- NUEVO: Lo que sale en la lista
        portadaBusqueda: "https://pbs.twimg.com/media/GbtujYJWcBc2Y75?format=jpg&name=4096x4096", // <--- NUEVO: La imagen vertical
        


sinopsis: `
            La historia sigue a Nana Osaki y Nana Komatsu, dos chicas con el mismo nombre que se encuentran por casualidad en un tren<br>
            camino a Tokyo. Debido a una gran nevada el tren tarda más de lo previsto en llegar a su destino y ambas Nanas comienzan a hablar<br>
            durante todo el trayecto hasta que al final de este se separan. Sin embargo, a pesar de que tienen personalidades<br>
            totalmente opuestas, las dos terminan viviendo en el mismo apartamento y van afianzando una fuerte amistad.<br>
            Mientras Nana Osaki persigue el sueño de convertirse en una gran estrella musical del género punk junto a su banda, Black Stones,<br>
            Nana Komatsu va aprendiendo a llevar su independencia y tratando de salir adelante.<br>
            La vida de ambas se ve entrelazada con otra banda rival de nombre Trapnest.
`,
        
        ficha: [
            "Titulo: Nana",
            "Año: 2006",
            "Director: Morio Asaka",
            "Estudio de animación: Madhouse",
            "Demografía: Josei",
            "Género: Drama, música, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 47 + recaps",
            "Resolución: 1920x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 45,78GB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: Yoru no Kousen",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GbvZBLnWABA0Dzi?format=jpg&name=4096x4096",

        // MODO FRANJAS ACTIVADO
        tipoDescarga: "secciones", 

        descargas: [
            {
                titulo: "Capítulos 1-16",
                links: [ { servidor: "drive", url: "https://exe.io/Nana1GD" } ]
            },
            {
                titulo: "Capítulos 17-30",
                links: [ { servidor: "drive", url: "https://exe.io/Nana2GD" } ]
            },
            {
                titulo: "Capítulos 31-44",
                links: [ { servidor: "drive", url: "https://exe.io/Nana3GD" } ]
            },
            {
                titulo: "Capítulos 45-47",
                links: [ { servidor: "drive", url: "https://drive.google.com/drive/folders/1ZO5GK9FO37J9-RVkAizVvPInIR4CLIW0" } ]
            }
        ]
       
    }

,
    "paradise-kiss": {  
        titulo: "Paradise Kiss [Sub Español] [12/12]",
        tituloBusqueda: "Paradise Kiss",
        portada: "https://pbs.twimg.com/media/GdrMx5wXoAA_EH-?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEGWJKWgAAf0M-?format=jpg&name=large",
        
        sinopsis: `
            Yukari es la típica estudiante de instituto que obedece a sus padres y va a clases particulares,<br> 
        pero un día se cruza con un grupito de estudiantes estrafalarios de una famosa escuela de diseño cuyo sueño<br>
        es vender la ropa que ellos mismos diseñan y confeccionan bajo el sello de Paradise Kiss o 'ParaKiss'.<br><br>

        Los chicos necesitan una modelo y piensan que Yukari se ajusta a la perfección a su imagen de la marca ParaKiss.<br>
        Es en ese momento cuando Yukari se detiene a pensar en su pasado y su futuro y se da cuenta de que no está disfrutando de la vida.<br><br>

        ¿Decidirá Yukari romper con los moldes y convertirse en la modelo de estos chicos apasionados y entusiastas?
        `,
        
        ficha: [
            "Titulo: Paradise Kiss",
            "Año: 2005",
            "Director: Osamu Kobayashi",
            "Estudio de animación: Madhouse",
            "Demografía: Josei",
            "Género: Drama, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 1280x720p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 2,72GB",
            "Audio: Japonés",
            "Subs: Español",
            "Fansub: Nanikano Fansub, Tai-Rei Fansubs",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrM1ygW4AMjEcI?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/ParadisekissGD" }
        ]
    }


,
    "sakamichi-no-apollon": {  
        titulo: "Sakamichi no Apollon [Tri audio] [12/12]",
        tituloBusqueda: "Sakamichi No Apollon",
        portada: "https://pbs.twimg.com/media/GcdktjeXIAAJUuZ?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuEAMxWAAkbkgb?format=jpg&name=large",
        
        sinopsis: `
            La historia gira en torno a Nishimi Kaoru, un estudiante de primer año de Preparatoria que tiene que mudarse a Sasebo,<br> 
            en Nagasaki, para vivir con sus familiares después de que su padre muere.
        `,
        
        ficha: [
            "Titulo: Sakamichi No Apollon",
            "Año: 2012",
            "Director: Shinichirō Watanabe",
            "Estudio de animación: MAPPA, Tezuka Productions",
            "Demografía: Josei",
            "Género: Coming-of-age, drama, música, recuentos de la vida, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 1920x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 3,67GB",
            "Audio: Español Latino, Japones e Inglés",
            "Subs: Inglés",
            "Fansub: AnimeL MG",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gcdk3qLWAAA8xGW?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/SakamichiGD" }
        ]
    }

,
    "gokusen": {  
        titulo: "Gokusen [Sub Español] [13/13]",
        tituloBusqueda: "Gokusen",
        portada: "https://pbs.twimg.com/media/Gcdyl9RW0AAlw8I?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuEWM1W8BoaP2k?format=jpg&name=medium",
        
        sinopsis: `
            Kumiko es la nieta de un jefe yakuza. Al fallecer sus padres a muy temprana edad, su abuelo no tuvo descendientes, y por ello,<br>Kumiko es la única heredera del negocio familiar. A pesar de eso, la joven quiere ser maestra, consiguiendo la aprobación<br> 
            de su abuelo pero no la de otros familiares. Kumiko se convierte en maestra de una escuela para hombres,<br> 
            los delincuentes de su clase le apodan Yankumi, a ella le apasiona la enseñanza y les da lecciones de vida<br> 
            aparte de las materias de la escuela; a pesar de ser buena y bien recibida, debe esconder su relación con los yakuza.<br> 
            Es una chica un poco agresiva pero poco a poco avanza su relación con sus estudiantes, llega a protegerlos y cuidarlos,<br> 
            incluso cuando cometen alguna travesura fuera de la escuela.<br> 
            La joven maestra muestra dos vidas: su relación diaria con los yakuza, quienes le llaman Ojou, y su vida escolar, llena de sorpresas.
        `,
        
        ficha: [
            "Titulo: Gokusen",
            "Año: 2004",
            "Director: Masami Sato",
            "Estudio de animación: Madhouse",
            "Demografía: Josei",
            "Género: Comedia, acción, drama",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 640X480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 669,3MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: AniXtasis",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gcdyi1jWUAABaAG?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/GokusenGD" },
            { servidor: "mega", url: "https://exe.io/GokusenMG" }
        ]
    }

,
    "nodame-cantabile": {  
        titulo: "Nodame Cantabile [Dual audiol] [24/24]",
        tituloBusqueda: "Nodame Cantabile",
        portada: "https://pbs.twimg.com/media/GdNrr-lXMAAOtZI?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GbvEk69W4AsvlGB?format=jpg&name=medium",
        
        sinopsis: `
            Shinichi Chiaki es uno de los mejores estudiantes de piano del conservatorio, así como un excelente violinista<br>
            pero su verdadero sueño es seguir los pasos de su mentor, Sebastiano Viera, y convertirse en un director de orquesta.<br> 
            Tras una disputa con su tutor de piano, Chiaki es transferido a las aulas de los "casos perdidos",<br>
            donde conoce a Megumi Noda, alias Nodame. Una chica un tanto extravagante de segundo año intérprete de piano<br>
            y con quien protagonista entabla una extraña relación amistosa. Entre esta relación y la carrera profesional de Chikai<br>
            y los demás miembros del conservatorio irá girando la historia.
        `,
        
        ficha: [
            "Titulo: Nodame Cantabile",
            "Año: 2007",
            "Director: Kenichi Kasai",
            "Estudio de animación: J.C.Staff",
            "Demografía: Josei",
            "Género: Comedia, romance, drama, música, recuentos de la vida",
            "Duración: 25 min por capítulo",
            "Capítulos: 24/24",
            "Resolución: 1920x1080p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 10,53GB",
            "Audio: Español Latino y Japones",
            "Subs: Español",
            "Fansub: camus10x",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdNr4u-XsAAENzD?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/NodamecantabileGD" }
           
        ]
    }

,
    "animal-crossing": {  
        titulo: "Doubutsu no Mori [Español Latino]",
        tituloBusqueda: "Doubutsu no Mori",
        portada: "https://pbs.twimg.com/media/GdmRnPnWMAAhXzi?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD64xyWwAAjDTa?format=jpg&name=large",
        
        sinopsis: `
            Basada en la popular saga de juegos de Nintendo para Nintendo 64, GameCube, DS, Wii y 3DS.<br>
       Ai es una chica independiente que se muda a Pueblo Animal. Se hace amiga de los lugareños tan pronto llega al pueblo.<br> 
       Una noche, caminando por la playa, encuentra un mensaje en una botella.<br> 
       Esto la hace adentrarse en la aventura de plantar abetos alrededor de la aldea para intentar que se cumpla el milagro en vísperas de Navidad.
        `,
        
        ficha: [
            "Titulo: Doubutsu no Mori",
            "Año: 2006",
            "Director: Jouji Shimura",
            "Estudio de animación: OLM, Inc.",
            "Demografía: Kodomo",
            "Género: Drama, comedia, aventura",
            "Duración: 90 min",
            "Capítulos: 1/1",
            "Resolución: 1920x1048p (DVD-RIP)",
            "Tamaño: 1,85GB",
            "Audio: Español Latino",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdmRyztXQAAPl18?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AnicroGD" }
           
        ]
    }

,
    "tobira-wo-akete-1995": {  
        titulo: "Tobira wo Akete (1995) [Sub Español]",
        tituloBusqueda: "Tobira wo Akete (1995)",
        portada: "https://pbs.twimg.com/media/GdrvpROWIAE6CPL?format=jpg&name=small",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNvtS9XcAAak23?format=jpg&name=900x900",
        
        sinopsis: `
            La historia trata sobre una niña con exceso de imaginación que viaja a un mundo donde las formas y los colores se mueven al ritmo de la Pastoral de Beethoven.
        `,
        
        ficha: [
            "Titulo: Tobira wo Akete (1995)",
            "Año: 1995",
            "Director: Koji Morimoto",
            "Estudio de animación: Studio 4°C",
            "Demografía: Kodomo",
            "Género: Drama, fantasía",
            "Duración: 15 min",
            "Capítulos: 1/1",
            "Resolución: 800x608p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 99,73MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Tanoshii Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdrvr4wWwAAjBzN?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/tobiraakete1995GD" }
           
        ]
    }

,
    "meitantei-holmes": {  
        titulo: "Meitantei Holmes [Español] [26/26]",
        tituloBusqueda: "Meitantei Holmes",
        portada: "https://pbs.twimg.com/media/GwP7ZtwXgAEZLxj?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6NSV4W0AASTIw?format=png&name=4096x4096",
        
        sinopsis: `
            Sherlock Holmes es un investigador privado que vive en Londres. Acompañado de su amigo, el doctor Watson, lucha contra los planes de su archienemigo, el profesor Moriarty.<br> Suele ayudar a la policía, liderada por el inspector Lestrade, de Scotland Yard.<br> 
     En cada capítulo de la serie, se enfrenta a un nuevo plan de Moriarty, el cual siempre consigue desbaratar.<br> 
     Éste debe entonces escaparse de la policía, que acaba muchos episodios persiguiéndole, aunque sin llegar a atraparle nunca.<br>
<br>
     Sherlock Holmes es un proyecto conjunto entre la japonesa Tokyo Movie Shinsha y la italiana RAI, de 1981.<br> 
     Seis episodios fueron dirigidos por Hayao Miyazaki, mientras que el resto se deben a Kyosuke Mikuriya.<br>
<br>
     Nos encontramos ante una adaptación en anime de las aventuras de Sherlock Holmes, el personaje creado por Arthur Conan Doyle.<br> 
     En ella, los personajes aparecen como animales con apariencia antropomorfa, mayormente perros, como los propios Holmes y Watson.<br> 
     La serie tiene alguna influencia de la estética steampunk, con aparatos de vapor de apariencia exótica, así como elementos de ciencia ficción.<br>
 <br>           
    Esta edición presenta una remasterización de la obra original junto con el doblaje de la versión española.
        `,
        
        ficha: [
            "Titulo: Meitantei Holmes",
            "Año: 1984",
            "Director: Hayao Miyazaki, Kyōsuke Mikuriya",
            "Estudio de animación: Gallop, TMS Entertainment",
            "Demografía: Kodomo",
            "Género: Acción, aventura, comedia, misterio",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 640x480p (DVD-RIP)",
            "Tamaño: 4,38GB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwP7GErXgAAwqDX?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/meitantei-holmes-TBX" }
           
        ]
    }

,
    "lovely-complex": {  
        titulo: "Lovely Complex [Dual audio] [24/24]",
        tituloBusqueda: "Lovely Complex",
        portada: "https://pbs.twimg.com/media/GccxV3fXIAA__7l?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbt9SQWWsBwRYpL?format=jpg&name=large",
        
        sinopsis: `
            Trata de dos jóvenes: una chica, Koizumi Risa, relativamente alta para la comunidad japonesa (1,72 m);<br> 
            y un chico, Atsushi Ootani, la más baja estatura para un joven japonés (1,56 m).<br> 
            Son conocidos como All Hanshin Kyojin (un grupo de comediantes japoneses, en donde un personaje es alto y otro bajo)<br>
      desde que su profesor empezó a llamarlos así el primer día en el instituto. Desde el principio esto causó un conflicto entre los dos,<br> 
            que acabaron llevándose mal. Como ambos tenían problema en encontrar pareja, Otani, quien se interesó en una de las amigas de Risa<br>
            (Chiharu), al darse cuenta de que a Risa le gustaba un chico de las clases de verano (Suzuki), le propuso dejar sus diferencias<br>
            a un lado para ayudarse mutuamente. A partir de ese entonces empezaron a llevarse mejor incluso cuando peleaban frecuentemente.<br>
            Pero ambos tienen muchas cosas en común, a pesar de su diferencia física. Su cantante favorito es el mismo, "Umibozu";<br> 
            esto los hace más unidos todavía y hace que sus amigos siempre quieran juntarlos como pareja.
        `,
        
        ficha: [
            "Titulo: Lovely Complex",
            "Año: 2007",
            "Director: Kounosuke Uda",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōjo",
            "Género: Comedia, romance, vida escolar",
            "Duración: 25 min por capítulo",
            "Capítulos: 24/24",
            "Resolución: 1440x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 5,16GB",
            "Audio: Japones e Inglés",
            "Subs: Español, Portugués e Inglés",
            "Fansub: Vanifruzhi (montaje, no subtitulado)",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/Gccx0oSWAAAUKtW?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/LovelycomplexGD" },
            { servidor: "mediafire", url: "https://exe.io/LovelycomplexMF" },
            { servidor: "mega", url: "https://exe.io/LovelycomplexMG" }
           
        ]
    }

,
    "megami-paradise": {  
        titulo: "Paraíso Megami [Sub Español e Inglés] [2/2]",
        tituloBusqueda: "Megami Paradise",
        portada: "https://pbs.twimg.com/media/Gbz-1KTXAA8ThDw?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbkcjUFXwAAtQv4?format=jpg&name=900x900",
        
        sinopsis: `
            Cada cierto tiempo la Mamamega de turno debe purificar un ítem mágico creado por los Dioses llamado Astro Star<br>
                   el cual absorbe la maldad del mundo que hay afuera hasta que se llena. Una vez purificado le pasa el titulo a una sucesora.<br>
                   La mujer que está a punto de convertirse en la próxima Mamamega debe elegir a unas sacerdotisas para que la acompañen<br> 
                   y empieza con una chica llamada Lilith, que no puede creer que la hayan seleccionado.<br>
                   Lilith va en busca de las otras dos sacerdotisas pero estas no quieren saben nada.<br>
                   El tema es que en ese momento la ciudad es invadida por varias chicas al servicio de la contraparte maligna de Mamamega, cuya misión es destruir el Astro Star.
        `,
        
        ficha: [
            "Titulo: Paraíso Megami",
            "Alternative Titles: Megami Paradise (english) 女神天国 (japanese)",
            "Año: 1995",
            "Director: Katsuhiko Nishijima",
            "Estudio de animación: Studio Fantasia",
            "Demografía: Shōjo",
            "Género: Fantasía, aventura, comedia",
            "Duración: 30 min por Ova",
            "Ovas: 2/2",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 1,15GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi / Orphan Fansubs",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/GbzW7D-WUA4PNhQ?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/ParaisoMegamiGD" },
            { servidor: "mediafire", url: "https://exe.io/ParaisoMegamiMF" },
            { servidor: "mega", url: "https://exe.io/ParaisoMegamiMG" }
           
        ]
    }

,
    "gokinjo-monogatari-movie": {  
        titulo: "Gokinjo Monogatari la película [Sub Español]",
        tituloBusqueda: "Gokinjo Monogatari la película",
        portada: "https://pbs.twimg.com/media/GdyEiIFWcAEvbHm?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbknZ44X0AACV9J?format=jpg&name=large",
        
        sinopsis: `
            Un recuento alternativo del comienzo de la serie original.<br> 
            Mikako y Tsutomu vivieron uno al lado del otro desde que eran pequeños.<br> 
            Ambos asisten a una escuela de arte, donde Mikako persigue su sueño de ser diseñadora de moda.<br> 
            Formaron un club llamado Akindo con varios de sus amigos.<br> 
            Akindo participa en mercadillos, donde venden sus creaciones: ropa, muñecas y obras de arte.
        `,
        
        ficha: [
            "Titulo: Gokinjo Monogatari the Movie",
            "Año: 1996",
            "Director: Junji Shimizu",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōjo",
            "Género: Comedia, drama, romance",
            "Duración: 30 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x360p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 167,12MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Vanifruzhi",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdyEpE4XUAAzx8R?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/GokinjoMovieGD" },
            { servidor: "mega", url: "https://exe.io/GokinjoMovieMG" }
           
        ]
    }

,
    "banana-fish": {  
        titulo: "Banana Fish [Sub Español] [24/24]",
        tituloBusqueda: "Banana Fish",
        portada: "https://pbs.twimg.com/media/GcdQ2hhWAAAtCq6?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbt-f6AXIBAdd8p?format=jpg&name=4096x4096",
        
        sinopsis: `
            La naturaleza hizo a Ash Lynx un hombre hermoso al que convirtieron en un asesino despiadado y frío.<br>
            Era un niño fugitivo criado como el heredero adoptado, el ejecutor y juguete sexual de “Papa” Dino Golzine, el señor del crimen<br>
            de la Costa Este. Sin embargo, cuando Ash cumple los diecisiete años, decide huir de este reino de poder y riquezas<br>
            para unirse a una banda de matones callejeros. En ese momento conocerá a Eiji Okamura, un joven e inocente fotógrafo<br>
            llegado desde Japón que caerá en la espiral de orgullo, lujuria, ira y orgullo provocada por el nombre en clave “Banana Fish”.
        `,
        
        ficha: [
            "Titulo: Banana Fish",
            "Año: 2018",
            "Director: Hiroko Utsumi",
            "Estudio de animación: MAPPA",
            "Demografía: Shōjo",
            "Género: Drama, acción",
            "Duración: 25 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 1280x720p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 4,68GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Happiness Team",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GcdQzVtXIAAWWah?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/BananafishGD" },
           
        ]
    }

,
    "ai-shite-night": {  
        titulo: "Ai Shite Night [Dual Audio] [42/42]",
        tituloBusqueda: "Ai Shite Night",
        portada: "https://pbs.twimg.com/media/GdhhGjLXQAM44F4?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcC-g_AXIAAscvt?format=jpg&name=large",
        
        sinopsis: `
            Licia es una adolescente que ayuda a su padre en el pequeño restaurante familiar desde que su madre falleció.<br> 
        Un día de lluvia encuentra a un chiquillo de primaria llamado Jorge y le refugia en el restaurante.<br> 
        Cuando el hermano del niño viene a recogerlo, resulta ser el hermano menor de Sergio, el cantante de un popular grupo de rock llamado Bee Hive,<br> 
        que nada más verla se enamora de ella. Un grupo musical en que también se encuentra un buen amigo de Licia, Borja, que también está loco por ella.<br>
<br>
        A partir de entonces, se desarrollará un triángulo amoroso entre los dos miembros del grupo y la dulce camarera,<br> 
        aliñado con las broncas del preocupado padre de Licia porque no le gusta que su niña se junte con "melenudos" que se pintan el pelo,<br>
        las travesuras de Jorge y su rollizo gato durante el tiempo que Licia se tendrá que encargar de él por las giras musicales de Beehive,<br> 
        una chica celosa de la protagonista que está enamorada de Borja...
        `,
        
        ficha: [
            "Titulo: Ai Shite Night",
            "Año: 1983",
            "Director: Osamu Kasai",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōjo",
            "Género: Comedia, romance, drama",
            "Duración: 25 min por capítulo",
            "Capítulos: 42/42",
            "Resolución: 640x480p (VHS-RIP)",
            "Tamaño: 9,66GB",
            "Audio: Español y Japones",
            "Subs: No",
            "Fansub: XeTe, Longinos69",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdhg7SeWcAAYEAp?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AishitenightGD" },
           
        ]
    }


,
    "igano-kabamaru": {  
        titulo: "Igano Kabamaru [Sub Español] [24/24]",
        tituloBusqueda: "Igano Kabamaru",
        portada: "https://pbs.twimg.com/media/GdmqJQDXoAAmDUu?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD8X-pXAAAO7Pz?format=jpg&name=medium",
        
        sinopsis: `
            El protagonista es un joven ninja de Iga llamado Kagemaro, apodado Kabamaru por su apetito insaciable.<br> 
        Después de la muerte de su estricto abuelo y ninja sensei, Kabamaru se muda a Tokyo con una antigua amiga de su abuelo.<br> 
        Kabamaru se debe ajustar a un estilo de vida urbano después de haber vivido toda su infancia en las montañas.
        `,
        
        ficha: [
            "Titulo: Igano Kabamaru",
            "Año: 1983",
            "Director: Tameo Kohanawa",
            "Estudio de animación: Group TAC, TOHO",
            "Demografía: Shōjo",
            "Género: Acción, comedia, romance, aventura",
            "Duración: 25 min por capítulo",
            "Capítulos: 24/24",
            "Resolución: 640x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 5,07GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdmqQ0vWgAE5-MK?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/IganoGD" },
           
        ]
    }

,
    "kaichou-wa-maid-sama!": {  
        titulo: "Kaichou wa Maid-sama! [Sub Español] [26/26 + Especiales]",
        tituloBusqueda: "Kaichou wa Maid-sama!",
        portada: "https://pbs.twimg.com/media/Gdm4E2nWUAArC5V?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD9-_WWMAAtTWh?format=jpg&name=large",
        
        sinopsis: `
            La Secundaria Seika era antes una secundaria para hombres, pero recientemente ha pasado a ser un colegio mixto.<br> 
            Con el pequeño número de alumnas, Ayuzawa Misaki toma en sus manos el poder de hacerlas sentir seguras<br> 
            convirtiendose en la presidenta del consejo estudiantil. Luego de ser elegida presidenta, se gana muy mala fama como dictadora feminista<br> 
            entre los alumnos varones, quienes la odian; pero a pesar de su apariencia ruda, trabaja en Maid Caffé Latte a medio tiempo.<br> 
            Desafortunadamente, Usui Takumi, el chico más popular del colegio -no solo entre las chicas, sino también entre los chicos-<br> 
            toma interés en ella luego de verla vestida con su uniforme de maid, lo que causa situaciones muy divertidas y hasta romanticas.
        `,
        
        ficha: [
            "Titulo: Kaichou wa Maid-sama!",
            "Año: 2010",
            "Director: Hiroaki Sakurai",
            "Estudio de animación: J.C.Staff",
            "Demografía: Shōjo",
            "Género: Romance, escolar, comedia, drama",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26 + Especiales",
            "Resolución: 1280x720p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 2,71GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Jisedai no Fansub",
            "Servidor: Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gdm02u0XAAANo9g?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "mega", url: "https://exe.io/KaichomaidMG" },
           
        ]
    }

,
    "nayuta": {  
        titulo: "Nayuta [Sub Español]",
        tituloBusqueda: "Nayuta",
        portada: "https://pbs.twimg.com/media/GdqLBKYXUAALp2W?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD_2BxXkAAuDY5?format=jpg&name=4096x4096",
        
        sinopsis: `
            En la Tierra, un niño llamado Kiro, descubre en una cueva abandonada, un esqueleto que aún tiene puesta en la cabeza una corona de oro.<br> 
            Kiro descubre que la corona potencia sus cualidades extrasensoriales y su fuerza psíquica,<br> 
            pero también le permite observar que hay unos seres extraterrestres que están invadiendo la Tierra y que sólo se ven con la corona puesta.<br>
<br>
            En su persecución, Kiro huye con su madre y se teletransporta a Japón, encontrándose en su camino con Nayuta, una joven estudiante que le ofrece ayuda.<br>Por esto, los invasores atacan a Nayuta y asesinan a su padres, dando inicio a una serie de batallas y encuentros mortales,<br> 
            que mostrarán el origen de este antiguo conflicto.
        `,
        
        ficha: [
            "Titulo: Nayuta",
            "Año: 1986",
            "Director: Masami Hata",
            "Estudio de animación: Circus Production",
            "Demografía: Shōjo",
            "Género: Acción, ciencia ficción, drama",
            "Duración: 80 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 810MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: KEY-ANIME",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdqLE3HWsAEiQCQ?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/NayutaGD" },
            { servidor: "mega", url: "https://exe.io/NayutaMG" },
           
        ]
    }

,
    "sukeban-deka": {  
        titulo: "Sukeban Deka [Tri Audio] [2/2]",
        tituloBusqueda: "Sukeban Deka",
        portada: "https://pbs.twimg.com/media/GdrjFAaW0AAPHLA?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEMxUsX0AA4fwk?format=jpg&name=large",
        
        sinopsis: `
            Después de haber pasado un tiempo en un centro penitenciario de menores, la delincuente adolescente Saki Asamiya<br> 
     tiene la oportunidad de redimirse y retrasar la posible sentencia de muerte de su madre trabajando como policía encubierta.<br>
<br>
     Armada con nada más que un yo-yo especial, la tarea de Saki es regresar a su escuela secundaria e investigar sobre la corrupción<br> 
     y las misteriosas muertes entre los estudiantes. Pero para descubrir qué sucede en la escuela<br> 
     deberá enfrentarse a las ricas y poderosas hermanas Mizuchi, que tomaron el control de esta después de que Saki fuera expulsada.
        `,
        
        ficha: [
            "Titulo: Sukeban Deka",
            "Año: 1991",
            "Director: Hirota Takeshi",
            "Estudio de animación: Sido Limited",
            "Demografía: Shōjo",
            "Género: Acción, misterio, delicuentes",
            "Duración: 50 min por Ova",
            "Ovas: 2/2",
            "Resolución: 704x478p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 1,82GB",
            "Audio: Español, Japones e Inglés",
            "Subs: Español, Italiano e Inglés",
            "Fansub: Key-Anime Fansub y Anime Cronos",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrjI0vXcAAVLe0?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/SukebandekaGD" },
           
        ]
    }

,
    "tenshi-nanka-ja-nai": {  
        titulo: "Tenshi Nanka ja Nai [Sub Español]",
        tituloBusqueda: "Tenshi Nanka ja Nai",
        portada: "https://pbs.twimg.com/media/GdroD2MXkAAU_Ud?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNuY6JXIAACSvE?format=jpg&name=medium",
        
        sinopsis: `
             Midori es una estudiante de una escuela nueva. Elegida como miembro del primer consejo estudiantil,<br> 
     Midori y el resto de oficiales deciden hacer un Festival Escolar.<br><br>

     A Midori le gusta Akira, quien le ayudó en su discurso de elección.<br> 
     Le emociona la idea de trabajar en el festival, en especial por que va a trabajar con Akira.
        `,
        
        ficha: [
            "Titulo: Tenshi Nanka ja Nai",
            "Año: 1994",
            "Director: Hiroko Tokita",
            "Estudio de animación: Group TAC",
            "Demografía: Shōjo",
            "Género: Comedia, drama, romance",
            "Duración: 30 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 307,87MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdroHzrX0AAE188?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/Tenshinanka" },
           
        ]
    }

,
    "hikari-no-densetsu": {  
        titulo: "Hikari no Densetsu [Dual Audio] [19/19]",
        tituloBusqueda: "Hikari no Densetsu",
        portada: "https://pbs.twimg.com/media/Gdsg_B4W8AA4Vnc?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNxD68WAAA4bfC?format=jpg&name=medium",
        
        sinopsis: `
             La colegiala Hikari tiene dos amores: la gimnasia rítmica y Ohishi, un compañero de escuela que es uno de los mejores gimnastas de su liga.<br> 
    Pero Hikari no es la mejor gimnasta de su escuela y Hatsuki, la mejor gimnasta, también ama a Ohishi.<br> 
    Natsukawa, el amigo de la infancia de Hikari, toca en una banda llamada Mr.D. A lo largo de los años, ha llegado a amar a Hikari muy profundamente.<br> 
    ¿Ganará Hikari el amor de Ohishi? ¿O Natsukawa le ganará?<br>
    Cuando un campeón de gimnasia femenina visita Hikari anhela participar en un campeonato mundial juvenil de gimnasia.<br> 
    ¿Adónde la llevará su sueño?
        `,
        
        ficha: [
            "Titulo: Hikari no Densetsu",
            "Año: 1986",
            "Director: Tomomi Mochizuki",
            "Estudio de animación: Tatsunoko Production",
            "Demografía: Shōjo",
            "Género: Deporte, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 25/25",
            "Resolución: 720x528p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 4,52GB",
            "Audio: Español Y Japones",
            "Subs: Francés e Inglés",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdsg3fgWMAI3k4U?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/HikarinodeGD" },
           
        ]
    }

,
    "ace-wo-nerae!": {  
        titulo: "Ace wo Nerae! [Dual Audio] [26/26]",
        tituloBusqueda: "Ace wo Nerae!",
        portada: "https://pbs.twimg.com/media/GwPtB1_XkAAsmrd?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6AY_EXEAAEjj4?format=png&name=small",
        
        sinopsis: `
             Marta es una chica de secundaria que lucha por convertirse en una gran tenista. 
            Empieza a jugar al tenis en secundaria debido a la fascinación que le profesa a una alumna mayor, Rosa. 
            Rosa, la mejor jugadora en el equipo, es conocida como "Madame Butterfly" dada su gracia en la cancha de tennis.
            Al equipo llega un nuevo entrenador, quien decide premiar el esfuerzo de Marta y ponerla en el equipo titular aunque sea de primer curso. 
            Esto le resulta ofensivo al resto de las componentes del equipo, que empiezan a odiarla.
        `,
        
        ficha: [
            "Titulo: Ace wo Nerae!",
            "Año: 1973",
            "Director: Osamu Dezaki",
            "Estudio de animación: Tokyo Movie Shinsha",
            "Demografía: Shōjo",
            "Género: Drama, romance, tennis",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 640x480p (DVD-RIP)",
            "Tamaño: 5,93GB",
            "Audio: Español Y Japones",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwPswtrWEAAZ5LK?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/ace-wo-nerae-TBX" },
           
        ]
    }

,
    "peach-girl": {  
        titulo: "Peach Girl [Dual Audio] [25/25]",
        tituloBusqueda: "Peach Girl",
        portada: "https://pbs.twimg.com/media/GwK6eyAXQAIAqHJ?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6B8akWIAA3Zho?format=png&name=large",
        
        sinopsis: `
             Momo es una chica de instituto guapísima, pelirroja y con una piel morena preciosa.<br> 
            La gente tiende a juzgarla sólo por su apariencia, y piensan que es una chica fácil; en realidad, es más romántica de lo que parece,<br> 
            pero claro, sus compañeros de clase no se fijan en eso. Está enamorada de Toji desde que empezaron secundaria. A su vez, Kairi,<br> 
            el chico más popular del instituto, va tras ella. Sae es el polo opuesto de Momo: tiene piel blanca y parece una chica tímida pero en realidad,<br> 
            le gusta ligarse a los novios de otras...
        `,
        
        ficha: [
            "Titulo: Peach Girl",
            "Año: 2005",
            "Director: Hiroshi Ishiodori",
            "Estudio de animación: Studio Comet",
            "Demografía: Shōjo",
            "Género: Drama, romance, vida escolar",
            "Duración: 25 min por capítulo",
            "Capítulos: 25/25",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 2,74GB",
            "Audio: Español Y Japones",
            "Subs: Español",
            "Fansub: Vanifruzhi (Montaje, no subtítulos)",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwK48bxW4AAo5Lt?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/peach-girl-TBX" },
           
        ]
    }

,
    "yamato-nadeshiko-shichihenge": {  
        titulo: "Yamato Nadeshiko Shichihenge♥ [Sub Español] [25/25]",
        tituloBusqueda: "Yamato Nadeshiko Shichihenge♥",
        portada: "https://pbs.twimg.com/media/GwUwbpKX0AsQx-C?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6DAFhWwAEkumZ?format=png&name=large",
        
        sinopsis: `
             Sunako fue llamada "fea" por el único chico a quien le declaró su amor.<br> 
            Este incidente afecta completamente su vida y, como consecuencia, Sunako huye de todo tipo de belleza.<br> 
            Su tía, que es dueña de una bella mansión en donde viven cuatro apuestos chicos estudiantes, preocupada por el cambio repentino en la vida de Sunako,<br> 
            le ofrece un trato a los chicos: si ellos convierten a su sobrina en una "perfect lady" (o como se dice en Japón "Yamato Nadeshiko")<br>
            podrán vivir en dicha mansión gratis, si por el contrario no lo logran deberán pagar el triple de la renta.<br> 
            Estos chicos se las tienen que arreglar para que Sunako se convierta en una belleza, ya que ella no tiene intención de hacerlo.<br> 
            A medida que avanza la historia hacen creer a la tía de Sunako que su sobrina se ha convertido en una señorita, aunque, en realidad, Sunako no ha cambiado mucho.
        `,
        
        ficha: [
            "Titulo: Yamato Nadeshiko Shichihenge♥",
            "Año: 2006",
            "Director: Shinichi Watanabe",
            "Estudio de animación: Nippon Animation",
            "Demografía: Shōjo",
            "Género: Comedia, harem",
            "Duración: 25 min por capítulo",
            "Capítulos: 25/25",
            "Resolución: 800x592p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 4,17GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: AnimeRakuen",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwUwVMYXsAMiC7H?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/yamato-nadeshiko-TBX" },
           
        ]
    }

,
    "shoujo-kakumei-utena": {  
        titulo: "Shoujo Kakumei Utena [Sub Español] [39/39]",
        tituloBusqueda: "Shoujo Kakumei Utena",
        portada: "https://pbs.twimg.com/media/GwVarqDWoAAsq3Z?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GwVW6prWcAEvrQe?format=jpg&name=large",
        
        sinopsis: `
             Los padres de Utena Tenjou murieron cuando aún era una niña.<br> 
            En ese momento, un príncipe apareció y le regaló un anillo con el sello real con una rosa.<br> 
            Dijo a Utena que conservara el anillo y le prometió que se volverían a ver algún día.<br> 
            Utena quedó tan prendada de él que decidió convertirse ella misma en príncipe.<br>
<br>
            Ahora Utena ha crecido. Estudia en la Academia Ohtori y lleva una versión personal de un uniforme de chico.<br> 
            Sigue esperando encontrar algún día a su príncipe, pero mientras tanto, se dedica a salvar a damiselas en apuros<br>
            y luchar con la espada con los mejores espadachines de la Academia Ohtori.<br> 
            Cuando inesperadamente Utena gana la "Novia Rosa" en un duelo, se encuentra en medio de algo extraño... algo que quizá le conduzca hacia su príncipe.
        `,
        
        ficha: [
            "Titulo: Shoujo Kakumei Utena",
            "Año: 1997",
            "Director: Kunihiko Ikuhara",
            "Estudio de animación: J.C.Staff",
            "Demografía: Shōjo",
            "Género: Drama, romance, shojo-ai, shonen-ai",
            "Duración: 25 min por capítulo",
            "Capítulos: 39/39",
            "Resolución: 960x720p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 45,20GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Yoru no Kousen",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwVWkKZXEAID6oT?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/utena-girl-revolution-TBX" },
           
        ]
    }

,
    "corrector-yui": {  
        titulo: "Corrector Yui [Español Latino] [52/52]",
        tituloBusqueda: "Corrector Yui",
        portada: "https://pbs.twimg.com/media/GdippNCXkAANyZJ?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcDCyTUW8AA6wZn?format=jpg&name=4096x4096",
        
        sinopsis: `
             Yui Kasuga es una chica normal. Un día se le aparece I.R. que es un programa corrector.<br> 
    I.R. la introduce en el ordenador para que le ayude a encontrar a los otros siete programas correctores creados por el profesor Inukai.<br> 
    La misión de los correctores es vencer a Grosser y sus cuatro corruptores (que intentan controlar a la humanidad mediante la RedCom),<br> 
    para vencerles utilizan la ayuda de Yui o "Corrector Yui".
        `,
        
        ficha: [
            "Titulo: Corrector Yui",
            "Año: 1999",
            "Director: Yuji Mutoh",
            "Estudio de animación: Nippon Animation",
            "Demografía: Shōjo",
            "Género: Aventura, ciencia ficción, comedia",
            "Duración: 25 min por capítulo",
            "Capítulos: 52/52",
            "Resolución: 704x396p (DVD-RIP)",
            "Tamaño: 3,99GB",
            "Audio: Español Latino",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdipunsWoAAifsR?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/CorrectoryuiGD" },
           
        ]
    }

,
    "school-rumble": {  
        titulo: "School Rumble [Dual Audio] [26/26]",
        tituloBusqueda: "School Rumble",
        portada: "https://pbs.twimg.com/media/Gb0dGbRWAA0Vg44?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbtyj1CWICIGole?format=jpg&name=4096x4096",
        
        sinopsis: `
             La serie se ubica en el género comedia romántica, con escenas en la historia bastante exageradas.<br> 
            La protagonista femenina es Tenma Tsukamoto, estudiante de segundo curso que se siente atraída por Ooji Karasuma,<br> 
            un excéntrico chico que es realmente especial por sus extrañas formas de actuar.
        `,
        
        ficha: [
            "Titulo: School Rumble",
            "Año: 2004",
            "Director: Shinji Takamatsu",
            "Estudio de animación: Studio Comet",
            "Demografía: Shōnen",
            "Género: Comedia, vida escolar",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 6,35GB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: Dokusai",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gb0dMNDWQAQcWXr?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/SchoolRumbleGD" },
           
        ]
    }

,
    "gto": {  
        titulo: "Great Teacher Onizuka [Dual Audio] [43/43]",
        tituloBusqueda: "Great Teacher Onizuka",
        portada: "https://pbs.twimg.com/media/Gb9M0FmW8AA9zg-?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbt8EeEWUAMFsP8?format=jpg&name=large",
        
        sinopsis: `
             Duro por fuera, todo corazón por dentro, Onizuka decidió hacerse profesor de instituto para tranquilizar un poco su vida...<br> 
    o al menos eso creía. GTO (Great Teacher Onizuka), es la divertida historia de Onizuka, un antiguo miembro de una banda de motoristas<br>
        que se hace profesor para cambiar su vida y para... ¿conocer chicas?. Utilizando sus costumbres callejeras<br> 
        para tratar con los colegas, estudiantes y alborotadores, Onizuka descubre que todavía tiene muchas lecciones que aprender.
        `,
        
        ficha: [
            "Titulo: Great Teacher Onizuka",
            "Año: 1999",
            "Director: Naoyasu Hanyu, Noriyuki Abe",
            "Estudio de animación: Pierrot",
            "Demografía: Shōnen",
            "Género: Comedia, acción, yakuza, vida escolar",
            "Duración: 25 min por capítulo",
            "Capítulos: 43/43",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 18,34GB",
            "Audio: Japones e Inglés",
            "Subs: Español e Inglés",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gb9NV-VWQAEMPbo?format=jpg&name=4096x4096",


        // MODO FRANJAS ACTIVADO
        tipoDescarga: "secciones", 

        descargas:[ 
             
                {
                titulo: "Capítulos 1-32",
                links: [ { servidor: "drive", url: "https://exe.io/Gto1GD" } ]
            },

 {
                titulo: "Capítulos 33-43",
                links: [ { servidor: "drive", url: "https://exe.io/Gto2GD" } ]
            },
           
        ]
    }

,
    "shonan-junai-gumi": {  
        titulo: "Shonan Junai Gumi! [Sub Español] [5/5]",
        tituloBusqueda: "Shonan Junai Gumi!",
        portada: "https://pbs.twimg.com/media/Gb9NprwW0AAd-kZ?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbt8hSfWMAMwqLM?format=jpg&name=large",
        
        sinopsis: `
             Shounan Junai Gumi trata de las experiencias del dúo "Onibaku" (que podría traducirse como explosión demoniaca),<br> 
            Eikichi Onizuka y Ryuji Danma, dos jóvenes bosozoku (bandas de moteros japoneses), conocidos y temidos por su tenacidad<br> 
            y ferocidad en la lucha. Este estilo de vida, sin embargo, hace que no tengan mucho éxito con el sexo opuesto, de modo que intentan<br> 
            cambiar sus vidas. Mientras se desarrolla la historia conocemos a otros personajes, <br> 
            amigos o enemigos, que se topan con los protagonistas, envolviéndose en locas historias.
        `,
        
        ficha: [
            "Titulo: Shonan Junai Gumi!",
            "Año: 1994",
            "Director: Katsumi Minoguchi (OVA 1, OVA 2), Gyou Suzuki (OVA 3), Takeshi Yamaguchi (OVA 4), Noboru Matsui (OVA 5)",
            "Estudio de animación: J.C.Staff",
            "Demografía: Shōnen",
            "Género: Comedia, vida escolar, acción",
            "Duración: 50 min por ova",
            "Ovas: 5/5",
            "Resolución: 640X480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 2,03GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gb9Nfc0WgAAnAJK?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/JunaigumiGD" },
            { servidor: "mega", url: "https://exe.io/JunaigumiMG" },
           
        ]
    }

,
    "get-backers": {  
        titulo: "Get Backers [Español Latino] [49/49]",
        tituloBusqueda: "Get Backers",
        portada: "https://pbs.twimg.com/media/GcdNZ1SXcAA9ztZ?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbt9xDjXYA4BZWJ?format=jpg&name=large",
        
        sinopsis: `
             Mido Ban y Amano Ginji son dos compañeros con una empresa un tanto especial, los “GetBackers“.<br>
            Cualquier cosa que necesites recuperar, ellos te la consiguen, ya sea un gatito perdido, un anillo o al amor de tu vida.<br> 
            La oferta puede parecer interesante, pero se vuelve mejor al conocer las habilidades de ambos personajes.<br> 
            Ban tiene la capacidad de hacer ver a sus rivales una ilusión cualquiera durante un minuto,<br> 
            y Ginji es algo así como una batería gigante capaz de dar calambrazos al primero que se ponga por medio.<br> 
            Ban es el típico tío misterioso y que va de duro, siendo Ginji su contrapartida: despistado y despreocupado.
        `,
        
        ficha: [
            "Titulo: Get Backers",
            "Año: 2002",
            "Director: Kazuhiro Furuhashi, Keitaro Motonaga",
            "Estudio de animación: Studio DEEN",
            "Demografía: Shōnen",
            "Género: Acción, comedia, ciencia ficción",
            "Duración: 25 min por capítulo",
            "Capítulos: 49/49",
            "Resolución: 720x480p (DVD-RIP)",
            "Tamaño: 4,79GB",
            "Audio: Español Latino",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GcdNUS2WgAAiaHz?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/GetBackersGD" },
  
        ]
    }

,
    "trigun": {  
        titulo: "Trigun [Español Latino] [26/26]",
        tituloBusqueda: "Trigun",
        portada: "https://pbs.twimg.com/media/GcdbElFXkAA-AN3?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuCqeZWYA403Bl?format=jpg&name=4096x4096",
        
        sinopsis: `
             Mido Ban y Amano Ginji son dos compañeros con una empresa un tanto especial, los “GetBackers“.<br>
            Cualquier cosa que necesites recuperar, ellos te la consiguen, ya sea un gatito perdido, un anillo o al amor de tu vida.<br> 
            La oferta puede parecer interesante, pero se vuelve mejor al conocer las habilidades de ambos personajes.<br> 
            Ban tiene la capacidad de hacer ver a sus rivales una ilusión cualquiera durante un minuto,<br> 
            y Ginji es algo así como una batería gigante capaz de dar calambrazos al primero que se ponga por medio.<br> 
            Ban es el típico tío misterioso y que va de duro, siendo Ginji su contrapartida: despistado y despreocupado.
        `,
        
        ficha: [
            "Titulo: Trigun",
            "Año: 1998",
            "Director: Satoshi Nishimura",
            "Estudio de animación: Madhouse",
            "Demografía: Shōnen",
            "Género: Space western, ciencia ficción",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 640x480p (DVD-RIP)",
            "Tamaño: 1,17GB",
            "Audio: Español Latino",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gcda90VXgAAd9CA?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/TrigunGD" },
  
        ]
    }

,
    "abashiri-ikka": {  
        titulo: "Abashiri Ikka [Sub Español] [4/4]",
        tituloBusqueda: "Abashiri Ikka",
        portada: "https://pbs.twimg.com/media/Gcd4hnPWMAA59Xh?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuFYKgXUAQuqNQ?format=jpg&name=large",
        
        sinopsis: `
             La más famosa y terrible familia de mafiosos en todo el mundo está a punto de disolverse en cuanto sea revelado<br> 
         el misterioso secreto de su tercer miembro, Kikunosuke, el más poderoso de los Abashiri. Sin embargo, la semi-pacífica vida<br> 
         de la familia Abashiri se complicará cuando Kikunosuke ingrese en una de las más prestigiosas escuelas de élite, <br> 
         donde en lugar de aprender arte y cultura, los estudiantes deben aprender las más peligrosas técnicas de lucha y asesinato a manos<br> de una sarta de crueles maestros psicópatas. Sólo unos cuantos alumnos logran sobrevivir a este infierno de escuela; claro que,<br> 
         en esta ocasión, el nuevo estudiante será el más terrible de los Abashiri y las cosas ya no serán igual.
        `,
        
        ficha: [
            "Titulo: Abashiri Ikka",
            "Año: 1991",
            "Director: Takashi Watanabe",
            "Estudio de animación: Tokyo Kids",
            "Demografía: Shōnen",
            "Género: Comedia, acción",
            "Duración: 70 min",
            "Capítulos: 4/4(4x1)",
            "Resolución: 640X480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 697,8MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gcd4dihWgAAta5j?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AbashirikkaGD" },
            { servidor: "mega", url: "https://exe.io/AbashirikkaMG" },
  
        ]
    }

,
    "kyou-kara-ore-wa": {  
        titulo: "Kyou Kara Ore Wa!! [Sub Español e Inglés] [10/10]",
        tituloBusqueda: "Kyou Kara Ore Wa!!",
        portada: "https://pbs.twimg.com/media/Gcd9yflXoAAXOoL?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbvD40PXQAM7qar?format=jpg&name=medium",
        
        sinopsis: `
             Dos estudiantes de secundaria, Mitsuhashi Takashi e Ito Shinji, se entrenan para convertirse en los delincuentes más fuertes de Japón.
        `,
        
        ficha: [
            "Titulo: Kyou Kara Ore Wa!!",
            "Año: 1993",
            "Director: Takeshi Mori, Masami Annō",
            "Estudio de animación: Pierrot",
            "Demografía: Shōnen",
            "Género: Acción, comedia, pandilleros",
            "Duración: 50 min por ova",
            "Ovas: 10/10",
            "Resolución: 694x568p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 4,87GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: tuporejemplo",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gcd9uvzW4AAIdKg?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/KyoukaraorewaGD" },
  
        ]
    }

,
    "death-note": {  
        titulo: "Death Note [Español] [37/37]",
        tituloBusqueda: "Death Note",
        portada: "https://pbs.twimg.com/media/GdNju-TWsAEphpy?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GbvEIFsX0AkQ1Zu?format=jpg&name=large",
        
        sinopsis: `
             Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad:<br> 
            si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión<br> 
            para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective,<br> 
            intenta descifrar el misterio que rodea a todas estas muertes.
        `,
        
        ficha: [
            "Titulo: Death Note",
            "Año: 2006",
            "Director: Tetsurō Araki",
            "Estudio de animación: Madhouse",
            "Demografía: Shōnen",
            "Género: Misterio, sobrenatural, thriller",
            "Duración: 25 min por capítulo",
            "Capítulos: 37/37",
            "Resolución: 720x400p (DVD-RIP)",
            "Tamaño: 2,12GB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdNkGKAWgAAfnAZ?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/DeathnoteGD" },
  
        ]
    }

,
    "angel-densetsu": {  
        titulo: "Angel Densetsu [Sub Español] [2/2]",
        tituloBusqueda: "Angel Densetsu",
        portada: "https://pbs.twimg.com/media/GdNl111XcAA-YaB?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbvEYZ7WMAkC0lm?format=jpg&name=900x900",
        
        sinopsis: `
             Seiichirō Kitano es un joven que acaba de ser transferido a la preparatoria Hekiku.<br> 
                    Si bien tiene una personalidad correcta y amable, posee un grave problema: tiene una cara demoníaca.
        `,
        
        ficha: [
            "Titulo: Angel Densetsu",
            "Año: 1996",
            "Director: Yukio Kaizawa",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōnen",
            "Género: Comedia, acción, vida escolar",
            "Duración: 50 min",
            "Ovas: 2/2(2x1)",
            "Resolución: 700X480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 370,8MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdNk-C9XEAENZgY?format=jpg&name=large",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AngeldensetsuGD" },
            { servidor: "mega", url: "https://exe.io/AngeldensetsuMG" },
  
        ]
    }

,
    "cleopatra-dc": {  
        titulo: "Cleopatra DC [Sub Español] [3/3]",
        tituloBusqueda: "Cleopatra DC",
        portada: "https://pbs.twimg.com/media/GdNx5GwWUAAtkU5?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbvEunWXYBINtiF?format=jpg&name=medium",
        
        sinopsis: `
             El Grupo Cleopatra Corns, alias Cleopatra DC, es un poderoso conglomerado que controla gran parte de la economía<br> 
                 de los Estados Unidos, casi tan poderoso como el mismísimo gobierno del mismo país.<br> 
                 En la cima de la organización esta la bella, lista y valiente Cleo, la joven líder del grupo.<br> 
                 Esto es bueno, ya que significa que puede lidiar con las cuentas que ocasionan los aviones que se estrellan en su habitación.<br>
                 Han sufrido de robos de artefactos, secuestros corporativos, y proyectos cyborg ultra-secretos y la suerte de Cleo apenas empeora.
        `,
        
        ficha: [
            "Titulo: Cleopatra DC",
            "Año: 1989",
            "Director: Naoyuki Yoshinaga (eps 1-2), Hiroyuki Ebata (ep 3)",
            "Estudio de animación: J.C.Staff",
            "Demografía: Shōnen",
            "Género: Comedia, acción, ecchi",
            "Duración: 30 min por ova",
            "Ovas: 3/3",
            "Resolución: 720X480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 1,1GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Freelancesubs",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdNxxl2WcAAkKru?format=jpg&name=large",

        descargas: [
            { servidor: "drive", url: "https://exe.io/CleopatraGD" },
            { servidor: "mega", url: "https://exe.io/CleopatraMG" },
  
        ]
    }

,
    "aoki-densetsu-shoot!": {  
        titulo: "Aoki Densetsu Shoot! [Dual Audio] [58/58]",
        tituloBusqueda: "Aoki Densetsu Shoot!",
        portada: "https://pbs.twimg.com/media/GdhnH5FW4AAuyd8?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcC-w77WgAAFVaT?format=jpg&name=medium",
        
        sinopsis: `
             Toshi Tanaka, Kazuhiro Hiramatsu y Kenji Shiraishi eran "el trío de oro" en su equipo de fútbol cuando estaban en la secundaria baja.<br> 
         Al pasar a secundaria alta, los tres se encuentran en el instituto Kakegawa, donde el año anterior había jugado la gran estrella juvenil Yoshiharu Kubo.<br> Aunque al principio parece difícil reunir a los tres amigos en el club de fútbol, entre Toshi y Kazumi Endo, la amiga que desde la infancia<br>
        los animaba a los tres en sus partidos, consiguen convencerlos. Con el regreso de Kubo al equipo (a pesar de estar gravemente enfermo),<br> 
        la dirección del segundo capitán, Atsushi Kamiya, y la incorporación del "trío de oro" al completo,<br>
        el Kakegawa tiene muchas posibilidades de lograr el torneo intercolegial. Pero para Toshi, el fútbol no es lo único.<br> 
        Está enamorado de Kazumi. Al igual que Kazuhiro. ¿Cómo se solucionará el triángulo amoroso?<br> 
       ¿Lograrán Kubo y los principiantes llevar al equipo al campeonato?
        `,
        
        ficha: [
            "Titulo: Aoki Densetsu Shoot!",
            "Año: 1993",
            "Director: Daisuke Nishio",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōnen",
            "Género: Comedia, Deporte, drama, escolar",
            "Duración: 25 min por capítulo",
            "Capítulos: 58/58",
            "Resolución: 640x480p (VHS-RIP)",
            "Tamaño: 13,25GB",
            "Audio: Español y Japones",
            "Subs: No",
            "Fansub: XeTe",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdhnkBtWwAAsBnI?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/ShootGD" },
  
        ]
    }

,
    "ashita-no-eleven-tachi": {  
        titulo: "Ashita no Eleven-tachi [Español]",
        tituloBusqueda: "Ashita no Eleven-tachi",
        portada: "https://pbs.twimg.com/media/GdhqiGQWAAAxCrL?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcC_BMqWoAA7c3B?format=jpg&name=small",
        
        sinopsis: `
             A un chico de la granja con una velocidad increíble para correr se le pide que se una a un equipo nacional de fútbol recién formado<br> 
        y descubre un talento natural para el juego.<br>
        La película está inspirada en la celebración del campeonato mundial de fútbol en Japón ese año.
        `,
        
        ficha: [
            "Titulo: Ashita no Eleven-tachi",
            "Año: 1979",
            "Director: Kozo Morishita",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōnen",
            "Género: Deporte, drama",
            "Duración: 70 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (VHS-RIP)",
            "Tamaño: 513MB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdhqc2mW8AA0Yh1?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AshitanoelevenGD" },
  
        ]
    }

,
    "assemble-insert": {  
        titulo: "Assemble Insert [Sub Español] [2/2]",
        tituloBusqueda: "Assemble Insert",
        portada: "https://pbs.twimg.com/media/Gdhxb44WsAAXsr8?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcC_pqLWMAATDsy?format=jpg&name=medium",
        
        sinopsis: `
             Los polis locales tienen un problema: la semilla del demonio - una banda pequeña pero asombrosamente capaz con un líder carismático.<br> 
        Sus trajes mecha les permiten emprender crímenes espectaculares actuando violentamente en la ciudad y humillando totalmente a la policía local.<br><br>

        Desesperado, el cuerpo de policía crea una rama especial para tratar con ellos. Sin embargo, estos desafortunados no tienen mejores resultados<br> 
        que la policía regular y la gente se vuelven contra ellos. Si pudieran frustrar los planes de la semilla del demonio solo una vez,<br><br>
        sus carreras serian mucho más fáciles, solo necesitan un plan.<br>

        Ahora el jefe Hattori ha encontrado al policía perfecto para hacer frente a la banda, una estrella de la música, Maron Namikaze.<br>
        Linda e inocente; no solo puede cantar o bailar sino que tiene un talento único que el trabajo requiere: ¡fuerza sobrehumana!
        `,
        
        ficha: [
            "Titulo: Assemble Insert",
            "Año: 1989",
            "Director: Ami Tomobuki",
            "Estudio de animación: Studio Core, Tohokushinsha Film",
            "Demografía: Shōnen",
            "Género: Comedia, mecha, parodia",
            "Duración: 30 min por ova",
            "Ovas: 2/2",
            "Resolución: 576x432p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 496,82MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: AnimeRakuen",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdhxgBaXoAM8v8b?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AssembleGD" },
  
        ]
    }

,
    "azusa-otetsudai-shimasu!": {  
        titulo: "Azusa, Otetsudai Shimasu! [Sub Español]",
        tituloBusqueda: "Azusa, Otetsudai Shimasu!",
        portada: "https://pbs.twimg.com/media/Gdh1kWXWEAAH1ol?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcDBd8uWUAAXrEg?format=jpg&name=medium",
        
        sinopsis: `
             Al equipo de béisbol de la escuela secundaria Karugamo no le ha ido bien. Después de perder gravemente ante los Eagles,<br> 
        muchos de los jugadores se van y el equipo ahora tiene sólo ocho jugadores, uno muy pocos para jugar un partido.<br>
        En contra de sus principios, el personaje principal Harumaki Shunpei decide comprar un robot de béisbol.<br> 
        Sin embargo, como no tiene suficiente dinero, termina comprando el robot sirvienta llamado Azusa.<br> 
        Aunque Azusa tiene un corazón cálido y una fuerte determinación, no parece que tenga ninguna posibilidad contra sus adversarios,<br> 
        que eran robots de béisbol de primera línea.<br> 
        La única esperanza del equipo parece residir en un secreto enterrado en el pasado nublado de Azusa.
        `,
        
        ficha: [
            "Titulo: Azusa, Otetsudai Shimasu!",
            "Año: 2004",
            "Director: Hajime Kamegaki",
            "Estudio de animación: TMS",
            "Demografía: Shōnen",
            "Género: Comedia, deporte, ciencia ficción",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 350MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Nanikano Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdh1fQPXAAA1TjN?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AzusaGD" },
  
        ]
    }

,
    "bari-bari-densetsu-1987": {  
        titulo: "Bari Bari Densetsu (1987) [Sub Español]",
        tituloBusqueda: "Bari Bari Densetsu (1987)",
        portada: "https://pbs.twimg.com/media/Gdh56oiWwAAFc0F?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcDBQVwWkAAN67G?format=jpg&name=small",
        
        sinopsis: `
             La trama trata sobre cuatro estudiantes de instituto que se dedican a competir de forma ilegal por las carreteras,<br> 
        retándose y enfrentándose tanto entre ellos como con otros corredores callejeros japoneses.<br> 
        Pero también hay tiempo para carreras legales en circuitos, amores y desamores, tragedias...
        `,
        
        ficha: [
            "Titulo: Bari Bari Densetsu (1987)",
            "Año: 1987",
            "Director: Osamu Uemura",
            "Estudio de animación: Pierrot",
            "Demografía: Shōnen",
            "Género: Deporte, acción, drama",
            "Duración: 90 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 909,89MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Tret",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdh6NmUXcAAdwgp?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/BaribariGD" },
  
        ]
    }
 
,
    "danshi-koukousei-no-nichijou": {  
        titulo: "Danshi Koukousei no Nichijou [Sub Español] [12/12]",
        tituloBusqueda: "Danshi Koukousei no Nichijou",
        portada: "https://pbs.twimg.com/media/GdmP5ePXEAAo2S1?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD6gElXsAA_5Nm?format=jpg&name=4096x4096",
        
        sinopsis: `
             Tadakuni, Hidenori y Yoshietake son tres estudiantes de Instituto Sanada, que es solo para chicos.<br>
    Al no haber chicas, los chicos se encuentran desinhibidos, por lo cual suelen hacer tonterías, contar historias o a planear cómo conseguir novia.
        `,
        
        ficha: [
            "Titulo: Danshi Koukousei no Nichijou",
            "Año: 2012",
            "Director: Shinji Takamatsu",
            "Estudio de animación: Sunrise",
            "Demografía: Shōnen",
            "Género: Comedia, vida escolar",
            "Duración: 25 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 1920x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 6,29GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Kanarianime subs, Ippon Zeoi",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdmP1oLW8AAjGXy?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/dknnGD" },
  
        ]
    }

,
    "heavy": {  
        titulo: "Heavy [Sub Español]",
        tituloBusqueda: "Heavy",
        portada: "https://pbs.twimg.com/media/GdmnYNcXMAAFHDq?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD8BP2WsAAWfpH?format=jpg&name=large",
        
        sinopsis: `
             Guy es un luchador callejero japonés en Nueva York que elige entrenar bajo el famoso entrenador Alex Gordon<br> 
       y del exboxeador Lucky Roman, con la esperanza de ser campeón de la categoría peso pesado<br> 
       y así poder recaudar suficiente dinero para financiar una operación que salve la vida de su padre.
        `,
        
        ficha: [
            "Titulo: Heavy",
            "Año: 1990",
            "Director: Noboru Ishiguro",
            "Estudio de animación: Artland, Nippon Animation, K-Production",
            "Demografía: Shōnen",
            "Género: Drama, acción, boxeo",
            "Duración: 60 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 650MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: KEY-ANIME",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdmnRHZWgAAXTNg?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/HeavyGD" },
  
        ]
    }

,
    "sakigake!!-cromartie-koukou": {  
        titulo: "Sakigake!! Cromartie Koukou [Sub Español] [26/26]",
        tituloBusqueda: "Sakigake!! Cromartie Koukou",
        portada: "https://pbs.twimg.com/media/GdmsVGcX0AADr1z?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD8mO4WsAAHZE5?format=jpg&name=900x900",
        
        sinopsis: `
             El honesto y leal Kamiyama ha ido a parar al conflictivo Instituto Cromartie, donde todo el mundo es un delincuente.<br> 
    Como es de esperar, pasará a ser el jefe de su clase, debido a la lógica invertida de que sólo un conejito realmente duro<br> 
    se atrevería tranquilamente a estar entre una manada de leones.<br> 
    Así empieza una historia que parodia cada uno de los tópicos del anime de "tipos duros" hasta límites insospechados.
        `,
        
        ficha: [
            "Titulo: Sakigake!! Cromartie Koukou",
            "Año: 2003",
            "Director: Hiroaki Sakurai",
            "Estudio de animación: Production I.G",
            "Demografía: Shōnen",
            "Género: Comedia, vida escolar, parodia",
            "Duración: 15 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 640x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 2,30GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Tatakae no Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdmqXVmXwAAAzgh?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/sakigakeGD" },
  
        ]
    }


,
    "jungle-de-ikou!": {  
        titulo: "Jungle de Ikou! [Sub Español] [3/3]",
        tituloBusqueda: "Jungle de Ikou!",
        portada: "https://pbs.twimg.com/media/GdmyHd_XEAAtezn?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD87a2WYAAQEDy?format=jpg&name=large",
        
        sinopsis: `
             El padre de Natsumi que trabaja como arqueólogo se encuentra en una excavación en Nueva Guinea y cuando vuelve le regala una estatua a su hija.<br> 
        Lo que Natsumi no sabe es que la estatua es un sello del Dios de la destrucción y el Caos, Ongo.<br> 
        Ella libera a Ongo cuando se pone los pendientes de la estatua. En lugar de ser un horrible monstruo,<br> 
        Ongo aparece como un chico de la jungla súper-deformado. Natsumi entonces tiene un sueño donde Aham, Dios de la Tierra, se la aparece.<br> 
        él es un viejo shaman pervertido que tiene un largo cuerno cubriendo sus partes privadas.<br> 
        Aham le da a Natsumi el collar calavera que le permite transformarse en la pechugona Diosa Floral Mii.<br> 
        Para transformarse, Natsumi debe realizar un baile erótico y pervertido, transformándose cuando aparentemente tiene un orgasmo.<br> 
        Esto da el tono para el resto de la serie, cualquier otra magia que una chica realiza va acompañada de un baile.
        `,
        
        ficha: [
            "Titulo: Jungle de Ikou!",
            "Año: 1997",
            "Director: Yuji Moriyama",
            "Estudio de animación: Studio Fantasia, Chaos Project",
            "Demografía: Shōnen",
            "Género: Acción, aventura, comedia, ecchi",
            "Duración: 30 min por ova",
            "Ovas: 3/3",
            "Resolución: 640x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 658MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Nanikano Fansub",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdmyRIVXAAA2jCM?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/JungleGD" },
            { servidor: "mega", url: "https://exe.io/JungleMG" },
  
        ]
    }

,
    "master-mosquiton": {  
        titulo: "Master Mosquiton [Varios Idiomas] [6/6]",
        tituloBusqueda: "Master Mosquiton",
        portada: "https://pbs.twimg.com/media/Gdp-1rdW8AA-lY2?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD_LKSWMAA79bV?format=jpg&name=large",
        
        sinopsis: `
             Ahora que tiene un ayudante no muerto, Inaho decide arrastrar a Mosquiton, el vampiro, por todo el mundo en busca de O-Parts,<br> 
        artefactos mágicos que conceden una vida inmortal sin los desagradables efectos secundarios del vampirismo.<br> 
        Sin embargo, deberá enfrentarse a un ejército de monstruos, monjes locos, momias<br>
        e incluso con la ex-mujer de 300 años de Mosquiton que va perpetuamente desnuda.
        `,
        
        ficha: [
            "Titulo: Master Mosquiton",
            "Año: 1996",
            "Director: Yusuke Yamamoto",
            "Estudio de animación: Zero-G Room",
            "Demografía: Shōnen",
            "Género: Acción, aventura, fantasía, ecchi",
            "Duración: 30 min por ova",
            "Ovas: 6/6",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 3,48GB",
            "Audio: Español, Japones, Italiano e Inglés",
            "Subs: Español, Portugués, Ruso, Chino e Inglés",
            "Fansub: Fansubber",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdp-qswX0AAb6iH?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/MosquitonGD" },
  
        ]
    }

,
    "mazinkaiser": {  
        titulo: "Mazinkaiser [Sub Español] [7/7]",
        tituloBusqueda: "Mazinkaiser",
        portada: "https://pbs.twimg.com/media/GdqBDWyWMAAO7wd?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD_c19XoAAR39x?format=jpg&name=4096x4096",
        
        sinopsis: `
             En una de sus batallas épicas, el Equipo de Mazinger sufre una aplastante derrota a manos del Dr. Infierno y sus secuaces,<br> 
        tras ser robado Mazinger Z, y su piloto, el legendario Kôji Kabuto, desaparecido en acción.<br> 
        Justo cuando el segundo al mando del Dr. Infierno, el Barón Ashura, utiliza a Mazinger Z contra nuestros héroes,<br> 
        Kôji hace un regreso sorpresivo en Mazinkaiser, un Mazinger totalmente nuevo con una armadura más pesada y ataques letales.
        `,
        
        ficha: [
            "Titulo: Mazinkaiser",
            "Año: 2001",
            "Director: Masahiko Murata",
            "Estudio de animación: Brain's Base",
            "Demografía: Shōnen",
            "Género: Mecha, Ciencia Ficción, Comedia",
            "Duración: 30 min por ova",
            "Ovas: 7/7",
            "Resolución: 1080x720p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 823MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdqBJqBWwAAyhie?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/MazinkaiserGD" },
            { servidor: "mega", url: "https://exe.io/MazinkaiserMG" },
  
        ]
    }

,
    "O1-pound-no-fukuin": {  
        titulo: "O1 Pound no Fukuin [Sub Español e Inglés]",
        tituloBusqueda: "O1 Pound no Fukuin",
        portada: "https://pbs.twimg.com/media/GdrHxAYWoAAZFTL?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEF5A3XEAAsFGm?format=jpg&name=small",
        
        sinopsis: `
             Asami Onohara es una preciosa estudiante de 17 años que guarda un secreto que no le ha contado a nadie: en realidad ella ya está casada.<br> 
        Su marido, Kyosuke Ichimaru, es su profesor de física.<br>
        Ahora además de sus obligaciones como estudiante, tiene que cuidar de su casa y mantener en secreto su matrimonio en la escuela<br> 
        ¿Podrá Asami con todo esto? ¿Tendrá éxito en que su danna-sama se "interese" en ella?
        `,
        
        ficha: [
            "Titulo: O1 Pound no Fukuin",
            "Año: 1988",
            "Director: Makura Saki",
            "Estudio de animación: Gallop",
            "Demografía: Shōnen",
            "Género: Boxeo, comedia, romance",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 514,67MB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Tret",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdrHz7UXQAAOmVV?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/OnepoundGD" },
            { servidor: "mega", url: "https://exe.io/OnepoundMG" },
  
        ]
    }


,
    "koukou-butouden-crows": {  
        titulo: "Koukou Butouden Crows [Sub Español] [2/2]",
        tituloBusqueda: "Koukou Butouden Crows",
        portada: "https://pbs.twimg.com/media/GdrSxrQXcAAoAaw?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEHg2nXAAAWyVK?format=jpg&name=900x900",
        
        sinopsis: `
             Bouya Harumichi es un nuevo estudiante transferido a la escuela secundaria para varones de Suzuran, un lugar donde solo se reúnen los peores delincuentes.<br> Debido a su gran cantidad de delincuentes que son odiados por la gente en general por su mal augurio, al igual que los cuervos,<br> 
        también se la conoce como "Escuela secundaria de cuervos". Harumichi es un luchador increíblemente fuerte pero tiene una personalidad irresponsable.<br> 
        ¿Cómo actuará en este nuevo entorno donde todos son delincuentes?
        `,
        
        ficha: [
            "Titulo: Koukou Butouden Crows",
            "Año: 1994",
            "Director: Masamune Ochiai",
            "Estudio de animación: Knack Productions",
            "Demografía: Shōnen",
            "Género: Comedia, acción, delicuentes, vida escolar",
            "Duración: 50 min por ova",
            "Ovas: 2/2",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 398MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrS2qeXAAAZ4GP?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/CrowGD" },
  
        ]
    }


,
    "shoubushi-densetsu-tetsuya": {  
        titulo: "Shoubushi Densetsu Tetsuya [Sub Español] [20/20]",
        tituloBusqueda: "Shoubushi Densetsu Tetsuya",
        portada: "https://pbs.twimg.com/media/GdrgyEDXYAA6Br9?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEMf6BXQAAOYu2?format=jpg&name=4096x4096",
        
        sinopsis: `
             Esta historia es una adaptación de la vida del joven Asada Tetsuya, un famoso novelista y jugador de mahjong.<br><br>

    Shinjuku en 1946 tras la Guerra del Pacífico. Tetsuya Asada aprende los secretos del Mahjong (un juego chino de tablero) de un anciano, Boshuu, su mentor.<br>
       Asada pronto se convierte en un gran jugador de mahjong, y con el tiempo ganó su primer título, Saint Jong (Jong Sei).<br> 
     La historia de su vida es adaptada en este anime.
        `,
        
        ficha: [
            "Titulo: Shoubushi Densetsu Tetsuya",
            "Año: 2000",
            "Director: N/A",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōnen",
            "Género: Drama, juego de estrategia",
            "Duración: 25 min por capítulo",
            "Capítulos: 20/20",
            "Resolución: 768x576p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 2,19GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Deviants Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrguUUWsAAlolX?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/TetsuyaGD" },
  
        ]
    }

,
    "teizokurei-daydream": {  
        titulo: "Teizokurei Daydream [Dual Audio] [4/4]",
        tituloBusqueda: "Teizokurei Daydream",
        portada: "https://pbs.twimg.com/media/GdrkkGLWwAAJJVi?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNuKHSWUAExhDx?format=jpg&name=4096x4096",
        
        sinopsis: `
             Desde que tiene uso de razón, Misaki Saiki ha tenido la capacidad de hablar con fantasmas.<br><br>

     Misaki trabaja en una división secreta de la ciudad que se ocupa de casos sobrenaturales y como ama en un club S&M,<br> 
     donde ha ganado fama por su extraordinaria capacidad para dominar los deseos retorcidos de los hombres.<br> 
     Sin embargo, estos talentos especiales le han impedido llevar una vida normal.<br><br>

     Todos los días tiene que lidiar con fans demasiado entusiastas o acosadores, y, peor aún, con espíritus perdidos que necesitan ayuda.
        `,
        
        ficha: [
            "Titulo: Teizokurei Daydream",
            "Año: 2004",
            "Director: Osamu Sekita",
            "Estudio de animación: Hal Film Maker",
            "Demografía: Shōnen",
            "Género: Drama, juego de estrategia",
            "Duración: 25 min por ova",
            "Ovas: 4/4",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 1,92GB",
            "Audio: Japones e Inglés",
            "Subs: Español e Inglés",
            "Fansub: Fansubber",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrkgOjW4AAwN8D?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/DaydreamGD" },
  
        ]
    }


,
    "terra-e": {  
        titulo: "Terra e... [Sub Español]",
        tituloBusqueda: "Terra e...",
        portada: "https://pbs.twimg.com/media/GdrpzPUWAAE8Xlx?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNuppxWMAEDWBV?format=jpg&name=4096x4096",
        
        sinopsis: `
             Una maltratada humanidad ha abandonado su derruido mundo, cediendo su poder y destino a las computadoras.<br><br>

     Todos los nuevos seres humanos son engendrados a través de tubos de ensayo y enviados al cuidado de parejas seleccionadas al azar hasta los 14 años.<br><br>

     En el "día del despertar", son enviados a estaciones espaciales en donde sus recuerdos son borrados,<br> 
     haciéndolos más adecuados para la formación de obedientes ciudadanos. Sin embargo, algunas veces los niños "despertados" adquieren poderes psíquicos,<br> 
     siendo capaces de resistirse al acondicionamiento mental, constituyendo una amenaza para la supremacía del reverenciado "Sistema SD".<br><br>

     Los mu, como así son llamados, mientras intentan huir desesperadamente de la persecución gubernamental que los cataloga como demonios,<br> 
     buscan a un líder que los pueda orientar hacia la libertad.
        `,
        
        ficha: [
            "Titulo: Terra e...",
            "Año: 1980",
            "Director: Hideo Onchi",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōnen",
            "Género: Acción, ciencia ficción, drama",
            "Duración: 120 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 1024x576p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 1,27GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Nou no Sonshou, AnimeRakuen",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrpvY3WUAAhwVn?format=jpg&name=small",

        descargas: [
            { servidor: "drive", url: "https://exe.io/TerraeGD" },
  
        ]
    }



,
    "ufo-princess-valkyrie": {  
        titulo: "UFO Princess Valkyrie [Dual Audio] [12/12]",
        tituloBusqueda: "UFO Princess Valkyrie",
        portada: "https://pbs.twimg.com/media/GwUp-_ZXYAAtlfU?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv58XldW0AAv9lD?format=jpg&name=4096x4096",
        
        sinopsis: `
             La princesa de Valhalla, Valkyrie, aterriza de emergencia en la tierra y su nave se estrella contra Kazuto.<br> 
            Para salvarlo de la muerte le da parte de su alma. A consecuencia de esto Valkyrie ha vuelto a ser una niña.<br> 
            Kazuto y amigos ahora deben tratar con desafíos y problemas diarios para resolver cómo regresar a Valkyrie a su estado normal...
        `,
        
        ficha: [
            "Titulo: UFO Princess Valkyrie",
            "Año: 2002",
            "Director: Shigeru Ueda",
            "Estudio de animación: TNK",
            "Demografía: Shōnen",
            "Género: Comedia, ecchi, ciencia ficción",
            "Duración: 25 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 640x480p (DVD-RIP)",
            "Tamaño: 3,00GB",
            "Audio: Español y Japones",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwUp6quWsAE27y-?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/ufo-princess-valkyrie-TBX" },
  
        ]
    }


,
    "tattoon-master": {  
        titulo: "Tattoon Master [Dual Audio] [2/2]",
        tituloBusqueda: "Tattoon Master",
        portada: "https://pbs.twimg.com/media/GwK738qW0AE1H4k?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv59PcNWUAAG6_f?format=jpg&name=4096x4096",
        
        sinopsis: `
             Masae, la aventurera madre de Hibio, abandona a su familia y se va de su hogar para investigar a una misteriosa tribu y su curioso poder.<br> 
            Sin embargo, cuando habla con Nima, la líder de la tribu, para que le permita llevar a cabo su investigación,<br> 
            esta se niega a compartir los secretos de su poder y decide acabar con ella.<br>
            Afortunadamente, la joven y bella Nima ve una foto familiar donde sale el hijo de Masae, Hibio, y se enamora de él a primera vista.<br>
            Más tarde, Nima accede a la petición de Masae con la condición de dejarla casarse con su hijo.<br>
            Y después de llegar a un acuerdo, Nima parte hacia Tokio para conocer a su nuevo marido.
        `,
        
        ficha: [
            "Titulo: Tattoon Master",
            "Año: 1996",
            "Director: Kazuyuki Hirokawa",
            "Estudio de animación: AIC",
            "Demografía: Shōnen",
            "Género: Comedia, vida escolar, aventura",
            "Duración: 30 min por ova",
            "Ovas: 2/2",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 603,71MB",
            "Audio: Japones e Inglés",
            "Subs: Español e Inglés",
            "Fansub: Tret",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwK7xJsWMAIJ8PP?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/tattoon-master-TBX" },
  
        ]
    }

,
    "miami-guns": {  
        titulo: "Miami Guns [Sub Español e Inglés] [13/13]",
        tituloBusqueda: "Miami Guns",
        portada: "https://pbs.twimg.com/media/GwK738qW0AE1H4k?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv59nKHX0AAH7kF?format=jpg&name=4096x4096",
        
        sinopsis: `
             La mimada y rica Yao, decide unirse a las fuerzas policiales de Miami para divertirse en persecuciones de coches, tiroteos y destrucción gratuita y desdenfrenada.<br> 
            La psicótica y no muy brillante chica tiene como compañera a Lu Amano, la silenciosa y sarcástica hija del jefe de policía.<br> 
            Juntas limpiarán las calles de Miami y se las verán con un misterioso sindicato del crimen conocido solamente como "La Organización".
        `,
        
        ficha: [
            "Titulo: Miami Guns",
            "Año: 2000",
            "Director: Yoshitaka Koyama",
            "Estudio de animación: Group TAC",
            "Demografía: Shōnen",
            "Género: Comedia, ecchi",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 696x476p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 4,66GB",
            "Audio: Japones e Inglés",
            "Subs: Español e Inglés",
            "Fansub: Fansubber",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwKz6xiXYAEGCpD?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/miami-guns-TBX" },
  
        ]
    }

,
    "i-my-me!-strawberry-eggs": {  
        titulo: "I My Me! Strawberry Eggs [Español] [13/13]",
        tituloBusqueda: "I My Me! Strawberry Eggs",
        portada: "https://pbs.twimg.com/media/GwQVbxDWEAAwHAW?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv5_TiFXIAAUXjO?format=png&name=large",
        
        sinopsis: `
             La historia se centra en un personaje que es Hibiki Amawa, su ambición o meta es llegar a ser un Maestro de Educación Física.<br> 
            Pero... la principal de la escuela es una racista que solo permite que los maestros en su escuela sean solo mujeres.<br>
            Así que como nuestro protagonista no es una mujer, cuando fue a pedirle a la principal si lo aceptaban, esta lo rechazo.<br> 
            Aunque en esa escuela hacia falta un maestro de Educación Física.<br> 
            Ella (la principal) lo que quiere es que su escuela poco a poco se convierta en un escuela solamente para chicas<br>
            y esto lo espera lograr dándole solo trabajo a maestras y bajando el numero de estudiantes masculinos todos los años<br>
            y subiendo el numero de estudiantes femeninos.
        `,
        
        ficha: [
            "Titulo: I My Me! Strawberry Eggs",
            "Año: 2001",
            "Director: Yūji Yamaguchi",
            "Estudio de animación: TNK",
            "Demografía: Shōnen",
            "Género: Comedia, drama, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 640x480p (DVD-RIP)",
            "Tamaño: 884,69MB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwQUEwkXwAAOXDH?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/Strawberry-Eggs-TBX" },
  
        ]
    }


,
    "moldiver": {  
        titulo: "Moldiver [Tri Audio] [6/6]",
        tituloBusqueda: "Moldiver",
        portada: "https://pbs.twimg.com/media/GwPClWOWQAEXzNu?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv5_4wDW0AAM1fJ?format=jpg&name=4096x4096",
        
        sinopsis: `
             Ozora Hiroshi, un joven científico, descubre la unidad MOL y la utiliza para crear un traje que le otorga poderes y así cumplir su sueño de convertirse en superhéroe.<br>
            Sólo hay un problema, su hermana pequeña Mirai...
        `,
        
        ficha: [
            "Titulo: Moldiver",
            "Año: 1993",
            "Director: Hirohide Fujiwara",
            "Estudio de animación: AIC",
            "Demografía: Shōnen",
            "Género: Acción, mecha, ecchi",
            "Duración: 3O min por ova",
            "Ovas: 6/6",
            "Resolución: 608x464p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 2,36GB",
            "Audio: Español, Japones y Catalán",
            "Subs: Español y Catalán",
            "Fansub: Anime Seiden",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwPBIrVXgAEbmX5?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/moldiver-TBX" },
  
        ]
    }


,
    "ashita-no-joe": {  
        titulo: "Ashita no Joe [Sub Español] [79/79]",
        tituloBusqueda: "Ashita no Joe",
        portada: "https://pbs.twimg.com/media/Gv8Ixn7XcAAdtax?format=png&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6BFIYXEAAuaNX?format=png&name=900x900",
        
        sinopsis: `
             Ambientada en la década de 1960, Joe es un huérfano problemático que vaga por los tugurios de Tokio donde conoce a un ex boxeador alcohólico: Tange Danpei,<br> 
            que vé en él un gran potencial como boxeador. Pero entonces, Joe termina en problemas y es recluido en el centro de detención juvenil.<br> 
            Una vez dentro, se mete en una pelea pero termina siendo derrotado por Rikiishi Toru que es un boxeador campeón de calibre profesional.<br> 
            Mientras se encuentra encarcelado, Joe recibe una formación especial de Tange a través de cartas.<br> 
            Tras su liberación, Joe rápidamente se convierte en un boxeador de élite y famoso por su cruzada devastadora.<br> 
            Mientras tanto, Rikiishi Toru también es liberado de la cárcel y rápidamente retoma su carrera en el boxeo.<br> 
            Toru finalmente consigue su oportunidad para luchar por el cinturón de campeón del mundo, pero antes de eso, quiere una pelea con Joe.
        `,
        
        ficha: [
            "Titulo: Ashita no Joe",
            "Año: 1970",
            "Director: Osamu Dezaki",
            "Estudio de animación: Mushi Production",
            "Demografía: Shōnen",
            "Género: Boxeo, drama",
            "Duración: 25 min por capítulo",
            "Capítulos: 79/79",
            "Resolución: 1440x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 38,90GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Kamonohashi no Fansub",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwKvprAXkAI9wxa?format=png&name=4096x4096",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/Ashita-no-joe-TBX" },
  
        ]
    }

,
    "koutetsu-tenshi-kurumi": {  
        titulo: "Koutetsu Tenshi Kurumi [Dual Audio] [24/24]",
        tituloBusqueda: "Koutetsu Tenshi Kurumi",
        portada: "https://pbs.twimg.com/media/GwQREAbWkAEBAae?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6GuWlW8AAQ9p2?format=png&name=900x900",
        
        sinopsis: `
             "Steel Angel" (Ángel de Acero) es una androide que tiene un corazón de ángel creado por una poderosa magia.<br> 
            En otras palabras, Steel Angel es una criatura creada a partir de la ciencia y la magia. Kurumi es el primer Steel Angel, y se despierta cuando Nakahito la besa.<br> 
            Nakahito es el segundo hijo de "Onmyoudou Shuke"(la casa del líder japonés espiritual del Ying y el Yang). Ella siente mucho cariño por él y le llama "maestro".<br> 
            Nunca obedece órdenes que no sean las de Nakihito.<br>
            Ahora, Nakihito, un muchacho de buen corazón, y Kurumi, un androide con corazón de ángel e invencible poder, ¡son un dúo inseparable!
        `,
        
        ficha: [
            "Titulo: Koutetsu Tenshi Kurumi",
            "Año: 1999",
            "Director: Naohito Takahashi",
            "Estudio de animación: OLM",
            "Demografía: Shōnen",
            "Género: Comedia, mecha, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 24/24",
            "Resolución: 832x624p (DVD-RIP)",
            "Tamaño: 5,54GB",
            "Audio: Español Latino y Japones",
            "Subs: No",
            "Fansub: Team Kurosaki",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwQO1YGXMAEYqfb?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/Steel-Angel-Kurumi-TBX" },
  
        ]
    }

,
    "rakushou!-hyper-doll": {  
        titulo: "Rakushou! Hyper Doll [Tri Audio] [2/2]",
        tituloBusqueda: "Rakushou! Hyper Doll",
        portada: "https://pbs.twimg.com/media/GwO2fVzWoAEKEa2?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6HhgEWQAA89On?format=png&name=4096x4096",
        
        sinopsis: `
             Disfrazadas de escolares, dos superheroínas prefieren hacer el tonto en vez de proteger la Tierra de una invasión de monstruos gigantes.
        `,
        
        ficha: [
            "Titulo: Rakushou! Hyper Doll",
            "Año: 1995",
            "Director: Moriwaki Makoto",
            "Estudio de animación: Triangle Staff",
            "Demografía: Shōnen",
            "Género: Aventura, comedia, ecchi",
            "Duración: 30 min por ova",
            "Ovas: 2/2",
            "Resolución: 720x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 696,53MB",
            "Audio: Español, Japones e Inglés",
            "Subs: Inglés",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwLe9nqXAAAGxn2?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/hyper-doll-TBX" },
  
        ]
    }


,
    "air-gear": {  
        titulo: "Air Gear [Dual Audio] [26/26]",
        tituloBusqueda: "Air Gear",
        portada: "https://pbs.twimg.com/media/GwK_ujCXUAAF655?format=png&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6H7yfXUAEXzzj?format=png&name=4096x4096",
        
        sinopsis: `
             En esta era de deportes y juegos extremos, ocurre algo inesperado, y eso es el Air Treck.<br> 
            Es la historia de un chico llamado Ikki, que al descubrir el Air Treck, abre su mundo a un nuevo nivel.<br> 
            El pequeño sabe lo que es desenvolverse en este mundo de 'Guerras' y peligrosos trucos que solo con Air Treck se pueden hacer.<br> 
            Ikki va a formar parte de un grupo y forja su propio destino.
        `,
        
        ficha: [
            "Titulo: Air Gear",
            "Año: 2006",
            "Director: Hajime Kamegaki",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōnen",
            "Género: Comedia, ecchi, acción",
            "Duración: 25 min por capítulo",
            "Capítulos: 25/25 + Especial x1",
            "Resolución: 768x576p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 8,14GB",
            "Audio: Español y Japones",
            "Subs: Inglés",
            "Fansub: Tret",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwK_HhWX0AAGuNg?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/air-gear-TBX" },
  
        ]
    }

,
    "power-dolls": {  
        titulo: "Power Dolls [Tri Audio] [2/2]",
        tituloBusqueda: "Power Dolls",
        portada: "https://pbs.twimg.com/media/GwPayVYWoAEpuuQ?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6IXyDXMAA7tzj?format=png&name=medium",
        
        sinopsis: `
             Año 2535 DC, debido a la opresiva fuerza policíaca de inmigración del planeta Tierra, el planeta colonizado Omni se reveló buscando su independencia.<br> 
            En esta guerra las naves-soldado fueron utilizadas por primera vez por el Ejército Omni, iniciando una nueva era en los combates mecanizados.<br> 
            Entonces los Comandos de las naves–soldado crearon una Unidad Especial de ataque, formada enteramente por mujeres, llamada Power Dolls.
        `,
        
        ficha: [
            "Titulo: Power Dolls",
            "Año: 1996",
            "Director: Tsuneo Tominaga (ep 1), Masamitsu Hidaka (ep 2)",
            "Estudio de animación: OLM, Artmic",
            "Demografía: Shōnen",
            "Género: Acción, aventura, mecha",
            "Duración: 30 min por ova",
            "Ovas: 2/2",
            "Resolución: 696x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 824,34MB",
            "Audio: Español Latino, Japones e Inglés",
            "Subs: Español e Inglés",
            "Fansub: Fansubber",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwPbIl8XkAALCUB?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/power-dolls-TBX" },
  
        ]
    }



,
    "solty-rei": {  
        titulo: "Solty Rei [Dual Audio] [25/25]",
        tituloBusqueda: "Solty Rei",
        portada: "https://pbs.twimg.com/media/GwP3Z59X0AAqbVO?format=png&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6N8C4XkAEri-C?format=png&name=4096x4096",
        
        sinopsis: `
             En un mundo brutal y con una sociedad defenestrada solamente existe una regla, cada hombre debe mirar por sí mismo.<br> 
            Un inesperado fenómeno atmosférico llamado el electro-tsunami ha matado y mutilado a más de cien mil personas.<br>
            Roy Levant, un atormentado ex-policía que se ha convertido en un generoso cazarrecompensas, se ve involuntariamente enredado con Solty, un misterioso androide.<br> 
            Mientras tratan de establecer unas normas de convivencia, se ven envueltos en una red de violencia e intriga.<br>
            El carácter áspero de Roy y su obsesión por encontrar a su hija desaparecida desprecian en un principio la presencia de Solty,<br> 
            que hará todo lo posible para ganarse su respeto.
        `,
        
        ficha: [
            "Titulo: Solty Rei",
            "Año: 2005",
            "Director: Yoshimasa Hiraike",
            "Estudio de animación: Gonzo, AIC",
            "Demografía: Shōnen",
            "Género: Acción, mecha, drama",
            "Duración: 25 min por capítulo",
            "Capítulos: 24/24 + Especial x1",
            "Resolución: 864x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 6,30GB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: NoSoloAnime Team",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwP3VfzXkAIW6kI?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/solty-rei-TBX" },
  
        ]
    }

,
    "s-cry-ed": {  
        titulo: "s.CRY.ed [Tri Audio] [26/26]",
        tituloBusqueda: "s.CRY.ed",
        portada: "https://pbs.twimg.com/media/GwQEOS5XUAAcLyR?format=png&name=900x900",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6OyWXX0AAYKrI?format=png&name=4096x4096",
        
        sinopsis: `
             En el futuro, un fenómeno inexplicable ha ocurrido en una distante isla llamada "La tierra perdida", dando lugar a una nueva especie de humanos.<br> 
            Estos humanos evolucionados, llamados usuarios de Alter, son capaces de manipular materia y reformarla en formas únicas.<br> 
            En esta isla remota, aquellos nacidos dentro de una ciudad amurallada son ciudadanos, mientras que los nacidos fuera viven sin leyes.<br> 
            En un intento de mantener la paz, la fuerza policial HOLD junto al grupo de elite de usuarios de Alter,<br> 
            HOLY, capturan a los peligrosos usuarios de Alter nativos y les ofrecen una opción... unirse a HOLY o ser aprisionados.<br> 
            Después del encuentro del joven usuario de Alter nativo, Kazuma, con HOLY, las dudas crecen:<br> 
            ¿De verdad esta HOLY interesada en el bien común, o hay alguna otra razón detrás de sus acciones?
        `,
        
        ficha: [
            "Titulo: s.CRY.ed",
            "Año: 2001",
            "Director: Gorō Taniguchi",
            "Estudio de animación: Sunrise",
            "Demografía: Shōnen",
            "Género: Acción, aventura, drama",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 6,36GB",
            "Audio: Español Latino, Japones e Inglés",
            "Subs: Inglés",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwP-xRcXkAAJ0vr?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/Scryed-TBX" },
  
        ]
    }

,
    "muteki-kanban-musume": {  
        titulo: "Muteki Kanban Musume [Sub español] [12/12]",
        tituloBusqueda: "Muteki Kanban Musume",
        portada: "https://pbs.twimg.com/media/GwPKmXDWQAE2ZL5?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6RpA3XgAAEVtm?format=png&name=medium",
        
        sinopsis: `
             Miki Onimaru, hija de la dueña de un restaurante chino de ramen, está ayudando a su madre a sacar adelante el negocio.<br> 
            Miki es la Kamban Musume o repartidora. Pero a ella le encanta pelear y siempre crea problemas.<br> 
            ¿Será realmente de ayuda para el restaurante?
        `,
        
        ficha: [
            "Titulo: Muteki Kanban Musume",
            "Año: 2006",
            "Director: Nobuo Tomisawa",
            "Estudio de animación: Telecom Animation Film",
            "Demografía: Shōnen",
            "Género: Comedia, acción",
            "Duración: 25 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 768x576p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 1,99GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: AnimeRakuen",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwPHoWYWkAIbnwJ?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/muteki-kanban-musume-TBX" },
  
        ]
    }


,
    "mushrambo": {  
        titulo: "Mushrambo [Español] [32/32]",
        tituloBusqueda: "Mushrambo",
        portada: "https://pbs.twimg.com/media/GwP6IlQXUAEob3_?format=png&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6Squ3XkAAuB00?format=png&name=large",
        
        sinopsis: `
             Quinientos años en el futuro, la humanidad ha sido eliminada por los enterrícolas,<br> 
            criaturas genéticamente creadas a través de la unión de ADN humano y animal por el doctor Daigo Tatsuro,<br> 
            cuyo propósito inicial era ayudar a la raza humana a sobrevivir un poderoso virus que amenazaba con acabar toda vida sobre la faz del planeta.<br>
            Una guerra se desencadenó entre ambas razas, con el vencimiento de la nueva.<br>
            Aparentemente, sólo una humana sobrevivió al fin de su especie: Yakumo, la hija del doctor Tatsuro,<br>
            quien sumergida en un sueño criogénico en una cápsula de tiempo,<br> 
            despierta en esa nueva época con el propósito de cumplir una misión muy especial: Llegar a Shinzo,<br> 
            el lugar en donde los humanos sobrevivientes huyeron, esperando su llegada.<br>
            La llegada de la humana capaz de lograr la paz de ese mundo devastado y en ruinas.<br>
            El camino hacia Shinzo no es fácil, pero la joven cuenta con la ayuda de tres guardianes enterrícolas: Mushra, Saago y Kutal.
        `,
        
        ficha: [
            "Titulo: Mushrambo",
            "Año: 2000",
            "Director: Tetsuo Imazawa",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōnen",
            "Género: Aventura, drama, fantasía",
            "Duración: 25 min por capítulo",
            "Capítulos: 32/32",
            "Resolución: 512x384p (TV-RIP)",
            "Tamaño: 5,93GB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwP4VwKWYAATzYy?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/shinzo-TBX" },
  
        ]
    }


,
    "bakuretsu-hunters": {  
        titulo: "Bakuretsu Hunters [Sub español] [26/26]",
        tituloBusqueda: "Bakuretsu Hunters",
        portada: "https://pbs.twimg.com/media/GwLaJjUW4AUrQg7?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6THRyXMAAAMeb?format=png&name=large",
        
        sinopsis: `
             Los magos dominan la tierra con puño de hierro, abusando de la gente corriente para sus propios fines,<br> 
            pero hay una esperanza para los oprimidos: Los Bakuretsu Hunters (Cazadores de Magos).<br> 
            Cada uno de estos cinco guerreros tiene habilidades únicas, así como una personalidad un tanto peculiar:<br> 
            El jefe del grupo es Carrot Glace, que tiene inmunidad a la magia y siempre busca estar en compañía de todas las chicas posibles;<br> 
            su hermano Marron Glace, es un mago poderoso; Tira Misu, una chica sensible que se convierte en una ama experta del látigo cuando surge la necesidad;<br> 
            su hermana, Chocolate Misu, más sociable que Tira y hábil con el garrote; y Gatteau Mocha, el fortachón del grupo.<br> 
            Bajo el liderazgo de Big Momma y su mensajera Dotta, los Bakuretsu Hunters eliminan a quienes atormentan a la gente,<br> 
            pero ignoran la importante tarea que les ha sido encomendaba: impedir la destrucción del mundo.
        `,
        
        ficha: [
            "Titulo: Bakuretsu Hunters",
            "Año: 1995",
            "Director: Kōichi Mashimo",
            "Estudio de animación: Xebec",
            "Demografía: Shōnen",
            "Género: Aventura, comedia, ecchi",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 640x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 5,33GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Astaroth no Fansub",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwLYJWkXUAA0_B2?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/bakuretsu-hunters-TBX" },
  
        ]
    }

,
    "vandread": {  
        titulo: "Vandread [Dual Audio] [13/13]",
        tituloBusqueda: "Vandread",
        portada: "https://pbs.twimg.com/media/GwUryObWIAEdoNE?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6TkXQWsAA8orH?format=png&name=4096x4096",
        
        sinopsis: `
             La vida apesta para Hibiki. La sociedad Intergaláctica ha prorrumpido en una guerra civil entre hombres y mujeres<br> 
          y ha sido asignado en la cadena de ensamblaje de los mechas de guerra, siendo el hazmerreir de sus compañeros e incapaz de alcanzar el sueño de construir su propio mecha.<br> Finalmente decide que ya ha tenido suficiente y planea robar un mecha para sus propósitos...<br> 
            lo que resulta haber sido una mala idea, pues se ve envuelto en una batalla en el medio del espacio,<br> 
            y, más tarde, tendrá que enfrentarse cara a cara y convivir con el enemigo: las mujeres.
        `,
        
        ficha: [
            "Titulo: Vandread",
            "Año: 2000",
            "Director: Takeshi Mori",
            "Estudio de animación: Gonzo",
            "Demografía: Shōnen",
            "Género: Acción, ecchi, mecha",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 720x384p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 3,00GB",
            "Audio: Español Latino y Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwUrOs9WYAExrZ6?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/vandread-TBX" },
  
        ]
    }


,
    "kenyuu-densetsu-yaiba": {  
        titulo: "Kenyuu Densetsu Yaiba [Español] [52/52]",
        tituloBusqueda: "Kenyuu Densetsu Yaiba",
        portada: "https://pbs.twimg.com/media/GwUvCr-XgAE4w7o?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6T5RXWYAAuI2j?format=png&name=large",
        
        sinopsis: `
             Yaiba Kurogane y sus mascotas, un tigre (Kaguetora) y un buitre (Shonosuke),<br> 
            vuelven a casa para mejorar su entrenamiento después de haber vivido en una remota y abandonada isla con su padre, que le enseña todos sus conocimientos de samurái.<br> 
            Yaiba se queda a vivir en casa de unos viejos amigos de su padre: Raizo y su hija Sayaka.<br> 
            Tras matricularse en el mismo instituto que Sayaka conoce a Takeshi Onimaru, el campeón de Kendo de la escuela y que será su mayor rival desde el primer día.<br>
<br>
            Cuando Takeshi libera el poder demoníaco de una misteriosa espada es poseído por el dios del viento y adquiere nuevas habilidades con las que destruir a Yaiba.<br> 
            Éste va hacia las montañas acompañado por Sayaka y sus mascotas en busca de la ayuda del legendario Musashi Miyamoto, que custodia la espada del dios del rayo.<br> 
            En su intención de vencer a Takeshi con la ayuda de sus amigos y la espada del dios del trueno,<br> 
            Yaiba irá reuniendo siete esferas mágicas con las que enfrentarse a Takeshi y sus esbirros.<br>
<br>
            Desgraciadamente, al tratar de dominar el poder de la espada despierta accidentalmente a la Princesa Luna, una antigua rival del dios del trueno.<br> 
            La princesa Luna intentará de nuevo dominar el mundo.<br>
            Yaiba y Takeshi deberán olvidar sus diferencias y luchar unidos para salvar el mundo de esta.
        `,
        
        ficha: [
            "Titulo: Kenyuu Densetsu Yaiba",
            "Año: 1993",
            "Director: Kunihiko Yuyama",
            "Estudio de animación: Pastel",
            "Demografía: Shōnen",
            "Género: Aventura, comedia",
            "Duración: 25 min por capítulo",
            "Capítulos: 52/52",
            "Resolución: 640x480p (VHS-RIP)",
            "Tamaño: 11,32GB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwUteg_WgAEXJ-m?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/yaiba-TBX" },
  
        ]
    }


,
    "bobobo-bo-bo-bobo": {  
        titulo: "Bobobo-bo Bo-bobo [Español] [76/76]",
        tituloBusqueda: "Bobobo-bo Bo-bobo",
        portada: "https://pbs.twimg.com/media/GwVau52XsAA6dv7?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GwVXD-CWgAI4TD6?format=jpg&name=large",
        
        sinopsis: `
             En el siglo XXXI la Tierra cae bajo el dominio del malvado emperador Bola de Billar IV, que odia a la gente con pelo, probablemente por envidia.<br> 
            Por eso decide crear un ejército de Cazadores de Pelo, que se dedica a rapar a la gente de todo el mundo.<br> 
            Bobobo, que desde pequeño tuvo la especial habilidad de comunicarse con su propio pelo, se ve empujado a luchar contra Bola de Billar IV,<br> 
            y toma el seudónimo de "El liberta-cabelleras".<br> 
            Con la ayuda de cada vez más personajes igual de variopintos que él, irá derrotando a las diferentes divisiones del ejército del malvado emperador,<br> 
            hasta crear un mundo en el que el pelo de la gente pueda ser libre...
        `,
        
        ficha: [
            "Titulo: Bobobo-bo Bo-bobo",
            "Año: 2003",
            "Director: Hiroki Shibata",
            "Estudio de animación: Toei Animation",
            "Demografía: Shōnen",
            "Género: Comedia",
            "Duración: 25 min por capítulo",
            "Capítulos: 76/76",
            "Resolución: 640x480p (TV-RIP)",
            "Tamaño: 16,26GB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwVWpWwXUAM9x94?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/bobobo-TBX" },
  
        ]
    }

,
    "burning-blood": {  
        titulo: "Burning Blood [Sub Español e Inglés] [3/3]",
        tituloBusqueda: "Burning Blood",
        portada: "https://pbs.twimg.com/media/GdyCjYzXcAAwuJA?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbkjLHcWkAA06fy?format=jpg&name=900x900",
        
        sinopsis: `
             Ryo Takagi es un trompetista que está a punto de triunfar con su banda, pero también es un luchador nato cuya sangre comienza a arder cuando pelea en serio;<br> 
         esto le dio el apodo de B.B ("Sangre Ardiente"). Sin embargo, después de sufrir una derrota absoluta a manos de un joven llamado Jin Moriyama,<br> 
   Ryo decide cambiar su trompeta por un par de guantes de boxeo para tener una revancha como Moriyama la quiere: en el ring de boxeo.
        `,
        
        ficha: [
            "Titulo: Burning Blood",
            "Año: 1990",
            "Director: Osamu Dezaki",
            "Estudio de animación: Magic Bus",
            "Demografía: Shōnen",
            "Género: Boxeo, acción, drama",
            "Duración: 50 min por ova",
            "Ovas: 3/3",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 3,22GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/Inka Subs",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdyCf2SXkAAX2bv?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/BurningBloodGD" },
  
        ]
    }


,
    "kennedy-knights-pilot-film": {  
        titulo: "Película piloto de los Caballeros Kennedy [Sub Español]",
        tituloBusqueda: "Kennedy Knights Pilot Film",
        portada: "https://pbs.twimg.com/media/GeALj08WMAA2yEQ?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbsoxQmWkAwko9z?format=jpg&name=large",
        
        sinopsis: `
             Película piloto no emitida basada en el manga Kennedy Knights de Mikiya Mochizuki.
        `,
        
        ficha: [
            "Titulo: Película piloto de los Caballeros Kennedy",
            "Alternative Titles: Kennedy Knights Pilot Film (English) ケネディ騎士団(チェックメイト)　パイロットフィルム (Japanese)",
            "Año: 2003",
            "Director: N/A",
            "Estudio de animación: TCJ",
            "Demografía: Shōnen",
            "Género: Acción",
            "Duración: 7 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 512x384p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 30,6MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Vanifruzhi",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/GeALj08WMAA2yEQ?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/KennedyKnightsGD" },
            { servidor: "mega", url: "https://exe.io/KennedyKnightsMG" },
            { servidor: "mediafire", url: "https://exe.io/KennedyKnightsMF" },
  
        ]
    }


,
    "koume-chan-ga-iku!": {  
        titulo: "Koume-chan ga Iku! [Sub Español e Inglés] [12/12]",
        tituloBusqueda: "Koume-chan ga Iku!",
        portada: "https://pbs.twimg.com/media/GeALj08WMAA2yEQ?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gd83jCgXYAA6bkT?format=jpg&name=4096x4096",
        
        sinopsis: `
             Koume es una nueva Office Lady (OL), empleada de Caramel Ribbon, Inc., una firma de diseñadores.<br>
            Esta es la historia de sus días y noches, completa con un humor único en Osaka.<br>
            Visto desde afuera, Kansai no parece el resto de Japón.<br>
            Ver este programa lo convertirá en un experto, incluso si no sabe nada sobre el área en este momento.<br>
            <br>
            Es una historia humorística de la vida en una compañía japonesa, con Koume, su afeminado jefe, y Kimi, un miembro de una pandilla de chicas,<br> 
            mientras intentan vender (supuestamente) diseños nuevos y frescos. Los actores de voz también provienen de Kansai, asegurando la autenticidad.
        `,
        
        ficha: [
            "Titulo: Koume-chan ga Iku!",
            "Alternative Titles: 小梅ちゃんが行く!! (Japanese)",
            "Año: 1999",
            "Director: Kazunari Kume",
            "Estudio de animación: Gainax, Group TAC",
            "Demografía: Seinen",
            "Género: Comedia, romance",
            "Duración: 5 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 768x576p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 438MB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/Perevodildo",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/GrETYWMX0AARLJe?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/KoumechanGD" },
            { servidor: "mega", url: "https://exe.io/KoumechanMG" },
            { servidor: "mediafire", url: "https://exe.io/KoumechanMF2" },
  
        ]
    }

,
    "muerdeme-camaleon!": {  
        titulo: "¡Muérdeme, Camaleón! [Sub Español e Inglés] [6/6]",
        tituloBusqueda: "Bite Me! Chameleon",
        portada: "https://pbs.twimg.com/media/Gby6zvUWoAUVyTy?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbkfsxFXMAAw5Xo?format=jpg&name=medium",
        
        sinopsis: `
             La serie es una exagerada y a veces bizarra mirada a la «vida de pandillas» en las escuelas japonesas,<br> 
            enfocándose a un chico llamado Yazawa quien tiene un sueño de convertirse en un ganster hecho y derecho.<br> 
            Claro que, esto es Japón, ser un gangster envuelve entre otras cosas golpear a otros gangsters con palos de golf,<br> 
            modificar tu patín del diablo, etc.<br>
            Siendo bastante pequeño y débil, Yazawa carece de toda gracia, y las pandillas no lo aceptan en sus filas.<br> 
            Al fin lo aceptan y por supuesto las novatadas no se hacen esperar, el resto de los pandilleros lo molestan a mas no poder.<br> 
            El asunto es que los enemigos de Yazawa no se dan cuenta que no tiene nada que perder.<br> 
            Esto lo hace increíblemente peligroso, a pesar de su diminuta estatura, si se enoja o lo humillan lo suficiente,<br> 
            entonces conocerán toda su ira… PELIGRO!
        `,
        
        ficha: [
            "Titulo: ¡Muérdeme, Camaleón!",
            "Alternative Titles: Bite Me! Chameleon (English) カメレオン (Japanese)",
            "Año: 1992",
            "Director: Mitsuo Hashimoto",
            "Estudio de animación: Studio Egg",
            "Demografía: Seinen",
            "Género: Acción, comedia, yakuzas",
            "Duración: 50 min por ova",
            "Ovas: 6/6",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 3,48GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/Orphan Fansubs",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/Gby7P1PWMBQP82_?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/CamaleonGD" },
            { servidor: "mega", url: "https://exe.io/CamaleonMG" },
            { servidor: "mediafire", url: "https://exe.io/CamaleonMF" },
  
        ]
    }

,
    "nozomi-witches": {  
        titulo: "La Bruja Nozomi [Sub Español] [3/3]",
        tituloBusqueda: "Nozomi Witches",
        portada: "https://pbs.twimg.com/media/Gdx3qAQWsAA2WWk?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GbkdRj4W8AAKho3?format=jpg&name=large",
        
        sinopsis: `
             Mini-serie de 3 episodios OVA (1992 - 1993).<br>
                     Nozomi Egawa y Ryoutaro Shiba son dos nuevos estudiantes de instituto en la ciudad, y se mudan en casas anexas.<br>
                     Nozomi se da cuenta de que Ryoutaro tiene una excelente habilidad de visión y reflejos, y le pide que se una al club del boxeo del instituto,<br>
                     para cumplir el sueño de su hermano de representar a Japón en las Olimpiadas de Barcelona 92.
        `,
        
        ficha: [
            "Titulo: La Bruja Nozomi",
            "Alternative Titles: Nozomi Witches (English) のぞみ ウィッチィズ (Japanese)</i></b></p>",
            "Año: 1992",
            "Director: Gisaburō Sugii",
            "Estudio de animación: GRUPO TAC",
            "Demografía: Seinen",
            "Género: Comedia, romance, deporte",
            "Duración: 50 min por ova",
            "Ovas: 3/3",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 1,32GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Vanifruzhi",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gdx3h9QXoAALQfK?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/NozomiWitchesGD" },
            { servidor: "mega", url: "https://exe.io/NozomiWitchesMG" },
  
        ]
    }

,
    "mikeneko-holmes-no-yuurei-joushu": {  
        titulo: "Mikeneko Holmes no Yuurei Joushu [Sub Español]",
        tituloBusqueda: "Mikeneko Holmes no Yuurei Joushu",
        portada: "https://pbs.twimg.com/media/Gdx9WEVWcAAjZwE?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbkgjgMXUAA5woh?format=jpg&name=900x900",
        
        sinopsis: `
             El despistado detective Katayama Yoshitaro vive con su hermana Harumi y su gato Holmes, que tiene un sexto sentido para resolver misterios.<br> 
                Tras una fiesta del grupo de actores donde participa Harumi, ocurre un asesinato.<br>
                Por suerte para Yoshitaro, lleva al gato Holmes con él.
        `,
        
        ficha: [
            "Titulo: Mikeneko Holmes no Yuurei Joushu",
            "Año: 1992",
            "Director: Nobuyuki Kitajima",
            "Estudio de animación: AIC",
            "Demografía: Seinen",
            "Género: Drama, misterio, comedia",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 451MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Vanifruzhi",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gdx9QdxWoAACXW_?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/MikenekoGD" },
            { servidor: "mega", url: "https://exe.io/MikenekoMG" },
  
        ]
    }


,
    "kyukyoku-chojin-r": {  
        titulo: "Kyūkyoku Chōjin R [Sub Español]",
        tituloBusqueda: "Kyūkyoku Chōjin R",
        portada: "https://pbs.twimg.com/media/GdyANj9XgAA4IFj?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbkhEcMW0AAZcyn?format=jpg&name=900x900",
        
        sinopsis: `
             La trama presentaba a R y Camera Club realizando una gira de sellos por todo Japón,<br> 
                    con la amenaza de que cerraran su club a menos que pudieran<br> 
                    recolectar todos los sellos antes de las 6:00 p.m.
        `,
        
        ficha: [
            "Titulo: Kyūkyoku Chōjin R",
            "Año: 1991",
            "Director: Ami Tomobuki",
            "Estudio de animación: Studio COA",
            "Demografía: Seinen",
            "Género: Ciencia ficción, comedia",
            "Duración: 80 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 768x576p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 1,16GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Vanifruzhi",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdyARFNXcAAKji1?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/ChojinRGD" },
            { servidor: "mega", url: "https://exe.io/ChojinRMG" },
  
        ]
    }

,
    "mellow": {  
        titulo: "Mellow [Sub Español]",
        tituloBusqueda: "Mellow",
        portada: "https://pbs.twimg.com/media/GdxJWBjWUAAH2ug?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbso9eXawAAlKke?format=jpg&name=900x900",
        
        sinopsis: `
             Una historia sobre un profesor travestido que se ocupa de una clase delincuente. 
        `,
        
        ficha: [
            "Titulo: Mellow",
            "Alternative Titles: 女郎 [めろう] (Japanese)",
            "Año: 1993",
            "Director: Teruo Kogure",
            "Estudio de animación: Knack Productions",
            "Demografía: Seinen",
            "Género: Acción, comedia, echhi",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 221MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Vanifruzhi",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/GdxJaebWoAEd06d?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/MellowGD" },
            { servidor: "mega", url: "https://exe.io/MellowMG" },
            { servidor: "mediafire", url: "https://exe.io/MellowMF" },
  
        ]
    }


,
    "ore-no-sora-keiji-hen": {  
        titulo: "Ore no Sora: Keiji-hen [Sub Español e Inglés] [1/2]",
        tituloBusqueda: "Ore no Sora: Keiji-hen",
        portada: "https://pbs.twimg.com/media/Gv7j1uLW8AEif5A?format=png&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbsfv8_aMAAFwCJ?format=jpg&name=large",
        
        sinopsis: `
             Yasuda Ippei (Shonozaki Ken) es hijo de Yasuda Seijiro (Osugi Ren), el jefe del Grupo Yasuda, el mayor conglomerado empresarial de Japón.<br> 
            Aunque es hijo de una familia distinguida, no tiene ningún aspecto desagradable y cae bien a todo el mundo.<br>
            sus logros académicos son excepcionales. Completó todo su programa de bachillerato en 2 años<br> 
            y se matriculó en la Facultad de Derecho de la Universidad de Tokio sin estudiar para los exámenes.<br> 
            Para establecer su propio concepto de la justicia, Yasuda abandona su puesto como heredero del Grupo Yasuda para asistir a la academia de policía.<br> 
            Se convierte en detective de la comisaría de Kyobashi y se enfrenta con valentía a grandes males. 
        `,
        
        ficha: [
            "Titulo: Ore no Sora: Keiji-hen",
            "Alternative Titles: 俺の空 刑事篇 (Japanese)",
            "Año: 1991",
            "Director: Takeshi Shirato",
            "Estudio de animación: APPP",
            "Demografía: Seinen",
            "Género: Acción, drama, misterio",
            "Duración: 50 min por ova",
            "Ovas: 1/2",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 1,13GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/Orphan Fansub",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/Gv7jhugWMAATVy2?format=jpg&name=large",

        descargas: [
            { servidor: "drive", url: "https://exe.io/ore-no-sora-keiji-hen-GD" },
            { servidor: "mega", url: "https://exe.io/ore-no-sora-keiji-hen-MG" },
            { servidor: "mediafire", url: "https://exe.io/ore-no-sora-keiji-hen-MF" },
  
        ]
    }

,
    "naki-no-ryuu-hiryuu-no-shou-1991": {  
        titulo: "Naki no Ryuu: Hiryuu no Shou (1991) [Sub Español e Inglés]",
        tituloBusqueda: "Naki no Ryuu: Hiryuu no Shou (1991)",
        portada: "https://pbs.twimg.com/media/Gv656V3WkAEOmTN?format=png&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gvw2P4HWsAEzlyY?format=jpg&name=large",
        
        sinopsis: `
             OVA publicado en 1991. A diferencia de la serie OVA anterior, este episodio fue producido por separado por Toshiba. 
        `,
        
        ficha: [
            "Titulo: Naki no Ryuu: Hiryuu no Shou (1991)",
            "Alternative Titles: 哭きの竜 飛竜之章 (Japanese)",
            "Año: 1991",
            "Director: Dezaki Satoshi",
            "Estudio de animación: Gainax, Magic Bus",
            "Demografía: Seinen",
            "Género: Acción, drama, mahjong",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 740MB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/Orphan Fansub",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/Gv64oVZXsAA6cCg?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/naki-no-ryuu-1995-GD" },
            { servidor: "mega", url: "https://exe.io/naki-no-ryuu-1995-MG" },
            { servidor: "mediafire", url: "https://exe.io/naki-no-ryuu-1995-MF" },
  
        ]
    }


,
    "koiko-no-mainichi": {  
        titulo: "Seishun Fuufu Monogatari: Koiko no Mainichi [Sub Español e Inglés] [2/2]",
        tituloBusqueda: "Seishun Fuufu Monogatari: Koiko no Mainichi",
        portada: "https://pbs.twimg.com/media/GrETwfMWUAAqFD6?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbsprMra4AA81qu?format=jpg&name=large",
        
        sinopsis: `
             Basado en el manga romántico "Koiko no Mainichi" de George Akiyama, publicado en la revista Weekly Manga Goraku.<br>
            <br>
            En una historia que oscila entre el drama serio y la comedia, Sabu, un gánster de Shinjuku, y su joven esposa Koiko intentan llevar una vida normal,<br> 
            a pesar de las interferencias de la política pandillera y los negocios criminales. Tras salvarle la vida, Tominaga, el jefe de la pandilla de Sabu,<br>
            se enamora de Koiko y lo somete a situaciones cada vez más peligrosas con la esperanza de provocar su arresto y, así, obligarse a "cuidar" de Koiko mientras Sabu está en prisión.
        `,
        
        ficha: [
            "Titulo: Seishun Fuufu Monogatari: Koiko no Mainichi",
            "Alternative Titles: 青春夫婦物語　恋子の毎日 (Japanese)",
            "Año: 1989",
            "Director: Ishiguro Noboru",
            "Estudio de animación: Artland",
            "Demografía: Seinen",
            "Género: Acción, drama, romance",
            "Duración: 50 min por ova",
            "Ovas: 2/2",
            "Resolución: 640x480p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 1,95GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/Orphan Fansub",
            "Servidor: Google Drive/Mega/MediaFire"
        ],

        capturas: "https://pbs.twimg.com/media/GrETavlWMAATkfm?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/Koiko-no-mainichi-GD" },
            { servidor: "mega", url: "https://exe.io/Koiko-no-mainichi-MG" },
            { servidor: "mediafire", url: "https://exe.io/Koiko-no-mainichi-MF" },
  
        ]
    }

,
    "aika": {  
        titulo: "AIKa [Varios Idiomas] [7/7 + Especial]",
        tituloBusqueda: "AIKa",
        portada: "https://pbs.twimg.com/media/GdsSDbFXcAAVepK?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNwvPXXIAAFJ1y?format=jpg&name=medium",
        
        sinopsis: `
             Aika Sumeragi es una recuperadora de la compañía KK Corp. Excelente piloto de submarinos, maestra en Artes Marciales,<br>
    y piloto de su propio MIG-25, dispone de una armadura de un material especial llamado Ultranato,<br> 
    que reacciona cuando Aika se encuentra en dificultades.<br><br>

    Respondiendo a una oferta de trabajo en la que se trata de obtener información sobre el misterioso elemento Ragg,<br> 
    se ve envuelta en una guerra de intereses por parte de la Armada Delmo, liderada por Ludwig Hagen.<br> 
    Él y su hermana Neena harán lo imposible por destruir la compañía KK Corp, y a Aika.
        `,
        
        ficha: [
            "Titulo: AIKa",
            "Año: 1997",
            "Director: Katsuhiko Nishijima",
            "Estudio de animación: Studio Fantasia",
            "Demografía: Seinen",
            "Género: Acción, aventura, ciencia ficción, ecchi",
            "Duración: 30 min por ova",
            "Ovas: 7/7 + Especial x1",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 4,77GB",
            "Audio: Español, Japones, Italiano e Inglés",
            "Subs: Español, Italiano e Inglés",
            "Fansub: Fansubber",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdsSHPNWsAESfw3?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AikaGD" },
  
        ]
    }

,
    "beck": {  
        titulo: "Beck: Mongolian Chop Squad [Sub Español] [26/26]",
        tituloBusqueda: "Beck: Mongolian Chop Squad",
        portada: "https://pbs.twimg.com/media/Gb0av-MWsBYwOHh?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbtx82aXQBESrdw?format=jpg&name=large",
        
        sinopsis: `
             Yukio Tanaka, conocido por todos como Koyuki, es un chico de catorce años insatisfecho con el rumbo que de momento parece llevar su monótona vida.<br>
         Sin embargo, todo dará un vuelco cuando el joven salva a un perro de extraña apariencia de unos niños y conoce a su dueño,<br> 
         Minami Ryûsuke. Al parecer, se trata de un guitarrista estrella de dieciséis años que acaba de regresar de Estados Unidos<br>
         y cuya banda de rock se ha disuelto. Tras escuchar algunas cintas prestadas, la música de Occidente empezará a calar hondo en Koyuki,<br>
         por lo que decide apuntarse a clases de guitarra. ¡Así es como comienza la leyenda musical de un joven aburrido con la vida y un guitarrista genial!
        `,
        
        ficha: [
            "Titulo: Beck: Mongolian Chop Squad",
            "Año: 2004",
            "Director: Osamu Kobayashi",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Música, romance, comedia",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 960x720p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 7,77GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Ñyuum",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gb0asVmWUAg2HHH?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/BeckGD" },
  
        ]
    }


,
    "monster": {  
        titulo: "Monster [Español] [74/74]",
        tituloBusqueda: "Monster",
        portada: "https://pbs.twimg.com/media/Gbz-8M4WwAEizWM?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbtxp1dWwAAGZvp?format=jpg&name=4096x4096",
        
        sinopsis: `
             El doctor Kenzo Tenma es un prometedor neurocirujano japonés que ejerce en el Eisler Memorial Hospital de Dusseldorf.<br> 
             Lo tiene todo en la vida; un trabajo que le apasiona y en el que demuestra una habilidad increíble, y una novia rica y guapa.<br> 
             Sin embargo, un día decide ignorar una orden de su superior y salva a un niño desconocido en lugar de la vida del alcalde de la ciudad.<br> 
             Como consecuencia de esto pierde su privilegiado trabajo y a su novia. <br>
             Poco después, los médicos que lo destituyeron aparecen muertos y él se convierte en principal sospechoso.<br> 
             Tenma está dispuesto a llegar hasta el fondo de éstas y otras muertes e investigar la verdad sobre el monstruo que hay detrás de todo el asunto.
        `,
        
        ficha: [
            "Titulo: Monster",
            "Año: 2004",
            "Director: Masayuki Kojima",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Misterio, suspenso psicológico, terror psicológico",
            "Duración: 25 min por capítulo",
            "Capítulos: 74/74",
            "Resolución: 720x480p (DVD-RIP)",
            "Tamaño: 14,93GB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gbz_O8_XEBEmAyg?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "mega", url: "https://exe.io/MonsterMG" },
  
        ]
    }


,
    "parasyte": {  
        titulo: "Parasyte: The Maxim [Dual Audio] [24/24]",
        tituloBusqueda: "Parasyte: The Maxim",
        portada: "https://pbs.twimg.com/media/Gb0lWGiXwA0Bvmr?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbt7o-nXkBAuJQ-?format=jpg&name=large",
        
        sinopsis: `
             Shinichi Izumi es un adolescente normal hasta que unos organismos invaden la Tierra.<br> 
            Se trata de gusanos (parásitos) que se introducen dentro de los humanos a través de sus ojos o nariz,<br>
            con el objetivo de dominar su cerebro.<br>
            Shinichi consigue que no entren en su cuerpo, pero infectarán su mano.<br> 
            Aquí comienza su lucha por la supervivencia en un mundo hostil...
        `,
        
        ficha: [
            "Titulo: Kiseijuu: Sei no Kakuritsu",
            "Año: 2014",
            "Director: Kenichi Shimizu",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Acción, ciencia ficción, horror",
            "Duración: 25 min por capítulo",
            "Capítulos: 24/24",
            "Resolución: 1920x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 16,90GB",
            "Audio: Español Latino y Japones",
            "Subs: Español",
            "Fansub: Yoru no Kousen",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gb0lPgBWcBQlFVj?format=jpg&name=4096x4096",

         // MODO FRANJAS ACTIVADO
        tipoDescarga: "secciones", 

        descargas:[ 
             
                {
                titulo: "Capítulos 1-12",
                links: [ { servidor: "drive", url: "https://exe.io/Parasyte1GD" } ]
            },

 {
                titulo: "Capítulos 13-24",
                links: [ { servidor: "drive", url: "https://exe.io/Parasyte2GD" } ]
            },
           
        ]
    }


,
    "berserk": {  
        titulo: "Berserk [Tri Audio] [25/25]",
        tituloBusqueda: "Kenpuu Denki Berserk",
        portada: "https://pbs.twimg.com/media/Gb9N2HTW8AAEAAv?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbt846HW8AER9r9?format=jpg&name=medium",
        
        sinopsis: `
             Un joven y bravo guerrero llamado Guts lucha como un mercenario en primera línea. Por azares del destino, Guts se acaba uniendo<br> 
            al carismático y mortal joven llamado Griffith. Liderando al grupo de mercenarios conocidos como la Banda del Halcón,<br> 
            Griffith empuña su formidable fuerza como ningún otro lo ha hecho. Conducidos por cuestiones de estatus,<br> 
            los miembros de la Banda del Halcón pronto irán escalando en el camino de la gloria tras su alianza con el reino de Midland,<br>  
            hasta que un desafortunado suceso provocará un revés en la Banda que pondrá al mundo de rodillas.
        `,
        
        ficha: [
            "Titulo: Kenpuu Denki Berserk",
            "Año: 1997",
            "Director: Naohito Takahashi",
            "Estudio de animación: OLM Team Iguchi",
            "Demografía: Seinen",
            "Género: Acción, fantasía oscura",
            "Duración: 25 min por capítulo",
            "Capítulos: 25/25",
            "Resolución: 1280x720p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 5,63GB",
            "Audio: Español, Japones e Inglés",
            "Subs: Español",
            "Fansub: Daemon anime",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gb9NucEWwAIhH52?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/BerserkGD" },
  
        ]
    }

,
    "mushishi": {  
        titulo: "Mushishi [Tri Audio] [26/26]",
        tituloBusqueda: "Mushishi",
        portada: "https://pbs.twimg.com/media/GcdOsAzXEAAQxrD?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gbt-KOoWEAE6E9M?format=jpg&name=900x900",
        
        sinopsis: `
             Como Mushishi o experto en Mushis, Ginko recorre el mundo ayudando a aquellos cuyas vidas se han visto trastornadas,<br> 
            de una forma u otra, al entrar en contacto con estas criaturas extrañas.<br> 
            Los Mushis habitan, en ocasiones, en los seres humanos.
        `,
        
        ficha: [
            "Titulo: Mushishi",
            "Año: 2005",
            "Director: Hiroshi Nagahama",
            "Estudio de animación: Artland",
            "Demografía: Seinen",
            "Género: Aventura, fantasía, sobrenatural",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 1920x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 4,68GB",
            "Audio: Español Latino, Japones e Inglés",
            "Subs: Inglés",
            "Fansub: AnimeL MG",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GcdOwTaXgAAhbeA?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/MushishiGD" },
  
        ]
    }

,
    "flcl": {  
        titulo: "Fooly Cooly [Dual Audio] [6/6]",
        tituloBusqueda: "Fooly Cooly",
        portada: "https://pbs.twimg.com/media/GcdUZ_8WkAEpvQm?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuBUqMWUBspHSl?format=jpg&name=medium",
        
        sinopsis: `
             FLCL comienza cuando Naota Nandaba, chico bastante maduro para su edad, admirador de su hermano mayor, Tasuku que ha ido a Estados Unidos<br>
     a jugar béisbol, se encuentra aburrido y atrapado en la cotidianidad de la vida y acompañando a la solitaria novia de su hermano<br> 
     llamada Mamimi Samejima. Todo cambia un día en el que conoce abruptamente a una chica muy extraña que lo atropella accidentalmente<br> 
     y lo golpea con su bajo eléctrico en la cabeza, lo que le provoca que le salga un enorme chichón.<br>
     A partir de ese momento, su vida tiene un giro de 180° y comienzan a suceder extrañas cosas alrededor de él,<br> 
     pues la chica que se hace llamar Haruko Haruhara llega a vivir con ellos de buenas a primeras, le salen cosas extrañas de la cabeza,<br> 
     como orejas de gato y gatillos de revolver que tiene que ocultar a sus amigos, es tragado por robots<br>
     y termina envuelto en una pelea entre Haruko y Medical Mecánica por conseguir a Atomsk, el rey pirata capaz de robar planetas enteros.
        `,
        
        ficha: [
            "Titulo: Fooly Cooly",
            "Año: 2000",
            "Director: Kazuya Tsurumaki",
            "Estudio de animación: Gainax, Production I.G",  
            "Demografía: Seinen",
            "Género: Ciencia ficción, mecha, parodia",
            "Duración: 25 min por ova",
            "Ovas: 6/6",
            "Resolución: 960x720p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 1,68GB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GcdUjFIXoAA6wm1?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/FlclGD" },
            { servidor: "mega", url: "https://exe.io/FlclMG" },
  
        ]
    }


,
    "lain": {  
        titulo: "Serial Experiments Lain [Sub Español] [13/13]",
        tituloBusqueda: "Serial Experiments Lain",
        portada: "https://pbs.twimg.com/media/GcdZD7xXUAA9ZUG?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuCBT-W4BAeyTW?format=jpg&name=4096x4096",
        
        sinopsis: `
             Lain es un anime vanguardista, influenciado por temas filosóficos como realidad, identidad y comunicación social.<br> 
            La serie se centra en Lain Iwakura, una chica que vive su adolescencia en los suburbios de Japón;<br> 
            y sobre su introducción al Wired, una red mundial de comunicaciones similar a Internet.
        `,
        
        ficha: [
            "Titulo: Serial Experiments Lain",
            "Año: 1998",
            "Director: Ryūtarō Nakamura",
            "Estudio de animación: Triangle Staff",
            "Demografía: Seinen",
            "Género: Ciberpunk, thriller psicológico",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 720x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 3,95GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GcdZUO9WYAAT0ND?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/LainGD" },
  
        ]
    }

,
    "xxxholic": {  
        titulo: "XxxHolic [Español Latino] [24/24]",
        tituloBusqueda: "XxxHolic",
        portada: "https://pbs.twimg.com/media/GcdfqNTXwAAnWEI?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuC_zxXMAA0Ks7?format=jpg&name=large",
        
        sinopsis: `
             Kimihiro Watanuki es un chico que podría parecerte de lo más corriente, pero que tiene una característica muy especial:<br> 
 desde pequeño, tiene la habilidad de ver espíritus, y lo que es más, parece que estos sienten una especie de extraña atracción por él y<br>
 se tiran todo el día pegados al pobre muchacho. Un día, ¿por casualidad?, se topa con una tienda nada convencional, y con su dueña,<br>
  Yuuko Ichihara. La misteriosa mujer dice vender cualquier deseo a cambio de un pago con algo del mismo valor.<br> 
            ¿Podrá concederle a nuestro amigo Wata la posibilidad de librarse de esos espíritus de una vez por todas?
        `,
        
        ficha: [
            "Titulo: XxxHolic",
            "Año: 2006",
            "Director: Tsutomu Mizushima",
            "Estudio de animación: Production I.G",
            "Demografía: Seinen",
            "Género: Sobrenatural, comedia, drama, psicología",
            "Duración: 25 min por capítulo",
            "Capítulos: 24/24",
            "Resolución: 1280x720p (DVD-RIP)",
            "Tamaño: 2,82GB",
            "Audio: Español Latino",
            "Subs: No",
            "Fansub: Team Kurosaki/El Rincón De Yu-Chan",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gcdgs3_WoAEq58j?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/XxxholicGD" },
  
        ]
    }


,
    "madonna": {  
        titulo: "Madonna [Sub Español] [2/2]",
        tituloBusqueda: "Madonna",
        portada: "https://pbs.twimg.com/media/GcdjF_7X0AA9EpN?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuDo9nWAAYPDo5?format=jpg&name=large",
        
        sinopsis: `
             Madonna es la historia de Mako Domon, una profesora recién graduada quien consigue su primer trabajo en el Instituto Ushi.<br> Ella es asignada a la clase 2-D, que resulta, ser la peor clase en la peor escuela. <br>
                     Sus primeros minutos, después de que escribe su nombre, ella se da la vuelta solo para encontrar<br>
                     que todos los hombres se han quitado sus pantalones y que solo le muestran sus mercancías a ella.
        `,
        
        ficha: [
            "Titulo: Madonna",
            "Año: 1988",
            "Director: Akinori Nagaoka",
            "Estudio de animación: Toei Animation",  
            "Demografía: Seinen",
            "Género: Comedia, vida escolar, deporte",
            "Duración: 50 min por ova",
            "Ovas: 2/2",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 936,9MB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Faketo_1",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gcdi4TXWEAAvegH?format=jpg&name=large",

        descargas: [
            { servidor: "drive", url: "https://exe.io/MadonnaGD" },
            { servidor: "mega", url: "https://exe.io/MadonnaMG" },
  
        ]
    }


,
    "golden-boy": {  
        titulo: "Golden Boy [Varios Idiomas] [6/6]",
        tituloBusqueda: "Golden Boy",
        portada: "https://pbs.twimg.com/media/Gcd0njLW4AApQjA?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuEsEYWUA4dtEU?format=jpg&name=4096x4096",
        
        sinopsis: `
             Kintaro Oe es un joven estudiante de derecho de 25 años que ha dejado la universidad<br> 
         porque ya ha aprendido todo lo que necesitaba de ella, y ahora recorre Japón en bicicleta,<br> 
         buscando nuevos trabajos que le ofrezcan cosas nuevas para aprender.
        `,
        
        ficha: [
            "Titulo: Golden Boy",
            "Año: 1995",
            "Director: Hiroyuki Kitakubo",
            "Estudio de animación: A.P.P.P.",  
            "Demografía: Seinen",
            "Género: Aventura, ecchi, comedia",
            "Duración: 30 min por ova",
            "Ovas: 6/6",
            "Resolución: 628x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 3,24GB",
            "Audio: Español, Japones, Italiano, Inglés y Francés",
            "Subs: Español, Portugués, Inglés y Francés",
            "Fansub: Fansubber",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gcd0wODW8AAF4uQ?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/GoldenboyGD" },
            { servidor: "mega", url: "https://exe.io/GoldenboyMG" },
  
        ]
    }

,
    "emblen-take-2": {  
        titulo: "Emblen Take 2 [Sub Español] [2/2]",
        tituloBusqueda: "Emblen Take 2",
        portada: "https://pbs.twimg.com/media/Gcd6_1ZXMAErBz1?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbvDot7XkAYuyNn?format=jpg&name=large",
        
        sinopsis: `
             ¿Qué pasaría si, en un intento desesperado por sobrevivir usas tu última bala para asesinar a tus enemigos y esta accidentalmente termina atravesando tú cabeza?<br> 
            Akutsu Joji no esperaba que esto ocurra, sin embargo, sobrevivió para contarlo.
        `,
        
        ficha: [
            "Titulo: Emblen Take 2",
            "Año: 1993",
            "Director: Tetsuo Imazawa",
            "Estudio de animación: Toei Animation",  
            "Demografía: Seinen",
            "Género: Comedia, acción, yakuzas",
            "Duración: 50 min por ova",
            "Ovas: 2/2",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 1,36GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Dairokkan no fansub",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gcd7KpTWIAAg1CC?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/Emblentake2GD" },
            { servidor: "mega", url: "https://exe.io/Emblentake2MG" },
  
        ]
    }

,
    "abenobashi-mahou-shoutengai": {  
        titulo: "Abenobashi Mahou☆Shoutengai [Sub Español] [13/13]",
        tituloBusqueda: "Abenobashi Mahou☆Shoutengai",
        portada: "https://pbs.twimg.com/media/GdhYbqzXkAAF3-j?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcC9S8LWkAEjZ9y?format=jpg&name=900x900",
        
        sinopsis: `
             Sashi Imamiya y Arumi Asahina viven en el distrito comercial Abenobashi de Osaka.<br> 
            Un día de verano los dos chicos son transportados al universo paralelo Mahou Shotengai (Distrito Comercial Mágico),<br> 
            donde el sentido común se encuentra lejos de ser común. Sashi y Arumi son una cómica pareja perdida en un extraño y absurdo mundo alternativo.<br> 
            ¿Podrán regresar a casa?
        `,
        
        ficha: [
            "Titulo: Abenobashi Mahou☆Shoutengai",
            "Año: 2002",
            "Director: Hiroyuki Yamaga",
            "Estudio de animación: Gainax, Madhouse",
            "Demografía: Seinen",
            "Género: Comedia, fantasía, aventura, isekai",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 852x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 2,15GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Nine Tails Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdhL73SWQAASLv7?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AbenobashiGD" },
  
        ]
    }


,
    "black-magic-m-66": {  
        titulo: "Black Magic M-66 [Sub Español e Inglés]",
        tituloBusqueda: "Black Magic M-66",
        portada: "https://pbs.twimg.com/media/Gdh7Xa6XsAALDOA?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcDBnewW4AAb_ew?format=jpg&name=medium",
        
        sinopsis: `
             Black Magic M-66 nos muestra la excitante aventura futurista de Sybel, una periodista independiente que se ve involucrada<br> 
       en un peligroso fiasco militar cuando dos androides asesinos militares ultrasecretos, conocidos como unidades M-66, desaparecen.<br>
       Uno de los androides se escapa con la misión de eliminar a Ferris, la nieta de su creador, y Sybel tendrá que encontrarlo<br> 
       y detenerlo antes de que sea demasiado tarde.
        `,
        
        ficha: [
            "Titulo: Black Magic M-66",
            "Año: 1987",
            "Director: Hiroyuki Kitakubo, Masamune Shirow",
            "Estudio de animación: AIC, Animate",
            "Demografía: Seinen",
            "Género: Ciencia ficción, acción, mecha, drama",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 696x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 831,04MB",
            "Audio: Japones e Inglés",
            "Subs: Español",
            "Fansub: Fansubber",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdh7QTrWIAAkPul?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/BlackmagicGD" },
  
        ]
    }

,
    "california-crisis": {  
        titulo: "California Crisis: Tsuigeki no Juuka [Sub Español]",
        tituloBusqueda: "California Crisis: Tsuigeki no Juuka",
        portada: "https://pbs.twimg.com/media/GdiOZM4WMAEnLaE?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcDB9PVWUAAreCD?format=jpg&name=4096x4096",
        
        sinopsis: `
             Noera se dirige al trabajo después de beber toda la noche con un amigo, cuando se encuentra con Marcia, una motorista joven en dirección a Los Ángeles.<br> 
       De repente se involucran en una persecución de coches y Marcia termina por encontrar una caja de metal cerrada de uno de los vehículos.<br> 
       Dentro de la caja, una esfera oscura. Muchas personas quieren la esfera a cualquier precio, obligando a Noera y Marcia huir desesperadamente,<br> 
       y en su huida, tratan de averiguar qué es exactamente el extraño objeto que están llevando.
        `,
        
        ficha: [
            "Titulo: California Crisis: Tsuigeki no Juuka",
            "Año: 1986",
            "Director: Mizuho Nishikubo",
            "Estudio de animación: Hiro Media, Studio Unicorn",
            "Demografía: Seinen",
            "Género: Ciencia ficción, acción, aventura",
            "Duración: 40 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 720x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 463MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: KEY-ANIME",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdiOdMTXwAAn2Sr?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/CaliforniacrisisGD" },
  
        ]
    }



,
    "call-me-tonight": {  
        titulo: "Call Me Tonight [Sub Español]",
        tituloBusqueda: "Call Me Tonight",
        portada: "https://pbs.twimg.com/media/GdiWqv2W4AAkcMX?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcDCZ1ZXcAA5uym?format=jpg&name=4096x4096",
        
        sinopsis: `
             Natsumi es una chica normal en apariencia, aunque trabaja en una agencia de acompañantes.<br> 
       Todo parecía normal, hasta que un chico de nombre Sugiura la llama para pedirle ayuda con su problema,<br> 
       y es que cada vez que ve algo erótico se transforma en un monstruo.
        `,
        
        ficha: [
            "Titulo: Call Me Tonight",
            "Año: 1986",
            "Director: Tatsuya Okamoto",
            "Estudio de animación: AIC",
            "Demografía: Seinen",
            "Género: Comedia, acción, ecchi, gore",
            "Duración: 30 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 276,68MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: KEY-ANIME",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdiWjFhWwAAQRte?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/CallmeGD" },
  
        ]
    }

,
    "digital-juice": {  
        titulo: "Digital Juice [Sub Español] [6/6]",
        tituloBusqueda: "Digital Juice",
        portada: "https://pbs.twimg.com/media/GdlWPenXEAAnMVS?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcDDBhqWwAAOHSQ?format=jpg&name=small",
        
        sinopsis: `
             Digital Juice está compuesta de 6 OVAs de Studio 4ºC dirigidos por diferentes directores.<br><br>
       
       - KEIKAKU<br>
       2'08" Dir.Hidekazu Ohara<br><br>

       - Chicken's insurance:<br>
       3'24'' Dir. Hiroaki Ando<br><br>

       - TOJIN KIT<br>
       2'09" Dir.Tatsuyuki Tanaka<br><br>

       - In the evening of a moonlight night<br>
       4'27" Dir.Kazuyoshi Yaginuma<br><br>

       - Table & fishman<br>
       5'18" Dir. Osamu Kobayashi<br><br>

       - The Saloon in the Air:<br>
       4'26" Dir. Koji Morimoto
        `,
        
        ficha: [
            "Titulo: Digital Juice",
            "Año: 2002",
            "Director: Hidekazu Ohara, Hiroaki Ando, Kazuyoshi Yaginuma, Koji Morimoto, Osamu Kobayashi, Tatsuyuki Tanaka",
            "Estudio de animación: Studio 4°C",
            "Demografía: Seinen",
            "Género: Fantasía, romance, comedia, etc",
            "Duración: 3 min por ova",
            "Ovas: 6/6(6x1)",
            "Resolución: 640x328p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 219,45MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Tanoshii Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdlWKETXgAEoZr2?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/djGD" },
  
        ]
    }


,
    "gunnm": {  
        titulo: "Battle Angel Alita [Varios Idiomas] [2/2]",
        tituloBusqueda: "Battle Angel Alita",
        portada: "https://pbs.twimg.com/media/GdlZGcMXkAA2GXw?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD5Hc4WkAA3Xsz?format=jpg&name=4096x4096",
        
        sinopsis: `
             Nos encontramos en un futuro lejano e indeterminado donde existen dos mundos: la ciudad flotante donde viven los mejores seres humanos<br> 
        entendidos como una raza superior, y la ciudad de los desperdicios, que es la tierra, donde va a parar toda la basura de la ciudad flotante<br> 
        y donde se encuentran los yonkis, renegados, androides, y el resto de humanos calificados de purria.<br> 
        En el mundo de los desperdicios un doctor y mecánico de cyborgs llamado Ido encuentra una cabeza de androide con cerebro humano a la que llama Alita<br> 
        (Gally) a la que consigue un cuerpo. A partir de ese momento convivirán juntos, casi como padre e hija,<br> 
        pero Alita no recuerda nada de su pasado y en lo más profundo de su ser sabe que está destinada a usar su fuerza y bondad para ayudar a la gente.<br> 
        Alita tiene la apariencia de una jovencita feliz e inocente, y poco a poco irá descubriendo cosas de su pasado que harán que ella intente cambiar las cosas.
        `,
        
        ficha: [
            "Titulo: Battle Angel Alita",
            "Año: 1993",
            "Director: Hiroshi Fukutomi",
            "Estudio de animación: Animate Film, Madhouse",
            "Demografía: Seinen",
            "Género: Ciencia ficción, acción, mecha, drama",
            "Duración: 30 min por ova",
            "Ovas: 2/2",
            "Resolución: 700x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 1,14GB",
            "Audio: Español, Español Latino, Japones, Inglés, Catalán, Ruso e Italiano",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdlZCmxXMAAvUs_?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/GunnmGD" },
  
        ]
    }


,
    "gantz": {  
        titulo: "Gantz [Español] [26/26]",
        tituloBusqueda: "Gantz",
        portada: "https://pbs.twimg.com/media/GdlYkz9XIAAXAmZ?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcDDN2PWUAAslUH?format=jpg&name=4096x4096",
        
        sinopsis: `
             Kei Kurono es un estudiante de instituto bastante normal, un poco obsesionado por el sexo femenino, egoísta, preocupado sólo por sí mismo.<br> 
    Considera a la gente poco interesante, aburrida y la desprecia desde su pequeño mundo.<br> 
    Pero un día, en el metro se encuentra a un viejo amigo de la infancia, Masaru Kato, que no le reconoce en un principio.<br> 
    Cuando un mendigo cae en la vía del metro y Masaru salta para salvarle ve a Kei y le pide ayuda.<br> 
    Algo mueve a Kei a saltar a la vía, pese a que va contra su forma de pensar.<br> 
    Entre los dos salvan al mendigo, pero son atropellados por un expreso que no para en esa estación.<br>
    Su último pensamiento antes de morir es de resignación.<br>
    ¿O quizás no hayan muerto?
        `,
        
        ficha: [
            "Titulo: Gantz",
            "Año: 2004",
            "Director: Ichiro Itano",
            "Estudio de animación: Gonzo",
            "Demografía: Seinen",
            "Género: Acción, ciencia ficción, ecchi, gore",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 720x384p (DVD-RIP)",
            "Tamaño: 1,37GB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdlYqyQXYAAXMKb?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/GantzGD" },
  
        ]
    }


,
    "hanappe-bazooka": {  
        titulo: "Hanappe Bazooka [Tri Audio]",
        tituloBusqueda: "Hanappe Bazooka",
        portada: "https://pbs.twimg.com/media/Gdldu0UXUAADu11?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD5hIHXEAEam-q?format=jpg&name=4096x4096",
        
        sinopsis: `
             Hanappe, un joven algo descarriado, se ve sorprendido una noche por dos demonios, un macho y una hembra,<br>
       que salen de su televisor y convierten el dedo índice de su mano derecha en el dedo más poderoso del mundo,<br> 
       capaz tanto de matar como de volver locas de deseo a las mujeres. Sin embargo, Hanappe no sabe muy bien cómo controlar su dedo,<br> 
       lo que da pie a situaciones de enredo desternillantes.
        `,
        
        ficha: [
            "Titulo: Hanappe Bazooka",
            "Año: 1992",
            "Director: Takamasa Ikegami",
            "Estudio de animación: Studio Signal",
            "Demografía: Seinen",
            "Género: Acción, comedia, ecchi",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 696x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 1,05GB",
            "Audio: Español, Españolx2, Japones e Italiano",
            "Subs: Inglés",
            "Fansub: Fansubber",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdld5xpXsAAVWIs?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/HanabaGD" },
  
        ]
    }


,
    "hataraki-man": {  
        titulo: "Hataraki Man [Sub Español] [11/11]",
        tituloBusqueda: "Hataraki Man",
        portada: "https://pbs.twimg.com/media/GdmWWaBXIAABDZY?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD7RB1WYAAo44W?format=jpg&name=large",
        
        sinopsis: `
             Matsukata Hiroko es una auténtica trabajadora. Su trabajo como redactora en un semanario la estresa,<br> 
       no aguanta a algunos de sus compañeros y por si fuera poco apenas tiene tiempo para su novio, igual de ocupado en su propio trabajo.<br> 
       Lleva una vida apresurada y sin descanso, apenas duerme y suele estar de mal humor. Pero pese a ello da todo de sí,<br> 
       se pone el turbo y se convierte en... ¡Hataraki-man!
        `,
        
        ficha: [
            "Titulo: Hataraki Man",
            "Año: 2006",
            "Director: Katsumi Ono",
            "Estudio de animación: Gallop",
            "Demografía: Seinen",
            "Género: Drama, comedia, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 11/11",
            "Resolución: 1024x576p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 1,88GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Deviants Fansub, Tanoshii Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdmWQ8IXsAASc_h?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/HatarakiGD" },
  
        ]
    }


,
    "houma-hunter-lime": {  
        titulo: "Houma Hunter Lime [Sub Español] [3/3]",
        tituloBusqueda: "Houma Hunter Lime",
        portada: "https://pbs.twimg.com/media/GdmiWYhWcAAINz1?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD7pZ8W4AAw-1U?format=jpg&name=large",
        
        sinopsis: `
             Una vez durante el mes, una puerta detrás de la luna llena, se abre. Esta puerta comunica el mundo humano del mundo mágico.<br> 
     Un día cualquiera, Bass y Lime, enviados por el rey mago, están en la búsqueda de un demonio que había robado seis gemas de poder del mundo mágico.<br> 
     El demonio se escapa al mundo humano por la puerta abierta, y los dos lo siguen. En la batalla, las gemas caen al vacío, al mundo humano;<br> 
     en su búsqueda, se inician las aventuras de este particular dúo.
        `,
        
        ficha: [
            "Titulo: Houma Hunter Lime",
            "Año: 1996",
            "Director: Tetsuro Amino",
            "Estudio de animación: Ashi Productions",
            "Demografía: Seinen",
            "Género: Comedia, aventura, fantasía",
            "Duración: 30 min por ova",
            "Ovas: 3/3",
            "Resolución: 640x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 713MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: KEY-ANIME",
            "Servidor: Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdmifRAXIAA859v?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "mega", url: "https://exe.io/HoumahlGD" },
  
        ]
    }

,
    "kirara": {  
        titulo: "Kirara [Sub Español e Inglés]",
        tituloBusqueda: "Kirara",
        portada: "https://pbs.twimg.com/media/Gdm7otBWoAAJU1X?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD-N-QWYAAbSi6?format=jpg&name=large",
        
        sinopsis: `
             Cuando la protagonista de 24 años Kirara se dirige a su boda, muere en un lamentable accidente automovilistico.<br> 
        Sin embargo, es tal su amor por su prometido Konpei, que regresa en forma de fantasma, pero ocho años menor.<br> 
        A partir de ese momento, se desatará una serie de situaciones curiosas debido a la joven fantasma influida por la sensual alma madura.
        `,
        
        ficha: [
            "Titulo: Kirara",
            "Año: 2000",
            "Director: Kiyoshi Murayama",
            "Estudio de animación: Ashi Productions, Toho",
            "Demografía: Seinen",
            "Género: Romance, comedia, ecchi",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 704x528p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 546,41MB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Lateralus-Manga, AniMugen Fansub",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/Gdm8B57XoAIqnkE?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/KiraraGD" },
            { servidor: "mega", url: "https://exe.io/KiraraMG" },
  
        ]
    }

,
    "honoo-no-labyrinth": {  
        titulo: "Honoo no Labyrinth [Sub Español] [2/2]",
        tituloBusqueda: "Honoo no Labyrinth",
        portada: "https://pbs.twimg.com/media/GdnACZYXsAAw-wo?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD-fA1XcAAuqy0?format=jpg&name=medium",
        
        sinopsis: `
             Él es Galan, un joven que hará cualquier cosa con tal de ser un auténtico samurái. Pero ¿será una simple quimera o de verdad podrá lograrlo?<br> 
        Cuando su novia le regala una espada antigua, comienzan a suceder hechos extraños e, incluso, caen personas del cielo para atacarle.<br>
        Ahora Galan debe superar su ineptitud y reunir a un puñado de mujeres hermosas en un disparatado juego a lo largo de un reino olvidado en el tiempo.
        `,
        
        ficha: [
            "Titulo: Honoo no Labyrinth",
            "Año: 2000",
            "Director: Katsuhiko Nishijima",
            "Estudio de animación: Studio Fantasia",
            "Demografía: Seinen",
            "Género: Comedia, ecchi",
            "Duración: 40 min por ova",
            "Ovas: 3/3",
            "Resolución: 640x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 603,33MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Jisedai no Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/Gdm_6raW4AAkVZO?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/honooGD" },
  
        ]
    }


,
    "mask-of-zeguy": {  
        titulo: "Unkai no Meikyuu Zeguy [Sub Español] [2/2]",
        tituloBusqueda: "Unkai no Meikyuu Zeguy",
        portada: "https://pbs.twimg.com/media/GdnDfwQXcAA1DU1?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD-24GWEAAPVjR?format=jpg&name=900x900",
        
        sinopsis: `
             Miki pierde su pequeña campana y su amiga de la escuela lo recoge. Cuando van de regreso a casa en autobús,<br> 
        inexplicablemente este comienza a retroceder y entra en un túnel largo y oscuro, transportando a las dos chicas a otro mundo.<br> 
        Al despertar, Miki ve a unos guerreros monstruosos que secuestran a su amiga (porque tenía la ampana).<br> 
        Miki intenta seguir los extraños monstruos para salvar a su amiga. Atrapada en un mundo de monstruos y personajes que traman la caída de la Tierra,<br> 
        el único poder que puede salvarla a ella (y al mundo) es el de la máscara misteriosa de Zeguy.<br> 
        Miki debe embarcarse en una aventura peligrosa por esa reliquia y enfrentarse a los villanos.
        `,
        
        ficha: [
            "Titulo: Unkai no Meikyuu Zeguy",
            "Año: 1993",
            "Director: Akinobu Takahashi",
            "Estudio de animación: KSS",
            "Demografía: Seinen",
            "Género: Acción, aventura, fantasía",
            "Duración: 40 min por ova",
            "Ovas: 2/2",
            "Resolución: 720x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 966MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: KEY-ANIME",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdnDl1qWYAAIORM?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/ZeguyGD" },
  
        ]
    }


,
    "mouse": {  
        titulo: "Mouse [Sub Español e Inglés] [12/12]",
        tituloBusqueda: "Mouse",
        portada: "https://pbs.twimg.com/media/GdqEl0dWwAA7SCg?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcD_qf5XQAAtB06?format=jpg&name=medium",
        
        sinopsis: `
             El maestro Sorata Muon continúa con la tradición centenaria de su familia de ser el maestro ladrón Ratón<br> 
        que puede robar cualquier cosa después de alertar adecuadamente a las autoridades de sus intenciones para que puedan estar allí<br> 
        y no lograr detenerlo. Él es asistido por 3 asistentes femeninas núbiles que también usan la cubierta de enseñanza y que,<br> 
        en el típico Satoru Akahori, prefieren atuendos ajustados/diminutos/bondage sobre sus amplias curvas,<br> 
        ya que constantemente persiguen a Sorata mucho más de lo que él las persigue a ellas, aunque las chicas se ponen alguna atención de su amo.<br> 
        Mouse no solo es perseguido por las chicas y las autoridades locales encargadas de hacer cumplir la ley,<br> 
        también hay una sociedad secreta de protección del arte que emplea los servicios de un antiguo aliado de Sorata después de su bonito pellejo.
        `,
        
        ficha: [
            "Titulo: Mouse",
            "Año: 2003",
            "Director: Yorifusa Yamaguchi",
            "Estudio de animación: Studio Deen",
            "Demografía: Seinen",
            "Género: Acción, comedia, ecchi",
            "Duración: 15 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 2,49GB",
            "Audio: Japones e Inglés",
            "Subs: Español e Inglés",
            "Fansub: Fansubber",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdqEh0vWwAAd8c7?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/MouseGD" },
  
        ]
    }

,
    "nekojiru-sou": {  
        titulo: "Nekojiru-sou [Sub Español e Inglés]",
        tituloBusqueda: "Nekojiru-sou",
        portada: "https://pbs.twimg.com/media/GdqQyy0XMAAcBzL?format=jpg&name=900x900",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEAGioWoAAJ4Mo?format=jpg&name=4096x4096",
        
        sinopsis: `
             Cuando la Muerte se llevó la mitad del alma de la pequeña gatita Nayaako, ella y su hermano Nyatta embarcaron en un extraño viaje para hacerla volver.<br> 
        En el surrealista escenario del Otro Mundo, se encontrarán con personajes fantásticos y extraordinarios que dificultarán sus aventuras.<br> 
        Desde un alucinante viaje por el mar hasta un excéntrico carnaval, los dos gatitos viajarán muy lejos de su hogar<br>
        para descubrir cómo de extraño y miraculoso el mundo puede llegar a ser.
        `,
        
        ficha: [
            "Titulo: Nekojiru-sou",
            "Año: 2001",
            "Director: Tatsuo Satō",
            "Estudio de animación: J.C.Staff",
            "Demografía: Seinen",
            "Género: Aventura, drama, fantasía",
            "Duración: 40 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 507,83MB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Wannasub",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdqQtj7XwAAwQ59?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/NekojiruGD" },
            { servidor: "mega", url: "https://exe.io/NekojiruMG" },
  
        ]
    }


,
    "ojousama-sousamou": {  
        titulo: "Ojousama Sousamou [Sub Español e Inglés]",
        tituloBusqueda: "Ojousama Sousamou",
        portada: "https://pbs.twimg.com/media/GdrEAjoXwAA-AJA?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEFGolXsAADwox?format=jpg&name=medium",
        
        sinopsis: `
             Ojousama Sousamou comienza con la presentación de las 5 protagonistas: Miyuki, Reika, Youko, Nina y Kimiko.<br> 
        Parece ser que estas 5 chicas son increíblemente ricas y que les ha llegado una cinta con amenazas de procedencia desconocida;<br> 
        para protegerlas, un policía es destinado a la escuela en la que las niñas se han inscrito.<br> 
        Pero a Kimiko no le gusta la idea de ir escoltada a clase y convence al resto de las chicas para engañar al policía y escapar.<br> 
        No obstante, nada más librarse del guardia, son asaltadas por tres terroristas armados.<br> 
        Lo que sigue es su ridícula huída con nuestras heroínas intentando evitar a sus atacantes.
        `,
        
        ficha: [
            "Titulo: Ojousama Sousamou",
            "Año: 1996",
            "Director: Akiyuki Shinbo",
            "Estudio de animación: Daume",
            "Demografía: Seinen",
            "Género: Acción, comedia, ecchi",
            "Duración: 30 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 663,79MB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: AniMugen Fansub, Wannasub, Starry Sky",
            "Servidor: Google Drive/Mega"
        ],

        capturas: "https://pbs.twimg.com/media/GdrEEiqW8AECYb_?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/OjousamaGD" },
            { servidor: "mega", url: "https://exe.io/OjousamaMG" },
  
        ]
    }


,
    "okusama-wa-joshikousei": {  
        titulo: "Okusama wa Joshikousei [Sub Español] [13/13]",
        tituloBusqueda: "Okusama wa Joshikousei",
        portada: "https://pbs.twimg.com/media/GdrFrpqXwAA2pmR?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEFpi0XkAAkrPf?format=jpg&name=900x900",
        
        sinopsis: `
             Asami Onohara es una preciosa estudiante de 17 años que guarda un secreto que no le ha contado a nadie: en realidad ella ya está casada.<br> 
        Su marido, Kyosuke Ichimaru, es su profesor de física.<br>
        Ahora además de sus obligaciones como estudiante, tiene que cuidar de su casa y mantener en secreto su matrimonio en la escuela<br> 
        ¿Podrá Asami con todo esto? ¿Tendrá éxito en que su danna-sama se "interese" en ella?
        `,
        
        ficha: [
            "Titulo: Okusama wa Joshikousei",
            "Año: 2005",
            "Director: Jun Shishido",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Romance, comedia, ecchi",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 640x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: 2,22GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Jisedai no Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrFlZ-WMAUCfgy?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/OkusamaGD" },
  
        ]
    }

,
    "onkyo-seimeitai-noiseman": {  
        titulo: "Onkyo Seimeitai Noiseman [Sub Español]",
        tituloBusqueda: "Onkyo Seimeitai Noiseman",
        portada: "https://pbs.twimg.com/media/GdrJYbpWoAAKq8-?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEGIdjXEAAmC3m?format=jpg&name=medium",
        
        sinopsis: `
             Noiseman es una bestia infantiloide y cruel que solo piensa en jugar y en comer sonidos.<br> 
        Odia a quienes le desafían y le lava el cerebro a los humanos para que sirvan a sus caprichos.
        `,
        
        ficha: [
            "Titulo: Onkyo Seimeitai Noiseman",
            "Año: 1997",
            "Director: Koji Morimoto",
            "Estudio de animación: Studio 4°C",
            "Demografía: Seinen",
            "Género: Acción, ciencia ficción, fantasía",
            "Duración: 15 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 1920x1080p (WEB-RIP) (SOFT-SUBS)",
            "Tamaño: 1,02GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Kamonohashi no Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrJRg6WYAA6Ktk?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/OnkyoGD" },
  
        ]
    }


,
    "akagi": {  
        titulo: "Touhai Densetsu Akagi: Yami ni Maiorita Tensai [Sub Español e Inglés] [26/26]",
        tituloBusqueda: "Touhai Densetsu Akagi: Yami ni Maiorita Tensai",
        portada: "https://pbs.twimg.com/media/GdrNoYgXUAAaAg1?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEGkWdWUAAuB3D?format=jpg&name=small",
        
        sinopsis: `
             Una noche de tormenta, Nangou está jugando un juego de Mahjong con la yakuza local. Pronto, él se encuentra en una racha perdedora.<br> 
    Si Nangou pierde, tendrá que pagar con su vida. De pronto, un joven, Akagi Shigeru, en barcazas, empapado por la lluvia.<br> 
    Después de ver un par de juegos, ofrece para sustituir la lucha Nangou. Ese es el momento en que la leyenda nace.
        `,
        
        ficha: [
            "Titulo: Touhai Densetsu Akagi: Yami ni Maiorita Tensai",
            "Año: 2005",
            "Director: Yūzō Satō",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Mahjong, suspenso, psicológico",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 720x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 3,33GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Crunchyfunky, Tedium",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrNlr7W4AADDw9?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/AkagiGD" },
  
        ]
    }


,
    "rec": {  
        titulo: "Rec [Sub Español e Inglés] [9/9 + Especial]",
        tituloBusqueda: "Rec",
        portada: "https://pbs.twimg.com/media/GdrPtnVWoAEJGLO?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEG5RUW4AAsBdJ?format=jpg&name=4096x4096",
        
        sinopsis: `
             La historia narra un intrincado romance entre Aka Onda, una actriz de doblaje principiante, y Matsumaru Fumihiko,<br> 
        un hombre común y corriente que trabaja como publicista en una empresa de comida.<br>
        Ambos se conocen por casualidad en un cine, y, después de un incidente desagradable para Aka Onda, deciden vivir juntos.<br> 
        A partir de ese momento, sus vidas cambian totalmente, ya que ninguno de los dos había tenido éxito en su vida profesional antes<br>
        y es a partir de aquí cuando empiezan a ver la vida de otro modo.<br> 
        Pero, eso sí, nadie puede descubrir que ambos viven juntos bajo el mismo techo.
        `,
        
        ficha: [
            "Titulo: Rec",
            "Año: 2006",
            "Director: Ryūtarō Nakamura",
            "Estudio de animación: Shaft",
            "Demografía: Seinen",
            "Género: Comedia romántica",
            "Duración: 15 min por capítulo",
            "Capítulos: 9/9+ Especial x1?",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 1,96GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Fansubber",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrPy8iXoAISqYw?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/RecGD" },
  
        ]
    }



,
    "riding-bean": {  
        titulo: "Riding Bean [Sub Español]",
        tituloBusqueda: "Riding Bean",
        portada: "https://pbs.twimg.com/media/GdrRNRdXwAA_muR?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEHS9PWMAADPNF?format=jpg&name=medium",
        
        sinopsis: `
             En Chicago, el experto mensajero Bean Bandit controla la carretera, y trabaja para los dos lados de la ley.<br> 
        Si un cargamento tiene que estar allí AHORA, Bean es tu hombre, por un precio, claro.<br> 
        ¿Quieres asegurarte que el botín de tu último atraco pasa desapercibido? No hay problema, pero te va a costar dinero.<br> 
        EL último cargamento de Bean es una niña de 10 años que vale 50 de los grandes si llega sana y salva a casa.<br> 
        Lo que él no sabe, es que la niña ha sido raptada y está a punto de ser atacado por la fuerza. Mientras tanto,<br> 
        los auténticos secuestradores están cobrando los 2 millones de dólares de la recompensa por atraparlo.<br>
        ¿Descubrirá Bean el ardid a tiempo y conseguir el dinero para él? ¿Conseguirá evitar la persecución incansable del Inspector Percy?<br> 
        Independientemente del resultado, el Departamento de Policía de Chicago va a tener una gran factura del taller de reparación de automóviles...
        `,
        
        ficha: [
            "Titulo: Riding Bean",
            "Año: 1989",
            "Director: Yasuo Hasegawa",
            "Estudio de animación: AIC, Artmic",
            "Demografía: Seinen",
            "Género: Comedia, acción",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 960x720p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 699,76MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Nanikano Fansub, Kapwham Enterprises",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrRHpUWkAAZVVD?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/RidingbeanGD" },
  
        ]
    }


,
    "shinpi-no-sekai-el-hazard": {  
        titulo: "Shinpi no Sekai El-Hazard [Dual Audio] [7/7]",
        tituloBusqueda: "Shinpi no Sekai El-Hazard",
        portada: "https://pbs.twimg.com/media/GdrdumjWoAAvbff?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEHz4mXsAABbDe?format=jpg&name=4096x4096",
        
        sinopsis: `
             La historia relata la historia de un estudiante de secundaria llamado Makoto.<br> 
     Un día, en su escuela, tratando de escapar del presidente del consejo estudiantil ve que todo se congela y una voz lo llama.<br> 
     Sigue a esta voz que lo lleva a las ruinas que se hallaron el sótano de su escuela<br> 
     y se encuentra con una joven mujer que cambiara la vida para siempre y darán comienzo a sus aventuras en el mundo de El Hazard.
        `,
        
        ficha: [
            "Titulo: Shinpi no Sekai El-Hazard",
            "Año: 1995",
            "Director: Hiroki Hayashi",
            "Estudio de animación: AIC, Pioneer LDC",
            "Demografía: Seinen",
            "Género: Aventura, comedia, romance, fantasía",
            "Duración: 50 min por ova",
            "Ovas: 7/7",
            "Resolución: 960x720p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 3,26GB",
            "Audio: Japones y Español",
            "Subs: Español",
            "Fansub: Anacrónico Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrdqjBWwAARFMB?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/elhazardGD" },
  
        ]
    }

,
    "koukou-tekken-den-tough": {  
        titulo: "Koukou Tekken-den Tough [Sub Español] [3/3]",
        tituloBusqueda: "Koukou Tekken-den Tough",
        portada: "https://pbs.twimg.com/media/GdrfM6AWsAA8O1-?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcEJzpNWYAAc8PB?format=jpg&name=medium",
        
        sinopsis: `
             Hace algunos años atras en una pelea clandestina entre un Profesional de la Lucha Libre y el sucesor del Estilo Nadashinkage<br> 
             (una forma secreta asesina) por saber cual arte marcial era la más fuerte del mundo, el Estilo Nadashinkage logró salir victorioso de ese encuentro.<br> 
             Sin embargo, en el presente, el hombre que defendió la Lucha Profesional a regresado con la intención de destruir el Estilo Nadashinkage<br>
             a cualquier costo; ahora será el turno de Keybo, el sucesor del Estilo Nadashinkage y es su deber defenderlo. 
        `,
        
        ficha: [
            "Titulo: Koukou Tekken-den Tough",
            "Año: 2002",
            "Director: Yukio Nishimoto",
            "Estudio de animación: AIC",
            "Demografía: Seinen",
            "Género: Acción, gore, peleas",
            "Duración: 50 min por ova",
            "Ovas: 3/3",
            "Resolución: 704x400p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 818,58MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Dairokkan No Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrfP83XgAAstB4?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/shootfighterGD" },
  
        ]
    }


,
    "mudazumo-naki-kaikaku-the-legend-of-koizumi": {  
        titulo: "Mudazumo Naki Kaikaku: The Legend of Koizumi [Sub Español] [3/3]",
        tituloBusqueda: "Mudazumo Naki Kaikaku: The Legend of Koizumi",
        portada: "https://pbs.twimg.com/media/GdrrgPLX0AAEbNe?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNu6EAWcAAEsMd?format=jpg&name=medium",
        
        sinopsis: `
             Cuando todo lo demás falla, la diplomacia de los países se resuelve mediante una partida de Mahjong.<br> 
    El Primer Ministro de Japón, Junichiro Koizumi se enfrentará a los líderes más poderosos del mundo para demostrarles que la gloriosa nación nipona<br> 
   no es ninguna islita desdeñable. En su misión lo acompañarán el ministro de Relaciones Exteriores Taro Aso y Taizo Sugimura, un miembro de la Dieta.
        `,
        
        ficha: [
            "Titulo: Mudazumo Naki Kaikaku: The Legend of Koizumi",
            "Año: 2010",
            "Director: Tsutomu Mizushima",
            "Estudio de animación: TYO Animations",
            "Demografía: Seinen",
            "Género: Comedia, mahjong, política",
            "Duración: 30 min",
            "Ovas: 3/3(3x1)",
            "Resolución: 848x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 345,33MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Tanoshii Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrrjngXkAAnzoj?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/LegendkoizumiGD" },
  
        ]
    }




,
    "the-samurai": {  
        titulo: "The Samurai [Dual Audio]",
        tituloBusqueda: "The Samurai",
        portada: "https://pbs.twimg.com/media/GdrtHwDWIAA2sz_?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNvaMjWIAAuJdO?format=jpg&name=small",
        
        sinopsis: `
             En el pasado, un poderoso líder ninja fue derrotado por un valiente samurái.<br><br>

     Años más tarde, un descendiente de ese samurái va a clase como un chico normal y corriente,<br> 
     pero un día su vida se vuelve del revés cuando dos chicas descendientes del ninja<br>
     bastante atractivas van buscando venganza por la derrota de su antepasado.<br><br>

     El joven samurái es un maestro en todas las artes de lucha, pero es un completo inútil con el sexo contrario, y esas chicas lo saben.
        `,
        
        ficha: [
            "Titulo: The Samurai",
            "Año: 1987",
            "Director: Kazuko Kodama y Takayuki Goto",
            "Estudio de animación: Ginga Teikoku",
            "Demografía: Seinen",
            "Género: Comedia, drama, ecchi, vida escolar",
            "Duración: 50 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 674x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 1,50GB",
            "Audio: Japones e Inglés",
            "Subs: Español",
            "Fansub: AniMugen Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdrtDebWIAAMCCK?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/ThesamuraiGD" },
  
        ]
    }



,
    "trava-fist-planet": {  
        titulo: "Trava: Fist Planet [Sub Español] [4/4]",
        tituloBusqueda: "Trava: Fist Planet",
        portada: "https://pbs.twimg.com/media/GdsMhBmXwAAPDbI?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNv_uBW8AAnOwx?format=jpg&name=4096x4096",
        
        sinopsis: `
             En un futuro muy, muy lejano, dos alienígenas son enviados al planeta Fable para marcar el Área 78.<br> 
    La recompensa por cumplir con su contrato es muy rentable, así que ¿por qué iban a tener un mal presentimiento por un trabajo tan fácil?<br><br>

    Como si eso no fuera suficiente, recogen a una extraña chica llamada Mikuru, a quien encuentran cerca del planeta y sin ningún recuerdo.<br> 
    Los tres pronto descubrirán las sorpresas que les aguardan en el planeta.
        `,
        
        ficha: [
            "Titulo: Trava: Fist Planet",
            "Año: 2002",
            "Director: Takeshi Koike",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Acción, mecha, ciencia ficción",
            "Duración: 50 min",
            "Ovas: 4/4(4x1)",
            "Resolución: 720x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 615,87MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: poxitron",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdsMdOZXwAAv4Bq?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/TravaGD" },
  
        ]
    }


,
    "kyoufu-no-bio-ningen-saishuu-kyoushi": {  
        titulo: "Kyoufu no Bio Ningen Saishuu Kyoushi [Sub Español]",
        tituloBusqueda: "Kyoufu no Bio Ningen Saishuu Kyoushi",
        portada: "https://pbs.twimg.com/media/GdsNmHtWEAAQF0k?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNwRYdXgAA7R9L?format=jpg&name=medium",
        
        sinopsis: `
             En una escuela deteriorada, el "Maestro Definitivo" Ganpachi es enviado para volver a encarrilar las cosas<br> 
    y preparar a los estudiantes delincuentes para el mundo real. Pero los estudiantes no quieren que Ganpachi arruine la pandilla que formaron,<br> 
    por lo que su jefa, Hinako, contraataca a Ganpachi ayudada por su poder secreto... su ropa interior de gatito de la suerte.<br> 
    Las cosas se ponen más interesantes cuando descubrimos que Ganpachi es el resultado de experimentos genéticos.
        `,
        
        ficha: [
            "Titulo: Kyoufu no Bio Ningen Saishuu Kyoushi",
            "Año: 1988",
            "Director: Toyoo Ashida",
            "Estudio de animación: J.C.Staff",
            "Demografía: Seinen",
            "Género: Acción, aventura, comedia, sobrenatural",
            "Duración: 60 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (LD-RIP) (SOFT-SUBS)",
            "Tamaño: 454MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: faketo_1, smaug",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdsNqFwXIAA1-dJ?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/UltimateacherGD" },
  
        ]
    }



,
    "usagi-chan-de-cue!!": {  
        titulo: "Usagi-chan de Cue!! [Dual Audio] [3/3]",
        tituloBusqueda: "Usagi-chan de Cue!!",
        portada: "https://pbs.twimg.com/media/GdsPFGqXUAAlyFQ?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GcNwgKGXYAAoQHe?format=jpg&name=medium",
        
        sinopsis: `
             Haru Matogi es un chico que se preocupa por los animales, especialmente por los conejos que hay en el tejado de su instituto.<br> 
 Un día, su compañera de clases Mikami Inaba, sostiene una pelea contra un individuo muy fuerte en el tejado y se cae del edificio por proteger a una coneja.<br> ¡Pero en vez de matarse, se combina con la coneja! La nueva apariencia de Mimika es rubia,<br> 
    es su combinación de Inaba y la coneja, quien es realmente feliz estando con Haru.<br> 
    Pero su amiga de la infancia Miku, quien esta enamorada en secreto de Haru, hará lo posible para no perder al amor de su vida. 
        `,
        
        ficha: [
            "Titulo: Usagi-chan de Cue!!",
            "Año: 2001",
            "Director: Tooru Yoshida",
            "Estudio de animación: Chaos Project",
            "Demografía: Seinen",
            "Género: Comedia, ecchi, vida escolar, acción",
            "Duración: 30 min por ova",
            "Ovas: 3/3",
            "Resolución: 720x540p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 2,60GB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: Nanikano Fansub",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GdsPAWxWEAAGZP0?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/UsagichanGD" },
  
        ]
    }


,
    "one-outs": {  
        titulo: "One Outs [Sub Español] [25/25]",
        tituloBusqueda: "One Outs",
        portada: "https://pbs.twimg.com/media/GeALj08WMAA2yEQ?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv5-AloXcAABNm0?format=png&name=large",
        
        sinopsis: `
             La historia se basa en un pitcher llamado Tokuchi Toa capaz de lanzar rectas a tan solo 134 km/h (8 3 m/h),<br> 
            a pesar de no contar con un amplio repertorio de lanzamientos ni contar con una buena velocidad es el rey indiscutible de una forma de béisbol llamda "One Out".<br> 
            La historia empieza cuando Hiromichi Kojima; el bateador estrella del ficticio equipo de los Lycaons de la Liga Japonesa del Pacífico,<br> 
            viaja a la isla de Okinawa para entrenarse y superar una mala racha y aquí es donde conoce a Tokuchi.<br>
            Debido a la insistencia de Kojima, Tokuchi firma con los Lycaons pero con un contrato inusual: gana 5.000.000 yen por cada bateador que elimine,<br> 
            pero pierde 50.000.000 de yen por cada punto que pierda, significando esto que no puede dar bases por bola, ni permitir hits ni errores.<br> 
            Llegarán o no los Lycaons a ganar la liga...
        `,
        
        ficha: [
            "Titulo: One Outs",
            "Año: 2008",
            "Director: Yuzo Sato",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Deporte, suspenso, drama",
            "Duración: 25 min por capítulo",
            "Capítulos: 25/25",
            "Resolución: 1280x720p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 7,91GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Tret",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwPO8eCW4AAWLx-?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/one-outs-TBX" },
  
        ]
    }



,
    "tenjou-tenge": {  
        titulo: "Tenjou Tenge [Dual Audio] [24/24]",
        tituloBusqueda: "Tenjou Tenge",
        portada: "https://pbs.twimg.com/media/GwUUP5yWgAE1OOD?format=png&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv5-iSwXcAEST4x?format=png&name=large",
        
        sinopsis: `
             Sōichiro Nagi y Bob Makihara son dos estudiantes que han tomado el control de 99 colegios a través de sus puños,<br> 
            escogiendo la academia Tōdō como la número 100, pero se encuentran con que en este lugar hay personas mucho más fuertes que ellos.<br> 
            Esto se debe a que Tōdō fue fundada con el propósito de convertirse en un lugar donde mantener vivas las artes marciales de antaño.<br> 
            Ellos se encuentran con Maya Natsume, quien es la capitana del último club que se interpone ante el control total del Consejo Disciplinario, el Club Jūken.<br> 
            Cada año los diferentes grupos pelean por el control de la escuela, aunque antes de empezar, ya el Consejo Disciplinario ha empezado a destruir a sus opositores.
        `,
        
        ficha: [
            "Titulo: Tenjou Tenge",
            "Año: 2004",
            "Director: Toshifumi Kawase",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Acción, ecchi, vida escolar",
            "Duración: 25 min por capítulo",
            "Capítulos: 24/24",
            "Resolución: 1440x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 14,10GB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: Team Kurosaki",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwUUgeTXQAI7Vl6?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/tenjou-tenge-TBX" },
  
        ]
    }


,
    "hyper-police": {  
        titulo: "Hyper Police [Dual Audio] [25/25]",
        tituloBusqueda: "Hyper Police",
        portada: "https://pbs.twimg.com/media/GwUnnrhXQAAoC9E?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6Bj5LX0AAhYXz?format=png&name=large",
        
        sinopsis: `
             Natsuki Sasahara, una excelente cazarrecompensas, hija de un humano y una demonio-gato del futuro, protege las leyes de los humanos y de los monstruos.<br> 
         Después de un trágico accidente, Natsuhime es reclutada por el Cuerpo de Policía junto con Sakura, una zorra de nueve colas con grandes deseos de conseguir nuevos poderes.<br> 
         Ubicada en el futuro con una buena combinación entre ciencia ficción, novela policíaca, monstruos y una cómica fantasía.
        `,
        
        ficha: [
            "Titulo: Hyper Police",
            "Año: 1997",
            "Director: Takahiro Ōmori",
            "Estudio de animación: Pierrot",
            "Demografía: Seinen",
            "Género: Acción, comedia, post-apocalíptico",
            "Duración: 25 min por capítulo",
            "Capítulos: 25/25",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 5,75GB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: TusDivxTeam",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwUlkxlXwAADc_z?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/hyper-police-TBX" },
  
        ]
    }


,
    "ryuusei-sentai-musumet": {  
        titulo: "Ryuusei Sentai Musumet [Dual Audio] [13/13]",
        tituloBusqueda: "Ryuusei Sentai Musumet",
        portada: "https://pbs.twimg.com/media/GwPyS18XkAA4FMH?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6CdjRXwAAfTEb?format=png&name=medium",
        
        sinopsis: `
             Un día, siete estrellas fugaces cayeron en Japón, las cuales eran de 7 colores y con poderes terribles.<br>
            Los que tocaron las estrellas fueron convertidos en monstruos.<br> 
            Fue entonces cuando dos científicos, consiguieron 3 estrellas secretamente y las estudiaron,<br> 
            descubrieron que podían controlar sus poderes por medio de un casco especial que ellos diseñaron.<br> 
            El nuevo casco, llamado "Musumet", le da al que lo posee superfuerza, amplifica la agilidad y el poder ilimitadamente.
        `,
        
        ficha: [
            "Titulo: Ryuusei Sentai Musumet",
            "Año: 2004",
            "Director: Shigeru Kimiya",
            "Estudio de animación: TNK",
            "Demografía: Seinen",
            "Género: Aventura, comedia, ecchi",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 1024x768p (DVD-RIP)",
            "Tamaño: 4,73GB",
            "Audio: Español Latino y Japones",
            "Subs: No",
            "Fansub: Team Kurosaki",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwPwenGWQAAUHAR?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/ryuusei-sentai-musumet-TBX" },
  
        ]
    }



,
    "buttobi!!-cpu": {  
        titulo: "Buttobi!! CPU [Sub Español] [3/3]",
        tituloBusqueda: "Buttobi!! CPU",
        portada: "https://pbs.twimg.com/media/GwPTUuUXMAAZItm?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6EpyxXQAA-iWt?format=png&name=large",
        
        sinopsis: `
             Akira es un chico normal... bueno, normal si no tenemos en cuenta el hecho de que a veces se olvide que hay un mundo fuera del ciberespacio<br>
            y que no sea consciente de las diferencias entre chicos y chicas.<br> 
            Su vida da un dramático giro el día en que atreve a salir al mundo real a comprarse un nuevo ordenador<br>
          y ... acaba con algo mucho mejor de lo que podía imaginar Cuando abre la caja descubre que su ordenador es mucho más potente de lo que podía imaginar, en muchos sentidos.<br>  Se trata de una máquina biomecánica llamada Mimi A partir de ahí, la vida de Akira se vuelve mucho más complicada.<br> 
            Por suerte, tiene algo anhelado por cualquiera: una compañera leal y una colega que hará literalmente cualquier cosa por él.<br> 
            No obstante, Akira descubrirá que la única forma de mantener funcionando a Mimi es algo que nunca hubiera imaginado, puesto que su principal fuente de energía es la actividad sexual.               
        `,
        
        ficha: [
            "Titulo: Buttobi!! CPU",
            "Año: 1997",
            "Director: Masamitsu Hidaka",
            "Estudio de animación: OLM",
            "Demografía: Seinen",
            "Género: Comedia, ecchi",
            "Duración: 30 min por ova",
            "Ovas: 3/3",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 643,61MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Horadric",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwPRtDRW8AUYVyB?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/buttobi-cpu-TBX" },
  
        ]
    }

,
    "bokura-wa-minna-kawai-sou": {  
        titulo: "Bokura wa Minna Kawai-sou [Sub Español] [12/12]",
        tituloBusqueda: "Bokura wa Minna Kawai-sou",
        portada: "https://pbs.twimg.com/media/GwLUVM8XAAAjpxA?format=png&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6FALEWkAAaVdD?format=png&name=4096x4096",
        
        sinopsis: `
             Usa, un estudiante de secundaria que aspira a comenzar un estilo de vida de soltero, se muda a un apartamento nuevo,<br> 
            solo para descubrir que no sólo comparte una habitacion con un compañero de cuarto pervertido que tiene una obsesion para las niñas menores de edad,<br> 
            sino tambien que otra chica, Ritsu, un amor a primera vista, que vive en el mismo edificio.
        `,
        
        ficha: [
            "Titulo: Bokura wa Minna Kawai-sou",
            "Año: 2014",
            "Director: Shigeyuki Miya",
            "Estudio de animación: Brain's Base",
            "Demografía: Seinen",
            "Género: Vida escolar, comedia, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 1280x720p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 8,14GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Ñyuum",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwLUHpHXIAAW9BX?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/bokura-wa-minna-TBX" },
  
        ]
    }



,
    "kyoukasho-ni-nai!": {  
        titulo: "Kyoukasho ni Nai! [Sub Español] [2/2]",
        tituloBusqueda: "Kyoukasho ni Nai!",
        portada: "https://pbs.twimg.com/media/GwO3rGeWoAEcC6D?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6MSM6XAAEnANk?format=png&name=large",
        
        sinopsis: `
             Oraku es un hombre afortunado... Tiene un cómodo trabajo como profesor de un instituto cercano.<br> 
            Tiene a Satsuki, una compañera de trabajo con la cual espera casarse algun día.<br> 
            Tiene a Aya, una bella estudiante que se ha enamorado de él.<br> 
            Tiene al padre de Aya, un millonario que desea que su hijita sea feliz y la ha mandado a vivir con Oraku.<br> 
            Oraku es un hombre muy afortunado...<br>
            Por supuesto a Aya no hay nada que le guste más que provocar a Oraku paseándose por su apartamento medio desnuda.<br> 
            Desgraciadamente el padre de Aya ha conseguido el dinero que tiene al convertirse en un capo del crimen, y matará a Oraku lentamente si Aya no permanece totalmente pura.<br>
            Ahora bien, Oraku no sólo tiene que reprimirse si no que además tiene que proteger a Aya de las hordas de hombres y mujeres que quieren poner las manos en su cuerpo.<br> 
            Y, claro está, si Satsuki o cualquiera del resto de profesores descubren que está viviendo con una de sus estudiantes,<br> 
            será despedido para siempre de su empleo como profesor. Realmente Oraku es un hombre afortunado...               
        `,
        
        ficha: [
            "Titulo: Kyoukasho ni Nai!",
            "Año: 1998",
            "Director: Ooba Hideaki",
            "Estudio de animación: AIC",
            "Demografía: Seinen",
            "Género: Comedia, ecchi, vida escolar",
            "Duración: 40 min por ova",
            "Ovas: 2/2",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 779,20MB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: faketo_1",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwO3n9FXgAA-yk_?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/kyoukasho-ni-nai-TBX" },
  
        ]
    }



,
    "maison-ikkoku": {  
        titulo: "Maison Ikkoku [Dual Audio] [96/96]",
        tituloBusqueda: "Maison Ikkoku",
        portada: "https://pbs.twimg.com/media/GwO_g40XUAAmWr_?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6Mw6NXgAADn2s?format=png&name=4096x4096",
        
        sinopsis: `
             Godai es un pésimo estudiante universitario que vive en una destartalada casa de apartamentos llamada Maison Ikkoku.<br> 
            Entre los demás residentes se encuentran la entrometida señora Ichinose, la sexy Akemi Roppongi y el misterioso Yotsuya.<br> 
            Todos ellos son muy dados a celebrar fiestas desenfrenadas lo que dificulta el estudio de Godai. En medio de este caos llega Kyoko,<br> 
            que acaba de enviudar, como nueva encargada de la casa de huéspedes. Godai enseguida se enamora de ella, pero no se atreve a decírselo.<br> 
            A medida que pasa el tiempo, su relación afectiva se desarrolla lentamente en medio de la pintoresca vida de la Maison Ikkoku<br>
            y a pesar de todo tipo de obstáculos para el amor.
        `,
        
        ficha: [
            "Titulo: Maison Ikkoku",
            "Año: 1986",
            "Director: Kazuo Yamazaki (eps 1-26), Takashi Anno (eps 27-52), Naoyuki Yoshinaga (eps 53-96)",
            "Estudio de animación: Studio Deen",
            "Demografía: Seinen",
            "Género: Comedia, drama, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 96/96",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 21,83GB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwO_cVJW8AAvTf9?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/maison-ikkoku-TBX" },
  
        ]
    }



,
    "master-keaton": {  
        titulo: "Master Keaton [Sub Español] [39/39]",
        tituloBusqueda: "Master Keaton",
        portada: "https://pbs.twimg.com/media/GwLRemHWwAAin9P?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6NoR9WEAAR_ED?format=png&name=large",
        
        sinopsis: `
             Taichi Keaton es un arqueologo y veterano en la guerra de las Malvinas para las SAS.<br> 
            Aunque imparte clases en la universidad, su verdadera profesion es investigador privado para la prestigiosa aseguradora Lloyd's of London<br> 
            para la cual viaja por todo el globo resolviendo misterios e intentos de fraude.
        `,
        
        ficha: [
            "Titulo: Master Keaton",
            "Año: 1998",
            "Director: Masayuki Kojima",
            "Estudio de animación: Madhouse",
            "Demografía: Seinen",
            "Género: Aventura, drama, misterio",
            "Duración: 25 min por capítulo",
            "Capítulos: 39/39 (24+15 Ovas)",
            "Resolución: 940x720p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: 25,08GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Ñyuum",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwLRPvSW8AIVH8E?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/master-keaton-TBX" },
  
        ]
    }


,
    "spirit-of-wonder-china-san-tanpenshuu": {  
        titulo: "Spirit of Wonder: China-san Tanpenshuu [Dual Audio] [3/3]",
        tituloBusqueda: "Spirit of Wonder: China-san Tanpenshuu",
        portada: "https://pbs.twimg.com/media/GwQHzHRWEAAngHn?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GwQHJtpWgAA_Jfm?format=png&name=medium",
        
        sinopsis: `
             3 nuevos cortos que tendrán como protagonista a Miss China.<br>
<br>
            1ª: “Empequeñeciendo a Miss China”<br>
            El huésped más problemático de Miss China es el Dr. Breckenridge, un científico loco que invierte todo su dinero en nuevos inventos en lugar de pagar su alquiler.<br>
            Los problemas empezarán cuando la joven es alcanzada por una de sus invenciones y empieza a reducir su tamaño.<br>
<br>
            2ª: “El Planeta de Miss China”<br>
            Para compensar a Miss China por su retraso en el pago del alquiler, el Dr. Breckenridge, <br>
            ofrece a la muchacha la posibilidad de dar un paseo por Marte gracias a un sorprendente telescopio capaz de reflejar un lugar lejano en el sitio donde se encuentra.<br>
<br>
            3ª: “Miss China y sus copas de sake”<br>
            En este corto episodio, vemos a Miss China luego de una ardua jornada de trabajo, recordando su infancia y como siente el hecho de vivir en otro país,<br> 
            repleta de responsabilidades luego de la muerte de sus padres.               
        `,
        
        ficha: [
            "Titulo: Spirit of Wonder: China-san Tanpenshuu",
            "Año: 2001",
            "Director: Mitsuru Hongo",
            "Estudio de animación: Ajia-do",
            "Demografía: Seinen",
            "Género: Comedia, ciencia ficción",
            "Duración: 15 min por especial",
            "Capítulos/Ovas: 3/3",
            "Resolución: 704x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 590,49MB",
            "Audio: Español y Japones",
            "Subs: Español",
            "Fansub: Anacrónico Fansub",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwQHxNOXgAENvDn?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/Spirit-Wonder-Tanpenshuu" },
  
        ]
    }



,
    "sakura-tsuushin": {  
        titulo: "Sakura Tsuushin [Español] [12/12]",
        tituloBusqueda: "Sakura Tsuushin",
        portada: "https://pbs.twimg.com/media/GwP0-9cWUAAwhoQ?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/Gv6SRXaWYAARGZ8?format=jpg&name=medium",
        
        sinopsis: `
             Touma llega a Tokio para presentarse a los exámenes de acceso a la universidad, pero la misma noche, llega una joven muy guapa a su habitación.<br> 
            Parece que lo conoce, pero él no la reconoce a ella, al menos, no la recuerda. La arpía adolescente es Urara, su prima.<br> 
            Parece ser que está enamorada de Touma, pero se enfada cuando ve a una modelo, Mieko, allá donde él va.<br> 
            Desafortunadamente, Touma suspendió el examen, pero le dice a Mieko que lo aprobó.<br>
            Así que ella acude a la Universidad, creyendo que Touma también irá.<br> 
            Así empezará la misión de Urara de intentar separarlos.
        `,
        
        ficha: [
            "Titulo: Sakura Tsuushin",
            "Año: 1997",
            "Director: Kunitoshi Okajima",
            "Estudio de animación: Shaft",
            "Demografía: Seinen",
            "Género: Ecchi, comedia, romance",
            "Duración: 25 min por capítulo",
            "Capítulos: 12/12",
            "Resolución: 688x516p (DVD-RIP)",
            "Tamaño: 659,07MB",
            "Audio: Español",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwPzp6xXwAA4x1q?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/sakura-mail-TBX" },
  
        ]
    }


,
    "ike!-ina-chuu-takkyuu-bu": {  
        titulo: "Ike! Ina-chuu Takkyuu-bu [Sub Español] [26/26]",
        tituloBusqueda: "Ike! Ina-chuu Takkyuu-bu",
        portada: "https://pbs.twimg.com/media/GwVa4BhW8AA0A1G?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GuwrrSTXAAICgtZ?format=png&name=small",
        
        sinopsis: `
             El club de Ping Pong masculino tiene 6 miembros.<br> 
            Dos son relativamente "normales"; sin embargo el resto consiste en un amante de las bromas tontas con un olor corporal capaz de tumbar a un elefante,<br> 
            un completo depravado sexual y dos pervertidos aficionados al cosplay.<br> 
            Añadámosle una atractiva aunque dictatorial mánager y un pusilánime profesor encargado de la supervisión del club y tendremos al grupo al completo,<br> 
            auténtica carne de frenopático.
        `,
        
        ficha: [
            "Titulo: Ike! Ina-chuu Takkyuu-bu",
            "Año: 1995",
            "Director: Masami Hata",
            "Estudio de animación: Grouper Productions",
            "Demografía: Seinen",
            "Género: Comedia",
            "Duración: 25 min por capítulo",
            "Capítulos: 26/26",
            "Resolución: 640x480p (DVD-RIP) (HARD-SUBS)",
            "Tamaño: 4,41GB",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Meiji no Fansub",
            "Servidor: Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/GwVWrsLWkAEPLtH?format=jpg&name=large",

        descargas: [
            { servidor: "terabox", url: "https://exe.io/ping-pong-club-TBX" },
  
        ]
    }


,
    "gun-frontier": {  
        titulo: "Frontera sin ley [Dual Audio] [13/13]",
        tituloBusqueda: "Gun Frontier",
        portada: "https://pbs.twimg.com/media/GcdXmeyX0AAk2L2?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/GbuBrOiWEAkVj74?format=jpg&name=4096x4096",
        
        sinopsis: `
             Gun Frontier es una tierra dura y estéril, donde a los débiles no se les permite soñar.<br> 
            También es una tierra sagrada para los hombres verdaderos, porque no hay ningún otro lugar que los pueda hacer sentir tan vivos.<br> 
            El legendario pirata Capitán Harlock y el samurai errante Tochiro llegan al territorio de los Estados Unidos,<br> 
            a la frontera occidental, acompañados por una misteriosa mujer a la que conocieron en el camino.<br> 
            Ellos están buscando un clan perdido de inmigrantes japoneses.
        `,
        
        ficha: [
            "Titulo: Gun Frontier",
            "Año: 2002",
            "Director: Soichiro Zen",
            "Estudio de animación: Vega Entertainment",
            "Demografía: Seinen",
            "Género: Acción, Western",
            "Duración: 25 min por capítulo",
            "Capítulos: 13/13",
            "Resolución: 640x480p (DVD-RIP) (SOFT-SUBS)",
            "Tamaño: 3,21GB",
            "Audio: Español Latino y Japones(el capitulo 2 sólo está en español)",
            "Subs: Español",
            "Fansub: animesub(camus)",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GcdXde7WAAAxYTP?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/GunfrontierGD" },
  
        ]
    }



,
    "hareluya-boy": {  
        titulo: "Hareluya II Boy [Sub Español e Inglés] [5/25]",
        tituloBusqueda: "Hareluya II Boy",
        portada: "https://pbs.twimg.com/media/GdxCJ7AWwAAm2wQ?format=jpg&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GbknATyWQAAugDR?format=jpg&name=4096x4096",
        
        sinopsis: `
             Hareluya Hibino tiene una ambición en la vida: ¡conquistar el mundo entero! A pesar de su exterior duro, no es una mala persona y,<br>
            cuando llegue el momento, hará todo lo posible para ayudar a los necesitados. Junto con el aspirante a pintor Kiyoshiro,<br> 
            Hareluya se enfrentará a cualquier obstáculo que la vida le depare.
        `,
        
        ficha: [
            "Titulo: Hareluya II Boy",
            "Año: 1997",
            "Director: Kiyoshi Egami",
            "Estudio de animación: Triangle Staff",
            "Demografía: Shōnen",
            "Género: Acción, comedia, drama",
            "Duración: 25 min por capítulo",
            "Capítulos: 5/25",
            "Resolución: 1920x1080p (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: N/A",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/SubsPlease",
            "Servidor: Google Drive/Terabox "
        ],

        capturas: "https://pbs.twimg.com/media/GdxB42kWMAEeGih?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/hareluya-ll-boyGDS" },
            { servidor: "terabox", url: "https://exe.io/hareluya-ll-boyTBX" },
  
        ]
    }


,
    "batsu-and-terry": {  
        titulo: "Batsu & Terry [Sub Español e Inglés]",
        tituloBusqueda: "Batsu & Terry",
        portada: "https://pbs.twimg.com/media/G7UQDNVXwAAZ3Eo?format=jpg&name=medium",
        portadaBusqueda: "https://pbs.twimg.com/media/G6zc62yXAAAB_Y4?format=png&name=large",
        
        sinopsis: `
             Bats y Terry son el pitcher y el catcher del equipo de béisbol del instituto, además de ser dos chicos duros<br> 
             dispuestos a ayudar a cualquiera (en especial a las chicas guapas) en peligro.
        `,
        
        ficha: [
            "Titulo: Batsu & Terry",
            "Año: 1987",
            "Director: Nobuo Mizuta",
            "Estudio de animación: Sunrise",
            "Demografía: Shōnen",
            "Género: Comedia, drama, deporte",
            "Duración: 80 min",
            "Capítulos/Ovas: 1/1",
            "Resolución: 640x480p (LaserDisc-RIP) (SOFT-SUBS)",
            "Tamaño: 445,09MB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/Amadeiro",
            "Servidor: Google Drive/Terabox "
        ],

        capturas: "https://pbs.twimg.com/media/G7tk7WuXUAAg0cn?format=jpg&name=medium",

        descargas: [
            { servidor: "drive", url: "https://exe.io/batsu-and-terryGDS" },
            { servidor: "terabox", url: "https://exe.io/batsu-and-terryTBX" },
  
        ]
    }



,
    "bad-boys": {  
        titulo: "Bad Boys [Sub Español e Inglés] [5/5]",
        tituloBusqueda: "Bad Boys",
        portada: "https://pbs.twimg.com/media/Gdx7WVnWEAAJO5X?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GbkgL3sXYAE_F3x?format=jpg&name=small",
        
        sinopsis: `
             Tsukasa, Yoji y Eiji son amigos y miembros de una pandilla de motociclistas.<br>
                    Paseando por las calles de Hiroshima, su objetivo en la vida es superar a todas las demás bandas de su ciudad.
        `,
        
        ficha: [
            "Titulo: Bad Boys",
            "Año: 1998",
            "Director: Osamu Sekita (ep 1) Takeshi Yamaguchi (eps 2-5)",
            "Estudio de animación: J.C.Staff",
            "Demografía: Seinen",
            "Género: Comedia, acción, pandilleros",
            "Duración: 50 min por ova",
            "Ovas: 5/5",
            "Resolución: 700x476p (1-3) 640x478p (4-5)  (VHS-RIP) (SOFT-SUBS)",
            "Tamaño: 3,60GB",
            "Audio: Japones",
            "Subs: Español e Inglés",
            "Fansub: Vanifruzhi/Saizen(En)(1-3) - Amadeiro(En)(4-5)",
            "Servidor: Google Drive/Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/Gdx7aQ3XUAAGFr1?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/bad-boysGDS" },
            { servidor: "terabox", url: "https://exe.io/bad-boysTBX" },
  
        ]
    }


,
    "pat": {  
        titulo: "Yakyuukyou no Uta [Sub Español] [2/25]",
        tituloBusqueda: "Yakyuukyou no Uta",
        portada: "https://pbs.twimg.com/media/G7UcQrGW0AAj8F5?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/GeAdNVMWIAAOfWk?format=png&name=small",
        
        sinopsis: `
             Los Tokyo Mets, un equipo de béisbol profesional que lucha por salir del fondo de la tabla, sacuden al mundo del deporte con una decisión histórica: 
             fichar a Yuki Mizuhara, la primera mujer jugadora en la liga.<br>
<br>
     Enfrentando prejuicios y grandes rivales, la joven lanzadora zurda deberá demostrar su valía utilizando su técnica secreta, la "Dream Ball",<br>
     mientras forma una alianza única con el veterano lanzador de 50 años, Tetsugoro Iwata.
        `,
        
        ficha: [
            "Titulo: Yakyuukyou no Uta",
            "Año: 1977",
            "Director: Tameo Kohanawa",
            "Estudio de animación: Nippon Animation",
            "Demografía: Shōnen",
            "Género: Deporte, drama",
            "Duración: 50 min por capítulo",
            "Capítulos: 2/25",
            "Resolución: 640x480p (VHS-RIP) (HARD-SUBS)",
            "Tamaño: N/A",
            "Audio: Japones",
            "Subs: Español",
            "Fansub: Vanifruzhi",
            "Servidor: Google Drive/Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/G7tlI6vXwAAh7y5?format=jpg&name=medium",

        descargas: [
            { servidor: "drive", url: "https://exe.io/patGD" },
            { servidor: "terabox", url: "https://exe.io/patTBX" },
  
        ]
    }



,
    "haikara-san-ga-tooru-1978": {  
        titulo: "Haikara-san ga Tooru 1978 [Sub Español, Ruso e Inglés] [5/42]",
        tituloBusqueda: "Haikara-san ga Tooru 1978",
        portada: "https://pbs.twimg.com/media/G7UhAeyX0AA_l4T?format=png&name=large",
        portadaBusqueda: "https://pbs.twimg.com/media/G6zc33WWwAA87vD?format=jpg&name=medium",
        
        sinopsis: `
             En el Japón de 1920, Benio es una chica extrovertida y deportista, muy segura de su misma y de sus ideas.<br> 
             Cuando conoce a Shinobu, un soldado alemán-japonés, ella inmediatamente lo despecia, pese a que le salva de diferentes situaciones embarazosas.<br> 
             Al llegar a casa, descubre que su familia ha arreglado un matrimonio concertado con la familia de Shinobu para que ambos se casen.
        `,
        
        ficha: [
            "Titulo: Haikara-san ga Tooru 1978",
            "Año: 1978",
            "Director: Kazuyoshi Yokota",
            "Estudio de animación: Nippon Animation",
            "Demografía: Shōjo",
            "Género: Drama, romance, comedia",
            "Duración: 25 min por capítulo",
            "Capítulos: 5/42",
            "Resolución: 1480x1080p (BD-RIP) (SOFT-SUBS)",
            "Tamaño: N/A",
            "Audio: Japones",
            "Subs: Español, Ruso e Inglés",
            "Fansub: Vanifruzhi(Es)/Ranmaru'sBoys(En)/Perevodildo(Ru)",
            "Servidor: Google Drive/Terabox"
        ],

        capturas: "https://pbs.twimg.com/media/G7tlApxWQAATlGh?format=jpg&name=medium",

        descargas: [
            { servidor: "drive", url: "https://exe.io/haikara-san-1978GD" },
            { servidor: "terabox", url: "https://exe.io/haikara-san-1978TBX" },
  
        ]
    }


,
    "futarigurashi-raw": {  
        titulo: "Futarigurashi [RAW] [36/36]",
        tituloBusqueda: "Futarigurashi (RAW)",
        portada: "https://pbs.twimg.com/media/GeALj08WMAA2yEQ?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GeAdTEtWoAAHtGn?format=png&name=large",
        
        sinopsis: `
             Futarigurashi sigue a un aspirante a mangaka erótico llamado Kenji Aoyama. Para pagar el alquiler, el hermano menor de su amigo, Hikari Satou,<br> 
            se ofrece a ser su compañero de cuarto. ¡Sin embargo resulta que "él" en casi todos los sentidos es una niña!<br> 
            La serie gira en torno a Kenji y Hikari involucrándose con varias mujeres.
        `,
        
        ficha: [
            "Titulo: Futarigurashi",
            "Año: 1998",
            "Director: Futa Morita",
            "Estudio de animación: TBS",
            "Demografía: Shōjo",
            "Género: Romance, ecchi, comedia",
            "Duración: 8 min por capítulo",
            "Capítulos: 36/36",
            "Resolución: 320x240p (VHS-RIP) (RAW)",
            "Tamaño: 1,39",
            "Audio: Japones",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GeALj08WMAA2yEQ?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/FutarigurashiGD" },

  
        ]
    }



,
    "yakyuukyou-no-uta-raw": {  
        titulo: "Yakyuukyou no Uta [26/26]",
        tituloBusqueda: "Yakyuukyou no Uta (RAW)",
        portada: "https://pbs.twimg.com/media/GeALj08WMAA2yEQ?format=jpg&name=4096x4096",
        portadaBusqueda: "https://pbs.twimg.com/media/GeAdNVMWIAAOfWk?format=png&name=small",
        
        sinopsis: `
             Los Tokyo Mets, un equipo de béisbol profesional que lucha por salir del fondo de la tabla, sacuden al mundo del deporte con una decisión histórica: 
             fichar a Yuki Mizuhara, la primera mujer jugadora en la liga.<br>
<br>
     Enfrentando prejuicios y grandes rivales, la joven lanzadora zurda deberá demostrar su valía utilizando su técnica secreta, la "Dream Ball",<br>
     mientras forma una alianza única con el veterano lanzador de 50 años, Tetsugoro Iwata.
        `,
        
        ficha: [
            "Titulo: Yakyuukyou no Uta",
            "Año: 1977",
            "Director: Tameo Kohanawa",
            "Estudio de animación: Nippon Animation",
            "Demografía: Shōnen",
            "Género: Deporte, drama",
            "Duración: 50 min por capítulo",
            "Capítulos: 26/26 (25 caps + Movie x1)",
            "Resolución: 640x480p (VHS-RIP)",
            "Tamaño: 12,7GB",
            "Audio: Japones",
            "Subs: No",
            "Fansub: N/A",
            "Servidor: Google Drive"
        ],

        capturas: "https://pbs.twimg.com/media/GeALj08WMAA2yEQ?format=jpg&name=4096x4096",

        descargas: [
            { servidor: "drive", url: "https://exe.io/YakyuukyouGD" },
  
        ]
    }





};