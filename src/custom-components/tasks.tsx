import { useAuth } from '@/helpers/AuthProvider'
import { Edit, Trash } from 'lucide-react'

const Tasks = () => {
    const {currentRole} = useAuth();
    const tasks = [
        { id: 1, title: "Fix memory leak in user session handling" },

        { id: 2, title: "Optimize database query for user reports" },

        { id: 3, title: "Update API documentation for new endpoints" },

        { id: 4, title: "Refactor authentication middleware" },
        { id: 5, title: "Implement error logging for production" },
      ]

  return (
    <div className='w-[95vw] sm:w-2/3'>
        <div>
            {tasks.map((task) => (
                <div className='flex justify-between items-center gap-4 rounded p-2 bg-slate-100 m-1'>
                    <div className='flex gap-4'>
                    <div className='font-bold'>{task.id}.</div>
                    <div>{task.title}</div>
                    </div>
                    <div className='flex gap-2'>
                        <Edit size={16} className='text-indigo-800' />
                        {currentRole == 'ADMIN' && <Trash size={16} color="red" />}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tasks