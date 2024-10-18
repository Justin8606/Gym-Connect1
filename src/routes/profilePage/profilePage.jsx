import List from "../../components/list/List";
import Notifications from "../../components/notifications/Notifications"; // New notifications component
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
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
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User Avatar"
              />
            </span>
            <span>
              Username: <b>Justin Shaju</b>
            </span>
            <span>
              E-mail: <b>Justin@gmail.com</b>
            </span>
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
  );
}

export default ProfilePage;
