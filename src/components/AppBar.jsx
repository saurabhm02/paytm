export const AppBar = ({user}) =>{
    return(
        <div className="shadow h-14 flex justify-between bg-slate-50 w-screen fixed z-10 top-0 right-0 px-5">
            <div className="flex justify-center h-full ml-4 items-center text-2xl">
                Pay<span className="font-bold text-3xl">T</span>M App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello,  { user.userName}
                </div>
                <div className="rounded-full flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl ">
                        <img src={user.image} className="h-12 w-12 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}