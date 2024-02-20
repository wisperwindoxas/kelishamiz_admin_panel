import React, {Dispatch, SetStateAction} from 'react'
import {useUser} from "@@/store/useUser";
import {User} from "@nextui-org/react";

type ContainerProps = {
    onClose: Dispatch<SetStateAction<boolean>>;
};

const ViewUser:React.FunctionComponent<ContainerProps> = ({onClose}) => {
    const {user} = useUser(state => state.user)

    return (
        <div  className={"h-full"}>
            <div className={"w-[1200px]  relative pt-5 mx-auto h-full border"}>
               <div className={"w-full flex justify-center items-center"}>
                   <User

                       className={""}
                       name={user.firstName + " " + user.lastName}
                       description={user.addressForm.address}
                       avatarProps={{
                           src: "",

                       }}
                   />

                   <div>

                   </div>
               </div>
                <div className={"absolute bottom-0 p-4 justify-end flex gap-3 w-full border"}>
                    <button className={"bg-yellow-300 p-2 rounded-lg  w-[150px]"}>Edit</button>
                    <button className={"bg-red-500 text-white font-bold p-2 rounded-lg w-[150px]"} onClick={() => onClose(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}


export default  ViewUser