urlLivro = "/livro/GetLivros";
urlPostLivro = "/livro/PostLivro"
urlEmprestimo = "/livro/GetDadosEmprestimo"
var colunaLivro = [
        { "data": "IdLivro", "visible": false },
        { "data": "Titulo", "title": "Titulo" },
        { "data": "Area", "title": "Area" },
        { "data": "Autor", "title": "Autor" },
        { "data": "Editora", "title": "Editora" }

]
var colunaEmprestimo = [
        { "data": "Usuario", "title": "Usuário" },
        { "data": "Livro", "title": "Livro" },
        { "data": "Editora", "title": "Editora" },
        { "data": "CodigoExemplar", "title": "Código Exemplar" },
        { "data": "DataEmprestimo", "title": "Dt. Emprestimo" },
        { "data": "DataDevolucao", "title": "Dt. Devolução" }
]


function getLivros() {
    var obj = []
    $.get(urlLivro, function (data) {
        $.each(data.item, function (i, item) {
            obj.push({
                "IdLivro": item.IdLivro,
                "Titulo": item.Titulo,
                "Area": item.Area,
                "Autor": item.Autor,
                "Editora": item.Editora
            });

            $("#sel-autor").select2({ data: data.selectAutor, width: "100%" });
            $("#sel-editora").select2({ data: data.selectEditora, width: "100%" });
        });
        fillTable("#tbl-livro", obj, colunaLivro);
    });
}

function getDadosEmprestimo() {
    var obj = []
    $.get(urlEmprestimo, function (data) {
        $.each(data, function (i, item) {
            obj.push({
                "Usuario": item.Usuario,
                "Livro": item.Livro,
                "Editora": item.Editora,
                "CodigoExemplar": item.CodigoExemplar,
                "DataEmprestimo": item.DataEmprestimo,
                "DataDevolucao": item.DataDevolucao
            });
        });
        fillTable("#tbl-emprestimo", obj, colunaEmprestimo);
    });
}

function postLivro() {
    var obj = []
    var campos = {
        "Titulo": $("#text-titulo").val(),
        "IdAutor": $("#sel-autor").val(),
        "IdEditora": $("#sel-editora").val(),
        "Area": $("#text-area").val()
    }

    $.post(urlPostLivro, campos, function (data) {
        var table = $("#tbl-livro").DataTable();

        alert(data.msg);
        $.each(data.item, function (i, item) {
            obj.push({
                "IdLivro": item.IdLivro,
                "Titulo": item.Titulo,
                "Area": item.Area,
                "Autor": item.Autor,
                "Editora": item.Editora
            });
        });

        //table.destroy();
        table.clear().rows.add(obj).draw();
    });
}

function fillTable(id, data, coluna) {
    $(id).DataTable({
        "data": data,
        "filter": true,
        "pageLength": 8,
        "responsive": true,
        "columns": coluna
    });
}

$(function () {
    getLivros();
    getDadosEmprestimo();

    $("#btn-inserir").click(function () {
        postLivro();
    });
});