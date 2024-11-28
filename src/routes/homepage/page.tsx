import Tasks from "@/custom-components/tasks"


const Homepage = () => {
  return (
    <div>
       <div className='flex flex-col items-center gap-2 my-3 w-[100vw]'>
        <p className='text-4xl font-semibold text-indigo-600'>Pending Issues</p>
        <p className='text-md text-indigo-600'>Manage the development issues in production here</p>
        <Tasks />
       </div>
    </div>
  )
}

export default Homepage