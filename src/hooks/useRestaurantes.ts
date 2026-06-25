import { useState, useEffect } from 'react'

export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const useRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar restaurantes')
        return res.json()
      })
      .then((data: Restaurante[]) => {
        setRestaurantes(data)
      })
      .catch(() => setErro('Não foi possível carregar os restaurantes.'))
      .finally(() => setLoading(false))
  }, [])

  return { restaurantes, loading, erro }
}

export default useRestaurantes
