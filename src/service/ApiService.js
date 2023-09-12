//@ts-check
import HookService from './HookService';
import ApiTool from './ApiTool';

/**
 * @typedef {object} Condition
 * @property {string} chatName
 * @property {string[] | undefined} contains 
 * @property {string[] | undefined} startWith
 * @property {boolean} caseSensitive
 */

/**
 * @typedef {object} WebHook
 * @property {number} id
 * @property {string} name
 * @property {number} userId
 * @property {string} url
 * @property {Condition} condition
 */

const uri = '/webhook';

function getAllHooks() {
    ApiTool.sendGet(uri)
        .then(hooks => {
            HookService.fire('hooks', hooks);
        })
        .catch(e => {
            console.error(e);
        })
}

const ApiService = {
    getAllHooks
}
export default ApiService;