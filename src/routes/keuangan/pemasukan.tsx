import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/keuangan/pemasukan')({
  component: () => <div>Hello /keuangan/pemasukan!</div>
})