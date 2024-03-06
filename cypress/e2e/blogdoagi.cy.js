describe('Teste de Pesquisa de Artigos Blog do Agi', () => {
    beforeEach(() => {
        cy.visit('https://blogdoagi.com.br/');
    });

    it('Pesquisar por um termo com resultados válidos', () => {
        const termoPesquisa = 'Pix';
        cy.realizarBuscaPorTermo(termoPesquisa);
        cy.validarResultadosDaBusca(termoPesquisa);
    });
    
    it('Pesquisar por um termo sem resultados para mostrar', () => {
        const termoPesquisa = 'tsts';
        cy.realizarBuscaPorTermo(termoPesquisa);
        cy.validarSemResultadosParaExibir(termoPesquisa);
        
    });

    it('Acessar um artigo por termo pesquisado', () => {
        const termoPesquisa = 'Pix';
        cy.realizarBuscaPorTermo(termoPesquisa);
        cy.validarResultadosDaBusca(termoPesquisa);
        cy.abrirArtigo();
        cy.validarArtigoExibido("Para realizar pagamentos por meio do Pix, é necessário fornecer a Chave Pix do destinatário");
    });
});
