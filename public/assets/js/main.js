/* Nuvora — vanilla interactions (replaces webflow.js / jQuery / IX2).
   Scroll-reveal, hamburger full-screen menu, testimonial tabs, slot-roll counters,
   YouTube/image lightbox, demo forms, custom checkboxes/radios, and a localStorage
   cart replacing Webflow Ecommerce (+ checkout / order-confirmation). */
(function () {
  "use strict";
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var on = function (el, ev, fn, o) { if (el) el.addEventListener(ev, fn, o); };

  /* ---------------------------------------------------------------- reveal */
  /* Scroll-position check (this preview's IntersectionObserver stays silent). */
  function initReveal() {
    var els = $$(".reveal");
    if (!els.length) return;
    function check() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var trig = vh * 0.9;
      for (var i = els.length - 1; i >= 0; i--) {
        if (els[i].getBoundingClientRect().top < trig) {
          els[i].classList.add("is-visible");
          els.splice(i, 1);
        }
      }
      if (!els.length) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    }
    var scheduled = false;
    function onScroll() {
      if (scheduled) return;
      scheduled = true;
      var raf = window.requestAnimationFrame || function (f) { return setTimeout(f, 16); };
      raf(function () { check(); scheduled = false; });
      setTimeout(function () { if (scheduled) { check(); scheduled = false; } }, 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
  }

  /* -------------------------------------------- hamburger full-screen menu */
  /* `.hamburger-menu.open` reveals the `.open-menu` overlay (display:none by
     default in the design); `.hamburger-menu.close`, a nav link, the backdrop,
     or Escape closes it. */
  function initNav() {
    var overlay = $(".open-menu");
    if (!overlay) return;
    function set(open) {
      overlay.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      overlay.setAttribute("aria-hidden", open ? "false" : "true");
    }
    $$(".hamburger-menu.open").forEach(function (b) {
      on(b, "click", function (e) { e.preventDefault(); set(true); });
    });
    $$(".hamburger-menu.close", overlay).forEach(function (b) {
      on(b, "click", function (e) { e.preventDefault(); set(false); });
    });
    $$("a", overlay).forEach(function (a) { on(a, "click", function () { set(false); }); });
    on(overlay, "click", function (e) { if (e.target === overlay) set(false); });
    on(document, "keydown", function (e) { if (e.key === "Escape") set(false); });
    set(false);
  }

  /* ------------------------------------------------------------------ tabs */
  function initTabs() {
    $$(".tabs").forEach(function (wrap) {
      var links = $$(".tab-link", wrap), panes = $$(".tab-pane", wrap);
      if (!links.length) return;
      function activate(i) {
        links.forEach(function (l) { l.removeAttribute("aria-current"); });
        panes.forEach(function (p) { p.classList.remove("is-active"); });
        if (links[i]) links[i].setAttribute("aria-current", "page");
        if (panes[i]) panes[i].classList.add("is-active");
      }
      links.forEach(function (link, i) {
        on(link, "click", function (e) { e.preventDefault(); activate(i); });
      });
      if (!$(".tab-pane.is-active", wrap)) activate(0);
    });
  }

  /* -------------------------------------------------------------- counters */
  /* Each `.counter-digit-item` is a vertical column of `.counter-number`
     digits inside an overflow-hidden window; the TARGET digit is the first
     child. Roll from the last digit up to the first on reveal. */
  function initCounters() {
    var items = $$(".counter-digit-item").filter(function (col) {
      return $$(".counter-number", col).length > 1;
    });
    if (!items.length) return;
    // group columns by their nearest counter box so a box's digits roll together
    var groups = [];
    items.forEach(function (col) {
      var box = col.closest(".counter-single-box, .themselves-counter-single-box") || col;
      var g = null;
      for (var i = 0; i < groups.length; i++) { if (groups[i].box === box) { g = groups[i]; break; } }
      if (!g) { g = { box: box, cols: [], done: false }; groups.push(g); }
      g.cols.push(col);
      var n = $$(".counter-number", col).length;
      col.style.willChange = "transform";
      col.style.transform = "translateY(-" + ((n - 1) * 100) + "%)";
    });
    function roll() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var pending = false;
      groups.forEach(function (g) {
        if (g.done) return;
        if (g.box.getBoundingClientRect().top > vh * 0.85) { pending = true; return; }
        g.done = true;
        g.cols.forEach(function (col, k) {
          setTimeout(function () {
            col.style.transition = "transform 1.4s cubic-bezier(.16,1,.3,1)";
            col.style.transform = "translateY(0)";
          }, 90 * k);
        });
      });
      if (!pending) window.removeEventListener("scroll", onScroll);
    }
    var scheduled = false;
    function onScroll() {
      if (scheduled) return;
      scheduled = true;
      var raf = window.requestAnimationFrame || function (f) { return setTimeout(f, 16); };
      raf(function () { roll(); scheduled = false; });
      setTimeout(function () { if (scheduled) { roll(); scheduled = false; } }, 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    roll();
  }

  /* -------------------------------------------------------------- lightbox */
  /* Replaces the Webflow lightbox. Anchors carry data-lightbox="video|image".
     Video -> YouTube iframe; image -> <img> with prev/next inside its group. */
  function initLightbox() {
    var anchors = $$("a[data-lightbox]").filter(function (a) {
      return a.getAttribute("data-lightbox") !== "none";
    });
    if (!anchors.length) return;

    var box = document.createElement("div");
    box.className = "nv-lightbox";
    box.setAttribute("aria-hidden", "true");
    box.innerHTML =
      '<div class="nv-lightbox-backdrop" data-lb-close></div>' +
      '<button class="nv-lightbox-close" data-lb-close aria-label="Close">&times;</button>' +
      '<button class="nv-lightbox-nav nv-lightbox-prev" data-lb-prev aria-label="Previous">&#8249;</button>' +
      '<div class="nv-lightbox-stage"></div>' +
      '<button class="nv-lightbox-nav nv-lightbox-next" data-lb-next aria-label="Next">&#8250;</button>';
    document.body.appendChild(box);
    var stage = $(".nv-lightbox-stage", box);

    var group = [], gi = 0;
    function render() {
      var a = group[gi];
      var kind = a.getAttribute("data-lightbox");
      if (kind === "video") {
        var id = a.getAttribute("data-video-id");
        stage.innerHTML = '<div class="nv-lightbox-video"><iframe src="https://www.youtube.com/embed/' +
          id + '?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe></div>';
      } else {
        stage.innerHTML = '<img class="nv-lightbox-img" src="' +
          a.getAttribute("data-lightbox-src") + '" alt="">';
      }
      var multi = group.length > 1;
      $(".nv-lightbox-prev", box).style.display = multi ? "" : "none";
      $(".nv-lightbox-next", box).style.display = multi ? "" : "none";
    }
    function open(a) {
      var g = a.getAttribute("data-lightbox-group");
      group = g ? anchors.filter(function (x) { return x.getAttribute("data-lightbox-group") === g; }) : [a];
      gi = Math.max(0, group.indexOf(a));
      render();
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.classList.add("nav-open");
    }
    function close() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.classList.remove("nav-open");
      stage.innerHTML = "";
    }
    function step(d) { gi = (gi + d + group.length) % group.length; render(); }

    anchors.forEach(function (a) {
      on(a, "click", function (e) { e.preventDefault(); open(a); });
    });
    on(box, "click", function (e) {
      if (e.target.closest("[data-lb-close]")) return close();
      if (e.target.closest("[data-lb-prev]")) return step(-1);
      if (e.target.closest("[data-lb-next]")) return step(1);
    });
    on(document, "keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
  }

  /* ---------------------------------------------- custom checkbox / radio */
  function initChecks() {
    var inputs = $$("input[type=checkbox], input[type=radio]");
    function boxOf(inp) {
      return inp.parentElement && inp.parentElement.querySelector(".wf-checkbox-input, .wf-radio-input");
    }
    function syncAll() {
      inputs.forEach(function (i) {
        var b = boxOf(i);
        if (b) b.classList.toggle("is-checked", i.checked);
      });
    }
    inputs.forEach(function (inp) { on(inp, "change", syncAll); });
    syncAll();
  }

  /* --------------------------------------------------- blog category filter */
  /* Chips carry data-filter="<cat>|all"; blog cards carry data-cat. */
  function initBlogFilter() {
    var chips = $$(".catagory-button[data-filter]");
    if (!chips.length) return;
    var cards = $$(".blog-collection-item, .blog-card-collection-item, [data-cat]").filter(function (c) {
      return c.hasAttribute("data-cat");
    });
    function apply(cat) {
      cards.forEach(function (c) {
        c.style.display = (cat === "all" || c.getAttribute("data-cat") === cat) ? "" : "none";
      });
      chips.forEach(function (ch) {
        ch.setAttribute("aria-current", ch.getAttribute("data-filter") === cat ? "page" : "false");
      });
    }
    chips.forEach(function (ch) {
      on(ch, "click", function (e) { e.preventDefault(); apply(ch.getAttribute("data-filter")); });
    });
    apply("all");
  }

  /* ------------------------------------------------------------ demo forms */
  function initForms() {
    $$("[data-demo-form]").forEach(function (form) {
      on(form, "submit", function (e) {
        e.preventDefault();
        var wrap = form.parentElement;
        var done = wrap.querySelector("[data-form-done]");
        form.style.display = "none";
        if (done) { done.hidden = false; done.style.display = "block"; }
      });
    });
  }

  /* ------------------------------------------------------------------ video */
  function initVideo() {
    $$("video").forEach(function (v) {
      v.muted = true;
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    });
  }

  /* ============================================================ CART (LS) */
  var CART_KEY = "Nuvora:cart:v1";
  var Cart = {
    read: function () { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; } },
    write: function (items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); this.render(); },
    add: function (item) {
      var items = this.read();
      var ex = items.filter(function (i) { return i.id === item.id; })[0];
      if (ex) ex.qty += item.qty || 1;
      else items.push({ id: item.id, name: item.name, price: item.price, img: item.img || "", qty: item.qty || 1 });
      this.write(items);
    },
    remove: function (id) { this.write(this.read().filter(function (i) { return i.id !== id; })); },
    count: function () { return this.read().reduce(function (n, i) { return n + i.qty; }, 0); },
    total: function () { return this.read().reduce(function (s, i) { return s + parsePrice(i.price) * i.qty; }, 0); },
    render: function () {
      var items = this.read();
      var n = Cart.count();
      $$("[data-cart-count]").forEach(function (el) { el.textContent = n; el.hidden = (n === 0); });
      $$("[data-cart-list]").forEach(function (list) {
        list.innerHTML = "";
        items.forEach(function (i) {
          var li = document.createElement("li");
          li.className = "cart-line";
          li.innerHTML =
            (i.img ? '<img class="cart-line-img" src="' + i.img + '" alt="">' : "") +
            '<div class="cart-line-main"><div class="cart-line-name">' + esc(i.name) +
            '</div><div class="cart-line-price">' + esc(i.price) + " × " + i.qty + "</div></div>" +
            '<button class="cart-line-remove" data-cart-remove="' + esc(i.id) + '" aria-label="Remove">×</button>';
          list.appendChild(li);
        });
      });
      $$("[data-cart-empty]").forEach(function (e) { e.style.display = items.length ? "none" : ""; });
      $$("[data-cart-footer]").forEach(function (f) { f.hidden = items.length === 0; });
      $$("[data-cart-subtotal]").forEach(function (s) { s.textContent = fmt(Cart.total()); });
    }
  };
  function parsePrice(p) { var n = parseFloat(String(p).replace(/[^0-9.]/g, "")); return isNaN(n) ? 0 : n; }
  function fmt(n) { return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function initCart() {
    document.addEventListener("click", function (e) {
      var open = e.target.closest("[data-cart-open]");
      if (open) { e.preventDefault(); $$("[data-cart-modal]").forEach(function (m) { var o = m.classList.toggle("is-open"); m.setAttribute("aria-hidden", o ? "false" : "true"); }); return; }
      var close = e.target.closest("[data-cart-close]");
      if (close) { e.preventDefault(); $$("[data-cart-modal]").forEach(function (m) { m.classList.remove("is-open"); m.setAttribute("aria-hidden", "true"); }); return; }
      var rm = e.target.closest("[data-cart-remove]");
      if (rm) { e.preventDefault(); Cart.remove(rm.getAttribute("data-cart-remove")); return; }
      var add = e.target.closest("[data-add-to-cart]");
      if (add) {
        e.preventDefault();
        Cart.add({ id: add.getAttribute("data-cart-id") || add.getAttribute("data-cart-name"),
                   name: add.getAttribute("data-cart-name"), price: add.getAttribute("data-cart-price"),
                   img: add.getAttribute("data-cart-img") || "" });
        $$("[data-cart-modal]").forEach(function (m) { m.classList.add("is-open"); m.setAttribute("aria-hidden", "false"); });
        return;
      }
      if (!e.target.closest(".cart")) {
        $$("[data-cart-modal].is-open").forEach(function (m) { m.classList.remove("is-open"); m.setAttribute("aria-hidden", "true"); });
      }
    });
    Cart.render();
  }
  window.NuvoraCart = Cart;

  /* ------------------------------------------------- checkout / confirmation */
  var ORDER_KEY = "Nuvora:order:v1";
  function renderOrderSummary(items) {
    var list = $(".wf-commerce-commercecheckoutorderitemslist");
    if (list) {
      list.innerHTML = "";
      if (!items.length) list.innerHTML = '<div class="checkout-order-empty">Your cart is empty.</div>';
      items.forEach(function (i) {
        var d = document.createElement("div");
        d.className = "checkout-order-item";
        d.innerHTML =
          (i.img ? '<img class="checkout-order-img" src="' + i.img + '" alt="">' : "") +
          '<div class="checkout-order-main"><div class="checkout-order-name">' + esc(i.name) +
          '</div><div class="checkout-order-qty">Qty ' + i.qty + '</div></div>' +
          '<div class="checkout-order-price">' + esc(i.price) + "</div>";
        list.appendChild(d);
      });
    }
    var total = items.reduce(function (s, i) { return s + parsePrice(i.price) * i.qty; }, 0);
    $$(".wf-commerce-commercecheckoutsummarylineitem").forEach(function (li) {
      var v = li.lastElementChild; if (v) v.textContent = fmt(total);
    });
    var t = $(".wf-commerce-commercecheckoutsummarytotal");
    if (t) t.textContent = fmt(total);
  }
  function initCheckout() {
    if (!$(".wf-commerce-commercecheckoutorderitemslist")) return;
    if (/order-confirmation/.test(location.pathname)) {
      var order = null;
      try { order = JSON.parse(localStorage.getItem(ORDER_KEY)); } catch (e) {}
      renderOrderSummary(order ? order.items : []);
      if (order) $$("[data-order-number]").forEach(function (el) { el.textContent = order.id; });
      return;
    }
    var items = Cart.read();
    renderOrderSummary(items);
    var place = $(".wf-commerce-commercecheckoutplaceorderbutton");
    on(place, "click", function (e) {
      e.preventDefault();
      if (!items.length) return;
      var order = { id: "NVR-" + String(Date.now()).slice(-8), items: items, total: Cart.total(), date: new Date().toISOString() };
      localStorage.setItem(ORDER_KEY, JSON.stringify(order));
      Cart.write([]);
      location.href = "order-confirmation.html";
    });
  }

  /* -------------------------------------------------------------- boot */
  function init() {
    initReveal(); initNav(); initTabs(); initCounters(); initLightbox();
    initBlogFilter(); initChecks(); initForms(); initVideo(); initCart(); initCheckout();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
