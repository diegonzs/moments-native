import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const TaskIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.5 9.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5h-3.5Zm-2.47-5.22a.75.75 0 1 0-1.06-1.06L8.25 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2Zm0 4.44a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47a.75.75 0 0 1 1.06 0ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25ZM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25Z"
      fill="currentColor"
      fillOpacity={0.6}
    />
  </Svg>
)

export default TaskIcon
