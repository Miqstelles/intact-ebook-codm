import { Clock, Lightning, Sword, CaretDoubleUp, CaretCircleDoubleDown } from "phosphor-react"
import { ButtonHeader } from "./components/Btns/Button"
import { CodmVideo } from "./components/CodmVideo"
import { Navbar } from "./components/Navbar"
import { AdSquare } from "./components/Squares/AdSquare"
import { AdSquareWt } from "./components/Squares/AdSquareWt"
import { CreatorSquare } from "./components/Squares/CreatorSquare"
import { RatingSquare } from "./components/Squares/RatingSquare"
import { Square } from "./components/Squares/Square"

function App() {
  return (
    <div className="bg-dark w-full h-[4630px]">
      <div className="w-full h-[60px] bg-gr-100 flex items-center justify-center text-[16px]">Aproveite os ultimos dias de promoção</div>
      <div className="flex items-center justify-center mt-[38px] lg:mt-[88px]">
        <div>
          <Navbar
            items={["Inicio", "Quem sou", "Depoimentos", "Conteúdo"]}
          />

          <ButtonHeader />

          <div className="w-[328px] h-[144px] mt-[40px] mb-[37px] space-y-[20px] ">
            <h1 className="text-white font-bold text-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <h2 className="text-[#BFBFBF] font-bold text-[16px]">Lorem Ipsum is simply dummy text of the printing.</h2>
          </div>

          <AdSquareWt />

          <div className="space-y-[56px] mt-[50px]">
            <Square
              title="Lorem Ipsum "
              info="Lorem Ipsum is simply dummy 
            text of the printing. Lorem Ipsum is simply dummy text of the printing."
              icon={props => <Clock />}
            />
            <Square
              title="Lorem Ipsum "
              info="Lorem Ipsum is simply dummy 
            text of the printing. Lorem Ipsum is simply dummy text of the printing."
              icon={props => <Lightning />}
            />
            <Square
              title="Lorem Ipsum "
              info="Lorem Ipsum is simply dummy 
            text of the printing. Lorem Ipsum is simply dummy text of the printing."
              icon={props => <Sword />}
            />
            <Square
              title="Lorem Ipsum "
              info="Lorem Ipsum is simply dummy 
            text of the printing. Lorem Ipsum is simply dummy text of the printing."
              icon={props => <CaretDoubleUp />}
            />
          </div>

          <div className="mt-[50px]">
            <CreatorSquare
              title="Intact"
              subtitle="Lorem ipsum"
              info="Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry. "
            />
          </div>

          <div className="mt-[50px] space-y-[26px]">
            <p className="text-white text-[24px] font-sora font-bold">O que você ira <span className="text-[#A4FC96]">aprender</span></p>
            <CodmVideo />
          </div>

          <div className="mt-[50px] mb-[50px] space-y-[34px]">
            <p className="text-white text-[24px] font-sora font-bold">Depoimento dos usuarios</p>
            <RatingSquare
              info="“Estava meio perdido mas depois desse ebook sinto que posso me classificar  para um mundial.”"
              user="Dermec"
            />

            <div className="flex flex-col items-center justify-center pt-[46px] space-y-[18px]">
              <p className="text-white text-[24px] text-center font-sora font-bold">Ver mais</p>

              <CaretCircleDoubleDown color="#fff" size={80} weight="thin" />
            </div>
          </div>

          <AdSquare />
        </div>
      </div>
    </div>
  )
}

export default App
