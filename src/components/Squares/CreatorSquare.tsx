import { DiscordLogo, InstagramLogo, TwitchLogo, TwitterLogo } from 'phosphor-react';
import { IconProps } from 'phosphor-react/dist/lib';
import intact from '../../assets/intact.jpg'
import React from 'react';

interface SquareProps {
    title: string;
    subtitle: string;
    info: string;
}

export function CreatorSquare(props: SquareProps) {
    return (
        <div className="w-[328px] h-[805px] bg-prp-200 border-prp-300 border-4">
            <div className="grid items-center justify-center mt-[28px] mb-[56px]">
                <div className="ml-[46px] mb-[149px] w-[127px] h-[35px] bg-white absolute rounded-full flex items-center justify-center font-black ">CRIADOR</div>
                <img src={intact} className="w-[280px] h-[260px] rounded-[5px]" />
            </div>

            <div className="w-[276px] h-[383px] ml-[30px]">
                <h1 className="text-gr-100 text-[48px] font-sora">{props.title}</h1>
                <h2 className="text-white text-left text-[32px] mt-4 font-sora font-bold">{props.subtitle}</h2>
                <p className="text-[#BFBFBF] text-left text-[20px] mt-4 font-light">{props.info}</p>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-[240px] h-[40px] flex items-center justify-center gap-[30px]">
                    <div className=""><TwitchLogo width={40} height={40} color={"#A7FF98"} /></div>
                    <div className=""><TwitterLogo width={40} height={40} color={"#A7FF98"} /></div>
                    <div className=""><InstagramLogo width={40} height={40} color={"#A7FF98"} /></div>
                    <div className=""><DiscordLogo width={40} height={40} color={"#A7FF98"} /></div>
                </div>
            </div>
        </div>
    )
}