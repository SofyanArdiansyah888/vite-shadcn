import {InfoIcon, LogOutIcon} from "lucide-react";
import MainLayout from "@/components/layout/main-layout.tsx";
import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import {useRouterState} from "@tanstack/react-router";
import {activeCheck} from "@/lib/utils.ts";

export default function PelanggaranLayout({children}: { children: React.ReactNode }) {
    const router = useRouterState()

    const menus = [
        {
            link: "/pelanggaran/jenis-pelanggaran",
            button: <div className={`gap-2 flex items-center ${activeCheck("/pelanggaran/jenis-pelanggaran", router)}`}>
                <InfoIcon className={"w-4 h-4"} strokeWidth={1}/>
                Jenis Pelanggaran
            </div>,
        },
        {
            link: "/pelanggaran/pelanggaran-siswa",
            button: <div className={`gap-2 flex items-center ${activeCheck("/pelanggaran/pelanggaran-siswa", router)}`}>
                <InfoIcon className={"w-4 h-4"} strokeWidth={1}/>
                Pelanggaran Siswa
            </div>,
        },
        {
            link: "/pelanggaran/poin-pelanggaran",
            button: <div className={`gap-2 flex items-center ${activeCheck("/pelanggaran/poin-pelanggaran", router)}`}>
                <InfoIcon className={"w-4 h-4"} strokeWidth={1}/>
                Poin Pelanggaran
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
