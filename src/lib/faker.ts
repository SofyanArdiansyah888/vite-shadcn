import PsbEntity from "@/pages/psb/_data/psb.entity";
import { faker } from "@faker-js/faker";

function createRandomPsb() {
  return {
    nomor_pendaftaran: faker.string.nanoid(15),
    nama: faker.person.fullName(),
    jenis_kelamin: faker.helpers.arrayElement(["Laki-laki", "Perempuan"]),
    tinggi_badan: faker.number.int({ min: 140, max: 170 }),
    berat_badan: faker.number.int({ min: 45, max: 100 }),
    agama: faker.helpers.arrayElement([
      "Islam",
      "Kristen",
      "Katolik",
      "Hindu",
      "Buddha",
      "Konghucu",
    ]),
    tempat_lahir: faker.location.city(),
    tanggal_lahir: faker.date.birthdate().toLocaleDateString(),
    provinsi: faker.location.state(),
    kabupaten: faker.location.city(),
    kecamatan: faker.location.city(),
    desa: faker.location.city(),
    kode_pos: faker.location.zipCode(),
    rt_rw: faker.location.buildingNumber(),
    alamat: faker.location.street(),
    nomor_telepon: faker.phone.number(),
    asal_sekolah: faker.company.name(),
    hobi: faker.helpers.arrayElements(["membaca", "menari", "main game"]),
    prestasi: [faker.person.jobTitle()],
    riwayat_penyakit: [faker.person.bio()],
    akta_kelahiran: faker.image.urlPicsumPhotos(),
    kartu_keluarga: faker.image.urlPicsumPhotos(),
    created_at: faker.date.recent().toLocaleDateString(),
    updated_at: faker.date.past().toLocaleDateString(),
    id: faker.string.uuid(),
  };
}

export const usersPsb: Array<PsbEntity> = faker.helpers.multiple(
  createRandomPsb,
  { count: 10 }
);
