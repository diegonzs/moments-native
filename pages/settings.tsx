import { View } from 'react-native'

import { Column } from '../components/column'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Option } from '../components/settings/option'
import { Typography } from '../components/typography'

export const Settings = () => {
  return (
    <ScreenLayout>
      <Row className="justify-between mb-8">
        <Typography variant="title" weight="700" className="text-primary">
          Settings
        </Typography>
        <Typography variant="subtitle" weight="600" className="text-primary">
          PRO 💪
        </Typography>
      </Row>
      <Column className="mb-4">
        <Option icon="⏰" content="Reminders" />
        <View className="h-3" />
        <Option icon="🔐️" content="Security" />
        <View className="h-3" />
        <Option icon="💳️" content="Billing" />
        <View className="h-3" />
        <Option icon="🌙" content="Dark Theme" />
        <View className="h-3" />
        <Option icon="🗣" content="Language" />
        <View className="h-3" />
        <Option icon="💡" content="Leave Feedback" />
        <View className="h-3" />
        <Option icon="💬" content="Contact Us" />
        <View className="h-3" />
        <Option icon="😴" content="Log Out" />
        <View className="h-3" />
      </Column>
      <Typography variant="body" className="text-primary-60 text-center">
        nathan.drake@gmail.com
      </Typography>
    </ScreenLayout>
  )
}
