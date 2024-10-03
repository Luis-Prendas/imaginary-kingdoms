import { updateField } from '@/actions/sheet-actions'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useSheetStore } from '@/store/sheetStore'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FigmaLogoIcon } from '@radix-ui/react-icons'
import { useTranslations } from 'next-intl'

interface Props {
  emerging: boolean
}

export default function MainHeader({ emerging }: Props) {
  const t = useTranslations()
  const { enableEdit, enableSave, setEnableEdit, sheet, setEnableSave } = useSheetStore()
  const { toast } = useToast()

  const openPopupWindow = () => {
    const url = window.location.href.replace('/sheet/', '/window-sheet/')
    const windowFeatures = 'width=720,height=735,menubar=no,toolbar=no,status=no,scrollbars=no'
    const newWindow = window.open(url, '_blank', windowFeatures)
    if (newWindow) newWindow.focus()
  }

  const handleSave = async () => {
    if (sheet) {
      updateField({ newSheet: sheet, sheetId: sheet.id })
      setEnableSave(false)
      toast({
        variant: 'default',
        title: t('sheet.successSaveMessage'),
      })
    }
  }

  return (
    <header className='flex w-full justify-between p-2'>
      <div className='flex gap-2 items-center'>
        <FigmaLogoIcon className='w-5 h-5' fill='#530800' />
        <h4>{t('sheet.characterSheet')}</h4>
        <button onClick={() => setEnableEdit(!enableEdit)}>
          {enableEdit ? (
            <Icon icon='ant-design:lock-filled' className='w-6 h-6' />
          ) : (
            <Icon icon='ant-design:unlock-filled' className='w-6 h-6' />
          )}
        </button>
        {enableSave && (
          <button onClick={() => handleSave()}>
            <Icon icon='ant-design:save' className='w-6 h-6' />
          </button>
        )}
      </div>
      {emerging && (
        <div className='flex justify-center items-center'>
          <Button variant='ghost' className='hover:bg-[#cac7ae]' onClick={() => openPopupWindow()}>
            <Icon icon='oui:popout' />
          </Button>
        </div>
      )}
    </header>
  )
}
