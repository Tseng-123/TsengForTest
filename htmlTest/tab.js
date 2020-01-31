var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.init();

    }
    //init 初始化操作让相关的元素绑定事件
    init() {
        for (var i = 0; i < this.lis.length; i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }
    //切换
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass(){
        for (let i = 0;i < this.lis.leng; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
            
        }
    }
    //添加
    addTab() {

    }
    //删除
    removeTab() {

    }
    //修改
    editTab() {

    }
}

new Tab('#tab');