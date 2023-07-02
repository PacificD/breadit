'use client'

import { signIn } from 'next-auth/react'
import { FC, HTMLAttributes, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Icons from './icons'
import { useToast } from '@/hooks/use-toast'

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<IProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      // toast notification
      toast({
        title: 'There was a problem.',
        description: 'There was an error logging in with Google.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size='sm'
        className='w-full'
      >
        {isLoading ? null : <Icons.google className='w-4 h-4 mr-2' />}
        Google
      </Button>
      {/* TODO: auth with github  */}
    </div>
  )
}

export default UserAuthForm
