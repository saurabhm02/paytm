import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const User = ({user}) => {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl ">
                    <img src={user.image} className="h-12 w-12 rounded-full" />
                </div>
            </div>
           
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&username=" + user.username);
            }} label={"Send Money"} bg={"bg-[#00ADB5]"}/>
        </div>
    </div>
}