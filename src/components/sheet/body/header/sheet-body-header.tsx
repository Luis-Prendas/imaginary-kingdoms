import { Checkbox } from '@/components/ui/checkbox'
import Logo from '@/components/ui/logo'
import { Separator } from '@/components/ui/separator'
import { useSheetStore } from '@/store/sheetStore'
import { CheckedState } from '@radix-ui/react-checkbox'
import { useTranslations } from 'next-intl'

export default function SheetBodyHeader() {
  const t = useTranslations()
  const { sheet, enableEdit, updateField, updateStatField, updateSwitchField } = useSheetStore()

  const handleChangeField = ({ field, newValue }: { field: string; newValue: string }) => {
    updateField({ field, newValue: newValue })
  }

  const handleChangeFielNumber = ({ field, newValue }: { field: string; newValue: string }) => {
    updateField({ field, newValue: Number(newValue.replace(/[^0-9\-]/g, '')) })
  }

  const handleChangeStatFiel = ({ field, newValue }: { field: string; newValue: string }) => {
    updateStatField({ field, newValue: Number(newValue.replace(/[^0-9\-]/g, '')) })
  }

  const handleChangeSwitchField = ({ field, newValue }: { field: string; newValue: CheckedState }) => {
    updateSwitchField({ field, newValue: newValue === 'indeterminate' ? false : newValue })
  }

  return (
    <header className='flex flex-col w-full'>
      <section className='flex justify-between'>
        <section className='flex flex-col w-full mb-1'>
          <input
            type='text'
            name='characer-sheet-name'
            id='characer-sheet-name'
            placeholder={t('sheet.characterName')}
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
            placeholder={t('sheet.characterDescription')}
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
            onChange={(e) => handleChangeFielNumber({ field: 'armorClass', newValue: e.target.value })}
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
              onChange={(e) => handleChangeFielNumber({ field: 'initiative', newValue: e.target.value })}
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
                handleChangeFielNumber({ field: 'currentHitPoints', newValue: e.target.value })
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
                handleChangeFielNumber({ field: 'hitPoints', newValue: e.target.value })
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
              handleChangeFielNumber({ field: 'tempHitPoints', newValue: e.target.value })
            }}
            defaultValue={sheet?.tempHitPoints}
            disabled={enableEdit}
            maxLength={2}
          />
        </div>
      </section>
      <Separator className='bg-[#530800ad] h-[2px]' />
      <section className='flex justify-between items-center w-full h-full p-2'>
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>{t('sheet.stats.str')}</strong>
          <span>
            <input
              type='text'
              name='characer-sheet-stats-str'
              id='characer-sheet-stats-str'
              className='bg-transparent w-7 text-center'
              onChange={(e) => handleChangeStatFiel({ field: 'strength', newValue: e.target.value })}
              defaultValue={sheet?.strength}
              disabled={enableEdit}
              maxLength={2}
            />
            {sheet?.strengthMod! >= 0 ? (
              <strong className='text-green-600'>(+{sheet?.strengthMod})</strong>
            ) : (
              <strong className='text-red-600'>({sheet?.strengthMod})</strong>
            )}
          </span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>{t('sheet.stats.dex')}</strong>
          <span>
            <input
              type='text'
              name='characer-sheet-stats-dex'
              id='characer-sheet-stats-dex'
              className='bg-transparent w-7 text-center'
              onChange={(e) => handleChangeStatFiel({ field: 'dexterity', newValue: e.target.value })}
              defaultValue={sheet?.dexterity}
              disabled={enableEdit}
              maxLength={2}
            />
            {sheet?.dexterityMod! >= 0 ? (
              <strong className='text-green-600'>(+{sheet?.dexterityMod})</strong>
            ) : (
              <strong className='text-red-600'>({sheet?.dexterityMod})</strong>
            )}
          </span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>{t('sheet.stats.con')}</strong>
          <span>
            <input
              type='text'
              name='characer-sheet-stats-con'
              id='characer-sheet-stats-con'
              className='bg-transparent w-7 text-center'
              onChange={(e) => handleChangeStatFiel({ field: 'constitution', newValue: e.target.value })}
              defaultValue={sheet?.constitution}
              disabled={enableEdit}
              maxLength={2}
            />
            {sheet?.constitutionMod! >= 0 ? (
              <strong className='text-green-600'>(+{sheet?.constitutionMod})</strong>
            ) : (
              <strong className='text-red-600'>({sheet?.constitutionMod})</strong>
            )}
          </span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>{t('sheet.stats.int')}</strong>
          <span>
            <input
              type='text'
              name='characer-sheet-stats-int'
              id='characer-sheet-stats-int'
              className='bg-transparent w-7 text-center'
              onChange={(e) => handleChangeStatFiel({ field: 'intelligence', newValue: e.target.value })}
              defaultValue={sheet?.intelligence}
              disabled={enableEdit}
              maxLength={2}
            />
            {sheet?.intelligenceMod! >= 0 ? (
              <strong className='text-green-600'>(+{sheet?.intelligenceMod})</strong>
            ) : (
              <strong className='text-red-600'>({sheet?.intelligenceMod})</strong>
            )}
          </span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>{t('sheet.stats.wis')}</strong>
          <span>
            <input
              type='text'
              name='characer-sheet-stats-wis'
              id='characer-sheet-stats-wis'
              className='bg-transparent w-7 text-center'
              onChange={(e) => handleChangeStatFiel({ field: 'wisdom', newValue: e.target.value })}
              defaultValue={sheet?.wisdom}
              disabled={enableEdit}
              maxLength={2}
            />
            {sheet?.wisdomMod! >= 0 ? (
              <strong className='text-green-600'>(+{sheet?.wisdomMod})</strong>
            ) : (
              <strong className='text-red-600'>({sheet?.wisdomMod})</strong>
            )}
          </span>
        </div>
        <Separator className='bg-[#5308003f] h-10' orientation='vertical' />
        <div className='flex flex-col justify-center items-center w-full'>
          <strong>{t('sheet.stats.cha')}</strong>
          <span>
            <input
              type='text'
              name='characer-sheet-stats-cha'
              id='characer-sheet-stats-cha'
              className='bg-transparent w-7 text-center'
              onChange={(e) => handleChangeStatFiel({ field: 'charisma', newValue: e.target.value })}
              defaultValue={sheet?.charisma}
              disabled={enableEdit}
              maxLength={2}
            />
            {sheet?.charismaMod! >= 0 ? (
              <strong className='text-green-600'>(+{sheet?.charismaMod})</strong>
            ) : (
              <strong className='text-red-600'>({sheet?.charismaMod})</strong>
            )}
          </span>
        </div>
      </section>
      <Separator className='bg-[#530800ad] h-[2px]' />
      <section className='flex flex-col w-full pb-2'>
        <h4>
          <strong>{t('sheet.savingsThorows.savingsThorows')}</strong>
        </h4>
        <div className='flex gap-1 justify-between w-full'>
          <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
            <span className='flex items-center gap-1'>
              <Checkbox
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceStrength}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceStrength', newValue: e })}
              />
              {t('sheet.savingsThorows.str')}{' '}
              {sheet && sheet.savingStrength >= 0 ? (
                <strong className='text-green-600'>+{sheet?.savingStrength}</strong>
              ) : (
                <strong className='text-red-600'>{sheet?.savingStrength}</strong>
              )}
            </span>
          </div>
          <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
            <span className='flex items-center gap-1'>
              <Checkbox
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceDexterity}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceDexterity', newValue: e })}
              />
              {t('sheet.savingsThorows.dex')}
              {sheet && sheet.savingDexterity >= 0 ? (
                <strong className='text-green-600'>+{sheet?.savingDexterity}</strong>
              ) : (
                <strong className='text-red-600'>{sheet?.savingDexterity}</strong>
              )}
            </span>
          </div>
          <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
            <span className='flex items-center gap-1'>
              <Checkbox
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceConstitution}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceConstitution', newValue: e })}
              />
              {t('sheet.savingsThorows.con')}
              {sheet && sheet.savingConstitution >= 0 ? (
                <strong className='text-green-600'>+{sheet?.savingConstitution}</strong>
              ) : (
                <strong className='text-red-600'>{sheet?.savingConstitution}</strong>
              )}
            </span>
          </div>
          <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
            <span className='flex items-center gap-1'>
              <Checkbox
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceIntelligence}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceIntelligence', newValue: e })}
              />
              {t('sheet.savingsThorows.int')}
              {sheet && sheet.savingIntelligence >= 0 ? (
                <strong className='text-green-600'>+{sheet?.savingIntelligence}</strong>
              ) : (
                <strong className='text-red-600'>{sheet?.savingIntelligence}</strong>
              )}
            </span>
          </div>
          <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
            <span className='flex items-center gap-1'>
              <Checkbox
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceWisdom}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceWisdom', newValue: e })}
              />
              {t('sheet.savingsThorows.wis')}
              {sheet && sheet.savingWisdom >= 0 ? (
                <strong className='text-green-600'>+{sheet?.savingWisdom}</strong>
              ) : (
                <strong className='text-red-600'>{sheet?.savingWisdom}</strong>
              )}
            </span>
          </div>
          <div className='bg-[#e4d6b5] rounded w-full p-1 flex justify-center items-center'>
            <span className='flex items-center gap-1'>
              <Checkbox
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceCharisma}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceCharisma', newValue: e })}
              />
              {t('sheet.savingsThorows.cha')}
              {sheet && sheet.savingCharisma >= 0 ? (
                <strong className='text-green-600'>+{sheet?.savingCharisma}</strong>
              ) : (
                <strong className='text-red-600'>{sheet?.savingCharisma}</strong>
              )}
            </span>
          </div>
        </div>
      </section>
    </header>
  )
}
