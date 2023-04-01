// Definimos un objeto que contenga información sobre las ciudades que el programa puede adivinar
const ciudades = [
  {
    nombre: "Nueva York",
    clima: "templado",
    ubicacion: "costa este",
    poblacion: "grande",
    tamano: "grande",
    gastronimia:"comida rapida",
    idioma:"ingles",
    lugaresInteres: ["Estatua de la Libertad", "Central Park", "Times Square"],
  },
  {
    nombre: "Londres",
    clima: "templado",
    ubicacion: "europa",
    poblacion: "grande",
    tamano: "grande",
    gastronimia:"comida internacional",
    idioma:"ingles",
    lugaresInteres: ["Big Ben", "London Eye", "Tower Bridge"],
  },
  {
    nombre: "Sydney",
    clima: "subtropical",
    ubicacion: "australia",
    poblacion: "mediana",
    tamano: "grande",
    gastronomia:"comida internacional",
    idioma:"mandarin",
    lugaresInteres: [
      "Opera de Sydney",
      "Puente de la Bahía de Sydney",
      "Playa de Bondi",
    ],
  },
  {
    nombre: "CD Guatemala",
    clima: "primavera",
    ubicacion: "centro america",
    poblacion: "mediana",
    tamano: "pequeño",
    gastronimia:"comida tradicional",
    idioma:"español",
    lugaresInteres: ["tikañ", "islas flores", "Peten"],
  },
  {
    nombre: "CD Mexico",
    clima: "caluroso",
    ubicacion: "norte de america",
    poblacion: "grande",
    tamano: "grande",
    gastronimia:"comida tradicional",
    idioma:"español",
    lugaresInteres: ["Islas", "gastronomia", "cultura"],
  },
];

// Definimos una función que realizará las preguntas y adivinará la ciudad
/**
 * Método que adivina una ciudad basándose en cuatro atributos:
 * Si la ciudad no se puede adivinar, se devuelve un mensaje de error.
 *
 * @param {object} - Objeto con cuatro atributos: clima, ubicación, población y tamaño.
 * @returns {string} - El nombre de la ciudad adivinada o un mensaje de error si la ciudad no se pudo adivinar.
 */
export default function adivinarCiudad({
  clima,
  ubicacion,
  poblacion,
  tamano,
  gastronimia,
  idioma,

}) {
  // Se crea una variable llamada `respuesta` que se utiliza para almacenar la ciudad adivinada o el mensaje de error si no se pudo adivinar ninguna ciudad.
  let respuesta;

  // Se crea una nueva variable llamada `ciudadesCoincidentes`, que se inicializa como un arreglo vacío.
  // Se utiliza el método `filter()` en el arreglo de `ciudades` para filtrar las ciudades que coincidan con los valores de `clima`, `ubicacion`, `poblacion` y `tamano` proporcionados en el objeto que se recibió como parámetro.
  let ciudadesCoincidentes = ciudades.filter(
    (ciudad) =>
      ciudad.clima === clima &&
      ciudad.ubicacion === ubicacion &&
      ciudad.poblacion === poblacion &&
      ciudad.tamano === tamano &&
      ciudad.gastronimia == gastronimia &&
      ciudad.idioma == idioma
  );

  // Se utiliza una declaración `if` para verificar si `ciudadesCoincidentes` está vacío.
  // Si es así, se asigna un mensaje de error a la variable `respuesta`.
  // Si `ciudadesCoincidentes` no está vacío, se utiliza el método `forEach()` para recorrer el arreglo y asignar el nombre de la ciudad a la variable `respuesta`.
  if (ciudadesCoincidentes.length === 0) {
    respuesta = "Lo siento, no pude adivinar la ciudad que estás pensando.";
  } else {
    ciudadesCoincidentes.forEach((ciudad) => (respuesta = ciudad.nombre));
  }

  // Por último, se devuelve el valor almacenado en la variable `respuesta`.
  // Si se pudo adivinar una ciudad, el valor será el nombre de la ciudad.
  // Si no se pudo adivinar una ciudad, el valor será un mensaje de error.
  return respuesta;
}
// Llamamos a la función para iniciar el programa
