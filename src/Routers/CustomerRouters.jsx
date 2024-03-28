import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/Cart' element={<Cart />}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
                <Route path='/product/:ProductId' element={<ProductDetails />}></Route>
                <Route path='/Checkout' element={<Checkout />}></Route>
                <Route path='/Account/Order' element={<Order />}></Route>
                <Route path='/Account/Order/:OrderId' element={<OrderDetails />}></Route>
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters