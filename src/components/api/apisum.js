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
