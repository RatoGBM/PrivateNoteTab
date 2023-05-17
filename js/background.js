! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 419)
}([function(e, t, n) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, r;

            function a() {
                return t.apply(null, arguments)
            }

            function s(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function i(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function o(e) {
                return void 0 === e
            }

            function d(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function u(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function _(e, t) {
                var n, r = [];
                for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
                return r
            }

            function l(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function m(e, t) {
                for (var n in t) l(t, n) && (e[n] = t[n]);
                return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function c(e, t, n, r) {
                return vt(e, t, n, r, !0).utc()
            }

            function h(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function f(e) {
                if (null == e._isValid) {
                    var t = h(e),
                        n = r.call(t.parsedDateParts, (function(e) {
                            return null != e
                        })),
                        a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                    e._isValid = a
                }
                return e._isValid
            }

            function M(e) {
                var t = c(NaN);
                return null != e ? m(h(t), e) : h(t).userInvalidated = !0, t
            }
            r = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
                    if (r in t && e.call(this, t[r], r, t)) return !0;
                return !1
            };
            var y = a.momentProperties = [];

            function p(e, t) {
                var n, r, a;
                if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), y.length > 0)
                    for (n = 0; n < y.length; n++) o(a = t[r = y[n]]) || (e[r] = a);
                return e
            }
            var L = !1;

            function Y(e) {
                p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === L && (L = !0, a.updateOffset(this), L = !1)
            }

            function g(e) {
                return e instanceof Y || null != e && null != e._isAMomentObject
            }

            function k(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function D(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = k(t)), n
            }

            function v(e, t, n) {
                var r, a = Math.min(e.length, t.length),
                    s = Math.abs(e.length - t.length),
                    i = 0;
                for (r = 0; r < a; r++)(n && e[r] !== t[r] || !n && D(e[r]) !== D(t[r])) && i++;
                return i + s
            }

            function w(e) {
                !1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn
            }

            function T(e, t) {
                var n = !0;
                return m((function() {
                    if (null != a.deprecationHandler && a.deprecationHandler(null, e), n) {
                        for (var r, s = [], i = 0; i < arguments.length; i++) {
                            if (r = "", "object" == typeof arguments[i]) {
                                for (var o in r += "\n[" + i + "] ", arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                r = r.slice(0, -2)
                            } else r = arguments[i];
                            s.push(r)
                        }
                        w((Array.prototype.slice.call(s).join(""), (new Error).stack)), n = !1
                    }
                    return t.apply(this, arguments)
                }), t)
            }
            var b, S = {};

            function j(e, t) {
                null != a.deprecationHandler && a.deprecationHandler(e, t), S[e] || (w(), S[e] = !0)
            }

            function H(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function x(e, t) {
                var n, r = m({}, e);
                for (n in t) l(t, n) && (i(e[n]) && i(t[n]) ? (r[n] = {}, m(r[n], e[n]), m(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
                for (n in e) l(e, n) && !l(t, n) && i(e[n]) && (r[n] = m({}, r[n]));
                return r
            }

            function O(e) {
                null != e && this.set(e)
            }
            a.suppressDeprecationWarnings = !1, a.deprecationHandler = null, b = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e) l(e, t) && n.push(t);
                return n
            };
            var P = {};

            function A(e, t) {
                var n = e.toLowerCase();
                P[n] = P[n + "s"] = P[t] = e
            }

            function E(e) {
                return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0
            }

            function W(e) {
                var t, n, r = {};
                for (n in e) l(e, n) && (t = E(n)) && (r[t] = e[n]);
                return r
            }
            var F = {};

            function z(e, t) {
                F[e] = t
            }

            function R(e, t, n) {
                var r = "" + Math.abs(e),
                    a = t - r.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r
            }
            var C = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                U = {},
                N = {};

            function J(e, t, n, r) {
                var a = r;
                "string" == typeof r && (a = function() {
                    return this[r]()
                }), e && (N[e] = a), t && (N[t[0]] = function() {
                    return R(a.apply(this, arguments), t[1], t[2])
                }), n && (N[n] = function() {
                    return this.localeData().ordinal(a.apply(this, arguments), e)
                })
            }

            function B(e, t) {
                return e.isValid() ? (t = G(t, e.localeData()), U[t] = U[t] || function(e) {
                    var t, n, r, a = e.match(C);
                    for (t = 0, n = a.length; t < n; t++) N[a[t]] ? a[t] = N[a[t]] : a[t] = (r = a[t]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
                    return function(t) {
                        var r, s = "";
                        for (r = 0; r < n; r++) s += H(a[r]) ? a[r].call(t, e) : a[r];
                        return s
                    }
                }(t), U[t](e)) : e.localeData().invalidDate()
            }

            function G(e, t) {
                var n = 5;

                function r(e) {
                    return t.longDateFormat(e) || e
                }
                for (I.lastIndex = 0; n >= 0 && I.test(e);) e = e.replace(I, r), I.lastIndex = 0, n -= 1;
                return e
            }
            var V = /\d/,
                q = /\d\d/,
                $ = /\d{3}/,
                K = /\d{4}/,
                Z = /[+-]?\d{6}/,
                Q = /\d\d?/,
                X = /\d\d\d\d?/,
                ee = /\d\d\d\d\d\d?/,
                te = /\d{1,3}/,
                ne = /\d{1,4}/,
                re = /[+-]?\d{1,6}/,
                ae = /\d+/,
                se = /[+-]?\d+/,
                ie = /Z|[+-]\d\d:?\d\d/gi,
                oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                ue = {};

            function _e(e, t, n) {
                ue[e] = H(t) ? t : function(e, r) {
                    return e && n ? n : t
                }
            }

            function le(e, t) {
                return l(ue, e) ? ue[e](t._strict, t._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, r, a) {
                    return t || n || r || a
                }))))
            }

            function me(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var ce = {};

            function he(e, t) {
                var n, r = t;
                for ("string" == typeof e && (e = [e]), d(t) && (r = function(e, n) {
                        n[t] = D(e)
                    }), n = 0; n < e.length; n++) ce[e[n]] = r
            }

            function fe(e, t) {
                he(e, (function(e, n, r, a) {
                    r._w = r._w || {}, t(e, r._w, r, a)
                }))
            }

            function Me(e, t, n) {
                null != t && l(ce, e) && ce[e](t, n._a, n, e)
            }

            function ye(e) {
                return pe(e) ? 366 : 365
            }

            function pe(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            J("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            })), J(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            })), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), z("year", 1), _e("Y", se), _e("YY", Q, q), _e("YYYY", ne, K), _e("YYYYY", re, Z), _e("YYYYYY", re, Z), he(["YYYYY", "YYYYYY"], 0), he("YYYY", (function(e, t) {
                t[0] = 2 === e.length ? a.parseTwoDigitYear(e) : D(e)
            })), he("YY", (function(e, t) {
                t[0] = a.parseTwoDigitYear(e)
            })), he("Y", (function(e, t) {
                t[0] = parseInt(e, 10)
            })), a.parseTwoDigitYear = function(e) {
                return D(e) + (D(e) > 68 ? 1900 : 2e3)
            };
            var Le, Ye = ge("FullYear", !0);

            function ge(e, t) {
                return function(n) {
                    return null != n ? (De(this, e, n), a.updateOffset(this, t), this) : ke(this, e)
                }
            }

            function ke(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function De(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && pe(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), ve(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }

            function ve(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var n = (t % 12 + 12) % 12;
                return e += (t - n) / 12, 1 === n ? pe(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            Le = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, J("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            })), J("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e)
            })), J("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e)
            })), A("month", "M"), z("month", 8), _e("M", Q), _e("MM", Q, q), _e("MMM", (function(e, t) {
                return t.monthsShortRegex(e)
            })), _e("MMMM", (function(e, t) {
                return t.monthsRegex(e)
            })), he(["M", "MM"], (function(e, t) {
                t[1] = D(e) - 1
            })), he(["MMM", "MMMM"], (function(e, t, n, r) {
                var a = n._locale.monthsParse(e, r, n._strict);
                null != a ? t[1] = a : h(n).invalidMonth = e
            }));
            var we = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Te = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                be = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Se(e, t, n) {
                var r, a, s, i = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) s = c([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (a = Le.call(this._shortMonthsParse, i)) ? a : null : -1 !== (a = Le.call(this._longMonthsParse, i)) ? a : null : "MMM" === t ? -1 !== (a = Le.call(this._shortMonthsParse, i)) || -1 !== (a = Le.call(this._longMonthsParse, i)) ? a : null : -1 !== (a = Le.call(this._longMonthsParse, i)) || -1 !== (a = Le.call(this._shortMonthsParse, i)) ? a : null
            }

            function je(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = D(t);
                    else if (!d(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), ve(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function He(e) {
                return null != e ? (je(this, e), a.updateOffset(this, !0), this) : ke(this, "Month")
            }
            var xe = de,
                Oe = de;

            function Pe() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, r = [],
                    a = [],
                    s = [];
                for (t = 0; t < 12; t++) n = c([2e3, t]), r.push(this.monthsShort(n, "")), a.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
                for (r.sort(e), a.sort(e), s.sort(e), t = 0; t < 12; t++) r[t] = me(r[t]), a[t] = me(a[t]);
                for (t = 0; t < 24; t++) s[t] = me(s[t]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function Ae(e, t, n, r, a, s, i) {
                var o;
                return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, r, a, s, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, r, a, s, i), o
            }

            function Ee(e) {
                var t;
                if (e < 100 && e >= 0) {
                    var n = Array.prototype.slice.call(arguments);
                    n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
                } else t = new Date(Date.UTC.apply(null, arguments));
                return t
            }

            function We(e, t, n) {
                var r = 7 + t - n;
                return -(7 + Ee(e, 0, r).getUTCDay() - t) % 7 + r - 1
            }

            function Fe(e, t, n, r, a) {
                var s, i, o = 1 + 7 * (t - 1) + (7 + n - r) % 7 + We(e, r, a);
                return o <= 0 ? i = ye(s = e - 1) + o : o > ye(e) ? (s = e + 1, i = o - ye(e)) : (s = e, i = o), {
                    year: s,
                    dayOfYear: i
                }
            }

            function ze(e, t, n) {
                var r, a, s = We(e.year(), t, n),
                    i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
                return i < 1 ? r = i + Re(a = e.year() - 1, t, n) : i > Re(e.year(), t, n) ? (r = i - Re(e.year(), t, n), a = e.year() + 1) : (a = e.year(), r = i), {
                    week: r,
                    year: a
                }
            }

            function Re(e, t, n) {
                var r = We(e, t, n),
                    a = We(e + 1, t, n);
                return (ye(e) - r + a) / 7
            }

            function Ce(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }
            J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), z("week", 5), z("isoWeek", 5), _e("w", Q), _e("ww", Q, q), _e("W", Q), _e("WW", Q, q), fe(["w", "ww", "W", "WW"], (function(e, t, n, r) {
                t[r.substr(0, 1)] = D(e)
            })), J("d", 0, "do", "day"), J("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e)
            })), J("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e)
            })), J("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e)
            })), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), z("day", 11), z("weekday", 11), z("isoWeekday", 11), _e("d", Q), _e("e", Q), _e("E", Q), _e("dd", (function(e, t) {
                return t.weekdaysMinRegex(e)
            })), _e("ddd", (function(e, t) {
                return t.weekdaysShortRegex(e)
            })), _e("dddd", (function(e, t) {
                return t.weekdaysRegex(e)
            })), fe(["dd", "ddd", "dddd"], (function(e, t, n, r) {
                var a = n._locale.weekdaysParse(e, r, n._strict);
                null != a ? t.d = a : h(n).invalidWeekday = e
            })), fe(["d", "e", "E"], (function(e, t, n, r) {
                t[r] = D(e)
            }));
            var Ie = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ue = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ne = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

            function Je(e, t, n) {
                var r, a, s, i = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) s = c([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (a = Le.call(this._weekdaysParse, i)) ? a : null : "ddd" === t ? -1 !== (a = Le.call(this._shortWeekdaysParse, i)) ? a : null : -1 !== (a = Le.call(this._minWeekdaysParse, i)) ? a : null : "dddd" === t ? -1 !== (a = Le.call(this._weekdaysParse, i)) || -1 !== (a = Le.call(this._shortWeekdaysParse, i)) || -1 !== (a = Le.call(this._minWeekdaysParse, i)) ? a : null : "ddd" === t ? -1 !== (a = Le.call(this._shortWeekdaysParse, i)) || -1 !== (a = Le.call(this._weekdaysParse, i)) || -1 !== (a = Le.call(this._minWeekdaysParse, i)) ? a : null : -1 !== (a = Le.call(this._minWeekdaysParse, i)) || -1 !== (a = Le.call(this._weekdaysParse, i)) || -1 !== (a = Le.call(this._shortWeekdaysParse, i)) ? a : null
            }
            var Be = de,
                Ge = de,
                Ve = de;

            function qe() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, r, a, s, i = [],
                    o = [],
                    d = [],
                    u = [];
                for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), i.push(r), o.push(a), d.push(s), u.push(r), u.push(a), u.push(s);
                for (i.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) o[t] = me(o[t]), d[t] = me(d[t]), u[t] = me(u[t]);
                this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function $e() {
                return this.hours() % 12 || 12
            }

            function Ke(e, t) {
                J(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }))
            }

            function Ze(e, t) {
                return t._meridiemParse
            }
            J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, $e), J("k", ["kk", 2], 0, (function() {
                return this.hours() || 24
            })), J("hmm", 0, 0, (function() {
                return "" + $e.apply(this) + R(this.minutes(), 2)
            })), J("hmmss", 0, 0, (function() {
                return "" + $e.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2)
            })), J("Hmm", 0, 0, (function() {
                return "" + this.hours() + R(this.minutes(), 2)
            })), J("Hmmss", 0, 0, (function() {
                return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2)
            })), Ke("a", !0), Ke("A", !1), A("hour", "h"), z("hour", 13), _e("a", Ze), _e("A", Ze), _e("H", Q), _e("h", Q), _e("k", Q), _e("HH", Q, q), _e("hh", Q, q), _e("kk", Q, q), _e("hmm", X), _e("hmmss", ee), _e("Hmm", X), _e("Hmmss", ee), he(["H", "HH"], 3), he(["k", "kk"], (function(e, t, n) {
                var r = D(e);
                t[3] = 24 === r ? 0 : r
            })), he(["a", "A"], (function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            })), he(["h", "hh"], (function(e, t, n) {
                t[3] = D(e), h(n).bigHour = !0
            })), he("hmm", (function(e, t, n) {
                var r = e.length - 2;
                t[3] = D(e.substr(0, r)), t[4] = D(e.substr(r)), h(n).bigHour = !0
            })), he("hmmss", (function(e, t, n) {
                var r = e.length - 4,
                    a = e.length - 2;
                t[3] = D(e.substr(0, r)), t[4] = D(e.substr(r, 2)), t[5] = D(e.substr(a)), h(n).bigHour = !0
            })), he("Hmm", (function(e, t, n) {
                var r = e.length - 2;
                t[3] = D(e.substr(0, r)), t[4] = D(e.substr(r))
            })), he("Hmmss", (function(e, t, n) {
                var r = e.length - 4,
                    a = e.length - 2;
                t[3] = D(e.substr(0, r)), t[4] = D(e.substr(r, 2)), t[5] = D(e.substr(a))
            }));
            var Qe, Xe = ge("Hours", !0),
                et = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: Te,
                    monthsShort: be,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Ie,
                    weekdaysMin: Ne,
                    weekdaysShort: Ue,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                tt = {},
                nt = {};

            function rt(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function at(t) {
                var r = null;
                if (!tt[t] && void 0 !== e && e && e.exports) try {
                    r = Qe._abbr, n(350)("./" + t), st(r)
                } catch (e) {}
                return tt[t]
            }

            function st(e, t) {
                var n;
                return e && ((n = o(t) ? ot(e) : it(e, t)) ? Qe = n : "undefined" != typeof console && console.warn), Qe._abbr
            }

            function it(e, t) {
                if (null !== t) {
                    var n, r = et;
                    if (t.abbr = e, null != tt[e]) j("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = tt[e]._config;
                    else if (null != t.parentLocale)
                        if (null != tt[t.parentLocale]) r = tt[t.parentLocale]._config;
                        else {
                            if (null == (n = at(t.parentLocale))) return nt[t.parentLocale] || (nt[t.parentLocale] = []), nt[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            r = n._config
                        } return tt[e] = new O(x(r, t)), nt[e] && nt[e].forEach((function(e) {
                        it(e.name, e.config)
                    })), st(e), tt[e]
                }
                return delete tt[e], null
            }

            function ot(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Qe;
                if (!s(e)) {
                    if (t = at(e)) return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, n, r, a, s = 0; s < e.length;) {
                        for (t = (a = rt(e[s]).split("-")).length, n = (n = rt(e[s + 1])) ? n.split("-") : null; t > 0;) {
                            if (r = at(a.slice(0, t).join("-"))) return r;
                            if (n && n.length >= t && v(a, n, !0) >= t - 1) break;
                            t--
                        }
                        s++
                    }
                    return Qe
                }(e)
            }

            function dt(e) {
                var t, n = e._a;
                return n && -2 === h(e).overflow && (t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > ve(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, h(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), h(e)._overflowWeeks && -1 === t && (t = 7), h(e)._overflowWeekday && -1 === t && (t = 8), h(e).overflow = t), e
            }

            function ut(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function _t(e) {
                var t, n, r, s, i, o = [];
                if (!e._d) {
                    for (r = function(e) {
                            var t = new Date(a.now());
                            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                        }(e), e._w && null == e._a[2] && null == e._a[1] && function(e) {
                            var t, n, r, a, s, i, o, d;
                            if (null != (t = e._w).GG || null != t.W || null != t.E) s = 1, i = 4, n = ut(t.GG, e._a[0], ze(wt(), 1, 4).year), r = ut(t.W, 1), ((a = ut(t.E, 1)) < 1 || a > 7) && (d = !0);
                            else {
                                s = e._locale._week.dow, i = e._locale._week.doy;
                                var u = ze(wt(), s, i);
                                n = ut(t.gg, e._a[0], u.year), r = ut(t.w, u.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (d = !0) : null != t.e ? (a = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : a = s
                            }
                            r < 1 || r > Re(n, s, i) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = Fe(n, r, a, s, i), e._a[0] = o.year, e._dayOfYear = o.dayOfYear)
                        }(e), null != e._dayOfYear && (i = ut(e._a[0], r[0]), (e._dayOfYear > ye(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = Ee(i, 0, e._dayOfYear), e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
                    for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Ee : Ae).apply(null, o), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (h(e).weekdayMismatch = !0)
                }
            }
            var lt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ct = /Z|[+-]\d\d(?::?\d\d)?/,
                ht = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                ft = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Mt = /^\/?Date\((\-?\d+)/i;

            function yt(e) {
                var t, n, r, a, s, i, o = e._i,
                    d = lt.exec(o) || mt.exec(o);
                if (d) {
                    for (h(e).iso = !0, t = 0, n = ht.length; t < n; t++)
                        if (ht[t][1].exec(d[1])) {
                            a = ht[t][0], r = !1 !== ht[t][2];
                            break
                        } if (null == a) return void(e._isValid = !1);
                    if (d[3]) {
                        for (t = 0, n = ft.length; t < n; t++)
                            if (ft[t][1].exec(d[3])) {
                                s = (d[2] || " ") + ft[t][0];
                                break
                            } if (null == s) return void(e._isValid = !1)
                    }
                    if (!r && null != s) return void(e._isValid = !1);
                    if (d[4]) {
                        if (!ct.exec(d[4])) return void(e._isValid = !1);
                        i = "Z"
                    }
                    e._f = a + (s || "") + (i || ""), kt(e)
                } else e._isValid = !1
            }
            var pt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function Lt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }
            var Yt = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function gt(e) {
                var t, n, r, a, s, i, o, d = pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (d) {
                    var u = (t = d[4], n = d[3], r = d[2], a = d[5], s = d[6], i = d[7], o = [Lt(t), be.indexOf(n), parseInt(r, 10), parseInt(a, 10), parseInt(s, 10)], i && o.push(parseInt(i, 10)), o);
                    if (! function(e, t, n) {
                            return !e || Ue.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (h(n).weekdayMismatch = !0, n._isValid = !1, !1)
                        }(d[1], u, e)) return;
                    e._a = u, e._tzm = function(e, t, n) {
                        if (e) return Yt[e];
                        if (t) return 0;
                        var r = parseInt(n, 10),
                            a = r % 100;
                        return (r - a) / 100 * 60 + a
                    }(d[8], d[9], d[10]), e._d = Ee.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function kt(e) {
                if (e._f !== a.ISO_8601)
                    if (e._f !== a.RFC_2822) {
                        e._a = [], h(e).empty = !0;
                        var t, n, r, s, i, o = "" + e._i,
                            d = o.length,
                            u = 0;
                        for (r = G(e._f, e._locale).match(C) || [], t = 0; t < r.length; t++) s = r[t], (n = (o.match(le(s, e)) || [])[0]) && ((i = o.substr(0, o.indexOf(n))).length > 0 && h(e).unusedInput.push(i), o = o.slice(o.indexOf(n) + n.length), u += n.length), N[s] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(s), Me(s, n, e)) : e._strict && !n && h(e).unusedTokens.push(s);
                        h(e).charsLeftOver = d - u, o.length > 0 && h(e).unusedInput.push(o), e._a[3] <= 12 && !0 === h(e).bigHour && e._a[3] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[3] = function(e, t, n) {
                            var r;
                            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
                        }(e._locale, e._a[3], e._meridiem), _t(e), dt(e)
                    } else gt(e);
                else yt(e)
            }

            function Dt(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || ot(e._l), null === t || void 0 === n && "" === t ? M({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), g(t) ? new Y(dt(t)) : (u(t) ? e._d = t : s(n) ? function(e) {
                    var t, n, r, a, s;
                    if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (a = 0; a < e._f.length; a++) s = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], kt(t), f(t) && (s += h(t).charsLeftOver, s += 10 * h(t).unusedTokens.length, h(t).score = s, (null == r || s < r) && (r = s, n = t));
                    m(e, n || t)
                }(e) : n ? kt(e) : function(e) {
                    var t = e._i;
                    o(t) ? e._d = new Date(a.now()) : u(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = Mt.exec(e._i);
                        null === t ? (yt(e), !1 === e._isValid && (delete e._isValid, gt(e), !1 === e._isValid && (delete e._isValid, a.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : s(t) ? (e._a = _(t.slice(0), (function(e) {
                        return parseInt(e, 10)
                    })), _t(e)) : i(t) ? function(e) {
                        if (!e._d) {
                            var t = W(e._i);
                            e._a = _([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                                return e && parseInt(e, 10)
                            })), _t(e)
                        }
                    }(e) : d(t) ? e._d = new Date(t) : a.createFromInputFallback(e)
                }(e), f(e) || (e._d = null), e))
            }

            function vt(e, t, n, r, a) {
                var o, d = {};
                return !0 !== n && !1 !== n || (r = n, n = void 0), (i(e) && function(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }(e) || s(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = a, d._l = n, d._i = e, d._f = t, d._strict = r, (o = new Y(dt(Dt(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function wt(e, t, n, r) {
                return vt(e, t, n, r, !1)
            }
            a.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            })), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
            var Tt = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = wt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : M()
                })),
                bt = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = wt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : M()
                }));

            function St(e, t) {
                var n, r;
                if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return wt();
                for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                return n
            }
            var jt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Ht(e) {
                var t = W(e),
                    n = t.year || 0,
                    r = t.quarter || 0,
                    a = t.month || 0,
                    s = t.week || t.isoWeek || 0,
                    i = t.day || 0,
                    o = t.hour || 0,
                    d = t.minute || 0,
                    u = t.second || 0,
                    _ = t.millisecond || 0;
                this._isValid = function(e) {
                    for (var t in e)
                        if (-1 === Le.call(jt, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, r = 0; r < jt.length; ++r)
                        if (e[jt[r]]) {
                            if (n) return !1;
                            parseFloat(e[jt[r]]) !== D(e[jt[r]]) && (n = !0)
                        } return !0
                }(t), this._milliseconds = +_ + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +i + 7 * s, this._months = +a + 3 * r + 12 * n, this._data = {}, this._locale = ot(), this._bubble()
            }

            function xt(e) {
                return e instanceof Ht
            }

            function Ot(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function Pt(e, t) {
                J(e, 0, 0, (function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
                }))
            }
            Pt("Z", ":"), Pt("ZZ", ""), _e("Z", oe), _e("ZZ", oe), he(["Z", "ZZ"], (function(e, t, n) {
                n._useUTC = !0, n._tzm = Et(oe, e)
            }));
            var At = /([\+\-]|\d\d)/gi;

            function Et(e, t) {
                var n = (t || "").match(e);
                if (null === n) return null;
                var r = ((n[n.length - 1] || []) + "").match(At) || ["-", 0, 0],
                    a = 60 * r[1] + D(r[2]);
                return 0 === a ? 0 : "+" === r[0] ? a : -a
            }

            function Wt(e, t) {
                var n, r;
                return t._isUTC ? (n = t.clone(), r = (g(e) || u(e) ? e.valueOf() : wt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), a.updateOffset(n, !1), n) : wt(e).local()
            }

            function Ft(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function zt() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            a.updateOffset = function() {};
            var Rt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Ct = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function It(e, t) {
                var n, r, a, s, i, o, u = e,
                    _ = null;
                return xt(e) ? u = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : d(e) ? (u = {}, t ? u[t] = e : u.milliseconds = e) : (_ = Rt.exec(e)) ? (n = "-" === _[1] ? -1 : 1, u = {
                    y: 0,
                    d: D(_[2]) * n,
                    h: D(_[3]) * n,
                    m: D(_[4]) * n,
                    s: D(_[5]) * n,
                    ms: D(Ot(1e3 * _[6])) * n
                }) : (_ = Ct.exec(e)) ? (n = "-" === _[1] ? -1 : 1, u = {
                    y: Ut(_[2], n),
                    M: Ut(_[3], n),
                    w: Ut(_[4], n),
                    d: Ut(_[5], n),
                    h: Ut(_[6], n),
                    m: Ut(_[7], n),
                    s: Ut(_[8], n)
                }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (s = wt(u.from), i = wt(u.to), a = s.isValid() && i.isValid() ? (i = Wt(i, s), s.isBefore(i) ? o = Nt(s, i) : ((o = Nt(i, s)).milliseconds = -o.milliseconds, o.months = -o.months), o) : {
                    milliseconds: 0,
                    months: 0
                }, (u = {}).ms = a.milliseconds, u.M = a.months), r = new Ht(u), xt(e) && l(e, "_locale") && (r._locale = e._locale), r
            }

            function Ut(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Nt(e, t) {
                var n = {};
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function Jt(e, t) {
                return function(n, r) {
                    var a;
                    return null === r || isNaN(+r) || (j(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = r, r = a), Bt(this, It(n = "string" == typeof n ? +n : n, r), e), this
                }
            }

            function Bt(e, t, n, r) {
                var s = t._milliseconds,
                    i = Ot(t._days),
                    o = Ot(t._months);
                e.isValid() && (r = null == r || r, o && je(e, ke(e, "Month") + o * n), i && De(e, "Date", ke(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && a.updateOffset(e, i || o))
            }
            It.fn = Ht.prototype, It.invalid = function() {
                return It(NaN)
            };
            var Gt = Jt(1, "add"),
                Vt = Jt(-1, "subtract");

            function qt(e, t) {
                var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    r = e.clone().add(n, "months");
                return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
            }

            function $t(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = ot(e)) && (this._locale = t), this)
            }
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Kt = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }));

            function Zt() {
                return this._locale
            }
            var Qt = 1e3,
                Xt = 6e4,
                en = 60 * Xt,
                tn = 3506328 * en;

            function nn(e, t) {
                return (e % t + t) % t
            }

            function rn(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, n) - tn : new Date(e, t, n).valueOf()
            }

            function an(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - tn : Date.UTC(e, t, n)
            }

            function sn(e, t) {
                J(0, [e, e.length], 0, t)
            }

            function on(e, t, n, r, a) {
                var s;
                return null == e ? ze(this, r, a).year : (t > (s = Re(e, r, a)) && (t = s), dn.call(this, e, t, n, r, a))
            }

            function dn(e, t, n, r, a) {
                var s = Fe(e, t, n, r, a),
                    i = Ee(s.year, 0, s.dayOfYear);
                return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
            }
            J(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            })), J(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            })), sn("gggg", "weekYear"), sn("ggggg", "weekYear"), sn("GGGG", "isoWeekYear"), sn("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), z("weekYear", 1), z("isoWeekYear", 1), _e("G", se), _e("g", se), _e("GG", Q, q), _e("gg", Q, q), _e("GGGG", ne, K), _e("gggg", ne, K), _e("GGGGG", re, Z), _e("ggggg", re, Z), fe(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, r) {
                t[r.substr(0, 2)] = D(e)
            })), fe(["gg", "GG"], (function(e, t, n, r) {
                t[r] = a.parseTwoDigitYear(e)
            })), J("Q", 0, "Qo", "quarter"), A("quarter", "Q"), z("quarter", 7), _e("Q", V), he("Q", (function(e, t) {
                t[1] = 3 * (D(e) - 1)
            })), J("D", ["DD", 2], "Do", "date"), A("date", "D"), z("date", 9), _e("D", Q), _e("DD", Q, q), _e("Do", (function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            })), he(["D", "DD"], 2), he("Do", (function(e, t) {
                t[2] = D(e.match(Q)[0])
            }));
            var un = ge("Date", !0);
            J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), z("dayOfYear", 4), _e("DDD", te), _e("DDDD", $), he(["DDD", "DDDD"], (function(e, t, n) {
                n._dayOfYear = D(e)
            })), J("m", ["mm", 2], 0, "minute"), A("minute", "m"), z("minute", 14), _e("m", Q), _e("mm", Q, q), he(["m", "mm"], 4);
            var _n = ge("Minutes", !1);
            J("s", ["ss", 2], 0, "second"), A("second", "s"), z("second", 15), _e("s", Q), _e("ss", Q, q), he(["s", "ss"], 5);
            var ln, mn = ge("Seconds", !1);
            for (J("S", 0, 0, (function() {
                    return ~~(this.millisecond() / 100)
                })), J(0, ["SS", 2], 0, (function() {
                    return ~~(this.millisecond() / 10)
                })), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, (function() {
                    return 10 * this.millisecond()
                })), J(0, ["SSSSS", 5], 0, (function() {
                    return 100 * this.millisecond()
                })), J(0, ["SSSSSS", 6], 0, (function() {
                    return 1e3 * this.millisecond()
                })), J(0, ["SSSSSSS", 7], 0, (function() {
                    return 1e4 * this.millisecond()
                })), J(0, ["SSSSSSSS", 8], 0, (function() {
                    return 1e5 * this.millisecond()
                })), J(0, ["SSSSSSSSS", 9], 0, (function() {
                    return 1e6 * this.millisecond()
                })), A("millisecond", "ms"), z("millisecond", 16), _e("S", te, V), _e("SS", te, q), _e("SSS", te, $), ln = "SSSS"; ln.length <= 9; ln += "S") _e(ln, ae);

            function cn(e, t) {
                t[6] = D(1e3 * ("0." + e))
            }
            for (ln = "S"; ln.length <= 9; ln += "S") he(ln, cn);
            var hn = ge("Milliseconds", !1);
            J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
            var fn = Y.prototype;

            function Mn(e) {
                return e
            }
            fn.add = Gt, fn.calendar = function(e, t) {
                var n = e || wt(),
                    r = Wt(n, this).startOf("day"),
                    s = a.calendarFormat(this, r) || "sameElse",
                    i = t && (H(t[s]) ? t[s].call(this, n) : t[s]);
                return this.format(i || this.localeData().calendar(s, this, wt(n)))
            }, fn.clone = function() {
                return new Y(this)
            }, fn.diff = function(e, t, n) {
                var r, a, s;
                if (!this.isValid()) return NaN;
                if (!(r = Wt(e, this)).isValid()) return NaN;
                switch (a = 6e4 * (r.utcOffset() - this.utcOffset()), t = E(t)) {
                    case "year":
                        s = qt(this, r) / 12;
                        break;
                    case "month":
                        s = qt(this, r);
                        break;
                    case "quarter":
                        s = qt(this, r) / 3;
                        break;
                    case "second":
                        s = (this - r) / 1e3;
                        break;
                    case "minute":
                        s = (this - r) / 6e4;
                        break;
                    case "hour":
                        s = (this - r) / 36e5;
                        break;
                    case "day":
                        s = (this - r - a) / 864e5;
                        break;
                    case "week":
                        s = (this - r - a) / 6048e5;
                        break;
                    default:
                        s = this - r
                }
                return n ? s : k(s)
            }, fn.endOf = function(e) {
                var t;
                if (void 0 === (e = E(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? an : rn;
                switch (e) {
                    case "year":
                        t = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        t = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        t = this._d.valueOf(), t += en - nn(t + (this._isUTC ? 0 : this.utcOffset() * Xt), en) - 1;
                        break;
                    case "minute":
                        t = this._d.valueOf(), t += Xt - nn(t, Xt) - 1;
                        break;
                    case "second":
                        t = this._d.valueOf(), t += Qt - nn(t, Qt) - 1
                }
                return this._d.setTime(t), a.updateOffset(this, !0), this
            }, fn.format = function(e) {
                e || (e = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
                var t = B(this, e);
                return this.localeData().postformat(t)
            }, fn.from = function(e, t) {
                return this.isValid() && (g(e) && e.isValid() || wt(e).isValid()) ? It({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, fn.fromNow = function(e) {
                return this.from(wt(), e)
            }, fn.to = function(e, t) {
                return this.isValid() && (g(e) && e.isValid() || wt(e).isValid()) ? It({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, fn.toNow = function(e) {
                return this.to(wt(), e)
            }, fn.get = function(e) {
                return H(this[e = E(e)]) ? this[e]() : this
            }, fn.invalidAt = function() {
                return h(this).overflow
            }, fn.isAfter = function(e, t) {
                var n = g(e) ? e : wt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = E(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }, fn.isBefore = function(e, t) {
                var n = g(e) ? e : wt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = E(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }, fn.isBetween = function(e, t, n, r) {
                var a = g(e) ? e : wt(e),
                    s = g(t) ? t : wt(t);
                return !!(this.isValid() && a.isValid() && s.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === r[1] ? this.isBefore(s, n) : !this.isAfter(s, n))
            }, fn.isSame = function(e, t) {
                var n, r = g(e) ? e : wt(e);
                return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = E(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }, fn.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, fn.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, fn.isValid = function() {
                return f(this)
            }, fn.lang = Kt, fn.locale = $t, fn.localeData = Zt, fn.max = bt, fn.min = Tt, fn.parsingFlags = function() {
                return m({}, h(this))
            }, fn.set = function(e, t) {
                if ("object" == typeof e)
                    for (var n = function(e) {
                            var t = [];
                            for (var n in e) t.push({
                                unit: n,
                                priority: F[n]
                            });
                            return t.sort((function(e, t) {
                                return e.priority - t.priority
                            })), t
                        }(e = W(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]);
                else if (H(this[e = E(e)])) return this[e](t);
                return this
            }, fn.startOf = function(e) {
                var t;
                if (void 0 === (e = E(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? an : rn;
                switch (e) {
                    case "year":
                        t = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        t = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        t = this._d.valueOf(), t -= nn(t + (this._isUTC ? 0 : this.utcOffset() * Xt), en);
                        break;
                    case "minute":
                        t = this._d.valueOf(), t -= nn(t, Xt);
                        break;
                    case "second":
                        t = this._d.valueOf(), t -= nn(t, Qt)
                }
                return this._d.setTime(t), a.updateOffset(this, !0), this
            }, fn.subtract = Vt, fn.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, fn.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, fn.toDate = function() {
                return new Date(this.valueOf())
            }, fn.toISOString = function(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? B(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", B(n, "Z")) : B(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, fn.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment",
                    t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var n = "[" + e + '("]',
                    r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    a = t + '[")]';
                return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + a)
            }, fn.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, fn.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, fn.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, fn.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, fn.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, fn.year = Ye, fn.isLeapYear = function() {
                return pe(this.year())
            }, fn.weekYear = function(e) {
                return on.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, fn.isoWeekYear = function(e) {
                return on.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, fn.quarter = fn.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, fn.month = He, fn.daysInMonth = function() {
                return ve(this.year(), this.month())
            }, fn.week = fn.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, fn.isoWeek = fn.isoWeeks = function(e) {
                var t = ze(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, fn.weeksInYear = function() {
                var e = this.localeData()._week;
                return Re(this.year(), e.dow, e.doy)
            }, fn.isoWeeksInYear = function() {
                return Re(this.year(), 1, 4)
            }, fn.date = un, fn.day = fn.days = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - t, "d")) : t
            }, fn.weekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, fn.isoWeekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, fn.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, fn.hour = fn.hours = Xe, fn.minute = fn.minutes = _n, fn.second = fn.seconds = mn, fn.millisecond = fn.milliseconds = hn, fn.utcOffset = function(e, t, n) {
                var r, s = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Et(oe, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (r = Ft(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), s !== e && (!t || this._changeInProgress ? Bt(this, It(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? s : Ft(this)
            }, fn.utc = function(e) {
                return this.utcOffset(0, e)
            }, fn.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ft(this), "m")), this
            }, fn.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = Et(ie, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, fn.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? wt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, fn.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, fn.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, fn.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, fn.isUtc = zt, fn.isUTC = zt, fn.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, fn.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, fn.dates = T("dates accessor is deprecated. Use date instead.", un), fn.months = T("months accessor is deprecated. Use month instead", He), fn.years = T("years accessor is deprecated. Use year instead", Ye), fn.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            })), fn.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (p(e, this), (e = Dt(e))._a) {
                    var t = e._isUTC ? c(e._a) : wt(e._a);
                    this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }));
            var yn = O.prototype;

            function pn(e, t, n, r) {
                var a = ot(),
                    s = c().set(r, t);
                return a[n](s, e)
            }

            function Ln(e, t, n) {
                if (d(e) && (t = e, e = void 0), e = e || "", null != t) return pn(e, t, n, "month");
                var r, a = [];
                for (r = 0; r < 12; r++) a[r] = pn(e, r, n, "month");
                return a
            }

            function Yn(e, t, n, r) {
                "boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, d(t) && (n = t, t = void 0), t = t || "");
                var a, s = ot(),
                    i = e ? s._week.dow : 0;
                if (null != n) return pn(t, (n + i) % 7, r, "day");
                var o = [];
                for (a = 0; a < 7; a++) o[a] = pn(t, (a + i) % 7, r, "day");
                return o
            }
            yn.calendar = function(e, t, n) {
                var r = this._calendar[e] || this._calendar.sameElse;
                return H(r) ? r.call(t, n) : r
            }, yn.longDateFormat = function(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, (function(e) {
                    return e.slice(1)
                })), this._longDateFormat[e])
            }, yn.invalidDate = function() {
                return this._invalidDate
            }, yn.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }, yn.preparse = Mn, yn.postformat = Mn, yn.relativeTime = function(e, t, n, r) {
                var a = this._relativeTime[n];
                return H(a) ? a(e, t, n, r) : a.replace(/%d/i, e)
            }, yn.pastFuture = function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return H(n) ? n(t) : n.replace(/%s/i, t)
            }, yn.set = function(e) {
                var t, n;
                for (n in e) H(t = e[n]) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, yn.months = function(e, t) {
                return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || we).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
            }, yn.monthsShort = function(e, t) {
                return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[we.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, yn.monthsParse = function(e, t, n) {
                var r, a, s;
                if (this._monthsParseExact) return Se.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                    if (a = c([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                    if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                    if (!n && this._monthsParse[r].test(e)) return r
                }
            }, yn.monthsRegex = function(e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || Pe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Oe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, yn.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || Pe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = xe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, yn.week = function(e) {
                return ze(e, this._week.dow, this._week.doy).week
            }, yn.firstDayOfYear = function() {
                return this._week.doy
            }, yn.firstDayOfWeek = function() {
                return this._week.dow
            }, yn.weekdays = function(e, t) {
                var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Ce(n, this._week.dow) : e ? n[e.day()] : n
            }, yn.weekdaysMin = function(e) {
                return !0 === e ? Ce(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, yn.weekdaysShort = function(e) {
                return !0 === e ? Ce(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, yn.weekdaysParse = function(e, t, n) {
                var r, a, s;
                if (this._weekdaysParseExact) return Je.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                    if (a = c([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
                    if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
                    if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
                    if (!n && this._weekdaysParse[r].test(e)) return r
                }
            }, yn.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Be), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, yn.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ge), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, yn.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ve), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, yn.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, yn.meridiem = function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, st("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), a.lang = T("moment.lang is deprecated. Use moment.locale instead.", st), a.langData = T("moment.langData is deprecated. Use moment.localeData instead.", ot);
            var gn = Math.abs;

            function kn(e, t, n, r) {
                var a = It(t, n);
                return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble()
            }

            function Dn(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function vn(e) {
                return 4800 * e / 146097
            }

            function wn(e) {
                return 146097 * e / 4800
            }

            function Tn(e) {
                return function() {
                    return this.as(e)
                }
            }
            var bn = Tn("ms"),
                Sn = Tn("s"),
                jn = Tn("m"),
                Hn = Tn("h"),
                xn = Tn("d"),
                On = Tn("w"),
                Pn = Tn("M"),
                An = Tn("Q"),
                En = Tn("y");

            function Wn(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var Fn = Wn("milliseconds"),
                zn = Wn("seconds"),
                Rn = Wn("minutes"),
                Cn = Wn("hours"),
                In = Wn("days"),
                Un = Wn("months"),
                Nn = Wn("years"),
                Jn = Math.round,
                Bn = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                };

            function Gn(e, t, n, r, a) {
                return a.relativeTime(t || 1, !!n, e, r)
            }
            var Vn = Math.abs;

            function qn(e) {
                return (e > 0) - (e < 0) || +e
            }

            function $n() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n = Vn(this._milliseconds) / 1e3,
                    r = Vn(this._days),
                    a = Vn(this._months);
                e = k(n / 60), t = k(e / 60), n %= 60, e %= 60;
                var s = k(a / 12),
                    i = a %= 12,
                    o = r,
                    d = t,
                    u = e,
                    _ = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    l = this.asSeconds();
                if (!l) return "P0D";
                var m = l < 0 ? "-" : "",
                    c = qn(this._months) !== qn(l) ? "-" : "",
                    h = qn(this._days) !== qn(l) ? "-" : "",
                    f = qn(this._milliseconds) !== qn(l) ? "-" : "";
                return m + "P" + (s ? c + s + "Y" : "") + (i ? c + i + "M" : "") + (o ? h + o + "D" : "") + (d || u || _ ? "T" : "") + (d ? f + d + "H" : "") + (u ? f + u + "M" : "") + (_ ? f + _ + "S" : "")
            }
            var Kn = Ht.prototype;
            return Kn.isValid = function() {
                return this._isValid
            }, Kn.abs = function() {
                var e = this._data;
                return this._milliseconds = gn(this._milliseconds), this._days = gn(this._days), this._months = gn(this._months), e.milliseconds = gn(e.milliseconds), e.seconds = gn(e.seconds), e.minutes = gn(e.minutes), e.hours = gn(e.hours), e.months = gn(e.months), e.years = gn(e.years), this
            }, Kn.add = function(e, t) {
                return kn(this, e, t, 1)
            }, Kn.subtract = function(e, t) {
                return kn(this, e, t, -1)
            }, Kn.as = function(e) {
                if (!this.isValid()) return NaN;
                var t, n, r = this._milliseconds;
                if ("month" === (e = E(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + vn(t), e) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12
                } else switch (t = this._days + Math.round(wn(this._months)), e) {
                    case "week":
                        return t / 7 + r / 6048e5;
                    case "day":
                        return t + r / 864e5;
                    case "hour":
                        return 24 * t + r / 36e5;
                    case "minute":
                        return 1440 * t + r / 6e4;
                    case "second":
                        return 86400 * t + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, Kn.asMilliseconds = bn, Kn.asSeconds = Sn, Kn.asMinutes = jn, Kn.asHours = Hn, Kn.asDays = xn, Kn.asWeeks = On, Kn.asMonths = Pn, Kn.asQuarters = An, Kn.asYears = En, Kn.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN
            }, Kn._bubble = function() {
                var e, t, n, r, a, s = this._milliseconds,
                    i = this._days,
                    o = this._months,
                    d = this._data;
                return s >= 0 && i >= 0 && o >= 0 || s <= 0 && i <= 0 && o <= 0 || (s += 864e5 * Dn(wn(o) + i), i = 0, o = 0), d.milliseconds = s % 1e3, e = k(s / 1e3), d.seconds = e % 60, t = k(e / 60), d.minutes = t % 60, n = k(t / 60), d.hours = n % 24, i += k(n / 24), o += a = k(vn(i)), i -= Dn(wn(a)), r = k(o / 12), o %= 12, d.days = i, d.months = o, d.years = r, this
            }, Kn.clone = function() {
                return It(this)
            }, Kn.get = function(e) {
                return e = E(e), this.isValid() ? this[e + "s"]() : NaN
            }, Kn.milliseconds = Fn, Kn.seconds = zn, Kn.minutes = Rn, Kn.hours = Cn, Kn.days = In, Kn.weeks = function() {
                return k(this.days() / 7)
            }, Kn.months = Un, Kn.years = Nn, Kn.humanize = function(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(),
                    n = function(e, t, n) {
                        var r = It(e).abs(),
                            a = Jn(r.as("s")),
                            s = Jn(r.as("m")),
                            i = Jn(r.as("h")),
                            o = Jn(r.as("d")),
                            d = Jn(r.as("M")),
                            u = Jn(r.as("y")),
                            _ = a <= Bn.ss && ["s", a] || a < Bn.s && ["ss", a] || s <= 1 && ["m"] || s < Bn.m && ["mm", s] || i <= 1 && ["h"] || i < Bn.h && ["hh", i] || o <= 1 && ["d"] || o < Bn.d && ["dd", o] || d <= 1 && ["M"] || d < Bn.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                        return _[2] = t, _[3] = +e > 0, _[4] = n, Gn.apply(null, _)
                    }(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }, Kn.toISOString = $n, Kn.toString = $n, Kn.toJSON = $n, Kn.locale = $t, Kn.localeData = Zt, Kn.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", $n), Kn.lang = Kt, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), _e("x", se), _e("X", /[+-]?\d+(\.\d{1,3})?/), he("X", (function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            })), he("x", (function(e, t, n) {
                n._d = new Date(D(e))
            })), a.version = "2.24.0", t = wt, a.fn = fn, a.min = function() {
                return St("isBefore", [].slice.call(arguments, 0))
            }, a.max = function() {
                return St("isAfter", [].slice.call(arguments, 0))
            }, a.now = function() {
                return Date.now ? Date.now() : +new Date
            }, a.utc = c, a.unix = function(e) {
                return wt(1e3 * e)
            }, a.months = function(e, t) {
                return Ln(e, t, "months")
            }, a.isDate = u, a.locale = st, a.invalid = M, a.duration = It, a.isMoment = g, a.weekdays = function(e, t, n) {
                return Yn(e, t, n, "weekdays")
            }, a.parseZone = function() {
                return wt.apply(null, arguments).parseZone()
            }, a.localeData = ot, a.isDuration = xt, a.monthsShort = function(e, t) {
                return Ln(e, t, "monthsShort")
            }, a.weekdaysMin = function(e, t, n) {
                return Yn(e, t, n, "weekdaysMin")
            }, a.defineLocale = it, a.updateLocale = function(e, t) {
                if (null != t) {
                    var n, r, a = et;
                    null != (r = at(e)) && (a = r._config), (n = new O(t = x(a, t))).parentLocale = tt[e], tt[e] = n, st(e)
                } else null != tt[e] && (null != tt[e].parentLocale ? tt[e] = tt[e].parentLocale : null != tt[e] && delete tt[e]);
                return tt[e]
            }, a.locales = function() {
                return b(tt)
            }, a.weekdaysShort = function(e, t, n) {
                return Yn(e, t, n, "weekdaysShort")
            }, a.normalizeUnits = E, a.relativeTimeRounding = function(e) {
                return void 0 === e ? Jn : "function" == typeof e && (Jn = e, !0)
            }, a.relativeTimeThreshold = function(e, t) {
                return void 0 !== Bn[e] && (void 0 === t ? Bn[e] : (Bn[e] = t, "s" === e && (Bn.ss = t - 1), !0))
            }, a.calendarFormat = function(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }, a.prototype = fn, a.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, a
        }()
    }).call(this, n(218)(e))
}, , function(e, t, n) {
    "use strict";
    var r = n(36),
        a = "object" == typeof self && self && self.Object === Object && self,
        s = r.a || a || Function("return this")();
    t.a = s
}, function(e, t) {
    var n = e.exports = {
        version: "2.6.10"
    };
    "number" == typeof __e && (__e = n)
}, , , function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function(e, t, n) {
    var r = n(55)("wks"),
        a = n(46),
        s = n(6).Symbol,
        i = "function" == typeof s;
    (e.exports = function(e) {
        return r[e] || (r[e] = i && s[e] || (i ? s : a)("Symbol." + e))
    }).store = r
}, function(e, t, n) {
    "use strict";
    var r = n(70),
        a = n(334),
        s = Object.prototype.toString;

    function i(e) {
        return "[object Array]" === s.call(e)
    }

    function o(e) {
        return null !== e && "object" == typeof e
    }

    function d(e) {
        return "[object Function]" === s.call(e)
    }

    function u(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), i(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
    }
    e.exports = {
        isArray: i,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === s.call(e)
        },
        isBuffer: a,
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: o,
        isUndefined: function(e) {
            return void 0 === e
        },
        isDate: function(e) {
            return "[object Date]" === s.call(e)
        },
        isFile: function(e) {
            return "[object File]" === s.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === s.call(e)
        },
        isFunction: d,
        isStream: function(e) {
            return o(e) && d(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        },
        forEach: u,
        merge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }
            for (var r = 0, a = arguments.length; r < a; r++) u(arguments[r], n);
            return t
        },
        extend: function(e, t, n) {
            return u(t, (function(t, a) {
                e[a] = n && "function" == typeof t ? r(t, n) : t
            })), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function(e, t, n) {
    var r = n(6),
        a = n(3),
        s = n(21),
        i = n(22),
        o = n(24),
        d = function(e, t, n) {
            var u, _, l, m = e & d.F,
                c = e & d.G,
                h = e & d.S,
                f = e & d.P,
                M = e & d.B,
                y = e & d.W,
                p = c ? a : a[t] || (a[t] = {}),
                L = p.prototype,
                Y = c ? r : h ? r[t] : (r[t] || {}).prototype;
            for (u in c && (n = t), n)(_ = !m && Y && void 0 !== Y[u]) && o(p, u) || (l = _ ? Y[u] : n[u], p[u] = c && "function" != typeof Y[u] ? n[u] : M && _ ? s(l, r) : y && Y[u] == l ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(l) : f && "function" == typeof l ? s(Function.call, l) : l, f && ((p.virtual || (p.virtual = {}))[u] = l, e & d.R && L && !L[u] && i(L, u, l)))
        };
    d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return null != e && "object" == typeof e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        a = Object.prototype,
        s = a.hasOwnProperty,
        i = a.toString,
        o = r.a ? r.a.toStringTag : void 0,
        d = Object.prototype.toString,
        u = r.a ? r.a.toStringTag : void 0;
    t.a = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : u && u in Object(e) ? function(e) {
            var t = s.call(e, o),
                n = e[o];
            try {
                e[o] = void 0;
                var r = !0
            } catch (e) {}
            var a = i.call(e);
            return r && (t ? e[o] = n : delete e[o]), a
        }(e) : function(e) {
            return d.call(e)
        }(e)
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(2).a.Symbol;
    t.a = r
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(36),
            a = "object" == typeof exports && exports && !exports.nodeType && exports,
            s = a && "object" == typeof e && e && !e.nodeType && e,
            i = s && s.exports === a && r.a.process,
            o = function() {
                try {
                    return s && s.require && s.require("util").types || i && i.binding && i.binding("util")
                } catch (e) {}
            }();
        t.a = o
    }).call(this, n(50)(e))
}, function(e, t, n) {
    var r = n(17),
        a = n(208),
        s = n(58),
        i = Object.defineProperty;
    t.f = n(18) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = s(t, !0), r(n), a) try {
            return i(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    var r = n(19);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, n) {
    e.exports = !n(29)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, , function(e, t, n) {
    var r = n(28);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, a) {
                    return e.call(t, n, r, a)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, n) {
    var r = n(16),
        a = n(34);
    e.exports = n(18) ? function(e, t, n) {
        return r.f(e, t, a(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, , function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var r = n(59),
        a = n(42);
    e.exports = function(e) {
        return r(a(e))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(317)(!0);
    n(53)(String, "String", (function(e) {
        this._t = String(e), this._i = 0
    }), (function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    }))
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t, n) {
    var r = n(42);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t) {
    e.exports = !0
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    var r = n(16).f,
        a = n(24),
        s = n(8)("toStringTag");
    e.exports = function(e, t, n) {
        e && !a(e = n ? e : e.prototype, s) && r(e, s, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(this, n(32))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(2),
            a = n(206),
            s = "object" == typeof exports && exports && !exports.nodeType && exports,
            i = s && "object" == typeof e && e && !e.nodeType && e,
            o = i && i.exports === s ? r.a.Buffer : void 0,
            d = (o ? o.isBuffer : void 0) || a.a;
        t.a = d
    }).call(this, n(50)(e))
}, function(e, t, n) {
    e.exports = {
        default: n(316),
        __esModule: !0
    }
}, function(e, t, n) {
    var r = n(41),
        a = Math.min;
    e.exports = function(e) {
        return e > 0 ? a(r(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    n(322);
    for (var r = n(6), a = n(22), s = n(25), i = n(8)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), d = 0; d < o.length; d++) {
        var u = o[d],
            _ = r[u],
            l = _ && _.prototype;
        l && !l[i] && a(l, i, u), s[u] = s.Array
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(19),
        a = n(6).document,
        s = r(a) && r(a.createElement);
    e.exports = function(e) {
        return s ? a.createElement(e) : {}
    }
}, function(e, t, n) {
    var r = n(210),
        a = n(56);
    e.exports = Object.keys || function(e) {
        return r(e, a)
    }
}, function(e, t, n) {
    var r = n(55)("keys"),
        a = n(46);
    e.exports = function(e) {
        return r[e] || (r[e] = a(e))
    }
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t, n) {
    var r = n(30),
        a = n(8)("toStringTag"),
        s = "Arguments" == r(function() {
            return arguments
        }());
    e.exports = function(e) {
        var t, n, i;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), a)) ? n : s ? r(t) : "Object" == (i = r(t)) && "function" == typeof t.callee ? "Arguments" : i
    }
}, function(e, t, n) {
    var r = n(21),
        a = n(62),
        s = n(63),
        i = n(17),
        o = n(39),
        d = n(57),
        u = {},
        _ = {};
    (t = e.exports = function(e, t, n, l, m) {
        var c, h, f, M, y = m ? function() {
                return e
            } : d(e),
            p = r(n, l, t ? 2 : 1),
            L = 0;
        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
        if (s(y)) {
            for (c = o(e.length); c > L; L++)
                if ((M = t ? p(i(h = e[L])[0], h[1]) : p(e[L])) === u || M === _) return M
        } else
            for (f = y.call(e); !(h = f.next()).done;)
                if ((M = a(f, p, h.value, t)) === u || M === _) return M
    }).BREAK = u, t.RETURN = _
}, function(e, t, n) {
    "use strict";
    var r = n(28);

    function a(e) {
        var t, n;
        this.promise = new e((function(e, r) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = r
        })), this.resolve = r(t), this.reject = r(n)
    }
    e.exports.f = function(e) {
        return new a(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(9),
            a = n(336),
            s = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function i(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var o, d = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t) && (o = n(71)), o),
            transformRequest: [function(e, t) {
                return a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        r.forEach(["delete", "get", "head"], (function(e) {
            d.headers[e] = {}
        })), r.forEach(["post", "put", "patch"], (function(e) {
            d.headers[e] = r.merge(s)
        })), e.exports = d
    }).call(this, n(217))
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    var r = n(33),
        a = n(10),
        s = n(209),
        i = n(22),
        o = n(25),
        d = n(318),
        u = n(35),
        _ = n(211),
        l = n(8)("iterator"),
        m = !([].keys && "next" in [].keys()),
        c = function() {
            return this
        };
    e.exports = function(e, t, n, h, f, M, y) {
        d(n, t, h);
        var p, L, Y, g = function(e) {
                if (!m && e in w) return w[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            k = t + " Iterator",
            D = "values" == f,
            v = !1,
            w = e.prototype,
            T = w[l] || w["@@iterator"] || f && w[f],
            b = T || g(f),
            S = f ? D ? g("entries") : b : void 0,
            j = "Array" == t && w.entries || T;
        if (j && (Y = _(j.call(new e))) !== Object.prototype && Y.next && (u(Y, k, !0), r || "function" == typeof Y[l] || i(Y, l, c)), D && T && "values" !== T.name && (v = !0, b = function() {
                return T.call(this)
            }), r && !y || !m && !v && w[l] || i(w, l, b), o[t] = b, o[k] = c, f)
            if (p = {
                    values: D ? b : g("values"),
                    keys: M ? b : g("keys"),
                    entries: S
                }, y)
                for (L in p) L in w || s(w, L, p[L]);
            else a(a.P + a.F * (m || v), t, p);
        return p
    }
}, function(e, t, n) {
    var r = n(17),
        a = n(319),
        s = n(56),
        i = n(45)("IE_PROTO"),
        o = function() {},
        d = function() {
            var e, t = n(43)("iframe"),
                r = s.length;
            for (t.style.display = "none", n(60).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; r--;) delete d.prototype[s[r]];
            return d()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (o.prototype = r(e), n = new o, o.prototype = null, n[i] = e) : n = d(), void 0 === t ? n : a(n, t)
    }
}, function(e, t, n) {
    var r = n(3),
        a = n(6),
        s = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return s[e] || (s[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(33) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var r = n(47),
        a = n(8)("iterator"),
        s = n(25);
    e.exports = n(3).getIteratorMethod = function(e) {
        if (null != e) return e[a] || e["@@iterator"] || s[r(e)]
    }
}, function(e, t, n) {
    var r = n(19);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, a;
        if (t && "function" == typeof(n = e.toString) && !r(a = n.call(e))) return a;
        if ("function" == typeof(n = e.valueOf) && !r(a = n.call(e))) return a;
        if (!t && "function" == typeof(n = e.toString) && !r(a = n.call(e))) return a;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, n) {
    var r = n(30);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t, n) {
    var r = n(6).document;
    e.exports = r && r.documentElement
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    var r = n(17);
    e.exports = function(e, t, n, a) {
        try {
            return a ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var s = e.return;
            throw void 0 !== s && r(s.call(e)), t
        }
    }
}, function(e, t, n) {
    var r = n(25),
        a = n(8)("iterator"),
        s = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || s[a] === e)
    }
}, function(e, t, n) {
    var r = n(17),
        a = n(28),
        s = n(8)("species");
    e.exports = function(e, t) {
        var n, i = r(e).constructor;
        return void 0 === i || null == (n = r(i)[s]) ? t : a(n)
    }
}, function(e, t, n) {
    var r, a, s, i = n(21),
        o = n(325),
        d = n(60),
        u = n(43),
        _ = n(6),
        l = _.process,
        m = _.setImmediate,
        c = _.clearImmediate,
        h = _.MessageChannel,
        f = _.Dispatch,
        M = 0,
        y = {},
        p = function() {
            var e = +this;
            if (y.hasOwnProperty(e)) {
                var t = y[e];
                delete y[e], t()
            }
        },
        L = function(e) {
            p.call(e.data)
        };
    m && c || (m = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return y[++M] = function() {
            o("function" == typeof e ? e : Function(e), t)
        }, r(M), M
    }, c = function(e) {
        delete y[e]
    }, "process" == n(30)(l) ? r = function(e) {
        l.nextTick(i(p, e, 1))
    } : f && f.now ? r = function(e) {
        f.now(i(p, e, 1))
    } : h ? (s = (a = new h).port2, a.port1.onmessage = L, r = i(s.postMessage, s, 1)) : _.addEventListener && "function" == typeof postMessage && !_.importScripts ? (r = function(e) {
        _.postMessage(e + "", "*")
    }, _.addEventListener("message", L, !1)) : r = "onreadystatechange" in u("script") ? function(e) {
        d.appendChild(u("script")).onreadystatechange = function() {
            d.removeChild(this), p.call(e)
        }
    } : function(e) {
        setTimeout(i(p, e, 1), 0)
    }), e.exports = {
        set: m,
        clear: c
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, n) {
    var r = n(17),
        a = n(19),
        s = n(49);
    e.exports = function(e, t) {
        if (r(e), a(t) && t.constructor === e) return t;
        var n = s.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function(e, t, n) {
    var r = n(22);
    e.exports = function(e, t, n) {
        for (var a in t) n && e[a] ? e[a] = t[a] : r(e, a, t[a]);
        return e
    }
}, function(e, t, n) {
    var r = n(8)("iterator"),
        a = !1;
    try {
        var s = [7][r]();
        s.return = function() {
            a = !0
        }, Array.from(s, (function() {
            throw 2
        }))
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !a) return !1;
        var n = !1;
        try {
            var s = [7],
                i = s[r]();
            i.next = function() {
                return {
                    done: n = !0
                }
            }, s[r] = function() {
                return i
            }, e(s)
        } catch (e) {}
        return n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        a = n(337),
        s = n(339),
        i = n(340),
        o = n(341),
        d = n(72);
    e.exports = function(e) {
        return new Promise((function(t, u) {
            var _ = e.data,
                l = e.headers;
            r.isFormData(_) && delete l["Content-Type"];
            var m = new XMLHttpRequest;
            if (e.auth) {
                var c = e.auth.username || "",
                    h = e.auth.password || "";
                l.Authorization = "Basic " + btoa(c + ":" + h)
            }
            if (m.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), m.timeout = e.timeout, m.onreadystatechange = function() {
                    if (m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in m ? i(m.getAllResponseHeaders()) : null,
                            r = {
                                data: e.responseType && "text" !== e.responseType ? m.response : m.responseText,
                                status: m.status,
                                statusText: m.statusText,
                                headers: n,
                                config: e,
                                request: m
                            };
                        a(t, u, r), m = null
                    }
                }, m.onerror = function() {
                    u(d("Network Error", e, null, m)), m = null
                }, m.ontimeout = function() {
                    u(d("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", m)), m = null
                }, r.isStandardBrowserEnv()) {
                var f = n(342),
                    M = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? f.read(e.xsrfCookieName) : void 0;
                M && (l[e.xsrfHeaderName] = M)
            }
            if ("setRequestHeader" in m && r.forEach(l, (function(e, t) {
                    void 0 === _ && "content-type" === t.toLowerCase() ? delete l[t] : m.setRequestHeader(t, e)
                })), e.withCredentials && (m.withCredentials = !0), e.responseType) try {
                m.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && m.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && m.upload && m.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                m && (m.abort(), u(e), m = null)
            })), void 0 === _ && (_ = null), m.send(_)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(338);
    e.exports = function(e, t, n, a, s) {
        var i = new Error(e);
        return r(i, t, n, a, s)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            r = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            a = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            s = function(e) {
                return function(t, n, s, i) {
                    var o = r(t),
                        d = a[e][r(t)];
                    return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: s("s"),
                ss: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return n[e]
                })).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            },
            n = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            a = function(e) {
                return function(t, a, s, i) {
                    var o = n(t),
                        d = r[e][n(t)];
                    return 2 === o && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: a("s"),
                ss: a("s"),
                m: a("m"),
                mm: a("m"),
                h: a("h"),
                hh: a("h"),
                d: a("d"),
                dd: a("d"),
                M: a("M"),
                MM: a("M"),
                y: a("y"),
                yy: a("y")
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return n[e]
                })).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-ıncı";
                var n = e % 10;
                return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r, a;
            return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (r = +e, a = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            } [n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }
        e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "дзень",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            },
            n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
        e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            },
            n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            return e + " " + function(e, t) {
                return 2 === t ? function(e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            } [n], e)
        }
        e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case "ss":
                    return r + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return r + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return r + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                case "dd":
                    return r + (1 === e ? "dan" : "dana");
                case "MM":
                    return r + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                case "yy":
                    return r + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
            a = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

        function s(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function i(e, t, n, r) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "pár sekund" : "pár sekundami";
                case "ss":
                    return t || r ? a + (s(e) ? "sekundy" : "sekund") : a + "sekundami";
                case "m":
                    return t ? "minuta" : r ? "minutu" : "minutou";
                case "mm":
                    return t || r ? a + (s(e) ? "minuty" : "minut") : a + "minutami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? a + (s(e) ? "hodiny" : "hodin") : a + "hodinami";
                case "d":
                    return t || r ? "den" : "dnem";
                case "dd":
                    return t || r ? a + (s(e) ? "dny" : "dní") : a + "dny";
                case "M":
                    return t || r ? "měsíc" : "měsícem";
                case "MM":
                    return t || r ? a + (s(e) ? "měsíce" : "měsíců") : a + "měsíci";
                case "y":
                    return t || r ? "rok" : "rokem";
                case "yy":
                    return t || r ? a + (s(e) ? "roky" : "let") : a + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = "";
                return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function(e) {
                return "މފ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n, r = this._calendarEl[e],
                    a = t && t.hours();
                return ((n = r) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (r = r.apply(t)), r.replace("{}", a % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-SG", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? a[n][2] ? a[n][2] : a[n][1] : r ? a[n][0] : a[n][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            },
            n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, (function(e) {
                    return n[e]
                })).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

        function r(e, r, a, s) {
            var i = "";
            switch (a) {
                case "s":
                    return s ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return s ? "sekunnin" : "sekuntia";
                case "m":
                    return s ? "minuutin" : "minuutti";
                case "mm":
                    i = s ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return s ? "tunnin" : "tunti";
                case "hh":
                    i = s ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return s ? "päivän" : "päivä";
                case "dd":
                    i = s ? "päivän" : "päivää";
                    break;
                case "M":
                    return s ? "kuukauden" : "kuukausi";
                case "MM":
                    i = s ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return s ? "vuoden" : "vuosi";
                case "yy":
                    i = s ? "vuoden" : "vuotta"
            }
            return function(e, r) {
                return e < 10 ? r ? n[e] : t[e] : e
            }(e, s) + " " + i
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaður",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ga", {
            months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Méitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deaireadh Fómhair", "Samhain", "Nollaig"],
            monthsShort: ["Eaná", "Feab", "Márt", "Aibr", "Beal", "Méit", "Iúil", "Lúna", "Meán", "Deai", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Satharn"],
            weekdaysShort: ["Dom", "Lua", "Mái", "Céa", "Déa", "hAo", "Sat"],
            weekdaysMin: ["Do", "Lu", "Má", "Ce", "Dé", "hA", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Amárach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inné aig] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ó shin",
                s: "cúpla soicind",
                ss: "%d soicind",
                m: "nóiméad",
                mm: "%d nóiméad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lá",
                dd: "%d lá",
                M: "mí",
                MM: "%d mí",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voranim", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "૧",
                2: "૨",
                3: "૩",
                4: "૪",
                5: "૫",
                6: "૬",
                7: "૭",
                8: "૮",
                9: "૯",
                0: "૦"
            },
            n = {
                "૧": "1",
                "૨": "2",
                "૩": "3",
                "૪": "4",
                "૫": "5",
                "૬": "6",
                "૭": "7",
                "૮": "8",
                "૯": "9",
                "૦": "0"
            };
        e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function(e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case "ss":
                    return r + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return r + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return r + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                case "dd":
                    return r + (1 === e ? "dan" : "dana");
                case "MM":
                    return r + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                case "yy":
                    return r + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

        function n(e, t, n, r) {
            var a = e;
            switch (n) {
                case "s":
                    return r || t ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return a + (r || t) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (r || t ? " perc" : " perce");
                case "mm":
                    return a + (r || t ? " perc" : " perce");
                case "h":
                    return "egy" + (r || t ? " óra" : " órája");
                case "hh":
                    return a + (r || t ? " óra" : " órája");
                case "d":
                    return "egy" + (r || t ? " nap" : " napja");
                case "dd":
                    return a + (r || t ? " nap" : " napja");
                case "M":
                    return "egy" + (r || t ? " hónap" : " hónapja");
                case "MM":
                    return a + (r || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (r || t ? " év" : " éve");
                case "yy":
                    return a + (r || t ? " év" : " éve")
            }
            return ""
        }

        function r(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return r.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return r.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function n(e, n, r, a) {
            var s = e + " ";
            switch (r) {
                case "s":
                    return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return t(e) ? s + (n || a ? "sekúndur" : "sekúndum") : s + "sekúnda";
                case "m":
                    return n ? "mínúta" : "mínútu";
                case "mm":
                    return t(e) ? s + (n || a ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
                case "hh":
                    return t(e) ? s + (n || a ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case "d":
                    return n ? "dagur" : a ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? s + "dagar" : s + (a ? "daga" : "dögum") : n ? s + "dagur" : s + (a ? "dag" : "degi");
                case "M":
                    return n ? "mánuður" : a ? "mánuð" : "mánuði";
                case "MM":
                    return t(e) ? n ? s + "mánuðir" : s + (a ? "mánuði" : "mánuðum") : n ? s + "mánuður" : s + (a ? "mánuð" : "mánuði");
                case "y":
                    return n || a ? "ár" : "ári";
                case "yy":
                    return t(e) ? s + (n || a ? "ár" : "árum") : s + (n || a ? "ár" : "ári")
            }
        }
        e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ja", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(e) {
                return "午後" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: function(e) {
                    return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
                },
                lastDay: "[昨日] LT",
                lastWeek: function(e) {
                    return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function(e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩",
                0: "០"
            },
            n = {
                "១": "1",
                "២": "2",
                "៣": "3",
                "៤": "4",
                "៥": "5",
                "៦": "6",
                "៧": "7",
                "៨": "8",
                "៩": "9",
                "០": "0"
            };
        e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function(e) {
                return "ល្ងាច" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function(e) {
                return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            },
            n = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            };
        e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function(e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function(e) {
                return e + "ನೇ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            r = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
        e.defineLocale("ku", {
            months: r,
            monthsShort: r,
            weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function(e) {
                return /ئێواره‌/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "به‌یانی" : "ئێواره‌"
            },
            calendar: {
                sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                nextDay: "[به‌یانی كاتژمێر] LT",
                nextWeek: "dddd [كاتژمێر] LT",
                lastDay: "[دوێنێ كاتژمێر] LT",
                lastWeek: "dddd [كاتژمێر] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "له‌ %s",
                past: "%s",
                s: "چه‌ند چركه‌یه‌ك",
                ss: "چركه‌ %d",
                m: "یه‌ك خوله‌ك",
                mm: "%d خوله‌ك",
                h: "یه‌ك كاتژمێر",
                hh: "%d كاتژمێر",
                d: "یه‌ك ڕۆژ",
                dd: "%d ڕۆژ",
                M: "یه‌ك مانگ",
                MM: "%d مانگ",
                y: "یه‌ك ساڵ",
                yy: "%d ساڵ"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return n[e]
                })).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кечээ саат] LT",
                lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return n(0 === t ? e / 10 : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return n(e)
            }
            return n(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };

        function n(e, t, n, r) {
            return t ? a(n)[0] : r ? a(n)[1] : a(n)[2]
        }

        function r(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function a(e) {
            return t[e].split("_")
        }

        function s(e, t, s, i) {
            var o = e + " ";
            return 1 === e ? o + n(0, t, s[0], i) : t ? o + (r(e) ? a(s)[1] : a(s)[0]) : i ? o + a(s)[1] : o + (r(e) ? a(s)[1] : a(s)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: function(e, t, n, r) {
                    return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
                },
                ss: s,
                m: n,
                mm: s,
                h: n,
                hh: s,
                d: n,
                dd: s,
                M: n,
                MM: s,
                y: n,
                yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function n(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function r(e, r, a) {
            return e + " " + n(t[a], e, r)
        }

        function a(e, r, a) {
            return n(t[a], e, r)
        }
        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                },
                ss: r,
                m: a,
                mm: r,
                h: a,
                hh: r,
                d: a,
                dd: r,
                M: a,
                MM: r,
                y: a,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            switch (n) {
                case "s":
                    return t ? "хэдхэн секунд" : "хэдхэн секундын";
                case "ss":
                    return e + (t ? " секунд" : " секундын");
                case "m":
                case "mm":
                    return e + (t ? " минут" : " минутын");
                case "h":
                case "hh":
                    return e + (t ? " цаг" : " цагийн");
                case "d":
                case "dd":
                    return e + (t ? " өдөр" : " өдрийн");
                case "M":
                case "MM":
                    return e + (t ? " сар" : " сарын");
                case "y":
                case "yy":
                    return e + (t ? " жил" : " жилийн");
                default:
                    return e
            }
        }
        e.defineLocale("mn", {
            months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
            monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY оны MMMMын D",
                LLL: "YYYY оны MMMMын D HH:mm",
                LLLL: "dddd, YYYY оны MMMMын D HH:mm"
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function(e) {
                return "ҮХ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ҮӨ" : "ҮХ"
            },
            calendar: {
                sameDay: "[Өнөөдөр] LT",
                nextDay: "[Маргааш] LT",
                nextWeek: "[Ирэх] dddd LT",
                lastDay: "[Өчигдөр] LT",
                lastWeek: "[Өнгөрсөн] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s дараа",
                past: "%s өмнө",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " өдөр";
                    default:
                        return e
                }
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };

        function r(e, t, n, r) {
            var a = "";
            if (t) switch (n) {
                case "s":
                    a = "काही सेकंद";
                    break;
                case "ss":
                    a = "%d सेकंद";
                    break;
                case "m":
                    a = "एक मिनिट";
                    break;
                case "mm":
                    a = "%d मिनिटे";
                    break;
                case "h":
                    a = "एक तास";
                    break;
                case "hh":
                    a = "%d तास";
                    break;
                case "d":
                    a = "एक दिवस";
                    break;
                case "dd":
                    a = "%d दिवस";
                    break;
                case "M":
                    a = "एक महिना";
                    break;
                case "MM":
                    a = "%d महिने";
                    break;
                case "y":
                    a = "एक वर्ष";
                    break;
                case "yy":
                    a = "%d वर्षे"
            } else switch (n) {
                case "s":
                    a = "काही सेकंदां";
                    break;
                case "ss":
                    a = "%d सेकंदां";
                    break;
                case "m":
                    a = "एका मिनिटा";
                    break;
                case "mm":
                    a = "%d मिनिटां";
                    break;
                case "h":
                    a = "एका तासा";
                    break;
                case "hh":
                    a = "%d तासां";
                    break;
                case "d":
                    a = "एका दिवसा";
                    break;
                case "dd":
                    a = "%d दिवसां";
                    break;
                case "M":
                    a = "एका महिन्या";
                    break;
                case "MM":
                    a = "%d महिन्यां";
                    break;
                case "y":
                    a = "एका वर्षा";
                    break;
                case "yy":
                    a = "%d वर्षां"
            }
            return a.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            },
            n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            },
            n = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "[ਅਗਲਾ] dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function r(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function a(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "ss":
                    return a + (r(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return a + (r(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return a + (r(e) ? "godziny" : "godzin");
                case "MM":
                    return a + (r(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return a + (r(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, r) {
                return e ? "" === r ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: a,
                y: "rok",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            } [n]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r, a;
            return "m" === n ? t ? "минута" : "минуту" : e + " " + (r = +e, a = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            } [n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }
        var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня, в] LT",
                nextDay: "[Завтра, в] LT",
                lastDay: "[Вчера, в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: t,
                m: t,
                mm: t,
                h: "час",
                hh: t,
                d: "день",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

        function r(e) {
            return e > 1 && e < 5
        }

        function a(e, t, n, a) {
            var s = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return t || a ? s + (r(e) ? "sekundy" : "sekúnd") : s + "sekundami";
                case "m":
                    return t ? "minúta" : a ? "minútu" : "minútou";
                case "mm":
                    return t || a ? s + (r(e) ? "minúty" : "minút") : s + "minútami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? s + (r(e) ? "hodiny" : "hodín") : s + "hodinami";
                case "d":
                    return t || a ? "deň" : "dňom";
                case "dd":
                    return t || a ? s + (r(e) ? "dni" : "dní") : s + "dňami";
                case "M":
                    return t || a ? "mesiac" : "mesiacom";
                case "MM":
                    return t || a ? s + (r(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                case "y":
                    return t || a ? "rok" : "rokom";
                case "yy":
                    return t || a ? s + (r(e) ? "roky" : "rokov") : s + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return a + (1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund");
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return a + (1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami");
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return a + (1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami");
                case "d":
                    return t || r ? "en dan" : "enim dnem";
                case "dd":
                    return a + (1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi");
                case "M":
                    return t || r ? "en mesec" : "enim mesecem";
                case "MM":
                    return a + (1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci");
                case "y":
                    return t || r ? "eno leto" : "enim letom";
                case "yy":
                    return a + (1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti")
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t || 2 === t ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            },
            n = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது"
            },
            preparse: function(e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        e.defineLocale("tg", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Пагоҳ соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, r, a) {
            var s = function(e) {
                var n = Math.floor(e % 1e3 / 100),
                    r = Math.floor(e % 100 / 10),
                    a = e % 10,
                    s = "";
                return n > 0 && (s += t[n] + "vatlh"), r > 0 && (s += ("" !== s ? " " : "") + t[r] + "maH"), a > 0 && (s += ("" !== s ? " " : "") + t[a]), "" === s ? "pagh" : s
            }(e);
            switch (r) {
                case "ss":
                    return s + " lup";
                case "mm":
                    return s + " tup";
                case "hh":
                    return s + " rep";
                case "dd":
                    return s + " jaj";
                case "MM":
                    return s + " jar";
                case "yy":
                    return s + " DIS"
            }
        }
        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: n,
                m: "wa’ tup",
                mm: n,
                h: "wa’ rep",
                hh: n,
                d: "wa’ jaj",
                dd: n,
                M: "wa’ jar",
                MM: n,
                y: "wa’ DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'ıncı";
                        var r = e % 10;
                        return e + (t[r] || t[e % 100 - r] || t[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return r || t ? a[n][0] : a[n][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "يېرىم كېچە" : r < 900 ? "سەھەر" : r < 1130 ? "چۈشتىن بۇرۇن" : r < 1230 ? "چۈش" : r < 1800 ? "چۈشتىن كېيىن" : "كەچ"
            },
            calendar: {
                sameDay: "[بۈگۈن سائەت] LT",
                nextDay: "[ئەتە سائەت] LT",
                nextWeek: "[كېلەركى] dddd [سائەت] LT",
                lastDay: "[تۆنۈگۈن] LT",
                lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s كېيىن",
                past: "%s بۇرۇن",
                s: "نەچچە سېكونت",
                ss: "%d سېكونت",
                m: "بىر مىنۇت",
                mm: "%d مىنۇت",
                h: "بىر سائەت",
                hh: "%d سائەت",
                d: "بىر كۈن",
                dd: "%d كۈن",
                M: "بىر ئاي",
                MM: "%d ئاي",
                y: "بىر يىل",
                yy: "%d يىل"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-كۈنى";
                    case "w":
                    case "W":
                        return e + "-ھەپتە";
                    default:
                        return e
                }
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r, a;
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (r = +e, a = {
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            } [n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }

        function n(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: n("[Сьогодні "),
                nextDay: n("[Завтра "),
                lastDay: n("[Вчора "),
                nextWeek: n("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: t,
                m: t,
                mm: t,
                h: "годину",
                hh: t,
                d: "день",
                dd: t,
                M: "місяць",
                MM: t,
                y: "рік",
                yy: t
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(0))
}, function(e, t, n) {
    e.exports = {
        default: n(352),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, a = (r = n(38)) && r.__esModule ? r : {
        default: r
    };
    t.matchUrl = function(e) {
        return !e.match("https://chrome.google.com") && (!e.match("view-source:") && (!e.match("file:///") && (!!e.match("http://") || (!!e.match("https://") || void 0))))
    }, t.getIndicesOf = function(e, t) {
        var n = t.length;
        if (0 == n) return [];
        for (var r = 0, a = void 0, s = [];
            (a = e.indexOf(t, r)) > -1;) s.push(a), r = a + n;
        return s
    }, t.escapeRegExp = function(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }, t.generateID = function() {
        for (var e = Math.random().toString(36).substr(2, 9) + Date.now().toString(36).substr(3), t = 0; t < e.length; t++) Math.random() > .5 && (e = e.substr(0, t) + e[t].toUpperCase() + e.substr(t + 1));
        return e
    }, t.base64toBlob = function(e, t) {
        e.match("base64,") && (e = e.slice(e.indexOf("base64,") + 7)), t = t || "";
        for (var n = atob(e), r = n.length, a = Math.ceil(r / 1024), s = new Array(a), i = 0; i < a; ++i) {
            for (var o = 1024 * i, d = Math.min(o + 1024, r), u = new Array(d - o), _ = o, l = 0; _ < d; ++l, ++_) u[l] = n[_].charCodeAt(0);
            s[i] = new Uint8Array(u)
        }
        return new Blob(s, {
            type: t
        })
    }, t.toDataURL = function(e, t) {
        return new a.default((function(n, r) {
            var a = new Image;
            a.crossOrigin = "Anonymous", a.onload = function() {
                var e, r = document.createElement("CANVAS"),
                    a = r.getContext("2d");
                r.height = this.naturalHeight, r.width = this.naturalWidth, a.drawImage(this, 0, 0), e = r.toDataURL(t), n(e)
            }, a.src = e, (a.complete || void 0 === a.complete) && (a.src = e)
        }))
    }
}, , , function(e, t, n) {
    "use strict";
    t.a = function() {
        return !1
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(2),
            a = "object" == typeof exports && exports && !exports.nodeType && exports,
            s = a && "object" == typeof e && e && !e.nodeType && e,
            i = s && s.exports === a ? r.a.Buffer : void 0,
            o = i ? i.allocUnsafe : void 0;
        t.a = function(e, t) {
            if (t) return e.slice();
            var n = e.length,
                r = o ? o(n) : new e.constructor(n);
            return e.copy(r), r
        }
    }).call(this, n(50)(e))
}, function(e, t, n) {
    e.exports = !n(18) && !n(29)((function() {
        return 7 != Object.defineProperty(n(43)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(e, t, n) {
    e.exports = n(22)
}, function(e, t, n) {
    var r = n(24),
        a = n(26),
        s = n(320)(!1),
        i = n(45)("IE_PROTO");
    e.exports = function(e, t) {
        var n, o = a(e),
            d = 0,
            u = [];
        for (n in o) n != i && r(o, n) && u.push(n);
        for (; t.length > d;) r(o, n = t[d++]) && (~s(u, n) || u.push(n));
        return u
    }
}, function(e, t, n) {
    var r = n(24),
        a = n(31),
        s = n(45)("IE_PROTO"),
        i = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = a(e), r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(6),
        a = n(3),
        s = n(16),
        i = n(18),
        o = n(8)("species");
    e.exports = function(e) {
        var t = "function" == typeof a[e] ? a[e] : r[e];
        i && t && !t[o] && s.f(t, o, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, a = (r = n(216)) && r.__esModule ? r : {
        default: r
    };
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, a.default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    e.exports = {
        default: n(330),
        __esModule: !0
    }
}, function(e, t) {
    var n, r, a = e.exports = {};

    function s() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
            n = s
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            r = i
        }
    }();
    var d, u = [],
        _ = !1,
        l = -1;

    function m() {
        _ && d && (_ = !1, d.length ? u = d.concat(u) : l = -1, u.length && c())
    }

    function c() {
        if (!_) {
            var e = o(m);
            _ = !0;
            for (var t = u.length; t;) {
                for (d = u, u = []; ++l < t;) d && d[l].run();
                l = -1, t = u.length
            }
            d = null, _ = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function f() {}
    a.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || _ || o(c)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = f, a.addListener = f, a.once = f, a.off = f, a.removeListener = f, a.removeAllListeners = f, a.emit = f, a.prependListener = f, a.prependOnceListener = f, a.listeners = function(e) {
        return []
    }, a.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, a.cwd = function() {
        return "/"
    }, a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, a.umask = function() {
        return 0
    }
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n(313),
            a = n(314),
            s = n(315);

        function i() {
            return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function o(e, t) {
            if (i() < t) throw new RangeError("Invalid typed array length");
            return d.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = d.prototype : (null === e && (e = new d(t)), e.length = t), e
        }

        function d(e, t, n) {
            if (!(d.TYPED_ARRAY_SUPPORT || this instanceof d)) return new d(e, t, n);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, e)
            }
            return u(this, e, t, n)
        }

        function u(e, t, n, r) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), d.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = d.prototype : e = m(e, t), e
            }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !d.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | h(t, n),
                    a = (e = o(e, r)).write(t, n);
                return a !== r && (e = e.slice(0, a)), e
            }(e, t, n) : function(e, t) {
                if (d.isBuffer(t)) {
                    var n = 0 | c(t.length);
                    return 0 === (e = o(e, n)).length || t.copy(e, 0, 0, n), e
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? o(e, 0) : m(e, t);
                    if ("Buffer" === t.type && s(t.data)) return m(e, t.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function _(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function l(e, t) {
            if (_(t), e = o(e, t < 0 ? 0 : 0 | c(t)), !d.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) e[n] = 0;
            return e
        }

        function m(e, t) {
            var n = t.length < 0 ? 0 : 0 | c(t.length);
            e = o(e, n);
            for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
            return e
        }

        function c(e) {
            if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | e
        }

        function h(e, t) {
            if (d.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return I(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return U(e).length;
                default:
                    if (r) return I(e).length;
                    t = ("" + t).toLowerCase(), r = !0
            }
        }

        function f(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return H(this, t, n);
                case "utf8":
                case "utf-8":
                    return T(this, t, n);
                case "ascii":
                    return S(this, t, n);
                case "latin1":
                case "binary":
                    return j(this, t, n);
                case "base64":
                    return w(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return x(this, t, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), r = !0
            }
        }

        function M(e, t, n) {
            var r = e[t];
            e[t] = e[n], e[n] = r
        }

        function y(e, t, n, r, a) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = a ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (a) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!a) return -1;
                n = 0
            }
            if ("string" == typeof t && (t = d.from(t, r)), d.isBuffer(t)) return 0 === t.length ? -1 : p(e, t, n, r, a);
            if ("number" == typeof t) return t &= 255, d.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : p(e, [t], n, r, a);
            throw new TypeError("val must be string, number or Buffer")
        }

        function p(e, t, n, r, a) {
            var s, i = 1,
                o = e.length,
                d = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2) return -1;
                i = 2, o /= 2, d /= 2, n /= 2
            }

            function u(e, t) {
                return 1 === i ? e[t] : e.readUInt16BE(t * i)
            }
            if (a) {
                var _ = -1;
                for (s = n; s < o; s++)
                    if (u(e, s) === u(t, -1 === _ ? 0 : s - _)) {
                        if (-1 === _ && (_ = s), s - _ + 1 === d) return _ * i
                    } else -1 !== _ && (s -= s - _), _ = -1
            } else
                for (n + d > o && (n = o - d), s = n; s >= 0; s--) {
                    for (var l = !0, m = 0; m < d; m++)
                        if (u(e, s + m) !== u(t, m)) {
                            l = !1;
                            break
                        } if (l) return s
                }
            return -1
        }

        function L(e, t, n, r) {
            n = Number(n) || 0;
            var a = e.length - n;
            r ? (r = Number(r)) > a && (r = a) : r = a;
            var s = t.length;
            if (s % 2 != 0) throw new TypeError("Invalid hex string");
            r > s / 2 && (r = s / 2);
            for (var i = 0; i < r; ++i) {
                var o = parseInt(t.substr(2 * i, 2), 16);
                if (isNaN(o)) return i;
                e[n + i] = o
            }
            return i
        }

        function Y(e, t, n, r) {
            return N(I(t, e.length - n), e, n, r)
        }

        function g(e, t, n, r) {
            return N(function(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }

        function k(e, t, n, r) {
            return g(e, t, n, r)
        }

        function D(e, t, n, r) {
            return N(U(t), e, n, r)
        }

        function v(e, t, n, r) {
            return N(function(e, t) {
                for (var n, r, a, s = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) r = (n = e.charCodeAt(i)) >> 8, a = n % 256, s.push(a), s.push(r);
                return s
            }(t, e.length - n), e, n, r)
        }

        function w(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }

        function T(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], a = t; a < n;) {
                var s, i, o, d, u = e[a],
                    _ = null,
                    l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (a + l <= n) switch (l) {
                    case 1:
                        u < 128 && (_ = u);
                        break;
                    case 2:
                        128 == (192 & (s = e[a + 1])) && (d = (31 & u) << 6 | 63 & s) > 127 && (_ = d);
                        break;
                    case 3:
                        s = e[a + 1], i = e[a + 2], 128 == (192 & s) && 128 == (192 & i) && (d = (15 & u) << 12 | (63 & s) << 6 | 63 & i) > 2047 && (d < 55296 || d > 57343) && (_ = d);
                        break;
                    case 4:
                        s = e[a + 1], i = e[a + 2], o = e[a + 3], 128 == (192 & s) && 128 == (192 & i) && 128 == (192 & o) && (d = (15 & u) << 18 | (63 & s) << 12 | (63 & i) << 6 | 63 & o) > 65535 && d < 1114112 && (_ = d)
                }
                null === _ ? (_ = 65533, l = 1) : _ > 65535 && (_ -= 65536, r.push(_ >>> 10 & 1023 | 55296), _ = 56320 | 1023 & _), r.push(_), a += l
            }
            return function(e) {
                var t = e.length;
                if (t <= b) return String.fromCharCode.apply(String, e);
                for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += b));
                return n
            }(r)
        }
        t.Buffer = d, t.SlowBuffer = function(e) {
            return +e != e && (e = 0), d.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, d.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = i(), d.poolSize = 8192, d._augment = function(e) {
            return e.__proto__ = d.prototype, e
        }, d.from = function(e, t, n) {
            return u(null, e, t, n)
        }, d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, {
            value: null,
            configurable: !0
        })), d.alloc = function(e, t, n) {
            return function(e, t, n, r) {
                return _(t), t <= 0 ? o(e, t) : void 0 !== n ? "string" == typeof r ? o(e, t).fill(n, r) : o(e, t).fill(n) : o(e, t)
            }(null, e, t, n)
        }, d.allocUnsafe = function(e) {
            return l(null, e)
        }, d.allocUnsafeSlow = function(e) {
            return l(null, e)
        }, d.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, d.compare = function(e, t) {
            if (!d.isBuffer(e) || !d.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var n = e.length, r = t.length, a = 0, s = Math.min(n, r); a < s; ++a)
                if (e[a] !== t[a]) {
                    n = e[a], r = t[a];
                    break
                } return n < r ? -1 : r < n ? 1 : 0
        }, d.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, d.concat = function(e, t) {
            if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return d.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = d.allocUnsafe(t),
                a = 0;
            for (n = 0; n < e.length; ++n) {
                var i = e[n];
                if (!d.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                i.copy(r, a), a += i.length
            }
            return r
        }, d.byteLength = h, d.prototype._isBuffer = !0, d.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) M(this, t, t + 1);
            return this
        }, d.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) M(this, t, t + 3), M(this, t + 1, t + 2);
            return this
        }, d.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) M(this, t, t + 7), M(this, t + 1, t + 6), M(this, t + 2, t + 5), M(this, t + 3, t + 4);
            return this
        }, d.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : f.apply(this, arguments)
        }, d.prototype.equals = function(e) {
            if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === d.compare(this, e)
        }, d.prototype.inspect = function() {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, d.prototype.compare = function(e, t, n, r, a) {
            if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), t < 0 || n > e.length || r < 0 || a > this.length) throw new RangeError("out of range index");
            if (r >= a && t >= n) return 0;
            if (r >= a) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (var s = (a >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), o = Math.min(s, i), u = this.slice(r, a), _ = e.slice(t, n), l = 0; l < o; ++l)
                if (u[l] !== _[l]) {
                    s = u[l], i = _[l];
                    break
                } return s < i ? -1 : i < s ? 1 : 0
        }, d.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, d.prototype.indexOf = function(e, t, n) {
            return y(this, e, t, n, !0)
        }, d.prototype.lastIndexOf = function(e, t, n) {
            return y(this, e, t, n, !1)
        }, d.prototype.write = function(e, t, n, r) {
            if (void 0 === t) r = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var a = this.length - t;
            if ((void 0 === n || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var s = !1;;) switch (r) {
                case "hex":
                    return L(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return Y(this, e, t, n);
                case "ascii":
                    return g(this, e, t, n);
                case "latin1":
                case "binary":
                    return k(this, e, t, n);
                case "base64":
                    return D(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return v(this, e, t, n);
                default:
                    if (s) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), s = !0
            }
        }, d.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var b = 4096;

        function S(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
            return r
        }

        function j(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var a = t; a < n; ++a) r += String.fromCharCode(e[a]);
            return r
        }

        function H(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var a = "", s = t; s < n; ++s) a += C(e[s]);
            return a
        }

        function x(e, t, n) {
            for (var r = e.slice(t, n), a = "", s = 0; s < r.length; s += 2) a += String.fromCharCode(r[s] + 256 * r[s + 1]);
            return a
        }

        function O(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function P(e, t, n, r, a, s) {
            if (!d.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > a || t < s) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError("Index out of range")
        }

        function A(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var a = 0, s = Math.min(e.length - n, 2); a < s; ++a) e[n + a] = (t & 255 << 8 * (r ? a : 1 - a)) >>> 8 * (r ? a : 1 - a)
        }

        function E(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var a = 0, s = Math.min(e.length - n, 4); a < s; ++a) e[n + a] = t >>> 8 * (r ? a : 3 - a) & 255
        }

        function W(e, t, n, r, a, s) {
            if (n + r > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function F(e, t, n, r, s) {
            return s || W(e, 0, n, 4), a.write(e, t, n, r, 23, 4), n + 4
        }

        function z(e, t, n, r, s) {
            return s || W(e, 0, n, 8), a.write(e, t, n, r, 52, 8), n + 8
        }
        d.prototype.slice = function(e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), d.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = d.prototype;
            else {
                var a = t - e;
                n = new d(a, void 0);
                for (var s = 0; s < a; ++s) n[s] = this[s + e]
            }
            return n
        }, d.prototype.readUIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || O(e, t, this.length);
            for (var r = this[e], a = 1, s = 0; ++s < t && (a *= 256);) r += this[e + s] * a;
            return r
        }, d.prototype.readUIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || O(e, t, this.length);
            for (var r = this[e + --t], a = 1; t > 0 && (a *= 256);) r += this[e + --t] * a;
            return r
        }, d.prototype.readUInt8 = function(e, t) {
            return t || O(e, 1, this.length), this[e]
        }, d.prototype.readUInt16LE = function(e, t) {
            return t || O(e, 2, this.length), this[e] | this[e + 1] << 8
        }, d.prototype.readUInt16BE = function(e, t) {
            return t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, d.prototype.readUInt32LE = function(e, t) {
            return t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, d.prototype.readUInt32BE = function(e, t) {
            return t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, d.prototype.readIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || O(e, t, this.length);
            for (var r = this[e], a = 1, s = 0; ++s < t && (a *= 256);) r += this[e + s] * a;
            return r >= (a *= 128) && (r -= Math.pow(2, 8 * t)), r
        }, d.prototype.readIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || O(e, t, this.length);
            for (var r = t, a = 1, s = this[e + --r]; r > 0 && (a *= 256);) s += this[e + --r] * a;
            return s >= (a *= 128) && (s -= Math.pow(2, 8 * t)), s
        }, d.prototype.readInt8 = function(e, t) {
            return t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, d.prototype.readInt16LE = function(e, t) {
            t || O(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, d.prototype.readInt16BE = function(e, t) {
            t || O(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, d.prototype.readInt32LE = function(e, t) {
            return t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, d.prototype.readInt32BE = function(e, t) {
            return t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, d.prototype.readFloatLE = function(e, t) {
            return t || O(e, 4, this.length), a.read(this, e, !0, 23, 4)
        }, d.prototype.readFloatBE = function(e, t) {
            return t || O(e, 4, this.length), a.read(this, e, !1, 23, 4)
        }, d.prototype.readDoubleLE = function(e, t) {
            return t || O(e, 8, this.length), a.read(this, e, !0, 52, 8)
        }, d.prototype.readDoubleBE = function(e, t) {
            return t || O(e, 8, this.length), a.read(this, e, !1, 52, 8)
        }, d.prototype.writeUIntLE = function(e, t, n, r) {
            e = +e, t |= 0, n |= 0, r || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var a = 1,
                s = 0;
            for (this[t] = 255 & e; ++s < n && (a *= 256);) this[t + s] = e / a & 255;
            return t + n
        }, d.prototype.writeUIntBE = function(e, t, n, r) {
            e = +e, t |= 0, n |= 0, r || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var a = n - 1,
                s = 1;
            for (this[t + a] = 255 & e; --a >= 0 && (s *= 256);) this[t + a] = e / s & 255;
            return t + n
        }, d.prototype.writeUInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 1, 255, 0), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, d.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : A(this, e, t, !0), t + 2
        }, d.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : A(this, e, t, !1), t + 2
        }, d.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : E(this, e, t, !0), t + 4
        }, d.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : E(this, e, t, !1), t + 4
        }, d.prototype.writeIntLE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var a = Math.pow(2, 8 * n - 1);
                P(this, e, t, n, a - 1, -a)
            }
            var s = 0,
                i = 1,
                o = 0;
            for (this[t] = 255 & e; ++s < n && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1), this[t + s] = (e / i >> 0) - o & 255;
            return t + n
        }, d.prototype.writeIntBE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var a = Math.pow(2, 8 * n - 1);
                P(this, e, t, n, a - 1, -a)
            }
            var s = n - 1,
                i = 1,
                o = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1), this[t + s] = (e / i >> 0) - o & 255;
            return t + n
        }, d.prototype.writeInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 1, 127, -128), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, d.prototype.writeInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : A(this, e, t, !0), t + 2
        }, d.prototype.writeInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : A(this, e, t, !1), t + 2
        }, d.prototype.writeInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 4, 2147483647, -2147483648), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : E(this, e, t, !0), t + 4
        }, d.prototype.writeInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : E(this, e, t, !1), t + 4
        }, d.prototype.writeFloatLE = function(e, t, n) {
            return F(this, e, t, !0, n)
        }, d.prototype.writeFloatBE = function(e, t, n) {
            return F(this, e, t, !1, n)
        }, d.prototype.writeDoubleLE = function(e, t, n) {
            return z(this, e, t, !0, n)
        }, d.prototype.writeDoubleBE = function(e, t, n) {
            return z(this, e, t, !1, n)
        }, d.prototype.copy = function(e, t, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var a, s = r - n;
            if (this === e && n < t && t < r)
                for (a = s - 1; a >= 0; --a) e[a + t] = this[a + n];
            else if (s < 1e3 || !d.TYPED_ARRAY_SUPPORT)
                for (a = 0; a < s; ++a) e[a + t] = this[a + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
            return s
        }, d.prototype.fill = function(e, t, n, r) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                    var a = e.charCodeAt(0);
                    a < 256 && (e = a)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !d.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var s;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                for (s = t; s < n; ++s) this[s] = e;
            else {
                var i = d.isBuffer(e) ? e : I(new d(e, r).toString()),
                    o = i.length;
                for (s = 0; s < n - t; ++s) this[s + t] = i[s % o]
            }
            return this
        };
        var R = /[^+\/0-9A-Za-z-_]/g;

        function C(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function I(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, a = null, s = [], i = 0; i < r; ++i) {
                if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                    if (!a) {
                        if (n > 56319) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        if (i + 1 === r) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        a = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && s.push(239, 191, 189), a = n;
                        continue
                    }
                    n = 65536 + (a - 55296 << 10 | n - 56320)
                } else a && (t -= 3) > -1 && s.push(239, 191, 189);
                if (a = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    s.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    s.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return s
        }

        function U(e) {
            return r.toByteArray(function(e) {
                if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(R, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function N(e, t, n, r) {
            for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
            return a
        }
    }).call(this, n(32))
}, function(e, t, n) {
    "use strict";
    t.byteLength = function(e) {
        var t = u(e),
            n = t[0],
            r = t[1];
        return 3 * (n + r) / 4 - r
    }, t.toByteArray = function(e) {
        var t, n, r = u(e),
            i = r[0],
            o = r[1],
            d = new s(function(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, i, o)),
            _ = 0,
            l = o > 0 ? i - 4 : i;
        for (n = 0; n < l; n += 4) t = a[e.charCodeAt(n)] << 18 | a[e.charCodeAt(n + 1)] << 12 | a[e.charCodeAt(n + 2)] << 6 | a[e.charCodeAt(n + 3)], d[_++] = t >> 16 & 255, d[_++] = t >> 8 & 255, d[_++] = 255 & t;
        return 2 === o && (t = a[e.charCodeAt(n)] << 2 | a[e.charCodeAt(n + 1)] >> 4, d[_++] = 255 & t), 1 === o && (t = a[e.charCodeAt(n)] << 10 | a[e.charCodeAt(n + 1)] << 4 | a[e.charCodeAt(n + 2)] >> 2, d[_++] = t >> 8 & 255, d[_++] = 255 & t), d
    }, t.fromByteArray = function(e) {
        for (var t, n = e.length, a = n % 3, s = [], i = 0, o = n - a; i < o; i += 16383) s.push(_(e, i, i + 16383 > o ? o : i + 16383));
        return 1 === a ? (t = e[n - 1], s.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === a && (t = (e[n - 2] << 8) + e[n - 1], s.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), s.join("")
    };
    for (var r = [], a = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, d = i.length; o < d; ++o) r[o] = i[o], a[i.charCodeAt(o)] = o;

    function u(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function _(e, t, n) {
        for (var a, s, i = [], o = t; o < n; o += 3) a = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), i.push(r[(s = a) >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
        return i.join("")
    }
    a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63
}, function(e, t) {
    t.read = function(e, t, n, r, a) {
        var s, i, o = 8 * a - r - 1,
            d = (1 << o) - 1,
            u = d >> 1,
            _ = -7,
            l = n ? a - 1 : 0,
            m = n ? -1 : 1,
            c = e[t + l];
        for (l += m, s = c & (1 << -_) - 1, c >>= -_, _ += o; _ > 0; s = 256 * s + e[t + l], l += m, _ -= 8);
        for (i = s & (1 << -_) - 1, s >>= -_, _ += r; _ > 0; i = 256 * i + e[t + l], l += m, _ -= 8);
        if (0 === s) s = 1 - u;
        else {
            if (s === d) return i ? NaN : 1 / 0 * (c ? -1 : 1);
            i += Math.pow(2, r), s -= u
        }
        return (c ? -1 : 1) * i * Math.pow(2, s - r)
    }, t.write = function(e, t, n, r, a, s) {
        var i, o, d, u = 8 * s - a - 1,
            _ = (1 << u) - 1,
            l = _ >> 1,
            m = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            c = r ? 0 : s - 1,
            h = r ? 1 : -1,
            f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, i = _) : (i = Math.floor(Math.log(t) / Math.LN2), t * (d = Math.pow(2, -i)) < 1 && (i--, d *= 2), (t += i + l >= 1 ? m / d : m * Math.pow(2, 1 - l)) * d >= 2 && (i++, d /= 2), i + l >= _ ? (o = 0, i = _) : i + l >= 1 ? (o = (t * d - 1) * Math.pow(2, a), i += l) : (o = t * Math.pow(2, l - 1) * Math.pow(2, a), i = 0)); a >= 8; e[n + c] = 255 & o, c += h, o /= 256, a -= 8);
        for (i = i << a | o, u += a; u > 0; e[n + c] = 255 & i, c += h, i /= 256, u -= 8);
        e[n + c - h] |= 128 * f
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t, n) {
    n(52), n(27), n(40), n(324), n(328), n(329), e.exports = n(3).Promise
}, function(e, t, n) {
    var r = n(41),
        a = n(42);
    e.exports = function(e) {
        return function(t, n) {
            var s, i, o = String(a(t)),
                d = r(n),
                u = o.length;
            return d < 0 || d >= u ? e ? "" : void 0 : (s = o.charCodeAt(d)) < 55296 || s > 56319 || d + 1 === u || (i = o.charCodeAt(d + 1)) < 56320 || i > 57343 ? e ? o.charAt(d) : s : e ? o.slice(d, d + 2) : i - 56320 + (s - 55296 << 10) + 65536
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(54),
        a = n(34),
        s = n(35),
        i = {};
    n(22)(i, n(8)("iterator"), (function() {
        return this
    })), e.exports = function(e, t, n) {
        e.prototype = r(i, {
            next: a(1, n)
        }), s(e, t + " Iterator")
    }
}, function(e, t, n) {
    var r = n(16),
        a = n(17),
        s = n(44);
    e.exports = n(18) ? Object.defineProperties : function(e, t) {
        a(e);
        for (var n, i = s(t), o = i.length, d = 0; o > d;) r.f(e, n = i[d++], t[n]);
        return e
    }
}, function(e, t, n) {
    var r = n(26),
        a = n(39),
        s = n(321);
    e.exports = function(e) {
        return function(t, n, i) {
            var o, d = r(t),
                u = a(d.length),
                _ = s(i, u);
            if (e && n != n) {
                for (; u > _;)
                    if ((o = d[_++]) != o) return !0
            } else
                for (; u > _; _++)
                    if ((e || _ in d) && d[_] === n) return e || _ || 0;
            return !e && -1
        }
    }
}, function(e, t, n) {
    var r = n(41),
        a = Math.max,
        s = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? a(e + t, 0) : s(e, t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(323),
        a = n(212),
        s = n(25),
        i = n(26);
    e.exports = n(53)(Array, "Array", (function(e, t) {
        this._t = i(e), this._i = 0, this._k = t
    }), (function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }), "values"), s.Arguments = s.Array, r("keys"), r("values"), r("entries")
}, function(e, t) {
    e.exports = function() {}
}, function(e, t, n) {
    "use strict";
    var r, a, s, i, o = n(33),
        d = n(6),
        u = n(21),
        _ = n(47),
        l = n(10),
        m = n(19),
        c = n(28),
        h = n(61),
        f = n(48),
        M = n(64),
        y = n(65).set,
        p = n(326)(),
        L = n(49),
        Y = n(66),
        g = n(327),
        k = n(67),
        D = d.TypeError,
        v = d.process,
        w = v && v.versions,
        T = w && w.v8 || "",
        b = d.Promise,
        S = "process" == _(v),
        j = function() {},
        H = a = L.f,
        x = !! function() {
            try {
                var e = b.resolve(1),
                    t = (e.constructor = {})[n(8)("species")] = function(e) {
                        e(j, j)
                    };
                return (S || "function" == typeof PromiseRejectionEvent) && e.then(j) instanceof t && 0 !== T.indexOf("6.6") && -1 === g.indexOf("Chrome/66")
            } catch (e) {}
        }(),
        O = function(e) {
            var t;
            return !(!m(e) || "function" != typeof(t = e.then)) && t
        },
        P = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                p((function() {
                    for (var r = e._v, a = 1 == e._s, s = 0, i = function(t) {
                            var n, s, i, o = a ? t.ok : t.fail,
                                d = t.resolve,
                                u = t.reject,
                                _ = t.domain;
                            try {
                                o ? (a || (2 == e._h && W(e), e._h = 1), !0 === o ? n = r : (_ && _.enter(), n = o(r), _ && (_.exit(), i = !0)), n === t.promise ? u(D("Promise-chain cycle")) : (s = O(n)) ? s.call(n, d, u) : d(n)) : u(r)
                            } catch (e) {
                                _ && !i && _.exit(), u(e)
                            }
                        }; n.length > s;) i(n[s++]);
                    e._c = [], e._n = !1, t && !e._h && A(e)
                }))
            }
        },
        A = function(e) {
            y.call(d, (function() {
                var t, n, r, a = e._v,
                    s = E(e);
                if (s && (t = Y((function() {
                        S ? v.emit("unhandledRejection", a, e) : (n = d.onunhandledrejection) ? n({
                            promise: e,
                            reason: a
                        }) : (r = d.console) && r.error && r.error("Unhandled promise rejection", a)
                    })), e._h = S || E(e) ? 2 : 1), e._a = void 0, s && t.e) throw t.v
            }))
        },
        E = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        W = function(e) {
            y.call(d, (function() {
                var t;
                S ? v.emit("rejectionHandled", e) : (t = d.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            }))
        },
        F = function(e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), P(t, !0))
        },
        z = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw D("Promise can't be resolved itself");
                    (t = O(e)) ? p((function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, u(z, r, 1), u(F, r, 1))
                        } catch (e) {
                            F.call(r, e)
                        }
                    })): (n._v = e, n._s = 1, P(n, !1))
                } catch (e) {
                    F.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    x || (b = function(e) {
        h(this, b, "Promise", "_h"), c(e), r.call(this);
        try {
            e(u(z, this, 1), u(F, this, 1))
        } catch (e) {
            F.call(this, e)
        }
    }, (r = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(68)(b.prototype, {
        then: function(e, t) {
            var n = H(M(this, b));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = S ? v.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), s = function() {
        var e = new r;
        this.promise = e, this.resolve = u(z, e, 1), this.reject = u(F, e, 1)
    }, L.f = H = function(e) {
        return e === b || e === i ? new s(e) : a(e)
    }), l(l.G + l.W + l.F * !x, {
        Promise: b
    }), n(35)(b, "Promise"), n(213)("Promise"), i = n(3).Promise, l(l.S + l.F * !x, "Promise", {
        reject: function(e) {
            var t = H(this);
            return (0, t.reject)(e), t.promise
        }
    }), l(l.S + l.F * (o || !x), "Promise", {
        resolve: function(e) {
            return k(o && this === i ? b : this, e)
        }
    }), l(l.S + l.F * !(x && n(69)((function(e) {
        b.all(e).catch(j)
    }))), "Promise", {
        all: function(e) {
            var t = this,
                n = H(t),
                r = n.resolve,
                a = n.reject,
                s = Y((function() {
                    var n = [],
                        s = 0,
                        i = 1;
                    f(e, !1, (function(e) {
                        var o = s++,
                            d = !1;
                        n.push(void 0), i++, t.resolve(e).then((function(e) {
                            d || (d = !0, n[o] = e, --i || r(n))
                        }), a)
                    })), --i || r(n)
                }));
            return s.e && a(s.v), n.promise
        },
        race: function(e) {
            var t = this,
                n = H(t),
                r = n.reject,
                a = Y((function() {
                    f(e, !1, (function(e) {
                        t.resolve(e).then(n.resolve, r)
                    }))
                }));
            return a.e && r(a.v), n.promise
        }
    })
}, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    var r = n(6),
        a = n(65).set,
        s = r.MutationObserver || r.WebKitMutationObserver,
        i = r.process,
        o = r.Promise,
        d = "process" == n(30)(i);
    e.exports = function() {
        var e, t, n, u = function() {
            var r, a;
            for (d && (r = i.domain) && r.exit(); e;) {
                a = e.fn, e = e.next;
                try {
                    a()
                } catch (r) {
                    throw e ? n() : t = void 0, r
                }
            }
            t = void 0, r && r.enter()
        };
        if (d) n = function() {
            i.nextTick(u)
        };
        else if (!s || r.navigator && r.navigator.standalone)
            if (o && o.resolve) {
                var _ = o.resolve(void 0);
                n = function() {
                    _.then(u)
                }
            } else n = function() {
                a.call(r, u)
            };
        else {
            var l = !0,
                m = document.createTextNode("");
            new s(u).observe(m, {
                characterData: !0
            }), n = function() {
                m.data = l = !l
            }
        }
        return function(r) {
            var a = {
                fn: r,
                next: void 0
            };
            t && (t.next = a), e || (e = a, n()), t = a
        }
    }
}, function(e, t, n) {
    var r = n(6).navigator;
    e.exports = r && r.userAgent || ""
}, function(e, t, n) {
    "use strict";
    var r = n(10),
        a = n(3),
        s = n(6),
        i = n(64),
        o = n(67);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = i(this, a.Promise || s.Promise),
                n = "function" == typeof e;
            return this.then(n ? function(n) {
                return o(t, e()).then((function() {
                    return n
                }))
            } : e, n ? function(n) {
                return o(t, e()).then((function() {
                    throw n
                }))
            } : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(10),
        a = n(49),
        s = n(66);
    r(r.S, "Promise", {
        try: function(e) {
            var t = a.f(this),
                n = s(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function(e, t, n) {
    n(331);
    var r = n(3).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t, n) {
    var r = n(10);
    r(r.S + r.F * !n(18), "Object", {
        defineProperty: n(16).f
    })
}, function(e, t, n) {
    e.exports = n(333)
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        a = n(70),
        s = n(335),
        i = n(51);

    function o(e) {
        var t = new s(e),
            n = a(s.prototype.request, t);
        return r.extend(n, s.prototype, t), r.extend(n, t), n
    }
    var d = o(i);
    d.Axios = s, d.create = function(e) {
        return o(r.merge(i, e))
    }, d.Cancel = n(74), d.CancelToken = n(348), d.isCancel = n(73), d.all = function(e) {
        return Promise.all(e)
    }, d.spread = n(349), e.exports = d, e.exports.default = d
}, function(e, t) {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
        return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(51),
        a = n(9),
        s = n(343),
        i = n(344);

    function o(e) {
        this.defaults = e, this.interceptors = {
            request: new s,
            response: new s
        }
    }
    o.prototype.request = function(e) {
        "string" == typeof e && (e = a.merge({
            url: arguments[0]
        }, arguments[1])), (e = a.merge(r, {
            method: "get"
        }, this.defaults, e)).method = e.method.toLowerCase();
        var t = [i, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, a.forEach(["delete", "get", "head", "options"], (function(e) {
        o.prototype[e] = function(t, n) {
            return this.request(a.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    })), a.forEach(["post", "put", "patch"], (function(e) {
        o.prototype[e] = function(t, n, r) {
            return this.request(a.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    })), e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(9);
    e.exports = function(e, t) {
        r.forEach(e, (function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(72);
    e.exports = function(e, t, n) {
        var a = n.config.validateStatus;
        n.status && a && !a(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, a) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = a, e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9);

    function a(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var s;
        if (n) s = n(t);
        else if (r.isURLSearchParams(t)) s = t.toString();
        else {
            var i = [];
            r.forEach(t, (function(e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(a(t) + "=" + a(e))
                })))
            })), s = i.join("&")
        }
        return s && (e += (-1 === e.indexOf("?") ? "?" : "&") + s), e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, s, i = {};
        return e ? (r.forEach(e.split("\n"), (function(e) {
            if (s = e.indexOf(":"), t = r.trim(e.substr(0, s)).toLowerCase(), n = r.trim(e.substr(s + 1)), t) {
                if (i[t] && a.indexOf(t) >= 0) return;
                i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
            }
        })), i) : i
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9);
    e.exports = r.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function a(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = a(window.location.href),
            function(t) {
                var n = r.isString(t) ? a(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function(e, t, n, a, s, i) {
            var o = [];
            o.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), r.isString(a) && o.push("path=" + a), r.isString(s) && o.push("domain=" + s), !0 === i && o.push("secure"), document.cookie = o.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9);

    function a() {
        this.handlers = []
    }
    a.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, a.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, a.prototype.forEach = function(e) {
        r.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }))
    }, e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        a = n(345),
        s = n(73),
        i = n(51),
        o = n(346),
        d = n(347);

    function u(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return u(e), e.baseURL && !o(e.url) && (e.url = d(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        })), (e.adapter || i.adapter)(e).then((function(t) {
            return u(e), t.data = a(t.data, t.headers, e.transformResponse), t
        }), (function(t) {
            return s(t) || (u(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9);
    e.exports = function(e, t, n) {
        return r.forEach(n, (function(n) {
            e = n(e, t)
        })), e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(74);

    function a(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        var n = this;
        e((function(e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        }))
    }
    a.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, a.source = function() {
        var e;
        return {
            token: new a((function(t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = a
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t, n) {
    var r = {
        "./af": 75,
        "./af.js": 75,
        "./ar": 76,
        "./ar-dz": 77,
        "./ar-dz.js": 77,
        "./ar-kw": 78,
        "./ar-kw.js": 78,
        "./ar-ly": 79,
        "./ar-ly.js": 79,
        "./ar-ma": 80,
        "./ar-ma.js": 80,
        "./ar-sa": 81,
        "./ar-sa.js": 81,
        "./ar-tn": 82,
        "./ar-tn.js": 82,
        "./ar.js": 76,
        "./az": 83,
        "./az.js": 83,
        "./be": 84,
        "./be.js": 84,
        "./bg": 85,
        "./bg.js": 85,
        "./bm": 86,
        "./bm.js": 86,
        "./bn": 87,
        "./bn.js": 87,
        "./bo": 88,
        "./bo.js": 88,
        "./br": 89,
        "./br.js": 89,
        "./bs": 90,
        "./bs.js": 90,
        "./ca": 91,
        "./ca.js": 91,
        "./cs": 92,
        "./cs.js": 92,
        "./cv": 93,
        "./cv.js": 93,
        "./cy": 94,
        "./cy.js": 94,
        "./da": 95,
        "./da.js": 95,
        "./de": 96,
        "./de-at": 97,
        "./de-at.js": 97,
        "./de-ch": 98,
        "./de-ch.js": 98,
        "./de.js": 96,
        "./dv": 99,
        "./dv.js": 99,
        "./el": 100,
        "./el.js": 100,
        "./en-SG": 101,
        "./en-SG.js": 101,
        "./en-au": 102,
        "./en-au.js": 102,
        "./en-ca": 103,
        "./en-ca.js": 103,
        "./en-gb": 104,
        "./en-gb.js": 104,
        "./en-ie": 105,
        "./en-ie.js": 105,
        "./en-il": 106,
        "./en-il.js": 106,
        "./en-nz": 107,
        "./en-nz.js": 107,
        "./eo": 108,
        "./eo.js": 108,
        "./es": 109,
        "./es-do": 110,
        "./es-do.js": 110,
        "./es-us": 111,
        "./es-us.js": 111,
        "./es.js": 109,
        "./et": 112,
        "./et.js": 112,
        "./eu": 113,
        "./eu.js": 113,
        "./fa": 114,
        "./fa.js": 114,
        "./fi": 115,
        "./fi.js": 115,
        "./fo": 116,
        "./fo.js": 116,
        "./fr": 117,
        "./fr-ca": 118,
        "./fr-ca.js": 118,
        "./fr-ch": 119,
        "./fr-ch.js": 119,
        "./fr.js": 117,
        "./fy": 120,
        "./fy.js": 120,
        "./ga": 121,
        "./ga.js": 121,
        "./gd": 122,
        "./gd.js": 122,
        "./gl": 123,
        "./gl.js": 123,
        "./gom-latn": 124,
        "./gom-latn.js": 124,
        "./gu": 125,
        "./gu.js": 125,
        "./he": 126,
        "./he.js": 126,
        "./hi": 127,
        "./hi.js": 127,
        "./hr": 128,
        "./hr.js": 128,
        "./hu": 129,
        "./hu.js": 129,
        "./hy-am": 130,
        "./hy-am.js": 130,
        "./id": 131,
        "./id.js": 131,
        "./is": 132,
        "./is.js": 132,
        "./it": 133,
        "./it-ch": 134,
        "./it-ch.js": 134,
        "./it.js": 133,
        "./ja": 135,
        "./ja.js": 135,
        "./jv": 136,
        "./jv.js": 136,
        "./ka": 137,
        "./ka.js": 137,
        "./kk": 138,
        "./kk.js": 138,
        "./km": 139,
        "./km.js": 139,
        "./kn": 140,
        "./kn.js": 140,
        "./ko": 141,
        "./ko.js": 141,
        "./ku": 142,
        "./ku.js": 142,
        "./ky": 143,
        "./ky.js": 143,
        "./lb": 144,
        "./lb.js": 144,
        "./lo": 145,
        "./lo.js": 145,
        "./lt": 146,
        "./lt.js": 146,
        "./lv": 147,
        "./lv.js": 147,
        "./me": 148,
        "./me.js": 148,
        "./mi": 149,
        "./mi.js": 149,
        "./mk": 150,
        "./mk.js": 150,
        "./ml": 151,
        "./ml.js": 151,
        "./mn": 152,
        "./mn.js": 152,
        "./mr": 153,
        "./mr.js": 153,
        "./ms": 154,
        "./ms-my": 155,
        "./ms-my.js": 155,
        "./ms.js": 154,
        "./mt": 156,
        "./mt.js": 156,
        "./my": 157,
        "./my.js": 157,
        "./nb": 158,
        "./nb.js": 158,
        "./ne": 159,
        "./ne.js": 159,
        "./nl": 160,
        "./nl-be": 161,
        "./nl-be.js": 161,
        "./nl.js": 160,
        "./nn": 162,
        "./nn.js": 162,
        "./pa-in": 163,
        "./pa-in.js": 163,
        "./pl": 164,
        "./pl.js": 164,
        "./pt": 165,
        "./pt-br": 166,
        "./pt-br.js": 166,
        "./pt.js": 165,
        "./ro": 167,
        "./ro.js": 167,
        "./ru": 168,
        "./ru.js": 168,
        "./sd": 169,
        "./sd.js": 169,
        "./se": 170,
        "./se.js": 170,
        "./si": 171,
        "./si.js": 171,
        "./sk": 172,
        "./sk.js": 172,
        "./sl": 173,
        "./sl.js": 173,
        "./sq": 174,
        "./sq.js": 174,
        "./sr": 175,
        "./sr-cyrl": 176,
        "./sr-cyrl.js": 176,
        "./sr.js": 175,
        "./ss": 177,
        "./ss.js": 177,
        "./sv": 178,
        "./sv.js": 178,
        "./sw": 179,
        "./sw.js": 179,
        "./ta": 180,
        "./ta.js": 180,
        "./te": 181,
        "./te.js": 181,
        "./tet": 182,
        "./tet.js": 182,
        "./tg": 183,
        "./tg.js": 183,
        "./th": 184,
        "./th.js": 184,
        "./tl-ph": 185,
        "./tl-ph.js": 185,
        "./tlh": 186,
        "./tlh.js": 186,
        "./tr": 187,
        "./tr.js": 187,
        "./tzl": 188,
        "./tzl.js": 188,
        "./tzm": 189,
        "./tzm-latn": 190,
        "./tzm-latn.js": 190,
        "./tzm.js": 189,
        "./ug-cn": 191,
        "./ug-cn.js": 191,
        "./uk": 192,
        "./uk.js": 192,
        "./ur": 193,
        "./ur.js": 193,
        "./uz": 194,
        "./uz-latn": 195,
        "./uz-latn.js": 195,
        "./uz.js": 194,
        "./vi": 196,
        "./vi.js": 196,
        "./x-pseudo": 197,
        "./x-pseudo.js": 197,
        "./yo": 198,
        "./yo.js": 198,
        "./zh-cn": 199,
        "./zh-cn.js": 199,
        "./zh-hk": 200,
        "./zh-hk.js": 200,
        "./zh-tw": 201,
        "./zh-tw.js": 201
    };

    function a(e) {
        var t = s(e);
        return n(t)
    }

    function s(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
    }
    a.keys = function() {
        return Object.keys(r)
    }, a.resolve = s, e.exports = a, a.id = 350
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, a = (r = n(202)) && r.__esModule ? r : {
        default: r
    };
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return (0, a.default)(e)
    }
}, function(e, t, n) {
    n(27), n(353), e.exports = n(3).Array.from
}, function(e, t, n) {
    "use strict";
    var r = n(21),
        a = n(10),
        s = n(31),
        i = n(62),
        o = n(63),
        d = n(39),
        u = n(354),
        _ = n(57);
    a(a.S + a.F * !n(69)((function(e) {
        Array.from(e)
    })), "Array", {
        from: function(e) {
            var t, n, a, l, m = s(e),
                c = "function" == typeof this ? this : Array,
                h = arguments.length,
                f = h > 1 ? arguments[1] : void 0,
                M = void 0 !== f,
                y = 0,
                p = _(m);
            if (M && (f = r(f, h > 2 ? arguments[2] : void 0, 2)), null == p || c == Array && o(p))
                for (n = new c(t = d(m.length)); t > y; y++) u(n, y, M ? f(m[y], y) : m[y]);
            else
                for (l = p.call(m), n = new c; !(a = l.next()).done; y++) u(n, y, M ? i(l, f, [a.value, y], !0) : a.value);
            return n.length = y, n
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(16),
        a = n(34);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, a(0, n)) : e[t] = n
    }
}, , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = function(e, t) {
            return e === t || e != e && t != t
        },
        a = function(e, t) {
            for (var n = e.length; n--;)
                if (r(e[n][0], t)) return n;
            return -1
        },
        s = Array.prototype.splice;

    function i(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    i.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, i.prototype.delete = function(e) {
        var t = this.__data__,
            n = a(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : s.call(t, n, 1), --this.size, 0))
    }, i.prototype.get = function(e) {
        var t = this.__data__,
            n = a(t, e);
        return n < 0 ? void 0 : t[n][1]
    }, i.prototype.has = function(e) {
        return a(this.__data__, e) > -1
    }, i.prototype.set = function(e, t) {
        var n = this.__data__,
            r = a(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    };
    var o, d = i,
        u = n(12),
        _ = n(7),
        l = function(e) {
            if (!Object(_.a)(e)) return !1;
            var t = Object(u.a)(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        },
        m = n(2),
        c = m.a["__core-js_shared__"],
        h = (o = /[^.]+$/.exec(c && c.keys && c.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "",
        f = Function.prototype.toString,
        M = function(e) {
            if (null != e) {
                try {
                    return f.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        },
        y = /^\[object .+?Constructor\]$/,
        p = Function.prototype,
        L = Object.prototype,
        Y = p.toString,
        g = L.hasOwnProperty,
        k = RegExp("^" + Y.call(g).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        D = function(e) {
            return !(!Object(_.a)(e) || function(e) {
                return !!h && h in e
            }(e)) && (l(e) ? k : y).test(M(e))
        },
        v = function(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return D(n) ? n : void 0
        },
        w = v(m.a, "Map"),
        T = v(Object, "create"),
        b = Object.prototype.hasOwnProperty,
        S = Object.prototype.hasOwnProperty;

    function j(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    j.prototype.clear = function() {
        this.__data__ = T ? T(null) : {}, this.size = 0
    }, j.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }, j.prototype.get = function(e) {
        var t = this.__data__;
        if (T) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return b.call(t, e) ? t[e] : void 0
    }, j.prototype.has = function(e) {
        var t = this.__data__;
        return T ? void 0 !== t[e] : S.call(t, e)
    }, j.prototype.set = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = T && void 0 === t ? "__lodash_hash_undefined__" : t, this
    };
    var H = j,
        x = function(e, t) {
            var n = e.__data__;
            return function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        };

    function O(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    O.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new H,
            map: new(w || d),
            string: new H
        }
    }, O.prototype.delete = function(e) {
        var t = x(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }, O.prototype.get = function(e) {
        return x(this, e).get(e)
    }, O.prototype.has = function(e) {
        return x(this, e).has(e)
    }, O.prototype.set = function(e, t) {
        var n = x(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    };
    var P = O;

    function A(e) {
        var t = this.__data__ = new d(e);
        this.size = t.size
    }
    A.prototype.clear = function() {
        this.__data__ = new d, this.size = 0
    }, A.prototype.delete = function(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }, A.prototype.get = function(e) {
        return this.__data__.get(e)
    }, A.prototype.has = function(e) {
        return this.__data__.has(e)
    }, A.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof d) {
            var r = n.__data__;
            if (!w || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new P(r)
        }
        return n.set(e, t), this.size = n.size, this
    };
    var E = A,
        W = function() {
            try {
                var e = v(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }(),
        F = function(e, t, n) {
            "__proto__" == t && W ? W(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        },
        z = Object.prototype.hasOwnProperty,
        R = function(e, t, n) {
            var a = e[t];
            z.call(e, t) && r(a, n) && (void 0 !== n || t in e) || F(e, t, n)
        },
        C = function(e, t, n, r) {
            var a = !n;
            n || (n = {});
            for (var s = -1, i = t.length; ++s < i;) {
                var o = t[s],
                    d = r ? r(n[o], e[o], o, n, e) : void 0;
                void 0 === d && (d = e[o]), a ? F(n, o, d) : R(n, o, d)
            }
            return n
        },
        I = n(11),
        U = function(e) {
            return Object(I.a)(e) && "[object Arguments]" == Object(u.a)(e)
        },
        N = Object.prototype,
        J = N.hasOwnProperty,
        B = N.propertyIsEnumerable,
        G = U(function() {
            return arguments
        }()) ? U : function(e) {
            return Object(I.a)(e) && J.call(e, "callee") && !B.call(e, "callee")
        },
        V = Array.isArray,
        q = n(37),
        $ = /^(?:0|[1-9]\d*)$/,
        K = function(e, t) {
            var n = typeof e;
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && $.test(e)) && e > -1 && e % 1 == 0 && e < t
        },
        Z = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        },
        Q = {};
    Q["[object Float32Array]"] = Q["[object Float64Array]"] = Q["[object Int8Array]"] = Q["[object Int16Array]"] = Q["[object Int32Array]"] = Q["[object Uint8Array]"] = Q["[object Uint8ClampedArray]"] = Q["[object Uint16Array]"] = Q["[object Uint32Array]"] = !0, Q["[object Arguments]"] = Q["[object Array]"] = Q["[object ArrayBuffer]"] = Q["[object Boolean]"] = Q["[object DataView]"] = Q["[object Date]"] = Q["[object Error]"] = Q["[object Function]"] = Q["[object Map]"] = Q["[object Number]"] = Q["[object Object]"] = Q["[object RegExp]"] = Q["[object Set]"] = Q["[object String]"] = Q["[object WeakMap]"] = !1;
    var X = function(e) {
            return function(t) {
                return e(t)
            }
        },
        ee = n(15),
        te = ee.a && ee.a.isTypedArray,
        ne = te ? X(te) : function(e) {
            return Object(I.a)(e) && Z(e.length) && !!Q[Object(u.a)(e)]
        },
        re = Object.prototype.hasOwnProperty,
        ae = function(e, t) {
            var n = V(e),
                r = !n && G(e),
                a = !n && !r && Object(q.a)(e),
                s = !n && !r && !a && ne(e),
                i = n || r || a || s,
                o = i ? function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                    return r
                }(e.length, String) : [],
                d = o.length;
            for (var u in e) !t && !re.call(e, u) || i && ("length" == u || a && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || K(u, d)) || o.push(u);
            return o
        },
        se = Object.prototype,
        ie = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || se)
        },
        oe = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        },
        de = oe(Object.keys, Object),
        ue = Object.prototype.hasOwnProperty,
        _e = function(e) {
            return null != e && Z(e.length) && !l(e)
        },
        le = function(e) {
            return _e(e) ? ae(e) : function(e) {
                if (!ie(e)) return de(e);
                var t = [];
                for (var n in Object(e)) ue.call(e, n) && "constructor" != n && t.push(n);
                return t
            }(e)
        },
        me = Object.prototype.hasOwnProperty,
        ce = function(e) {
            if (!Object(_.a)(e)) return function(e) {
                var t = [];
                if (null != e)
                    for (var n in Object(e)) t.push(n);
                return t
            }(e);
            var t = ie(e),
                n = [];
            for (var r in e)("constructor" != r || !t && me.call(e, r)) && n.push(r);
            return n
        },
        he = function(e) {
            return _e(e) ? ae(e, !0) : ce(e)
        },
        fe = n(207),
        Me = function() {
            return []
        },
        ye = Object.prototype.propertyIsEnumerable,
        pe = Object.getOwnPropertySymbols,
        Le = pe ? function(e) {
            return null == e ? [] : (e = Object(e), function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, a = 0, s = []; ++n < r;) {
                    var i = e[n];
                    t(i, n, e) && (s[a++] = i)
                }
                return s
            }(pe(e), (function(t) {
                return ye.call(e, t)
            })))
        } : Me,
        Ye = function(e, t) {
            for (var n = -1, r = t.length, a = e.length; ++n < r;) e[a + n] = t[n];
            return e
        },
        ge = oe(Object.getPrototypeOf, Object),
        ke = Object.getOwnPropertySymbols ? function(e) {
            for (var t = []; e;) Ye(t, Le(e)), e = ge(e);
            return t
        } : Me,
        De = function(e, t, n) {
            var r = t(e);
            return V(e) ? r : Ye(r, n(e))
        },
        ve = function(e) {
            return De(e, le, Le)
        },
        we = function(e) {
            return De(e, he, ke)
        },
        Te = v(m.a, "DataView"),
        be = v(m.a, "Promise"),
        Se = v(m.a, "Set"),
        je = v(m.a, "WeakMap"),
        He = M(Te),
        xe = M(w),
        Oe = M(be),
        Pe = M(Se),
        Ae = M(je),
        Ee = u.a;
    (Te && "[object DataView]" != Ee(new Te(new ArrayBuffer(1))) || w && "[object Map]" != Ee(new w) || be && "[object Promise]" != Ee(be.resolve()) || Se && "[object Set]" != Ee(new Se) || je && "[object WeakMap]" != Ee(new je)) && (Ee = function(e) {
        var t = Object(u.a)(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? M(n) : "";
        if (r) switch (r) {
            case He:
                return "[object DataView]";
            case xe:
                return "[object Map]";
            case Oe:
                return "[object Promise]";
            case Pe:
                return "[object Set]";
            case Ae:
                return "[object WeakMap]"
        }
        return t
    });
    var We = Ee,
        Fe = Object.prototype.hasOwnProperty,
        ze = m.a.Uint8Array,
        Re = function(e) {
            var t = new e.constructor(e.byteLength);
            return new ze(t).set(new ze(e)), t
        },
        Ce = /\w*$/,
        Ie = n(14),
        Ue = Ie.a ? Ie.a.prototype : void 0,
        Ne = Ue ? Ue.valueOf : void 0,
        Je = function(e, t, n) {
            var r = e.constructor;
            switch (t) {
                case "[object ArrayBuffer]":
                    return Re(e);
                case "[object Boolean]":
                case "[object Date]":
                    return new r(+e);
                case "[object DataView]":
                    return function(e, t) {
                        var n = t ? Re(e.buffer) : e.buffer;
                        return new e.constructor(n, e.byteOffset, e.byteLength)
                    }(e, n);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return function(e, t) {
                        var n = t ? Re(e.buffer) : e.buffer;
                        return new e.constructor(n, e.byteOffset, e.length)
                    }(e, n);
                case "[object Map]":
                    return new r;
                case "[object Number]":
                case "[object String]":
                    return new r(e);
                case "[object RegExp]":
                    return function(e) {
                        var t = new e.constructor(e.source, Ce.exec(e));
                        return t.lastIndex = e.lastIndex, t
                    }(e);
                case "[object Set]":
                    return new r;
                case "[object Symbol]":
                    return function(e) {
                        return Ne ? Object(Ne.call(e)) : {}
                    }(e)
            }
        },
        Be = Object.create,
        Ge = function() {
            function e() {}
            return function(t) {
                if (!Object(_.a)(t)) return {};
                if (Be) return Be(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }(),
        Ve = ee.a && ee.a.isMap,
        qe = Ve ? X(Ve) : function(e) {
            return Object(I.a)(e) && "[object Map]" == We(e)
        },
        $e = ee.a && ee.a.isSet,
        Ke = $e ? X($e) : function(e) {
            return Object(I.a)(e) && "[object Set]" == We(e)
        },
        Ze = "[object Arguments]",
        Qe = "[object Function]",
        Xe = "[object Object]",
        et = {};
    et[Ze] = et["[object Array]"] = et["[object ArrayBuffer]"] = et["[object DataView]"] = et["[object Boolean]"] = et["[object Date]"] = et["[object Float32Array]"] = et["[object Float64Array]"] = et["[object Int8Array]"] = et["[object Int16Array]"] = et["[object Int32Array]"] = et["[object Map]"] = et["[object Number]"] = et[Xe] = et["[object RegExp]"] = et["[object Set]"] = et["[object String]"] = et["[object Symbol]"] = et["[object Uint8Array]"] = et["[object Uint8ClampedArray]"] = et["[object Uint16Array]"] = et["[object Uint32Array]"] = !0, et["[object Error]"] = et[Qe] = et["[object WeakMap]"] = !1;
    var tt = function e(t, n, r, a, s, i) {
        var o, d = 1 & n,
            u = 2 & n,
            l = 4 & n;
        if (r && (o = s ? r(t, a, s, i) : r(t)), void 0 !== o) return o;
        if (!Object(_.a)(t)) return t;
        var m = V(t);
        if (m) {
            if (o = function(e) {
                    var t = e.length,
                        n = new e.constructor(t);
                    return t && "string" == typeof e[0] && Fe.call(e, "index") && (n.index = e.index, n.input = e.input), n
                }(t), !d) return function(e, t) {
                var n = -1,
                    r = e.length;
                for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                return t
            }(t, o)
        } else {
            var c = We(t),
                h = c == Qe || "[object GeneratorFunction]" == c;
            if (Object(q.a)(t)) return Object(fe.a)(t, d);
            if (c == Xe || c == Ze || h && !s) {
                if (o = u || h ? {} : function(e) {
                        return "function" != typeof e.constructor || ie(e) ? {} : Ge(ge(e))
                    }(t), !d) return u ? function(e, t) {
                    return C(e, ke(e), t)
                }(t, function(e, t) {
                    return e && C(t, he(t), e)
                }(o, t)) : function(e, t) {
                    return C(e, Le(e), t)
                }(t, function(e, t) {
                    return e && C(t, le(t), e)
                }(o, t))
            } else {
                if (!et[c]) return s ? t : {};
                o = Je(t, c, d)
            }
        }
        i || (i = new E);
        var f = i.get(t);
        if (f) return f;
        i.set(t, o), Ke(t) ? t.forEach((function(a) {
            o.add(e(a, n, r, a, t, i))
        })) : qe(t) && t.forEach((function(a, s) {
            o.set(s, e(a, n, r, s, t, i))
        }));
        var M = l ? u ? we : ve : u ? keysIn : le,
            y = m ? void 0 : M(t);
        return function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
        }(y || t, (function(a, s) {
            y && (a = t[s = a]), R(o, s, e(a, n, r, s, t, i))
        })), o
    };
    t.default = function(e) {
        return tt(e, 5)
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var t = l(n(420)),
            r = l(n(423)),
            a = l(n(38)),
            s = l(n(214)),
            i = l(n(215)),
            o = n(424),
            d = (l(n(363)), l(n(332))),
            u = l(n(0)),
            _ = n(425);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        new(function() {
            function n() {
                (0, s.default)(this, n), this.storage = o.STORAGE, this.initStorage(), chrome.runtime.setUninstallURL("https://notetab.li/uninstall/", (function() {})), chrome.runtime.onInstalled.addListener((function(e) {
                    "install" == e.reason && chrome.tabs.create({
                        url: "https://notetab.li/install/"
                    })
                })), this.initListeners()
            }
            return (0, i.default)(n, [{
                key: "initListeners",
                value: function() {
                    var e = this;
                    chrome.browserAction.onClicked.addListener((function(e) {})), chrome.alarms.onAlarm.addListener((function(t) {
                        var n = e.storage.notifications.find((function(e) {
                            return e.id == t.name
                        }));
                        e.createNotification(n, (function() {
                            e.storage.notifications = e.storage.notifications.filter((function(e) {
                                return e.id != t.name
                            }));
                            for (var r = 0; r < e.storage.notes.length; r++) {
                                var a = e.storage.notes[r].content.ops;
                                if (a)
                                    for (var s = 0; s < a.length; s++) a[s].attributes && a[s].attributes.notification && a[s].attributes.notification.id == t.name && (a[s].attributes.notification = null)
                            }
                            e.saveStorage().then((function() {
                                e.updateBadge(), chrome.tabs.query({
                                    active: !1
                                }, (function(e) {
                                    for (var t = 0; t < e.length; t++) chrome.tabs.sendMessage(e[t].id, {
                                        action: "update_storage"
                                    })
                                })), chrome.tabs.query({
                                    active: !0,
                                    currentWindow: !0
                                }, (function(e) {
                                    for (var t = 0; t < e.length; t++) chrome.tabs.sendMessage(e[t].id, {
                                        action: "update_storage_safe",
                                        item: n
                                    })
                                }))
                            }))
                        }))
                    })), chrome.runtime.onMessage.addListener((function(t, n, r) {
                        switch (t.action) {
                            case "add_image":
                                e.storage.selectedBackgroundIndex = null, e.storage.settings.background = t.img, e.saveStorage();
                                break;
                            case "get_preview":
                                e.getPreview(t.item.url).then((function(n) {
                                    for (var r = 0; r < e.storage.favorites.length; r++)
                                        if (e.storage.favorites[r]._id == t.item._id) {
                                            e.storage.favorites[r].preview = n, e.saveStorage();
                                            break
                                        }
                                }));
                                break;
                            case "open_link":
                                chrome.tabs.query({
                                    active: !0,
                                    currentWindow: !0
                                }, (function(e) {
                                    chrome.tabs.update(e[0].id, {
                                        url: t.link
                                    })
                                }));
                                break;
                            case "add_notification":
                                chrome.alarms.create(t.item.id, {
                                    when: 1e3 * (0, u.default)(t.item.date).unix()
                                }), e.updateBadge();
                                break;
                            case "edit_notification":
                                chrome.alarms.clear(t.item.id), chrome.alarms.create(t.item.id, {
                                    when: 1e3 * (0, u.default)(t.item.date).unix()
                                }), e.updateBadge();
                                break;
                            case "show_notification":
                                e.createNotification(t.item), e.updateBadge();
                                break;
                            case "remove_notification":
                                chrome.alarms.clear(t.id), e.updateBadge();
                                break;
                            case "update_other_editors":
                                e.updateOtherEditors()
                        }
                    })), chrome.runtime.onMessage.addListener((function(t, n, r) {
                        switch (t.action) {
                            case "get_storage":
                                r(e.storage);
                                break;
                            case "set_storage":
                                e.storage = t.storage, e.saveStorage().then((function() {
                                    r()
                                }))
                        }
                        return !0
                    })), chrome.bookmarks.onChanged.addListener((function(t, n) {
                        var r = (0, _.getBookmarksFromTree)(e.storage.settings.bookmarksTree).find((function(e) {
                            return e.id == t
                        }));
                        r && (r.title = n.title, r.url = n.url, e.updateFavorites(), e.saveStorage())
                    })), chrome.bookmarks.onRemoved.addListener((function(t) {
                        (0, _.removeBookmarkFromTreeById)(e.storage.settings.bookmarksTree, t);
                        for (var n = 0; n < e.storage.favorites.length; n++) t == e.storage.favorites[n].id && e.storage.favorites.splice(n, 1);
                        e.saveStorage()
                    })), chrome.bookmarks.onCreated.addListener((function(t, n) {
                        (0, _.processBookmark)(n).then((function() {
                            var t = (0, _.getParentById)(e.storage.settings.bookmarksTree, n.parentId);
                            t.children || (t.children = {}), t.children.splice(n.index, 0, n), e.saveStorage()
                        }))
                    }))
                }
            }, {
                key: "initStorage",
                value: function() {
                    var e = this;
                    chrome.storage.local.get(this.storage, (function(t) {
                        e.storage = t, e.storage.settings.bookmarksTree || e.getBookmarks(), e.updateBadge(), e.saveStorage()
                    }))
                }
            }, {
                key: "initNotifications",
                value: function() {
                    for (var e = 0; e < this.storage.notifications.length; e++) {
                        var t = this.storage.notifications[e];
                        chrome.alarms.create(t.id, {
                            when: 1e3 * (0, u.default)(t.date).unix()
                        })
                    }
                }
            }, {
                key: "saveStorage",
                value: function() {
                    var e = this;
                    return new a.default((function(t, n) {
                        chrome.storage.local.set(e.storage, (function() {
                            t()
                        }))
                    }))
                }
            }, {
                key: "getBookmarks",
                value: function() {
                    var e = this;
                    chrome.bookmarks.getTree((function(n) {
                        n[0] && (0, _.processTree)(n[0]).then((0, r.default)(t.default.mark((function r() {
                            var a, s, i;
                            return t.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.storage.settings.bookmarksTree = n[0], !e.storage.favorites) {
                                            for (e.storage.favorites = (0, _.getBookmarksFromTree)(n[0]).slice(0, e.storage.favoritesLength), a = 0; a < e.storage.favorites.length; a++) e.storage.favorites[a].favorite = !0, e.storage.favorites[a].preview = "load";
                                            for (e.saveStorage(), s = function(t) {
                                                    e.getPreview(e.storage.favorites[t].url).then((function(n) {
                                                        e.storage.favorites[t].preview = n, e.saveStorage()
                                                    }))
                                                }, i = 0; i < e.storage.favorites.length; i++) s(i)
                                        }
                                        e.saveStorage();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), r, e)
                        }))))
                    }))
                }
            }, {
                key: "getPreview",
                value: function(t) {
                    return new a.default((function(n, r) {
                        // d.default.get("https://sshot.org?url=" + encodeURIComponent(t) + "&width=200&height=112&zoom=0.15&clipRect=0%2C0%2C200%2C112", {
                        //     auth: {
                        //         username: "user",
                        //         password: "8HS8YRiVPnv6uS"
                        //     },
                        //     responseType: "arraybuffer"
                        // }).then((function(t) {
                        //     n("data:image/png;base64," + e.from(t.data, "binary").toString("base64"))
                        // })).catch((function() {
                        //     n(null)
                        // })).finally((function() {
                        //     n(null)
                        // }))
                    }))
                }
            }, {
                key: "createNotification",
                value: function(e, t) {
                    chrome.notifications.create(null, {
                        title: e.text || " ",
                        eventTime: 1e3 * (0, u.default)(e.date).unix(),
                        message: e.text || " ",
                        requireInteraction: !0,
                        type: "basic",
                        iconUrl: "assets/static/32.png"
                    }, t)
                }
            }, {
                key: "updateActiveEditor",
                value: function() {
                    chrome.tabs.query({
                        active: !0,
                        currentWindow: !0
                    }, (function(e) {
                        for (var t = 0; t < e.length; t++) chrome.tabs.sendMessage(e[t].id, {
                            action: "update_notetab_editor"
                        })
                    }))
                }
            }, {
                key: "updateOtherEditors",
                value: function() {
                    chrome.tabs.query({
                        active: !1
                    }, (function(e) {
                        for (var t = 0; t < e.length; t++) chrome.tabs.sendMessage(e[t].id, {
                            action: "update_storage"
                        })
                    }))
                }
            }, {
                key: "updateFavorites",
                value: function() {
                    for (var e = (0, _.getBookmarksFromTree)(this.storage.settings.bookmarksTree), t = 0; t < e.length; t++)
                        for (var n = 0; n < this.storage.favorites.length; n++) this.storage.favorites[n].id == e[t].id && (this.storage.favorites[n].title = e[t].title, this.storage.favorites[n].url = e[t].url)
                }
            }, {
                key: "updateBadge",
                value: function() {
                    0 == this.storage.notifications.length ? chrome.browserAction.setBadgeText({
                        text: ""
                    }) : (chrome.browserAction.setBadgeText({
                        text: this.storage.notifications.length.toString()
                    }), chrome.browserAction.setBadgeBackgroundColor({
                        color: "#FF0000"
                    }))
                }
            }, {
                key: "updateSourceTree",
                value: function() {}
            }]), n
        }())
    }).call(this, n(312).Buffer)
}, function(e, t, n) {
    e.exports = n(421)
}, function(e, t, n) {
    var r = function() {
            return this
        }() || Function("return this")(),
        a = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        s = a && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(422), a) r.regeneratorRuntime = s;
    else try {
        delete r.regeneratorRuntime
    } catch (e) {
        r.regeneratorRuntime = void 0
    }
}, function(e, t) {
    ! function(t) {
        "use strict";
        var n, r = Object.prototype,
            a = r.hasOwnProperty,
            s = "function" == typeof Symbol ? Symbol : {},
            i = s.iterator || "@@iterator",
            o = s.asyncIterator || "@@asyncIterator",
            d = s.toStringTag || "@@toStringTag",
            u = "object" == typeof e,
            _ = t.regeneratorRuntime;
        if (_) u && (e.exports = _);
        else {
            (_ = t.regeneratorRuntime = u ? e.exports : {}).wrap = Y;
            var l = "suspendedStart",
                m = "suspendedYield",
                c = "executing",
                h = "completed",
                f = {},
                M = {};
            M[i] = function() {
                return this
            };
            var y = Object.getPrototypeOf,
                p = y && y(y(x([])));
            p && p !== r && a.call(p, i) && (M = p);
            var L = v.prototype = k.prototype = Object.create(M);
            D.prototype = L.constructor = v, v.constructor = D, v[d] = D.displayName = "GeneratorFunction", _.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === D || "GeneratorFunction" === (t.displayName || t.name))
            }, _.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, d in e || (e[d] = "GeneratorFunction")), e.prototype = Object.create(L), e
            }, _.awrap = function(e) {
                return {
                    __await: e
                }
            }, w(T.prototype), T.prototype[o] = function() {
                return this
            }, _.AsyncIterator = T, _.async = function(e, t, n, r) {
                var a = new T(Y(e, t, n, r));
                return _.isGeneratorFunction(t) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }))
            }, w(L), L[d] = "Generator", L[i] = function() {
                return this
            }, L.toString = function() {
                return "[object Generator]"
            }, _.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, _.values = x, H.prototype = {
                constructor: H,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(j), !e)
                        for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(r, a) {
                        return o.type = "throw", o.arg = e, t.next = r, a && (t.method = "next", t.arg = n), !!a
                    }
                    for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                        var i = this.tryEntries[s],
                            o = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var d = a.call(i, "catchLoc"),
                                u = a.call(i, "finallyLoc");
                            if (d && u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            } else if (d) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var s = r;
                            break
                        }
                    }
                    s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                    var i = s ? s.completion : {};
                    return i.type = e, i.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, f) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), j(n), f
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                j(n)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) {
                    return this.delegate = {
                        iterator: x(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = n), f
                }
            }
        }

        function Y(e, t, n, r) {
            var a = t && t.prototype instanceof k ? t : k,
                s = Object.create(a.prototype),
                i = new H(r || []);
            return s._invoke = function(e, t, n) {
                var r = l;
                return function(a, s) {
                    if (r === c) throw new Error("Generator is already running");
                    if (r === h) {
                        if ("throw" === a) throw s;
                        return O()
                    }
                    for (n.method = a, n.arg = s;;) {
                        var i = n.delegate;
                        if (i) {
                            var o = b(i, n);
                            if (o) {
                                if (o === f) continue;
                                return o
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === l) throw r = h, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = c;
                        var d = g(e, t, n);
                        if ("normal" === d.type) {
                            if (r = n.done ? h : m, d.arg === f) continue;
                            return {
                                value: d.arg,
                                done: n.done
                            }
                        }
                        "throw" === d.type && (r = h, n.method = "throw", n.arg = d.arg)
                    }
                }
            }(e, n, i), s
        }

        function g(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function k() {}

        function D() {}

        function v() {}

        function w(e) {
            ["next", "throw", "return"].forEach((function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            }))
        }

        function T(e) {
            var t;
            this._invoke = function(n, r) {
                function s() {
                    return new Promise((function(t, s) {
                        ! function t(n, r, s, i) {
                            var o = g(e[n], e, r);
                            if ("throw" !== o.type) {
                                var d = o.arg,
                                    u = d.value;
                                return u && "object" == typeof u && a.call(u, "__await") ? Promise.resolve(u.__await).then((function(e) {
                                    t("next", e, s, i)
                                }), (function(e) {
                                    t("throw", e, s, i)
                                })) : Promise.resolve(u).then((function(e) {
                                    d.value = e, s(d)
                                }), i)
                            }
                            i(o.arg)
                        }(n, r, t, s)
                    }))
                }
                return t = t ? t.then(s, s) : s()
            }
        }

        function b(e, t) {
            var r = e.iterator[t.method];
            if (r === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = n, b(e, t), "throw" === t.method)) return f;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var a = g(r, e.iterator, t.arg);
            if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, f;
            var s = a.arg;
            return s ? s.done ? (t[e.resultName] = s.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, f) : s : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
        }

        function S(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function j(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function H(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(S, this), this.reset(!0)
        }

        function x(e) {
            if (e) {
                var t = e[i];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var r = -1,
                        s = function t() {
                            for (; ++r < e.length;)
                                if (a.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = n, t.done = !0, t
                        };
                    return s.next = s
                }
            }
            return {
                next: O
            }
        }

        function O() {
            return {
                value: n,
                done: !0
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, a = (r = n(38)) && r.__esModule ? r : {
        default: r
    };
    t.default = function(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new a.default((function(e, n) {
                return function r(s, i) {
                    try {
                        var o = t[s](i),
                            d = o.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!o.done) return a.default.resolve(d).then((function(e) {
                        r("next", e)
                    }), (function(e) {
                        r("throw", e)
                    }));
                    e(d)
                }("next")
            }))
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.STORAGE = {
        isExist: !0,
        favorites: null,
        favoritesLength: 12,
        settings: {
            email: "https://mail.google.com/mail",
            favoritesTextColor: {
                hex8: "#FFFFFFFF"
            }
        },
        user: {
            id: null
        },
        notes: [{
            content: {
                ops: []
            },
            name: "Notepad 1",
            id: "new_pad",
            index: 0
        }],
        notifications: [],
        isNoteVisible: !0,
        activeNoteIndex: 0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(38)),
        a = i(n(351));
    t.getBookmarksFromTree = o, t.getParentById = function(e, t) {
        for (var n = function e(t) {
                for (var n = [], r = 0; r < t.children.length; r++)
                    if (t.children[r].url || n.push(t.children[r]), t.children[r].children) {
                        var s = e(t.children[r]);
                        s && n.push.apply(n, (0, a.default)(s))
                    } return n
            }(e), r = 0; r < n.length; r++)
            if (n[r].id == t) return n[r];
        return null
    }, t.processTree = function(e) {
        return new r.default((function(t, n) {
            for (var a = [], s = o(e), i = 0; i < s.length; i++) a.push(d(s[i]));
            r.default.all(a).then((function() {
                t(e)
            }))
        }))
    }, t.processBookmark = d, t.removeBookmarkFromTreeById = function e(t, n) {
        for (var r = 0; r < t.children.length; r++) t.children[r] && t.children[r].url && t.children[r].id == n && t.children.splice(r, 1), t.children[r] && t.children[r].children && e(t.children[r], n)
    }, t.editBookmarkById = function e(t, n) {
        for (var r = 0; r < t.children.length; r++) t.children[r].url && t.children[r].id == n.id && (n.url || (n.url = "http://"), t.children[r].title = n.title, t.children[r].url = n.url), t.children[r].children && e(t.children[r], n)
    };
    var s = n(203);

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        for (var t = [], n = 0; n < e.children.length; n++)
            if (e.children[n].url && t.push(e.children[n]), e.children[n].children) {
                var r = o(e.children[n]);
                r && t.push.apply(t, (0, a.default)(r))
            } return t
    }

    function d(e) {
        return new r.default((function(t, n) {
            (0, s.toDataURL)("chrome://favicon/size/16@1x/" + e.url).then((function(n) {
                e.icon = n, e.favorite = !1, e._id = (0, s.generateID)(), t()
            }))
        }))
    }
}]);