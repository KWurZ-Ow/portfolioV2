import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import {
  CardActionArea,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material"

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
} from "react-icons/si"

import Separator from "../Separator"
import veltron from "../../assets/veltron.png"
import ghost from "../../assets/ghost.jpg"
import promesse from "../../assets/promesse.png"

const cards = [
  {
    image: veltron,
    alt: "Veltron Studios - Le cambriolage",
    tags: [
      { label: "Personnel", color: "info", outlined: false },
      { label: "Audiovisuel", color: "warning", outlined: true },
    ],
    softwares: [
      <SiAdobepremierepro color="purple" fontSize="24px" key="1" />,
      <SiAdobeaftereffects color="purple" fontSize="24px" key="2" />,
      <SiAdobephotoshop color="dodgerblue" fontSize="24px" key="3" />,
    ],
    title: "Court métrage",
    body: 'Un court métrage réalisé en indépendance sur ma chaine YouTube : Veltron Studios. "Le Cambriolage" est une improvisation totale tournée en un jour...',
  },
  {
    image: ghost,
    alt: "Affiche - Ghost Trap",
    tags: [
      { label: "Scolaire", color: "success", outlined: false },
      { label: "Graphisme", color: "secondary", outlined: true },
    ],
    softwares: [
      <SiAdobephotoshop color="dodgerblue" fontSize="24px" key="1" />,
      <SiAdobeillustrator color="orange" fontSize="24px" key="2" />,
    ],
    title: "Affiche • Ghost Trap",
    body: "Une affiche crée dans le cadre de mon DUT MMI. Présente le programme de recherche des rayons cosmiques du CNRS...",
  },
  {
    image: promesse,
    alt: "Affiche - La dernière promesse",
    tags: [
      { label: "Scolaire", color: "success", outlined: false },
      { label: "Graphisme", color: "secondary", outlined: true },
    ],
    softwares: [
      <SiAdobephotoshop color="dodgerblue" fontSize="24px" key="1" />,
    ],
    title: "Affiche • La dernière promesse",
    body: 'Une affiche crée dans le cadre de mon DUT MMI. Affiche d\'un film fictif : "La dernière promesse" laissant beaucoup de place à la créativité...',
  },
]

export default function Creations() {
  return (
    <div id="creations" className="section creations">
      <Separator />
      <Container maxWidth="lg">
        <h1>Mes créations ✨</h1>
        <div className="cardContainer">
          {cards.map((card) => {
            return (
              <Card key={card.title}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={350}
                    image={card.image}
                    alt={card.alt}
                  />
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ marginBottom: "10px" }}
                    >
                      {card.tags.map((tag) => {
                        return (
                          <Chip
                            size="small"
                            key={tag.label}
                            variant={tag.outlined ? "outlined" : "filled"}
                            icon={tag.icon}
                            label={tag.label}
                            color={tag.color}
                          />
                        )
                      })}
                      {card.softwares.map((soft) => {
                        return soft
                      })}
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
