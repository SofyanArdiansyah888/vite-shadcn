import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/siswa/$id')({
  component: () => <div>Hello /siswa/$id!</div>
})