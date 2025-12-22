export class CartPage{

    constructor(page){

        this.page = page
        this.cartTableProductNameLoc = page.locator("h3:has-text('ADIDAS ORIGINAL')")
        this.checkoutPageBtnLoc = page.locator("text=Checkout");

    }

    async verifyVisibilityOfCartedProduct(){

        await this.cartTableProductNameLoc.first().waitFor();
        const bool = await this.cartTableProductNameLoc.isVisible();
        return bool
    }

    async navigateToCheckout(){

        await this.checkoutPageBtnLoc.click();
    }
}