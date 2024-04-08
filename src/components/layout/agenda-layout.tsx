import {BookImageIcon, LogOutIcon} from "lucide-react";
import MainLayout from "@/components/layout/main-layout.tsx";
import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import {useRouterState} from "@tanstack/react-router";
import {activeCheck} from "@/lib/utils.ts";

export default function AgendaLayout({children}: { children: React.ReactNode }) {
    const router = useRouterState()

    const menus = [
        {
            link: "/agenda",
            button: <div className={`gap-2 flex items-center ${activeCheck("/agenda", router)}`}>
                <BookImageIcon className={"w-4 h-4"} strokeWidth={1}/>
                Agenda
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
