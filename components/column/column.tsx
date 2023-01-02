import { cx } from 'classix'
import { PropsWithChildren } from 'react'
import { View, ViewProps } from 'react-native'

export const Column: React.FC<
  { className?: string } & ViewProps & PropsWithChildren
> = ({ children, className, ...props }) => {
  return (
    <View {...props} className={cx('flex flex-col', className)}>
      {children}
    </View>
  )
}
