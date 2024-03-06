import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
      <>
      <h1>Welcome To The Simple Tech Learning Center Page!!!</h1>
      <h2>
        <Link href="/dashboard">Dashboard</Link>
      </h2>

        < Link href="/home" >Home</Link>
        <div>        < Link href="/blog" >Blog</Link>
        </div>
        <div>        < Link href="/settings" >Settings</Link>
</div>
<div>        < Link href="/conference" >Conference</Link>
</div>
<div>        < Link href="/logout" >Log Out</Link>
</div>
        < Link href="/inbox" >Inbox</Link>


      </>
      </div>   
     
     </main>
  );
}
