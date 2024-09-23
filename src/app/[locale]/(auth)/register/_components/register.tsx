'use client'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { RegisterSchema } from '@/lib/zod'
import { registerAction } from '@/actions/auth-action'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, NotebookPen } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { useTranslations } from 'next-intl'

export default function Register() {
  const t = useTranslations()
  const router = useRouter()
  const { toast } = useToast()

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(async () => {
      const response = await registerAction(values)
      if (response.error) {
        console.error(response.error)
        toast({
          variant: 'destructive',
          title: t('genericErrorMessage.sommetingWentWrong'),
          description: response.error,
          action: <ToastAction altText='Try again'>Try again</ToastAction>,
        })
      } else {
        router.push('/home')
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>{t('register.title')}</CardTitle>
          <CardDescription>{t('register.description')}</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('register.username')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('register.username')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('register.email')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('register.email')} {...field} />
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
                <FormLabel>{t('register.password')}</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder={t('register.password')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className='flex justify-end gap-4'>
          <Button
            type='submit'
            className='flex items-center gap-2'
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <NotebookPen className='h-4 w-4' />
            )}
            {t('register.register')}
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}
