
import {cn} from "@/lib/utils.ts";
import React from "react";
import imageSrc from "../../assets/logo.png"
export function PrimaryNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <div className={"flex gap-4 text-white items-center font-semibold"}>
                <img src={imageSrc} alt={"Logo"} className={"w-12 h-12"}/>
                Sistem Informasi Sekolah
            </div>
        </nav>
    )
}
