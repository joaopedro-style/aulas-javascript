//Declarando um array e aprendendo
let alunos = ["Jon Oliva","Ozzy Osbourne","Tom Array"];

// Exibindo a estrutura do array
console.log (alunos);

// Acessando um elemento específico array
console.log(`${alunos[2]} é o vocalista da banda Slayer! 🤘`);

/* Mini-exercício

1)Crie um novo array contendo o nome de 7 coisas que você gosta (artista, música, livro, comida... sei la, inventa!)

2)em seguida, mostre no console uma frase personalizada indicando o nome do segundo, quinto e do sétimo elemento do array. use concatenação ou template string. */


let jogosfavoritos = ["Resident Evil 4 Remake","God of war","Fifa","Hogwarts Legacy","Forza Horizon 5","Call of Duty black ops 6","Elden Ring"];

console.log(`Gosto desses Games: ${jogosfavoritos[1]},${jogosfavoritos[4]} e ${jogosfavoritos[6]}`);


/* Array como Matriz de 2 dimensões */
const tecnologias = [
    ["HTML5","CCS3","JavaScript"],
    ["Figma","Photoshop"],
    ["PHP","Node.js","SQL","Express", ["Apache","IIS"] ]
];

// console.log(tecnologias);
console.log( tecnologias[2][4][0] ); // Apache
console.log( tecnologias[0][2] ); // JavaScript
console.log( tecnologias[1][0] ); //Figma
console.log(tecnologias[2][3] ); // Express
console.log( tecnologias[0][0] ); // HTML5