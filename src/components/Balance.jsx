
export const Balance = ({ value }) => {
    const formattedBalance = value ? value.toFixed(2) : "0.00";
    return (
        <div className="flex text-slate-100 ">
            <div className="font-bold text-lg">
                Your balance :
            </div>
            <div className="font-semibold ml-4 text-lg">
                Rs {formattedBalance}
            </div>
        </div>
    )
}
