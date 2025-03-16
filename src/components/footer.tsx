import LinkTag, { LinkType } from "./ui/LinkTag";

export default function Footer () {
    return (
        <div className="bg-slate-100 md:-mx-24 -mx-10 mt-24">
            <div className="md:mx-24 mx-10 py-10  flex md:flex-row flex-col md:gap-54 gap-10">
                <div className="">
                    <h1 className="text-xl font-bold">CracktheDEV</h1>
                    <p>I hope after this project i <br /> finally got a job ! Even  <br /> im not from cs background haha <br /> future is scary </p>
                </div>
                <div className="flex md:flex-row flex-col md:gap-30 gap-10">
                    <div className="space-y-4">
                        <h1 className="text-lg font-medium">Produce</h1>
                        <div className="flex flex-col space-y-1">
                            {
                                productArray.map((p, key) => (
                                    <LinkTag title={p.title} src={p.src} key={key}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-lg font-medium">Resources</h1>
                        <div className="flex flex-col space-y-1">
                            {resourcesArray.map((r, key) => (
                                <LinkTag title={r.title} src={r.src} key={key}/>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-lg font-medium">Company</h1>
                        <div className="flex flex-col space-y-1">
                            {
                                companyArray.map((c, k) => (
                                    <LinkTag title={c.title} src={c.src} key={k}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="text-center border-t-2 border-slate-300 md:mx-28  py-5">
                    @2025 CracktheDEV. All rights reserved.
            </div>
        </div>
    )
}


const productArray : LinkType[] = [
    {title : "Features" , src : "/features"},
    {title : "Pricing", src : "/pricing"},
    {title : "Enterprice", src : "/enterprice"},
    {title : "Testimonials" , src :"/testimonials"}
]


const resourcesArray : LinkType[] = [
    {title : "Documentation", src: "/src"},
    {title : "Blog", src:"/blog"},
    {title : "Community", src: "/src"},
    {title : "Support", src :"/supports"}
]

const companyArray : LinkType[] = [
    {title : "About us", src : "/aboutus"},
    {title : "No career", src:"/nocarees"},
    {title : "Privacy Policy", src : "/privacy"},
    {title : "Terms", src : "/terms"}
]