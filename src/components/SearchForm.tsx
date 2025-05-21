import { useState, useContext, useEffect } from 'react';
import { PostContext } from "../context/PostContext";

interface SearchFormProps {
    publicationsCount: number;
}

export function SearchForm( {publicationsCount}: SearchFormProps) {

    const [search, setSearch] = useState('');

    const { fetchPost } = useContext(PostContext);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchPost(search);
        }, 500); // 500ms de delay por causa API do Github

        return () => clearTimeout(delayDebounce);
    }, [search]);

    return (
        <div className="mt-18 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <h1 className="text-md font-bold text-base-subtitle leading-relaxed font-primary">Publicações</h1>
                <span className="text-sm text-base-span">{publicationsCount} publicações</span>
            </div>

            <input
                type="text"
                className="w-full py-3 px-4 bg-base-input rounded-lg border border-base-border text-base-text placeholder:text-base-label focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                placeholder="Buscar conteúdo"
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}