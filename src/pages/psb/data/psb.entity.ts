export default interface PsbEntity {
  id: string;
  nomor_pendaftaran: string;
  nama: string;
  jenis_kelamin: string;
  tinggi_badan: number;
  berat_badan: number;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama: string;
  alamat: string;
  rt_rw: string;
  desa: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  kode_pos: string;
  nomor_telepon: string;
  asal_sekolah: string;
  akta_kelahiran: string;
  kartu_keluarga: string;
  prestasi: string[];
  hobi: string[];
  riwayat_penyakit: string[];
  created_at: string;
  updated_at: string;
}
