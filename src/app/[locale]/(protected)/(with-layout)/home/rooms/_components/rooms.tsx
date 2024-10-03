'use client'

import { createRoomAction } from '@/actions/room-actions'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { RoomSchema } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, NotebookPen } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function Rooms() {
  const t = useTranslations()
  const { toast } = useToast()

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RoomSchema>>({
    resolver: zodResolver(RoomSchema),
    defaultValues: {
      name: '',
      description: '',
      limit: 1,
    },
  })

  const onSubmit = async (values: z.infer<typeof RoomSchema>) => {
    startTransition(async () => {
      const response = await createRoomAction(values)
      if (response.error) {
        console.error(response.error)
        toast({
          variant: 'destructive',
          title: t('genericErrorMessage.sommetingWentWrong'),
          description: response.error,
        })
      } else {
        toast({
          variant: 'default',
          title: t('genericSuccessMessage.success'),
          description: t('genericSuccessMessage.theRoomWasCreated'),
        })
      }
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>{t('home.rooms.title')}</CardTitle>
          <CardContent className='flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('home.rooms.roomName')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('home.rooms.roomName')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('home.rooms.description')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('home.rooms.description')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='limit'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('home.rooms.limit')}</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder={t('home.rooms.limit')}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className='flex justify-end gap-4'>
            <Button type='submit' className='flex items-center gap-2' disabled={isPending}>
              {isPending ? <Loader2 className='h-4 w-4 animate-spin' /> : <NotebookPen className='h-4 w-4' />}
              {t('home.rooms.create')}
            </Button>
          </CardFooter>
        </CardHeader>
      </form>
    </Form>
  )
}
