# Pequeno Astronauta — Landing Page

Landing page em Next.js + Tailwind CSS para um produto personalizado infantil
(ilustração de astronauta com a foto e o nome da criança), com foco em
conversão via WhatsApp.

## Como rodar localmente

Pré-requisito: Node.js instalado (versão 18 ou mais recente) — baixe em
https://nodejs.org se ainda não tiver.

Dentro da pasta do projeto, no terminal:

```
npm install
npm run dev
```

Depois abra http://localhost:3000 no navegador.

## O que editar antes de publicar

Edite o arquivo `src/data/content.ts`:

- `whatsappNumero`: coloque seu número real, só dígitos, com DDI+DDD
  (exemplo: 5511999999999).
- `whatsappMensagemPadrao`: mensagem que abre automaticamente no WhatsApp.
- `precoDe` / `precoPor`: valores exibidos no CTA final.
- `depoimentos`, `faq`, `galeria`: textos de cada seção, à vontade para
  editar conforme seu produto real.

## Como publicar na Vercel

1. Crie um repositório no GitHub e suba este código (`git init`,
   `git add .`, `git commit -m "primeira versão"`, depois `git push` para
   um repositório criado no GitHub).
2. Acesse https://vercel.com, faça login (pode ser com sua conta GitHub).
3. Clique em "New Project", selecione o repositório recém-criado.
4. A Vercel detecta automaticamente que é um projeto Next.js — não precisa
   mudar nenhuma configuração. Clique em "Deploy".
5. Em poucos minutos você recebe uma URL pública (algo como
   `seu-projeto.vercel.app`).

## Estrutura do projeto

- `src/app/page.tsx` — monta todas as seções da página.
- `src/components/` — cada seção é um componente (Hero, Galeria,
  Depoimentos, FAQ, CTA final etc.).
- `src/data/content.ts` — todo o conteúdo textual e o número de WhatsApp,
  centralizados para facilitar edição.
- `tailwind.config.ts` — paleta de cores, tipografia e animações
  customizadas usadas na identidade visual ("Mapa Estelar").
