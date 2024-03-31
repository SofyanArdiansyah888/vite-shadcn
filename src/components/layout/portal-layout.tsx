import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import MainLayout from "@/components/layout/main-layout.tsx";
import {CircleGaugeIcon, CircleUserIcon, SchoolIcon} from "lucide-react";
import {DashboardIcon} from "@radix-ui/react-icons";

export default function PortalLayout({children}: { children: React.ReactNode }) {
    const menus = [
        {
            link: "/",
            button: <div className={"gap-2 flex items-center"}>
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
            link: "/dashboard",
            button: <div className={"gap-2 flex items-center"}>
                <SchoolIcon className={"w-4 h-4"} strokeWidth={1}/>
                Data Sekolah
            </div>,
        },
        {
            link: "/dashboard",
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
