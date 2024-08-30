import { forwardRef } from 'react'

import classNames from 'classnames'

const buttonClasses = {
  base: 'px-4 py-2 rounded-md',
  icon: 'w-11 h-11 flex justify-center items-center rounded-full',
  rounded: 'rounded-full',
  variants: {
    default:
      'bg-slate-100 text-slate-900 border-slate-300 dark:bg-slate-800 dark:text-white border dark:border-slate-700'
  }
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean
  rounded?: boolean
  variant?: keyof typeof buttonClasses.variants
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon = false, variant = 'default', rounded = false, ...props }, ref) => {
    const classes = icon ? buttonClasses.icon : buttonClasses.base
    const variantClass = buttonClasses.variants[variant]
    const roundedClass = rounded ? buttonClasses.rounded : ''

    return (
      <button
        className={classNames(classes, variantClass, roundedClass, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export default Button
