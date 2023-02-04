import { Clock } from "phosphor-react"
import { Button, ButtonFooter, ButtonHeader } from "./components/Btns/Button"
import { CodmVideo } from "./components/CodmVideo"
import { AdSquare } from "./components/Squares/AdSquare"
import { CreatorSquare } from "./components/Squares/CreatorSquare"
import { RatingSquare } from "./components/Squares/RatingSquare"
import { Square } from "./components/Squares/Square"

function App() {
  return (
    <div className="bg-dark w-screen h-screen">
      <p className="w-full h-[60px] bg-gr-100 flex items-center justify-center text-[16px]">Aproveite os ultimos dias de promoção</p>
    </div>
  )
}

export default App
