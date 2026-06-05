document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const toggle = document.querySelector('.sidebar-toggle');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const themeToggle = document.querySelector('.theme-toggle');

  const targets = Array.from(document.querySelectorAll('.content [id]'));

  // Theme toggle
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Mobile sidebar toggle
  function closeSidebar() {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('visible');
  }

  toggle?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
    overlay?.classList.toggle('visible');
  });

  overlay?.addEventListener('click', closeSidebar);

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });

  // Scroll spy: highlight active sidebar link
  function setActiveLink(id) {
    sidebarLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        setActiveLink(visible[0].target.id);
      }
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }
  );

  targets.forEach((el) => observer.observe(el));

  if (sidebarLinks.length) {
    sidebarLinks[0].classList.add('active');
  }

  // Copy code blocks
  document.querySelectorAll('pre[data-copy]').forEach((pre) => {
    const btn = document.createElement('button');
    btn.textContent = '复制';
    btn.className = 'copy-btn';
    pre.appendChild(btn);

    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.textContent || '';
      try {
        await navigator.clipboard.writeText(code);
        btn.textContent = '已复制';
        setTimeout(() => (btn.textContent = '复制'), 1500);
      } catch {
        btn.textContent = '失败';
        setTimeout(() => (btn.textContent = '复制'), 1500);
      }
    });
  });
});
