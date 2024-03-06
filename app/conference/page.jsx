
import Link from 'next/link'

import React from 'react'

const page = () => {
  return (
    <div>
      
      <h1>Welcome To The Conference Page!!</h1>
    <h2>
      <Link href="conference/sessions">Sessions</Link>

    </h2>
    <h2>
      <Link href="conference/speakers">Speakers</Link>
    </h2>
    </div>
  )
}

export default page