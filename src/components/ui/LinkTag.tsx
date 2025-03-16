import Link from "next/link"

export interface LinkType {
    title : string,
    src :  string
}

export default function LinkTag({title, src} : LinkType){
    return (
        <Link href={`${src}`} className="hover:text-purple-500 transition-colors delay-75 cursor-pointer">{title}</Link>
    )
}