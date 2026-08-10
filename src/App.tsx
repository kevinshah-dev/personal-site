import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
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
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <Header />
        <Home />
      </div>
    </MotionConfig>
  );
}
