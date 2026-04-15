const url = "http://localhost:8080/api/plantas";

// Guardar o actualizar
function guardar() {
    let id = $("#id").val();

    let planta = {
        nombre_comun: $("#nombre_comun").val(),
        nombre_cientifico: $("#nombre_cientifico").val(),
        descripcion: $("#descripcion").val()
    };

    if (id) {
        // UPDATE
        $.ajax({
            url: url + "/" + id,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(planta),
            success: function () {
                alert("Actualizado");
                limpiar();
                getPlantas();
            }
        });
    } else {
        // CREATE
        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(planta),
            success: function () {
                alert("Creado");
                limpiar();
                getPlantas();
            }
        });
    }
}

// LISTAR
function getPlantas() {
    $.getJSON(url, function (data) {

        let html = `
        <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Científico</th>
            <th>Descripción</th>
            <th>Acciones</th>
        </tr>`;

        data.planta.forEach(p => {
            html += `
            <tr>
                <td>${p.id}</td>
                <td>${p.nombre_comun}</td>
                <td>${p.nombre_cientifico}</td>
                <td>${p.descripcion}</td>
                <td>
                    <button onclick="editar(${p.id}, '${p.nombre_comun}', '${p.nombre_cientifico}', '${p.descripcion}')">✏️</button>
                    <button onclick="eliminar(${p.id})">🗑️</button>
                </td>
            </tr>`;
        });

        html += "</table>";

        $("#resultado").html(html);
    });
}

// EDITAR
function editar(id, nombre, cientifico, desc) {
    $("#id").val(id);
    $("#nombre_comun").val(nombre);
    $("#nombre_cientifico").val(cientifico);
    $("#descripcion").val(desc);
}

// ELIMINAR
function eliminar(id) {
    if (confirm("¿Eliminar planta?")) {
        $.ajax({
            url: url + "/" + id,
            type: "DELETE",
            success: function () {
                alert("Eliminado");
                getPlantas();
            }
        });
    }
}

// LIMPIAR FORM
function limpiar() {
    $("#id").val("");
    $("#nombre_comun").val("");
    $("#nombre_cientifico").val("");
    $("#descripcion").val("");
}