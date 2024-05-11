import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/keuangan/pengeluaran')({
  component: () => <div>Hello /keuangan/pengeluaran!</div>
})