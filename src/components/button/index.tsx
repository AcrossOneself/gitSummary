import React from "react";

const Button: React.FC<Props> = ({
    border,
    color,
    children,
    height,
    onClick,
    radius,
    width
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width
            }}
        >
            {children}
        </button>
    );
}

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
}

export default Button;