import React from "react";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../../Mock/blogData";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const post = POSTS.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div style={{ padding: 40, color: "white" }}>
        Post not found. <Link to="/blog">Go back</Link>
      </div>
    );
  }

  return (
    <section className="bd-page">
      <div className="bd-wave" />
      <div className="bd-wave bd-wave-2" />

      <div className="bd-container">
        <h1 className="bd-title">{post.title}</h1>

        <div className="bd-meta">
          <span>{post.read}</span>
          <span className="bd-dot">•</span>
          <span>{post.date}</span>
        </div>

        <div className="bd-body">
          {/* If content is one long string */}
          <p>{post.content}</p>

          {/* If later you store content as array of paragraphs:
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          */}
        </div>
      </div>
    </section>
  );
}

