import List from "../../components/list/List";
import Notifications from "../../components/notifications/Notifications"; // New notifications component
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {

  const {updateUser,currentUser} = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(()=>{
    if(!currentUser){
      navigate("/login");
    }
  }, [currentUser, navigate])


  const handleLogout = async ()=>{
    try{
  await apiRequest.post("/auth/logout");
  // localStorage.removeItem("user")
  updateUser(null);
  navigate("/");
    }catch(err){
      console.log(err)
    }
  }

  return (
    currentUser && (<div className="profilePage">
      <div className="details">
        <div className="wrapper">
          {/* User Information Section */}
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar || "noavatar.jpg"}
                alt="User Avatar"
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h1>My Gym</h1>
            <button>Create New Gym</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />

        </div>
      </div>

      {/* Notifications Section */}
      <div className="notificationContainer">
        <div className="wrapper">
          <h1>Notifications</h1>
          <Notifications /> {/* New notifications component */}
        </div>
      </div>
    </div>
    )
  );
}

export default ProfilePage;
