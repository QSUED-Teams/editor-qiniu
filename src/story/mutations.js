import * as types from './mutation-types.js'


export default {

  //工单流程新增
  [types.SAVE_ORDERFLOWADD](state, orderFlowInfo) {
    state.orderFlowInfo = orderFlowInfo
  },
  //当前工单
  [types.SAVE_ORDERFLOWACTIVE](state, orderFlowInfoActive) {
    state.orderFlowInfoActive = orderFlowInfoActive
  },
  [types.SHOW_HOUSE_INFO](state, company) {
    state.houseDialog = !state.houseDialog;
    if (company) {
      state.finalState = company.colorType;
      state.houseResId = company.houseResId;
    }
  }
}
