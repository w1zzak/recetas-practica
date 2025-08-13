import React, { useState, type Dispatch, type SetStateAction } from "react"
import type { Receta } from "../App"

type BuscarRecetaProp = {
    setReceta: Dispatch<SetStateAction<Receta[]>>
}

function BuscarReceta({ setReceta }: BuscarRecetaProp) {
    const [busqueda, setBusqueda] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if(busqueda.trim() === "") return

        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`)
            const data = await res.json()

            if(data.meals) { 
                const recetas: Receta[] = data.meals
                const newReceta = recetas.filter((receta) => 
                    receta.strMeal.toLowerCase().includes(busqueda.toLowerCase())
                )
                setReceta(newReceta)
            } else {
                setReceta([])
            }
        } catch (error) {
            console.log('Error', error)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            placeholder="Buscar receta"
        />
        <button type="submit">Buscar</button>
    </form>
  )
}

export default BuscarReceta