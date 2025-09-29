import React from "react";
import UsbIcon from "@mui/icons-material/Usb";

function TabsButton(props) {
  // console.log(props);
  return (
    <>
      <div class="w-[200px]">
        <button
          class={`p-2 border w-[100%] rounded-lg text-lg cursor-pointer transition-all duration-300
          ${
            props.active
              ? "bg-white text-black border-gray"
              : "bg-black text-white border-gray"
          }`}
          onClick={props.onClick}
        >
          {props.title}
        </button>
      </div>
    </>
  );
}

export default TabsButton;
