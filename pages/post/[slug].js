import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Article from '../../components/Article'
import ReaderNav from '../../components/ReaderNav'
import Recomendation from '../../components/Recomendation'
import { MediumContext } from '../../context/MediumContext'

const styles = {
   contain: `flex`
}

const Post = () => {

   const { post, user } = useContext(MediumContext)

   const router = useRouter()

   const [posts, setPosts] = useState([])

   const [author, setAuthor] = useState([])

   useEffect(() => {
      if (post.length === 0) {
        return
      } 

     setPosts(post.find(posts => posts.id === router.query.slug))

     setAuthor(user.find(users => users.id === posts?.data?.author))

   }, [post])
   

  return (
    <div className={styles.contain}>
        <ReaderNav />
        <Article post={post} author={author} />
        <Recomendation />
    </div>
  )
}

export default Post