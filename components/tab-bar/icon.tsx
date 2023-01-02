import { cx } from 'classix'

import { RouteName } from '../../types/routes'
import ArchiveIcon from '../icons/archive'
import BarChartIcon from '../icons/bar-chart'
import HomeIcon from '../icons/home'
import SettingsIcon from '../icons/settings'
import TaskIcon from '../icons/task'

interface TabBarIconProps {
  focused: boolean
  route: RouteName
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, route }) => {
  const classNames = cx(focused ? 'text-primary' : 'text-primary-60')
  switch (route) {
    case RouteName.Home:
      return <HomeIcon className={classNames} />
    case RouteName.Memories:
      return <ArchiveIcon className={classNames} />
    case RouteName.Insights:
      return <BarChartIcon className={classNames} />
    case RouteName.Goals:
      return <TaskIcon className={classNames} />
    case RouteName.Settings:
      return <SettingsIcon className={classNames} />
    default:
      return <HomeIcon className={classNames} />
  }
}
