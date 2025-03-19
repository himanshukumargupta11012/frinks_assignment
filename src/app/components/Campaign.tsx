export default function Campaign({ data, col_width }: { data: campaignData, col_width: string[] }) {
    return (
        <div>
            <div className="flex gap-8 m-2 text-[16px] text-[#4F4F4F] text-nowrap text-ellipsis text-center">
                <div className={`w-${col_width[0]} font-bold overflow-hidden text-ellipsis`}>{data.name}</div>
                <div className={`w-${col_width[1]} text-[#FF0000] font-bold text-base overflow-hidden text-ellipsis`} >{data.industry}</div>
                <div className={`w-${col_width[2]} overflow-hidden text-ellipsis`}>{data.type}</div>
                <div className={`w-${col_width[3]} overflow-hidden text-ellipsis`}>{data.geography}</div>
                <div className={`w-${col_width[4]} overflow-hidden text-ellipsis`}>{data.goal}</div>
                <div className={`w-${col_width[5]} text-[#0C8C09] bg-[#D7FFD0] rounded-sm text-[10px] flex items-center justify-center border-[#62C35F] border-1 p-1 font-medium`}>{data.status}</div>
                <div className={`w-${col_width[6]} overflow-hidden text-ellipsis`}>{data.budget}</div>
                <div className={`w-${col_width[7]} font-bold overflow-hidden text-ellipsis`}>{data.owner}</div>
                <div className={`w-${col_width[8]}`}>{data.createdAt.toLocaleDateString("en-GB")}</div>
            </div>
            <hr className="text-[#f0f0f0]"/>

        </div>
    )
}