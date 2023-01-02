import { PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const ScreenLayout: React.FC<
  { withScroll?: boolean } & PropsWithChildren
> = ({ withScroll = true, children }) => {
  if (!withScroll)
    return <SafeAreaView className="px-5 pb-5 ">{children}</SafeAreaView>
  return (
    <ScrollView className="flex flex-col flex-1">
      <SafeAreaView className="px-5 pb-5 ">{children}</SafeAreaView>
    </ScrollView>
  )
}
