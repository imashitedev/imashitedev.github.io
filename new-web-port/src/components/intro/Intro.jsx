import "./intro.scss"
import { useTypeWriter } from "@vegadev/react-type-writer";


export default function Intro() {

  const customDelayExample = useTypeWriter({
    text: [
      "Developer",
      "Designer",
      "Top Signal",
      "Shitposter",
      "Content Creator"
    ],
    infiniteLoop: true,
    blinker: "|",
    delay: 1000,
    blinkerDelay: 100
  });
  

  return (
    <div className="intro" id="intro">
        <div className="left">
        <div className="imgContainer">

            <img src="assets/stoned1.png" alt=""/>

        </div>
          
          </div>

        <div className="right">
          
          <div className="wrapper">
            <h2>Hello, I'm</h2>
            <h1>STONEd_NFT</h1>
            <h3>Freelance <span className="text">{customDelayExample}</span>
            </h3>
          </div>

          <a href="#portfolio">
            <img src="assets/down.png" alt=""/>
          </a>
        </div>

    </div>
  )
}
