import { request } from "./request";

export async function getUser(num, data) {
    try {
        const res = await request({
            url: "/user",
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

export async function getShelf(num, data, token) {
    try {
        const res = await request({
            url: "/shelf",
            method: "post",
            headers: { Authorization: token },
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

export async function getCR(num, data, token) {
    try {
        const res = await request({
            url: "/comment",
            method: "post",
            headers: { Authorization: token },
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