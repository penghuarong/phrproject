import fetch from "@/utils/fetch";
const aidou = {
    aidouList: ({
        page = 1,
        pageSize = 20,
        type = 1,
        time = "2019-01-10"
    }) => fetch.post('/analysisv2/Rank/rankList', {
        category: "",
        page: 1,
        pagesize: 20,
        time: time,
        token: "69c3ee57d2cf8a8c7fe330880839f51f",
        type: type
    }),
    aidouType: () => fetch.get("/analysisv2/Rank/categoryList"),
    aidouTime: () => fetch.post("/analysisv2/Rank/optionList", {
        token: "69c3ee57d2cf8a8c7fe330880839f51f",
        type: 1
    })
}
export default aidou