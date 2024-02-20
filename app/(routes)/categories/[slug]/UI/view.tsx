import React, { useState } from "react";
import {IAnnouncement} from '../interface/announcement.interface'
interface IAnnouncements{
    announcements:IAnnouncement
}


const View:React.FC<IAnnouncements> = ({announcements}) => {
    const [formInput, setFormInput] = useState(""); // You can add your "data" as default value


    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>formInput Value {announcements.name}</h2>
            <input
                className={"w-[300px] p-4 border"}
                type="text"
                value={""}
                onChange={(e) => setFormInput(e.target.value)} // You need to set the state with the onchange value from the input
            />
        </div>
    );
};

export default View;