import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const mockGraph: { labels: string[]; data: number[] } = {
  labels: ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'],
  data: [20, 45, 28, 80, 99, 43, 35],
}

const screenWidth = Dimensions.get('window').width

export const Chart = () => {
  return (
    <LineChart
      width={screenWidth - 20}
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      height={200}
      // withShadow={false}
      formatYLabel={(label) => label.split('.')[0]}
      chartConfig={{
        backgroundGradientFrom: '#F5F5F5',
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: '#F5F5F5',
        backgroundGradientToOpacity: 1,
        fillShadowGradientFrom: '#EFD6BD',
        fillShadowGradientFromOpacity: 1,
        fillShadowGradientTo: '#EFD6BD',
        fillShadowGradientToOpacity: 0,
        labelColor: (opacity = 1) => 'rgba(17, 9, 6, 0.4)',
        propsForLabels: {
          fontWeight: 'bold',
        },
        color: (opacity = 1) => `#110906`,
        strokeWidth: 2, // optional, default 3
        useShadowColorFromDataset: false, // optional
      }}
      data={{
        labels: mockGraph.labels,
        datasets: [{ data: mockGraph.data }],
      }}
      style={{
        paddingRight: 35,
      }}
    />
  )
}
