'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'
import CreateSheetRace from './create-sheet-race/create-sheet-race'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { useSheetStore } from '@/store/sheetStore'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Dice1, Dice5Icon, Dice6Icon } from 'lucide-react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Logo from '@/components/ui/logo'
import { useEffect, useState } from 'react'

export default function CreateSheet() {
  const t = useTranslations()

  const { newSheet, stats, updateStat, savingThrows, updateStatsProficiencyBonus, sheet, updateSheet } = useSheetStore()

  const handleChangeStat = ({ statId, newValue }: { statId: string; newValue: string }) => {
    updateStat({ statId, newValue: Number(newValue) })
  }

  const handleChangeField = ({ field, newValue }: { field: string; newValue: string }) => {
    updateSheet({ field, newValue: newValue })
  }

  const handleChangeFielNumber = ({ field, newValue }: { field: string; newValue: string }) => {
    updateSheet({ field, newValue: Number(newValue.replace(/[^0-9\-]/g, '')) })
  }

  const [enableSave, setEnableSave] = useState(false)

  useEffect(() => {
    if (sheet?.race && sheet?.class) {
      setEnableSave(true)
    } else {
      setEnableSave(false)
    }
  }, [sheet])

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <section className='w-[700px] flex flex-col justify-start items-start bg-card text-foreground rounded'>
        <header className='flex w-full justify-between p-2'>
          <div className='flex gap-2 items-center justify-center'>
            <Logo className='w-5 h-5' fill='#530800' />
            <h4 className='mt-[1px]'>{t('sheet.newCharacterSheet')}</h4>
            {enableSave && (
              <button>
                <Icon icon='ant-design:save' className='w-6 h-6' />
              </button>
            )}
          </div>
        </header>

        <Separator />

        <div className='w-full h-full flex-col flex gap-2 p-2'>
          <section className='flex gap-2'>
            <div className='rounded shadow w-full bg-secondary p-2 gap-2 flex flex-col justify-start items-start'>
              <Label className='font-bold text-base'>{t('createSheet.name')}:</Label>
              <Input
                className='w-full bg-card rounded border-[#5308007c]'
                defaultValue={sheet?.name}
                onChange={(e) => handleChangeField({ field: 'name', newValue: e.target.value })}
              />
            </div>
            <div className='rounded shadow w-full bg-secondary p-2 gap-2 flex flex-col justify-start items-start'>
              <Label className='font-bold text-base'>{t('createSheet.description')}:</Label>
              <Input
                className='w-full bg-card rounded border-[#5308007c]'
                defaultValue={sheet?.description ?? ''}
                onChange={(e) => handleChangeField({ field: 'description', newValue: e.target.value })}
              />
            </div>
          </section>

          <Separator className='h-[2px]' />

          <section className='w-full flex gap-2 justify-between items-center'>
            {stats?.map((stat) => (
              <div key={stat.id} className='flex flex-col shadow justify-center items-center w-full rounded bg-secondary p-2'>
                <strong>{t(`sheet.stats.abreviation.${stat.statType}`)}</strong>
                <span>
                  <Input
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                    type='number'
                    defaultValue={stat.value}
                    onChange={(e) => handleChangeStat({ statId: stat.id, newValue: e.target.value })}
                    className='bg-card rounded border-[#5308007c] w-[50px] text-center'
                  />
                </span>
              </div>
            ))}
          </section>
          <section className='flex gap-2 justify-between w-full'>
            {savingThrows?.map((savingThrow) => (
              <div key={savingThrow.id} className='rounded shadow w-full bg-secondary p-1 flex justify-center items-center'>
                <span className='flex items-center gap-1'>
                  <Checkbox
                    defaultChecked={savingThrow.proficiency}
                    onCheckedChange={(e) =>
                      updateStatsProficiencyBonus({ isProficiencyBonus: Boolean(e), statId: savingThrow.statType })
                    }
                  />
                  {t(`sheet.savingsThorows.abreviation.${savingThrow.statType}`)}{' '}
                  {savingThrow?.value >= 0 ? (
                    <strong className='text-green-600'>+{savingThrow?.value}</strong>
                  ) : (
                    <strong className='text-red-600'>{savingThrow?.value}</strong>
                  )}
                </span>
              </div>
            ))}
          </section>

          <Separator className='h-[2px]' />

          <CreateSheetRace />
        </div>
      </section>
    </div>
  )
}
