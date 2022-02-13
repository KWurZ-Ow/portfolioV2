import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"

import LPB from "../../assets/LPB.png"
import MMI from "../../assets/MMI.png"
import GOB from "../../assets/Gobelins.png"
import hibou from "../../assets/hibou.png"
import Ellistat from "../../assets/Ellistat.png"

import Separator from "../Separator"

const formations = [
  {
    id: 0,
    avatar: <Avatar alt="Logo LPB" src={LPB} />,
    primary: "Lycée Pierre Béghin - Moirans (2016-2019)",
    secondary: "Bac Scientifique (SVT) - Option Informatique",
  },
  {
    id: 1,
    avatar: <Avatar alt="Logo MMI" src={MMI} />,
    primary: "MMI - Grenoble (2019-2021)",
    secondary: "Metiers du Multimédia et de l'Internet - Option développement",
  },
  {
    id: 2,
    avatar: <Avatar alt="Logo Gobelins" src={GOB} />,
    primary: "Gobelins - Annecy (2021-2022)",
    secondary: "Bac +3 Bachelor Développeur web et applications",
  }
]

const experience = [
  {
    id: 0,
    avatar: <Avatar alt="Logo Abrakadabra" src={hibou} />,
    primary: "Abrakadabra - Voiron (2021)",
    secondary: "Stagiaire développeur PHP 8",
  },
  {
    id: 1,
    avatar: <Avatar alt="Logo Ellistat" src={Ellistat} />,
    primary: "Ellistat - Annecy (2021-2022)",
    secondary: "Alternant développeur JS Fullstack",
  }
]

export default function Experiences() {
  return (
    <div id="experiences" className="section experience">
      <Separator />
      <Container maxWidth="lg">
      <h1>Mes expériences 🧪</h1>
        <Grid container spacing={15}>
          <Grid item xs={12} lg={6}>
            <div className="listContainer">
              <h2>Formations</h2>
              <List>
                {formations.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemAvatar>{item.avatar}</ListItemAvatar>
                    <ListItemText
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="listContainer">
              <h2>Experience</h2>
              <List>
                {experience.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemAvatar>{item.avatar}</ListItemAvatar>
                    <ListItemText
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}