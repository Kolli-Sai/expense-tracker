import React from 'react'
import '@/styles/globals.css'

type Props = {
  children: React.ReactNode
}

const RootLayout = (props: Props) => {
  return (
    <html lang='en'>
      <body>
        {props.children}
      </body>
    </html>
  )
}

export default RootLayout