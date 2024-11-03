describe('Базовые сценарии отправки формы', () => {
  beforeEach(() => {
    cy.visit('https://forma-obratnoy-svyazi-dlya-sayta-614458.testograf.ru');
  })

  it('Успешная отправка формы', () => {
    cy.get('input[placeholder=""]').eq(0) 
    .type('Иван');

    cy.get('input[placeholder=""]').eq(1)
    .type('ivan.ivanov@example.com')

    cy.get('input[placeholder=""]').eq(2)
    .type('+79002003050')

    cy.get('input[placeholder=""]').eq(3)
    .click()
    cy.contains('Заказ').click()

    cy.get('textarea').type('Это тестовое сообщение.');

    cy.get('button').click();

    cy.contains('Благодарим за обращение!').should('be.visible');
  })
})