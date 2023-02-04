interface RatingProps {
    info: string;
    user: string;
}

export function RatingSquare(props: RatingProps) {
    return (
        <div className="w-[328px] h-[214px] bg-prp-200 border-prp-300 border-[4px]">
            <div className="w-[286px] h-[158px] ml-[18px]">
                <p className="text-[20px] text-[#BFBFBF] font-sora mt-[16px]">{props.info}</p>
                <h1 className="text-[36px] text-white font-bold mt-[12px]" >{props.user}</h1>
            </div>
        </div>
    )
}