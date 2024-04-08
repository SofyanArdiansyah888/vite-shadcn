export default interface StaffEntity {
    id: string;
    nama: string;
    nik: string;
    nip: string;
    jenis_kelamin: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    jabatan: string;
    jenis_ptk: string;
    nuptk: string;
    status_kepegawaian: string;
    telepon: string;
    email: string;
    rfid: string;
    foto: string;
    password: string;
    created_at: string | null;
    updated_at: string | null;
    deleted_at: string | null;
}
