import React, { useEffect, useState } from "react";
import { deletePost, getPosts, updatePost } from "../../Mock/blogStore";
import "./AdminDashboard.css";

export default function AdminDashboardEdit() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const onDelete = (id) => {
    if (!window.confirm("Delete this post?")) return;
    const next = deletePost(id);
    setPosts(next);
  };

  const onQuickEdit = (post) => {
    const title = prompt("New title", post.title);
    if (!title) return;

    const next = updatePost(post.id, { title });
    setPosts(next);
  };

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

            <div className="ad-cardactions">
              <button type="button" onClick={() => onQuickEdit(p)}>
                ✎
              </button>
              <button type="button" onClick={() => onDelete(p.id)}>
                🗑
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
