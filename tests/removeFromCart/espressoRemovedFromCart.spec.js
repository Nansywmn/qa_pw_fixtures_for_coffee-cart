import { test } from '../fixtures/fixtures';

test('Check Espresso removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllEspressoButton();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
