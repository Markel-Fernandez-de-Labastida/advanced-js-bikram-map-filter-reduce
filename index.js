//RESUELVE LOS EJERCICIOS AQUI

const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => {
    const nuevoArray = numbers.map((number) => {
        return number ** number;
    })
    return nuevoArray;
}

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let mensaje = "";
const result2 = foodList.map((string) => {
    if (string === 'Pizza'){
        mensaje = `Como soy de Italia, amo comer ${string}`;
    } else if (string === 'Ramen') {
        mensaje = `Como soy de Japón, amo comer ${string}`;
    } else if (string === 'Paella') {
        mensaje = `Como soy de Valencia, amo comer ${string}`;
    } else if (string === `Entrecot`) {
        mensaje = `Aunque no como carne, el ${string} es sabroso`;
    }
    return mensaje; 
})

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

let result3 = [];
const staffDescriptions = staff.map((item, index, array) => {
    result3.push(`${item.name} es ${item.role} y le gusta ${item.hobbies[0]} y ${item.hobbies[1]}`) ;
    }
)

//4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter((num) => {
    return num % 2 != 0;
})

//5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

const result5 = foodList2.filter((item) => {
    return item.isVeggie;
}).map((item) => {
    return item.name === `Tempeh` ? `Que rico ${item.name} me voy a comer!` : `Que rica ${item.name} me voy a comer!`;
})

//6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
];

const result6 = inventory.filter((item) => {
    return item.price > 300 ? item.name : "";
}).map((item) => {
    return item.name;
})

//6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

let numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((sum, number) => sum *= number)

//7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  'XX',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result8 = sentenceElements.reduce((acumulador, num) => {
  return acumulador + " " + num })

//8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const result9 = books.reduce((acumulador = 0, num) => {
  if (num.category == 'code'){
    return acumulador + num.price;
  }
})