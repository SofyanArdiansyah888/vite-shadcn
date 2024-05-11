import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/keuangan/pembayaran')({
  component: () => <div>Hello /keuangan/pembayaran!</div>
})