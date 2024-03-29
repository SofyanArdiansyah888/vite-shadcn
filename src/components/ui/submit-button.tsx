'use client'


import {Button} from "@/components/ui/button";
import {useFormStatus} from 'react-dom'

export default function SubmitButton({loading}:{loading:boolean}) {
    return <Button variant={"primary"} disabled={loading} type={"submit"} size={"sm"} className={"w-full"}>
        {loading ? "Loading..." : "Submit"}
    </Button>
}
