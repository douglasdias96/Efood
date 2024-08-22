
declare interface Menu {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao : number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

declare interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare interface MenuResponse {
  data : Menu[]
}