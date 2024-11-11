// import React, { useEffect, useState } from "react";
// import UserDetails from "./UserDetails";
// import GenreSelect from "./GenreSelect";
// import SongsList from "./SongsList";
// import MoodForm from "./MoodForm";

// const Callback = () => {
//     const [userData, setUserData] = useState(null);
//     const [genres, setGenres] = useState([]);
//     const [playlistsByGenre, setPlaylistsByGenre] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const getAccessToken = async () => {
//             const params = new URLSearchParams(window.location.search);
//             const code = params.get('code');

//             if (code) {
//                 const clientId = import.meta.env.VITE_CLIENT_ID;
//                 const clientSecret = import.meta.env.VITE_CLIENT_KEY;
//                 const redirectUri = import.meta.env.VITE_REDIRECTED_URI;

//                 const credentials = btoa(`${clientId}:${clientSecret}`);
//                 try {
//                     const response = await fetch("https://accounts.spotify.com/api/token", {
//                         method: "POST",
//                         headers: {
//                             "Authorization": `Basic ${credentials}`,
//                             "Content-Type": "application/x-www-form-urlencoded",
//                         },
//                         body: new URLSearchParams({
//                             grant_type: "authorization_code",
//                             code: code,
//                             redirect_uri: redirectUri,
//                         }),
//                     });

//                     if (!response.ok) {
//                         console.error("Error fetching access token:", await response.json());
//                         return;
//                     }

//                     const data = await response.json();
//                     // console.log("Access Token:", data.access_token);
//                     localStorage.setItem("access_token", data.access_token);

//                     const userResponse = await fetch("https://api.spotify.com/v1/me", {
//                         headers: {
//                             Authorization: `Bearer ${data.access_token}`,
//                         },
//                     });

//                     if (userResponse.ok) {
//                         const userData = await userResponse.json();
//                         setUserData(userData);
//                     } else {
//                         console.error("Error fetching user details:", await userResponse.json());
//                     }

//                     const genresResponse = await fetch("https://api.spotify.com/v1/browse/categories", {
//                         headers: {
//                             Authorization: `Bearer ${data.access_token}`,
//                         },
//                     });

//                     if (genresResponse.ok) {
//                         const genresData = await genresResponse.json();
//                         setGenres(genresData.categories.items);
//                     } else {
//                         console.error("Error fetching genres:", await genresResponse.json());
//                     }
//                 } catch (error) {
//                     console.error("Error exchanging token:", error);
//                 } finally {
//                     setLoading(false);
//                 }
//             }
//         };

//         getAccessToken();
//     }, []);

//     const fetchPlaylistsByGenre = async (selectedGenres) => {
//         setLoading(true);
//         const token = localStorage.getItem("access_token");

//         try {
//             const playlists = {};
//             for (const genre of selectedGenres) {
//                 const genreResponse = await fetch(`https://api.spotify.com/v1/browse/categories/${genre}/playlists`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (genreResponse.ok) {
//                     const genreData = await genreResponse.json();
//                     playlists[genre] = genreData.playlists.items.slice(0, 5); // Get only top 5 playlists
//                 } else {
//                     console.error(`Error fetching playlists for genre ${genre}:`, await genreResponse.json());
//                 }
//             }
//             setPlaylistsByGenre(playlists);
//         } catch (error) {
//             console.error("Error fetching playlists:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleGenreSubmit = (selectedGenres) => {
//         fetchPlaylistsByGenre(selectedGenres);
//     };

//     const handleMoodSubmit = (mood) => {
//         console.log("User's Mood:", mood);
//     };

//     return (
//         <div>
//             {userData ? (
//                 <div>
//                     <UserDetails userData={userData} />
//                     <GenreSelect genres={genres} onGenreSubmit={handleGenreSubmit} />
//                     <MoodForm onSubmit={handleMoodSubmit} />
//                     <div>
//                         {Object.keys(playlistsByGenre).length > 0 && (
//                             <div>
//                                 {Object.keys(playlistsByGenre).map((genre) => (
//                                     <div key={genre}>
//                                         <h3>Top 5 playlists in {genres.find(g => g.id === genre)?.name}</h3>
//                                         <SongsList songs={playlistsByGenre[genre]} selectedGenreName={genres.find(g => g.id === genre)?.name} loading={loading} />
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             ) : (
//                 <div>Loading...</div>
//             )}
//         </div>
//     );
// };

// export default Callback;
