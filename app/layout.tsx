import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./rootStyle.module.css";

const OpenSans = Open_Sans({ subsets: ["latin"],
 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "STL by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head />
      <body >
<header data-theme="light"  >
  <nav >
{/* <div className="grid grid-col-3 flex-col justify-around text-white bg-black font-bold">
    <span>logo</span>
    <span><a href='image'>Image</a></span>
    <span>Email</span>
    </div> */}


        <div className="navbar-header grid grid-col-3 flex-col justify-around text-white bg-black font-bold">
            <a href="/" className="navbar-brand">tech@Stl</a>

        <div className="navbar-collapse">
          
            <ul className="nav navbar-nav">
            <li className="nav-item">
                    <a className="nav-link" href="login">Log In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="about">About</a>
                </li>            
            </ul>

            </div>
            <div >
              <ul>
              <li >
                    <form className="flex form-inline md-2" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </li>
                </ul>
                </div>
        </div>
    {/* </div> */}
</nav> 
</header> 

<main>


        <h2>    
          <div className={styles.menuBarLink}>{children}</div>
</h2>
   {/* </div> */}
   </main>
</body>
    </html>
  );
}




