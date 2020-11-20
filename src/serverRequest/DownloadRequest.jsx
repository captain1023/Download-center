import http from "./httpService";


const endpoint = "/pageDim";

export async function getDimensionTarget(pageId) {
    const { data } = await http.post(endpoint + "/getDimensionTarget", {pageId});
    return data;
  }

export default {
    getDimensionTarget,
};



