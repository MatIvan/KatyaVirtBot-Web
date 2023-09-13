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