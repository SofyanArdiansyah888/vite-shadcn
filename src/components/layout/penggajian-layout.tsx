import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import MainLayout from "@/components/layout/main-layout.tsx";
import {BookIcon, BookUp, Clipboard, CoinsIcon, ContactIcon, ContactRoundIcon, LogOutIcon} from "lucide-react";
import {useRouterState} from "@tanstack/react-router";
import ButtonNavigation, {ButtonSubNavigation} from "@/components/navigation/button-nav.tsx";
import {activeCheck} from "@/lib/utils.ts";

export default function PenggajianLayout({children}: { children: React.ReactNode }) {
    const router = useRouterState()
    const menus = [
        {
            link: "/penggajian",
            button: <div className={`gap-2 flex items-center ${activeCheck("/penggajian", router)}`}>
                <Clipboard className={"w-4 h-4"} strokeWidth={1}/>
                Selip Gaji
            </div>,
        },
        {
            link: "",
            button: <ButtonNavigation title={"Referensi"} link={""} router={router}>
                <BookIcon className={"w-4 h-4"} strokeWidth={1}/>
            </ButtonNavigation>,
            submenu: [
                {
                    link: "/penggajian/referensi/honor-guru",
                    button: <ButtonSubNavigation
                        title={"Honor Guru"}
                        link={"/penggajian/referensi/honor-guru"}
                        router={router}>
                        <CoinsIcon className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/penggajian/referensi/honor-staff",
                    button: <ButtonSubNavigation
                        title={"Hono Staff"}
                        link={"/penggajian/referensi/honor-staff"} router={router}>
                        <CoinsIcon className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/penggajian/referensi/tunjangan",
                    button: <ButtonSubNavigation
                        title={"Tunjangan"}
                        link={"/penggajian/referensi/tunjangan"}
                        router={router}>
                        <BookUp className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/penggajian/referensi/potongan",
                    button: <ButtonSubNavigation
                        title={"Potongan"}
                        link={"/penggajian/referensi/potongan"}
                        router={router}>
                        <BookUp className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                }
            ]
        },
        {
            link: "/penggajian/profil-gaji-guru",
            button: <div className={`gap-2 flex items-center ${activeCheck("/penggajian/profil-gaji-guru", router)}`}>
                <ContactIcon className={"w-4 h-4"} strokeWidth={1}/>
                Profil Gaji Guru
            </div>,
        },
        {
            link: "/penggajian/profil-gaji-staff",
            button: <div className={`gap-2 flex items-center ${activeCheck("/penggajian/profil-gaji-staff", router)}`}>
                <ContactRoundIcon className={"w-4 h-4"} strokeWidth={1}/>
                Profil Gaji Staff
            </div>,
        },
        {
            link: "/",
            button: <div className={`gap-2 flex items-center`}>
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
