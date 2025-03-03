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

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>
          <Route path="/admin" element={<Adminlayout />}>
            <Route path="dashboard" element={<Admindashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<Adminorder />} />
            <Route path="features" element={<Adminfeature />} />
          </Route>

          <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />}/>
          <Route path="listing" element={<ShoppingListing />}/>
          <Route path="checkout" element={<ShoppingCheckout />}/>
          <Route path="checkout" element={<ShoppingCheckout />}/>
          <Route path="account" element={<ShoppingAccount />}/>



          </Route>


          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
