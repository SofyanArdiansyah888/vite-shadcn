import {createFileRoute} from '@tanstack/react-router'
import AkademikPage from "@/pages/akademik/akademik-page.tsx";

export const Route = createFileRoute('/akademik/')({
    component: () => <AkademikPage/>
})
