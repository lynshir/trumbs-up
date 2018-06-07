class PraiseButton {
    constructor() {
    }
    getValue(num){
        return num + 1
    }
    addOne() { //加1功能
        let numberNode = document.getElementById('praise-txt')
        numberNode.innerHTML = this.getValue(+numberNode.innerHTML)
        return true
    }
}
export class Thumb extends PraiseButton {
    constructor() {
        super()
    }
    handleClick() {
        $('#praise-img').removeClass('animation')
        this.addOne()
        setTimeout(function () { //动画效果
            $('#praise-img').addClass('animation')
        }, 1)
        return true
    }
    //挂载到jquery上的方法
    uploadJquery() {
        let me = this
        $.fn.extend({
            clickThumb: function () {
                $(this).click(function () {
                    me.handleClick()
                });
            }
        });
        return true
    }
}

window.Thumb = Thumb