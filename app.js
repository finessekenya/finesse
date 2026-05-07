/* ═══════════════════════════════════════════════
   FINESSE KENYA — app.js
   All product data, FAQ data, and site logic.
   ═══════════════════════════════════════════════ */

/* ── CONFIG ──────────────────────────────────── */
const WA   = '254708313193';  /* WhatsApp number — no + or spaces */
const BASE = window.location.origin + window.location.pathname;

/* ═══════════════════════════════════════════════
   PRODUCTS
   To add a new product: copy one product block,
   paste it at the END of the array (before the ]
   closing bracket), make sure there is a comma
   after the } of the product before it, and fill
   in your details. The grid grows automatically.

   bg options:  cb1  cb2  cb3  cb4  cb5  cb6
   ribbon options: null  'New'  'Best Seller'  'Premium'
   img: path to your image e.g. 'images/MyPhoto.jpeg'
        leave as '' to show the emoji instead
   ═══════════════════════════════════════════════ */
const products = [
  {
    id:     'body-butter',
    name:   'Emulsified Body Butter',
    cat:    'Body Care',
    price:  'KSh 1200',
    emoji:  '🧴',
    bg:     'cb1',
    ribbon: null,
    img:    'images/BodyButter.jpeg',
    desc:   'A rich, deeply nourishing body butter that melts into skin, locking in moisture for silky-smooth skin all day. Made with unrefined shea and botanical oils — perfect for dry to very dry skin.',
    ing:    'Raw Shea Butter, Coconut Oil, Sweet Almond Oil, Vitamin E, Lavender Essential Oil.',
    how:    [
      'After shower, scoop a small amount onto fingertips.',
      'Warm between palms until it softens.',
      'Massage into skin using gentle circular motions.',
      'Focus on dry areas — elbows, knees, heels.',
      'Allow 2–3 minutes to absorb fully.'
    ],
    bens:   ['Deep Moisture', 'Non-greasy', 'Softens Skin'],
    st:     '✨ Discover Finesse Body Butter — pure organic KEBS-approved luxury! 🌿 #FinesseKenya #OrganicSkincare #MadeInKenya #SheaButter'
  },
  {
    id:     'shea-hand-cream',
    name:   'Shea Hand Cream',
    cat:    'Hand Care',
    price:  'KSh 400',
    emoji:  '🤲',
    bg:     'cb2',
    ribbon: 'Best Seller',
    img:    'images/HandCream.jpeg',
    desc:   'Concentrated shea-infused hand cream that heals dry, cracked hands and strengthens nails. Fast-absorbing, never sticky — ideal for frequent hand washing.',
    ing:    'Unrefined Shea Butter, Beeswax, Jojoba Oil, Glycerin, Rose Water, Vitamin E.',
    how:    [
      'Apply a pea-sized amount to clean hands.',
      'Massage each finger individually.',
      'Pay attention to knuckles and cuticles.',
      'Use throughout the day as needed.',
      'For best results apply before bed with soft gloves.'
    ],
    bens:   ['Heals Cracks', 'Nail Strengthening', 'Quick Absorb'],
    st:     '🤲 Soft hands guaranteed with Finesse Shea Hand Cream! Organic & KEBS Approved 🌿 #FinesseKenya #HandCare #MadeInKenya'
  },
  {
    id:     'shea-butter-lotion',
    name:   'Shea Butter Lotion',
    cat:    'Body Care',
    price:  'KSh 400',
    emoji:  '💚',
    bg:     'cb3',
    ribbon: null,
    img:    'images/SheaButterLotion.jpeg',
    desc:   'A lightweight yet intensely moisturising lotion blending the power of shea butter with soothing plant extracts. Perfect for daily head-to-toe use on all skin types.',
    ing:    'Shea Butter, Aloe Vera Gel, Sunflower Oil, Glycerin, Chamomile Extract, Vitamin C.',
    how:    [
      'Apply to slightly damp skin after bathing.',
      'Pump 2–3 times into palm.',
      'Smooth over body in long strokes from feet upward.',
      'Layer with Body Butter on extra-dry areas.',
      'Use morning and evening for best results.'
    ],
    bens:   ['Lightweight', 'All-day Glow', 'Even Skin Tone'],
    st:     '💚 Glow every day with Finesse Shea Butter Lotion! Pure organic goodness from Kenya 🇰🇪 #FinesseKenya #SheaLotion'
  },
  {
    id:     'body-oil',
    name:   'Body Oil',
    cat:    'Body Care',
    price:  'KSh 1050',
    emoji:  '✨',
    bg:     'cb4',
    ribbon: null,
    img:    'images/BodyOil.jpeg',
    desc:   'A luxurious dry body oil that absorbs instantly, leaving a radiant glow with zero greasiness. Formulated with African botanicals for a luminous, healthy sheen.',
    ing:    'Marula Oil, Rosehip Oil, Argan Oil, Jojoba Oil, Vitamin E, Natural Jasmine Fragrance.',
    how:    [
      'Add a few drops to damp skin post-shower.',
      'Press oil between palms and apply quickly.',
      'Focus on legs, arms and décolleté.',
      'For a massage, use 10–15 drops.',
      'Mix into your lotion for a glow boost.'
    ],
    bens:   ['Radiant Glow', 'Dry-finish', 'Skin Barrier'],
    st:     '✨ Get that glowing skin with Finesse Body Oil! 100% natural, made in Kenya 🇰🇪 #FinesseKenya #BodyOil #GlowSkin'
  },
  {
    id:     'lip-balm',
    name:   'Lip Balm',
    cat:    'Lip Care',
    price:  'KSh 200',
    emoji:  '💋',
    bg:     'cb5',
    ribbon: 'New',
    img:    'images/LipBalm.jpeg',
    desc:   'Deeply healing lip balm crafted with raw shea butter and beeswax to repair dry, chapped lips and keep them pillowy-soft throughout the day.',
    ing:    'Raw Shea Butter, Beeswax, Coconut Oil, Castor Oil, Vitamin E, Natural Vanilla.',
    how:    [
      'Apply directly to lips as needed.',
      'Use before bed for overnight healing.',
      'Apply before lipstick as a primer.',
      'Re-apply after eating or drinking.',
      'For very chapped lips apply generously for 10 mins.'
    ],
    bens:   ['Heals Chapped Lips', 'Long-lasting', 'Natural Sheen'],
    st:     '💋 Say goodbye to dry lips! Finesse Lip Balm — all natural, all day soft 🌿 #FinesseKenya #LipCare #NaturalLips'
  },
  {
    id:     'whipped-shea-butter',
    name:   'Whipped Shea Butter',
    cat:    'Premium Body Care',
    price:  'KSh 800',
    emoji:  '☁️',
    bg:     'cb6',
    ribbon: 'Premium',
    img:    'images/WhippedSheaButter.jpeg',
    desc:   'Our most luxurious formula — raw shea butter whipped to a cloud-like airy texture that glides on effortlessly. Intense nourishment for the whole family. Light, fluffy and deeply hydrating.',
    ing:    '100% Raw African Shea Butter, Arrowroot Powder, Fractionated Coconut Oil, Lavender & Vanilla Oils.',
    how:    [
      'Scoop a small amount — a little goes far.',
      'Warm between fingertips for 10 seconds.',
      'Apply in gentle, sweeping motions.',
      'Ideal right after bathing on damp skin.',
      'Safe for children aged 3 and above.'
    ],
    bens:   ['Fluffy Texture', 'Intense Nourishment', 'Family-safe'],
    st:     '☁️ Meet the softest body care ever — Finesse Whipped Shea Butter! Light, airy, organic 🌿🇰🇪 #FinesseKenya #WhippedShea'
  },
  {
    id:     'african-black-soap',
    name:   'African Black Soap',
    cat:    'Skin Care',
    price:  'KSh 450',
    emoji:  '🫧',
    bg:     'cb1',
    ribbon: 'New',
    img:    'images/BlackSoap.png',
    desc:   'Traditional African black soap handcrafted from plantain skin ash, shea butter and cocoa pod. Gently cleanses, reduces blemishes, and evens skin tone without stripping natural oils.',
    ing:    'Plantain Skin Ash, Raw Shea Butter, Palm Kernel Oil, Coconut Oil, Water.',
    how:    [
      'Wet skin thoroughly with warm water.',
      'Lather soap between hands or on a washcloth.',
      'Apply gently in circular motions — face and body.',
      'Rinse well with warm water.',
      'Follow with your Finesse lotion or body butter to lock in moisture.'
    ],
    bens:   ['Clears Blemishes', 'Deep Cleanse', 'Evens Skin Tone'],
    st:     '🫧 Try Finesse African Black Soap — 100% natural, handcrafted & KEBS approved! ✨ #FinesseKenya #AfricanBlackSoap #NaturalSkincare'
  },
  {
    id:     'raw-unrefined-shea-butter',
    name:   'Raw Unrefined Shea Butter',
    cat:    'Pure Ingredient',
    price:  'KSh 450 per 200g',
    emoji:  '🥜',
    bg:     'cb2',
    ribbon: null,
    img:    'images/RawSheaButter.png',
    desc:   '100% pure, unrefined African shea butter — straight from source to your skin. Ivory-coloured, naturally nutty-scented, and packed with fatty acids and vitamins. Use alone or mix into your favourite recipe.',
    ing:    '100% Raw Unrefined Shea Butter (Butyrospermum Parkii). Nothing else.',
    how:    [
      'Scoop a small amount and warm between palms.',
      'Apply directly to skin, hair, or nails as needed.',
      'Use as a base for DIY body butters and creams.',
      'Apply to stretch marks, scars, or dry patches daily.',
      'Store in a cool dry place away from direct sunlight.'
    ],
    bens:   ['100% Pure', 'Multi-purpose', 'Hair & Skin'],
    st:     '🥜 Pure raw unrefined Shea Butter from Finesse Kenya — nature in its most honest form 🌿🇰🇪 #FinesseKenya #RawShea #PureIngredients'
  }
  /* ── ADD NEW PRODUCTS ABOVE THIS LINE ───────────
     Copy a product block from above, paste it here,
     add a comma after the } of the product before it,
     update the fields, and save. That is all.
     ─────────────────────────────────────────────── */
];

/* ═══════════════════════════════════════════════
   FAQ DATA
   ═══════════════════════════════════════════════ */
const faqs = [
  {
    q: 'Are Finesse products really 100% natural?',
    a: 'Yes! Every Finesse product is made with purely organic, natural ingredients. We never use parabens, sulfates, mineral oils, artificial fragrances, or any synthetic additives. Full ingredient lists are available on request.'
  },
  {
    q: 'What does KEBS approval mean?',
    a: "KEBS (Kenya Bureau of Standards) certification means our products have been independently tested and verified to meet Kenya's official quality and safety standards — the gold standard for consumer products in Kenya."
  },
  {
    q: 'How do I place an order?',
    a: "Click the 'Order Now' button on any product — it opens WhatsApp with a pre-filled message for that specific item. We accept M-Pesa, bank transfer, and cash on delivery in select Nairobi areas."
  },
  {
    q: 'Do you deliver outside Nairobi?',
    a: 'Yes! We deliver Kenya-wide. Nairobi orders are same-day or next-day. Upcountry takes 1–3 business days. Delivery costs are shared at the time of ordering.'
  },
  {
    q: 'Are these products safe for sensitive skin and children?',
    a: 'All formulas are gentle and safe for all skin types including sensitive skin. Whipped Shea Butter and Body Butter are particularly loved by parents for children aged 3+. Always patch test first if you have known allergies.'
  },
  {
    q: 'How long does a jar last?',
    a: 'With daily use, a standard jar lasts 4–6 weeks depending on body size and frequency of use. Because formulas are concentrated, you need less per application than water-based lotions.'
  },
  {
    q: 'Can I buy in bulk or for resale?',
    a: "Absolutely! We offer wholesale and bulk pricing for resellers, spas, and salons. Message us on WhatsApp to discuss your requirements and we'll provide a custom quote."
  }
];

/* ═══════════════════════════════════════════════
   SVG ICONS
   ═══════════════════════════════════════════════ */
const WASVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

const FBSVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';

const TTSVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>';

/* ═══════════════════════════════════════════════
   URL BUILDERS
   ═══════════════════════════════════════════════ */
function waUrl(name) {
  var msg = "Hello Finesse Kenya! 👋\n\nI'd like to order the *" + name + "*.\n\nPlease share availability, sizes and payment details. Thank you! 🌿";
  return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
}

function fbUrl(p) {
  return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(BASE + '#' + p.id) + '&quote=' + encodeURIComponent(p.st);
}

function ttUrl(p) {
  return 'https://www.tiktok.com/share?url=' + encodeURIComponent(BASE + '#' + p.id) + '&text=' + encodeURIComponent(p.st + ' #NaturalBeauty #SheaButter');
}

/* ═══════════════════════════════════════════════
   TOAST NOTIFICATION
   ═══════════════════════════════════════════════ */
function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2800);
}

function copyLink(id) {
  var url = BASE + '#' + id;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url)
      .then(function() { showToast('🔗 Product link copied!'); })
      .catch(function() { showToast('Link: ' + url); });
  } else {
    showToast('Link: ' + url);
  }
}

/* ═══════════════════════════════════════════════
   RENDER PRODUCTS
   ═══════════════════════════════════════════════ */
function renderProducts() {
  var grid = document.getElementById('pgrid');
  if (!grid) return;

  var html = '';
  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    var hasImg = p.img && p.img.trim() !== '';

    var imgHtml = hasImg
      ? '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">'
      : '<div class="pimg-fallback">' + p.emoji + '</div>';

    var ribbonHtml = '';
    if (p.ribbon) {
      var extraClass = p.ribbon === 'Best Seller' ? ' gold-r' : '';
      ribbonHtml = '<div class="pribbon' + extraClass + '">' + p.ribbon + '</div>';
    }

    var bensHtml = '';
    for (var b = 0; b < p.bens.length; b++) {
      bensHtml += '<span class="ptag">' + p.bens[b] + '</span>';
    }

    html += '<div class="pcard reveal" id="' + p.id + '" onclick="openModal(\'' + p.id + '\')">';
    html += '  <div class="pimg ' + p.bg + (hasImg ? ' has-image' : '') + '">';
    html += '    ' + ribbonHtml;
    html += '    ' + imgHtml;
    html += '    <div class="pshare" onclick="event.stopPropagation()">';
    html += '      <a href="' + fbUrl(p) + '" class="sbtn s-fb" target="_blank" title="Share on Facebook">' + FBSVG + '</a>';
    html += '      <a href="' + ttUrl(p) + '" class="sbtn s-tt" target="_blank" title="Share on TikTok">' + TTSVG + '</a>';
    html += '      <button class="sbtn s-cp" onclick="copyLink(\'' + p.id + '\')" title="Copy link">🔗</button>';
    html += '    </div>';
    html += '  </div>';
    html += '  <div class="pbody">';
    html += '    <div class="pcat">' + p.cat + '</div>';
    html += '    <div class="pname">' + p.name + '</div>';
    html += '    <div class="pdesc">' + p.desc.split('.')[0] + '.</div>';
    html += '    <div class="pbens">' + bensHtml + '</div>';
    html += '    <div class="pfooter">';
    html += '      <div class="pprice">' + p.price + '<span>KES</span></div>';
    html += '      <a href="' + waUrl(p.name) + '" class="obtn" target="_blank" onclick="event.stopPropagation()">' + WASVG + ' Order Now</a>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
  }
  grid.innerHTML = html;
}

/* ═══════════════════════════════════════════════
   PRODUCT MODAL
   ═══════════════════════════════════════════════ */
function openModal(id) {
  var p = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) { p = products[i]; break; }
  }
  if (!p) return;

  var hasImg = p.img && p.img.trim() !== '';
  var imgHtml = hasImg
    ? '<img src="' + p.img + '" alt="' + p.name + '">'
    : '<div class="img-placeholder"><span>' + p.emoji + '</span></div>';

  var howHtml = '';
  for (var s = 0; s < p.how.length; s++) {
    howHtml += '<li>' + p.how[s] + '</li>';
  }

  var html = '';
  html += '<div class="modal-img ' + p.bg + '">' + imgHtml + '</div>';
  html += '<div class="modal-bd">';
  html += '  <div class="mcat">' + p.cat + '</div>';
  html += '  <div class="mname">' + p.name + '</div>';
  html += '  <div class="mdesc">' + p.desc + '</div>';
  html += '  <div class="msec"><h4>Key Ingredients</h4><p>' + p.ing + '</p></div>';
  html += '  <div class="msec"><h4>How to Use</h4><ol>' + howHtml + '</ol></div>';
  html += '  <div class="mactions">';
  html += '    <a href="' + waUrl(p.name) + '" class="obtn" target="_blank" style="flex:1;justify-content:center">' + WASVG + ' Order on WhatsApp</a>';
  html += '  </div>';
  html += '  <div class="mshare">';
  html += '    <span>Share:</span>';
  html += '    <a href="' + fbUrl(p) + '" class="msi" target="_blank" title="Facebook">' + FBSVG + '</a>';
  html += '    <a href="' + ttUrl(p) + '" class="msi" target="_blank" title="TikTok">' + TTSVG + '</a>';
  html += '    <button class="msi" onclick="copyLink(\'' + p.id + '\')" title="Copy link">🔗</button>';
  html += '  </div>';
  html += '</div>';

  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-ov').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  var ov = document.getElementById('modal-ov');
  if (e && e.target !== ov && !(e.currentTarget && e.currentTarget.classList.contains('modal-x'))) return;
  ov.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var ov = document.getElementById('modal-ov');
    if (ov) { ov.classList.remove('open'); }
    document.body.style.overflow = '';
  }
});

/* ═══════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════ */
function renderFAQ() {
  var list = document.getElementById('faq-list');
  if (!list) return;

  var html = '';
  for (var i = 0; i < faqs.length; i++) {
    html += '<div class="faq-item" id="fi' + i + '">';
    html += '  <button class="faq-q" onclick="toggleFAQ(' + i + ')">';
    html += '    <span class="faq-qt">' + faqs[i].q + '</span>';
    html += '    <span class="faq-ic">+</span>';
    html += '  </button>';
    html += '  <div class="faq-ans" id="fa' + i + '"><div class="faq-ai">' + faqs[i].a + '</div></div>';
    html += '</div>';
  }
  list.innerHTML = html;
}

function toggleFAQ(i) {
  var item = document.getElementById('fi' + i);
  var ans  = document.getElementById('fa' + i);
  var isOpen = item.classList.contains('open');

  var allItems = document.querySelectorAll('.faq-item');
  for (var j = 0; j < allItems.length; j++) {
    allItems[j].classList.remove('open');
    allItems[j].querySelector('.faq-ans').style.maxHeight = '0';
  }

  if (!isOpen) {
    item.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}

/* ═══════════════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════════════ */
function openMM() {
  document.getElementById('mm').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMM() {
  document.getElementById('mm').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════
   SCROLL — nav shadow, back-to-top, progress bar
   ═══════════════════════════════════════════════ */
window.addEventListener('scroll', function() {
  var s = window.scrollY;
  var h = document.documentElement.scrollHeight - window.innerHeight;

  var nav = document.getElementById('nav');
  if (nav) { nav.classList.toggle('scrolled', s > 40); }

  var btt = document.getElementById('btt');
  if (btt) { btt.classList.toggle('show', s > 500); }

  var prog = document.getElementById('prog');
  if (prog) { prog.style.width = (h > 0 ? (s / h * 100) : 0) + '%'; }
});

/* ═══════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════ */
var revObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function initReveal() {
  var els = document.querySelectorAll('.reveal');
  for (var i = 0; i < els.length; i++) {
    revObs.observe(els[i]);
  }
}

/* ═══════════════════════════════════════════════
   INIT — runs when page loads
   ═══════════════════════════════════════════════ */
renderProducts();
renderFAQ();
initReveal();
