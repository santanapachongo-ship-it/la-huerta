function enviarFormulario(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || mensaje === "") {
    alert("Completa todos los campos");
    return;
  }

  let numero = "573125672805";
  let texto = `Hola, soy ${nombre}. ${mensaje} 🌱`;

  let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");
}

function comprar(producto) {
  let numero = "573125672805";
  let mensaje = `Hola, quiero comprar ${producto} 🛒`;

  let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}