//Main page para practicas de Tailwind 


import React from 'react';

const page: React.FC = () => {
    let contenido: string = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nemo, numquam mollitia vero, voluptate asperiores labore voluptates, eius eum soluta quae cumque";

    return (
        <>
            <p>Empecemos con Tailwind</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <p className='back-black'>
                            {contenido}
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-3xl text-red-500">
                Hello world!
            </p>
        </>

    );

};

export default page;

