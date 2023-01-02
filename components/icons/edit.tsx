import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const EditIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.551 15.662 17.552 1.66a3.42 3.42 0 0 1 .966-.155c.667-.01 1.547.175 2.402 1.03.855.854 1.039 1.735 1.03 2.4a3.42 3.42 0 0 1-.155.967L7.794 19.904l-4.821.579.578-4.821Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path d="m14.267 3.532 5.388 5.387" stroke="currentColor" strokeWidth={2} />
  </Svg>
)

export default EditIcon
