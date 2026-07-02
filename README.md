# Landing Page — Dra. Yamillê de Lourdes

Landing page para divulgação dos serviços veterinários da Dra. Yamillê de Lourdes, em Capitão Poço - PA. Apresenta a profissional, os serviços oferecidos (clínica de pequenos e grandes animais, atendimento rural), diferenciais, depoimentos, localização e um formulário/link direto para agendamento de consultas via WhatsApp.

## Stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [lucide-react](https://lucide.dev) para ícones

## Estrutura

```
src/
  components/
    layout/     # Navbar, Footer, botão flutuante do WhatsApp
    sections/   # Hero, Sobre, Serviços, Diferenciais, Depoimentos, Localização, Contato
    ui/         # Componentes de apoio (ex.: animação de reveal ao scroll)
  data/         # Conteúdo do site (textos, serviços, depoimentos) e configurações de contato
  pages/        # Página principal (Home)
  assets/       # Imagens usadas nos componentes
```

Os textos, dados de contato (WhatsApp, endereço, horários, Instagram) e demais configurações do site ficam centralizados em `src/data/site.ts`.

## Como rodar

```bash
npm install
npm run dev
```

O servidor de desenvolvimento também fica acessível na rede local (útil para testar em celular/outro dispositivo), exibindo o endereço `Network` no terminal.

## Scripts

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera a build de produção
- `npm run preview` — serve a build de produção localmente
- `npm run lint` — roda o linter (Oxlint)
