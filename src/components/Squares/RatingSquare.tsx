import { motion } from "framer-motion"

interface RatingProps {
    info: string;
    user: string;
}

export function RatingSquare(props: RatingProps) {
    return (
        <div className="w-[328px] h-[214px] md:w-[611px] md:h-[223px] bg-prp-200 border-prp-300 border-[4px]">
            <div className="w-[286px] h-[158px] md:w-[534px] md:h-[145px] ml-[18px] md:ml-[34px] md:mt-[30px]">
                <motion.p
                    initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    className="text-[20px] md:text-[24px] text-[#BFBFBF] font-sora mt-[16px]">{props.info}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    className="text-[36px] text-white font-bold mt-[4px]" >{props.user}
                </motion.h1>
            </div>
        </div>
    )
}