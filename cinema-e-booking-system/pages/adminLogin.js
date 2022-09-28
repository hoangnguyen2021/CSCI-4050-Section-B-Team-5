import Link from 'next/link'
import React,{useState} from 'react' 
function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="label text-center">
            <div className="font-bold text-red-700">
          <label>Admin Only Sign In</label>
          </div>
          </div>
          <input type="text" placeholder = "Email" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input type="password" placeholder = "Password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
              <div className="newAccount">
                
              </div>
        <div className="button-container">
        <Link href="/manageUsers">
          <input type="submit"/>
          </Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
        <div className="back-to-login">
        <Link href="/login">
    <button className="home"> Back to Sign In</button>
    </Link>
</div>
      <div className="login-form">
        <div className="title text-center">
        <span className="text-primary">Bulldog</span>
            <span> </span>
            <span className="text-on-primary">Cinema</span>
        </div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;