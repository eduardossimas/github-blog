import { formatDate, getFirstSectionFromMarkdown } from '../utils/formatter'
import { useNavigate } from 'react-router-dom';

interface CardProps {
    id: number;
    title: string;
    body: string;
    createdAt: string;
}

export function Card({ title, body, createdAt, id }: CardProps) {
    const navigate = useNavigate()

    const formattedDate = formatDate(createdAt)
    const formattedBody = getFirstSectionFromMarkdown(body)

    return (
        <button 
            className="p-8 bg-base-post rounded-lg cursor-pointer hover:bg-base-profile transition-colors duration-300"
            onClick={() => navigate(`/post/${id}`)}
        >
            <div className="flex lg:justify-between items-start gap-4 lg:flex-row flex-col">
                <h3 className="text-left text-lg text-base-title font-bold leading-relaxed lg:w-4/5">{title}</h3>
                <span className="text-sm text-base-span">{formattedDate}</span>
            </div>
            <p className="text-base-text text-sm mt-2 line-clamp-4 leading-relaxed text-left">
                {formattedBody}
            </p>
        </button>
    )
}