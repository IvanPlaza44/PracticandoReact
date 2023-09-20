import style from "./TwitterCard.module.css"
import React from "react"

const TwitterCard = ({ userName, name }) => {
  const [ isFollowing, setIsFollowing ] = React.useState(false)

  const handleIsFollowing = ()=>{
    setIsFollowing(!isFollowing)
  }

  const image = `https://unavatar.io/github/${userName}`
  const text = isFollowing ? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing
  ? style.btnIsFollow
  : style.btn

  return (
    <article className={style.article}>
        <header>
            <img src={image} alt={name} />
        <div>
            <strong>{name}</strong>
            <span>@{userName}</span>
        </div>
        </header>
        <aside>
            <button onClick={handleIsFollowing} className={buttonClassName}>
              <span className={style.btnText}>{text}</span>
              <span className={style.stopFollow}>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}

export default TwitterCard