// import React from "react";

// const SongsList = ({ songs, selectedGenreName, loading }) => {
//     return (
//         <div>
//             <h3>Songs in {selectedGenreName ? selectedGenreName : "Selected Genre"}</h3>
//             {loading ? (
//                 <p>Loading songs...</p>
//             ) : (
//                 <div>
//                     {songs.length > 0 ? (
//                         <ul>
//                             {songs.map((song) => (
//                                 <li key={song.id}>
//                                     <h4>{song.name}</h4>
//                                     <p>{song.description}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No songs found for this genre.</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SongsList;
