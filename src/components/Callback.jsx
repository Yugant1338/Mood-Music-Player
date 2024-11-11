import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import UserDetails from "./UserDetails";

const Callback = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Create the navigate function

    useEffect(() => {
        const getAccessToken = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');

            if (code) {
                const clientId = import.meta.env.VITE_CLIENT_ID;
                const clientSecret = import.meta.env.VITE_CLIENT_KEY;
                const redirectUri = import.meta.env.VITE_REDIRECTED_URI;

                const credentials = btoa(`${clientId}:${clientSecret}`);
                try {
                    const response = await fetch("https://accounts.spotify.com/api/token", {
                        method: "POST",
                        headers: {
                            "Authorization": `Basic ${credentials}`,
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams({
                            grant_type: "authorization_code",
                            code: code,
                            redirect_uri: redirectUri,
                        }),
                    });

                    if (!response.ok) {
                        console.error("Error fetching access token:", await response.json());
                        return;
                    }

                    const data = await response.json();
                    localStorage.setItem("access_token", data.access_token);

                    const userResponse = await fetch("https://api.spotify.com/v1/me", {
                        headers: {
                            Authorization: `Bearer ${data.access_token}`,
                        },
                    });

                    if (userResponse.ok) {
                        const userData = await userResponse.json();
                        setUserData(userData);
                    } else {
                        console.error("Error fetching user details:", await userResponse.json());
                    }
                } catch (error) {
                    console.error("Error exchanging token:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        getAccessToken();
    }, []);

    // Function for navigating to the mood form page
    const handleMoodDetection = () => {
        navigate("/mood-form");
    };

    return (
        <div className="container mx-auto p-4">
            {userData ? (
                <div>
                    {/* Display User Details */}
                    <UserDetails userData={userData} />
                    
                    {/* Music Player UI */}
                    <div className="music-player mt-8 p-4 border rounded shadow-lg bg-white dark:bg-gray-800">
                        <h2 className="text-lg font-semibold mb-2">Now Playing:</h2>
                        <p className="text-gray-700 dark:text-gray-300">No song selected.</p>
                        <audio controls className="w-full mt-2">
                            {/* Example placeholder song */}
                            <source src="https://p.scdn.co/mp3-preview/7b9e7a01dbd8b43fbc3cc3e7acb1d1b4e33de86e?cid=774b29d4f13844c495f206cafdad9c86" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>

                    {/* Button for Mood Detection */}
                    <div className="mt-4">
                        <button
                            onClick={handleMoodDetection}
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Detect Mood
                        </button>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Callback;
