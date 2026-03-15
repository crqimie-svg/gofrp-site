
import React, { useMemo, useState } from "react";
import {
  Crown,
  History,
  BookOpen,
  Globe2,
  ShieldCheck,
  Users,
  Sparkles,
  Radio,
  ScrollText,
  BadgeCheck,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const tabs = [
  {
    id: "management",
    label: "Management GOF",
    icon: Crown,
    badge: "Professional Command Structure",
    title: "Management GOF",
    description:
      "Glorious Of Fame Roleplay diuruskan dengan struktur pentadbiran yang jelas, profesional, dan premium. Fokus utama adalah kestabilan server, pengalaman komuniti, disiplin roleplay, dan pembangunan content secara berterusan.",
    bullets: [
      "Pentadbiran server yang sistematik dan responsif",
      "Pengurusan komuniti, disiplin, dan support yang tersusun",
      "Standard roleplay yang dikawal dengan lebih kemas",
      "Pembangunan event, content, dan branding secara berterusan"
    ]
  },
  {
    id: "history",
    label: "Sejarah GOF",
    icon: History,
    badge: "Legacy & Identity",
    title: "Sejarah GOF",
    description:
      "GOF dibina dengan visi untuk menjadi komuniti roleplay yang eksklusif, matang, dan memiliki identiti tersendiri. Penjenamaan hitam dan emas menonjolkan konsep kemewahan, status, dan pengalaman bermain yang lebih berkualiti.",
    bullets: [
      "Dibangunkan sebagai server roleplay premium",
      "Membina komuniti yang lebih matang dan immersive",
      "Menonjolkan branding mewah berasaskan logo rasmi GOF",
      "Memberi pengalaman yang berbeza daripada server biasa"
    ]
  },
  {
    id: "guide",
    label: "Cara Bermain",
    icon: BookOpen,
    badge: "Entry Guide",
    title: "Cara Bermain",
    description:
      "Pemain hanya perlu menyediakan FiveM, memahami peraturan asas server, dan memasuki GOF melalui pautan rasmi. Selepas itu, pemain boleh membina identiti, jalan cerita, dan kerjaya roleplay mereka sendiri dalam dunia GOF.",
    bullets: [
      "Pasang FiveM dan sediakan keperluan asas roleplay",
      "Masuk ke server menggunakan pautan rasmi GOF",
      "Baca rules, SOP, dan guideline komuniti",
      "Bina karakter, pekerjaan, dan storyline mengikut standard RP"
    ]
  },
  {
    id: "social",
    label: "Social Media",
    icon: Globe2,
    badge: "Official Channels",
    title: "Social Media",
    description:
      "Semua perkembangan penting GOF boleh dipaparkan melalui Discord, TikTok, Instagram, dan platform lain. Bahagian ini membantu branding server, penyampaian pengumuman, dan engagement komuniti secara konsisten.",
    bullets: [
      "Discord rasmi untuk pengumuman, support, dan komuniti",
      "TikTok untuk teaser, cinematic clip, dan promosi",
      "Instagram untuk poster, branding, dan visual premium",
      "Boleh diperluas kepada YouTube, Facebook, dan portal whitelist"
    ]
  }
];

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Identity",
    text: "Visual berasaskan emas dan hitam untuk memberi imej mewah, eksklusif, dan profesional."
  },
  {
    icon: Users,
    title: "Community Driven",
    text: "Reka bentuk fokus kepada komuniti roleplay yang matang, aktif, dan tersusun."
  },
  {
    icon: Sparkles,
    title: "Cinematic Experience",
    text: "Susun atur moden dengan glow, hero section, dan cards yang lebih setaraf server besar."
  }
];

const showcase = [
  {
    icon: Radio,
    title: "Server Status",
    text: "Bahagian khas untuk online status, opening notice, atau seasonal announcement."
  },
  {
    icon: ScrollText,
    title: "Rules & SOP",
    text: "Halaman rules, whitelist info, dan sistem panduan roleplay yang lebih profesional."
  },
  {
    icon: BadgeCheck,
    title: "Official Access",
    text: "Hub untuk semua link penting seperti Discord, TikTok, Instagram, dan cfx join link."
  }
];

const roadmap = [
  "Rules Page",
  "Whitelist Hub",
  "Discord & Social Section",
  "Server Status Panel"
];

export default function App() {
  const [activeTab, setActiveTab] = useState("management");
  const current = useMemo(() => tabs.find((tab) => tab.id === activeTab) ?? tabs[0], [activeTab]);

  return (
    <div className="site-shell">
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="grid-overlay"></div>

      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-icon">
            <Crown size={18} />
          </div>
          <div>
            <div className="brand-title">GLORIOUS OF FAME</div>
            <div className="brand-subtitle">www.gofrp.site</div>
          </div>
        </div>

        <nav className="header-links">
          <a href="https://cfx.re/join/bjbbjl" target="_blank" rel="noreferrer">Join Server</a>
          <a href="#core">Explore</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero-grid">
          <div className="hero-panel">
            <div className="eyebrow">PREMIUM RP EXPERIENCE</div>
            <h1>
              Website GOF versi <span>RP level server besar</span>.
            </h1>
            <p>
              Versi ini dibina semula dengan hero section yang lebih cinematic, glow mewah, susun atur cards moden,
              tab interaktif satu baris, dan ruang khas carta organisasi untuk bahagian pengurusan.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="https://cfx.re/join/bjbbjl" target="_blank" rel="noreferrer">
                Masuk Server GOF
                <ArrowRight size={18} />
              </a>
              <a className="secondary-btn" href="#core">
                Lihat Experience
              </a>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-value">Single Row</div>
                <div className="stat-label">Tab navigation lebih kemas</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Org Chart</div>
                <div className="stat-label">Ruang khas untuk pengurusan</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Premium</div>
                <div className="stat-label">RP server besar feeling</div>
              </div>
            </div>
          </div>

          <div className="logo-panel">
            <img src="/Logo_GOF_png.png" alt="GOF Logo" className="hero-logo" />
          </div>
        </section>

        <section className="feature-grid">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <article className="feature-card" key={item.title}>
                <div className="feature-icon"><Icon size={20} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </section>

        <section className="showcase-grid">
          <div className="showcase-panel">
            <div className="section-kicker">SERVER SHOWCASE</div>
            <h2>Landing page yang terasa lebih besar dan berkelas.</h2>
            <p>
              Struktur ini sesuai untuk diperluaskan kepada server status, player counter, rules page, whitelist hub,
              teaser video, event promo, dan live social updates.
            </p>

            <div className="showcase-list">
              {showcase.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="showcase-item" key={item.title}>
                    <div className="showcase-icon"><Icon size={18} /></div>
                    <div>
                      <div className="showcase-title">{item.title}</div>
                      <div className="showcase-text">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="tabs-panel" id="core">
            <div className="tabs-top">
              <div>
                <div className="section-kicker">GOF CORE SECTIONS</div>
                <h2>Maklumat utama dengan UI lebih hidup.</h2>
              </div>
              <div className="tag-chip">Single Row Tabs</div>
            </div>

            <div className="tabs-row single-row-tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    className={active ? "tab-button active" : "tab-button"}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="tab-content-grid">
              <div className="tab-main-card">
                <div className="content-badge">{current.badge}</div>
                <h3>{current.title}</h3>
                <p>{current.description}</p>
              </div>

              <div className="tab-side-card">
                {current.id === "management" ? (
                  <>
                    <div className="highlight-title">Carta Organisasi</div>
                    <div className="org-chart-box">
                      <img src="/org-chart-placeholder.png" alt="Carta Organisasi GOF" className="org-chart-image" />
                    </div>
                    <p className="org-chart-note">
                      Gantikan fail <strong>public/org-chart-placeholder.png</strong> dengan gambar carta organisasi sebenar untuk update bahagian ini.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="highlight-title">Highlights</div>
                    <div className="bullet-list">
                      {current.bullets.map((item, index) => (
                        <div className="bullet-card" key={index}>
                          <span className="bullet-dot"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="triple-grid">
          <div className="mini-card">
            <div className="mini-kicker">DOMAIN</div>
            <h4>www.gofrp.site</h4>
            <p>Domain rasmi untuk identiti utama website GOF.</p>
          </div>
          <div className="mini-card">
            <div className="mini-kicker">SERVER ACCESS</div>
            <h4>cfx.re/join/bjbbjl</h4>
            <p>Pautan rasmi untuk masuk terus ke server GOF melalui FiveM.</p>
          </div>
          <div className="mini-card">
            <div className="mini-kicker">NEXT UPGRADE</div>
            <h4>Whitelist • Rules • Status</h4>
            <p>Struktur ini sudah sesuai untuk sambungan feature yang lebih besar.</p>
          </div>
        </section>

        <section className="expansion-panel">
          <div className="expansion-copy">
            <div className="section-kicker">READY FOR EXPANSION</div>
            <h2>Website ini sekarang sudah lebih dekat dengan gaya portal server besar.</h2>
            <p>
              Selepas ini, paling sesuai untuk tambah halaman rules, whitelist, official media, player counter, FAQ,
              dan section teaser video supaya keseluruhan pengalaman benar-benar rasa seperti website server roleplay premium berskala besar.
            </p>
          </div>

          <div className="roadmap-list">
            {roadmap.map((item) => (
              <div className="roadmap-item" key={item}>
                <span>{item}</span>
                <ChevronRight size={18} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footer-title">GLORIOUS OF FAME ROLEPLAY</div>
          <div className="footer-subtitle">Premium website concept for www.gofrp.site</div>
        </div>
        <a className="footer-link" href="https://cfx.re/join/bjbbjl" target="_blank" rel="noreferrer">
          Sambung ke Server GOF
        </a>
      </footer>
    </div>
  );
}
