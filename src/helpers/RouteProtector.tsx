import { PropsWithChildren } from "react"
import { useAuth } from "./AuthProvider";

type protectedProps = PropsWithChildren & {
    allowedRoles: String[];
};
const RouteProtector = ({
    children,allowedRoles
}:protectedProps) => {
  const auth = useAuth();
  return (
    <div>
      { allowedRoles.indexOf(auth.currentRole) != -1 ? 
      children : 
      <div className="flex flex-col items-center gap-2 my-4">
        <p className="text-4xl font-semibold text-slate-900">Access Denied</p>
        <p className="text-xl text-slate-900">Sorry, only admins have rights to access this page</p>
        <p className="text-slate-800 text-sm">Try logging in as admin</p>
      </div> 
        }
    </div>
  )
}

export default RouteProtector