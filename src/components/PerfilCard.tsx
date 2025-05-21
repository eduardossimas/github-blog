import { ArrowSquareUpRight, Buildings, GithubLogo, Users } from 'phosphor-react';
import { useUser } from '../hooks/useUser';

export function PerfilCard() {

    const { user, loading, error } = useUser();

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center px-10 py-8 bg-base-profile rounded-xl shadow-2xl">
                <p className="text-base-text">Loading...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center px-10 py-8 bg-base-profile rounded-xl shadow-2xl">
                <p className="text-base-text">Error: {error}</p>
            </div>
        )
    }
    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center px-10 py-8 bg-base-profile rounded-xl shadow-2xl">
                <p className="text-base-text">User not found</p>
            </div>
        );
    }

    const { name, login, company, followers, html_url, bio } = user;
    const userName = name || '';
    const userLogin = login || '';
    const userBio = bio || 'Not available';
    const userPage = html_url || '';
    const userCompany = company || 'Not available';
    const userFollowers = followers || 0;
    const userAvatar = user.avatar_url || '';


    return (
        <div className="flex flex-col items-center justify-center px-6 sm:px-10 py-8 bg-base-profile rounded-xl shadow-2xl w-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full">
                <img src={userAvatar} className="w-32 h-32 sm:w-36 sm:h-36 rounded-lg" />
                <div className="flex flex-col w-full gap-2 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2 sm:gap-0">
                        <h1 className="text-2xl font-bold text-base-title font-primary">{userName}</h1>
                        <a
                            href={userPage}
                            className="flex gap-2 justify-center sm:justify-start items-center text-blue text-xs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GITHUB
                            <ArrowSquareUpRight size={12} className="text-blue" />
                        </a>
                    </div>
                    <p className='text-base-text text-base'>{userBio}</p>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 items-center sm:items-start'>
                        <div className='flex items-center gap-2'>
                            <GithubLogo size={18} weight='fill' className="text-base-label" />
                            <span className="text-base-text text-sm">{userLogin}</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Buildings size={18} weight='fill' className="text-base-label" />
                            <span className="text-base-text text-sm">{userCompany}</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Users size={18} weight='fill' className="text-base-label" />
                            <span className="text-base-text text-sm">{userFollowers} seguidores</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
