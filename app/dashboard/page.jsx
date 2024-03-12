
// export default function Page() {
//   return (
// <main className="flex min-h-screen flex-col items-center justify-between p-24">
//        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <>
//         <h2>Dashboard Page</h2>
//         </>
//     </div>
//     </main>
//   )
// }

// export default function Page() {
//    return (
//      <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
//        <>
//        <h1>Welcome To The Dashboard Page!!!</h1>
//       </>
//       </div>   
     
//      </main>
//   );
// }

import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <div>Dashboard</div>
    <div><Link href="/home">Home</Link></div>
        <div>        < Link href="/blog">Blog</Link>
        </div>
        <div>        < Link href="/settings">Settings</Link>
</div>
<div>        < Link href="/conference">Conference</Link>
</div>
<div>        < Link href="/logout">Log Out</Link>
</div>
        < Link href="/inbox">Inbox</Link>

</>
  
  )
}
