import { Check } from "phosphor-react";
import { Button, ButtonFooter } from "../Btns/Button";

export function AdSquare() {
    return (
        <div className="w-[328px] h-[758px] md:w-[800px] md:h-[543px] lg:w-[1268px] lg:h-[713px] flex items-center justify-center bg-prp-200 border-prp-300 border-[4px]">
            <div className="w-[280px] h-[656px] md:w-[700px] md:h-[448px] lg:w-[1140px] lg:h-[448px] text-center">
                <div className="md:flex md:space-x-[20px] lg:space-x-[180px]">
                    <div className="md:w-[344px] md:h-[448px] lg:w-[554px]">
                        <h1 className="text-[24px] md:text-[42px] lg:text-[40px] text-white font-bold">Aprenda jogar <span className="text-gr-100">codm</span> de uma forma simples</h1>
                        <p className="text-[#BFBFBF] text-[20px] md:text-[24px] lg:text-[32px] mt-[74px] md:mt-[20px]">de R$ <s>100,00</s> por apenas</p>
                        <p className="text-white text-[60px] md:text-[66px] lg:text-[96px] font-sora font-bold mb-[34px] md:mb-[28px]">R$ 25,00</p>
                        <ButtonFooter />
                    </div>
                    <div className="h-[192px]" >
                        <p className="text-white text-[24px] md:text-[40px] font-bold mt-[34px] md:mt-0">Junte-se conosco  e garanta:</p>
                        <div className="w-[259px] h-[192px] md:w-[375px] md:h-[261px] space-y-[24px] mt-[31px] md:mt-[60px]">
                            <div className="flex justify-center items-center mr-[100px] md:mr-[160px]">
                                <Check width={33} height={30} color={"#A7FF98"} />
                                <p className="text-[#BFBFBF] text-[20px] md:text-[32px] ml-[30px]">Slides</p>
                            </div>
                            <div className="flex justify-center items-center mr-[20px] md:mr-[35px]">
                                <Check width={33} height={30} color={"#A7FF98"} />
                                <p className="text-[#BFBFBF] text-[20px] md:text-[32px] ml-[30px]">Nosso discord</p>
                            </div>
                            <div className="flex justify-center items-center mr-[25px] md:mr-[45px]">
                                <Check width={33} height={30} color={"#A7FF98"} />
                                <p className="text-[#BFBFBF] text-[20px] md:text-[32px] ml-[30px]">Questionarios</p>
                            </div>
                            <div className="flex justify-center items-center ml-[17px] md:ml-[27px]">
                                <Check width={33} height={30} color={"#A7FF98"} />
                                <p className="text-[#BFBFBF] text-[20px] md:text-[32px] ml-[30px]">Materiais de apoio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}