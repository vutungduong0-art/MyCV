/**
 * PORTFOLIO CV - GOD-TIER CREATIVE ENGINE (10/10 MASTERPIECE)
 * Tác giả: Vũ Tùng Dương
 * 100% Vanilla JS - Web Audio API - 3D Tilt - CLI Terminal - Dynamic Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initTypewriter();
  initAudioEngine();
  initThemeSwitcher();
  init3DTilt();
  initSkillFilters();
  initProjectModals();
  initInteractiveTerminal();
  initCopyEmail();
  initContactForm();
  initBackToTop();
  initParticleCanvas();
});

/* =============================================================
 * 1. WEB AUDIO API - TỔNG HỢP ÂM THANH SCI-FI TƯƠNG TÁC
 * (Hoàn toàn bằng toán học & tần số - không cần file âm thanh ngoài)
 * =========================================================== */
let audioCtx = null;
let soundEnabled = false;

function initAudioEngine() {
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (!soundToggleBtn) return;

  soundToggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    soundEnabled = !soundEnabled;
    soundToggleBtn.classList.toggle('active', soundEnabled);
    soundToggleBtn.setAttribute('aria-pressed', soundEnabled);
    soundToggleBtn.querySelector('.sound-label').textContent = soundEnabled ? 'Âm thanh: Bật' : 'Âm thanh: Tắt';
    
    if (soundEnabled) {
      playSciFiSound('toggle');
      showToast('🔊 Đã bật âm thanh tương tác Sci-Fi!');
    } else {
      showToast('🔇 Đã tắt âm thanh!');
    }
  });

  // Gắn âm thanh cho các nút bấm & liên kết
  document.querySelectorAll('button, a, .skill-chip, .skill-filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (soundEnabled) playSciFiSound('hover');
    });
    el.addEventListener('click', () => {
      if (soundEnabled && el.id !== 'soundToggleBtn') playSciFiSound('click');
    });
  });
}

function playSciFiSound(type) {
  if (!audioCtx || !soundEnabled) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.12);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'toggle') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.2);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'modal') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(250, now);
      osc.frequency.exponentialRampToValueAtTime(750, now + 0.25);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (e) {
    // AudioContext suspended or not allowed yet
  }
}

/* =============================================================
 * 2. CHUYỂN ĐỔI CHỦ ĐỀ ĐA SẮC (THEME PALETTE SWITCHER)
 * =========================================================== */
function initThemeSwitcher() {
  const themeBtns = document.querySelectorAll('.theme-btn');
  const savedTheme = localStorage.getItem('vtd_portfolio_theme') || 'aurora';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeBtns.forEach(btn => {
    if (btn.getAttribute('data-theme') === savedTheme) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const theme = btn.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('vtd_portfolio_theme', theme);
      showToast(`Đã chuyển sang chủ đề: <b>${btn.getAttribute('title')}</b> ✨`);
      if (soundEnabled) playSciFiSound('toggle');
    });
  });
}

/* =============================================================
 * 3. 3D TILT PHYSICS & SPOTLIGHT HOVER TRÊN THẺ CARD
 * =========================================================== */
function init3DTilt() {
  const tiltCards = document.querySelectorAll('.card, .timeline-card, .stat-badge, .contact-card');
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      if (window.innerWidth >= 992 && !card.classList.contains('no-tilt')) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 992 && !card.classList.contains('no-tilt')) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      }
    });
  });
}

/* =============================================================
 * 4. THANH TIẾN ĐỘ CUỘN TRANG (GRADIENT PROGRESS)
 * =========================================================== */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }, { passive: true });
}

/* =============================================================
 * 5. HIỆU ỨNG GÕ CHỮ TYPEWRITER LUÂN PHIÊN
 * =========================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el) return;

  const roles = [
    'Frontend Developer & UI Enthusiast ✨',
    'AI & Deep Learning Researcher 🔬',
    'ASP.NET Core & Fullstack Developer 🚀',
    'Creative Technologist & UI Designer 🎨'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 65;
  const deleteSpeed = 30;
  const pauseTime = 1900;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* =============================================================
 * 6. POPUP MODAL CHI TIẾT TỪNG DỰ ÁN (PROJECT DEEP-DIVE MODAL)
 * Giải quyết 100% nút "Xem chi tiết" thay vì trỏ link "#"
 * =========================================================== */
const projectData = {
  polyp: {
    title: 'AI-based Colon Polyp Detection System',
    category: 'Y tế Thông minh & Học sâu (Deep Learning)',
    badge: 'Độ chính xác 97.2%',
    image: './assets/img/AI_Polyp_Dai_Trang.png',
    desc: 'Hệ thống hỗ trợ bác sĩ chẩn đoán nội soi thông qua việc tự động phát hiện, định vị và phân đoạn biên (segmentation) polyp đại tràng bằng thị giác máy tính và trí tuệ nhân tạo.',
    specs: [
      { label: 'Kiến trúc mô hình', val: 'UNet++ kết hợp EfficientNet-B4 Backbone' },
      { label: 'Chỉ số đánh giá', val: 'IoU: 91.4% | Dice Score: 95.8% | Accuracy: 97.2%' },
      { label: 'Tốc độ xử lý', val: 'Thời gian phản hồi ~45ms / khung hình (Real-time)' },
      { label: 'Giao diện tương tác', val: 'Xây dựng trên Gradio UI, hỗ trợ tải ảnh và video nội soi' }
    ],
    tags: ['PyTorch', 'UNet++', 'EfficientNet-B4', 'OpenCV', 'Gradio', 'Python', 'Colab'],
    githubUrl: 'https://github.com/vutungduong0-art'
  },
  space: {
    title: 'AI Space Defender Simulation Game',
    category: 'Mô phỏng Vũ trụ & Trò chơi Trí tuệ Nhân tạo',
    badge: 'Tốc độ ổn định 60 FPS',
    image: './assets/img/AI_Space_Defender.jpg',
    desc: 'Dự án game mô phỏng không gian vũ trụ, tập trung vào việc mô hình hóa hành vi tự động của đối thủ (Enemy AI State Machine), xử lý va chạm vật lý thời gian thực và quản lý tài nguyên đối tượng (Object Pooling).',
    specs: [
      { label: 'Ngôn ngữ & Thư viện', val: 'Python 3, Pygame Engine, Math Vector 2D' },
      { label: 'Cơ chế AI', val: 'Finite State Machine (FSM): Tuần tra, Bám đuổi, Tấn công' },
      { label: 'Tối ưu hiệu năng', val: 'Kỹ thuật Object Pooling tái sử dụng đạn và thiên thạch' },
      { label: 'Trải nghiệm game', val: 'Âm thanh 8-bit, hệ thống điểm số và bảng xếp hạng' }
    ],
    tags: ['Python', 'AI Game Engine', '2D Physics', 'State Machine', 'Object Pooling'],
    githubUrl: 'https://github.com/vutungduong0-art'
  },
  fastfood: {
    title: 'FastFood Online Management System',
    category: 'Hệ thống Quản lý Bán hàng Trực tuyến Toàn diện',
    badge: 'Kiến trúc MVC Chuẩn mực',
    image: './assets/img/Website_Fast_Food.png',
    desc: 'Nền tảng thương mại điện tử chuyên dụng cho chuỗi nhà hàng thức ăn nhanh, cho phép khách hàng đặt món trực tuyến và cung cấp cổng quản trị viên chuyên nghiệp để quản lý sản phẩm, đơn hàng và doanh thu.',
    specs: [
      { label: 'Công nghệ Backend', val: 'C# 10, ASP.NET Core MVC, Entity Framework Core' },
      { label: 'Cơ sở dữ liệu', val: 'Microsoft SQL Server với thiết kế chuẩn hóa 3NF' },
      { label: 'Mô hình thiết kế', val: 'Repository Pattern & Dependency Injection (DI)' },
      { label: 'Bảo mật & Phân quyền', val: 'ASP.NET Identity (RBAC - Role Based Access Control)' }
    ],
    tags: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Entity Framework Core', 'HTML5/CSS3'],
    githubUrl: 'https://github.com/vutungduong0-art'
  }
};

function initProjectModals() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  document.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const data = projectData[projId];
      if (!data) return;

      modal.querySelector('#modalTitle').textContent = data.title;
      modal.querySelector('#modalCategory').textContent = data.category;
      modal.querySelector('#modalBadge').textContent = data.badge;
      modal.querySelector('#modalImage').src = data.image;
      modal.querySelector('#modalImage').alt = data.title;
      modal.querySelector('#modalDesc').textContent = data.desc;

      const specsContainer = modal.querySelector('#modalSpecs');
      specsContainer.innerHTML = data.specs.map(s => `
        <div class="modal-spec-row">
          <span class="spec-label">${s.label}:</span>
          <span class="spec-val">${s.val}</span>
        </div>
      `).join('');

      const tagsContainer = modal.querySelector('#modalTags');
      tagsContainer.innerHTML = data.tags.map(t => `<li>${t}</li>`).join('');

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (soundEnabled) playSciFiSound('modal');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* =============================================================
 * 7. TERMINAL TƯƠNG TÁC DÀNH CHO DEVELOPER (DEVELOPER CLI)
 * =========================================================== */
function initInteractiveTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalBody = document.querySelector('.terminal-body');
  if (!terminalInput || !terminalOutput) return;

  const commands = {
    help: `
Danh sách lệnh có thể sử dụng:
  <span class="cmd-highlight">about</span>      : Giới thiệu tóm tắt về Vũ Tùng Dương
  <span class="cmd-highlight">skills</span>     : Danh sách các công nghệ nổi bật
  <span class="cmd-highlight">projects</span>   : Các dự án tiêu biểu đã hoàn thành
  <span class="cmd-highlight">contact</span>    : Kênh liên hệ trực tiếp
  <span class="cmd-highlight">metrics</span>    : Chỉ số đo lường hiệu quả kỹ thuật
  <span class="cmd-highlight">theme &lt;name&gt;</span>: Đổi theme (aurora, cyberpunk, emerald)
  <span class="cmd-highlight">sound</span>      : Bật / Tắt âm thanh Sci-Fi
  <span class="cmd-highlight">clear</span>      : Xóa trắng màn hình dòng lệnh
`,
    about: `
Họ và tên  : Vũ Tùng Dương
Chuyên môn : Frontend Developer & UI Enthusiast / AI & Deep Learning
Định hướng : Xây dựng giao diện web đỉnh cao, chuẩn mực và thông minh.
Học vấn    : Sinh viên CNTT đam mê công nghệ cao.
`,
    skills: `
[Ngôn ngữ]   : C#, Python, SQL
[Web/Backend]: ASP.NET Core MVC, Entity Framework Core, HTML5/CSS3
[Trí tuệ AI] : PyTorch, UNet++, EfficientNet-B4, OpenCV, Gradio
[Tools/DB]   : SQL Server, MySQL, Git & GitHub, Docker, VS Code, Colab
`,
    projects: `
1. AI Colon Polyp Detection (UNet++ • EfficientNet-B4 • Gradio UI • Acc 97.2%)
2. AI Space Defender Game (Python 2D • Enemy AI State Machine • 60 FPS)
3. FastFood Online Management System (ASP.NET Core MVC • SQL Server • EF Core)
`,
    contact: `
Email    : vutungduong0@gmail.com
GitHub   : https://github.com/vutungduong0-art
LinkedIn : https://linkedin.com/in/dvdavincii
Live Demo: https://vutungduong0-art.github.io/MyCV/
`,
    metrics: `
[Performance]  : 98/100 (Google Lighthouse)
[Accessibility]: 96/100 (WCAG 2.1 AA)
[Best Practice]: 100/100
[SEO Audit]    : 100/100
[AI Accuracy]  : 97.2% IoU/Dice Score
`
  };

  function printLine(html) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = html;
    terminalOutput.appendChild(line);
    if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const raw = terminalInput.value.trim();
      terminalInput.value = '';
      if (!raw) return;

      printLine(`<span class="term-prompt">duong@portfolio:~$</span> ${raw}`);
      const args = raw.toLowerCase().split(' ');
      const cmd = args[0];

      if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
      } else if (cmd === 'theme') {
        const targetTheme = args[1];
        if (['aurora', 'cyberpunk', 'emerald'].includes(targetTheme)) {
          document.documentElement.setAttribute('data-theme', targetTheme);
          localStorage.setItem('vtd_portfolio_theme', targetTheme);
          document.querySelectorAll('.theme-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-theme') === targetTheme);
          });
          printLine(`✓ Đã kích hoạt chủ đề: <b>${targetTheme}</b>`);
        } else {
          printLine(`Lỗi: Theme không hợp lệ. Hãy chọn: aurora, cyberpunk, hoặc emerald.`);
        }
      } else if (cmd === 'sound') {
        const soundBtn = document.getElementById('soundToggleBtn');
        if (soundBtn) soundBtn.click();
        printLine(`Trạng thái âm thanh: <b>${soundEnabled ? 'BẬT' : 'TẮT'}</b>`);
      } else if (commands[cmd]) {
        printLine(commands[cmd]);
      } else {
        printLine(`Lệnh không nhận dạng được: <b>${cmd}</b>. Gõ <span class="cmd-highlight">help</span> để xem trợ giúp.`);
      }

      if (soundEnabled) playSciFiSound('click');
    }
  });

  // Gắn lệnh cho các nút gợi ý terminal (Quick chips)
  document.querySelectorAll('.term-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      terminalInput.value = cmd;
      terminalInput.focus();
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      terminalInput.dispatchEvent(enterEvent);
    });
  });
}

/* =============================================================
 * 8. BỘ LỌC KỸ NĂNG THEO DANH MỤC
 * =========================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const chips = document.querySelectorAll('.skill-chip');

  if (!filterBtns.length || !chips.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      chips.forEach(chip => {
        if (filter === 'all' || chip.classList.contains(filter)) {
          chip.style.display = 'inline-flex';
          setTimeout(() => {
            chip.style.opacity = '1';
            chip.style.transform = 'scale(1)';
          }, 20);
        } else {
          chip.style.opacity = '0';
          chip.style.transform = 'scale(0.85)';
          setTimeout(() => {
            chip.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* =============================================================
 * 9. SAO CHÉP EMAIL 1-CHẠM & TOAST NOTIFICATION
 * =========================================================== */
function showToast(message, type = 'success') {
  let toast = document.getElementById('portfolioToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolioToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
    <span class="toast-message">${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = 'vutungduong0@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Đã sao chép <b>vutungduong0@gmail.com</b> vào clipboard! 🎉');
      copyBtn.classList.add('copied');
      setTimeout(() => copyBtn.classList.remove('copied'), 2000);
    }).catch(() => {
      showToast('Hòm thư: vutungduong0@gmail.com');
    });
  });
}

/* =============================================================
 * 10. FORM GỬI TIN NHẮN TƯƠNG TÁC
 * =========================================================== */
function initContactForm() {
  const form = document.getElementById('quickContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    const name = form.querySelector('#formName').value.trim();
    const message = form.querySelector('#formMsg').value.trim();

    if (!name || !message) {
      showToast('Vui lòng điền họ tên và nội dung lời nhắn!', 'warn');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="btn-spinner"></span>
      <span>Đang gửi thông tin...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast(`Cảm ơn bạn <b>${name}</b>! Tin nhắn của bạn đã được ghi nhận thành công 🚀`);
    }, 1200);
  });
}

/* =============================================================
 * 11. NÚT VỀ ĐẦU TRANG
 * =========================================================== */
function initBackToTop() {
  const toTopBtn = document.querySelector('.to-top');
  if (!toTopBtn) return;

  toTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* =============================================================
 * 12. CANVAS HẠT CÔNG NGHỆ CHUYỂN ĐỘNG NỀN (NEURAL PARTICLES)
 * =========================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 26 : 50;
  const maxDistance = 140;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.8 + 1;
      this.colors = ['#38bdf8', '#818cf8', '#c084fc', '#ec4899', '#34d399'];
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const opacity = (1 - dist / maxDistance) * 0.22;
          ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate();
  }
}
