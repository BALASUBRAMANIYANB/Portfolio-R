// BALASUBRAMANIYAN B - Cybersecurity Portfolio Application (Sleek Storytelling Layout)
class CyberPortfolio {
    constructor() {
        this.data = {
            personalInfo: {
                name: "BALASUBRAMANIYAN B",
                title: "Penetration Tester · Red Team Operator · VAPT Specialist · Offensive Security Engineer",
                tagline: "Defending Digital Frontiers Through Advanced Security Research",
                bio: "Offensive security professional with 2+ years of hands-on penetration testing, Red Team operations, and vulnerability research across web, network, and infrastructure environments. Identified and exploited 40+ critical CVEs across enterprise systems. Skilled in privilege escalation, lateral movement, post-exploitation, and Active Directory attacks. Builds custom offensive frameworks (RREF, Sentinel-SDK). Holds ISO/IEC 27001:2022, 27701:2019 & 42001:2023 Lead Auditor credentials from Mastermind Assurance (IAF-accredited), and is a Fellow of Management Systems Auditing (Mastermind). Also holds CRTOM and VAPT certifications. Actively pursuing OSCP. Delivers CVSS-scored pentest reports with remediation guidance aligned to OWASP Top 10 and MITRE ATT&CK.",
                location: "Coimbatore, Tamilnadu",
                email: "balasubramaniyanbalaiya@gmail.com",
                phone: "+91 6379436942",
                linkedIn: "https://linkedin.com/in/balasubramaniyanbb/",
                github: "https://github.com/BALASUBRAMANIYANB",
            },
            skills: {
                cybersecurity: [
                    { name: "VAPT & Penetration Testing", level: 95, description: "Burp Suite, OWASP ZAP, Metasploit, Nmap, Nessus, SQLmap, Kali Linux" },
                    { name: "Web Application Security", level: 93, description: "OWASP Top 10, API Security, Authentication Testing, SSRF, IDOR, SQLi, XSS" },
                    { name: "Offensive Operations", level: 92, description: "Red Team Ops (CRTOM), C2 Frameworks, Privilege Escalation, AD Attacks" },
                    { name: "Network & Infra Security", level: 90, description: "Network Enumeration, Windows/Linux Security, Network Penetration Testing" },
                    { name: "Vulnerability Management", level: 88, description: "CVE Analysis, CVSS Scoring, Security Assessment, Threat Modeling" },
                    { name: "SOC / DFIR", level: 87, description: "Splunk SIEM, incident response, Malware Analysis, Digital Forensics" },
                    { name: "Standards & Compliance", level: 94, description: "ISO/IEC 27001:2022, ISO/IEC 27701:2019, ISO/IEC 42001:2023, MITRE ATT&CK" }
                ],
                development: [
                    { name: "Python", level: 90, description: "Offensive tool building, automation scripting, FastAPI, threat intel pipelines" },
                    { name: "Bash & PowerShell", level: 88, description: "System administration automation, offensive scripting, exploit wrappers" },
                    { name: "JavaScript & Node.js", level: 82, description: "Secure full-stack development, CSP policies, authentication systems" },
                    { name: "React.js", level: 80, description: "Building modern responsive user interfaces with secure component design" },
                    { name: "SQL", level: 90, description: "Database design, query optimization, security hardening - 5 stars on HackerRank" },
                    { name: "C Programming & Java", level: 75, description: "System level auditing, secure code principles, OOP applications" }
                ],
                tools: [
                    "Burp Suite", "OWASP ZAP", "Metasploit", "Nmap", "Nessus",
                    "Wireshark", "SQLmap", "Wazuh", "Splunk", "CSI Linux",
                    "React.js", "Node.js", "Docker", "AWS", "Azure", "GCP", "FastAPI",
                    "SQLite", "MongoDB", "Python", "Bash Scripting"
                ]
            },
            projects: [
                {
                    id: 1,
                    title: "RREF — RedOps Recon & Exploitation Framework",
                    category: "cybersecurity",
                    description: "Python/Bash offensive toolkit automating recon (port scanning, subdomain enumeration, service fingerprinting), exploitation, and report generation.",
                    technologies: ["Python", "Bash", "Penetration Testing", "Security Automation", "Nmap"],
                    features: ["Automated reconnaissance", "Service fingerprinting", "Subdomain enumeration", "Exploitation automation", "Actionable report generation"],
                    achievements: ["Deployed in 4 Red Team engagements", "Reduced manual pentest cycle time by ~35%"],
                    longDescription: "RREF is a comprehensive, production-ready offensive security framework built in Python and Bash. Designed to streamline and automate the tedious initial phases of a red team engagement, it coordinates port scanning, subdomain discoveries, and service profiling, reducing standard pentest cycles significantly while providing consistent outcomes.",
                    github: "https://github.com/BALASUBRAMANIYANB/RREF-RedOps-Recon-Exploitation-Framework-.git"
                },
                {
                    id: 2,
                    title: "Sentinel-SDK — Black-Box Security Auditing Framework",
                    category: "cybersecurity",
                    description: "Modular plugin-based vulnerability detection framework covering OWASP Top 10 vectors.",
                    technologies: ["Python", "SQLite", "Jinja2", "FPDF2", "OWASP Top 10"],
                    features: ["WAF detection", "Dark crawler", "Subdomain enumeration", "Dual HTML/PDF reporting", "CI/CD integration ready"],
                    achievements: ["Detected 18 vulnerabilities missed by automated scanners", "Successfully audited 3 client external assets"],
                    longDescription: "Sentinel-SDK is a modular, extensible security auditing framework built for external black-box assessments. It wraps passive intelligence gathering and active offensive scanning plugins into a consolidated architecture. Features WAF detection, dark crawler modules, and formats HTML/PDF security reports.",
                    github: "https://github.com/BALASUBRAMANIYANB/Sentinel-SDK.git"
                },
                {
                    id: 3,
                    title: "Phantera — Insider Threat Detection (ML)",
                    category: "cybersecurity",
                    description: "Behavioural biometrics anomaly detection system utilizing machine learning models.",
                    technologies: ["Python", "FastAPI", "Streamlit", "Machine Learning", "Isolation Forest"],
                    features: ["Keyboard & mouse dynamics tracking", "Real-time behavior profiling", "Machine learning anomaly scoring", "Interactive Streamlit dashboard", "FastAPI analytics backend"],
                    achievements: ["Achieved 89% detection accuracy in lab testing", "Built lightweight behavior logging client"],
                    longDescription: "Phantera leverages behavioral biometrics to identify malicious insider activity. By tracking typing patterns, mouse hover trajectories, and command sequences, the system trains an Isolation Forest model to detect anomalies. The FastAPI backend serves the anomaly metrics to an interactive Streamlit UI.",
                    github: "https://github.com/BALASUBRAMANIYANB/Phantera.git"
                },
                {
                    id: 4,
                    title: "Drift Enterprises",
                    category: "development",
                    description: "Modern e-commerce solution for enterprise business requirements.",
                    technologies: ["MERN Stack", "Stripe API", "JWT", "Tailwind CSS", "MongoDB"],
                    features: ["Admin dashboard", "Order tracking", "Inventory management", "Analytics overview", "Secure payments"],
                    achievements: ["Optimized database query performance", "Implemented real-time inventory tracking"],
                    longDescription: "A scalable enterprise-grade e-commerce solution designed for high-volume businesses. Includes a powerful admin dashboard for inventory management and sales analytics, real-time order tracking, and secure payment integration using Stripe.",
                    github: "https://github.com/BALASUBRAMANIYANB/Drift-Enterprises"
                },
                {
                    id: 5,
                    title: "IT System Log Analyzer",
                    category: "cybersecurity",
                    description: "Custom SIEM security tool for log analysis and anomaly detection.",
                    technologies: ["Python", "Splunk", "SIEM", "Log Parsing", "Security Alerts"],
                    features: ["Pattern recognition", "Anomaly detection", "Automated alerting triggers", "Multi-source log ingestion"],
                    achievements: ["Reduced false positives by 15%", "Improved incident response triage speed"],
                    longDescription: "A sophisticated log analysis system that processes security logs from multiple sources to identify threats and anomalies. Ingests raw auth, sys, and web logs, using pattern matching and statistical models to bubble up critical events.",
                    github: "https://github.com/BALASUBRAMANIYANB/SECURITY-LOG-ANALYSER-FOR-IT-SYSTEMS-.git"
                },
                {
                    id: 6,
                    title: "LH- Stylehub",
                    category: "development",
                    description: "Full-featured e-commerce platform for fashion and lifestyle products.",
                    technologies: ["React.js", "Node.js", "MongoDB", "Redux", "Express"],
                    features: ["User authentication", "Product filtering & sorting", "Cart management", "Payment gateway integration"],
                    achievements: ["Developed responsive and secure UI", "Integrated secure payment processing"],
                    longDescription: "A comprehensive e-commerce platform built for fashion and lifestyle retail. Features a modern, responsive user interface with advanced product filtering, secure user authentication, and seamless cart management.",
                    github: "https://github.com/BALASUBRAMANIYANB/LH-Stylehub"
                },
                {
                    id: 7,
                    title: "REDOPS-VA — Automated Vulnerability Assessment Suite",
                    category: "cybersecurity",
                    description: "Orchestration tool integrating Burp Suite, Nessus API, and OWASP ZAP scans into a unified operational script.",
                    technologies: ["Python", "Nessus API", "OWASP ZAP API", "Burp REST API", "VAPT"],
                    features: ["Orchestrated scan automation triggers", "Consolidated XML/JSON report parser", "Automated priority alert dispatcher", "Custom vulnerability severity mapping"],
                    achievements: ["Reduced scan setup and review cycles by over 50%", "Successfully scanned and cataloged 50+ target nodes automatically"],
                    longDescription: "REDOPS-VA coordinates scans from major commercial and open-source vulnerability assessment tools. By using their REST and command-line interfaces, it launches scanners sequentially, retrieves their raw report outputs, parses the findings, deduplicates anomalies, and generates a unified risk analysis overview.",
                    github: "https://github.com/BALASUBRAMANIYANB/REDOPS-VA"
                },
                {
                    id: 8,
                    title: "TraceBack — Enterprise Digital Forensics Platform",
                    category: "cybersecurity",
                    description: "TraceBack is a comprehensive automated digital forensics incident response platform that collects, analyzes, and correlates forensic artifacts from Windows and Linux systems to reconstruct incident timelines and generate comprehensive security reports.",
                    technologies: ["Python", "Bash", "SIEM", "Incident Response", "Digital Forensics", "Log Parsing"],
                    features: ["Automated system artifact acquisition", "Event correlation engine for timeline profiling", "Cross-platform support (Windows & Linux)", "HTML/PDF investigator report generator", "Volatility integration for memory diagnostics"],
                    achievements: ["Cuts investigator manual evidence gathering time by 50%", "Successfully emulated in multiple threat hunting drills"],
                    longDescription: "TraceBack is a modular digital forensics incident response (DFIR) platform built in Python. Designed to run on-demand or during active response scenarios, it parses host artifacts (including Windows Event Logs, Prefetch databases, Linux terminal logs, and system registries) to construct chronological attack patterns and output clean reports.",
                    github: "https://github.com/BALASUBRAMANIYANB/Traceble.git"
                }
            ],
            experience: [
                {
                    position: "Cyber Security Research Analyst",
                    company: "Terra System Labs",
                    period: "12/2024 - Present",
                    location: "Bangalore, India",
                    description: "Developed and maintained custom penetration testing and security automation tools. Conducted advanced vulnerability research, finding and documenting critical high-risk exploits.",
                    achievements: [
                        "Performed vulnerability assessments and took part in Red Team exercises.",
                        "Contributed threat research reports and intelligence for internal and external teams.",
                        "Conducted 30+ web application, network, and infrastructure penetration tests; identified 40+ critical and high-severity CVEs across enterprise environments.",
                        "Performed privilege escalation, lateral movement, and post-exploitation during Red Team engagements; simulated adversarial attack chains using MITRE ATT&CK.",
                        "Built RREF recon/exploit framework, reducing manual pentest cycle time by ~35%.",
                        "Developed Sentinel-SDK, detecting 18 vulnerabilities missed by automated scanners.",
                        "Delivered CVSS-scored pentest reports covering OWASP Top 10 vectors with actionable remediation guidance."
                    ]
                },
                {
                    position: "Full-Stack Developer",
                    company: "SkillKaster",
                    period: "12/2024 - 06/2025",
                    location: "Remote",
                    description: "Built full-stack applications with React.js (frontend) and Node.js (backend). Integrated IPFS for decentralized file storage and sharing.",
                    achievements: [
                        "Implemented RESTful APIs with secure coding standards in agile teams.",
                        "Conducted security code reviews identifying 12+ injection and authentication vulnerabilities prior to deployment."
                    ]
                },
                {
                    position: "Cyber Crime Investigator",
                    company: "Tamilnadu Cyber Crime Wing",
                    period: "06/2023 - 07/2023",
                    location: "Coimbatore, Tamilnadu",
                    description: "Investigated security incidents, log analysis, threat intelligence with senior analysts.",
                    achievements: [
                        "Used Splunk to spot malicious patterns and support incident response.",
                        "Investigated 20+ cybercrime incidents using digital forensics and Splunk log analysis.",
                        "Reduced mean time to evidence collection by ~20% through structured incident triage procedures."
                    ]
                },
                {
                    position: "VAPT Intern",
                    company: "BM Infosec Limited",
                    period: "06/2022 - 07/2022",
                    location: "Coimbatore, Tamilnadu",
                    description: "Vulnerability Assessment and Penetration Testing on open-source software and endpoints.",
                    achievements: [
                        "Performed VAPT on open-source software and reported multiple critical security flaws.",
                        "Did endpoint vulnerability assessments to improve overall security posture."
                    ]
                },
                {
                    position: "Cyber Security Intern",
                    company: "IBM",
                    period: "03/2022 - 04/2022",
                    location: "Coimbatore, Tamilnadu",
                    description: "Security Operations Center (SOC) monitoring and alert automation.",
                    achievements: [
                        "Monitored and triaged 100+ security events daily using Splunk and Nessus, improving detection and response.",
                        "Helped triage incidents, cutting false positives by 15%.",
                        "Implemented SOAR alerts, improving team efficiency by 25%."
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
                    category: "Technical Proficiency",
                    icon: "fas fa-star",
                    items: [
                        "HackerRank SQL - 5 stars certification",
                        "HackerRank Python - 3 stars certification",
                        "SOC Analyst Badge - LetsDefend.io, demonstrating expertise in real-world SOC operations."
                    ]
                },
                {
                    category: "Accredited Certifications",
                    icon: "fas fa-certificate",
                    items: [
                        "Fellow of Management Systems Auditing (Mastermind Assurance)",
                        "ISO/IEC 27001:2022 Lead Auditor (IAF accredited)",
                        "ISO/IEC 27701:2019 Lead Auditor (IAF accredited)",
                        "ISO/IEC 42001:2023 AI Systems Auditor (IAF accredited)",
                        "CRTOM - Certified Red Team Operations Management"
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
                    name: "ISO/IEC 27001:2022 Lead Auditor",
                    issuer: "Mastermind Assurance",
                    year: "2024",
                    icon: "fa-clipboard-check",
                    verified: true
                },
                {
                    name: "ISO/IEC 27701:2019 Lead Auditor",
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
                    name: "Fellow of Management Systems Auditing",
                    issuer: "Mastermind Assurance",
                    year: "2024",
                    icon: "fa-medal",
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
                    name: "VAPT – Vulnerability Assessment and Penetration Testing",
                    issuer: "Bored Monk Pvt Ltd.",
                    year: "2024",
                    icon: "fa-shield-alt",
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
                    name: "C3SA – Cybersecurity Analyst",
                    issuer: "Cyberwarfare Labs",
                    year: "2023",
                    icon: "fa-user-ninja",
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
                    name: "CPPS – Certified Phishing Prevention Specialist",
                    issuer: "Hack&Fix Academy",
                    year: "2023",
                    icon: "fa-mail-bulk",
                    verified: true
                },
                {
                    name: "CISSP (Course Certificate)",
                    issuer: "Alison",
                    year: "2023",
                    icon: "fa-graduation-cap",
                    verified: false
                },
                {
                    name: "CCEP – Certified Cybersecurity Educator Professional",
                    issuer: "Red Team Leaders",
                    year: "2023",
                    icon: "fa-chalkboard-teacher",
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
                    name: "Introduction to Critical Infrastructure Protection",
                    issuer: "OPSWAT",
                    year: "2022",
                    icon: "fa-industry",
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
                    name: "CSI Linux Administration",
                    issuer: "CSI Linux",
                    year: "2022",
                    icon: "fab fa-linux",
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
                    name: "Offensive Agent AI",
                    issuer: "Red Team Leaders",
                    year: "2025",
                    icon: "fa-robot",
                    verified: true
                },
                {
                    name: "Cyber Security Fundamentals",
                    issuer: "IBM",
                    year: "2022",
                    icon: "fa-shield-alt",
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
                    name: "OWASP Top 10 Web Application Security",
                    issuer: "Bored Monk Pvt Ltd.",
                    year: "2023",
                    icon: "fa-bug",
                    verified: true
                },
                {
                    name: "Active Directory Exploitation & Defense",
                    issuer: "Cyberwarfare Labs",
                    year: "2024",
                    icon: "fa-server",
                    verified: true
                },
                {
                    name: "Introduction to Cybersecurity",
                    issuer: "Cisco Networking Academy",
                    year: "2021",
                    icon: "fa-shield-alt",
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
                    name: "Incident Response Fundamentals",
                    issuer: "LetsDefend",
                    year: "2022",
                    icon: "fa-first-aid",
                    verified: true
                },
                {
                    name: "Secure Coding Practices (React/Node)",
                    issuer: "SkillKaster",
                    year: "2024",
                    icon: "fa-code-branch",
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
                    name: "DevSecOps Fundamentals",
                    issuer: "Oracle",
                    year: "2023",
                    icon: "fa-infinity",
                    verified: true
                }
            ],
            statistics: {
                securityEvents: 100,
                yearsExperience: 2,
                certifications: 31,
                projectsCompleted: 8,
                hackathonsParticipated: 3
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