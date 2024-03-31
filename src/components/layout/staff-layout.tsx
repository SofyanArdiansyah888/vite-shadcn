import {LogOutIcon} from "lucide-react";
import MainLayout from "@/components/layout/main-layout.tsx";
import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import {PersonIcon} from "@radix-ui/react-icons";

export default function StaffLayout({children}: { children: React.ReactNode }) {
    const menus = [
        {
            link: "/staff",
            button: <div className={"gap-2 flex items-center"}>
                <PersonIcon className={"w-4 h-4"} strokeWidth={1}/>
                Data Staff
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
