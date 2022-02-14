import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import {
  CardActionArea,
  CardMedia,
  Chip,
  Container,
  Drawer,
  Modal,
  Stack,
  Typography,
  Button,
  Tooltip,
} from "@mui/material"
import { useState } from "react"
import { Box } from "@mui/system"

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
  SiGithub,
} from "react-icons/si"
import { MdOutlineOpenInNew } from "react-icons/md"

import Separator from "../Separator"
import veltron from "../../assets/veltron.png"
import ghost from "../../assets/ghost.jpg"
import bigGhost from "../../assets/bigGhost.jpg"
import promesse from "../../assets/promesse.png"
import bigPromesse from "../../assets/bigPromesse.png"
import genji from "../../assets/genji.png"
import bigGenji from "../../assets/bigGenji.png"
import simba from "../../assets/simba.png"
import protoss from "../../assets/protoss.jpg"
import bigProtoss from "../../assets/bigProtoss.jpg"
import starwars from "../../assets/starwars.png"
import pneu from "../../assets/pneu.gif"
import animation from "../../assets/animation.gif"
import breakingbad from "../../assets/breakingbad.png"
import power from "../../assets/power.png"
import goblinstagram from "../../assets/goblinstagram.png"
import dataviz from "../../assets/dataviz.png"
import api from "../../assets/api.png"
import drawerApi from "../../assets/drawerApi.png"
import abrakadabra from "../../assets/abrakadabra.png"
import drawerAbrakadabra from "../../assets/drawerAbrakadabra.png"
import todo from "../../assets/todo.png"
import drawerTodo from "../../assets/drawerTodo.png"
import portfolio from "../../assets/portfolio.png"

export default function Creations() {
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
      video: "https://www.youtube.com/embed/bCGnEjFDVQ0",
    },
    {
      image: ghost,
      bigImage: bigGhost,
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
      bigImage: bigPromesse,
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
      bigImage: bigGenji,
      alt: "Illustration - Genji",
      tags: [
        { label: "Graphisme", color: "secondary", outlined: false },
        { label: "Scolaire", color: "success", outlined: true },
      ],
      softwares: [
        <SiAdobeillustrator color="orange" fontSize="24px" key="1" />,
      ],
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
      video: "https://www.youtube.com/embed/kUJ0sWicl2g",
    },
    {
      image: protoss,
      bigImage: bigProtoss,
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
      video: "https://www.youtube.com/embed/Zau203lKb34?start=292",
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
      drawerImage: drawerApi,
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
      drawerImage: drawerAbrakadabra,
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
      links: [
        {
          url: "",
          text: "Code source",
          Tooltip: "Code source confidentiel",
          icon: <SiGithub />,
          color: "error",
          disabled: true,
        },
        {
          url: "https://abrakadabra.eu",
          text: "Site web",
          Tooltip: "",
          icon: <MdOutlineOpenInNew />,
          color: "info",
        },
      ],
    },
    {
      image: todo,
      drawerImage: drawerTodo,
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
      links: [
        {
          url: "https://github.com/KWurZ-Ow/to-do",
          text: "Code source Todo Angular",
          Tooltip: "",
          icon: <SiGithub />,
          color: "warning",
        },
        {
          url: "https://kwurz-ow.github.io/to-do/",
          text: "Page de l'app",
          Tooltip: "",
          icon: <MdOutlineOpenInNew />,
          color: "info",
        },
        {
          url: "https://github.com/KWurZ-Ow/to-do-react-files/tree/master/src",
          text: "Code source Todo React",
          Tooltip: "",
          icon: <SiGithub />,
          color: "warning",
        },
      ],
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
      links: [
        {
          url: "https://github.com/KWurZ-Ow/portfolioV2",
          text: "Code source",
          Tooltip: "",
          icon: <SiGithub />,
          color: "warning",
        },
      ],
    },
  ]

  //drawer
  const [drawer, setDrawer] = useState(false)
  const [creationToDisplay, setCreationToDisplay] = useState("")
  const [modaleImage, setModaleImage] = useState(false)
  const [modaleImageContent, setModaleImageContent] = useState(null)
  const [modaleAlt, setModaleAlt] = useState(null)

  const toggleDrawer = (id) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setDrawer(!drawer)
    setCreationToDisplay(id)
  }

  const drawerData = (cards, creationToDisplay) => {
    let data = cards.find((item) => item.title == creationToDisplay)

    function handleModale(data) {
      if (!data.bigImage) {
        return
      } else {
        setModaleImageContent(data.bigImage)
        setModaleAlt(data.alt)
        setModaleImage(true)
      }
    }
    return (
      <Box
        sx={{ width: 800 }}
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <Container>
          {!data && <p>Error 404</p>}
          {data && (
            <>
              <h1>{creationToDisplay}</h1>
              <Stack direction="row" spacing={1} sx={{ marginBottom: "10px" }}>
                {data.tags.map((tag) => {
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
                {data.softwares.map((soft) => {
                  return soft
                })}
              </Stack>
              {data.video && (
                <iframe
                  width="750"
                  height="422"
                  src={data.video}
                  title={data.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {!data.video && (
                <div className="imageContainer">
                  {data.drawerImage && (
                    <img
                      src={data.drawerImage}
                      alt={data.alt}
                      style={data.bigImage && { cursor: "zoom-in" }}
                      onClick={() => handleModale(data)}
                    />
                  )}
                  {!data.drawerImage && (
                    <img
                      src={data.image}
                      alt={data.alt}
                      style={data.bigImage && { cursor: "zoom-in" }}
                      onClick={() => handleModale(data)}
                    />
                  )}
                  {data.bigImage && (
                    <p>👈 (cliquez sur l'image pour l'agrandir)</p>
                  )}
                </div>
              )}
              <p>{data.body}</p>
              {data.links && (
                <Stack spacing={1} direction="row">
                  {data.links.map((link) => {
                    return (
                      <Tooltip title={link.Tooltip} key={link.url}>
                        <Button
                          disableElevation={link.disabled}
                          style={
                            ({ width: "fit-content" },
                            link.disabled && { cursor: "not-allowed" })
                          }
                          color={link.color}
                          target="_blank"
                          rel="noreferrer"
                          variant={link.disabled ? "outlined" : "contained"}
                          href={link.url}
                          startIcon={link.icon}
                        >
                          {link.text}
                        </Button>
                      </Tooltip>
                    )
                  })}
                </Stack>
              )}
            </>
          )}
        </Container>
      </Box>
    )
  }

  return (
    <div id="creations" className="section creations">
      <Separator />
      <Container maxWidth="lg">
        <h1>Mes créations ✨</h1>
        <div className="cardContainer">
          {cards.map((card) => {
            return (
              <Card key={card.title}>
                <CardActionArea onClick={toggleDrawer(card.title)}>
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
        <Modal
          open={modaleImage}
          onClose={() => setModaleImage(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "90vh",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <img
              style={{ height: "100%" }}
              src={modaleImageContent}
              alt={modaleAlt}
            />
          </Box>
        </Modal>
        <Drawer anchor="right" open={drawer} onClose={toggleDrawer()}>
          {drawerData(cards, creationToDisplay)}
        </Drawer>
      </Container>
    </div>
  )
}
