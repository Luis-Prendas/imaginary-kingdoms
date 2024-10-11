import {
  updateSheetAction,
  updateSheetSavingThrowAction,
  updateSheetSkillAction,
  updateSheetStatAction,
} from '@/actions/sheet-actions'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { useSheetStore } from '@/store/sheetStore'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FigmaLogoIcon } from '@radix-ui/react-icons'
import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

interface Props {
  emerging: boolean
}

export default function SheetHeader({ emerging }: Props) {
  const t = useTranslations()
  const { toast } = useToast()

  const { enableEdit, enableSave, setEnableEdit, sheet, owner, stats, skills, savingThrows, setEnableSave } = useSheetStore()
  const session = useSession()

  const openPopupWindow = () => {
    const url = window.location.href.replace('/sheet/', '/window-sheet/')
    const windowFeatures = 'width=720,height=735,menubar=no,toolbar=no,status=no,scrollbars=no'
    const newWindow = window.open(url, '_blank', windowFeatures)
    if (newWindow) newWindow.focus()
  }

  const handleSave = async () => {
    if (sheet && stats && skills && savingThrows) {
      updateSheetAction({ sheet: sheet })
      updateSheetStatAction({ stats: stats })
      updateSheetSkillAction({ skills: skills })
      updateSheetSavingThrowAction({ savingThrows: savingThrows })
      setEnableSave(false)
      toast({
        variant: 'default',
        title: t('sheet.successSaveMessage'),
      })
    }
  }

  const [isTheOwner] = useState<boolean>(sheet?.ownerId === session.data?.user.id)

  return (
    <header className='flex w-full justify-between p-2'>
      <div className='flex gap-2 items-center'>
        <FigmaLogoIcon className='w-5 h-5' fill='#530800' />
        <h4>{t('sheet.characterSheet')}</h4>
        {isTheOwner ? (
          <button onClick={() => setEnableEdit(!enableEdit)}>
            {enableEdit ? (
              <Icon icon='ant-design:lock-filled' className='w-6 h-6' />
            ) : (
              <Icon icon='ant-design:unlock-filled' className='w-6 h-6' />
            )}
          </button>
        ) : (
          <Badge variant='secondary' className='mt-[2px]'>
            {t('sheet.by')} {owner?.name}
          </Badge>
        )}
        {enableSave && (
          <button onClick={() => handleSave()}>
            <Icon icon='ant-design:save' className='w-6 h-6' />
          </button>
        )}
      </div>
      {emerging && (
        <div className='flex justify-center items-center'>
          <Button variant='ghost' onClick={() => openPopupWindow()}>
            <Icon icon='oui:popout' />
          </Button>
        </div>
      )}
    </header>
  )
}
