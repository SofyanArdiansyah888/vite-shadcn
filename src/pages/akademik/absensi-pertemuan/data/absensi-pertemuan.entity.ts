export interface AbsensiSiswaEntity{
    nama: string,
    hadir: boolean,
    absen: boolean,
    izin: boolean,
    sakit: boolean,
    created_at: string,
    updated_at: string,
}
export default interface AbsensiPertemuanEntity {
    id: string,
    sekolah: string,
    tahun_ajaran: string,
    kelas: string,
    tanggal: string,
    mata_pelajaran: string,
    guru: string,
    catatan: string,
    materi: string,
    absensi: AbsensiSiswaEntity[]
    created_at: string,
    updated_at: string,
}
