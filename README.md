# Quran Reader Application

Yeh ek lightweight, fast, aur user-friendly Web-based Quran Application hai. Ise khaas taur par un users ke liye design kiya gaya hai jo Quran ki تلاوت (recitation) aur usay samajhne mein aasani chahte hain.

## 🚀 Key Features
* **Surah & Ayah Navigation:** Asaan aur fast surah selection.
* **Offline Storage:** IndexedDB ka istemal karte hue Surahs ko offline download karne ki sahoolat.
* **Audio Recitation:** Multiple Qaris (Reciters) ke sath audio playback control (Volume, Speed, Voice selection).
* **Reading Modes:** 'Lines' aur 'Paragraph' (فقرات) modes taake parhne mein aasani ho.
* **Zoom & Bookmarking:** Custom zoom level (pinch-to-zoom support) aur ayahs ko bookmark karne ki capability.
* **User-friendly Settings:** Interface ko apni marzi ke mutabiq customize karne ka option.

## 🛠 Technical Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+).
* **Storage:** `IndexedDB` (Offline data management) aur `localStorage` (User preferences).
* **Audio Handling:** Native HTML5 `Audio` API.
* **API Integration:** Quranic data ke liye [AlQuran Cloud API](https://alquran.cloud/).

## 📁 File Structure
* `index.html`: Main interface aur structure.
* `style.css`: UI design, responsive layout, aur themes.
* `app.js`: Core logic, API calls, audio control, offline storage management, aur UI interactions.

## 📱 How to Use
1. **Surah Selection:** Menu (☰) par click karke koi bhi Surah select karein.
2. **Audio:** 'Play' (▶) button se tilawat shuru karein. Settings mein ja kar Qari badlein ya speed adjust karein.
3. **Offline:** 'Download' button ka istemal karke Surahs ko offline save karein taake internet ke baghair bhi access kar sakein.
4. **Zoom:** Pinch-to-zoom ya buttons ka istemal karke font size adjust karein.

## 💻 Contribution
Agar aap is project mein mazeed features add karna chahte hain, toh repository ko fork karein aur pull request bhej dein.

---
*Developed by Munawar Hussain*
