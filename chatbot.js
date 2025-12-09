// Simple rule-based chatbot for Naveen IT Trainer

const faqResponses = [
  {
    keywords: ["python", "py"],
    answer:
      "Python Full Course: 2.5 months | Mode: Online/Offline | Includes projects, notes & interview prep."
  },
  {
    keywords: ["java"],
    answer:
      "Core + Advanced Java: 3 months | Hands-on projects + interview questions."
  },
  {
    keywords: ["power bi", "powerbi"],
    answer:
      "Power BI: 1.5 months | Includes DAX, dashboards, real-time reports & resume support."
  },
  {
    keywords: ["excel"],
    answer:
      "Advanced Excel: 1 month | Formulas, Pivot Tables, Dashboards, Automation basics."
  },
  {
    keywords: ["digital marketing", "dm"],
    answer:
      "Digital Marketing: 2 months | SEO, SEM, Social Media, Analytics, Live campaigns."
  },
  {
    keywords: ["fees", "fee", "cost", "price"],
    answer:
      "Fees depend on the course. Share the course name, and I'll tell you the approximate fee range."
  },
  {
    keywords: ["location", "address", "where"],
    answer:
      "Institute location: Hyderabad, Telangana. Online training is also available."
  },
  {
    keywords: ["contact", "phone", "whatsapp"],
    answer:
      "You can contact Naveen sir at: +91 9676630130 (WhatsApp available)."
  }
];

function initChatbot() {
  const toggleBtn = document.getElementById("chatbot-toggle");
  const windowEl = document.getElementById("chatbot-window");
  const bodyEl = document.getElementById("chatbot-body");
  const inputEl = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("chatbot-send");
  const closeBtn = document.getElementById("chatbot-close");

  if (!toggleBtn || !windowEl) return;

  function addMessage(text, sender = "bot") {
    const msg = document.createElement("div");
    msg.classList.add("chatbot-message", sender);
    msg.textContent = text;
    bodyEl.appendChild(msg);
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  function getBotReply(userText) {
    const text = userText.toLowerCase();

    for (const item of faqResponses) {
      if (item.keywords.some((k) => text.includes(k))) {
        return item.answer;
      }
    }

    return "Thanks for your message! Please share the course name (Python/Java/Power BI/Excel/Digital Marketing/C), and your mode preference (Online/Offline). Naveen sir will guide you further on WhatsApp: 9676630130.";
  }

  function handleSend() {
    const value = inputEl.value.trim();
    if (!value) return;
    addMessage(value, "user");
    inputEl.value = "";

    setTimeout(() => {
      const reply = getBotReply(value);
      addMessage(reply, "bot");
    }, 400);
  }

  // Initialize default greeting
  addMessage("👋 Hi, I'm the assistant for Naveen IT Trainer.");
  addMessage("Ask me about courses, duration, fees, or mode (online/offline).");

  toggleBtn.addEventListener("click", () => {
    windowEl.style.display = windowEl.style.display === "flex" ? "none" : "flex";
  });

  closeBtn.addEventListener("click", () => {
    windowEl.style.display = "none";
  });

  sendBtn.addEventListener("click", handleSend);

  inputEl.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  });
}

document.addEventListener("DOMContentLoaded", initChatbot);
