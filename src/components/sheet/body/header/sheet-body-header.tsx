import { Checkbox } from '@/components/ui/checkbox'
import Logo from '@/components/ui/logo'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useSheetStore } from '@/store/sheetStore'
import { CheckedState } from '@radix-ui/react-checkbox'
import { useTranslations } from 'next-intl'

export default function SheetBodyHeader() {
  const t = useTranslations()
  const { sheet, stats, savingThrows, enableEdit, isTheOwner, updateSheet, updateStat } = useSheetStore()

  const handleChangeSheet = ({ field, newValue }: { field: string; newValue: string }) => {
    updateSheet({ field, newValue })
  }

  const handleChangeSheetdNumber = ({ field, newValue }: { field: string; newValue: string }) => {
    updateSheet({ field, newValue: Number(newValue.replace(/[^0-9\-]/g, '')) })
  }

  const handleChangeStat = ({ statId, newValue }: { statId: string; newValue: string }) => {
    updateStat({ statId, newValue: Number(newValue.replace(/[^0-9\-]/g, '')) })
  }

  return (
    <header className='flex flex-col w-full'>
      <section className='flex justify-between'>
        <section className='flex flex-col w-full'>
          <div className='flex'>
            <div className='flex flex-col w-full'>
              <input
                type='text'
                name='characer-sheet-name'
                id='characer-sheet-name'
                placeholder={t('sheet.characterName')}
                className='bg-transparent text-4xl font-bold'
                onChange={(e) => {
                  handleChangeSheet({ field: 'name', newValue: e.target.value })
                }}
                defaultValue={sheet?.name}
                disabled={enableEdit}
                maxLength={20}
              />
              <input
                type='text'
                name='characer-sheet-description'
                id='characer-sheet-description'
                placeholder={t('sheet.characterDescription')}
                className='bg-transparent'
                onChange={(e) => {
                  handleChangeSheet({ field: 'description', newValue: e.target.value })
                }}
                defaultValue={sheet?.description ?? ''}
                disabled={enableEdit}
                hidden={!enableEdit || sheet?.description ? false : true}
                maxLength={45}
              />
            </div>
            <div className='flex w-20 justify-end'>
              <img
                src='/placeolder-character.jpg'
                alt='Placeholder character'
                className='w-16 h-16 object-cover align-middle rounded-full object-top '
              />
            </div>
          </div>

          <div className='flex w-full justify-between'>
            <div className='flex gap-2 items-end pb-1'>
              {enableEdit ? (
                <p>{t(`sheet.race.${sheet?.race}`)}</p>
              ) : (
                <select
                  className='bg-transparent appearance-none flex justify-center items-center'
                  onChange={(e) => {
                    handleChangeSheet({ field: 'race', newValue: e.target.value })
                  }}
                >
                  <option value='' hidden>
                    {t(`sheet.race.${sheet?.race}`)}
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
                <p>{t(`sheet.class.${sheet?.class}`)}</p>
              ) : (
                <select
                  className='bg-transparent appearance-none flex justify-center items-center'
                  onChange={(e) => {
                    handleChangeSheet({ field: 'class', newValue: e.target.value })
                  }}
                >
                  <option value='' hidden>
                    {t(`sheet.class.${sheet?.class}`)}
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
                <p>
                  {t('sheet.level')} {sheet?.level}
                </p>
              ) : (
                <select
                  className='bg-transparent appearance-none flex justify-center items-center'
                  onChange={(e) => {
                    handleChangeSheetdNumber({ field: 'level', newValue: e.target.value })
                  }}
                >
                  <option value='' hidden>
                    {t('sheet.level')} {sheet?.level}
                  </option>
                  <option value='1'>{t(`sheet.level`)} 1</option>
                  <option value='2'>{t(`sheet.level`)} 2</option>
                  <option value='3'>{t(`sheet.level`)} 3</option>
                  <option value='4'>{t(`sheet.level`)} 4</option>
                  <option value='5'>{t(`sheet.level`)} 5</option>
                  <option value='6'>{t(`sheet.level`)} 6</option>
                  <option value='7'>{t(`sheet.level`)} 7</option>
                  <option value='8'>{t(`sheet.level`)} 8</option>
                  <option value='9'>{t(`sheet.level`)} 9</option>
                  <option value='10'>{t(`sheet.level`)} 10</option>
                  <option value='11'>{t(`sheet.level`)} 11</option>
                  <option value='12'>{t(`sheet.level`)} 12</option>
                  <option value='13'>{t(`sheet.level`)} 13</option>
                  <option value='14'>{t(`sheet.level`)} 14</option>
                  <option value='15'>{t(`sheet.level`)} 15</option>
                  <option value='16'>{t(`sheet.level`)} 16</option>
                  <option value='17'>{t(`sheet.level`)} 17</option>
                  <option value='18'>{t(`sheet.level`)} 18</option>
                  <option value='19'>{t(`sheet.level`)} 19</option>
                  <option value='20'>{t(`sheet.level`)} 20</option>
                </select>
              )}
            </div>
            <div className='flex gap-2 p-0'>
              <TabsList className='p-0 bg-transparent text-[#530800ad] '>
                <TabsTrigger className='bg-transparent focus-visible:bg-transparent ' value='main'>
                  {t('tabs.main')}
                </TabsTrigger>
                <TabsTrigger className='bg-transparent' value='inventory'>
                  {t('tabs.inventory')}
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </section>
      </section>
      <Separator className='bg-[#530800ad] h-[2px]' />
      <section className='flex justify-between items-center w-full h-full p-2'>
        <div className='flex flex-col justify-center items-center w-full'>
          <label htmlFor='characer-sheet-ac'>
            <strong>{t('sheet.armorClass')}</strong>
          </label>
          <input
            type='text'
            name='characer-sheet-ac'
            id='characer-sheet-ac'
            className='bg-transparent w-7 text-center'
            onChange={(e) => handleChangeSheetdNumber({ field: 'armorClass', newValue: e.target.value })}
            value={sheet?.armorClass}
            disabled={enableEdit}
            maxLength={2}
          />
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>{t('sheet.initiative')}</strong>
          <div className='flex gap-2'>
            <Logo className='w-5 h-5' fill='#530800' />
            <input
              type='text'
              name='characer-sheet-initiative'
              id='characer-sheet-initiative'
              className='bg-transparent w-7 text-center'
              onChange={(e) => handleChangeSheetdNumber({ field: 'initiative', newValue: e.target.value })}
              value={sheet?.initiative}
              disabled={enableEdit}
              maxLength={2}
            />
          </div>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <label htmlFor='characer-sheet-hit-points'>
            <strong>{t('sheet.hitPoints')}</strong>
          </label>
          <span>
            <input
              type='text'
              name='characer-sheet-hit-points'
              id='characer-sheet-hit-points'
              className='bg-transparent w-7 text-center'
              onChange={(e) => {
                handleChangeSheetdNumber({ field: 'currentHitPoints', newValue: e.target.value })
              }}
              defaultValue={sheet?.currentHitPoints}
              disabled={enableEdit}
              maxLength={2}
            />
            /
            <input
              type='text'
              name='characer-sheet-max-hit-points'
              id='characer-sheet-max-hit-points'
              className='bg-transparent w-7 text-center'
              onChange={(e) => {
                handleChangeSheetdNumber({ field: 'hitPoints', newValue: e.target.value })
              }}
              defaultValue={sheet?.hitPoints}
              disabled={enableEdit}
              maxLength={2}
            />
          </span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>{t('sheet.tempHitPoints')}</strong>
          <input
            type='text'
            name='characer-sheet-temp-hit-points'
            id='characer-sheet-temp-hit-points'
            className='bg-transparent w-7 text-center'
            onChange={(e) => {
              handleChangeSheetdNumber({ field: 'tempHitPoints', newValue: e.target.value })
            }}
            defaultValue={sheet?.tempHitPoints}
            disabled={enableEdit}
            maxLength={2}
          />
        </div>
      </section>
      <Separator className='bg-[#530800ad] h-[2px]' />
      <section className='flex justify-between items-center w-full h-full p-2'>
        {stats?.map((stat) => (
          <div key={stat.id} className='flex flex-col justify-center items-center w-full'>
            <strong>{t(`sheet.stats.abreviation.${stat.statType}`)}</strong>
            <span>
              <input
                type='text'
                name='characer-sheet-stats-str'
                id='characer-sheet-stats-str'
                className='bg-transparent w-7 text-center'
                onChange={(e) => handleChangeStat({ statId: stat.id, newValue: e.target.value })}
                defaultValue={stat.value}
                disabled={enableEdit}
                maxLength={2}
              />
              {stat.modifier >= 0 ? (
                <strong className='text-green-600'>(+{stat.modifier})</strong>
              ) : (
                <strong className='text-red-600'>({stat.modifier})</strong>
              )}
            </span>
          </div>
        ))}
      </section>
      <Separator className='bg-[#530800ad] h-[2px]' />
      <section className='flex flex-col w-full pb-2'>
        <h4>
          <strong>{t('sheet.savingsThorows.savingsThorows')}</strong>
        </h4>
        <div className='flex gap-1 justify-between w-full'>
          {savingThrows?.map((savingThrow) => (
            <div key={savingThrow.id} className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
              <span className='flex items-center gap-1'>
                <Checkbox
                  disabled={isTheOwner ? false : true}
                  className='bg-[#530800]'
                  defaultChecked={savingThrow.proficiency}
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
        </div>
      </section>
    </header>
  )
}
