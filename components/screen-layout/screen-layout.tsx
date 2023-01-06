import { cx } from 'classix'
import { PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ScreenLayoutProps {
  withScroll?: boolean
  withPadding?: boolean
}

export const ScreenLayout: React.FC<ScreenLayoutProps & PropsWithChildren> = ({
  withScroll = true,
  withPadding = true,
  children,
}) => {
  if (!withScroll)
    return (
      <SafeAreaView className={cx('pb-5', withPadding && 'px-5')}>
        {children}
      </SafeAreaView>
    )
  return (
    <ScrollView className="flex flex-col flex-1">
      <SafeAreaView className={cx('pb-5', withPadding && 'px-5')}>
        {children}
      </SafeAreaView>
    </ScrollView>
  )
}
