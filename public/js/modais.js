$("#dadosPacienteModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var nome = button.data("nome");
  var fone = button.data("fone");
  var endereco = button.data("endereco");
  var nascimento = button.data("nascimento");
  var cpf = button.data("cpf");
  var bairro = button.data("bairro");

  var modal = $(this);
  modal.find(".modal-nome").text(nome);
  modal.find(".modal-endereco").text(endereco);
  modal.find(".modal-nascimento").text(nascimento);
  modal.find(".modal-fone").text(fone);
  modal.find(".modal-cpf").text(cpf);
  modal.find(".modal-bairro").text(bairro);
});
