import { useRouter } from "next/router";
import { useUser } from "../context/user";

export default function withProtected(Pages:any){
    return(props)=>{
        const router = useRouter()
        const user = useUser()
        const {uid} = user

        if(!uid){
            router.replace('/')
            return
        }
        return <Pages {...props}/>
    }
}