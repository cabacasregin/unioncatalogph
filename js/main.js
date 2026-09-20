// Union Catalog Philippines — shared behaviors

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(expanded));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  // Mock OPAC search (landing page) — demo only, no backend
  const searchForm = document.querySelector("#opac-search");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = searchForm.querySelector("input[name='q']");
      const feedback = document.querySelector("#opac-feedback");
      const term = input.value.trim();
      if (feedback) {
        feedback.textContent = term
          ? `"${term}" will be searched across all participating library catalogs once the union catalog is live.`
          : "Enter a title, author, or subject to preview a search.";
      }
    });
  }

  // FAQ accordion (resources page)
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      item.classList.toggle("open");
    });
  });

  // Contact form (client-side demo submission)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = document.querySelector("#form-success");
      if (success) {
        success.classList.add("show");
        success.focus?.();
      }
      contactForm.reset();
    });
  }

  // Highlight active nav link based on current page
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Footer year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
