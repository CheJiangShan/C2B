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

//技师信息
export function technician() {
  return post("/usecar-menji");
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
export function orderDeta(token,order_id) {
  return post("/usecar-ordermsg",{token,order_id});
}

//快速预约
export function quickOrder(t, m, c) {
  return post("/usecar-order", {
    token: t,
    mmenu_id: m,
    car_id: c
  });
}

//用户车辆信息
export function information(token) {
  return post("/usecar-cars", { token });
}

export function lovecar(token) {
  return post("/usecar-cars", { token });
}
