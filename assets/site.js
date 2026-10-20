/* Karen Cutler — shared behaviour: i18n, nav, page transitions, motion, form */
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================= FRENCH (English lives in the HTML) ================= */
  const FR = {
    t_home:"Karen Cutler — Entraîneuse privée à Montréal",
    t_programs:"Programmes — Karen Cutler, entraîneuse privée",
    t_menopause:"S'entraîner pendant la ménopause — Karen Cutler",
    t_about:"À propos de Karen Cutler — Entraîneuse privée à Montréal",
    t_contact:"Contact — Karen Cutler, entraîneuse privée à Montréal",

    brand_sub:"Entraîneuse privée · Montréal",
    nav_home:"Accueil", nav_programs:"Programmes", nav_menopause:"Ménopause", nav_about:"À propos", nav_contact:"Contact",
    cta_start:"Commencer", cta_first:"Réserver ma première séance", cta_programs:"Voir les programmes",
    cta_contact:"Écrire à Karen", cta_ask:"Demander à Karen", cta_work:"Travailler avec moi",

    hero_l1:"Plus forte", hero_l2:"à tout", hero_l3:"âge.",
    hero_sub:"Entraînement privé à Montréal avec Karen Cutler. De la vraie force, une meilleure mobilité et une coach qui vous garde le sourire à chaque série.",
    chip1_b:"Coaching 1:1", chip1_s:"Bâti autour de vous", chip2_b:"Femmes 40+", chip2_s:"Spécialisée ménopause",
    mq1:"Force", mq2:"Mobilité", mq3:"Confiance", mq4:"Énergie", mq5:"Équilibre", mq6:"Le sourire en prime",

    who_title:"Qui j'entraîne",
    who_lede:"Personne ne part du même endroit. Chaque plan est bâti à partir de là où vous en êtes aujourd'hui, pas d'un modèle tout fait.",
    who1_t:"Les débutantes", who1_d:"Jamais mis les pieds dans un gym, ou jamais été à l'aise ? On commence par les bases et on bâtit la confiance, une séance à la fois.",
    who2_t:"Le retour à l'entraînement", who2_d:"La vie s'est emballée, une blessure vous a ralentie ou la motivation s'est envolée. On rebâtit votre base en sécurité pour bouger régulièrement à nouveau.",
    who3_t:"Femmes 40+", who3_d:"La périménopause et la ménopause changent la façon dont votre corps réagit à l'entraînement. Votre programme devrait changer avec lui.",
    who_link:"Trouver mon programme", who3_link:"S'entraîner pendant la ménopause",

    how_title:"Comment ça marche", how_lede:"De votre premier message à votre première série, voici à quoi vous attendre.",
    step1_t:"Écrivez-moi", step1_d:"Envoyez un court message avec vos objectifs. Je vous réponds personnellement pour planifier une première discussion.",
    step2_t:"Évaluation", step2_d:"On regarde comment vous bougez, ce que vous aimez et ce qui vous a freinée, pour un plan adapté à votre corps et à votre horaire.",
    step3_t:"Entraînement et progrès", step3_d:"Des séances ajustées à mesure que vous devenez plus forte, avec un suivi pour voir tout le chemin parcouru.",

    quote:"J'arrivais nerveuse et je repartais de chaque séance le sourire aux lèvres, plus forte que je le croyais.",
    quote_by:"Une cliente de Karen",
    band_t:"Votre première séance commence par un message", band_d:"Dites-moi où vous en êtes et ce que vous voulez ressentir. Je m'occupe du reste.",

    pg_l1:"Entraînez-vous", pg_l2:"à votre façon.",
    pg_lede:"Quatre façons de travailler avec moi. Choisissez-en une pour commencer, ou combinez-les. On ajuste en chemin.",
    p1_t:"Entraînement privé 1:1", p1_for:"Idéal si vous voulez un coaching concret et quelqu'un pour vous motiver.",
    p1_d:"Des séances privées en personne, bâties entièrement autour de vous. Chaque entraînement s'ajuste en temps réel : stimulant, sans être écrasant.",
    p1_l1:"Programmation personnalisée", p1_l2:"Coaching de technique sur chaque mouvement", p1_l3:"Suivi des progrès d'une séance à l'autre",
    p2_t:"Programme en ligne sur mesure", p2_for:"Idéal si votre horaire change ou si vous vous entraînez seule.",
    p2_d:"Un plan écrit pour vous, à suivre à la maison, au gym ou en voyage, avec des suivis réguliers pour ne jamais deviner.",
    p2_l1:"Votre plan, sur votre téléphone", p2_l2:"Démos vidéo pour chaque exercice", p2_l3:"Suivis et ajustements",
    p3_t:"Force et mobilité", p3_for:"Idéal si vous êtes raide, assise souvent ou voulez protéger vos articulations.",
    p3_d:"Une force fonctionnelle et une amplitude retrouvée, pour que le quotidien soit plus facile et que votre corps tienne la route longtemps.",
    p3_l1:"Bases de force douces pour les articulations", p3_l2:"Travail de mobilité et de souplesse", p3_l3:"Posture et prévention des blessures",
    p4_t:"Nutrition et habitudes", p4_for:"Idéal en complément de tout programme, pour soutenir vos résultats.",
    p4_d:"Des conseils concrets pour nourrir l'entraînement et la récupération. Pas de régime choc, pas de culpabilité : des habitudes qui collent à votre vraie vie.",
    p4_l1:"Les bases de la nutrition au quotidien", p4_l2:"Des habitudes qui durent", p4_l3:"Sommeil, stress et récupération",
    faq_title:"Vos questions avant de commencer", faq_lede:"Vous ne voyez pas la vôtre ? Écrivez-moi, aucune question n'est bête.",
    q1:"Je suis complètement débutante. Est-ce correct ?", a1:"Tout à fait. Beaucoup de clientes commencent sans aucune expérience. On débute avec des mouvements que vous faites bien, puis on progresse à votre rythme.",
    q2:"J'ai une ancienne blessure. Puis-je m'entraîner ?", a2:"Dans la plupart des cas, oui. Parlez-m'en dans votre premier message. On adapte les exercices, et si un avis médical est nécessaire avant, je vous le dirai.",
    q3:"À quelle fréquence devrais-je m'entraîner ?", a3:"Ça dépend de vos objectifs et de votre horaire. Deux à trois séances par semaine conviennent à la plupart des gens, et on trouvera un rythme que vous pouvez garder.",
    q4:"Coachez-vous en français et en anglais ?", a4:"Oui. Les séances et les suivis peuvent se faire dans l'une ou l'autre langue.",
    q5:"Comment je commence ?", a5:"Remplissez le court formulaire de la page contact ou appelez-moi. Je vous réponds personnellement pour planifier votre première séance.",
    band2_t:"Vous hésitez entre les programmes ?", band2_d:"Dites-moi vos objectifs et je vous recommande par où commencer.",

    mp_l1:"La ménopause n'est", mp_l2:"pas la ligne d'arrivée.",
    mp_lede:"Votre corps change pendant la périménopause et la ménopause. Avec un entraînement pensé pour ces changements, ce chapitre peut être l'un des plus forts de votre vie.",
    mp_ch_t:"Ce qui change, et comment on s'entraîne", mp_ch_d:"Choisissez un sujet pour voir comment l'entraînement s'adapte. Chaque plan reste bâti pour vous personnellement.",
    tab1:"Os", tab2:"Muscles", tab3:"Énergie et sommeil", tab4:"Humeur",
    mp_what:"Ce qui peut arriver", mp_how:"Comment on s'entraîne",
    mp1_w:"La baisse d'œstrogène est liée à une perte osseuse plus rapide, ce qui augmente le risque de fractures plus tard.",
    mp1_h:"Un travail de force progressif et des impacts sécuritaires, parmi les moyens les mieux étudiés pour aider à maintenir la densité osseuse.",
    mp2_w:"La masse musculaire tend à diminuer avec l'âge, ce qui touche la force, l'équilibre et le métabolisme.",
    mp2_h:"Soulever avec une bonne technique et une progression régulière pour bâtir et garder des muscles utiles au quotidien.",
    mp3_w:"Bouffées de chaleur, sommeil perturbé et fatigue peuvent rendre la régularité difficile.",
    mp3_h:"Des séances dosées selon votre énergie du jour, pour que l'entraînement vous remonte au lieu de vous épuiser.",
    mp4_w:"Les sautes d'humeur et un corps qui change peuvent ébranler la confiance.",
    mp4_h:"Des objectifs clairs et des progrès visibles, dans un cadre bienveillant où vous vous sentez capable à nouveau.",
    mp_p_t:"Nos priorités", mp_p_d:"Quatre priorités guident chaque séance pour les femmes à cette étape de la vie.",
    pl1_t:"Os et articulations", pl1_d:"Un travail de force qui soutient la densité osseuse et garde les articulations solides.",
    pl2_t:"Muscles et métabolisme", pl2_d:"Bâtir et préserver les muscles pour soutenir la force et l'énergie au quotidien.",
    pl3_t:"Récupération et sommeil", pl3_d:"Un volume d'entraînement qui respecte la récupération, pour mieux dormir, pas moins.",
    pl4_t:"Confiance", pl4_d:"Un mouvement qui vous aide à vous sentir vous-même à nouveau, capable et sereine.",
    mp_note:"L'entraînement complète les soins médicaux, il ne les remplace pas. Pour des symptômes ou un traitement, parlez-en à votre médecin.",
    band3_t:"Parlons de là où vous en êtes", band3_d:"Un court message suffit pour commencer. Tout ce que vous partagez reste entre nous.",

    ab_l1:"Encourager,", ab_l2:"jamais forcer.",
    ab_lede:"Bonjour, je suis Karen. J'aide les gens à devenir plus forts d'une façon qui fait du bien, au corps comme au moral.",
    ab_tag:"Toujours en formation : je garde mon coaching à jour lors de conférences en entraînement et performance.",
    ab_story_t:"Pourquoi je coache",
    ab_p1:"Je suis devenue entraîneuse parce que je crois que le sport devrait <strong>améliorer votre vie</strong>, pas devenir une source de stress de plus. Mon rôle n'est pas de vous pousser jusqu'à la douleur, mais de vous aider à bâtir force, confiance et habitudes durables.",
    ab_p2:"Chaque corps est différent, donc chaque plan aussi. On travaille des mouvements qui vous conviennent, à un rythme qui vous garde motivée, et on célèbre les progrès en chemin.",
    ab_p3:"J'entraîne des gens de tous les niveaux, avec une attention particulière pour <strong>les femmes en périménopause et en ménopause</strong>, une étape où le bon entraînement fait une vraie différence.",
    val_t:"À quoi vous attendre", val_d:"Les trois choses que j'apporte à chaque séance.",
    v1_t:"La patience", v1_d:"On avance à votre rythme. Les progrès durables se bâtissent une bonne séance à la fois.",
    v2_t:"Un plan à vous", v2_d:"Votre programme est écrit pour votre corps, vos objectifs et votre horaire, et il évolue avec vous.",
    v3_t:"Le sourire", v3_d:"S'entraîner peut demander des efforts et rester agréable. Vous repartirez de chaque séance en vous sentant mieux qu'en arrivant.",
    band4_t:"Prête quand vous l'êtes", band4_d:"Envoyez-moi un message et on planifie votre première séance ensemble.",

    ct_l1:"On s'y", ct_l2:"met ?",
    ct_lede:"Parlez-moi un peu de vous. Je lis chaque message et je réponds personnellement, en général d'ici un jour ou deux.",
    f_name:"Votre nom", f_name_ph:"Marie Tremblay", f_email:"Courriel", f_email_ph:"vous@courriel.com",
    f_phone:"Téléphone", f_opt:"(optionnel)",
    f_goals:'Que recherchez-vous ? <span class="hint">(choix multiples)</span>',
    g1:"Entraînement 1:1", g2:"Programme en ligne", g3:"Force et mobilité", g4:"Entraînement ménopause", g5:"Nutrition et habitudes", g6:"Je ne sais pas encore",
    f_when:'Quand préférez-vous vous entraîner ? <span class="hint">(choix multiples)</span>',
    w1:"Le matin", w2:"L'après-midi", w3:"Le soir", w4:"La fin de semaine",
    f_msg:"Vos objectifs", f_msg_ph:"Qu'aimeriez-vous ressentir ou être capable de faire dans 3 mois ?",
    f_send:"Envoyer ma demande", f_ok_t:"Demande envoyée", f_ok_d:"Merci ! Karen vous répondra personnellement très bientôt.",
    d_t:"Vous préférez parler directement ?", d_d:"Appelez, textez ou écrivez. C'est moi qui vous réponds, pas une assistante.",
    d_phone:"Téléphone ou texto", d_email:"Courriel", d_where:"Où",

    foot_about:"Entraînement privé à Montréal pour tous les niveaux et toutes les étapes de la vie. Le sourire en prime.",
    foot_pages:"Pages", foot_contact:"Contact", foot_rights:"Tous droits réservés.", foot_tag:"Le sourire en prime"
  };
  const MSG = {
    en:{sending:"Sending…", required:"Add your name and a valid email so Karen can reach you.",
        fail:'The form couldn\'t send. Email <a href="mailto:cutlerkarenann@gmail.com">cutlerkarenann@gmail.com</a> or call 514-606-1256.',
        langBtn:"FR", langLabel:"Passer en français"},
    fr:{sending:"Envoi…", required:"Ajoutez votre nom et un courriel valide pour que Karen puisse vous joindre.",
        fail:'Le formulaire n\'a pas pu être envoyé. Écrivez à <a href="mailto:cutlerkarenann@gmail.com">cutlerkarenann@gmail.com</a> ou appelez au 514-606-1256.',
        langBtn:"EN", langLabel:"Switch to English"}
  };

  let lang = 'en';
  try { lang = localStorage.getItem('kc_lang') === 'fr' ? 'fr' : 'en'; } catch(e){}

  function applyLang(next){
    lang = next;
    root.lang = next;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      const k = el.dataset.i18n;
      el.innerHTML = next === 'fr' && FR[k] !== undefined ? FR[k] : el.dataset.en;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      if (el.dataset.enPh === undefined) el.dataset.enPh = el.placeholder;
      const k = el.dataset.i18nPh;
      el.placeholder = next === 'fr' && FR[k] !== undefined ? FR[k] : el.dataset.enPh;
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(b => {
      b.textContent = MSG[next].langBtn; b.setAttribute('aria-label', MSG[next].langLabel);
    });
    try { localStorage.setItem('kc_lang', next); } catch(e){}
    root.classList.remove('fr-pending');
  }

  /* ================= boot ================= */
  function init(){
    applyLang(lang);
    document.querySelectorAll('[data-lang-toggle]').forEach(b =>
      b.addEventListener('click', () => applyLang(lang === 'en' ? 'fr' : 'en')));
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

    setupNav();
    setupTransitions();
    setupDrawIcons();
    setupReveal();
    setupScroll();
    setupParallax();
    setupMagnetic();
    setupFaq();
    setupTabs();
    setupForm();

    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-loaded')));
  }

  /* ================= nav ================= */
  function setupNav(){
    const burger = document.querySelector('.burger');
    if (!burger) return;
    const toggle = open => {
      root.classList.toggle('menu-open', open);
      burger.setAttribute('aria-expanded', String(open));
    };
    burger.addEventListener('click', () => toggle(!root.classList.contains('menu-open')));
    addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
    matchMedia('(min-width:1021px)').addEventListener('change', e => e.matches && toggle(false));
  }

  /* ================= page transitions ================= */
  function setupTransitions(){
    const nativeVT = 'onpagereveal' in window && CSS.supports('view-transition-name: a');
    const wipe = document.querySelector('.wipe');

    // arriving via fallback wipe: reveal the page
    try {
      if (sessionStorage.getItem('kc_wipe')) {
        sessionStorage.removeItem('kc_wipe');
        if (wipe && !reduce) wipe.classList.add('leave');
      }
    } catch(e){}

    // prefetch on hover/touch for near-instant loads
    const prefetched = new Set();
    const prefetch = href => {
      if (prefetched.has(href)) return; prefetched.add(href);
      const l = document.createElement('link'); l.rel = 'prefetch'; l.href = href; document.head.appendChild(l);
    };

    document.querySelectorAll('a[href]').forEach(a => {
      const url = new URL(a.getAttribute('href'), location.href);
      const internal = url.origin === location.origin && (url.pathname.endsWith('.html') || url.pathname.endsWith('/'));
      if (!internal || a.target === '_blank' || url.protocol.startsWith('mailto') || url.protocol.startsWith('tel')) return;
      ['pointerenter','touchstart','focus'].forEach(ev => a.addEventListener(ev, () => prefetch(url.href), {passive:true, once:true}));

      if (nativeVT || reduce || !wipe) return;
      a.addEventListener('click', e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        if (url.pathname === location.pathname && url.hash) return;
        e.preventDefault();
        root.classList.remove('menu-open');
        wipe.classList.remove('leave'); void wipe.offsetWidth; wipe.classList.add('cover');
        try { sessionStorage.setItem('kc_wipe','1'); } catch(e){}
        setTimeout(() => { location.href = url.href; }, 240);
      });
    });

    // back/forward cache: never leave the wipe covering the page
    addEventListener('pageshow', e => { if (e.persisted && wipe) wipe.className = 'wipe'; root.classList.remove('menu-open'); });
  }

  /* ================= icons that draw themselves ================= */
  function setupDrawIcons(){
    document.querySelectorAll('svg.draw').forEach(svg => {
      svg.querySelectorAll('path,circle,rect,line,polyline').forEach(p => {
        try { p.style.setProperty('--len', Math.ceil(p.getTotalLength()) + 1); } catch(e){}
      });
    });
  }

  /* ================= scroll reveal ================= */
  function setupReveal(){
    const els = document.querySelectorAll('.reveal, svg.draw');
    if (!('IntersectionObserver' in window) || reduce) { els.forEach(el => el.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    }), {threshold:.15, rootMargin:'0px 0px -8% 0px'});
    els.forEach(el => io.observe(el));
  }

  /* ================= scroll: progress bar, header, steps rail ================= */
  function setupScroll(){
    const bar = document.querySelector('.progress');
    const header = document.querySelector('.site-header');
    const steps = document.querySelector('[data-steps]');
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      if (header) header.classList.toggle('is-scrolled', scrollY > 8);
      if (steps){
        const r = steps.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (innerHeight * .75 - r.top) / (r.height + innerHeight * .2)));
        steps.style.setProperty('--p', p.toFixed(3));
        const items = steps.querySelectorAll('.step');
        items.forEach((s, i) => s.classList.toggle('on', p >= (i / items.length) + .02));
      }
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking){ ticking = true; requestAnimationFrame(update); } }, {passive:true});
    addEventListener('resize', update);
    update();
  }

  /* ================= hero parallax (pointer) ================= */
  function setupParallax(){
    const zone = document.querySelector('[data-parallax]');
    if (!zone || reduce || matchMedia('(pointer: coarse)').matches) return;
    const layers = zone.querySelectorAll('[data-depth]');
    let tx = 0, ty = 0, cx = 0, cy = 0, raf;
    const loop = () => {
      cx += (tx - cx) * .08; cy += (ty - cy) * .08;
      layers.forEach(l => {
        const d = +l.dataset.depth;
        l.style.translate = `${cx * d}px ${cy * d}px`;
      });
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > .001 ? requestAnimationFrame(loop) : null;
    };
    document.querySelector('.hero').addEventListener('pointermove', e => {
      tx = (e.clientX / innerWidth - .5); ty = (e.clientY / innerHeight - .5);
      if (!raf) raf = requestAnimationFrame(loop);
    });
  }

  /* ================= magnetic buttons ================= */
  function setupMagnetic(){
    if (reduce || matchMedia('(pointer: coarse)').matches) return;
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--bx', ((e.clientX - r.left - r.width / 2) * .22).toFixed(1) + 'px');
        btn.style.setProperty('--by', ((e.clientY - r.top - r.height / 2) * .3).toFixed(1) + 'px');
      });
      btn.addEventListener('pointerleave', () => { btn.style.setProperty('--bx','0px'); btn.style.setProperty('--by','0px'); });
    });
  }

  /* ================= FAQ ================= */
  function setupFaq(){
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-q');
      q.addEventListener('click', () => {
        const open = !item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(o => { o.classList.remove('open'); o.querySelector('.faq-q').setAttribute('aria-expanded','false'); });
        item.classList.toggle('open', open); q.setAttribute('aria-expanded', String(open));
      });
    });
  }

  /* ================= menopause tabs ================= */
  function setupTabs(){
    const tabs = [...document.querySelectorAll('.mp-tab')];
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
          const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
          select(n); tabs[n].focus();
        }
      });
    });
    function select(i){
      tabs.forEach((t, j) => {
        t.setAttribute('aria-selected', String(i === j)); t.tabIndex = i === j ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).classList.toggle('active', i === j);
      });
    }
    if (tabs.length) select(0);
  }

  /* ================= lead form → email (FormSubmit) ================= */
  function setupForm(){
    const form = document.getElementById('lead-form');
    if (!form) return;
    const status = form.querySelector('.form-status');
    const btn = form.querySelector('button[type="submit"]');
    const F = n => form.elements[n];
    const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (F('_honey').value) return;
      const name = F('name').value.trim(), email = F('email').value.trim();
      F('name').closest('.field').classList.toggle('invalid', !name);
      F('email').closest('.field').classList.toggle('invalid', !emailOk(email));
      if (!name || !emailOk(email)){
        status.className = 'form-status err'; status.textContent = MSG[lang].required;
        (!name ? F('name') : F('email')).focus();
        return;
      }
      ['interest','availability'].forEach(g => {
        F(g).value = [...form.querySelectorAll(`[data-group="${g}"] input:checked`)].map(i => i.value).join(', ') || '—';
      });
      F('language').value = lang === 'fr' ? 'Français' : 'English';

      btn.disabled = true; status.className = 'form-status'; status.textContent = MSG[lang].sending;
      try {
        const data = new FormData(form);
        data.append('_captcha', 'false');
        const res = await fetch('https://formsubmit.co/ajax/cutlerkarenann@gmail.com', {
          method:'POST', headers:{Accept:'application/json'}, body:data
        });
        if (!res.ok) throw new Error(res.status);
        form.classList.add('sent');
        const ok = form.querySelector('.form-success');
        ok.querySelectorAll('svg.draw').forEach(s => { s.classList.remove('in'); void s.offsetWidth; s.classList.add('in'); });
        ok.focus();
        form.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'center'});
      } catch(err){
        status.className = 'form-status err'; status.innerHTML = MSG[lang].fail;
      } finally { btn.disabled = false; }
    });
    form.querySelectorAll('input').forEach(i => i.addEventListener('input', () => i.closest('.field')?.classList.remove('invalid')));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
