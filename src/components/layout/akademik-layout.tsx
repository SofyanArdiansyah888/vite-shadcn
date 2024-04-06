import {ActivityIcon, BookIcon, BookUp, CalendarCheck, CalendarDays, LogOutIcon, TimerReset} from "lucide-react";
import MainLayout from "@/components/layout/main-layout.tsx";
import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import {CountdownTimerIcon, PersonIcon} from "@radix-ui/react-icons";
import {useRouterState} from "@tanstack/react-router";
import {activeCheck} from "@/lib/utils.ts";
import ButtonNavigation, {ButtonSubNavigation} from "@/components/navigation/button-nav.tsx";

export default function AkademikLayout({children}: { children: React.ReactNode }) {
    const router = useRouterState()

    const menus = [
        {
            link: "",
            button: <ButtonNavigation title={"Referensi"} link={""} router={router}>
                <BookIcon className={"w-4 h-4"} strokeWidth={1}/>
            </ButtonNavigation>,
            submenu: [
                {
                    link: "/akademik/referensi/tahun-ajaran",
                    button: <ButtonSubNavigation title={"Tahun Ajaran"} link={"/akademik/referensi/tahun-ajaran"}
                                                 router={router}>
                        <CalendarDays className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/akademik/referensi/kelas",
                    button: <ButtonSubNavigation title={"Kelas"} link={"/akademik/referensi/kelas"} router={router}>
                        <ActivityIcon className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/akademik/referensi/matapelajaran",
                    button: <ButtonSubNavigation title={"Mata Pelajaran"} link={"/akademik/referensi/matapelajaran"}
                                                 router={router}>
                        <BookUp className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                }
            ]
        },
        {
            link: "/akademik/anggota-kelas",
            button: <div className={`gap-2 flex items-center ${activeCheck("/staff", router)}`}>
                <PersonIcon className={"w-4 h-4"} strokeWidth={1}/>
                Anggota Kelas
            </div>,
        },
        {
            link: "/akademik/jadwal-pelajaran",
            button: <div className={`gap-2 flex items-center ${activeCheck("/staff", router)}`}>
                <CountdownTimerIcon className={"w-4 h-4"} strokeWidth={1}/>
                Jadwal Pelajaran
            </div>,
        },
        {
            link: "/akademik/jadwal-pengajar",
            button: <div className={`gap-2 flex items-center ${activeCheck("/staff", router)}`}>
                <CalendarCheck className={"w-4 h-4"} strokeWidth={1}/>
                Jadwal Pengajar
            </div>,
        },
        {
            link: "/akademik/absensi-pertemuan",
            button: <div className={`gap-2 flex items-center ${activeCheck("/staff", router)}`}>
                <TimerReset className={"w-4 h-4"} strokeWidth={1}/>
                Absensi Pertemuan
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
