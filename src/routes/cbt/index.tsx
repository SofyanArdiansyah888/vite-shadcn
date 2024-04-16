import {createFileRoute} from '@tanstack/react-router'
import CbtPage from "@/pages/cbt/cbt-page.tsx";

export const Route = createFileRoute('/cbt/')({
    component: () => <CbtPage/>
})
