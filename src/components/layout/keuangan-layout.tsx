import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import MainLayout from "@/components/layout/main-layout.tsx";
import {BookIcon, BookUp, CoinsIcon, ContactRoundIcon, LogOutIcon} from "lucide-react";
import {useRouterState} from "@tanstack/react-router";
import ButtonNavigation, {ButtonSubNavigation} from "@/components/navigation/button-nav.tsx";
import {activeCheck} from "@/lib/utils.ts";

export default function KeuanganLayout({children}: { children: React.ReactNode }) {
    const router = useRouterState()
    const menus = [
        {
            link: "",
            button: <ButtonNavigation title={"Referensi"} link={""} router={router}>
                <BookIcon className={"w-4 h-4"} strokeWidth={1}/>
            </ButtonNavigation>,
            submenu: [
                {
                    link: "/keuangan/referensi/kategori-pendapatan",
                    button: <ButtonSubNavigation
                        title={"Kategori Pendapatan"}
                        link={"/keuangan/referensi/kategori-pendapatan"}
                        router={router}>
                        <CoinsIcon className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/keuangan/referensi/kategori-pengeluaran",
                    button: <ButtonSubNavigation
                        title={"Kategori Pengeluaran"}
                        link={"/keuangan/referensi/kategori-pengeluaran"} router={router}>
                        <CoinsIcon className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/keuangan/referensi/saldo-kas",
                    button: <ButtonSubNavigation
                        title={"Saldo Kas"}
                        link={"/keuangan/referensi/saldo-kas"}
                        router={router}>
                        <BookUp className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                }
            ]
        },
        {
            link: "",
            button: <ButtonNavigation title={"SPP"} link={""} router={router}>
                <BookIcon className={"w-4 h-4"} strokeWidth={1}/>
            </ButtonNavigation>,
            submenu: [
                {
                    link: "/keuangan/spp/data-spp",
                    button: <ButtonSubNavigation
                        title={"Data SPP"}
                        link={"/keuangan/spp/data-spp"}
                        router={router}>
                        <CoinsIcon className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
                {
                    link: "/keuangan/spp/tagihan",
                    button: <ButtonSubNavigation
                        title={"Tagihan"}
                        link={"/keuangan/spp/tagihan"} router={router}>
                        <CoinsIcon className={"w-4 h-4"} strokeWidth={1}/>
                    </ButtonSubNavigation>
                },
            ]
        },
        {
            link: "/keuangan/pembayaran",
            button: <div className={`gap-2 flex items-center ${activeCheck("/keuangan/pembayaran", router)}`}>
                <ContactRoundIcon className={"w-4 h-4"} strokeWidth={1}/>
                Pembayaran Siswa
            </div>,
        },
        {
            link: "/keuangan/pemasukan",
            button: <div className={`gap-2 flex items-center ${activeCheck("/keuangan/pemasukan", router)}`}>
                <ContactRoundIcon className={"w-4 h-4"} strokeWidth={1}/>
                Pemasukan
            </div>,
        },
        {
            link: "/keuangan/pengeluaran",
            button: <div className={`gap-2 flex items-center ${activeCheck("/keuangan/pengeluaran", router)}`}>
                <ContactRoundIcon className={"w-4 h-4"} strokeWidth={1}/>
                Pengeluaran
            </div>,
        },
        {
            link: "/keuangan/rekapitulasi",
            button: <div className={`gap-2 flex items-center ${activeCheck("/keuangan/rekapitulasi", router)}`}>
                <ContactRoundIcon className={"w-4 h-4"} strokeWidth={1}/>
                Rekapitulasi
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
