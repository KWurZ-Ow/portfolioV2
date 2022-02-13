import { useState } from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import IconButton from "@mui/material/IconButton"

import portrait from "../../assets/portrait.png"
import portraitContour from "../../assets/portraitContour.png"

export default function Presentation({handleLoaded}) {
    const [contour, setContour] = useState(false)
    const [countContour, setCountContour] = useState(1)
  
    function handleSecretClick() {
      if (contour) {
        setContour(false)
        setCountContour(1)
      } else {
        setCountContour(countContour + 1)
        if (countContour === 5) {
          setContour(true)
        }
      }
    }
  return (
    <div className="section accueil" onLoad={() => handleLoaded()}>
      <img
        src={contour ? portraitContour : portrait}
        onClick={() => handleSecretClick()}
        className="portrait"
        alt="Portrait Marius Proton"
      />
      <div>
        <h1>Marius Proton</h1>
        <h2>Bienvenue sur mon portfolio !</h2>
        <p>
          Hey ! Je m'appelle Marius, j'ai{" "}
          {new Date(Date.now() - new Date("November 11, 2001")).getFullYear() -
            1970}{" "}
          ans et je suis développeur applications web en alternance. <br />
          J'étudie à l'école des{" "}
          <a href="https://www.gobelins.fr/" target="_blank" rel="noreferrer">
            Gobelins
          </a>{" "}
          où je suis le bachelor <i>"Développeur web et applications"</i>.{" "}
          <br /> Je travaille en alternance chez{" "}
          <a href="https://ellistat.com/" target="_blank" rel="noreferrer">
            Ellistat
          </a>{" "}
          en tant que développeur JavaScript fullstack
        </p>
        <span>
          <IconButton href="/#experiences">
            <KeyboardArrowDownIcon sx={{ fontSize: "6vmin" }} />
          </IconButton>
        </span>
      </div>
    </div>
  )
}
