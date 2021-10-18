import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,
onAuthStateChanged, GithubAuthProvider, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = ()  => {
    const [user, setUser] = useState({});
    const [error,seterror] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsinggoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(err => {
            seterror(error.message);
        })

    }
      const signInUsingGithub = () => {
          signInWithPopup(auth,githubProvider)
          .then(result => {
              setUser(result.user);
          })
      }
    const logout = () => {
            signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }
        })
    },[])
    return {
        user,
        error,
        signInUsinggoogle,
        signInUsingGithub,
        logout
    }
}
export default useFirebase;