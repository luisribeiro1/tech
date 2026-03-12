#### CSS inline, internal e external

**CSS Inline** – Estilos aplicados diretamente em um elemento HTML usando o atributo "style".

**CSS Internal** – Estilos definidos dentro de uma tag STYLE no cabeçalho do documento HTML.

**CSS External** – Estilos definidos em um arquivo CSS separado e vinculados ao documento HTML usando a tag <link>.

#### Regra, Seletores e Especificidade

**Regra CSS** – Conjunto de declarações que definem estilos para um ou mais elementos HTML.

**Seletores** – Parte da regra CSS que especifica quais elementos HTML serão afetados pelos estilos definidos.

**Especificidade** – Sistema de hierarquia que determina qual regra CSS será aplicada quando múltiplas regras conflitantes são encontradas para o mesmo elemento.

#### Tag, Classes e IDs

**Tag** – Seleciona elementos HTML pelo nome da tag (ex: div, p, h1).

**Classe** – Seleciona elementos HTML com base no atributo "class" (ex: .minha-classe).

**ID** – Seleciona um elemento HTML único com base no atributo "id" (ex: #meu-id).

#### Layout e Box Model

**display** – Define como um elemento será exibido (block, inline, inline-block, flex, grid).

**position** – Define o tipo de posicionamento (static, relative, absolute, fixed, sticky).

**float** – Define como um elemento flutua (left, right, none).

**clear** – Define como elementos flutuantes devem ser posicionados (left, right, both).

**z-index** – Define a ordem de sobreposição dos elementos (valores positivos e negativos).

**box-sizing** – Define como a largura e altura são calculadas (content-box ou border-box).

**top, right, bottom, left** – Define a posição dos elementos (valores em px, em, %, etc.).

**width, height** – Define a largura e altura de um elemento (valores em px, em, %, etc.).

**min-height, max-height** – Define a altura mínima e máxima de um elemento (valores em px, em, %, etc.).

**min-width, max-width** – Define a largura mínima e máxima de um elemento (valores em px, em, %, etc.).

**margin** – Define a margem de um elemento (valores em px, em, %, etc.).

**padding** – Define o preenchimento de um elemento (valores em px, em, %, etc.).

**border** – Define a borda de um elemento (width, style, color).

#### Cores e Fundos

**color** – Define a cor do texto.

**background-color** – Define a cor de fundo de um elemento.

**background-image** – Define uma imagem de fundo para um elemento.

**background-size** – Define o tamanho da imagem de fundo (cover, contain, auto).

**background-position** – Define a posição da imagem de fundo (center, top, bottom, left, right).

**background-repeat** – Define como a imagem de fundo se repete (repeat, no-repeat, repeat-x, repeat-y).

**opacity** – Define a opacidade de um elemento (valores entre 0 e 1).

#### Tipografia

**font-family** – Define a família da fonte (Arial, Helvetica, sans-serif, etc.).

**font-size** – Define o tamanho da fonte (px, em, rem, %, etc.).

**font-weight** – Define a espessura da fonte (normal, bold, 100-900).

**font-style** – Define o estilo da fonte (normal, italic, oblique).

**line-height** – Define a altura da linha do texto.

**text-align** – Define o alinhamento do texto (left, right, center, justify).

**text-decoration** – Define decorações no texto (underline, overline, line-through).

**text-transform** – Define a transformação do texto (uppercase, lowercase, capitalize).

**letter-spacing** – Define o espaçamento entre as letras.

**word-spacing** – Define o espaçamento entre as palavras.

**text-shadow** – Adiciona sombra ao texto (offset-x, offset-y, blur-radius, color).

#### Espaçamento

**margin** – Define a margem externa de um elemento (top, right, bottom, left).

**padding** – Define o preenchimento interno de um elemento (top, right, bottom, left).

**border** – Define a borda de um elemento (width, style, color).

**border-radius** – Define o raio das bordas para criar cantos arredondados.

**box-shadow** – Adiciona sombras ao redor do elemento.

#### Flexbox

**display: flex;** – Define um contêiner flexível.

**flex-direction** – Define a direção dos itens flexíveis (row, column).

**flex-wrap** – Define se os itens flexíveis devem quebrar em múltiplas linhas (nowrap, wrap, wrap-reverse).

**justify-content** – Alinha os itens ao longo do eixo principal (flex-start, center, space-between).

**align-items** – Alinha os itens ao longo do eixo transversal (flex-start, center, stretch).

**align-content** – Alinha o conteúdo do contêiner flexível ao longo do eixo transversal (flex-start, center, stretch).

**flex-grow** – Define a capacidade de um item flexível crescer.

**flex-shrink** – Define a capacidade de um item flexível encolher.

**flex-basis** – Define o tamanho inicial de um item flexível antes do espaço extra ser distribuído.

**gap** – Define o espaçamento entre os itens flexíveis.

#### Grid Layout

**display: grid;** – Define um contêiner de grade.

**grid-template-columns** – Define o número e tamanho das colunas na grade.

**grid-template-rows** – Define o número e tamanho das linhas na grade.

**grid-gap** – Define o espaçamento entre as células da grade.

**grid-column** – Define a posição e o tamanho de um item na grade (start / end).

**grid-row** – Define a posição e o tamanho de um item na grade (start / end).

**align-content** – Alinha o conteúdo da grade ao longo do eixo transversal.

**justify-items** – Alinha os itens da grade ao longo do eixo principal.

#### Bordas e Contornos

**border** – Define a borda de um elemento (width, style, color).

**border-radius** – Define o raio das bordas para criar cantos arredondados.

**box-shadow** – Adiciona sombras ao redor do elemento.

**outline** – Define um contorno ao redor de um elemento (width, style, color).

**outline-offset** – Define a distância entre o contorno e a borda do elemento.

**border-top, border-right, border-bottom, border-left** – Define a borda individual de cada lado do elemento.

#### Listas e Tabelas

**list-style** – Define o estilo da lista (type, position, image).

**list-style-type** – Define o tipo de marcador da lista (disc, circle, square, decimal).

t**able-layout** – Define o layout da tabela (auto, fixed).

**border-collapse** – Define se as bordas das células da tabela são colapsadas ou não.

#### Interação e Cursor

**cursor** – Define o tipo de cursor ao passar o mouse sobre um elemento (pointer, default, text, etc.).

**pointer-events** – Controla como o elemento responde a eventos do mouse (none, auto).

#### Animações e Transições

**transition** – Define a transição entre dois estados de um elemento (property, duration, timing-function, delay).

**animation** – Define uma animação CSS (name, duration, timing-function, delay, iteration-count, direction).

**transform** – Aplica transformações geométricas a um elemento (rotate, scale, translate, skew).

#### Efeitos Visuais

**box-shadow** – Adiciona sombras ao redor do elemento.

**filter** – Aplica efeitos visuais a um elemento (blur, brightness, contrast, grayscale, sepia).

**opacity** – Define a opacidade de um elemento (valores entre 0 e 1).

#### Unidades de medida comuns:

**px** – Pixels, unidade fixa.

**em** – Unidade relativa ao tamanho da fonte do elemento pai.

**rem** – Unidade relativa ao tamanho da fonte do elemento raiz (html).

**%** – Percentual, relativo ao elemento pai.

**vh** – Viewport height, 1% da altura da janela de visualização.

**vw** – Viewport width, 1% da largura da janela de visualização.

#### Cores em CSS:

**Nome da cor** – Exemplo: red, blue, green, etc.

**Hexadecimal** – Exemplo: #FF0000 (vermelho), #00FF00 (verde), #0000FF (azul).

**RGB** – Exemplo: rgb(255, 0, 0) (vermelho), rgb(0, 255, 0) (verde), rgb(0, 0, 255) (azul).

**RGBA** – Exemplo: rgba(255, 0, 0, 0.5) (vermelho com 50% de opacidade).

**HSL** – Exemplo: hsl(0, 100%, 50%) (vermelho), hsl(120, 100%, 50%) (verde), hsl(240, 100%, 50%) (azul).

**HSLA** – Exemplo: hsla(0, 100%, 50%, 0.5) (vermelho com 50% de opacidade).

#### Media Queries

**@media** – Define regras CSS condicionais baseadas em características do dispositivo (largura, altura, orientação, resolução).

**max-width** – Aplica estilos quando a largura da tela é menor ou igual ao valor especificado.

**min-width** – Aplica estilos quando a largura da tela é maior ou igual ao valor especificado.

**orientation** – Aplica estilos baseados na orientação do dispositivo (portrait, landscape).

#### Pseudo-classes e Pseudo-elementos

**:hover** – Aplica estilos quando o usuário passa o mouse sobre um elemento.

**:active** – Aplica estilos quando um elemento está sendo clicado.

**:focus** – Aplica estilos quando um elemento está em foco (ex: campo de formulário).

**:disabled** – Aplica estilos quando um elemento está desativado (ex: campo de formulário).

**::before** – Insere conteúdo antes do conteúdo de um elemento.

**::after** – Insere conteúdo após o conteúdo de um elemento.

**:nth-child(n)** – Seleciona o n-ésimo filho de um elemento pai.

**:first-child** – Seleciona o primeiro filho de um elemento pai.

**:last-child** – Seleciona o último filho de um elemento pai.

#### Variáveis CSS

**:root** – Define variáveis CSS no nível raiz do documento.

**--nome-da-variavel** – Define uma variável CSS personalizada.

**var(--nome-da-variavel)** – Utiliza o valor de uma variável CSS personalizada.

