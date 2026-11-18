/**
 * ScopeKit GR - Βιβλιοθήκη Προκαθορισμένων Προτύπων (Presets)
 * Εξειδικευμένα δεδομένα για Έλληνες Freelancers & Digital Agencies
 */

const SCOPE_PRESETS = {
  web_dev: {
    id: "web_dev",
    name: "Κατασκευή Ιστοσελίδας / E-shop",
    badge: "WordPress / WooCommerce / Next.js",
    icon: "globe",
    projectTitle: "Ανασχεδιασμός & Κατασκευή E-shop Προϊόντων",
    freelancerTitle: "Web Developer / Full-Stack Engineer",
    hourlyRate: 40,
    revisionRounds: 2,
    feedbackWindowDays: 5,
    budgetAmount: 1800,
    currency: "EUR",
    description: "Πλήρης ανάπτυξη και παραμετροποίηση λειτουργικού ηλεκτρονικού καταστήματος (e-shop) σε responsive περιβάλλον, με ενσωμάτωση πύλης πληρωμών και εκπαίδευση διαχείρισης.",
    
    // Τι περιλαμβάνεται
    inclusions: [
      { text: "Εγκατάσταση CMS και βασικού θέματος (template) με προσαρμογή χρωμάτων και λογοτύπου.", required: true },
      { text: "Πλήρως Responsive σχεδίαση βελτιστοποιημένη για κινητά (Mobile First) και Desktop.", required: true },
      { text: "Διαμόρφωση βασικών σελίδων: Αρχική, Σχετικά με εμάς, Κατάστημα, Όροι Χρήσης, Επικοινωνία.", required: true },
      { text: "Σύνδεση πύλης πληρωμών ελληνικής τράπεζας ή Stripe / Viva Wallet για πιστωτικές κάρτες.", required: true },
      { text: "Ενσωμάτωση βασικού συστήματος υπολογισμού μεταφορικών (π.χ. Courier / BoxNow).", required: false },
      { text: "Εισαγωγή αρχικών δειγματοληπτικών προϊόντων (έως 20 κωδικοί) με φωτογραφίες και περιγραφές.", required: false },
      { text: "Εγκατάσταση SSL Certificate, βασικού μηχανισμού ασφαλείας και Google Analytics 4 tag.", required: true },
      { text: "Μία (1) ώρα τηλεφωνική ή βιντεοσκοπημένη εκπαίδευση διαχειριστή για καταχώριση παραγγελιών.", required: true }
    ],

    // Τι ΡΗΤΑ ΔΕΝ περιλαμβάνεται (Αποτροπή Scope Creep)
    exclusions: [
      { text: "Συγγραφή πρωτογενούς κειμένου (copywriting) ή επαγγελματική φωτογράφιση/ρετούς προϊόντων." },
      { text: "Μαζική εισαγωγή καταλόγου προϊόντων πέραν των 20 συμφωνηθέντων κωδικών." },
      { text: "Αγορά επί πληρωμή αδειών λογισμικού, plugins, fonts ή ετήσια συνδρομή hosting/domain (επιβαρύνουν τον πελάτη)." },
      { text: "Διασύνδεση με εμπορικό πρόγραμμα ERP/CRM ή αυτόματη γέφυρα τιμολόγησης (απαιτεί έξτρα προσφορά)." },
      { text: "Τεχνική υποστήριξη, συντήρηση ή αναβαθμίσεις ασφαλείας πέραν των 14 ημερών από την παράδοση." }
    ],

    // Παραδοτέα & Κριτήρια Αποδοχής
    deliverables: [
      { title: "Προσχέδιο Δομής (Staging URL)", criteria: "Λειτουργική προεπισκόπηση σε δοκιμαστικό server με dummy δεδομένα." },
      { title: "Ολοκληρωμένο E-shop (Live Deployment)", criteria: "Πλήρης μεταφορά στο domain του πελάτη, έλεγχος λειτουργίας checkout και φόρμας επικοινωνίας." },
      { title: "Παραδοτέα Στοιχεία Πρόσβασης (Handover Document)", criteria: "Αρχείο με όλα τα διαπιστευτήρια διαχειριστή (Admin credentials, DB, hosting access)." },
      { title: "Οδηγός Χρήσης Διαχειριστή (PDF Video Link)", criteria: "Συνοπτικός οδηγός 5 σελίδων για διαχείριση αποθέματος και παραγγελιών." }
    ],

    // Ορόσημα & Πληρωμές
    milestones: [
      { phase: "Έναρξη Έργου & Προετοιμασία", percentage: 40, trigger: "Υπογραφή συμφωνητικού και παράδοση υλικού (λογότυπο, κείμενα) από τον πελάτη." },
      { phase: "Παρουσίαση Staging & Πρώτες Παρατηρήσεις", percentage: 30, trigger: "Ολοκλήρωση βασικής δομής σε δοκιμαστικό σύνδεσμο και 1ος κύκλος αναθεωρήσεων." },
      { phase: "Τελική Έγκριση & Μετάβαση σε Live", percentage: 30, trigger: "Ολοκλήρωση διορθώσεων, έλεγχος δοκιμαστικής παραγγελίας και παράδοση κωδικών." }
    ]
  },

  branding_design: {
    id: "branding_design",
    name: "Branding, Logo & UI/UX Design",
    badge: "Figma / Illustrator / Brand Guidelines",
    icon: "palette",
    projectTitle: "Εταιρική Ταυτότητα & Σχεδιασμός UI/UX Εφαρμογής",
    freelancerTitle: "UI/UX & Brand Designer",
    hourlyRate: 35,
    revisionRounds: 3,
    feedbackWindowDays: 4,
    budgetAmount: 1200,
    currency: "EUR",
    description: "Δημιουργία ολοκληρωμένης οπτικής ταυτότητας brand (λογότυπο, χρωματική παλέτα, τυπογραφία) και πρωτοτύπου διεπαφής (UI/UX) σε περιβάλλον Figma.",
    
    inclusions: [
      { text: "Δύο (2) διακριτές σχεδιαστικές κατευθύνσεις (moodboards) και концепции λογοτύπου.", required: true },
      { text: "Τελικό λογότυπο σε διανυσματική μορφή (.AI, .SVG, .EPS) και web formats (.PNG διαφανές, .JPG, .WebP).", required: true },
      { text: "Συνοπτικό Brand Guideline Sheet (χρωματικοί κωδικοί HEX/RGB/CMYK, κανόνες τυπογραφίας, safe zone).", required: true },
      { text: "Σχεδιασμός έως 6 βασικών οθονών UI/UX σε Figma (Desktop & Mobile view).", required: true },
      { text: "Διαδραστικό Figma Prototype για προσομοίωση της εμπειρίας πλοήγησης.", required: false }
    ],

    exclusions: [
      { text: "Προγραμματισμός, γραφή κώδικα HTML/CSS ή τεχνική ενσωμάτωση της εφαρμογής." },
      { text: "Κόστος αγοράς εμπορικών γραμματοσειρών ή stock εικονογραφήσεων/φωτογραφιών." },
      { text: "Φυσική εκτύπωση διαφημιστικού υλικού, επαγγελματικών καρτών ή banners." },
      { text: "Σχεδιασμός πρόσθετων οθονών πέραν των 6 συμφωνηθέντων (χρεώνονται με την ωριαία ταρίφα)." }
    ],

    deliverables: [
      { title: "Brand Assets Package (.zip)", criteria: "Διανυσματικά αρχεία λογοτύπου σε όλες τις αναλύσεις και παραλλαγές (dark/light mode)." },
      { title: "Brand Identity Guide (PDF)", criteria: "Έγγραφο 8 σελίδων με πλήρεις προδιαγραφές εφαρμογής του λογοτύπου." },
      { title: "Figma Project Link (UI/UX)", criteria: "Πλήρης πρόσβαση προβολής/επεξεργασίας στο Figma project με οργανωμένα components." }
    ],

    milestones: [
      { phase: "Έναρξη & Έρευνα Moodboard", percentage: 50, trigger: "Έγκριση αρχικής ιδέας και καταβολή προκαταβολής." },
      { phase: "Τελική Επιλογή & UI Figma", percentage: 30, trigger: "Οριστικοποίηση λογοτύπου και παρουσίαση Figma mockup." },
      { phase: "Παράδοση Τελικών Αρχείων", percentage: 20, trigger: "Έγκριση παραδοτέων και αποστολή του τελικού .zip πακέτου." }
    ]
  },

  copywriting_content: {
    id: "copywriting_content",
    name: "Copywriting & SEO Content",
    badge: "Άρθρα / Landing Pages / B2B Copy",
    icon: "pen-tool",
    projectTitle: "Συγγραφή Κειμένων Ιστοσελίδας & SEO Landing Page",
    freelancerTitle: "Senior B2B Copywriter & Content Strategist",
    hourlyRate: 30,
    revisionRounds: 2,
    feedbackWindowDays: 3,
    budgetAmount: 750,
    currency: "EUR",
    description: "Στρατηγική συγγραφή κειμένων μετατροπής (conversion copywriting) για 5 βασικές σελίδες ιστοτόπου, με ενσωμάτωση λέξεων-κλειδιών και δομή πωλήσεων.",
    
    inclusions: [
      { text: "Συγγραφή κειμένων για 5 σελίδες: Home, About Us, Services, Case Studies, Contact.", required: true },
      { text: "Έρευνα λέξεων-κλειδιών (Keyword Research) χαμηλού ανταγωνισμού για την ελληνική αγορά.", required: true },
      { text: "Σύνταξη Meta Titles και Meta Descriptions για κάθε επιμέρους σελίδα.", required: true },
      { text: "Δομημένη παρουσίαση σε Google Docs με σαφή Headings (H1, H2, H3) και Call-To-Action προτάσεις.", required: true },
      { text: "Έως 2 κύκλοι διορθώσεων ύφους και διατύπωσης ανά σελίδα.", required: true }
    ],

    exclusions: [
      { text: "Ανέβασμα και μορφοποίηση των κειμένων στο CMS του πελάτη (WordPress κ.λπ.)." },
      { text: "Μετάφραση σε ξένες γλώσσες (αγγλικά, γερμανικά κ.λπ.) εκτός αν συμφωνηθεί γραπτώς." },
      { text: "Νομικός έλεγχος όρων χρήσης ή πολιτικής απορρήτου GDPR (απαιτεί δικηγόρο)." }
    ],

    deliverables: [
      { title: "Master Copy Deck (DOCX / Google Doc)", criteria: "Πλήρες κείμενο 5 σελίδων έτοιμο για πέρασμα στην ιστοσελίδα." },
      { title: "SEO On-Page Blueprint (Spreadsheet)", criteria: "Πίνακας με URLs, Target Keywords, Title Tags, Meta Descriptions." }
    ],

    milestones: [
      { phase: "Έναρξη & Briefing", percentage: 50, trigger: "Ολοκλήρωση ερωτηματολογίου brief και προκαταβολή." },
      { phase: "Τελική Παράδοση Κειμένων", percentage: 50, trigger: "Ενσωμάτωση παρατηρήσεων και τελική αποδοχή του Master Copy Deck." }
    ]
  },

  video_production: {
    id: "video_production",
    name: "Video Editing & Social Reels",
    badge: "Premiere / After Effects / Shorts / Ads",
    icon: "video",
    projectTitle: "Πακέτο Επεξεργασίας 8 B2B Promotional Reels / Shorts",
    freelancerTitle: "Video Editor & Motion Designer",
    hourlyRate: 35,
    revisionRounds: 2,
    feedbackWindowDays: 3,
    budgetAmount: 600,
    currency: "EUR",
    description: "Μοντάζ, ηχητικός καθαρισμός, χρωματική διόρθωση και προσθήκη δυναμικών υποτίτλων για πακέτο 8 κάθετων βίντεο (Reels / TikTok / Shorts).",
    
    inclusions: [
      { text: "Μοντάζ πρωτογενούς υλικού (raw footage) σε 8 αυτοτελή βίντεο διάρκειας 30-60 δευτερολέπτων.", required: true },
      { text: "Δυναμικοί υπότιτλοι (animated captions) στα ελληνικά με έμφαση στις λέξεις-κλειδιά.", required: true },
      { text: "Ηχητικός καθαρισμός φωνής, εξισορρόπηση έντασης και μουσική επένδυση άνευ πνευματικών δικαιωμάτων.", required: true },
      { text: "Εξαγωγή σε κάθετη αναλογία 9:16 (1080x1920 MP4) βελτιστοποιημένη για Instagram και TikTok.", required: true }
    ],

    exclusions: [
      { text: "Φυσική βιντεοσκόπηση στον χώρο του πελάτη ή παροχή εξοπλισμού κάμερας/φωτισμού." },
      { text: "Παρουσίαση μπροστά στην κάμερα (speaking actor) ή εκφώνηση voiceover." },
      { text: "Ανάρτηση, διαχείριση λογαριασμού social media ή διαφημιστική προώθηση (Ads)." }
    ],

    deliverables: [
      { title: "8x Master MP4 Video Files", criteria: "Αρχεία Full HD 1080x1920 έτοιμα για άμεση δημοσίευση χωρίς υδατογράφημα." },
      { title: "8x Custom Cover Thumbnails", criteria: "Ελκυστικές στατικές εικόνες προεπισκόπησης για το grid." }
    ],

    milestones: [
      { phase: "Προκαταβολή & Παραλαβή Raw Footage", percentage: 50, trigger: "Μεταφορά του υλικού μέσω WeTransfer/Drive και έναρξη μοντάζ." },
      { phase: "Έγκριση Προσχεδίων & Τελική Παράδοση", percentage: 50, trigger: "Έγκριση των 8 βίντεο με υδατογράφημα και αποστολή καθαρών αρχείων." }
    ]
  },

  social_media: {
    id: "social_media",
    name: "Social Media Management & Ads",
    badge: "Meta Ads / Content Plan / Monthly Retainer",
    icon: "share-2",
    projectTitle: "Μηνιαία Διαχείριση Περιεχομένου & Διαφημίσεων Meta",
    freelancerTitle: "Social Media Manager & Media Buyer",
    hourlyRate: 30,
    revisionRounds: 1,
    feedbackWindowDays: 4,
    budgetAmount: 500,
    currency: "EUR",
    description: "Σχεδιασμός μηνιαίου ημερολογίου περιεχομένου (12 αναρτήσεις), συγγραφή λεζάντων, δημιουργία γραφικών και στήσιμο διαφημιστικής καμπάνιας στο Meta Ads Manager.",
    
    inclusions: [
      { text: "Σύνταξη μηνιαίου ημερολογίου 12 αναρτήσεων (Posts/Carousels/Stories).", required: true },
      { text: "Συγγραφή κειμένων (captions) και επιλογή στρατηγικών hashtags.", required: true },
      { text: "Σχεδιασμός στατικών γραφικών σε Canva/Photoshop βάσει της εταιρικής ταυτότητας.", required: true },
      { text: "Στήσιμο και παρακολούθηση 1 διαφημιστικής καμπάνιας Leads ή Πωλήσεων στο Meta Ads Manager.", required: true },
      { text: "Μηνιαία αναφορά απόδοσης (Monthly Performance Report) με βασικά metrics (CPA, CTR, Reach).", required: true }
    ],

    exclusions: [
      { text: "Το διαφημιστικό budget (Ad Spend) που πληρώνεται απευθείας στη Meta με την κάρτα του πελάτη." },
      { text: "Απάντηση σε μηνύματα Direct Messages (DMs) ή εξυπηρέτηση πελατών πέραν του ωραρίου 09:00-17:00." },
      { text: "Διαχείριση κρίσεων δημοσίων σχέσεων (Crisis Management) ή νομικά παράπονα χρηστών." }
    ],

    deliverables: [
      { title: "Monthly Content Calendar (Google Sheets)", criteria: "Εγκεκριμένο πλάνο δημοσιεύσεων 10 ημέρες πριν την έναρξη του μήνα." },
      { title: "12x Graphic Creatives", criteria: "Οπτικό υλικό σε διαστάσεις 1080x1080 και 1080x1920." },
      { title: "Monthly Analytics PDF Report", criteria: "Συνοπτική αναφορά 4 σελίδων με τα αποτελέσματα της καμπάνιας." }
    ],

    milestones: [
      { phase: "Προπληρωμή Μηνιαίας Συνδρομής", percentage: 100, trigger: "Προπληρωμή στην αρχή κάθε μήνα πριν την εκκίνηση των δημοσιεύσεων." }
    ]
  }
};
