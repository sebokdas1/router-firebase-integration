import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});
    useEffect(() => {

    }, [])

    const signInGoogle = () => {
        console.log('signInGoogle')
    }

    return { user, setUser, signInGoogle };
}
export default useFirebase;