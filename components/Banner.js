import Image from 'next/image'
import React from 'react'
import Log from '../statics/banner.png'

const styles = {
    accent: 'bg-black text-white py-2 px-4 rounded-full',
    cont: 'max-w-7xl flex flex-1 items-center justify-between',
    wrapp: `h-max-[10rem] flex items-center justify-center bg-[#fcc014]
    border-y border-black`
}

const Banner = () => {
    return (
  <div className={styles.wrapp}>
    <div className={styles.cont}>
        <div className='space-y-5 px-10 flex-[3]'>
            <h1 className='max-w-xl text-[6rem] font-mediumSerif'>
                Stay in curiousity.
            </h1>

            <h3 className='text-2xl'>
                discover great histories, think, and experts from writer 
                on any topics.
            </h3>

            <button className={styles.accent}>start read</button>
        </div>

        <Image
         className='hidden h-32 md:inline-flex object-contain flex-1'
         src={Log.src}
         width={500}
         height={400}
         />
    </div>
</div>     
    )
}

export default Banner