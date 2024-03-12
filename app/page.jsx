import Image from "next/image";
import Link from "next/link";
// import sunsetPic from "../images/shadow.jpg";
import sunsetPic from "../images/sunset_3.jpg";

import styles from "./globals.css"

export default function Home() {
  return (


    <main>
      <div className="grid-col-5 flex justify-around mt-6">
      {/* <div className="flex min-h-screen flex-col items-center justify-between p-24 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <>

        {/* < Link href="/" >Home</Link> */}


      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>

        <li>
                  < Link href="/blog">Blog</Link>
        </li>
        <li>        < Link href="/settings">Settings</Link>
</li>
<li>        < Link href="/conference">Conference</Link>
</li>
<li>        < Link href="/logout">Log Out</Link>
</li>
<li>
        < Link href="/inbox">Inbox</Link>

      </li>   

      </>
      </div>    
                 <h1 className="mx-6 mt-10">Welcome Simple Tech Learning Center Page!!!</h1>

                 <div >
              <Image className={styles.bgWrap}
              src={sunsetPic}
              alt="Our story picture"
              quality={100}
              placeholder="blur"
              sizes={"100vw"}
                // fill
              style={{
                objectFit:"cover",
              }}
              />
</div>
     </main>
  );
}
