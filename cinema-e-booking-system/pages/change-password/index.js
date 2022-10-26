import Link from 'next/link'
export default function ChangePasswords() {
    return (
        <div className="edit-profiles">
        <form>
              <div className="form2">
            <h3 className="text-center">Change your password</h3>
                <div className="passfields">
                <div>
                <input className="passwordFields" type="password" placeholder="Current Password" />
                </div>
                <div>
                <input className="passwordFields" type="password" placeholder="New password" />
                </div>
                <div>
                <input className="passwordFields" type="password" placeholder="Confirm New password" />
                </div>
                <div className="createSpan text-center">
                </div>
          <Link href="/editProfile">
          <button className="text-primary"> Edit Pofile </button>
          </Link>
          </div>
                <h3 id="incorrect-credentials" style={{color: 'red'}}></h3>
                <div className="passwordButton">
                <button id="passwordButtonStyle" type="submit">Change password</button>
                </div>
                </div>
            </form>
        </div>
    );
}
