# GitHub Blog

Este projeto é um blog desenvolvido em ReactJS que utiliza as issues de um repositório do GitHub como posts. Ele foi criado durante os estudos na Rocketseat, com o objetivo de praticar conceitos de React, consumo de APIs, roteamento dinâmico e estilização moderna.

## Funcionalidades

- Listagem de posts a partir das issues do repositório do GitHub
- Busca de posts por texto
- Visualização detalhada de cada post (issue)
- Renderização de conteúdo em Markdown com destaque de sintaxe
- Perfil do usuário do GitHub exibido no topo
- Layout responsivo e estilização com TailwindCSS

## Tecnologias Utilizadas

- [ReactJS](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [date-fns](https://date-fns.org/)
- [Phosphor Icons](https://phosphoricons.com/)

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/eduardossimas/github-blog.git
   cd github-blog
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## Configuração

O projeto utiliza a API pública do GitHub, não sendo necessário token para leitura de issues públicas. Caso queira acessar repositórios privados ou evitar limites de requisições, configure um token no arquivo de configuração do Axios.

## Estrutura de Pastas

- `src/components`: Componentes reutilizáveis (cards, perfil, etc)
- `src/pages`: Páginas principais (Home, Post)
- `src/context`: Contextos de dados (posts)
- `src/utils`: Funções utilitárias
- `src/lib`: Configuração do Axios

## Licença

Este projeto é apenas para fins de estudo e portfólio.

---

Feito com 💜 por Eduardo Salzer