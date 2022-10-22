import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import Replit from '../statics/replit.png'
import Tutorial from '../statics/tutorial.jpg'
import Cp from '../statics/cp.jpeg'
import Profile from '../statics/profile.jpg'
import JSLogo from '../statics/jsLogo.png'
import Image from 'next/image'


const styles = {
    wrapp: `h-screen min-h-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
    accentBtn: `flex items-center justify-center text-sm bg-black
    text-white my-[2rem] py-[.6rem] rounded-full`,
    search: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem]
    rounded-full`,
    searchInput: `border-none outline-none bg-none w-full`,
    author: `my-[2rem]`,
    authorProfile: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
    authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
    authorFollow: `text-[#757575]`,
    authorAction: `flex gap-[.6rem] my-[1rem]`,
    actionBtn: `bg-[#1ab915] text-white rounded-full px-[.6rem]
    py-[.4rem] text-sm`,
    recommentProfile: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    recommentName: `text-sm`,
    recommentContainer: `flex items-center gap-[.6rem]`,
    recommentTitle: `font-semibold`,
    recommentThumb: `flex flex-1 items-center justify-center h-[4rem]
    w-[4rem]`,
    recommentImg: 'object-cover',
    articleWrapp: `flex items-center justify-between cursor-pointer
    my-[1rem]`,
    content: 'flex-[4]'
}

const Recomendation = ({ author }) => {
    return (
        <div className={styles.wrapp}>
            <div className={styles.accentBtn}>
                get unlimited access time.
            </div>

            <div className={styles.search}>
                <AiOutlineSearch />
                <input
                    className={styles.searchInput}
                    placeholder='search'
                    type='text'
                />
            </div>


            <div className={styles.author}>
                <div className={styles.authorProfile}>
                    <Image
                        src={Profile}
                        width={100}
                        height={100}
                    />
                </div>

                <div className={styles.authorName}>
                    daniel j. peralta
                </div>

                <div className={styles.authorFollow}>
                    2.7k followers
                </div>

                <div className={styles.authorAction}>
                    <button className={styles.actionBtn}>follow</button>
                    <button className={styles.actionBtn}>
                        <MdMarkEmailUnread />
                    </button>
                </div>
            </div>

            <div className={styles.reccoment}>
                <div className={styles.title}>
                    more about medium
                </div>

                <div className={styles.article}>

                   {recommendPost.map((post) => (

                 <div className={styles.articleWrapp}>
                <div className={styles.content}>
                    <div className={styles.recommentContainer}>
                        <div className={styles.recommentProfile}>
                            <Image
                             className={styles.recommentImg}
                                src={post.img}
                                height={100}
                                width={100}
                            />
                        </div>

                        <div className={styles.recommentName}>
                            {post.author.name}
                        </div>
                        </div>

                        <div className={styles.recommentTitle}>
                            {post.title}
                        </div>
                     
                    </div>

                    <div className={styles.recommentThumb}>
                        <Image
                            src={JSLogo}
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    )
}

export default Recomendation


const recommendPost = [
    {
        title: 'Design Thinking Improves Your Data Science',
        img: Cp,
        author: {
            name: 'Cp developers',
            img: Profile
        }
    },
    {
        title: 'How came become in developer in 2023',
        img: JSLogo,
        author: {
            name: 'Daniel j. peralta',
            img: Cp
        }
    }
]