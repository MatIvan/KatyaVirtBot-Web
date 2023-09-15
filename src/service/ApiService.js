//@ts-check
import HookService from './HookService';
import ApiTool from './ApiTool';

/**
 * @typedef {object} Condition
 * @property {string | undefined} chatName
 * @property {string[] | undefined} contains 
 * @property {string[] | undefined} startWith
 * @property {boolean} caseSensitive
 */

/**
 * @typedef {object} WebHook
 * @property {number | undefined} id
 * @property {string | undefined} name
 * @property {number | undefined} userId
 * @property {string | undefined} url
 * @property {Condition | undefined} condition
 */

const uri = '/webhook';

function getAllHooks() {
    ApiTool.sendGet(uri)
        .then(hooks => {
            HookService.fire('hooks', hooks.sort((a, b) => a.id - b.id));
        })
        .catch(e => {
            console.error(e);
        })
}

/**
 * @param {WebHook} hook 
 */
function saveHook(hook) {
    if (hook.id===undefined) {
        return;
    }
    if (hook.id < 0) {
        ApiTool.sendPost(uri, hook)
            .then(hook => {
                getAllHooks();
            })
            .catch(e => {
                console.error(e);
            })
        return;
    }

    ApiTool.sendPut(uri + "/" + hook.id, hook)
        .then(hook => {
            getAllHooks();
        })
        .catch(e => {
            console.error(e);
        })
}

/**
 * @param {number} id 
 */
function deleteHook(id) {
    ApiTool.sendDelete(uri + "/" + id)
        .then(hook => {
            getAllHooks();
        })
        .catch(e => {
            console.error(e);
        })
}

const ApiService = {
    getAllHooks,
    saveHook,
    deleteHook
}
export default ApiService;