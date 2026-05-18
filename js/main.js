document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const body = document.body;
  const exploreWrap = document.querySelector("#explore-wrap");
  const exploreButton = document.querySelector("#explore-button");
  const exploreMenu = document.querySelector("#explore-menu");
  const notificationButton = document.querySelector("#notification-button");
  const notificationMenu = document.querySelector("#notification-menu");
  const notificationBadge = document.querySelector("#notification-badge");
  const markReadButton = document.querySelector("#mark-read-button");
  const userButton = document.querySelector("#user-button");
  const userMenu = document.querySelector("#user-menu");
  const themeToggle = document.querySelector("#theme-toggle");
  const themeIcon = document.querySelector("#theme-icon");
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");
  const courseCards = document.querySelectorAll("[data-course-card]");
  const courseEmptyState = document.querySelector("#course-empty-state");
  const contactToggle = document.querySelector("#contact-toggle");
  const contactPanel = document.querySelector("#contact-panel");
  const contactClose = document.querySelector("#contact-close");
  const scrollTopButton = document.querySelector("#scroll-top");
  const toast = document.querySelector("#toast");

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
    const isHidden = panel.classList.contains("hidden");
    if (isHidden) {
      showPanel(panel, button);
    } else {
      hidePanel(panel, button);
    }
  };

  const closeNavPanels = () => {
    hidePanel(exploreMenu, exploreButton);
    hidePanel(notificationMenu, notificationButton);
    hidePanel(userMenu, userButton);
  };

  let exploreCloseTimer;
  exploreWrap?.addEventListener("mouseenter", () => {
    window.clearTimeout(exploreCloseTimer);
    showPanel(exploreMenu, exploreButton);
  });

  exploreWrap?.addEventListener("mouseleave", () => {
    exploreCloseTimer = window.setTimeout(() => {
      hidePanel(exploreMenu, exploreButton);
    }, 150);
  });

  exploreButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    hidePanel(notificationMenu, notificationButton);
    hidePanel(userMenu, userButton);
    togglePanel(exploreMenu, exploreButton);
  });

  exploreMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => hidePanel(exploreMenu, exploreButton));
  });

  notificationButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    hidePanel(exploreMenu, exploreButton);
    hidePanel(userMenu, userButton);
    togglePanel(notificationMenu, notificationButton);
  });

  markReadButton?.addEventListener("click", () => {
    notificationBadge?.classList.add("hidden");
    document.querySelectorAll(".notification-item").forEach((item) => {
      item.style.opacity = "0.6";
    });
    showToast("All notifications marked as read.");
  });

  userButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    hidePanel(exploreMenu, exploreButton);
    hidePanel(notificationMenu, notificationButton);
    togglePanel(userMenu, userButton);
  });


  const getSavedTheme = () => {
    try {
      return localStorage.getItem("camcourse-theme");
    } catch {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem("camcourse-theme", theme);
    } catch {
      return;
    }
  };

  const applyTheme = (theme) => {
    const darkMode = theme === "dark";
    root.classList.toggle("dark", darkMode);
    root.style.colorScheme = darkMode ? "dark" : "light";
    body.classList.toggle("dark-mode", darkMode);
    if (themeIcon) {
      themeIcon.className = darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
    themeToggle?.setAttribute(
      "title",
      darkMode ? "switch to light mode" : "switch to dark mode",
    );
    themeToggle?.setAttribute(
      "aria-label",
      darkMode ? "Switch to light mode" : "Switch to dark mode",
    );
    saveTheme(theme);
  };

  const preferredTheme =
    getSavedTheme() ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(preferredTheme);

  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";      applyTheme(nextTheme);
  });

  const filterCourses = () => {
    const query = searchInput?.value.trim().toLowerCase() || "";
    let visibleCount = 0;

    courseCards.forEach((card) => {
      const searchableText = `${card.dataset.course || ""} ${card.textContent}`.toLowerCase();
      const matched = searchableText.includes(query);
      card.classList.toggle("is-hidden", query !== "" && !matched);
      if (query === "" || matched) visibleCount += 1;
    });

    courseEmptyState?.classList.toggle("hidden", visibleCount > 0);
  };

  searchInput?.addEventListener("input", filterCourses);
  searchButton?.addEventListener("click", () => {
    filterCourses();
    document.querySelector("#popular-courses")?.scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".purchase-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      showToast(`${button.dataset.plan} selected. Checkout will be available soon.`);
    });
  });

  courseCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.textContent.trim() || "Course";
      showToast(`${title} added to your learning list.`);
    });
  });

  contactToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    togglePanel(contactPanel, contactToggle);
  });

  contactClose?.addEventListener("click", () => {
    hidePanel(contactPanel, contactToggle);
  });

  window.addEventListener("scroll", () => {
    const shouldShow = window.scrollY > 500;
    scrollTopButton?.classList.toggle("hidden", !shouldShow);
    scrollTopButton?.classList.toggle("flex", shouldShow);
  });

  scrollTopButton?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!exploreWrap?.contains(target)) hidePanel(exploreMenu, exploreButton);
    if (!notificationMenu?.contains(target) && !notificationButton?.contains(target)) {
      hidePanel(notificationMenu, notificationButton);
    }
    if (!userMenu?.contains(target) && !userButton?.contains(target)) {
      hidePanel(userMenu, userButton);
    }
    if (!contactPanel?.contains(target) && !contactToggle?.contains(target)) {
      hidePanel(contactPanel, contactToggle);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavPanels();
      hidePanel(contactPanel, contactToggle);
    }
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }
});
