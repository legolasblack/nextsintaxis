//Main page para practicas de tailwind 

import React from 'react';

const page: React.FC = () => {
    let contenido: string  = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nemo, numquam mollitia vero, voluptate asperiores labore voluptates, eius eum soluta quae cumque";

    return (
        <div>
            <p>Empecemos con Tailwind</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <p>
                            {contenido}
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    );

};

export default page;

