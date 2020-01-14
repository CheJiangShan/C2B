import { post } from "../utils/request";

// 首页新车的信息
export function newCareMessage() {
  return post("/deal");
}

// 评估报告接口
export function assess(a, b, c, d, e) {
  return post("/assess", {
    token: a,
    city: b,
    veh_id: c,
    car_license: d,
    mileage: e
  });
}
// 一网打进 搜索详情 点击查看
export function carCategory(a, b, c) {
  return post("/deal-yiwangxj", {
    parameter1: a,
    parameter2: b,
    brand: c
  });
}

// 三级联动获得数据
export function threeSearch() {
  return post("/deal-sear");
}

//新车详情
export function newDetail(id) {
  return post("/deal-newmore", { pid: id });
}

//二手车详情
export function secondDetail(id) {
  return post("/deal-usedmore", { pid: id });
}

//车型列表
export function getType() {
  return post("/veh-index");
}

//用户
export function getUser(token) {
  return post("/usecar-msg", { token });
}

//门店技师信息
export function technician(a, b) {
  return post("/usecar-menji", {
    storm_id: a,
    artificer_id: b
  });
}

// 技师列表
export function jishiall(a) {
  return post("/usecar-artificer", {
    storm_id: a
  });
}

//服务项目
// export function project(id1){
//   return post("/usecar-2nd",{menu_id:id1})
// }

//服务分类
export function select() {
  return post("/usecar-top");
}

//订单列表
export function orderDetail(token, status) {
  return post("/usecar-orderlist", { token, status });
}

//订单详情
export function orderDeta(token, order_id) {
  return post("/usecar-ordermsg", { token, order_id });
}

//快速预约
export function quickOrder(t, m, c, s) {
  return post("/usecar-order", {
    token: t,
    menu_id: m,
    car_id: c,
    storm_id: s
  });
}

//用户车辆信息
export function information(token) {
  return post("/usecar-cars", { token });
}
//爱车详情
export function lovecar(token) {
  return post("/usecar-cars", { token });
}
// 全部门店信息
export function allstore() {
  return post("/usecar-stormall");
}

// 修改用户信息
export function changemessage(to, t, c) {
  return post("/mine-change", {
    token: to,
    type: t,
    content: c
  });
}
