<div align="center">

# 🎓 FIAP Front-end - Landing Page    -  🔗[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://fiap-netorusso.vercel.app/)

<img width="1201" height="321" alt="Image" src="https://github.com/user-attachments/assets/965f9830-7315-400f-9909-6ff2c3927656" />

**Landing page institucional desenvolvida para o teste técnico de Front-end da FIAP**


[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-1.98-CC6699?style=flat-square&logo=sass)](https://sass-lang.com/)

</div>

---

## 🚀 Quick Start

```bash
# Clonar o repositório
git clone https://github.com/NetoRusso/Fiap

# Instalar dependências
yarn install
# ou
npm install

# Executar em desenvolvimento
yarn dev
# ou
npm run dev

# Acessar
http://localhost:3000
```
---
# 📋 Requisitos Atendidos
---

## ✅ Seções implementadas:
  - Navbar com indicador de progresso
  - Header com animações GSAP
  - Intro animada
  - Transição com efeito de água (bônus)
  - Cursos com scroll horizontal
  - FAQ com accordion

  
## ✅ Responsividade: 15+ resoluções testadas:
  - Desktop: 3840x2160, 2560x1440, 1920x1080, 1440x900, 1366x768, 1280x720
  - Tablet: iPad Pro, iPad Air, iPad (vertical e horizontal)
  - Intro animada
  - Mobile: iPhone 8 Plus, Galaxy S5, iPhone 5/SE (vertical e horizontal)

## ✅ Cross-browser: Chrome, Safari, Firefox, Edge, Opera

## ✅ Animações: Todas as seções possuem animações suaves com GSAP

---
# 🎬 Demonstrações
---

## Navbar Progress 🖋️
Barra de progresso indicando posição na página

<p align="center">
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/progress.gif" width="auto" height="200">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/progress_mobile.gif" width="auto" height="200">
</p>

## Custom Cursor 🖱️
Cursor customizado com detecção de touch devices


<p align="center">
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/cursor.gif" width="auto" height="300">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/cursor_mobile.gif" width="auto" height="300">
</p>


## Intro 🪟
Section Intro ajustada pelo device


<p align="center">
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/intro.gif" width="auto" height="300">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/intro_mobile.gif" width="auto" height="300">
</p>



## Water Animation 🌊
192 frames de animação com lazy loading progressivo

<p align="center">
<img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/water.gif" width="auto" height="300">
</p>

## Cursos Section 📒
Grid responsivo com animações em scss e controle de estados

<p align="center">
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/cursos.gif" width="auto" height="300px">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/cursos_mobile.gif" width="auto" height="300px">
</p>


## FAQ Accordion ⁉️
Accordion com transições suaves

<p align="center">
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/faq.gif" width="auto" height="300px">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/faq_mobile.gif" width="auto" height="300px">
</p>

---
# 🛠️ Stack Tecnológica
---

- Next.js 16.2 - Framework React com SSR ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- TypeScript 5.0 - Type safety ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- SCSS - Pré-processador CSS ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

- GSAP 3.14 - Animações de alta performance ![GSAP](https://img.shields.io/badge/GSAP-%2388CE02.svg?style=for-the-badge&logo=greensock&logoColor=black)
- React 19 - Biblioteca UI ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- Cypress 13.17 - Testes E2E ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
- Lighthouse CI - Auditoria de performance 🚨

---
# ⚡ Destaques Técnicos
---
## Performance Otimizada
- LCP < 2.5s - Redução de 50-68% no tempo de carregamento
- Lazy Loading - WaterAnimation carrega apenas 15 frames iniciais (~2-3MB)
- Code Splitting - next/dynamic para componentes pesados
- Zero Memory Leaks - Cleanup perfeito de ScrollTrigger

## Boas Práticas
- TypeScript Strict Mode - Máxima segurança de tipos
- Error Boundaries - Tratamento de erros com fallbacks
- Responsive Design - Medidas relativas (rem, %, vw/vh)
- Component Memoization - Redução de re-renders desnecessários
- Custom Hooks - Lógica reutilizável (useMediaQuery, useScreenSize)

## Qualidade de Código
- 39 Testes E2E - Validação completa com Cypress
- Lighthouse Score > 85 - Performance e acessibilidade
- ESLint - Padrões de código
- Semantic HTML - Estrutura acessível

---
# 📁 Estrutura do Projeto
---
```
fiap-front/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página home
│   │   └── globals.scss        # Estilos globais
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Navbar/             # Navbar com progress bar
│   │   ├── Header/             # Header animado
│   │   ├── Intro/              # Seção de introdução
│   │   ├── WaterAnimation/     # Canvas com 192 frames
│   │   ├── Cursos/             # Grid de cursos
│   │   ├── Faq/                # Accordion FAQ
│   │   ├── CustomCursor/       # Cursor customizado
│   │   └── ErrorBoundary/      # Tratamento de erros
│   ├── context/                # Context API
│   │   └── ScreenContext.tsx   # Estado global de viewport
│   ├── data/                   # Dados JSON
│   │   ├── cursos.json
│   │   └── faqData.json
│   ├── types/                  # Definições TypeScript
│   └── util/                   # Utilitários e hooks
├── cypress/                    # Testes E2E
│   └── e2e/
│       └── fiap-acceptance-tests.cy.ts
├── public/                     # Arquivos estáticos
│   ├── image/                  # Imagens estáticas
│   ├── water/                  # Frames da animação
│   └── demos/                  # GIFs/vídeos de demonstração
└── package.json
```

---
# 🧪 Testes
---

```
# Executar testes E2E (headless)
yarn cypress:run
# ou
npm run cypress:run

# Abrir interface do Cypress
yarn cypress:open
# ou
npm run cypress:open

# Executar Lighthouse CI
yarn lighthouse
# ou
npm run lighthouse
```

## Cobertura de testes:

- ✅ Responsividade em 15 resoluções
- ✅ Funcionalidades de todos os componentes
- ✅ Navegação e scroll suave
- ✅ Animações GSAP
- ✅ Performance e acessibilidade

<img width="auto" height="300" alt="Image" src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/teste.png" />

---
# 🔧 Comandos Disponíveis
---

| Comando | Descrição |
| :--- | :--- |
| `yarn dev` | Inicia servidor de desenvolvimento |
| `yarn build` | Cria build de produção |
| `yarn start` | Inicia servidor de produção |
| `yarn lint` | Executa ESLint |
| `yarn cypress:open` | Abre interface do Cypress |
| `yarn cypress:run` | Executa testes E2E headless |
| `yarn lighthouse` | Executa auditoria Lighthouse |

---
# 📱 Design Responsivo 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/responsive.gif" width="auto" height="80">
---

- Desktop View
  -- 3840x2160 | 2560x1440 | 2560x1080 | 1920x1080 | 1600x900 | 1440x900 | 1366x768 | 1280x720
<p align="left">
<img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/desk.gif" width="auto" height="300">
</p>

- Tablet View
 -- 1024x640 | 1024x1366* | 820x1180 | 768x1024
<p align="left">
<img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/tablet.gif" width="auto" height="300">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/tablet_H.gif" width="300" height="auto">
</p>

- Mobile View
 -- 414x736 | 360x640 | 320x568
<p align="left">
<img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/mobile.gif" width="auto" height="300">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/NetoRusso/Fiap/blob/main/public/image/gifs/mobile_H.gif" width="300" height="auto">
</p>

---

* Este projeto foi desenvolvido como parte do teste técnico de Front-end da FIAP.

  🔗 **Deploy oficial do projeto:** [fiap-netorusso.vercel.app](https://fiap-netorusso.vercel.app/)

Desenvolvido com ❤️ para o teste técnico FIAP por Neto Russo


