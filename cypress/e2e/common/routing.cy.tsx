import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Unauthorized', () => {
        it('Opening the main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Opening profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Opening a non-existent route', () => {
            cy.visit('/random');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Authorized', () => {
        beforeEach(() => {
            cy.login('admin', '111');
        });

        it('Opening profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Opening articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
