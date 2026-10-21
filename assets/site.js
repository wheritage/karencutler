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

    t_privacy:"Politique de confidentialité — Karen Cutler",
    cta_call:"Appel gratuit", cta_call_long:"Réserver un appel gratuit",
    cred_years:"ans", cred_years_s:"de coaching à Montréal", cred_cert:"Entraîneuse certifiée", cred_meno:"Coaching ménopause",
    cred_lang:"FR · EN", cred_lang_s:"Coaching dans les deux langues",
    sig_k:"Programme vedette", sig_t:"Forte en 12 semaines",
    sig_d:"Un programme en trois phases qui vous mène de votre première séance à soulever avec confiance. Chaque phase s'appuie sur la précédente, et on ajuste en chemin.",
    sig_cta:"Voir le programme complet",
    sig_l1:"Évaluation de départ et bilan à la semaine 12", sig_l2:"séances coachées par semaine", sig_l3:"Exercices à la maison entre les séances", sig_l4:"Habitudes de nutrition et de récupération intégrées",
    ph1_w:"Semaines 1–4", ph1_t:"Fondation", ph1_d:"Apprendre les mouvements clés, trouver votre point de départ et bâtir l'habitude.",
    ph2_w:"Semaines 5–8", ph2_t:"Construction", ph2_d:"Ajouter de la charge et de la variété. La force se fait sentir au quotidien.",
    ph3_w:"Semaines 9–12", ph3_t:"Forte", ph3_d:"Mesurer vos progrès et repartir avec un plan à suivre par vous-même.",
    step1_t:"Envoyez une demande", step1_d:"Répondez à quelques questions sur vos objectifs et votre horaire. Ça prend environ deux minutes.",
    step2_t:"Appel découverte gratuit", step2_d:"Un appel de 20 minutes pour parler de ce que vous voulez, de ce qui vous a freinée et voir si on fait une bonne équipe.",
    rev_title:"Ce qu'en disent les clientes", rev_lede:"Les vrais mots de gens qui s'entraînent avec Karen.",
    rv1:"J'arrivais nerveuse et je repartais de chaque séance le sourire aux lèvres, plus forte que je le croyais.",
    rv2:"Mon mal de dos a disparu et j'aime enfin m'entraîner. Karen adapte chaque séance à mon état du jour.",
    rv3:"En pleine ménopause, je me sentais faible et fatiguée. Six mois plus tard, je soulève plus que jamais et je dors mieux.",
    rv_since:"s'entraîne depuis 20__",
    where_title:"Où on s'entraîne", where_lede:"Choisissez ce qui convient à votre vie. Vous pouvez aussi combiner.",
    wh1_t:"Au studio", wh1_d:"Un espace entièrement équipé à", wh2_t:"Chez vous", wh2_d:"J'apporte l'équipement. Disponible à",
    wh3_t:"En ligne", wh3_d:"Séances en direct par vidéo ou programme sur mesure sur votre téléphone, où que vous soyez.",
    fact_lang:"Français et anglais", fact_reply:"Réponse d'ici 1 à 2 jours",
    ig_title:"Dans les coulisses", ig_lede:"Suivez-moi sur Instagram",
    ps1:"Karen qui coache une cliente", ps2:"Gros plan d'un exercice de force", ps3:"Mobilité ou étirements", ps4:"Karen souriante, en action",
    band_t:"Commencez par un appel gratuit de 20 minutes", band_d:"Sans engagement. Dites-moi où vous en êtes et on verra si s'entraîner ensemble vous convient.",
    pr_title:"Tarifs", pr_lede:"Des prix clairs, sans long contrat. Votre appel découverte est toujours gratuit.",
    pr1_t:"Séance à l'unité", pr1_s:"1:1, en personne ou en ligne", pr1_per:"par séance de 60 minutes", pr1_l1:"Séance entièrement personnalisée", pr1_l2:"Réservez quand ça vous convient",
    pr_pop:"Le plus complet", pr2_t:"Programme 12 semaines", pr2_s:"Le programme vedette", pr2_per:"pour 12 semaines, ou 3 versements mensuels",
    pr2_l1:"Séances coachées chaque semaine", pr2_l2:"Évaluation et bilan des progrès", pr2_l3:"Plan maison et coaching d'habitudes",
    pr3_t:"Coaching en ligne", pr3_s:"Votre programme sur mesure, partout", pr3_per:"par mois", pr3_l1:"Programme sur votre téléphone avec démos vidéo", pr3_l2:"Suivi et ajustements chaque semaine",
    pr_cta:"Commencer par un appel gratuit",
    q6:"Que dois-je apporter à ma première séance ?", a6:"Des vêtements confortables, des espadrilles et une bouteille d'eau. Je m'occupe du reste.",
    q7:"Et si je dois annuler ?", a7:"Annulez ou déplacez au moins 24 heures à l'avance sans frais. Une annulation tardive compte comme une séance.",
    a5:"Envoyez une demande depuis la page contact. Ça prend deux minutes, et je vous réponds personnellement pour planifier votre appel découverte gratuit.",
    chk_t:"Est-ce que ça vous ressemble ?", chk_d:"Cochez ce que vous avez remarqué dernièrement. Il n'y a pas de score, juste un point de départ pour notre discussion.",
    c1:"Sommeil difficile ou interrompu", c2:"Peu d'énergie pendant la journée", c3:"Articulations raides ou douloureuses", c4:"Du poids qui se déplace au ventre",
    c5:"Je me sens plus faible qu'avant", c6:"Brouillard mental", c7:"Bouffées de chaleur qui nuisent", c8:"Moins confiante dans mon corps",
    chk_res:"Vous êtes loin d'être seule. Ces changements sont fréquents, et le bon entraînement peut aider pour plusieurs d'entre eux. Parlons des vôtres.",
    chk_cta:"En parler lors d'un appel gratuit",
    gd_cover:"5 mouvements de force après 40 ans", gd_t:"Guide gratuit : 5 mouvements de force après 40 ans",
    gd_d:"Cinq exercices simples à faire à la maison pour protéger vos os, vos articulations et votre énergie, avec photos et consignes claires.",
    gd_ph:"Votre courriel", gd_btn:"Recevoir le guide",
    st_t:"Mon histoire",
    st_p1:"Comment Karen est-elle arrivée au sport ? Quel moment lui a donné envie de coacher ? A-t-elle vécu ses propres changements, une blessure ou un retour qui influence sa façon d'entraîner aujourd'hui ?",
    st_p2:"Deux ou trois courts paragraphes ici, avec ses mots. Les entraîneurs qui partagent leur histoire gagnent la confiance beaucoup plus vite qu'avec une liste de services.",
    ce_t:"Formation et certifications", ce_org:"organisme, année", ce_meno:"Formation ménopause ou santé des femmes", ce_fa:"Premiers soins et RCR", ce_valid:"valide jusqu'en 20__",
    ga1:"Karen dans son espace d'entraînement", ga2:"Karen qui démontre un mouvement", ga3:"Karen qui célèbre avec une cliente",
    ct_l1:"Votre appel", ct_l2:"gratuit.",
    ct_lede:"Répondez à quelques questions pour que je puisse préparer notre appel. Ça prend environ deux minutes, et je réponds personnellement d'ici 1 à 2 jours.",
    s1_title:"Vos objectifs", s2_title:"Votre profil", s3_title:"Votre entraînement", s4_title:"Vos coordonnées", s5_title:"Vérification",
    s1_h:"Sur quoi voulez-vous travailler ?", s1_p:"Choisissez tout ce qui compte pour vous.",
    go1:"Devenir plus forte", go2:"Bouger sans douleur", go3:"Changer ma composition corporelle", go4:"Avoir plus d'énergie", go5:"M'entraîner pendant la ménopause", go6:"Bâtir une routine durable",
    s2_h:"Dites-moi où vous en êtes", s2_p:"Il n'y a pas de mauvaise réponse. Ça m'aide simplement à planifier votre première séance.",
    s2_q1:"Votre expérience en entraînement", ex1:"Débutante", ex1_s:"Peu ou pas d'entraînement", ex2:"Un peu d'expérience", ex2_s:"Par périodes, ou un retour", ex3:"Je m'entraîne régulièrement", ex3_s:"Prête pour la suite",
    s2_q2:"Étape de vie, si ça s'applique", opt:"(optionnel)", pick:"(choix multiples)",
    st1:"Périménopause", st2:"Ménopause", st3:"Postménopause", st4:"Ne s'applique pas", st5:"Je préfère ne pas répondre",
    s2_q3:"Blessures ou conditions de santé à connaître", s2_ph:"Par exemple : ancienne blessure au genou, douleur au bas du dos…",
    s3_h:"Comment aimeriez-vous vous entraîner ?", s3_p:"On peut toujours ajuster ça ensemble lors de l'appel.",
    s3_q1:"Où", fm1:"Au studio", fm2:"Chez moi", fm3:"En ligne",
    s3_q2:"Quelle option vous intéresse ?", pg1:"Séances à l'unité", pg2:"Programme 12 semaines", pg3:"Coaching en ligne", pg4:"Je ne sais pas encore",
    s3_q3:"Combien de fois par semaine ?", fq1:"Une fois", fq2:"Deux fois", fq3:"3 fois ou plus",
    s3_q4:"Vos meilleurs moments",
    s4_h:"Comment vous joindre ?", s4_p:"Je m'en sers seulement pour vous répondre au sujet de votre entraînement.",
    f_pref:"Meilleure façon de vous joindre", cb1:"Courriel", cb2:"Appel", cb3:"Texto",
    f_msg2:"Autre chose que je devrais savoir ?",
    consent:'J\'accepte que Karen Cutler recueille ces renseignements pour répondre à ma demande et planifier mon entraînement, comme décrit dans la <a href="privacy.html" target="_blank" rel="noopener">politique de confidentialité</a>.',
    s5_h:"Prête à envoyer ?", s5_p:"Vérifiez vos réponses. Vous pouvez modifier chacune d'elles.",
    back:"Retour", next:"Continuer", send:"Envoyer ma demande",
    done_t:"Demande envoyée", done_d:"Merci ! Une copie de vos réponses s'en vient dans votre boîte courriel.",
    done_1:"Karen lit vos réponses et prépare votre appel.", done_2:"Elle vous contacte d'ici 1 à 2 jours pour choisir un moment.", done_3:"Votre appel découverte gratuit de 20 minutes, puis votre première séance.",
    done_cta:"Explorer les programmes",
    foot_privacy:"Politique de confidentialité", foot_disclaimer:"Avis santé",
    pv_l1:"Politique de", pv_l2:"confidentialité.", pv_upd:"Dernière mise à jour :",
    pv_intro:"Cette politique explique comment Karen Cutler recueille, utilise et protège vos renseignements personnels, conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25).",
    pv_h1:"Qui est responsable", pv_p1:"Karen Cutler est responsable de la protection de vos renseignements personnels. Pour toute question ou demande, écrivez à cutlerkarenann@gmail.com ou appelez au 514-606-1256.",
    pv_h2:"Ce que nous recueillons", pv_p2:"Lorsque vous envoyez une demande par ce site : votre nom, votre courriel, votre numéro de téléphone si vous le donnez, vos objectifs et préférences d'entraînement, et toute information de santé que vous choisissez de partager, comme une blessure ou votre étape de vie.",
    pv_h3:"Pourquoi nous les recueillons", pv_p3:"Uniquement pour répondre à votre demande, planifier votre entraînement de façon sécuritaire et rester en contact au sujet de vos séances. Vos renseignements ne sont jamais vendus ni partagés à des fins de marketing.",
    pv_h4:"Où ils sont conservés", pv_p4:"Les demandes sont transmises au courriel de Karen par le service FormSubmit et peuvent être conservées dans une feuille Google privée. Ces fournisseurs peuvent stocker des données à l'extérieur du Québec.",
    pv_h5:"Combien de temps nous les gardons", pv_p5:"Les demandes qui ne mènent pas à un entraînement sont supprimées après 12 mois. Les renseignements des clientes sont conservés pendant l'entraînement, puis supprimés sur demande.",
    pv_h6:"Vos droits", pv_p6:"Vous pouvez demander à consulter, corriger ou supprimer vos renseignements, ou retirer votre consentement, en tout temps en contactant Karen.",
    pv_h7:"Avis santé", pv_p7:"L'information sur ce site est générale et ne remplace pas un avis médical. Consultez votre médecin avant de commencer un nouveau programme d'exercice, surtout si vous avez une condition de santé, une blessure ou suivez un traitement lié à la ménopause.",
    foot_about:"Entraînement privé à Montréal pour tous les niveaux et toutes les étapes de la vie. Le sourire en prime.",
    foot_pages:"Pages", foot_contact:"Contact", foot_rights:"Tous droits réservés.", foot_tag:"Le sourire en prime"
  };
  const MSG = {
    en:{sending:"Sending…", required:"Add your name and a valid email so Karen can reach you.",
        fail:'The form couldn\'t send. Email <a href="mailto:cutlerkarenann@gmail.com">cutlerkarenann@gmail.com</a> or call 514-606-1256.',
        langBtn:"FR", langLabel:"Passer en français", step:(a,b)=>`Step ${a} of ${b}`, edit:"Edit",
        needGoal:"Pick at least one goal.", needExp:"Choose your experience level.", needFormat:"Choose at least one place to train.",
        needName:"Add your name.", needEmail:"Add a valid email.", needConsent:"Please accept the privacy terms so Karen can use your answers.",
        sum:{goals:"Goals",experience:"Experience",stage:"Life stage",health:"Health notes",noticed:"Noticed lately",format:"Where",program:"Option",frequency:"Per week",times:"Best times",name:"Name",email:"Email",phone:"Phone",contact_by:"Reach me by",message:"Message"},
        none:"—", guideOk:"Thanks! Karen will email you the guide.", guideErr:"Add a valid email.",
        auto:"Thank you for your request! I read every message personally and will get back to you within 1–2 days to set up your free intro call. — Karen Cutler, 514-606-1256"},
    fr:{sending:"Envoi…", required:"Ajoutez votre nom et un courriel valide pour que Karen puisse vous joindre.",
        fail:'Le formulaire n\'a pas pu être envoyé. Écrivez à <a href="mailto:cutlerkarenann@gmail.com">cutlerkarenann@gmail.com</a> ou appelez au 514-606-1256.',
        langBtn:"EN", langLabel:"Switch to English", step:(a,b)=>`Étape ${a} de ${b}`, edit:"Modifier",
        needGoal:"Choisissez au moins un objectif.", needExp:"Choisissez votre niveau d'expérience.", needFormat:"Choisissez au moins un endroit où vous entraîner.",
        needName:"Ajoutez votre nom.", needEmail:"Ajoutez un courriel valide.", needConsent:"Veuillez accepter les conditions de confidentialité pour que Karen puisse utiliser vos réponses.",
        sum:{goals:"Objectifs",experience:"Expérience",stage:"Étape de vie",health:"Santé",noticed:"Remarqué récemment",format:"Où",program:"Option",frequency:"Par semaine",times:"Moments",name:"Nom",email:"Courriel",phone:"Téléphone",contact_by:"Me joindre par",message:"Message"},
        none:"—", guideOk:"Merci ! Karen vous enverra le guide par courriel.", guideErr:"Ajoutez un courriel valide.",
        auto:"Merci pour votre demande ! Je lis chaque message personnellement et je vous réponds d'ici 1 à 2 jours pour planifier votre appel découverte gratuit. — Karen Cutler, 514-606-1256"}
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
    document.dispatchEvent(new CustomEvent('kc:lang'));
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
    setupConcept();
    setupChecklist();
    setupGuide();
    setupWizard();

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


  /* ================= delivery config ================= */
  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/cutlerkarenann@gmail.com';
  // Optional: paste the Google Apps Script web-app URL here to also log every request in a Google Sheet.
  const SHEET_URL = '';
  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  /* ================= concept notes toggle ================= */
  function setupConcept(){
    try { if (localStorage.getItem('kc_clean') === '1') root.classList.add('clean'); } catch(e){}
    document.querySelectorAll('[data-clean]').forEach(b => b.addEventListener('click', () => {
      const on = root.classList.toggle('clean');
      try { localStorage.setItem('kc_clean', on ? '1' : '0'); } catch(e){}
    }));
  }

  /* ================= "is this you?" checklist ================= */
  function setupChecklist(){
    const box = document.querySelector('[data-checklist]');
    if (!box) return;
    const res = document.querySelector('.check-result'), count = res.querySelector('[data-count]'), cta = res.querySelector('[data-check-cta]');
    box.addEventListener('change', () => {
      const vals = [...box.querySelectorAll('input:checked')].map(i => i.value);
      res.classList.toggle('show', vals.length > 0);
      count.textContent = vals.length;
      cta.href = 'contact.html?noticed=' + encodeURIComponent(vals.join(','));
    });
  }

  /* ================= free guide form ================= */
  function setupGuide(){
    const f = document.querySelector('[data-guide]');
    if (!f) return;
    const msg = f.parentElement.querySelector('.guide-msg');
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const email = f.email.value.trim();
      if (!emailOk(email)){ msg.className = 'guide-msg form-status err'; msg.textContent = MSG[lang].guideErr; return; }
      const btn = f.querySelector('button'); btn.disabled = true;
      try {
        const d = new FormData();
        d.append('email', email); d.append('Request', 'Free guide: 5 strength moves for midlife');
        d.append('_subject', 'Free guide request from your website'); d.append('_captcha','false'); d.append('_template','table');
        await fetch(FORM_ENDPOINT, {method:'POST', headers:{Accept:'application/json'}, body:d});
        msg.className = 'guide-msg form-status ok'; msg.textContent = MSG[lang].guideOk; f.reset();
      } catch(err){ msg.className = 'guide-msg form-status err'; msg.innerHTML = MSG[lang].fail; }
      finally { btn.disabled = false; }
    });
  }

  /* ================= multi-step intake ================= */
  function setupWizard(){
    const form = document.getElementById('intake');
    if (!form) return;
    const steps = [...form.querySelectorAll('.wiz-step')];
    const bars = [...form.querySelectorAll('.wiz-bar i')];
    const title = form.querySelector('[data-step-title]'), countEl = form.querySelector('[data-step-count]');
    const err = form.querySelector('.wiz-err');
    const btnBack = form.querySelector('[data-back]'), btnNext = form.querySelector('[data-next]'), btnSend = form.querySelector('[data-send]');
    const F = n => form.elements[n];
    const DRAFT = 'kc_intake';
    let cur = 0;

    const checked = n => [...form.querySelectorAll(`input[name="${n}"]:checked`)];
    const labelOf = i => i.closest('label').querySelector('span [data-i18n], span[data-i18n]')?.textContent.trim() || i.value;

    // prefill from URL (pricing cards, menopause checklist)
    const qs = new URLSearchParams(location.search);
    const progMap = {single:'Single sessions','12week':'12-week program',online:'Online coaching'};
    if (progMap[qs.get('program')]) { const r = form.querySelector(`input[name="program"][value="${progMap[qs.get('program')]}"]`); if (r) r.checked = true; }
    if (qs.get('noticed')) {
      F('noticed').value = qs.get('noticed');
      const g = form.querySelector('input[name="goals"][value="Train through menopause"]'); if (g) g.checked = true;
    }

    // restore draft
    try {
      const d = JSON.parse(sessionStorage.getItem(DRAFT) || 'null');
      if (d) Object.entries(d).forEach(([n, v]) => {
        const els = form.querySelectorAll(`[name="${n}"]`);
        els.forEach(el => {
          if (el.type === 'checkbox' || el.type === 'radio') el.checked = [].concat(v).includes(el.value);
          else if (el.type !== 'hidden' || !el.value) el.value = v;
        });
      });
    } catch(e){}
    const save = () => {
      const o = {};
      [...form.elements].forEach(el => {
        if (!el.name || el.name.startsWith('_')) return;
        if (el.type === 'checkbox' || el.type === 'radio'){ if (el.checked) o[el.name] = el.type === 'radio' ? el.value : [...(o[el.name] || []), el.value]; }
        else o[el.name] = el.value;
      });
      try { sessionStorage.setItem(DRAFT, JSON.stringify(o)); } catch(e){}
    };
    form.addEventListener('input', () => { save(); err.textContent = ''; });
    form.addEventListener('change', save);

    function render(dir){
      steps.forEach((s, i) => { s.classList.toggle('active', i === cur); s.classList.toggle('back', dir < 0); });
      bars.forEach((b, i) => b.classList.toggle('done', i <= cur));
      const key = steps[cur].dataset.title;
      title.textContent = lang === 'fr' && FR[key] ? FR[key] : (document.querySelector(`legend[data-i18n="${key}"]`)?.dataset.en || {s1_title:'Your goals',s2_title:'About you',s3_title:'Your training',s4_title:'Your details',s5_title:'Review'}[key]);
      countEl.textContent = MSG[lang].step(cur + 1, steps.length);
      btnBack.hidden = cur === 0;
      const last = cur === steps.length - 1;
      btnNext.hidden = last; btnSend.hidden = !last;
      err.textContent = '';
      if (last) buildSummary();
    }
    document.addEventListener('kc:lang', () => render(0));

    function validate(i){
      const m = MSG[lang];
      if (i === 0 && !checked('goals').length) return m.needGoal;
      if (i === 1 && !checked('experience').length) return m.needExp;
      if (i === 2 && !checked('format').length) return m.needFormat;
      if (i === 3){
        F('name').closest('.field').classList.toggle('invalid', !F('name').value.trim());
        F('email').closest('.field').classList.toggle('invalid', !emailOk(F('email').value.trim()));
        if (!F('name').value.trim()) { F('name').focus(); return m.needName; }
        if (!emailOk(F('email').value.trim())) { F('email').focus(); return m.needEmail; }
        if (!F('consent').checked) return m.needConsent;
      }
      return '';
    }

    function go(to){
      const dir = to > cur ? 1 : -1;
      if (dir > 0) for (let i = cur; i < to; i++){ const e = validate(i); if (e){ cur = i; render(0); err.textContent = e; return; } }
      cur = to; render(dir);
      const top = form.getBoundingClientRect().top + scrollY - 100;
      if (Math.abs(scrollY - top) > 200) scrollTo({top, behavior: reduce ? 'auto' : 'smooth'});
      steps[cur].querySelector('h2').setAttribute('tabindex','-1'); steps[cur].querySelector('h2').focus({preventScroll:true});
    }
    btnNext.addEventListener('click', () => go(cur + 1));
    btnBack.addEventListener('click', () => go(cur - 1));
    form.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type !== 'checkbox' && e.target.type !== 'radio' && cur < steps.length - 1){ e.preventDefault(); go(cur + 1); }
    });

    const NOTICED = {
      en:{sleep:'Poor sleep',energy:'Low energy',joints:'Achy joints',weight:'Weight to the middle',strength:'Feeling weaker',fog:'Brain fog',hot:'Hot flashes',confidence:'Less confident'},
      fr:{sleep:'Sommeil difficile',energy:'Peu d\'énergie',joints:'Articulations raides',weight:'Poids au ventre',strength:'Plus faible',fog:'Brouillard mental',hot:'Bouffées de chaleur',confidence:'Moins confiante'}
    };
    const noticedText = l => F('noticed').value.split(',').filter(Boolean).map(k => NOTICED[l][k] || k).join(', ');
    const FIELDS = [['goals',0],['experience',1],['stage',1],['health',1],['noticed',1],['format',2],['program',2],['frequency',2],['times',2],['name',3],['email',3],['phone',3],['contact_by',3],['message',3]];
    function valueOf(n, human){
      const el = F(n);
      if (el && (el.type === 'text' || el.type === 'email' || el.type === 'tel' || el.tagName === 'TEXTAREA' || el.type === 'hidden')) return el.value.trim();
      const c = checked(n); return c.map(i => human ? labelOf(i) : i.value).join(', ');
    }
    function buildSummary(){
      const dl = form.querySelector('[data-summary]'); dl.innerHTML = '';
      FIELDS.forEach(([n, step]) => {
        let v = valueOf(n, true);
        if (n === 'noticed') v = noticedText(lang);
        if (!v && ['stage','health','noticed','phone','message','times'].includes(n)) return;
        const row = document.createElement('div'); row.className = 'sum-row';
        row.innerHTML = `<dt></dt><dd></dd><button type="button"></button>`;
        row.querySelector('dt').textContent = MSG[lang].sum[n];
        row.querySelector('dd').textContent = v || MSG[lang].none;
        const b = row.querySelector('button'); b.textContent = MSG[lang].edit; b.addEventListener('click', () => go(step));
        dl.appendChild(row);
      });
    }

    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (cur !== steps.length - 1) return go(cur + 1);
      if (F('_honey').value) return;
      for (let i = 0; i < steps.length - 1; i++){ const m = validate(i); if (m){ cur = i; render(0); err.textContent = m; return; } }

      const name = F('name').value.trim();
      const payload = {
        'Name': name, 'Email': F('email').value.trim(), 'Phone': valueOf('phone') || '—', 'Reach me by': valueOf('contact_by'),
        'Goals': valueOf('goals'), 'Experience': valueOf('experience'), 'Life stage': valueOf('stage') || '—',
        'Health notes': valueOf('health') || '—', 'Noticed lately': noticedText('en') || '—',
        'Where': valueOf('format'), 'Option': valueOf('program'), 'Per week': valueOf('frequency'), 'Best times': valueOf('times') || '—',
        'Message': valueOf('message') || '—', 'Language': lang === 'fr' ? 'Français' : 'English', 'Privacy consent': 'Yes', 'Sent from': location.href.split('?')[0]
      };
      btnSend.disabled = true; err.style.color = 'var(--muted)'; err.textContent = MSG[lang].sending;
      try {
        const d = new FormData();
        Object.entries(payload).forEach(([k, v]) => d.append(k, v));
        d.append('email', payload.Email);
        d.append('_subject', `New intro call request: ${name}`);
        d.append('_template', 'table'); d.append('_captcha', 'false');
        d.append('_autoresponse', MSG[lang].auto);
        const res = await fetch(FORM_ENDPOINT, {method:'POST', headers:{Accept:'application/json'}, body:d});
        if (!res.ok) throw new Error(res.status);
        if (SHEET_URL) fetch(SHEET_URL, {method:'POST', mode:'no-cors', headers:{'Content-Type':'text/plain'}, body:JSON.stringify({...payload, date:new Date().toISOString()})}).catch(() => {});
        try { sessionStorage.removeItem(DRAFT); } catch(e){}
        form.classList.add('sent');
        const done = form.querySelector('.wiz-done');
        done.querySelectorAll('svg.draw').forEach(s => { s.classList.remove('in'); void s.offsetWidth; s.classList.add('in'); });
        done.focus();
        form.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'start'});
      } catch(ex){
        err.style.color = ''; err.innerHTML = MSG[lang].fail;
      } finally { btnSend.disabled = false; }
    });

    render(0);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
