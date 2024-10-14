import { useEffect, useState } from "react";

const useOnline =  ()=>{
const [onlinestatus,setOnlineStatus] = useState(true);
const handleOnline  = ()=>{
    setOnlineStatus(true);
}
const handleOffline = ()=>{
    setOnlineStatus(false);
}

useEffect(()=>{
    window.addEventListener("online",handleOnline)
    window.addEventListener("offline",handleOffline)
    return ()=>{
        window.removeEventListener("online",handleOnline)
        window.removeEventListener("offline",handleOffline)
    }
},[])
return onlinestatus;
}

export default useOnline;