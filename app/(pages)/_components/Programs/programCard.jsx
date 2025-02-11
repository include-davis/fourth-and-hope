//import styles.
export function programCard({title, subtitle, text, image }){
    return(
        <div className="program">
        <div className="text">
          <h2>{title}</h2>
          <p>
            {subtitle}
          </p>
          <p>
            {text}
          </p>
        </div>
        <div className="image">
          <img src= {image} />
        </div>
      </div>
    )
}