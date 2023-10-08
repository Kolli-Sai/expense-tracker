'use client'
import React from 'react'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'

type Props = {}

const SignoutButton = (props: Props) => {
  return (
    <>
      <Button>
        Sign out
        <LogOut className='ml-2' size={20} />
    </Button>
    </>
  )
}

export default SignoutButton