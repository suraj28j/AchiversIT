import { useEffect, useState } from 'react'

const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        setLoading(true);

        try {
            const res = await fetch(url)
            // If in case failed in between fetching the data
            if (!res.ok) {
                setError("Failed to fetch the data")
            }

            // After getting data in unparsed part
            const result = await res.json();
            setData(result.data)

            // Make loading as false because we get data here
            setLoading(false)
        } catch (error) {
            setError(error.messsage);
            setLoading(false)
        }
    }

    return {
        data,
        error,
        loading
    }
}

export default useFetch
