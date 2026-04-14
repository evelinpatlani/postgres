const url = "http://localhost:3300/api/plantas";
// 🔹 post - listar plantas
function crearPlanta() {

    let planta = {
        nombre_comun: $("#nombre_comun").val(),
        nombre_cientifico: $("#nombre_cientifico").val(),
        descripcion: $("#descripcion").val()
    };

    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(planta),

        success: function(data) {
            alert("Planta creada correctamente");
            getPlantas();
        },

        error: function(err) {
            console.log(err);
            alert("Error al crear planta");
        }
    });
}

// 🔹 get - crear planta
function getPlantas() {
    $.getJSON(url, function(data) {

        let html = "<table border='1'>";
        html += "<tr><th>ID</th><th>Nombre común</th><th>Nombre científico</th><th>Descripción</th></tr>";

        data.planta.forEach(function(item) {
            html += "<tr>" +
                "<td>" + item.id + "</td>" +
                "<td>" + item.nombre_comun + "</td>" +
                "<td>" + item.nombre_cientifico + "</td>" +
                "<td>" + item.descripcion + "</td>" +
                "</tr>";
        });

        html += "</table>";

        $("#resultado").html(html);
    });
}