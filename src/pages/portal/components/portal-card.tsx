import {Card, CardContent} from "@/components/ui/card.tsx";
import {cva} from "class-variance-authority";
import {cn} from "@/lib/utils.ts";
import {Link} from "@tanstack/react-router";

export interface PortalPageProps {
    title: string
    subtitle: string
    imageUrl: string
    color: "red" | "green" | "blue" | "orange" | "zinc" | "gray" | "purple" | "pink" | "indigo" | "rose" | "emerald"
    link: string
}

const variants = cva("hover:text-white font-medium border-[1.3px] rounded-3xl", {
    variants: {
        color: {
            green: "border-primary hover:bg-primary",
            red: "border-red-400 hover:bg-red-400",
            blue: "border-blue-400 hover:bg-blue-400",
            orange: "border-orange-400 hover:bg-orange-400",
            zinc: "border-zinc-800 hover:bg-zinc-800",
            gray: "border-gray-400 hover:bg-gray-400",
            purple: "border-purple-400 hover:bg-purple-400",
            pink: "border-pink-400 hover:bg-pink-400",
            indigo: "border-indigo-400 hover:bg-indigo-400",
            rose: "border-rose-400 hover:bg-rose-400",
            emerald: "border-emerald-400 hover:bg-emerald-400",
        }
    },
    defaultVariants: {
        color: "green"
    }
})
export default function PortalCard({color, imageUrl, title, subtitle, link}: PortalPageProps) {
    return <Card className={`${cn(variants({color}))} cursor-pointer`}>
        <Link to={link}>
            <CardContent className={"flex py-6 gap-2 items-start group"}>
                <div className={"basis-5/6 space-y-3"}>
                    <div className={"space-y-2"}>
                        <h2 className={"text-xl"}>{title}</h2>
                        <p className={"text-[11px] text-zinc-400 font-medium group-hover:cursor-pointer group-hover:text-white"}>{subtitle}</p>
                    </div>
                </div>
                <img src={imageUrl} className={"w-28 h-28"} alt={"Menu Icon"}/>
            </CardContent>
        </Link>
    </Card>
}
