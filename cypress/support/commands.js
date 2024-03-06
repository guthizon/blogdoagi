Cypress.Commands.add('realizarBuscaPorTermo', (termo) => {
    const termoPesquisa = termo;
    cy.get('input[type="search"]').type(termoPesquisa, { force: true }).type('{enter}', { force: true });
    cy.url().should('include', `/?s=${termoPesquisa}`);
})

Cypress.Commands.add('validarResultadosDaBusca', (termo) => {
    cy.get('h1').contains(' Resultados encontrados para: ').should('be.visible');
    cy.get('h1 > span').contains(termo).should('be.visible');
    cy.get('[rel=bookmark]').contains(termo).should('be.visible');
})

Cypress.Commands.add('validarSemResultadosParaExibir', (termo) => {
    cy.get('h1').contains(' Resultados encontrados para: ').should('be.visible');
    cy.get('h1 > span').contains(termo).should('be.visible');
    cy.get('.page-content > p').contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.').should('be.visible');
})

Cypress.Commands.add('abrirArtigo', () => {
    let urlLink = '';
    cy.xpath('//article[1]//h2/a').invoke('attr', 'href').then((href) => {
        urlLink = href;
        cy.xpath('//article[1]//h2/a').click();
        cy.url().should('include', urlLink);
    });
})

Cypress.Commands.add('validarArtigoExibido', (texto) => {
    cy.get('p').contains(texto).should('be.visible');
})