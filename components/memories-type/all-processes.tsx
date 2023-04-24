import { useQuery } from '../../hooks/realm-hooks'
import { Process, ProcessQuery } from '../../models'
import { MemoriesOptions } from '../../types'
import { TitleCount, TitleCountOnPressProps } from '../title-count'
const formatProcess = (process: ProcessQuery) => {
  return process.map((process) => ({
    id: process._id.toHexString(),
    title: process.title,
    count: process.moments.length,
  }))
}

interface AllProcessesProps {
  onPressItem: (props: TitleCountOnPressProps) => void
}
export const AllProcesses: React.FC<AllProcessesProps> = ({ onPressItem }) => {
  const processes = useQuery(Process)
  const formattedProcesses = formatProcess(processes)
  return (
    <>
      {formattedProcesses.map((process) => (
        <TitleCount
          key={process.id}
          id={process.id}
          type={MemoriesOptions.Process}
          title={process.title}
          count={process.count}
          onPress={onPressItem}
        />
      ))}
    </>
  )
}
