import React from 'react'
import SmallLog from '../statics/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Image from 'next/image'
import Profile from '../statics/profile.jpg'
import Link from 'next/link'

const styles = {
    logContainer: `cursor-pointer`,
    wrapp: `w-[5rem] h-screen flex flex-col justify-between items-center
    p-[1rem]`,
    icon: `flex-1 flex flex-col justify-center gap-[1.4rem]
    text-2xl text-[#757575]`,
    divide: `border-b`,
    profile: 'object-cover',
    profileImg: `w-[2.4rem] h-[2.4rem] rounded-full`
}

const ReaderNav = () => {
    return (
        <div className={styles.wrapp}>
            <Link href='/'>
                <div className={styles.logContainer}>
                    <Image
                        src={SmallLog}
                    />
                </div>
            </Link>

            <div className={styles.icon}>
                <HiOutlineHome />
                <FiBell />
                <BiBookmarks />
                <RiArticleLine />
                <div className={styles.divide} />

                <BsPencilSquare />

            </div>

            <div className={styles.profile}>
                <Image
                className={styles.profileImg}
                 src={Profile}
                />
            </div>
        </div>
    )
}

export default ReaderNav