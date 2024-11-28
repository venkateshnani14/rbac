import { getFilteredRowModel } from "@tanstack/react-table";
import { useReactTable } from "@tanstack/react-table";
import { getCoreRowModel,ColumnDef } from "@tanstack/react-table";
import { tableDataType } from "@/types/adminDashboard";
import { Switch } from "@/components/ui/switch";
import DataTable from "@/custom-components/DataTable";
import { Button } from "@/components/ui/button";
import { ArrowRight, Edit, Plus, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import EditUser from "@/custom-components/edit-user";
import UserStore from "@/state-management/users-store";


const AdminDashboard = () => {
  const columns: ColumnDef<tableDataType>[] = [
    {
        accessorKey: "username",
        header: "User Name",
        cell: ({ row }) => (
            <div className="font-medium text-slate-700">
                {row?.original?.user ?? "N/A"}
            </div>
        ),
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <div className="text-slate-700">{row?.original?.email ?? "N/A"}</div>,
    },
    {
      accessorKey: "role",
      header: "Default Role",
      cell: ({ row }) => <div className="text-slate-700">{row?.original?.role ?? "N/A"}</div>,
  },
    {
        accessorKey: "active",
        header: "Active status",
        cell: () => {
          const [isChecked, setIsChecked] = React.useState(false);
          return(
            <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <p className="text-slate-700">{isChecked ? "Active" : "Inactive"}</p>
                <Switch
                id="active"
                      checked={isChecked}
                        onCheckedChange={(e)=>{
                            console.log("switched",e)
                            setIsChecked(!isChecked);
                        }}
                    />
            </div>
            </div>
        )},
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
          <div className="flex gap-2 text-indigo-400">
            <Dialog>
  <DialogTrigger>
    <p><Trash2Icon color="red" size={16} /></p>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure want to delete?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <div className="flex justify-between ">
      <Button className="bg-red-600 hover:curson-pointer">No</Button>
      <Button className="bg-indigo-600 hover:curson-pointer">Yes</Button>
    </div>
  </DialogContent>
</Dialog>
<Sheet>
  <SheetTrigger><Edit size={16} className="text-indigo-400" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit User Permissions</SheetTitle>
      <SheetDescription>
        <EditUser data={{
          userName:row.original.user,
          email:row.original.email,
          defaultRole:row.original.role,
          permissions:row.original.permissions
        }} isCreating={false} />
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
          </div>
      ),
  },
];

 const {users} = UserStore();
 const data = users;

const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
});
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center m-4">
        <p className="text-4xl text-indigo-600">Admin Dashboard</p>
        <p className="text-indigo-600 mt-2 mb-1">Manage your user permissions here</p>
      </div>
      <div className="flex justify-center max-h-[80vh]">
      <div className="w-[92%]">
   <div className="flex gap-4">
   <Sheet>
  <SheetTrigger>
  <div className="flex justify-end">
      <Button className="flex my-2 bg-gradient-to-br from-indigo-400 to-slate-300">
        <p>Create user</p>
        <Plus size={16} />
      </Button>
      </div>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit User Permissions</SheetTitle>
      <SheetDescription>
        <EditUser data={undefined} isCreating={true} />
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
<Link to={'/'}>
<Button className="flex my-2 bg-gradient-to-br from-indigo-400 to-slate-300">
  <p>Access data</p>
  <ArrowRight size={16} />
</Button>
</Link>
   </div>
      <DataTable table={table} columns={columns} isLoading={false} />
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard