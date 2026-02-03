import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../../Mock/blogData";
import "./BlogDetail.css";

/* ✅ ADD THIS HERE (top of file) */
const LINK_MAP = {
  "contact": "https://t.me/Puisnexus", // same link for all “Contact us”
  "ai.nodo.xyz": "https://ai.nodo.xyz",   // different link
};

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default function BlogDetail() {
  const { id } = useParams();
  const post = POSTS.find((p) => p.id === Number(id));

  // ✅ scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  /* ✅ Build regex safely */
  const linkRegex = useMemo(() => {
    const keys = Object.keys(LINK_MAP)
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp)
      .join("|");
    return new RegExp(`(${keys})`, "gi");
  }, []);

  /* ✅ Turns any paragraph text into React nodes with links */
  const renderTextWithLinks = (text) => {
    if (!text) return null;

    const parts = String(text).split(linkRegex);

    return parts.map((part, idx) => {
      const key = part?.toLowerCase?.().trim?.();
      const href = LINK_MAP[key];

      if (!href) return <React.Fragment key={idx}>{part}</React.Fragment>;

      return (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="bd-inline-link"
        >
          {part}
        </a>
      );
    });
  };

  if (!post) {
    return (
      <div style={{ padding: 40, color: "white" }}>
        Post not found. <Link to="/">Go back</Link>
      </div>
    );
  }

  return (
    <section className="bd-page">
      <div className="bd-wave" />
      <div className="bd-wave bd-wave-2" />

      <div className="bd-container">
        <div className="bd-media">
          <img className="bd-img" src={post.image} alt={post.title} loading="lazy" />
        </div>
        <h1 className="bd-title">{post.title}</h1>

        <div className="bd-meta">
          <span>{post.read}</span>
          <span className="bd-dot"></span>
          <span>{post.date}</span>
        </div>

        {/* ✅ CONTENT RENDERER */}
        <div className="bd-body">
          {Array.isArray(post.content) ? (
            post.content.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2 key={i} className="bd-subtitle">
                      {renderTextWithLinks(block.text)}
                    </h2>
                  );

                case "p":
                  return <p key={i}>{renderTextWithLinks(block.text)}</p>;

                case "ul":
                  return (
                    <ul key={i}>
                      {block.items.map((item, idx) => (
                        <li key={idx}>{renderTextWithLinks(item)}</li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })
          ) : (
            <p>{renderTextWithLinks(post.content)}</p>
          )}
        </div>
      </div>
    </section>
  );
}
