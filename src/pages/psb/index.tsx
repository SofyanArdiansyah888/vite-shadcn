import PsbLayout from "@/components/layout/psb-layout";
import CustomHeader from "@/components/shared/custom-header.tsx";
import DetailModal, {
  IDetailInfoModal,
} from "@/components/shared/modal/detail-modal.tsx";
import { Button } from "@/components/ui/button.tsx";
import useGroupModal from "@/hooks/useGroupModal.tsx";
import useParams from "@/hooks/useParams.tsx";
import { usersPsb } from "@/lib/faker";
import React, { useState } from "react";
import { ReactSpreadsheetImport } from "react-spreadsheet-import";
import { Result } from "react-spreadsheet-import/types/types";
import { downloadExcelJS } from "react-use-exceljs";
import PsbTable from "@/pages/psb/_components/psb-table";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/psb/')({
  component: () => <Index />
})

const importFields = [
  {
    label: "Nomor Pendaftaran",
    key: "nomor_pendaftaran",
    fieldType: { type: "input" },
  },
  { label: "Nama", key: "nama", fieldType: { type: "input" } },
  {
    label: "Jenis Kelamin",
    key: "jenis_kelamin",
    fieldType: { type: "input" },
  },
  { label: "Tinggi Badan", key: "tinggi_badan", fieldType: { type: "input" } },
  { label: "Berat Badan", key: "berat_badan", fieldType: { type: "input" } },
  { label: "Agama", key: "agama", fieldType: { type: "input" } },
  { label: "Tempat Lahir", key: "tempat_lahir", fieldType: { type: "input" } },
  {
    label: "Tanggal Lahir",
    key: "tanggal_lahir",
    fieldType: { type: "input" },
  },
  { label: "Provinsi", key: "provinsi", fieldType: { type: "input" } },
  { label: "Kabupaten", key: "kabupaten", fieldType: { type: "input" } },
  { label: "Kecamatan", key: "kecamatan", fieldType: { type: "input" } },
  { label: "Desa", key: "desa", fieldType: { type: "input" } },
  { label: "Kode Pos", key: "kode_pos", fieldType: { type: "input" } },
  { label: "Rt Rw", key: "rt_rw", fieldType: { type: "input" } },
  { label: "Alamat", key: "alamat", fieldType: { type: "input" } },
  {
    label: "Nomor Telepon",
    key: "nomor_telepon",
    fieldType: { type: "input" },
  },
  { label: "Asal Sekolah", key: "asal_sekolah", fieldType: { type: "input" } },
  { label: "Hobi", key: "hobi", fieldType: { type: "input" } },
  { label: "Prestasi", key: "prestasi", fieldType: { type: "input" } },
  {
    label: "Riwayat Penyakit",
    key: "riwayat_penyakit",
    fieldType: { type: "input" },
  },
  {
    label: "Akta Kelahiran",
    key: "akta_kelahiran",
    fieldType: { type: "input" },
  },
  {
    label: "Kartu Keluarga",
    key: "kartu_keluarga",
    fieldType: { type: "input" },
  },
  { label: "Created At", key: "created_at", fieldType: { type: "input" } },
  { label: "Updated At", key: "updated_at", fieldType: { type: "input" } },
  { label: "Id", key: "id", fieldType: { type: "input" } },
] as const;

const exportFields = [
  {
    header: "Nomor Pendaftaran",
    key: "nomor_pendaftaran",
    width: 20,
  },
  { header: "Nama", key: "nama", width: 20 },
  { header: "Jenis Kelamin", key: "jenis_kelamin", width: 15 },
  { header: "Tinggi Badan", key: "tinggi_badan", width: 15 },
  { header: "Berat Badan", key: "berat_badan", width: 15 },
  { header: "Agama", key: "agama", width: 10 },
  { header: "Tempat Lahir", key: "tempat_lahir", width: 20 },
  { header: "Tanggal Lahir", key: "tanggal_lahir", width: 15 },
  { header: "Provinsi", key: "provinsi", width: 20 },
  { header: "Kabupaten", key: "kabupaten", width: 20 },
  { header: "Kecamatan", key: "kecamatan", width: 20 },
  { header: "Desa", key: "desa", width: 20 },
  { header: "Kode Pos", key: "kode_pos", width: 10 },
  { header: "Rt Rw", key: "rt_rw", width: 10 },
  { header: "Alamat", key: "alamat", width: 25 },
  { header: "Nomor Telepon", key: "nomor_telepon", width: 15 },
  { header: "Asal Sekolah", key: "asal_sekolah", width: 20 },
  { header: "Hobi", key: "hobi", width: 15 },
  { header: "Prestasi", key: "prestasi", width: 15 },
  { header: "Riwayat Penyakit", key: "riwayat_penyakit", width: 20 },
  { header: "Akta Kelahiran", key: "akta_kelahiran", width: 15 },
  { header: "Kartu Keluarga", key: "kartu_keluarga", width: 15 },
  { header: "Created At", key: "created_at", width: 20 },
  { header: "Updated At", key: "updated_at", width: 20 },
  { header: "Id", key: "id", width: 10 },
];

const Index: React.FC = () => {
  const { groupModal, handleGroupModal } = useGroupModal({
    modal: false,
    detailModal: false,
  });
  const { params, handleParamsChange } = useParams({});
  const [openImport, isOpenImport] = useState(false);
  const [detail, setDetail] = useState<IDetailInfoModal[]>([]);

  const onSubmit = (result: Result<string>, file: File) => {
    console.log(result, file?.name);
  };

  const onCloseImport = () => isOpenImport(false);

  const handleImport = () => {
    isOpenImport(true);
  };

  const handleExport = () => {
    downloadExcelJS({
      filename: "data-psb.xlsx",
      data: usersPsb,
      worksheets: [
        {
          name: "Sheet 1",
          columns: exportFields,
        },
      ],
    });
  };

  return (
    <>
      <PsbLayout>
        <section className={"px-12 py-4"}>
          <CustomHeader
            title="Data Siswa Baru"
            handleSearch={(value) => handleParamsChange("search", value)}
          />
          <div className={"flex justify-end py-2 gap-2"}>
            <Button variant="primary" size="sm" onClick={handleImport}>
              Import
            </Button>
            <Button variant="secondary" size="sm" onClick={handleExport}>
              Export
            </Button>
          </div>
          <PsbTable
            setDetail={setDetail}
            handleGroupModal={handleGroupModal}
            params={params}
          />
        </section>
        <DetailModal
          title={"Detail Informasil"}
          isOpen={groupModal.detailModal}
          column="grid-cols-3"
          width={800}
          setIsOpen={(value) =>
            handleGroupModal("detailModal", value as boolean)
          }
          details={detail}
        />
      </PsbLayout>
      <ReactSpreadsheetImport
        isOpen={openImport}
        onClose={onCloseImport}
        onSubmit={onSubmit}
        fields={importFields}
      />
    </>
  );
};

export default Index;
