/* Shared site behaviour: mobile nav toggle + luxury scroll reveal. */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---- Condensing fixed header ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var setScrolled = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    function closeMenu() {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && links.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener("click", function (event) {
      if (links.classList.contains("is-open") && !event.target.closest(".nav")) closeMenu();
    });
  }

  /* ---- Back-to-top button (injected) ---- */
  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.type = "button";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(toTop);
  var toggleTop = function () { toTop.classList.toggle("is-visible", window.scrollY > 600); };
  toggleTop();
  window.addEventListener("scroll", toggleTop, { passive: true });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Bespoke furniture expand / collapse ---- */
  var svcToggles = [].slice.call(document.querySelectorAll(".svc-card__toggle"));
  svcToggles.forEach(function (toggle) {
    var card = toggle.closest(".svc-card");
    if (!card) return;
    var textNode = Array.prototype.slice.call(toggle.childNodes).find(function (node) {
      return node.nodeType === Node.TEXT_NODE;
    });
    if (!textNode) return;
    var collapsedText = toggle.dataset.collapsedText || "VIEW ALL";
    var expandedText = toggle.dataset.expandedText || "SHOW LESS";
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      var expanded = card.classList.toggle("svc-card--expanded");
      toggle.setAttribute("aria-expanded", String(expanded));
      textNode.nodeValue = (expanded ? expandedText : collapsedText) + " ";
    });
  });

  /* ---- Portfolio project filter ---- */
  var filters = document.querySelector(".filters");
  if (filters) {
    var cards = [].slice.call(document.querySelectorAll(".work-card"));
    var countEl = document.getElementById("workCount");
    var emptyEl = document.getElementById("workEmpty");
    var applyFilter = function (cat) {
      var shown = 0;
      cards.forEach(function (card) {
        var show = cat === "all" || card.getAttribute("data-category") === cat;
        card.hidden = !show;
        if (show) {
          shown++;
          card.classList.remove("card-in");
          void card.offsetWidth; // restart the entrance animation
          card.classList.add("card-in");
        }
      });
      if (countEl) {
        countEl.textContent = cat === "all"
          ? "Showing all " + shown + " projects"
          : "Showing " + shown + " project" + (shown === 1 ? "" : "s");
      }
      if (emptyEl) emptyEl.hidden = shown !== 0;
    };
    filters.addEventListener("click", function (event) {
      var btn = event.target.closest(".filter");
      if (!btn) return;
      filters.querySelectorAll(".filter").forEach(function (f) {
        f.classList.remove("is-active");
        f.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      applyFilter(btn.getAttribute("data-filter"));
    });
  }

  /* ---- Contact form: validation + success state ---- */
  var form = document.querySelector(".form");
  if (form) {
    var wrapOf = function (field) { return field.closest(".field, .consent"); };
    var showError = function (field, msg) {
      var wrap = wrapOf(field);
      if (!wrap) return;
      wrap.classList.add("field--error");
      var err = wrap.querySelector(".field__error");
      if (!err) {
        err = document.createElement("span");
        err.className = "field__error";
        wrap.appendChild(err);
      }
      err.textContent = msg;
    };
    var clearError = function (field) {
      var wrap = wrapOf(field);
      if (!wrap) return;
      wrap.classList.remove("field--error");
      var err = wrap.querySelector(".field__error");
      if (err) err.textContent = "";
    };
    var messageFor = function (field) {
      var v = field.validity;
      if (v.valueMissing) return field.type === "checkbox" ? "Please accept to continue." : "This field is required.";
      if (v.typeMismatch) return field.type === "email" ? "Please enter a valid email address." : "Please enter a valid value.";
      return "Please check this field.";
    };
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var firstBad = null;
      form.querySelectorAll("[required]").forEach(function (field) {
        if (field.checkValidity()) {
          clearError(field);
        } else {
          showError(field, messageFor(field));
          if (!firstBad) firstBad = field;
        }
      });
      if (firstBad) { firstBad.focus(); return; }
      form.innerHTML =
        '<div class="form__success" role="status">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>' +
        '<h3>Thank you!</h3>' +
        "<p>Your consultation request has been received. We'll be in touch within 24 hours.</p>" +
        "</div>";
      form.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    form.addEventListener("input", function (event) {
      if (wrapOf(event.target) && wrapOf(event.target).classList.contains("field--error")) {
        clearError(event.target);
      }
    });
  }

  /* ---- Scroll reveal ----
     Elements are only hidden once the .reveal class is added here, so the
     page is fully usable without javascript and there is no flash: items
     already in view are revealed immediately; only off-screen items animate. */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var selector = [
    ".section-title", ".title-rule", ".hero__lead", ".hero__actions",
    ".feature", ".spec-card", ".why__item", ".svc-card", ".proj-card", ".featured__cta",
    ".step", ".core-card", ".cta__inner",
    ".story__text", ".story__portrait", ".story__leader", ".journey__step",
    ".values__intro", ".value", ".extra__content",
    ".details__card", ".talk", ".form-wrap", ".expect__item", ".prose"
  ].join(",");

  var els = Array.prototype.slice.call(document.querySelectorAll(selector));
  if (!els.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  var viewport = window.innerHeight || document.documentElement.clientHeight;

  els.forEach(function (el) {
    // Gentle stagger for items sharing a parent (e.g. cards in a grid).
    var siblings = el.parentElement ? el.parentElement.children : [el];
    var index = Array.prototype.indexOf.call(siblings, el);
    el.style.transitionDelay = (Math.min(index, 4) * 0.07) + "s";

    if (el.getBoundingClientRect().top < viewport * 0.92) {
      // Already in view on load — show without hiding first (no flash).
      el.classList.add("reveal", "is-visible");
    } else {
      el.classList.add("reveal");
      io.observe(el);
    }
  });
})();
