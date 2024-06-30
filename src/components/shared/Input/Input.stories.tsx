import React, { useCallback, useMemo, useState } from 'react'
import type { Meta } from '@storybook/react'

import Input from './Input'
import { useForm } from 'react-hook-form'
import { Button, Loader } from '~/components/shared'
import { alphabeticRegex, Shape } from '~/constants'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export default meta

interface IPasswordForm {
  password: string
}

export const Password = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IPasswordForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      password: '',
    },
    shouldFocusError: true,
  })

  return (
    <Input
      label="Password"
      hint="8-64 characters"
      type="password"
      placeholder="Enter password"
      max={32}
      register={register('password', {
        required: true,
        minLength: {
          value: 8,
          message: 'Should be at least 8 characters',
        },
      })}
      error={errors.password?.message}
    />
  )
}

interface INameForm {
  name: string
}

export const Name = () => {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useForm<INameForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
    },
    shouldFocusError: true,
  })

  return (
    <Input
      label="Name"
      placeholder="Enter name"
      max={32}
      register={register('name', {
        required: 'This field can not be empty',
        pattern: {
          value: alphabeticRegex,
          message: 'Invalid characters entered',
        },
      })}
      error={errors.name?.message}
      clearError={() => clearErrors('name')}
    />
  )
}

interface ICouponForm {
  coupon: string
}

export const Coupon = () => {
  const [info, setInfo] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    formState: { errors },
    watch,
    clearErrors,
    setError,
  } = useForm<ICouponForm>({
    defaultValues: {
      coupon: '',
    },
  })

  const handleApply = useCallback(async () => {
    setLoading(true)
    clearErrors('coupon')
    await new Promise((resolve) => setTimeout(resolve, 1500))
    if (watch('coupon') === '111') {
      setInfo('Coupon entered to 50%')
    } else {
      setInfo(null)
      setError('coupon', { message: 'Failed coupon!' })
    }
    setLoading(false)
  }, [watch('coupon'), clearErrors])

  const action: React.ReactNode = useMemo(() => {
    if (loading) return <Loader.Simple size={24} />
    return (
      <Button.Secondary label="Apply" onClick={handleApply} size={[60, 30]} shape={Shape.fit} />
    )
  }, [loading])

  return (
    <Input
      label="Coupon"
      placeholder="Enter password"
      register={register('coupon')}
      info={info}
      hint="111"
      error={errors.coupon?.message}
      action={action}
    />
  )
}
