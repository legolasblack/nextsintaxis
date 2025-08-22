//Main page para practicas de Tailwind 


import React from 'react';
import ClasesCemanticas from './Componentes/ClasesCemanticas';
import IconoCustom from './Componentes/IconoCustom';

const page: React.FC = () => {
    let contenido: string = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nemo, numquam mollitia vero, voluptate asperiores labore voluptates, eius eum soluta quae cumque";

    return (
        <>
            <p>Empecemos con Tailwind</p>
            <ClasesCemanticas />
            <IconoCustom name="facebook"/>
            <IconoCustom name="twitch" size={50}/>
        </>

    );

};

export default page;

