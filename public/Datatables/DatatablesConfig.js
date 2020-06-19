$(document).ready(function () {
  $("#dataTable").DataTable({
    language: {
      lengthMenu: "Mostrar _MENU_ registros por página",
      zeroRecords: "Nenhum registro encontrado",
      info: "Mostrando página _PAGE_ de _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
    },
  });
});
