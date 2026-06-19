/* ============================================================
   DARB TYRES TRADING L.L.C — site script
   ============================================================
   ▼▼▼  EDIT YOUR BUSINESS DETAILS HERE  ▼▼▼
   These values fill the phone/email/address everywhere on the
   site automatically. Change them once, here.
   ============================================================ */
const CONFIG = {
  company:  "DARB TYRES TRADING L.L.C",
  reg:      "201803814",
  est:      "25 July 2021",
  address:  "Office No. 640, Nakheel 2, Ajman, UAE",
  phone:    "+971 52 466 6601",          // shown on the site
  email:    "darbtyrestrading@gmail.com",
  whatsapp: "971524666601",              // digits only, no + or spaces
  web3formsKey: ""                       // optional: paste a free key from web3forms.com to receive form emails
};

/* ===================== Translations ===================== */
const I18N = {
  en: {
    brand_name:"Darb Tyres", brand_sub:"Trading L.L.C",
    nav_home:"Home", nav_products:"Products", nav_about:"About", nav_contact:"Contact",
    nav_distributor:"Become a Distributor", nav_login:"B2B Login", nav_quote:"Request a Quote",

    hero_tag:"Wholesale Tyre Supplier · Ajman, UAE",
    hero_title:"Quality tyres, supplied at scale",
    hero_lead:"Darb Tyres Trading is your trusted wholesale partner — supplying car, 4×4, van, truck and bus tyres to dealers, workshops and fleets across the UAE, the GCC and African markets.",
    hero_cta1:"Browse Products", hero_cta2:"Request a Quote",

    rs1:"Established in Ajman", rs2:"Vehicle categories", rs3:"Genuine branded tyres", rs4:"Quote response",

    pr_kicker:"Our Products", pr_title:"Tyres for every vehicle",
    pr_sub:"A complete range across consumer and commercial categories — sourced for the region's roads and your business needs.",
    hc1_t:"Car & 4×4", hc1_p:"All-season, performance and SUV tyres for daily driving and off-road.",
    hc2_t:"Van & Light Truck", hc2_p:"Reinforced tyres built to carry heavy loads while keeping running costs low.",
    hc3_t:"Truck & Bus", hc3_p:"Maximum mileage and safety for fleets and long-haul transport.",
    hc4_t:"OTR & Earthmover", hc4_p:"Loader, grader and haul tyres for construction and earthmoving.",
    hc5_t:"Mining", hc5_p:"Heavy-duty tyres engineered for haul trucks and severe mining duty.",
    hc6_t:"Agricultural", hc6_p:"Tractor, flotation and implement tyres that protect soil and grip.",
    hc_more:"View range →",

    why_kicker:"Why Darb", why_title:"Built on trust and reliability",
    why_sub:"We treat every order as a partnership. Here's what sets us apart.",
    w1_t:"Genuine Quality", w1_p:"Authentic tyres sourced from established, reputable manufacturers.",
    w2_t:"Competitive Wholesale Pricing", w2_p:"Volume pricing that protects your margins.",
    w3_t:"Consistent Supply", w3_p:"Reliable stock so you never run short on fast-moving sizes.",
    w4_t:"Dedicated Account Support", w4_p:"A direct line for orders, quotes and follow-up.",

    br_kicker:"Brands We Carry", br_title:"Leading tyre brands",
    br_sub:"We stock a broad portfolio of trusted international brands. Contact us for current availability and pricing.",
    br_note:"Availability varies — contact us to confirm brands and sizes in stock.",

    cta_title:"Ready to place a wholesale order?",
    cta_sub:"Tell us the sizes and quantities you need — we'll come back with a competitive quote within one business day.",
    cta_btn:"Get in Touch",

    cf_name:"Full Name", cf_company:"Company", cf_email:"Email", cf_phone:"Phone",
    cf_cat:"Tyre Category", cf_msg:"Sizes / quantities / message", cf_send:"Send Request",

    foot_tag:"Your trusted wholesale tyre supplier for car, 4×4, van, truck and bus — based in Ajman, UAE.",
    foot_products:"Our Tyres", foot_company:"Company", foot_reach:"Contact", foot_rights:"All rights reserved.",
    fp_car:"Car & 4×4 tyres", fp_van:"Van tyres", fp_truck:"Truck tyres", fp_bus:"Bus tyres",
    ci_hours:"Sat–Thu: 8:00 AM – 6:00 PM",

    /* products */
    pp_title:"Our Tyre Range",
    pp_lead:"Browse by category. Sizes and brands vary by stock — contact us for current availability and a wholesale quote.",
    cat_all:"All", cat_passenger:"Car & 4×4", cat_van:"Van", cat_truck:"Truck", cat_bus:"Bus",
    cat_otr:"OTR", cat_mining:"Mining", cat_agri:"Agricultural",
    pc1_t:"Passenger All-Season", pc1_p:"Balanced grip, comfort and long tread life for everyday cars.",
    pc2_t:"UHP & Performance", pc2_p:"High-speed stability and dry/wet grip for sport sedans and coupes.",
    pc3_t:"SUV & 4×4 All-Terrain", pc3_p:"Durable, reinforced tyres for on- and off-road driving.",
    pc4_t:"Van & Light Truck", pc4_p:"Reinforced casings for heavy loads and high mileage.",
    pc5_t:"Truck Long-Haul (TBR)", pc5_p:"Fuel-efficient steer and drive tyres for highway fleets.",
    pc6_t:"Bus & Urban", pc6_p:"Stop-start durability and high load capacity for city routes.",
    p_quote:"Request Quote →",
    ho_kicker:"Ordering", ho_title:"How to order",
    st1_t:"Send your list", st1_p:"Share tyre sizes, brands and quantities by phone, email or WhatsApp.",
    st2_t:"Get a quote", st2_p:"We confirm availability and send competitive wholesale pricing within 24 hours.",
    st3_t:"We supply", st3_p:"Approve the order and we arrange fast delivery across the UAE and export.",
    pp_help_t:"Can't find the size you need?",
    pp_help_p:"Send us the tyre size, brand and quantity — our team will confirm availability and pricing.",

    /* about */
    ab_title:"About Darb Tyres Trading",
    ab_lead:"A UAE-based wholesale tyre supplier delivering genuine products and dependable service to dealers, workshops and fleets.",
    ab_story_kicker:"Our Story", ab_story_title:"A regional tyre trading partner",
    ab_story_p1:"Established in Ajman in 2021, Darb Tyres Trading L.L.C supplies a complete range of car, 4×4, van, truck and bus tyres to the UAE and surrounding markets.",
    ab_story_p2:"We focus on what matters to our customers: genuine products, reliable stock, competitive wholesale pricing and a direct line of support for every order.",
    ab_facts_kicker:"Company Details", ab_facts_title:"Registered & licensed",
    f_name:"Company", f_reg:"Commercial Register", f_est:"Established", f_loc:"Location", f_phone:"Phone", f_email:"Email",
    ab_values_kicker:"What We Stand For", ab_values_title:"Our commitments",
    vc1_t:"Authenticity", vc1_p:"Only genuine tyres from reputable manufacturers — never compromised.",
    vc2_t:"Reliability", vc2_p:"Consistent supply and clear lead times you can plan your business around.",
    vc3_t:"Partnership", vc3_p:"We grow when our customers grow — fair pricing and responsive support.",
    svc_kicker:"What We Do", svc_title:"Our services",
    s1_t:"Wholesale Supply", s1_p:"Bulk tyre supply to dealers, resellers and workshops at trade pricing.",
    s2_t:"Fleet Supply", s2_p:"Programmes for transport, logistics and bus fleets with consistent stock.",
    s3_t:"Brand Sourcing", s3_p:"We source specific brands and hard-to-find sizes on request.",
    s4_t:"Delivery & Export", s4_p:"Fast local delivery and container export to GCC and African markets.",
    mk_kicker:"Coverage", mk_title:"Markets we serve",
    m1_t:"United Arab Emirates", m1_p:"Local wholesale and delivery across all emirates from our Ajman base.",
    m2_t:"GCC", m2_p:"Supply to Gulf markets through trusted logistics partners.",
    m3_t:"Africa", m3_p:"Container export programmes for African distributors and traders.",

    /* contact */
    ct_title:"Contact Us",
    ct_lead:"Reach out for wholesale orders, quotes or product availability. We respond within one business day.",
    cc_addr_t:"Visit Us", cc_phone_t:"Call / WhatsApp", cc_email_t:"Email Us", cc_hours_t:"Working Hours",
    cc_hours_p:"Saturday – Thursday: 8:00 AM – 6:00 PM · Friday: Closed",
    wa_btn:"Chat on WhatsApp",
    ct_form_title:"Request a Quote",
    ct_note:"This is a demo form — submissions are not yet connected to a mailbox.",

    /* distributor */
    dist_title:"Become a Distributor",
    dist_lead:"Partner with Darb Tyres Trading for wholesale pricing, reliable stock and priority support — including access to our online B2B ordering portal.",
    dist_ben_kicker:"Why Partner", dist_ben_title:"Distributor benefits",
    db1_t:"Wholesale Pricing", db1_p:"Trade-tier pricing that protects your margins.",
    db2_t:"Priority Stock", db2_p:"First access to fast-moving sizes and new arrivals.",
    db3_t:"B2B Portal Access", db3_p:"Place and track orders online, around the clock.",
    db4_t:"Dedicated Support", db4_p:"A direct account manager for every partner.",
    dist_form_title:"Distributor Application",
    dist_note:"Approved applicants receive B2B portal credentials by email within 2 business days.",
    dist_have:"Already a distributor?", dist_login_link:"Sign in to the B2B portal →",
    df_company:"Company Name", df_contact:"Contact Person", df_market:"Market / Country",
    df_email:"Work Email", df_phone:"Phone", df_volume:"Estimated Monthly Volume", df_send:"Submit Application",

    /* login */
    login_title:"B2B Portal Login", login_sub:"Sign in to place wholesale orders and track your account.",
    login_demo:"Demo access — Username: darb · Password: demo123",
    lf_user:"Username", lf_pass:"Password", lf_remember:"Remember me", lf_signin:"Sign In",
    login_forgot:"Forgot password?", login_new:"New customer?", login_apply:"Apply to become a distributor →",

    /* portal */
    pt_welcome:"Welcome back", pt_logout:"Log out",
    pt_kpi1:"Open Orders", pt_kpi2:"Spend This Month", pt_kpi3:"Credit Terms", pt_kpi4:"Account Status",
    pt_active:"Active", pt_price_title:"Wholesale Price List",
    pt_price_sub:"Indicative trade pricing — your contracted rates apply at checkout.",
    pt_col_sku:"SKU", pt_col_desc:"Description", pt_col_size:"Size", pt_col_stock:"Stock", pt_col_price:"Trade Price",
    pt_instock:"In stock", pt_lowstock:"Low", pt_order:"Order",
    pt_demo_note:"This is a demo portal — data is illustrative.", pt_recent:"Recent Orders"
  },
  ar: {
    brand_name:"درب للإطارات", brand_sub:"للتجارة ش.ذ.م.م",
    nav_home:"الرئيسية", nav_products:"المنتجات", nav_about:"من نحن", nav_contact:"تواصل",
    nav_distributor:"كن موزّعاً", nav_login:"دخول الشركات", nav_quote:"اطلب عرض سعر",

    hero_tag:"مورد إطارات بالجملة · عجمان، الإمارات",
    hero_title:"إطارات عالية الجودة بكميات كبيرة",
    hero_lead:"درب لتجارة الإطارات شريكك الموثوق بالجملة — نوفّر إطارات السيارات والدفع الرباعي والفان والشاحنات والحافلات للموزعين والورش والأساطيل في الإمارات ودول الخليج والأسواق الأفريقية.",
    hero_cta1:"تصفّح المنتجات", hero_cta2:"اطلب عرض سعر",

    rs1:"تأسست في عجمان", rs2:"فئات المركبات", rs3:"إطارات أصلية", rs4:"الرد على العروض",

    pr_kicker:"منتجاتنا", pr_title:"إطارات لكل مركبة",
    pr_sub:"تشكيلة كاملة للفئات الاستهلاكية والتجارية — مختارة لطرق المنطقة واحتياجات عملك.",
    hc1_t:"سيارات ودفع رباعي", hc1_p:"إطارات لجميع الفصول وعالية الأداء والدفع الرباعي للقيادة اليومية والطرق الوعرة.",
    hc2_t:"فان وشاحنات خفيفة", hc2_p:"إطارات معزّزة مصممة لحمل الأوزان الثقيلة مع خفض تكاليف التشغيل.",
    hc3_t:"شاحنات وحافلات", hc3_p:"أقصى كيلومترات وأمان للأساطيل والنقل لمسافات طويلة.",
    hc4_t:"إطارات الطرق الوعرة", hc4_p:"إطارات اللوادر والجريدر والنقل للبناء وأعمال الحفر.",
    hc5_t:"التعدين", hc5_p:"إطارات شديدة التحمّل مصممة لشاحنات النقل والعمل التعديني القاسي.",
    hc6_t:"زراعية", hc6_p:"إطارات الجرارات والعائمة والمعدات التي تحمي التربة وتوفّر التماسك.",
    hc_more:"عرض التشكيلة ←",

    why_kicker:"لماذا درب", why_title:"مبنية على الثقة والموثوقية",
    why_sub:"نتعامل مع كل طلب كشراكة. إليك ما يميّزنا.",
    w1_t:"جودة أصلية", w1_p:"إطارات أصلية من مصنّعين معروفين وذوي سمعة راسخة.",
    w2_t:"أسعار جملة تنافسية", w2_p:"أسعار للكميات تحمي هوامش ربحك.",
    w3_t:"إمداد مستمر", w3_p:"مخزون موثوق حتى لا تنفد لديك المقاسات سريعة الحركة.",
    w4_t:"دعم مخصص للحسابات", w4_p:"خط مباشر للطلبات وعروض الأسعار والمتابعة.",

    br_kicker:"العلامات التي نوفّرها", br_title:"أبرز علامات الإطارات",
    br_sub:"نوفّر مجموعة واسعة من العلامات العالمية الموثوقة. تواصل معنا لمعرفة التوفّر والأسعار.",
    br_note:"التوفّر يختلف — تواصل معنا لتأكيد العلامات والمقاسات المتوفرة.",

    cta_title:"جاهز لطلب بالجملة؟",
    cta_sub:"أخبرنا بالمقاسات والكميات التي تحتاجها — وسنعود إليك بعرض سعر تنافسي خلال يوم عمل واحد.",
    cta_btn:"تواصل معنا",

    cf_name:"الاسم الكامل", cf_company:"الشركة", cf_email:"البريد الإلكتروني", cf_phone:"الهاتف",
    cf_cat:"فئة الإطار", cf_msg:"المقاسات / الكميات / الرسالة", cf_send:"إرسال الطلب",

    foot_tag:"مورّدك الموثوق للإطارات بالجملة للسيارات والدفع الرباعي والفان والشاحنات والحافلات — في عجمان، الإمارات.",
    foot_products:"إطاراتنا", foot_company:"الشركة", foot_reach:"تواصل", foot_rights:"جميع الحقوق محفوظة.",
    fp_car:"إطارات السيارات والدفع الرباعي", fp_van:"إطارات الفان", fp_truck:"إطارات الشاحنات", fp_bus:"إطارات الحافلات",
    ci_hours:"السبت–الخميس: 8:00 ص – 6:00 م",

    pp_title:"تشكيلة إطاراتنا",
    pp_lead:"تصفّح حسب الفئة. تختلف المقاسات والعلامات حسب المخزون — تواصل معنا لمعرفة التوفّر وعرض سعر بالجملة.",
    cat_all:"الكل", cat_passenger:"سيارات ودفع رباعي", cat_van:"فان", cat_truck:"شاحنات", cat_bus:"حافلات",
    cat_otr:"طرق وعرة", cat_mining:"تعدين", cat_agri:"زراعية",
    pc1_t:"إطارات ركاب لجميع الفصول", pc1_p:"تماسك متوازن وراحة وعمر تشغيل طويل للسيارات اليومية.",
    pc2_t:"عالية الأداء UHP", pc2_p:"ثبات في السرعات العالية وتماسك على الجاف والمبلل للسيارات الرياضية.",
    pc3_t:"دفع رباعي لجميع التضاريس", pc3_p:"إطارات متينة ومعزّزة للقيادة على الطرق وخارجها.",
    pc4_t:"فان وشاحنات خفيفة", pc4_p:"هياكل معزّزة للأوزان الثقيلة والكيلومترات العالية.",
    pc5_t:"شاحنات لمسافات طويلة (TBR)", pc5_p:"إطارات توجيه ودفع موفّرة للوقود لأساطيل الطرق السريعة.",
    pc6_t:"حافلات ونقل حضري", pc6_p:"متانة للتوقف والانطلاق المتكرر وقدرة تحميل عالية للمسارات المدينية.",
    p_quote:"اطلب عرض سعر ←",
    ho_kicker:"الطلب", ho_title:"كيفية الطلب",
    st1_t:"أرسل قائمتك", st1_p:"شارك مقاسات الإطارات والعلامات والكميات عبر الهاتف أو البريد أو واتساب.",
    st2_t:"احصل على عرض سعر", st2_p:"نؤكد التوفّر ونرسل أسعار جملة تنافسية خلال 24 ساعة.",
    st3_t:"نقوم بالتوريد", st3_p:"اعتمد الطلب وننسّق توصيلاً سريعاً في الإمارات والتصدير.",
    pp_help_t:"لا تجد المقاس الذي تحتاجه؟",
    pp_help_p:"أرسل لنا مقاس الإطار والعلامة والكمية — وسيؤكد فريقنا التوفّر والأسعار.",

    ab_title:"عن درب لتجارة الإطارات",
    ab_lead:"مورّد إطارات بالجملة مقره الإمارات، يقدّم منتجات أصلية وخدمة موثوقة للموزعين والورش والأساطيل.",
    ab_story_kicker:"قصتنا", ab_story_title:"شريك إقليمي في تجارة الإطارات",
    ab_story_p1:"تأسست درب لتجارة الإطارات ش.ذ.م.م في عجمان عام 2021، وتوفّر تشكيلة كاملة من إطارات السيارات والدفع الرباعي والفان والشاحنات والحافلات للإمارات والأسواق المجاورة.",
    ab_story_p2:"نركّز على ما يهم عملاءنا: منتجات أصلية، مخزون موثوق، أسعار جملة تنافسية، وخط دعم مباشر لكل طلب.",
    ab_facts_kicker:"بيانات الشركة", ab_facts_title:"مسجّلة ومرخّصة",
    f_name:"الشركة", f_reg:"السجل التجاري", f_est:"التأسيس", f_loc:"الموقع", f_phone:"الهاتف", f_email:"البريد الإلكتروني",
    ab_values_kicker:"ما نؤمن به", ab_values_title:"التزاماتنا",
    vc1_t:"الأصالة", vc1_p:"إطارات أصلية فقط من مصنّعين موثوقين — دون أي تنازل.",
    vc2_t:"الموثوقية", vc2_p:"إمداد مستمر ومواعيد تسليم واضحة تخطّط أعمالك حولها.",
    vc3_t:"الشراكة", vc3_p:"ننمو حين ينمو عملاؤنا — أسعار عادلة ودعم سريع.",
    svc_kicker:"ماذا نقدّم", svc_title:"خدماتنا",
    s1_t:"التوريد بالجملة", s1_p:"توريد إطارات بكميات للموزعين والتجار والورش بأسعار التجارة.",
    s2_t:"توريد الأساطيل", s2_p:"برامج لأساطيل النقل واللوجستيات والحافلات بمخزون ثابت.",
    s3_t:"توفير العلامات", s3_p:"نوفّر علامات محددة ومقاسات يصعب إيجادها عند الطلب.",
    s4_t:"التوصيل والتصدير", s4_p:"توصيل محلي سريع وتصدير بالحاويات لأسواق الخليج وأفريقيا.",
    mk_kicker:"التغطية", mk_title:"الأسواق التي نخدمها",
    m1_t:"الإمارات العربية المتحدة", m1_p:"جملة وتوصيل محلي في جميع الإمارات من مقرنا في عجمان.",
    m2_t:"دول الخليج", m2_p:"توريد لأسواق الخليج عبر شركاء لوجستيين موثوقين.",
    m3_t:"أفريقيا", m3_p:"برامج تصدير بالحاويات للموزعين والتجار في أفريقيا.",

    ct_title:"تواصل معنا",
    ct_lead:"تواصل معنا للطلبات بالجملة أو عروض الأسعار أو توفّر المنتجات. نردّ خلال يوم عمل واحد.",
    cc_addr_t:"زرنا", cc_phone_t:"اتصال / واتساب", cc_email_t:"راسلنا", cc_hours_t:"ساعات العمل",
    cc_hours_p:"السبت – الخميس: 8:00 ص – 6:00 م · الجمعة: مغلق",
    wa_btn:"تحدث عبر واتساب",
    ct_form_title:"اطلب عرض سعر",
    ct_note:"هذا نموذج تجريبي — الطلبات غير متصلة بعد ببريد إلكتروني.",

    dist_title:"كن موزّعاً",
    dist_lead:"اعمل مع درب لتجارة الإطارات للحصول على أسعار الجملة ومخزون موثوق ودعم ذي أولوية — بما في ذلك الوصول إلى بوابة الطلبات الإلكترونية للشركات.",
    dist_ben_kicker:"لماذا الشراكة", dist_ben_title:"مزايا الموزّع",
    db1_t:"أسعار الجملة", db1_p:"أسعار بمستوى التجارة تحمي هوامش ربحك.",
    db2_t:"أولوية المخزون", db2_p:"وصول أول للمقاسات سريعة الحركة والوصولات الجديدة.",
    db3_t:"الوصول إلى البوابة", db3_p:"اطلب وتابع طلباتك إلكترونياً على مدار الساعة.",
    db4_t:"دعم مخصص", db4_p:"مدير حساب مباشر لكل شريك.",
    dist_form_title:"طلب الانضمام كموزّع",
    dist_note:"يتلقّى المتقدمون المعتمدون بيانات الدخول للبوابة عبر البريد خلال يومي عمل.",
    dist_have:"موزّع بالفعل؟", dist_login_link:"سجّل الدخول إلى بوابة الشركات ←",
    df_company:"اسم الشركة", df_contact:"الشخص المسؤول", df_market:"السوق / الدولة",
    df_email:"البريد الإلكتروني للعمل", df_phone:"الهاتف", df_volume:"الكمية الشهرية المتوقعة", df_send:"إرسال الطلب",

    login_title:"دخول بوابة الشركات", login_sub:"سجّل الدخول لتقديم الطلبات بالجملة ومتابعة حسابك.",
    login_demo:"دخول تجريبي — المستخدم: darb · كلمة المرور: demo123",
    lf_user:"اسم المستخدم", lf_pass:"كلمة المرور", lf_remember:"تذكّرني", lf_signin:"تسجيل الدخول",
    login_forgot:"نسيت كلمة المرور؟", login_new:"عميل جديد؟", login_apply:"تقدّم لتصبح موزّعاً ←",

    pt_welcome:"مرحباً بعودتك", pt_logout:"تسجيل الخروج",
    pt_kpi1:"طلبات مفتوحة", pt_kpi2:"الإنفاق هذا الشهر", pt_kpi3:"شروط الائتمان", pt_kpi4:"حالة الحساب",
    pt_active:"نشط", pt_price_title:"قائمة أسعار الجملة",
    pt_price_sub:"أسعار تجارية إرشادية — تُطبّق أسعارك التعاقدية عند الطلب.",
    pt_col_sku:"الرمز", pt_col_desc:"الوصف", pt_col_size:"المقاس", pt_col_stock:"المخزون", pt_col_price:"سعر التجارة",
    pt_instock:"متوفّر", pt_lowstock:"منخفض", pt_order:"اطلب",
    pt_demo_note:"هذه بوابة تجريبية — البيانات توضيحية.", pt_recent:"الطلبات الأخيرة"
  }
};

/* ===================== Helpers ===================== */
function getLang(){ try { return localStorage.getItem("darbLang") || "en"; } catch(e){ return "en"; } }
function setLang(l){ try { localStorage.setItem("darbLang", l); } catch(e){} }

function waLink(text){
  const msg = text || (getLang()==="ar"
    ? "مرحباً درب للإطارات، أود الاستفسار عن الإطارات."
    : "Hello Darb Tyres, I'd like to enquire about tyres.");
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg);
}

/* fill phone / email / address / links from CONFIG */
function applyConfig(){
  document.querySelectorAll("[data-cfg-phone]").forEach(el=>el.textContent=CONFIG.phone);
  document.querySelectorAll("[data-cfg-email]").forEach(el=>el.textContent=CONFIG.email);
  document.querySelectorAll("[data-cfg-address]").forEach(el=>el.textContent=CONFIG.address);
  document.querySelectorAll("[data-cfg-company]").forEach(el=>el.textContent=CONFIG.company);
  document.querySelectorAll("[data-cfg-reg]").forEach(el=>el.textContent=CONFIG.reg);
  document.querySelectorAll("[data-cfg-est]").forEach(el=>el.textContent=CONFIG.est);
  document.querySelectorAll("[data-tel]").forEach(el=>el.setAttribute("href","tel:"+CONFIG.phone.replace(/\s+/g,"")));
  document.querySelectorAll("[data-mail]").forEach(el=>el.setAttribute("href","mailto:"+CONFIG.email));
  document.querySelectorAll("[data-wa]").forEach(el=>{ el.setAttribute("href",waLink()); el.setAttribute("target","_blank"); el.setAttribute("rel","noopener"); });
  const wf=document.getElementById("waFloat");
  if(wf){ wf.setAttribute("href",waLink()); wf.setAttribute("target","_blank"); wf.setAttribute("rel","noopener"); }
}

/* ===================== Language ===================== */
function applyLang(){
  const lang=getLang(), t=I18N[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.getAttribute("data-i18n");
    if(t[k]!==undefined) el.textContent=t[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k=el.getAttribute("data-i18n-ph");
    if(t[k]!==undefined) el.setAttribute("placeholder",t[k]);
  });
  document.querySelectorAll("#langBtn").forEach(b=>b.textContent=lang==="en"?"العربية":"English");
  applyConfig(); // refresh wa link language
}
function toggleLang(){ setLang(getLang()==="en"?"ar":"en"); applyLang(); }
function toggleMenu(){ const n=document.getElementById("navLinks"); if(n) n.classList.toggle("open"); }

/* ===================== Product category filter ===================== */
function initCatalog(){
  const bar=document.querySelector(".cat-bar");
  if(!bar) return;
  const cards=[...document.querySelectorAll(".pcard[data-cat]")];
  bar.addEventListener("click", e=>{
    const btn=e.target.closest("button[data-cat]");
    if(!btn) return;
    bar.querySelectorAll("button").forEach(b=>b.classList.remove("on"));
    btn.classList.add("on");
    const cat=btn.getAttribute("data-cat");
    cards.forEach(c=>{
      c.style.display = (cat==="all" || c.getAttribute("data-cat")===cat) ? "" : "none";
    });
  });
  // preselect from URL ?cat=truck
  const c=new URLSearchParams(location.search).get("cat");
  if(c){ const b=bar.querySelector('button[data-cat="'+c+'"]'); if(b) b.click(); }
}

/* ===================== Demo / contact forms ===================== */
function initForms(){
  document.querySelectorAll("form.form[data-demo], form.form").forEach(form=>{
    if(form.id==="loginForm") return; // login has its own handler
    form.addEventListener("submit", async e=>{
      e.preventDefault();
      const t=I18N[getLang()];
      let note=form.querySelector(".form-note");
      const btn=form.querySelector('button[type="submit"]');
      // Web3Forms if a key is set, else WhatsApp fallback so no lead is lost
      if(CONFIG.web3formsKey){
        try{
          const data=new FormData(form);
          data.append("access_key",CONFIG.web3formsKey);
          data.append("subject","New enquiry — Darb Tyres website");
          const r=await fetch("https://api.web3forms.com/submit",{method:"POST",body:data});
          const o=await r.json();
          showNote(form, o.success ? (t.f_thanks||"Thank you — we'll get back to you shortly.") : "Error — please call or WhatsApp us.", o.success);
          if(o.success) form.reset();
        }catch(err){ showNote(form,"Error — please call or WhatsApp us.",false); }
      } else {
        const fields=[...form.querySelectorAll("input,textarea,select")]
          .map(i=>(i.previousElementSibling?i.previousElementSibling.textContent+": ":"")+ (i.value||"")).filter(Boolean).join("%0A");
        window.open("https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent("New enquiry from website:\n")+fields,"_blank");
        showNote(form, getLang()==="ar"?"شكراً لك — سنعاود التواصل معك قريباً.":"Thank you — we'll get back to you shortly.", true);
        form.reset();
      }
    });
  });
}
function showNote(form, msg, ok){
  let note=form.querySelector(".form-note");
  if(!note){ note=document.createElement("p"); note.className="form-note"; form.appendChild(note); }
  note.textContent=msg; note.style.color= ok ? "#0a7a2f" : "var(--red)"; note.style.fontWeight="800";
}

/* ===================== Boot ===================== */
document.addEventListener("DOMContentLoaded", ()=>{
  const y=document.getElementById("year"); if(y) y.textContent=new Date().getFullYear();
  applyConfig();
  initCatalog();
  initForms();
  applyLang();
});
