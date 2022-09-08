import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={37} height={37} fill="none" {...props}>
    <Path
      d="M24.756 3.5h-12.57c-5.46 0-8.715 3.255-8.715 8.715V24.77c0 5.475 3.255 8.73 8.715 8.73h12.555c5.46 0 8.715-3.255 8.715-8.715v-12.57c.015-5.46-3.24-8.715-8.7-8.715Zm.885 11.55-8.505 8.505a1.124 1.124 0 0 1-1.59 0l-4.245-4.245a1.132 1.132 0 0 1 0-1.59 1.132 1.132 0 0 1 1.59 0l3.45 3.45 7.71-7.71a1.132 1.132 0 0 1 1.59 0c.435.435.435 1.14 0 1.59Z"
      fill="#469D3E"
    />
  </Svg>
);

export default SvgComponent;
