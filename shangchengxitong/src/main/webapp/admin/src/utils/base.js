const base = {
    get() {
        return {
            url : "http://localhost:8080/shangchengxitong/",
            name: "shangchengxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shangchengxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "商城系统"
        } 
    }
}
export default base
