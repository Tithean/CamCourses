document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const body = document.body;

  const byId = (id) => document.getElementById(id);
  const toast = byId("toast");

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  };

  const showPanel = (panel, button) => {
    if (!panel) return;
    panel.classList.remove("hidden");
    button?.setAttribute("aria-expanded", "true");
  };

  const hidePanel = (panel, button) => {
    if (!panel) return;
    panel.classList.add("hidden");
    button?.setAttribute("aria-expanded", "false");
  };

  const togglePanel = (panel, button) => {
    if (!panel) return;
    if (panel.classList.contains("hidden")) showPanel(panel, button);
    else hidePanel(panel, button);
  };

  const closePanels = (items) => {
    items.forEach(({ panel, button }) => hidePanel(panel, button));
  };

  /* ── Explore menu ─────────────────────────── */
  const exploreWrap = byId("explore-wrap");
  const exploreButton = byId("explore-button");
  const exploreMenu = byId("explore-menu");

  /* ── User menu ────────────────────────────── */
  const userButton = byId("user-button");
  const userMenu = byId("user-menu");

  /* ── Contact panel ────────────────────────── */
  const contactToggle = byId("contact-toggle");
  const contactPanel = byId("contact-panel");
  const contactClose = byId("contact-close");

  /* ── Theme toggle ─────────────────────────── */
  const themeToggle = byId("theme-toggle");
  const themeIcon = byId("theme-icon");

  /* ── Mobile nav ───────────────────────────── */
  const mobileNavToggle = byId("mobile-nav-toggle");
  const mobileNavPanel = byId("mobile-nav-panel");

  const panelGroup = [
    { panel: exploreMenu, button: exploreButton },
    { panel: userMenu, button: userButton },
    { panel: contactPanel, button: contactToggle },
    { panel: mobileNavPanel, button: mobileNavToggle },
  ];

  /* ── Explore: hover + click ────────────────── */
  let exploreTimer;
  exploreWrap?.addEventListener("mouseenter", () => {
    window.clearTimeout(exploreTimer);
    showPanel(exploreMenu, exploreButton);
  });
  exploreWrap?.addEventListener("mouseleave", () => {
    exploreTimer = window.setTimeout(
      () => hidePanel(exploreMenu, exploreButton),
      120,
    );
  });
  exploreButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    closePanels(
      panelGroup.filter(
        (item) => item.panel !== exploreMenu && item.panel !== null,
      ),
    );
    togglePanel(exploreMenu, exploreButton);
  });
  exploreMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => hidePanel(exploreMenu, exploreButton));
  });

  /* ── User menu ─────────────────────────────── */
  userButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    closePanels(panelGroup.filter((item) => item.panel !== userMenu));
    togglePanel(userMenu, userButton);
  });

  /* ── Mobile nav ────────────────────────────── */
  mobileNavToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    closePanels(panelGroup.filter((item) => item.panel !== mobileNavPanel));
    togglePanel(mobileNavPanel, mobileNavToggle);
  });

  /* ── Contact panel ─────────────────────────── */
  contactToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    closePanels(panelGroup.filter((item) => item.panel !== contactPanel));
    togglePanel(contactPanel, contactToggle);
  });
  contactClose?.addEventListener("click", () => {
    hidePanel(contactPanel, contactToggle);
  });

  /* ── Dark / Light mode ─────────────────────── */
  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
    body.classList.toggle("dark-mode", isDark);
    if (themeIcon) {
      themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
    themeToggle?.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
    localStorage.setItem("theme", theme);
  };

  // Load theme from localStorage or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  themeToggle?.addEventListener("click", () => {
    applyTheme(root.classList.contains("dark") ? "light" : "dark");
  });

  /* ── Accordion (FAQ) ───────────────────────── */
  document.querySelectorAll("[data-accordion-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.querySelector(button.dataset.accordionTrigger);
      if (!panel) return;
      const opening = panel.classList.contains("hidden");
      panel.classList.toggle("hidden", !opening);
      button.setAttribute("aria-expanded", String(opening));
      button.querySelector("i")?.classList.toggle("rotate-180", opening);
    });
  });

  /* ── Developer Section Scroll ──────────────── */
  const developerScroll = byId("developer-scroll");
  const developerPrev = byId("developer-prev");
  const developerNext = byId("developer-next");
  const scrollDots = document.querySelectorAll(".scroll-dot");

  if (developerScroll) {
    const scrollAmount = 320; // Width of card + gap

    // Update dot indicators based on scroll position
    const updateDots = () => {
      const scrollLeft = developerScroll.scrollLeft;
      const index = Math.round(scrollLeft / scrollAmount);
      scrollDots.forEach((dot, i) => {
        dot.classList.toggle("bg-campus-blue", i === index);
        dot.classList.toggle("bg-slate-300", i !== index);
      });
    };

    developerPrev?.addEventListener("click", () => {
      developerScroll.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(updateDots, 300);
    });

    developerNext?.addEventListener("click", () => {
      developerScroll.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(updateDots, 300);
    });

    // Update dots on manual scroll
    developerScroll.addEventListener("scroll", updateDots);

    // Click on dots to jump to position
    scrollDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        developerScroll.scrollTo({
          left: index * scrollAmount,
          behavior: "smooth",
        });
        setTimeout(updateDots, 300);
      });
    });
  }

  /* ── Newsletter form ───────────────────────── */
  document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput?.value?.trim();
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        showToast("Please enter a valid email address.");
        return;
      }
      emailInput.value = "";
      showToast("Thanks for subscribing to CamCourse updates.");
    });
  });

  /* ── Close panels on outside click / Escape ── */
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!target) return;
    panelGroup.forEach(({ panel, button }) => {
      if (!panel || panel.classList.contains("hidden")) return;
      if (panel.contains(target) || button?.contains(target)) return;
      hidePanel(panel, button);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePanels(panelGroup);
  });
});
