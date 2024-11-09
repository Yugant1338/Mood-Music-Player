import React from "react";

const UserDetails = ({ userData }) => {
    console.log(userData);
    
    return (
        <div>
            <h2>Welcome, {userData.display_name}</h2>
            <p>Email: {userData.email}</p>
            <img src={userData.images[0]?.url} alt="Profile" width="100" />
        </div>
    );
};

export default UserDetails;
