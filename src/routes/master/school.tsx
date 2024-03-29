import {createFileRoute} from '@tanstack/react-router'

export const Route =
    createFileRoute('/master/school')({
        component: () => <div>Hello /master/school!</div>
    })
