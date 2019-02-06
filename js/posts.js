$(document).ready(function() {

    moment.locale('es');

    var posts = [{
            title: 'Pipper, el primer perro español "influencer" en turismo de mascotas',
            tipo: 'TURISMO', 
            fecha: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM'), 
            contenido: 'Buscan concienciar a la sociedad sobre la integración de animales domésticos en los viajes',
            imagen: '../img/pipper2.jpg',
            link: 'noticias/noticia-pipper.html'
        }, {
            title: 'La valiente actuación de un perro policía de EEUU contra un ladrón',
            tipo: 'PERROS', 
            fecha: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM'), 
            contenido: 'El animal permitió la detención de un sospechoso de robar un coche al abalanzarse sobre él y derribarlo',
            imagen: '../img/perro-policia.jpg',
            link: 'noticias/noticia-perroPolicia.html'
        }, {
            title: 'El Museo del Perro abre sus puertas en Nueva York',
            tipo: 'CULTURA', 
            fecha: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM'), 
            contenido: 'Abren en Nueva York un nuevo museo llamado el museo del perro, abrira sus puuertas este 8 de febrero y contendra cuadros de la época victoriana del siglo XIX.',
            imagen: '../img/museoDelPerro2.jpg',
            link: 'noticias/noticia-museoDelPerro.html'
        }
    ];

    posts.forEach(function(item, index) {
        var post = `
            <div class="posts">
                <div class="noticias-imagen">
                    <a href="${item.link}" target="_blank"><img src="${item.imagen}" alt="noticia1"></a>
                </div>
                <div class="texto">
                    <div class="tipo">
                        <span>${item.tipo}</span>
                    </div>
                    <div class="titular">
                        <a href="${item.link}" target="_blank"><h2>${item.title}</h2></a>
                    </div>
                    <div class="estado">
                        <span class="fecha">${item.fecha}</span>
                        <span class="comentarios">0 Comentarios</span>
                    </div>
                    <div class="contenido">${item.contenido}</div>
                </div>
            </div>
        `;
        $('.wrap-noticias').append(post);
    });
});