# ScopeKit GR 🇬🇷
> **Ο Αυτόματος Καθορισμός Παραδοτέων, Οροσήμων & Ασπίδα Scope Creep για Έλληνες Freelancers & Agencies**

[![Live Demo](https://img.shields.io/badge/Live_Demo-scopekit--gr-1D4ED8?style=for-the-badge&logo=github)](https://mitsaken.github.io/scopekit-gr/)
![Status](https://img.shields.io/badge/Status-Validation%20Mode-blue?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20Vanilla%20CSS%20%7C%20ES6%2B%20%7C%20Zero--CDN-blue?style=flat-square)
![Hosting Cost](https://img.shields.io/badge/Hosting%20Cost-0%E2%82%AC%20(GitHub%20Pages)-emerald?style=flat-square)
![API Cost](https://img.shields.io/badge/API%20Marginal%20Cost-0%E2%82%AC%20(Deterministic)-emerald?style=flat-square)
![Mode](https://img.shields.io/badge/Mode-0%E2%82%AC%20Validation%20Waitlist-slate?style=flat-square)

---

## 🎯 Τι είναι το ScopeKit GR

Το **ScopeKit GR** είναι ένα εξειδικευμένο **Build-Once Digital Asset**, σχεδιασμένο για να λύσει το μεγαλύτερο οικονομικό πρόβλημα των Ελλήνων ελεύθερων επαγγελματιών (προγραμματιστές, γραφίστες, copywriters, video editors, marketers): το **Scope Creep** (πελάτες που ζητούν ατελείωτες αναθεωρήσεις και απλήρωτες έξτρα εργασίες λόγω ασαφών αρχικών συμφωνιών).

Μέσα σε 3 λεπτά, ο επαγγελματίας συμπληρώνει τις παραμέτρους του έργου και εξάγει αυτόματα **4 επίσημα, εκτυπώσιμα έγγραφα σε executive A4 PDF format**:

1. **📄 Τεχνικό Σημείωμα Έργου (Project Brief & Scope Definition):** Καταγραφή ακριβούς αντικειμένου, προϋπολογισμού, κύκλων αναθεωρήσεων και **Ρητών Εξαιρέσεων (Scope Exclusions)**.
2. **✅ Πρωτόκολλο Παραλαβής & Κριτήρια Αποδοχής (Deliverables & Acceptance Checklist):** Αντικειμενικά κριτήρια έγκρισης και ρήτρα σιωπηρής αποδοχής (5 εργάσιμες ημέρες) για να μην μένουν οι παραδόσεις στον αέρα.
3. **📅 Χρονοδιάγραμμα Οροσήμων & Πληρωμών (Milestone Schedule):** Σύνδεση της καταβολής των αμοιβών με συγκεκριμένα παραδοτέα (triggers) και ρήτρα αυτόματης αναστολής εργασιών σε περίπτωση καθυστέρησης.
4. **📝 Έντυπο Αίτησης Αλλαγής (Change Request Form):** Η απόλυτη ασπίδα για τις έξτρα απαιτήσεις, με αυτόματο υπολογισμό επιπλέον ωρών, χρέωσης (€/ώρα) και παράτασης παράδοσης.

---

## ⚡ Βασικά Χαρακτηριστικά

* **100% Local-First & Ιδιωτικότητα:** Όλα τα δεδομένα αποθηκεύονται αποκλειστικά στο `localStorage` του browser του χρήστη. Κανένας εξωτερικός server, καμία ανάγκη δημιουργίας λογαριασμού, κανένα backend.
* **Μηδενικό Κόστος Λειτουργίας (0€ Marginal Cost):** Βασίζεται σε ντετερμινιστική λογική (JSON templates, state machine) χωρίς εξάρτηση από πληρωμένα LLM APIs.
* **5 Ενσωματωμένα Ελληνικά Πρότυπα (1-Click Presets):**
  * 🌐 Κατασκευή Ιστοσελίδας / E-shop (WordPress / WooCommerce / Next.js)
  * 🎨 Branding, Logo & UI/UX Design (Figma)
  * ✍️ Copywriting & SEO Content
  * 🎬 Video Editing & Social Reels / TikTok
  * 📱 Social Media Management & Meta Ads
* **Ρητές Νομικές Ρήτρες (Ελληνικό & Ενωσιακό Δίκαιο):** Προ-ενσωματωμένα toggles για μεταβίβαση πνευματικών δικαιωμάτων (`Ν. 2121/1993`), επεξεργασία προσωπικών δεδομένων (`GDPR Άρθρο 28`), και υπερημερία εξόφλησης (`Ν. 4152/2013`).
* **Executive A4 Print Engine:** Υποστηρίζει εξαγωγή σε εκτυπώσιμο PDF με `@media print` styling, αυτόματα page-breaks, καθαρή τυπογραφία και πεδία υπογραφών για τον Ανάδοχο και τον Εντολέα.
* **Backup & Restore:** Πλήρης δυνατότητα εισαγωγής / εξαγωγής σε μορφή JSON και αντιγραφή σε καθαρό Markdown.

---

## 🚀 Άμεση Εκκίνηση (Τοπικά)

Δεν απαιτείται εγκατάσταση node modules ή build step! Μπορείτε να το τρέξετε απευθείας:

### Επιλογή 1: Απευθείας στον Browser
Ανοίξτε το αρχείο `index.html` με διπλό κλικ σε οποιονδήποτε περιηγητή (Chrome, Firefox, Edge, Safari).

### Επιλογή 2: Με τοπικό Python Server
```bash
cd ./scopekit-gr
python -m http.server 3000
```
Στη συνέχεια επισκεφθείτε: `http://localhost:3000`

---

## ☁️ Δωρεάν Φιλοξενία (0€ Hosting)

Το εργαλείο μπορεί να ανέβει σε λιγότερο από 60 δευτερόλεπτα:

* **GitHub Pages:**
  1. Δημιουργήστε ένα νέο δημόσιο αποθετήριο στο GitHub (π.χ. `scopekit-gr`).
  2. Ανεβάστε τα αρχεία (`index.html`, `app.js`, `presets.js`, `styles.css` και τον φάκελο `assets/`).
  3. Στο GitHub Repo > Settings > Pages, επιλέξτε το `main` branch.
  4. Η εφαρμογή είναι live δωρεάν στο `https://username.github.io/scopekit-gr`.
* **Cloudflare Pages:** Συνδέστε το repository και κάντε deploy με μηδενικό κόστος.

---

## ⏸️ Όρια Open-Source vs Pro & Κατάσταση Διάθεσης (0€ Validation Mode)

* **Δημόσια Web Έκδοση (Open-Source Workbench):** Πλήρης δωρεάν πρόσβαση στα 5 πρότυπα έργων, στις ρήτρες `Ν. 2121/1993` / `GDPR Άρθρο 28` / `Ν. 4152/2013`, στην τοπική αποθήκευση `localStorage`, στο backup JSON/Markdown και στην εκτύπωση A4 PDF (`@media print`) χωρίς εγγραφή ή πληρωμή.
* **Εμπορικό Πακέτο Pro Agency Bundle (Εκτός Δημόσιου Repo):** Περιλαμβάνει offline client-side εξαγωγή σε γνήσιο OOXML `.docx` (`Word`), Standalone Clean HTML export, αποθήκευση πολλαπλών έργων (multi-project slots), White-Label branding και 3 έτοιμα πρότυπα συμβάσεων `.docx`.
* **Εμπορικό Checkout:** Προσωρινά ανενεργό (`CHECKOUT_ENABLED = false`) κατά τη φάση validation. Οι ενδιαφερόμενοι μπορούν να εγγραφούν στη **Λίστα Αναμονής (Waitlist)** εντός της εφαρμογής (με συγκατάθεση GDPR).
* **Αρχιτεκτονική Μηδενικών Εξαρτήσεων:** 100% τοπική εκτέλεση (`file://` ή GitHub Pages), αυτοφιλοξενούμενες γραμματοσειρές SIL-OFL (`assets/fonts/`), αυστηρό `<meta>` CSP και μηδενικά εξωτερικά CDNs.

---

## ⚖️ Νομική Σημείωση

Το ScopeKit GR αποτελεί εργαλείο τεχνικής οργάνωσης έργου και διαχείρισης παραδοτέων. Δεν συνιστά νομική συμβουλή, δικηγορική υπηρεσία ή επίσημη νομική εκπροσώπηση.
