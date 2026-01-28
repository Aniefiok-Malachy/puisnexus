import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, POSTS } from "../../Mock/blogData";
import "./BlogPage.css";



export default function BlogPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active ===('All')) return POSTS;
    return POSTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="bp">
      <div className="bp-container">
        <header className="bp-header">
          <h1>
            Web 3.0 <br />
            Marketing Blog
          </h1>

          <nav className="bp-cats" aria-label="Blog categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`bp-cat ${active === c ? "active" : ""}`}
                onClick={() => setActive(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </nav>
        </header>
        
        <div className="bp-grid">
          {filtered.map((post) => (
            <article className="bp-card" key={post.id}>
              <div className="bp-top">
                <span className={`bp-dot ${post.dot}`} />
                <span className="bp-read">{post.read}</span>
              </div>

              <h3 className="bp-title">{post.title}</h3>
              <p className="bp-excerpt">{post.excerpt}</p>

              <Link to={`/blog/${post.id}`} className="bp-arrow" aria-label="Read more">
                →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
