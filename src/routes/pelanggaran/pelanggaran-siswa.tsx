import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pelanggaran/pelanggaran-siswa')({
  component: () => <div>Hello /pelanggaran/pelanggaran-siswa!</div>
})