'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Link } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import  Image  from 'next/image'

const Sidebar = ({user}: SiderbarProps) => {
    
    const pathName = usePathname()

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className='mb-12 flex cursor-pointer items-center gap-2'>
                <Image src={"./../../icons/logo.svg"}
                 alt="Badr Logo"
                 width={44}
                 height={443}
                 className='size-[24px] max-xl:size-14'
                 />
                 <h1 className='sidebar-logo'>Badr s DASHBOARD</h1>
            </Link>
            {sidebarLinks.map( (item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`) 
                return (
                    <Link href={item.route} key={item.label} className={cn('sidebar-link',{'bg-bank-gradient':isActive} )}> 
                            <div className='relative size-6'>
                                <Image className={cn({'brightness-[3] invert-0': isActive})} src={item.imgURL} alt={item.label} fill  />
                            </div>
                            <p className={cn('sidebar-label',{'text-white':isActive})}>{item.label}</p>
                    </Link>
                )
            })}
          user
        </nav>

      Footer
    </section>
  )
}

export default Sidebar