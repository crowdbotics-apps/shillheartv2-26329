import React from "react";
import Svg, { Path } from "react-native-svg";

export default function RectangleFilled(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.5 11v5a5.5 5.5 0 01-5.5 5.5H6A5.5 5.5 0 01.5 16V6A5.5 5.5 0 016 .5h10A5.5 5.5 0 0121.5 6z"
        fill="none"
        stroke="#8d8d8d"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <Path
        d="M8 4a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V8a4 4 0 00-4-4z"
        fill="#27235c"
      />
    </Svg>
  );
}
