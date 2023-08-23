//Ejercicio1
// Dado un string de longitud “n” en formato CamelCase, devuelve el número de palabras
// que contiene dicho string, así como el mismo string pero en formato snake_case

const numeroPalabras = (palabra) => {
  let newPalabra = palabra.replace(/([a-z])([A-Z])/g, "$1_$2");
  const numeroPalabras = newPalabra
    .split("_")
    .filter((item) => item != "_").length;

  // console.log(newPalabra.split("_").filter(item => item != "_"))
  // console.log(numeroPalabras);
  // console.log(newPalabra);

  return {
    palabras: numeroPalabras,
    snakeCase: newPalabra,
  };

};

console.log("\n\nEjercicio 1:")
console.log( numeroPalabras("MateriaProgramaciónMóvil") )


// Ejercicio2
// Dado un arreglo de “n” números, genera una función que devuelva todas las
// combinaciones de arreglos posibles que se puedan crear con el arreglo original.

const Combinaciones = (arr) => {
  const arrFinal = [];

  function recurCombinaciones(currArray, inicioIndx) {
    arrFinal.push([...currArray]); //Comienza con el array vacio

    for (let i = inicioIndx; i < arr.length; i++) {
      currArray.push(arr[i]);
      recurCombinaciones(currArray, i + 1);
      currArray.pop();
    }
  }

  recurCombinaciones([], 0);

  return arrFinal;
};

const combinaciones = Combinaciones(["a", "b", "c"]);

console.log("\n\nEjercicio 2:")
console.log(combinaciones);

// Ejercicio3
// Utilizando la API de RickAndMorty https://rickandmortyapi.com/ obtener los datos de
// este endpoint https://rickandmortyapi.com/api/character y mostrarlos en consola.

const fetchApi = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  //console.log(data["results"]);

  const resultados = data["results"];

  let pares = resultados.filter((item) => item.id % 2 === 0);
  //console.log(pares)

  pares.forEach((item) => {
    if (item.type == "") {
      item.type = "Programación Móvil";
    }
    //console.log(item.type)
  });
  //console.log(pares)

  const resultado = pares.map((item) => {
    return {
      personaje: item.name,
      episodios: item.episode.length,
      masDeCincoEpisodios: item.episode.length > 5,
    };
  });
  console.log(resultado);
};

console.log("\n\nEjercicio 3:")
fetchApi();
