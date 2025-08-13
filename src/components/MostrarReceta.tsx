import type { Receta } from "../App"

type MostrarRecetaProp = {
    receta: Receta[]
}

function MostrarReceta({ receta }: MostrarRecetaProp) {
    if(!receta) return null
  return (
    <ul>
        {receta.map((receta) => 
            <li key={receta.idMeal}>
                <h1>{receta.strMeal}</h1>
                <img src={receta.strMealThumb} alt="Poster" />
                <p>{receta.strInstructions}</p>
                <a href={receta.strYoutube} >
                    Ver en Youtube
                </a>
            </li>
        )}
    </ul>
  )
}

export default MostrarReceta