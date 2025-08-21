const Button1 = ({ children, bgColor, hoverColor }) => {
    console.log(bgColor);
    return(
    <button className="border-3 hover:bg-white text-white hover:text-black hover:border-white px-18 py-2.5 rounded-full cursor-pointer mt-4 text-xl font-medium transition-colors duration-300">
        {children}
    </button>
)
}
export default Button1;
