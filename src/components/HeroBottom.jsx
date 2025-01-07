function HeroBottom(){
    return(
        <div className="flex justify-center">
            <div className="absolute bg-white p-4 w-2/3 bottom-0 z-10 text-black">
            <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">JobNet</p>
            <div className="flex ">
                <li className="list-none flex gap-5">
                    <ol>Browse jobs</ol>
                    <ol>Services</ol>
                </li>
            </div>
            <div className="end">
                <button>Dashboard</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default HeroBottom;