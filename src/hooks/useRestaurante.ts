import { useState, useEffect } from 'react'
import { type Restaurante } from './useRestaurantes'

const useRestaurante = (id: string | undefined) => {
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Restaurante não encontrado')
        return res.json()
      })
      .then((data: Restaurante) => {
        setRestaurante(data)
      })
      .catch(() => setErro('Não foi possível carregar o restaurante.'))
      .finally(() => setLoading(false))
  }, [id])

  return { restaurante, loading, erro }
}

export default useRestaurante
