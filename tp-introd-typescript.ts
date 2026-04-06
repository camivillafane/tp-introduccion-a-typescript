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

function describirAnimal(animal:Animal){
}

//4

const perro = 'algo'
const vaca = 'algo'
const gato = 'algo'

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

//7

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