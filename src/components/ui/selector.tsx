


interface SelectorComponentTypes {
    title : string,
    options : string[],
    onchange : (value : string) => void
}


export default function SelectorComponent({title, options, onchange} : SelectorComponentTypes){
    return (
        <div className="" >
            <select onChange={(e) => onchange(e.target.value)} name={title} id="" className="appearance-none rounded-md  outline-none border border-slate-500 px-10 py-1 focus:ring-1 focus:ring-purple-300">
                {
                    options.map((o, k) => (
                        <option value={o} key={k} className="">{o}</option>
                    ))
                }    
                            
            </select>
        </div>
    )
}