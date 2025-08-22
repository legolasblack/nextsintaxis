import React from "react";

const ClasesCemanticas: React.FC = () => {
    return (
        /* En esta clase definiremos como podemos hacer clases semanticas para programar con tailwind como si tuvieramos clases de Css nativas */
        <div className="p-6 bg-black text-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Clases Semánticas con Tailwind</h1>
                Este componente demuestra el uso de clases semánticas utilizando Tailwind CSS.
                <h1 className="">Enlaces a cv</h1>
                <p>Estos son los enlaces a mi CV</p>
        </div>
    );
};

export default ClasesCemanticas;