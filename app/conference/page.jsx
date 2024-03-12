
import Link from 'next/link'

import React from 'react'

const page = () => {
  return (
<main className="container-flex min-h-screen flex-col items-center justify-between p-24">
       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">      
      <h1>Welcome To The Conference Page!!</h1>
      <div>
    <h2>
      <Link href="conference/sessions">Sessions</Link>

    </h2>
    <h2>
      <Link href="conference/speakers">Speakers</Link>
    </h2>
    </div>
    </div>
    </main>
  )
}

export default page