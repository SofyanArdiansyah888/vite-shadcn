import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import MainLayout from "@/components/layout/main-layout.tsx";
import {CircleGaugeIcon, CircleUserIcon, SchoolIcon} from "lucide-react";
import {DashboardIcon} from "@radix-ui/react-icons";
import {useRouterState} from "@tanstack/react-router";
import {activeCheck} from "@/lib/utils.ts";

export default function PortalLayout({children}: { children: React.ReactNode }) {
    const router = useRouterState()
    const menus = [
        {
            link: "/",
            button: <div className={`gap-2 flex items-center ${activeCheck("/",router)}`}>
                <CircleGaugeIcon className={"w-4 h-4"} strokeWidth={1}/>
                Portal
            </div>,
        },
        {
            link: "/dashboard",
            button: <div className={"gap-2 flex items-center"}>
                <DashboardIcon className={"w-4 h-4"} strokeWidth={1}/>
                Dashboard
            </div>,
        },
        {
            link: "/sekolah",
            button: <div className={"gap-2 flex items-center"}>
                <SchoolIcon className={"w-4 h-4"} strokeWidth={1}/>
                Data Sekolah
            </div>,
        },
        {
            link: "/pengguna",
            button: <div className={"gap-2 flex items-center"}>
                <CircleUserIcon className={"w-4 h-4"} strokeWidth={1}/>
                Manajemen Pengguna
            </div>,
        },
    ]
    return <MainLayout>
        <SecondaryNav menus={menus} />
        {children}
    </MainLayout>
}
