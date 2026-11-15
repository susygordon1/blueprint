/* =========================================================
   Seeker of Story — shared site behavior
   ========================================================= */
(function () {
  const D = window.SOS;
  const page = document.body.dataset.page || "home";
  let io; // reveal-on-scroll observer (see bottom)

  /* ---------- Icons ---------- */
  const I = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9L15.5 12z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V9c0-.6.4-1 1-1z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.4 2.2 1.8 3.7 4 4v3.2c-1.5 0-2.9-.4-4-1.2V16a6 6 0 1 1-6-6h.5v3.3a2.8 2.8 0 1 0 2.3 2.7V3z"/></svg>'
  };
  const compass = `<svg class="compass" viewBox="0 0 100 100" aria-hidden="true">
    <defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe6a6"/><stop offset=".5" stop-color="#f0b443"/><stop offset="1" stop-color="#a8681a"/></linearGradient></defs>
    <circle cx="50" cy="50" r="30" fill="none" stroke="url(#cg)" stroke-width="7"/>
    <path d="M50 2 56 44 98 50 56 56 50 98 44 56 2 50 44 44Z" fill="url(#cg)"/>
    <path d="M50 22 53 47 78 50 53 53 50 78 47 53 22 50 47 47Z" fill="#fff6dc" opacity=".9"/>
    <circle cx="50" cy="50" r="4" fill="#fff"/></svg>`;

  const NAV = [
    ["home", "index.html", "Home"], ["stories", "stories.html", "Stories"], ["podcast", "podcast.html", "Podcast"],
    ["community", "community.html", "Community"]
  ];

  /* ---------- Header ---------- */
  const header = document.createElement("header");
  header.className = "site-header" + (page === "home" ? "" : " solid");
  header.innerHTML = `
    <div class="container nav">
      <a class="brand" href="index.html" aria-label="Seeker of Story home">
        <img class="logo-img" src="sos-logo.png" alt="SOS: Seeker of Story" width="117" height="70">
        <span class="brand-tag">A storytelling<br>community<br>for seekers</span>
      </a>
      <ul class="nav-links" id="navLinks">
        ${NAV.map(([k, h, l]) => `<li><a href="${h}" class="${k === page ? "active" : ""}">${l}</a></li>`).join("")}
      </ul>
      <div class="nav-icons">
        <button class="icon-btn" data-open="searchModal" aria-label="Search">${I.search}</button>
        <button class="icon-btn" data-open="accountModal" aria-label="Account">${I.user}</button>
        <button class="icon-btn menu-toggle" id="menuToggle" aria-label="Menu" aria-expanded="false">${I.menu}</button>
      </div>
      <a class="btn btn-gold btn-sm btn-share" href="share.html">Share Your Story</a>
    </div>`;
  document.body.prepend(header);

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const toggle = document.getElementById("menuToggle"), links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.innerHTML = open ? I.close : I.menu;
  });

  /* ---------- Footer ---------- */
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html"><img class="logo-img logo-footer" src="sos-logo.png" alt="SOS: Seeker of Story" width="100" height="60"></a>
          <p>Seeker of Story is a faith-driven community where everyday people share their stories of challenge, transformation and what's next.</p>
          <div class="socials">
            <a href="${D.settings.youtubeChannel}" aria-label="YouTube">${I.youtube}</a>
            <a href="#" aria-label="Instagram">${I.instagram}</a>
            <a href="#" aria-label="Facebook">${I.facebook}</a>
            <a href="#" aria-label="TikTok">${I.tiktok}</a>
          </div>
        </div>
        <div><h4>Explore</h4><ul>
          <li><a href="stories.html">Stories</a></li><li><a href="podcast.html">Podcast</a></li>
          <li><a href="community.html">Community</a></li><li><a href="community.html#resources">Resources</a></li><li><a href="about.html">Our Story</a></li></ul></div>
        <div><h4>Get involved</h4><ul>
          <li><a href="share.html">Share your story</a></li><li><a href="community.html#join">Join the community</a></li>
          <li><a href="community.html#events">Events</a></li><li><a href="#" data-give="Give">Give</a></li><li><a href="about.html#contact">Contact</a></li></ul></div>
        <div><h4>Stay in the story</h4>
          <form class="form" data-form="newsletter" novalidate>
            <input type="email" name="email" placeholder="Your email" required aria-label="Email">
            <button class="btn btn-gold btn-sm" type="submit">Subscribe</button>
            <div class="form-msg" role="status"></div>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Seeker of Story · Powered by <a class="powered" href="https://megamissionmedia.com" target="_blank" rel="noopener">MegaMissionMedia.com</a></span>
        <span>From lost to launched.</span>
      </div>
    </div>`;
  document.body.append(footer);

  /* ---------- Modals ---------- */
  document.body.insertAdjacentHTML("beforeend", `
    <div class="overlay" id="videoModal" role="dialog" aria-modal="true" aria-label="Video player">
      <div class="modal"><button class="icon-btn modal-close" data-close>${I.close}</button>
        <div class="video-frame" id="videoFrame"></div>
        <div class="modal-info" id="videoInfo"></div></div></div>
    <div class="overlay" id="searchModal" role="dialog" aria-modal="true" aria-label="Search">
      <div class="modal"><button class="icon-btn modal-close" data-close>${I.close}</button>
        <div class="search-box"><input type="search" id="siteSearch" placeholder="Search stories, episodes, resources…" autocomplete="off"></div>
        <div class="results" id="searchResults"></div></div></div>
    <div class="overlay" id="giveModal" role="dialog" aria-modal="true" aria-label="Give">
      <div class="modal"><button class="icon-btn modal-close" data-close>${I.close}</button>
        <div class="panel">
          <p class="kicker">Community giving</p>
          <h3 id="giveTitle">Sponsor a Story</h3>
          <p>Online giving is opening soon. Leave your info and we'll reach out personally with how to give.</p>
          <form class="form" data-form="giving" novalidate>
            <input type="hidden" name="interest" id="giveInterest">
            <input type="text" name="name" placeholder="Name" required aria-label="Name">
            <input type="email" name="email" placeholder="Email" required aria-label="Email">
            <input type="text" name="organization" placeholder="Business / organization (optional)" aria-label="Organization">
            <button class="btn btn-gold" type="submit">Count me in</button>
            <div class="form-msg" role="status"></div>
          </form>
        </div></div></div>
    <div class="overlay" id="accountModal" role="dialog" aria-modal="true" aria-label="Account">
      <div class="modal"><button class="icon-btn modal-close" data-close>${I.close}</button>
        <div class="panel">
          <p class="kicker">Seeker account</p>
          <h3>Member sign-in is coming soon</h3>
          <p>Accounts will let you save stories, join Seeker Circles and track your own story submission. Get on the list and we'll let you know when it opens.</p>
          <form class="form" data-form="community" novalidate>
            <input type="text" name="name" placeholder="First name" required aria-label="First name">
            <input type="email" name="email" placeholder="Email" required aria-label="Email">
            <input type="hidden" name="source" value="account-waitlist">
            <button class="btn btn-gold" type="submit">Notify me</button>
            <div class="form-msg" role="status"></div>
          </form>
        </div></div></div>`);

  let lastFocus = null;
  function openModal(id) {
    lastFocus = document.activeElement;
    const m = document.getElementById(id); m.classList.add("open");
    document.body.style.overflow = "hidden";
    const f = m.querySelector("input:not([type=hidden]), button"); f && setTimeout(() => f.focus(), 30);
  }
  function closeModal(m) {
    m.classList.remove("open"); document.body.style.overflow = "";
    if (m.id === "videoModal") document.getElementById("videoFrame").innerHTML = "";
    lastFocus && lastFocus.focus();
  }
  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-open]"); if (o) { e.preventDefault(); openModal(o.dataset.open); }
    const c = e.target.closest("[data-close]"); if (c) closeModal(c.closest(".overlay"));
    if (e.target.classList && e.target.classList.contains("overlay")) closeModal(e.target);
    const p = e.target.closest("[data-play]"); if (p) { e.preventDefault(); playVideo(p.dataset.play); }
    const g = e.target.closest("[data-give]");
    if (g) {
      e.preventDefault();
      if (D.giving.donateLink) { location.href = D.giving.donateLink; return; }
      document.getElementById("giveTitle").textContent = g.dataset.give || "Give";
      document.getElementById("giveInterest").value = g.dataset.give || "";
      openModal("giveModal");
    }
    const cp = e.target.closest("[data-copy-link]");
    if (cp) { navigator.clipboard && navigator.clipboard.writeText(location.href).then(() => { cp.textContent = "Link copied!"; }).catch(() => { cp.textContent = "Copy the page address to share"; }); }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelectorAll(".overlay.open").forEach(closeModal);
    if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openModal("searchModal"); }
  });

  /* ---------- Video ---------- */
  const allMedia = () => [...D.stories, ...D.episodes];
  function playVideo(id) {
    const item = allMedia().find((x) => x.id === id); if (!item) return;
    const frame = document.getElementById("videoFrame");
    frame.innerHTML = item.youtubeId
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0" title="${esc(item.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
      : `<div class="ph"><h3 style="color:var(--cream)">Video coming soon</h3><p>This story will play here once its YouTube video is connected.</p></div>`;
    document.getElementById("videoInfo").innerHTML =
      `<span class="tag">${esc(item.category || "Podcast · Episode " + item.number)}</span><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p>`;
    openModal("videoModal");
  }

  /* ---------- Rendering helpers ---------- */
  function esc(s) { return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function thumb(item) {
    const img = item.youtubeId ? `<img src="https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg" alt="" loading="lazy">` : `<span class="ph-label">Video coming soon</span>`;
    return `<button class="thumb" data-play="${item.id}" aria-label="Play ${esc(item.title)}">${img}<span class="play">${I.play}</span>${item.duration ? `<span class="duration">${esc(item.duration)}</span>` : ""}</button>`;
  }
  const seekerById = (id) => (D.seekers || []).find((x) => x.id === id);
  const initials = (n) => String(n || "?").split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  function avatar(sk, size) {
    return sk && sk.photo ? `<img class="avatar ${size || ""}" src="${esc(sk.photo)}" alt="">`
      : `<span class="avatar ${size || ""}" aria-hidden="true">${esc(initials(sk ? sk.name : ""))}</span>`;
  }
  function storyCard(s) {
    const sk = seekerById(s.seekerId);
    const by = sk ? `<a class="byline" href="profile.html#${sk.id}">${avatar(sk, "sm")}<span>${esc(sk.name)}</span></a>` : "";
    return `<article class="card reveal">${thumb(s)}<div class="card-body">
      <span class="tag">${esc(s.category)}</span><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p>
      <div class="meta">${by}</div></div></article>`;
  }
  function seekerCard(sk) {
    const n = D.stories.filter((x) => x.seekerId === sk.id).length;
    return `<a class="seeker-card reveal" href="profile.html#${sk.id}">
      ${avatar(sk, "lg")}
      <h3>${esc(sk.name)}</h3><span class="city">${esc(sk.city)}</span>
      <p>"${esc(sk.headline)}"</p>
      <span class="seeker-foot">${n} ${n === 1 ? "story" : "stories"}${sk.sponsored ? ' · <span class="badge">Sponsored Story</span>' : ""}</span>
    </a>`;
  }
  window.SOSRender = { storyCard, seekerCard, thumb, esc, playVideo, avatar, seekerById };

  // Seekers (home)
  const seekerGrid = document.getElementById("seekerGrid");
  if (seekerGrid) seekerGrid.innerHTML = (D.seekers || []).slice(0, 4).map(seekerCard).join("");

  // Giving tiers
  const tiersEl = document.getElementById("givingTiers");
  if (tiersEl) tiersEl.innerHTML = D.giving.tiers.map((t) => `
    <div class="tier reveal ${t.featured ? "featured-tier" : ""}">
      ${t.featured ? '<span class="tier-flag">Most meaningful</span>' : ""}
      <h3>${esc(t.name)}</h3><span class="tier-price">${esc(t.price)}</span><p>${esc(t.text)}</p>
      <button class="btn ${t.featured ? "btn-gold" : "btn-ghost"}" data-give="${esc(t.name)}">${esc(t.cta)}</button>
    </div>`).join("");

  // Profile page
  const profileEl = document.getElementById("profile");
  if (profileEl) {
    const drawProfile = () => {
      const sk = seekerById(decodeURIComponent(location.hash.slice(1)));
      if (!sk) { profileEl.innerHTML = `<div class="container" style="padding:180px 0 80px;text-align:center"><h1 style="font-family:var(--serif)">Seeker not found</h1><p><a class="link-arrow" href="stories.html">Browse all stories →</a></p></div>`; return; }
      document.title = sk.name + " | Seeker of Story";
      const mine = D.stories.filter((x) => x.seekerId === sk.id);
      profileEl.innerHTML = `
        <header class="page-hero profile-hero"><div class="container">
          ${avatar(sk, "xl")}
          <h1>${esc(sk.name)}</h1>
          <p class="city">${esc(sk.city)}${sk.sponsored ? ` · <span class="badge">${sk.sponsor ? "Story sponsored by " + esc(sk.sponsor.name) : "Story sponsored by the community"}</span>` : ""}</p>
          <p class="profile-headline">"${esc(sk.headline)}"</p>
        </div></header>
        <section class="section-light"><div class="container">
          <div class="profile-grid">
            <div><p class="kicker">About</p><p class="lead">${esc(sk.bio)}</p>
              <div class="hero-ctas" style="justify-content:flex-start;margin-top:1.4rem">
                <button class="btn btn-dark" data-give="Encourage ${esc(sk.name)}">Encourage ${esc(sk.name.split(" ")[0])}</button>
                <button class="btn btn-ghost dark-ghost" data-copy-link>Share profile</button>
              </div></div>
            <div><p class="kicker">${mine.length} ${mine.length === 1 ? "story" : "stories"}</p>
              <div class="grid grid-2">${mine.map(storyCard).join("")}</div></div>
          </div>
          ${sk.sponsor ? `
          <aside class="sponsor-spot reveal">
            <div>
              <p class="kicker">${sk.sponsor.self ? esc(sk.name.split(" ")[0]) + "'s business · Story sponsor" : "Story sponsor"}</p>
              ${sk.sponsor.logo ? `<img class="sponsor-logo" src="${esc(sk.sponsor.logo)}" alt="${esc(sk.sponsor.name)}">` : `<h3>${esc(sk.sponsor.name)}</h3>`}
              ${sk.sponsor.tagline ? `<p>${esc(sk.sponsor.tagline)}</p>` : ""}
              <ul class="sponsor-info">
                ${sk.sponsor.address ? `<li>${esc(sk.sponsor.address)}</li>` : ""}
                ${sk.sponsor.email ? `<li>${esc(sk.sponsor.email)}</li>` : ""}
              </ul>
            </div>
            <a class="btn btn-gold" href="${esc(sk.sponsor.url)}" target="_blank" rel="noopener">Visit ${esc(sk.sponsor.name)} →</a>
          </aside>` : ""}
        </div></section>`;
      observe();
    };
    window.addEventListener("hashchange", drawProfile); drawProfile();
  }

  // Featured stories (home)
  const featuredEl = document.getElementById("featuredStories");
  if (featuredEl) featuredEl.innerHTML = D.stories.filter((s) => s.featured).slice(0, 3).map(storyCard).join("");

  // Stories page with filters
  const storyGrid = document.getElementById("storyGrid");
  if (storyGrid) {
    const chipsEl = document.getElementById("storyChips"), q = document.getElementById("storySearch");
    let cat = "All";
    const fromHash = decodeURIComponent(location.hash.slice(1)).toLowerCase();
    const match = D.categories.find((c) => c.toLowerCase().replace(/[^a-z]/g, "") === fromHash.replace(/[^a-z]/g, ""));
    if (match) cat = match;
    const draw = () => {
      chipsEl.innerHTML = ["All", ...D.categories].map((c) => `<button class="chip ${c === cat ? "active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
      const term = (q.value || "").toLowerCase();
      const list = D.stories.filter((s) => (cat === "All" || s.category === cat) && (s.title + s.summary + ((seekerById(s.seekerId) || {}).name || "")).toLowerCase().includes(term));
      storyGrid.innerHTML = list.length ? list.map(storyCard).join("") : `<p class="empty">No stories match yet. Check back soon, or <a class="link-arrow" href="share.html">share yours</a>.</p>`;
      observe();
    };
    chipsEl.addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (b) { cat = b.dataset.cat; draw(); } });
    q.addEventListener("input", draw);
    draw();
  }

  // Podcast episodes
  const epList = document.getElementById("episodeList");
  if (epList) epList.innerHTML = D.episodes.map((e) => `
    <article class="episode reveal">
      <div class="ep-num">${String(e.number).padStart(2, "0")}<small>EPISODE</small></div>
      <div><h3>${esc(e.title)}</h3><p>${esc(e.summary)}</p><span class="res-type">${esc(e.duration)} · ${esc(e.date)}</span></div>
      <button class="btn btn-gold btn-sm" data-play="${e.id}">${I.play.replace("<svg", '<svg width="14" height="14"')} Listen</button>
    </article>`).join("");
  document.querySelectorAll("[data-platform]").forEach((a) => { a.href = D.settings.podcastLinks[a.dataset.platform] || "#"; });
  document.querySelectorAll("[data-youtube]").forEach((a) => { a.href = D.settings.youtubeChannel; });

  // Events
  const evEl = document.getElementById("eventList");
  if (evEl) evEl.innerHTML = D.events.map((e) => `
    <div class="event reveal"><div class="date"><b>${esc(e.day)}</b><span>${esc(e.month)}</span></div>
      <div><h3>${esc(e.title)}</h3><p>${esc(e.detail)}</p></div>
      <a class="btn btn-dark btn-sm" href="#join">${esc(e.cta)}</a></div>`).join("");

  // Resources
  const resGrid = document.getElementById("resourceGrid");
  if (resGrid) {
    const chipsEl = document.getElementById("resChips");
    const cats = ["All", ...new Set(D.resources.map((r) => r.category))];
    let cat = "All";
    const draw = () => {
      chipsEl.innerHTML = cats.map((c) => `<button class="chip ${c === cat ? "active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
      resGrid.innerHTML = D.resources.filter((r) => cat === "All" || r.category === cat).map((r) => `
        <article class="card reveal"><div class="card-body">
          <span class="tag">${esc(r.category)}</span><h3>${esc(r.title)}</h3><p>${esc(r.summary)}</p>
          <span class="meta">${esc(r.type)} · <a class="link-arrow" href="#" data-open="accountModal">Get notified when it's ready →</a></span>
        </div></article>`).join("");
      observe();
    };
    chipsEl.addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (b) { cat = b.dataset.cat; draw(); } });
    draw();
  }

  /* ---------- Search ---------- */
  const index = [
    ...D.stories.map((s) => ({ type: "Story", title: s.title, text: s.summary, play: s.id })),
    ...D.episodes.map((e) => ({ type: "Podcast", title: e.title, text: e.summary, play: e.id })),
    ...D.resources.map((r) => ({ type: "Resource", title: r.title, text: r.summary, href: "community.html#resources" })),
    { type: "Page", title: "Our Story", text: "About Seeker of Story and our founder", href: "about.html" },
    { type: "Page", title: "Events", text: "Story Nights, Seeker Circles and workshops", href: "community.html#events" },
    ...NAV.map(([, h, l]) => ({ type: "Page", title: l, text: "", href: h })),
    ...(D.seekers || []).map((k) => ({ type: "Seeker", title: k.name, text: k.headline, href: "profile.html#" + k.id })),
    { type: "Page", title: "Share Your Story", text: "Submit your story to be featured", href: "share.html" }
  ];
  const sIn = document.getElementById("siteSearch"), sOut = document.getElementById("searchResults");
  sIn.addEventListener("input", () => {
    const t = sIn.value.trim().toLowerCase();
    if (!t) { sOut.innerHTML = ""; return; }
    const hits = index.filter((x) => (x.title + " " + x.text).toLowerCase().includes(t)).slice(0, 12);
    sOut.innerHTML = hits.length ? hits.map((h) => h.play
      ? `<a class="result" href="#" data-play="${h.play}"><small>${h.type}</small><strong> ${esc(h.title)}</strong><div>${esc(h.text)}</div></a>`
      : `<a class="result" href="${h.href}"><small>${h.type}</small><strong> ${esc(h.title)}</strong><div>${esc(h.text)}</div></a>`).join("")
      : `<p class="empty">Nothing found for "${esc(sIn.value)}".</p>`;
  });

  /* ---------- Forms ---------- */
  const DRAFT_KEY = "sos-story-draft";
  document.querySelectorAll("form[data-form]").forEach((form) => {
    const kind = form.dataset.form, msg = form.querySelector(".form-msg");
    if (kind === "story") {
      try { const d = JSON.parse(localStorage.getItem(DRAFT_KEY) || "{}"); Object.entries(d).forEach(([k, v]) => { const f = form.elements[k]; if (f && f.type !== "checkbox" && f.type !== "file") f.value = v; }); } catch (_) {}
      form.addEventListener("input", () => {
        try { const o = {}; [...form.elements].forEach((f) => { if (f.name && f.type !== "checkbox" && f.type !== "file") o[f.name] = f.value; }); localStorage.setItem(DRAFT_KEY, JSON.stringify(o)); } catch (_) {}
      });
    }
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      msg.className = "form-msg";
      if (!form.checkValidity()) {
        const bad = form.querySelector(":invalid"); bad && bad.focus();
        msg.textContent = "Please fill in the required fields."; msg.classList.add("show", "err"); return;
      }
      const endpoint = D.settings.formEndpoints[kind];
      const btn = form.querySelector("[type=submit]"); btn.disabled = true;
      try {
        if (endpoint) {
          const r = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
          if (!r.ok) throw new Error("bad status");
        }
        msg.textContent = {
          story: "Thank you for trusting us with your story. Our team will read it and reach out about next steps.",
          newsletter: "You're in! Watch your inbox for new stories.",
          community: "Welcome, Seeker! We'll be in touch with next steps.",
          contact: "Thanks for reaching out. We'll reply soon.",
          giving: "Thank you for your generosity! We'll be in touch soon."
        }[kind];
        msg.classList.add("show"); form.reset();
        if (kind === "story") try { localStorage.removeItem(DRAFT_KEY); } catch (_) {}
      } catch (_) {
        msg.textContent = `Something went wrong sending that. Please try again, or email us at ${D.settings.email}.`;
        msg.classList.add("show", "err");
      } finally { btn.disabled = false; }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  function observe() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    io = io || new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
    els.forEach((el) => io.observe(el));
  }
  observe();
})();
