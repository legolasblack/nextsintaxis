import React from 'react';

type IconProps = {
    name: string;       // El ID del ícono en el sprite, como "twitch"
    size?: number;      // Tamaño opcional (por defecto: 24)
};

const IconoCustom: React.FC<IconProps> = ({ name, size = 24 }) => {




    return (
        <>
            <svg width={size} height={size}>
                <use href={`/sprite.svg#${name}`} />
            </svg>
            <p>{name}</p>
        </>
    );
};

export default IconoCustom;