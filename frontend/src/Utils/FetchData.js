const fetchData = async (url, options = {}) => {
    try {
        const fullUrl = process.env.REACT_APP_BASE_API + url

        console.log('API REQUEST:', fullUrl)

        const res = await fetch(fullUrl, options)

        console.log('STATUS:', res.status)

        const data = await res.json()

        console.log('API RESPONSE:', data)

        return data
    } catch (error) {
        console.log('FETCH ERROR:', error)
    }
}

export default fetchData