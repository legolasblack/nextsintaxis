import React from 'react'

export default function page() {
  const title: string = "About this examples";
  const contenido: string = `Esta pagina ejemplificara sintaxis de desarrollo frontend avanzado, desde tecnicas de responsive 
  hasta tecnicas de tailwind, next , hero y demas integraciones, la intencion es reunir una documentacion 
  personal creada por legolas lotbrock`;

  return (
    <div>
       <h3>{title}</h3>
        <p>
          {contenido}
        </p>
    </div>
  )
}
