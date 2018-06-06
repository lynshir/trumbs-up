class PraiseButton {
    constructor() {
    }
    addOne() { //加1功能
        let numberNode = document.getElementById('praise-txt')
        numberNode.innerHTML = +numberNode.innerHTML + 1
    }
}
class Thumb extends PraiseButton {
    constructor() {
        super()
    }
    handleClick() {
        $('#praise-img').removeClass('animation')
        this.addOne()
        setTimeout(function () { //动画效果
            $('#praise-img').addClass('animation')
        }, 1)
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
    }
}
var thumb = new Thumb()
thumb.uploadJquery()
$('#praise').clickThumb()
module.exports = Thumb