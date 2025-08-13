import { useState } from "react"
import './App.css'
import BuscarReceta from "./components/BuscarReceta"
import MostrarReceta from "./components/MostrarReceta"

export type Receta = {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strYoutube: string
}

function App() {
  const [receta, setReceta] = useState<Receta[]>([])
  return (
    <>
      <h1>Buscar recetas</h1>
      <BuscarReceta setReceta={setReceta} />
      <MostrarReceta receta={receta} />
    </>
  )
}

export default App