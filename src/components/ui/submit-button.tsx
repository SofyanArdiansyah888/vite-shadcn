'use client'


import {Button} from "@/components/ui/button";
import {ReloadIcon} from "@radix-ui/react-icons";
// import {useFormStatus} from 'react-dom'

export default function SubmitButton({loading}: { loading: boolean }) {
    return <Button variant={"primary"} disabled={loading} type={"submit"} size={"sm"} className={"w-full"}>
        {loading ? <div className={"flex gap-2 items-center"}><ReloadIcon className={"animate-spin"}/> Loading
        </div> : "Submit"}
    </Button>
}
