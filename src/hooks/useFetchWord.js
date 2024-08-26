import { useState, useEffect } from 'react';

export default function useFetchWord(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        async function fetchWordData(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Reponse status: ${response.status}`);
                }

                const data = await response.json();
                setData(data[0]);

                // REMOVE TIMER
                setTimeout(() => {
                    setLoading(null);
                }, "1000");
            } catch (error) {
                setLoading(null);
                setError(error);
            }
        }

        setLoading(true);
        fetchWordData(url);
    }, [url]);

    return [data, loading, error];
}