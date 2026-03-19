// ***********************************************************
// Support file para Cypress
// ***********************************************************

// Import commands.js
import './commands';

// Prevent TypeScript errors
/// <reference types="cypress" />

// Configuração global
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros específicos que não afetam os testes
  if (err.message.includes('ResizeObserver')) {
    return false;
  }
  return true;
});
