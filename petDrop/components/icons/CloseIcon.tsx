import React from 'react';
import Svg, { Path } from 'react-native-svg';

type CloseIconProps = {
  size?: number;
  color?: string;
};

const CloseIcon = ({ size = 24, color = '#000' }: CloseIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18M6 6l12 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;

