import React, {useEffect} from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import useParams from "@/hooks/useParams.tsx";
import KelasFilter from "@/pages/modul/akademik/referensi/kelas/components/kelas-filter.tsx";
import useJadwalPelajaranStore from "@/pages/modul/akademik/jadwal-pelajaran/data/useJadwalPelajaranStore.ts";
import GroupBadgeFilter from "@/components/shared/group-badge-filter.tsx";
import AbsensiPertemuanTable from "@/pages/modul/akademik/absensi-pertemuan/components/absensi-pertemuan-table.tsx";


const AbsensiPertemuanPage: React.FC = () => {
    const {filterPayload, resetFilterPayload, deleteFilterPayload} = useJadwalPelajaranStore()

    const {params, handleParamsChange} = useParams({})


    useEffect(() => {
        return () => {
            resetFilterPayload()
        }
    }, [])
    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Absensi Pertemuan"}
                    additionalAction={<KelasFilter/>}
                    handleSearch={(value) => handleParamsChange("search", value)}
                />
                <div className={"flex justify-between  py-2 gap-1"}>
                    <GroupBadgeFilter
                        filterPayload={filterPayload}
                        deleteFilterPayload={deleteFilterPayload}
                        resetFilterPayload={resetFilterPayload}
                    />
                </div>
                <AbsensiPertemuanTable params={params}/>
            </section>

        </AkademikLayout>

    );
};

export default AbsensiPertemuanPage;
