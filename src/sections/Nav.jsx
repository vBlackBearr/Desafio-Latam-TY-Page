

const Nav = () => {
    return (
        <div className="w-full p-5 fixed z-10">
            <img 
                src="/assets/images/logo.png" 
                alt="Logo" 
                className="h-10 cursor-pointer" 
                onClick={() => window.location.href = 'https://desafiolatam.com'} 
            />
        </div>
    )
}

export default Nav;