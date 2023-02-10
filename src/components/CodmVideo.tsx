import { CaretLeft, CaretRight, Play } from 'phosphor-react'
import { useState, useEffect } from 'react'
import codm from '../assets/codm.jpg'
import { motion } from "framer-motion"


export function CodmVideo() {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth
        })
    }

    useEffect(() => {
        addEventListener('resize', setDimension);

        return (() => {
            removeEventListener('resize', setDimension);
        })
    })

    let iconSize = screenSize.dynamicWidth <= 762 ? 32 : 86

    return (
        <div
            className="w-[328px] h-[215px] md:w-[770px] lg:w-[870px] md:h-[546px]">
            <div className="flex items-center justify-center">
                <div className="absolute flex gap-[105px] md:gap-[210px]">
                    <CaretLeft size={iconSize} color="#fff" weight='thin' />
                    <Play weight='fill' size={iconSize} color="#fff" />
                    <CaretRight size={iconSize} color="#fff" weight='thin' />
                </div>
                <img src={codm} className="w-[328px] h-[215px] md:w-[800px] lg:w-[870px] md:h-[546px] rounded-[5px] border-prp-300 border-[4px]" />
            </div>
        </div>
    )
}