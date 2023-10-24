import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import "./style.scss"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./pages/Social";
import Internship from "./pages/Internship";
import Login from "./pages/Login";




const Layout = () => {
  return (
    <>
      <Navbar isLogin={false} />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/official",
        element: <Home />
      }
      , {
        path: "/official/social",
        element: <Social />
      }
      , {
        path: "/official/trainee",
        element: <Internship />
      }
    ]
  }
  , {
    path: '/official/login',
    element: <Login />
  }
]);

function App() {

  return (
    <div className="app">
      <div className="container">
        {/* 所有数据路由器对象都会传递到此组件以呈现您的应用程序并启用其余的数据 API。 */}
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;
