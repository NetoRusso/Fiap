/// <reference types="cypress" />

// ***********************************************
// Custom commands para testes FIAP
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Testa múltiplas resoluções (aceite técnico FIAP)
       * @example cy.testResponsiveness('desktop')
       */
      testResponsiveness(device: 'desktop' | 'tablet' | 'mobile'): Chainable<void>;
      
      /**
       * Verifica se seção está visível
       * @example cy.checkSection('intro')
       */
      checkSection(sectionId: string): Chainable<JQuery<HTMLElement>>;
      
      /**
       * Aguarda animações GSAP terminarem
       * @example cy.waitForAnimations()
       */
      waitForAnimations(): Chainable<void>;
    }
  }
}

// Comando: Testa responsividade em múltiplas resoluções
Cypress.Commands.add('testResponsiveness', (device: 'desktop' | 'tablet' | 'mobile') => {
  const viewports = {
    desktop: [
      [3840, 2160], // 4K
      [2560, 1440], // 2K
      [1920, 1080], // Full HD
      [1600, 900],
      [1440, 900],
      [1366, 768],
      [1280, 720],
    ],
    tablet: [
      [1024, 1366], // iPad Pro
      [820, 1180],  // iPad Air
      [768, 1024],  // iPad
      [1024, 640],
    ],
    mobile: [
      [414, 736],   // iPhone 8 Plus
      [360, 640],   // Galaxy S5
      [320, 568],   // iPhone 5/SE
    ],
  };

  const resolutions = viewports[device];
  
  resolutions.forEach(([width, height]) => {
    cy.viewport(width, height);
    cy.wait(500); // Aguarda resize
    
    // Verifica estrutura básica
    cy.get('header').should('be.visible');
    cy.get('body').should('be.visible');
  });
});

// Comando: Verifica seção
Cypress.Commands.add('checkSection', (sectionId: string) => {
  return cy.get(`#${sectionId}, [id="${sectionId}"]`).should('exist').and('be.visible');
});

// Comando: Aguarda animações
Cypress.Commands.add('waitForAnimations', () => {
  cy.wait(500); // Aguarda animações GSAP (300-500ms típico)
});

export {};
