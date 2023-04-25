import { useAllProcesses } from '../../hooks/process'
import { ProcessQuery } from '../../models'
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
  search?: string
}

export const AllProcesses: React.FC<AllProcessesProps> = ({
  onPressItem,
  search = '',
}) => {
  const processes = useAllProcesses()
  const filteredProcesses = processes.filtered('title CONTAINS[c] $0', search)
  const formattedProcesses = formatProcess(filteredProcesses)

  return (
    <>
      {formattedProcesses.map((process) => (
        <TitleCount
          key={process.id}
          type={MemoriesOptions.Process}
          onPress={onPressItem}
          {...process}
        />
      ))}
    </>
  )
}
