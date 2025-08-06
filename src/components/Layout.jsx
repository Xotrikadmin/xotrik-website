// // src/components/Layout.jsx
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { Outlet } from "react-router-dom";
// import Loader from "./Loader";
// import { useState, useEffect } from "react";

// export default function Layout() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-primary text-white">
//       {loading && <Loader />}
//       <Navbar />
//       <main className="flex-1 pt-20 w-full">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";
import { useState, useEffect } from "react";

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-primary text-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      <Navbar />
      <main className="flex-1 pt-20 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
