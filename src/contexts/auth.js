import {useState, createContext, useEffect} from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    },[]);
    async function signIn(email, senha){
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, senha).then(async (req)=>{
            let uid = req.user.uid;
            const userProfile = await firebase.firestore().collection('users')
            .doc(uid).get();
            const data = {
                uid: uid,
                nome: userProfile.data().nome,
                avatarUrl: userProfile.data.avatarUrl,
                email: req.user.email
            }
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);

        }).catch((err) => {
            console.log(err);
            setLoadingAuth(false);
        })
    }
    async function signUp(email, senha, nome){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email,senha).then(async (req)=>{
            let uid = req.user.uid;
            await firebase.firestore().collection('users').doc(uid).set({
                nome: nome,
                avatarUrl: null
            }).then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: req.user.email,
                    avatarUrl: null
                }
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            }).catch((err)=>{
                console.log(err);
                setLoadingAuth(false);
            })
        })
    }

    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }
    async function signout(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }
    return(
        <>
        <AuthContext.Provider value={{
             signed: !!user, 
             user,
             setUser, 
             loading, 
             signUp,
             signout,
             signIn
        }}
        >
            {children}
        </AuthContext.Provider> 
        </>
    )
}