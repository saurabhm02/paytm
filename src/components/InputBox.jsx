export const InputBox = ({ label, placeholder }) => {
    return (
      <div>
        <div className="text-sm font-medium text-left py-2 cursor-pointer">{label}</div>
        <input
          placeholder={placeholder}
          className="w-full px-2 py-1 border rounded border-slate-200 hover:border-black focus:border-black focus:outline-none"
        />
      </div>
    );
  };
  



  