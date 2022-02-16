import { request } from "./request";

export async function show(table, page) {
    try {
        const res = await request({
            url: "/show",
            method: "get",
            params: {
                table: table,
                page: page
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

export async function collect(url, rule, range) {
    try {
        const res = await request({
            url: "/test",
            method: "post",
            data: {
                url: url,
                rule: rule,
                range: range,
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}