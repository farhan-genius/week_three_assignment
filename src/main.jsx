import App from './App.jsx'
import { createRoot } from "react-dom/client"

const colors = ["red", "blue", "green","orange","yellow","purple","pink"]
const root = createRoot(document.getElementById("root"))
root.render(<App colors={colors} />)