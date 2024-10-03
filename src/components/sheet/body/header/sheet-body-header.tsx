import Logo from '@/components/ui/logo'
import { Separator } from '@/components/ui/separator'
import { useSheetStore } from '@/store/sheetStore'
import { useTranslations } from 'next-intl'

export default function SheetBodyHeader() {
  const t = useTranslations()
  const { sheet, updateField, enableEdit } = useSheetStore()

  const handleChangeField = ({ field, newValue }: { field: string; newValue: string }) => {
    updateField({ field, newName: newValue })
  }

  return (
    <header className='flex flex-col w-full'>
      <div className='flex justify-between'>
        <section className='flex flex-col w-full mb-1'>
          <input
            type='text'
            name='characer-sheet-name'
            id='characer-sheet-name'
            placeholder={t('sheet.charancerName')}
            className='bg-transparent text-4xl font-bold'
            onChange={(e) => {
              handleChangeField({ field: 'name', newValue: e.target.value })
            }}
            defaultValue={sheet?.name}
            disabled={enableEdit}
            maxLength={20}
          />
          <input
            type='text'
            name='characer-sheet-description'
            id='characer-sheet-description'
            placeholder={t('sheet.characerDescription')}
            className='bg-transparent'
            onChange={(e) => {
              handleChangeField({ field: 'description', newValue: e.target.value })
            }}
            defaultValue={sheet?.description ?? ''}
            disabled={enableEdit}
            hidden={!enableEdit || sheet?.description ? false : true}
            maxLength={45}
          />
          <div className='flex gap-2'>
            {enableEdit ? (
              <p>{t(`sheet.race.${sheet?.raza}`)}</p>
            ) : (
              <select
                className='bg-transparent appearance-none flex justify-center items-center'
                onChange={(e) => {
                  handleChangeField({ field: 'raza', newValue: e.target.value })
                }}
              >
                <option value='' hidden>
                  {t(`sheet.race.${sheet?.raza}`)}
                </option>
                <option value='draconid'>{t('sheet.race.draconid')}</option>
                <option value='elf'>{t('sheet.race.elf')}</option>
                <option value='dwarf'>{t('sheet.race.dwarf')}</option>
                <option value='gnome'>{t('sheet.race.gnome')}</option>
                <option value='human'>{t('sheet.race.human')}</option>
                <option value='halfling'>{t('sheet.race.halfling')}</option>
                <option value='halfOrc'>{t('sheet.race.halfOrc')}</option>
                <option value='halfElf'>{t('sheet.race.halfElf')}</option>
                <option value='tiefling'>{t('sheet.race.tiefling')}</option>
              </select>
            )}
            <Separator className='bg-[#5308003f] h-6' orientation='vertical' />
            {enableEdit ? (
              <p>{t(`sheet.class.${sheet?.clase}`)}</p>
            ) : (
              <select
                className='bg-transparent appearance-none flex justify-center items-center'
                onChange={(e) => {
                  handleChangeField({ field: 'clase', newValue: e.target.value })
                }}
              >
                <option value='' hidden>
                  {t(`sheet.class.${sheet?.clase}`)}
                </option>
                <option value='artificer'>{t('sheet.class.artificer')}</option>
                <option value='barbarian'>{t('sheet.class.barbarian')}</option>
                <option value='bard'>{t('sheet.class.bard')}</option>
                <option value='cleric'>{t('sheet.class.cleric')}</option>
                <option value='druid'>{t('sheet.class.druid')}</option>
                <option value='fighter'>{t('sheet.class.fighter')}</option>
                <option value='monk'>{t('sheet.class.monk')}</option>
                <option value='paladin'>{t('sheet.class.paladin')}</option>
                <option value='ranger'>{t('sheet.class.ranger')}</option>
                <option value='rogue'>{t('sheet.class.rogue')}</option>
                <option value='sorcerer'>{t('sheet.class.sorcerer')}</option>
                <option value='warlock'>{t('sheet.class.warlock')}</option>
                <option value='wizard'>{t('sheet.class.wizard')}</option>
              </select>
            )}
            <Separator className='bg-[#5308003f] h-6' orientation='vertical' />
            {enableEdit ? (
              <p>{t(`sheet.level.${sheet?.level}`)}</p>
            ) : (
              <select
                className='bg-transparent appearance-none flex justify-center items-center'
                onChange={(e) => {
                  handleChangeField({ field: 'level', newValue: e.target.value })
                }}
              >
                <option value='' hidden>
                  {t(`sheet.level.${sheet?.level}`)}
                </option>
                <option value='level1'>{t(`sheet.level.level1`)}</option>
                <option value='level2'>{t(`sheet.level.level2`)}</option>
                <option value='level3'>{t(`sheet.level.level3`)}</option>
                <option value='level4'>{t(`sheet.level.level4`)}</option>
                <option value='level5'>{t(`sheet.level.level5`)}</option>
                <option value='level6'>{t(`sheet.level.level6`)}</option>
                <option value='level7'>{t(`sheet.level.level7`)}</option>
                <option value='level8'>{t(`sheet.level.level8`)}</option>
                <option value='level9'>{t(`sheet.level.level9`)}</option>
                <option value='level10'>{t(`sheet.level.level10`)}</option>
                <option value='level11'>{t(`sheet.level.level11`)}</option>
                <option value='level12'>{t(`sheet.level.level12`)}</option>
                <option value='level13'>{t(`sheet.level.level13`)}</option>
                <option value='level14'>{t(`sheet.level.level14`)}</option>
                <option value='level15'>{t(`sheet.level.level15`)}</option>
                <option value='level16'>{t(`sheet.level.level16`)}</option>
                <option value='level17'>{t(`sheet.level.level17`)}</option>
                <option value='level18'>{t(`sheet.level.level18`)}</option>
                <option value='level19'>{t(`sheet.level.level19`)}</option>
                <option value='level20'>{t(`sheet.level.level20`)}</option>
              </select>
            )}
          </div>
        </section>
        <section className='flex w-20 justify-end'>
          <img
            src='/placeolder-character.jpg'
            alt='Placeholder character'
            className='w-16 h-16 object-cover align-middle rounded-full object-top '
          />
        </section>
      </div>
      <Separator className='bg-[#530800ad] h-[2px]' />
      <section className='flex justify-between items-center w-full h-full p-2'>
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>AC</strong>
          <span>11</span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>Initiative</strong>
          <div className='flex gap-2'>
            <Logo className='w-5 h-5' fill='#530800' />
            <span>18</span>
          </div>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>Hit Points</strong>
          <span>22 / 22</span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>Temp HP</strong>
          <span>--</span>
        </div>
      </section>
    </header>
  )
}
