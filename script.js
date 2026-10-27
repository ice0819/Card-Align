(() => {
  'use strict';

  const root = document.documentElement;
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  };
  const english = {
    skip: 'Skip to content', navigation: 'Main navigation', mobileNavigation: 'Mobile navigation',
    navFeatures: 'Features', navHow: 'How it works', navService: 'App & support', navFaq: 'FAQ', navDownload: 'Get the app',
    serviceEyebrow: 'APP & SUPPORT', serviceTitle: 'Free to use.<br>Support if you like.',
    serviceIntro: 'CARD ALIGN is a free Android app for card centering analysis. You can also choose to support its independent development.',
    appServiceLabel: 'ANDROID APP', appServiceTitle: 'Card centering analysis', freeUse: 'Free to use',
    appServiceBody: 'Download and use the app for free, from border alignment to keeping a record of your collection.',
    appServiceFeature1: 'Photo import, border detection, and manual alignment',
    appServiceFeature2: 'Front and back centering ratios and estimated grades',
    appServiceFeature3: 'Collection records, score card images, and sharing',
    serviceDownload: 'Get the Android app', donationLabel: 'VOLUNTARY SUPPORT', donationTitle: 'Support independent development',
    donationAmount: 'Your choice of amount', donationCurrency: 'Charged in New Taiwan Dollars (TWD)',
    donationBody: 'If the app helps with your collection, you can make a voluntary contribution to support ongoing development and maintenance. The app remains free to use.',
    donationPaymentNote: 'Confirm the final amount on the ECPay payment page.', donationButton: 'Donate via ECPay',
    serviceContactNote: 'Questions about the app or a contribution? Contact us by email.', customerServiceLink: 'View contact information',
    contactUs: 'Contact us', customerServiceTitle: 'Customer service', customerServiceBody: 'Email us with questions about the app or your contribution.',
    themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode', menuOpen: 'Open menu', menuClose: 'Close menu',
    heroTitle1: 'Great cards.', heroTitle2: 'Perfectly aligned.',
    downloadAndroid: 'Download for Android', idealCentering: 'A little more balanced',
    carouselLabel: 'Card showcase. Use the left and right arrow keys to browse.',
    previousCard: 'Previous card', nextCard: 'Next card', swipeHint: 'Swipe to find your next favorite',
    featureEyebrow: 'A LITTLE DETAIL. A BETTER COLLECTION.', featuresTitle: 'A closer look.<br>A clearer picture.',
    featuresIntro: 'Automatic detection. Your final adjustment. Every border, made clearer.',
    galleryIntro: 'See what you can do, with actual app screens.', galleryHint: 'Select an image for a closer look', galleryLabel: 'App feature images',
    poster1Title: 'Start with your cards', poster1Body: 'Import front and back photos to start your analysis.',
    poster2Title: 'A quick price check', poster2Body: 'Search by card name and view third-party listings.',
    poster3Title: 'Correct the perspective', poster3Body: 'Fine-tune the corners to align a tilted card photo.',
    poster4Title: 'Results worth keeping', poster4Body: 'Review the ratios and create your personal score card.',
    poster5Title: 'Build your collection', poster5Body: 'Keep names, dates, and results ready to revisit.',
    poster6Title: 'Your preferred look', poster6Body: 'Switch between light, dark, Chinese, and English.',
    poster1Action: 'Enlarge: Start with your cards', poster2Action: 'Enlarge: A quick price check',
    poster3Action: 'Enlarge: Correct the perspective', poster4Action: 'Enlarge: Results worth keeping',
    poster5Action: 'Enlarge: Build your collection', poster6Action: 'Enlarge: Your preferred look',
    poster1Alt: 'Feature graphic showing the CARD ALIGN home screen, card carousel, and front and back photo import.',
    poster2Alt: 'Feature graphic showing card name search and third-party SNKRDUNK listing prices.',
    poster3Alt: 'Feature graphic showing four-corner alignment and perspective correction.',
    poster4Alt: 'Feature graphic showing border ratios and a personal score card with a custom name and estimated grades.',
    poster5Alt: 'Feature graphic showing saved card images, names, dates, and results in the collection.',
    poster6Alt: 'Feature graphic showing dark mode and Chinese and English interface options.',
    viewOriginal: 'Open full image',
    featureTabs: 'Explore app features', alignTitle: 'Auto first. Fine-tune next.',
    alignBody: 'Detect inner and outer borders, correct perspective, then refine the details with fine lines and an offset crosshair.',
    reportTitle: 'Numbers you can see.', reportBody: 'Check horizontal and vertical ratios on both sides, with PSA / BGS centering grade estimates.',
    collectionTitle: 'Keep your favorites close.', collectionBody: 'Save the image, name, date, and result in your collection. Revisit and edit your records anytime.',
    outerDetection: 'Outer border alignment', interactiveDemo: 'Interactive demo', fourCorners: '4 / 4 corners aligned',
    adjustCentering: 'Left / right border ratio', dragDemo: 'Drag to explore ratios. Use the app for real analysis.',
    reportPreview: 'Centering report', exampleResult: 'Illustrative result', estimatedGrades: 'Estimated centering grades',
    frontSide: 'Front', backSide: 'Back', ratioLegend: 'Horizontal ratio / Vertical ratio',
    gradeNote: 'Centering estimates only. Not an official grading result.', yourCollection: 'Your collection', collectionDemo: 'Sample collection',
    collectionSaved: 'Every card has a story worth keeping.',
    howEyebrow: 'LESS GUESSING. MORE COLLECTING.', howTitle: 'From a photo<br>to a keepsake.',
    howIntro: 'Pick your photos. Align the borders.<br>Make room for your next favorite.',
    step1Title: 'Capture or import', step1Body: 'Start with front and back photos of the same card. Wrong way up? Rotate 90° before you begin.',
    step2Title: 'Align the borders', step2Body: 'Fine-tune the detected points. Confirm the crop, four corners, and inner border in order.',
    step3Title: 'Read the ratios', step3Body: 'Review both sides and their estimated centering grades. Go back and adjust whenever needed.',
    step4Title: 'Make it a keepsake', step4Body: 'Name it, save it to your collection, or share an image. Your next card is just a tap away.',
    savedToCollection: 'Added to collection', moreEyebrow: 'KEEP THE CARDS. KEEP THE MOMENT.',
    moreTitle: 'For more than analysis.<br>For the love of collecting.', shareLabel: 'MAKE IT YOURS',
    shareTitle: 'Your card. Your own keepsake.', shareBody: 'A red-and-white label, a slab-inspired design, and your own card name and results.',
    slabPreview: 'Illustration of a CARD ALIGN score card',
    searchLabel: 'A LITTLE MARKET CHECK', searchTitle: 'Love a card? Check the market.',
    searchBody: 'Search by name or number. Name suggestions help you find the right card. View SNKRDUNK listing prices, then check the original listing for details.',
    searchQuery: 'Pikachu', privacyTitle: 'Your photos stay with you.',
    privacyBody: 'Perspective correction and border analysis happen on your phone. No cloud upload needed.',
    bilingual: '繁體中文 / English', lightDark: 'Light / dark mode', exportFormat: 'High-resolution PNG export',
    faqTitle: 'A few things<br>before you start.', contact: 'More questions? Get in touch',
    faq1Q: 'Is this the same as professional grading?',
    faq1A: 'No. CARD ALIGN estimates PSA / BGS centering grades using border ratios only. It does not assess corners, edge wear, or surface condition, and is not an official PSA or BGS product. Use the results as a reference when organizing your collection or preparing for grading.',
    faq2Q: 'What kind of photos should I use?',
    faq2A: 'Use front and back photos of the same card, with all four corners visible. Shoot as straight-on as possible and avoid glare. Import from your gallery or open the camera directly. You can rotate the photo in 90° steps before aligning it.',
    faq3Q: 'Do I need an internet connection?',
    faq3A: 'Border detection, perspective correction, analysis, and the local collection work offline. Price search, online translation, product listings, and donation links require an internet connection.',
    faq4Q: 'Can I use it on an iPhone?',
    faq4A: 'The app is currently available for Android 7.0 and later. This website introduces the product; use the Android app for photography, alignment, and analysis.',
    faq5Q: 'How do I install the APK?',
    faq5A: 'Use the download button to open the developer’s Google Drive link, download the APK, then open the file on your phone. If prompted, allow installation only for the browser or file manager you are using. Open CARD ALIGN after installation to import your photos.',
    downloadEyebrow: 'YOUR NEXT GREAT FIND STARTS HERE.', downloadTitle: 'Your next card.<br>A little more aligned.',
    downloadBody: 'Keep what you love. See every detail.', downloadApk: 'Download Android APK',
    downloadMeta: 'v1.0 · Android 7.0+ · Download via Google Drive', feedback: 'Feedback', donate: 'Donate',
    madeWithCare: 'Made with care, for collectors.', artworkCredit: 'Card images are shown for product illustration. All card artwork and trademarks belong to their respective owners.',
    closeImage: 'Close image',
    cardPonchoRed: 'Pikachu wearing a Charizard poncho', cardPonchoGreen: 'Pikachu wearing a Rayquaza poncho',
    cardLillie: 'Lillie trainer card', cardMew: 'Mew ex card', cardPikachu: 'Pikachu card',
    cardCharizard: 'Charizard card', cardGengar: 'Gengar card', cardPsyduck: 'Psyduck card', cardPikachuEx: 'Pikachu ex card'
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
    const title = language === 'en' ? 'CARD ALIGN — Great cards. Perfectly aligned.' : 'CARD ALIGN — 好卡，值得好好對齊。';
    const description = language === 'en'
      ? 'The Android app for card collectors. Analyze centering, align borders, and turn your favorite cards into personal keepsakes.'
      : 'CARD ALIGN 卡牌邊框分析 App。自動偵測內外框、分析正反面居中比例，製作你的收藏小卡，儲存、分享並收進專屬圖鑑。';
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = title;
    document.querySelector('meta[property="og:description"]').content = description;
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
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  // Native buttons and arrow keys share the same card fan. No drag library needed.
  const showcase = document.querySelector('.card-showcase');
  const cards = [...showcase.querySelectorAll('.showcase-card')];
  const status = document.querySelector('#carousel-status');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const lightbox = document.querySelector('.card-lightbox');
  const lightboxOriginal = document.querySelector('.lightbox-original');
  let current = 4;
  let lastInteraction = 0;
  let hovering = false;
  let dragStart = null;
  let suppressClick = false;

  function openImagePreview(image, caption, featureImage = false) {
    const preview = lightbox.querySelector('img');
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt;
    preview.width = image.naturalWidth || Number(image.getAttribute('width'));
    preview.height = image.naturalHeight || Number(image.getAttribute('height'));
    document.querySelector('#lightbox-caption').textContent = caption;
    lightbox.classList.toggle('is-feature-image', featureImage);
    lightboxOriginal.href = preview.src;
    lightboxOriginal.hidden = !featureImage;
    lightbox.showModal();
    document.body.classList.add('dialog-open');
  }

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
      if (i !== current) return showCard(i);
      openImagePreview(card.querySelector('img'), card.dataset.name);
    });
  });
  document.querySelectorAll('.poster-button').forEach(button => {
    button.addEventListener('click', () => {
      const caption = button.closest('.app-poster').querySelector('h3').textContent;
      openImagePreview(button.querySelector('img'), caption, true);
    });
  });
  document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target !== lightbox) return;
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
  });
  lightbox.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastInteraction = Date.now(); });
  setInterval(() => {
    if (reducedMotion.matches || document.hidden || hovering || dragStart || lightbox.open || showcase.contains(document.activeElement) || Date.now() - lastInteraction < 9000) return;
    const bounds = showcase.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < window.innerHeight) showCard(current + 1, false);
  }, 4500);
  showCard(current, false);

  // Accessible tabs use roving focus and support arrow, Home, and End keys.
  const tabs = [...document.querySelectorAll('[role="tab"]')];
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
  document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#111311' : '#fafaf8';
})();
