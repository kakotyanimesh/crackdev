export interface SimpleCardTypes {
    title : string
    desc : string,
    num : number,
    setActive : boolean
}


export default function SimpleCard({title, desc, num, setActive} : SimpleCardTypes){
    return (
        <div className={`text-start relative p-10  rounded-md border-2  ${setActive ? "border-purple-400 bg-purple-50 " : "border-slate-500 bg-white"}`}>
            <div className="absolute -top-2 bg-slate-400 rounded-full w-10 h-10 flex justify-center items-center text-center -left-4">{num}</div>
            <h1 className="md:text-lg font-bold">{title}</h1>
            <p className="text-md text-slate-500">{desc}</p>
        </div>
    )
}