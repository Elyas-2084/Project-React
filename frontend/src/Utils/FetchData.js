const fetchData = async (url, options = {}) => {
    try {
        const res = await fetch(process.env.REACT_APP_BASE_API + url, options)
        const data = await res.json()
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export default fetchData

