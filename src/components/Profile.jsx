import { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { logout } = useContext(UserContext); // Access the logout function

  const handleLogout = () => {
    logout(); // Call logout function
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: user@example.com</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
