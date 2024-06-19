import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

export enum ButtonShape {
  expanded = 'expanded',
  fit = 'fit',
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
  shape?: ButtonShape
  size?: [w: number, h: number]
  isLoading?: boolean
}

const Button: React.FC<ButtonProps & { view: 'primary' | 'secondary' }> = ({ view, ...props }) => {
  switch (view) {
    case 'primary':
      return <ButtonPrimary {...props} />
    case 'secondary':
      return <ButtonSecondary {...props} />
  }
}

export default Object.assign(Button, {
  Primary: ButtonPrimary,
  Secondary: ButtonSecondary,
})
