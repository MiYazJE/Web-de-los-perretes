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
            title: 'Titulo de prueba 2',
            tipo: 'TECNOLOGIA', 
            fecha: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM'), 
            contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
            imagen: '../img/imagenSection.jpg',
            link: '#'
        }, {
            title: 'Titulo de prueba 3',
            tipo: 'TECNOLOGIA', 
            fecha: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM'), 
            contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
            imagen: '../img/imagenSection.jpg',
            link: '#'
        }, {
            title: 'Titulo de prueba 4',
            tipo: 'TECNOLOGIA', 
            fecha: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM'), 
            contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' ,
            imagen: '../img/imagenSection.jpg',
            link: '#'
        }, {
            title: 'Titulo de prueba 5',
            tipo: 'TECNOLOGIA', 
            fecha: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM'), 
            contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
            imagen: '../img/imagenSection.jpg',
            link: '#'
        }, {
            title: 'Titulo de prueba 6',
            tipo: 'TECNOLOGIA', 
            fecha: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM'), 
            contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' ,
            imagen: '../img/imagenSection.jpg',
            link: '#'
        }
    ];

    posts.forEach(function(item, index) {
        var post = `
            <div class="posts">
                <div class="noticias-imagen">
                    <img src="${item.imagen}" alt="noticia1">
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