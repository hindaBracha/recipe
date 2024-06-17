import { useSelector } from "react-redux"
import { Aadcategor } from "./Aadcategor"
import { Aadingread } from "./Aadingread"
import { Aadlevel } from "./Aadlevel"
import { Aadrecip } from "./Aadrecip"
import '../Style/staylregister.css'

export const Operations = () => {
  const cuser=useSelector(x=>x.currentUser)
  const users=useSelector(x=>x.users)
  const Manager=useSelector(x=>x.Manager)
  let codeuser=users.map((u,i)=>{if(u.mail==cuser.mail)return u.id})
   return <>
<div className="wraped">
   <Aadrecip codeuser="codeuser"></Aadrecip>
   {cuser.mail==Manager.mail&&<Aadlevel></Aadlevel>}
   {cuser.mail==Manager.mail&&<Aadcategor></Aadcategor>}
   <Aadingread></Aadingread>
   </div>
    </>
}