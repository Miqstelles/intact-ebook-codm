import { IconProps } from 'phosphor-react/dist/lib';
import React from 'react';

type IconType = (props: IconProps) => JSX.Element

interface SquareProps {
    icon: IconType;
    title: string;
    info: string;
}

export function Square(props: SquareProps) {
    return (
        <div className="w-[328px] h-[260px] sm:w-[275px] sm:h-[260px] bg-prp-200 border-prp-300 border-4">
            <div className="m-[27px] mb-[25px]">{React.createElement(props.icon)}</div>

            <div className="w-[276px] h-[120px] sm:w-[165px] sm:h-[123px] ml-[30px]">
                <h1 className="text-white text-[20px] font-bold">{props.title}</h1>
                <p className="text-[#BFBFBF] text-left text-[15px] mt-4 font-light">{props.info}</p>
            </div>
        </div>
    )
}