import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'
import { CharacterSheet } from '@prisma/client'
import { FigmaLogoIcon } from '@radix-ui/react-icons'
import { Dispatch, useState } from 'react'

interface Props {
  lockSheet: boolean
  setLockSheet: Dispatch<boolean>
  emerging: boolean
}

export default function MainHeader({ lockSheet, setLockSheet, emerging }: Props) {
  const openPopupWindow = () => {
    const url = '/es/emerging/ficha'
    const windowFeatures = 'width=720,height=735,menubar=no,toolbar=no,status=no,scrollbars=no'

    const newWindow = window.open(url, '_blank', windowFeatures)
    if (newWindow) newWindow.focus()
  }

  return (
    <header className='flex w-full justify-between p-2'>
      <div className='flex gap-2 items-center'>
        <FigmaLogoIcon className='w-5 h-5' fill='#530800' />
        <h4>My Character</h4>
        <button onClick={() => setLockSheet(!lockSheet)}>
          {lockSheet ? (
            <Icon icon='ant-design:lock-filled' className='w-6 h-6' />
          ) : (
            <Icon icon='ant-design:unlock-filled' className='w-6 h-6' />
          )}
        </button>
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
