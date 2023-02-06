import { Button } from "../Btns/Button";

export function AdSquareWt() {
    return (
        <div className="w-[328px] h-[367px] sm:w-[595px] sm:h-[532px] bg-white rounded-[5px] flex items-center justify-center">
            <div className="w-[299px] h-[330px] sm:w-[534px] sm:h-[460px]">
                <div className="w-[296px] h-[48px] sm:w-[490px] sm:h-[52px] flex items-center justify-between">
                    <div className="w-[136px] h-[46px] sm:w-[191px] sm:h-[52px] bg-black rounded-[5px] flex justify-center items-center">
                        <p className="text-white text-[14px] sm:text-[20px] font-bold">75% OFF</p>
                    </div>

                    <div className=""><p className="text-[14px] sm:text-[20px]">Por tempo limitado</p></div>
                </div>
                <div className="sm:flex items-center justify-center">
                    <div className="w-[299px] h-[121px] sm:w-[448px] sm:h-[164px] text-center mt-[22px] mb-[48px] sm:mb-[60px] sm:mt-[50px]">
                        <p className="text-[32px] sm:text-[40px] font-sora font-bold">de R$ <s>100,00</s> por</p>
                        <p className="text-[64px] sm:text-[96px] font-sora font-bold">R$ 25,00</p>
                    </div>
                </div>
                <Button />
                <p className="text-[13px] sm:text-[20px] text-center font-sora mt-[16px] sm:mt-[26px]">Cartão de crédito, Boleto à vista, paypal e pix</p>
            </div>
        </div>
    )
}