export default function SkeletonTable({repeat = 3}: { repeat: number }) {
    let items = []
    for (let i = 0; i < repeat; i++) {
        items.push(i)
    }
    return <section className={"space-y-6"}>
        {
            items.map((_, index) => <div key={index} role="status" className=" animate-pulse">
                <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <span className="sr-only">Loading...</span>
            </div>)
        }
    </section>
}
