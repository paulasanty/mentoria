/// <reference types="cypress" />

import variaveis from '../support/example.js'

describe('Validar a tela home', () => {
    it('Validar o campo pesquisar', () => {
        cy.visit('/');
        cy.get('#search_query_top').type('Printed Chiffon Dress')
        cy.get('button[name="submit_search"]').click()
        cy.xpath("//*[@id='center_column']//ul[contains(., 'Dress')]//following-sibling::li[contains(., 'Chiffon')]").trigger('mouseover')

        //*[@id="center_column"]/ul/li[1]/div/div[1]/div/a[1]/img
        //cy.get('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.left-block > div > a.product_img_link > img')
      
        cy.xpath(variaveis.addCarrinho).click( )
        cy.get('#add_to_cart').click()
    
    });
});
