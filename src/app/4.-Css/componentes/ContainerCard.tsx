'use client'

import React from 'react';
import styles from './ContainerCard.module.css';

interface ContainerCarProps {
    children?: React.ReactNode;
}

const ContainerCard: React.FC<ContainerCarProps> = ({ children }) => {
    return (
       <>
        <div className={styles.container}>
            <div className={styles.card}>Producto 1</div>
            <div className={styles.card}>Producto 2</div>
            <div className={styles.card}>Producto 3</div>
            <div className={styles.card}>Producto 4</div>
        </div>
       </>
    );
};

export default ContainerCard;