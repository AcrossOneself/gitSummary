const DisplayError: React.FC<IDisplayErrorProps> = ({ message }) => {
    return (
        <div>
            <div className="error">
                {message}
            </div>

        </div>
    )
}

interface IDisplayErrorProps {
    message: string;
}
export default DisplayError;