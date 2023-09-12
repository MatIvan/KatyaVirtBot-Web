const TOKEN = 'katya-bot-token';
const URL = 'katya-bot-url';

/**
 * @param {string} token
 */
function saveToken(token) {
    sessionStorage.setItem(TOKEN, token);
}

/**
 * @returns {string | undefined} token
 */
function getToken() {
    return sessionStorage.getItem(TOKEN);
}

/**
 * @param {string} url
 */
function saveUrl(url) {
    sessionStorage.setItem(URL, url);
}

/**
 * @returns {string | undefined} url
 */
function getUrl() {
    return sessionStorage.getItem(URL);
}

function clean() {
    sessionStorage.removeItem(URL);
    sessionStorage.removeItem(TOKEN);
}

const StorageService = {
    saveUrl,
    getUrl,
    saveToken,
    getToken,
    clean
}
export default StorageService;