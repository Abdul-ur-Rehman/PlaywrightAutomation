import { CartPage } from "./CartPage"
import { CheckoutPage } from "./CheckoutPage"
import { Dashboard } from "./Dashboard"
import { LoginPage } from "./LoginPage"
import { MyOrdersPage } from "./MyOrdersPage"
import { OrderDetailsPage } from "./OrderDetailsPage"
import { ThankYouPage } from "./ThankYouPage"

export class POManager{

    constructor(page){

        this.page = page
        this.loginPage =  new LoginPage(this.page)
        this.dashboard = new Dashboard(this.page)
        this.cartPage = new CartPage(this.page)
        this.checkoutPage = new CheckoutPage(this.page)
        this.thankYouPage = new ThankYouPage(this.page)
        this.myOrdersPage = new MyOrdersPage(this.page)
        this.orderDetailsPage = new OrderDetailsPage(this.page)
    }


    getLoginPage(){

        return this.loginPage
    }

    getDashboard(){

        return this.dashboard
    }

    getCartPage(){

        return this.cartPage
    }

    getCheckoutPage(){

        return this.checkoutPage
    }

    getThankyouPage(){

        return this.thankYouPage
    }

    getMyOrdersPage(){

        return this.myOrdersPage
    }

    getOrderDetailsPage(){

        return this.orderDetailsPage
    }
}