interface RatingProps {
    info: string;
    user: string;
}

export function RatingSquare(props: RatingProps) {
    return (
        <div className="w-[328px] h-[214px] md:w-[611px] md:h-[223px] bg-prp-200 border-prp-300 border-[4px]">
            <div className="w-[286px] h-[158px] md:w-[505px] md:h-[145px] ml-[18px] md:ml-[34px] md:mt-[48px]">
                <p className="text-[20px] md:text-[24px] text-[#BFBFBF] font-sora mt-[16px]">{props.info}</p>
                <h1 className="text-[36px] text-white font-bold mt-[12px]" >{props.user}</h1>
            </div>
        </div>
    )
}