'use client';

import React, { ButtonHTMLAttributes } from 'react';
import { cn } from 'app/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'default' | 'primary' | 'secondary' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center font-medium transition-all duration-300',
        {
          // Size variations
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
          
          // Variant styles
          'bg-violet-600 hover:bg-violet-700 text-white border border-violet-500/20': variant === 'default',
          'bg-violet-700 hover:bg-violet-800 text-white border border-violet-600/20': variant === 'primary',
          'bg-violet-100 hover:bg-violet-200 text-violet-900 border border-violet-200': variant === 'secondary',
          'bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 hover:from-violet-700 hover:via-fuchsia-600 hover:to-cyan-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 border-0': variant === 'cta',
          
          // Width and state modifiers
          'w-full': fullWidth,
          'opacity-80 cursor-not-allowed': isLoading,
          'rounded-lg': true,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Loading...
        </>
      ) : children}
    </button>
  );
};