import { Input } from "@/components/ui/input";
import { useAuth } from "@/helpers/AuthProvider";
import * as React from 'react'
import { Button } from "@/components/ui/button";


const LoginPage = () => {
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");
    const auth = useAuth();
    const handleLogin = auth.handleLogin;
    const handleSubmit = (e:any) => {
      e.preventDefault();
      const formData = {name,password,role}
      auth.currentRole = role;
      handleLogin(formData);
      console.log("formData",formData)
    }
    return (
        <div className="flex flex-col gap-4" id="parentDashboard">
         <div className="w-1/4 flex flex-col gap-4 text-center py-2 bg-slate-100 p-4 rounded m-4 shadow-md">
         <p className="text-indigo-500 text-semibold text-2xl">Admin Dashboard</p>
         <form className="flex flex-col gap-4">
            <Input type="string" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="password" placeholder = "password" value={password} onChange={(e) => setPassword(e.target.value)}  />
           <div className="w-full ">
           <select className="rounded outline-none bg-slate-200 px-4 py-2 text-slate-900 w-full" value={role} onChange={(e) => {
            setRole(e.target.value)
           }}>
           <option value='' disabled selected hidden >Select a Role</option>
           <option value={'USER'}>USER</option>
            <option value={'ADMIN'}>ADMIN</option>
           </select>
           </div>
 <Button onClick={(e) => handleSubmit(e)} className="bg-indigo-600">Login</Button>
         </form>
         </div>
        </div>
    )
}
export default LoginPage