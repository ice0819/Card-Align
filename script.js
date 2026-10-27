(() => {
  'use strict';

  const root = document.documentElement;
  const page = root.dataset.page || 'home';
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  };
  const english = {
    skip: "Skip to content",
    navigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    navFeatures: "Features",
    navHow: "How it works",
    navService: "App & support",
    navFaq: "FAQ",
    navDownload: "Get the app",
    serviceEyebrow: "APP & SUPPORT",
    serviceTitle: "Free to use.<br>Support if you like.",
    serviceIntro: "CARD ALIGN offers free, open-source card centering analysis with no in-app purchases. Support independent development if you wish.",
    appServiceLabel: "ANDROID APP",
    appServiceTitle: "Card centering analysis",
    freeUse: "Free to use",
    appServiceBody: "Download and use the app for free, from border alignment to keeping a record of your collection.",
    appServiceFeature1: "Photo import, border detection, and manual alignment",
    appServiceFeature2: "Front and back centering ratios and estimated grades",
    appServiceFeature3: "Collection records, score card images, and sharing",
    serviceDownload: "Get the Android app",
    donationLabel: "VOLUNTARY SUPPORT",
    donationTitle: "Support independent development",
    donationAmount: "Your choice of amount",
    donationCurrency: "Charged in New Taiwan Dollars (TWD)",
    donationBody: "If the app helps with your collection, you can make a voluntary contribution to support ongoing development and maintenance. The app remains free to use.",
    donationPaymentNote: "Confirm the final amount on the ECPay payment page.",
    donationButton: "Donate via ECPay",
    serviceContactNote: "Questions about the app or a contribution? Contact us by email.",
    customerServiceLink: "View contact information",
    contactUs: "Contact us",
    customerServiceTitle: "Customer service",
    customerServiceBody: "Email us with questions about the app or your contribution.",
    contactPageTitle: "Contact us",
    contactEmailTitle: "Support email",
    contactBrandDescription: "Card centering analysis & collection records",
    themeDark: "Switch to dark mode",
    themeLight: "Switch to light mode",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroTitle1: "Great cards.",
    heroTitle2: "Perfectly aligned.",
    downloadAndroid: "Download for Android",
    idealCentering: "A little more balanced",
    carouselLabel: "Card showcase. Use the left and right arrow keys to browse.",
    previousCard: "Previous card",
    nextCard: "Next card",
    featureEyebrow: "A LITTLE DETAIL. A BETTER COLLECTION.",
    featuresTitle: "A closer look.<br>A clearer picture.",
    galleryLabel: "App feature images",
    poster1Title: "Start with your cards",
    poster1Body: "Import front and back photos to start your analysis.",
    poster2Title: "A quick price check",
    poster2Body: "Search card names and check the latest prices.",
    poster3Title: "Correct the perspective",
    poster3Body: "Fine-tune the corners to align a tilted card photo.",
    poster4Title: "Results worth keeping",
    poster4Body: "Analyze border ratios and turn the results into your own score card.",
    poster5Title: "Build your collection",
    poster5Body: "Keep a record and revisit your collection anytime.",
    poster6Title: "Your preferred look",
    poster6Body: "Switch between light and dark modes and different languages.",
    poster1Alt: "Feature graphic showing the CARD ALIGN home screen, card carousel, and front and back photo import.",
    poster2Alt: "Feature graphic showing card name search and third-party SNKRDUNK listing prices.",
    poster3Alt: "Feature graphic showing four-corner alignment and perspective correction.",
    poster4Alt: "Feature graphic showing border ratios and a personal score card with a custom name and estimated grades.",
    poster5Alt: "Feature graphic showing saved card images, names, dates, and results in the collection.",
    poster6Alt: "Feature graphic showing dark mode and Chinese and English interface options.",
    featureTabs: "Explore app features",
    alignTitle: "Find borders",
    alignBody: "Detect inner and outer borders, correct perspective, then refine the details with fine lines and an offset crosshair.",
    reportTitle: "View analysis scores",
    reportBody: "Check horizontal and vertical ratios on both sides, with PSA / BGS centering grade estimates.",
    collectionTitle: "Save to collection",
    collectionBody: "Save the image, name, date, and result in your collection. Revisit and edit your records anytime.",
    outerDetection: "Outer border alignment",
    interactiveDemo: "Interactive demo",
    adjustCentering: "Left / right border ratio",
    dragDemo: "Drag to explore ratios. Use the app for real analysis.",
    reportPreview: "Centering report",
    exampleResult: "Illustrative result",
    estimatedGrades: "Estimated centering grades",
    frontSide: "Front",
    backSide: "Back",
    ratioLegend: "Horizontal ratio / Vertical ratio",
    gradeNote: "Centering estimates only. Not an official grading result.",
    yourCollection: "Your collection",
    collectionDemo: "Sample collection",
    howTitle: "From photo to collection.",
    step1Title: "Capture or import",
    step1Body: "Prepare front and back photos of the same card.",
    step2Title: "Align the borders",
    step2Body: "Fine-tune the detected points. Confirm the crop, four corners, and inner border in order.",
    step3Title: "Read the ratios",
    step3Body: "Review both sides and their estimated centering grades. Go back and adjust whenever needed.",
    step4Title: "Make it a keepsake",
    step4Body: "Name it, save it to your collection, or export an image to share.",
    savedToCollection: "Added to collection",
    shareTitle: "Your card. Your own keepsake.",
    slabPreview: "Illustration of a CARD ALIGN score card",
    searchTitle: "Love a card? Check the market.",
    searchQuery: "Pikachu",
    faqTitle: "A few things<br>before you start.",
    faq1Q: "Is this the same as professional grading?",
    faq1A: "No. CARD ALIGN estimates PSA / BGS centering grades using border ratios only. It does not assess corners, edge wear, or surface condition, and is not an official PSA or BGS product. Use the results as a reference when organizing your collection or preparing for grading.",
    faq2Q: "What kind of photos should I use?",
    faq2A: "Use front and back photos of the same card, with all four corners visible. Shoot as straight-on as possible and avoid glare. Import from your gallery or open the camera directly. You can rotate the photo in 90° steps before aligning it.",
    faq3Q: "Do I need an internet connection?",
    faq3A: "Border detection, perspective correction, analysis, and the local collection work offline. Price search, online translation, product listings, and donation links require an internet connection.",
    faq4Q: "Can I use it on an iPhone?",
    faq4A: "The app is currently available for Android 7.0 and later. This website introduces the product; use the Android app for photography, alignment, and analysis.",
    faq5Q: "How do I install the APK?",
    faq5A: "Use the download button to save the APK directly, then open the file on your phone. If prompted, allow installation only for the browser or file manager you are using. Open CARD ALIGN after installation to import your photos.",
    downloadEyebrow: "YOUR NEXT GREAT FIND STARTS HERE.",
    downloadTitle: "Your next card.<br>A little more aligned.",
    downloadApk: "Download Android APK",
    downloadMeta: "v1.0 · Android 7.0+ · Direct APK download",
    madeWithCare: "Made with care, for collectors.",
    artworkCredit: "Card images are shown for product illustration. All card artwork and trademarks belong to their respective owners.",
    cardPonchoRed: "Pikachu wearing a Charizard poncho",
    cardPonchoGreen: "Pikachu wearing a Rayquaza poncho",
    cardLillie: "Lillie trainer card",
    cardMew: "Mew ex card",
    cardPikachu: "Pikachu card",
    cardCharizard: "Charizard card",
    cardGengar: "Gengar card",
    cardPsyduck: "Psyduck card",
    cardPikachuEx: "Pikachu ex card",
    navPricing: "Pricing",
    contactWebsiteTitle: "Website",
    tutorialSteps: "Step-by-step instructions",
  };
  const chineseLabels = {
    themeDark: '切換深色模式', themeLight: '切換淺色模式', menuOpen: '開啟選單', menuClose: '關閉選單'
  };
  const translatedNodes = [...document.querySelectorAll('[data-i18n]')];
  const originalText = new Map(translatedNodes.map(node => [node, node.innerHTML]));
  const translatedAttributes = [...document.querySelectorAll('[data-i18n-aria], [data-alt]')];
  const originalAttributes = new Map(translatedAttributes.map(node => [node, node.getAttribute(node.dataset.alt ? 'alt' : 'aria-label')]));
  const languageButton = document.querySelector('.language-toggle');
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  let language = 'zh-Hant';

  function label(key) { return language === 'en' ? english[key] : chineseLabels[key]; }
  function updateActionLabels() {
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', label(dark ? 'themeLight' : 'themeDark'));
    themeButton.setAttribute('aria-pressed', String(dark));
    menuButton.setAttribute('aria-label', label(mobileMenu.hidden ? 'menuOpen' : 'menuClose'));
  }
  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'zh-Hant';
    root.lang = language;
    translatedNodes.forEach(node => {
      node.innerHTML = language === 'en' ? (english[node.dataset.i18n] ?? originalText.get(node)) : originalText.get(node);
    });
    translatedAttributes.forEach(node => {
      const attr = node.dataset.alt ? 'alt' : 'aria-label';
      node.setAttribute(attr, language === 'en' ? (english[node.dataset.alt || node.dataset.i18nAria] ?? originalAttributes.get(node)) : originalAttributes.get(node));
    });
    languageButton.textContent = language === 'en' ? '中' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? '切換為繁體中文' : 'Switch to English');
    const pageCopy = {
      home: language === 'en'
        ? ['CARD ALIGN — Great cards. Perfectly aligned.', 'The Android app for card collectors. Analyze centering and keep your favorite cards.']
        : ['CARD ALIGN — 好卡，值得好好對齊。', 'CARD ALIGN 卡牌邊框分析與收藏小卡。'],
      tutorial: language === 'en'
        ? ['How it works — CARD ALIGN', 'Learn border alignment, centering analysis, and collection records.']
        : ['使用教學｜CARD ALIGN', '從照片到收藏，了解邊框定位、比例分析與小卡紀錄流程。'],
      pricing: language === 'en'
        ? ['Pricing — CARD ALIGN', 'Free to use with no in-app purchases. Optional contributions are charged in TWD.']
        : ['收費方式｜CARD ALIGN', '免費使用，無應用程式內購；自願贊助以新台幣計價。'],
      contact: language === 'en'
        ? ['Contact us — CARD ALIGN', 'CARD ALIGN support email and official website.']
        : ['聯絡我們｜CARD ALIGN', 'CARD ALIGN 的客服信箱與網站網址。']
    };
    const [title, description] = pageCopy[page] || pageCopy.home;
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = title;
    document.querySelector('meta[property="og:description"]').content = description;
    document.querySelectorAll('a[data-page-link]').forEach(link => {
      const url = new URL(link.href, window.location.href);
      url.searchParams.set('lang', language);
      link.href = url.href;
    });
    updateActionLabels();
    storage.set('card-align-language', language);
  }
  languageButton.addEventListener('click', () => {
    setLanguage(language === 'en' ? 'zh-Hant' : 'en');
    const pageUrl = new URL(window.location.href);
    pageUrl.searchParams.set('lang', language);
    try { window.history.replaceState(null, '', pageUrl); } catch (_) {}
  });
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    storage.set('card-align-theme', root.dataset.theme);
    document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#111311' : '#fafaf8';
    updateActionLabels();
  });
  function closeMenu() {
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    updateActionLabels();
  }
  menuButton.addEventListener('click', () => {
    mobileMenu.hidden = !mobileMenu.hidden;
    menuButton.setAttribute('aria-expanded', String(!mobileMenu.hidden));
    updateActionLabels();
  });
  mobileMenu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuButton.focus(); }
  });
  window.matchMedia('(min-width: 1021px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function initializeCarousel() {
    // Native buttons and arrow keys share the same card fan. No drag library needed.
    const showcase = document.querySelector('.card-showcase');
    if (!showcase) return;
    const cards = [...showcase.querySelectorAll('.showcase-card')];
    const status = document.querySelector('#carousel-status');
    let current = 4;
    let lastInteraction = 0;
    let hovering = false;
    let dragStart = null;
    let suppressClick = false;

    function showCard(index, manual = true) {
      current = (index + cards.length) % cards.length;
      cards.forEach((card, i) => {
        let distance = (i - current + cards.length) % cards.length;
        if (distance > cards.length / 2) distance -= cards.length;
        card.style.setProperty('--offset', distance);
        card.style.setProperty('--angle', `${distance * 5.5}deg`);
        card.style.setProperty('--rise', `${Math.abs(distance) ** 1.7 * 6}px`);
        card.style.setProperty('--layer', 8 - Math.abs(distance));
        card.classList.toggle('is-current', distance === 0);
        card.tabIndex = distance === 0 ? 0 : -1;
        if (distance === 0) card.setAttribute('aria-current', 'true');
        else card.removeAttribute('aria-current');
      });
      if (manual) {
        lastInteraction = Date.now();
        status.textContent = `${current + 1} / ${cards.length} — ${cards[current].dataset.name}`;
      }
    }
    document.querySelector('.showcase-prev').addEventListener('click', () => showCard(current - 1));
    document.querySelector('.showcase-next').addEventListener('click', () => showCard(current + 1));
    showcase.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); showCard(current + (event.key === 'ArrowRight' ? 1 : -1));
        if (event.target.classList.contains('showcase-card')) cards[current].focus({ preventScroll: true });
      }
    });
    showcase.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') hovering = true; });
    showcase.addEventListener('pointerleave', () => { hovering = false; dragStart = null; });
    showcase.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.target.closest('.showcase-controls')) return;
      dragStart = { x: event.clientX, y: event.clientY };
      lastInteraction = Date.now();
    });
    showcase.addEventListener('pointerup', event => {
      if (!dragStart) return;
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
      if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) {
        showCard(current + (dx < 0 ? 1 : -1));
        suppressClick = true;
        setTimeout(() => { suppressClick = false; }, 200);
      }
      dragStart = null;
    });
    showcase.addEventListener('pointercancel', () => { dragStart = null; });
    cards.forEach((card, i) => {
      card.addEventListener('dragstart', event => event.preventDefault());
      card.addEventListener('click', () => {
        if (suppressClick) return;
        showCard(i);
      });
    });
    setInterval(() => {
      if (reducedMotion.matches || document.hidden || hovering || dragStart || showcase.contains(document.activeElement) || Date.now() - lastInteraction < 9000) return;
      const bounds = showcase.getBoundingClientRect();
      if (bounds.bottom > 0 && bounds.top < window.innerHeight) showCard(current + 1, false);
    }, 4500);
    showCard(current, false);

  }

  function initializeAnalysisDemo() {
    // Accessible tabs use roving focus and support arrow, Home, and End keys.
    const tabs = [...document.querySelectorAll('[role="tab"]')];
    if (!tabs.length) return;
    function selectTab(tab, focus = false) {
      tabs.forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        item.classList.toggle('is-active', selected);
        document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
      });
      if (focus) tab.focus({ preventScroll: true });
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectTab(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % tabs.length;
        if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
      });
    });
    const range = document.querySelector('#centering-offset');
    range.addEventListener('input', () => {
      const offset = Number(range.value);
      document.querySelector('#centering-output').value = `${50 + offset} : ${50 - offset}`;
      document.querySelector('.inner-outline').style.setProperty('--demo-offset', `${offset / 2}px`);
    });

  }
  initializeCarousel();
  initializeAnalysisDemo();

  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    root.classList.add('js-motion');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: .07 });
    document.querySelectorAll('.reveal').forEach(node => revealObserver.observe(node));
  }
  document.querySelector('#year').textContent = new Date().getFullYear();
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  const initialLanguage = ['zh', 'zh-Hant'].includes(requestedLanguage)
    ? 'zh-Hant'
    : requestedLanguage === 'en' ? 'en' : storage.get('card-align-language');
  setLanguage(initialLanguage);
  const legacyPages = { '#how-it-works': 'tutorial.html', '#service-info': 'pricing.html' };
  if (page === 'home' && legacyPages[window.location.hash]) {
    const target = new URL(legacyPages[window.location.hash], window.location.href);
    target.searchParams.set('lang', language);
    target.hash = window.location.hash;
    window.location.replace(target.href);
  }
  document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#111311' : '#fafaf8';
})();
