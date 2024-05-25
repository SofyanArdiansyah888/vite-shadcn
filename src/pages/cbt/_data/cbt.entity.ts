export default interface CBTEntity {
    sekolah: string;
    tahun_ajaran: string;
    mata_pelajaran: string;
    kelas: string;
    nama_ujian: string;
    token: string;
    waktu_ujian: string; //(TANGGAL WAKTU DD-MM-YYY h:i:s)
    pemeriksa: string[]
    durasi: number
    soal_pilihan_ganda: number
    soal_essay: number
    soal: string
    created_at: string
    updated_at: string
}
