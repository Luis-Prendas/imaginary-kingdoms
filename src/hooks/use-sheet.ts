import { getAllSheetsAction } from '@/actions/sheet-actions'
import { GetAllSheetsAction } from '@/types/sheet-actions'
import { useEffect, useState, useTransition } from 'react'

export const useGetAllSheets = () => {
  const [data, setData] = useState<GetAllSheetsAction>({ error: null, status: 'error' })
  const [isLoading, startTransition] = useTransition()

  useEffect(() => {
    startTransition(async () => {
      const result = await getAllSheetsAction()
      setData(result)
    })
  }, [])

  return { data, isLoading }
}
