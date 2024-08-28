import { useState, useEffect } from 'react';

export default function useFetchWord(word) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        if (!word) {
            setData(null);
            setLoading(false);
            return;
        }

        async function fetchWordData(word) {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Reponse status: ${response.status}`);
                }

                const data = await response.json();
                setData(data[0]);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchWordData(word);

    }, [word]);

    return [data, loading, error];
}