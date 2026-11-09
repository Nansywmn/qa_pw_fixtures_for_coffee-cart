import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();
  const espressoPrice = priceFormatStr(COFFEE_PRICES.espresso);
  const americanoPrice = priceFormatStr(COFFEE_PRICES.americano);
  const cappuccinoPrice = priceFormatStr(COFFEE_PRICES.cappuccino);
  const mochaDiscountedPrice = priceFormatStr(COFFEE_PRICES.mocha / 2);

  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoPrice);
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    mochaDiscountedPrice,
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(cappuccinoPrice);
  await cartPage.assertAmericanoTotalCostContainsCorrectText(americanoPrice);
});
