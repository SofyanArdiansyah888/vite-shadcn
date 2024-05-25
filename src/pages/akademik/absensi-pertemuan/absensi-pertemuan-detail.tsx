import React from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import {BackButton} from "@/components/ui/button.tsx";
import {createFileRoute, Link, useParams} from "@tanstack/react-router";
import AbsensiPertemuanDetailTable
    from "@/pages/akademik/absensi-pertemuan/_components/absensi-pertemuan-detail-table.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useGetDetail} from "@/hooks/useApi.tsx";
import AbsensiPertemuanEntity from "@/pages/akademik/absensi-pertemuan/_data/absensi-pertemuan.entity.ts";
import Index from "@/pages/agenda";

export const Route = createFileRoute('/akademik/absensi-pertemuan/absensi-pertemuan-detail')({
    component: () => <Index />
})


const AbsensiPertemuanDetail: React.FC = () => {
    const {id} = useParams({from: "/akademik/absensi-pertemuan/detail/$id"})
    const {data, isLoading} = useGetDetail<AbsensiPertemuanEntity>({
        endpoint: `/absensi-pertemuan`,
        name: "absensi-pertemuan",
        id
    })
    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Daftar Hadir Absensi Pertemuan"}
                    additionalAction={<>
                        <Link to={"/akademik/absensi-pertemuan"}>
                            <BackButton/>
                        </Link>
                        {/*<SaveButton/>*/}
                    </>}
                />
                <div className={"my-4 grid grid-cols-2 gap-y-3"}>
                    <JadwalPelajaranLabel label={"Sekolah"} value={data?.sekolah as string}/>
                    <JadwalPelajaranLabel label={"Tahun Ajaran"} value={data?.tahun_ajaran as string}/>
                    <JadwalPelajaranLabel label={"Kelas"} value={data?.kelas as string}/>
                    <JadwalPelajaranLabel label={"Mata Pelajaran"} value={data?.mata_pelajaran as string}/>
                    <JadwalPelajaranLabel label={"Guru"} value={data?.guru as string}/>
                    <JadwalPelajaranLabel label={"Tanggal"} value={data?.tanggal as string}/>
                    <JadwalPelajaranLabel label={"Materi"} value={data?.materi as string}/>
                    <JadwalPelajaranLabel label={"Catatan"} value={data?.catatan as string}/>
                </div>
                <Separator className={"my-4"}/>

                <AbsensiPertemuanDetailTable
                    data={data}
                    isLoading={isLoading}
                />

            </section>

        </AkademikLayout>

    );
};

function JadwalPelajaranLabel({label, value, className}: { label: string, value: string, className?: string }) {
    return <div className={`flex gap-2 ${className}`}>
        <div className={"flex justify-between min-w-[130px] font-medium"}>
            {label}
            <span>:</span>
        </div>
        <div className={"font-light"}>
            {value}
        </div>

    </div>
}

export default AbsensiPertemuanDetail;
