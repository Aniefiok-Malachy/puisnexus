import React, { useState } from "react";
import { addPost } from "../../Mock/blogStore";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const emptyForm = {
  title: "",
  excerpt: "",
  content: "",
  category: "Marketing",
  read: "5 min read",
  dot: "blue",
  date: "01 March 2025",
};

export default function AdminDashboardCreate() {
  const nav = useNavigate();
  const [form, setForm] = useState(emptyForm);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return alert("Title is required.");
    if (!form.excerpt.trim()) return alert("Excerpt is required.");
    if (!form.content.trim()) return alert("Content is required.");

    const newPost = { id: Date.now(), ...form };
    addPost(newPost);

    alert("Post created.");
    setForm(emptyForm);
    nav("/admin/dashboard"); // go back to home list
  };

  return (
    <div className="ad-create">
      <h2 className="ad-title">PUIS BLOG DASHBOARD</h2>

      <form className="ad-form" onSubmit={onSubmit}>
        <div className="ad-field">
          <label className="ad-label">TITLE</label>
          <input className="ad-input" name="title" value={form.title} onChange={onChange} />
        </div>

        <div className="ad-field">
          <label className="ad-label">EXCERPT</label>
          <input className="ad-input" name="excerpt" value={form.excerpt} onChange={onChange} />
        </div>

        <div className="ad-field">
          <label className="ad-label">READ DURATION</label>
          <input className="ad-input" name="read" value={form.read} onChange={onChange} />
        </div>

        <div className="ad-field">
          <label className="ad-label">CATEGORY</label>
          <input className="ad-input" name="category" value={form.category} onChange={onChange} />
        </div>

        <div className="ad-field">
          <label className="ad-label">DATE</label>
          <input className="ad-input" name="date" value={form.date} onChange={onChange} />
        </div>

        <div className="ad-field">
          <label className="ad-label">CONTENT</label>
          <textarea
            className="ad-textarea"
            name="content"
            value={form.content}
            onChange={onChange}
            rows={10}
          />
        </div>

        <div className="ad-actions">
          <button className="ad-save" type="submit">
            Save Post
          </button>
        </div>
      </form>
    </div>
  );
}
