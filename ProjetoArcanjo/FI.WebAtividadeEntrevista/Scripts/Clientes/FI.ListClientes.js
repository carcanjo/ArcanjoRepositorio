
$(document).ready(function () {

    $('#CPF').mask("999.999.999-99");
    $('#Telefone').mask('(11) 6077-5044');
    $('#CEP').mask('09921-210');


    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable({
            title: 'Clientes',
            paging: true, //Enable paging
            pageSize: 5, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'Nome ASC', //Set default sorting
            actions: {
                listAction: urlClienteList,
            },
            fields: {
                Nome: {
                    title: 'Nome',
                    width: '50%'
                },
                Email: {
                    title: 'Email',
                    width: '40%'
                },
                Alterar: {
                    title: 'Alterar',
                    width: '5%',
                    display: function (data) {
                        return '<button onclick="window.location.href=\'' + urlAlteracao + '/' + data.record.Id + '\'" class="btn btn-warning"><i class="fa fa-address-book-o" aria-hidden="true"></i>  Alterar</button>';
                    }
                },
                Excluir: {
                    title: 'Excluir',
                    width: '5%',
                    display: function (data) {
                        return '<button onclick="window.location.href=\'' + urlExclusao + '/' + data.record.Id + '\'" class="btn btn-danger "><i class="fa fa-address-book-o" aria-hidden="true"></i>  Excluir</button>';
                    }
                }
            }
        });

    //Load student list from server
    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable('load');
})