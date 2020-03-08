/* 包 含 多 个 用 于 生 成 新 的 state
的 reducer
函 数 的 模 块
*/
import { combineReducers } from 'redux'

function xxx(state = 0, action) {
    return state
}
function yyy(state = 0, action) {
    return state
}
//返回合并后的reducer函数
export default combineReducers({ xxx, yyy })
