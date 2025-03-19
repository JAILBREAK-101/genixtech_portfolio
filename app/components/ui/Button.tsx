import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'default' | 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  variant = 'primary',
  fullWidth,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium',
        {
          'text-white bg-indigo-600 hover:bg-indigo-700': variant === 'default',
          'text-white bg-indigo-700 hover:bg-indigo-800': variant === 'primary',
          'text-indigo-700 bg-indigo-100 hover:bg-indigo-200': variant === 'secondary',
          'w-full': fullWidth,
          'opacity-50 cursor-not-allowed': isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : children}
    </button>
  );
};