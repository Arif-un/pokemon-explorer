import { forwardRef } from 'react'

import classNames from 'classnames'

const buttonClasses = {
  focusVisible: 'focus-visible:outline-1 outline-blue-500 outline-offset-1',
  base: 'px-4 py-2 flex items-center h-11 min-w-11 justify-center',
  icon: 'size-11 flex justify-center items-center rounded-full',
  rounded: 'rounded-full',
  disabled: 'disabled:opacity-50 bg-slate-50',
  variants: {
    default:
      'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-100 border dark:border-slate-800 transition',
    primary: 'bg-yellow-500 text-black hover:bg-yellow-600 border-yellow-700'
  }
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean
  rounded?: boolean
  variant?: keyof typeof buttonClasses.variants
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, icon = false, variant = 'default', rounded = false, type = 'button', ...props },
    ref
  ) => {
    const classes = icon ? buttonClasses.icon : buttonClasses.base
    const variantClass = buttonClasses.variants[variant]
    const roundedClass = rounded ? buttonClasses.rounded : ''

    return (
      <button
        type={type}
        className={classNames(
          classes,
          buttonClasses.focusVisible,
          variantClass,
          roundedClass,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
