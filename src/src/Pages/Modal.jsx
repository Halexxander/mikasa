
import "./Modal.css"

const Modal = ({
    sendEmail,
    sendFirstname,
    sendLastname,
    sendNumber,
    newFirstname,
    newLastname,
    newNumber,
    newEmail
}) => {
    return (
        <div className="div">

<form action="">
    <input type="email" value={sendEmail} placeholder="Enter your email" onChange={(e) => {newEmail(e.target.value)}} required/>
    <input type="text" value={sendFirstname} placeholder="Enter your Firstname" onChange={(e) => {newFirstname(e.target.value)}}/>
    <input type="text" value={sendLastname} placeholder="Enter your Lastname" onChange={(e) => {newLastname(e.target.value)}} />
    <input type="text" value={sendNumber} placeholder="Enter your Phonenumber" onChange={(e) => {newNumber(e.target.value)}} required/>
    <input type="button" className='button' value="Button" onClick={()=>{clickMe()}}/>
</form>

<button onClick>Click</button>
        </div>
    );
}

export default Modal;