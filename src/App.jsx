import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// ── Supabase ──────────────────────────────────────────────────
const SUPABASE_URL = "https://mmqcgafgdapgfbeqjiad.supabase.co";
const SUPABASE_KEY = "sb_publishable_DFSf5s3WMiK97Fnm7HQ5Tw_uLWMAyyR";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── Config ────────────────────────────────────────────────────
const AUTHOR = "Mansha Mehra";
const HANDLE = "@mansha.writes";
const PROFILE_PIC = "https://photos.fife.usercontent.google.com/pw/AP1GczPMGDo2aHH4s4WuUngDk3jlhfT1r2PEepl0XO7imI73FXNiDuYCdFIo=w363-h645-s-no-gm?authuser=0";

const TAGS = ["Reflections", "City Life", "Personal", "Literature", "Travel", "Philosophy", "Memory"];
const TAG_COLORS = {
  "Reflections": { color: "#575527", bg: "#E4E2C8" },
  "City Life":   { color: "#7A5250", bg: "#F5E4E4" },
  "Personal":    { color: "#6B6640", bg: "#EDEBDA" },
  "Literature":  { color: "#7A5250", bg: "#F9EDED" },
  "Travel":      { color: "#575527", bg: "#E2E0C4" },
  "Philosophy":  { color: "#6B5C5B", bg: "#EDD8D8" },
  "Memory":      { color: "#6B6640", bg: "#F0EFE0" },
};

// ── Kitty levels ──────────────────────────────────────────────
const KITTY_LEVELS = [
  {
    level: 1, name: "Newborn Kitten", minPosts: 0,
    art: `<ellipse cx="50" cy="63" rx="20" ry="15" fill="#ECC4C3"/>
<ellipse cx="50" cy="48" rx="15" ry="14" fill="#ECC4C3"/>
<polygon points="38,38 34,26 43,35" fill="#ECC4C3"/>
<polygon points="62,38 66,26 57,35" fill="#ECC4C3"/>
<polygon points="39,37 35,27 43,34" fill="#F9DEDD"/>
<polygon points="61,37 65,27 57,34" fill="#F9DEDD"/>
<ellipse cx="44" cy="49" rx="3" ry="3.5" fill="#575527"/>
<ellipse cx="56" cy="49" rx="3" ry="3.5" fill="#575527"/>
<ellipse cx="44" cy="48.5" rx="1.2" ry="1.5" fill="#2a2a2a"/>
<ellipse cx="56" cy="48.5" rx="1.2" ry="1.5" fill="#2a2a2a"/>
<path d="M46,55 Q50,58 54,55" stroke="#B97D7B" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<ellipse cx="50" cy="54.5" rx="2" ry="1.3" fill="#ECC4C3"/>
<line x1="36" y1="51" x2="27" y2="49" stroke="#928E5E" stroke-width="1"/>
<line x1="36" y1="53" x2="27" y2="53" stroke="#928E5E" stroke-width="1"/>
<line x1="64" y1="51" x2="73" y2="49" stroke="#928E5E" stroke-width="1"/>
<line x1="64" y1="53" x2="73" y2="53" stroke="#928E5E" stroke-width="1"/>
<path d="M50,78 Q44,83 42,90" stroke="#ECC4C3" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  },
  {
    level: 2, name: "Curious Kitten", minPosts: 3,
    art: `<ellipse cx="50" cy="65" rx="23" ry="18" fill="#ECC4C3"/>
<ellipse cx="50" cy="47" rx="18" ry="16" fill="#ECC4C3"/>
<polygon points="36,35 31,21 42,33" fill="#ECC4C3"/>
<polygon points="64,35 69,21 58,33" fill="#ECC4C3"/>
<polygon points="37,34 33,23 42,32" fill="#F9DEDD"/>
<polygon points="63,34 67,23 58,32" fill="#F9DEDD"/>
<ellipse cx="43" cy="48" rx="3.5" ry="4" fill="#575527"/>
<ellipse cx="57" cy="48" rx="3.5" ry="4" fill="#575527"/>
<ellipse cx="43" cy="47.5" rx="1.5" ry="2" fill="#2a2a2a"/>
<ellipse cx="57" cy="47.5" rx="1.5" ry="2" fill="#2a2a2a"/>
<ellipse cx="44" cy="47" rx="0.6" ry="0.8" fill="white"/>
<ellipse cx="58" cy="47" rx="0.6" ry="0.8" fill="white"/>
<path d="M45,55 Q50,59 55,55" stroke="#B97D7B" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<line x1="34" y1="50" x2="23" y2="47" stroke="#928E5E" stroke-width="1.2"/>
<line x1="34" y1="53" x2="23" y2="53" stroke="#928E5E" stroke-width="1.2"/>
<line x1="34" y1="56" x2="23" y2="59" stroke="#928E5E" stroke-width="1.2"/>
<line x1="66" y1="50" x2="77" y2="47" stroke="#928E5E" stroke-width="1.2"/>
<line x1="66" y1="53" x2="77" y2="53" stroke="#928E5E" stroke-width="1.2"/>
<line x1="66" y1="56" x2="77" y2="59" stroke="#928E5E" stroke-width="1.2"/>
<path d="M50,83 Q58,89 62,84 Q66,79 60,75" stroke="#ECC4C3" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
  },
  {
    level: 3, name: "Playful Cat", minPosts: 7,
    art: `<ellipse cx="50" cy="67" rx="26" ry="20" fill="#ECC4C3"/>
<ellipse cx="50" cy="46" rx="20" ry="18" fill="#ECC4C3"/>
<polygon points="34,32 28,16 41,31" fill="#ECC4C3"/>
<polygon points="66,32 72,16 59,31" fill="#ECC4C3"/>
<polygon points="35,31 30,18 41,30" fill="#F9DEDD"/>
<polygon points="65,31 70,18 59,30" fill="#F9DEDD"/>
<ellipse cx="42" cy="46" rx="4" ry="4.5" fill="#575527"/>
<ellipse cx="58" cy="46" rx="4" ry="4.5" fill="#575527"/>
<ellipse cx="42" cy="45.5" rx="1.8" ry="2.2" fill="#2a2a2a"/>
<ellipse cx="58" cy="45.5" rx="1.8" ry="2.2" fill="#2a2a2a"/>
<ellipse cx="43" cy="45" rx="0.7" ry="0.9" fill="white"/>
<ellipse cx="59" cy="45" rx="0.7" ry="0.9" fill="white"/>
<path d="M44,54 Q50,59 56,54" stroke="#B97D7B" stroke-width="2" fill="none" stroke-linecap="round"/>
<line x1="32" y1="47" x2="19" y2="43" stroke="#928E5E" stroke-width="1.3"/>
<line x1="32" y1="51" x2="19" y2="51" stroke="#928E5E" stroke-width="1.3"/>
<line x1="32" y1="55" x2="19" y2="59" stroke="#928E5E" stroke-width="1.3"/>
<line x1="68" y1="47" x2="81" y2="43" stroke="#928E5E" stroke-width="1.3"/>
<line x1="68" y1="51" x2="81" y2="51" stroke="#928E5E" stroke-width="1.3"/>
<line x1="68" y1="55" x2="81" y2="59" stroke="#928E5E" stroke-width="1.3"/>
<path d="M50,87 Q62,94 68,86 Q74,78 64,72" stroke="#B97D7B" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  },
  {
    level: 4, name: "Wise Cat", minPosts: 12,
    art: `<ellipse cx="50" cy="68" rx="28" ry="22" fill="#ECC4C3"/>
<ellipse cx="50" cy="45" rx="22" ry="20" fill="#ECC4C3"/>
<polygon points="32,29 25,12 40,28" fill="#ECC4C3"/>
<polygon points="68,29 75,12 60,28" fill="#ECC4C3"/>
<polygon points="33,28 27,14 40,27" fill="#F9DEDD"/>
<polygon points="67,28 73,14 60,27" fill="#F9DEDD"/>
<ellipse cx="41" cy="45" rx="4.5" ry="5" fill="#575527"/>
<ellipse cx="59" cy="45" rx="4.5" ry="5" fill="#575527"/>
<ellipse cx="41" cy="44" rx="2" ry="2.5" fill="#2a2a2a"/>
<ellipse cx="59" cy="44" rx="2" ry="2.5" fill="#2a2a2a"/>
<ellipse cx="42" cy="43" rx="0.8" ry="1" fill="white"/>
<ellipse cx="60" cy="43" rx="0.8" ry="1" fill="white"/>
<path d="M43,54 Q50,60 57,54" stroke="#B97D7B" stroke-width="2" fill="none" stroke-linecap="round"/>
<line x1="30" y1="46" x2="15" y2="41" stroke="#928E5E" stroke-width="1.4"/>
<line x1="30" y1="50" x2="15" y2="50" stroke="#928E5E" stroke-width="1.4"/>
<line x1="30" y1="54" x2="15" y2="59" stroke="#928E5E" stroke-width="1.4"/>
<line x1="70" y1="46" x2="85" y2="41" stroke="#928E5E" stroke-width="1.4"/>
<line x1="70" y1="50" x2="85" y2="50" stroke="#928E5E" stroke-width="1.4"/>
<line x1="70" y1="54" x2="85" y2="59" stroke="#928E5E" stroke-width="1.4"/>
<path d="M50,90 Q64,98 72,88 Q80,78 68,70" stroke="#B97D7B" stroke-width="4.5" fill="none" stroke-linecap="round"/>
<path d="M36,36 Q50,31 64,36" stroke="#928E5E" stroke-width="1" fill="none" opacity="0.6"/>`,
  },
  {
    level: 5, name: "Ancient Elder Cat", minPosts: 20,
    art: `<ellipse cx="50" cy="69" rx="30" ry="23" fill="#ECC4C3"/>
<ellipse cx="50" cy="44" rx="23" ry="21" fill="#ECC4C3"/>
<polygon points="30,27 22,8 39,26" fill="#ECC4C3"/>
<polygon points="70,27 78,8 61,26" fill="#ECC4C3"/>
<polygon points="31,26 24,10 39,25" fill="#F9DEDD"/>
<polygon points="69,26 76,10 61,25" fill="#F9DEDD"/>
<ellipse cx="40" cy="44" rx="5" ry="5.5" fill="#575527"/>
<ellipse cx="60" cy="44" rx="5" ry="5.5" fill="#575527"/>
<ellipse cx="40" cy="43" rx="2.3" ry="2.8" fill="#2a2a2a"/>
<ellipse cx="60" cy="43" rx="2.3" ry="2.8" fill="#2a2a2a"/>
<ellipse cx="41" cy="42" rx="1" ry="1.2" fill="white"/>
<ellipse cx="61" cy="42" rx="1" ry="1.2" fill="white"/>
<path d="M42,53 Q50,60 58,53" stroke="#B97D7B" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<line x1="28" y1="43" x2="11" y2="37" stroke="#928E5E" stroke-width="1.5"/>
<line x1="28" y1="47" x2="11" y2="47" stroke="#928E5E" stroke-width="1.5"/>
<line x1="28" y1="51" x2="11" y2="57" stroke="#928E5E" stroke-width="1.5"/>
<line x1="72" y1="43" x2="89" y2="37" stroke="#928E5E" stroke-width="1.5"/>
<line x1="72" y1="47" x2="89" y2="47" stroke="#928E5E" stroke-width="1.5"/>
<line x1="72" y1="51" x2="89" y2="57" stroke="#928E5E" stroke-width="1.5"/>
<path d="M50,92 Q66,101 75,89 Q84,77 70,68" stroke="#B97D7B" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M33,34 Q50,29 67,34" stroke="#DDD3C9" stroke-width="1.5" fill="none"/>
<circle cx="50" cy="21" r="7" fill="#ECC4C3" opacity="0.35"/>
<text x="50" y="25" text-anchor="middle" font-size="9" fill="#928E5E">✦</text>`,
  },
];

function getKittyLevel(count) {
  let cur = KITTY_LEVELS[0];
  for (const l of KITTY_LEVELS) { if (count >= l.minPosts) cur = l; }
  const idx = KITTY_LEVELS.indexOf(cur);
  const next = KITTY_LEVELS[idx + 1];
  const progress = next ? Math.round(((count - cur.minPosts) / (next.minPosts - cur.minPosts)) * 100) : 100;
  return { ...cur, progress, next };
}

// ── Styles ────────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --fog: #DDD3C9; --berry: #ECC4C3; --koubai: #B97D7B;
  --mauve: #928E5E; --green: #575527; --parchment: #F7F3EF; --ink: #2E2A20;
}
body, #root { font-family: 'Lora', Georgia, serif; background: var(--parchment); color: var(--ink); min-height: 100vh; }

.nav { position: sticky; top: 0; z-index: 100; background: rgba(247,243,239,0.93); backdrop-filter: blur(14px); border-bottom: 1px solid var(--fog); height: 62px; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; }
.nav-logo { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: var(--green); cursor: pointer; }
.nav-logo span { color: var(--koubai); font-style: italic; }
.nav-links { display: flex; gap: 4px; align-items: center; }
.nav-btn { padding: 7px 15px; border-radius: 20px; font-family: 'Lora', serif; font-size: 14px; cursor: pointer; border: none; background: transparent; color: var(--mauve); transition: all 0.2s; }
.nav-btn:hover { background: var(--berry); color: var(--koubai); }
.nav-btn.active { background: var(--green); color: var(--fog); }
.nav-btn.write { background: var(--koubai); color: white; font-size: 13px; padding: 7px 18px; }
.nav-btn.write:hover { background: var(--green); }

.feed-hero { padding: 5rem 2rem 3rem; max-width: 880px; margin: 0 auto; border-bottom: 1px solid var(--fog); }
.feed-eyebrow { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--koubai); margin-bottom: 1rem; font-weight: 500; }
.feed-title { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 700; line-height: 1.15; color: var(--green); letter-spacing: -1px; margin-bottom: 1.2rem; }
.feed-title em { color: var(--koubai); font-style: italic; }
.feed-sub { font-size: 1rem; color: var(--mauve); line-height: 1.7; font-style: italic; max-width: 500px; }
.feed-main { max-width: 880px; margin: 0 auto; padding: 3rem 2rem; }

.featured-card { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--fog); border-radius: 16px; overflow: hidden; margin-bottom: 3rem; cursor: pointer; background: white; transition: box-shadow 0.3s; }
.featured-card:hover { box-shadow: 0 10px 40px rgba(87,85,39,0.1); }
.featured-img { height: 340px; overflow: hidden; }
.featured-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.featured-card:hover .featured-img img { transform: scale(1.04); }
.featured-body { padding: 2.5rem; display: flex; flex-direction: column; justify-content: center; }
.featured-body h2 { font-family: 'Playfair Display', serif; font-size: 1.55rem; font-weight: 700; line-height: 1.25; color: var(--ink); margin: 0.8rem 0 1rem; }
.featured-body p { font-size: 0.92rem; line-height: 1.8; color: var(--mauve); margin-bottom: 1.5rem; font-style: italic; }

.post-tag { display: inline-block; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; padding: 3px 10px; border-radius: 20px; font-weight: 600; }
.post-meta { font-size: 12px; color: #A89A8A; display: flex; gap: 6px; align-items: center; }
.meta-dot { color: var(--berry); }

.posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(255px, 1fr)); gap: 22px; }
.post-card { background: white; border: 1px solid var(--fog); border-radius: 12px; overflow: hidden; cursor: pointer; transition: all 0.25s; }
.post-card:hover { box-shadow: 0 8px 30px rgba(87,85,39,0.1); transform: translateY(-2px); }
.card-img { height: 175px; overflow: hidden; }
.card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.post-card:hover .card-img img { transform: scale(1.05); }
.card-body { padding: 1.2rem; }
.card-body h3 { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: var(--ink); margin: 0.5rem 0 0.4rem; line-height: 1.3; }
.card-body p { font-size: 0.83rem; color: var(--mauve); line-height: 1.65; font-style: italic; }

.read-page { max-width: 660px; margin: 0 auto; padding: 3rem 2rem 6rem; }
.read-back { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: var(--mauve); cursor: pointer; border: none; background: none; font-family: 'Lora', serif; margin-bottom: 2rem; transition: color 0.2s; }
.read-back:hover { color: var(--koubai); }
.read-cover { width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem; }
.read-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 700; line-height: 1.2; color: var(--green); margin-bottom: 1.2rem; }
.read-meta { display: flex; gap: 10px; align-items: center; padding-bottom: 1.5rem; border-bottom: 1px solid var(--fog); margin-bottom: 2rem; flex-wrap: wrap; }
.read-content { font-size: 1.05rem; line-height: 2; color: #3D3726; }
.read-content p { margin-bottom: 1.5rem; }

.create-page { max-width: 740px; margin: 0 auto; padding: 3rem 2rem 6rem; }
.create-header { margin-bottom: 2.5rem; }
.create-header h1 { font-family: 'Playfair Display', serif; font-size: 1.9rem; font-weight: 700; color: var(--green); margin-bottom: 0.3rem; }
.create-header p { font-size: 0.9rem; color: var(--mauve); font-style: italic; }
.form-group { margin-bottom: 1.75rem; }
.form-label { display: block; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--mauve); font-weight: 600; margin-bottom: 0.5rem; }
.form-input, .form-textarea { width: 100%; padding: 11px 14px; border: 1px solid var(--fog); border-radius: 10px; font-family: 'Lora', serif; font-size: 0.93rem; color: var(--ink); background: white; transition: border-color 0.2s, box-shadow 0.2s; outline: none; }
.form-input:focus, .form-textarea:focus { border-color: var(--koubai); box-shadow: 0 0 0 3px rgba(185,125,123,0.12); }
.form-input::placeholder, .form-textarea::placeholder { color: #C4B8AE; font-style: italic; }
.form-textarea { min-height: 270px; resize: vertical; line-height: 1.85; }
.title-input { font-family: 'Playfair Display', serif !important; font-size: 1.35rem !important; font-weight: 700; border: none !important; border-bottom: 2px solid var(--fog) !important; border-radius: 0 !important; padding: 10px 0 !important; box-shadow: none !important; background: transparent !important; }
.title-input:focus { border-bottom-color: var(--koubai) !important; }
.tags-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.tag-option { padding: 5px 13px; border-radius: 20px; border: 1px solid var(--fog); cursor: pointer; font-size: 12px; font-family: 'Lora', serif; transition: all 0.2s; background: white; color: var(--mauve); }
.tag-option:hover { border-color: var(--koubai); color: var(--koubai); }
.tag-option.selected { background: var(--koubai); color: white; border-color: var(--koubai); }
.char-count { font-size: 11px; color: #C4B8AE; text-align: right; margin-top: 4px; }
.publish-btn { width: 100%; padding: 15px; background: var(--green); color: var(--fog); border: none; border-radius: 12px; font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 600; cursor: pointer; transition: all 0.3s; }
.publish-btn:hover { background: var(--koubai); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(185,125,123,0.3); }
.publish-btn:disabled { background: var(--fog); color: #A89A8A; transform: none; box-shadow: none; cursor: not-allowed; }

.profile-page { max-width: 880px; margin: 0 auto; padding: 4rem 2rem 6rem; }
.profile-header { display: flex; gap: 3rem; align-items: flex-start; padding-bottom: 3rem; border-bottom: 1px solid var(--fog); margin-bottom: 3rem; }
.avatar-wrap { position: relative; flex-shrink: 0; }
.avatar { width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 0 0 2px var(--berry); }
.avatar-ring { position: absolute; inset: -7px; border-radius: 50%; border: 2px dashed var(--koubai); animation: spin 22s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.profile-name { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: var(--green); margin-bottom: 0.2rem; }
.profile-handle { font-size: 14px; color: var(--koubai); margin-bottom: 1rem; }
.profile-bio { font-size: 0.93rem; line-height: 1.8; color: var(--mauve); max-width: 440px; font-style: italic; margin-bottom: 1.5rem; }
.profile-stats { display: flex; gap: 2rem; }
.stat-num { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--green); }
.stat-label { font-size: 10px; color: #A89A8A; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; }

.kitty-card { background: white; border: 1px solid var(--berry); border-radius: 16px; padding: 1.5rem 2rem; display: flex; gap: 2rem; align-items: center; margin-bottom: 3rem; transition: transform 0.4s ease; }
.kitty-level-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--koubai); font-weight: 600; margin-bottom: 4px; }
.kitty-name { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: var(--green); margin-bottom: 0.8rem; }
.kitty-bar-track { height: 8px; background: var(--fog); border-radius: 10px; overflow: hidden; margin-bottom: 6px; }
.kitty-bar { height: 100%; background: linear-gradient(90deg, var(--berry), var(--koubai)); border-radius: 10px; transition: width 0.8s ease; }
.kitty-bar-label { font-size: 11px; color: var(--mauve); font-style: italic; }

.section-title { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700; color: var(--green); margin-bottom: 1rem; }
.profile-posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(255px, 1fr)); gap: 18px; }

.loading { display: flex; justify-content: center; align-items: center; padding: 6rem 2rem; font-style: italic; color: var(--mauve); font-size: 1rem; }
.empty-state { text-align: center; padding: 5rem 2rem; color: var(--mauve); font-style: italic; }
.empty-state h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--green); margin-bottom: 0.5rem; }

.success-toast { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); background: var(--green); color: var(--fog); padding: 11px 24px; border-radius: 30px; font-size: 13px; font-family: 'Lora', serif; box-shadow: 0 6px 24px rgba(87,85,39,0.2); animation: slideUp 0.3s ease, fadeOut 0.3s ease 2.5s forwards; z-index: 999; }
@keyframes slideUp { from { transform: translate(-50%, 16px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
@keyframes fadeOut { to { opacity: 0; } }

@media (max-width: 620px) {
  .featured-card { grid-template-columns: 1fr; } .featured-img { height: 210px; }
  .profile-header { flex-direction: column; align-items: center; text-align: center; }
  .profile-bio { max-width: 100%; } .kitty-card { flex-direction: column; align-items: center; text-align: center; }
}
`;

// ── App ───────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("feed");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readPost, setReadPost] = useState(null);
  const [toast, setToast] = useState(null);
  const [kittyAnim, setKittyAnim] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [form, setForm] = useState({ title: "", excerpt: "", content: "", tag: "", cover: "" });

  // Load posts from Supabase on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setPosts(data);
    setLoading(false);
  }

  const kitty = getKittyLevel(posts.length);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 3000); };
  const openPost = (p) => { setReadPost(p); setPage("read"); window.scrollTo(0, 0); };

  async function handlePublish() {
    if (!form.title.trim() || !form.content.trim()) return;
    setPublishing(true);
    const tc = TAG_COLORS[form.tag] || TAG_COLORS["Reflections"];
    const newPost = {
      title: form.title,
      excerpt: form.excerpt || form.content.slice(0, 140) + "…",
      content: form.content,
      tag: form.tag || "Reflections",
      tag_color: tc.color,
      tag_bg: tc.bg,
      cover: form.cover || "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60",
      read_time: `${Math.max(1, Math.ceil(form.content.split(" ").filter(Boolean).length / 200))} min`,
    };

    const { error } = await supabase.from("posts").insert([newPost]);

    if (error) {
      showToast("Something went wrong. Please try again.");
      setPublishing(false);
      return;
    }

    await fetchPosts();
    setForm({ title: "", excerpt: "", content: "", tag: "", cover: "" });
    setPublishing(false);

    const newKitty = getKittyLevel(posts.length + 1);
    if (newKitty.level > kitty.level) {
      showToast(`✦ Your kitty evolved into "${newKitty.name}"!`);
      setKittyAnim(true); setTimeout(() => setKittyAnim(false), 800);
    } else {
      showToast("✦ Post published! Everyone can see it now 🌸");
    }
    setPage("feed"); window.scrollTo(0, 0);
  }

  // Normalize post fields (Supabase uses snake_case)
  function norm(p) {
    return {
      ...p,
      tagColor: p.tag_color || p.tagColor || "#575527",
      tagBg: p.tag_bg || p.tagBg || "#E4E2C8",
      readTime: p.read_time || p.readTime || "1 min",
      date: p.created_at ? new Date(p.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }) : "",
      author: AUTHOR,
    };
  }

  const normalizedPosts = posts.map(norm);

  return (
    <>
      <style>{css}</style>

      <nav className="nav">
        <div className="nav-logo" onClick={() => { setPage("feed"); fetchPosts(); }}>Mansha<span>'s</span> Journal</div>
        <div className="nav-links">
          <button className={`nav-btn ${page === "feed" ? "active" : ""}`} onClick={() => { setPage("feed"); fetchPosts(); }}>Read</button>
          <button className={`nav-btn ${page === "profile" ? "active" : ""}`} onClick={() => setPage("profile")}>Profile</button>
          <button className="nav-btn write" onClick={() => setPage("create")}>+ Write</button>
        </div>
      </nav>

      {/* ── FEED ── */}
      {page === "feed" && (
        <>
          <div className="feed-hero">
            <p className="feed-eyebrow">A journal of small beauties</p>
            <h1 className="feed-title">Words written<br/>with <em>warmth</em>.</h1>
            <p className="feed-sub">Essays, reflections, and quiet dispatches. Written without hurry, read without rush.</p>
          </div>
          <div className="feed-main">
            {loading ? (
              <div className="loading">Loading posts…</div>
            ) : normalizedPosts.length === 0 ? (
              <div className="empty-state">
                <h3>No posts yet</h3>
                <p>Click "+ Write" to publish your first entry.</p>
              </div>
            ) : (
              <>
                <div className="featured-card" onClick={() => openPost(normalizedPosts[0])}>
                  <div className="featured-img"><img src={normalizedPosts[0].cover} alt={normalizedPosts[0].title} /></div>
                  <div className="featured-body">
                    <span className="post-tag" style={{ background: normalizedPosts[0].tagBg, color: normalizedPosts[0].tagColor }}>{normalizedPosts[0].tag}</span>
                    <h2>{normalizedPosts[0].title}</h2>
                    <p>{normalizedPosts[0].excerpt}</p>
                    <div className="post-meta">
                      <span>{normalizedPosts[0].author}</span><span className="meta-dot">·</span>
                      <span>{normalizedPosts[0].date}</span><span className="meta-dot">·</span>
                      <span>{normalizedPosts[0].readTime} read</span>
                    </div>
                  </div>
                </div>
                <div className="posts-grid">
                  {normalizedPosts.slice(1).map(p => (
                    <div key={p.id} className="post-card" onClick={() => openPost(p)}>
                      <div className="card-img"><img src={p.cover} alt={p.title} /></div>
                      <div className="card-body">
                        <span className="post-tag" style={{ background: p.tagBg, color: p.tagColor }}>{p.tag}</span>
                        <h3>{p.title}</h3>
                        <p>{p.excerpt?.slice(0, 95)}…</p>
                        <div className="post-meta" style={{ marginTop: "0.8rem" }}>
                          <span>{p.date}</span><span className="meta-dot">·</span><span>{p.readTime} read</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}

      {/* ── READ ── */}
      {page === "read" && readPost && (() => { const p = norm(readPost); return (
        <div className="read-page">
          <button className="read-back" onClick={() => setPage("feed")}>← Back to journal</button>
          <img className="read-cover" src={p.cover} alt={p.title} />
          <span className="post-tag" style={{ background: p.tagBg, color: p.tagColor, marginBottom: "1rem", display: "inline-block" }}>{p.tag}</span>
          <h1 className="read-title">{p.title}</h1>
          <div className="read-meta">
            <span style={{ fontWeight: 500 }}>{p.author}</span>
            <span className="meta-dot">·</span><span>{p.date}</span>
            <span className="meta-dot">·</span><span>{p.readTime} read</span>
          </div>
          <div className="read-content">
            {p.content.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      ); })()}

      {/* ── CREATE ── */}
      {page === "create" && (
        <div className="create-page">
          <div className="create-header"><h1>New Entry</h1><p>Write something worth keeping.</p></div>
          <div className="form-group">
            <input className="form-input title-input" placeholder="A title that earns its place…" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="form-label">Tag</label>
            <div className="tags-grid">
              {TAGS.map(t => <button key={t} className={`tag-option ${form.tag === t ? "selected" : ""}`} onClick={() => setForm({ ...form, tag: t })}>{t}</button>)}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Excerpt <span style={{ textTransform: "none", letterSpacing: 0, color: "#C4B8AE" }}>(optional)</span></label>
            <input className="form-input" placeholder="One sentence that makes someone want to read more…" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="form-label">Cover Image URL <span style={{ textTransform: "none", letterSpacing: 0, color: "#C4B8AE" }}>(optional)</span></label>
            <input className="form-input" placeholder="https://…" value={form.cover} onChange={e => setForm({ ...form, cover: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="form-label">Body</label>
            <textarea className="form-textarea" placeholder="Begin with the sentence you've been afraid to write…" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
            <div className="char-count">{form.content.length} chars · ~{Math.max(1, Math.ceil(form.content.split(" ").filter(Boolean).length / 200))} min read</div>
          </div>
          <button className="publish-btn" onClick={handlePublish} disabled={!form.title.trim() || !form.content.trim() || publishing}>
            {publishing ? "Publishing…" : "Publish to journal"}
          </button>
        </div>
      )}

      {/* ── PROFILE ── */}
      {page === "profile" && (
        <div className="profile-page">
          <div className="profile-header">
            <div className="avatar-wrap">
              <div className="avatar-ring" />
              <img className="avatar" src={PROFILE_PIC} alt={AUTHOR} />
            </div>
            <div>
              <h1 className="profile-name">{AUTHOR}</h1>
              <p className="profile-handle">{HANDLE}</p>
              <p className="profile-bio">Writing about cities, softness, and the unremarkable beauty of ordinary hours. Based somewhere between Delhi and wherever the next train takes me.</p>
              <div className="profile-stats">
                <div className="stat"><div className="stat-num">{posts.length}</div><div className="stat-label">Posts</div></div>
                <div className="stat"><div className="stat-num">{normalizedPosts.reduce((a, p) => a + parseInt(p.readTime), 0)}</div><div className="stat-label">Min Written</div></div>
                <div className="stat"><div className="stat-num">{[...new Set(posts.map(p => p.tag))].length}</div><div className="stat-label">Topics</div></div>
              </div>
            </div>
          </div>

          <div className="kitty-card" style={{ transform: kittyAnim ? "scale(1.05)" : "scale(1)" }}>
            <div style={{ flexShrink: 0 }}>
              <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: kitty.art }} />
            </div>
            <div className="kitty-info">
              <div className="kitty-level-label">Blog Companion · Level {kitty.level}</div>
              <div className="kitty-name">{kitty.name}</div>
              <div className="kitty-bar-track"><div className="kitty-bar" style={{ width: `${kitty.progress}%` }} /></div>
              <div className="kitty-bar-label">
                {kitty.next
                  ? `${posts.length} posts · ${kitty.next.minPosts - posts.length} more to evolve into "${kitty.next.name}"`
                  : `${posts.length} posts · Maximum level reached ✦`}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <p className="section-title">Writes about</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[...new Set(posts.map(p => p.tag))].map(tag => {
                const tc = TAG_COLORS[tag] || { color: "#7a6060", bg: "#F5E8E8" };
                return <span key={tag} className="post-tag" style={{ background: tc.bg, color: tc.color }}>{tag}</span>;
              })}
            </div>
          </div>

          <p className="section-title">All posts</p>
          {loading ? <div className="loading">Loading…</div> : (
            <div className="profile-posts-grid">
              {normalizedPosts.map(p => (
                <div key={p.id} className="post-card" onClick={() => openPost(p)}>
                  <div className="card-img"><img src={p.cover} alt={p.title} /></div>
                  <div className="card-body">
                    <span className="post-tag" style={{ background: p.tagBg, color: p.tagColor }}>{p.tag}</span>
                    <h3>{p.title}</h3>
                    <div className="post-meta" style={{ marginTop: "0.8rem" }}>
                      <span>{p.date}</span><span className="meta-dot">·</span><span>{p.readTime} read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {toast && <div className="success-toast">{toast}</div>}
    </>
  );
}