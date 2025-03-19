export default function InfoBox({data}: {data: any}) {
    return (
        <div className="flex border-[.75px] rounded-[4.75px] p-1 border-[#C4C4C4] gap-x-2 w-[220px]">
            <div className="rounded-full bg-[#F1F2F4] aspect-square p-1 flex justify-center items-center w-[40px]">
                {data.icon}
            </div>
            <div className="flex flex-col">
                <div className="text-lg">{data.count} {data.type}</div>
                <div className="text-[10.5px]">in the last 7 days</div>
            </div>
        </div>
    )
}