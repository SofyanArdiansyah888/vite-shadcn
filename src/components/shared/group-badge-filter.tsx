import {BadgeDeleteFilter, BadgeFilter} from "@/components/ui/custom-badge.tsx";
import {IFormSelectValue} from "@/components/shared/form/form-select.tsx";

interface IBadgeFilter {
    filterPayload: {
        [key: string]: Pick<IFormSelectValue, "value" | "label">
    },
    deleteFilterPayload: (name: string) => void,
    resetFilterPayload: () => void
}

export default function GroupBadgeFilter({
                                             filterPayload,
                                             resetFilterPayload,
                                             deleteFilterPayload
                                         }: IBadgeFilter) {
    return <div className={"overscroll-x-auto "}>
        <div className={"flex flex-row flex-wrap  gap-1 py-1  "}>
            {
                Object.entries(filterPayload).map((item, key) =>
                        item[1] && <BadgeFilter
                            key={key}
                            title={item[1]?.label}
                            onClick={() => deleteFilterPayload(item[0])}
                        />
                )
            }
            {
                Object.entries(filterPayload)
                    .filter(item => item[1] !== undefined)
                    .length > 0 &&
                <BadgeDeleteFilter onClick={resetFilterPayload}/>
            }
        </div>
    </div>
}
