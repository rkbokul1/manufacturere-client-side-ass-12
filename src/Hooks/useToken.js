import { useEffect, useState } from "react";

const useToken = user =>{
    
    const [token, setToken] = useState('');
    useEffect( ()=>{
        const email = user?.user?.email;
        const currentUser = {email: email}
        if(email){
            fetch()
        }


    },[user])

    return [token];    
}

export default useToken;
















// b6d25318d5c427945fc1ff691e079614e0748cc11fec5e77639ca9f27e8211bc4454d96847afc456412b66012fb63181b1774ab0a425babd0cb2c2cff474dcfa



