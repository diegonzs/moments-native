import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ReactionIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.811 11.962a8.672 8.672 0 1 0-7.85 7.85v-1.585a7.109 7.109 0 0 1-4.138-.797 7.096 7.096 0 1 1 10.404-5.468h1.584Zm-8.637 3.365v-.423.423Zm-.001-1a3.928 3.928 0 0 0 2.854-1.224l1.115 1.117a5.635 5.635 0 0 1-.758.655 5.504 5.504 0 0 1-3.211 1.029 5.504 5.504 0 0 1-4.029-1.747l1.115-1.117a3.938 3.938 0 0 0 2.914 1.287Zm7.096 3.942h-3.154v1.577h3.154V23h1.577v-3.154H23V18.27h-3.154v-3.154H18.27v3.154ZM9.134 9.923a1.577 1.577 0 1 1-2.23-2.23 1.577 1.577 0 0 1 2.23 2.23Zm6.308 0a1.577 1.577 0 1 1-2.23-2.23 1.577 1.577 0 0 1 2.23 2.23Z"
      fill="currentColor"
    />
  </Svg>
)

export default ReactionIcon
