import { request } from "./request";

export async function getAdmin(num, data) {
    try {
        const res = await request({
            url: "/admin",
            method: "post",
            data: {
                num: num,
                data: data,
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

export async function getBook(num, data) {
    try {
        const res = await request({
            url: "/book",
            method: "post",
            data: {
                num: num,
                data: data,
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}