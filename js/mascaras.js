/* ==========================================================
   Máscaras de input: CPF, telefone e CEP
   Basta colocar data-mascara="cpf" | "telefone" | "cep" no input
   ========================================================== */

function somenteNumeros(valor) {
  return valor.replace(/\D/g, "");
}

const mascaras = {
  cpf: function (valor) {
    return somenteNumeros(valor)
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  },

  telefone: function (valor) {
    const numeros = somenteNumeros(valor).slice(0, 11);
    if (numeros.length <= 10) {
      // fixo: (11) 3333-4444
      return numeros
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
    // celular: (11) 99999-8888
    return numeros
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  },

  cep: function (valor) {
    return somenteNumeros(valor)
      .slice(0, 8)
      .replace(/(\d{5})(\d)/, "$1-$2");
  }
};

document.querySelectorAll("[data-mascara]").forEach(function (campo) {
  campo.addEventListener("input", function () {
    const tipo = campo.dataset.mascara;
    campo.value = mascaras[tipo](campo.value);
  });
});
