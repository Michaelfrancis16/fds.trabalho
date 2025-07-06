window.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botaoMensagem');
  const mensagem = document.getElementById('mensagem');

  botao.addEventListener('click', () => {
    mensagem.textContent = 'Nunca é tarde para começar. Você está no caminho certo! 🚀';
    mensagem.style.color = '#2e8b57';
    mensagem.style.fontWeight = 'bold';
    mensagem.style.marginTop = '10px';
  });
});