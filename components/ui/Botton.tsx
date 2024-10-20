import { cn } from '@/lib/utils';
import React from 'react'

const Button = ({ title, icon, position, handleClick, OtherClasses} : {
  title: string, icon?: React.ReactNode, position: string; handleClick?: () => void; OtherClasses?: string;}) => {
  return (
    <button className={cn(
      "shadow-[inset_0_0_0_2px_#616467] text-black-400 px-12 py-4 rounded-full tracking-widest uppercase font-bold pt-font bg-beige-100 hover:bg-black-400 hover:text-white dark:text-neutral-200 transition duration-200 ",
      OtherClasses
    )}   onClick={handleClick}>
      
    {position=='left' && icon}
    {title}
    {position == 'right' && icon}
</button>
  )
}

export default Button