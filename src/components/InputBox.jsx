export const InputBox = ({ label, placeholder, onChange  }) => {
    return (
      <div>
        <div className="text-sm font-medium text-left py-2 cursor-pointer">{label}</div>
        <input
          placeholder={placeholder}
          onChange={onChange}
          className="w-full px-2 py-1 border rounded border-slate-200 hover:border-black focus:border-black focus:outline-none"
        />
      </div>
    );
  };
  



  