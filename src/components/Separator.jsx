export default function Separator({fill}) {
  return (
    <div className="divider" style={{fill: fill}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 50"
        height="10vh"
        width="100%"
        preserveAspectRatio="xMaxYMin"
      >
        <path d="M1200,0V27a21.06,21.06,0,0,1-21,21H536a21.06,21.06,0,0,1-21-21V21A21.06,21.06,0,0,0,494,0Z" />
      </svg>
    </div>
  )
}