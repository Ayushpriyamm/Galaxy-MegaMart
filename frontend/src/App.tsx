import { Route, Routes } from "react-router-dom";



import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import LoginPage from "./pages/login";
import ProtectedRoutes from "./components/protectedRoutes";
import Profile from "./pages/profile";


function App() {
  
  return (

      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<DocsPage />} path="/docs" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ProtectedRoutes/>}>
          <Route element={<Profile />} path="/profile" />
        </Route>
      </Routes>
      
   

  );
}

export default App;
