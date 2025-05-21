import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PostProvider } from "./context/PostContext";

export function App() {
  return (
    <BrowserRouter>
      <PostProvider>
        <Router />
      </PostProvider>
    </BrowserRouter>
  )
}