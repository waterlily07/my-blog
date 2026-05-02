import { useState, useEffect } from "react";

const INITIAL_POSTS = [
  {
    id: 1,
    title: "The Quiet Hours Before Dawn",
    excerpt: "There is a particular kind of silence that exists only between 3 and 5 in the morning — a silence that feels borrowed, provisional, almost sacred.",
    content: "There is a particular kind of silence that exists only between 3 and 5 in the morning — a silence that feels borrowed, provisional, almost sacred. Cities don't sleep so much as they pause, holding their breath between the last drunk's stumble home and the first baker's alarm.\n\nI've spent more of these hours awake than most people would consider wise. Not from insomnia exactly, but from a persistent feeling that something important happens in that dark window — some reshuffling of the world's priorities, some quiet negotiation between what the day demands and what the soul actually needs.\n\nThe best writing I've ever done happened in those hours. Not because I'm more disciplined then, but because I'm more honest. The performances we maintain for ourselves — the curated self-image, the optimistic narrator — go quiet when we're tired enough.",
    author: "Meera Vashisht",
    date: "Apr 28, 2026",
    readTime: "4 min",
    tag: "Reflections",
    tagColor: "#7C5CBF",
    tagBg: "#F0ECFA",
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "On Loving a City That Doesn't Know Your Name",
    excerpt: "Delhi loves you back in the most impersonal way — through its noise, its dust, its inexhaustible supply of samosa and chai at any hour.",
    content: "Delhi loves you back in the most impersonal way — through its noise, its dust, its inexhaustible supply of samosa and chai at any hour. There is no intimacy in how a city holds you. It holds everyone this way.\n\nAnd yet. And yet you find yourself walking the same lane in Lodi Garden three mornings in a row, watching the same woman feed the same crow, and something in you calls it home.\n\nHome might just be the places where your habits have found purchase. Where the chai-wallah knows your order. Where you've cried in public enough times that the park bench feels like a witness rather than furniture.",
    author: "Meera Vashisht",
    date: "Apr 19, 2026",
    readTime: "6 min",
    tag: "City Life",
    tagColor: "#1D9E75",
    tagBg: "#E1F5EE",
    cover: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Everything I Know About Grief I Learned from Monsoon",
    excerpt: "It comes without asking. It saturates everything. And then, without ceremony, it simply stops — leaving behind a smell that is almost unbearably clean.",
    content: "It comes without asking. It saturates everything. And then, without ceremony, it simply stops — leaving behind a smell that is almost unbearably clean.\n\nGrief is weather. That's the thing they don't put on the sympathy cards. They'd rather you think of it as a journey, a process, something with stages and completion. But grief doesn't have a destination. It has seasons.\n\nThe monsoon version of grief is the most honest: loud, total, and then quietly gone, until the same clouds return next year and you realize you've been waiting for them.",
    author: "Meera Vashisht",
    date: "Apr 7, 2026",
    readTime: "5 min",
    tag: "Personal",
    tagColor: "#D85A30",
    tagBg: "#FAECE7",
    cover: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&auto=format&fit=crop&q=60",
  },
];

const TAGS = ["Reflections", "City Life", "Personal", "Literature", "Travel", "Philosophy", "Memory"];
const TAG_COLORS = {
  "Reflections": { color: "#7C5CBF", bg: "#F0ECFA" },
  "City Life": { color: "#1D9E75", bg: "#E1F5EE" },
  "Personal": { color: "#D85A30", bg: "#FAECE7" },
  "Literature": { color: "#185FA5", bg: "#E6F1FB" },
  "Travel": { color: "#BA7517", bg: "#FAEEDA" },
  "Philosophy": { color: "#993556", bg: "#FBEAF0" },
  "Memory": { color: "#3B6D11", bg: "#EAF3DE" },
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body, #root {
    font-family: 'Source Serif 4', Georgia, serif;
    background: #FAFAF7;
    color: #1a1a18;
    min-height: 100vh;
  }

  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(250,250,247,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #E8E8E0;
    padding: 0 2rem;
    display: flex; align-items: center; justify-content: space-between;
    height: 64px;
  }

  .nav-logo {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px; font-weight: 700;
    color: #1a1a18; letter-spacing: -0.5px;
    cursor: pointer;
  }

  .nav-logo span { color: #7C5CBF; font-style: italic; }

  .nav-links { display: flex; gap: 4px; align-items: center; }

  .nav-btn {
    padding: 8px 16px; border-radius: 8px;
    font-family: 'Source Serif 4', serif; font-size: 14px;
    cursor: pointer; border: none; transition: all 0.2s;
    background: transparent; color: #555550;
  }

  .nav-btn:hover { background: #F0ECFA; color: #7C5CBF; }
  .nav-btn.active { background: #7C5CBF; color: white; }

  .nav-btn.write {
    background: #1a1a18; color: white;
    border-radius: 20px; padding: 8px 20px;
  }
  .nav-btn.write:hover { background: #7C5CBF; color: white; }

  /* FEED PAGE */
  .feed-hero {
    padding: 5rem 2rem 3rem;
    max-width: 900px; margin: 0 auto;
    border-bottom: 1px solid #E8E8E0;
  }

  .feed-eyebrow {
    font-size: 11px; letter-spacing: 3px;
    color: #7C5CBF; text-transform: uppercase;
    font-family: 'Source Serif 4', serif;
    margin-bottom: 1rem; font-weight: 600;
  }

  .feed-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 700; line-height: 1.15;
    color: #1a1a18; letter-spacing: -1px;
    margin-bottom: 1.5rem;
  }

  .feed-title em { color: #7C5CBF; }

  .feed-subtitle {
    font-size: 1.1rem; color: #666660;
    line-height: 1.7; max-width: 550px;
    font-style: italic;
  }

  .feed-main { max-width: 900px; margin: 0 auto; padding: 3rem 2rem; }

  .featured-card {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0; background: white;
    border: 1px solid #E8E8E0; border-radius: 16px;
    overflow: hidden; margin-bottom: 3rem;
    cursor: pointer; transition: box-shadow 0.3s;
  }

  .featured-card:hover { box-shadow: 0 12px 48px rgba(0,0,0,0.08); }

  .featured-img { height: 360px; overflow: hidden; }
  .featured-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
  .featured-card:hover .featured-img img { transform: scale(1.03); }

  .featured-body { padding: 2.5rem; display: flex; flex-direction: column; justify-content: center; }

  .post-tag {
    display: inline-block; font-size: 11px;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 4px 10px; border-radius: 20px;
    font-weight: 600; margin-bottom: 1rem;
    font-family: 'Source Serif 4', serif;
  }

  .featured-body h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.7rem; font-weight: 700;
    line-height: 1.25; color: #1a1a18;
    margin-bottom: 1rem; letter-spacing: -0.5px;
  }

  .featured-body p {
    font-size: 0.95rem; line-height: 1.75;
    color: #666660; margin-bottom: 1.5rem;
    font-style: italic;
  }

  .post-meta { font-size: 12px; color: #999990; display: flex; gap: 8px; align-items: center; }
  .meta-dot { color: #ccc; }

  .posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }

  .post-card {
    background: white; border: 1px solid #E8E8E0;
    border-radius: 12px; overflow: hidden;
    cursor: pointer; transition: all 0.25s;
  }
  .post-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }

  .card-img { height: 180px; overflow: hidden; }
  .card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
  .post-card:hover .card-img img { transform: scale(1.04); }

  .card-body { padding: 1.25rem; }
  .card-body h3 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.1rem; font-weight: 700;
    color: #1a1a18; margin: 0.6rem 0 0.5rem;
    line-height: 1.3;
  }
  .card-body p { font-size: 0.85rem; color: #888880; line-height: 1.65; font-style: italic; }

  /* READ PAGE */
  .read-page { max-width: 680px; margin: 0 auto; padding: 3rem 2rem 6rem; }

  .read-back {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 13px; color: #888880; cursor: pointer;
    border: none; background: none; padding: 0;
    font-family: 'Source Serif 4', serif;
    margin-bottom: 2rem; transition: color 0.2s;
  }
  .read-back:hover { color: #7C5CBF; }

  .read-cover { width: 100%; height: 320px; object-fit: cover; border-radius: 12px; margin-bottom: 2.5rem; }

  .read-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 700; line-height: 1.2;
    color: #1a1a18; margin-bottom: 1.5rem;
    letter-spacing: -0.5px;
  }

  .read-meta { display: flex; gap: 12px; align-items: center; padding-bottom: 1.5rem; border-bottom: 1px solid #E8E8E0; margin-bottom: 2rem; flex-wrap: wrap; }

  .read-content { font-size: 1.05rem; line-height: 1.95; color: #333330; }
  .read-content p { margin-bottom: 1.5rem; }

  /* CREATE PAGE */
  .create-page { max-width: 760px; margin: 0 auto; padding: 3rem 2rem 6rem; }

  .create-header { margin-bottom: 2.5rem; }

  .create-header h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2rem; font-weight: 700;
    color: #1a1a18; margin-bottom: 0.4rem;
  }

  .create-header p { font-size: 0.95rem; color: #888880; font-style: italic; }

  .form-group { margin-bottom: 1.75rem; }

  .form-label {
    display: block; font-size: 11px; letter-spacing: 2px;
    text-transform: uppercase; color: #888880;
    font-weight: 600; margin-bottom: 0.5rem;
    font-family: 'Source Serif 4', serif;
  }

  .form-input, .form-textarea, .form-select {
    width: 100%; padding: 12px 16px;
    border: 1px solid #E0E0D8; border-radius: 10px;
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 0.95rem; color: #1a1a18;
    background: white; transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
  }

  .form-input:focus, .form-textarea:focus, .form-select:focus {
    border-color: #7C5CBF;
    box-shadow: 0 0 0 3px rgba(124, 92, 191, 0.1);
  }

  .form-input::placeholder, .form-textarea::placeholder { color: #bbb; font-style: italic; }

  .form-textarea { min-height: 280px; resize: vertical; line-height: 1.8; }

  .title-input {
    font-family: 'Playfair Display', Georgia, serif !important;
    font-size: 1.4rem !important; font-weight: 700;
    border: none !important; border-bottom: 2px solid #E0E0D8 !important;
    border-radius: 0 !important; padding: 12px 0 !important;
    box-shadow: none !important;
  }
  .title-input:focus { border-bottom-color: #7C5CBF !important; }

  .tags-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .tag-option {
    padding: 6px 14px; border-radius: 20px;
    border: 1px solid #E0E0D8; cursor: pointer;
    font-size: 13px; font-family: 'Source Serif 4', serif;
    transition: all 0.2s; background: white; color: #666660;
  }
  .tag-option:hover { border-color: #7C5CBF; color: #7C5CBF; }
  .tag-option.selected { background: #7C5CBF; color: white; border-color: #7C5CBF; }

  .char-count { font-size: 11px; color: #bbb; text-align: right; margin-top: 4px; }

  .publish-btn {
    width: 100%; padding: 16px;
    background: #1a1a18; color: white;
    border: none; border-radius: 12px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.1rem; font-weight: 500;
    cursor: pointer; transition: all 0.3s;
    letter-spacing: 0.3px;
  }
  .publish-btn:hover { background: #7C5CBF; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(124,92,191,0.3); }
  .publish-btn:disabled { background: #ccc; transform: none; box-shadow: none; cursor: not-allowed; }

  .divider { display: flex; align-items: center; gap: 16px; margin: 1.5rem 0; }
  .divider-line { flex: 1; height: 1px; background: #E8E8E0; }
  .divider-text { font-size: 11px; color: #bbb; text-transform: uppercase; letter-spacing: 1px; }

  /* PROFILE PAGE */
  .profile-page { max-width: 900px; margin: 0 auto; padding: 4rem 2rem 6rem; }

  .profile-header {
    display: flex; gap: 3rem; align-items: flex-start;
    padding-bottom: 3rem; border-bottom: 1px solid #E8E8E0;
    margin-bottom: 3rem;
  }

  .avatar-wrap { position: relative; flex-shrink: 0; }

  .avatar {
    width: 110px; height: 110px; border-radius: 50%;
    object-fit: cover; border: 3px solid white;
    box-shadow: 0 0 0 2px #E8E8E0;
  }

  .avatar-ring {
    position: absolute; inset: -6px; border-radius: 50%;
    border: 2px dashed #C4B5E8; animation: spin 20s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .profile-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2rem; font-weight: 700;
    color: #1a1a18; margin-bottom: 0.3rem;
    letter-spacing: -0.5px;
  }

  .profile-handle { font-size: 14px; color: #7C5CBF; margin-bottom: 1rem; }

  .profile-bio {
    font-size: 0.95rem; line-height: 1.75; color: #555550;
    max-width: 480px; font-style: italic; margin-bottom: 1.5rem;
  }

  .profile-stats { display: flex; gap: 2rem; }

  .stat { text-align: center; }
  .stat-num { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #1a1a18; }
  .stat-label { font-size: 11px; color: #999990; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; }

  .profile-tags-section { margin-bottom: 3rem; }
  .section-title {
    font-family: 'Playfair Display', serif; font-size: 1.2rem;
    font-weight: 700; color: #1a1a18; margin-bottom: 1rem;
  }

  .profile-posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }

  .success-toast {
    position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
    background: #1a1a18; color: white;
    padding: 12px 24px; border-radius: 30px;
    font-size: 14px; font-family: 'Source Serif 4', serif;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    animation: slideUp 0.3s ease, fadeOut 0.3s ease 2.5s forwards;
    z-index: 999;
  }

  @keyframes slideUp { from { transform: translate(-50%, 20px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
  @keyframes fadeOut { to { opacity: 0; } }

  @media (max-width: 640px) {
    .featured-card { grid-template-columns: 1fr; }
    .featured-img { height: 220px; }
    .profile-header { flex-direction: column; gap: 1.5rem; align-items: center; text-align: center; }
    .profile-bio { max-width: 100%; }
  }
`;

export default function BlogApp() {
  const [page, setPage] = useState("feed");
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem("blog_posts");
      return saved ? JSON.parse(saved) : INITIAL_POSTS;
    } catch { return INITIAL_POSTS; }
  });
  const [readPost, setReadPost] = useState(null);
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({ title: "", excerpt: "", content: "", tag: "", cover: "" });

  useEffect(() => {
    try { localStorage.setItem("blog_posts", JSON.stringify(posts)); } catch {}
  }, [posts]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const openPost = (post) => { setReadPost(post); setPage("read"); window.scrollTo(0, 0); };

  const handlePublish = () => {
    if (!form.title.trim() || !form.content.trim()) return;
    const tagInfo = TAG_COLORS[form.tag] || TAG_COLORS["Reflections"];
    const newPost = {
      id: Date.now(),
      title: form.title,
      excerpt: form.excerpt || form.content.slice(0, 140) + "…",
      content: form.content,
      author: "Meera Vashisht",
      date: new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }),
      readTime: `${Math.max(1, Math.ceil(form.content.split(" ").length / 200))} min`,
      tag: form.tag || "Reflections",
      tagColor: tagInfo.color,
      tagBg: tagInfo.bg,
      cover: form.cover || "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60",
    };
    setPosts([newPost, ...posts]);
    setForm({ title: "", excerpt: "", content: "", tag: "", cover: "" });
    showToast("✦ Post published successfully");
    setPage("feed");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <div className="nav-logo" onClick={() => setPage("feed")}>
          Ink<span>&</span>Air
        </div>
        <div className="nav-links">
          <button className={`nav-btn ${page === "feed" ? "active" : ""}`} onClick={() => setPage("feed")}>Read</button>
          <button className={`nav-btn ${page === "profile" ? "active" : ""}`} onClick={() => setPage("profile")}>Profile</button>
          <button className="nav-btn write" onClick={() => setPage("create")}>+ Write</button>
        </div>
      </nav>

      {/* FEED */}
      {page === "feed" && (
        <>
          <div className="feed-hero">
            <p className="feed-eyebrow">A journal of small observations</p>
            <h1 className="feed-title">Words that<br/>live <em>quietly</em>.</h1>
            <p className="feed-subtitle">Essays, fragments, and dispatches from the ordinary extraordinary. Written without hurry.</p>
          </div>
          <div className="feed-main">
            {posts[0] && (
              <div className="featured-card" onClick={() => openPost(posts[0])}>
                <div className="featured-img">
                  <img src={posts[0].cover} alt={posts[0].title} />
                </div>
                <div className="featured-body">
                  <span className="post-tag" style={{ background: posts[0].tagBg, color: posts[0].tagColor }}>{posts[0].tag}</span>
                  <h2>{posts[0].title}</h2>
                  <p>{posts[0].excerpt}</p>
                  <div className="post-meta">
                    <span>{posts[0].author}</span>
                    <span className="meta-dot">·</span>
                    <span>{posts[0].date}</span>
                    <span className="meta-dot">·</span>
                    <span>{posts[0].readTime} read</span>
                  </div>
                </div>
              </div>
            )}
            <div className="posts-grid">
              {posts.slice(1).map(post => (
                <div key={post.id} className="post-card" onClick={() => openPost(post)}>
                  <div className="card-img">
                    <img src={post.cover} alt={post.title} />
                  </div>
                  <div className="card-body">
                    <span className="post-tag" style={{ background: post.tagBg, color: post.tagColor }}>{post.tag}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt.slice(0, 100)}…</p>
                    <div className="post-meta" style={{ marginTop: "0.8rem" }}>
                      <span>{post.date}</span>
                      <span className="meta-dot">·</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* READ */}
      {page === "read" && readPost && (
        <div className="read-page">
          <button className="read-back" onClick={() => setPage("feed")}>
            ← Back to journal
          </button>
          <img className="read-cover" src={readPost.cover} alt={readPost.title} />
          <span className="post-tag" style={{ background: readPost.tagBg, color: readPost.tagColor, marginBottom: "1.2rem", display: "inline-block" }}>{readPost.tag}</span>
          <h1 className="read-title">{readPost.title}</h1>
          <div className="read-meta">
            <span style={{ fontWeight: 500 }}>{readPost.author}</span>
            <span className="meta-dot">·</span>
            <span>{readPost.date}</span>
            <span className="meta-dot">·</span>
            <span>{readPost.readTime} read</span>
          </div>
          <div className="read-content">
            {readPost.content.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      )}

      {/* CREATE */}
      {page === "create" && (
        <div className="create-page">
          <div className="create-header">
            <h1>New Entry</h1>
            <p>Write something worth keeping.</p>
          </div>

          <div className="form-group">
            <input
              className="form-input title-input"
              placeholder="A title that earns its place…"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Tag</label>
            <div className="tags-grid">
              {TAGS.map(t => (
                <button key={t} className={`tag-option ${form.tag === t ? "selected" : ""}`} onClick={() => setForm({ ...form, tag: t })}>{t}</button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Excerpt <span style={{ color: "#bbb", textTransform: "none", letterSpacing: 0 }}>(optional — used as preview)</span></label>
            <input
              className="form-input"
              placeholder="One sentence that makes someone want to read more…"
              value={form.excerpt}
              onChange={e => setForm({ ...form, excerpt: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Cover Image URL <span style={{ color: "#bbb", textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
            <input
              className="form-input"
              placeholder="https://…"
              value={form.cover}
              onChange={e => setForm({ ...form, cover: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Body</label>
            <textarea
              className="form-textarea"
              placeholder="Begin with the sentence you've been afraid to write…"
              value={form.content}
              onChange={e => setForm({ ...form, content: e.target.value })}
            />
            <div className="char-count">{form.content.length} characters · ~{Math.max(1, Math.ceil(form.content.split(" ").filter(Boolean).length / 200))} min read</div>
          </div>

          <button
            className="publish-btn"
            onClick={handlePublish}
            disabled={!form.title.trim() || !form.content.trim()}
          >
            Publish to journal
          </button>
        </div>
      )}

      {/* PROFILE */}
      {page === "profile" && (
        <div className="profile-page">
          <div className="profile-header">
            <div className="avatar-wrap">
              <div className="avatar-ring" />
              <img className="avatar" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=220&auto=format&fit=crop&q=80" alt="Profile" />
            </div>
            <div>
              <h1 className="profile-name">Meera Vashisht</h1>
              <p className="profile-handle">@meera.writes</p>
              <p className="profile-bio">
                Writing about cities, grief, and the unremarkable beauty of ordinary hours.
                Based somewhere between Delhi and wherever the next train takes me.
              </p>
              <div className="profile-stats">
                <div className="stat">
                  <div className="stat-num">{posts.length}</div>
                  <div className="stat-label">Posts</div>
                </div>
                <div className="stat">
                  <div className="stat-num">{posts.reduce((a, p) => a + parseInt(p.readTime), 0)}</div>
                  <div className="stat-label">Min Written</div>
                </div>
                <div className="stat">
                  <div className="stat-num">{[...new Set(posts.map(p => p.tag))].length}</div>
                  <div className="stat-label">Topics</div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-tags-section">
            <p className="section-title">Writes about</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[...new Set(posts.map(p => p.tag))].map(tag => {
                const tc = TAG_COLORS[tag] || { color: "#666", bg: "#f5f5f0" };
                return <span key={tag} className="post-tag" style={{ background: tc.bg, color: tc.color }}>{tag}</span>;
              })}
            </div>
          </div>

          <p className="section-title">All posts</p>
          <div className="profile-posts-grid">
            {posts.map(post => (
              <div key={post.id} className="post-card" onClick={() => openPost(post)}>
                <div className="card-img">
                  <img src={post.cover} alt={post.title} />
                </div>
                <div className="card-body">
                  <span className="post-tag" style={{ background: post.tagBg, color: post.tagColor }}>{post.tag}</span>
                  <h3>{post.title}</h3>
                  <div className="post-meta" style={{ marginTop: "0.8rem" }}>
                    <span>{post.date}</span>
                    <span className="meta-dot">·</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {toast && <div className="success-toast">{toast}</div>}
    </>
  );
}