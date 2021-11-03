import { auth } from "../services/firebase";
import { useSelector } from "react-redux";
import React from "react";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import "./ProfilePage.css";

function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div className="profilePage">
      <Nav />
      <div className="profilePage-body">
        <h1>Edit Profile</h1>
        <div className="profilePage-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
          <div className="profilePage-detail">
            <h2>{user.email}</h2>
            <div className="profilePage-plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profilePage-signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
