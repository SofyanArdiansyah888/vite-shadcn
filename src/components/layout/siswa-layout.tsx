import {LogOutIcon} from "lucide-react";
import MainLayout from "@/components/layout/main-layout.tsx";
import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import {useRouterState} from "@tanstack/react-router";
import {activeCheck} from "@/lib/utils.ts";
import {PersonIcon} from "@radix-ui/react-icons";

export default function SiswaLayout({children}: { children: React.ReactNode }) {
    const router = useRouterState()

    const menus = [
        {
            link: "/siswa",
            button: <div className={`gap-2 flex items-center ${activeCheck("/siswa", router)}`}>
                <PersonIcon className={"w-4 h-4"} strokeWidth={1}/>
                Data Siswa
            </div>,
        },
        {
            link: "/",
            button: <div className={"gap-2 flex items-center"}>
                <LogOutIcon className={"w-4 h-4"} strokeWidth={1}/>
                Kembali ke portal
            </div>,
        },
    ]
    return <MainLayout>
        <SecondaryNav menus={menus}/>
        {children}
    </MainLayout>
}
