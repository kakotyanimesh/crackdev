export interface HeadingDivProps {
    title : string,
    p : string
}


export default function HeadingDiv({title, p} : HeadingDivProps){
    return (
        <div className="text-center space-y-4 md:mx-62 mx-0 lg:mx-10">
            <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold md:leading-16 tracking-tight">{title}</h1>
            <p className="md:text-xl text-sm text-slate-700">{p}</p>
        </div>
    )
}