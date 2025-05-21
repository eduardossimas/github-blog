import { useState } from 'react';
import { api } from '../lib/axios';
import { useEffect } from 'react';
import { createContext } from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    html_url?: string;
    comments?: number;
    user?: {
        login: string;
    }
}

interface PostContextType {
    post: Post[];
    loading: boolean;
    error: string | null;
    fetchPost: (query?: string) => Promise<void>;
    fetchPostById: (id: number) => Promise<Post | undefined>;
}

export const PostContext = createContext({} as PostContextType);

export function PostProvider({ children }: { children: React.ReactNode }) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPost = async (query?: string) => {
        setLoading(true);
        setError(null);

        try {
            const q = query && query.trim().length > 0
                ? `${query} repo:eduardossimas/github-blog`
                : `repo:eduardossimas/github-blog`;

            const response = await api.get('/search/issues', {
                params: { q },
            });

            const mappedPosts = response.data.items.map((item: any) => ({
                id: item.number,
                title: item.title,
                body: item.body,
                createdAt: item.created_at,
            }));

            setPosts(mappedPosts);
        } catch (err) {
            setError('Failed to fetch post data');
        } finally {
            setLoading(false);
        }
    }

    const fetchPostById = async (id: number) => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.get(`/repos/eduardossimas/github-blog/issues/${id}`);
            const post = {
                id: response.data.number,
                title: response.data.title,
                body: response.data.body,
                createdAt: response.data.created_at,
                html_url: response.data.html_url,
                comments: response.data.comments,
                user: {
                    login: response.data.user.login,
                },
            } as Post;
            return post;
        } catch (err) {
            setError('Failed to fetch post data');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div>
            <PostContext.Provider value={{ post: posts, loading: loading, error: error, fetchPost, fetchPostById }}>
                {children}
            </PostContext.Provider>
        </div>
    )
}