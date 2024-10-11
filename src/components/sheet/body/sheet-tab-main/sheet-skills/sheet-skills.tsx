import { Checkbox } from '@/components/ui/checkbox'
import { useSheetStore } from '@/store/sheetStore'
import { useTranslations } from 'next-intl'

export default function SheetSkills() {
  const t = useTranslations()

  const { skills, isTheOwner } = useSheetStore()

  return (
    <section className='w-full flex flex-col gap-4'>
      <section className='flex flex-col w-full'>
        <h4>
          <strong>{t('sheet.skills.skills')}</strong>
        </h4>
        <div className='grid grid-cols-3 w-full'>
          {skills?.map((skill, index) => (
            <div
              key={skill.id}
              className={`px-2 flex items-center gap-1 text-nowrap ${Math.floor(index / 3) % 2 === 1 ? 'bg-secondary' : ''}`}
            >
              <Checkbox disabled={!isTheOwner} className='disabled:cursor-auto' defaultChecked={skill.proficiency} />
              {skill.value >= 0 ? `+${skill.value}` : skill.value}
              <span>{t(`sheet.skills.${skill.skillType}`)}</span>
              <code className='opacity-50'>({t(`sheet.savingsThorows.abreviation.${skill.statType}`)})</code>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
