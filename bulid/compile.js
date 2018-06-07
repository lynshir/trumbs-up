(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.thumb = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var PraiseButton = function () {
        function PraiseButton() {
            _classCallCheck(this, PraiseButton);
        }

        _createClass(PraiseButton, [{
            key: 'getValue',
            value: function getValue(num) {
                return num + 1;
            }
        }, {
            key: 'addOne',
            value: function addOne() {
                //加1功能
                var numberNode = document.getElementById('praise-txt');
                numberNode.innerHTML = this.getValue(+numberNode.innerHTML);
                return true;
            }
        }]);

        return PraiseButton;
    }();

    var Thumb = exports.Thumb = function (_PraiseButton) {
        _inherits(Thumb, _PraiseButton);

        function Thumb() {
            _classCallCheck(this, Thumb);

            return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));
        }

        _createClass(Thumb, [{
            key: 'handleClick',
            value: function handleClick() {
                $('#praise-img').removeClass('animation');
                this.addOne();
                setTimeout(function () {
                    //动画效果
                    $('#praise-img').addClass('animation');
                }, 1);
                return true;
            }
            //挂载到jquery上的方法

        }, {
            key: 'uploadJquery',
            value: function uploadJquery() {
                var me = this;
                $.fn.extend({
                    clickThumb: function clickThumb() {
                        $(this).click(function () {
                            me.handleClick();
                        });
                    }
                });
                return true;
            }
        }]);

        return Thumb;
    }(PraiseButton);

    window.Thumb = Thumb;
});
