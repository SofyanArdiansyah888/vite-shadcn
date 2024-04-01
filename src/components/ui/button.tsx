import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
import {ArrowLeft, EyeIcon, FilterIcon, PencilIcon, PlusIcon, SaveIcon, TrashIcon} from "lucide-react";
import {useRouter} from "@tanstack/react-router";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";


const buttonVariants = cva(
    "inline-flex items-center justify-center font-light whitespace-nowrap rounded-md text-sm  ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300",
    {
        variants: {
            variant: {
                primary: "bg-primary hover:bg-primary/90 text-white",
                default: "bg-stone-900 text-stone-50 hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90",
                destructive:
                    "bg-red-500 text-stone-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-stone-50 dark:hover:bg-red-900/90",
                outline:
                    "border border-stone-200 bg-white hover:bg-stone-100 hover:text-stone-900 dark:border-stone-800 dark:bg-stone-950 dark:hover:bg-stone-800 dark:hover:text-stone-50",
                secondary:
                    "bg-stone-100 text-stone-900 hover:bg-stone-100/80 dark:bg-stone-800 dark:text-stone-50 dark:hover:bg-stone-800/80",
                ghost: "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800 dark:hover:text-stone-50",
                link: "text-stone-900 underline-offset-4 hover:underline dark:text-stone-50",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                xs: "h-8 rounded-md px-2",
                icon: "h-6 w-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, asChild = false, ...props}, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({variant, size, className}))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

interface IButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    icon?: React.ReactNode,
    tooltip?: string,
    variant?: "primary" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
    className?: string
}

function BackButton() {
    const router = useRouter()

    function handleClick() {
        router.history.back()
    }

    return <Button
        size={"xs"}
        variant={"outline"}
        className={"gap-1 text-xs"}
        onClick={handleClick}
    >
        <ArrowLeft className={"w-4 h-4"} strokeWidth={1}/>
        Kembali
    </Button>
}

function SaveButton({onClick}: IButtonProps) {
    return <Button type={"submit"} size={"xs"} variant={"primary"} className={`gap-1 text-xs`} onClick={onClick}>
        <SaveIcon className={"w-4 h-4"} strokeWidth={1}/>
        Simpan
    </Button>
}

function AddButton({onClick}: IButtonProps) {
    return <Button size={"xs"} variant={"primary"} className={"gap-1 text-xs"} onClick={onClick}>
        <PlusIcon className={"w-4 h-4"} strokeWidth={1}/>
        Tambah
    </Button>
}

function FilterButton({onClick}: IButtonProps) {
    return <Button
        size={"xs"}
        className={"flex gap-2 !bg-zinc-800 hover:!bg-zinc-500 border-0"}
        onClick={onClick}
    >
        <FilterIcon className={"w-4 h-4 mt-1"} strokeWidth={1}/>
        Filter
    </Button>
}

function ButtonIcon({onClick, icon, tooltip, variant,className}: IButtonProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant={variant} size="icon" onClick={onClick} className={className}>
                        {icon}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

function EditButtonIcon(props: IButtonProps) {
    return <ButtonIcon {...props}
                       icon={<PencilIcon className="h-4 w-4"/>}
                       tooltip={"Edit"}
                       variant={"primary"}
    />
}

function DetailButtonIcon(props: IButtonProps) {
    return <ButtonIcon {...props}
                       icon={<EyeIcon className="h-4 w-4"/>}
                       tooltip={"Detail"}
                       variant={"default"}
                       className={"bg-blue-800"}
    />
}

function DeleteButtonIcon(props: IButtonProps) {
    return <ButtonIcon {...props}
                       icon={<TrashIcon className="h-4 w-4"/>}
                       tooltip={"Hapus"}
                       variant={"destructive"}
    />
}

// eslint-disable-next-line react-refresh/only-export-components
export {
    Button,
    buttonVariants,
    BackButton,
    SaveButton,
    AddButton,
    FilterButton,
    ButtonIcon,
    EditButtonIcon,
    DeleteButtonIcon,
    DetailButtonIcon
}
