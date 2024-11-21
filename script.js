document.addEventListener('DOMContentLoaded', async () => {
    const loadingElement = document.getElementById('loading');
    const iframeElement = document.getElementById('content');

    try {
        // GeoIP API orqali foydalanuvchi davlatini aniqlash
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // Davlat kodi (UZ - O‘zbekiston, RU - Rossiya)
        const countryCode = data.country_code;

        // Hududga qarab linkni tanlash
        let link;
        if (countryCode === 'UZ') {
            link = 'https://github.com/';
        } else if (countryCode === 'RU') {
            link = 'https://git.com/';
        } else {
            link = 'https://example.com/'; // Default link
        }

        // Iframe-ga linkni o‘rnatish
        iframeElement.src = link;
        iframeElement.style.display = 'block';
        loadingElement.style.display = 'none';

        // Telegram Mini App tayyorligini bildirish
        if (window.Telegram.WebApp) {
            Telegram.WebApp.ready();
        }
    } catch (error) {
        loadingElement.innerText = 'Error loading content. Please try again later.';
        console.error('GeoIP API Error:', error);
    }
});
