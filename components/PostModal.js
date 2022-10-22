import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { MediumContext } from '../context/MediumContext'
import { db } from '../firebase'

const styles = {
    wrapp: `w-[50rem] h-[40rem] flex flex-col justify-start items-center
    gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
    title: `my-[3rem] font-bold text-3xl`,
    small: `w-full flex justify-between gap-[1rem]`,
    field: `flex-1 text-end`,
    inputCont: `flex-[5] h-min border-2 border-[blue]`,
    inputField: `w-full border-0 outline-none bg-transparent`,
    accent: `bg-black text-white py-2 px-4 rounded-full`
}

const PostModal = () => {

    const { currentUser } = useContext(MediumContext)

    const [title, setTitle] = useState('')
    const [bried, setBried] = useState('')
    const [category, setCategory] = useState('')
    const [postLength, setPostLength] = useState('')
    const [bannerImg, setBannerImg] = useState('')
    const [body, setBody] = useState('')

    const addPost = async event => {
        event.preventDefault()

        await addDoc(collection(db, 'article'), {
            bannerImg: bannerImg,
            body: body,
            category: category,
            bried: bried,
            postOn: serverTimestamp(),
            postLength: Number(postLength),
            title: title,
            author: currentUser?.email,
        })
    }

  return (
    <div className={styles.wrapp}>
       <div className={styles.title}>
         create new posted
       </div>

       <div className={styles.small}>
         <span className={styles.field}>title</span>
          <span className={styles.inputCont}>
            <input
             className={styles.inputField}
             type='text'
             value={title}
             onChange={event => setTitle(event.target.value)}
            />
          </span>
       </div>

       <div className={styles.small}>
         <span className={styles.field}>bried</span>
          <span className={styles.inputCont}>
            <input
             className={styles.inputField}
             type='text'
             value={bried}
             onChange={event => setBried(event.target.value)}
            />
          </span>
       </div>

       <div className={styles.small}>
         <span className={styles.field}>banner Img URL</span>
          <span className={styles.inputCont}>
            <input
             className={styles.inputField}
             type='text'
             value={bannerImg}
             onChange={event => setBannerImg(event.target.value)}
            />
          </span>
       </div>

       <div className={styles.small}>
         <span className={styles.field}>category</span>
          <span className={styles.inputCont}>
            <input
             className={styles.inputField}
             type='text'
             value={category}
             onChange={event => setCategory(event.target.value)}
            />
          </span>
       </div>

       <div className={styles.small}>
         <span className={styles.field}>
            estimated read length (in minutes)
         </span>
          <span className={styles.inputCont}>
            <input
             className={styles.inputField}
             type='text'
             value={postLength}
             onChange={event => setPostLength(event.target.value)}
            />
          </span>
       </div>

       <div className={styles.small}>
         <span className={styles.field}>article text</span>
          <span className={styles.inputCont}>
            <textarea
             className={styles.inputField}
             type='text'
             rows={11}
             value={body}
             onChange={event => setBody(event.target.value)}
            />
          </span>

       <button className={styles.accent} onClick={addPost}>
         submit
       </button>
       </div>
    </div>
  )
}

export default PostModal