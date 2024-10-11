import { useSheetStore } from '@/store/sheetStore'
import { useTranslations } from 'next-intl'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import InventoryTable from './inventory-table/inventory-table'

export default function SheetTabInventory() {
  const t = useTranslations()

  return (
    <section className='w-full h-full overflow-y-scroll no-scrollbar'>
      <section className='flex flex-col w-full'>
        <h4>
          <strong>{t('sheet.tabs.inventory.inventory')}</strong>
        </h4>
        <div className='w-full flex items-center justify-between gap-2 rounded-md'>
          <InventoryTable />
        </div>
      </section>
    </section>
  )
}
