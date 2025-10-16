export function buscarPalabra(texto, palabra) {
  if (!palabra.trim()) return { textoMarcado: "", cantidad: 0 };

  // Coincidencia exacta de palabra usando límites de palabra (\b)
  const regex = new RegExp(`\\b${palabra}\\b`, "gi");
  const coincidencias = texto.match(regex);
  const cantidad = coincidencias ? coincidencias.length : 0;

  // Resaltar coincidencias
  const textoMarcado = texto.replace(regex, '<span class="highlight">$&</span>');
  return { textoMarcado, cantidad };
}

document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const result = document.getElementById("result");
  const counter = document.getElementById("counter");

  searchBtn.addEventListener("click", () => {
    const texto = textInput.value;
    const palabra = searchInput.value.trim();

    // Contar espacios incluso si el texto son solo espacios
    const espacios = texto.match(/ /g);
    const totalEspacios = espacios ? espacios.length : 0;

    // Si no hay palabra, solo mostrar espacios
    if (!palabra) {
      counter.textContent = `Espacios en el texto: ${totalEspacios}`;
      result.innerHTML = texto || "<em>No hay texto para mostrar.</em>";
      return;
    }

    const { textoMarcado, cantidad } = buscarPalabra(texto, palabra);

    if (cantidad === 0) {
      Swal.fire({
        icon: "info",
        title: "Sin coincidencias",
        text: "No se encontraron coincidencias en el texto.",
      });
    }

    counter.textContent = `Coincidencias encontradas: ${cantidad} | Espacios en el texto: ${totalEspacios}`;
    result.innerHTML = textoMarcado;
  });
});
