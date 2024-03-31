import PortalCard from "@/pages/main/portal/components/portal-card.tsx";
import {
    BadgeInfoIcon,
    BookIcon,
    BookImageIcon,
    BriefcaseIcon,
    CircleAlertIcon,
    CircleUserIcon,
    CircleUserRoundIcon,
    CoinsIcon,
    GraduationCapIcon,
    SchoolIcon,
    TimerIcon
} from "lucide-react";
import PortalLayout from "@/components/layout/portal-layout.tsx";

export default function PortalPage() {

    return <PortalLayout>
        <section className="flex-1 space-y-4 p-8 pt-6">
            <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
                <PortalCard
                    title={"Data Guru & Staff"}
                    subtitle={"Kelola data guru dan staff di sekolah anda"}
                    icon={<CircleUserIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"green"}
                    link={"/staff"}
                />

                <PortalCard
                    title={"Data Siswa"}
                    subtitle={"Kelola data siswa di sekolah anda"}
                    icon={<CircleUserRoundIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"blue"}
                    link={"/"}
                />

                <PortalCard
                    title={"Akademik"}
                    subtitle={"Fitur akademik untuk menunjang kualitas akademik di sekolah"}
                    icon={<SchoolIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"orange"}
                    link={"/"}
                />

                <PortalCard
                    title={"Absensi"}
                    subtitle={"Kelola daftar hadir guru,staff dan siswa di sekolah anda"}
                    icon={<TimerIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"zinc"}
                    link={"/"}
                />

                <PortalCard
                    title={"Agenda"}
                    subtitle={"Kelola agenda kegiatan sekolah anda untuk di informasikan ke user sekolah"}
                    icon={<BookIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"gray"}
                    link={"/"}
                />

                <PortalCard
                    title={"Pelanggaran Siswa"}
                    subtitle={"Kelola pelanggaran siswa dan langkah penyelesaian yang dilakukan"}
                    icon={<CircleAlertIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"red"}
                    link={"/"}
                />

                <PortalCard
                    title={"Keuangan"}
                    subtitle={"Kelola keuangan sekolah dengan mudah"}
                    icon={<CoinsIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"purple"}
                    link={"/"}
                />

                <PortalCard
                    title={"Penggajian"}
                    subtitle={"Kelola pencatatan dan rekap gaji guru dan staff di sekolah anda"}
                    icon={<BriefcaseIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"pink"}
                    link={"/"}
                />

                <PortalCard
                    title={"Gallery"}
                    subtitle={"Kelola gallery di sekolah anda untuk ditampilkan"}
                    icon={<BookImageIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"indigo"}
                    link={"/"}
                />

                <PortalCard
                    title={"Informasi"}
                    subtitle={"Broadcast informasi singkat"}
                    icon={<BadgeInfoIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"rose"}
                    link={"/"}
                />

                <PortalCard
                    title={"Alumni"}
                    subtitle={"Kelola data alumni di sekolah anda"}
                    icon={<GraduationCapIcon strokeWidth={0.4} className={"h-20 w-20"}/>}
                    color={"emerald"}
                    link={"/"}
                />

            </div>
        </section>
    </PortalLayout>
}
