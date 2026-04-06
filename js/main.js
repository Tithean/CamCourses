document.addEventListener('DOMContentLoaded', () => {

  // ─── Mobile Menu Toggle ────────────────────────────────────────────
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu   = document.getElementById('mobile-menu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
      // Toggle icon between bars and xmark
      const icon = hamburgerBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mobileMenu.classList.remove('open');
        const icon = hamburgerBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // ─── Explore Dropdown ──────────────────────────────────────────────
  const exploreBtn  = document.getElementById('explore-btn');
  const exploreMenu = document.getElementById('explore-menu');

  if (exploreBtn && exploreMenu) {
    exploreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      exploreMenu.classList.toggle('open');
      // Rotate the arrow icon
      const arrow = exploreBtn.querySelector('.fa-angle-down');
      if (arrow) {
        arrow.style.transition = 'transform 0.3s ease';
        arrow.style.transform = exploreMenu.classList.contains('open')
          ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });

    document.addEventListener('click', (e) => {
      if (!exploreMenu.contains(e.target) && !exploreBtn.contains(e.target)) {
        exploreMenu.classList.remove('open');
        const arrow = exploreBtn.querySelector('.fa-angle-down');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    });
  }

  // Also handle mobile explore dropdown
  const mobileExploreBtn  = document.getElementById('mobile-explore-btn');
  const mobileExploreMenu = document.getElementById('mobile-explore-menu');

  if (mobileExploreBtn && mobileExploreMenu) {
    mobileExploreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileExploreMenu.classList.toggle('hidden');
      const arrow = mobileExploreBtn.querySelector('.fa-angle-down');
      if (arrow) {
        arrow.style.transition = 'transform 0.3s ease';
        arrow.style.transform = mobileExploreMenu.classList.contains('hidden')
          ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
  }

  // ─── Search Filter (Homepage) ──────────────────────────────────────
  const searchInput  = document.getElementById('search-input');
  const courseCards   = document.querySelectorAll('.course-card');

  if (searchInput && courseCards.length > 0) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      courseCards.forEach(card => {
        const title = (card.querySelector('.course-title')?.textContent || '').toLowerCase();
        const provider = (card.querySelector('.course-provider')?.textContent || '').toLowerCase();
        if (title.includes(query) || provider.includes(query)) {
          card.style.display = '';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            if (!title.includes(searchInput.value.toLowerCase().trim()) &&
                !provider.includes(searchInput.value.toLowerCase().trim())) {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  }

  // ─── Notification Bell ──────────────────────────────────────────────
  const bellBtn   = document.getElementById('bell-btn');
  const notifPanel = document.getElementById('notification-panel');

  if (bellBtn && notifPanel) {
    bellBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPanel.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!notifPanel.contains(e.target) && !bellBtn.contains(e.target)) {
        notifPanel.classList.remove('open');
      }
    });

    // Dismiss individual notifications
    notifPanel.addEventListener('click', (e) => {
      const dismissBtn = e.target.closest('.notif-dismiss');
      if (dismissBtn) {
        const item = dismissBtn.closest('.notif-item');
        if (item) {
          item.style.opacity = '0';
          item.style.transform = 'translateX(20px)';
          item.style.transition = 'all 0.3s ease';
          setTimeout(() => item.remove(), 300);
        }
      }
    });
  }

  // ─── Account Panel ─────────────────────────────────────────────────
  const accountBtn   = document.getElementById('account-btn');
  const accountPanel = document.getElementById('account-panel');

  if (accountBtn && accountPanel) {
    accountBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      accountPanel.classList.toggle('open');
      // Close notification panel if open
      if (notifPanel) notifPanel.classList.remove('open');
    });

    document.addEventListener('click', (e) => {
      if (!accountPanel.contains(e.target) && !accountBtn.contains(e.target)) {
        accountPanel.classList.remove('open');
      }
    });
  }

  // Close account panel when opening notifications (and vice versa)
  if (bellBtn && accountPanel) {
    bellBtn.addEventListener('click', () => {
      accountPanel.classList.remove('open');
    });
  }

  // ─── AI Chatbot Panel ──────────────────────────────────────────────
  const chatBtn    = document.getElementById('chat-btn');
  const chatPanel  = document.getElementById('chat-panel');
  const chatClose  = document.getElementById('chat-close');
  const chatInput  = document.getElementById('chat-input');
  const chatSend   = document.getElementById('chat-send');
  const chatBody   = document.getElementById('chat-body');

  const chatResponses = {
    'hello': 'Hi there! 👋 Welcome to CamCourses. How can I help you?',
    'hi': 'Hello! 😊 What can I help you with today?',
    'courses': 'We offer courses in Python, Fullstack Web Dev, Data Science, Computer Science, and more! Check out our "All Courses" page.',
    'python': 'Our Python for Beginner course is FREE and taught by JomNum Tech — 45 hours of content! ⭐ 4.5 rating.',
    'free': 'Yes! We have several free courses including Python for Beginners and more. Click "All Courses" to browse.',
    'price': 'Course prices range from FREE to $899. Many of our best courses are free!',
    'contact': 'You can reach us at camcode@gmail.com or call +855 12 345 678. We\'re in Phnom Penh, Cambodia.',
    'help': 'I can help with:\n• Course information\n• Pricing questions\n• How to enroll\n• Contact details\nJust ask!',
    'enroll': 'To enroll in a course, click "All Courses", find your course, and click "រៀនឥឡូវនេះ" (Learn Now)!',
    'premium': 'Our Premium plan unlocks exclusive content, certificates, and priority support. Click the Premium button at the top!',
  };

  function getResponse(msg) {
    const lower = msg.toLowerCase().trim();
    for (const [key, val] of Object.entries(chatResponses)) {
      if (lower.includes(key)) return val;
    }
    return "Thanks for your message! 😊 I'm a simple assistant. Try asking about courses, pricing, enrollment, or contact info.";
  }

  function addMessage(text, isUser) {
    if (!chatBody) return;
    const div = document.createElement('div');
    div.className = `flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`;
    div.innerHTML = `<div class="${isUser ? 'chat-msg-user' : 'chat-msg-bot'}">${text.replace(/\n/g, '<br>')}</div>`;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showTypingThenReply(text) {
    if (!chatBody) return;
    const typingDiv = document.createElement('div');
    typingDiv.className = 'flex justify-start mb-3';
    typingDiv.innerHTML = `<div class="chat-msg-bot typing-dots"><span></span><span></span><span></span></div>`;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      typingDiv.remove();
      addMessage(text, false);
    }, 800 + Math.random() * 600);
  }

  function sendChat() {
    if (!chatInput) return;
    const msg = chatInput.value.trim();
    if (!msg) return;
    addMessage(msg, true);
    chatInput.value = '';
    showTypingThenReply(getResponse(msg));
  }

  if (chatBtn && chatPanel) {
    chatBtn.addEventListener('click', () => {
      chatPanel.classList.toggle('open');
    });
  }
  if (chatClose) {
    chatClose.addEventListener('click', () => {
      chatPanel.classList.remove('open');
    });
  }
  if (chatSend) {
    chatSend.addEventListener('click', sendChat);
  }
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendChat();
    });
  }

  // Quick reply buttons
  document.addEventListener('click', (e) => {
    const qr = e.target.closest('.quick-reply');
    if (qr && chatInput) {
      chatInput.value = qr.dataset.msg || qr.textContent;
      sendChat();
    }
  });

  // ─── Scroll-to-Top ─────────────────────────────────────────────────
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Scroll Reveal (IntersectionObserver) ──────────────────────────
  const reveals = document.querySelectorAll('.scroll-reveal');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  }

});
