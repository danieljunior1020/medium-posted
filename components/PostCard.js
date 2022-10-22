import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../statics/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const styles = {
    wrapp: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem]
    cursor-pointer`,
    author: `flex gap-[.4rem]`,
    authorImg: `grid place-items-center rounded-full overflow-hidden
    h-[1.4rem] w-[1.4rem]`,
    imgLogo: `object-cover`,
    authName: `font-semibold`,
    title: `font-bold text-2xl`,
    brief: `text-[#767676]`,
    detailCont: `flex items-center justify-between text-[#787878]`,
    articleDetail: `my-2 text-[.8rem]`,
    category: `bg-[#f2f3f2] p-1 rounded-full`,
    bookMark: `cursor-pointer`,
    postDetail: `flex-[2.5] flex flex-col`,
    thumbnail: `flex-1`
}

const PostCard = ({ posts }) => {

    const [authorData, setAuthorData] = useState(null)

    useEffect(() => {
        const getAuthData = async () => {
            setAuthorData(
                (await getDoc(doc(db, 'user', posts.data.author))).data()
            )
        }

        getAuthData()
    }, [posts])
    

    return (
        <Link href={`/post/${posts.id}`}>
            <div className={styles.wrapp}>
                <div className={styles.postDetail}>
                    <div className={styles.author}>
                        <div className={styles.authorImg}>
                            <Image
                                src={authorData?.imgUrl}   
                                className={styles.imgLogo}
                                width={40}
                                height={40}
                            />
                        </div>

                        <div className={styles.authName}>
                            {authorData?.name}
                        </div>
                    </div>


                    <h1 className={styles.title}>
                        {posts.data.title}
                    </h1>

                    <div className={styles.brief}>
                        {posts.data.bried}
                    </div>

                    <div className={styles.detailCont}>
                        <span className={styles.articleDetail}>
                            {new Date(posts.data.postOn).toLocaleString(
                                'en-US' , {
                                    day: 'numeric',
                                    month: 'short',
                                }
                            )} · {posts.data.postLength} min read .
                            <span className={styles.category}>
                                {posts.data.category}
                          </span>
                        </span>

                        <span className={styles.bookMark}>
                            <FiBookmark className='h-5 w-5' />
                        </span>
                    </div>
                </div>

                <div className={styles.thumbnail}>
                    <Image
                        height={100}
                        width={100}
                        src={authorData?.bannerImg}
                    />
                </div>
            </div>
        </Link>
    )
}

export default PostCard