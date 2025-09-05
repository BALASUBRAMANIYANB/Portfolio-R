// BALASUBRAMANIYAN B - Cybersecurity 3D Portfolio Application
class CyberPortfolio {
    constructor() {
        this.data = {
            personalInfo: {
                name: "BALASUBRAMANIYAN B",
                title: "Cybersecurity Research Analyst & Full-Stack Developer",
                tagline: "Defending Digital Frontiers Through Advanced Security Research",
                bio: "Cybersecurity professional skilled in VAPT and risk mitigation across web apps, networks, and cloud. Proficient with Burp Suite, OWASP ZAP, Metasploit, and Nessus, with solid foundation in incident response and threat analysis. Recently completed internship with Tamil Nadu Cyber Crime Wing, gaining hands-on experience in digital forensics and security operations.",
                location: "Coimbatore, Tamil Nadu",
                email: "balasubramaniyan9760@gmail.com",
                phone: "+916379436942",
                linkedIn: "https://linkedin.com/in/balasubramaniyan",
                github: "https://github.com/balasubramaniyan",
                currentPortfolio: "https://whitedevillyca.netlify.app/"
            },
            skills: {
                cybersecurity: [
                    {name: "Vulnerability Assessment & Penetration Testing", level: 95, description: "Expert in VAPT using Burp Suite, OWASP ZAP, Metasploit"},
                    {name: "SOC Operations & Incident Response", level: 90, description: "SIEM, IDS/IPS, Threat Analysis, Incident Response"},
                    {name: "Cyber Forensics & Malware Analysis", level: 88, description: "CSI Linux, Steganography, Digital Evidence Analysis"},
                    {name: "Network Security", level: 85, description: "Wireshark, Nmap, Network Defense, Ethical Hacking"},
                    {name: "Cloud Security", level: 82, description: "Oracle Cloud Infrastructure, Security Architecture"},
                    {name: "Threat Intelligence", level: 80, description: "Log Analysis, Pattern Recognition, Splunk"}
                ],
                development: [
                    {name: "Python", level: 85, description: "Security automation, scripting, and tool development"},
                    {name: "JavaScript", level: 82, description: "Full-stack development with React.js and Node.js"},
                    {name: "Java", level: 80, description: "Enterprise application development and security"},
                    {name: "SQL", level: 90, description: "Database security and optimization - 5 stars on HackerRank"},
                    {name: "C Programming", level: 75, description: "System-level programming and security tools"},
                    {name: "MongoDB", level: 78, description: "Database design and management"}
                ],
                tools: [
                    "Burp Suite", "OWASP ZAP", "Selenium", "Appium", "Metasploit", 
                    "Nessus", "Nikto", "Nmap", "Wireshark", "Wazuh", "Splunk",
                    "SIEM", "IDS/IPS", "CSI Linux", "React.js", "Node.js", "IPFS"
                ]
            },
            certifications: [
                {name: "VAPT - Vulnerability Assessment and Penetration Testing", issuer: "Bored Monk Pvt Ltd", year: "2024", verified: true},
                {name: "Oracle Cloud Infrastructure Certified Foundation Associate", issuer: "Oracle", year: "2024", verified: true},
                {name: "C3SA - Cybersecurity Analyst", issuer: "Cyberwarfare Labs", year: "2024", verified: true},
                {name: "ISO/IEC 27001 Information Security Associate", issuer: "SkillFront", year: "2023", verified: true},
                {name: "Security Operation Center - SOC", issuer: "Cybrary", year: "2023", verified: true},
                {name: "CISSP", issuer: "Alison", year: "2023", verified: true},
                {name: "Blockchain Security", issuer: "Cyfrin", year: "2024", verified: true},
                {name: "Ethical Hacking Essentials (ECH)", issuer: "Code Red", year: "2023", verified: true},
                {name: "Network Defense Essentials", issuer: "Code Red", year: "2023", verified: true},
                {name: "Introduction to Darkweb, Anonymity, and Cryptocurrency", issuer: "Code Red", year: "2023", verified: true},
                {name: "CSI Linux Administration", issuer: "CSI Linux", year: "2023", verified: true}
            ],
            projects: [
                {
                    id: 1,
                    title: "Steganography Tool",
                    category: "cybersecurity",
                    description: "Advanced steganography tool using STEGHIDE to hide information within image files",
                    technologies: ["Python", "STEGHIDE", "Cryptography", "Digital Forensics"],
                    features: ["Data encryption", "Image manipulation", "Forensic analysis"],
                    achievements: ["Successfully implemented data hiding techniques", "Demonstrated advanced digital forensics skills"],
                    longDescription: "An advanced steganography tool built using STEGHIDE for hiding sensitive information within image files. This tool incorporates modern cryptographic techniques to ensure data security while maintaining image integrity. Developed for digital forensics investigations and secure communication purposes."
                },
                {
                    id: 2,
                    title: "Web Application Security Testing Framework", 
                    category: "cybersecurity",
                    description: "Automated security testing framework using Selenium and OWASP ZAP",
                    technologies: ["Selenium", "OWASP ZAP", "Python", "Security Testing"],
                    features: ["Automated vulnerability scanning", "Report generation", "Remediation suggestions"],
                    achievements: ["Identified critical vulnerabilities", "Improved application security posture"],
                    longDescription: "A comprehensive automated security testing framework that combines Selenium for web automation with OWASP ZAP for vulnerability scanning. This framework enables continuous security testing in CI/CD pipelines and provides detailed vulnerability reports with remediation suggestions."
                },
                {
                    id: 3,
                    title: "Packet Analysis Tool",
                    category: "cybersecurity", 
                    description: "Network packet capturing and analysis tool using Burp Suite",
                    technologies: ["Burp Suite", "Network Security", "Wireshark", "Python"],
                    features: ["Real-time packet capture", "Traffic analysis", "Security monitoring"],
                    achievements: ["Enhanced network security monitoring", "Developed custom analysis scripts"],
                    longDescription: "A sophisticated packet analysis tool that captures and analyzes network traffic in real-time. Built with Burp Suite and enhanced with custom Python scripts for advanced pattern recognition and threat detection. Used for network forensics and security monitoring."
                },
                {
                    id: 4,
                    title: "IT System Security Log Analyzer",
                    category: "cybersecurity",
                    description: "Custom security tool for comprehensive log analysis and threat detection",
                    technologies: ["Python", "Splunk", "SIEM", "Machine Learning"],
                    features: ["Pattern recognition", "Anomaly detection", "Automated alerting"],
                    achievements: ["Reduced false positives by 15%", "Improved incident response time"],
                    longDescription: "A sophisticated log analysis system that processes security logs from multiple sources to identify threats and anomalies. Incorporates machine learning algorithms for pattern recognition and automated threat detection, significantly reducing false positives and improving security operations efficiency."
                },
                {
                    id: 5,
                    title: "Full-Stack Application with IPFS Integration",
                    category: "development",
                    description: "Decentralized web application with blockchain storage",
                    technologies: ["React.js", "Node.js", "MongoDB", "IPFS"],
                    features: ["Decentralized storage", "Responsive UI", "RESTful APIs"],
                    achievements: ["Built scalable architecture", "Implemented secure file sharing"],
                    longDescription: "A modern full-stack web application built with React.js frontend and Node.js backend, integrated with IPFS for decentralized file storage. Features secure user authentication, responsive design, and RESTful API architecture for scalable and secure data management."
                }
            ],
            experience: [
                {
                    position: "Cyber Security Research Analyst",
                    company: "Terra System Labs",
                    period: "Dec 2024 - Present",
                    location: "Bangalore, India",
                    description: "Contributing to internal security tools and platforms",
                    achievements: [
                        "Enhancing and maintaining penetration testing and security automation tools",
                        "Conducting advanced vulnerability research and exploit development", 
                        "Supporting client projects in vulnerability assessments and red teaming exercises",
                        "Collaborating with team on threat research and reporting"
                    ]
                },
                {
                    position: "Full-Stack Developer",
                    company: "SkillKaster", 
                    period: "Dec 2024 - Jun 2025",
                    description: "Building and maintaining full-stack web applications",
                    achievements: [
                        "Built full-stack applications using React.js and Node.js",
                        "Designed and managed MongoDB databases for efficient data storage",
                        "Integrated IPFS for decentralized file storage and sharing",
                        "Implemented RESTful APIs and ensured secure, scalable architecture",
                        "Collaborated with UI/UX designers for responsive interfaces"
                    ]
                },
                {
                    position: "Cyber Crime Investigator",
                    company: "Tamil Nadu Cyber Crime Wing",
                    period: "Jun 2023 - Jul 2023", 
                    location: "Coimbatore, India",
                    description: "Hands-on experience in digital forensics and security operations",
                    achievements: [
                        "Conducted comprehensive log analysis and investigated security incidents",
                        "Collaborated with senior analysts on threat intelligence gathering",
                        "Used Splunk to identify patterns in malicious activity",
                        "Assisted in incident response and threat mitigation"
                    ]
                },
                {
                    position: "Vulnerability Assessment and Penetration Testing Specialist",
                    company: "BM Infosec Limited",
                    period: "Jun 2022 - Jul 2022",
                    location: "Coimbatore, India", 
                    description: "Performed VAPT on open source software",
                    achievements: [
                        "Successfully identified and reported vulnerabilities in open-source software",
                        "Conducted comprehensive vulnerability assessments",
                        "Performed endpoint security testing and analysis",
                        "Documented findings and provided remediation recommendations"
                    ]
                },
                {
                    position: "Cyber Security Intern",
                    company: "IBM",
                    period: "Mar 2022 - Apr 2022",
                    location: "Coimbatore, India",
                    description: "SOC operations and security monitoring",
                    achievements: [
                        "Monitored over 100 security events daily using Splunk and Nessus",
                        "Detected and responded to security incidents effectively",
                        "Assisted in initial triage and classification of incidents",
                        "Reduced false positives by 15% through improved analysis techniques",
                        "Implemented security alerts using SOAR tools, improving efficiency by 25%"
                    ]
                }
            ],
            achievements: [
                {
                    category: "Hackathons",
                    icon: "fas fa-trophy",
                    items: [
                        "Participated in Idea Hackathon 2.0 - Showcased cybersecurity solutions",
                        "TN Startup Hackathon - Demonstrated problem-solving skills", 
                        "Kavach 2023 - National cybersecurity competition"
                    ]
                },
                {
                    category: "Technical Proficiency",
                    icon: "fas fa-star",
                    items: [
                        "HackerRank SQL - 5 stars certification",
                        "HackerRank Python - 3 stars certification",
                        "SOC Analyst Badge - LetsDefend.io"
                    ]
                },
                {
                    category: "CTF Participation",
                    icon: "fas fa-flag",
                    items: [
                        "Active participant in HackerOne CTF challenges",
                        "Payatu CTF competitions - Vulnerability identification focus",
                        "Ethical hacking and penetration testing competitions"
                    ]
                }
            ],
            education: [
                {
                    degree: "BSc Computer Science (Cloud Technology and Information Security)",
                    institution: "Rathinam College of Arts and Science",
                    period: "2021 - 2024",
                    location: "Coimbatore, India",
                    grade: "89%",
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
            statistics: {
                securityEvents: 100,
                yearsExperience: 3,
                certifications: 11,
                projectsCompleted: 5,
                hackathonsParticipated: 3
            }
        };

        this.currentFilter = 'all';
        this.isScrolling = false;
        this.matrixAnimationId = null;
        this.skillsAnimated = false;
        this.isInitialized = false;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupMatrixBackground();
        this.setupFloatingElements();
        this.setupTerminalEffects();
        this.setupScrollEffects();
        this.populateData();
        this.setupIntersectionObserver();
        this.setupCodeDisplay();
        this.setupNetworkDiagram();
        this.isInitialized = true;
    }

    setupEventListeners() {
        // Navigation
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                }
            });
        });

        // Scroll events
        window.addEventListener('scroll', this.handleScroll.bind(this));

        // Back to top
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactSubmit.bind(this));
        }

        // Modal events
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.getElementById('modal-overlay');
        
        if (modalClose) modalClose.addEventListener('click', this.closeModal.bind(this));
        if (modalOverlay) modalOverlay.addEventListener('click', this.closeModal.bind(this));

        // Escape key for modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Project filters - will be set up after projects are populated
        setTimeout(() => {
            this.setupProjectFilters();
        }, 100);

        // Resize handling
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

        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff41';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const animate = () => {
            drawMatrix();
            this.matrixAnimationId = requestAnimationFrame(animate);
        };

        animate();
    }

    setupFloatingElements() {
        const container = document.getElementById('floating-elements');
        if (!container) return;

        const elements = ['🔒', '🛡️', '⚡', '🔍', '💻', '🌐', '🔐', '🚨'];
        
        for (let i = 0; i < 8; i++) {
            const element = document.createElement('div');
            element.textContent = elements[i % elements.length];
            element.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 15}px;
                opacity: ${Math.random() * 0.3 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float-random ${Math.random() * 10 + 10}s linear infinite;
                pointer-events: none;
                z-index: 1;
            `;
            container.appendChild(element);
        }

        // Add floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-random {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(50px, -30px) rotate(90deg); }
                50% { transform: translate(-30px, -60px) rotate(180deg); }
                75% { transform: translate(-50px, -30px) rotate(270deg); }
                100% { transform: translate(0, 0) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    setupTerminalEffects() {
        // Typewriter effect for command
        const commandElement = document.getElementById('typing-command');
        const outputElement = document.getElementById('terminal-output');
        
        if (commandElement && outputElement) {
            const command = 'whoami';
            let i = 0;
            
            const typeCommand = () => {
                if (i < command.length) {
                    commandElement.textContent = command.substring(0, i + 1);
                    i++;
                    setTimeout(typeCommand, 100);
                } else {
                    setTimeout(() => {
                        commandElement.style.borderRight = 'none';
                        outputElement.style.display = 'block';
                        this.startStatsAnimation();
                    }, 1000);
                }
            };

            setTimeout(typeCommand, 1000);
        }
    }

    setupCodeDisplay() {
        const codeDisplay = document.getElementById('code-display');
        if (!codeDisplay) return;

        const codeLines = [
            '> nmap -sS -O target_host',
            '> burpsuite --proxy=127.0.0.1:8080',
            '> python vapt_scanner.py --target domain.com',
            '> metasploit -x "use exploit/windows/smb"',
            '> wireshark -i eth0 -f "tcp port 80"',
            '> owasp-zap -cmd -quickurl http://target',
            '> nessus --scan-policy="full_scan" target',
            '> steghide embed -cf image.jpg -ef secret.txt',
            '> splunk search "index=security error"',
            '> nikto -h http://target.com'
        ];

        let currentLine = 0;
        
        const displayCode = () => {
            codeDisplay.innerHTML = codeLines.slice(0, currentLine + 1).join('<br>');
            currentLine = (currentLine + 1) % codeLines.length;
        };

        displayCode();
        setInterval(displayCode, 2000);
    }

    setupNetworkDiagram() {
        const networkDiagram = document.getElementById('network-diagram');
        if (!networkDiagram) return;

        const nodes = ['🌐', '💻', '🔒', '📱', '🖥️'];
        const statuses = ['SCANNING', 'ANALYZING', 'SECURING', 'MONITORING', 'PROTECTED'];
        let currentNode = 0;

        const updateDiagram = () => {
            networkDiagram.innerHTML = `
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; font-size: 1rem;">
                    ${nodes.map((node, index) => 
                        `<div style="color: ${index === currentNode ? '#00ffff' : '#00ff41'}; text-align: center;">${node}</div>`
                    ).join('')}
                </div>
                <div style="margin-top: 5px; font-size: 0.4rem; color: #00ffff;">
                    SECURITY STATUS: ${statuses[currentNode]}
                </div>
            `;
            currentNode = (currentNode + 1) % nodes.length;
        };

        updateDiagram();
        setInterval(updateDiagram, 1500);
    }

    startStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const stats = [this.data.statistics.securityEvents, this.data.statistics.yearsExperience, this.data.statistics.certifications, this.data.statistics.hackathonsParticipated];
        
        statNumbers.forEach((element, index) => {
            const target = stats[index];
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
            
            setTimeout(animate, index * 200);
        });
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
                const backToTop = document.getElementById('back-to-top');
                const navbar = document.getElementById('navbar');
                
                // Back to top button
                if (backToTop) {
                    if (window.pageYOffset > 300) {
                        backToTop.classList.add('visible');
                    } else {
                        backToTop.classList.remove('visible');
                    }
                }
                
                // Navbar background
                if (navbar) {
                    if (window.pageYOffset > 50) {
                        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                    } else {
                        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                    }
                }
                
                this.isScrolling = false;
            });
        }
        this.isScrolling = true;
    }

    populateData() {
        console.log('Populating data...');
        this.populateSkills();
        this.populateProjects();
        this.populateCertifications();
        this.populateExperience();
        this.populateAchievements();
        this.populateEducation();
    }

    populateSkills() {
        const cyberSkills = document.getElementById('cyber-skills');
        const devSkills = document.getElementById('dev-skills');
        const toolsDisplay = document.getElementById('tools-display');

        if (cyberSkills) {
            cyberSkills.innerHTML = this.data.skills.cybersecurity.map(skill => `
                <div class="skill-card">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="${skill.level}%"></div>
                    </div>
                    <p class="skill-description">${skill.description}</p>
                </div>
            `).join('');
        }

        if (devSkills) {
            devSkills.innerHTML = this.data.skills.development.map(skill => `
                <div class="skill-card">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="${skill.level}%"></div>
                    </div>
                    <p class="skill-description">${skill.description}</p>
                </div>
            `).join('');
        }

        if (toolsDisplay) {
            toolsDisplay.innerHTML = this.data.skills.tools.map(tool => `
                <div class="tool-tag">${tool}</div>
            `).join('');
        }
        
        console.log('Skills populated');
    }

    populateProjects() {
        console.log('Populating projects...');
        this.renderProjects(this.data.projects);
    }

    renderProjects(projects) {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) {
            console.log('Projects grid not found');
            return;
        }

        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card" data-category="${project.category}" onclick="window.cyberPortfolio.openProjectModal(${project.id})">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.category.toUpperCase()}</span>
                </div>
                <div class="project-body">
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <button class="project-link" onclick="event.stopPropagation(); window.cyberPortfolio.openProjectModal(${project.id})">
                            <i class="fas fa-external-link-alt"></i> View Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        console.log('Projects rendered:', projects.length);
    }

    populateCertifications() {
        const certificationsGrid = document.getElementById('certifications-grid');
        if (!certificationsGrid) return;

        const iconMap = {
            'VAPT - Vulnerability Assessment and Penetration Testing': 'fa-shield-alt',
            'Oracle Cloud Infrastructure Certified Foundation Associate': 'fab fa-aws',
            'C3SA - Cybersecurity Analyst': 'fa-user-secret',
            'ISO/IEC 27001 Information Security Associate': 'fa-lock',
            'Security Operation Center - SOC': 'fa-eye',
            'CISSP': 'fa-certificate',
            'Blockchain Security': 'fa-chain',
            'Ethical Hacking Essentials (ECH)': 'fa-bug',
            'Network Defense Essentials': 'fa-network-wired',
            'Introduction to Darkweb, Anonymity, and Cryptocurrency': 'fa-mask',
            'CSI Linux Administration': 'fab fa-linux'
        };

        certificationsGrid.innerHTML = this.data.certifications.map(cert => `
            <div class="cert-card">
                <div class="cert-icon">
                    <i class="${iconMap[cert.name] || 'fas fa-certificate'}"></i>
                </div>
                <h3>${cert.name}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                <p class="cert-year">${cert.year}</p>
                <div class="cert-status ${cert.verified ? 'verified' : ''}">
                    ${cert.verified ? 'VERIFIED' : 'PENDING'}
                </div>
            </div>
        `).join('');
        
        console.log('Certifications populated');
    }

    populateExperience() {
        const experienceTimeline = document.getElementById('experience-timeline');
        if (!experienceTimeline) return;

        experienceTimeline.innerHTML = this.data.experience.map((exp, index) => `
            <div class="timeline-item" style="animation-delay: ${index * 0.2}s">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${exp.position}</h3>
                    <p class="company">${exp.company}</p>
                    <p class="period">${exp.period}</p>
                    ${exp.location ? `<p class="location">${exp.location}</p>` : ''}
                    <p class="timeline-description">${exp.description}</p>
                    <ul class="achievements">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
        
        console.log('Experience populated');
    }

    populateAchievements() {
        const achievementsContent = document.getElementById('achievements-content');
        if (!achievementsContent) return;

        achievementsContent.innerHTML = this.data.achievements.map(category => `
            <div class="achievement-category">
                <h3>
                    <i class="${category.icon}"></i>
                    ${category.category}
                </h3>
                <ul class="achievement-list">
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
        
        console.log('Achievements populated');
    }

    populateEducation() {
        const educationContent = document.getElementById('education-content');
        if (!educationContent) return;

        educationContent.innerHTML = this.data.education.map(edu => `
            <div class="education-card">
                <div class="education-header">
                    <div class="education-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h3>${edu.degree}</h3>
                        <p class="education-institution">${edu.institution}</p>
                        <p class="education-period">${edu.period}</p>
                        ${edu.location ? `<p class="education-location">${edu.location}</p>` : ''}
                        <p class="education-grade">Grade: ${edu.grade}</p>
                        ${edu.specialization ? `<p class="education-specialization">Specialization: ${edu.specialization}</p>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        
        console.log('Education populated');
    }

    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        if (filterButtons.length === 0) {
            console.log('No filter buttons found');
            return;
        }
        
        console.log('Setting up project filters...');
        
        filterButtons.forEach(button => {
            // Remove existing event listeners
            button.replaceWith(button.cloneNode(true));
        });
        
        // Re-select buttons after cloning
        const newFilterButtons = document.querySelectorAll('.filter-btn');
        
        newFilterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                console.log('Filter clicked:', button.getAttribute('data-filter'));
                
                // Remove active class from all buttons
                newFilterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filter = button.getAttribute('data-filter');
                this.currentFilter = filter;
                
                // Filter projects
                const filteredProjects = filter === 'all' 
                    ? this.data.projects 
                    : this.data.projects.filter(project => project.category === filter);
                
                console.log('Filtered projects:', filteredProjects.length);
                
                // Animate transition
                const projectsGrid = document.getElementById('projects-grid');
                if (projectsGrid) {
                    projectsGrid.style.opacity = '0';
                    projectsGrid.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        this.renderProjects(filteredProjects);
                        projectsGrid.style.opacity = '1';
                        projectsGrid.style.transform = 'translateY(0)';
                    }, 300);
                }
            });
        });
    }

    openProjectModal(projectId) {
        console.log('Opening project modal for ID:', projectId);
        const project = this.data.projects.find(p => p.id === projectId);
        if (!project) {
            console.log('Project not found');
            return;
        }

        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');

        if (modalBody) {
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                <div class="project-modal-content">
                    <div class="project-modal-image">
                        <i class="fas ${project.category === 'cybersecurity' ? 'fa-shield-alt' : 'fa-code'}"></i>
                    </div>
                    <p class="project-modal-description">${project.longDescription}</p>
                    
                    <h3>Key Features</h3>
                    <ul class="project-features">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    
                    <h3>Achievements</h3>
                    <ul class="project-features">
                        ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
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

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    // Animate skill bars when skills section comes into view
                    if (entry.target.id === 'skills' && !this.skillsAnimated) {
                        this.animateSkillBars();
                        this.skillsAnimated = true;
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }, index * 100);
        });
    }

    handleContactSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            this.showNotification('Please fill in all required fields.', 'error');
            return false;
        }
        
        if (!this.isValidEmail(data.email)) {
            this.showNotification('Please enter a valid email address.', 'error');
            return false;
        }
        
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span><span class="btn-text">TRANSMITTING...</span>';
        submitButton.disabled = true;
        
        setTimeout(() => {
            this.showNotification('Message transmitted successfully! Awaiting response...', 'success');
            form.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
        
        return false;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: rgba(0, 0, 0, 0.9);
            border: 2px solid ${type === 'success' ? 'var(--cyber-primary)' : 'var(--cyber-accent)'};
            border-radius: 8px;
            padding: 1rem 1.5rem;
            color: var(--cyber-text);
            font-family: var(--font-code);
            z-index: 3000;
            max-width: 400px;
            box-shadow: 0 10px 30px ${type === 'success' ? 'rgba(0, 255, 65, 0.3)' : 'rgba(255, 0, 64, 0.3)'};
            backdrop-filter: blur(10px);
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    handleResize() {
        // Reinitialize matrix background on resize
        if (this.matrixAnimationId) {
            cancelAnimationFrame(this.matrixAnimationId);
        }
        this.setupMatrixBackground();
    }

    destroy() {
        if (this.matrixAnimationId) {
            cancelAnimationFrame(this.matrixAnimationId);
        }
    }
}

// Initialize the application when DOM is loaded
let cyberPortfolio;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing portfolio...');
    cyberPortfolio = new CyberPortfolio();
    window.cyberPortfolio = cyberPortfolio;
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (cyberPortfolio) {
        cyberPortfolio.destroy();
    }
});

// Export for global access
window.cyberPortfolio = cyberPortfolio;