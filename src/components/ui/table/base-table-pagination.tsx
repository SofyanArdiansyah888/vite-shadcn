'use client'
import {ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon,} from "@radix-ui/react-icons"
import {Table} from "@tanstack/react-table"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {MetaType} from "@/lib/api";


interface IBaseTablePagination<TData> {
    table: Table<TData>,
    meta: MetaType,
}

export function BaseTablePagination<TData>({table, meta}: IBaseTablePagination<TData>) {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const handleLimitChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('limit', value)
        params.set('page', "1")
        table.setPageSize(Number(value))
        replace(`${pathname}?${params}`)
    }

    const handleFirstPageChange = () => {
        const params = new URLSearchParams(searchParams)
        params.set('page', "1")
        table.setPageIndex(0)
        replace(`${pathname}?${params}`)
    }

    const handlePrevPageChange = () => {
        const params = new URLSearchParams(searchParams)
        const currentPage = Number(meta.current_page)
        if (currentPage > 1) {
            params.set('page', (currentPage - 1).toString())
            replace(`${pathname}?${params}`)
            table.previousPage()
        }
    }

    const handleNextPageChange = () => {
        const params = new URLSearchParams(searchParams)
        const currentPage = Number(meta.current_page)
        const lastPage = Number(meta.last_page)
        if (currentPage < lastPage) {
            params.set('page', (currentPage + 1).toString())
            replace(`${pathname}?${params}`)
            table.nextPage()
        }
    }

    const handleLastPageChange = () => {
        const params = new URLSearchParams(searchParams)
        params.set('page', meta.last_page.toString())
        replace(`${pathname}?${params}`)
        table.setPageIndex(table.getPageCount() - 1)
    }
    return (
        <div className="flex items-center justify-between px-2">
            <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="flex items-center space-x-6 lg:space-x-8">
                {/*LIMIT*/}
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                        value={`${searchParams.get('limit') ? searchParams.get('limit') : table.getState().pagination.pageSize}`}
                        onValueChange={handleLimitChange}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={table.getState().pagination.pageSize}/>
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 30, 40, 50].map((limit) => (
                                <SelectItem key={limit} value={`${limit}`}>
                                    {limit}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Page {meta.current_page} of{" "}
                    {meta.last_page}
                </div>

                <div className="flex items-center space-x-2">
                    {/*GO TO FIRST PAGE*/}
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={handleFirstPageChange}
                        disabled={searchParams?.get('page') === "1" || !searchParams?.get('page')}
                    >
                        <span className="sr-only">Go to first page</span>
                        <DoubleArrowLeftIcon className="h-4 w-4"/>
                    </Button>

                    {/*PREVIOUS*/}
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={handlePrevPageChange}
                        disabled={searchParams?.get('page') === "1" || !searchParams?.get('page')}
                    >
                        <span className="sr-only">Go to previous page</span>
                        <ChevronLeftIcon className="h-4 w-4"/>
                    </Button>

                    {/*NEXT*/}
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={handleNextPageChange}
                        disabled={searchParams?.get('page') === meta?.last_page.toString()}
                    >
                        <span className="sr-only">Go to next page</span>
                        <ChevronRightIcon className="h-4 w-4"/>
                    </Button>

                    {/*LAST PAGE*/}
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={handleLastPageChange}
                        disabled={searchParams?.get('page') === meta?.last_page.toString()}
                    >
                        <span className="sr-only">Go to last page</span>
                        <DoubleArrowRightIcon className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
