import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const price = priceFormatStr(COFFEE_PRICES.espresso);
  const priceWithCount = unitPriceFormatStr(COFFEE_PRICES.espresso, 1);

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(priceWithCount);
  await cartPage.assertEspressoTotalCostContainsCorrectText(price);
});
