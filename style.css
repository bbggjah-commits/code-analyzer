:root{
  --bg-dark:#05070a;
  --bg-mid:#071027;
  --accent:#66e0ff;
  --muted:#97b0c6;
  --card:#0b1220;
  --glass: rgba(255,255,255,0.03);
  --radius:14px;
  --text:#e8f6ff;
  font-family: 'Cairo', system-ui, Arial, sans-serif;
}

/* reset */
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{
  min-height:100vh;
  background: radial-gradient(1200px 600px at 10% 10%, rgba(34,58,90,0.20), transparent),
              linear-gradient(180deg,var(--bg-dark),var(--bg-mid));
  color:var(--text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}

/* canvas under everything */
#star-canvas{position:fixed;inset:0;z-index:0;pointer-events:none}

/* subtle grid overlay like الموقع */
.bg-grid{
  position:fixed;inset:0;z-index:1;pointer-events:none;
  background-image:
    linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255,255,255,0.01) 1px, transparent 1px);
  background-size: 160px 160px;
  mix-blend-mode:overlay;
  opacity:0.45;
}

/* wrapper */
.wrap{width:min(1200px,94%);margin-inline:auto;position:relative;z-index:2;display:flex;align-items:center;gap:16px}

/* header */
.site-header{padding:18px 0;position:sticky;top:8px;z-index:6}
.site-header .wrap{display:flex;justify-content:space-between;align-items:center}
.brand{display:flex;align-items:center;gap:10px;font-weight:700}
.brand img{width:40px;height:40px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.6)}
.brand-title{font-size:16px}
.main-nav ul{display:flex;gap:18px;list-style:none}
.main-nav a{color:var(--muted);text-decoration:none;font-size:15px;padding:6px 8px;border-radius:8px}
.main-nav a:hover{color:var(--text);background:rgba(255,255,255,0.02)}

/* actions */
.actions{display:flex;gap:12px;align-items:center}
.icon-btn{background:transparent;border:1px solid rgba(255,255,255,0.03);padding:8px;border-radius:10px;color:var(--muted);cursor:pointer;backdrop-filter:blur(6px)}
.cta{background:linear-gradient(90deg,var(--accent),#6fb9ff);color:#02212b;padding:10px 14px;border-radius:12px;font-weight:700;cursor:pointer}

/* hero */
.hero{padding:80px 0 40px;position:relative;z-index:2}
.hero-inner{display:grid;grid-template-columns:1fr 420px;gap:28px;align-items:center}
.left-panel{padding:12px}
.hero-title{font-size:40px;line-height:1.02;margin-bottom:12px}
.hero-sub{color:var(--muted);margin-bottom:18px;max-width:600px}
.hero-cta{display:flex;gap:12px}
.btn-primary{background:linear-gradient(90deg,var(--accent),#6fb9ff);color:#02212b;padding:12px 16px;border-radius:12px;border:0;font-weight:700;cursor:pointer}
.btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.04);padding:12px 16px;border-radius:12px;color:var(--muted);cursor:pointer}

/* mock card */
.mock-card{
  border-radius:16px;
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding:12px;border:1px solid rgba(255,255,255,0.03);
  box-shadow: 0 16px 46px rgba(2,8,18,0.7);
  backdrop-filter: blur(8px);
  width:100%;
}
.mock-top{display:flex;gap:8px;margin-bottom:10px}
.dot{width:10px;height:10px;border-radius:50%}
.dot.red{background:#ff6b6b}
.dot.yellow{background:#ffd166}
.dot.green{background:#8ce99a}
.mock-body h3{margin-bottom:8px}
.stats{display:flex;gap:10px;margin-top:8px}
.stat{background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent);padding:8px;border-radius:10px;flex:1;text-align:center}
.stat .num{display:block;font-weight:800;font-size:18px}
.card-actions{display:flex;gap:8px;margin-top:12px;justify-content:flex-end}

/* features */
.features{padding:40px 0}
.features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.feature{background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00));padding:20px;border-radius:12px;text-align:center;box-shadow:0 8px 30px rgba(3,9,20,0.6)}
.feature i{font-size:28px;color:var(--accent);margin-bottom:8px}

/* footer */
.site-footer{padding:24px 0;border-top:1px solid rgba(255,255,255,0.02);color:var(--muted)}
.site-footer .wrap{display:flex;justify-content:space-between;align-items:center}

/* entrance helpers (used by JS/GSAP) */
.reveal{opacity:0;transform:translateY(18px) scale(.995)}

/* responsive */
@media (max-width:980px){
  .hero-inner{grid-template-columns:1fr;gap:20px}
  .features-grid{grid-template-columns:1fr}
  .main-nav{display:none}
}
