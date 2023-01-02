import { cx } from 'classix'
import { PropsWithChildren } from 'react'
import { View } from 'react-native'

export const Row: React.FC<{ className?: string } & PropsWithChildren> = ({
  children,
  className,
}) => {
  return <View className={cx('flex flex-row', className)}>{children}</View>
}
