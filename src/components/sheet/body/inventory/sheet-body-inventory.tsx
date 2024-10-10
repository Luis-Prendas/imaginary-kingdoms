import { useSheetStore } from '@/store/sheetStore'
import { useTranslations } from 'next-intl'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function SheetBodyInventory() {
  const t = useTranslations()

  const { inventory } = useSheetStore()

  return (
    <section className='w-full flex'>
      <section className='flex flex-col w-full'>
        <h4>
          <strong>{t('sheet.tabs.inventory.inventory')}</strong>
        </h4>
        <div className='w-full flex items-center justify-between gap-2 rounded-md'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-center font-bold'>{t('sheet.tabs.inventory.cuantity')}</TableHead>
                <TableHead className='text-center font-bold'>{t('sheet.tabs.inventory.name')}</TableHead>
                <TableHead className='text-center font-bold'>{t('sheet.tabs.inventory.weight')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className='text-center'>1</TableCell>
                  <TableCell className='text-center'>{item.objectItem?.name}</TableCell>
                  <TableCell className='text-center'>{item.objectItem?.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </section>
  )
}
