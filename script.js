document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede envio imediato

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !assunto || !mensagem) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Simula envio
    alert('Mensagem enviada com sucesso!');
    form.reset();
  });
});
