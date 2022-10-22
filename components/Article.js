import Image from 'next/image'
import Profile from '../statics/profile.jpg'
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { BiBookAlt } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineLink } from 'react-icons/hi'
import Creative from '../statics/creative.jpeg'

const styles = {
    wrapp: `flex items-center justify-center flex-[3] border-l
    border-r`,
    content: `h-screen w-full p-[2rem]`,
    postHeader: `flex justify-between items-center mt-[2.2rem]
    mb-[1.2rem]`,
    author: `flex gap-[1rem]`,
    authorProfile: `h-[3rem] w-[3rem] grid items-center rounded-full
    overflow-hidden`,
    col: `flex-1 flex flex-col justify-center`,
    postDetail: `flex gap-[.2rem] text-[#767676]`,
    listBtn: `flex items-center gap-[.2rem] text-[#1ab816]`,
    social: `flex gap-[1rem] text-[#767676] cursor-pointer`,
    spacing: `w-[.5rem]`,
    banner: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
    articleMain: `flex flex-col gap-[1rem]`,
    img: `object-cover`,
    title: `font-bold text-3xl`,
    sub: `font-mediumSerifItalic text-[1.4rem] text-[#282828]`,
    articleTxt: `font-mediumSerif text-[1.4rem] text-[#282828]`
}

const Article = ({ post, author }) => {

    console.log(post, author, '🍐')

  return (
    <div className={styles.wrapp}>
        <div className={styles.content}>
            <div className={styles.postHeader}>
                <div className={styles.author}>
                    <div className={styles.authorProfile}>
                        <Image
                         className={`object-cover`}
                         src={Profile}
                         width={100}
                         height={100}
                        />
                    </div>

                    <div className={styles.col}>
                        <div>{author?.data?.name}</div>
                        <div className={styles.postDetail}>
                            <span>
                                Oct 10 · 11 min read· <span className={styles.listBtn}>
                                    <AiFillPlayCircle /> listen
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.social}>
                    <IoLogoTwitter />
                    <FaFacebook />
                    <GrLinkedin />
                    <HiOutlineLink />
                    <div className={styles.spacing}/>
                    <BiBookAlt />
                    <FiMoreHorizontal />
                </div>
            </div>

            <div className={styles.articleMain}>
                <div className={styles.banner}>
                    <Image
                    className={styles.img}
                    src={Creative}
                    width={100}
                    height={100}
                    />
                </div>

                <h1 className={styles.title}>
                Design Thinking Improves Your Data Science
                </h1>

                <h3 className={styles.sub}>
                    <div>
                        {author?.data?.name}, {' '}
                        {new Date(post?.data?.postOn)
                        .toLocaleString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </div>

                    <div>
                       {post?.data?.bried}
                    </div>
                </h3>

                <div className={styles.articleTxt}>
                   {post?.data?.body}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article