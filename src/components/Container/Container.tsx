const Container: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className="max-w-[1250px] mx-auto">
            {children}
        </div>
    );
};

export default Container ;