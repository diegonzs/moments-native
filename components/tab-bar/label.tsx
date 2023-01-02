import { Typography } from '../typography'

interface TabBarLabelProps {
  focused: boolean
  label: string
}

export const TabBarLabel: React.FC<TabBarLabelProps> = ({ focused, label }) => {
  return (
    <Typography
      variant="caption"
      weight={focused ? '500' : '400'}
      className="text-primary"
    >
      {label}
    </Typography>
  )
}
