//===============================================================================================================================================
//General Commands

Cypress.Commands.add("login", (username, password ) => {
    cy.visit(Cypress.env('loginUrl'))
    const sessionId = crypto.randomUUID();
    cy.request({
        method: 'POST',
        url: Cypress.env('authUrl'),
        headers: {
            'Content-Type': 'application/json',
            'auth-session-id': sessionId
        },
        body:
          {
              username: username,
              password: password
          }
    }).then((res) => {
        sessionStorage.setItem('auth_identity_access_token', res.body.IdToken);
        sessionStorage.setItem('auth_identity_access_token_age', Date.now().toString())
        cy.setCookie('X-Access-Token', `Bearer ${res.body.IdToken}`)
        cy.setCookie('X-Refresh-Token', res.body.RefreshToken)
        cy.setCookie('auth-session-id', sessionId)
        cy.setCookie('be-auth', 'Y')
        cy.setCookie('signin-session-id', crypto.randomUUID())
        cy.task('getCid', res.body.IdToken).then(cid=>{
         cy.visit(`${Cypress.env('redirectUrl')}?cid=${cid}`)
        })


    })
})

Cypress.Commands.add('LoginPage', () =>{
    cy.visit('/');
})

Cypress.Commands.add('ClickSignInButton', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.signInButton).click();
    })
})

Cypress.Commands.add('SetUsername', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.textField).type(element.username);
    })
})

Cypress.Commands.add('SetPassword', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.passwordTextField).type(element.password);
    })
})

Cypress.Commands.add('ClickLoginButton', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.button).click();
    })
})

Cypress.Commands.add('PopupAssert', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.popupGuideline).should('be.visible');
    })
})

Cypress.Commands.add('PopupClose', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.closeGuideline).click();
    })
})

Cypress.Commands.add('FinancialHealth', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.financialHeader).click();
    })
})

Cypress.Commands.add('IconHamburguer', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.iconHamburguer).click();
    })
})

//===============================================================================================================================================
//Article's command

Cypress.Commands.add('KnowledgeCenter', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.knowledgeCenter).click();
    })
})

Cypress.Commands.add('ArticleSearchEmpty', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.textField).should('be.empty');
    })
})

Cypress.Commands.add('ArticlesDisplaying', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.articlesFullDisplaying).should('be.visible');
    })
})

let mseconds = [];
Cypress.Commands.add('OpenArticles', () =>{
    
    var i = 0;
    cy.fixture("elementsArticle").then((element) => {
        
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
    cy.fixture("elementsArticle").then((element) => {
        cy.wait(5000).get(element.article2).click({force: true});
    })
})

Cypress.Commands.add('KnowledgeCenterPage', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.goToKnowledgePage2).click();
    })
})

Cypress.Commands.add('ArticleClick', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.article2).click();
    })
})

Cypress.Commands.add('ArticlePage', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.articlePage).should('be.visible');
    })
})

Cypress.Commands.add('ArticleElements', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.pageHeroImage).should('be.visible');
        cy.get(element.contentText).should('be.visible');
        cy.get(element.contentLinks).should('be.visible');
    })
})

Cypress.Commands.add('BackToKnowledgePage', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.goToKnowledgePage).click();
    })
})

Cypress.Commands.add('SubmitSearch', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.textField).type('Credit Card');
        cy.get(element.buttonSearch).click();
    })
})

Cypress.Commands.add('SubmitSecondSearch', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.textField).type('COVID');
        cy.get(element.buttonSearch).click();
    })
})

Cypress.Commands.add('ClearSearch', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.textField).clear();
        cy.get(element.button).click();
        cy.get(element.textField).should('be.empty');
    })
})

Cypress.Commands.add('ArticlesMatchingSearch', (searchTerm) =>{
    // cy.fixture("elementsArticle").then((element) => {
    //     cy.get(element.thumbHeaderTitle).find('h2').each(($h2) => {
    //         const text = $h2.text();
    //         if(text.includes('Credit Card')){
    //             cy.log('Cointains text!');
    //             expect(true).to.be.true;
    //         }
    //         else{
    //             cy.log('Do not contain text!');
    //             expect(true).to.be.false;
    //         }
    //     })
    // })
    const searchHeader = cy.contains(`Search results for: ${searchTerm}`).then(el=>{
            expect(el.text()).includes(searchTerm)

    })
})

Cypress.Commands.add('TotalArticles', () =>{
    cy.fixture("elementsArticle").then((element) => {
        let quantityVisibleArticles = 30;
        cy.get(element.articlesFullDisplaying).find('ul').should('have.length', quantityVisibleArticles);
    })
})

Cypress.Commands.add('NextPage', () =>{
    cy.fixture("elementsArticle").then((element) => {
        cy.get(element.nextPage).click();
    })
})

Cypress.Commands.add('RecentBlogLink', () =>{
        cy.contains('What is an Online Loan?').click();
})

//===============================================================================================================================================
//Loan Table (Calculator's) Commands

Cypress.Commands.add('Calculators', () =>{
    cy.fixture("elementsGeneral").then((element) => {
        cy.get(element.calculators).click();
    })
})

Cypress.Commands.add('SliderClick', () =>{
    cy.fixture("elementsLoan").then((element) => {
        
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
    cy.fixture("elementsLoan").then((element) => {
        cy.get(element.loan).should('be.visible');
    })
})

Cypress.Commands.add('ClickTermButton', () =>{
    cy.fixture("elementsLoan").then((element) => {
        cy.get(element.termButton).click();
    })
})

Cypress.Commands.add('ClickTermButtonAdjust', () =>{
    cy.fixture("elementsLoan").then((element) => {
        cy.get(element.termButtonAdjust).click();
    })
})

Cypress.Commands.add('DropdownLoan', () =>{
    cy.fixture("elementsLoan").then((element) => {
        cy.get("select").select("veryGood").invoke("val").should("eq", "veryGood");
    })
})

Cypress.Commands.add('ClickCalculate', () =>{
    cy.fixture("elementsLoan").then((element) => {
        cy.get(element.calculateButton).click();
    })
})

Cypress.Commands.add('EstimateMonthlyPayment', () =>{
    cy.fixture("elementsLoan").then((element) => {
        cy.get(element.estMonthlyPayment).should('be.visible');
    })
})

let valueText1 = '';
Cypress.Commands.add('EstimateMonthlyPaymentValues', () =>{
    cy.fixture("elementsLoan").then((element) => {
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
    cy.fixture("elementsLoan").then((element) => {
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
    cy.fixture("elementsLoan").then((element) => {
        cy.get(element.estMonthlyPayment).should('not.exist');
    })
})

Cypress.Commands.add('SliderClickAdjust', () =>{
    cy.fixture("elementsLoan").then((element) => {
        
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
    cy.fixture("elementsLoan").then((element) => {
        cy.get("select").select("exceptional").invoke("val").should("eq", "exceptional");
    })
})

//===============================================================================================================================================
//Credit Payoff Table (Calculator's) Commands

Cypress.Commands.add('CreditCardPayoffTab', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.creditCardPayoff).click();
    })
})

Cypress.Commands.add('InputValues', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.creditCardBalance).type('10000');
        cy.get(element.interestRate).type('10');
        cy.get(element.monthlyPayments).type('1000');
    })
})

Cypress.Commands.add('InputNonNumericalValues', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.creditCardBalance).type('.');
        cy.get(element.interestRate).type('.');
        cy.get(element.monthlyPayments).type('.');
    })
})

Cypress.Commands.add('InputNotValid', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.alertPayments).should('be.visible');
    })
})

Cypress.Commands.add('InputNewValues', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.creditCardBalance).type('15000');
        cy.get(element.interestRate).type('15');
        cy.get(element.monthlyPayments).type('1500');
    })
})

Cypress.Commands.add('ValuesInsertedCorrectly', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.alertPayments).should('not.exist');
    })
})

Cypress.Commands.add('CalculatorEnabled', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.calculatorButtonPayoff).should('be.visible');
    })
})

Cypress.Commands.add('CalculatorClick', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.calculatorButtonPayoff).click();
    })
})

Cypress.Commands.add('TablePayoffVisible', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.expectedTablePayoff).should('be.visible');
    })
})

Cypress.Commands.add('TableVisibleElements', () =>{
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.monthlyPaymentTableField).should('be.visible');
        cy.get(element.totalAmountPaid).should('be.visible');
        cy.get(element.importantTableFields).should('be.visible');
    })
})
let text1 = '';
let text2 = '';
let text3 = '';
Cypress.Commands.add('TakeElementsTable', () =>{
    cy.fixture("elementsPayoff").then((element) => {
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
    cy.fixture("elementsPayoff").then((element) => {
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
    cy.fixture("elementsPayoff").then((element) => {
        cy.get(element.dashboardGraphPayoff).should('be.visible');
    })
})

//===============================================================================================================================================
//Debt To Income Table (Calculator's) Commands

Cypress.Commands.add('DebtToIncomeTab', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.debtToIncome).click();
    })
})

Cypress.Commands.add('ItemizeMyDebts', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.itemizeDebtButton).click();
    })
})

Cypress.Commands.add('ItemizeMyIncomes', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.itemizeIncomeButton).click();
    })
})

Cypress.Commands.add('AdditionalDisplayed', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.itemizedAdditionalFields).should('be.visible');
    })
})

Cypress.Commands.add('NonNumericalValuesInput', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.annualIncome).type('.', {force: true});
        cy.get(element.monthlyDebt).type('""""');
        cy.get(element.alertPayments).should('be.visible');
        cy.log('error message is displaying!');
        
    })
})

let inputDebt = '60';
Cypress.Commands.add('InputDebtValues', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
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
    cy.fixture("elementsDebtToIncome").then((element) => {
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
    cy.fixture("elementsDebtToIncome").then((element) => {
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
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.monthlyRentPayment).should('contain.value', inputDebt);
        cy.get(element.monthlyMortgagePayment).should('contain.value', inputDebt);
        cy.get(element.monthlyLoanLeasePayment).should('contain.value', inputDebt);
        cy.get(element.monthlyCreditCardPayment).should('contain.value', inputDebt);
        cy.get(element.monthlyPersonalLoanPayment).should('contain.value', inputDebt);
        cy.get(element.otherMonthlyDebtPayment).should('contain.value', inputDebt); 
    })
})

Cypress.Commands.add('ClickCalculatorDebt', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.calculatorButtonDebt).click();
    })
})

Cypress.Commands.add('CheckCalculatorDebt', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.calculatorButtonDebt).should('be.visible');
    })
})

Cypress.Commands.add('CalculatorDebtNotExist', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.calculatorButtonDebt).should('not.exist');
    })
})

Cypress.Commands.add('CheckingSumVisible', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.calculatorSumResult).should('be.visible');
    })
})

Cypress.Commands.add('CheckingSumAfterClosing', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.annualIncome).should('contain.value', '640');
        cy.get(element.monthlyDebt).should('contain.value', '360');
    })
})

Cypress.Commands.add('AnnualIncomeTyping', (annualIncome) =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.annualIncome).type(annualIncome);
    })
})

Cypress.Commands.add('AnnualIncomeDisabled', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.annualIncome).should('be.disabled');
        cy.log('Annual Income Disabled.');
    })
})

Cypress.Commands.add('AnnualIncomeTyping2', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.annualIncome).type('5000');
    })
})

Cypress.Commands.add('AnnualIncomeSpecific', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.annualIncome).type('120000');
    })
})

Cypress.Commands.add('AnnualIncomeModify', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.annualIncome).type('150000');
    })
})

Cypress.Commands.add('AnnualIncomeErasing', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.annualIncome).clear();
    })
})

Cypress.Commands.add('MonthlyDebtTyping', (monthlyDebt) =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.monthlyDebt).type(monthlyDebt);
    })
})

Cypress.Commands.add('MonthlyDebtTyping2', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.monthlyDebt).type('100');
    })
})

Cypress.Commands.add('MonthlyDebtSpecific', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.monthlyDebt).type('1000');
    })
})

Cypress.Commands.add('MonthlyDebtModify', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.monthlyDebt).type('500');
    })
})

Cypress.Commands.add('MonthlyDebtErasing', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.monthlyDebt).clear();
    })
})

Cypress.Commands.add('RatingCheck', (rating) =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
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
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.ratioBubble).should('be.visible');
    })
})

Cypress.Commands.add('RatioBubbleResult', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.ratioBubble).then(($span) => {
            const textBubble = $span.text().slice(27);
            cy.log(textBubble);
            if (textBubble.trim() === '10%'.trim()){
                cy.log('The result is 10% !');
                expect(true).to.be.true;
            }
            else{
                cy.log('TEXTS ARE NOT EQUAL!');
            }
        })
    })
})

Cypress.Commands.add('RatioBubbleResultModify', () =>{
    cy.fixture("elementsDebtToIncome").then((element) => {
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
    cy.fixture("elementsDebtToIncome").then((element) => {
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
    cy.fixture("elementsDebtToIncome").then((element) => {
        cy.get(element.monthlyRentPayment).should('be.visible');
        cy.get(element.monthlyMortgagePayment).should('be.visible');
        cy.get(element.monthlyLoanLeasePayment).should('be.visible');
        cy.get(element.monthlyCreditCardPayment).should('be.visible');
        cy.get(element.monthlyPersonalLoanPayment).should('be.visible');
        cy.get(element.otherMonthlyDebtPayment).should('be.visible'); 
    })
})

//===============================================================================================================================================
//Dashboard page

Cypress.Commands.add('DashboardPage', () =>{
    cy.fixture("elementsDashboard").then((element) => {
        cy.get(element.dashboard).click();
    });
})

Cypress.Commands.add('MyFinancesPage', () =>{
    cy.fixture("elementsMyFinances").then((element) => {
        cy.get(element.myFinances).click();
    });
})

Cypress.Commands.add('MoneyManagerWindow', () =>{
    cy.fixture("elementsMyFinances").then((element) => {
        cy.wait(8000).get(element.moneyManagerWindow).should('be.visible');
    });
})

// let accountTitle = 'Weekend spending summary';
// Cypress.Commands.add('AccountHomepage', () =>{
//     cy.fixture("elementsMyFinances").then((element) => {
//         cy.get(element.accountHomepage).find('h2').each(($h2) => {
//             const wordScrapped = $h2.text();
//             if (accountTitle.trim() === wordScrapped.trim()){
//                 cy.log('There is an account registered');
//                 expect(true).to.be.true;
//             }
//             else{
//                 cy.log('There is no account registered');
//                 expect(true).to.be.false;
//             } 
//         });
//     });
// })

Cypress.Commands.add('AccountHomepage', () =>{
    cy.fixture("elementsMyFinances").then((element) => {
        cy.get(element.accountHomepage).should('be.visible');
        //cy.contains('Weekend spending summary');
    });
})

Cypress.Commands.add('MyFinancesTab', () =>{
    cy.fixture("elementsMyFinances").then((element) => {
        cy.get(element.myFinancesTab).click();
    });
})

Cypress.Commands.add('AllAccountsDisplaying', () =>{
    cy.fixture("elementsMyFinances").then((element) => {
        //cy.get(element.allAccountsRegistered).should('be.visible');
        cy.get('iframe').its('0.contentDocument.body').should('be.visible');
    });
})

const getIframeDocument = () => {
    return cy
    .get('iframe[data-test-id="mx-widget-iframe"]')
    // Cypress yields jQuery element, which has the real
    // DOM element under property "0".
    // From the real DOM iframe element we can get
    // the "document" element, it is stored in "contentDocument" property
    // Cypress "its" command can access deep properties using dot notation
    // https://on.cypress.io/its
    .its('0.contentDocument').should('exist');
  }
  
const getIframeBody = () => {
    // get the document
    return getIframeDocument()
    // automatically retries until body is loaded
    .its('body').should('not.be.undefined')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap);
  }

Cypress.Commands.add('AllAccountsClicking', () =>{
    cy.fixture("elementsMyFinances").then((element) => {
        //cy.get(element.allAccountsRegistered).should('be.visible');
        getIframeBody().find('#run-button').should('have.text', 'Try it').click()
        getIframeBody().find('#result').should('include.text', '"delectus aut autem"')
    });
})

Cypress.Commands.add('Insights', () =>{
    cy.fixture("elementsInsights").then((element) => {
        cy.get(element.insights).click();
    });
})

Cypress.Commands.add('CallToActionVisible', () =>{
    cy.fixture("elementsInsights").then((element) => {
        cy.get(element.callToAction).should('be.visible');
    });
})

Cypress.Commands.add('LearnMoreClick', () =>{
    cy.fixture("elementsInsights").then((element) => {
        cy.get(element.learnMoreButton).should('be.visible').click();
    });
})

Cypress.Commands.add('ModalVisible', () =>{
    cy.fixture("elementsInsights").then((element) => {
        cy.get(element.modal).should('be.visible');
    });
})

Cypress.Commands.add('ClickOutside', () =>{
    cy.fixture("elementsInsights").then((element) => {
        cy.get(element.outside).click(0,0);
    });
})

Cypress.Commands.add('ClickOkay', () =>{
    cy.fixture("elementsInsights").then((element) => {
        cy.get(element.okayButton).click();
    });
})

Cypress.Commands.add('ClickClose', () =>{
    cy.fixture("elementsInsights").then((element) => {
        cy.get(element.closeButton).click();
    });
})

Cypress.Commands.add('ModalNotVisible', () =>{
    cy.fixture("elementsInsights").then((element) => {
        cy.get(element.modal).should('not.exist');
    });
})