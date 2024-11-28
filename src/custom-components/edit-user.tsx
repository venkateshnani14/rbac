import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import * as React from 'react'

const EditUser = ({data}:{data:any,isCreating:boolean}) => {
  const [name, setName] = React.useState(data?.userName??'');
  const [email, setEmail] = React.useState(data?.email??'');
  const [defaultRole, setDefaultRole] = React.useState(data?.defaultRole??'');
  const [permissions, setPermissions] = React.useState({
    read:data?.permissions.read??false,
    write:data?.permissions.write??false,
    delete:data?.permissions.delete??false
  })
  return (
    <div>
        <form>
            <div className='flex flex-col gap-4'>
            <div>
            <p className='mb-1 ml-1 text-black text-md'>User Name</p>
            <Input className='shadow-lg' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
            <p className='mb-1 ml-1 text-black text-md'>Email</p>
            <Input className='shadow-lg' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
            <p className='mb-1 ml-1 text-black text-md'>Change role</p>
            <select className='bg-slate-50 rounded p-2 w-full shadow-lg' value={defaultRole} onChange={(e) => setDefaultRole(e.target.value)}>
                <option>ADMIN</option>
                <option>USER</option>
            </select>
            </div>
            <div>
                <p>Permissions</p>
                <div className='flex gap-3 mt-3'>
               <div className='flex gap-2 items-center'><Checkbox checked={permissions.read} onChange={() => setPermissions((prev) => ({...prev,read:!prev.read}))} /><p>Read</p></div> 
               <div className='flex gap-2 items-center'><Checkbox checked={permissions.write} onChange={() => setPermissions((prev) => ({...prev,write:!prev.write}))} /><p>Write</p></div>
               <div className='flex gap-2 items-center'><Checkbox checked={permissions.delete} onChange={() => setPermissions((prev) => ({...prev,delete:!prev.delete}))} /><p>Delete</p></div>
                </div>
            </div>
            <Button className='bg-gradient-to-tr from-indigo-400 to-slate-300 hover:text-black shadow-md'>Save Changes</Button>
            </div>
        </form>
    </div>
  )
}

export default EditUser