# PROJETO - SHOPPING CART

Projeto final do módulo de Fundamentos. O projeto consiste em um __carrinho de compras__ que consome a [API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) para mostrar produtos na tela. Parte do código já havia sido desenvolvido pela [Trybe](https://www.betrybe.com/), são as funções: __createProductImageElement, createCustomElement, createProductItemElement, getSkuFromProductItem e createCartItemElement.__
As demais funções, desenvolvi usando a abordagem __Test Driven Development (TDD)__ com Jest e permitem as seguintes funcionalidades: 
&nbsp;
## 1. Cria uma listagem de produtos
Cria uma listagem de produtos que devem ser consultados através da API do Mercado Livre e renderiza eles na tela.
&nbsp;
## 2. Adiciona o produto ao carrinho de compras
Cada produto na página HTML possui um botão com o nome Adicionar. Ao clicar nesse botão é feita uma requisição que irá retornar todos os dados específicos de um produto e inserí-los no carrinho de compra.
&nbsp;
## 3. Remove o item do carrinho de compras ao clicar nele
Ao clicar no produto no carrinho de compra, ele é removido da lista.
&nbsp;
## 4. Carrega o carrinho de compras através do LocalStorage ao iniciar a página
Ao carregar a página, o estado atual do carrinho de compras é ser carregado através do LocalStorage.
&nbsp;
## 5. Calcula o valor total dos itens do carrinho de compras
Cada vez que os itens do carrinho de compras são modificados, é calculado o valor total que é apresentado no final do carrinho.
&nbsp;
## 6. Botão Esvaziar carrinho para limpar o carrinho de compras
Remove todos os itens do carrinho de compras quando clicado.
&nbsp;
## 7. Adiciona um texto de "carregando" durante uma requisição à API
Exibe uma mensagem de "carregando..." enquanto é feita a requisição à API.
&nbsp;
## 8 - 11. Testes para as funções na pasta Helpers
Testes desenvolvidos seguindo a abordagem TDD para as funções na pasta Helpers.
&nbsp;