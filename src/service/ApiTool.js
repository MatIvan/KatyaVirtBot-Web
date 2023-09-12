//@ts-check
import StorageService from './StorageService';

/**
 * @param {string} uri
 * @param {any=} body
 * @returns {Promise<any>}
 */
function sendPost(uri, body) {
    /** @type {RequestInit} */
    const opt = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
    };
    return fetchJson(uri, opt);
}

/**
 * @param {string} uri
 * @returns {Promise<any>}
 */
function sendGet(uri) {
    /** @type {RequestInit} */
    const opt = {
        method: 'GET',
        headers: getHeaders()
    };
    return fetchJson(uri, opt);
}

/**
 * @param {string} uri
 * @param {RequestInit} opt
 * @returns {Promise<void> | Promise<any>}
 */
function fetchJson(uri, opt) {
    return fetch(StorageService.getUrl() + uri, opt)
        .then(resp => {
            const ok = resp.ok;
            return resp.text().then(txt => {
                if (!ok) throw new Error(txt);
                return parse(txt);
            });
        })
}

function parse(txt) {
    if (!txt || txt.length < 3) {
        return Promise.resolve();
    }
    const json = JSON.parse(txt);
    return Promise.resolve(json);
}

/**
 * @returns {HeadersInit}
 */
function getHeaders() {
    const headers = {
        'Content-Type': 'application/json'
    }
    const token = StorageService.getToken();
    if (token) {
        headers['Authorization'] = 'Token ' + token;
    }
    return headers;
}

const ApiTool = {
    sendPost,
    sendGet
}
export default ApiTool;