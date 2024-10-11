import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Prisma } from '@prisma/client'
import { useTranslations } from 'next-intl'
import { useSheetStore } from '@/store/sheetStore'
import { useToast } from '@/hooks/use-toast'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

type Objects = Prisma.InventoryGetPayload<{
  include: {
    objectItem: true
  }
}>

export default function InventoryTable() {
  const t = useTranslations()

  const { toast } = useToast()
  const { inventory } = useSheetStore()
  if (!inventory) {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'The inventory is not available.',
    })

    return <></>
  }

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const columns: ColumnDef<Objects>[] = [
    {
      accessorKey: 'cuantity',
      header: t('sheet.tabs.inventory.cuantity'),
    },
    {
      accessorKey: 'objectItem.name',
      header: t('sheet.tabs.inventory.name'),
    },
    {
      accessorKey: 'objectItem.weight',
      header: t('sheet.tabs.inventory.weight'),
    },
  ]

  const table = useReactTable({
    data: inventory,
    columns,
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  })

  return (
    <div className='w-full'>
      <Table className='w-full'>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className='text-center text-foreground font-bold'>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                className={index % 2 === 0 ? 'bg-secondary' : ''}
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className='text-center' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
