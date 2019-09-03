
$(document).on("click", "#btnSalvar", function () {
    var empresaForm = $(document).find('#empresaForm');

    if (empresaForm.valid() && validInputsTabs()) {
        salvar(empresaForm, urlCreateEmpresa).complete(function () {
            list(urlTableEmpresa);
        });
    } else {
        messageAlert(validation, error);
    }
});


$(document).on("blur", "#cnpj", function () {
    validateCnpj();
});


$(document).on("click", "#confirma", function () {
    deletar(urlDeleteEmpresa);
});



function validateCnpj() {
    var cnpj = $("#cnpj").val();

    if (cnpj === "")
        return;

    if ($('#cnpj').attr('readonly') === "readonly")
        return;

    if (!validarCNPJ(cnpj)) {
        messageAlert("CNPJ: " + cnpj + " Inválido", error);
        $("#cnpj").val("");
        return;
    }

    $.get(urlValidaCnpj, { cnpj: cnpj }, function (data) {
        if (data.isCnpjValido) {
            $("#cnpj").val("");
            messageAlert("CNPJ já existe nesta base. Contate o administrador e verifique a situação.", info);
        }
    }).fail(function (e) {
        if (e.status === 403) {
            messageAlert(salvarPermicaoAcesso, error);
        }
    });
}

function editar(id, urlGet, urlForm) {
    return form(urlForm).complete(function () {
        jqxhr.complete(function () {
            var idEmpresa = $(document).find("#Id");
            var razaoSocial = $(document).find("#razaoSocial");
            var cnpj = $(document).find("#cnpj");
            var inscricaoEstadual = $(document).find("#inscricaoEstadual");
            var nomeFantasia = $(document).find("#nomeFantasia");
            var responsavel = $(document).find("#responsavel");
            var email = $(document).find("#email");
            var paginaWeb = $(document).find("#paginaWeb");
            var telefoneContato = $(document).find("#telefoneContato");
            var ramal = $(document).find("#ramal");
            var telefoneCelular = $(document).find("#telefoneCelular");
            var cep = $(document).find("#cep");
            var logradouro = $(document).find("#logradouro");
            var numero = $(document).find("#numero");
            var complemento = $(document).find("#complemento");
            var bairro = $(document).find("#bairro");
            var cidade = $(document).find("#idCidade");
            var pais = $(document).find("#pais");
            var estado = $(document).find("#estado");


            $.get(urlGet, { id: id }, function (data) {
                idEmpresa.val(data.company.Id);
                razaoSocial.val(data.company.RazaoSocial);
                cnpj.val(data.company.CNPJ);
                cnpj.attr('readonly', true);

                inscricaoEstadual.val(data.company.InscricaoEstadual);
                nomeFantasia.val(data.company.NomeFantasia);
                responsavel.val(data.company.Responsavel);

                email.val(data.company.Email);
                paginaWeb.val(data.company.PaginaWEB);
                telefoneContato.val(data.company.TelefoneContato).trigger("blur");
                ramal.val(data.company.Ramal);

                telefoneCelular.val(data.company.TelefoneCelular).trigger("blur");
                cep.val(data.company.CEP);
                logradouro.val(data.company.Logradouro);
                numero.val(data.company.Numero);
                complemento.val(data.company.Complemento);
                bairro.val(data.company.Bairro);

                pais.val(data.company.Pais);
                estado.val(data.company.Estado);
                cidade.val(data.company.IdCidade).trigger("change");
            }).fail(function (e) {
                if (e.status === 403) {
                    messageAlert(visualizarPermicaoAcesso, error);
                }
            });
        });
    });
}

function getCombos() {
    var idCidade = $("#idCidade");

    return $.get(urlGetCombos, function (data) {
        preencheCombo(data.cidade, idCidade);

    }).fail(function (e) {
        messageAlert(error, e.Mensagem);
    });
}
