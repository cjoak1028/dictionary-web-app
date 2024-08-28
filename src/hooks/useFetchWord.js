import { useState, useEffect } from 'react';

export default function useFetchWord(word) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(false);

        async function fetchWordData(word) {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            try {
                setLoading(true);
                setData(null);
                setError(false);

                const response = await fetch(url);

                if (!response.ok) {
                    console.log('ERROR!!');
                    throw new Error(`Reponse status: ${response.status}`);
                }

                const data = await response.json();
                setData(data[0]);

                // REMOVE TIMER
                setTimeout(() => {
                    setLoading(false);
                }, "1000");
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }

        // Prevents fetch when word is empty
        if (word) {
            setLoading(true);
            fetchWordData(word);
        } else {
            setLoading(false);
        }

    }, [word]);

    return [data, loading, error];
}