import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Swag Labs - Fluxo de Autenticação', () => {
  
  test('Deve realizar login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Valida se o usuário foi redirecionado para a página de inventário
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('Deve exibir erro ao logar com usuário bloqueado', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    // Valida se a mensagem de erro apareceu na tela
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });

});