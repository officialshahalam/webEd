'use client';
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


function ModileNav() {
  const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt='menu' width={36} height={36} className='cursor-pointer sm:hidden' />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-dark-1'>
          <SheetHeader>
            <SheetTitle >
              <Link href='/' className="flex items-center gap-1">
                <Image
                  src='/icons/logo.svg'
                  alt='webEd'
                  width={32}
                  height={32}
                  className='max-sm:size-10'
                />
                <p className='text-[26px] font-extrabold text-white max-sm:hidden'>WebEd</p>
              </Link>
            </SheetTitle>
            <div className={cn("text-muted-foreground text-sm")}>
              {
                sidebarLinks.map((link) => {
                  const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link href={link.route} key={link.label} className={cn('flex gap-4 items-center p-4  rounded-lg w-full', {
                        'bg-blue-1': isActive
                      })}>
                        <Image src={link.imgURL} alt={link.label} width={20} height={20} />
                        <p className='text-lg font-semibold'>{link.label}</p>
                      </Link>
                    </SheetClose>
                  )
                })
              }
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default ModileNav;