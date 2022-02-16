import { request } from "./request";

export async function getrec(index) {
    try {
        const res = await request({
            url: "/query",
            method: "post",
            data: {
                index
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

export async function searchBook(bookname) {
    try {
        const res = await request({
            url: "/search",
            method: "post",
            data: {
                bookname
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

export async function searchList(bookid) {
    try {
        const res = await request({
            url: "/catalogue",
            method: "post",
            data: {
                bookid
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

export async function searchInfo(bookname) {
    try {
        const res = await request({
            url: "/info",
            method: "post",
            data: {
                bookname
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

export async function searchChapter(bookid, chapterid) {
    try {
        const res = await request({
            url: "/chapter",
            method: "post",
            data: {
                bookid,
                chapterid,
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

export async function searchAuthor(author) {
    try {
        const res = await request({
            url: "/author",
            method: "post",
            data: {
                author
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

export async function recInfo(link) {
    try {
        const res = await request({
            url: "/recinfo",
            method: "post",
            data: {
                link
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}