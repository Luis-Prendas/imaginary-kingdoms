import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useSheetStore } from '@/store/sheetStore'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function CreateSheetRace() {
  const t = useTranslations()

  const [selectedRace, setSelectedRace] = useState<string>('')
  const [selectedClass, setSelectedClass] = useState<string>('')

  const { sheet, updateSheet, savingThrows, updateStatsProficiencyBonus } = useSheetStore()

  return (
    <section className='w-full h-full flex flex-col gap-2 justify-center items-center'>
      <div className='flex flex-col bg-secondary p-2 rounded shadow w-full'>
        <Label className='font-bold text-lg'>{t('createSheet.race')}:</Label>
        <Select onValueChange={(value) => setSelectedRace(value)} defaultValue={selectedRace}>
          <SelectTrigger className='w-full bg-card rounded border-[#5308007c]'>
            <SelectValue placeholder={t('createSheet.selectRace')} />
          </SelectTrigger>
          <SelectContent className='border-[#5308007c]'>
            <SelectItem value='customRace'>{t('createSheet.customRace')}</SelectItem>
          </SelectContent>
        </Select>
        <span className='mt-1 text-sm text-red-700'>* {t('createSheet.required')}</span>
      </div>

      {selectedRace === 'customRace' && (
        <div className='w-full h-full flex-col flex'>
          <section className='flex flex-col bg-secondary p-2 rounded shadow w-full'>
            <Label className='font-bold text-lg'>{t('createSheet.nameOfRace')}:</Label>
            <Input
              className='w-full bg-card rounded border-[#5308007c]'
              defaultValue={sheet?.race}
              onChange={(e) => updateSheet({ field: 'race', newValue: e.target.value })}
            />
            <span className='mt-1 text-sm text-red-700'>* {t('createSheet.required')}</span>
          </section>
        </div>
      )}

      <Separator className='h-[2px]' />

      <div className='w-full h-full flex-col flex'>
        <section className='flex flex-col bg-secondary p-2 rounded shadow w-full'>
          <Label className='font-bold text-lg'>{t('createSheet.class')}:</Label>
          <Select onValueChange={(value) => setSelectedClass(value)} defaultValue={selectedClass}>
            <SelectTrigger className='w-full bg-card rounded border-[#5308007c]'>
              <SelectValue placeholder={t('createSheet.selectClass')} />
            </SelectTrigger>
            <SelectContent className='border-[#5308007c]'>
              <SelectItem value='customClass'>{t('createSheet.customClass')}</SelectItem>
            </SelectContent>
          </Select>
          <span className='mt-1 text-sm text-red-700'>* {t('createSheet.required')}</span>
        </section>
      </div>

      {selectedClass === 'customClass' && (
        <div className='w-full h-full flex-col flex'>
          <section className='flex flex-col bg-secondary p-2 rounded shadow w-full'>
            <Label className='font-bold text-lg'>{t('createSheet.nameOfClass')}:</Label>
            <Input
              className='w-full bg-card rounded border-[#5308007c]'
              defaultValue={sheet?.class}
              onChange={(e) => updateSheet({ field: 'class', newValue: e.target.value })}
            />
            <span className='mt-1 text-sm text-red-700'>* {t('createSheet.required')}</span>
          </section>
        </div>
      )}
    </section>
  )
}
