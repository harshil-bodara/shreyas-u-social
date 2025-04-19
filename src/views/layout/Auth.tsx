'use client'

import { usePathname } from 'next/navigation'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Header from 'views/layout/Header'
import Sidebar from 'views/layout/Sidebar'
import { useRouter } from 'next/navigation'

export default function AuthLayout({ children }: React.PropsWithChildren) {
  const pathname = usePathname()
  const router = useRouter()
  
  const isLoginPage = pathname === '/login'

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token && !isLoginPage) {
      router.push('/login')
    }
  }, [router, isLoginPage])

  return (
    <Box className="flex min-h-screen">
      {!isLoginPage && (
        <Box className="md:w-[260px] h-screen fixed overflow-hidden z-10 md:z-auto">
          <Sidebar />
        </Box>
      )}
      <Box className={!isLoginPage ? 'md:ml-[260px] md:w-[calc(100%-264px)] w-full' : 'w-full'}>
        {!isLoginPage && <Header />}
        <Box className="p-6">{children}</Box>
      </Box>
    </Box>
  )
}
