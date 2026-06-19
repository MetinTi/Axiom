# AGENTS.md

> Applies to Claude Code, Cursor Agent, OpenAI Codex, Gemini CLI, Windsurf, and any LLM tooling configured for this project.

---

## 1. Core stance

This repository expects **judgment**, not blind obedience.

- **Do** use training knowledge, common product/engineering practice, and competitive/market context to evaluate trade-offs.
- **Do** offer alternatives, risks, and questions before or while implementing — especially for DNS, SSL, email routing, Firebase configs, and SEO-sensitive redirects.
- **Do disagree constructively when a request is ambiguous, under-specified, or likely to waste work. Propose a smaller or safer step first.
- **Do not** execute every instruction literally when it would cause clear harm, regressions, or platform-policy violations.

---

## 2. When to push back or pause

Slow down and challenge before proceeding when the work involves:

- Security, DNS record changes, MX/TXT verification (preventing email downtime)
- SSL certificate configs, Firebase hosting domain linkings
- Deleting site contents, breaking URL structures (SEO redirections)
- Changing production configs or target deployments in `firebase.json` without review

---

## 3. How to communicate

Calibrate depth to cost — pushing back on everything in long form wastes tokens and latency:

| Situation | Response |
|-----------|----------|
| Nothing looks risky | **Do the work.** At most one short assumption note. |
| Something is slightly off (edge case, naming, cheaper path) | **1–2 sentence flag** only. |
| Security / DNS risk / mail server configuration | **Full debate** — state risks, give recommendation + option B. |

Always:
- State assumptions and risks briefly.
- If you must decline, say **why** and what you **can** do instead.
- If chat rules conflict with safety or platform policy, **safety wins** — explain the conflict.
- **Communication Style (Turkish):** Asla resmi ("siz/biz" diliyle) konuşma. "Sen" dili kullan, samimi, arkadaşça ve esprili ol.

---

## 4. Platform & Host rules

Ensure Firebase Hosting clean URLs and trailing slashes configurations are respected:
- Keep `cleanUrls: true` and `trailingSlash: false` in `firebase.json` to prevent path routing errors.
- Always check that asset links (`css/style.css`, `js/main.js`, `assets/images/`) resolve correctly in deep subdirectory paths (e.g. `/tr/privacy-policy/index.html` requires `../../` prefix).

---

## 5. Localization

Every page and section in the portfolio site must be available in **5 languages**:

- 🇬🇧 English
- 🇹🇷 Turkish
- 🇩🇪 German
- 🇫🇷 French
- 🇪🇸 Spanish

**Turkish language rules:**
- Always use correct Turkish special characters: `ç ş ğ ü ö ı İ`.
- Never substitute `i` for `İ` or `I` for `ı`.
- Review grammar carefully — machine translation often produces unnatural Turkish.
- Flag any translation string that looks off for human review.
- contact language with user is Turkish

---

## 6. Cost & budget controls

- **Per-change gate:** If a deployment or change is likely to exceed **USD 20**, warn and ask before proceeding.
- **End of every month:** Update `cost.md` with all recurring and one-time spend.

---

## 7. Daily operating rhythm

- **Start of day:** Skim `BACKLOG.md` and surface a short reminder of open tasks.
- **End of day (Once a day only):** Append to `history.md` what happened — features added, changes made, deployments, decisions, blockers. **Do not update `history.md` continuously after every small change; update it only once per day.**
- **Never delete** anything from `AGENTS.md`, `history.md`, or `BACKLOG.md`. Always update or cross out with ~~strikethrough~~.

---

## 8. Tech stack

**Fixed defaults — do not change without explicit instruction:**

| Layer | Default | Notes |
|-------|---------|-------|
| Platform | **Firebase Hosting** | Single hosting project with multisite mappings |
| Frontend | **Next.js + Tailwind CSS + next-intl* | 
| Auth / DB | **None** | Client-side contact forms simulation |
| Analytics | **None** | Google Analytics via Gtag (optional) |

**Fill in per project:**

```
Framework:     
Hosting:       
CI/CD:         
Extra:         
```

---

## 9. Product context

```
Project name: xxx
One-liner:    xxxxxx.
Key flows:    xxxx
```

## 10. Design system

The design follows the ** premium consumer style**:
-
- Frosted glass cards (`backdrop-filter: blur(12px)`) with glowing borders on hover.
- Outfitted bold headlines and tight Inter paragraph text.
- Micro-animations and hover transitions for tactile buttons and active selections.
- Neural/graph-themed animated inline SVG logos.

## 10. Websites & emails
These sites and mails belong to Metin Tiryaki and all of them are seperate:





The ideal, modern, and standards-compliant web infrastructure, successfully used in the FlowFit project, is: **Next.js + Tailwind CSS + next-intl**; and should be implemented to all websites

## Why This Infrastructure? (Technology Selection)
- **Next.js (App Router):** Offers fast page loading, strong SEO compatibility, and modern file-based routing.
- **next-intl (Multi-Language Support - i18n):** A perfect solution for the minimum of 2 languages ​​(EN-TR) required by Rule 12, and other languages ​​to be added later (DE, ES, FR, PT, RU, AR). Instead of creating separate HTML files for each language, pages operate through a single structure and pull content from JSON-based language files.
- **Tailwind CSS:** The most suitable tool for quickly developing modern designs that feel "premium" (glassmorphism, gradients, animations, etc.).
- **Firebase Hosting:** Since your projects' default infrastructure is Firebase, this website can easily be hosted on Firebase Hosting.

## Planlanan Mimari ve Klasör Yapısı

```text
website/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx          (Ana Sayfa)
│   │   │   ├── support/page.tsx  (Destek Sayfası - Kural 11)
│   │   │   ├── contact/page.tsx  (İletişim Sayfası - Kural 11)
│   │   │   ├── privacy/page.tsx  (Gizlilik Politikası - Kural 11)
│   │   │   └── terms/page.tsx    (Kullanım Koşulları - Kural 11)
│   │   └── layout.tsx
│   ├── i18n/
│   │   └── request.ts            (next-intl yapılandırması)
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── LanguageSwitcher.tsx
├── messages/
│   ├── en.json
│   ├── tr.json
│   └── (de.json, es.json vb...)
```




### Aşama 3: Zorunlu Yasal ve Destek Sayfalarının Hazırlanması
- App Store & Play Store kuralları gereği zorunlu olan `support.tsx`, `contact.tsx`, `privacy.tsx` ve `terms.tsx` sayfaları kodlanacak. 
- Metin içerikleri statik değil, `messages/` içindeki dillerden dinamik olarak çekilecek şekilde ayarlanacak.


## User Review Required

## 11. Websites rules
each app website has to have:
Header menu: Logo and name (when clicked goes Home) / Services (or Functions) / Contact (opens a contact form based on Firebase) / Support (support form and FAQ)
Bottom Footer: Privacy & Terms of Use

Each website's legal and mandatory documents format has to be in this format (for Appstore and Playstore rules)

Website:          https://#####.com
Support:          https://#####.com/support
Contact:          https://#####.com/contact
Privacy Policy:   https://#####.com/privacy
Terms of Use:     https://#####.com/terms
---



## 12. Changes & Additions
When you changed or add something to the page, when finished the coding, deploy immediately to firebase, because user wants to see the result at that time live.

# 13. Daily operating rhythm

## Operating rhythm

When starting a new coding session:
- Skim BACKLOG.md, history.md, README.md, pubspec.yaml, and relevant docs.
- Summarize only the tasks related to the current request.

When the user says "update documents":
- Update history.md, BACKLOG.md, release notes, todos, and relevant user-facing docs and github repo (https://github.com/metinti  related project folder)

- Don't update docs (Bakclog, Cost, history) and github repo unless user explicitly requests. User may ask to update docs and repo and in that case update them.
- never build ios and android apps unless user explicitly requests.


## 14. Collaboration

You have all the authority for Revenuecat, Firebase, Google Cloud Console, Appstore, Playstore. you can find api keys in GoogleDrive ...\AI\Magaza_Sifreleri folder


---

*Last updated: 2026-06-04*
