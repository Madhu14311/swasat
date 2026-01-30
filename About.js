import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Linking,
  Alert,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function About() {
  return <EgovAboutPage />;
}

function EgovAboutPage() {
  const [lang, setLang] = useState("EN");
  const [compactMode, setCompactMode] = useState(false);

  const DATA = useMemo(() => getContent(lang), [lang]);

  const openLink = async (url) => {
    try {
      const ok = await Linking.canOpenURL(url);
      if (!ok) return Alert.alert(DATA.common.cannotOpenTitle, url);
      Linking.openURL(url);
    } catch (e) {
      Alert.alert(DATA.common.errorTitle, DATA.common.errorOpenLink);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={["#0b5cab", "#083a73"]} style={styles.topBar}>
        <View style={{ flex: 1 }}>
          <Text style={styles.topTitle}>{DATA.headerTitle}</Text>
          <Text style={styles.topSub}>{DATA.headerSubtitle}</Text>
        </View>

        <View style={styles.langRow}>
          <Pressable
            onPress={() => setLang("EN")}
            style={[styles.langPill, lang === "EN" && styles.langPillActive]}
          >
            <Text style={[styles.langText, lang === "EN" && styles.langTextActive]}>EN</Text>
          </Pressable>

          <Pressable
            onPress={() => setLang("HI")}
            style={[styles.langPill, lang === "HI" && styles.langPillActive]}
          >
            <Text style={[styles.langText, lang === "HI" && styles.langTextActive]}>हिं</Text>
          </Pressable>

          <Pressable
            onPress={() => setLang("TE")}
            style={[styles.langPill, lang === "TE" && styles.langPillActive]}
          >
            <Text style={[styles.langText, lang === "TE" && styles.langTextActive]}>తెలు</Text>
          </Pressable>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Card>
          <View style={styles.heroRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.h1}>{DATA.heroTitle}</Text>
              <Text style={styles.p}>{DATA.heroDesc}</Text>

              <View style={styles.chipRow}>
                {DATA.heroChips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </View>
            </View>

            <Image source={{ uri: DATA.heroIcon }} style={styles.heroIcon} resizeMode="contain" />
          </View>

          <View style={styles.compactRow}>
            <Text style={styles.smallMuted}>{DATA.compactLabel}</Text>
            <Switch value={compactMode} onValueChange={setCompactMode} />
          </View>
        </Card>

        <Section icon={DATA.sec1.icon} title={DATA.sec1.title} subtitle={DATA.sec1.subtitle} body={DATA.sec1.body}>
          <Grid2>
            {DATA.sec1.pillars.map((x) => (
              <MiniCard key={x.title} icon={x.icon} title={x.title} desc={x.desc} compact={compactMode} />
            ))}
          </Grid2>
        </Section>

        <Section icon={DATA.sec2.icon} title={DATA.sec2.title} subtitle={DATA.sec2.subtitle} body={DATA.sec2.body}>
          <View style={styles.table}>
            {DATA.sec2.compare.map((row, idx) => (
              <View key={idx} style={styles.tableRow}>
                <View style={styles.tableCellLeft}>
                  <Text style={styles.tableHead}>{DATA.sec2.leftLabel}</Text>
                  <Text style={styles.tableText}>{row.old}</Text>
                </View>
                <View style={styles.tableCellRight}>
                  <Text style={styles.tableHead}>{DATA.sec2.rightLabel}</Text>
                  <Text style={styles.tableText}>{row.new}</Text>
                </View>
              </View>
            ))}
          </View>
        </Section>

        <Section icon={DATA.sec3.icon} title={DATA.sec3.title} subtitle={DATA.sec3.subtitle} body={DATA.sec3.body}>
          <Grid2>
            {DATA.sec3.modules.map((m) => (
              <MiniCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} compact={compactMode} />
            ))}
          </Grid2>
        </Section>

        <Section icon={DATA.sec4.icon} title={DATA.sec4.title} subtitle={DATA.sec4.subtitle} body={DATA.sec4.body}>
          <FlowSteps steps={DATA.sec4.steps} compact={compactMode} />
          <InfoNote text={DATA.sec4.note} />
        </Section>

        <Section icon={DATA.sec5.icon} title={DATA.sec5.title} subtitle={DATA.sec5.subtitle} body={DATA.sec5.body}>
          <Grid2>
            <EscalationCard
              title={DATA.sec5.policeTitle}
              icon={DATA.sec5.policeIcon}
              chain={DATA.sec5.policeChain}
              sla={DATA.sec5.sla}
            />
            <EscalationCard
              title={DATA.sec5.revenueTitle}
              icon={DATA.sec5.revenueIcon}
              chain={DATA.sec5.revenueChain}
              sla={DATA.sec5.sla}
            />
          </Grid2>
          <InfoNote text={DATA.sec5.note} />
        </Section>

        <Section icon={DATA.sec6.icon} title={DATA.sec6.title} subtitle={DATA.sec6.subtitle} body={DATA.sec6.body}>
          <Grid2>
            {DATA.sec6.items.map((s) => (
              <MiniCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} compact={compactMode} />
            ))}
          </Grid2>

          <Pressable onPress={() => openLink(DATA.sec6.policyUrl)} style={styles.linkBtn}>
            <Text style={styles.linkBtnText}>{DATA.sec6.policyCta}</Text>
          </Pressable>
        </Section>

        <Section icon={DATA.sec7.icon} title={DATA.sec7.title} subtitle={DATA.sec7.subtitle} body={DATA.sec7.body}>
          <View style={styles.roleWrap}>
            {DATA.sec7.roles.map((r) => (
              <RolePill key={r.label} icon={r.icon} label={r.label} />
            ))}
          </View>
        </Section>

        <Section icon={DATA.sec8.icon} title={DATA.sec8.title} subtitle={DATA.sec8.subtitle} body={DATA.sec8.body}>
          <View style={styles.kpiRow}>
            {DATA.sec8.kpis.map((k) => (
              <Kpi key={k.label} value={k.value} label={k.label} />
            ))}
          </View>

          <View style={styles.bullets}>
            {DATA.sec8.bullets.map((b, i) => (
              <Text key={i} style={styles.bulletText}>
                • {b}
              </Text>
            ))}
          </View>
        </Section>

        <Section icon={DATA.sec9.icon} title={DATA.sec9.title} subtitle={DATA.sec9.subtitle} body={DATA.sec9.body}>
          <SupportRow
            icon={DATA.sec9.phoneIcon}
            label={DATA.sec9.phoneLabel}
            value={DATA.sec9.phone}
            onPress={() => openLink(`tel:${DATA.sec9.phone}`)}
          />
          <SupportRow
            icon={DATA.sec9.mailIcon}
            label={DATA.sec9.mailLabel}
            value={DATA.sec9.mail}
            onPress={() => openLink(`mailto:${DATA.sec9.mail}`)}
          />
          <SupportRow
            icon={DATA.sec9.webIcon}
            label={DATA.sec9.webLabel}
            value={DATA.sec9.web}
            onPress={() => openLink(DATA.sec9.web)}
          />
          <SupportRow
            icon={DATA.sec9.faqIcon}
            label={DATA.sec9.faqLabel}
            value={DATA.sec9.faqText}
            onPress={() => Alert.alert(DATA.sec9.faqLabel, DATA.sec9.faqHint)}
          />
        </Section>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>{DATA.footer.appName}</Text>
          <Text style={styles.footerText}>
            {DATA.footer.versionLabel}: {DATA.footer.version}
          </Text>
          <Text style={styles.footerText}>
            {DATA.footer.lastUpdatedLabel}: {DATA.footer.lastUpdated}
          </Text>
          <Text style={styles.footerSmall}>{DATA.footer.disclaimer}</Text>

          <Pressable onPress={() => openLink(DATA.footer.termsUrl)} style={[styles.footerBtn, { marginTop: 12 }]}>
            <Text style={styles.footerBtnText}>{DATA.footer.termsCta}</Text>
          </Pressable>

          <Pressable onPress={() => openLink(DATA.footer.privacyUrl)} style={[styles.footerBtn, { marginTop: 10 }]}>
            <Text style={styles.footerBtnText}>{DATA.footer.privacyCta}</Text>
          </Pressable>
        </View>

        <View style={{ height: 26 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/** UI Components */
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

function Section({ icon, title, subtitle, body, children }) {
  return (
    <View style={{ marginTop: 14 }}>
      <Card>
        <View style={styles.sectionHeader}>
          <Image source={{ uri: icon }} style={styles.sectionIcon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.h2}>{title}</Text>
            <Text style={styles.muted}>{subtitle}</Text>
          </View>
        </View>
        {!!body && <Text style={styles.p}>{body}</Text>}
        <View style={{ height: 10 }} />
        {children}
      </Card>
    </View>
  );
}

function Chip({ children }) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{children}</Text>
    </View>
  );
}

function Grid2({ children }) {
  return <View style={styles.grid2}>{children}</View>;
}

function MiniCard({ icon, title, desc, compact }) {
  return (
    <View style={[styles.miniCard, compact && { padding: 10 }]}>
      <View style={styles.miniTop}>
        <Image source={{ uri: icon }} style={styles.miniIcon} />
        <Text style={styles.miniTitle} numberOfLines={2}>
          {title}
        </Text>
      </View>
      {!compact && (
        <Text style={styles.miniDesc} numberOfLines={3}>
          {desc}
        </Text>
      )}
    </View>
  );
}

function FlowSteps({ steps, compact }) {
  return (
    <View style={styles.flowWrap}>
      {steps.map((s, i) => (
        <View key={i} style={styles.flowRow}>
          <View style={styles.flowNo}>
            <Text style={styles.flowNoText}>{i + 1}</Text>
          </View>
          <Text style={[styles.flowText, compact && { fontSize: 13 }]}>{s}</Text>
        </View>
      ))}
    </View>
  );
}

function InfoNote({ text }) {
  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{text}</Text>
    </View>
  );
}

function EscalationCard({ title, icon, chain, sla }) {
  return (
    <View style={styles.esCard}>
      <View style={styles.esHeader}>
        <Image source={{ uri: icon }} style={styles.esIcon} />
        <View style={{ flex: 1 }}>
          <Text style={styles.esTitle}>{title}</Text>
          <Text style={styles.esSla}>{sla}</Text>
        </View>
      </View>

      <View style={styles.esChain}>
        {chain.map((x, idx) => (
          <View key={idx} style={styles.esNode}>
            <Text style={styles.esNodeText}>{x}</Text>
            {idx !== chain.length - 1 && <Text style={styles.esArrow}>↓</Text>}
          </View>
        ))}
      </View>
    </View>
  );
}

function RolePill({ icon, label }) {
  return (
    <View style={styles.rolePill}>
      <Image source={{ uri: icon }} style={styles.roleIcon} />
      <Text style={styles.roleText}>{label}</Text>
    </View>
  );
}

function Kpi({ value, label }) {
  return (
    <View style={styles.kpi}>
      <Text style={styles.kpiValue}>{value}</Text>
      <Text style={styles.kpiLabel}>{label}</Text>
    </View>
  );
}

function SupportRow({ icon, label, value, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.supportRow}>
      <Image source={{ uri: icon }} style={styles.supportIcon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.supportLabel}>{label}</Text>
        <Text style={styles.supportValue}>{value}</Text>
      </View>
      <Text style={styles.supportGo}>›</Text>
    </Pressable>
  );
}

/** Content (FULL EN / HI / TE) */
function getContent(lang) {
  const ICONS = {
    gov: "https://img.icons8.com/color/96/government.png",
    shield: "https://img.icons8.com/color/96/security-checked.png",
    chart: "https://img.icons8.com/color/96/combo-chart--v1.png",
    workflow: "https://img.icons8.com/color/96/flow-chart.png",
    service: "https://img.icons8.com/color/96/services.png",
    grievance: "https://img.icons8.com/color/96/complaint.png",
    police: "https://img.icons8.com/color/96/policeman-male.png",
    revenue: "https://img.icons8.com/color/96/land-sales.png",
    bell: "https://img.icons8.com/color/96/appointment-reminders--v1.png",
    survey: "https://img.icons8.com/color/96/survey.png",
    doc: "https://img.icons8.com/color/96/documents.png",
    user: "https://img.icons8.com/color/96/user-group-man-woman.png",
    phone: "https://img.icons8.com/color/96/phone.png",
    mail: "https://img.icons8.com/color/96/apple-mail.png",
    web: "https://img.icons8.com/color/96/domain.png",
    faq: "https://img.icons8.com/color/96/help.png",
    handshake: "https://img.icons8.com/color/96/handshake.png",
    speed: "https://img.icons8.com/color/96/rocket.png",
    transparent: "https://img.icons8.com/color/96/visible--v1.png",
    assign: "https://img.icons8.com/color/96/task.png",
    report: "https://img.icons8.com/color/96/report-card.png",
    vault: "https://img.icons8.com/color/96/lock--v1.png",
    audit: "https://img.icons8.com/color/96/activity-history.png",
  };

  const EN = {
    common: {
      cannotOpenTitle: "Cannot open link",
      errorTitle: "Error",
      errorOpenLink: "Unable to open link.",
    },

    headerTitle: "About e-Governance",
    headerSubtitle: "Citizen-first • Transparent • Accountable",

    heroTitle: "Digital Governance for Faster Services",
    heroDesc:
      "This app connects citizens with government departments for services, grievances, crime reports, and public transparency—using real-time tracking and accountability.",
    heroIcon: ICONS.gov,
    heroChips: ["Services", "Grievance", "Crime", "Dashboards", "Surveys"],
    compactLabel: "Compact view (hide long descriptions)",

    sec1: {
      icon: ICONS.handshake,
      title: "What is e-Governance?",
      subtitle: "Digital services • Citizen voice • Trust",
      body:
        "e-Governance means delivering government services and citizen support using digital systems so that everything is faster, trackable, and transparent.",
      pillars: [
        { icon: ICONS.service, title: "Digital Services", desc: "Apply, upload docs, pay fees (if any) and track status." },
        { icon: ICONS.grievance, title: "Citizen Voice", desc: "Raise problems/grievances with evidence and location." },
        { icon: ICONS.transparent, title: "Transparency", desc: "Track SLA, officer actions, timelines and dashboards." },
        { icon: ICONS.speed, title: "Faster Outcomes", desc: "Auto-routing + escalation improves delivery speed." },
      ],
    },

    sec2: {
      icon: ICONS.chart,
      title: "Why this app exists",
      subtitle: "From manual delays to digital accountability",
      body: "The platform reduces queues, improves tracking, and creates an auditable process for every request.",
      leftLabel: "Old way",
      rightLabel: "New way",
      compare: [
        { old: "No tracking / unclear status", new: "Real-time status & timeline" },
        { old: "Manual escalation", new: "Auto escalation on SLA breach" },
        { old: "Paper-based records", new: "Digital audit trail + reports" },
        { old: "Fragmented departments", new: "Unified citizen experience" },
      ],
    },

    sec3: {
      icon: ICONS.service,
      title: "Core Modules",
      subtitle: "Everything needed for a full governance platform",
      body: "Modules can be enabled per state/department. The app supports both citizens and officers.",
      modules: [
        { icon: ICONS.grievance, title: "Post a Problem", desc: "Road, water, electricity, sanitation, etc." },
        { icon: ICONS.doc, title: "Post a Grievance", desc: "File official grievances with documents, SLA tracking and escalation." },
        { icon: ICONS.police, title: "Post a Crime", desc: "Incident reporting with attachments and routing." },
        { icon: ICONS.assign, title: "Officer Console", desc: "Assign, update status, add notes, track SLA." },
        { icon: ICONS.chart, title: "Dashboards", desc: "KPI, SLA, workload, performance and trends." },
        { icon: ICONS.report, title: "Monthly Reports", desc: "Auto-generated summary for leadership review." },
        { icon: ICONS.survey, title: "Surveys (MP/MLA)", desc: "Citizen feedback polls, MCQs and analytics." },
        { icon: ICONS.doc, title: "Document Uploads", desc: "Upload proofs, forms, images and PDFs safely." },
        { icon: ICONS.bell, title: "Notifications", desc: "Push/SMS updates (configurable)." },
      ],
    },

    sec4: {
      icon: ICONS.workflow,
      title: "How it works",
      subtitle: "Simple steps, clear accountability",
      body: "",
      steps: [
        "Citizen submits request with category + location + evidence",
        "System auto-maps to department/ward/police station",
        "Officer gets assignment and takes action",
        "Status updates are visible to citizen in real-time",
        "Citizen rates resolution and request closes with audit log",
      ],
      note: "Every action is digitally logged for transparency and future audits.",
    },

    sec5: {
      icon: ICONS.audit,
      title: "Escalation & Accountability",
      subtitle: "Automatic escalation if not resolved within SLA",
      body:
        "If the assigned officer does not resolve within the time limit, the request escalates to higher authority automatically.",
      sla: "Typical SLA escalation: +24 hours per level (configurable)",
      policeTitle: "Police Escalation",
      policeIcon: ICONS.police,
      policeChain: ["Sub Inspector (SI)", "Circle Inspector (CI)", "DSP / ACP", "Superintendent of Police (SP)"],
      revenueTitle: "Revenue Escalation",
      revenueIcon: ICONS.revenue,
      revenueChain: ["VRO", "Revenue Inspector (RI)", "MRO", "RDO", "District Collector"],
      note: "Escalation rules can vary by state/department and can be configured in admin settings.",
    },

    sec6: {
      icon: ICONS.shield,
      title: "Security & Privacy",
      subtitle: "Protection, encryption, audit trails",
      body: "The platform follows secure practices to protect citizen data and ensure only authorized users access cases.",
      items: [
        { icon: ICONS.vault, title: "Secure Storage", desc: "Encrypted storage for citizen data & documents." },
        { icon: ICONS.shield, title: "Role-Based Access", desc: "Controlled access for citizens, officers and admins." },
        { icon: ICONS.audit, title: "Audit Logs", desc: "All actions are logged with timestamp and user." },
        { icon: ICONS.doc, title: "Data Retention", desc: "Retention and masking policies can be enabled." },
      ],
      policyCta: "Open Security / Privacy Policy",
      policyUrl: "https://example.com/privacy",
    },

    sec7: {
      icon: ICONS.user,
      title: "Who can use this app?",
      subtitle: "Citizens + Officers + Departments",
      body: "The app supports different roles with different capabilities.",
      roles: [
        { icon: "https://img.icons8.com/color/96/user.png", label: "Citizen" },
        { icon: "https://img.icons8.com/color/96/policeman-male.png", label: "Officer" },
        { icon: "https://img.icons8.com/color/96/administrator-male.png", label: "Admin" },
        { icon: "https://img.icons8.com/color/96/organization.png", label: "Department" },
      ],
    },

    sec8: {
      icon: ICONS.chart,
      title: "Impact & Vision",
      subtitle: "Measurable improvements in governance",
      body: "A good governance platform must show outcomes and build trust with data.",
      kpis: [
        { value: "24×7", label: "Availability" },
        { value: "SLA", label: "Time-bound resolution" },
        { value: "100%", label: "Auditability" },
      ],
      bullets: [
        "Faster grievance resolution",
        "Better department coordination",
        "Transparent timelines and dashboards",
        "Citizen feedback and service quality improvement",
      ],
    },

    sec9: {
      icon: ICONS.faq,
      title: "Support & Help",
      subtitle: "Contact, FAQ and help center",
      body: "If you face issues, contact support or check FAQs.",
      phoneIcon: ICONS.phone,
      phoneLabel: "Toll-free / Phone",
      phone: "1800-000-000",
      mailIcon: ICONS.mail,
      mailLabel: "Email",
      mail: "support@example.com",
      webIcon: ICONS.web,
      webLabel: "Website",
      web: "https://example.com",
      faqIcon: ICONS.faq,
      faqLabel: "FAQ",
      faqText: "View frequently asked questions",
      faqHint: "Add your FAQ content here (login, docs, tracking, escalation, privacy).",
    },

    footer: {
      appName: "e-Governance Mobile App",
      versionLabel: "App Version",
      version: "1.0.0",
      lastUpdatedLabel: "Last Updated",
      lastUpdated: "27 Jan 2026",
      disclaimer: "Template About page — replace contacts, URLs and policy references with official info.",
      termsCta: "Terms & Conditions",
      privacyCta: "Privacy Policy",
      termsUrl: "https://example.com/terms",
      privacyUrl: "https://example.com/privacy",
    },
  };

  const HI = {
    ...EN,
    common: {
      cannotOpenTitle: "लिंक नहीं खुल रहा",
      errorTitle: "त्रुटि",
      errorOpenLink: "लिंक खोलने में समस्या हुई।",
    },

    headerTitle: "ई-गवर्नेंस के बारे में",
    headerSubtitle: "नागरिक-प्रथम • पारदर्शी • जवाबदेह",

    heroTitle: "तेज़ सेवाओं के लिए डिजिटल गवर्नेंस",
    heroDesc:
      "यह ऐप नागरिकों को सरकारी विभागों से जोड़ता है—सेवाएँ, शिकायत/ग्रेविएंस, अपराध रिपोर्टिंग और पारदर्शिता के लिए—रीयल-टाइम ट्रैकिंग और जवाबदेही के साथ।",
    heroChips: ["सेवाएँ", "शिकायत", "अपराध", "डैशबोर्ड", "सर्वे"],
    compactLabel: "कॉम्पैक्ट व्यू (लंबे विवरण छुपाएँ)",

    sec1: {
      ...EN.sec1,
      title: "ई-गवर्नेंस क्या है?",
      subtitle: "डिजिटल सेवाएँ • नागरिक आवाज़ • भरोसा",
      body:
        "ई-गवर्नेंस का मतलब है डिजिटल सिस्टम के माध्यम से सरकारी सेवाएँ और नागरिक सहायता देना ताकि प्रक्रिया तेज़, ट्रैक करने योग्य और पारदर्शी हो।",
      pillars: [
        { icon: ICONS.service, title: "डिजिटल सेवाएँ", desc: "आवेदन करें, दस्तावेज़ अपलोड करें, (यदि शुल्क हो) भुगतान करें और स्टेटस ट्रैक करें।" },
        { icon: ICONS.grievance, title: "नागरिक आवाज़", desc: "सबूत और लोकेशन के साथ समस्या/ग्रेविएंस दर्ज करें।" },
        { icon: ICONS.transparent, title: "पारदर्शिता", desc: "SLA, अधिकारी कार्रवाई, टाइमलाइन और डैशबोर्ड देखें।" },
        { icon: ICONS.speed, title: "तेज़ परिणाम", desc: "ऑटो-रूटिंग + एस्केलेशन से समाधान तेज़ होता है।" },
      ],
    },

    sec2: {
      ...EN.sec2,
      title: "यह ऐप क्यों बनाया गया",
      subtitle: "मैनुअल देरी से डिजिटल जवाबदेही तक",
      body: "यह प्लेटफ़ॉर्म कतारें कम करता है, ट्रैकिंग बेहतर बनाता है, और हर अनुरोध के लिए ऑडिट-योग्य प्रक्रिया देता है।",
      leftLabel: "पुराना तरीका",
      rightLabel: "नया तरीका",
      compare: [
        { old: "ट्रैकिंग नहीं / स्टेटस अस्पष्ट", new: "रीयल-टाइम स्टेटस और टाइमलाइन" },
        { old: "मैनुअल एस्केलेशन", new: "SLA टूटने पर ऑटो एस्केलेशन" },
        { old: "कागज़ आधारित रिकॉर्ड", new: "डिजिटल ऑडिट ट्रेल + रिपोर्ट" },
        { old: "विभाग अलग-अलग", new: "एकीकृत नागरिक अनुभव" },
      ],
    },

    sec3: {
      ...EN.sec3,
      title: "मुख्य मॉड्यूल",
      subtitle: "पूरे गवर्नेंस प्लेटफ़ॉर्म के लिए आवश्यक मॉड्यूल",
      body: "राज्य/विभाग के अनुसार मॉड्यूल सक्षम किए जा सकते हैं। ऐप नागरिकों और अधिकारियों—दोनों को सपोर्ट करता है।",
      modules: [
        { icon: ICONS.grievance, title: "समस्या पोस्ट करें", desc: "सड़क, पानी, बिजली, स्वच्छता आदि।" },
        { icon: ICONS.doc, title: "ग्रेविएंस पोस्ट करें", desc: "दस्तावेज़ के साथ आधिकारिक ग्रेविएंस दर्ज करें, SLA ट्रैकिंग और एस्केलेशन सहित।" },
        { icon: ICONS.police, title: "अपराध पोस्ट करें", desc: "अटैचमेंट और रूटिंग के साथ घटना रिपोर्टिंग।" },
        { icon: ICONS.assign, title: "ऑफिसर कंसोल", desc: "असाइन करें, स्टेटस अपडेट करें, नोट जोड़ें, SLA ट्रैक करें।" },
        { icon: ICONS.chart, title: "डैशबोर्ड", desc: "KPI, SLA, वर्कलोड, परफ़ॉर्मेंस और ट्रेंड।" },
        { icon: ICONS.report, title: "मासिक रिपोर्ट", desc: "नेतृत्व समीक्षा के लिए ऑटो-जनरेटेड सारांश।" },
        { icon: ICONS.survey, title: "सर्वे (MP/MLA)", desc: "नागरिक फीडबैक पोल, MCQ और एनालिटिक्स।" },
        { icon: ICONS.doc, title: "डॉक्यूमेंट अपलोड", desc: "प्रूफ, फ़ॉर्म, इमेज और PDF सुरक्षित अपलोड।" },
        { icon: ICONS.bell, title: "नोटिफिकेशन", desc: "पुश/SMS अपडेट (कॉन्फ़िगरेबल)।" },
      ],
    },

    sec4: {
      ...EN.sec4,
      title: "कैसे काम करता है",
      subtitle: "सरल स्टेप्स, स्पष्ट जवाबदेही",
      steps: [
        "नागरिक कैटेगरी + लोकेशन + सबूत के साथ अनुरोध सबमिट करता है",
        "सिस्टम ऑटो-मैप करके विभाग/वार्ड/पुलिस स्टेशन तय करता है",
        "ऑफिसर को असाइनमेंट मिलता है और कार्रवाई करता है",
        "स्टेटस अपडेट नागरिक को रीयल-टाइम में दिखते हैं",
        "नागरिक रेटिंग देता है और अनुरोध ऑडिट लॉग के साथ बंद होता है",
      ],
      note: "हर कार्रवाई पारदर्शिता और भविष्य के ऑडिट के लिए डिजिटल रूप से लॉग होती है।",
    },

    sec5: {
      ...EN.sec5,
      title: "एस्केलेशन और जवाबदेही",
      subtitle: "SLA में समाधान न होने पर ऑटो एस्केलेशन",
      body:
        "यदि असाइन किए गए अधिकारी ने समय-सीमा के भीतर समाधान नहीं किया, तो अनुरोध अपने आप उच्च अधिकारी को एस्केलेट हो जाता है।",
      sla: "सामान्य SLA एस्केलेशन: हर स्तर पर +24 घंटे (कॉन्फ़िगरेबल)",
      policeTitle: "पुलिस एस्केलेशन",
      revenueTitle: "रेवेन्यू एस्केलेशन",
      note: "एस्केलेशन नियम राज्य/विभाग के अनुसार अलग हो सकते हैं और एडमिन सेटिंग्स में कॉन्फ़िगर किए जा सकते हैं।",
    },

    sec6: {
      ...EN.sec6,
      title: "सुरक्षा और गोपनीयता",
      subtitle: "सुरक्षा, एन्क्रिप्शन, ऑडिट ट्रेल",
      body: "यह प्लेटफ़ॉर्म नागरिक डेटा की सुरक्षा के लिए सुरक्षित प्रैक्टिस फॉलो करता है और केवल अधिकृत यूज़र को केस एक्सेस देता है।",
      items: [
        { icon: ICONS.vault, title: "सिक्योर स्टोरेज", desc: "नागरिक डेटा और दस्तावेज़ के लिए एन्क्रिप्टेड स्टोरेज।" },
        { icon: ICONS.shield, title: "रोल-बेस्ड एक्सेस", desc: "नागरिक, अधिकारी और एडमिन के लिए नियंत्रित एक्सेस।" },
        { icon: ICONS.audit, title: "ऑडिट लॉग", desc: "हर कार्रवाई यूज़र और टाइमस्टैम्प के साथ लॉग होती है।" },
        { icon: ICONS.doc, title: "डेटा रिटेंशन", desc: "रिटेंशन और मास्किंग पॉलिसी सक्षम की जा सकती है।" },
      ],
      policyCta: "सुरक्षा / गोपनीयता नीति खोलें",
    },

    sec7: {
      ...EN.sec7,
      title: "यह ऐप कौन उपयोग कर सकता है?",
      subtitle: "नागरिक + अधिकारी + विभाग",
      body: "ऐप अलग-अलग रोल के लिए अलग क्षमताएँ देता है।",
      roles: [
        { icon: "https://img.icons8.com/color/96/user.png", label: "नागरिक" },
        { icon: "https://img.icons8.com/color/96/policeman-male.png", label: "अधिकारी" },
        { icon: "https://img.icons8.com/color/96/administrator-male.png", label: "एडमिन" },
        { icon: "https://img.icons8.com/color/96/organization.png", label: "विभाग" },
      ],
    },

    sec8: {
      ...EN.sec8,
      title: "प्रभाव और विज़न",
      subtitle: "गवर्नेंस में मापने योग्य सुधार",
      body: "अच्छा गवर्नेंस प्लेटफ़ॉर्म परिणाम दिखाए और डेटा से भरोसा बनाए।",
      kpis: [
        { value: "24×7", label: "उपलब्धता" },
        { value: "SLA", label: "समयबद्ध समाधान" },
        { value: "100%", label: "ऑडिटेबिलिटी" },
      ],
      bullets: ["तेज़ समाधान", "बेहतर समन्वय", "पारदर्शी टाइमलाइन/डैशबोर्ड", "फीडबैक से सेवा सुधार"],
    },

    sec9: {
      ...EN.sec9,
      title: "सपोर्ट और सहायता",
      subtitle: "संपर्क, FAQ और हेल्प सेंटर",
      body: "यदि समस्या हो, सपोर्ट से संपर्क करें या FAQs देखें।",
      phoneLabel: "टोल-फ्री / फ़ोन",
      mailLabel: "ईमेल",
      webLabel: "वेबसाइट",
      faqLabel: "FAQ",
      faqText: "अक्सर पूछे जाने वाले प्रश्न देखें",
      faqHint: "यहाँ अपना FAQ कंटेंट जोड़ें (लॉगिन, डॉक्यूमेंट, ट्रैकिंग, एस्केलेशन, प्राइवेसी)।",
    },

    footer: {
      ...EN.footer,
      appName: "ई-गवर्नेंस मोबाइल ऐप",
      versionLabel: "ऐप वर्ज़न",
      lastUpdatedLabel: "अंतिम अपडेट",
      disclaimer: "यह एक टेम्पलेट About पेज है — आधिकारिक संपर्क/URL/नीतियाँ यहाँ अपडेट करें।",
      termsCta: "नियम और शर्तें",
      privacyCta: "गोपनीयता नीति",
    },
  };

  const TE = {
    ...EN,
    common: {
      cannotOpenTitle: "లింక్ ఓపెన్ కాలేదు",
      errorTitle: "లోపం",
      errorOpenLink: "లింక్ ఓపెన్ చేయలేకపోయాం.",
    },

    headerTitle: "ఈ-గవర్నెన్స్ గురించి",
    headerSubtitle: "పౌరుడు-ముందు • పారదర్శకత • బాధ్యత",

    heroTitle: "త్వరిత సేవల కోసం డిజిటల్ గవర్నెన్స్",
    heroDesc:
      "ఈ యాప్ పౌరులను ప్రభుత్వ విభాగాలతో కలుపుతుంది—సేవలు, ఫిర్యాదులు/గ్రీవెన్స్, నేర నివేదికలు, పారదర్శకత—రియల్-టైమ్ ట్రాకింగ్ మరియు బాధ్యతతో.",
    heroChips: ["సేవలు", "ఫిర్యాదు", "నేరం", "డ్యాష్‌బోర్డ్స్", "సర్వేలు"],
    compactLabel: "కాంపాక్ట్ వ్యూ (పొడవైన వివరణలు దాచు)",

    sec1: {
      ...EN.sec1,
      title: "ఈ-గవర్నెన్స్ అంటే ఏమిటి?",
      subtitle: "డిజిటల్ సేవలు • పౌరుల వాణి • నమ్మకం",
      body:
        "డిజిటల్ విధానాలతో ప్రభుత్వ సేవలు మరియు పౌర సహాయాన్ని అందించడం ద్వారా పని వేగంగా, ట్రాక్ చేయగలిగేలా, పారదర్శకంగా జరుగుతుంది.",
      pillars: [
        { icon: ICONS.service, title: "డిజిటల్ సేవలు", desc: "దరఖాస్తు చేయండి, డాక్యుమెంట్లు అప్లోడ్ చేయండి, (ఉంటే) ఫీజు చెల్లించి స్టేటస్ ట్రాక్ చేయండి." },
        { icon: ICONS.grievance, title: "పౌరుల వాణి", desc: "సాక్ష్యాలు, లొకేషన్‌తో సమస్య/గ్రీవెన్స్ నమోదు చేయండి." },
        { icon: ICONS.transparent, title: "పారదర్శకత", desc: "SLA, అధికారుల చర్యలు, టైమ్‌లైన్‌లు, డ్యాష్‌బోర్డ్స్ చూడండి." },
        { icon: ICONS.speed, title: "త్వరిత ఫలితాలు", desc: "ఆటో-రూటింగ్ + ఎస్కలేషన్ వల్ల పరిష్కారం వేగంగా అవుతుంది." },
      ],
    },

    sec2: {
      ...EN.sec2,
      title: "ఈ యాప్ ఎందుకు",
      subtitle: "మాన్యువల్ ఆలస్యాల నుంచి డిజిటల్ బాధ్యతకు",
      body: "ఈ ప్లాట్‌ఫామ్ క్యూలను తగ్గిస్తుంది, ట్రాకింగ్‌ను మెరుగుపరుస్తుంది, ప్రతి అభ్యర్థనకు ఆడిట్ చేయగల ప్రక్రియ ఇస్తుంది.",
      leftLabel: "పాత పద్ధతి",
      rightLabel: "కొత్త పద్ధతి",
      compare: [
        { old: "ట్రాకింగ్ లేదు / స్టేటస్ స్పష్టం కాదు", new: "రియల్-టైమ్ స్టేటస్ & టైమ్‌లైన్" },
        { old: "మాన్యువల్ ఎస్కలేషన్", new: "SLA ఉల్లంఘనపై ఆటో ఎస్కలేషన్" },
        { old: "పేపర్ రికార్డ్స్", new: "డిజిటల్ ఆడిట్ ట్రెయిల్ + రిపోర్ట్స్" },
        { old: "విభాగాలు విడిగా", new: "ఒకే పౌర అనుభవం" },
      ],
    },

    sec3: {
      ...EN.sec3,
      title: "కోర్ మాడ్యూల్స్",
      subtitle: "పూర్తి గవర్నెన్స్ ప్లాట్‌ఫామ్‌కు అవసరమైనవి",
      body: "రాష్ట్రం/విభాగం ప్రకారం మాడ్యూల్స్ ఎనేబుల్ చేయొచ్చు. పౌరులు మరియు అధికారులకు రెండింటికీ సపోర్ట్.",
      modules: [
        { icon: ICONS.grievance, title: "సమస్యను పోస్ట్ చేయండి", desc: "రోడ్లు, నీరు, విద్యుత్, పారిశుధ్యం మొదలైనవి." },
        { icon: ICONS.doc, title: "గ్రీవెన్స్‌ను పోస్ట్ చేయండి", desc: "డాక్యుమెంట్లతో అధికారిక గ్రీవెన్స్ నమోదు చేసి SLA ట్రాకింగ్/ఎస్కలేషన్ పొందండి." },
        { icon: ICONS.police, title: "నేరాన్ని పోస్ట్ చేయండి", desc: "అటాచ్మెంట్లు, రూటింగ్‌తో ఘటన నివేదిక." },
        { icon: ICONS.assign, title: "ఆఫీసర్ కన్సోల్", desc: "అసైన్, స్టేటస్ అప్‌డేట్, నోట్స్, SLA ట్రాక్." },
        { icon: ICONS.chart, title: "డ్యాష్‌బోర్డ్స్", desc: "KPI, SLA, వర్క్‌లోడ్, పనితీరు, ట్రెండ్స్." },
        { icon: ICONS.report, title: "మాసిక రిపోర్ట్స్", desc: "లీడర్‌షిప్ రివ్యూకి ఆటో-సారాంశం." },
        { icon: ICONS.survey, title: "సర్వేలు (MP/MLA)", desc: "పోల్స్, MCQ, అనలిటిక్స్‌తో ఫీడ్‌బ్యాక్." },
        { icon: ICONS.doc, title: "డాక్యుమెంట్ అప్లోడ్‌లు", desc: "ప్రూఫ్‌లు, ఫారమ్స్, ఇమేజెస్, PDFలను సురక్షితంగా అప్లోడ్ చేయండి." },
        { icon: ICONS.bell, title: "నోటిఫికేషన్స్", desc: "పుష్/SMS అప్‌డేట్స్ (కాన్ఫిగరేబుల్)." },
      ],
    },

    sec4: {
      ...EN.sec4,
      title: "ఇది ఎలా పనిచేస్తుంది",
      subtitle: "సులువు స్టెప్స్, స్పష్టమైన బాధ్యత",
      steps: [
        "పౌరుడు కేటగిరీ + లొకేషన్ + సాక్ష్యాలతో అభ్యర్థనను సబ్మిట్ చేస్తాడు",
        "సిస్టమ్ ఆటో-మ్యాప్ చేసి విభాగం/వార్డ్/పోలీస్ స్టేషన్‌ను నిర్ణయిస్తుంది",
        "ఆఫీసర్‌కు అసైన్ అవుతుంది, చర్య తీసుకుంటారు",
        "స్టేటస్ అప్‌డేట్స్ పౌరుడికి రియల్-టైమ్‌లో కనిపిస్తాయి",
        "పౌరుడు రేటింగ్ ఇస్తాడు, అభ్యర్థన ఆడిట్ లాగ్‌తో క్లోజ్ అవుతుంది",
      ],
      note: "ప్రతి చర్య పారదర్శకత మరియు భవిష్యత్ ఆడిట్ల కోసం డిజిటల్‌గా లాగ్ అవుతుంది.",
    },

    sec5: {
      ...EN.sec5,
      title: "ఎస్కలేషన్ & బాధ్యత",
      subtitle: "SLA లో పరిష్కారం కాకపోతే ఆటో ఎస్కలేషన్",
      body:
        "అసైన్ అయిన ఆఫీసర్ సమయ పరిమితిలో పరిష్కరించకపోతే, అభ్యర్థన ఆటోమేటిక్‌గా పై అధికారికి ఎస్కలేట్ అవుతుంది.",
      sla: "సాధారణ SLA ఎస్కలేషన్: ప్రతి స్థాయికి +24 గంటలు (కాన్ఫిగరేబుల్)",
      policeTitle: "పోలీస్ ఎస్కలేషన్",
      revenueTitle: "రెవెన్యూ ఎస్కలేషన్",
      note: "ఎస్కలేషన్ నియమాలు రాష్ట్రం/విభాగం ప్రకారం మారొచ్చు; అడ్మిన్ సెట్టింగ్స్‌లో కాన్ఫిగర్ చేయొచ్చు.",
    },

    sec6: {
      ...EN.sec6,
      title: "సెక్యూరిటీ & ప్రైవసీ",
      subtitle: "రక్షణ, ఎన్‌క్రిప్షన్, ఆడిట్ ట్రెయిల్స్",
      body: "పౌరుల డేటాను రక్షించేందుకు సురక్షిత పద్ధతులు పాటిస్తుంది; అనుమతి ఉన్నవాళ్లకే కేసుల యాక్సెస్ ఉంటుంది.",
      items: [
        { icon: ICONS.vault, title: "సురక్షిత నిల్వ", desc: "పౌర డేటా & డాక్యుమెంట్లకు ఎన్‌క్రిప్టెడ్ స్టోరేజ్." },
        { icon: ICONS.shield, title: "రోల్-బేస్డ్ యాక్సెస్", desc: "పౌరులు, అధికారులు, అడ్మిన్‌లకు నియంత్రిత యాక్సెస్." },
        { icon: ICONS.audit, title: "ఆడిట్ లాగ్స్", desc: "ప్రతి చర్య టైమ్‌స్టాంప్ & యూజర్‌తో లాగ్ అవుతుంది." },
        { icon: ICONS.doc, title: "డేటా రిటెన్షన్", desc: "రిటెన్షన్/మాస్కింగ్ పాలసీలు ఎనేబుల్ చేయొచ్చు." },
      ],
      policyCta: "సెక్యూరిటీ / ప్రైవసీ పాలసీ ఓపెన్ చేయండి",
    },

    sec7: {
      ...EN.sec7,
      title: "ఈ యాప్‌ని ఎవరు వాడొచ్చు?",
      subtitle: "పౌరులు + అధికారులు + విభాగాలు",
      body: "విభిన్న రోల్స్‌కి విభిన్న ఫీచర్స్ ఉంటాయి.",
      roles: [
        { icon: "https://img.icons8.com/color/96/user.png", label: "పౌరుడు" },
        { icon: "https://img.icons8.com/color/96/policeman-male.png", label: "అధికారి" },
        { icon: "https://img.icons8.com/color/96/administrator-male.png", label: "అడ్మిన్" },
        { icon: "https://img.icons8.com/color/96/organization.png", label: "విభాగం" },
      ],
    },

    sec8: {
      ...EN.sec8,
      title: "ఇంపాక్ట్ & విజన్",
      subtitle: "గవర్నెన్స్‌లో కొలిచేలా మెరుగుదలలు",
      body: "మంచి గవర్నెన్స్ ప్లాట్‌ఫామ్ ఫలితాలను చూపి డేటాతో నమ్మకాన్ని నిర్మించాలి.",
      kpis: [
        { value: "24×7", label: "అందుబాటు" },
        { value: "SLA", label: "సమయ పరిమిత పరిష్కారం" },
        { value: "100%", label: "ఆడిటబిలిటీ" },
      ],
      bullets: ["త్వరిత పరిష్కారం", "విభాగాల సమన్వయం మెరుగుదల", "పారదర్శక టైమ్‌లైన్లు/డ్యాష్‌బోర్డ్స్", "ఫీడ్‌బ్యాక్‌తో సేవల మెరుగుదల"],
    },

    sec9: {
      ...EN.sec9,
      title: "సపోర్ట్ & హెల్ప్",
      subtitle: "కాంటాక్ట్, FAQ, హెల్ప్ సెంటర్",
      body: "సమస్య ఉంటే సపోర్ట్‌ను సంప్రదించండి లేదా FAQ చూడండి.",
      phoneLabel: "టోల్-ఫ్రీ / ఫోన్",
      mailLabel: "ఈమెయిల్",
      webLabel: "వెబ్‌సైట్",
      faqLabel: "FAQ",
      faqText: "తరచుగా అడిగే ప్రశ్నలు చూడండి",
      faqHint: "ఇక్కడ FAQ కంటెంట్ జోడించండి (లాగిన్, డాక్స్, ట్రాకింగ్, ఎస్కలేషన్, ప్రైవసీ).",
    },

    footer: {
      ...EN.footer,
      appName: "ఈ-గవర్నెన్స్ మొబైల్ యాప్",
      versionLabel: "యాప్ వెర్షన్",
      lastUpdatedLabel: "చివరి అప్‌డేట్",
      disclaimer: "ఇది టెంప్లేట్ About పేజీ — అధికారిక కాంటాక్ట్స్/URL/పాలసీలు ఇక్కడ అప్డేట్ చేయండి.",
      termsCta: "నియమాలు & షరతులు",
      privacyCta: "ప్రైవసీ పాలసీ",
    },
  };

  return lang === "HI" ? HI : lang === "TE" ? TE : EN;
}

/** Styles (NO GAP USED) */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F6F8FC" },

  topBar: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  topTitle: { color: "#fff", fontSize: 18, fontWeight: "900" },
  topSub: { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 2 },

  langRow: { flexDirection: "row", alignItems: "center" },
  langPill: {
    marginLeft: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
  },
  langPillActive: { backgroundColor: "#ffffff", borderColor: "#ffffff" },
  langText: { color: "#fff", fontSize: 12, fontWeight: "800" },
  langTextActive: { color: "#083a73" },

  container: { padding: 14, paddingBottom: 30 },

  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.08)",
    borderRadius: 18,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 2,
  },

  heroRow: { flexDirection: "row", alignItems: "center" },
  heroIcon: { width: 72, height: 72, marginLeft: 12, opacity: 0.98 },

  h1: { color: "#0F172A", fontSize: 18, fontWeight: "900", marginBottom: 6 },
  h2: { color: "#0F172A", fontSize: 16, fontWeight: "900" },
  p: { color: "rgba(15, 23, 42, 0.82)", fontSize: 13, lineHeight: 19 },

  muted: { color: "rgba(15, 23, 42, 0.65)", fontSize: 12, marginTop: 2 },
  smallMuted: { color: "rgba(15, 23, 42, 0.70)", fontSize: 12, fontWeight: "700" },

  chipRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  chip: {
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(11, 92, 171, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(11, 92, 171, 0.16)",
  },
  chipText: { color: "#0B5CAB", fontSize: 12, fontWeight: "900" },

  compactRow: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "rgba(15, 23, 42, 0.08)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  sectionIcon: { width: 44, height: 44, marginRight: 10 },

  grid2: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  miniCard: {
    width: "48.5%",
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.08)",
    borderRadius: 16,
    padding: 12,
    minHeight: 94,
  },
  miniTop: { flexDirection: "row", alignItems: "center" },
  miniIcon: { width: 30, height: 30, marginRight: 10 },
  miniTitle: { color: "#0F172A", fontSize: 13, fontWeight: "900", flex: 1 },
  miniDesc: { color: "rgba(15, 23, 42, 0.75)", fontSize: 12, marginTop: 8, lineHeight: 17 },

  table: {},
  tableRow: { flexDirection: "row", marginBottom: 10 },
  tableCellLeft: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.08)",
  },
  tableCellRight: {
    flex: 1,
    backgroundColor: "rgba(11,92,171,0.10)",
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.08)",
  },
  tableHead: { color: "rgba(15, 23, 42, 0.85)", fontWeight: "900", fontSize: 12, marginBottom: 4 },
  tableText: { color: "rgba(15, 23, 42, 0.78)", fontSize: 12, lineHeight: 17 },

  flowWrap: {},
  flowRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 10 },
  flowNo: {
    width: 26,
    height: 26,
    borderRadius: 9,
    backgroundColor: "rgba(11,92,171,0.10)",
    borderWidth: 1,
    borderColor: "rgba(11,92,171,0.18)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  flowNoText: { color: "#0B5CAB", fontWeight: "900", fontSize: 12 },
  flowText: { color: "rgba(15, 23, 42, 0.82)", fontSize: 13, lineHeight: 18, flex: 1 },

  note: {
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "rgba(2, 6, 23, 0.03)",
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.08)",
  },
  noteText: { color: "rgba(15, 23, 42, 0.78)", fontSize: 12, lineHeight: 17 },

  esCard: {
    width: "48.5%",
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.08)",
    borderRadius: 16,
    padding: 12,
  },
  esHeader: { flexDirection: "row", alignItems: "center" },
  esIcon: { width: 34, height: 34, marginRight: 10 },
  esTitle: { color: "#0F172A", fontSize: 13, fontWeight: "900" },
  esSla: { color: "rgba(15, 23, 42, 0.60)", fontSize: 11, marginTop: 2 },
  esChain: { marginTop: 10 },
  esNode: { alignItems: "center", marginBottom: 6 },
  esNodeText: { color: "rgba(15, 23, 42, 0.82)", fontSize: 12, fontWeight: "800", textAlign: "center" },
  esArrow: { color: "rgba(15, 23, 42, 0.45)", marginTop: 4 },

  linkBtn: {
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: "#0B5CAB",
    borderWidth: 1,
    borderColor: "#0B5CAB",
  },
  linkBtnText: { color: "#fff", fontWeight: "900" },

  roleWrap: { flexDirection: "row", flexWrap: "wrap" },
  rolePill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: "rgba(11,92,171,0.08)",
    borderWidth: 1,
    borderColor: "rgba(11,92,171,0.16)",
    marginRight: 10,
    marginBottom: 10,
  },
  roleIcon: { width: 22, height: 22, marginRight: 8 },
  roleText: { color: "#0B5CAB", fontWeight: "900", fontSize: 12 },

  kpiRow: { flexDirection: "row", marginTop: 4 },
  kpi: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "rgba(11,92,171,0.10)",
    borderWidth: 1,
    borderColor: "rgba(11,92,171,0.16)",
    alignItems: "center",
    marginRight: 10,
  },
  kpiValue: { color: "#0B5CAB", fontWeight: "900", fontSize: 18 },
  kpiLabel: { color: "rgba(15, 23, 42, 0.70)", fontSize: 12, marginTop: 4, textAlign: "center" },

  bullets: { marginTop: 10 },
  bulletText: { color: "rgba(15, 23, 42, 0.82)", fontSize: 13, lineHeight: 18, marginBottom: 6 },

  supportRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(15, 23, 42, 0.08)",
  },
  supportIcon: { width: 28, height: 28, marginRight: 10 },
  supportLabel: { color: "rgba(15, 23, 42, 0.60)", fontSize: 12, fontWeight: "800" },
  supportValue: { color: "#0F172A", fontSize: 13, fontWeight: "900", marginTop: 2 },
  supportGo: { color: "rgba(15, 23, 42, 0.45)", fontSize: 24, marginLeft: 6 },

  footer: {
    marginTop: 16,
    padding: 14,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(15, 23, 42, 0.08)",
    alignItems: "center",
  },
  footerTitle: { color: "#0F172A", fontWeight: "900", fontSize: 14 },
  footerText: { color: "rgba(15, 23, 42, 0.75)", fontSize: 12, marginTop: 6 },
  footerSmall: { color: "rgba(15, 23, 42, 0.55)", fontSize: 11, marginTop: 10, textAlign: "center" },

  footerBtn: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: "rgba(11,92,171,0.08)",
    borderWidth: 1,
    borderColor: "rgba(11,92,171,0.16)",
  },
  footerBtnText: { color: "#0B5CAB", fontWeight: "900" },
});
