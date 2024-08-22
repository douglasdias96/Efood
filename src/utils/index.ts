

export const GetTotalPrice = (items: CardapioItem[]) => {
  return items.reduce((acumulador, valorAtual) => {
    if (valorAtual.preco) {
      return (acumulador += valorAtual.preco)
    }
    return 0
  }, 0)
}
