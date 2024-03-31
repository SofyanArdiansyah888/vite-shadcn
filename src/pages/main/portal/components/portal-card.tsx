import {Card, CardContent} from "@/components/ui/card.tsx";
import React from "react";
import {cva} from "class-variance-authority";
import {cn} from "@/lib/utils.ts";
import {Link} from "@tanstack/react-router";


interface PortalPageProps {
    title: string
    subtitle: string
    icon: React.ReactNode
    color: "red" | "green" | "blue" | "orange" | "zinc" | "gray" | "purple" | "pink" | "indigo" | "rose" | "emerald"
    link: string
}

const variants = cva("", {
    variants: {
        color: {
            red: "bg-red-400 hover:bg-red-200",
            green: "bg-green-400 hover:bg-green-200",
            blue: "bg-blue-400 hover:bg-blue-200",
            orange: "bg-orange-400 hover:bg-orange-200",
            zinc: "bg-zinc-800 hover:bg-zinc-200 text-white",
            gray: "bg-gray-400 hover:bg-gray-200",
            purple: "bg-purple-400 hover:bg-purple-200",
            pink: "bg-pink-400 hover:bg-pink-200",
            indigo: "bg-indigo-400 hover:bg-indigo-200",
            rose: "bg-rose-400 hover:bg-rose-200",
            emerald: "bg-emerald-400 hover:bg-emerald-200",
        }
    },
    defaultVariants: {
        color: "green"
    }
})
export default function PortalCard({color, icon, title, subtitle, link}: PortalPageProps) {
    return <Card className={`${cn(variants({color}))} cursor-pointer`}>
        <Link to={link}>
            <CardContent className={"flex py-4 gap-4 items-start"}>
                {icon}
                <div className={"basis-5/6 space-y-3"}>
                    <div className={"space-y-2"}>
                        <h2 className={"text-lg"}>{title}</h2>
                        <p className={"text-xs"}>{subtitle}</p>
                    </div>
                    {/*<Button size={"xs"} variant={"ghost"} className={"text-xs flex gap-1 items-center"}>*/}
                    {/*    Pilih Menu*/}
                    {/*    <ArrowRight strokeWidth={1} className={"h-4 w-4"}/>*/}
                    {/*</Button>*/}
                </div>

            </CardContent>
        </Link>
    </Card>
}
