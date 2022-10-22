import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db, provider } from "../firebase";


const MediumContext = createContext()

const MediumProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [post, setPost] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getUser = async () => {
           const querySnapshot = await getDocs(collection(db, 'user'))
     
         setUser(querySnapshot.docs.map(doc => {
               return {
                 id: doc.id,
                 data: {
                    ...doc.data()
                 }
               }
           }))
        }

        getUser()
     }, [])


     useEffect(() => {
        const getPost = async () => {
            const querySnapshot = await getDocs(collection(db, 'article'))

           setPost(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        body: doc.data().body,
                        bried: doc.data().bried,
                        category: doc.data().category,
                        postLength: doc.data().postLength,
                        bannerImg: doc.data().bannerImg,
                        title: doc.data().title,
                        postOn: doc.data().postOn,
                        author: doc.data().author
                    }
                }
            }))
        }

        getPost()
     }, [])

     const addUser = async user => {
         await setDoc(doc(db, 'user', user.email), {
               email: user.email,
               name: user.displayName,
               imgUrl: user.photoURL,
               followCount: 3
         })
     }


     const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider)
        const user = userData.user
        console.log(user, '🌭🍟')

        setCurrentUser(user)
        addUser(user)
     }
     

     return (
        <MediumContext.Provider
        value={{ post, user, handleUserAuth, currentUser }}
        >
            {children}
        </MediumContext.Provider>
     )
     
}


export { MediumContext, MediumProvider }