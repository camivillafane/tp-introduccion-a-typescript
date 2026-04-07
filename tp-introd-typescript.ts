//Trabajo Práctico "Introducción a TypeScript"

//1
interface Animal {
}

// 2. Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”. AYE
class Perro implements Animal {
    nombre: string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    gritar():string{
        return "¡Guau guau!" ;
    }
}

class Gato implements Animal {
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    gritar():string{
        return "¡Miau miau!"
    }
}

class Vaca implements Animal {
    nombre: string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    gritar():string{
        return "¡Muuuh muuuh!"
    }
}

//3
/*Crear una constante “perro”, una constante “vaca”, y una constante “gato” que tengan
como valor una instancia de la clase que corresponda y tengan declarado el tipo de
datos correspondiente.*/

const perro: Perro = new Perro("Manchitas");
const vaca: Vaca = new Vaca("Sussie");
const gato: Gato = new Gato("Loki");

console.log(perro);
console.log(vaca);
console.log(gato);
function describirAnimal(animal:Animal){
}

//4

// 5. Ejecutar el método “describirAnimal” para cada una de las constantes creadas (3
// veces en total). JESI

describirAnimal(perro)
describirAnimal(gato)
describirAnimal(vaca)

// 8. Crear una clase genérica que implemente la siguiente interfaz:
// interface Fila<T> {
// agregar(elemento: T): void;
// remover(): T | undefined;
// }

interface Fila<T>{
    agregar(elemento: T): void;
    remover():T | undefined;
}

class Generica<T> implements Fila<T>{
    private elementos: T[]= [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

//6

//7 Crear una variable que pueda contener únicamente valores de tipo número o de tipo
//string. Asignar a la variable el string “Messi”, y luego reemplazarlo por el número 10.

let jugador: string | number;
jugador = "Messi";
jugador = 10;

console.log(jugador)

//8

// 9 Crear una fila para números, una fila para strings, y una fila para animales (declarando
// los tipos correspondientes en cada variable). JESI

const filaNumeros: Generica<number> = new Generica<number>();
const filaStrings: Generica<string> = new Generica<string>();
const filaAnimales: Generica<Animal> = new Generica<Animal>();

// 10. En la fila para animales, agregar las 3 instancias que fueron creadas con anterioridad.
// En las otras 2 filas, agregar 3 elementos a elección en cada una. Para finalizar,
// remover un elemento de cada una de las 3 filas. AYE

filaAnimales.agregar(perro)
filaAnimales.agregar(gato)
filaAnimales.agregar(vaca)
console.log("Todos los animales", filaAnimales)

filaStrings.agregar("Swim")
filaStrings.agregar("Merry go round")
filaStrings.agregar("Body to body")
console.log("Todos los strings",filaStrings)

filaNumeros.agregar(1996)
filaNumeros.agregar(2015)
filaNumeros.agregar(2036)
console.log("Todos los numeros",filaNumeros)


filaAnimales.remover()
filaStrings.remover()
filaNumeros.remover()

console.log("Lista de animales luego de eliminar uno", filaAnimales)
console.log("Lista de strings luego de eliminar uno",filaStrings)
console.log("Lista de numeros luego de eliminar uno",filaNumeros)