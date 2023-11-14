'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const Switcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >Dark Mode</button>
    );
};