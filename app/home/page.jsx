
import Image from "next/image";
import sunsetPic from "../../images/sunset_2.jpg";
// import styles from "./home.module.css"
import styles from "../globals.css"


export default function Home() {
    return (

      <>
       <div className="grid-col-5 flex mt-10">
         
        
       <h1 className={styles.bgHeader}>Our Story</h1>
               <div className={styles.bgWrap}>
               <Image src={sunsetPic}
               alt="Our story picture"
               quality={100}
               placeholder="blur"
               sizes={"100vw"}
                 //fill
               style={{
                  objectFit:"cover",
               }}
               />
</div>

        {/* <h1 className={styles.bgHeader}>Our Story</h1> */}
        <p className={styles.bgText}>Bangladesh is undoubtedly a unique and fascinating destination for travelers looking to experience something off
           the beaten path. From its stunning natural beauty and rich cultural history to its friendly and welcoming locals, there is 
           much to discover in this diverse and vibrant country. Whether you're interested in exploring ancient temples, sipping tea on a 
           stunning plantation, or relaxing on the world's longest natural sandy beach, Bangladesh has something for everyone. For those 
           seeking adventure, the Rangamati Hill District and the Sundarbans, home to the Royal Bengal Tiger, offer breathtaking landscapes 
           and opportunities for outdoor activities such as hiking and boating. And for history buffs, the Lalbagh Fort and the Mahasthangarh 
           Archaeological Museum offer a glimpse into Bangladesh's fascinating past. Don't miss out on the opportunity to explore Bangladesh.
        </p>

        
        </div>   
       
               </>

    );
  }