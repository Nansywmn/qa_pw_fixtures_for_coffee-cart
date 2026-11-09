import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const price = priceFormatStr(COFFEE_PRICES.cappuccino);
  const priceWithCount = unitPriceFormatStr(COFFEE_PRICES.cappuccino, 1);

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(priceWithCount);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(price);
});
