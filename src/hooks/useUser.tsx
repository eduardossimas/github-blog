import { useState } from 'react';
import type { User } from '../types/User';
import { useEffect } from 'react';
import {api} from '../lib/axios';

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.get('/users/eduardossimas');
            setUser(response.data);
        } catch (err) {
            setError('Failed to fetch user data');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return { user, loading, error };
}