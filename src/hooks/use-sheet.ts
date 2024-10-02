import { getAllSheetsAction } from '@/actions/sheet-actions'
import { useEffect, useState, useTransition } from 'react'

export const useGetAllSheets = () => {
  const [data, setData] = useState<GetAllSheetsAction>({ error: null, status: 'error' })
  const [isLoading, startTransition] = useTransition()

  useEffect(() => {
    const fetchSheets = async () => {
      startTransition(async () => {
        const result = await getAllSheetsAction()
        setData(result)
      })
    }
    fetchSheets()
  }, [])

  return { data, isLoading }
}
