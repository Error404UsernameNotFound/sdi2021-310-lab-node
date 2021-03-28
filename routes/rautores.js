module.exports = function(app, swig) {

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });

        res.send(respuesta);
    });

    app.post('/autor', function(req, res) {
        res.send("<p>Autor agregado:</p>"
            + (!req.body.nombre ?
                "<p>Nombre no enviado en la petición.</p>" : ("<p>Nombre: " + req.body.nombre + "</p>"))
            + (!req.body.grupo ?
                "<p>Grupo no enviado en la petición.</p>" : ("<p>Grupo: " + req.body.grupo + "</p>"))
            + (!req.body.rol ?
                "<p>Rol no enviado en la petición.</p>" : ("<p>Rol: " + req.body.rol + "</p>")));
    });

    app.get("/autores", function(req, res) {
        let autores = [ {
            "nombre" : "Raúl Mínguez Rodríguez",
            "grupo" : "Los Altos",
            "rol" : "Cantante"
        }, {
            "nombre" : "Natalia Díaz Granda",
            "grupo" : "Las Bajas",
            "rol" : "Bajista"
        }, {
            "nombre" : "Alter ego",
            "grupo" : "Los Altos",
            "rol" : "Guitarrista"
        } ];

        let respuesta = swig.renderFile('views/autores.html', {
            concierto : 'Gala benéfica',
            autores : autores
        });

        res.send(respuesta);
    });

    app.get("/autores*", function(req, res) {
        res.redirect("/autores");
    });

};