
$(document).ready(function () {
    if (obj) {
        $('#formdelete #Nome').val(obj.Nome);
        $('#formdelete #CEP').val(obj.CEP);
        $('#formdelete #Email').val(obj.Email);
        $('#formdelete #Sobrenome').val(obj.Sobrenome);
        $('#formdelete #Nacionalidade').val(obj.Nacionalidade);
        $('#formdelete #Estado').val(obj.Estado);
        $('#formdelete #Cidade').val(obj.Cidade);
        $('#formdelete #Logradouro').val(obj.Logradouro);
        $('#formdelete #Telefone').val(obj.Telefone);
        $('#formdelete #CPF').val(obj.CPF);
    }

    $('#formdelete').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CEP": $(this).find("#CEP").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val(),
                "CPF": $(this).find("#CPF").val()
            },
            error:
                function (r) {
                    if (r.status === 400)
                        ModalDialog("Ocorreu um erro", r.responseJSON);
                    else if (r.status === 500)
                        ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                },
            success:
                function (r) {
                    
                    if (r == 'Cadastro excluido') {
                        ModalDialog('Sucesso!', 'Cliente excluido com sucesso!');
                        setTimeout(function () {
                            $("#formdelete")[0].reset();
                            window.location.href = urlRetorno;

                        }, 2500);
                    }
                    else {
                        ModalDialog("Erro!", r);
                      
                    }
                }
        });
    });

});

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    texto = '<div id="' + random + '" class="modal ">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-warning fecharModal" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');


}
