
export interface Menu {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao : number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface MenuResponse {
  data : Menu[]
}