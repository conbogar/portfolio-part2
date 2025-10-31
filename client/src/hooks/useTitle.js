import { useEffect } from 'react';

export function useTitle(title) {
    useEffect(() => {
        document.title = title ? `${title} - My Portfolio` : 'My Portfolio';
    }, [title]);
}