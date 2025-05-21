import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark-dimmed.css";

import { IssueCard } from "../components/IssueCard";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";

interface Post {
    id: number;
    title: string;
    body: string;
    createdAt: string;
}

export function Post() {

    const { id } = useParams();
    const { fetchPostById, loading, error } = useContext(PostContext);

    const [post, setPost] = useState<Post>({
        id: 0,
        title: "",
        body: "",
        createdAt: "",
    });

    useEffect(() => {
        if (id) {
            fetchPostById(Number(id)).then((data) => {
                if (data) {
                    setPost(data);
                }
            });
        }
    }, [id]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>Nenhum post encontrado.</div>;

    return (
        <div>
            <IssueCard post={post} />
            <div className="p-10 prose prose-invert max-w-none">
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-5 mb-3" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                        code: ({ node, ...props }) => <code className="bg-gray-800 rounded px-1 py-0.5 text-sm" {...props} />,
                        pre: ({ node, ...props }) => <pre className="bg-gray-900 rounded p-4 overflow-x-auto mb-4" {...props} />,
                        a: ({ node, ...props }) => <a className="text-blue-400 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                        li: ({ node, ...props }) => <li className="ml-6 list-disc" {...props} />,
                    }}
                >
                    {post.body}
                </Markdown>
            </div>
        </div>
    );
}
