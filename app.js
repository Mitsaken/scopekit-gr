/**
 * ScopeKit GR - Κύρια Μηχανή Εφαρμογής & Reactive Document Engine
 * 100% Local-First, Zero External Dependencies, Swiss Precision UI
 */

const CHECKOUT_ENABLED = false;
const WAITLIST_ENDPOINT = "https://conversionlogic-waitlist.dimkevin88.workers.dev";

const CLAUSE_DEFINITIONS = [
  {
    key: "ipTransfer",
    label: "Πνευματικά Δικαιώματα (Ν. 2121/1993)",
    text: "Πνευματικά Δικαιώματα (Ν. 2121/1993): Μεταβίβαση άδειας χρήσης/δικαιωμάτων επί των τελικών παραδοτέων αποκλειστικά μετά την πλήρη εξόφληση του συνολικού budget."
  },
  {
    key: "gdprArt28",
    label: "Προστασία Δεδομένων (GDPR Άρθρο 28)",
    text: "Προστασία Δεδομένων (GDPR Άρθρο 28): Ο Εντολέας εγγυάται τη νομιμότητα του υλικού ως Υπεύθυνος Επεξεργασίας· ο Ανάδοχος επεξεργάζεται δεδομένα μόνο για την εκτέλεση του έργου."
  },
  {
    key: "latePayment",
    label: "Όροι Υπερημερίας (Ν. 4152/2013)",
    text: "Όροι Υπερημερίας (Ν. 4152/2013): Καθυστέρηση εξόφλησης οροσήμου άνω των 5 εργάσιμων ημερών ενεργοποιεί αναστολή εργασιών και παράδοσης κωδικών έως την εξόφληση."
  }
];

const DEFAULT_STATE = {
  activeDoc: "brief",
  project: {
    title: "Ανασχεδιασμός & Κατασκευή E-shop Προϊόντων",
    date: new Date().toISOString().split("T")[0],
    budgetAmount: 1800,
    currency: "EUR",
    hourlyRate: 40,
    revisionRounds: 2,
    feedbackWindowDays: 5,
    description: "Πλήρης ανάπτυξη και παραμετροποίηση λειτουργικού ηλεκτρονικού καταστήματος (e-shop) σε responsive περιβάλλον, με ενσωμάτωση πύλης πληρωμών και εκπαίδευση διαχείρισης."
  },
  freelancer: {
    name: "Γεώργιος Αλεξάνδρου",
    title: "Senior Full-Stack Developer / Consultant",
    email: "freelancer@example.com",
    phone: "+30 690 000 0000",
    afm: "123456789 (Δ.Ο.Υ. Αθηνών)",
    location: "Αθήνα, Ελλάδα"
  },
  client: {
    company: "Acme Retail Ε.Π.Ε.",
    contactPerson: "Νικόλαος Παπαδόπουλος",
    email: "contact@acmeretail.gr",
    phone: "+30 210 123 4567",
    afm: "987654321 (Δ.Ο.Υ. ΚΕΦΟΔΕ)",
    address: "Συγγρού 120, Αθήνα"
  },
  inclusions: [
    { id: 1, text: "Εγκατάσταση CMS και βασικού θέματος (template) με προσαρμογή χρωμάτων και λογοτύπου.", required: true },
    { id: 2, text: "Πλήρως Responsive σχεδίαση βελτιστοποιημένη για κινητά (Mobile First) και Desktop.", required: true },
    { id: 3, text: "Διαμόρφωση βασικών σελίδων: Αρχική, Σχετικά με εμάς, Κατάστημα, Όροι Χρήσης, Επικοινωνία.", required: true },
    { id: 4, text: "Σύνδεση πύλης πληρωμών ελληνικής τράπεζας ή Stripe / Viva Wallet για πιστωτικές κάρτες.", required: true },
    { id: 5, text: "Ενσωμάτωση βασικού συστήματος υπολογισμού μεταφορικών (π.χ. Courier / BoxNow).", required: false },
    { id: 6, text: "Εισαγωγή αρχικών δειγματοληπτικών προϊόντων (έως 20 κωδικοί) με φωτογραφίες και περιγραφές.", required: false },
    { id: 7, text: "Εγκατάσταση SSL Certificate, βασικού μηχανισμού ασφαλείας και Google Analytics 4 tag.", required: true },
    { id: 8, text: "Μία (1) ώρα τηλεφωνική ή βιντεοσκοπημένη εκπαίδευση διαχειριστή για καταχώριση παραγγελιών.", required: true }
  ],
  exclusions: [
    { id: 1, text: "Συγγραφή πρωτογενούς κειμένου (copywriting) ή επαγγελματική φωτογράφιση/ρετούς προϊόντων." },
    { id: 2, text: "Μαζική εισαγωγή καταλόγου προϊόντων πέραν των 20 συμφωνηθέντων κωδικών." },
    { id: 3, text: "Αγορά επί πληρωμή αδειών λογισμικού, plugins, fonts ή ετήσια συνδρομή hosting/domain (επιβαρύνουν τον πελάτη)." },
    { id: 4, text: "Διασύνδεση με εμπορικό πρόγραμμα ERP/CRM ή αυτόματη γέφυρα τιμολόγησης (απαιτεί έξτρα προσφορά)." },
    { id: 5, text: "Τεχνική υποστήριξη, συντήρηση ή αναβαθμίσεις ασφαλείας πέραν των 14 ημερών από την παράδοση." }
  ],
  deliverables: [
    { id: 1, title: "Προσχέδιο Δομής (Staging URL)", criteria: "Λειτουργική προεπισκόπηση σε δοκιμαστικό server με ενδεικτικά δεδομένα." },
    { id: 2, title: "Ολοκληρωμένο E-shop (Live Deployment)", criteria: "Πλήρης μεταφορά στο domain του πελάτη, έλεγχος λειτουργίας checkout και φόρμας επικοινωνίας." },
    { id: 3, title: "Παραδοτέα Στοιχεία Πρόσβασης (Handover Document)", criteria: "Αρχείο με όλα τα διαπιστευτήρια διαχειριστή (Admin credentials, DB, hosting access)." },
    { id: 4, title: "Οδηγός Χρήσης Διαχειριστή (PDF)", criteria: "Συνοπτικός οδηγός 5 σελίδων για διαχείριση αποθέματος και παραγγελιών." }
  ],
  milestones: [
    { id: 1, phase: "Έναρξη Έργου & Προετοιμασία", percentage: 40, trigger: "Υπογραφή συμφωνητικού και παράδοση υλικού (λογότυπο, κείμενα) από τον πελάτη." },
    { id: 2, phase: "Παρουσίαση Staging & 1ος Κύκλος Παρατηρήσεων", percentage: 30, trigger: "Ολοκλήρωση βασικής δομής σε δοκιμαστικό σύνδεσμο και παραλαβή σχολίων." },
    { id: 3, phase: "Τελική Έγκριση & Μετάβαση σε Live", percentage: 30, trigger: "Ολοκλήρωση διορθώσεων, έλεγχος δοκιμαστικής παραγγελίας και παράδοση κωδικών." }
  ],
  changeRequest: {
    crNumber: "CR-001",
    requestDate: new Date().toISOString().split("T")[0],
    requestedBy: "Νικόλαος Παπαδόπουλος (Πελάτης)",
    summary: "Προσθήκη πολυγλωσσικότητας (Αγγλικά) και αυτόματης σύνδεσης με newsletter Mailchimp.",
    impactAnalysis: "Απαιτείται εγκατάσταση πολυγλωσσικού plugin, μετάφραση μενού/κουμπιών και ρύθμιση API integration με Mailchimp.",
    hoursEstimated: 12,
    ratePerHour: 40,
    additionalCost: 480,
    deliveryDelayDays: 4,
    status: "Εκκρεμεί Έγκριση"
  },
  clauses: {
    ipTransfer: true,
    gdprArt28: true,
    latePayment: true
  }
};

let appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
let activePresetKey = null;
let extHooks = {
  onInit: null,
  onPersist: null,
  onDocx: null,
  formatKicker: null,
  formatFooter: null
};

function ensureStateDefaults() {
  appState.clauses = Object.assign({}, DEFAULT_STATE.clauses, appState.clauses || {});
}

function initApp() {
  const saved = localStorage.getItem("scopekit_gr_state");
  if (saved) {
    try {
      appState = JSON.parse(saved);
    } catch {
      console.warn("Could not parse saved state, using default.");
    }
  }
  ensureStateDefaults();
  if (typeof extHooks.onInit === "function") extHooks.onInit();

  populateFormFromState();
  renderPresetsBar();
  renderDynamicLists();
  selectDoc(appState.activeDoc || "brief", false);
  setupEventListeners();
  setupWaitlistForm();
}

function persistState() {
  localStorage.setItem("scopekit_gr_state", JSON.stringify(appState));
  if (typeof extHooks.onPersist === "function") extHooks.onPersist(appState);
  renderPreview();
}

function renderPresetsBar() {
  const container = document.getElementById("preset-pills-container");
  const presetsObj = typeof SCOPE_PRESETS !== "undefined" ? SCOPE_PRESETS : window.SCOPE_PRESETS;
  if (!container || !presetsObj) return;

  container.innerHTML = "";
  Object.keys(presetsObj).forEach((key) => {
    const p = presetsObj[key];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `preset-btn${activePresetKey === key ? " is-active" : ""}`;
    btn.textContent = p.name;
    btn.addEventListener("click", () => applyPreset(key));
    container.appendChild(btn);
  });
}

function applyPreset(presetKey) {
  const presetsObj = typeof SCOPE_PRESETS !== "undefined" ? SCOPE_PRESETS : window.SCOPE_PRESETS;
  const preset = presetsObj && presetsObj[presetKey];
  if (!preset) return;

  activePresetKey = presetKey;
  appState.project.title = preset.projectTitle;
  appState.project.budgetAmount = preset.budgetAmount;
  appState.project.hourlyRate = preset.hourlyRate;
  appState.project.revisionRounds = preset.revisionRounds;
  appState.project.feedbackWindowDays = preset.feedbackWindowDays;
  appState.project.description = preset.description;
  appState.freelancer.title = preset.freelancerTitle;

  appState.inclusions = preset.inclusions.map((inc, i) => ({ id: i + 1, text: inc.text, required: inc.required }));
  appState.exclusions = preset.exclusions.map((exc, i) => ({ id: i + 1, text: exc.text }));
  appState.deliverables = preset.deliverables.map((del, i) => ({ id: i + 1, title: del.title, criteria: del.criteria }));
  appState.milestones = preset.milestones.map((m, i) => ({ id: i + 1, phase: m.phase, percentage: m.percentage, trigger: m.trigger }));

  renderPresetsBar();
  populateFormFromState();
  renderDynamicLists();
  persistState();
  showToast(`Εφαρμόστηκε το πρότυπο: ${preset.name}`);
}

function populateFormFromState() {
  setInputValue("inp-project-title", appState.project.title);
  setInputValue("inp-project-date", appState.project.date);
  setInputValue("inp-project-budget", appState.project.budgetAmount);
  setInputValue("inp-project-rate", appState.project.hourlyRate);
  setInputValue("inp-project-revisions", appState.project.revisionRounds);
  setInputValue("inp-project-window", appState.project.feedbackWindowDays);
  setInputValue("inp-project-desc", appState.project.description);

  setInputValue("inp-fl-name", appState.freelancer.name);
  setInputValue("inp-fl-title", appState.freelancer.title);
  setInputValue("inp-fl-email", appState.freelancer.email);
  setInputValue("inp-fl-phone", appState.freelancer.phone);
  setInputValue("inp-fl-afm", appState.freelancer.afm);

  setInputValue("inp-cl-company", appState.client.company);
  setInputValue("inp-cl-contact", appState.client.contactPerson);
  setInputValue("inp-cl-email", appState.client.email);
  setInputValue("inp-cl-phone", appState.client.phone);
  setInputValue("inp-cl-afm", appState.client.afm);

  setInputValue("inp-cr-num", appState.changeRequest.crNumber);
  setInputValue("inp-cr-by", appState.changeRequest.requestedBy);
  setInputValue("inp-cr-summary", appState.changeRequest.summary);
  setInputValue("inp-cr-impact", appState.changeRequest.impactAnalysis);
  setInputValue("inp-cr-hours", appState.changeRequest.hoursEstimated);
  setInputValue("inp-cr-days", appState.changeRequest.deliveryDelayDays);

  setCheckValue("inp-clause-ip", appState.clauses?.ipTransfer !== false);
  setCheckValue("inp-clause-gdpr", appState.clauses?.gdprArt28 !== false);
  setCheckValue("inp-clause-late", appState.clauses?.latePayment !== false);
}

function setInputValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val !== undefined ? val : "";
}

function setCheckValue(id, checked) {
  const el = document.getElementById(id);
  if (el) el.checked = Boolean(checked);
}

function getBrandKicker(suffix) {
  if (typeof extHooks.formatKicker === "function") {
    return escapeHtml(extHooks.formatKicker(suffix, appState));
  }
  return suffix ? `ScopeKit GR · ${suffix}` : "ScopeKit GR";
}

function getActiveClauses() {
  const c = appState.clauses || {};
  return CLAUSE_DEFINITIONS.filter((def) => c[def.key] !== false);
}

function renderDynamicLists() {
  renderInclusionsList();
  renderExclusionsList();
  renderDeliverablesList();
  renderMilestonesList();
}

function renderInclusionsList() {
  const el = document.getElementById("inclusions-list");
  if (!el) return;
  el.innerHTML = "";
  appState.inclusions.forEach((item) => {
    const row = document.createElement("div");
    row.className = "list-item-row";

    const mark = document.createElement("span");
    mark.className = "mark-pass";
    mark.textContent = "✓";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "inline-text-input";
    input.value = item.text;
    input.setAttribute("aria-label", "Σημείο scope");
    input.addEventListener("change", () => {
      item.text = input.value;
      persistState();
    });

    const del = document.createElement("button");
    del.type = "button";
    del.className = "remove-btn";
    del.title = "Αφαίρεση";
    del.setAttribute("aria-label", "Αφαίρεση στοιχείου");
    del.textContent = "×";
    del.addEventListener("click", () => {
      appState.inclusions = appState.inclusions.filter((i) => i.id !== item.id);
      renderInclusionsList();
      persistState();
    });

    row.append(mark, input, del);
    el.appendChild(row);
  });
}

function renderExclusionsList() {
  const el = document.getElementById("exclusions-list");
  if (!el) return;
  el.innerHTML = "";
  appState.exclusions.forEach((item) => {
    const row = document.createElement("div");
    row.className = "list-item-row is-exclusion";

    const mark = document.createElement("span");
    mark.className = "mark-fail";
    mark.textContent = "✕";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "inline-text-input";
    input.value = item.text;
    input.setAttribute("aria-label", "Ρητή εξαίρεση");
    input.addEventListener("change", () => {
      item.text = input.value;
      persistState();
    });

    const del = document.createElement("button");
    del.type = "button";
    del.className = "remove-btn";
    del.title = "Αφαίρεση";
    del.setAttribute("aria-label", "Αφαίρεση εξαίρεσης");
    del.textContent = "×";
    del.addEventListener("click", () => {
      appState.exclusions = appState.exclusions.filter((i) => i.id !== item.id);
      renderExclusionsList();
      persistState();
    });

    row.append(mark, input, del);
    el.appendChild(row);
  });
}

function renderDeliverablesList() {
  const el = document.getElementById("deliverables-list");
  if (!el) return;
  el.innerHTML = "";
  appState.deliverables.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "list-item-card";

    const top = document.createElement("div");
    top.className = "list-card-top";
    const lbl = document.createElement("span");
    lbl.textContent = `Παραδοτέο #${idx + 1}`;
    const del = document.createElement("button");
    del.type = "button";
    del.className = "remove-btn";
    del.setAttribute("aria-label", `Αφαίρεση παραδοτέου ${idx + 1}`);
    del.textContent = "×";
    del.addEventListener("click", () => {
      appState.deliverables = appState.deliverables.filter((d) => d.id !== item.id);
      renderDeliverablesList();
      persistState();
    });
    top.append(lbl, del);

    const titleInp = document.createElement("input");
    titleInp.type = "text";
    titleInp.className = "field-input";
    titleInp.placeholder = "Τίτλος παραδοτέου";
    titleInp.value = item.title;
    titleInp.addEventListener("change", () => {
      item.title = titleInp.value;
      persistState();
    });

    const critInp = document.createElement("input");
    critInp.type = "text";
    critInp.className = "field-input";
    critInp.placeholder = "Κριτήριο αποδοχής";
    critInp.value = item.criteria;
    critInp.addEventListener("change", () => {
      item.criteria = critInp.value;
      persistState();
    });

    card.append(top, titleInp, critInp);
    el.appendChild(card);
  });
}

function renderMilestonesList() {
  const el = document.getElementById("milestones-list");
  if (!el) return;
  el.innerHTML = "";

  let totalPercentage = 0;
  appState.milestones.forEach((item, idx) => {
    totalPercentage += Number(item.percentage || 0);
    const card = document.createElement("div");
    card.className = "list-item-card";

    const top = document.createElement("div");
    top.className = "list-card-top";
    const lbl = document.createElement("span");
    lbl.textContent = `Φάση / Ορόσημο #${idx + 1}`;

    const rightControls = document.createElement("div");
    rightControls.className = "pct-wrap";

    const pctInp = document.createElement("input");
    pctInp.type = "number";
    pctInp.min = "0";
    pctInp.max = "100";
    pctInp.className = "pct-input tnum";
    pctInp.value = item.percentage;
    pctInp.setAttribute("aria-label", `Ποσοστό φάσης ${idx + 1}`);
    pctInp.addEventListener("change", () => {
      item.percentage = Number(pctInp.value);
      renderMilestonesList();
      persistState();
    });

    const pctSign = document.createElement("span");
    pctSign.textContent = "%";

    const del = document.createElement("button");
    del.type = "button";
    del.className = "remove-btn";
    del.setAttribute("aria-label", `Αφαίρεση φάσης ${idx + 1}`);
    del.textContent = "×";
    del.addEventListener("click", () => {
      appState.milestones = appState.milestones.filter((m) => m.id !== item.id);
      renderMilestonesList();
      persistState();
    });

    rightControls.append(pctInp, pctSign, del);
    top.append(lbl, rightControls);

    const phaseInp = document.createElement("input");
    phaseInp.type = "text";
    phaseInp.className = "field-input";
    phaseInp.placeholder = "Περιγραφή φάσης";
    phaseInp.value = item.phase;
    phaseInp.addEventListener("change", () => {
      item.phase = phaseInp.value;
      persistState();
    });

    const trigInp = document.createElement("input");
    trigInp.type = "text";
    trigInp.className = "field-input";
    trigInp.placeholder = "Προϋπόθεση καταβολής";
    trigInp.value = item.trigger;
    trigInp.addEventListener("change", () => {
      item.trigger = trigInp.value;
      persistState();
    });

    card.append(top, phaseInp, trigInp);
    el.appendChild(card);
  });

  const sumDisplay = document.getElementById("milestones-sum-display");
  if (sumDisplay) {
    sumDisplay.textContent = `Σύνολο: ${totalPercentage}%`;
    sumDisplay.className = Math.abs(totalPercentage - 100) < 0.05 ? "sum-valid tnum" : "sum-invalid tnum";
  }
}

function addInclusion() {
  const nextId = appState.inclusions.length ? Math.max(...appState.inclusions.map((i) => i.id)) + 1 : 1;
  appState.inclusions.push({ id: nextId, text: "Νέα προδιαγραφή έργου...", required: true });
  renderInclusionsList();
  persistState();
}

function addExclusion() {
  const nextId = appState.exclusions.length ? Math.max(...appState.exclusions.map((i) => i.id)) + 1 : 1;
  appState.exclusions.push({ id: nextId, text: "Ρητή εξαίρεση από το συμφωνηθέν εύρος..." });
  renderExclusionsList();
  persistState();
}

function addDeliverable() {
  const nextId = appState.deliverables.length ? Math.max(...appState.deliverables.map((i) => i.id)) + 1 : 1;
  appState.deliverables.push({ id: nextId, title: "Νέο Παραδοτέο", criteria: "Σαφές κριτήριο αποδοχής..." });
  renderDeliverablesList();
  persistState();
}

function addMilestone() {
  const nextId = appState.milestones.length ? Math.max(...appState.milestones.map((i) => i.id)) + 1 : 1;
  appState.milestones.push({ id: nextId, phase: "Νέα Φάση Πληρωμής", percentage: 20, trigger: "Προϋπόθεση καταβολής..." });
  renderMilestonesList();
  persistState();
}

function selectDoc(docId, shouldPersist = true) {
  appState.activeDoc = docId;
  document.querySelectorAll(".doc-tab-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.doc === docId);
  });
  renderPreview();
  if (shouldPersist) {
    persistState();
  }
}

function renderPreview() {
  const sheet = document.getElementById("document-preview-sheet");
  if (!sheet) return;

  const docType = appState.activeDoc;
  if (docType === "deliverables") {
    sheet.innerHTML = generateDeliverablesHTML();
  } else if (docType === "milestones") {
    sheet.innerHTML = generateMilestonesHTML();
  } else if (docType === "change_request") {
    sheet.innerHTML = generateChangeRequestHTML();
  } else {
    sheet.innerHTML = generateBriefHTML();
  }
}

function generateBriefHTML() {
  const p = appState.project;
  const f = appState.freelancer;
  const c = appState.client;

  const activeClauses = getActiveClauses();
  const clausesSection = activeClauses.length ? `
    <div class="doc-section print-avoid-break">
      <h3 class="doc-h2"><span>4. Ειδικοί Όροι Πνευματικής Ιδιοκτησίας, GDPR &amp; Εξόφλησης</span></h3>
      <div class="doc-check-list">
        ${activeClauses.map((cl) => `
          <div class="doc-check-item">
            <span class="mark-pass" aria-hidden="true">§</span>
            <span>${escapeHtml(cl.text)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  ` : "";

  return `
    <div class="doc-head">
      <div>
        <span class="doc-kicker">${getBrandKicker("Τεχνικό Σημείωμα Προδιαγραφών")}</span>
        <h2 class="doc-title">${escapeHtml(p.title)}</h2>
        <p class="doc-sub">Καταγραφή Αντικειμένου, Ορίων Εργασίας &amp; Ρητών Εξαιρέσεων Έργου</p>
      </div>
      <div class="doc-meta-right tnum">
        <div><strong>Ημερομηνία:</strong> <span class="nowrap">${escapeHtml(p.date)}</span></div>
        <div><strong>Συμφωνηθέν Budget:</strong> <span class="nowrap">${formatCurrency(p.budgetAmount, p.currency)}</span></div>
        <div><strong>Χρέωση Extra Ώρας:</strong> <span class="nowrap">${formatCurrency(p.hourlyRate, p.currency)} / ώρα</span></div>
      </div>
    </div>

    <div class="doc-parties-grid">
      <div>
        <span class="doc-party-role">Ανάδοχος / Επαγγελματίας</span>
        <div class="doc-party-name">${escapeHtml(f.name)}</div>
        <div class="doc-party-line">${escapeHtml(f.title)}</div>
        <div class="doc-party-line">Email: ${escapeHtml(f.email)} | Τηλ: <span class="nowrap">${escapeHtml(f.phone)}</span></div>
        <div class="doc-party-line">ΑΦΜ: ${escapeHtml(f.afm)}</div>
      </div>
      <div>
        <span class="doc-party-role">Εντολέας / Πελάτης</span>
        <div class="doc-party-name">${escapeHtml(c.company)}</div>
        <div class="doc-party-line">Υπεύθυνος Έργου: ${escapeHtml(c.contactPerson)}</div>
        <div class="doc-party-line">Email: ${escapeHtml(c.email)} | Τηλ: <span class="nowrap">${escapeHtml(c.phone)}</span></div>
        <div class="doc-party-line">ΑΦΜ: ${escapeHtml(c.afm)} | Έδρα: ${escapeHtml(c.address)}</div>
      </div>
    </div>

    <div class="doc-section">
      <h3 class="doc-h2"><span>1. Σύνοψη &amp; Σκοπός Έργου</span></h3>
      <p class="doc-paragraph">${escapeHtml(p.description)}</p>
    </div>

    <div class="doc-section print-avoid-break">
      <h3 class="doc-h2 is-pass">
        <span>2. Τι Περιλαμβάνεται στο Συμφωνηθέν Scope</span>
        <span>Εντός Προϋπολογισμού</span>
      </h3>
      <div class="doc-check-list">
        ${appState.inclusions.map((inc) => `
          <div class="doc-check-item">
            <span class="mark-pass" aria-hidden="true">✓</span>
            <span>${escapeHtml(inc.text)}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="callout callout-fail print-avoid-break">
      <h3 class="doc-h2 is-fail">
        <span>3. Ρητές Εξαιρέσεις (Scope Exclusions)</span>
        <span>Εκτός Αρχικού Budget</span>
      </h3>
      <p>
        Οι παρακάτω εργασίες <strong>δεν περιλαμβάνονται</strong> στον αρχικό προϋπολογισμό. Οποιοδήποτε πρόσθετο αίτημα απαιτεί προηγούμενη έγγραφη συμφωνία μέσω Change Request και χρεώνεται με <strong class="tnum nowrap">${formatCurrency(p.hourlyRate, p.currency)} / ώρα</strong>:
      </p>
      <div class="doc-check-list mt-2">
        ${appState.exclusions.map((exc) => `
          <div class="doc-check-item">
            <span class="mark-fail" aria-hidden="true">✕</span>
            <span>${escapeHtml(exc.text)}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="doc-parties-grid print-avoid-break">
      <div>
        <strong>Κύκλοι Αναθεωρήσεων (Revisions):</strong>
        <p class="doc-party-line">Συμφωνούνται <strong>έως ${p.revisionRounds} κύκλοι παρατηρήσεων</strong> επί των αρχικών προσχεδίων. Πρόσθετες αναθεωρήσεις χρεώνονται με την ωριαία ταρίφα.</p>
      </div>
      <div>
        <strong>Χρονικό Περιθώριο Παρατηρήσεων:</strong>
        <p class="doc-party-line">Ο πελάτης δεσμεύεται να αποστείλει συγκεντρωτικές παρατηρήσεις εντός <strong>${p.feedbackWindowDays} εργάσιμων ημερών</strong> από την παράδοση κάθε σταδίου.</p>
      </div>
    </div>

    ${clausesSection}

    ${renderSignaturesBlock(f.name, c.contactPerson, "Για τον Ανάδοχο:", "Για τον Εντολέα / Πελάτη:")}
    ${renderLegalDocFooter()}
  `;
}

function generateDeliverablesHTML() {
  const p = appState.project;
  const f = appState.freelancer;
  const c = appState.client;

  return `
    <div class="doc-head">
      <div>
        <span class="doc-kicker">${getBrandKicker("Πρωτόκολλο Παραλαβής")}</span>
        <h2 class="doc-title">Πίνακας Παραδοτέων &amp; Κριτήρια Αποδοχής</h2>
        <p class="doc-sub">Έργο: ${escapeHtml(p.title)} · Πελάτης: ${escapeHtml(c.company)}</p>
      </div>
      <div class="doc-meta-right tnum">
        <div><strong>Ημερομηνία:</strong> <span class="nowrap">${escapeHtml(p.date)}</span></div>
        <div><strong>Περιθώριο Ελέγχου:</strong> ${p.feedbackWindowDays} εργάσιμες ημέρες</div>
      </div>
    </div>

    <div class="callout callout-info">
      <strong>Κανόνας Παραλαβής Έργου:</strong> Κάθε παραδοτέο θεωρείται παραληφθέν όταν πληροί τα αντίστοιχα κριτήρια αποδοχής που αναγράφονται στον παρακάτω πίνακα ή εφόσον παρέλθουν <strong>${p.feedbackWindowDays} εργάσιμες ημέρες</strong> από την επίσημη αποστολή του χωρίς έγγραφες ενστάσεις.
    </div>

    <div class="doc-section">
      <h3 class="doc-h2"><span>Κατάλογος Παραδοτέων &amp; Checkpoints Έγκρισης</span></h3>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Παραδοτέο Αντικείμενο</th>
              <th>Αντικειμενικά Κριτήρια Αποδοχής</th>
              <th>Κατάσταση</th>
            </tr>
          </thead>
          <tbody>
            ${appState.deliverables.map((del, i) => `
              <tr>
                <td class="tnum">${i + 1}</td>
                <td><strong>${escapeHtml(del.title)}</strong></td>
                <td>${escapeHtml(del.criteria)}</td>
                <td><span class="status-tag">Εκκρεμεί Έγκριση</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="callout callout-neutral print-avoid-break">
      <strong>Δήλωση Παραλαβής:</strong>
      <p class="mt-1">Με την υπογραφή του παρόντος, ο Εντολέας βεβαιώνει ότι παρέλαβε και εξέτασε τα παραπάνω παραδοτέα και ότι πληρούν τις συμφωνηθείσες τεχνικές προδιαγραφές.</p>
    </div>

    ${renderSignaturesBlock(f.name, c.contactPerson, "Ολοκλήρωση Παράδοσης (Ανάδοχος):", "Οριστική Έγκριση & Παραλαβή (Πελάτης):")}
    ${renderLegalDocFooter()}
  `;
}

function generateMilestonesHTML() {
  const p = appState.project;
  const f = appState.freelancer;
  const c = appState.client;
  const totalPercent = appState.milestones.reduce((acc, m) => acc + Number(m.percentage || 0), 0);
  const isPercentValid = Math.abs(totalPercent - 100) < 0.05;

  const percentWarning = !isPercentValid ? `
    <div class="callout callout-fail print-avoid-break">
      <strong>Προσοχή Εγκυρότητας:</strong> Το άθροισμα των ποσοστών είναι <strong class="tnum">${totalPercent.toFixed(2)}%</strong> (απαιτείται 100%). Διορθώστε τα ορόσημα πριν την αποστολή.
    </div>
  ` : "";

  const budgetNum = Number(p.budgetAmount || 0);
  const vatAmount = budgetNum * 0.24;
  const totalWithVat = budgetNum + vatAmount;

  const lateClause = appState.clauses?.latePayment !== false
    ? "<li><strong>Υπερημερία (Ν. 4152/2013):</strong> Καθυστέρηση άνω των 5 εργάσιμων ημερών επιφέρει αναστολή εργασιών, παράδοσης κωδικών και αντίστοιχη παράταση χρονοδιαγράμματος.</li>"
    : "";

  return `
    <div class="doc-head">
      <div>
        <span class="doc-kicker">${getBrandKicker("Οικονομικό Χρονοδιάγραμμα")}</span>
        <h2 class="doc-title">Χρονοδιάγραμμα Οροσήμων &amp; Πληρωμών</h2>
        <p class="doc-sub">Σύνδεση Καταβολής Αμοιβών με Συγκεκριμένα Παραδοτέα</p>
      </div>
      <div class="doc-meta-right tnum">
        <div><strong>Καθαρή Αμοιβή:</strong> <span class="nowrap">${formatCurrency(budgetNum, p.currency)}</span> (προ ΦΠΑ)</div>
        <div><strong>ΦΠΑ 24%:</strong> <span class="nowrap">${formatCurrency(vatAmount, p.currency)}</span></div>
        <div><strong>Σύνολο με ΦΠΑ:</strong> <strong class="nowrap">${formatCurrency(totalWithVat, p.currency)}</strong></div>
      </div>
    </div>

    ${percentWarning}

    <div class="doc-section">
      <h3 class="doc-h2"><span>Ανάλυση Φάσεων &amp; Προϋποθέσεων Καταβολής (Payment Triggers)</span></h3>
      ${appState.milestones.map((m, i) => {
        const amount = budgetNum * Number(m.percentage || 0) / 100;
        return `
          <div class="milestone-card print-avoid-break">
            <div>
              <div class="milestone-phase-label tnum">Φάση ${i + 1} (${m.percentage}%)</div>
              <div class="milestone-title">${escapeHtml(m.phase)}</div>
              <div class="doc-party-line"><strong>Προϋπόθεση:</strong> ${escapeHtml(m.trigger)}</div>
            </div>
            <div class="milestone-amount tnum nowrap">
              <div>${formatCurrency(amount, p.currency)}</div>
            </div>
          </div>
        `;
      }).join("")}
    </div>

    <div class="callout callout-warn print-avoid-break">
      <strong>Όροι &amp; Προθεσμίες Καταβολής:</strong>
      <ul class="callout-list">
        <li>Κάθε πληρωμή οροσήμου καταβάλλεται εντός <strong>τριών (3) εργάσιμων ημερών</strong> από την εκπλήρωση της προϋπόθεσης.</li>
        <li>Η εκκίνηση της επόμενης φάσης τελεί υπό την προϋπόθεση εξόφλησης του προηγούμενου οροσήμου.</li>
        ${lateClause}
      </ul>
    </div>

    ${renderSignaturesBlock(f.name, c.contactPerson, "Ο Ανάδοχος:", "Ο Εντολέας:")}
    ${renderLegalDocFooter()}
  `;
}

function generateChangeRequestHTML() {
  const p = appState.project;
  const f = appState.freelancer;
  const c = appState.client;
  const cr = appState.changeRequest;
  const totalExtra = Number(cr.hoursEstimated || 0) * Number(p.hourlyRate || 0);
  const newTotalBudget = Number(p.budgetAmount || 0) + totalExtra;

  return `
    <div class="doc-head is-cr">
      <div>
        <span class="doc-kicker is-cr">${getBrandKicker("Αίτηση Τροποποίησης Έργου")}</span>
        <h2 class="doc-title">Έντυπο Αίτησης Αλλαγής (Change Request)</h2>
        <p class="doc-sub">Κωδικός: <strong>${escapeHtml(cr.crNumber)}</strong> · Έργο: ${escapeHtml(p.title)}</p>
      </div>
      <div class="doc-meta-right tnum">
        <div><strong>Ημερομηνία Αιτήματος:</strong> <span class="nowrap">${escapeHtml(cr.requestDate)}</span></div>
        <div><strong>Αιτών:</strong> ${escapeHtml(cr.requestedBy)}</div>
      </div>
    </div>

    <div class="callout callout-fail">
      <strong>Σκοπός Εντύπου:</strong> Το παρόν έγγραφο καταγράφει αιτήματα <strong>εκτός του αρχικώς συμφωνηθέντος Scope</strong>. Καμία πρόσθετη εργασία δεν εκτελείται χωρίς έγγραφη έγκριση του κόστους και της παράτασης.
    </div>

    <div class="doc-section">
      <h3 class="doc-h2"><span>1. Περιγραφή Αιτούμενης Τροποποίησης</span></h3>
      <div class="callout callout-neutral mt-0">${escapeHtml(cr.summary)}</div>
    </div>

    <div class="doc-section">
      <h3 class="doc-h2"><span>2. Τεχνική Ανάλυση &amp; Επίπτωση</span></h3>
      <div class="callout callout-neutral mt-0">${escapeHtml(cr.impactAnalysis)}</div>
    </div>

    <div class="doc-section print-avoid-break">
      <h3 class="doc-h2"><span>3. Οικονομική &amp; Χρονική Αναπροσαρμογή</span></h3>
      <div class="cr-metrics-grid tnum">
        <div class="cr-metric-box">
          <span class="cr-metric-label">Εκτιμώμενες Ώρες</span>
          <span class="cr-metric-value nowrap">${cr.hoursEstimated} ώρες</span>
        </div>
        <div class="cr-metric-box">
          <span class="cr-metric-label">Ωριαία Χρέωση</span>
          <span class="cr-metric-value nowrap">${formatCurrency(p.hourlyRate, p.currency)}</span>
        </div>
        <div class="cr-metric-box is-extra">
          <span class="cr-metric-label">Επιπλέον Κόστος</span>
          <span class="cr-metric-value nowrap">+${formatCurrency(totalExtra, p.currency)}</span>
        </div>
        <div class="cr-metric-box is-total">
          <span class="cr-metric-label">Νέο Συνολικό Budget</span>
          <span class="cr-metric-value nowrap">${formatCurrency(newTotalBudget, p.currency)}</span>
        </div>
      </div>
      <div class="callout callout-neutral">
        <strong>Επίπτωση Χρονοδιαγράμματος:</strong> Παράταση τελικής παράδοσης κατά <strong class="tnum">+${cr.deliveryDelayDays} εργάσιμες ημέρες</strong>. Όλοι οι υπόλοιποι όροι παραμένουν σε ισχύ.
      </div>
    </div>

    ${renderSignaturesBlock(f.name, c.contactPerson, "Τεχνική Αποδοχή (Ανάδοχος):", "Έγκριση Κόστους & Χρόνου (Εντολέας):")}
    ${renderLegalDocFooter()}
  `;
}

function renderSignaturesBlock(freelancerName, clientContact, leftLabel, rightLabel) {
  return `
    <div class="doc-signatures print-avoid-break">
      <div>
        <div><strong>${leftLabel}</strong></div>
        <div class="sig-line"></div>
        <div class="doc-party-line">${escapeHtml(freelancerName)}<br>Ημερομηνία: _______________</div>
      </div>
      <div>
        <div><strong>${rightLabel}</strong></div>
        <div class="sig-line"></div>
        <div class="doc-party-line">${escapeHtml(clientContact)}<br>Ημερομηνία: _______________</div>
      </div>
    </div>
  `;
}

function renderLegalDocFooter() {
  if (typeof extHooks.formatFooter === "function") {
    return extHooks.formatFooter(appState, escapeHtml);
  }
  return `
    <div class="doc-legal-foot">
      Σημείωση: Το παρόν συντάχθηκε μέσω του ScopeKit GR αποκλειστικά ως τεχνικό σημείωμα οργάνωσης έργου και παραδοτέων. Δεν συνιστά νομική συμβουλή ή δεσμευτική σύμβαση.
    </div>
  `;
}

function formatCurrency(amount, currency) {
  const num = Number(amount || 0);
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num);
  }
  return new Intl.NumberFormat("el-GR", { style: "currency", currency: "EUR" }).format(num);
}

function escapeHtml(str) {
  if (typeof str !== "string") return String(str ?? "");
  return str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[m]));
}

function exportPDF() {
  if (appState.activeDoc === "milestones") {
    const totalPercent = appState.milestones.reduce((acc, m) => acc + Number(m.percentage || 0), 0);
    if (Math.abs(totalPercent - 100) >= 0.05) {
      if (!confirm(`Προσοχή: Το άθροισμα των οροσήμων είναι ${totalPercent.toFixed(2)}% αντί για 100%. Να συνεχίσει η εκτύπωση;`)) {
        return;
      }
    }
  }
  const currentTitle = document.title;
  const cleanTitle = (appState.project.title || "Project").replace(/[^a-zA-Z0-9_\u0370-\u03ff]/g, "_");
  document.title = `ScopeKit_GR_${appState.activeDoc}_${cleanTitle}`;
  window.print();
  document.title = currentTitle;
}

function copyMarkdown() {
  const doc = appState.activeDoc;
  const activeClauses = getActiveClauses();
  let md = "";
  if (doc === "brief") {
    const clausesMd = activeClauses.length ? `\n\n## 4. Ειδικοί Όροι\n${activeClauses.map((c) => `- ${c.text}`).join("\n")}` : "";
    md = `# ${appState.project.title}\n\n**Ημερομηνία:** ${appState.project.date}\n**Budget:** ${formatCurrency(appState.project.budgetAmount, appState.project.currency)}\n**Ανάδοχος:** ${appState.freelancer.name}\n**Εντολέας:** ${appState.client.company}\n\n## 1. Σκοπός\n${appState.project.description}\n\n## 2. Τι Περιλαμβάνεται\n${appState.inclusions.map((i) => `- [x] ${i.text}`).join("\n")}\n\n## 3. Ρητές Εξαιρέσεις\n${appState.exclusions.map((e) => `- [ ] ${e.text}`).join("\n")}${clausesMd}\n\n*Τεχνικό σημείωμα οργάνωσης έργου — δεν συνιστά νομική συμβουλή.*`;
  } else if (doc === "deliverables") {
    md = `# Πίνακας Παραδοτέων - ${appState.project.title}\n\n| # | Παραδοτέο | Κριτήριο Αποδοχής |\n|---|---|---|\n${appState.deliverables.map((d, i) => `| ${i + 1} | ${d.title} | ${d.criteria} |`).join("\n")}`;
  } else if (doc === "milestones") {
    const lateMd = appState.clauses?.latePayment !== false ? `\n\n- Υπερημερία (Ν. 4152/2013): Καθυστέρηση > 5 εργάσιμων ημερών επιφέρει αναστολή εργασιών.` : "";
    md = `# Ορόσημα & Πληρωμές - ${appState.project.title}\n\n${appState.milestones.map((m, i) => `### Φάση ${i + 1}: ${m.phase} (${m.percentage}%)\nTrigger: ${m.trigger}`).join("\n\n")}${lateMd}`;
  } else {
    const extra = (Number(appState.changeRequest.hoursEstimated || 0) * Number(appState.project.hourlyRate || 0));
    md = `# Change Request: ${appState.changeRequest.crNumber}\n\n**Έργο:** ${appState.project.title}\n**Αιτών:** ${appState.changeRequest.requestedBy}\n\n## Περιγραφή\n${appState.changeRequest.summary}\n\n## Τεχνική Επίπτωση\n${appState.changeRequest.impactAnalysis}\n\n**Εκτιμώμενες Ώρες:** ${appState.changeRequest.hoursEstimated} ώρες\n**Έξτρα Κόστος:** ${formatCurrency(extra, appState.project.currency)}`;
  }

  navigator.clipboard.writeText(md).then(() => {
    showToast("Το κείμενο αντιγράφηκε στο Clipboard σε μορφή Markdown.");
  });
}

function exportJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `scopekit_gr_${(appState.project.title || "project").replace(/[^a-zA-Z0-9_\u0370-\u03ff]/g, "_")}.json`);
  dlAnchor.click();
  showToast("Το backup JSON εξήχθη.");
}

function importJSON() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Το αρχείο υπερβαίνει το όριο 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const raw = JSON.parse(event.target.result);
        if (!raw || typeof raw !== "object") throw new Error("Μη έγκυρη δομή JSON.");
        appState = {
          activeDoc: typeof raw.activeDoc === "string" ? raw.activeDoc : "brief",
          project: {
            title: String(raw.project?.title || "Χωρίς Τίτλο"),
            date: String(raw.project?.date || new Date().toISOString().split("T")[0]),
            budgetAmount: Math.max(0, Number(raw.project?.budgetAmount || 0)),
            currency: String(raw.project?.currency || "EUR"),
            hourlyRate: Math.max(0, Number(raw.project?.hourlyRate || 0)),
            revisionRounds: Math.max(0, Math.floor(Number(raw.project?.revisionRounds || 2))),
            feedbackWindowDays: Math.max(1, Math.floor(Number(raw.project?.feedbackWindowDays || 5))),
            description: String(raw.project?.description || "")
          },
          freelancer: {
            name: String(raw.freelancer?.name || ""),
            title: String(raw.freelancer?.title || ""),
            email: String(raw.freelancer?.email || ""),
            phone: String(raw.freelancer?.phone || ""),
            afm: String(raw.freelancer?.afm || ""),
            location: String(raw.freelancer?.location || "")
          },
          client: {
            company: String(raw.client?.company || ""),
            contactPerson: String(raw.client?.contactPerson || ""),
            email: String(raw.client?.email || ""),
            phone: String(raw.client?.phone || ""),
            afm: String(raw.client?.afm || ""),
            address: String(raw.client?.address || "")
          },
          inclusions: Array.isArray(raw.inclusions) ? raw.inclusions.map((inc, i) => ({ id: i + 1, text: String(inc.text || ""), required: Boolean(inc.required) })) : [],
          exclusions: Array.isArray(raw.exclusions) ? raw.exclusions.map((exc, i) => ({ id: i + 1, text: String(exc.text || "") })) : [],
          deliverables: Array.isArray(raw.deliverables) ? raw.deliverables.map((del, i) => ({ id: i + 1, title: String(del.title || ""), criteria: String(del.criteria || "") })) : [],
          milestones: Array.isArray(raw.milestones) ? raw.milestones.map((m, i) => ({ id: i + 1, phase: String(m.phase || ""), percentage: Math.max(0, Math.min(100, Number(m.percentage || 0))), trigger: String(m.trigger || "") })) : [],
          changeRequest: {
            crNumber: String(raw.changeRequest?.crNumber || "CR-001"),
            requestDate: String(raw.changeRequest?.requestDate || new Date().toISOString().split("T")[0]),
            requestedBy: String(raw.changeRequest?.requestedBy || ""),
            summary: String(raw.changeRequest?.summary || ""),
            impactAnalysis: String(raw.changeRequest?.impactAnalysis || ""),
            hoursEstimated: Math.max(0, Number(raw.changeRequest?.hoursEstimated || 0)),
            ratePerHour: Math.max(0, Number(raw.changeRequest?.ratePerHour || 0)),
            additionalCost: Math.max(0, Number(raw.changeRequest?.additionalCost || 0)),
            deliveryDelayDays: Math.max(0, Math.floor(Number(raw.changeRequest?.deliveryDelayDays || 0))),
            status: String(raw.changeRequest?.status || "Εκκρεμεί Έγκριση")
          },
          clauses: {
            ipTransfer: raw.clauses?.ipTransfer !== false,
            gdprArt28: raw.clauses?.gdprArt28 !== false,
            latePayment: raw.clauses?.latePayment !== false
          }
        };
        ensureStateDefaults();
        populateFormFromState();
        renderDynamicLists();
        persistState();
        showToast("Το έργο φορτώθηκε επιτυχώς.");
      } catch {
        alert("Σφάλμα ανάγνωσης JSON.");
      }
    };
    reader.readAsText(file);
  });
  input.click();
}

function handleDocxAction() {
  if (typeof extHooks.onDocx === "function") {
    extHooks.onDocx(appState);
    return;
  }
  showToast("Η εξαγωγή Word (.docx), το White-Label & τα πολλαπλά έργα περιλαμβάνονται στο πακέτο Pro Agency.");
  const wl = document.getElementById("pro-waitlist");
  if (wl) wl.scrollIntoView({ behavior: "smooth" });
}

function showToast(msg) {
  let toast = document.getElementById("scopekit-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "scopekit-toast";
    toast.className = "app-toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function setupWaitlistForm() {
  const form = document.getElementById("proWaitlistForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (CHECKOUT_ENABLED) return;

    const emailEl = document.getElementById("proWaitlistEmail");
    const consentEl = document.getElementById("proWaitlistConsent");
    const msgEl = document.getElementById("proWaitlistMsg");
    const btn = document.getElementById("proWaitlistSubmit");

    const email = (emailEl.value || "").trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      msgEl.className = "waitlist-msg is-err";
      msgEl.textContent = "Παρακαλούμε εισάγετε έγκυρη διεύθυνση email.";
      emailEl.focus();
      return;
    }
    if (!consentEl.checked) {
      msgEl.className = "waitlist-msg is-err";
      msgEl.textContent = "Απαιτείται η ρητή συγκατάθεση GDPR πριν την αποστολή.";
      consentEl.focus();
      return;
    }

    btn.disabled = true;
    msgEl.className = "waitlist-msg";
    msgEl.textContent = "Καταχώρηση...";

    try {
      const resp = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email, project: form.dataset.project || "scopekit-gr" })
      });
      const data = await resp.json();
      if (resp.ok && data.ok) {
        msgEl.className = "waitlist-msg is-ok";
        msgEl.textContent = "Ευχαριστούμε. Η εγγραφή σας στη λίστα αναμονής ολοκληρώθηκε.";
        form.reset();
      } else {
        throw new Error(data.error || "Αποτυχία καταχώρησης");
      }
    } catch (err) {
      msgEl.className = "waitlist-msg is-err";
      msgEl.textContent = `Σφάλμα σύνδεσης: ${err.message}. Δοκιμάστε ξανά.`;
    } finally {
      btn.disabled = false;
    }
  });
}

function setupEventListeners() {
  document.getElementById("btn-import-json")?.addEventListener("click", importJSON);
  document.getElementById("btn-export-json")?.addEventListener("click", exportJSON);
  document.getElementById("btn-add-inclusion")?.addEventListener("click", addInclusion);
  document.getElementById("btn-add-exclusion")?.addEventListener("click", addExclusion);
  document.getElementById("btn-add-deliverable")?.addEventListener("click", addDeliverable);
  document.getElementById("btn-add-milestone")?.addEventListener("click", addMilestone);
  document.getElementById("btn-export-docx")?.addEventListener("click", handleDocxAction);
  document.getElementById("btn-copy-md")?.addEventListener("click", copyMarkdown);
  document.getElementById("btn-export-pdf")?.addEventListener("click", exportPDF);

  document.getElementById("inp-clause-ip")?.addEventListener("change", (e) => {
    appState.clauses.ipTransfer = e.target.checked;
    persistState();
  });
  document.getElementById("inp-clause-gdpr")?.addEventListener("change", (e) => {
    appState.clauses.gdprArt28 = e.target.checked;
    persistState();
  });
  document.getElementById("inp-clause-late")?.addEventListener("change", (e) => {
    appState.clauses.latePayment = e.target.checked;
    persistState();
  });

  document.querySelectorAll(".doc-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => selectDoc(btn.dataset.doc));
  });

  bindInput("inp-project-title", (v) => { appState.project.title = v; persistState(); });
  bindInput("inp-project-date", (v) => { appState.project.date = v; persistState(); });
  bindInput("inp-project-budget", (v) => { appState.project.budgetAmount = v; persistState(); });
  bindInput("inp-project-rate", (v) => { appState.project.hourlyRate = v; persistState(); });
  bindInput("inp-project-revisions", (v) => { appState.project.revisionRounds = v; persistState(); });
  bindInput("inp-project-window", (v) => { appState.project.feedbackWindowDays = v; persistState(); });
  bindInput("inp-project-desc", (v) => { appState.project.description = v; persistState(); });

  bindInput("inp-fl-name", (v) => { appState.freelancer.name = v; persistState(); });
  bindInput("inp-fl-title", (v) => { appState.freelancer.title = v; persistState(); });
  bindInput("inp-fl-email", (v) => { appState.freelancer.email = v; persistState(); });
  bindInput("inp-fl-phone", (v) => { appState.freelancer.phone = v; persistState(); });
  bindInput("inp-fl-afm", (v) => { appState.freelancer.afm = v; persistState(); });

  bindInput("inp-cl-company", (v) => { appState.client.company = v; persistState(); });
  bindInput("inp-cl-contact", (v) => { appState.client.contactPerson = v; persistState(); });
  bindInput("inp-cl-email", (v) => { appState.client.email = v; persistState(); });
  bindInput("inp-cl-phone", (v) => { appState.client.phone = v; persistState(); });
  bindInput("inp-cl-afm", (v) => { appState.client.afm = v; persistState(); });

  bindInput("inp-cr-num", (v) => { appState.changeRequest.crNumber = v; persistState(); });
  bindInput("inp-cr-by", (v) => { appState.changeRequest.requestedBy = v; persistState(); });
  bindInput("inp-cr-summary", (v) => { appState.changeRequest.summary = v; persistState(); });
  bindInput("inp-cr-impact", (v) => { appState.changeRequest.impactAnalysis = v; persistState(); });
  bindInput("inp-cr-hours", (v) => { appState.changeRequest.hoursEstimated = v; persistState(); });
  bindInput("inp-cr-days", (v) => { appState.changeRequest.deliveryDelayDays = v; persistState(); });
}

function bindInput(id, callback) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("input", (e) => callback(e.target.value));
  }
}

window.__scopekitBridge = {
  registerHooks(hooks) { Object.assign(extHooks, hooks || {}); },
  getState: () => appState,
  setState(newState) {
    appState = newState;
    ensureStateDefaults();
    populateFormFromState();
    renderDynamicLists();
    selectDoc(appState.activeDoc || "brief", false);
    persistState();
  },
  refreshPreview: () => renderPreview(),
  DEFAULT_STATE,
  showToast,
  formatCurrency,
  escapeHtml,
  getActiveClauses
};

document.addEventListener("DOMContentLoaded", initApp);
