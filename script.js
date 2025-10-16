/* script.js
   - يحاكي الأنيميشن من الفيديو بدقة عالية
   - يرسم 11 نجمة تتحرك من اليسار إلى اليمين
   - يستخدم GSAP لتوقيت متطابق لتأثيرات الدخول والحركات الدقيقة
*/

(() => {
  // ==== year footer ====
  document.getElementById('year').textContent = new Date().getFullYear();

  // ==== Canvas النجوم (11 نجمة) ====
  const canvas = document.getElementById('star-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = innerWidth;
  let H = canvas.height = innerHeight;
  const STAR_COUNT = 11;
  // تحكم بالسرعات لتطابق حركة الفيديو
  class Star {
    constructor(i){
      this.i = i;
      this.init();
    }
    init(){
      this.size = 0.8 + Math.random()*3.2;
      // توزيع X يبدأ من -random حتى داخل الشاشة ل stagger
      this.x = -Math.random() * (W * 0.6) - (this.i * 20);
      this.y = Math.random() * (H * 0.72) + H * 0.06;
      this.speed = 0.4 + Math.random() * 1.1;
      this.alphaBase = 0.35 + Math.random()*0.7;
      this.phase = Math.random() * Math.PI * 2;
      this.halo = this.size * (2.8 + Math.random()*1.6);
    }
    update(dt){
      this.x += this.speed * dt * 0.06;
      this.phase += 0.03 * dt * 0.06;
      this.alpha = this.alphaBase * (0.9 + Math.sin(this.phase)*0.12);
      if(this.x - this.size > W + 80) {
        this.x = -60 - Math.random()*260;
        this.y = Math.random() * (H * 0.72) + H * 0.06;
      }
    }
    draw(){
      ctx.save();
      ctx.globalAlpha = this.alpha;
      // core
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      // halo
      const g = ctx.createRadialGradient(this.x, this.y, this.size*0.2, this.x, this.y, this.halo);
      g.addColorStop(0, 'rgba(102,224,255,0.12)');
      g.addColorStop(1, 'rgba(102,224,255,0.0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.halo, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    }
  }

  const stars = [];
  for(let i=0;i<STAR_COUNT;i++) stars.push(new Star(i));

  let last = performance.now();
  function loop(now){
    const dt = now - last;
    last = now;
    ctx.clearRect(0,0,W,H);

    // subtle top-to-bottom gradient overlay
    const grad = ctx.createLinearGradient(0,0,0,H);
    grad.addColorStop(0,'rgba(255,255,255,0.00)');
    grad.addColorStop(1,'rgba(2,6,12,0.06)');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,W,H);

    for(const s of stars){
      s.update(dt);
      s.draw();
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  window.addEventListener('resize', () => {
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
  });

  // ==== GSAP entrance animations متطابقة توقيتياً ====
  const brand = document.getElementById('brand');
  const heroTitle = document.querySelector('.hero-title');
  const heroSub = document.querySelector('.hero-sub');
  const leftBtns = document.querySelectorAll('.left-panel .btn-primary, .left-panel .btn-ghost');
  const mock = document.querySelector('.mock-card');
  const navItems = document.querySelectorAll('.main-nav a');
  const features = document.querySelectorAll('.feature');

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({defaults:{duration:0.8, ease:"power3.out"}});

  // header items
  tl.from(brand, {y:-10, autoAlpha:0, duration:0.8}, 0);
  tl.from('.actions .icon-btn', {y:-6, autoAlpha:0, stagger:0.06}, 0.05);
  tl.from('.actions .cta', {scale:0.95, autoAlpha:0, duration:0.6}, 0.08);
  tl.from(navItems, {y:-8, autoAlpha:0, stagger:0.05}, 0.12);

  // hero sequence matching video timing
  tl.from(heroTitle, {y:18, autoAlpha:0, duration:0.9, ease:"power4.out"}, 0.28);
  tl.from(heroSub, {y:12, autoAlpha:0, duration:0.7}, 0.36);
  tl.from(leftBtns, {y:10, autoAlpha:0, stagger:0.08, duration:0.6}, 0.44);

  // right mock card (3D subtle pop)
  tl.from(mock, {x:40, rotationX:6, autoAlpha:0, transformOrigin:"left center", duration:0.9, ease:"power4.out"}, 0.38);

  // features reveal on scroll
  features.forEach((f,i) => {
    gsap.from(f, {
      y: 18,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {trigger: f, start: "top 85%"},
      delay: i * 0.06
    });
  });

  // small hover micro-interactions
  const iconBtns = document.querySelectorAll('.icon-btn');
  iconBtns.forEach(b=>{
    b.addEventListener('mouseenter', ()=> gsap.to(b, {scale:1.06, duration:0.18}));
    b.addEventListener('mouseleave', ()=> gsap.to(b, {scale:1, duration:0.18}));
  });

  // subtle floating for mock-card to match الفيديو vibe
  gsap.to(mock, {y:6, rotation:-0.3, duration:4.6, yoyo:true, repeat:-1, ease:"sine.inOut", delay:1.2});

  // clickable press feedback
  document.addEventListener('pointerdown', e=>{
    const btn = e.target.closest('button, .icon-btn, .cta');
    if(!btn) return;
    gsap.to(btn, {scale:0.97, duration:0.08});
  });
  document.addEventListener('pointerup', e=>{
    const btn = e.target.closest('button, .icon-btn, .cta');
    if(!btn) return;
    gsap.to(btn, {scale:1, duration:0.12});
  });

  // ensure elements that should initially be visible are shown if JS loads late
  [brand, heroTitle, heroSub, mock].forEach(el=>{
    if(el) el.style.opacity = 1;
  });

})();
