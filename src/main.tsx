import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("No element with id 'root'");
}
const root = createRoot(container);

root.render(<App />);
