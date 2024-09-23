import { cn } from '@/lib/utils'
import { Button } from './button'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { useSidebar } from '@/hooks/use-sidebar'
import Link from 'next/link'

export function Sidebar({ className }: { className?: string }) {
  const { SideBar } = useSidebar()

  return (
    <div className={cn('pb-12', className)}>
      <div className='space-y-4 py-4'>
        {SideBar.map((menuOption) => (
          <div key={menuOption.label} className='px-3 py-2'>
            <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
              {menuOption.label}
            </h2>
            <div className='space-y-1'>
              {menuOption.options.map((option) => (
                <Button
                  asChild
                  variant='ghost'
                  className='w-full justify-start gap-2'
                >
                  <Link href={option.href}>
                    {option.icon}
                    {option.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
        {/* <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Discover
          </h2>
          <div className='space-y-1'>
            <Button variant='secondary' className='w-full justify-start'>
              Listen Now
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              Browse
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
