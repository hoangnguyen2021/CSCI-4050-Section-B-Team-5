import Link from 'next/link'
import React,{useState} from 'react' 
import Confirm from './registerConfirmation'
export default function Register() {
  // React States

  const[show,setShow]=useState(true)
return (
  <div className="bg-background">
          <div className="back-to-home">
        <Link href="/">
    <button className="home"> Back to Home</button>
    </Link>
</div>
      <div className="relative">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://wallpapercave.com/wp/wp6608538.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-background opacity-70"
        />
    <div className="login">
      <div className="login-form">
        <div className="title text-center">
        <span className="text-primary">Bulldog</span>
            <span> </span>
            <span className="text-on-primary">Cinema</span>
        </div>
        <div className="form">
        <div className="label text-center">
          <label>Sign Up</label>
          </div>
        <div className="input-container">
          <input type="text" placeholder = "Name" name="name" required />
        </div>
        <div className="input-container">
          <input type="text" placeholder = "Phone Number" name="number" required />
        </div>
        <div className="input-container">
          <input type="text" placeholder = "Email" name="uname" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder = "Password" name="pass" required />
        </div>
<Confirm/>
        <div className="createSpan text-center">
          <span className="text-on-primary">Already have an account? </span>
          <Link href="/login">
          <button className="text-primary"> Sign In </button>
          </Link>
        </div>
    </div>

      </div>
    </div>
    </div>
    </div>
  );
}

