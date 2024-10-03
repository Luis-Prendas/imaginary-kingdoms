import { number, object, string } from 'zod'

export const LoginSchema = object({
  email: string({ required_error: 'Email is required' }).min(1, 'Email is required').email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(6, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export const RegisterSchema = object({
  email: string({ required_error: 'Email is required' }).min(1, 'Email is required').email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(6, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  username: string({ required_error: 'Username is required' })
    .min(1, 'Username is required')
    .max(32, 'Username must be less than 32 characters'),
})

export const RoomSchema = object({
  name: string({ required_error: 'Name is required' }).min(1, 'Name is required').max(32, 'Name must be less than 32 characters'),
  description: string({ required_error: 'Description is required' })
    .min(1, 'Description is required')
    .max(255, 'Description must be less than 255 characters'),
  limit: number({ required_error: 'Limit is required' })
    .min(1, 'Limit is required')
    .max(5, 'Limit must be less than 100 characters'),
})
