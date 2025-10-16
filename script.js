/* script.js
   - رندر 11 نجمة تتحرك من اليسار إلى اليمين على canvas
   - شغّل أنيميشن الظهور للعناصر المعلمة data-anim
*/

(() => {
  // ====== ستار كانفاس ======
  const canvas = document.getElementById('star-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = innerWidth;
  let H = canvas.height = innerHeight;
  const STAR_COUNT = 11;

  // نجمة نموذجية
  class Star {
    constructor(i) {
      this.reset(i);
    }
    reset(i){
      this.size = 2 + Math.random() * 3;               // حجم
      this.x = -Math.random() * W * (0.2 + Math.random()); // تبدأ من يسار الشاشة خارج العرض
      this.y = Math.random() * H * 0.9 + H * 0.05;    // ارتفاع عشوائي
      this.speed = 0.2 + Math.random() * 0.9;         // سرعة أفقية
      this.alpha = 0.4 + Math.random() * 0.8;         // شفافية
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.index = i;
    }
    update(dt){
      this.x += this.speed * dt * 0.06; // الحركة
      this.twinklePhase += 0.02 * dt * 0.06;
      // إضاءه تتغير قليلاً
      this.currentAlpha = this.alpha * (0.85 + Math.sin(this.twinklePhase) * 0.15);
      // إعادة التدوير عند الخروج من الجانب الأيمن
      if(this.x - this.size > W + 80) {
        this.x = -40 - Math.random() * 200;
        this.y = Math.random() * H * 0.9 + H * 0.05;
      }
    }
    draw(ctx){
      ctx.save();
      ctx.globalAlpha = this.currentAlpha;
      // رسم نجمة صغيرة كرسم دائري مع تألق
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      // هالة بسيطة
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(125,211,252,0.03)';
      ctx.fill();
      ctx.restore();
    }
  }

  let stars = [];
  for(let i=0;i<STAR_COUNT;i++) stars.push(new Star(i));

  let last = performance.now();
  function loop(now){
    const dt = now - last;
    last = now;
    // واضح أقل كثيراً للحفاظ على أداء
    ctx.clearRect(0,0,W,H);
    // رسم تدرج خلفي خفيف فوق الـcanvas لإندماجٍ أفضل
    const g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0, 'rgba(255,255,255,0.00)');
    g.addColorStop(1, 'rgba(2,6,12,0.06)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,W,H);

    for(const s of stars){
      s.update(dt);
      s.draw(ctx);
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // تغير الحجم مع إعادة حساب
  window.addEventListener('resize', () => {
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
  });

  // ====== أنيميشن للـ DOM (ظهور متتابع) ======
  const animTargets = Array.from(document.querySelectorAll('[data-anim]'));
  function revealSequential() {
    animTargets.forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 80 * i + 60);
    });
  }
  // عند التحميل الأساسي
  window.addEventListener('load', () => {
    revealSequential();

    // سنة في الفوتر
    const y = new Date().getFullYear();
    document.getElementById('year').textContent = y;
  });

  // لاحقاً: أيضاً استخدام IntersectionObserver لظهور عند التمرير
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('in');
    });
  }, {threshold: 0.15});
  animTargets.forEach(t => io.observe(t));

  // تحسين تفاعل الأزرار (نقرة صغيرة)
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.btn, .icon-btn');
    if(!b) return;
    b.animate([{transform:'scale(0.98)'},{transform:'scale(1)'}], {duration:220, easing:'cubic-bezier(.2,.9,.25,1)'});
  });

})();
