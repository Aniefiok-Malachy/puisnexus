// import React, { useState } from "react";
// import "./Dashboard1.css";
// import logo from "../Assets/Dashboard.png"; // your logo

// const INITIAL_POSTS = [
//   {
//     id: 1,
//     dot: "blue",
//     read: "5 min read",
//     title: "How a Digital Marketing Agency Can Boost Your Business",
//     excerpt:
//       "We are the top digital marketing agency for branding copy. We offer a full range engine...",
//   },
//   { id: 2, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine..." },
//   { id: 3, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine..." },
//   { id: 4, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine..." },
//   { id: 5, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine..." },
//   { id: 6, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine..." },
//   { id: 7, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine..." },
//   { id: 8, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine..." },
// ];

// export default function Dashboard1() {
//   const [posts, setPosts] = useState(INITIAL_POSTS);

//   const deletePost = (id) => {
//     setPosts((prev) => prev.filter((p) => p.id !== id));
//   };

//   const editPost = (id) => {
//     // You can route to edit form or open modal
//     alert(`Edit post ${id}`);
//   };

//   return (
//     <div className="de">
//       {/* Sidebar */}
//       <aside className="de-side">
//         <button className="de-sidebtn" type="button">
//           <span className="de-ic">＋</span>
//           Create New
//         </button>

//         <button className="de-sidebtn active" type="button">
//           <span className="de-ic">✎</span>
//           Edit Existing
//         </button>
//       </aside>

//       {/* Main */}
//       <main className="de-main">
//         <div className="de-top">
//           <img src={logo} alt="" className="de-logo" />
//         </div>

//         <div className="de-grid">
//           {posts.map((p) => (
//             <article className="de-card" key={p.id}>
//               <div className="de-cardtop">
//                 <span className={`de-dot ${p.dot}`} />
//                 <span className="de-read">{p.read}</span>
//               </div>

//               <h3 className="de-title">{p.title}</h3>
//               <p className="de-excerpt">{p.excerpt}</p>

//               <div className="de-actions">
//                 <button
//                   type="button"
//                   className="de-actbtn"
//                   onClick={() => editPost(p.id)}
//                   aria-label="Edit"
//                 >
//                   ✎
//                 </button>

//                 <button
//                   type="button"
//                   className="de-actbtn"
//                   onClick={() => deletePost(p.id)}
//                   aria-label="Delete"
//                 >
//                   🗑
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
