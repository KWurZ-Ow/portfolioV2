import Separator from "../Separator"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Tooltip from "@mui/material/Tooltip"

import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiReact,
  SiNodedotjs,
  SiMeteor,
  SiPhp,
  SiMongodb,
  SiFirebase,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiFigma,
  SiAdobelightroom,
  SiAdobexd,
  SiExpress,
} from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { FaSass } from "react-icons/fa"

const frontend = [
  { tooltip: "HTML 5", icon: <SiHtml5 color="orange" /> },
  { tooltip: "CSS 3", icon: <SiCss3 color="dodgerblue" /> },
  { tooltip: "JavaScript", icon: <SiJavascript color="yellow" /> },
  { tooltip: "TypeScript", icon: <SiTypescript color="dodgerblue" /> },
  { tooltip: "Angular", icon: <SiAngular color="red" /> },
  { tooltip: "React", icon: <SiReact color="dodgerblue" /> },
  { tooltip: "Scss", icon: <FaSass color="#eb3372" /> },
]

const backend = [
  { tooltip: "Node JS", icon: <SiNodedotjs color="lime" /> },
  { tooltip: "Meteor JS", icon: <SiMeteor color="red" /> },
  { tooltip: "Mongo DB", icon: <SiMongodb color="green" /> },
  { tooltip: "Firebase", icon: <SiFirebase color="yellow" /> },
  { tooltip: "PHP", icon: <SiPhp color="dodgerblue" /> },
  { tooltip: "MySQL", icon: <GrMysql color="dodgerblue" /> },
  { tooltip: "Express", icon: <SiExpress color="fuchsia" /> },
]

const graphisme = [
  { tooltip: "Photoshop", icon: <SiAdobephotoshop color="dodgerblue" /> },
  { tooltip: "Illustrator", icon: <SiAdobeillustrator color="orange" /> },
  { tooltip: "Premiere Pro", icon: <SiAdobepremierepro color="purple" /> },
  { tooltip: "After Effects", icon: <SiAdobeaftereffects color="purple" /> },
  { tooltip: "Adobe XD", icon: <SiAdobexd color="fuchsia" /> },
  { tooltip: "Lightroom", icon: <SiAdobelightroom color="dodgerblue" /> },
  { tooltip: "Figma", icon: <SiFigma color="fuchsia" /> },
]

export default function Competences() {
  return (
    <div id="competences" className="section competences">
      <Separator fill="hsl(220, 13%, 28%)" />
      <Container maxWidth="lg">
        <h1>Mes compétences 🎓</h1>
        <Grid container spacing={15}>
          <Grid item xs={12} lg={4}>
            <div className="listContainer">
              <h2>Dev Frontend</h2>
              <div className="iconContainer">
                {frontend.map((item) => {
                  return (
                    <Tooltip title={item.tooltip} key={item.tooltip}>
                      <span>{item.icon}</span>
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="listContainer">
              <h2>Dev backend</h2>
              <div className="iconContainer">
                {backend.map((item) => {
                  return (
                    <Tooltip title={item.tooltip} key={item.tooltip}>
                      <span>{item.icon}</span>
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="listContainer">
              <h2>Graphisme et AV</h2>
              <div className="iconContainer">
                {graphisme.map((item) => {
                  return (
                    <Tooltip title={item.tooltip} key={item.tooltip}>
                      <span>{item.icon}</span>
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
