import { Checkbox } from '@/components/ui/checkbox'
import { useSheetStore } from '@/store/sheetStore'
import { CheckedState } from '@radix-ui/react-checkbox'
import { useTranslations } from 'next-intl'

export default function SheetBodySkills() {
  const t = useTranslations()

  const { sheet, updateSwitchField } = useSheetStore()

  const handleChangeSwitchField = ({ field, newValue }: { field: string; newValue: CheckedState }) => {
    updateSwitchField({ field, newValue: newValue === 'indeterminate' ? false : newValue })
  }

  return (
    <section className='w-full flex flex-col gap-4'>
      <section className='flex flex-col w-full'>
        <h4>
          <strong>{t('sheet.skills.skills')}</strong>
        </h4>
        <div className='flex justify-between w-full gap-1'>
          <div className='flex flex-col w-full justify-start items-start'>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800] disabled:cursor-auto'
                defaultChecked={sheet?.competenceAthletics}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceAthletics', newValue: e })}
              />
              {sheet?.athletics! >= 0 ? `+${sheet?.athletics}` : sheet?.athletics}
              <span>{t(`sheet.skills.athletics`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.str')})</code>
            </p>
            <p className='bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceAcrobatics}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceAcrobatics', newValue: e })}
              />
              {sheet?.acrobatics! >= 0 ? `+${sheet?.acrobatics}` : sheet?.acrobatics}
              <span>{t(`sheet.skills.acrobatics`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.dex')})</code>
            </p>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceSleightOfHand}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceSleightOfHand', newValue: e })}
              />
              {sheet?.sleightOfHand! >= 0 ? `+${sheet?.sleightOfHand}` : sheet?.sleightOfHand}
              <span>{t(`sheet.skills.sleightOfHand`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.dex')})</code>
            </p>
            <p className='bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceStealth}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceStealth', newValue: e })}
              />
              {sheet?.stealth! >= 0 ? `+${sheet?.stealth}` : sheet?.stealth}
              <span>{t(`sheet.skills.stealth`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.dex')})</code>
            </p>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceArcana}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceArcana', newValue: e })}
              />
              {sheet?.arcana! >= 0 ? `+${sheet?.arcana}` : sheet?.arcana}
              <span>{t(`sheet.skills.arcana`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.int')})</code>
            </p>
            <p className='bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceHistory}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceHistory', newValue: e })}
              />
              {sheet?.history! >= 0 ? `+${sheet?.history}` : sheet?.history}
              <span>{t(`sheet.skills.history`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.int')})</code>
            </p>
          </div>
          <div className='flex flex-col w-full'>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceInvestigation}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceInvestigation', newValue: e })}
              />
              {sheet?.investigation! >= 0 ? `+${sheet?.investigation}` : sheet?.investigation}
              <span>{t(`sheet.skills.investigation`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.int')})</code>
            </p>
            <p className='bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceNature}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceNature', newValue: e })}
              />
              {sheet?.nature! >= 0 ? `+${sheet?.nature}` : sheet?.nature}
              <span>{t(`sheet.skills.nature`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.int')})</code>
            </p>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceReligion}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceReligion', newValue: e })}
              />
              {sheet?.religion! >= 0 ? `+${sheet?.religion}` : sheet?.religion}
              <span>{t(`sheet.skills.religion`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.int')})</code>
            </p>
            <p className=' bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceAnimalHandling}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceAnimalHandling', newValue: e })}
              />
              {sheet?.animalHandling! >= 0 ? `+${sheet?.animalHandling}` : sheet?.animalHandling}
              <span>{t(`sheet.skills.animalHandling`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.wis')})</code>
            </p>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceInsight}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceInsight', newValue: e })}
              />
              {sheet?.insight! >= 0 ? `+${sheet?.insight}` : sheet?.insight}
              <span>{t(`sheet.skills.insight`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.wis')})</code>
            </p>
            <p className='bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceMedicine}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceMedicine', newValue: e })}
              />
              {sheet?.medicine! >= 0 ? `+${sheet?.medicine}` : sheet?.medicine}
              <span>{t(`sheet.skills.medicine`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.wis')})</code>
            </p>
          </div>
          <div className='flex flex-col w-full'>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competencePerception}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competencePerception', newValue: e })}
              />
              {sheet?.perception! >= 0 ? `+${sheet?.perception}` : sheet?.perception}
              <span>{t(`sheet.skills.perception`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.wis')})</code>
            </p>
            <p className='bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceSurvival}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceSurvival', newValue: e })}
              />
              {sheet?.survival! >= 0 ? `+${sheet?.survival}` : sheet?.survival}
              <span>{t(`sheet.skills.survival`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.wis')})</code>
            </p>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceDeception}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceDeception', newValue: e })}
              />
              {sheet?.deception! >= 0 ? `+${sheet?.deception}` : sheet?.deception}
              <span>{t(`sheet.skills.deception`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.cha')})</code>
            </p>
            <p className='bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competenceIntimidation}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competenceIntimidation', newValue: e })}
              />
              {sheet?.intimidation! >= 0 ? `+${sheet?.intimidation}` : sheet?.intimidation}
              <span>{t(`sheet.skills.intimidation`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.cha')})</code>
            </p>
            <p className='px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competencePersuasion}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competencePersuasion', newValue: e })}
              />
              {sheet?.persuasion! >= 0 ? `+${sheet?.persuasion}` : sheet?.persuasion}
              <span>{t(`sheet.skills.persuasion`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.cha')})</code>
            </p>
            <p className='bg-[#e4d6b5] px-2 text-nowrap flex items-center gap-1 w-full'>
              <Checkbox disabled={sheet?.isTheOwner ? false : true}
                className='bg-[#530800]'
                defaultChecked={sheet?.competencePerformance}
                onCheckedChange={(e) => handleChangeSwitchField({ field: 'competencePerformance', newValue: e })}
              />
              {sheet?.performance! >= 0 ? `+${sheet?.performance}` : sheet?.performance}
              <span>{t(`sheet.skills.performance`)}</span>
              <code className='opacity-50'>({t('sheet.savingsThorows.cha')})</code>
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}
