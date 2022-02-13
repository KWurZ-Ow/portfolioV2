import * as React from "react"
import { useState } from "react"
import Footer from "../components/Footer"
import IconButton from "@mui/material/IconButton"
import Snackbar from "@mui/material/Snackbar"
import CloseIcon from "@mui/icons-material/Close"

import Presentation from "../components/sections/Presentation"
import Experiences from "../components/sections/Experiences"
import Competences from "../components/sections/Competences"
import Creations from "../components/sections/Creations"

import Loading from "../components/Loading"

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  const handleLoaded = () => {
    setLoaded(true)
    setSnacbar(true)
    document.body.style.overflow = "auto"
  }

  //🌭 snackbar
  const [snackbar, setSnacbar] = useState(false)
  const handleCloseSnackbar = (e, reason) => {
    if (reason === "clickaway") {
      return
    }

    setSnacbar(false)
  }
  const snackbarContent = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      {!loaded && <Loading />}
      <>
        <Presentation handleLoaded={() => handleLoaded()} />
        <Experiences />
        <Competences />
        <Creations />
        <Footer />
        <Snackbar
          open={snackbar}
          onClose={handleCloseSnackbar}
          message="🚧 Attention, Ce site est en développent 🚧"
          action={snackbarContent}
        />
      </>
    </>
  )
}
