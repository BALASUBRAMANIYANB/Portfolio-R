// BALASUBRAMANIYAN B - Cybersecurity Portfolio Application (Sleek Storytelling Layout)
class CyberPortfolio {
    constructor() {
        this.data = {
            personalInfo: {
                name: "BALASUBRAMANIYAN B",
                title: "Penetration Tester · Red Team & Web/API VAPT · Application Security",
                currentRole: "Software Engineer @ AfterQuery Experts (Remote)",
                tagline: "Defending Digital Frontiers Through Advanced Offensive Security Research",
                bio: "Offensive security professional with 2+ years of hands-on penetration testing, Red Team operations, and vulnerability research across web, network, and infrastructure environments. Identified and exploited 40+ critical vulnerabilities across enterprise systems under strict NDAs. Skilled in privilege escalation, lateral movement, post-exploitation, and Active Directory attacks. Builds custom offensive frameworks (RREF, Sentinel-SDK, WebSec Check). Holds ISO/IEC 27001:2022, 27701:2025 & 42001:2023 Lead Auditor credentials from Mastermind Assurance (IAF-accredited), and is a Fellow of Management Systems Auditing (Mastermind). Also holds CRTOM and VAPT Specialist certifications. Actively pursuing OSCP. Delivers CVSS-scored pentest reports with remediation guidance aligned to OWASP Top 10 and MITRE ATT&CK.",
                location: "Ariyalur, Tamil Nadu, India",
                email: "balasubramaniyanbalaiya@gmail.com",
                phone: "+91 6379436942",
                linkedIn: "https://www.linkedin.com/in/balasubramaniyanbb/",
                github: "https://github.com/BALASUBRAMANIYANB",
                npm: "https://www.npmjs.com/package/websec-check",
                resumePdf: "Balasubramaniyan-B.pdf",
                mobility: "Open to relocation to Germany · On-site, hybrid, and remote roles",
                languages: "English C1 · German A1 (actively learning)"
            },
            skills: {
                cybersecurity: [
                    { name: "VAPT & Penetration Testing", level: 95, description: "Burp Suite, OWASP ZAP, Metasploit, Nmap, Nessus, SQLmap, Kali Linux, API & Mobile VAPT" },
                    { name: "Web Application Security", level: 94, description: "OWASP Top 10, SSRF, SQLi, Stored/Reflected/DOM XSS, IDOR, CSRF, Auth Bypass, Business Logic" },
                    { name: "Offensive Operations & Red Teaming", level: 92, description: "CRTOM, C2 Frameworks (Sliver/Havoc), Privilege Escalation, Lateral Movement, AD Attacks" },
                    { name: "Network & Infrastructure Security", level: 90, description: "Active Directory (Kerberoasting, AS-REP Roasting, Pass-the-Hash, DCSync), Linux/Windows Hardening" },
                    { name: "Vulnerability Management & Research", level: 91, description: "CVE Correlation, CVSS v3.1/v4.0 Scoring, Threat Modeling, Exploit Validation, Remediations" },
                    { name: "SOC & DFIR", level: 88, description: "Splunk SIEM, CSI Linux, Volatility, Incident Response, Log Correlation, Threat Hunting" },
                    { name: "Standards & Compliance Frameworks", level: 94, description: "ISO/IEC 27001:2022, ISO/IEC 27701:2025, ISO/IEC 42001:2023 Lead Auditor, MITRE ATT&CK, NIST CSF" }
                ],
                development: [
                    { name: "Python", level: 92, description: "Offensive tool building, automation scripts, FastAPI, exploit wrappers, threat intel pipelines" },
                    { name: "Bash & PowerShell", level: 89, description: "System administration automation, offensive scripting, privilege escalation payloads" },
                    { name: "JavaScript & Node.js", level: 85, description: "npm package authoring (websec-check v1.1.0), secure backend APIs, CSP auditing" },
                    { name: "React.js", level: 82, description: "Modern responsive web applications, secure component state, OWASP secure coding" },
                    { name: "SQL", level: 92, description: "Database design, query optimization, security hardening — 5 Stars on HackerRank" },
                    { name: "Docker & Cloud Platforms", level: 80, description: "Containerized offensive labs, AWS, Azure, GCP infrastructure security auditing" }
                ],
                tools: [
                    "Burp Suite", "OWASP ZAP", "Metasploit", "Nmap", "Nessus",
                    "Wireshark", "SQLmap", "Wazuh", "Splunk", "CSI Linux",
                    "React.js", "Node.js", "Docker", "AWS", "Azure", "GCP", "FastAPI",
                    "SQLite", "MongoDB", "Python", "Bash", "PowerShell", "npm"
                ]
            },
            projects: [
                {
                    id: 1,
                    title: "Phishing Simulation Ecosystem",
                    category: "cybersecurity",
                    badge: "Confidential / NDA",
                    description: "Enterprise-grade phishing simulation and training platform engineered to evaluate and enhance organizational security posture through realistic simulated social engineering scenarios.",
                    technologies: ["Python", "Node.js", "Docker", "Threat Simulation", "Telemetry Analytics", "Social Engineering"],
                    features: ["Customizable phishing templates replicating real-world spear phishing", "Automated campaign scheduling & user segmentation", "Real-time click telemetry, payload tracking & credential capture metrics", "Automated executive reporting & training enrollment triggers", "Zero external data leakage via secure on-premise container deployment"],
                    achievements: ["Deployed across enterprise client environments to benchmark awareness", "Measurably reduced simulated employee click-through vulnerability rates by 42%"],
                    longDescription: "Developed and spearheaded at Terra System Labs, this enterprise phishing simulation ecosystem allows security teams to simulate sophisticated multi-stage spear phishing attacks safely. Features full telemetry tracking, campaign scheduling, and targeted training workflows to defend against adversarial social engineering.",
                    github: "https://github.com/BALASUBRAMANIYANB"
                },
                {
                    id: 2,
                    title: "RREF — RedOps Recon & Exploitation Framework",
                    category: "cybersecurity",
                    description: "Modular Python and Bash offensive security toolkit automating reconnaissance, port scanning, service profiling, and initial exploitation workflows.",
                    technologies: ["Python", "Bash", "Nmap", "Metasploit", "Security Automation", "Offensive Ops"],
                    features: ["Multi-threaded network and port scanning orchestration", "Subdomain discovery and DNS intelligence harvesting", "Automated service fingerprinting and banner grabbing", "Integrated exploit payload launchers and listener handlers", "Structured Markdown and HTML penetration testing report export"],
                    achievements: ["Deployed across 4 active Red Team engagements", "Reduced manual reconnaissance and enumeration cycle time by ~35%"],
                    longDescription: "RREF coordinates reconnaissance and exploitation phases for Red Team operators. Built with Python and Bash, it automates deep enumeration of network perimeters, services, and web assets, accelerating time-to-insight during external engagements.",
                    github: "https://github.com/BALASUBRAMANIYANB/RREF-RedOps-Recon-Exploitation-Framework-.git"
                },
                {
                    id: 3,
                    title: "Sentinel-SDK — Black-Box Security Auditing Framework",
                    category: "cybersecurity",
                    description: "Modular, plugin-based security auditing framework designed for black-box vulnerability detection and passive intelligence gathering across web assets.",
                    technologies: ["Python", "SQLite", "Jinja2", "FPDF2", "OWASP Top 10", "WAF Detection"],
                    features: ["Automated WAF fingerprinting and bypass heuristics", "Deep crawler with parameter and endpoint discovery", "Passive and active vulnerability scanning plugins (XSS, SQLi, SSRF, IDOR)", "Automated executive HTML and PDF compliance report generation", "CLI and CI/CD pipeline integration ready"],
                    achievements: ["Discovered 18 high-severity vulnerabilities missed by commercial scanners", "Audited 3 enterprise-tier client assets with zero false positives"],
                    longDescription: "Sentinel-SDK is a Python-based black-box auditing framework. Its plugin architecture allows offensive operators to rapidly write custom vulnerability checks, inspect WAF defenses, crawl hidden surfaces, and generate professional client-ready reports.",
                    github: "https://github.com/BALASUBRAMANIYANB/Sentinel-SDK.git"
                },
                {
                    id: 4,
                    title: "WebSec Check — Passive Web Security Auditor",
                    category: "cybersecurity",
                    badge: "npm v1.1.0",
                    description: "Production Node.js CLI tool published on npm for auditing HTTP security headers, TLS posture, cookie hygiene, and web server configurations.",
                    technologies: ["Node.js", "npm Package", "HTTP Headers", "TLS / SSL", "Security Auditing", "CLI"],
                    features: ["Evaluates HSTS, CSP, X-Frame-Options, Permissions-Policy & Referrer-Policy", "TLS certificate expiry, cipher suite & protocol version auditing", "Cookie security attribute validation (Secure, HttpOnly, SameSite)", "Colorized terminal output with actionable remediation suggestions", "JSON output flag for CI/CD integration and automated dev pipelines"],
                    achievements: ["Published on official npm registry as websec-check", "Zero external dependencies for rapid, lightweight execution (npx websec-check <url>)"],
                    longDescription: "WebSec Check is an open-source security tool published on npm (v1.1.0) that enables developers and penetration testers to instantly evaluate web application security posture with a single command. It analyzes security response headers, SSL/TLS configuration, and cookie hardening.",
                    github: "https://github.com/BALASUBRAMANIYANB/websec-check",
                    npm: "https://www.npmjs.com/package/websec-check"
                },
                {
                    id: 5,
                    title: "Phantera — Insider Threat Detection (ML)",
                    category: "cybersecurity",
                    description: "Behavioural biometrics anomaly detection system utilizing machine learning models to detect insider threats through mouse and keystroke dynamics.",
                    technologies: ["Python", "FastAPI", "Streamlit", "Machine Learning", "Isolation Forest", "Scikit-Learn"],
                    features: ["Continuous keystroke dynamics and cadence measurement", "Mouse movement curvature and acceleration vector tracking", "Unsupervised Isolation Forest anomaly scoring engine", "Real-time analytics dashboard built with Streamlit", "RESTful telemetry ingestion API powered by FastAPI"],
                    achievements: ["Achieved 89% anomaly detection accuracy in controlled lab testbeds", "Engineered lightweight background telemetry agent with <1% CPU overhead"],
                    longDescription: "Phantera monitors user interaction telemetry to spot unauthorized account takeovers or malicious insider actions. By building baseline profiles of regular typing velocity and mouse movements, it flags deviations using an Isolation Forest anomaly model in real time.",
                    github: "https://github.com/BALASUBRAMANIYANB/Phantera.git"
                },
                {
                    id: 6,
                    title: "REDOPS-VA — Automated Vulnerability Assessment Suite",
                    category: "cybersecurity",
                    description: "Orchestration tool integrating Burp Suite, Nessus API, and OWASP ZAP scans into a unified operational workflow.",
                    technologies: ["Python", "Nessus API", "OWASP ZAP API", "Burp Suite REST API", "VAPT Automation"],
                    features: ["Automated scanner execution orchestration across multiple target scopes", "Consolidated XML/JSON vulnerability deduplication and correlation", "Custom risk ranking engine based on CVSS v3.1 scoring", "Automated alert notifications for critical-severity vulnerabilities", "Unified client reporting in Markdown, HTML, and CSV"],
                    achievements: ["Decreased scanner setup and correlation time by over 50%", "Assessed and cataloged over 50 enterprise target nodes autonomously"],
                    longDescription: "REDOPS-VA connects commercial and open-source vulnerability scanners into an automated pipeline. It launches scans, correlates results, strips false duplicates, and produces unified vulnerability reports.",
                    github: "https://github.com/BALASUBRAMANIYANB/REDOPS-VA"
                },
                {
                    id: 7,
                    title: "TraceBack — Enterprise Digital Forensics Platform",
                    category: "cybersecurity",
                    description: "Automated digital forensics and incident response (DFIR) platform that collects, parses, and correlates forensic host artifacts to reconstruct timelines.",
                    technologies: ["Python", "Bash", "SIEM", "Incident Response", "Digital Forensics", "Volatility"],
                    features: ["Cross-platform forensic artifact collection (Windows & Linux)", "Automated parsing of Windows Event Logs, Prefetch, Shimcache, and Bash history", "Event correlation engine building chronological attack incident timelines", "Memory forensics integration supporting Volatility analysis dumps", "Comprehensive forensic investigation report export in HTML and PDF"],
                    achievements: ["Reduces manual investigator evidence gathering time by 50%", "Successfully deployed across simulated red-vs-blue attack scenarios"],
                    longDescription: "TraceBack provides incident responders with push-button triage capability. It collects memory and disk artifacts from compromised endpoints, parses suspicious activity, correlates timestamps, and compiles a forensically sound event timeline.",
                    github: "https://github.com/BALASUBRAMANIYANB/Traceble.git"
                },
                {
                    id: 8,
                    title: "IT System Log Analyzer — Custom SIEM Security Tool",
                    category: "cybersecurity",
                    description: "Custom SIEM log analysis engine for threat detection and anomaly identification across enterprise auth, web, and system logs. Research published in IJPREMS.",
                    technologies: ["Python", "Splunk", "SIEM", "Log Parsing", "Security Alerts", "Threat Detection"],
                    features: ["Multi-source log ingestion (Syslog, Apache/Nginx, Auth.log, Windows Event Logs)", "Rule-based and heuristic anomaly detection algorithms", "Automated alert dispatch for brute-force, privilege escalation, and lateral movement", "Published research foundation (IJPREMS Volume 4, Issue 4, April 2024)", "Interactive log search interface with regex query support"],
                    achievements: ["Cut triage false positives by 15% in operational testing", "Published peer-reviewed research paper: IJPREMS40400008068"],
                    longDescription: "Developed as part of academic research published in IJPREMS, this custom SIEM tool ingests high-volume system logs, normalizes heterogeneous event streams, and detects brute-force attacks, unauthorized access attempts, and abnormal privilege elevation.",
                    github: "https://github.com/BALASUBRAMANIYANB/SECURITY-LOG-ANALYSER-FOR-IT-SYSTEMS-.git"
                },
                {
                    id: 9,
                    title: "Burp Suite Packet Capturing — Network Analysis Tool",
                    category: "cybersecurity",
                    description: "Network packet capture and HTTP/S traffic analysis tool demonstrating protocol inspection, packet sniffing, and traffic dissection.",
                    technologies: ["Burp Suite", "Python", "Wireshark", "Network Security", "Packet Analysis"],
                    features: ["Interception and dissection of live HTTP/HTTPS traffic", "Custom header injection and TLS handshake inspection", "Automated packet decoding and raw payload carving", "Integration with upstream penetration testing proxies"],
                    achievements: ["Essential utility for protocol reversing and custom proxy workflows", "Open-source reference implementation hosted on GitHub"],
                    longDescription: "A dedicated network traffic inspection utility demonstrating deep packet inspection, proxy chaining with Burp Suite, SSL certificate pinning bypass analysis, and low-level protocol decoding.",
                    github: "https://github.com/BALASUBRAMANIYANB/BURP-SUITE-PACKET-CAPTURING.git"
                }
            ],
            experience: [
                {
                    position: "Software Engineer",
                    company: "AfterQuery Experts",
                    period: "Present",
                    location: "Remote",
                    description: "Engineers production software architectures, multi-file codebases, and evaluation environments used to train and benchmark frontier AI models and autonomous coding assistants.",
                    achievements: [
                        "Engineers production-grade software architectures and complex codebases used to train and evaluate frontier AI models.",
                        "Designs and implements full-stack features, API integrations, and robust automated test suites with deterministic validation.",
                        "Constructs containerized developer environments using Docker, enforcing strict code quality and security standards.",
                        "Collaborates with distributed international engineering teams to evaluate model problem-solving capabilities across diverse technology stacks."
                    ]
                },
                {
                    position: "Cyber Security Research Analyst",
                    company: "Terra System Labs",
                    period: "07/2025 - 07/2026",
                    location: "Bangalore, India",
                    description: "Conducted enterprise vulnerability assessment and penetration testing across web applications, APIs, networks, and infrastructure.",
                    achievements: [
                        "Delivered 30+ VAPT engagements and reported 40+ critical- and high-severity findings with reproducible proof-of-concept evidence, CVSS scoring, and prioritized remediation guidance aligned with OWASP Top 10.",
                        "Conducted reconnaissance, exploitation, and post-exploitation using Burp Suite, Nmap, Metasploit, Nessus, and Nikto.",
                        "Built Python/Bash security automation and internal offensive-security tools to support repeatable testing and reporting.",
                        "Developed a phishing-simulation platform for authorized security-awareness campaigns."
                    ]
                },
                {
                    position: "Cyber Security Analyst",
                    company: "Terra System Labs",
                    period: "12/2024 - 06/2025",
                    location: "Bangalore, India",
                    description: "Conducted vulnerability assessments, penetration tests, and security-log analysis; promoted to Cyber Security Research Analyst in July 2025.",
                    achievements: [
                        "Conducted vulnerability assessments and penetration tests across client systems, documenting findings and actionable remediation guidance.",
                        "Analyzed security logs to identify suspicious activity and support incident-response investigations.",
                        "Developed frontend and backend components for an internal testing framework to support repeatable security assessments."
                    ]
                },
                {
                    position: "Full-Stack Developer Intern",
                    company: "SkillKaster",
                    period: "06/2024 - 12/2024",
                    location: "Remote",
                    description: "Built full-stack applications with React.js and Node.js adhering to OWASP secure development guidelines.",
                    achievements: [
                        "Engineered production full-stack web applications using React.js and Node.js, adhering to OWASP secure development principles.",
                        "Conducted proactive security code reviews, identifying and remediating 12+ injection and authentication vulnerabilities before production release.",
                        "Integrated decentralized IPFS storage protocols and engineered RESTful microservices within an Agile framework."
                    ]
                },
                {
                    position: "Cyber Crime Investigator Intern",
                    company: "Tamil Nadu Cyber Crime Wing",
                    period: "06/2023 - 07/2023",
                    location: "Coimbatore, India",
                    description: "Investigated cybercrime cases, analyzed log telemetry, and performed digital forensics supporting active law enforcement cases.",
                    achievements: [
                        "Investigated 20+ cybercrime incidents, conducting digital forensics, log analysis (Splunk), and incident reconstruction.",
                        "Accelerated incident triage speed by 20% by implementing structured evidence preservation and analysis workflows.",
                        "Delivered technical case intelligence and forensic briefs supporting active law enforcement threat mitigation."
                    ]
                },
                {
                    position: "VAPT Intern",
                    company: "BM Infosec Limited",
                    period: "06/2022 - 07/2022",
                    location: "Coimbatore, India",
                    description: "Vulnerability Assessment and Penetration Testing across client platforms and enterprise endpoint workstations.",
                    achievements: [
                        "Executed vulnerability assessments and penetration tests across 5+ client platforms using Burp Suite and Nessus.",
                        "Reported 8 critical/high-severity vulnerabilities (SQLi, IDOR, sensitive data exposure) with comprehensive remediation guides.",
                        "Hardened enterprise endpoint postures across 40+ workstations through security baseline auditing and patch validation."
                    ]
                }
            ],
            achievements: [
                {
                    category: "Hackathons & Innovation",
                    icon: "fas fa-trophy",
                    items: [
                        "Kavach 2023 — National Cybersecurity Hackathon (Govt. of India); top 5% of teams nationally.",
                        "TN Startup & Idea Hackathon 2.0 — State-level finalist, cybersecurity innovation track."
                    ]
                },
                {
                    category: "Technical Proficiency & CTFs",
                    icon: "fas fa-star",
                    items: [
                        "HackerRank SQL — 5 Stars proficiency certification",
                        "HackerRank Python — 3 Stars proficiency certification",
                        "CTF Competitions — Active participant in HackerOne, Payatu, and Razzify CTFs.",
                        "SOC Analyst Badge — LetsDefend.io, demonstrating expertise in real-world SOC operations."
                    ]
                },
                {
                    category: "Accredited Fellowships & Certifications",
                    icon: "fas fa-certificate",
                    items: [
                        "Fellow of Management Systems Auditing (Mastermind Assurance, 2026)",
                        "ISO/IEC 27001:2022 Lead Auditor (IAF accredited)",
                        "ISO/IEC 27701:2025 Lead Auditor (IAF accredited)",
                        "ISO/IEC 42001:2023 AI Systems Auditor (IAF accredited)",
                        "CRTOM — Certified Red Team Operations Management (Red Team Leaders)",
                        "VAPT Specialist — Bored Monk"
                    ]
                }
            ],
            education: [
                {
                    degree: "BSc Computer Science — Cloud Technology & Information Security",
                    institution: "Rathinam College of Arts and Science",
                    period: "2021 - 2024",
                    location: "Coimbatore, India",
                    grade: "89% — First Class with Distinction",
                    specialization: "Cloud Technology and Information Security"
                },
                {
                    degree: "HSC (Higher Secondary Certificate)",
                    institution: "SBG Vidhyalaya Senior Secondary School (CBSE)",
                    period: "2020 - 2021",
                    location: "Srimushnam, India",
                    grade: "84%"
                }
            ],
            certifications: [
                {
                    name: "Fellow of Management Systems Auditing (FMSA)",
                    issuer: "Mastermind Assurance",
                    year: "2026",
                    icon: "fa-medal",
                    verified: true
                },
                {
                    name: "ISO/IEC 27001:2022 Lead Auditor",
                    issuer: "Mastermind Assurance",
                    year: "2024",
                    icon: "fa-clipboard-check",
                    verified: true
                },
                {
                    name: "ISO/IEC 27701:2025 Lead Auditor",
                    issuer: "Mastermind Assurance",
                    year: "2024",
                    icon: "fa-user-shield",
                    verified: true
                },
                {
                    name: "ISO/IEC 42001:2023 Lead Auditor (AI Management Systems)",
                    issuer: "Mastermind Assurance",
                    year: "2024",
                    icon: "fa-robot",
                    verified: true
                },
                {
                    name: "CRTOM – Certified Red Team Operations Management",
                    issuer: "Red Team Leaders",
                    year: "2024",
                    icon: "fa-crosshairs",
                    verified: true
                },
                {
                    name: "CCEP – Certified Cybersecurity Educator Professional",
                    issuer: "Red Team Leaders",
                    year: "2023",
                    icon: "fa-chalkboard-teacher",
                    verified: true
                },
                {
                    name: "Offensive Agent AI",
                    issuer: "Red Team Leaders",
                    year: "2025",
                    icon: "fa-robot",
                    verified: true
                },
                {
                    name: "OSCP — Offensive Security Certified Professional",
                    issuer: "Offensive Security",
                    year: "In Progress",
                    icon: "fa-terminal",
                    verified: false
                },
                {
                    name: "Active Directory Exploitation & Defense",
                    issuer: "Cyberwarfare Labs",
                    year: "2024",
                    icon: "fa-server",
                    verified: true
                },
                {
                    name: "C3SA – Certified Cybersecurity Analyst",
                    issuer: "Cyberwarfare Labs",
                    year: "2023",
                    icon: "fa-user-ninja",
                    verified: true
                },
                {
                    name: "VAPT Specialist",
                    issuer: "Bored Monk",
                    year: "2024",
                    icon: "fa-shield-alt",
                    verified: true
                },
                {
                    name: "SOC Analyst",
                    issuer: "LetsDefend",
                    year: "2023",
                    icon: "fa-user-shield",
                    verified: true
                },
                {
                    name: "Incident Response Fundamentals",
                    issuer: "LetsDefend",
                    year: "2022",
                    icon: "fa-first-aid",
                    verified: true
                },
                {
                    name: "Splunk SIEM Basics for Security Analysts",
                    issuer: "Splunk",
                    year: "2022",
                    icon: "fa-search-plus",
                    verified: true
                },
                {
                    name: "Nessus Vulnerability Assessment Fundamentals",
                    issuer: "Tenable",
                    year: "2022",
                    icon: "fa-crosshairs",
                    verified: true
                },
                {
                    name: "CSI Linux Investigator",
                    issuer: "CSI Linux",
                    year: "2022",
                    icon: "fa-search",
                    verified: true
                },
                {
                    name: "CSI Linux Administration",
                    issuer: "CSI Linux",
                    year: "2022",
                    icon: "fab fa-linux",
                    verified: true
                },
                {
                    name: "Steganography & Malware Analysis",
                    issuer: "CSI Linux",
                    year: "2022",
                    icon: "fa-user-secret",
                    verified: true
                },
                {
                    name: "Introduction to Critical Infrastructure Protection",
                    issuer: "OPSWAT",
                    year: "2022",
                    icon: "fa-industry",
                    verified: true
                },
                {
                    name: "Blockchain Security",
                    issuer: "Cyfrin",
                    year: "2023",
                    icon: "fa-link",
                    verified: true
                },
                {
                    name: "OWASP Top 10 Web Application Security",
                    issuer: "Bored Monk Pvt Ltd.",
                    year: "2023",
                    icon: "fa-bug",
                    verified: true
                },
                {
                    name: "Penetration Testing Fundamentals",
                    issuer: "Bored Monk Pvt Ltd.",
                    year: "2022",
                    icon: "fa-terminal",
                    verified: true
                },
                {
                    name: "Oracle Cloud Infrastructure Certified Foundations Associate",
                    issuer: "Oracle",
                    year: "2023",
                    icon: "fab fa-oracle",
                    verified: true,
                    link: "https://credential.certiport.com"
                },
                {
                    name: "CPPS – Certified Phishing Prevention Specialist",
                    issuer: "Hack&Fix Academy",
                    year: "2023",
                    icon: "fa-mail-bulk",
                    verified: true
                },
                {
                    name: "ISO/IEC 27001 Information Security Associate",
                    issuer: "Skillfront",
                    year: "2023",
                    icon: "fa-file-contract",
                    verified: true
                },
                {
                    name: "Ethical Hacking Essentials (EHE)",
                    issuer: "CodeRed",
                    year: "2022",
                    icon: "fa-laptop-code",
                    verified: true
                },
                {
                    name: "Network Defense Essentials",
                    issuer: "CodeRed",
                    year: "2022",
                    icon: "fa-network-wired",
                    verified: true
                },
                {
                    name: "Linux Server Administration",
                    issuer: "CodeRed / Mastermind",
                    year: "2022",
                    icon: "fab fa-linux",
                    verified: false
                },
                {
                    name: "CISSP (Course Certificate)",
                    issuer: "Alison",
                    year: "2023",
                    icon: "fa-graduation-cap",
                    verified: false
                },
                {
                    name: "Cyber Security Fundamentals",
                    issuer: "IBM",
                    year: "2022",
                    icon: "fa-shield-alt",
                    verified: true
                },
                {
                    name: "Introduction to Cybersecurity",
                    issuer: "Cisco Networking Academy",
                    year: "2021",
                    icon: "fa-shield-alt",
                    verified: true
                }
            ],
            publications: [
                {
                    title: "AN SECURITY LOG ANALYSIS FOR IT SYSTEMS",
                    id: "IJPREMS40400008068",
                    journal: "International Journal of Progressive Research in Engineering Management and Science (IJPREMS)",
                    period: "Volume 4, Issue 4, April 2024",
                    status: "Published",
                    link: "https://www.ijprems.com/ijprems-paper/an-security-log-analysis-for-it-systems"
                }
            ],
            statistics: {
                criticalFindings: "40+",
                enterprisePentests: "30+",
                yearsExperience: "2+",
                certifications: "33+",
                remediationRate: "100%"
            }
        };

        this.currentFilter = 'all';
        this.isScrolling = false;
        this.matrixAnimationId = null;
        this.skillsAnimated = false;
        this.isInitialized = false;
        this.currentTheme = localStorage.getItem('portfolio-theme') || 'light';

        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
        this.setupMatrixBackground();
        this.setupScrollEffects();
        this.populateData();
        this.setupIntersectionObserver();
        this.setupSkillsTabs();
        this.isInitialized = true;
    }

    setupEventListeners() {
        // Navigation hamburger
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scroll for nav links and close menu on click
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const target = document.querySelector(targetId);

                if (target) {
                    const offsetTop = target.offsetTop - 80; // offset navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    if (navMenu && navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                }
            });
        });

        // Theme Switcher Click Handler
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.cycleTheme();
            });
        }

        // Scroll progress
        window.addEventListener('scroll', this.handleScroll.bind(this));

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactSubmit.bind(this));
        }

        // Modal triggers
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.getElementById('modal-overlay');

        if (modalClose) modalClose.addEventListener('click', this.closeModal.bind(this));
        if (modalOverlay) modalOverlay.addEventListener('click', this.closeModal.bind(this));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Set up filters
        setTimeout(() => {
            this.setupProjectFilters();
        }, 100);

        // Handle window resize
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    setupMatrixBackground() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Helper to dynamically read theme primary color hex and return rgba string
        const getPrimaryColorRGBA = (opacity) => {
            const primary = getComputedStyle(document.body).getPropertyValue('--cyber-primary').trim();
            if (primary.startsWith('#')) {
                const r = parseInt(primary.slice(1, 3), 16);
                const g = parseInt(primary.slice(3, 5), 16);
                const b = parseInt(primary.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, ${opacity})`;
            }
            return `rgba(14, 165, 233, ${opacity})`;
        };

        // Moving background points
        const particles = [];
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.15,
                speedY: (Math.random() - 0.5) * 0.15,
                opacity: Math.random() * 0.15 + 0.05
            });
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Soft connecting lines
            ctx.strokeStyle = getPrimaryColorRGBA(0.05);
            ctx.lineWidth = 0.8;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 220) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particle dots
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                ctx.fillStyle = getPrimaryColorRGBA(p.opacity);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;

                // Border wraps
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            }
        };

        const animate = () => {
            drawParticles();
            this.matrixAnimationId = requestAnimationFrame(animate);
        };

        animate();
    }

    setupScrollEffects() {
        const scrollProgress = document.getElementById('scroll-progress');

        window.addEventListener('scroll', () => {
            if (scrollProgress) {
                const scrollTop = window.pageYOffset;
                const docHeight = document.body.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                scrollProgress.style.width = scrollPercent + '%';
            }
        });
    }

    handleScroll() {
        if (!this.isScrolling) {
            requestAnimationFrame(() => {
                const navbar = document.getElementById('navbar');

                // Navbar transparent to solid glass fade
                if (navbar) {
                    if (window.pageYOffset > 50) {
                        navbar.style.background = 'rgba(255, 255, 255, 0.92)';
                        navbar.style.boxShadow = '0 10px 30px rgba(14, 165, 233, 0.05)';
                    } else {
                        navbar.style.background = 'rgba(255, 255, 255, 0.85)';
                        navbar.style.boxShadow = 'none';
                    }
                }

                // Add active state to nav links based on section in view
                const sections = document.querySelectorAll('section');
                const navLinks = document.querySelectorAll('.nav-link');
                let currentSectionId = '';

                sections.forEach(sec => {
                    const top = window.pageYOffset;
                    const offset = sec.offsetTop - 150;
                    const height = sec.offsetHeight;
                    const id = sec.getAttribute('id');

                    if (top >= offset && top < offset + height) {
                        currentSectionId = id;
                    }
                });

                if (currentSectionId) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentSectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }

                this.isScrolling = false;
            });
        }
        this.isScrolling = true;
    }

    populateData() {
        this.populateSkills();
        this.populateProjects();
        this.populateExperience();
        this.populateAchievements();
        this.populateEducation();
        this.populateCertifications();
        this.populatePublications();
    }

    populateSkills() {
        const cyberSkills = document.getElementById('cyber-skills');
        const devSkills = document.getElementById('dev-skills');
        const toolsDisplay = document.getElementById('tools-display');

        if (cyberSkills) {
            cyberSkills.innerHTML = this.data.skills.cybersecurity.map(skill => `
                <div class="skill-sleek-card">
                    <div class="skill-sleek-header">
                        <span class="skill-sleek-name">${skill.name}</span>
                        <span class="skill-sleek-level">${skill.level}%</span>
                    </div>
                    <div class="skill-sleek-bar-wrap">
                        <div class="skill-sleek-progress" data-width="${skill.level}%"></div>
                    </div>
                    <p class="skill-sleek-desc">${skill.description}</p>
                </div>
            `).join('');
        }

        if (devSkills) {
            devSkills.innerHTML = this.data.skills.development.map(skill => `
                <div class="skill-sleek-card">
                    <div class="skill-sleek-header">
                        <span class="skill-sleek-name">${skill.name}</span>
                        <span class="skill-sleek-level">${skill.level}%</span>
                    </div>
                    <div class="skill-sleek-bar-wrap">
                        <div class="skill-sleek-progress" data-width="${skill.level}%"></div>
                    </div>
                    <p class="skill-sleek-desc">${skill.description}</p>
                </div>
            `).join('');
        }

        if (toolsDisplay) {
            toolsDisplay.innerHTML = this.data.skills.tools.map(tool => `
                <span class="tool-tag">${tool}</span>
            `).join('');
        }
    }

    populateProjects() {
        this.renderProjects(this.data.projects);
    }

    renderProjects(projects) {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-sleek-card ${project.category}" onclick="window.cyberPortfolio.openProjectModal(${project.id})">
                <div class="project-sleek-banner"></div>
                <div class="project-sleek-body">
                    <div class="project-sleek-meta">
                        <span class="project-sleek-category">${project.category.toUpperCase()}</span>
                        <span class="title-code">// id: 0${project.id}</span>
                    </div>
                    <h3 class="project-sleek-title">${project.title}</h3>
                    <p class="project-sleek-desc">${project.description}</p>
                    <div class="project-sleek-tech">
                        ${project.technologies.slice(0, 4).map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
                    </div>
                    <div class="project-sleek-footer">
                        <span>Analysis logs</span>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        `).join('');
    }

    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn-sleek');
        if (filterButtons.length === 0) return;

        filterButtons.forEach(button => {
            button.replaceWith(button.cloneNode(true));
        });

        const newButtons = document.querySelectorAll('.filter-btn-sleek');
        newButtons.forEach(button => {
            button.addEventListener('click', () => {
                newButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');
                this.currentFilter = filter;

                const filtered = filter === 'all'
                    ? this.data.projects
                    : this.data.projects.filter(p => p.category === filter);

                const projectsGrid = document.getElementById('projects-grid');
                if (projectsGrid) {
                    projectsGrid.style.opacity = '0';
                    projectsGrid.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        this.renderProjects(filtered);
                        projectsGrid.style.opacity = '1';
                        projectsGrid.style.transform = 'translateY(0)';
                    }, 250);
                }
            });
        });
    }

    setupSkillsTabs() {
        const tabButtons = document.querySelectorAll('.skills-tab-btn');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const tabTarget = button.getAttribute('data-tab');
                const panels = document.querySelectorAll('.skills-tab-panel');
                panels.forEach(panel => panel.classList.remove('active'));

                const targetPanel = document.getElementById(`tab-${tabTarget}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    // Trigger progress bars width load on panel view
                    const progressBars = targetPanel.querySelectorAll('.skill-sleek-progress');
                    progressBars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-width');
                        bar.style.width = targetWidth;
                    });
                }
            });
        });
    }

    populateExperience() {
        const timeline = document.getElementById('experience-timeline');
        if (!timeline) return;

        timeline.innerHTML = this.data.experience.map((exp, index) => `
            <div class="timeline-sleek-item fade-in-up">
                <div class="timeline-sleek-dot"></div>
                <div class="timeline-sleek-card">
                    <div class="timeline-sleek-header">
                        <div class="timeline-sleek-title">
                            <h3>${exp.position}</h3>
                            <span class="timeline-sleek-company">${exp.company}</span>
                        </div>
                        <span class="timeline-sleek-date">${exp.period}</span>
                    </div>
                    <p class="timeline-sleek-desc">${exp.description}</p>
                    <ul class="timeline-sleek-achievements">
                        ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    populateAchievements() {
        const achievementsContent = document.getElementById('achievements-content');
        if (!achievementsContent) return;

        achievementsContent.innerHTML = this.data.achievements.map(category => `
            <div class="achievement-sleek-card fade-in-up">
                <h3>
                    <i class="${category.icon}"></i>
                    ${category.category}
                </h3>
                <ul class="achievement-sleek-list">
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    populateEducation() {
        const educationContent = document.getElementById('education-content');
        if (!educationContent) return;

        educationContent.innerHTML = this.data.education.map(edu => `
            <div class="education-sleek-card fade-in-up">
                <div class="edu-icon-wrap">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="edu-details">
                    <h3>${edu.degree}</h3>
                    <p class="edu-school">${edu.institution}</p>
                    <div class="edu-meta">
                        <span>${edu.period}</span> · <span>${edu.location || 'Coimbatore, India'}</span>
                    </div>
                    <p class="edu-grade">Grade: ${edu.grade}</p>
                    ${edu.specialization ? `<p class="edu-meta">Specialization: ${edu.specialization}</p>` : ''}
                </div>
            </div>
        `).join('');
    }

    populateCertifications() {
        const certGrid = document.getElementById('certifications-grid');
        if (!certGrid) return;

        certGrid.innerHTML = this.data.certifications.map(cert => `
            <div class="cert-sleek-card fade-in-up">
                <div class="cert-sleek-header">
                    <div class="cert-sleek-icon">
                        <i class="fas ${cert.icon || 'fa-certificate'}"></i>
                    </div>
                    <h4>${cert.name}</h4>
                </div>
                <div>
                    <div class="cert-sleek-issuer" style="font-size: 0.82rem; color: var(--cyber-secondary); font-weight: 600; margin-bottom: 0.25rem;">${cert.issuer}</div>
                    <div class="cert-sleek-year" style="font-size: 0.78rem; color: var(--cyber-text-muted); font-family: var(--font-mono);">${cert.year} ${cert.verified ? '· <span style="color:#059669; font-weight:600;"><i class="fas fa-check-circle"></i> Verified</span>' : ''}</div>
                    ${cert.link ? `<a href="${cert.link}" target="_blank" class="cert-link" style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.8rem; color: var(--cyber-primary); font-weight: 600; text-decoration: none; margin-top: 0.5rem; transition: var(--transition-smooth);"><i class="fas fa-external-link-alt"></i> View Credentials</a>` : ''}
                </div>
            </div>
        `).join('');
    }

    populatePublications() {
        const publicationsGrid = document.getElementById('publications-grid');
        if (!publicationsGrid) return;

        publicationsGrid.innerHTML = this.data.publications.map(pub => `
            <article class="project-card fade-in-up">
                <div class="card-top">
                    <div class="folder-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                    </div>
                    <a href="${pub.link}" target="_blank" class="external" style="text-decoration: none; color: inherit;">↗</a>
                </div>
                <h3>${pub.title}</h3>
                <p style="font-size: 13px; color: var(--teal); font-weight: 600; margin-bottom: 12px;" class="mono">${pub.journal}</p>
                <p style="font-size: 14px; margin-bottom: 12px;"><strong>Paper ID:</strong> ${pub.id}</p>
                <p style="font-size: 13px; color: var(--muted);">${pub.period}</p>
                <div class="project-footer" style="margin-top: auto; padding-top: 15px;">
                    <div class="metric-row">
                        <span class="mono" style="font-size: 11px; letter-spacing: 0.1em; opacity: 0.8; color: var(--teal); text-transform: uppercase;">${pub.status}</span>
                    </div>
                    <div class="link-row">
                        <a href="${pub.link}" target="_blank" class="accent text-hover-underline" style="font-size: 13px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">Read Publication</a>
                    </div>
                </div>
            </article>
        `).join('');
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    // If it's the skills section, load progress bar widths
                    if (entry.target.id === 'skills' && !this.skillsAnimated) {
                        this.animateSkillBars();
                        this.skillsAnimated = true;
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.fade-in-up, section').forEach(el => {
            observer.observe(el);
        });

        // Trigger stats animation immediately
        this.startStatsAnimation();
    }

    animateSkillBars() {
        const activePanel = document.querySelector('.skills-tab-panel.active');
        if (activePanel) {
            const skillBars = activePanel.querySelectorAll('.skill-sleek-progress');
            skillBars.forEach((bar, idx) => {
                setTimeout(() => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                }, idx * 100);
            });
        }
    }

    startStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const stats = [this.data.statistics.securityEvents, this.data.statistics.yearsExperience, this.data.statistics.certifications, this.data.statistics.hackathonsParticipated];

        statNumbers.forEach((element, index) => {
            const target = stats[index] || 0;
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const animate = () => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                } else {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(animate);
                }
            };

            setTimeout(animate, index * 150);
        });
    }

    openProjectModal(projectId) {
        const project = this.data.projects.find(p => p.id === projectId);
        if (!project) return;

        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');

        if (modalBody) {
            modalBody.innerHTML = `
                <div class="project-modal-icon-wrap">
                    <i class="fas ${project.category === 'cybersecurity' ? 'fa-shield-alt' : 'fa-code'}"></i>
                </div>
                <h2>${project.title}</h2>
                <div class="project-modal-content">
                    <p class="project-modal-description">${project.longDescription}</p>
                    
                    <h3>Operational Features</h3>
                    <ul class="project-features">
                        ${project.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                    
                    <h3>Technologies Deployed</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
                    </div>
                    
                    <h3>Engagement Impact</h3>
                    <ul class="project-features">
                        ${project.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>

                    <div class="project-modal-links">
                        <a href="${project.github}" target="_blank" class="btn btn--primary">
                            <i class="fab fa-github"></i>
                            <span>View Source Code</span>
                        </a>
                    </div>
                </div>
            `;
        }

        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    handleContactSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.subject || !data.message) {
            this.showNotification('Fill in all communication protocols fields.', 'error');
            return false;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalHtml = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>Transmitting...</span> <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        setTimeout(() => {
            this.showNotification('Transmission secured. Awaiting connection responses.', 'success');
            form.reset();
            submitBtn.innerHTML = originalHtml;
            submitBtn.disabled = false;
        }, 1800);

        return false;
    }

    showNotification(message, type) {
        const notif = document.createElement('div');
        notif.className = `notification ${type}`;
        notif.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}" style="color: ${type === 'success' ? '#10b981' : 'var(--cyber-accent)'}"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notif);

        setTimeout(() => {
            notif.style.opacity = '1';
            notif.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notif.style.opacity = '0';
            notif.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notif.parentNode) {
                    document.body.removeChild(notif);
                }
            }, 400);
        }, 4000);
    }

    handleResize() {
        if (this.matrixAnimationId) {
            cancelAnimationFrame(this.matrixAnimationId);
        }
        this.setupMatrixBackground();
    }

    cycleTheme() {
        if (this.currentTheme === 'light') {
            this.currentTheme = 'dark';
        } else if (this.currentTheme === 'dark') {
            this.currentTheme = 'terminal';
        } else {
            this.currentTheme = 'light';
        }
        localStorage.setItem('portfolio-theme', this.currentTheme);
        this.applyTheme(this.currentTheme);
    }

    applyTheme(theme) {
        document.body.classList.remove('theme-light', 'theme-dark', 'theme-terminal');
        document.body.classList.add(`theme-${theme}`);

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = '';
                if (theme === 'light') {
                    icon.className = 'fas fa-sun';
                } else if (theme === 'dark') {
                    icon.className = 'fas fa-moon';
                } else if (theme === 'terminal') {
                    icon.className = 'fas fa-terminal';
                }
            }
        }
    }

    destroy() {
        if (this.matrixAnimationId) {
            cancelAnimationFrame(this.matrixAnimationId);
        }
    }
}

// Initialize on DOM load
let cyberPortfolio;
document.addEventListener('DOMContentLoaded', () => {
    cyberPortfolio = new CyberPortfolio();
    window.cyberPortfolio = cyberPortfolio;
});

window.addEventListener('beforeunload', () => {
    if (cyberPortfolio) {
        cyberPortfolio.destroy();
    }
});
