function HeroBottom(){
    return(
        <div className="flex justify-center">
            <div className="absolute bg-white p-7 w-2/3 -bottom-8 z-10 text-black shadow-xl hidden sm:block">
            <div className="grid">
            <p className="flex justify-center text-xl font-semibold tracking-widest">Great Partners of us</p>
            <hr className="my-3" />
            <div className="flex justify-center">
                <li className="flex gap-5">
                    <img src="https://1000marcas.net/wp-content/uploads/2020/02/Google-Logo.png" alt="Google" className="h-16 hover:scale-110 ease-in-out duration-500" draggable="false"/>
                    <img src="https://1000marcas.net/wp-content/uploads/2021/05/Microsoft-Azure-logo-768x432.png" alt="MicrosoftAzure" className="h-16 hover:scale-110 ease-in-out duration-500" draggable="false"/>
                    <img src="https://pngimg.com/d/github_PNG65.png" alt="Github" className="h-16 hover:scale-110 ease-in-out duration-500 -ml-3" draggable="false"/>
                    <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin-640x400.png" alt="LinkedIn" className="h-16 hover:scale-110 ease-in-out duration-500 hidden lg:block" draggable="false"/>
                    <img src="https://1000marcas.net/wp-content/uploads/2021/10/meta-logo-1-768x384.png" alt="Meta" className="h-16 hover:scale-110 ease-in-out duration-500 hidden lg:block" draggable="false" />
                    <img src="https://1000marcas.net/wp-content/uploads/2021/05/Atlassian-Logo-640x400.png" alt="Atlassian" className="h-16 hover:scale-110 ease-in-out duration-500 hidden xl:block" draggable="false" />
                </li>
            </div>
            </div>
        </div>
        </div>
    );
}

export default HeroBottom;