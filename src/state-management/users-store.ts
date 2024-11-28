import { tableDataType } from '@/types/adminDashboard'
import {create} from 'zustand'

const UserStore:any = create((set) => ({
    users: [
        {
          user:"venkatesh",
          email:"venkateshkasani14@gmail.com",
          role:"ADMIN",
          permissions:{
            read:true,
            write:true,
            delete:true
          }
        },
        {
          user: "john_doe",
          email: "john.doe@example.com",
          role: "USER",
          permissions:{
            read:true,
            write:true,
            delete:false
          }
        },
        {
          user: "jane_smith",
          email: "jane.smith@example.com",
          role: "USER",
          permissions:{
            read:true,
            write:true,
            delete:false
          }
        },
        {
          user: "alice_jones",
          email: "alice.jones@example.com",
          role: "ADMIN",
          permissions:{
            read:true,
            write:true,
            delete:true
          }
        },
      ],
      updateUsers:(newUsers:tableDataType) => set({users:newUsers})
}))

export default UserStore