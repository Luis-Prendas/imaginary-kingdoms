'use client'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { LoginSchema } from '@/lib/zod'
import { loginAction } from '@/actions/auth-action'
import { useEffect, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, LogIn, NotebookPen } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useLocale, useTranslations } from 'next-intl'

export default function Login() {
  const t = useTranslations()
  const locale = useLocale()

  const session = useSession()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (session.data) {
      router.push(`/${locale}/home`)
    }
  }, [session])

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      const response = await loginAction(values)
      if (response.error && response.status === 'error') {
        toast({
          variant: 'destructive',
          title: t('genericErrorMessage.sommetingWentWrong'),
          description: response.error,
        })
        console.error(response.error)
      } else {
        router.replace(`/`)
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>{t('login.title')}</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('login.email')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('login.email')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('login.password')}</FormLabel>
                <FormControl>
                  <Input type='password' placeholder={t('login.password')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className='flex justify-end gap-4'>
          <Button
            type='submit'
            disabled={isPending}
            className='flex items-center gap-2 text-[#530800] bg-transparent outline outline-1 outline-[#530800]'
          >
            {isPending ? <Loader2 className='h-4 w-4 animate-spin' /> : <LogIn className='h-4 w-4' />}
            {t('login.login')}
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}
