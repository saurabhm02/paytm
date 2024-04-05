export function Button({label, onClick, bg}) {
    return <button onClick={onClick} type="button" className={`w-full ${bg ? bg  + " hover:bg-cyan-500" : "bg-gray-800 hover:bg-gray-900" } text-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>
        {label}
    </button>
}
  