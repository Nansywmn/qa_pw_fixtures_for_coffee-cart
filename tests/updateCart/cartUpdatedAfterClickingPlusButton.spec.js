import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();
  const espressoPrice = priceFormatStr(COFFEE_PRICES.espresso);
  const cappuccinoPrice = priceFormatStr(COFFEE_PRICES.cappuccino);
  const twoEspresso = priceFormatStr(COFFEE_PRICES.espresso * 2);
  const twoCappuccino = priceFormatStr(COFFEE_PRICES.cappuccino * 2);
  const total = priceFormatStr(
    COFFEE_PRICES.espresso * 2 + COFFEE_PRICES.cappuccino * 2,
  );

  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoPrice);

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(twoEspresso);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(cappuccinoPrice);

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(twoCappuccino);
  await cartPage.assertEspressoTotalCostContainsCorrectText(twoEspresso);

  await cartPage.assertTotalCheckoutContainsValue(total);
});
