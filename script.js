// replica script: 11 stars canvas + GSAP entrance animations
(() => {
  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ===== canvas stars (11) ===== */
  const canvas = document.getElementById('star-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = innerWidth;
  let H = canvas.height = innerHeight;
  const COUNT = 11;

  class Star {
    constructor(i){
      this.i = i;
      this.reset();
    }
    reset(){
      this.r = 0.8 + Math.random()*3.0;
      // start distributed from left negative to screen to create stagger
      this.x = -Math.random() * (W * 0.6) - (this.i * 10);
      this.y = Math.random() * (H * 0.8) + H * 0.06;
      this.v = 0.25 + Math.random() * 0.9;
      this.alphaBase = 0.45 + Math.random()*0.5;
      this.phase = Math.random()*Math.PI*2;
      this.halo = this.r * (3 + Math.random()*2);
    }
    update(dt){
      this.x += this.v * dt * 0.06;
      this.phase += 0.03 * dt * 0.06;
      this.alpha = this.alphaBase * (0.85 + Math.sin(this.phase)*0.15);
      if(this.x - this.r > W + 100) {
        this.x = -60 - Math.random()*220;
        this.y = Math.random() * (H * 0.8) + H * 0.06;
      }
    }
    draw(){
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      // subtle halo with purple tint
      const g = ctx.createRadialGradient(this.x, this.y, this.r*0.2, this.x, this.y, this.halo);
      g.addColorStop(0,'rgba(180,100,255,0.12)');
      g.addColorStop(1,'rgba(180,100,255,0.0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.halo, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    }
  }

  const stars = [];
  for(let i=0;i<COUNT;i++) stars.push(new Star(i));
  let last = performance.now();
  function loop(now){
    const dt = now - last;
    last = now;
    ctx.clearRect(0,0,W,H);
    // faint gradient overlay
    const g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,'rgba(0,0,0,0.00)');
    g.addColorStop(1,'rgba(0,0,0,0.06)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,W,H);

    for(const s of stars){ s.update(dt); s.draw(); }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  window.addEventListener('resize', ()=> { W = canvas.width = innerWidth; H = canvas.height = innerHeight; });

  /* ===== GSAP entrance animations (match timing from screenshots) ===== */
  gsap.registerPlugin(gsap.plugins ? gsap.plugins.ScrollTrigger : ScrollTrigger);

  const tl = gsap.timeline({defaults:{duration:0.8, ease:"power3.out"}});
  tl.from('.topbar-wrap', {y:-12, autoAlpha:0, duration:0.9}, 0);
  tl.from('.title', {y:22, autoAlpha:0, duration:0.9}, 0.14);
  tl.from('.subtitle', {y:14, autoAlpha:0, duration:0.7}, 0.28);
  tl.from('.cta-row .btn', {y:10, autoAlpha:0, stagger:0.08, duration:0.6}, 0.36);
  tl.from('.device-mock', {y:20, autoAlpha:0, rotationX:6, duration:0.9, transformOrigin:'center top'}, 0.44);

  // reveal cards on scroll
  document.querySelectorAll('.card').forEach((c,i) => {
    gsap.from(c, {
      y:18, autoAlpha:0, duration:0.8, ease:'power3.out',
      scrollTrigger: {trigger:c, start:'top 85%'},
      delay: i*0.06
    });
  });

  // micro interactions
  document.querySelectorAll('.btn, .pill-download, .hamburger').forEach(b=>{
    b.addEventListener('pointerdown', ()=> gsap.to(b,{scale:0.98,duration:0.06}));
    b.addEventListener('pointerup', ()=> gsap.to(b,{scale:1,duration:0.12}));
  });

})();
