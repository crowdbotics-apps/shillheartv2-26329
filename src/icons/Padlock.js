import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

export default function Padlock(props) {
  return (
    <Svg
      width={144}
      height={144}
      viewBox="0 0 144 144"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          gradientUnits="userSpaceOnUse"
          x1={72}
          y1={0}
          x2={72}
          y2={144}
        >
          <Stop offset={0} stopColor="#ed1c24" />
          <Stop offset={1} stopColor="#27235c" />
        </LinearGradient>
      </Defs>
      <Path
        d="M144 72c0 39.765-32.235 72-72 72S0 111.765 0 72 32.235 0 72 0s72 32.235 72 72z"
        fill="url(#prefix__a)"
      />
      <Path
        d="M98.248 65.785v-8.037C98.248 42.999 86.249 31 71.5 31S44.752 42.999 44.752 57.748v8.037c-2.83 1.004-4.863 3.707-4.863 6.877v9.727C39.889 99.819 54.07 114 71.5 114c17.431 0 31.611-14.181 31.611-31.611v-9.727c0-3.17-2.033-5.873-4.863-6.877zm-48.633-8.037c0-12.067 9.818-21.917 21.885-21.917 12.067 0 21.885 9.85 21.885 21.917v7.619h-4.864v-7.619c0-9.386-7.635-17.021-17.021-17.021-9.386 0-17.021 7.635-17.021 17.021v7.619h-4.864zm34.043 0v7.619H59.342v-7.619c0-6.704 5.454-12.191 12.158-12.191s12.158 5.487 12.158 12.191zm14.59 24.641c0 14.748-11.999 26.78-26.748 26.78s-26.748-12.032-26.748-26.78v-9.727a2.435 2.435 0 012.432-2.432h48.632a2.435 2.435 0 012.432 2.432z"
        fill="#fff"
      />
    </Svg>
  );
}
