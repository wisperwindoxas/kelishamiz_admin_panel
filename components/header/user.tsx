import React from "react";
import {User} from "@nextui-org/react";

export default function UserPanel() {
  return (
    <User   
    className="w-[300px] text-gray-600"
      name="Soatov Xurshid"
      description="admin"
      avatarProps={{
        src: "/icons/user.jpg"
      }}
    />
  );
}
