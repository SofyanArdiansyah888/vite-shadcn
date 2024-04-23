import {
    ActivityIcon,
    CalendarDays,
    CalendarFold,
    ClockIcon,
    InfoIcon,
    LogOutIcon,
    QrCodeIcon,
    SettingsIcon,
    TimerReset
} from "lucide-react";
import MainLayout from "@/components/layout/main-layout";
import SecondaryNav, {IMenu} from "@/components/navigation/secondary-nav";
import {useRouterState} from "@tanstack/react-router";
import {activeCheck} from "@/lib/utils";
import {ButtonSubNavigation} from "@/components/navigation/button-nav";

export default function AbsensiLayout({children}: { children: React.ReactNode }) {
    const router = useRouterState()

    const menus: IMenu[] = [
        {
            link: "/qrcode",
            button: <div className={`gap-2 flex items-center ${activeCheck("/qrcode", router)}`}>
                <QrCodeIcon className={"w-4 h-4"} strokeWidth={1}/>
                QRCode
            </div>,
        },
        {
            link: "/pengaturan",
            button: <div className={`gap-2 flex items-center ${activeCheck("/pengaturan", router)}`}>
                <SettingsIcon className={"w-4 h-4"} strokeWidth={1}/>
                Pengaturan
            </div>,
        },
        {
            link: "/jadwal",
            button: <div className={`gap-2 flex items-center ${activeCheck("/jadwal", router)}`}>
                <ClockIcon className={"w-4 h-4"} strokeWidth={1}/>
                Jadwal
            </div>,
        },
        {
            link: "/izin",
            button: <div className={`gap-2 flex items-center ${activeCheck("/izin", router)}`}>
                <InfoIcon className={"w-4 h-4"} strokeWidth={1}/>
                Izin
            </div>,
            submenu: [
                {
                    link: "/akademik/referensi/tahun-ajaran",
                    button: <ButtonSubNavigation title={"Izin Guru"}
                                                 link={"/akademik/referensi/tahun-ajaran"}
                                                 router={router}>
                        <CalendarDays className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/akademik/referensi/kelas",
                    button: <ButtonSubNavigation title={"Izin Siswa"}
                                                 link={"/akademik/referensi/kelas"}
                                                 router={router}>
                        <ActivityIcon className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                }
            ]
        },
        {
            link: "/libur",
            button: <div className={`gap-2 flex items-center ${activeCheck("/jadwal", router)}`}>
                <CalendarDays className={"w-4 h-4"} strokeWidth={1}/>
                Hari Libur
            </div>,
        },
        {
            link: "/libur",
            button: <div className={`gap-2 flex items-center ${activeCheck("/jadwal", router)}`}>
                <TimerReset className={"w-4 h-4"} strokeWidth={1}/>
                Log Absensi
            </div>,
        },
        {
            link: "/libur",
            button: <div className={`gap-2 flex items-center ${activeCheck("/jadwal", router)}`}>
                <CalendarFold className={"w-4 h-4"} strokeWidth={1}/>
                Recap Absensi
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
