export interface TableOfContentsItem {
  id: string;
  title: string;
  num: string;
}

export interface DecisionRow {
  option: string;
  whatItGaveMe: string;
  whyIMovedOn: string;
}

export interface CaseStudyData {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  statusText: string;
  statusBanner: string;
  inShort: string;
  toc: TableOfContentsItem[];
  theAsk: {
    title: string;
    paragraphs: string[];
  };
  whatIBuiltFirst: {
    title: string;
    intro: string;
    bullets: string[];
    closingEmphasis: string;
  };
  whatIFound: {
    title: string;
    intro: string;
    items: {
      num: number;
      title: string;
      body: string;
    }[];
  };
  theDecisionPath: {
    title: string;
    table: DecisionRow[];
    conclusion: string;
  };
  whatIShipped: {
    title: string;
    intro: string;
    bullets: string[];
    metricsNote: string;
  };
  whatIGotWrong: {
    title: string;
    intro: string;
    mistakes: {
      title: string;
      body: string;
    }[];
    conclusion: string;
  };
  whereItStands: {
    title: string;
    body: string;
  };
  whatIWouldDoNext: {
    title: string;
    items: string[];
  };
  whatILearned: {
    title: string;
    lessons: {
      num: number;
      headline: string;
      body: string;
    }[];
  };
  links: {
    tradeoffAnalysisUrl: string;
    repoUrl: string;
    demoBuildUrl: string;
  };
}

export const CASE_STUDY: CaseStudyData = {
  title: "Agent-D: Why I Removed the AI",
  subtitle: "A case study in product judgment",
  author: "Pranshul Chopra",
  date: "October 2026",
  statusText: "Status: in progress, pending the client's decision and a legal review",
  statusBanner: "Case study in progress. The product is a demo build, pending legal review.",
  inShort:
    "A small clinic asked me for an AI assistant for patient records. I built one, then spent a few days finding out why it was the wrong product. I removed the AI and shipped a simpler, more predictable tracker. This is the story of that decision, including what I got wrong.",

  toc: [
    { id: "the-ask", title: "The ask", num: "1" },
    { id: "what-i-built-first", title: "What I built first", num: "2" },
    { id: "what-i-found", title: "What I found", num: "3" },
    { id: "the-decision-path", title: "The decision path", num: "4" },
    { id: "what-i-shipped", title: "What I shipped", num: "5" },
    { id: "what-i-got-wrong", title: "What I got wrong", num: "6" },
    { id: "where-it-stands", title: "Where it stands", num: "7" },
    { id: "what-i-would-do-next", title: "What I would do next", num: "8" },
    { id: "what-i-learned", title: "What I learned", num: "9" },
    { id: "links", title: "Project links", num: "10" },
  ],

  theAsk: {
    title: "1. The ask",
    paragraphs: [
      "A single-physician consulting clinic wanted an AI assistant. Patient information was spread across files, and before each consultation the doctor had to rebuild the picture from scratch. The doctor was keen on AI and wanted it in the workflow.",
      "I was the only developer, and a student. The first working version took a couple of days, so the interesting work was never going to be the code. It was deciding what the product should be.",
    ],
  },

  whatIBuiltFirst: {
    title: "2. What I built first",
    intro: "The early versions were an AI-assisted workstation for the doctor:",
    bullets: [
      "A desktop app that runs locally on the clinic's Windows computer.",
      "A structured, versioned \"context artifact\" for each patient, with side-by-side comparisons between versions.",
      "A calendar, consultations, and a follow-ups board.",
      "A chat assistant using a cloud model, with several API keys rotated to stay inside free quotas.",
      "An approval step: the assistant could only propose changes, and nothing was saved until the doctor approved it.",
    ],
    closingEmphasis:
      "The approval step turned out to be the most important design choice, and it survived every later change.",
  },

  whatIFound: {
    title: "3. What I found",
    intro: "Each question I asked about the product opened a bigger one.",
    items: [
      {
        num: 1,
        title: "Provider terms",
        body: "Free-tier cloud AI services can use submitted content to improve their products, and human reviewers may read it. That rules them out for patient information. Paid terms are better, but they bring their own requirements: a processor agreement, consent, and a position on sending data abroad.",
      },
      {
        num: 2,
        title: "Two legal frameworks on different dates",
        body: "India's older IT Act rules treat medical records as sensitive data now, and the newer data protection rules start applying their main duties around May 2027. The clinic is the party responsible, not the developer.",
      },
      {
        num: 3,
        title: "De-identification has limits",
        body: "I replaced names with aliases, but a doctor's free-text notes contain names, rare conditions, and identifying details that no simple filter catches reliably.",
      },
      {
        num: 4,
        title: "Consent",
        body: "Patients should know an AI is involved and be able to say no, which means notice, a consent record, and a way to withdraw. Minors and patients under guardianship need special handling.",
      },
      {
        num: 5,
        title: "Medical device questions",
        body: "Software that suggests diagnoses or treatments can attract device regulation. The less the product does in that direction, the easier the position.",
      },
      {
        num: 6,
        title: "My own capacity",
        body: "One developer cannot carry a continuing compliance workload. A smaller scope was itself a risk reducer.",
      },
    ],
  },

  theDecisionPath: {
    title: "4. The decision path",
    table: [
      {
        option: "Cloud AI",
        whatItGaveMe: "Best quality, fastest to build",
        whyIMovedOn:
          "Patient information leaves the clinic; heaviest legal burden; needs paid terms, consent, and agreements",
      },
      {
        option: "Local AI",
        whatItGaveMe: "Nothing leaves the computer",
        whyIMovedOn:
          "Small models make more mistakes; needs capable hardware; slow on ordinary clinic computers; still raises questions about clinical suggestions",
      },
      {
        option: "Rule-based suggestions",
        whatItGaveMe: "Predictable, explainable, fast, runs anywhere",
        whyIMovedOn:
          "They can miss things, so the doctor's approval step stays essential",
      },
    ],
    conclusion:
      "What made the decision easier was writing a tradeoff analysis for the doctor instead of arguing in chat. It set out the three paths side by side, with legal burden, cost, effort, and risk for each. The doctor could see the costs without having to take my word for them.",
  },

  whatIShipped: {
    title: "5. What I shipped",
    intro:
      "Version 0.5.0 removed all AI code, the cloud routes, and the key handling. In its place:",
    bullets: [
      "Fixed rules that scan visit notes for things like medication changes and lab orders, and propose entries, each shown as a before-and-after comparison for the doctor to approve or reject.",
      "Versioned patient artifacts, an audit trail, a calendar, consultations, and a follow-ups board.",
      "An encrypted local database on the clinic computer.",
    ],
    metricsNote:
      "Removing the AI also removed around 5,000 lines of code, and the automated tests went from about 32 seconds to under one second. (These figures come from the project's release notes; verify them again before publishing.)",
  },

  whatIGotWrong: {
    title: "6. What I got wrong",
    intro: "This part matters as much as the rest.",
    mistakes: [
      {
        title: "I overclaimed",
        body: "My early release notes and landing page used words like \"compliant\" and \"production-ready\". Removing AI reduces legal exposure; it does not make a clinic compliant. Notice, consent, retention, and a breach plan are separate work, and a lawyer has to review them.",
      },
      {
        title: "I removed the demo banner too soon",
        body: "I had told the doctor, in writing, to use only invented data until the legal review. The app should have said the same thing on screen.",
      },
      {
        title: "The rule-based extractor has its own failure modes",
        body: "Rules don't hallucinate, but they misread negation (\"no hypertension\"), family history, and stopped medications unless tested for. The approval step catches wrong suggestions, but a missed one gives false confidence.",
      },
      {
        title: "The encryption key was tied to the machine",
        body: "That is fine until the computer fails, at which point backups may be unreadable. Backup and restore are still in progress.",
      },
    ],
    conclusion:
      "I found these by reviewing my own work against what I had promised, and fixed or wrote down each one.",
  },

  whereItStands: {
    title: "7. Where it stands",
    body: "Agent-D is a demo build. No real patient information is used, and it will not be until the clinic has had a legal review. The doctor has the proposals, the concerns, the recommended steps, and notice that the AI was removed. The next decision is theirs.",
  },

  whatIWouldDoNext: {
    title: "8. What I would do next",
    items: [
      "Support the clinic's legal review, with a plain-language list of questions.",
      "Run a small, supervised pilot with consenting adult patients once there is sign-off.",
      "Measure where time is actually lost (preparation, note-writing, missed follow-ups) before adding anything.",
      "Test a local model on the clinic's own computer, and bring AI back only for a task where it earns its place.",
    ],
  },

  whatILearned: {
    title: "9. What I learned",
    lessons: [
      {
        num: 1,
        headline: "The product is the decision, not the feature list.",
        body: "Removing the headline feature made the product safer, faster, and easier to explain.",
      },
      {
        num: 2,
        headline: "Write the tradeoffs down.",
        body: "A comparison document did more than any argument.",
      },
      {
        num: 3,
        headline: "Hold your own claims to a higher standard than anyone else's.",
        body: "The riskiest sentences in the project were ones I wrote about my own software.",
      },
    ],
  },

  links: {
    tradeoffAnalysisUrl: "#",
    repoUrl: "https://github.com/Pranshul-Chopra/Agent-D",
    demoBuildUrl: "https://github.com/Pranshul-Chopra/Agent-D/releases",
  },
};
