import React from 'react'

export default function page() {
  const title: string = "About this examples";
  const contenido: string = "este archivo representara la sintaxis que vayamos recopilando dentro de la sintaxis de Next.js, se decribe en dos secciones uno en practicas con bootstrap y el otro en practicas de tailwind con componentes de next ui";

  return (
    <div>
       <h3>{title}</h3>
        <p>
          {contenido}
        </p>
    </div>
  )
}
