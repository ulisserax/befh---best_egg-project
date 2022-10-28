//===============================================================================================================================================
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
    })
})

Cypress.Commands.add('SetPassword', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.passwordTextField).type(element.password);
    })
})

Cypress.Commands.add('ClickLoginButton', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.button).click();
    })
})

Cypress.Commands.add('PopupAssert', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.popupGuideline).should('be.visible');
    })
})

Cypress.Commands.add('PopupClose', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.closeGuideline).click();
    })
})

Cypress.Commands.add('HomePageAssert', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.welcomeTitle).then(($h3) => {
            const homeText = $h3.text();
            if (homeText.trim() === 'Home'.trim()){
                cy.log('Home Page accessed!');
            }
            else {
                cy.log('Home Page was not accessed.');
            }
        })
    })
})

Cypress.Commands.add('FinancialHealth', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.financialHeader).click();
    })
})

Cypress.Commands.add('IconHamburguer', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.iconHamburguer).click();
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
    if (maxElement == mseconds[0]){
        var largestDate = new Date(maxElement);
        cy.log(largestDate.toDateString());
        cy.log('First Article is the most recent!')
        expect(true).to.be.true;
    }
    else{
        cy.log('First Article is not the most recent')
        expect(true).to.be.false;
    }
})

Cypress.Commands.add('ArticleThumbnail', () =>{
    cy.fixture("elements").then((element) => {
        cy.wait(5000).get(element.article2).click({force: true});
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
        cy.get(element.buttonSearch).click();
    })
})

Cypress.Commands.add('SubmitSecondSearch', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.textField).type('COVID');
        cy.get(element.buttonSearch).click();
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
                expect(true).to.be.true;
            }
            else{
                cy.log('Do not contain text!');
                expect(true).to.be.false;
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
        //cy.get(element.blogLinks).should('have.text', ' What is an Online Loan? ').click();
        //cy.get(element.blogLinks).click();
        cy.contains('What is an Online Loan?').click()
    })
})

//===============================================================================================================================================
//Calculator's Page Commands

Cypress.Commands.add('Calculators', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.calculators).click();
    })
})

Cypress.Commands.add('SliderClick', () =>{
    cy.fixture("elements").then((element) => {
        
        const currentValue = 2000;
        const targetValue = 10000;
        const increment = 1000;
        const step = (targetValue - currentValue)/increment;
        const arrows = '{rightArrow}'.repeat(step);
        
        cy.get(element.slider).should('have.attr', 'aria-valuenow', 2000).type(arrows);
        cy.get(element.slider).should('have.attr', 'aria-valuenow', 10000)
    })
})

Cypress.Commands.add('LoanTabVisible', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.loan).should('be.visible');
    })
})

Cypress.Commands.add('ClickTermButton', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.termButton).click();
    })
})

Cypress.Commands.add('ClickTermButtonAdjust', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.termButtonAdjust).click();
    })
})

Cypress.Commands.add('DropdownLoan', () =>{
    cy.fixture("elements").then((element) => {
        cy.get("select").select("veryGood").invoke("val").should("eq", "veryGood");
    })
})

Cypress.Commands.add('ClickCalculate', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.calculateButton).click();
    })
})

Cypress.Commands.add('EstimateMonthlyPayment', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.estMonthlyPayment).should('be.visible');
    })
})

let valueText1 = '';
Cypress.Commands.add('EstimateMonthlyPaymentValues', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.termButton).click();
        cy.get("select").select("veryGood").invoke("val").should("eq", "veryGood");
        cy.get(element.calculateButton).click();
        cy.get(element.estMonthlyPaymentValues).should('be.visible');
        cy.get(element.estMonthlyPayment).find('h2').each(($h2) => {
            valueText1 = $h2.text();
        })
    })
})

let valueText2 = '';
Cypress.Commands.add('EstimateMonthlyPaymentNewValues', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.estMonthlyPayment).find('h2').each(($h2) => {
            valueText2 = $h2.text();
        });
    })
})

Cypress.Commands.add('CheckEstimateMonthlyPaymentUpdate', () =>{
    if(valueText1 === valueText2){
        cy.log('TABLE DID NOT UPDATE!');
        expect(true).to.be.false;
    }
    else{
        cy.log('TABLE UPDATED!');
        expect(true).to.be.true;
    }
})

Cypress.Commands.add('NotEstimateMonthlyPayment', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.estMonthlyPayment).should('not.exist');
    })
})

Cypress.Commands.add('SliderClickAdjust', () =>{
    cy.fixture("elements").then((element) => {
        
        const currentValue = 10000;
        const targetValue = 20000;
        const increment = 1000;
        const step = (targetValue - currentValue)/increment;
        const arrows = '{rightArrow}'.repeat(step);
        
        cy.get(element.slider).should('have.attr', 'aria-valuenow', 10000).type(arrows);
        cy.get(element.slider).should('have.attr', 'aria-valuenow', 20000)
    })
})

Cypress.Commands.add('DropdownLoanAdjust', () =>{
    cy.fixture("elements").then((element) => {
        cy.get("select").select("exceptional").invoke("val").should("eq", "exceptional");
    })
})

Cypress.Commands.add('CreditCardPayoffTab', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.creditCardPayoff).click();
    })
})

Cypress.Commands.add('InputValues', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.creditCardBalance).type('10000');
        cy.get(element.interestRate).type('10');
        cy.get(element.monthlyPayments).type('1000');
    })
})

Cypress.Commands.add('InputNonNumericalValues', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.creditCardBalance).type('.');
        cy.get(element.interestRate).type('.');
        cy.get(element.monthlyPayments).type('.');
    })
})

Cypress.Commands.add('InputNotValid', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.alertPayments).should('be.visible');
    })
})

Cypress.Commands.add('InputNewValues', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.creditCardBalance).type('15000');
        cy.get(element.interestRate).type('15');
        cy.get(element.monthlyPayments).type('1500');
    })
})

Cypress.Commands.add('ValuesInsertedCorrectly', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.alertPayments).should('not.exist');
    })
})

Cypress.Commands.add('CalculatorEnabled', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.calculatorButtonPayoff).should('be.visible');
    })
})

Cypress.Commands.add('CalculatorClick', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.calculatorButtonPayoff).click();
    })
})

Cypress.Commands.add('TablePayoffVisible', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.expectedTablePayoff).should('be.visible');
    })
})

Cypress.Commands.add('TableVisibleElements', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyPaymentTableField).should('be.visible');
        cy.get(element.totalAmountPaid).should('be.visible');
        cy.get(element.importantTableFields).should('be.visible');
    })
})
let text1 = '';
let text2 = '';
let text3 = '';
Cypress.Commands.add('TakeElementsTable', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyPaymentTableField).find('p').each(($p) => {
            text1 = $p.text();
        });
        cy.get(element.totalAmountPaid).find('p').each(($p) => {
            text2 = $p.text();
        });
        cy.get(element.importantTableFields).find('p').each(($p) => {
            text3 = $p.text();
        });
    })
})

let text4 = '';
let text5 = '';
let text6 = '';
Cypress.Commands.add('TakeNewElementsTable', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyPaymentTableField).find('p').each(($p) => {
            text4 = $p.text();
        });
        cy.get(element.totalAmountPaid).find('p').each(($p) => {
            text5 = $p.text();
        });
        cy.get(element.importantTableFields).find('p').each(($p) => {
            text6 = $p.text();
        });
    })
})

Cypress.Commands.add('CompareOldAndNewValues', () =>{
    if (text1 === text4 && text2 === text5 && text3 === text6){
        cy.log('TABLE NOT UPDATED');
        expect(true).to.be.false;
    }
    else{
        cy.log('TABLE UPDATED!');
        expect(true).to.be.true;
    }
})

Cypress.Commands.add('DashboardPayoff', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.dashboardGraphPayoff).should('be.visible');
    })
})

Cypress.Commands.add('DebtToIncomeTab', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.debtToIncome).click();
    })
})

Cypress.Commands.add('ItemizeMyDebts', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.itemizeDebtButton).click();
    })
})

Cypress.Commands.add('ItemizeMyIncomes', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.itemizeIncomeButton).click();
    })
})

Cypress.Commands.add('AdditionalDisplayed', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.itemizedAdditionalFields).should('be.visible');
    })
})

Cypress.Commands.add('NonNumericalValuesInput', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualIncome).type('.', {force: true});
        cy.get(element.monthlyDebt).type('""""');
        cy.get(element.alertPayments).should('be.visible');
        cy.log('error message is displaying!');
        
    })
})

let inputDebt = '60';
Cypress.Commands.add('InputDebtValues', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyRentPayment).type(inputDebt);
        cy.get(element.monthlyMortgagePayment).type(inputDebt);
        cy.get(element.monthlyLoanLeasePayment).type(inputDebt);
        cy.get(element.monthlyCreditCardPayment).type(inputDebt); 
        cy.get(element.monthlyPersonalLoanPayment).type(inputDebt);
        cy.get(element.otherMonthlyDebtPayment).type(inputDebt);   
    })
})

let inputAnnual = '80';
Cypress.Commands.add('InputAnnualValues', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualSalaryWages).type(inputAnnual);
        cy.get(element.annualAverageCommission).type(inputAnnual);
        cy.get(element.annualDividendIncome).type(inputAnnual);
        cy.get(element.annualAlimony).type(inputAnnual); 
        cy.get(element.annualChildSupport).type(inputAnnual);
        cy.get(element.annualRetirement).type(inputAnnual);
        cy.get(element.annualRealEstate).type(inputAnnual);
        cy.get(element.otherAnnualIncome).type(inputAnnual);
    })

})

Cypress.Commands.add('InputAnnualValuesNotVisible', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualSalaryWages).should('not.exist');
        cy.get(element.annualAverageCommission).should('not.exist');
        cy.get(element.annualDividendIncome).should('not.exist');
        cy.get(element.annualAlimony).should('not.exist');
        cy.get(element.annualChildSupport).should('not.exist');
        cy.get(element.annualRetirement).should('not.exist');
        cy.get(element.annualRealEstate).should('not.exist');
        cy.get(element.otherAnnualIncome).should('not.exist');
    })

})

Cypress.Commands.add('CheckIfNotEmpty', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyRentPayment).should('contain.value', inputDebt);
        cy.get(element.monthlyMortgagePayment).should('contain.value', inputDebt);
        cy.get(element.monthlyLoanLeasePayment).should('contain.value', inputDebt);
        cy.get(element.monthlyCreditCardPayment).should('contain.value', inputDebt);
        cy.get(element.monthlyPersonalLoanPayment).should('contain.value', inputDebt);
        cy.get(element.otherMonthlyDebtPayment).should('contain.value', inputDebt); 
    })
})

Cypress.Commands.add('ClickCalculatorDebt', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.calculatorButtonDebt).click();
    })
})

Cypress.Commands.add('CheckCalculatorDebt', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.calculatorButtonDebt).should('be.visible');
    })
})

Cypress.Commands.add('CalculatorDebtNotExist', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.calculatorButtonDebt).should('not.exist');
    })
})

Cypress.Commands.add('CheckingSumVisible', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.calculatorSumResult).should('be.visible');
    })
})

Cypress.Commands.add('CheckingSumAfterClosing', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualIncome).should('contain.value', '640');
        cy.get(element.monthlyDebt).should('contain.value', '360');
    })
})

Cypress.Commands.add('AnnualIncomeTyping', (annualIncome) =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualIncome).type(annualIncome);
    })
})

Cypress.Commands.add('AnnualIncomeDisabled', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualIncome).should('be.disabled');
        cy.log('Annual Income Disabled.');
    })
})

Cypress.Commands.add('AnnualIncomeTyping2', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualIncome).type('5000');
    })
})

Cypress.Commands.add('AnnualIncomeSpecific', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualIncome).type('120000');
    })
})

Cypress.Commands.add('AnnualIncomeModify', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualIncome).type('150000');
    })
})

Cypress.Commands.add('AnnualIncomeErasing', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.annualIncome).clear();
    })
})

Cypress.Commands.add('MonthlyDebtTyping', (monthlyDebt) =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyDebt).type(monthlyDebt);
    })
})

Cypress.Commands.add('MonthlyDebtTyping2', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyDebt).type('100');
    })
})

Cypress.Commands.add('MonthlyDebtSpecific', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyDebt).type('1000');
    })
})

Cypress.Commands.add('MonthlyDebtModify', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyDebt).type('500');
    })
})

Cypress.Commands.add('MonthlyDebtErasing', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyDebt).clear();
    })
})

Cypress.Commands.add('RatingCheck', (rating) =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.ratingText).then(($span) => {
            const ratingString = $span.text().slice(3);

            if(rating.trim() === ratingString.trim()){
                cy.log("texts are equal");
                expect(true).to.be.true;
            }
            else{
                cy.log("texts are not equal");
                expect(true).to.be.false;
            }
        })
    })
})

Cypress.Commands.add('RatioBubbleVisible', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.ratioBubble).should('be.visible');
    })
})

Cypress.Commands.add('RatioBubbleResult', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.ratioBubble).then(($span) => {
            const textBubble = $span.text().slice(27);
            cy.log(textBubble);
            if (textBubble.trim() === '10%'.trim()){
                cy.log('The result is 10% !')
                expect(true).to.be.true;
            }
            else{
                cy.log('TEXTS ARE NOT EQUAL!')
            }
        })
    })
})

Cypress.Commands.add('RatioBubbleResultModify', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.ratioBubble).then(($span) => {
            const textBubble = $span.text().slice(27);
            cy.log(textBubble);
            if (textBubble.trim() === '4%'.trim()){
                cy.log('The result is 4% !')
                expect(true).to.be.true;
            }
            else{
                cy.log('TEXTS ARE NOT EQUAL!')
            }
        })
    })
})

Cypress.Commands.add('AnnualValuesVisible', () =>{
    var i = 0;
    cy.fixture("elements").then((element) => {
        cy.get(element.annualSalaryWages).should('be.visible');
        cy.get(element.annualAverageCommission).should('be.visible');
        cy.get(element.annualDividendIncome).should('be.visible');
        cy.get(element.annualAlimony).should('be.visible'); 
        cy.get(element.annualChildSupport).should('be.visible');
        cy.get(element.annualRetirement).should('be.visible');
        cy.get(element.annualRealEstate).should('be.visible');
        cy.get(element.otherAnnualIncome).should('be.visible');
    })

})

Cypress.Commands.add('MonthlyDebtVisible', () =>{
    cy.fixture("elements").then((element) => {
        cy.get(element.monthlyRentPayment).should('be.visible');
        cy.get(element.monthlyMortgagePayment).should('be.visible');
        cy.get(element.monthlyLoanLeasePayment).should('be.visible');
        cy.get(element.monthlyCreditCardPayment).should('be.visible');
        cy.get(element.monthlyPersonalLoanPayment).should('be.visible');
        cy.get(element.otherMonthlyDebtPayment).should('be.visible'); 
    })
})

//===============================================================================================================================================
