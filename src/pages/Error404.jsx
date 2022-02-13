import Link from "@mui/material/Link"

export default function Error() {
  return (
    <div className="section">
      <div className="error">
        <h1>Erreur 404 🤨</h1>
        <p>Page inexistante</p>
        <Link href="/">↩ Retour à l'accueil</Link>
      </div>
    </div>
  )
}
