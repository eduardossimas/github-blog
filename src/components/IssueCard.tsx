import { GithubLogoIcon, LessThanIcon } from "@phosphor-icons/react";
import { ArrowSquareUpRight, Calendar, ChatCircle } from "phosphor-react";
import { formatDate, capitalizeFirstLetter } from "../utils/formatter";

interface Post {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    html_url?: string;
    comments?: number;
    user?: {
        login: string;
    };
}

interface IssueCardProps {
    post: Post;
}

export function IssueCard(post: IssueCardProps) {
    const { title, createdAt, comments, user, html_url } = post.post;

    const formattedDate = capitalizeFirstLetter(formatDate(createdAt))
    
    return (
        <div className="flex flex-col px-10 py-8 bg-base-profile rounded-xl shadow-2xl">
            <div className="flex flex-row justify-between w-full mb-5">
                <a 
                    href="../"
                    className="flex items-center gap-2 text-blue text-xs font-bold"
                >
                    <LessThanIcon size={12} className="text-blue" />
                    VOLTAR
                </a>
                <a
                    href={html_url}
                    className="flex gap-2 items-center text-blue text-xs font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VER NO GITHUB
                    <ArrowSquareUpRight size={12} className="text-blue" />
                </a>
            </div>

            <h1 className="text-xl font-bold text-base-title">{title}</h1>

            <div className="flex flex-row items-center gap-8 w-full mt-3">
                <div className="flex flex-row gap-2">
                    <GithubLogoIcon size={18} weight='fill' className="text-base-span" />
                    <span className="text-base-span text-sm">{user?.login}</span>
                </div>

                <div className="flex flex-row gap-2">
                    <Calendar size={18} weight='fill' className="text-base-span" />
                    <span className="text-base-span text-sm">{formattedDate}</span>
                </div>

                <div className="flex flex-row gap-2">
                    <ChatCircle size={18} weight='fill' className="text-base-span" />
                    <span className="text-base-span text-sm">{comments} comentários</span>
                </div>
            </div>
        </div>
    )
}