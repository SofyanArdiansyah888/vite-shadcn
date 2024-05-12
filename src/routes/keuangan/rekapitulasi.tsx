import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/keuangan/rekapitulasi')({
  component: () => <div>Hello /keuangan/rekapitulasi!</div>
})