import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, POSTS } from "../../Mock/blogData";
import "./BlogPage.css";

// const CATEGORIES = [
//   "All",
//   "DeFi",
//   "GameFi",
//   "NFT",
//   "Marketing",
//   "SEO",
//   "Paid Ads",
//   "PR & Media",
//   "Influencer Marketing",
//   "Community Management",
//   "SMM",
//   "Market Research",
//   "Guides",
//   "Token sale",
//   "Listicles",
// ];

// const POSTS = [
//   {
//     id: 1,
//     dot: "blue",
//     read: "5 min read",
//     title: "How a Digital Marketing Agency Can Boost Your Business",
//     excerpt:
//       "We are the top digital marketing agency for branding copy. We offer a full range engine...",
//     category: "All",
//   },
//   {
//     id: 2,
//     dot: "orange",
//     read: "5 min read",
//     title: "The Latest Trends and Strategies with a Digital Marketing Agency",
//     excerpt:
//       "Working with digital marketing agency has been a true partnership. They have tak...",
//     category: "Marketing",
//   },
//   {
//     id: 3,
//     dot: "purple",
//     read: "5 min read",
//     title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
//     excerpt:
//       "What sets this digital marketing agency apart is their commitment to transparency a...",
//     category: "SEO",
//   },
//   // duplicate to match screenshot density
//   { id: 4, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine...", category: "DeFi" },
//   { id: 5, dot: "orange", read: "5 min read", title: "The Latest Trends and Strategies with a Digital Marketing Agency", excerpt: "Working with digital marketing agency has been a true partnership. They have tak...", category: "PR & Media" },
//   { id: 6, dot: "purple", read: "5 min read", title: "Maximizing ROI with the Expertise of a Digital Marketing Agency", excerpt: "What sets this digital marketing agency apart is their commitment to transparency a...", category: "NFT" },

//   { id: 7, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine...", category: "SMM" },
//   { id: 8, dot: "orange", read: "5 min read", title: "The Latest Trends and Strategies with a Digital Marketing Agency", excerpt: "Working with digital marketing agency has been a true partnership. They have tak...", category: "Paid Ads" },
//   { id: 9, dot: "purple", read: "5 min read", title: "Maximizing ROI with the Expertise of a Digital Marketing Agency", excerpt: "What sets this digital marketing agency apart is their commitment to transparency a...", category: "Guides" },

//   { id: 10, dot: "blue", read: "5 min read", title: "How a Digital Marketing Agency Can Boost Your Business", excerpt: "We are the top digital marketing agency for branding copy. We offer a full range engine...", category: "Token sale" },
//   { id: 11, dot: "orange", read: "5 min read", title: "The Latest Trends and Strategies with a Digital Marketing Agency", excerpt: "Working with digital marketing agency has been a true partnership. They have tak...", category: "Listicles" },
//   { id: 12, dot: "purple", read: "5 min read", title: "Maximizing ROI with the Expertise of a Digital Marketing Agency", excerpt: "What sets this digital marketing agency apart is their commitment to transparency a...", category: "Community Management" },
// ];

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
