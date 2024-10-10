import { useSheetStore } from '@/store/sheetStore'
import { useTranslations } from 'next-intl'

export default function SheetBodyDetails() {
  const t = useTranslations()
  const { sheet, enableEdit, updateSheet } = useSheetStore()

  const handleChangeField = ({ field, newValue }: { field: string; newValue: string }) => {
    updateSheet({ field, newValue: newValue })
  }

  const handleChangeFielNumber = ({ field, newValue }: { field: string; newValue: string }) => {
    updateSheet({ field, newValue: Number(newValue.replace(/[^0-9\-]/g, '')) })
  }

  return (
    <div className='w-full flex justify-between'>
      <div className='w-full flex flex-col'>
        <div className='flex gap-1'>
          <strong>{t('sheet.details.size')}:</strong>
          <input
            type='text'
            name='characer-sheet-details-size'
            id='characer-sheet-details-size'
            placeholder={t('sheet.details.size')}
            className='bg-transparent'
            onChange={(e) => {
              handleChangeField({ field: 'size', newValue: e.target.value })
            }}
            defaultValue={sheet?.size}
            disabled={enableEdit}
            maxLength={20}
          />
        </div>
        <div className='flex gap-1'>
          <strong>{t('sheet.details.speed')}:</strong>
          <input
            type='text'
            name='characer-sheet-details-speed'
            id='characer-sheet-details-speed'
            placeholder={t('sheet.details.speed')}
            className='bg-transparent'
            onChange={(e) => {
              handleChangeField({ field: 'speed', newValue: e.target.value })
            }}
            defaultValue={sheet?.speed}
            disabled={enableEdit}
            maxLength={20}
          />
        </div>
        <div className='flex gap-1'>
          <strong>{t('sheet.details.senses')}:</strong>
          <input
            type='text'
            name='characer-sheet-details-senses'
            id='characer-sheet-details-senses'
            placeholder={t('sheet.details.senses')}
            className='bg-transparent'
            onChange={(e) => {
              handleChangeField({ field: 'senses', newValue: e.target.value })
            }}
            defaultValue={sheet?.senses}
            disabled={enableEdit}
            maxLength={20}
          />
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex gap-1'>
          <strong>{t('sheet.details.languages')}:</strong>
          <input
            type='text'
            name='characer-sheet-details-languages'
            id='characer-sheet-details-languages'
            placeholder={t('sheet.details.languages')}
            className='bg-transparent'
            onChange={(e) => {
              handleChangeField({ field: 'languages', newValue: e.target.value })
            }}
            defaultValue={sheet?.languages}
            disabled={enableEdit}
            maxLength={20}
          />
        </div>
        <div className='flex gap-1 w-full'>
          <strong className='text-nowrap'>{t('sheet.details.passivePerception')}:</strong>
          <input
            type='text'
            name='characer-sheet-details-passivePerception'
            id='characer-sheet-details-passivePerception'
            placeholder={t('sheet.details.passivePerception')}
            className='bg-transparent'
            onChange={(e) => {
              handleChangeFielNumber({ field: 'passivePerception', newValue: e.target.value })
            }}
            defaultValue={sheet?.passivePerception}
            disabled={enableEdit}
            maxLength={20}
          />
        </div>
        <div className='flex gap-1'>
          <strong>{t('sheet.details.proficiencyBonus')}:</strong>
          <input
            type='text'
            name='characer-sheet-details-proficiencyBonus'
            id='characer-sheet-details-proficiencyBonus'
            placeholder={t('sheet.details.proficiencyBonus')}
            className='bg-transparent'
            onChange={(e) => {
              handleChangeFielNumber({ field: 'proficiencyBonus', newValue: e.target.value })
            }}
            defaultValue={sheet?.proficiencyBonus}
            disabled={enableEdit}
            maxLength={20}
          />
        </div>
      </div>
    </div>
  )
}
