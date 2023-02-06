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
        <div className="flex items-center justify-center w-[328px] h-[742px] sm:w-[1268px] sm:h-[504px] bg-prp-200 border-prp-300 border-4">
            <div className="sm:flex w-[285px] h-[686px] sm:w-[1168px] sm:h-[441px]">
                <div className="w-[285px] h-[260px] sm:w-[404px] sm:h-[441px]">
                    <div className="mt-[36px] ml-[26px] w-[127px] h-[35px] bg-white absolute rounded-full flex items-center justify-center font-black ">CRIADOR</div>
                    <img src={intact} className="w-[280px] h-[260px] sm:w-[404px] sm:h-[441px] rounded-[5px]" />
                </div>

                <div className="w-[276px] h-[383px] sm:w-[553px] sm:h-[364px] ml-[5px] sm:ml-[48px]">
                    <h1 className="text-gr-100 text-[48px] font-sora">{props.title}</h1>
                    <h2 className="text-white text-left text-[32px] sm:text-[40px] font-sora font-bold">{props.subtitle}</h2>
                    <p className="text-[#BFBFBF] text-left text-[20px] sm:text-[32px] mt-4 font-light sm:mt-[46px]">{props.info}</p>
                </div>

                <div className="flex items-center justify-center">
                    <div className="w-[240px] h-[40px] sm:w-[40px] sm:h-[430px] sm:ml-[118px] flex sm:grid items-center justify-center gap-[30px]">
                        <div className=""><TwitchLogo width={40} height={40} color={"#A7FF98"} /></div>
                        <div className=""><TwitterLogo width={40} height={40} color={"#A7FF98"} /></div>
                        <div className=""><InstagramLogo width={40} height={40} color={"#A7FF98"} /></div>
                        <div className=""><DiscordLogo width={40} height={40} color={"#A7FF98"} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}