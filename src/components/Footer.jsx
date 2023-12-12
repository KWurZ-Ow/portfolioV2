import Tooltip from "@mui/material/Tooltip"
import ButtonGroup from "@mui/material/ButtonGroup"
import IconButton from "@mui/material/IconButton"

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import YouTubeIcon from "@mui/icons-material/YouTube"
import logos from "../assets/logosFooter.png"

export default function Footer() {
  return (
    <footer>
      <ButtonGroup variant="text" aria-label="text button group">
        <Tooltip title="Mon Linkedin" placement="top">
          <IconButton
            href="https://www.linkedin.com/in/marius-proton-ab9081195/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Mon GitHub" placement="top">
          <IconButton href="https://github.com/KWurZ-Ow" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Ma chaine YouTube" placement="top">
          <IconButton
            href="https://www.youtube.com/channel/UCEwo1cI0yULCjMnU4P2xuEg"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      <p>© Copyright Marius Proton - {new Date().getFullYear()}</p>
      <img src={logos} alt="Logos Gobelins et KWurZ" />
    </footer>
  )
}