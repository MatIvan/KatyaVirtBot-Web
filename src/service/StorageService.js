const TOKEN = 'katya-bot-token';
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

function cleanToken() {
    return sessionStorage.removeItem(TOKEN);
}

const StorageService = {
    saveToken,
    getToken,
    cleanToken
}
export default StorageService;