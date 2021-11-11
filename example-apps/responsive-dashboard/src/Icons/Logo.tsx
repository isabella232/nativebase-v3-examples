import "react-native-gesture-handler";
import React from "react";
import { Icon, IIconProps } from "native-base";
import { Path, G } from "react-native-svg";
export function Logo(props: IIconProps) {
  return (
    <Icon viewBox="0 0 602.339 681.729" {...props}>
      <G transform="translate(14575 1918.542)">
        <Path
          fill="#356290"
          d="M488.722,0A45.161,45.161,0,0,1,527.83,22.576L675.676,278.584a45.162,45.162,0,0,1,0,45.171L527.83,579.763a45.162,45.162,0,0,1-39.108,22.576H193.008A45.162,45.162,0,0,1,153.9,579.763L6.053,323.755a45.162,45.162,0,0,1,0-45.171L153.9,22.576A45.162,45.162,0,0,1,193.008,0Z"
          transform="translate(-13972.661 -1918.542) rotate(90)"
        />
        <Path
          fill="#1784b2"
          d="M401.1,0A60.816,60.816,0,0,1,453.77,30.405L567.2,226.844a60.816,60.816,0,0,1,0,60.82L453.77,484.1A60.816,60.816,0,0,1,401.1,514.509H174.241A60.816,60.816,0,0,1,121.575,484.1L8.149,287.665a60.816,60.816,0,0,1,0-60.82L121.575,30.405A60.816,60.816,0,0,1,174.241,0Z"
          transform="translate(-14016.576 -1865.281) rotate(90)"
        />
        <Path
          fill="#50bfc3"
          d="M345.81,0a36.573,36.573,0,0,1,31.674,18.288L480.566,196.856a36.573,36.573,0,0,1,0,36.569L377.484,411.993a36.573,36.573,0,0,1-31.674,18.288H139.655a36.572,36.572,0,0,1-31.674-18.288L4.9,233.425a36.573,36.573,0,0,1,0-36.569L107.981,18.288A36.573,36.573,0,0,1,139.655,0Z"
          transform="translate(-14058.69 -1820.41) rotate(90)"
        />
        <Path
          fill="#fff"
          d="M187.066,335.455V297.993l-65.272-21.949,65.272-22.523V216.059L81,259.5v32.521Zm38.726,29.3L286.123,174H256.7l-60.33,190.759Zm72.052-29.3,106.066-43.783V259.267L297.844,216.059V254.44l59.3,23.328-59.3,19.421Z"
          transform="translate(-14516.286 -1846.988)"
        />
      </G>
    </Icon>
  );
}
