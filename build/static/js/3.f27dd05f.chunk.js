(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    97: function (t, n, e) {
        "use strict";
        e.r(n);
        var r = e(5), i = e(6), o = e(8), a = e(7), c = e(9), u = e(0), p = e.n(u), f = e(1), l = e(2);

        function d() {
            var t = Object(f.a)(["\n\tcolor: ##2f2f2f;\n\timg {\n\t\twidth: 100%;\n\t}\n\tp {\n\t\tmargin: 25px 0;\n\t\tfont-size: 16px;\n\t\tline-height: 30px;\n\t}\n\tb {\n\t\tfont-weight: bold;\n\t}\n"]);
            return d = function () {
                return t
            }, t
        }

        function h() {
            var t = Object(f.a)(["\n\tmargin: 50px 0 20px 0;\n\tline-height: 44px;\n\tfont-size: 34px;\n\tcolor: #333;\n\tfont-weight: bold;\n"]);
            return h = function () {
                return t
            }, t
        }

        function b() {
            var t = Object(f.a)(["\n\toverflow: hidden;\n\twidth: 620px;\n\tmargin: 0 auto;\n\tpadding-bottom: 100px;\n"]);
            return b = function () {
                return t
            }, t
        }

        var s = l.b.div(b()), g = l.b.div(h()), m = l.b.div(d()), v = e(11), w = e(46), j = e(20), O = function (t) {
            function n() {
                return Object(r.a)(this, n), Object(o.a)(this, Object(a.a)(n).apply(this, arguments))
            }

            return Object(c.a)(n, t), Object(i.a)(n, [{
                key: "render", value: function () {
                    return p.a.createElement(s, null, p.a.createElement(g, null, this.props.header), p.a.createElement(m, {dangerouslySetInnerHTML: {__html: this.props.content}}))
                }
            }, {
                key: "componentDidMount", value: function () {
                    var t = this.props.match.params.id;
                    this.props.getDetailInfo(t)
                }
            }]), n
        }(u.Component);
        n.default = Object(v.b)(function (t) {
            return {header: t.getIn(["detail", "header"]), content: t.getIn(["detail", "content"])}
        }, function (t) {
            return {
                getDetailInfo: function (n) {
                    t(w.a.getDetailData(n))
                }
            }
        })(Object(j.f)(O))
    }
}]);
//# sourceMappingURL=3.f27dd05f.chunk.js.map