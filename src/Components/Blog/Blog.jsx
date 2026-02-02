import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { POSTS } from "../../Mock/blogData";
import "./Blog.css";

export default function Blog() {
  const perPage = 3;
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const posts = useMemo(() => POSTS, []);
  const maxPage = Math.max(0, Math.ceil(posts.length / perPage) - 1);

  const start = page * perPage;
  const current = posts.slice(start, start + perPage);

  const prev = () => setPage((p) => (p > 0 ? p - 1 : p));

  // ✅ If not last page, move to next set of 3.
  // ✅ If already last page, go to /blogpage.
  const nextOrGoToBlogPage = () => {
    if (page < maxPage) {
      setPage((p) => p + 1);
    } else {
      navigate("/blogpage");
    }
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2>BLOG</h2>
          <p>
            This article explores the real world principles behind product design,
            <br className="desktop-br"/>
            user experience, technology choices, and growth strategies that
            <br className="desktop-br"/>
            define long term success in Web3
          </p>
        </div>

        <div className="blog-row">
          {current.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-media">
                <img
                  className="blog-img"
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />
              </div>

              <div className="blog-meta">
                <span className="read">{post.read}</span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <Link
                to={`/blog/${post.id}`}
                className="blog-arrow"
                aria-label="Read more"
              >
                →
              </Link>
            </article>
          ))}
        </div>

        <div className="blog-controls">
          <button className="circle-btn" onClick={prev} disabled={page === 0}>
            ←
          </button>

          {/* ✅ Looks the same, but works as Next then BlogPage */}
          <button
            className="circle-btn"
            onClick={nextOrGoToBlogPage}
            aria-label={page < maxPage ? "Next posts" : "Open blogs"}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
