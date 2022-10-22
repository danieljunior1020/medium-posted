import { useContext } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { MediumContext } from "../context/MediumContext";

export default function Home() {

   const { post } = useContext(MediumContext)

   console.log(post, '🔥⭐')

  const styles = {
    listPost: `flex flex-col gap-3 p-2 sm:grid-cols-2
     md:gap-6 md:p-6 lg:grid-cols-3`,
    contain: `max-w-7xl flex-1`,
    main: 'flex justify-center',
    wrapp: `mx-auto`,
  }

  return (
    <div className={styles.wrapp}>
      <Header />
      <Banner />

      <div className={styles.main}>
        <div className={styles.contain}>
          <div className={styles.listPost}>
            {post.map(posts => (
                <PostCard 
                posts={posts}
                key={posts.id}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
