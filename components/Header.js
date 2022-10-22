import Image from 'next/image'
import React, { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'
import Logo from '../statics/logo.png'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PostModal from './PostModal'


Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'lightgray',
    padding: 0,
    border: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 12, 0.73)'
  }
}


const styles = {
  wrapp: 'flex justify-center gap-10 p-5 bg-[#fcc014]',
  cont: 'max-w-7xl flex-1 flex justify-between gap-10',
  logo: 'flex items-center flex-start',
  logoImg: 'cursor-pointer object-contain',
  banner: 'flex cursor-pointer items-center space-x-5',
  accent: 'bg-black text-white py-2 px-4 rounded-full'
}

const Header = () => {

  const router = useRouter()

  const { currentUser, handleUserAuth } = useContext(MediumContext)

  return (
    <div className={styles.wrapp}>
      <div className={styles.cont}>
        <div className={styles.logo}>
          <Image
            className={styles.logoImg}
            src={Logo}
            height={40}
            width={200}
          />
        </div>

        {currentUser ? (
          <div className={styles.banner}>
            <div>story</div>
            <div>members</div>
            <Link href={'/?addNew=1'}>
              <div className={styles.accent}>writing</div>
            </Link>
              <div className={styles.accent}>get unlimited</div>
          </div>
        ) : (
          (
            <div className={styles.banner}>
              <div>story</div>
              <div>members</div>
              <div onClick={handleUserAuth}>sign in</div>
              <div className={styles.accent}>start</div>
            </div>
          )
        )}
      </div>

      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
        <PostModal />
      </Modal>
    </div>
  )
}

export default Header