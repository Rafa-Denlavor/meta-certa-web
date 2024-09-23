export function getGl() {
  const cookies = document.cookie.split(';');
  const glTokenRegex = /gltoken=([^;]+)/;

  for (const cookie of cookies) {
    const match = cookie.match(glTokenRegex);
    if (match) {
      return match[1]; // Retorna o valor após o '='
    }
  }

  return ''; // Retorna null se o cookie não for encontrado
}
