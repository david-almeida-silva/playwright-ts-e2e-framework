# 🎭 Playwright TS E2E Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Build Status](https://img.shields.io/badge/Status-Passed-brightgreen?style=for-the-badge)

Este repositório contém um framework de automação de testes Web End-to-End (E2E) moderno, rápido e escalável, desenvolvido com **Playwright** e **TypeScript**. O projeto foi estruturado aplicando o padrão de design **Page Object Model (POM)** e configurado com Integração Contínua (CI/CD) via **GitHub Actions**.

A aplicação alvo dos testes é o e-commerce de demonstração [Swag Labs (SauceDemo)](https://www.saucedemo.com/).

---

## 🎯 Destaques e Arquitetura

- **Page Object Model (POM):** Separação clara entre a lógica de negócios (testes) e o mapeamento de elementos (páginas), facilitando a manutenção e escalabilidade.
- **Cross-browser Testing:** Execução nativa e paralela no **Chromium, Firefox e WebKit** configurada por padrão.
- **Time Travel & Trace Viewer:** Uso dos relatórios interativos e modo visual do Playwright para depuração avançada.
- **CI/CD Automatizado:** Esteira configurada no GitHub Actions que instala navegadores, executa testes em modo *headless* e valida a integridade a cada _push_ ou _pull request_.

---

## 📂 Estrutura do Projeto

    playwright-ts-e2e-framework/
    ├── .github/
    │   └── workflows/
    │       └── playwright.yml       # Pipeline automatizada do GitHub Actions
    ├── pages/
    │   ├── InventoryPage.ts         # Page Object da tela de inventário/produtos
    │   └── LoginPage.ts             # Page Object da tela de autenticação
    ├── tests/
    │   ├── e2e-checkout.spec.ts     # Cenário E2E de compra completa
    │   └── login.spec.ts            # Cenários de autenticação (sucesso e falha)
    ├── playwright.config.ts         # Configurações globais do Playwright (Navegadores, Retries, Reports)
    └── package.json

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v16 ou superior)

### Instalação
1. **Clone o repositório:**
    git clone https://github.com/SEU_USUARIO/playwright-ts-e2e-framework.git
    cd playwright-ts-e2e-framework

2. **Instale as dependências:**
    npm install

3. **Instale os navegadores do Playwright:**
    npx playwright install

---

### Execução dos Testes

- **Rodar todos os testes em modo headless (fantasma):**
    npx playwright test

- **Rodar os testes com Interface Gráfica (Modo UI):**
    npx playwright test --ui

- **Visualizar o Relatório HTML após a execução:**
    npx playwright show-report

---

Desenvolvido por **[Seu Nome]** 👋🏼 
- [LinkedIn](https://www.linkedin.com/in/david-almeida-silva/)