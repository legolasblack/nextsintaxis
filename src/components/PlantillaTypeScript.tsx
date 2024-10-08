'use client'
// Importaciones necesarias
import React, { useState } from 'react';

// Diferencias entre JavaScript y TypeScript:
// 1. Tipado estático vs. dinámico: TypeScript permite declarar tipos, lo que ayuda a detectar errores en tiempo de compilación.
// 2. Interfaces y tipos: TypeScript permite definir estructuras de datos más claras y seguras a través de interfaces y tipos.
// 3. Mejor soporte para IDE: TypeScript ofrece autocompletado y navegación mejorada en editores de código.

//Tipos de datos que podemos utilizar
// Tipos Primitivos
let nombre: string = "Juan";    // Cadena de texto
let edad: number = 30;          // Número (entero o de punto flotante)
let isActive: boolean = true;   // Valor booleano
let valorNulo: null = null;     // Valor nulo
let valorIndefinido: undefined = undefined; // Valor indefinido
let simbolo: symbol = Symbol("descripcion"); // Valor único

// Tipos Complejos
let numeros: number[] = [1, 2, 3]; // Arreglo de números
let tupla: [string, number] = ["Juan", 30]; // Tupla con un string y un número
enum Color { Rojo, Verde, Azul } // Enumeración
let colorFavorito: Color = Color.Rojo; // Uso de la enumeración
let persona: { nombre: string; edad: number } = { nombre: "Juan", edad: 30 }; // Objeto con propiedades específicas

// Tipos Especiales
let variableSinTipo: any = "puede ser cualquier cosa"; // Tipo que acepta cualquier valor
let variableDesconocida: unknown = "algo"; // Tipo desconocido, requiere verificación de tipo
function sinRetorno(): void { // Función que no retorna valor
    console.log("No retorna nada");
}
function errorFatal(): never { // Función que nunca termina
    throw new Error("Error");
}

/* Declaracion ejemplo de funciones individuales */
function miFuncion(param1: number, param2: string): void {
  console.log(param1, param2);
}

const miFuncion2 = function(param1: number, param2: string): void {
  console.log(param1, param2);
};


const miFuncion3 = (param1: number, param2: string): void => {
  console.log(param1, param2);
};


/* aqui abajo un ejemplo de un tipado de la funcion  */
type MiFuncionTipo = (param1: number, param2: string) => void;

const miFunciontipada: MiFuncionTipo = (param1, param2) => {
    console.log(param1, param2);
};
/* --------------------------------------------------------------A PARTIR DE AQUI COMIENZA LA DECLARACION DE LA FUNCION EJEMPLO--------------------------------------------------------- */

interface Props {
  title: string; // 'title' es un string. Especificamos el tipo para evitar errores en tiempo de ejecución.
  content: string; // 'content' es un string. Especificamos el tipo para evitar errores en tiempo de ejecución.
  count?: number; // 'count' es un número opcional. Al usar '?', indicamos que puede no estar presente.
  onClick?: () => void; // Añadir la propiedad onClick//en caso de pasar funciones
  onClick2?: () => string; // Cambiar a una función que retorna un string
}

const PlantillaTypeScript: React.FC<Props> = ({ title, count, content}) => {
// Ejemplo de uso de las propiedades

//cuando utilizamos estados tambien es importante especificar que tipo de dato va a recibir 
//nuestro estado
//  a su vez tambien es posible declarar varios tipos de definiciones que debemos esperar 
//como en el caso del esegundo estado 
const[enable, setEnable] = useState<boolean>(false);
const[visible, setvisible] = useState<boolean | undefined>(undefined);
const [destinosListState, setDestinosList] = useState<string[]>([]);

//tambien se pueden definir multiples variables predeclaradas para empalmarlas en un type

type Status = "idle" | "loading" | "success" | "error";
const [status, setStatus] = useState<Status>("idle");

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      {count !== undefined && <p>Count: {count+1}</p>} {/* Verificamos si 'count' está definido */}
    </div>
  );
};

//conclusiones se tipa cada variable que se quiere resibir

export default PlantillaTypeScript;
