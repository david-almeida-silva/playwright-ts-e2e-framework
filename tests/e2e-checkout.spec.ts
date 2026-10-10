import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Swag Labs - Fluxo de Compra (E2E)', () => {
  
  test('Deve realizar uma compra completa com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // 1. Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // 2. Adicionar produto e ir para o carrinho
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    // 3. Checkout (Passos diretos na página para simplificar o teste)
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('QA');
    await page.locator('[data-test="lastName"]').fill('Ninja');
    await page.locator('[data-test="postalCode"]').fill('123456');
    await page.locator('[data-test="continue"]').click();
    
    // 4. Finalizar compra
    await page.locator('[data-test="finish"]').click();

    // 5. Validação final do E2E
    const completeHeader = page.locator('.complete-header');
    await expect(completeHeader).toHaveText('Thank you for your order!');
  });

});