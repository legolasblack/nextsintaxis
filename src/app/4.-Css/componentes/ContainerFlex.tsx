import React from 'react';

interface ContainerFlexProps {
    children: React.ReactNode;
    direction?: 'row' | 'column';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    gap?: string;
    style?: React.CSSProperties;
    className?: string;
}

const ContainerFlex: React.FC<ContainerFlexProps> = ({
    children,
    direction = 'row',
    justify = 'flex-start',
    align = 'stretch',
    gap = '1rem',
    style,
    className,
}) => {
    return (
        <div
            className={className}
            style={{
                background:'red',
                display: 'flex',
                flexDirection: direction,
                justifyContent: justify,
                alignItems: align,
                gap,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default ContainerFlex;