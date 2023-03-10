import { DiscordLogo, InstagramLogo, TwitchLogo, TwitterLogo } from 'phosphor-react';
import { IconContext } from 'phosphor-react';
import intact from '../../assets/intact.jpg'
import { motion } from "framer-motion"

interface SquareProps {
    title: string;
    subtitle: string;
    info: string;
}

export function CreatorSquare(props: SquareProps) {
    return (
        <div className="flex items-center justify-center w-[328px] h-[742px] md:w-[770px] md:h-[404px] lg:w-[1268px] lg:h-[504px] bg-prp-200 border-prp-300 border-4">
            <div
                className="md:flex lg:flex w-[285px] h-[686px] md:w-[700px] md:h-[350px] lg:w-[1168px] lg:h-[441px]">
                <motion.div
                    initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    className="w-[285px] h-[260px] md:w-[404px] md:h-[304px] lg:w-[404px] lg:h-[441px]">
                    <div className="mt-[36px] ml-[26px] w-[127px] h-[35px] bg-white absolute rounded-full flex items-center justify-center font-black ">CRIADOR</div>
                    <img src={intact} className="w-[280px] h-[260px] md:w-[404px] md:h-[350px] lg:w-[404px] lg:h-[441px] rounded-[5px]" />
                </motion.div>

                <div className="w-[276px] h-[383px] lg:mt-[30px] md:w-[553px] md:h-[394px] lg:w-[553px] lg:h-[364px] ml-[5px] md:ml-[48px] lg:ml-[48px]">
                    <motion.h1
                        initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                        className="text-gr-100 text-[48px] font-sora">{props.title}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                        className="text-white text-left text-[32px] lg:text-[40px] font-sora font-bold">{props.subtitle}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                        className="text-[#BFBFBF] text-left text-[20px] lg:text-[32px] mt-4 font-light lg:mt-[46px]">{props.info}
                    </motion.p>
                </div>

                <div className="flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
                        className="w-[240px] h-[40px] md:w-[40px] md:h-[340px] md:ml-[118px] flex md:grid items-center justify-center gap-[30px]">
                        <IconContext.Provider
                            value={{ color: '#A7FF98', size: 40 }}
                        >
                            <div className=""><TwitchLogo /></div>
                            <div className=""><TwitterLogo /></div>
                            <div className=""><InstagramLogo /></div>
                            <div className=""><DiscordLogo /></div>
                        </IconContext.Provider>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}