import "./socials.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default function Socials() {

  return (

    <div className="socials" id="socials">

      <div className="container">
        <h1>Let's connect on Socials!</h1>
        <br/>


          <div className="social-container">
            <a href="https://twitter.com/STONEd_NFT" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com/imashitedev" className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://instagram.com/stoned_nft" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
      </div>
      


    </div>
  )
}
