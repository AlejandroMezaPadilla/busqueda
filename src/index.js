export function buscarPalabra(texto, palabra) {
  if (!palabra.trim()) return { textoMarcado: texto, cantidadTotal: 0, palabrasCompletas: 0, parciales: 0 };

  // Coincidencias de palabra completa usando \b
  const regexPalabra = new RegExp(`\\b${palabra}\\b`, "gi");
  const coincidenciasPalabra = texto.match(regexPalabra) || [];
  const palabrasCompletas = coincidenciasPalabra.length;

  // Coincidencias totales (palabra completa + parciales)
  const regexTotal = new RegExp(`${palabra}`, "gi");
  const coincidenciasTotal = texto.match(regexTotal) || [];
  const cantidadTotal = coincidenciasTotal.length;

  const parciales = cantidadTotal - palabrasCompletas;

  // Resaltar todas las coincidencias
  const textoMarcado = texto.replace(regexTotal, '<span class="highlight">$&</span>');

  return { textoMarcado, cantidadTotal, palabrasCompletas, parciales };
}

export function reemplazarPalabra(texto, palabra, reemplazo) {
  if (!palabra.trim() || !reemplazo) return { textoModificado: texto, cantidadTotal: 0, palabrasCompletas: 0, parciales: 0 };

  // Coincidencias totales
  const regexTotal = new RegExp(`${palabra}`, "gi");
  const coincidenciasTotal = texto.match(regexTotal) || [];
  const cantidadTotal = coincidenciasTotal.length;

  // Coincidencias de palabra completa
  const regexPalabra = new RegExp(`\\b${palabra}\\b`, "gi");
  const palabrasCompletas = (texto.match(regexPalabra) || []).length;

  const parciales = cantidadTotal - palabrasCompletas;

  const textoModificado = texto.replace(regexTotal, reemplazo);

  return { textoModificado, cantidadTotal, palabrasCompletas, parciales };
}

document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const searchInput = document.getElementById("searchInput");
  const replaceInput = document.getElementById("replaceInput");
  const searchBtn = document.getElementById("searchBtn");
  const replaceBtn = document.getElementById("replaceBtn");
  const result = document.getElementById("result");
  const modifiedResult = document.getElementById("modifiedResult");
  const counter = document.getElementById("counter");

  function contarEspacios(texto) {
    const espacios = texto.match(/ /g);
    return espacios ? espacios.length : 0;
  }

  searchBtn.addEventListener("click", () => {
    const texto = textInput.value;
    const palabra = searchInput.value.trim();
    const totalEspacios = contarEspacios(texto);

    if (!palabra) {
      counter.textContent = `Espacios en el texto: ${totalEspacios}`;
      result.innerHTML = texto || "<em>No hay texto para mostrar.</em>";
      return;
    }

    const { textoMarcado, cantidadTotal, palabrasCompletas, parciales } = buscarPalabra(texto, palabra);

    if (cantidadTotal === 0) {
      Swal.fire({
        icon: "info",
        title: "Sin coincidencias",
        text: "No se encontraron coincidencias en el texto.",
      });
    }

    counter.textContent = `Coincidencias totales: ${cantidadTotal} | Palabras completas: ${palabrasCompletas} | Parciales: ${parciales} | Espacios: ${totalEspacios}`;
    result.innerHTML = textoMarcado;
    modifiedResult.innerHTML = "<em>Texto modificado aparecerá aquí.</em>";
  });

  replaceBtn.addEventListener("click", () => {
    const texto = textInput.value;
    const palabra = searchInput.value.trim();
    const reemplazo = replaceInput.value;

    if (!palabra || !reemplazo) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Debes ingresar la palabra, letra o carácter a buscar y la palabra de reemplazo.",
      });
      return;
    }

    const { textoModificado, cantidadTotal, palabrasCompletas, parciales } = reemplazarPalabra(texto, palabra, reemplazo);

    if (cantidadTotal === 0) {
      Swal.fire({
        icon: "info",
        title: "Sin coincidencias",
        text: "No se encontraron coincidencias para reemplazar.",
      });
    }

    // Resaltar coincidencias en el texto modificado
    const { textoMarcado: modificadoMarcado } = buscarPalabra(textoModificado, reemplazo);

    modifiedResult.innerHTML = modificadoMarcado;
    counter.textContent = `Coincidencias totales: ${cantidadTotal} | Palabras completas: ${palabrasCompletas} | Parciales: ${parciales} | Reemplazos realizados: ${cantidadTotal} | Espacios: ${contarEspacios(texto)}`;
  });
});
