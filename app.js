document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = hamburger.querySelectorAll('span');
      if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking nav link
    const navLinks = nav.querySelectorAll('.nav-menu a, .btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // 3. E = Y * AI^2 Simulator Logic
  const yetkinlikSlider = document.getElementById('yetkinlik-slider');
  const aiSlider = document.getElementById('ai-slider');
  
  const yetkinlikValue = document.getElementById('yetkinlik-val');
  const aiValue = document.getElementById('ai-val');
  const resultValue = document.getElementById('result-val');
  
  const graphLine = document.getElementById('graph-line');
  const graphArea = document.getElementById('graph-area');
  const graphDot = document.getElementById('graph-dot');

  // Chart coordinates config (viewBox = 0 0 500 240)
  const paddingX = 40;
  const paddingY = 20;
  const chartWidth = 500 - (paddingX * 2);  // 420
  const chartHeight = 240 - (paddingY * 2); // 200

  function updateSimulator() {
    if (!yetkinlikSlider || !aiSlider) return;

    const Y = parseFloat(yetkinlikSlider.value);
    const AI = parseFloat(aiSlider.value);
    
    // Calculate E = Y * AI^2
    const E = Math.round(Y * Math.pow(AI, 2));

    // Update textual values
    yetkinlikValue.textContent = Y;
    aiValue.textContent = AI.toFixed(1);
    
    // Animate target value count
    animateCounter(resultValue, E);

    // Update SVG Graph
    drawGraph(Y, AI, E);
  }

  function drawGraph(Y, currentAI, currentE) {
    if (!graphLine || !graphArea || !graphDot) return;

    let points = [];
    const step = 0.5; // step size for smooth curve drawing
    
    for (let x = 1; x <= 10; x += step) {
      // Calculate value on curve: E_x = Y * x^2
      const e_val = Y * Math.pow(x, 2);
      
      // Map x to SVG coordinate X
      const svgX = paddingX + ((x - 1) / 9) * chartWidth;
      
      // Map e_val to SVG coordinate Y (0 to 10000 max)
      const svgY = (paddingY + chartHeight) - (e_val / 10000) * chartHeight;
      
      points.push({ x: svgX, y: svgY });
    }

    // Create line path D string
    let lineD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      lineD += ` L ${points[i].x} ${points[i].y}`;
    }
    graphLine.setAttribute('d', lineD);

    // Create area path D string (closing the loop at the bottom baseline)
    const baselineY = paddingY + chartHeight;
    const areaD = `${lineD} L ${points[points.length - 1].x} ${baselineY} L ${points[0].x} ${baselineY} Z`;
    graphArea.setAttribute('d', areaD);

    // Position the dot at the current interactive point
    const currentSvgX = paddingX + ((currentAI - 1) / 9) * chartWidth;
    const currentSvgY = (paddingY + chartHeight) - (currentE / 10000) * chartHeight;
    
    graphDot.setAttribute('cx', currentSvgX);
    graphDot.setAttribute('cy', currentSvgY);
  }

  // Smooth counter animation
  let animationFrameId = null;
  function animateCounter(element, target) {
    const start = parseInt(element.textContent.replace(/[^0-9]/g, '')) || 0;
    const duration = 250; // ms
    const startTime = performance.now();

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    function updateCount(timestamp) {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.round(start + (target - start) * easeProgress);
      
      element.textContent = current.toLocaleString('tr-TR');

      if (runtime < duration) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        element.textContent = target.toLocaleString('tr-TR');
      }
    }

    animationFrameId = requestAnimationFrame(updateCount);
  }

  // Bind slider input events
  if (yetkinlikSlider && aiSlider) {
    yetkinlikSlider.addEventListener('input', updateSimulator);
    aiSlider.addEventListener('input', updateSimulator);
    
    // Initial draw
    updateSimulator();
  }

  // 4. Scroll reveals / dynamic styling for active nav links
  const sections = document.querySelectorAll('section, div.themed-section');
  const navItems = document.querySelectorAll('.nav-menu a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        item.classList.remove('active');
        if (href === `#${current}` || (current === 'hero' && href === '#')) {
          item.classList.add('active');
        }
      }
    });
  });

  // 5. Corvis Chatbot Engine
  const corvisRobot = document.getElementById('corvis-robot');
  const corvisMessages = document.getElementById('corvis-messages');
  const corvisForm = document.getElementById('corvis-form');
  const corvisInput = document.getElementById('corvis-input');
  const corvisReplies = document.getElementById('corvis-replies');

  if (corvisRobot && corvisMessages) {
    const isEn = document.documentElement.lang === 'en';

    const CORVIS_KNOWLEDGE_TR = [
      {
        keywords: ["axiom nedir", "axiom ne demek", "axiom platformu", "axiom ne yapar", "axiom kimdir"],
        response: "Axiom, yapay zekayı (AI) kurumların iş yapış şekillerine entegre eden bir gelişim & dönüşüm platformudur. Biz sadece 'araç öğretmiyoruz, yetkinlik inşa ediyoruz'. Yapay zekayı iş süreçlerinizi çarpıcı şekilde geliştiren bir değişken olarak konumlandırıyoruz."
      },
      {
        keywords: ["programlar", "egitimler", "hangi programlar", "neler var", "kurslar", "satis", "liderlik"],
        response: "Axiom bünyesinde sahada kendini kanıtlamış iki ana entegrasyon programı sunuyoruz:\n1. **Liderlik × AI:** Yapay zekayı karar alma, delegasyon ve ekip yönetiminde kaldıraç olarak kullanmayı hedefler.\n2. **Satış × AI:** Müşteri deneyimi, satış süreçleri ve veri analitiğinde yapay zeka entegrasyonu sağlar.\nHer iki program da teorik değil, tamamen pratik ve ölçümlenebilir sonuç odaklıdır."
      },
      {
        keywords: ["kurucu", "kim kurdu", "ekip", "alp kohen", "suhan dincer", "metin tiryaki", "kimler var"],
        response: "Axiom üç kurucu ortağın disiplinlerini birleştirmesiyle kurulmuştur:\n- **Alp Kohen:** 35+ yıllık kurumsal danışmanlık birikimiyle süreç ve metodoloji mimarı.\n- **Sühan Dinçer:** 35+ yıllık eğitim ve yetkinlik geliştirme uzmanı.\n- **Metin Tiryaki:** AI Master & Sistem Mühendisi (MCSE) ve kıdemli Python geliştirici.\nBu üç disiplin, yetkinliği teknoloji ile birleştiren tek bir çatı altında toplanmıştır."
      },
      {
        keywords: ["iletisim", "nasil ulasabilirim", "iletisime gec", "adres", "e-posta", "telefon", "mail"],
        response: "Bizimle iletişime geçmek çok kolay! [İletişim](iletisim.html) sayfamızdaki formu doldurabilir veya doğrudan **info@axiom.com.tr** adresine mail atabilirsiniz. Talebinize 24 saat içinde dönüş yapıyoruz."
      },
      {
        keywords: ["metin tiryaki kimdir", "metin kimdir", "metin tiryaki ne yapar"],
        response: "Metin Tiryaki, Axiom'un AI Master ve Sistem Mühendisidir (MCSE). Python ve modern uygulama geliştirme (App Development) uzmanlığıyla, yapay zeka vizyonunu pratik yazılım ve otomasyon çözümlerine dönüştürür. Kurumlara AI entegrasyon eğitimleri verir."
      },
      {
        keywords: ["alp kohen kimdir", "alp kimdir"],
        response: "Alp Kohen, 35 yılı aşkın süredir kurumsal yönetim ve süreç danışmanlığı yapmaktadır. 45'ten fazla şirkette metodoloji tasarlamış, AI'ı araç olarak değil, organizasyonel yetkinliklerin bir değişkeni olarak kurgulayan Axiom metodolojisini geliştirmiştir."
      },
      {
        keywords: ["suhan dincer kimdir", "suhan kimdir"],
        response: "Sühan Dinçer, 35 yılı aşkın tecrübesiyle eğitim ve yetkinlik uzmanıdır. İnsanların nasıl öğrendiğini, hangi yetkinliklerin geliştirilmesi gerektiğini analiz ederek Roademy platformunun değerlendirme çerçevesini ve Axiom eğitimlerini tasarlamıştır."
      },
      {
        keywords: ["formul", "y * ai", "e = y * ai", "simulator"],
        response: "Formülümüz: **E = Y × AI²** (Etki = Yetkinlik × Yapay Zeka karesi).\nBu formül, yapay zekanın tek başına (Yetkinlik sıfırken) bir değer yaratmadığını; ancak güçlü bir yetkinlikle birleştiğinde etkisinin karesiyle katlanarak arttığını gösterir. Ana sayfamızdaki simülatör ile bunu test edebilirsiniz!"
      },
      {
        keywords: ["neredesiniz", "ofis", "konum", "nerede"],
        response: "Axiom ekibi olarak merkezimiz İstanbul, Türkiye'dedir. Ancak hizmetlerimizi ve danışmanlıklarımızı tüm Türkiye ve global ölçekte online/hibrit olarak sunabilmekteyiz."
      },
      {
        keywords: ["sen kimsin", "adin ne", "ismin ne", "axis kimdir", "axis nedir"],
        response: "Ben **Axis**, Axiom platformunun yapay zeka asistanıyım. Sizlere Axiom'un manifesto felsefesi, programları, kurucu ekibi ve iletişim kanalları hakkında bilgi vermek için tasarlanmış siber bir rehberim."
      }
    ];

    const CORVIS_KNOWLEDGE_EN = [
      {
        keywords: ["axiom", "what is", "what does", "about"],
        response: "Axiom is a development and transformation platform that integrates artificial intelligence (AI) into corporate workflows. We do not just 'teach tools, we build competencies'. We position AI as a multiplier variable that dramatically improves your business processes."
      },
      {
        keywords: ["program", "training", "leadership", "sales", "course"],
        response: "We offer two main integration programs proven in the field:\n1. **Leadership × AI:** Leverages AI for decision making, delegation, and team management.\n2. **Sales × AI:** Integrates AI in customer experience, sales processes, and data analytics.\nBoth programs are practical and focused on measurable results."
      },
      {
        keywords: ["team", "founder", "alp kohen", "suhan dincer", "metin tiryaki", "who"],
        response: "Axiom was founded by combining the disciplines of three partners:\n- **Alp Kohen:** Process and methodology architect with 35+ years of corporate consulting experience.\n- **Sühan Dinçer:** Trainer and competency development expert with 35+ years of experience.\n- **Metin Tiryaki:** AI Master & System Engineer (MCSE) and senior Python developer.\nThese three disciplines are united under one roof to combine competency with technology."
      },
      {
        keywords: ["contact", "reach", "email", "address", "mail"],
        response: "Getting in touch with us is very easy! You can fill out the form on our [Contact](iletisim.html) page or email us directly at **info@axiom.com.tr**. We reply to all inquiries within 24 hours."
      },
      {
        keywords: ["metin tiryaki", "metin"],
        response: "Metin Tiryaki is the AI Master and System Engineer (MCSE) at Axiom. With his expertise in Python and modern app development, he translates the AI vision into practical software and automation solutions. He conducts AI integration trainings for organizations."
      },
      {
        keywords: ["alp kohen", "alp"],
        response: "Alp Kohen has been providing corporate management and process consulting for over 35 years. He designed methodologies for 45+ companies and developed the Axiom methodology which positions AI as a variable of organizational competencies, not just a tool."
      },
      {
        keywords: ["suhan dincer", "suhan"],
        response: "Sühan Dinçer is a trainer and competency expert with 35+ years of experience. He analyzed how people learn and which competencies need development, designing the evaluation framework for the Roademy platform and Axiom training programs."
      },
      {
        keywords: ["formula", "y * ai", "e = y * ai", "simulator"],
        response: "Our formula is: **E = Y × AI²** (Impact = Competency × AI squared).\nThis formula shows that AI alone does not create value (when Competency is zero); but when combined with strong competency, its impact multiplies exponentially. You can test this with the simulator on our homepage!"
      },
      {
        keywords: ["location", "where", "office", "istanbul"],
        response: "As the Axiom team, our headquarters is in Istanbul, Turkey. However, we offer all our services and consulting online or in hybrid formats globally."
      },
      {
        keywords: ["who are you", "your name", "axis"],
        response: "I am **Axis**, the AI assistant of the Axiom platform. I am a cyber guide designed to provide you with information about Axiom's manifesto philosophy, programs, founding team, and contact channels."
      }
    ];

    const CORVIS_KNOWLEDGE = isEn ? CORVIS_KNOWLEDGE_EN : CORVIS_KNOWLEDGE_TR;

    function setCorvisState(state) {
      corvisRobot.className = `corvis-robot-container state-${state}`;
    }

    function addChatMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `chat-message ${sender}`;
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'message-content';
      
      if (sender === 'bot') {
        const formattedText = text
          .replace(/\n/g, '<br>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        contentDiv.innerHTML = formattedText;
      } else {
        contentDiv.textContent = text;
      }
      
      msgDiv.appendChild(contentDiv);
      corvisMessages.appendChild(msgDiv);
      corvisMessages.scrollTop = corvisMessages.scrollHeight;
      return msgDiv;
    }

    function addTypingIndicator() {
      const indicatorDiv = document.createElement('div');
      indicatorDiv.className = 'chat-message bot typing-indicator-wrapper';
      indicatorDiv.innerHTML = `
        <div class="message-content">
          <div class="typing-indicator">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
          </div>
        </div>
      `;
      corvisMessages.appendChild(indicatorDiv);
      corvisMessages.scrollTop = corvisMessages.scrollHeight;
      return indicatorDiv;
    }

    function normalizeInput(str) {
      if (!str) return '';
      let norm = str.toLowerCase();
      // Replace decomposed Turkish dotting (combining dot above)
      norm = norm.replace(/\u0307/g, '');
      // Replace Turkish characters
      return norm
        .replace(/ı/g, 'i')
        .replace(/ş/g, 's')
        .replace(/ç/g, 'c')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ö/g, 'o')
        .trim();
    }

    function getBotResponse(input) {
      const cleanInput = normalizeInput(input);
      
      for (const item of CORVIS_KNOWLEDGE) {
        for (const keyword of item.keywords) {
          const cleanKeyword = normalizeInput(keyword);
          if (cleanInput.includes(cleanKeyword)) {
            return item.response;
          }
        }
      }
      if (isEn) {
        return "I could not fully understand what you want to learn about this topic. You can ask me about:\n- **What is Axiom?**\n- **Programs Offered**\n- **Founding Team (Alp Kohen, Sühan Dinçer, Metin Tiryaki)**\n- **Contact Us**\n- **E=Y×AI² Formula**";
      } else {
        return "Bu konuda tam olarak neyi öğrenmek istediğinizi anlayamadım. Bana şunları sorabilirsiniz:\n- **Axiom Nedir?**\n- **Sunulan Programlar**\n- **Kurucu Ekip (Alp Kohen, Sühan Dinçer, Metin Tiryaki)**\n- **Bizimle İletişim**\n- **E=Y×AI² Formülü**";
      }
    }

    function typeMessage(text, messageContentEl) {
      let index = 0;
      messageContentEl.innerHTML = "";
      setCorvisState('speaking');
      
      const formatted = text
        .replace(/\n/g, '<br>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
      
      let currentHTML = "";
      let inTag = false;
      
      const interval = setInterval(() => {
        if (index >= formatted.length) {
          clearInterval(interval);
          setCorvisState('idle');
          corvisMessages.scrollTop = corvisMessages.scrollHeight;
          return;
        }
        
        const char = formatted[index];
        if (char === '<') inTag = true;
        
        currentHTML += char;
        
        if (char === '>') inTag = false;
        
        if (!inTag) {
          messageContentEl.innerHTML = currentHTML;
          corvisMessages.scrollTop = corvisMessages.scrollHeight;
        }
        index++;
      }, 15);
    }

    function processQuestion(question) {
      setCorvisState('listening');
      addChatMessage('user', question);
      
      setTimeout(() => {
        setCorvisState('thinking');
        const indicator = addTypingIndicator();
        
        setTimeout(() => {
          if (indicator && indicator.parentNode) {
            indicator.parentNode.removeChild(indicator);
          }
          
          const responseText = getBotResponse(question);
          
          const msgDiv = document.createElement('div');
          msgDiv.className = 'chat-message bot';
          const contentDiv = document.createElement('div');
          contentDiv.className = 'message-content';
          msgDiv.appendChild(contentDiv);
          corvisMessages.appendChild(msgDiv);
          
          typeMessage(responseText, contentDiv);
        }, 1200);
      }, 400);
    }

    if (corvisForm) {
      corvisForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = corvisInput.value.trim();
        if (!text) return;
        corvisInput.value = "";
        processQuestion(text);
      });
    }

    if (corvisReplies) {
      corvisReplies.addEventListener('click', (e) => {
        const btn = e.target.closest('.quick-reply-btn');
        if (!btn) return;
        const question = btn.getAttribute('data-question');
        if (question) {
          processQuestion(question);
        }
      });
    }
  }
});
