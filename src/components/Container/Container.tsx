const Container: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className="max-w-[1250px] mx-auto mt-12">
            {children}
        </div>
    );
};

export default Container ;