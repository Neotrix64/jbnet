import ux from "../icons/lapiz.png";

function Section2(){
    const card = [
        {
            id:0,
            img: ux,
            name: "UX/UI Design",
            description: "terms that refer to experience design and user interface, respectively.",
            vacancy: "4050 Vacancy"
        },
        {
            id:1,
            img: ux,
            name: "Software Engineering",
            description: "terms that refer to experience design and user interface, respectively.",
            vacancy: "4050 Vacancy"
        },
        {
            id:2,
            img: ux,
            name: "Art",
            description: "terms that refer to experience design and user interface, respectively.",
            vacancy: "4050 Vacancy"
        }
    ]


    return(
        <div className="w-full h-1/2 bg-gray-900 text-black">
            <div className="flex justify-between p-10">
            <h2 className="text-4xl font-bold tracking-wide text-white">Most Demanding Categories.</h2>
            <a href="" className="text-purple-400 text-xl tracking-wide border-b-2 border-purple-400">All Categories</a>
            </div>
            <div className="card flex justify-center">
            {card.map((card, index) =>{
                return(
                    <div className="div" key={card.id}>
                    <div className="size-60 rounded-md bg-white m-5 cursor-pointer hover:scale-110 ease-in-out duration-500 group">
                    <div className="grid gap-2 ml-1">
                    <div className="size-16 bg-gray-100 border-2 border-gray-200 shadow-2xl rounded-full mt-5 ml-2 flex justify-center items-center">
                        <img src={card.img} alt="" className="size-7" />
                    </div>
                    <div className="name">
                        <p className="text-2xl ml-2 font-bold group-hover:text-purple-400 ease-in-out duration-500">{card.name}</p>
                    </div>
                    <h3 className="font-semibold ml-2 text-gray-400 text-sm">{card.description}</h3>
                    <h4 className="font-semibold ml-2 text-gray-500">{card.vacancy}</h4>
                    </div>
                </div>
                </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Section2;