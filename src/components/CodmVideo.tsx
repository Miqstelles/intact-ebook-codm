import { CaretLeft, CaretRight, Play } from 'phosphor-react'
import codm from '../assets/codm.jpg'

export function CodmVideo() {
    return (
        <div className="w-[328px] h-[215px]">
            <div className="flex items-center justify-center">
                <div className="mt-[28px] mb-[56px]">
                    <div className="absolute ml-[14px]"><CaretLeft size="32px" color="#fff" /></div>
                    <div className="absolute ml-[160px]"><Play weight='fill' size="32px" color="#fff" /></div>
                    <div className="absolute ml-[280px]"><CaretRight size="32px" color="#fff" /></div>
                </div>
                <img src={codm} className="w-[328px] h-[215px] rounded-[5px] border-prp-300 border-[4px]" />
            </div>
        </div>
    )
}