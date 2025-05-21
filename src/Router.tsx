import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layout/DefaultLayout.tsx";
import { Home } from "./pages/Home.tsx";
import { Post } from "./pages/Post.tsx";

export function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<DefaultLayout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<Post />} />
                </Route>
            </Routes>
        </div>
    )
}