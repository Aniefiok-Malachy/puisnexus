import React, { useEffect, useState } from "react";
import { getPosts } from "../../Mock/blogStore";
import "./AdminDashboard.css";

export default function AdminDashboardHome() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div className="ad-edit">
      <div className="ad-grid">
        {posts.map((p) => (
          <article className="ad-card" key={p.id}>
            <div className="ad-cardtop">
              <span className={`ad-dot ${p.dot}`} />
              <span className="ad-read">{p.read}</span>
            </div>

            <h3 className="ad-ctitle">{p.title}</h3>
            <p className="ad-cex">{p.excerpt}</p>

            {/* no actions on home view */}
          </article>
        ))}
      </div>
    </div>
  );
}
