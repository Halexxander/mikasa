import './Auth.css'
import { useState } from "react";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, FacebookAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { collection, addDoc, getDocs, doc } from 'firebase/firestore';



const Authorization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setuserName] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userphoto, setUserphoto] = useState('');
    const [showPhoneNumberModal, setShowPhoneNumberModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullname, setFullname] = useState('');
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')
    const [blogpost, setBlogpost] = useState('')
    const getReference = collection(db, 'blogs')



    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        console.log(email, fullname, password);
        try {
            const docRef = await addDoc(collection(db, "users"), {
                fullname: fullname,
                email: email,
                password: password,



            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const provider = new GoogleAuthProvider()
    const facebook = new FacebookAuthProvider()



    const signInwithPhone = () => {
        //   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        //     .then((confirmationResult) => {
        //       // SMS sent. Prompt user to type the code from the message, then sign the
        //       // user in with confirmationResult.confirm(code).
        //       window.confirmationResult = confirmationResult;
        //       // ...
        //     }).catch((error) => {
        //       // Error; SMS not sent
        //       // ...
        //     });
        console.log('Brixton bullies');

    }

    const googleSignin = async () => {
        console.log('signup is working');

        await signInWithRedirect(auth, provider)
            .then((data) => {
                console.log(data);
                setUseremail(data.user.email)
                setuserName(data.user.displayName)
                setUserphoto(data.user.photoURL)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const facebookSignin = async () => {
        console.log('facebook is working');
        await signInWithPopup(auth, facebook)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });

    }




    const blog = async () => {
        console.log(title, description, category, author, date, blogpost);

        try {
            const docRef = await addDoc(collection(db, "blogs"), {
                title: title,
                description: description,
                category: category,
                author: author,
                date: date,
                blogpost: blogpost,



            });
            console.log("Document written with ID: ", docRef.id);
        }
        catch (error) {
            console.log('error adding document:', error);
        }

    }

    const showData = async function () {
        console.log('item is clicking');
        try {
            const responds = await getDocs(getReference)
            responds.map((rep) => {
                console.log(rep.data());
                return rep;
            })

            console.log('showData is working', responds);
        } catch (error) {

        }
    }

    return (


        <div className="signIn">
            <input type="text" placeholder="Fullname" onChange={(e) => setFullname(e.target.value)} />
            <input type="text" placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={signIn}> Sign in</button>
            <button 
            value={googleSignin}
            onClick={googleSignin}> Sign in with Google</button>
            <button onClick={facebookSignin}> Sign in with Facebook</button>
            <button onClick={() => setShowPhoneNumberModal(!showPhoneNumberModal)}>
                Sign in with Phone Number
            </button>

            <div className='Blogpost'>
                <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id="" cols="30" rows="5" placeholder='description' onChange={(e) => setDescription(e.target.value)}>Description</textarea>

                <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="Sports">Sports</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Politics">Politics</option>
                    <option value="Anime">Anime</option>
                    <option value="Movies">Movies</option>
                    <option value="Comics">Comics</option>
                    <option value="Weather">Weather</option>
                </select>


                <input type="Author" onChange={(e) => setAuthor(e.target.value)} placeholder='Author' />
                <textarea name="Blog" id="Blog" cols="30" rows="10" placeholder='Blogpost' onChange={(e) => setBlogpost(e.target.value)}>Blog post goes here</textarea>
                <input type="date" onChange={(e) => setDate(e.target.value)} placeholder='Date' />
                <button onClick={blog}>Submit</button>
            </div>


            <button className='showData' onClick={showData}>
                showData
            </button>


            <h1>Username : {username}</h1>
            <h1>Email : {useremail}</h1>
            <img src={userphoto} alt="image yeeted to the backrooms" />


            {showPhoneNumberModal && (
                <div className="phoneModal">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <button onClick={signInwithPhone}>Send Verification Code</button>

                    <input type="number" />
                    <button>Verify number</button>
                </div>
            )}

        </div>




    );
}


export default Authorization ;