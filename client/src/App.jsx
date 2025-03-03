import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Adminlayout from "./components/admin-view/layout";
import Admindashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import Adminorder from "./pages/admin-view/order";
import Adminfeature from "./pages/admin-view/feature";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import Unauth from "./pages/unauth-page/Unauth";
import CheckAuth from "./components/common/check-auth";

function App() {

  const isAuthenticated = false;
  const user =null;
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>
          <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Adminlayout />
            </CheckAuth>}>
            <Route path="dashboard" element={<Admindashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<Adminorder />} />
            <Route path="features" element={<Adminfeature />} />
          </Route>

          <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>}>
          <Route path="" element={<ShoppingHome />}/>
          <Route path="listing" element={<ShoppingListing />}/>
          <Route path="checkout" element={<ShoppingCheckout />}/>
          <Route path="checkout" element={<ShoppingCheckout />}/>
          <Route path="account" element={<ShoppingAccount />}/>



          </Route>


          <Route path="*" element={<NotFound />} />
          <Route path="/unauth-page" element={<Unauth />} />


        </Routes>
      </div>
    </>
  );
}

export default App;
