import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { POSTS } from "../../Mock/blogData";
import "./Blog.css";

export default function Blog() {
  const perPage = 4;
  const [page, setPage] = useState(0);

  // ✅ Always read from storage
  const posts = useMemo(() => POSTS, []);


  // const maxPage = Math.max(0, Math.ceil(posts.length / perPage) - 1);
  const start = page * perPage;
  const current = posts.slice(start, start + perPage);

  const prev = () => setPage((p) => (p > 0 ? p - 1 : p));
  // const next = () => setPage((p) => (p < maxPage ? p + 1 : p));

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2>BLOG</h2>
          <p>
            This article explores the real world principles behind product design,
            {/* <br /> */}
            user experience, technology choices, and growth strategies that
            {/* <br /> */}
            define long term success in Web3
          </p>
        </div>

        <div className="blog-row">
          {current.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-card-top">
                <div className={`dot dot-${post.dot}`} />
                <span className="read">{post.read}</span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              {/* ✅ Go to Blogdetails */}
              <Link to={`/blog/${post.id}`} className="blog-arrow" aria-label="Read more">
                →
              </Link>
            
            </article>
          ))}
        </div>

        <div className="blog-controls">
          <button className="circle-btn" onClick={prev} disabled={page === 0}>
            ←
          </button>
          {/* <button
            className="circle-btn"
            onClick={next}
            disabled={page === maxPage}
          >
            →
          </button> */}
          <Link to="/blogpage" className="circle-btn" aria-label="Open blogs">
              →
          </Link>
        </div>
      </div>
    </section>
  );
}
