import React from "react";
import Svg, { Path } from "react-native-svg";

export default function EyeCross(props) {
  return (
    <Svg
      width={22}
      height={15}
      viewBox="0 0 22 15"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 0C6 0 1.7 3.1 0 7.5 1.7 11.9 6 15 11 15s9.3-3.1 11-7.5C20.3 3.1 16 0 11 0zm0 12.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
        fill="#27235c"
      />
      <Path
        d="M.619 15.963L23.004 1.56 21.381-.963-1.004 13.44z"
        fill="#27235c"
      />
    </Svg>
  );
}
