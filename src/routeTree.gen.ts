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
import { Route as AkademikIndexImport } from './routes/akademik/index'
import { Route as StaffCreateImport } from './routes/staff/create'
import { Route as StaffIdImport } from './routes/staff/$id'
import { Route as SiswaCreateImport } from './routes/siswa/create'
import { Route as SiswaIdImport } from './routes/siswa/$id'
import { Route as PelanggaranPoinPelanggaranImport } from './routes/pelanggaran/poin-pelanggaran'
import { Route as PelanggaranPelanggaranSiswaImport } from './routes/pelanggaran/pelanggaran-siswa'
import { Route as PelanggaranJenisPelanggaranImport } from './routes/pelanggaran/jenis-pelanggaran'
import { Route as MasterSchoolImport } from './routes/master/school'
import { Route as AuthRegisterImport } from './routes/auth/register'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthForgetPasswordImport } from './routes/auth/forget-password'
import { Route as AkademikJadwalPengajarImport } from './routes/akademik/jadwal-pengajar'
import { Route as AkademikAnggotaKelasImport } from './routes/akademik/anggota-kelas'
import { Route as AkademikJadwalPelajaranIndexImport } from './routes/akademik/jadwal-pelajaran/index'
import { Route as AkademikAbsensiPertemuanIndexImport } from './routes/akademik/absensi-pertemuan/index'
import { Route as AkademikReferensiTahunAjaranImport } from './routes/akademik/referensi/tahun-ajaran'
import { Route as AkademikReferensiMatapelajaranImport } from './routes/akademik/referensi/matapelajaran'
import { Route as AkademikReferensiKelasImport } from './routes/akademik/referensi/kelas'
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

const AkademikIndexRoute = AkademikIndexImport.update({
  path: '/akademik/',
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

const AkademikReferensiTahunAjaranRoute =
  AkademikReferensiTahunAjaranImport.update({
    path: '/akademik/referensi/tahun-ajaran',
    getParentRoute: () => rootRoute,
  } as any)

const AkademikReferensiMatapelajaranRoute =
  AkademikReferensiMatapelajaranImport.update({
    path: '/akademik/referensi/matapelajaran',
    getParentRoute: () => rootRoute,
  } as any)

const AkademikReferensiKelasRoute = AkademikReferensiKelasImport.update({
  path: '/akademik/referensi/kelas',
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
    '/akademik/': {
      preLoaderRoute: typeof AkademikIndexImport
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
    '/akademik/referensi/kelas': {
      preLoaderRoute: typeof AkademikReferensiKelasImport
      parentRoute: typeof rootRoute
    }
    '/akademik/referensi/matapelajaran': {
      preLoaderRoute: typeof AkademikReferensiMatapelajaranImport
      parentRoute: typeof rootRoute
    }
    '/akademik/referensi/tahun-ajaran': {
      preLoaderRoute: typeof AkademikReferensiTahunAjaranImport
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
  AkademikAnggotaKelasRoute,
  AkademikJadwalPengajarRoute,
  AuthForgetPasswordRoute,
  AuthLoginRoute,
  AuthRegisterRoute,
  MasterSchoolRoute,
  PelanggaranJenisPelanggaranRoute,
  PelanggaranPelanggaranSiswaRoute,
  PelanggaranPoinPelanggaranRoute,
  SiswaIdRoute,
  SiswaCreateRoute,
  StaffIdRoute,
  StaffCreateRoute,
  AkademikIndexRoute,
  SiswaIndexRoute,
  StaffIndexRoute,
  AkademikReferensiKelasRoute,
  AkademikReferensiMatapelajaranRoute,
  AkademikReferensiTahunAjaranRoute,
  AkademikAbsensiPertemuanIndexRoute,
  AkademikJadwalPelajaranIndexRoute,
  AkademikAbsensiPertemuanDetailIdRoute,
  AkademikJadwalPelajaranKelasIdRoute,
])

/* prettier-ignore-end */
