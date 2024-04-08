import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pelanggaran/poin-pelanggaran')({
  component: () => <div>Hello /pelanggaran/poin-pelanggaran!</div>
})