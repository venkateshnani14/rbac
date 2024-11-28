import { Input } from "@/components/ui/input";
import { useAuth } from "@/helpers/AuthProvider";
import * as React from 'react'
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

const LoginPage = () => {
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");
    const [isLoggingIn, setIsLoggingIn] = React.useState(false);
    const auth = useAuth();
    const handleSubmit = (e:any) => {
      e.preventDefault();
      const formData = {name,password,role}
      auth.currentRole = role;
      auth.handleLogin(formData);
      console.log("formData",formData)
    }
    return (
        <div className="flex flex-col gap-4 w-[100vw] sm:w-full justify-center" id="parentDashboard">
         <div className="flex w-[100vw]">
         <div className="w-[100vw] sm:w-1/2 flex flex-col gap-4 text-center py-5 bg-transparent sm:bg-slate-100 px-8 rounded  shadow-md">
         <p className="text-indigo-500 text-semibold text-2xl">Choose a role & Login</p>
         <p className="text-slate-600 text-sm">Checkout your access to the pages</p>
         <form className="flex flex-col gap-4 w-full">
            <Input type="string" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="password" placeholder = "password" value={password} onChange={(e) => setPassword(e.target.value)}  />
           <div className="w-full ">
           <select className="rounded outline-none bg-transparent outline-1 outline-slate-200 sm:outline-none sm:bg-slate-200 px-4 py-2 text-slate-900 w-full" value={role} onChange={(e) => {
            setRole(e.target.value)
           }}>
           <option value='' disabled selected hidden >Select a Role</option>
           <option value={'USER'}>USER</option>
            <option value={'ADMIN'}>ADMIN</option>
           </select>
           </div>
 <Button disabled={!name || !password || ! role} onClick={(e) => {
  handleSubmit(e)
  setIsLoggingIn(true);
 }} className="bg-indigo-600 hover:bg-indigo-500">
  {isLoggingIn ? <LoaderCircle size={2} className="animate-spin" /> : <p>Login</p> }
 </Button>
         </form>
         </div>
         <div id="rightsideimage" className="w-[100vw] hidden sm:block">
         </div>
         </div>
        </div>
    )
}
export default LoginPage