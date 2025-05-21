import { Card } from "../components/Card";
import { PerfilCard } from "../components/PerfilCard";
import { SearchForm } from "../components/SearchForm";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export function Home() {

    const { post, loading, error } = useContext(PostContext);

    const coutnPost = post.length;

    return (
        <div>
            <PerfilCard />
            <SearchForm publicationsCount={coutnPost}  />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                {loading && <p className="text-center text-base-text">Loading...</p>}
                {error && <p className="text-center text-base-text">Error: {error}</p>}
                {post.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        body={item.body}
                        createdAt={item.createdAt}
                    />
                ))}
            </div>
        </div>
    )
}