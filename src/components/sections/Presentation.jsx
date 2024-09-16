import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import IconButton from "@mui/material/IconButton"

import portrait from "../../assets/portrait.png"
// import portraitContour from "../../assets/portraitContour.png"

export default function Presentation({ setLoading, setSnackbar, setSnackMessage }) {

  return (
    <div className="section accueil" onLoad={() => setLoading(true)}>
      <img
        src={portrait}
        className="portrait"
        alt="Portrait Marius Proton"
      />
      <div className="gridFiller" style={{ width: "700px", height: "100vh" }}></div>
      <div>
        <h1>Marius Proton</h1>
        <h2>Bienvenue sur mon portfolio ! 🌊</h2>
        <p>
          Hey ! Je m'appelle Marius, j'ai {new Date(Date.now() - new Date("November 11, 2001")).getFullYear() - 1970} ans et je suis développeur fullstack Javascript. <br />
          J'ai étudié au <a href="https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/but-bachelor-universitaire-de-technologie-CBB/but-metiers-du-multimedia-et-de-l-internet-KI4YX5MN.html" target="_blank" rel="noreferrer">DUT MMI Grenoble</a> et à l'école des <a href="https://www.gobelins.fr/" target="_blank" rel="noreferrer"> Gobelins</a>.<br />
          J'ai eu l'occasion de réaliser plein de projets que vous pourrez retrouver plus bas. <br />
          J'aime la rando, les jeux vidéos et le cinéma. <br />
          Pour plus de détails, voici <a href="https://mariusproton.fr/MariusProtonCv.pdf" target="_blank" rel="noreferrer">mon CV</a>.
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
