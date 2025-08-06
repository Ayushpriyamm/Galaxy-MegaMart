import { Route, Routes } from "react-router-dom";



import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import LoginPage from "./pages/login";
import ProtectedRoutes from "./components/protectedRoutes";
import Profile from "./pages/userProfile/profile";
import PersonalInfo from "./pages/userProfile/PersonalInfo";
import Orders from "./pages/userProfile/Orders";
import Payment from "./pages/userProfile/Payment";
import PasswordManager from "./pages/userProfile/PasswordManager";
import Shop from "./pages/shop";
import Cart from "./pages/Cart";

function App() {

  return (

    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<Shop/>} path="/shop"/>
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />}  >
          <Route path="personal" element={<PersonalInfo />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payment" element={<Payment />} />
          <Route path="password" element={<PasswordManager />} />
        </Route>
        <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>



  );
}

export default App;
