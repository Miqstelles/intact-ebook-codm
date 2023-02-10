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
    <div className="bg-dark w-full h-full">
      <div className="w-full h-[60px] bg-gr-100 flex items-center justify-center text-[16px]">Aproveite os ultimos dias de promoção</div>
      <div className="flex items-center justify-center mt-[28px]">
        <div>
          <Navbar
            items={["Inicio", "Quem sou", "Depoimentos", "Conteúdo"]}
          />

          <div className="flex items-center justify-center lg:hidden">
            <ButtonHeader />
          </div>

          <div className="lg:flex grid justify-center items-center md:mt-[126px]">
            <div className="w-[328px] h-[144px] md:w-[563px] md:h-[435px] lg:w-[663px] lg:h-[335px] mt-[40px] mb-[37px] space-y-[20px] ">
              <h1 className="text-white font-bold text-[20px] md:text-[48px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
              <h2 className="text-[#BFBFBF] font-bold text-[16px] md:text-[40px]">Lorem Ipsum is simply dummy text of the printing.</h2>
            </div>

            <AdSquareWt />
          </div>

          <div className="md:flex items-center justify-center space-y-[56px] md:space-x-[52px] sm:space-y-0 lg:space-x-[56px] lg:space-y-0 mt-[50px] md:mt-[212px]">
            <div className="lg:flex lg:space-x-[56px] md:space-y-[50px] space-y-[56px] lg:space-y-0">
              <Square
                title="Lorem Ipsum"
                info="Lorem Ipsum is simply dummy text of the printing. "
                icon={props => <Clock />}
              />

              <Square
                title="Lorem Ipsum "
                info="Lorem Ipsum is simply dummy text of the printing. "
                icon={props => <Lightning />}
              />
            </div>

            <div className="lg:flex lg:space-x-[56px] md:space-y-[50px] space-y-[56px] lg:space-y-0">
              <Square
                title="Lorem Ipsum "
                info="Lorem Ipsum is simply dummy text of the printing. "
                icon={props => <Sword />}
              />

              <Square
                title="Lorem Ipsum "
                info="Lorem Ipsum is simply dummy text of the printing. "
                icon={props => <CaretDoubleUp />}
              />
            </div>
          </div>

          <div className="mt-[50px] md:mt-[96px] md:flex items-center justify-center">
            <CreatorSquare
              title="Intact"
              subtitle="Lorem ipsum"
              info="Lorem Ipsum is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry. "
            />
          </div>


          <div className="md:flex items-center justify-center mt-[50px] md:mt-[158px]">
            <div className="md:flex">
              <div className="space-y-[48px]">
                <p className="text-white text-[24px] font-sora font-bold">O que você ira <span className="text-[#A4FC96]">aprender</span></p>

                <CodmVideo />
              </div>

              <div className="hidden lg:grid space-y-[26px] mt-[84px] lg:ml-[120px]">
                <Square
                  title="Lorem Ipsum"
                  info="Lorem Ipsum is simply dummy text of the printing. "
                  icon={props => <CaretDoubleUp />}
                />

                <Square
                  title="Lorem Ipsum"
                  info="Lorem Ipsum is simply dummy text of the printing. "
                  icon={props => <CaretDoubleUp />}
                />
              </div>
            </div>
          </div>

          <div className="mt-[50px] mb-[50px] md:mt-[158px] space-y-[34px] md:flex items-center justify-center">
            <div>
              <div className="space-y-[26px]">
                <p className="text-white text-[24px] md:text-[48px] md:mb-[48px] font-sora font-bold">Depoimento dos usuarios</p>
                <div className="lg:hidden">
                  <RatingSquare
                    info="“Estava meio perdido mas depois desse ebook sinto que posso me classificar  para um mundial.”"
                    user="Dermec"
                  />
                </div>
              </div>
              <div className="hidden lg:grid space-y-[48px]">
                <div className="flex space-x-[46px]">
                  <RatingSquare
                    info="“Estava meio perdido mas depois desse ebook sinto que posso me classificar  para um mundial.”"
                    user="Dermec"
                  />

                  <RatingSquare
                    info="“Estava meio perdido mas depois desse ebook sinto que posso me classificar  para um mundial.”"
                    user="Dermec"
                  />
                </div>

                <div className="flex space-x-[46px]">
                  <RatingSquare
                    info="“Estava meio perdido mas depois desse ebook sinto que posso me classificar  para um mundial.”"
                    user="Dermec"
                  />

                  <RatingSquare
                    info="“Estava meio perdido mas depois desse ebook sinto que posso me classificar  para um mundial.”"
                    user="Dermec"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pt-[46px] space-y-[18px] lg:hidden ">
                <p className="text-white text-[24px] text-center font-sora font-bold">Ver mais</p>
                <CaretCircleDoubleDown color="#fff" size={80} weight="thin" />
              </div>
            </div>
          </div>

          <div className="md:flex items-center justify-center md:mt-[102px]">
            <AdSquare />
          </div>
        </div>
      </div>
      <div className="w-full h-[50px] bg-black"></div>
    </div>
  )
}

export default App
