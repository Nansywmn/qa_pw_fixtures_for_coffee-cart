import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  const price = priceFormatStr(COFFEE_PRICES.cappuccino);

  await menuPage.assertCappuccinoCupCostHasValue(price);
});
