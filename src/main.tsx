import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "./index.css"; // Removido para carregamento assíncrono no index.html

createRoot(document.getElementById("root")!).render(<App />);