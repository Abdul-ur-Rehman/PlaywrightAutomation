import { test, expect } from "@playwright/test";
import { POManager } from "../pages/POManager";
import dataset from "../utils/placeholderTestData.json"



test("Browser Context Playwright Test", async ({ page }) => {

  const poManger = new POManager(page)

  const loginPage =  poManger.getLoginPage()
  await loginPage.goTo()
  await loginPage.validLogin(dataset.email, dataset.password)
  await page.waitForLoadState("networkidle");


  const dashboard = poManger.getDashboard()

  await dashboard.searchProductAddToCart(dataset.productName)

  await dashboard.navigateToCart()

  const cartPage = poManger.getCartPage()

  await cartPage.verifyVisibilityOfCartedProduct(dataset.productName)

  await cartPage.navigateToCheckout()

  const checkoutPage = poManger.getCheckoutPage()

  await checkoutPage.enterCVV(dataset.cvv)
  await checkoutPage.enterNameOnCard(dataset.name)

  await checkoutPage.verifyEmail(dataset.email)

  await checkoutPage.selectCountry(dataset.countryName)
  await checkoutPage.placeOrder()

  const thankYouPage = poManger.getThankyouPage()

  await thankYouPage.verifyOrderPlacement()

  const orderID = await thankYouPage.getOrderIdOnThankyouPage()
  console.log(orderID)

  await thankYouPage.navigateToMyOrdersPage()

  const myOrdersPage = poManger.getMyOrdersPage()

  await myOrdersPage.navigateToOrderDetailsPage(orderID)

  const orderDetailsPage = poManger.getOrderDetailsPage()

  await orderDetailsPage.verfiyOrderDetailsPageOrderId(orderID)

});
