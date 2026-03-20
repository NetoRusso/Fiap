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
  <img src="https://github.com/user-attachments/assets/ccca8419-f3c0-4313-81bf-24b1e7dd7d5a" width="auto" height="200">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/a11b6642-023f-46d3-871c-ba9cca1e6353" width="auto" height="200">
</p>

## Custom Cursor 🖱️
Cursor customizado com detecção de touch devices


<p align="center">
  <img src="https://github.com/user-attachments/assets/1454acb6-772e-478a-a742-ea06cf498565" width="auto" height="300">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/9a39110c-c2d0-4a2b-ac29-1fd41ab9a08e" width="auto" height="300">
</p>


## Intro 🪟
Section Intro ajustada pelo device


<p align="center">
  <img src="https://github.com/user-attachments/assets/6135f78f-bfa8-4406-ae47-bf4b5f3df85f" width="auto" height="300">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/9508c7c0-e575-48fe-bf77-631626b710ba" width="auto" height="300">
</p>



## Water Animation 🌊
192 frames de animação com lazy loading progressivo

<p align="center">
<img src="https://github.com/user-attachments/assets/8e8a0eeb-b3b5-41d8-aab4-a21687ada493" width="auto" height="300">
</p>

## Cursos Section 📒
Grid responsivo com animações em scss e controle de estados

<p align="center">
  <img src="https://github.com/user-attachments/assets/e7127665-5bfb-43b8-b6ad-8b61da4bf84a" width="auto" height="300px">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/dc2b9384-2b01-4446-b61b-fad503c1d85e" width="auto" height="300px">
</p>


## FAQ Accordion ⁉️
Accordion com transições suaves

<p align="center">
  <img src="https://github.com/user-attachments/assets/f3cf4f32-797a-4358-ba59-31effc17ecc6" width="auto" height="300px">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/14b9b29d-8364-4cdf-bfcd-615b61e640d6" width="auto" height="300px">
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

<img width="auto" height="300" alt="Image" src="https://github.com/user-attachments/assets/887e3e73-ab3f-4ad1-8541-be3e66cdfc4f" />

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
<img src="https://github.com/user-attachments/assets/3de382d6-57d0-4981-83ca-e1d55bab6892" width="auto" height="80">
---

- Desktop View
  -- 3840x2160 | 2560x1440 | 2560x1080 | 1920x1080 | 1600x900 | 1440x900 | 1366x768 | 1280x720
<p align="left">
<img src="https://github.com/user-attachments/assets/9b3fc4a4-72a5-40c2-9817-b9e44041def7" width="auto" height="300">
</p>

- Tablet View
 -- 1024x640 | 1024x1366* | 820x1180 | 768x1024
<p align="left">
<img src="https://github.com/user-attachments/assets/b5db4cbf-5f42-4743-84a1-6b301c64d204" width="auto" height="300">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/8f479130-21fa-4341-a3d5-4fa3baedd2a1" width="300" height="auto">
</p>

- Mobile View
 -- 414x736 | 360x640 | 320x568
<p align="left">
<img src="https://github.com/user-attachments/assets/759e8655-623c-442b-b999-9bbbbda2d331" width="auto" height="300">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/c3e751b8-8bc7-41cf-9340-078338939a7c" width="300" height="auto">
</p>

---

* Este projeto foi desenvolvido como parte do teste técnico de Front-end da FIAP.

  🔗 **Deploy oficial do projeto:** [fiap-netorusso.vercel.app](https://fiap-netorusso.vercel.app/)

Desenvolvido com ❤️ para o teste técnico FIAP por Neto Russo


