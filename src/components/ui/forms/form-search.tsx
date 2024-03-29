'use client'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Input} from "@/components/ui/input";
import * as React from "react";
import {useDebouncedCallback} from 'use-debounce';
import {useEffect} from "react";

type FormSearchType = {
    placeholder?: string
}
export default function FormSearch({placeholder = 'Search...'}: FormSearchType) {
    const searchParams = useSearchParams()
    const {replace} = useRouter();
    const pathname = usePathname();

    const handleChange = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams)
        params.delete('search')
        params.delete('page')
        if(value) {
            params.set('search', value)
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return <Input
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value)}
        defaultValue={searchParams.get("search") ?? ""}
        className="h-8 w-[150px] lg:w-[250px]"
    />
}
