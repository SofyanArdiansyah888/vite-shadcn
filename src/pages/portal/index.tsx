import PortalCard, {
  PortalPageProps,
} from "@/pages/portal/_components/portal-card.tsx";
import PortalLayout from "@/components/layout/portal-layout.tsx";
import teacherUrl from "../../assets/teacher.svg";
import imageUrl from "../../assets/children.svg";
import certivicateUrl from "../../assets/certivicate.svg";
import timeUrl from "../../assets/time.svg";
import agendaUrl from "../../assets/agenda.svg";
import moneyUrl from "../../assets/money.svg";
import salaryUrl from "../../assets/salary.svg";
import informationUrl from "../../assets/information.svg";
import childrenPlayUrl from "../../assets/children-play.svg";
import testUrl from "../../assets/test.svg";
import {createFileRoute} from "@tanstack/react-router";
import Index from "@/pages/penggajian/(penggajian)";

export const Route = createFileRoute('/portal/')({
  component: () => <Index />
})

export default function PortalPage() {
  const definePortal = [
    {
      title: "PSB",
      subtitle: "Kelola data penerimaan siswa baru disekolah anda",
      imageUrl: imageUrl,
      color: "orange",
      link: "/psb",
    },
    {
      title: "Data Pegawai",
      subtitle: "Kelola data guru dan staff di sekolah anda",
      imageUrl: teacherUrl,
      color: "orange",
      link: "/staff",
    },
    {
      title: "Data Siswa",
      subtitle: "Kelola data siswa di sekolah anda",
      imageUrl: imageUrl,
      color: "orange",
      link: "/siswa",
    },
    {
      title: "Akademik",
      subtitle: "Fitur akademik untuk menunjang kualitas akademik di sekolah",
      imageUrl: certivicateUrl,
      color: "orange",
      link: "/akademik/referensi/tahun-ajaran",
    },
    {
      title: "Absensi",
      subtitle: "Kelola daftar hadir guru,staff dan siswa di sekolah anda",
      imageUrl: timeUrl,
      color: "orange",
      link: "/absensi",
    },
    {
      title: "Agenda",
      subtitle:
        "Kelola agenda kegiatan sekolah anda untuk di informasikan ke user sekolah",
      imageUrl: agendaUrl,
      color: "orange",
      link: "/agenda",
    },
    {
      title: "Pelanggaran Siswa",
      subtitle:
        "Kelola pelanggaran siswa dan langkah penyelesaian yang dilakukan",
      imageUrl: childrenPlayUrl,
      color: "orange",
      link: "/pelanggaran/jenis-pelanggaran",
    },
    {
      title: "Keuangan",
      subtitle: "Kelola keuangan sekolah dengan mudah",
      imageUrl: moneyUrl,
      color: "orange",
      link: "/keuangan/referensi/saldo-kas",
    },
    {
      title: "Penggajian",
      subtitle:
        "Kelola pencatatan dan rekap gaji guru dan staff di sekolah anda",
      imageUrl: salaryUrl,
      color: "orange",
      link: "/penggajian",
    },
    // {
    //     title: "Gallery",
    //     subtitle: "Kelola gallery di sekolah anda untuk ditampilkan",
    //     icon: <BookImageIcon strokeWidth={0.4} className={"h-20 w-20"} />,
    //     color: "indigo",
    //     link: "/"
    // },
    {
      title: "Informasi",
      subtitle: "Broadcast informasi singkat",
      imageUrl: informationUrl,
      color: "orange",
      link: "/informasi",
    },
    // {
    //     title: "Alumni",
    //     subtitle: "Kelola data alumni di sekolah anda",
    //     icon: <GraduationCapIcon strokeWidth={0.4} className={"h-20 w-20"} />,
    //     color: "emerald",
    //     link: "/"
    // },
    {
      title: "Computer Based Test (CBT)",
      subtitle: "Kelola ujian siswa anda dengan mudah",
      imageUrl: testUrl,
      color: "orange",
      link: "/cbt",
    },
  ] as Array<PortalPageProps>;

  return (
    <PortalLayout>
      <section className="flex-1 space-y-4 p-8 pt-6">
        <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
          {definePortal.map(({ title, subtitle, imageUrl, color, link }) => (
            <PortalCard
              title={title}
              subtitle={subtitle}
              imageUrl={imageUrl}
              color={color}
              link={link}
            />
          ))}
        </div>
      </section>
    </PortalLayout>
  );
}
