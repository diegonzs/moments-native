import * as React from 'react'
import Svg, { SvgProps, Circle, Path } from 'react-native-svg'

const SettingsIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={3.667}
      stroke="currentColor"
      strokeOpacity={0.6}
      strokeWidth={2}
    />
    <Path
      d="M10.284 2.946c.777-1.296 2.655-1.296 3.431 0l.44.735a2 2 0 0 0 2.203.912l.83-.208c1.466-.367 2.794.96 2.427 2.426l-.208.831a2 2 0 0 0 .912 2.202l.735.44c1.296.777 1.296 2.655 0 3.432l-.735.44a2 2 0 0 0-.912 2.202l.208.83c.367 1.466-.96 2.794-2.426 2.427l-.831-.208a2 2 0 0 0-2.202.912l-.44.735c-.777 1.296-2.655 1.296-3.432 0l-.44-.735a2 2 0 0 0-2.202-.912l-.831.208c-1.465.367-2.793-.96-2.426-2.426l.208-.831a2 2 0 0 0-.912-2.202l-.735-.44c-1.296-.777-1.296-2.655 0-3.432l.735-.44a2 2 0 0 0 .912-2.202l-.208-.83c-.367-1.466.96-2.794 2.426-2.427l.831.208a2 2 0 0 0 2.202-.912l.44-.735Z"
      stroke="currentColor"
      strokeOpacity={0.6}
      strokeWidth={2}
    />
  </Svg>
)

export default SettingsIcon
