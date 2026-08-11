import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;

    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView();
    });
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <Home />
    </div>
  );
}
