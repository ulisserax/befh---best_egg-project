//========================================================================================================
//Articles' Page Commands

Cypress.Commands.add('LoginPage', () =>{
    cy.visit('/');
})

Cypress.Commands.add('ClickSignInButton', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.signInButton).click();
    })
})

Cypress.Commands.add('SetUsername', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.textField).type(element.username);
        //cy.get(element.usernameTextField);
    })
})

Cypress.Commands.add('SetPassword', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.passwordTextField).type(element.password);
        //cy.get(element.passwordTextField);
    })
})

Cypress.Commands.add('ClickLoginButton', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.button).click();
    })
})

Cypress.Commands.add('PopupAssert', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.popupGuideline).should('have.class', 'cdk-overlay-pane cdk-panel-custom');
    })
})

Cypress.Commands.add('PopupClose', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.closeGuideline).click();
    })
})

Cypress.Commands.add('HomePageAssert', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.welcomeTitle).should('have.id', 'heroTitle');
    })
})

Cypress.Commands.add('FinancialHealth', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.financialHeader).click();
    })
})

Cypress.Commands.add('KnowledgeCenter', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.knowledgeCenter).click();
    })
})

Cypress.Commands.add('ArticleSearchEmpty', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.textField).should('be.empty');
    })
})

Cypress.Commands.add('ArticlesDisplaying', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.articlesFullDisplaying).should('be.visible');
    })
})

let mseconds = [];
Cypress.Commands.add('OpenArticles', () =>{
    
    var i = 0;
    cy.fixture("elements").then((element) => {
        
        cy.get(element.article1).click().wait(5000);
        
        while(i < 30){
            
            cy.get(element.date).then(($p) => {
                const elemDate = $p.text();
                let msecond1 = Date.parse(elemDate);
                mseconds.push(msecond1);
                cy.log(mseconds);
            })

            cy.get(element.nextPage).click();
            i++;
        }
        cy.log(mseconds);
    })
})

Cypress.Commands.add('LargestDateArticle', () =>{
    const maxElement = mseconds.reduce((a, b) => Math.max(a, b), -Infinity);
    cy.log(maxElement);
    if (maxElement == 1647486000000){
        var largestDate = new Date(maxElement);
        cy.log(largestDate.toDateString());
        cy.log('First Article is the most recent!')
        //expect(true).to.be(true);
    }
    else{
        cy.log('First Article is not the most recent')
        //expect(true).to.be(false);
        //Here is interesting to insert some fail test (assertion failed test)
    }
})

Cypress.Commands.add('ArticleThumbnail', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.goToKnowledgePage).click();
        cy.wait(5000).get(element.article2).click();
    })
})

Cypress.Commands.add('KnowledgeCenterPage', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.goToKnowledgePage2).click();
    })
})

Cypress.Commands.add('ArticleClick', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.article2).click();
    })
})

Cypress.Commands.add('ArticlePage', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.articlePage).should('be.visible');
    })
})

Cypress.Commands.add('ArticleElements', () =>{
    cy.fixture("elements").then((element) => {
        //cy.get(element.pageHeroImage).should('have.class', 'w-full h-96 rounded-lg object-cover');
        cy.get(element.pageHeroImage).should('be.visible');
        cy.get(element.contentText).should('be.visible');
        cy.get(element.contentLinks).should('be.visible');
    })
})

Cypress.Commands.add('BackToKnowledgePage', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.goToKnowledgePage).click();
    })
})

Cypress.Commands.add('SubmitSearch', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.textField).type('Credit Card');
        cy.get(element.button).click();
    })
})

Cypress.Commands.add('SubmitSecondSearch', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.textField).type('COVID');
        cy.get(element.button).click();
    })
})

Cypress.Commands.add('ClearSearch', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.textField).clear();
        cy.get(element.button).click();
        cy.get(element.textField).should('be.empty');
    })
})

Cypress.Commands.add('ArticlesMatchingSearch', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.thumbHeaderTitle).find('h2').each(($h2) => {
            const text = $h2.text();
            if(text.includes('Credit Card')){
                cy.log('Cointains text!');
                //expect(true).to.be(true);
            }
            else{
                cy.log('Do not contain text!');
                //expect(true).to.be(false);
            }
        })
    })
})

Cypress.Commands.add('TotalArticles', () =>{
    cy.fixture("elements").then((element) => {
        let quantityVisibleArticles = 30;
        cy.get(element.articlesFullDisplaying).find('ul').should('have.length', quantityVisibleArticles);
    })
})

Cypress.Commands.add('NextPage', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.nextPage).click();
    })
})

Cypress.Commands.add('RecentBlogLink', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.blogLinks).should('have.text', ' 5 Budgeting Apps That Can Help You Create a Monthly Plan… and Stick to It ').click();
    })
})

//========================================================================================================

//Calculator's Page Commands

