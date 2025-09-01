// import { Outlet } from "react-router-dom";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import Headers from "./Components/Header/Header";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//       <Toaster />
//     </>
//   );
// }

// export default App;

// import { Outlet, useLocation } from "react-router-dom";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import { Toaster } from "react-hot-toast";

// function App() {
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/login";

//   return (
//     <>
//       {!isLoginPage && <Header />}
//       <main>
//         <Outlet />
//       </main>
//       {!isLoginPage && <Footer />}
//       <Toaster />
//     </>
//   );
// }

// export default App;

import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isProfilePage = location.pathname === "/profile";

  return (
    <>
      {!isLoginPage && <Header isProfilePage={isProfilePage} />}
      <main>
        <Outlet />
      </main>
      {!isLoginPage && !isProfilePage && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
