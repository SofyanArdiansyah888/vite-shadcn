/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as InformasiImport } from './routes/informasi'
import { Route as AgendaImport } from './routes/agenda'
import { Route as IndexImport } from './routes/index'
import { Route as StaffIndexImport } from './routes/staff/index'
import { Route as SiswaIndexImport } from './routes/siswa/index'
import { Route as PenggajianIndexImport } from './routes/penggajian/index'
import { Route as CbtIndexImport } from './routes/cbt/index'
import { Route as AkademikIndexImport } from './routes/akademik/index'
import { Route as AbsensiIndexImport } from './routes/absensi/index'
import { Route as StaffCreateImport } from './routes/staff/create'
import { Route as StaffIdImport } from './routes/staff/$id'
import { Route as SiswaCreateImport } from './routes/siswa/create'
import { Route as SiswaIdImport } from './routes/siswa/$id'
import { Route as PenggajianProfilGajiStaffImport } from './routes/penggajian/profil-gaji-staff'
import { Route as PenggajianProfilGajiGuruImport } from './routes/penggajian/profil-gaji-guru'
import { Route as PelanggaranPoinPelanggaranImport } from './routes/pelanggaran/poin-pelanggaran'
import { Route as PelanggaranPelanggaranSiswaImport } from './routes/pelanggaran/pelanggaran-siswa'
import { Route as PelanggaranJenisPelanggaranImport } from './routes/pelanggaran/jenis-pelanggaran'
import { Route as MasterSchoolImport } from './routes/master/school'
import { Route as KeuanganPengeluaranImport } from './routes/keuangan/pengeluaran'
import { Route as KeuanganPembayaranImport } from './routes/keuangan/pembayaran'
import { Route as KeuanganPemasukanImport } from './routes/keuangan/pemasukan'
import { Route as CbtCreateSoalImport } from './routes/cbt/create-soal'
import { Route as AuthRegisterImport } from './routes/auth/register'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthForgetPasswordImport } from './routes/auth/forget-password'
import { Route as AkademikJadwalPengajarImport } from './routes/akademik/jadwal-pengajar'
import { Route as AkademikAnggotaKelasImport } from './routes/akademik/anggota-kelas'
import { Route as AbsensiRecapImport } from './routes/absensi/recap'
import { Route as AbsensiPengaturanImport } from './routes/absensi/pengaturan'
import { Route as AbsensiLiburImport } from './routes/absensi/libur'
import { Route as AbsensiJadwalImport } from './routes/absensi/jadwal'
import { Route as AkademikJadwalPelajaranIndexImport } from './routes/akademik/jadwal-pelajaran/index'
import { Route as AkademikAbsensiPertemuanIndexImport } from './routes/akademik/absensi-pertemuan/index'
import { Route as PenggajianReferensiTunjanganImport } from './routes/penggajian/referensi/tunjangan'
import { Route as PenggajianReferensiPotonganImport } from './routes/penggajian/referensi/potongan'
import { Route as PenggajianReferensiHonorStaffImport } from './routes/penggajian/referensi/honor-staff'
import { Route as PenggajianReferensiHonorGuruImport } from './routes/penggajian/referensi/honor-guru'
import { Route as KeuanganSppTagihanKelasImport } from './routes/keuangan/spp/tagihan-kelas'
import { Route as KeuanganSppTagihanImport } from './routes/keuangan/spp/tagihan'
import { Route as KeuanganSppDataSppImport } from './routes/keuangan/spp/data-spp'
import { Route as KeuanganReferensiSaldoKasImport } from './routes/keuangan/referensi/saldo-kas'
import { Route as KeuanganReferensiKategoriPengeluaranImport } from './routes/keuangan/referensi/kategori-pengeluaran'
import { Route as KeuanganReferensiKategoriPendapatanImport } from './routes/keuangan/referensi/kategori-pendapatan'
import { Route as AkademikReferensiTahunAjaranImport } from './routes/akademik/referensi/tahun-ajaran'
import { Route as AkademikReferensiMataPelajaranImport } from './routes/akademik/referensi/mata-pelajaran'
import { Route as AkademikReferensiKelasImport } from './routes/akademik/referensi/kelas'
import { Route as AbsensiIzinIzinStaffImport } from './routes/absensi/izin/izin-staff'
import { Route as AbsensiIzinIzinSiswaImport } from './routes/absensi/izin/izin-siswa'
import { Route as AkademikJadwalPelajaranKelasIdImport } from './routes/akademik/jadwal-pelajaran/kelas.$id'
import { Route as AkademikAbsensiPertemuanDetailIdImport } from './routes/akademik/absensi-pertemuan/detail.$id'

// Create/Update Routes

const InformasiRoute = InformasiImport.update({
  path: '/informasi',
  getParentRoute: () => rootRoute,
} as any)

const AgendaRoute = AgendaImport.update({
  path: '/agenda',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const StaffIndexRoute = StaffIndexImport.update({
  path: '/staff/',
  getParentRoute: () => rootRoute,
} as any)

const SiswaIndexRoute = SiswaIndexImport.update({
  path: '/siswa/',
  getParentRoute: () => rootRoute,
} as any)

const PenggajianIndexRoute = PenggajianIndexImport.update({
  path: '/penggajian/',
  getParentRoute: () => rootRoute,
} as any)

const CbtIndexRoute = CbtIndexImport.update({
  path: '/cbt/',
  getParentRoute: () => rootRoute,
} as any)

const AkademikIndexRoute = AkademikIndexImport.update({
  path: '/akademik/',
  getParentRoute: () => rootRoute,
} as any)

const AbsensiIndexRoute = AbsensiIndexImport.update({
  path: '/absensi/',
  getParentRoute: () => rootRoute,
} as any)

const StaffCreateRoute = StaffCreateImport.update({
  path: '/staff/create',
  getParentRoute: () => rootRoute,
} as any)

const StaffIdRoute = StaffIdImport.update({
  path: '/staff/$id',
  getParentRoute: () => rootRoute,
} as any)

const SiswaCreateRoute = SiswaCreateImport.update({
  path: '/siswa/create',
  getParentRoute: () => rootRoute,
} as any)

const SiswaIdRoute = SiswaIdImport.update({
  path: '/siswa/$id',
  getParentRoute: () => rootRoute,
} as any)

const PenggajianProfilGajiStaffRoute = PenggajianProfilGajiStaffImport.update({
  path: '/penggajian/profil-gaji-staff',
  getParentRoute: () => rootRoute,
} as any)

const PenggajianProfilGajiGuruRoute = PenggajianProfilGajiGuruImport.update({
  path: '/penggajian/profil-gaji-guru',
  getParentRoute: () => rootRoute,
} as any)

const PelanggaranPoinPelanggaranRoute = PelanggaranPoinPelanggaranImport.update(
  {
    path: '/pelanggaran/poin-pelanggaran',
    getParentRoute: () => rootRoute,
  } as any,
)

const PelanggaranPelanggaranSiswaRoute =
  PelanggaranPelanggaranSiswaImport.update({
    path: '/pelanggaran/pelanggaran-siswa',
    getParentRoute: () => rootRoute,
  } as any)

const PelanggaranJenisPelanggaranRoute =
  PelanggaranJenisPelanggaranImport.update({
    path: '/pelanggaran/jenis-pelanggaran',
    getParentRoute: () => rootRoute,
  } as any)

const MasterSchoolRoute = MasterSchoolImport.update({
  path: '/master/school',
  getParentRoute: () => rootRoute,
} as any)

const KeuanganPengeluaranRoute = KeuanganPengeluaranImport.update({
  path: '/keuangan/pengeluaran',
  getParentRoute: () => rootRoute,
} as any)

const KeuanganPembayaranRoute = KeuanganPembayaranImport.update({
  path: '/keuangan/pembayaran',
  getParentRoute: () => rootRoute,
} as any)

const KeuanganPemasukanRoute = KeuanganPemasukanImport.update({
  path: '/keuangan/pemasukan',
  getParentRoute: () => rootRoute,
} as any)

const CbtCreateSoalRoute = CbtCreateSoalImport.update({
  path: '/cbt/create-soal',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  path: '/auth/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthForgetPasswordRoute = AuthForgetPasswordImport.update({
  path: '/auth/forget-password',
  getParentRoute: () => rootRoute,
} as any)

const AkademikJadwalPengajarRoute = AkademikJadwalPengajarImport.update({
  path: '/akademik/jadwal-pengajar',
  getParentRoute: () => rootRoute,
} as any)

const AkademikAnggotaKelasRoute = AkademikAnggotaKelasImport.update({
  path: '/akademik/anggota-kelas',
  getParentRoute: () => rootRoute,
} as any)

const AbsensiRecapRoute = AbsensiRecapImport.update({
  path: '/absensi/recap',
  getParentRoute: () => rootRoute,
} as any)

const AbsensiPengaturanRoute = AbsensiPengaturanImport.update({
  path: '/absensi/pengaturan',
  getParentRoute: () => rootRoute,
} as any)

const AbsensiLiburRoute = AbsensiLiburImport.update({
  path: '/absensi/libur',
  getParentRoute: () => rootRoute,
} as any)

const AbsensiJadwalRoute = AbsensiJadwalImport.update({
  path: '/absensi/jadwal',
  getParentRoute: () => rootRoute,
} as any)

const AkademikJadwalPelajaranIndexRoute =
  AkademikJadwalPelajaranIndexImport.update({
    path: '/akademik/jadwal-pelajaran/',
    getParentRoute: () => rootRoute,
  } as any)

const AkademikAbsensiPertemuanIndexRoute =
  AkademikAbsensiPertemuanIndexImport.update({
    path: '/akademik/absensi-pertemuan/',
    getParentRoute: () => rootRoute,
  } as any)

const PenggajianReferensiTunjanganRoute =
  PenggajianReferensiTunjanganImport.update({
    path: '/penggajian/referensi/tunjangan',
    getParentRoute: () => rootRoute,
  } as any)

const PenggajianReferensiPotonganRoute =
  PenggajianReferensiPotonganImport.update({
    path: '/penggajian/referensi/potongan',
    getParentRoute: () => rootRoute,
  } as any)

const PenggajianReferensiHonorStaffRoute =
  PenggajianReferensiHonorStaffImport.update({
    path: '/penggajian/referensi/honor-staff',
    getParentRoute: () => rootRoute,
  } as any)

const PenggajianReferensiHonorGuruRoute =
  PenggajianReferensiHonorGuruImport.update({
    path: '/penggajian/referensi/honor-guru',
    getParentRoute: () => rootRoute,
  } as any)

const KeuanganSppTagihanKelasRoute = KeuanganSppTagihanKelasImport.update({
  path: '/keuangan/spp/tagihan-kelas',
  getParentRoute: () => rootRoute,
} as any)

const KeuanganSppTagihanRoute = KeuanganSppTagihanImport.update({
  path: '/keuangan/spp/tagihan',
  getParentRoute: () => rootRoute,
} as any)

const KeuanganSppDataSppRoute = KeuanganSppDataSppImport.update({
  path: '/keuangan/spp/data-spp',
  getParentRoute: () => rootRoute,
} as any)

const KeuanganReferensiSaldoKasRoute = KeuanganReferensiSaldoKasImport.update({
  path: '/keuangan/referensi/saldo-kas',
  getParentRoute: () => rootRoute,
} as any)

const KeuanganReferensiKategoriPengeluaranRoute =
  KeuanganReferensiKategoriPengeluaranImport.update({
    path: '/keuangan/referensi/kategori-pengeluaran',
    getParentRoute: () => rootRoute,
  } as any)

const KeuanganReferensiKategoriPendapatanRoute =
  KeuanganReferensiKategoriPendapatanImport.update({
    path: '/keuangan/referensi/kategori-pendapatan',
    getParentRoute: () => rootRoute,
  } as any)

const AkademikReferensiTahunAjaranRoute =
  AkademikReferensiTahunAjaranImport.update({
    path: '/akademik/referensi/tahun-ajaran',
    getParentRoute: () => rootRoute,
  } as any)

const AkademikReferensiMataPelajaranRoute =
  AkademikReferensiMataPelajaranImport.update({
    path: '/akademik/referensi/mata-pelajaran',
    getParentRoute: () => rootRoute,
  } as any)

const AkademikReferensiKelasRoute = AkademikReferensiKelasImport.update({
  path: '/akademik/referensi/kelas',
  getParentRoute: () => rootRoute,
} as any)

const AbsensiIzinIzinStaffRoute = AbsensiIzinIzinStaffImport.update({
  path: '/absensi/izin/izin-staff',
  getParentRoute: () => rootRoute,
} as any)

const AbsensiIzinIzinSiswaRoute = AbsensiIzinIzinSiswaImport.update({
  path: '/absensi/izin/izin-siswa',
  getParentRoute: () => rootRoute,
} as any)

const AkademikJadwalPelajaranKelasIdRoute =
  AkademikJadwalPelajaranKelasIdImport.update({
    path: '/akademik/jadwal-pelajaran/kelas/$id',
    getParentRoute: () => rootRoute,
  } as any)

const AkademikAbsensiPertemuanDetailIdRoute =
  AkademikAbsensiPertemuanDetailIdImport.update({
    path: '/akademik/absensi-pertemuan/detail/$id',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/agenda': {
      preLoaderRoute: typeof AgendaImport
      parentRoute: typeof rootRoute
    }
    '/informasi': {
      preLoaderRoute: typeof InformasiImport
      parentRoute: typeof rootRoute
    }
    '/absensi/jadwal': {
      preLoaderRoute: typeof AbsensiJadwalImport
      parentRoute: typeof rootRoute
    }
    '/absensi/libur': {
      preLoaderRoute: typeof AbsensiLiburImport
      parentRoute: typeof rootRoute
    }
    '/absensi/pengaturan': {
      preLoaderRoute: typeof AbsensiPengaturanImport
      parentRoute: typeof rootRoute
    }
    '/absensi/recap': {
      preLoaderRoute: typeof AbsensiRecapImport
      parentRoute: typeof rootRoute
    }
    '/akademik/anggota-kelas': {
      preLoaderRoute: typeof AkademikAnggotaKelasImport
      parentRoute: typeof rootRoute
    }
    '/akademik/jadwal-pengajar': {
      preLoaderRoute: typeof AkademikJadwalPengajarImport
      parentRoute: typeof rootRoute
    }
    '/auth/forget-password': {
      preLoaderRoute: typeof AuthForgetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/register': {
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof rootRoute
    }
    '/cbt/create-soal': {
      preLoaderRoute: typeof CbtCreateSoalImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/pemasukan': {
      preLoaderRoute: typeof KeuanganPemasukanImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/pembayaran': {
      preLoaderRoute: typeof KeuanganPembayaranImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/pengeluaran': {
      preLoaderRoute: typeof KeuanganPengeluaranImport
      parentRoute: typeof rootRoute
    }
    '/master/school': {
      preLoaderRoute: typeof MasterSchoolImport
      parentRoute: typeof rootRoute
    }
    '/pelanggaran/jenis-pelanggaran': {
      preLoaderRoute: typeof PelanggaranJenisPelanggaranImport
      parentRoute: typeof rootRoute
    }
    '/pelanggaran/pelanggaran-siswa': {
      preLoaderRoute: typeof PelanggaranPelanggaranSiswaImport
      parentRoute: typeof rootRoute
    }
    '/pelanggaran/poin-pelanggaran': {
      preLoaderRoute: typeof PelanggaranPoinPelanggaranImport
      parentRoute: typeof rootRoute
    }
    '/penggajian/profil-gaji-guru': {
      preLoaderRoute: typeof PenggajianProfilGajiGuruImport
      parentRoute: typeof rootRoute
    }
    '/penggajian/profil-gaji-staff': {
      preLoaderRoute: typeof PenggajianProfilGajiStaffImport
      parentRoute: typeof rootRoute
    }
    '/siswa/$id': {
      preLoaderRoute: typeof SiswaIdImport
      parentRoute: typeof rootRoute
    }
    '/siswa/create': {
      preLoaderRoute: typeof SiswaCreateImport
      parentRoute: typeof rootRoute
    }
    '/staff/$id': {
      preLoaderRoute: typeof StaffIdImport
      parentRoute: typeof rootRoute
    }
    '/staff/create': {
      preLoaderRoute: typeof StaffCreateImport
      parentRoute: typeof rootRoute
    }
    '/absensi/': {
      preLoaderRoute: typeof AbsensiIndexImport
      parentRoute: typeof rootRoute
    }
    '/akademik/': {
      preLoaderRoute: typeof AkademikIndexImport
      parentRoute: typeof rootRoute
    }
    '/cbt/': {
      preLoaderRoute: typeof CbtIndexImport
      parentRoute: typeof rootRoute
    }
    '/penggajian/': {
      preLoaderRoute: typeof PenggajianIndexImport
      parentRoute: typeof rootRoute
    }
    '/siswa/': {
      preLoaderRoute: typeof SiswaIndexImport
      parentRoute: typeof rootRoute
    }
    '/staff/': {
      preLoaderRoute: typeof StaffIndexImport
      parentRoute: typeof rootRoute
    }
    '/absensi/izin/izin-siswa': {
      preLoaderRoute: typeof AbsensiIzinIzinSiswaImport
      parentRoute: typeof rootRoute
    }
    '/absensi/izin/izin-staff': {
      preLoaderRoute: typeof AbsensiIzinIzinStaffImport
      parentRoute: typeof rootRoute
    }
    '/akademik/referensi/kelas': {
      preLoaderRoute: typeof AkademikReferensiKelasImport
      parentRoute: typeof rootRoute
    }
    '/akademik/referensi/mata-pelajaran': {
      preLoaderRoute: typeof AkademikReferensiMataPelajaranImport
      parentRoute: typeof rootRoute
    }
    '/akademik/referensi/tahun-ajaran': {
      preLoaderRoute: typeof AkademikReferensiTahunAjaranImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/referensi/kategori-pendapatan': {
      preLoaderRoute: typeof KeuanganReferensiKategoriPendapatanImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/referensi/kategori-pengeluaran': {
      preLoaderRoute: typeof KeuanganReferensiKategoriPengeluaranImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/referensi/saldo-kas': {
      preLoaderRoute: typeof KeuanganReferensiSaldoKasImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/spp/data-spp': {
      preLoaderRoute: typeof KeuanganSppDataSppImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/spp/tagihan': {
      preLoaderRoute: typeof KeuanganSppTagihanImport
      parentRoute: typeof rootRoute
    }
    '/keuangan/spp/tagihan-kelas': {
      preLoaderRoute: typeof KeuanganSppTagihanKelasImport
      parentRoute: typeof rootRoute
    }
    '/penggajian/referensi/honor-guru': {
      preLoaderRoute: typeof PenggajianReferensiHonorGuruImport
      parentRoute: typeof rootRoute
    }
    '/penggajian/referensi/honor-staff': {
      preLoaderRoute: typeof PenggajianReferensiHonorStaffImport
      parentRoute: typeof rootRoute
    }
    '/penggajian/referensi/potongan': {
      preLoaderRoute: typeof PenggajianReferensiPotonganImport
      parentRoute: typeof rootRoute
    }
    '/penggajian/referensi/tunjangan': {
      preLoaderRoute: typeof PenggajianReferensiTunjanganImport
      parentRoute: typeof rootRoute
    }
    '/akademik/absensi-pertemuan/': {
      preLoaderRoute: typeof AkademikAbsensiPertemuanIndexImport
      parentRoute: typeof rootRoute
    }
    '/akademik/jadwal-pelajaran/': {
      preLoaderRoute: typeof AkademikJadwalPelajaranIndexImport
      parentRoute: typeof rootRoute
    }
    '/akademik/absensi-pertemuan/detail/$id': {
      preLoaderRoute: typeof AkademikAbsensiPertemuanDetailIdImport
      parentRoute: typeof rootRoute
    }
    '/akademik/jadwal-pelajaran/kelas/$id': {
      preLoaderRoute: typeof AkademikJadwalPelajaranKelasIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AgendaRoute,
  InformasiRoute,
  AbsensiJadwalRoute,
  AbsensiLiburRoute,
  AbsensiPengaturanRoute,
  AbsensiRecapRoute,
  AkademikAnggotaKelasRoute,
  AkademikJadwalPengajarRoute,
  AuthForgetPasswordRoute,
  AuthLoginRoute,
  AuthRegisterRoute,
  CbtCreateSoalRoute,
  KeuanganPemasukanRoute,
  KeuanganPembayaranRoute,
  KeuanganPengeluaranRoute,
  MasterSchoolRoute,
  PelanggaranJenisPelanggaranRoute,
  PelanggaranPelanggaranSiswaRoute,
  PelanggaranPoinPelanggaranRoute,
  PenggajianProfilGajiGuruRoute,
  PenggajianProfilGajiStaffRoute,
  SiswaIdRoute,
  SiswaCreateRoute,
  StaffIdRoute,
  StaffCreateRoute,
  AbsensiIndexRoute,
  AkademikIndexRoute,
  CbtIndexRoute,
  PenggajianIndexRoute,
  SiswaIndexRoute,
  StaffIndexRoute,
  AbsensiIzinIzinSiswaRoute,
  AbsensiIzinIzinStaffRoute,
  AkademikReferensiKelasRoute,
  AkademikReferensiMataPelajaranRoute,
  AkademikReferensiTahunAjaranRoute,
  KeuanganReferensiKategoriPendapatanRoute,
  KeuanganReferensiKategoriPengeluaranRoute,
  KeuanganReferensiSaldoKasRoute,
  KeuanganSppDataSppRoute,
  KeuanganSppTagihanRoute,
  KeuanganSppTagihanKelasRoute,
  PenggajianReferensiHonorGuruRoute,
  PenggajianReferensiHonorStaffRoute,
  PenggajianReferensiPotonganRoute,
  PenggajianReferensiTunjanganRoute,
  AkademikAbsensiPertemuanIndexRoute,
  AkademikJadwalPelajaranIndexRoute,
  AkademikAbsensiPertemuanDetailIdRoute,
  AkademikJadwalPelajaranKelasIdRoute,
])

/* prettier-ignore-end */
