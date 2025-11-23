// Ejercicio 1: Imprimir 10 gatos con diferentes emojis
var cantidadDeGatos = 10;
const emojis= ["😺", "😸", "😹"];

for (let i = 1; i <= cantidadDeGatos; i++) {
    const emojiIndex = (i - 1) % 3;
    console.log(`Gato #${i}: ${emojis[emojiIndex]}`);
}

// Ejercicio 2 y 3: Imprimir gatos con patas alternando emojis
var cantidadTotalDeGatos = 7; 

var cantidadDePasosPorGato = 3;

for (let i = 1; i <= cantidadTotalDeGatos; i++) {
  
  let emojiGato;
  
  if (i % 2 === 0) {
    emojiGato = "🐈‍⬛";

  } else {
    emojiGato = "🐈";
  }

  let pasos = ''; 
  for (let j = 0; j < cantidadDePasosPorGato; j++) {
      pasos += '🐾';
  }

  console.log(`Gato #${i}: ${emojiGato} ${pasos}`);
}
