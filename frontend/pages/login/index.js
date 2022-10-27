import Link from 'next/link'
import React,{useState} from 'react' 
function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rememberMe, setRememberMe] = useState(0);

  // User Login info
  const users = [
    {
      email: "user1",
      password: "pass1"
    },
    {
      email: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    email: "invalid email",
    password: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, password } = document.forms[0];

    // Find user login info
    const userData = users.find((user) => user.email === uname.password);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        } else if (userData.email !== email.value){
      // Username not found
          setErrorMessages({ name: "email", message: errors.email });
          } else {
            setIsSubmitted(true);
          } // else
      } // if
    }; // if

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
// Remember Me
    let handleCheckbox = async (e) => {
      if (rememberMe == 0) {
        setRememberMe(1);
      } else {
        setRememberMe(0);
      }
    };

  // Code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="label text-center">
          <label>Sign In</label>
          </div>
          <input type="text" placeholder = "Email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <input type="password" placeholder = "Password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        <div className="text-sm">
          <Link href="/adminLogin">
                <a className="font-medium text-red-600 hover:text-red-500">
                  Admin Portal
                </a>
                </Link>
              </div>
              <div className="newAccount">
                
              </div>
        <div className="button-container">
          <input type="submit"/>
        </div>
        <div className="text-center">
              <span>Remember Me</span>
              <input type="checkbox" onChange={handleCheckbox}/>
              </div>
        <div className="createSpan text-center">
          <span className="text-on-primary">Don't have an account? </span>
          <Link href="/register">
          <button className="text-primary"> Join </button>
          </Link>
        </div>
      </form>
    </div>
  );

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
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Login;
