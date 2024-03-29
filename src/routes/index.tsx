import {createFileRoute} from '@tanstack/react-router'
import HomePage from "@/pages/dashboard/home.tsx";

export const Route =
    createFileRoute('/')({
    component: HomePage
})
