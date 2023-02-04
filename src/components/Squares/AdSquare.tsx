import { Check } from "phosphor-react";
import { Button, ButtonFooter } from "../Btns/Button";

export function AdSquare() {
    return (
        <div className="w-[328px] h-[758px] flex items-center justify-center bg-prp-200 border-prp-300 border-[4px]">
            <div className="w-[280px] h-[656px] text-center">
                <h1 className="text-[24px] text-white font-bold">Aprenda jogar <span className="text-gr-100">codm</span> de uma forma simples</h1>
                <p className="text-[#BFBFBF] text-[20px] mt-[74px]">de R$ <s>100,00</s> por apenas</p>
                <p className="text-white text-[60px] font-sora font-bold mb-[34px]">R$ 25,00</p>
                <ButtonFooter />
                <div className="h-[192px]" >
                    <p className="text-white text-[24px] font-bold mt-[34px]">Junte-se conosco  e garanta:</p>
                    <div className="w-[259px] h-[192px] space-y-[24px] mt-[31px]">
                        <div className="flex justify-center items-center mr-[100px]">
                            <Check width={33} height={30} color={"#A7FF98"} />
                            <p className="text-[#BFBFBF] text-[20px] ml-[30px]">Slides</p>
                        </div>
                        <div className="flex justify-center items-center mr-[20px]">
                            <Check width={33} height={30} color={"#A7FF98"} />
                            <p className="text-[#BFBFBF] text-[20px] ml-[30px]">Nosso discord</p>
                        </div>
                        <div className="flex justify-center items-center mr-[25px]">
                            <Check width={33} height={30} color={"#A7FF98"} />
                            <p className="text-[#BFBFBF] text-[20px] ml-[30px]">Questionarios</p>
                        </div>
                        <div className="flex justify-center items-center ml-[17px]">
                            <Check width={33} height={30} color={"#A7FF98"} />
                            <p className="text-[#BFBFBF] text-[20px] ml-[30px]">Materiais de apoio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}