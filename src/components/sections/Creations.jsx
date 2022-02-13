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
  SiAngular,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiFirebase,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiExpress,
  SiMysql,
  SiMeteor,
} from "react-icons/si"

import Separator from "../Separator"
import veltron from "../../assets/veltron.png"
import ghost from "../../assets/ghost.jpg"
import promesse from "../../assets/promesse.png"
import genji from "../../assets/genji.png"
import simba from "../../assets/simba.png"
import protoss from "../../assets/protoss.jpg"
import starwars from "../../assets/starwars.png"
import pneu from "../../assets/pneu.gif"
import animation from "../../assets/animation.gif"
import breakingbad from "../../assets/breakingbad.png"
import power from "../../assets/power.png"
import goblinstagram from "../../assets/goblinstagram.png"
import dataviz from "../../assets/dataviz.png"
import api from "../../assets/api.png"
import abrakadabra from "../../assets/abrakadabra.png"
import todo from "../../assets/todo.png"
import portfolio from "../../assets/portfolio.png"

const cards = [
  {
    image: veltron,
    alt: "Veltron Studios - Le cambriolage",
    tags: [
      { label: "Audiovisuel", color: "warning", outlined: false },
      { label: "Personnel", color: "info", outlined: true },
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
      { label: "Graphisme", color: "secondary", outlined: false },
      { label: "Scolaire", color: "success", outlined: true },
    ],
    softwares: [
      <SiAdobephotoshop color="dodgerblue" fontSize="24px" key="1" />,
      <SiAdobeillustrator color="orange" fontSize="24px" key="2" />,
    ],
    title: "Affiche • Ghost Trap",
    body: "Une affiche créée dans le cadre de mon DUT MMI. Présente le programme de recherche des rayons cosmiques du CNRS...",
  },
  {
    image: promesse,
    alt: "Affiche - La dernière promesse",
    tags: [
      { label: "Graphisme", color: "secondary", outlined: false },
      { label: "Scolaire", color: "success", outlined: true },
    ],
    softwares: [
      <SiAdobephotoshop color="dodgerblue" fontSize="24px" key="1" />,
    ],
    title: "Affiche • La dernière promesse",
    body: `Une affiche créée dans le cadre de mon DUT MMI. Affiche d'un film fictif : "La dernière promesse" laissant beaucoup de place à la créativité...`,
  },
  {
    image: genji,
    alt: "Illustration - Genji",
    tags: [
      { label: "Graphisme", color: "secondary", outlined: false },
      { label: "Scolaire", color: "success", outlined: true },
    ],
    softwares: [<SiAdobeillustrator color="orange" fontSize="24px" key="1" />],
    title: "Illustration • Genji",
    body: "Une infographie créée dans le cadre de mon DUT MMI. Représente un personnage du jeu de Blizzard Overwatch. Rendu vectoriel avec illustrator...",
  },
  {
    image: simba,
    alt: "Motion design - The Lion King",
    tags: [
      { label: "Audiovisuel", color: "warning", outlined: false },
      { label: "Scolaire", color: "success", outlined: true },
    ],
    softwares: [
      <SiAdobeaftereffects color="purple" fontSize="24px" key="1" />,
      <SiAdobeillustrator color="orange" fontSize="24px" key="2" />,
    ],
    title: "Motion design • The Lion King",
    body: `Un motion design créé dans le cadre de mon DUT MMI. Clip paroles de la chanson "I just can't wait to be king" du film "Le Roi Lion"...`,
  },
  {
    image: protoss,
    alt: "Dessin - Starcraft",
    tags: [
      { label: "Graphisme", color: "secondary", outlined: false },
      { label: "Personnel", color: "info", outlined: true },
    ],
    softwares: [],
    title: "Dessin • Starcraft II",
    body: `Dessin réalisé avec des crayons aquarellables représentant le logo de la faction des Protoss dans le jeu de Blizzard Starcraft II...`,
  },
  {
    image: starwars,
    alt: "Court Métrage - Star Wars",
    tags: [
      { label: "Audiovisuel", color: "warning", outlined: false },
      { label: "Personnel", color: "info", outlined: true },
    ],
    softwares: [
      <SiAdobeaftereffects color="purple" fontSize="24px" key="1" />,
      <SiAdobepremierepro color="purple" fontSize="24px" key="2" />,
      <SiAdobephotoshop color="dodgerblue" fontSize="24px" key="3" />,
    ],
    title: "Court Métrage • Star Wars",
    body: `Court métrage réalisé en indépendance avec des camarades du DUT MMI libremant inspiré de l'univers de Star Wars. Énorme post-production...`,
  },
  {
    image: pneu,
    alt: "Animation pneu",
    tags: [
      { label: "Audiovisuel", color: "warning", outlined: false },
      { label: "Personnel", color: "info", outlined: true },
    ],
    softwares: [
      <SiAdobeaftereffects color="purple" fontSize="24px" key="1" />,
      <SiAdobephotoshop color="dodgerblue" fontSize="24px" key="2" />,
    ],
    title: "Animation pneu",
    body: `Animation réalisée bénévolement pour servier de transition de scène OBS pour le streameuse Clara Doxal sur le thème de la communauté : les pneux...`,
  },
  {
    image: animation,
    alt: "Animation test",
    tags: [
      { label: "Audiovisuel", color: "warning", outlined: false },
      { label: "Personnel", color: "info", outlined: true },
    ],
    softwares: [
      <SiAdobephotoshop color="dodgerblue" fontSize="24px" key="1" />,
    ],
    title: "Animation de test",
    body: `Une animation pour tester la technique d'animation "frame par frame" librement inspirée d'un tutoriel. Et, NON ! Ce n'est pas un poisson...`,
  },
  {
    image: breakingbad,
    alt: "Angular - Breaking Bad",
    tags: [
      { label: "Développement", color: "error", outlined: false },
      { label: "Scolaire", color: "success", outlined: true },
    ],
    softwares: [
      <SiAngular color="red" fontSize="24px" key="1" />,
      <SiTypescript color="dodgerblue" fontSize="24px" key="2" />,
    ],
    title: "Angular • Breaking Bad",
    body: `Site utilisant l'API de la série Breaking Bad. Projet réalisé au cours de mon DUT MMI lors du cours d'introduction au framework Angular...`,
  },
  {
    image: power,
    alt: "Angular - Power",
    tags: [
      { label: "Développement", color: "error", outlined: false },
      { label: "Personnel", color: "info", outlined: true },
    ],
    softwares: [
      <SiAngular color="red" fontSize="24px" key="1" />,
      <SiTypescript color="dodgerblue" fontSize="24px" key="2" />,
      <SiFirebase color="yellow" fontSize="24px" key="3" />,
    ],
    title: "Angular • Power",
    body: `Application Angular utilisant la Realtime Database de Firebase. Reproduit un vieux jeu de plateau. Se joue avec plusieurs smartphones et un PC...`,
  },
  {
    image: goblinstagram,
    alt: "Angular - Goblinstagram",
    tags: [
      { label: "Développement", color: "error", outlined: false },
      { label: "Scolaire", color: "success", outlined: true },
    ],
    softwares: [
      <SiAngular color="red" fontSize="24px" key="1" />,
      <SiTypescript color="dodgerblue" fontSize="24px" key="2" />,
    ],
    title: "Angular • Goblinstagram",
    body: `Application Angular utilisant l'API faker. Projet final d'évaluation de module Angular de mon Bachelor Gobelins...`,
  },
  {
    image: dataviz,
    alt: "React - Dataviz",
    tags: [
      { label: "Développement", color: "error", outlined: false },
      { label: "Scolaire", color: "success", outlined: true },
    ],
    softwares: [
      <SiReact color="dodgerblue" fontSize="24px" key="1" />,
      <SiJavascript color="yellow" fontSize="24px" key="2" />,
    ],
    title: "React • Dataviz",
    body: `Application React réalisée dans le cadre du module Dataviz (Data-Visualization) du mon Bachelor Gobelins. Utilise le plugin MapBox...`,
  },
  {
    image: api,
    alt: "Node JS - API Films",
    tags: [
      { label: "Développement", color: "error", outlined: false },
      { label: "Scolaire", color: "success", outlined: true },
    ],
    softwares: [
      <SiJavascript color="yellow" fontSize="24px" key="1" />,
      <SiNodedotjs color="lime" fontSize="24px" key="2" />,
      <SiExpress color="fuchsia" fontSize="24px" key="3" />,
      <SiFirebase color="yellow" fontSize="24px" key="4" />,
    ],
    title: "Node JS • API Films",
    body: `API utilisant Express et et Firebase. Réalisée dans le cadre de mon Bachelor Gobelins, elle permet de récupérer une BDD de films...`,
  },
  {
    image: abrakadabra,
    alt: "PHP - Abrakadabra",
    tags: [
      { label: "Développement", color: "error", outlined: false },
      { label: "Professionnel", color: "warning", outlined: true },
    ],
    softwares: [
      <SiPhp color="dodgerblue" fontSize="24px" key="1" />,
      <SiMysql color="dodgerblue" fontSize="24px" key="2" />,
    ],
    title: "PHP • Abrakadabra",
    body: `Rénovation du site de la librairie Abrakadabra de PHP 5.3 à PHP 8.0. Rénovation et améliorations réalisées lors de mon stage de fi d'année...`,
  },
  {
    image: todo,
    alt: "ToDo Lists",
    tags: [
      { label: "Développement", color: "error", outlined: false },
      { label: "Professionnel", color: "warning", outlined: true },
    ],
    softwares: [
      <SiJavascript color="yellow" fontSize="24px" key="1" />,
      <SiAngular color="red" fontSize="24px" key="2" />,
      <SiReact color="dodgerblue" fontSize="24px" key="3" />,
      <SiMeteor color="red" fontSize="24px" key="4" />,
    ],
    title: "ToDo Lists",
    body: `3 ToDo Lists réalisée pour démontrer mes compétences à mon entreprise actuelle : Ellistat. Une en Angular, une en react et une avec Meteor...`,
  },
  {
    image: portfolio,
    alt: "Portfolio",
    tags: [
      { label: "Développement", color: "error", outlined: false },
      { label: "Personnel", color: "info", outlined: true },
    ],
    softwares: [
      <SiJavascript color="yellow" fontSize="24px" key="1" />,
      <SiReact color="dodgerblue" fontSize="24px" key="2" />,
      <SiFirebase color="yellow" fontSize="24px" key="3" />,
    ],
    title: "Portfolio",
    body: `Le site sur lequel vous vous trouvez actuellement. Réalisé pour me servir de CV, il utilise React, l'hebergement Firebase et bientôt sa BDD...`,
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
