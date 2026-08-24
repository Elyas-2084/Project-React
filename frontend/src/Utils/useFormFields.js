import { useState } from "react"

const useFormFields = () => {
    const [fields, setFields] = useState({})

    const handelChange = (e) => {

        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }
    return [fields, handelChange]
}

export default useFormFields