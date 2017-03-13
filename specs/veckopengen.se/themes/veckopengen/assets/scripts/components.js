/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) { "object" == typeof module && "object"===typeof module.exports ? module.exports = a.document ? b(a, !0):function (a) { if (!a.document) throw new Error('jQuery requires a window with a document'); return b(a) }:b(a) }('undefined'!=typeof window ? window:this, function (a, b) { var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function (a, b) { return new n.fn.init(a, b) }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) { return b.toUpperCase() }; n.fn = n.prototype = {jquery: m, constructor: n, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return a!=null?a<0?this[a + this.length]:this[a]:d.call(this) }, pushStack: function (a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return n.each(this, a, b) }, map: function (a) { return this.pushStack(n.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (a<0?b:0); return this.pushStack(c >= 0 && b > c ? [this[c]]:[]) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice}, n.extend = n.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ('boolean'==typeof g && (j = g, g = arguments[h] || {}, h++), "object"===typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if ((a=arguments[h])!=null) for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c:[]):f = c && n.isPlainObject(c) ? c:{}, g[b] = n.extend(j, f, d)):void 0 !== d && (g[b] = d)); return g }, n.extend({expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () {}, isFunction: function (a) { return "function" === n.type(a) }, isArray: Array.isArray, isWindow: function (a) { return a!=null&&a === a.window }, isNumeric: function (a) { return !n.isArray(a) && a - parseFloat(a) + 1 >= 0 }, isPlainObject: function (a) { return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1:a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1:!0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, type: function (a) { return a==null?a + "":'object'==typeof a || "function"===typeof a ? h[i.call(a)] || "object":typeof a }, globalEval: function (a) { var b, c = eval; a = n.trim(a), a && (a.indexOf("use strict")===1?(b = l.createElement('script'), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)):c(a)) }, camelCase: function (a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = s(a); if (c) { if (g) { for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: function (a) { return a==null?'':(a + "").replace(o, "") }, makeArray: function (a, b) { var c = b || []; return a!=null&&(s(Object(a)) ? n.merge(c, "string" == typeof a ? [a]:a):f.call(c, a)), c }, inArray: function (a, b, c) { return b==null?-1:g.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = s(a), i = []; if (h) for (;g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string"===typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () { return a.apply(b || this, e.concat(d.call(arguments))) }, f.guid = a.guid = a.guid || n.guid++, f):void 0 }, now: Date.now, support: k}), n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) { h['[object '+b + "]"] = b.toLowerCase() }); function s (a) { var b = "length" in a && a.length, c = n.type(a); return "function" === c || n.isWindow(a) ? !1:a.nodeType===1&&b ? !0:'array'===c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) { return a === b && (l = !0), 0 }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) { for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c; return -1 }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace('w', "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp('^'+L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp('^'+L + "*," + L + "*"), T = new RegExp('^'+L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp('='+L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp('^'+N + "$"), X = {ID: new RegExp('^#('+M + ")"), CLASS: new RegExp('^\\.('+M + ")"), TAG: new RegExp('^('+M.replace('w', "w*") + ")"), ATTR: new RegExp('^'+O), PSEUDO: new RegExp('^'+P), CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\('+L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp('^(?:'+K + ")$", "i"), needsContext: new RegExp('^'+L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")}, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp('\\\\([\\da-f]{1,6}'+L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b:d<0?String.fromCharCode(d + 65536):String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, ea = function () { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (fa) { H = {apply: E.length ? function (a, b) { G.apply(a, I.call(b)) }:function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]);a.length = c - 1 }} } function ga (a, b, d, e) { var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b:v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d; if (!e && p) { if (k!==11&&(f = _.exec(a))) if (j = f[1]) { if (k===9) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d } if (c.qsa && (!q || !q.test(a))) { if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) { o = g(a), (r = b.getAttribute('id')) ? s = r.replace(ba, "\\$&"):b.setAttribute('id', s), s = "[id='" + s + "'] ", l = o.length; while (l--)o[l] = s + ra(o[l]); w = aa.test(a) && pa(b.parentNode) || b, x = o.join(',') } if (x) try { return H.apply(d, w.querySelectorAll(x)), d } catch (y) {} finally { r || b.removeAttribute('id') } } } return i(a.replace(R, "$1"), b, d, e) } function ha () { var a = []; function b (c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ia (a) { return a[u] = !0, a } function ja (a) { var b = n.createElement('div'); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ka (a, b) { var c = a.split('|'), e = a.length; while (e--)d.attrHandle[c[e]] = b } function la (a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1:-1 } function ma (a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function na (a) { return function (b) { var c = b.nodeName.toLowerCase(); return ('input'===c || "button" === c) && b.type === a } } function oa (a) { return ia(function (b) { return b = +b, ia(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function pa (a) { return a && "undefined"!==typeof a.getElementsByTagName && a }c = ga.support = {}, f = ga.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName:!1 }, m = ga.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a:v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener('unload', ea, !1):e.attachEvent && e.attachEvent('onunload', ea)), p = !f(g), c.attributes = ja(function (a) { return a.className = "i", !a.getAttribute('className') }), c.getElementsByTagName = ja(function (a) { return a.appendChild(g.createComment('')), !a.getElementsByTagName('*').length }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) { return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if ('undefined'!=typeof b.getElementById && p) { var c = b.getElementById(a); return c && c.parentNode ? [c]:[] } }, d.filter.ID = function (a) { var b = a.replace(ca, da); return function (a) { return a.getAttribute('id') === b } }):(delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ca, da); return function (a) { var c = "undefined"!==typeof a.getAttributeNode && a.getAttributeNode('id'); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined"!==typeof b.getElementsByTagName ? b.getElementsByTagName(a):c.qsa ? b.querySelectorAll(a):void 0 }:function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ('*'===a) { while (c = f[e++])c.nodeType===1&&d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return p ? b.getElementsByClassName(a):void 0 }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push('[*^$]='+L + "*(?:''|\"\")"), a.querySelectorAll('[selected]').length || q.push('\\['+L + "*(?:value|" + K + ")"), a.querySelectorAll('[id~='+u + "-]").length || q.push('~='), a.querySelectorAll(':checked').length || q.push(':checked'), a.querySelectorAll('a#'+u + "+*").length || q.push('.#.+[+~]') }), ja(function (a) { var b = g.createElement('input'); b.setAttribute('type', "hidden"), a.appendChild(b).setAttribute('name', "D"), a.querySelectorAll('[name=d]').length && q.push('name'+L + "*[*^$|!~]?="), a.querySelectorAll(':enabled').length || q.push(':enabled', ":disabled"), a.querySelectorAll('*,:x'), q.push(',.*:') })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push('!=', P) }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement:a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d):a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) }:function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d || (d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b]; if (!e || !f) return a === g ? -1:b === g ? 1:e ? -1:f ? 1:k ? J(k, a) - J(k, b):0; if (e === f) return la(a, b); c = a; while (c = c.parentNode)h.unshift(c); c = b; while (c = c.parentNode)i.unshift(c); while (h[d] === i[d])d++; return d ? la(h[d], i[d]):h[d] === v ? -1:i[d] === v ? 1:0 }, g):n }, ga.matches = function (a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {} return ga(b, n, null, [a]).length > 0 }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p):void 0; return void 0 !== f ? f:c.attributes || !p ? a.getAttribute(b):(f = a.getAttributeNode(b)) && f.specified ? f.value:null }, ga.error = function (a) { throw new Error('Syntax error, unrecognized expression: '+a) }, ga.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++])b === a[f] && (e = d.push(f)); while (e--)a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (f===1||f===9||f===11) { if ('string'==typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (f===3||f===4) return a.nodeValue } else while (b = a[d++])c += e(b); return c }, d = ga.selectors = {cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: {'>': {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) { return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1):2 * ('even'===a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])):a[3] && ga.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null:(a[3] ? a[2] = a[4] || a[5] || "":c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) }}, filter: {TAG: function (a) { var b = a.replace(ca, da).toLowerCase(); return "*" === a ? function () { return !0 }:function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp('(^|'+L + ")" + a + "(" + L + "|$)")) && y(a, function (a) { return b.test('string'==typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute('class') || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = ga.attr(d, a); return e==null?'!='===b:b ? (e += "", "=" === b ? e === c:'!='===b ? e !== c:'^='===b ? c && 0 === e.indexOf(c):'*='===b ? c && e.indexOf(c) > -1:'$='===b ? c && e.slice(-c.length) === c:'~='===b ? (' '+e.replace(Q, " ") + " ").indexOf(c) > -1:'|='===b ? e === c || e.slice(0, c.length + 1) === c + "-":!1):!0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return d===1&&e===0?function (a) { return !!a.parentNode }:function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling":'previousSibling', q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r:l.nodeType===1) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild:q.lastChild], g && s) { k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (l.nodeType===1&&++m && l === b) { k[a] = [w, n, m]; break } } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r:l.nodeType===1) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error('unsupported pseudo: '+a); return e[u] ? e(b):e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) { var d, f = e(a, b), g = f.length; while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g]) }):function (a) { return e(a, 0, c) }):e }}, pseudos: {not: ia(function (a) { var b = [], c = [], d = h(a.replace(R, "$1")); return d[u] ? ia(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }):function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function (a) { return function (b) { return ga(a, b).length > 0 } }), contains: ia(function (a) { return a = a.replace(ca, da), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function (a) { return W.test(a || "") || ga.error('unsupported lang: '+a), a = a.replace(ca, da).toLowerCase(), function (b) { var c; do if (c = p ? b.lang:b.getAttribute('xml:lang') || b.getAttribute('lang')) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return Z.test(a.nodeName) }, input: function (a) { return Y.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && ((b=a.getAttribute("type"))==null||'text'===b.toLowerCase()) }, first: oa(function () { return [0] }), last: oa(function (a, b) { return [b - 1] }), eq: oa(function (a, b, c) { return [c<0?c + b:c] }), even: oa(function (a, b) { for (var c = 0; b > c; c += 2)a.push(c); return a }), odd: oa(function (a, b) { for (var c = 1; b > c; c += 2)a.push(c); return a }), lt: oa(function (a, b, c) { for (var d = 0 > c ? c + b:c; --d >= 0;)a.push(d); return a }), gt: oa(function (a, b, c) { for (var d = 0 > c ? c + b:c; ++d < b;)a.push(d); return a })}}, d.pseudos.nth = d.pseudos.eq; for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b); for (b in {submit: !0, reset: !0})d.pseudos[b] = na(b); function qa () {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0:k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({value: c, type: e[0].replace(R, " ")}), h = h.slice(c.length)); for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length)); if (!c) break } return b ? h.length:h ? ga.error(a):z(a, i).slice(0) }; function ra (a) { for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value; return d } function sa (a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (b.nodeType===1||e) return a(b, c, f) }:function (b, c, g) { var h, i, j = [w, f]; if (g) { while (b = b[d]) if ((b.nodeType===1||e) && a(b, c, g)) return !0 } else while (b = b[d]) if (b.nodeType===1||e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function ta (a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 }:a[0] } function ua (a, b, c) { for (var d = 0, e = b.length; e > d; d++)ga(a, b[d], c); return c } function va (a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function wa (a, b, c, d, e, f) { return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h]:h, []), q = !a || !f && b ? p:va(p, m, a, h, i), r = c ? e || (f ? a:o || d) ? []:g:q; if (c && c(q, r, h, i), d) { j = va(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) }k = r.length; while (k--)(l = r[k]) && (j = e ? J(f, l):m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = va(r === g ? r.splice(o, r.length):r), e ? e(null, g, r, i):H.apply(g, r) }) } function xa (a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1:0, k = sa(function (a) { return a === b }, h, !0), l = sa(function (a) { return J(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d):l(a, c, d)); return b = null, e }]; f > i; i++) if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break; return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*":''})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a)) }m.push(c) } return ta(m) } function ya (a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG('*', k), v = w += null == t ? 1:Math.random() || .1, x = u.length; for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) { if (e && l) { m = 0; while (o = a[m++]) if (o(l, g, h)) { i.push(l); break }k && (w = v) }c && ((l = !o && l) && p--, f && r.push(l)) } if (p += q, c && q !== p) { m = 0; while (o = b[m++])o(r, s, g, h); if (f) { if (p > 0) while (q--)r[q] || s[q] || (s[q] = F.call(i)); s = va(s) }H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i) } return k && (w = v, j = t), r }; return c ? ia(f):f } return h = ga.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--)f = xa(b[c]), f[u] ? d.push(f):e.push(f); f = A(a, ya(e, d)), f.selector = a } return f }, i = ga.select = function (a, b, e, f) { var i, j, k, l, m, n = "function"===typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) }i = X.needsContext.test(a) ? 0:j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) { return 1 & a.compareDocumentPosition(n.createElement('div')) }), ja(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute('href') }) || ka('type|href|height|width', function (a, b, c) { return c ? void 0:a.getAttribute(b, "type" === b.toLowerCase() ? 1:2) }), c.attributes && ja(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute('value', ""), "" === a.firstChild.getAttribute('value') }) || ka('value', function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0:a.defaultValue }), ja(function (a) { return a.getAttribute("disabled")==null}) || ka(K, function (a, b, c) { var d; return c ? void 0:a[b] === !0 ? b.toLowerCase():(d = a.getAttributeNode(b)) && d.specified ? d.value:null }), ga }(a); n.find = t, n.expr = t.selectors, n.expr[':'] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/; function x (a, b, c) { if (n.isFunction(b)) return n.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function (a) { return a === b !== c }); if ('string'==typeof b) { if (w.test(b)) return n.filter(b, a, c); b = n.filter(b, a) } return n.grep(a, function (a) { return g.call(b, a) >= 0 !== c }) }n.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d]:[]:n.find.matches(a, n.grep(b, function (a) { return a.nodeType===1})) }, n.fn.extend({find: function (a) { var b, c = this.length, d = [], e = this; if ('string'!=typeof a) return this.pushStack(n(a).filter(function () { for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0 })); for (b = 0; c > b; b++)n.find(a, e[b], d); return d = this.pushStack(c > 1 ? n.unique(d):d), d.selector = this.selector ? this.selector + " " + a:a, d }, filter: function (a) { return this.pushStack(x(this, a || [], !1)) }, not: function (a) { return this.pushStack(x(this, a || [], !0)) }, is: function (a) { return !!x(this, "string" == typeof a && u.test(a) ? n(a):a || [], !1).length }}); var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) { var c, d; if (!a) return this; if ('string'==typeof a) { if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null]:z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a):this.constructor(b).find(a); if (c[1]) { if (b = b instanceof n ? b[0]:b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b:l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b)n.isFunction(this[c]) ? this[c](b[c]):this.attr(c, b[c]); return this } return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this):n.isFunction(a) ? "undefined"!==typeof y.ready ? y.ready(a):a(n):(void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) }; A.prototype = n.fn, y = n(l); var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0}; n.extend({dir: function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (a.nodeType===1) { if (e && n(a).is(c)) break; d.push(a) } return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling)a.nodeType===1&&a !== b && c.push(a); return c }}), n.fn.extend({has: function (a) { var b = n(a, this), c = b.length; return this.filter(function () { for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string"!==typeof a ? n(a, b || this.context):0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1:c.nodeType===1&&n.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? n.unique(f):f) }, index: function (a) { return a ? "string"===typeof a ? g.call(n(a), this[0]):g.call(this, a.jquery ? a[0]:a):this[0] && this[0].parentNode ? this.first().prevAll().length:-1 }, add: function (a, b) { return this.pushStack(n.unique(n.merge(this.get(), n(a, b)))) }, addBack: function (a) { return this.add(a==null?this.prevObject:this.prevObject.filter(a)) }}); function D (a, b) { while ((a = a[b]) && 1 !== a.nodeType);return a }n.each({parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b:null }, parents: function (a) { return n.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return n.dir(a, "parentNode", c) }, next: function (a) { return D(a, "nextSibling") }, prev: function (a) { return D(a, "previousSibling") }, nextAll: function (a) { return n.dir(a, "nextSibling") }, prevAll: function (a) { return n.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return n.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return n.dir(a, "previousSibling", c) }, siblings: function (a) { return n.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return n.sibling(a.firstChild) }, contents: function (a) { return a.contentDocument || n.merge([], a.childNodes) }}, function (a, b) { n.fn[a] = function (c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e) } }); var E = /\S+/g, F = {}; function G (a) { var b = F[a] = {}; return n.each(a.match(E) || [], function (a, c) { b[c] = !0 }), b }n.Callbacks = function (a) { a = "string" == typeof a ? F[a] || G(a):n.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) { b = !1; break }d = !1, h && (i ? i.length && j(i.shift()):b ? h = []:k.disable()) }, k = {add: function () { if (h) { var c = h.length; !(function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments)), d ? f = h.length:b && (e = c, j(b)) } return this }, remove: function () { return h && n.each(arguments, function (a, b) { var c; while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--) }), this }, has: function (a) { return a ? n.inArray(a, h) > -1:!(!h || !h.length) }, empty: function () { return h = [], f = 0, this }, disable: function () { return h = i = b = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, b || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, b) { return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice():b], d ? i.push(b):j(b)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!c }}; return k }, n.extend({Deferred: function (a) { var b = [['resolve', "done", n.Callbacks('once memory'), "resolved"], ['reject', "fail", n.Callbacks('once memory'), "rejected"], ['notify', "progress", n.Callbacks('memory')]], c = "pending", d = {state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return n.Deferred(function (c) { n.each(b, function (b, f) { var g = n.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0] + "With"](this === d ? c.promise():this, g ? [a]:arguments) }) }), a = null }).promise() }, promise: function (a) { return a!=null?n.extend(a, d):d }}, e = {}; return d.pipe = d.then, n.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d:this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e:0, g = 1 === f ? a:n.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments):e, c === i ? g.notifyWith(b, c):--f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)):--f; return f || g.resolveWith(k, c), g.promise() }}); var H; n.fn.ready = function (a) { return n.ready.promise().done(a), this }, n.extend({isReady: !1, readyWait: 1, holdReady: function (a) { a ? n.readyWait++:n.ready(!0) }, ready: function (a) { (a === !0 ? --n.readyWait:n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready')))) }}); function I () { l.removeEventListener('DOMContentLoaded', I, !1), a.removeEventListener('load', I, !1), n.ready() }n.ready.promise = function (b) { return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready):(l.addEventListener('DOMContentLoaded', I, !1), a.addEventListener('load', I, !1))), H.promise(b) }, n.ready.promise(); var J = n.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ('object'===n.type(c)) { e = !0; for (h in c)n.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null):(j = b, b = function (a, b, c) { return j.call(n(a), c) })), b)) for (;i > h; h++)b(a[h], c, g ? d:d.call(a[h], h, b(a[h], c))); return e ? a:j ? b.call(a):i ? b(a[0], c):f }; n.acceptData = function (a) { return a.nodeType===1||a.nodeType===9||!+a.nodeType }; function K () { Object.defineProperty(this.cache = {}, 0, {get: function () { return {} }}), this.expando = n.expando + K.uid++ }K.uid = 1, K.accepts = n.acceptData, K.prototype = {key: function (a) { if (!K.accepts(a)) return 0; var b = {}, c = a[this.expando]; if (!c) { c = K.uid++; try { b[this.expando] = {value: c}, Object.defineProperties(a, b) } catch (d) { b[this.expando] = c, n.extend(a, b) } } return this.cache[c] || (this.cache[c] = {}), c }, set: function (a, b, c) { var d, e = this.key(a), f = this.cache[e]; if ('string'==typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d]; return f }, get: function (a, b) { var c = this.cache[this.key(a)]; return void 0 === b ? c:c[b] }, access: function (a, b, c) { var d; return void 0 === b || b && "string"===typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d:this.get(a, n.camelCase(b))):(this.set(a, b, c), void 0 !== c ? c:b) }, remove: function (a, b) { var c, d, e, f = this.key(a), g = this.cache[f]; if (void 0 === b) this.cache[f] = {}; else { n.isArray(b) ? d = b.concat(b.map(n.camelCase)):(e = n.camelCase(b), b in g ? d = [b, e]:(d = e, d = d in g ? [d]:d.match(E) || [])), c = d.length; while (c--) delete g[d[c]] } }, hasData: function (a) { return !n.isEmptyObject(this.cache[a[this.expando]] || {}) }, discard: function (a) { a[this.expando] && delete this.cache[a[this.expando]] }}; var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g; function P (a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string"===typeof c) { try { c = "true" === c ? !0:'false'===c ? !1:'null'===c ? null:+c + "" === c ? +c:N.test(c) ? n.parseJSON(c):c } catch (e) {}M.set(a, b, c) } else c = void 0; return c }n.extend({hasData: function (a) { return M.hasData(a) || L.hasData(a) },
data: function (a, b, c) {
  return M.access(a, b, c) },
removeData: function (a, b) { M.remove(a, b) },
_data: function (a, b, c) { return L.access(a, b, c) },
_removeData: function (a, b) { L.remove(a, b) }}), n.fn.extend({data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) { c = g.length; while (c--)g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = n.camelCase(d.slice(5)), P(f, d, e[d]))); L.set(f, "hasDataAttrs", !0) } return e } return "object"===typeof a ? this.each(function () { M.set(this, a) }):J(this, function (b) { var c, d = n.camelCase(a); if (f && void 0 === b) { if (c = M.get(f, a), void 0 !== c) return c; if (c = M.get(f, d), void 0 !== c) return c; if (c = P(f, d, void 0), void 0 !== c) return c } else this.each(function () { var c = M.get(this, d); M.set(this, d, b), -1 !== a.indexOf('-') && void 0 !== c && M.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function (a) { return this.each(function () { M.remove(this, a) }) }}), n.extend({queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)):d.push(c)), d || []):void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ('fx'===b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return L.get(a, c) || L.access(a, c, {empty: n.Callbacks('once memory').add(function () { L.remove(a, [b + "queue", c]) })}) }}), n.fn.extend({queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a):void 0 === b ? this:this.each(function () { var c = n.queue(this, a, b); n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { n.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string"!==typeof a && (b = a, a = void 0), a = a || "fx"; while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) }}); var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ['Top', "Right", "Bottom", "Left"], S = function (a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) }, T = /^(?:checkbox|radio)$/i; !(function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}()); var U = "undefined"; k.focusinBubbles = "onfocusin" in a; var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/; function Z () { return !0 } function $ () { return !1 } function _ () { try { return l.activeElement } catch (a) {} }n.event = {global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a); if (r) { c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) { return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments):void 0 }), b = (b || "").match(E) || [''], j = b.length; while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split('.').sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType:l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join('.')}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k):m.push(k), n.event.global[o] = !0) } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a); if (r && (i = r.events)) { b = (b || "").match(E) || [''], j = b.length; while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split('.').sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType:l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp('(^|\\.)'+p.join('\\.(?:.*\\.|)') + "(\\.|$)"), g = f = m.length; while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ('**'!==d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]) } else for (o in i)n.event.remove(a, o + b[j], c, d, !0); n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type:b, r = j.call(b, "namespace") ? b.namespace.split('.'):[]; if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf('.') >= 0 && (r = q.split('.'), q = r.shift(), r.sort()), k = q.indexOf(':') < 0 && "on" + q, b = b[n.expando] ? b:new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2:3, b.namespace = r.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)'+r.join('\\.(?:.*\\.|)') + "(\\.|$)"):null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b]:n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) { if (!e && !o.noBubble && !n.isWindow(d)) { for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g; h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a) }f = 0; while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i:o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault()); return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result } }, dispatch: function (a) { a = n.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) { for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0:n.find(e, this, null, [i]).length), d[e] && d.push(f); d.length && g.push({elem: i, handlers: d}) } return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(' '), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(' '), filter: function (a, b) { return a.which==null&&(a.which = null != b.charCode ? b.charCode:b.keyCode), a }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(' '), filter: function (a, b) { var c, d, e, f = b.button; return a.pageX==null&&b.clientX!=null&&(c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1:2 & f ? 3:4 & f ? 2:0), a }}, fix: function (a) { if (a[n.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks:V.test(e) ? this.keyHooks:{}), d = g.props ? this.props.concat(g.props):this.props, a = new n.Event(f), b = d.length; while (b--)c = d[b], a[c] = f[c]; return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f):a }, special: {load: {noBubble: !0}, focus: {trigger: function () { return this !== _() && this.focus ? (this.focus(), !1):void 0 }, delegateType: "focusin"}, blur: {trigger: function () { return this === _() && this.blur ? (this.blur(), !1):void 0 }, delegateType: "focusout"}, click: {trigger: function () { return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1):void 0 }, _default: function (a) { return n.nodeName(a.target, "a") }}, beforeunload: {postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) }}}, simulate: function (a, b, c, d) { var e = n.extend(new n.Event(), c, {type: a, isSimulated: !0, originalEvent: {}}); d ? n.event.trigger(e, null, b):n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() }}, n.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) }, n.Event = function (a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z:$):this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)):new n.Event(a, b) }, n.Event.prototype = {isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation() }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() }}, n.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) { n.event.special[a] = {delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c }} }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) { var c = function (a) { n.event.simulate(b, a.target, n.event.fix(a), !0) }; n.event.special[b] = {setup: function () { var d = this.ownerDocument || this, e = L.access(d, b); e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = L.access(d, b) - 1; e ? L.access(d, b, e):(d.removeEventListener(a, c, !0), L.remove(d, b)) }} }), n.fn.extend({on: function (a, b, c, d, e) { var f, g; if ('object'==typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (g in a) this.on(g, b, c, a[g], e); return this } if (c==null&&d==null?(d = b, c = b = void 0):d==null&&('string'==typeof b ? (d = c, c = void 0):(d = c, c = b, b = void 0)), d === !1)d = $; else if (!d) return this; return e===1&&(f = d, d = function (a) { return n().off(a), f.apply(this, arguments) }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () { n.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace:d.origType, d.selector, d.handler), this; if ('object'==typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function"===typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () { n.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { n.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0):void 0 }}); var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]}; ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td; function ja (a, b) { return n.nodeName(a, "table") && n.nodeName(b.nodeType!==11?b:b.firstChild, "tr") ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')):a } function ka (a) { return a.type = (a.getAttribute("type")!==null) + "/" + a.type, a } function la (a) { var b = ga.exec(a.type); return b ? a.type = b[1]:a.removeAttribute('type'), a } function ma (a, b) { for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval")) } function na (a, b) { var c, d, e, f, g, h, i, j; if (b.nodeType===1) { if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c]) }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i)) } } function oa (a, b) { var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*"):a.querySelectorAll ? a.querySelectorAll(b || "*"):[]; return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c):c } function pa (a, b) { var c = b.nodeName.toLowerCase(); "input" === c && T.test(a.type) ? b.checked = a.checked:('input'===c || "textarea" === c) && (b.defaultValue = a.defaultValue) }n.extend({clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a); if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)pa(f[d], g[d]); if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)na(f[d], g[d]); else na(a, h); return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || 0 === e) if ('object'===n.type(e))n.merge(l, e.nodeType ? [e]:e); else if (ca.test(e)) { f = f || k.appendChild(b.createElement('div')), g = (ba.exec(e) || ['', ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0]; while (j--)f = f.lastChild; n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "" } else l.push(b.createTextNode(e)); k.textContent = "", m = 0; while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) { j = 0; while (e = f[j++])fa.test(e.type || "") && c.push(e) } return k }, cleanData: function (a) { for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) { if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) { if (b.events) for (d in b.events)f[d] ? n.event.remove(c, d):n.removeEvent(c, d, b.handle); L.cache[e] && delete L.cache[e] } delete M.cache[c[M.expando]] } }}), n.fn.extend({text: function (a) { return J(this, function (a) { return void 0 === a ? n.text(this):this.empty().each(function () { (this.nodeType===1||this.nodeType===11||this.nodeType===9) && (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (this.nodeType===1||this.nodeType===11||this.nodeType===9) { var b = ja(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (this.nodeType===1||this.nodeType===11||this.nodeType===9) { var b = ja(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? n.filter(a, this):this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++)a.nodeType===1&&(n.cleanData(oa(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null == a ? !1:a, b = null == b ? a:b, this.map(function () { return n.clone(this, a, b) }) }, html: function (a) { return J(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ('string'==typeof a && !da.test(a) && !ia[(ba.exec(a) || ['', ""])[1].toLowerCase()]) { a = a.replace(aa, "<$1></$2>"); try { for (;d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a); b = 0 } catch (e) {} }b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this:this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p); if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) { var d = m.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) { for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j); if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha, ""))) } return this }}), n.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) { n.fn[a] = function (a) { for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this:this.clone(!0), n(e[h])[b](c), f.apply(d, c.get()); return this.pushStack(d) } }); var qa, ra = {}; function sa (b, c) { var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display:n.css(e[0], "display"); return e.detach(), f } function ta (a) { var b = l, c = ra[a]; return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c } var ua = /^margin/, va = new RegExp('^('+Q + ")(?!px)[a-z%]+$", "i"), wa = function (b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null):a.getComputedStyle(b, null) }; function xa (a, b, c) { var d, e, f, g, h = a.style; return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && (''!==g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "":g } function ya (a, b) { return {get: function () { return a() ? void delete this.get:(this.get = b).apply(this, arguments) }} }!(function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}()), n.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b)g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b)a.style[f] = g[f]; return e }; var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp('^('+Q + ")(.*)$", "i"), Ba = new RegExp('^([+-])=('+Q + ")", "i"), Ca = {position: "absolute", visibility: "hidden", display: "block"}, Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ['Webkit', "O", "Moz", "ms"]; function Fa (a, b) { if (b in a) return b; var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length; while (e--) if (b = Ea[e] + c, b in a) return b; return d } function Ga (a, b, c) { var d = Aa.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px"):b } function Ha (a, b, c, d, e) { for (var f = c === (d ? "border":'content') ? 4:'width'===b ? 1:0, g = 0; 4 > f; f += 2)'margin'===c && (g += n.css(a, c + R[f], !0, e)), d ? ('content'===c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))):(g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e))); return g } function Ia (a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth:a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f); if (e<=0||e==null) { if (e = xa(a, b, f), (e<0||e==null) && (e = a.style[b]), va.test(e)) return e; d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Ha(a, b, c || (g ? "border":'content'), d, f) + "px" } function Ja (a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))):(e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c:n.css(d, "display")))); for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "":'none')); return a }n.extend({cssHooks: {opacity: {get: function (a, b) { if (b) { var c = xa(a, "opacity"); return "" === c ? "1":c } }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {'float': "cssFloat"}, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b), i = a.style; return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e:i[b]:(f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ('number'!==f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf('background') || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function (a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0:e):e }}), n.each(['height', "width"], function (a, b) { n.cssHooks[b] = {get: function (a, c, d) { return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () { return Ia(a, b, d) }):Ia(a, b, d):void 0 }, set: function (a, c, d) { var e = d && wa(a); return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e):0) }} }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) { return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]):void 0 }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) { n.cssHooks[a + b] = {expand: function (c) { for (var d = 0, e = {}, f = "string"===typeof c ? c.split(' '):[c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0]; return e }}, ua.test(a) || (n.cssHooks[a + b].set = Ga) }), n.fn.extend({css: function (a, b) { return J(this, function (a, b, c) { var d, e, f = {}, g = 0; if (n.isArray(b)) { for (d = wa(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c):n.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return Ja(this, !0) }, hide: function () { return Ja(this) }, toggle: function (a) { return "boolean"===typeof a ? a ? this.show():this.hide():this.each(function () { S(this) ? n(this).show():n(this).hide() }) }}); function Ka (a, b, c, d, e) { return new Ka.prototype.init(a, b, c, d, e) }n.Tween = Ka, Ka.prototype = {constructor: Ka, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "":'px') }, cur: function () { var a = Ka.propHooks[this.prop]; return a && a.get ? a.get(this):Ka.propHooks._default.get(this) }, run: function (a) { var b, c = Ka.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration):this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this):Ka.propHooks._default.set(this), this }}, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {_default: {get: function (a) { var b; return a.elem[a.prop]==null||a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b:0):a.elem[a.prop] }, set: function (a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a):a.elem.style && (a.elem.style[n.cssProps[a.prop]]!=null||n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit):a.elem[a.prop] = a.now }}}, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) }}, n.easing = {linear: function (a) { return a }, swing: function (a) { return0.5 - Math.cos(a * Math.PI) / 2 }}, n.fx = Ka.prototype.init, n.fx.step = {}; var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp('^(?:([+-])=|)('+Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [Va], Ra = {'*': [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "":'px'), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2]:+e[2]), c }]}; function Sa () { return setTimeout(function () { La = void 0 }), La = n.now() } function Ta (a, b) { var c, d = 0, e = {height: a}; for (b = b ? 1:0; 4 > d; d += 2 - b)c = R[d], e['margin'+c] = e['padding'+c] = a; return b && (e.opacity = e.width = a), e } function Ua (a, b, c) { for (var d, e = (Ra[b] || []).concat(Ra['*']), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d } function Va (a, b, c) { var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow"); c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, l.always(function () { l.always(function () { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ('height'in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName):j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], Na.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide":'show')) { if ('show'!==e || !q || void 0 === q[d]) continue; p = !0 }m[d] = q && q[d] || n.style(a, d) } else j = void 0; if (n.isEmptyObject(m))'inline'===('none'===j ? ta(a.nodeName):j) && (o.display = j); else { q ? "hidden" in q && (p = q.hidden):q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show():l.done(function () { n(a).hide() }), l.done(function () { var b; L.remove(a, "fxshow"); for (b in m)n.style(a, b, m[b]) }); for (d in m)g = Ua(p ? q[d]:0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1:0)) } } function Wa (a, b) { var c, d, e, f, g; for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f)c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function Xa (a, b, c) { var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c:(h.resolveWith(a, [j]), !1) }, j = h.promise({elem: a, props: n.extend({}, b), opts: n.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length:0; if (e) return this; for (e = !0; d > c; c++)j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]):h.rejectWith(a, [j, b]), this }}), k = j.props; for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d; return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }n.Animation = n.extend(Xa, {tweener: function (a, b) { n.isFunction(a) ? (b = a, a = ['*']):a = a.split(' '); for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b) }, prefilter: function (a, b) { b ? Qa.unshift(a):Qa.push(a) }}), n.speed = function (a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a):{complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b}; return d.duration = n.fx.off ? 0:'number'==typeof d.duration ? d.duration:d.duration in n.fx.speeds ? n.fx.speeds[d.duration]:n.fx.speeds._default, (d.queue==null||d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({fadeTo: function (a, b, c, d) { return this.filter(S).css('opacity', 0).show().end().animate({opacity: b}, a, c, d) }, animate: function (a, b, c, d) { var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () { var b = Xa(this, n.extend({}, a), f); (e || L.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g):this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string"!==typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this); if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pa.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && n.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length:0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) }}), n.each(['toggle', "show", "hide"], function (a, b) { var c = n.fn[b]; n.fn[b] = function (a, d, e) { return a==null||'boolean'==typeof a ? c.apply(this, arguments):this.animate(Ta(b, !0), a, d, e) } }), n.each({slideDown: Ta('show'), slideUp: Ta('hide'), slideToggle: Ta('toggle'), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) { n.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function () { var a, b = 0, c = n.timers; for (La = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || n.fx.stop(), La = void 0 }, n.fx.timer = function (a) { n.timers.push(a), a() ? n.fx.start():n.timers.pop() }, n.fx.interval = 13, n.fx.start = function () { Ma || (Ma = setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function () { clearInterval(Ma), Ma = null }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) { return a = n.fx ? n.fx.speeds[a] || a:a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a = l.createElement('input'), b = l.createElement('select'), c = b.appendChild(l.createElement('option')); a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement('input'), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value }(); var Ya, Za, $a = n.expr.attrHandle; n.fn.extend({attr: function (a, b) { return J(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { n.removeAttr(this, a) }) }}), n.extend({attr: function (a, b, c) {
var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c):(f===1&&n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za:Ya)),
void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e:(e = n.find.attr(a, b), null == e ? void 0:e):c!==null?d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e:(a.setAttribute(b, c + ""), c):void n.removeAttr(a, b))
},
removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(E); if (f && 1 === a.nodeType) while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) }, attrHooks: {type: {set: function (a, b) { if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute('type', b), c && (a.value = c), b } }}}}), Za = {set: function (a, b, c) { return b === !1 ? n.removeAttr(a, c):a.setAttribute(c, c), c }}, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = $a[b] || n.find.attr; $a[b] = function (a, b, d) { var e, f; return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase():null, $a[b] = f), e } }); var _a = /^(?:input|select|textarea|button)$/i; n.fn.extend({prop: function (a, b) { return J(this, n.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return this.each(function () { delete this[n.propFix[a] || a] }) }}), n.extend({propFix: {'for': "htmlFor", "class": "className"}, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d:a[b] = c:e && "get" in e && null !== (d = e.get(a, b)) ? d:a[b] }, propHooks: {tabIndex: {get: function (a) { return a.hasAttribute('tabindex') || _a.test(a.nodeName) || a.href ? a.tabIndex:-1 }}}}), k.optSelected || (n.propHooks.selected = {get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }}), n.each(['tabIndex', "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { n.propFix[this.toLowerCase()] = this }); var ab = /[\t\r\n\f]/g; n.fn.extend({addClass: function (a) { var b, c, d, e, f, g, h = "string"===typeof a && a, i = 0, j = this.length; if (n.isFunction(a)) return this.each(function (b) { n(this).addClass(a.call(this, b, this.className)) }); if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (' '+c.className + " ").replace(ab, " "):' ')) { f = 0; while (e = b[f++])d.indexOf(' '+e + " ") < 0 && (d += e + " "); g = n.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length; if (n.isFunction(a)) return this.each(function (b) { n(this).removeClass(a.call(this, b, this.className)) }); if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (' '+c.className + " ").replace(ab, " "):'')) { f = 0; while (e = b[f++]) while (d.indexOf(' '+e + " ") >= 0)d = d.replace(' '+e + " ", " "); g = a ? n.trim(d):'', c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean"===typeof b && "string" === c ? b ? this.addClass(a):this.removeClass(a):this.each(n.isFunction(a) ? function (c) { n(this).toggleClass(a.call(this, c, this.className, b), b) }:function () { if ('string'===c) { var b, d = 0, e = n(this), f = a.match(E) || []; while (b = f[d++])e.hasClass(b) ? e.removeClass(b):e.addClass(b) } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "":L.get(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (this[c].nodeType===1&&(' '+this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0; return !1 }}); var bb = /\r/g; n.fn.extend({val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()):a, null == e ? e = "":'number'==typeof e ? e += "":n.isArray(e) && (e = n.map(e, function (a) { return a==null?'':a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c:(c = e.value, "string" == typeof c ? c.replace(bb, ""):c==null?'':c) } }}), n.extend({valHooks: {option: {get: function (a) { var b = n.find.attr(a, "value"); return b!=null?b:n.trim(n.text(a)) }}, select: {get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null:[], h = f ? e + 1:d.length, i = 0 > e ? h:f ? e:0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled:c.getAttribute("disabled")!==null) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = n.makeArray(b), g = e.length; while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0); return c || (a.selectedIndex = -1), f }}}}), n.each(['radio', "checkbox"], function () { n.valHooks[this] = {set: function (a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0:void 0 }}, k.checkOn || (n.valHooks[this].get = function (a) { return a.getAttribute("value")===null?'on':a.value }) }), n.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) { n.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c):this.trigger(b) } }), n.fn.extend({hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return arguments.length===1?this.off(a, "**"):this.off(b, a || "**", c) }}); var cb = n.now(), db = /\?/; n.parseJSON = function (a) { return JSON.parse(a + "") }, n.parseXML = function (a) { var b, c; if (!a || "string"!==typeof a) return null; try { c = new DOMParser(), b = c.parseFromString(a, "text/xml") } catch (d) { b = void 0 } return (!b || b.getElementsByTagName('parsererror').length) && n.error('Invalid XML: '+a), b }; var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat('*'), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || []; function qb (a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(E) || []; if (n.isFunction(c)) while (d = f[e++])'+'===d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)):(a[d] = a[d] || []).push(c) } } function rb (a, b, c, d) { var e = {}, f = a === mb; function g (h) { var i; return e[h] = !0, n.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string"!==typeof j || f || e[j] ? f ? !(i = j):void 0:(b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e['*'] && g('*') } function sb (a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a:d || (d = {}))[c] = b[c]); return d && n.extend(!0, a, d), a } function tb (a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ('*'===i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type')); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c)f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }g || (g = e) }f = f || g } return f ? (f !== i[0] && i.unshift(f), c[f]):void 0 } function ub (a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters)j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ('*'===f)f = i; else if ('*'!==i && i !== f) { if (g = j[i + " " + f] || j['* '+f], !g) for (e in j) if (h = e.split(' '), h[1] === f && (g = j[i + " " + h[0]] || j['* '+h[0]])) { g === !0 ? g = j[e]:j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a['throws'])b = g(b); else try { b = g(b) } catch (l) { return {state: "parsererror", error: g ? l:'No conversion from '+i + " to " + f} } } return {state: "success", data: b} }n.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {'*': nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {'* text': String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, b) { return b ? sb(sb(a, n.ajaxSettings), b):sb(n.ajaxSettings, a) }, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l):n.event, o = n.Deferred(), p = n.Callbacks('once memory'), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0, getResponseHeader: function (a) { var b; if (t===2) { if (!f) { f = {}; while (b = gb.exec(e))f[b[1].toLowerCase()] = b[2] }b = f[a.toLowerCase()] } return b==null?null:b }, getAllResponseHeaders: function () { return t===2?e:null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (t<2) for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return c && c.abort(b), x(0, b), this }}; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [''], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ('http:'===h[1] ? "80":'443')) === (pb[3] || ('http:'===pb[1] ? "80":'443')))), k.data && k.processData && "string"!==typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v; i = n.event && k.global, i && 0 === n.active++ && n.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&":'?') + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++):d + (db.test(d) ? "&":'?') + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader('If-Modified-Since', n.lastModified[d]), n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*'!==k.dataTypes[0] ? ", " + nb + "; q=0.01":''):k.accepts['*']); for (j in k.headers)v.setRequestHeader(j, k.headers[j]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (j in {success: 1, error: 1, complete: 1})v[j](k[j]); if (c = rb(mb, k, b, v)) { v.readyState = 1, i && m.trigger('ajaxSend', [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort('timeout') }, k.timeout)); try { t = 1, c.send(r, x) } catch (w) { if (!(t<2)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x (a, b, f, h) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4:0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (n.lastModified[d] = w), w = v.getResponseHeader('etag'), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent":a===304?x = "notmodified":(x = u.state, r = u.data, s = u.error, j = !s)):(s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]):o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess":'ajaxError', [v, k, j ? r:s]), p.fireWith(l, [v, x]), i && (m.trigger('ajaxComplete', [v, k]), --n.active || n.event.trigger('ajaxStop'))) } return v }, getJSON: function (a, b, c) { return n.get(a, b, c, "json") }, getScript: function (a, b) { return n.get(a, void 0, b, "script") }}), n.each(['get', "post"], function (a, b) { n[b] = function (a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({url: a, type: b, dataType: e, data: c, success: d}) } }), n._evalUrl = function (a) { return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) }, n.fn.extend({wrapAll: function (a) { var b; return n.isFunction(a) ? this.each(function (b) { n(this).wrapAll(a.call(this, b)) }):(this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild)a = a.firstElementChild; return a }).append(this)), this) }, wrapInner: function (a) { return this.each(n.isFunction(a) ? function (b) { n(this).wrapInner(a.call(this, b)) }:function () { var b = n(this), c = b.contents(); c.length ? c.wrapAll(a):b.append(a) }) }, wrap: function (a) { var b = n.isFunction(a); return this.each(function (c) { n(this).wrapAll(b ? a.call(this, c):a) }) }, unwrap: function () { return this.parent().each(function () { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() }}), n.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 }, n.expr.filters.visible = function (a) { return !n.expr.filters.hidden(a) }; var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i; function Ab (a, b, c, d) { var e; if (n.isArray(b))n.each(b, function (b, e) { c || wb.test(a) ? d(a, e):Ab(a + "[" + ('object'==typeof e ? b:'') + "]", e, c, d) }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Ab(a + "[" + e + "]", b[e], c, d) }n.param = function (a, b) { var c, d = [], e = function (a, b) { b = n.isFunction(b) ? b():b==null?'':b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () { e(this.name, this.value) }); else for (c in a)Ab(c, a[c], b, e); return d.join('&').replace(vb, "+") }, n.fn.extend({serialize: function () { return n.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = n.prop(this, "elements"); return a ? n.makeArray(a):this }).filter(function () { var a = this.type; return this.name && !n(this).is(':disabled') && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a)) }).map(function (a, b) { var c = n(this).val(); return c==null?null:n.isArray(c) ? n.map(c, function (a) { return {name: b.name, value: a.replace(xb, "\r\n")} }):{name: b.name, value: c.replace(xb, "\r\n")} }).get() }}), n.ajaxSettings.xhr = function () { try { return new XMLHttpRequest()} catch (a) {} }; var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr(); a.attachEvent && a.attachEvent('onunload', function () { for (var a in Cb)Cb[a]() }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) { var b; return k.cors || Eb && !a.crossDomain ? {send: function (c, d) { var e, f = a.xhr(), g = ++Bb; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields)f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = "XMLHttpRequest"); for (e in c)f.setRequestHeader(e, c[e]); b = function (a) { return function () { b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort():'error'===a ? d(f.status, f.statusText):d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText}:void 0, f.getAllResponseHeaders())) } }, f.onload = b(), f.onerror = b('error'), b = Cb[g] = b('abort'); try { f.send(a.hasContent && a.data || null) } catch (h) { if (b) throw h } }, abort: function () { b && b() }}:void 0 }), n.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {'text script': function (a) { return n.globalEval(a), a }}}), n.ajaxPrefilter('script', function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), n.ajaxTransport('script', function (a) { if (a.crossDomain) { var b, c; return {send: function (d, e) { b = n('<script>').prop({async: !0, charset: a.scriptCharset, src: a.url}).on('load error', c = function (a) { b.remove(), c = null, a && e('error'===a.type ? 404:200, a.type) }), l.head.appendChild(b[0]) }, abort: function () { c && c() }} } }); var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/; n.ajaxSetup({jsonp: "callback", jsonpCallback: function () { var a = Fb.pop() || n.expando + "_" + cb++; return this[a] = !0, a }}), n.ajaxPrefilter('json jsonp', function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url":'string'==typeof b.data && !(b.contentType || "").indexOf('application/x-www-form-urlencoded') && Gb.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback():b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e):b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&":'?') + b.jsonp + "=" + e), b.converters['script json'] = function () { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script"):void 0 }), n.parseHTML = function (a, b, c) { if (!a || "string"!==typeof a) return null; "boolean"===typeof b && (c = b, b = !1), b = b || l; var d = v.exec(a), e = !c && []; return d ? [b.createElement(d[1])]:(d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes)) }; var Hb = n.fn.load; n.fn.load = function (a, b, c) { if ('string'!=typeof a && Hb) return Hb.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(' '); return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0):b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({url: a, type: e, dataType: "html", data: b}).done(function (a) { f = arguments, g.html(d ? n('<div>').append(n.parseHTML(a)).find(d):a) }).complete(c && function (a, b) { g.each(c, f || [a.responseText, b, a]) }), this }, n.each(['ajaxStart', "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { n.fn[b] = function (a) { return this.on(b, a) } }), n.expr.filters.animated = function (a) { return n.grep(n.timers, function (b) { return a === b.elem }).length }; var Ib = a.document.documentElement; function Jb (a) { return n.isWindow(a) ? a:a.nodeType===9&&a.defaultView }n.offset = {setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ('absolute'===k || "fixed" === k) && (f + i).indexOf('auto') > -1, j ? (d = l.position(), g = d.top, e = d.left):(g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m):l.css(m) }}, n.fn.extend({offset: function (a) { if (arguments.length) return void 0 === a ? this:this.each(function (b) { n.offset.setOffset(this, a, b) }); var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument; if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft}):e }, position: function () { if (this[0]) { var a, b, c = this[0], d = {top: 0, left: 0}; return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect():(a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0)} } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || Ib; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent; return a || Ib }) }}), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) { var d = "pageYOffset" === c; n.fn[b] = function (e) { return J(this, function (b, e, f) { var g = Jb(b); return void 0 === f ? g ? g[c]:b[e]:void (g ? g.scrollTo(d ? a.pageXOffset:f, d ? f:a.pageYOffset):b[e] = f) }, b, e, arguments.length, null) } }), n.each(['top', "left"], function (a, b) { n.cssHooks[b] = ya(k.pixelPosition, function (a, c) { return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px":c):void 0 }) }), n.each({Height: "height", Width: "width"}, function (a, b) { n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) { n.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean"!==typeof d), g = c || (d === !0 || e === !0 ? "margin":'border'); return J(this, function (b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement['client'+a]:b.nodeType===9?(e = b.documentElement, Math.max(b.body['scroll'+a], e['scroll'+a], b.body['offset'+a], e['offset'+a], e['client'+a])):void 0 === d ? n.css(b, c, g):n.style(b, c, d, g) }, b, f ? d:void 0, f, null) } }) }), n.fn.size = function () { return this.length }, n.fn.andSelf = n.fn.addBack, "function"===typeof define && define.amd && define('jquery', [], function () { return n }); var Kb = a.jQuery, Lb = a.$; return n.noConflict = function (b) { return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n }, typeof b === U && (a.jQuery = a.$ = n), n
}));
// # sourceMappingURL=jquery.min.map
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function ($, window, document, undefined) {
  'use strict'

  var header_helpers = function (class_array) {
    var head = $('head')
    head.prepend($.map(class_array, function (class_name) {
      if (head.has('.' + class_name).length === 0) {
        return '<meta class="' + class_name + '" />'
      }
    }))
  }

  header_helpers([
    'foundation-mq-small',
    'foundation-mq-small-only',
    'foundation-mq-medium',
    'foundation-mq-medium-only',
    'foundation-mq-large',
    'foundation-mq-large-only',
    'foundation-mq-xlarge',
    'foundation-mq-xlarge-only',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace'])

  // Enable FastClick if present

  $(function () {
    if (typeof FastClick !== 'undefined') {
      // Don't attach to body if undefined
      if (typeof document.body !== 'undefined') {
        FastClick.attach(document.body)
      }
    }
  })

  // private Fast Selector wrapper,
  // returns jQuery object. Only use where
  // getElementById is not available.
  var S = function (selector, context) {
    if (typeof selector === 'string') {
      if (context) {
        var cont
        if (context.jquery) {
          cont = context[0]
          if (!cont) {
            return context
          }
        } else {
          cont = context
        }
        return $(cont.querySelectorAll(selector))
      }

      return $(document.querySelectorAll(selector))
    }

    return $(selector, context)
  }

  // Namespace functions.

  var attr_name = function (init) {
    var arr = []
    if (!init) {
      arr.push('data')
    }
    if (this.namespace.length > 0) {
      arr.push(this.namespace)
    }
    arr.push(this.name)

    return arr.join('-')
  }

  var add_namespace = function (str) {
    var parts = str.split('-'),
      i = parts.length,
      arr = []

    while (i--) {
      if (i !== 0) {
        arr.push(parts[i])
      } else {
        if (this.namespace.length > 0) {
          arr.push(this.namespace, parts[i])
        } else {
          arr.push(parts[i])
        }
      }
    }

    return arr.reverse().join('-')
  }

  // Event binding and data-options updating.

  var bindings = function (method, options) {
    var self = this,
      bind = function () {
        var $this = S(this),
            should_bind_events = !$this.data(self.attr_name(true) + '-init')
        $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)))

        if (should_bind_events) {
            self.events(this)
          }
      }

    if (S(this.scope).is('[' + this.attr_name() + ']')) {
      bind.call(this.scope)
    } else {
      S('[' + this.attr_name() + ']', this.scope).each(bind)
    }
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {
      return this[method].call(this, options)
    }
  }

  var single_image_loaded = function (image, callback) {
    function loaded () {
      callback(image[0])
    }

    function bindLoad () {
      this.one('load', loaded)

      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var src = this.attr('src'),
          param = src.match(/\?/) ? '&' : '?'

        param += 'random=' + (new Date()).getTime()
        this.attr('src', src + param)
      }
    }

    if (!image.attr('src')) {
      loaded()
      return
    }

    if (image[0].complete || image[0].readyState === 4) {
      loaded()
    } else {
      bindLoad.call(image)
    }
  }

  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

  window.matchMedia || (window.matchMedia = (function () {
    "use strict";

      // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media)

      // For those that don't support matchMedium
      if (!styleMedia) {
        var style = document.createElement('style'),
            script = document.getElementsByTagName('script')[0],
            info = null

          style.type = 'text/css'
          style.id = 'matchmediajs-test'

          script.parentNode.insertBefore(style, script)

          // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
          info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle

          styleMedia = {
            matchMedium: function (media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'

                  // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                  if (style.styleSheet) {
                    style.styleSheet.cssText = text
                  } else {
                    style.textContent = text
                  }

                  // Test if media query is true or false
                return info.width === '1px'
              }
          }
      }

    return function (media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
          }
      };
  }()));

  /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */

  (function (jQuery) {
  // requestAnimationFrame polyfill adapted from Erik Möller
  // fixes from Paul Irish and Tino Zijdel
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

    var animating,
      lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      jqueryFxAvailable = typeof jQuery.fx !== 'undefined'

    for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
      requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ]
      cancelAnimationFrame = cancelAnimationFrame ||
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ]
    }

    function raf () {
      if (animating) {
      requestAnimationFrame(raf)

      if (jqueryFxAvailable) {
        jQuery.fx.tick()
      }
    }
    }

    if (requestAnimationFrame) {
    // use rAF
      window.requestAnimationFrame = requestAnimationFrame
      window.cancelAnimationFrame = cancelAnimationFrame

      if (jqueryFxAvailable) {
      jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !animating) {
          animating = true
          raf()
        }
      }

      jQuery.fx.stop = function () {
        animating = false
      }
    }
    } else {
    // polyfill
      window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = window.setTimeout(function () {
          callback(currTime + timeToCall)
        }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }

    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
  }($))

  function removeQuotes (string) {
    if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '')
    }

    return string
  }

  function MediaQuery (selector) {
    this.selector = selector
    this.query = ''
  }

  MediaQuery.prototype.toString = function () {
    return this.query || (this.query = S(this.selector).css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''))
  }

  window.Foundation = {
    name: 'Foundation',

    version: '5.5.3',

    media_queries: {
      'small': new MediaQuery('.foundation-mq-small'),
      'small-only': new MediaQuery('.foundation-mq-small-only'),
      'medium': new MediaQuery('.foundation-mq-medium'),
      'medium-only': new MediaQuery('.foundation-mq-medium-only'),
      'large': new MediaQuery('.foundation-mq-large'),
      'large-only': new MediaQuery('.foundation-mq-large-only'),
      'xlarge': new MediaQuery('.foundation-mq-xlarge'),
      'xlarge-only': new MediaQuery('.foundation-mq-xlarge-only'),
      'xxlarge': new MediaQuery('.foundation-mq-xxlarge')
    },

    stylesheet: $('<style></style>').appendTo('head')[0].sheet,

    global: {
      namespace: undefined
    },

    init: function (scope, libraries, method, options, response) {
      var args = [scope, method, options, response],
        responses = []

      // check RTL
      this.rtl = /rtl/i.test(S('html').attr('dir'))

      // set foundation global scope
      this.scope = scope || this.scope

      this.set_namespace()

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (this.libs.hasOwnProperty(libraries)) {
          responses.push(this.init_lib(libraries, args))
        }
      } else {
        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, libraries))
        }
      }

      S(window).load(function () {
        S(window)
          .trigger('resize.fndtn.clearing')
          .trigger('resize.fndtn.dropdown')
          .trigger('resize.fndtn.equalizer')
          .trigger('resize.fndtn.interchange')
          .trigger('resize.fndtn.joyride')
          .trigger('resize.fndtn.magellan')
          .trigger('resize.fndtn.topbar')
          .trigger('resize.fndtn.slider')
      })

      return scope
    },

    init_lib: function (lib, args) {
      if (this.libs.hasOwnProperty(lib)) {
        this.patch(this.libs[lib])

        if (args && args.hasOwnProperty(lib)) {
          if (typeof this.libs[lib].settings !== 'undefined') {
            $.extend(true, this.libs[lib].settings, args[lib])
          } else if (typeof this.libs[lib].defaults !== 'undefined') {
              $.extend(true, this.libs[lib].defaults, args[lib])
            }
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]])
        }

        args = args instanceof Array ? args : new Array(args)
        return this.libs[lib].init.apply(this.libs[lib], args)
      }

      return function () {}
    },

    patch: function (lib) {
      lib.scope = this.scope
      lib.namespace = this.global.namespace
      lib.rtl = this.rtl
      lib['data_options'] = this.utils.data_options
      lib['attr_name'] = attr_name
      lib['add_namespace'] = add_namespace
      lib['bindings'] = bindings
      lib['S'] = this.utils.S
    },

    inherit: function (scope, methods) {
      var methods_arr = methods.split(' '),
        i = methods_arr.length

      while (i--) {
        if (this.utils.hasOwnProperty(methods_arr[i])) {
          scope[methods_arr[i]] = this.utils[methods_arr[i]]
        }
      }
    },

    set_namespace: function () {
      // Description:
      //    Don't bother reading the namespace out of the meta tag
      //    if the namespace has been set globally in javascript
      //
      // Example:
      //    Foundation.global.namespace = 'my-namespace';
      // or make it an empty string:
      //    Foundation.global.namespace = '';
      //
      //

      // If the namespace has not been set (is undefined), try to read it out of the meta element.
      // Otherwise use the globally defined namespace, even if it's empty ('')
      var namespace = (this.global.namespace === undefined) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace

      // Finally, if the namsepace is either undefined or false, set it to an empty string.
      // Otherwise use the namespace value.
      this.global.namespace = (namespace === undefined || /false/i.test(namespace)) ? '' : namespace
    },

    libs: {},

    // methods that can be inherited in libraries
    utils: {

      // Description:
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById
      //    is not available.
      //
      // Arguments:
      //    Selector (String): CSS selector describing the element(s) to be
      //    returned as a jQuery object.
      //
      //    Scope (String): CSS selector describing the area to be searched. Default
      //    is document.
      //
      // Returns:
      //    Element (jQuery Object): jQuery object containing elements matching the
      //    selector within the scope.
      S: S,

      // Description:
      //    Executes a function a max of once every n milliseconds
      //
      // Arguments:
      //    Func (Function): Function to be throttled.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      // Returns:
      //    Lazy_function (Function): Function with throttling applied.
      throttle: function (func, delay) {
        var timer = null

        return function () {
          var context = this, args = arguments

          if (timer == null) {
            timer = setTimeout(function () {
              func.apply(context, args)
              timer = null
            }, delay)
          }
        }
      },

      // Description:
      //    Executes a function when it stops being invoked for n seconds
      //    Modified version of _.debounce() http://underscorejs.org
      //
      // Arguments:
      //    Func (Function): Function to be debounced.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      //    Immediate (Bool): Whether the function should be called at the beginning
      //    of the delay instead of the end. Default is false.
      //
      // Returns:
      //    Lazy_function (Function): Function with debouncing applied.
      debounce: function (func, delay, immediate) {
        var timeout, result
        return function () {
          var context = this, args = arguments
          var later = function () {
            timeout = null
            if (!immediate) {
              result = func.apply(context, args)
            }
          }
          var callNow = immediate && !timeout
          clearTimeout(timeout)
          timeout = setTimeout(later, delay)
          if (callNow) {
            result = func.apply(context, args)
          }
          return result
        }
      },

      // Description:
      //    Parses data-options attribute
      //
      // Arguments:
      //    El (jQuery Object): Element to be parsed.
      //
      // Returns:
      //    Options (Javascript Object): Contents of the element's data-options
      //    attribute.
      data_options: function (el, data_attr_name) {
        data_attr_name = data_attr_name || 'options'
        var opts = {}, ii, p, opts_arr,
          data_options = function (el) {
            var namespace = Foundation.global.namespace

            if (namespace.length > 0) {
                return el.data(namespace + '-' + data_attr_name)
              }

            return el.data(data_attr_name)
          };

        var cached_options = data_options(el)

        if (typeof cached_options === 'object') {
          return cached_options
        }

        opts_arr = (cached_options || ':').split(';')
        ii = opts_arr.length

        function isNumber (o) {
          return !isNaN(o - 0) && o !== null && o !== '' && o !== false && o !== true
        }

        function trim (str) {
          if (typeof str === 'string') {
            return $.trim(str)
          }
          return str
        }

        while (ii--) {
          p = opts_arr[ii].split(':')
          p = [p[0], p.slice(1).join(':')]

          if (/true/i.test(p[1])) {
            p[1] = true
          }
          if (/false/i.test(p[1])) {
            p[1] = false
          }
          if (isNumber(p[1])) {
            if (p[1].indexOf('.') === -1) {
              p[1] = parseInt(p[1], 10)
            } else {
              p[1] = parseFloat(p[1])
            }
          }

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1])
          }
        }

        return opts
      },

      // Description:
      //    Adds JS-recognizable media queries
      //
      // Arguments:
      //    Media (String): Key string for the media query to be stored as in
      //    Foundation.media_queries
      //
      //    Class (String): Class name for the generated <meta> tag
      register_media: function (media, media_class) {
        if (Foundation.media_queries[media] === undefined) {
          $('head').append('<meta class="' + media_class + '"/>')
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'))
        }
      },

      // Description:
      //    Add custom CSS within a JS-defined media query
      //
      // Arguments:
      //    Rule (String): CSS rule to be appended to the document.
      //
      //    Media (String): Optional media query string for the CSS rule to be
      //    nested under.
      add_custom_rule: function (rule, media) {
        if (media === undefined && Foundation.stylesheet) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length)
        } else {
          var query = Foundation.media_queries[media]

          if (query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' +
              Foundation.media_queries[media] + '{ ' + rule + ' }', Foundation.stylesheet.cssRules.length)
          }
        }
      },

      // Description:
      //    Performs a callback function when an image is fully loaded
      //
      // Arguments:
      //    Image (jQuery Object): Image(s) to check if loaded.
      //
      //    Callback (Function): Function to execute when image is fully loaded.
      image_loaded: function (images, callback) {
        var self = this,
          unloaded = images.length

        function pictures_has_height (images) {
          var pictures_number = images.length

          for (var i = pictures_number - 1; i >= 0; i--) {
            if (images.attr('height') === undefined) {
              return false
            };
          };

          return true
        }

        if (unloaded === 0 || pictures_has_height(images)) {
          callback(images)
        }

        images.each(function () {
          single_image_loaded(self.S(this), function () {
            unloaded -= 1
            if (unloaded === 0) {
              callback(images)
            }
          })
        })
      },

      // Description:
      //    Returns a random, alphanumeric string
      //
      // Arguments:
      //    Length (Integer): Length of string to be generated. Defaults to random
      //    integer.
      //
      // Returns:
      //    Rand (String): Pseudo-random, alphanumeric string.
      random_str: function () {
        if (!this.fidx) {
          this.fidx = 0
        }
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date()).toString(36)].join('-')

        return this.prefix + (this.fidx++).toString(36)
      },

      // Description:
      //    Helper for window.matchMedia
      //
      // Arguments:
      //    mq (String): Media query
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not
      match: function (mq) {
        return window.matchMedia(mq).matches
      },

      // Description:
      //    Helpers for checking Foundation default media queries with JS
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not

      is_small_up: function () {
        return this.match(Foundation.media_queries.small)
      },

      is_medium_up: function () {
        return this.match(Foundation.media_queries.medium)
      },

      is_large_up: function () {
        return this.match(Foundation.media_queries.large)
      },

      is_xlarge_up: function () {
        return this.match(Foundation.media_queries.xlarge)
      },

      is_xxlarge_up: function () {
        return this.match(Foundation.media_queries.xxlarge)
      },

      is_small_only: function () {
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
      },

      is_medium_only: function () {
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
      },

      is_large_only: function () {
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
      },

      is_xlarge_only: function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
      },

      is_xxlarge_only: function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
      }
    }
  }

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0)

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args))
      return this
    })
  }

}(jQuery, window, window.document))

;(function ($, window, document, undefined) {
  'use strict'

  var openModals = []

  Foundation.libs.reveal = {
    name: 'reveal',

    version: '5.5.3',

    locked: false,

    settings: {
      animation: 'fadeAndPop',
      animation_speed: 250,
      close_on_background_click: true,
      close_on_esc: true,
      dismiss_modal_class: 'close-reveal-modal',
      multiple_opened: false,
      bg_class: 'reveal-modal-bg',
      root_element: 'body',
      open: function () {},
      opened: function () {},
      close: function () {},
      closed: function () {},
      on_ajax_error: $.noop,
      bg: $('.reveal-modal-bg'),
      css: {
        open: {
          'opacity': 0,
          'visibility': 'visible',
          'display': 'block'
        },
        close: {
          'opacity': 1,
          'visibility': 'hidden',
          'display': 'none'
        }
      }
    },

    init: function (scope, method, options) {
      $.extend(true, this.settings, method, options)
      this.bindings(method, options)
    },

    events: function (scope) {
      var self = this,
        S = self.S

      S(this.scope)
        .off('.reveal')
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (e) {
          e.preventDefault()

          if (!self.locked) {
            var element = S(this),
              ajax = element.data(self.data_attr('reveal-ajax')),
              replaceContentSel = element.data(self.data_attr('reveal-replace-content'))

            self.locked = true

            if (typeof ajax === 'undefined') {
              self.open.call(self, element)
            } else {
              var url = ajax === true ? element.attr('href') : ajax
              self.open.call(self, element, {url: url}, { replaceContentSel: replaceContentSel })
            }
          }
        })

      S(document)
        .on('click.fndtn.reveal', this.close_targets(), function (e) {
          e.preventDefault()
          if (!self.locked) {
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init') || self.settings,
              bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0]

            if (bg_clicked) {
              if (settings.close_on_background_click) {
                e.stopPropagation()
              } else {
                return
              }
            }

            self.locked = true
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open:not(.toback)') : S(this).closest('[' + self.attr_name() + ']'))
          }
        })

      if (S('[' + self.attr_name() + ']', this.scope).length > 0) {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', this.settings.open)
          .on('opened.fndtn.reveal', this.settings.opened)
          .on('opened.fndtn.reveal', this.open_video)
          .on('close.fndtn.reveal', this.settings.close)
          .on('closed.fndtn.reveal', this.settings.closed)
          .on('closed.fndtn.reveal', this.close_video)
      } else {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video)
      }

      return true
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_on: function (scope) {
      var self = this

      // PATCH #1: fixing multiple keyup event trigger from single key press
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function (event) {
        var open_modal = self.S('[' + self.attr_name() + '].open'),
          settings = open_modal.data(self.attr_name(true) + '-init') || self.settings
        // PATCH #2: making sure that the close event can be called only while unlocked,
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.
        if (settings && event.which === 27 && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal)
        }
      })

      return true
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_off: function (scope) {
      this.S('body').off('keyup.fndtn.reveal')
      return true
    },

    open: function (target, ajax_settings) {
      var self = this,
        modal

      if (target) {
        if (typeof target.selector !== 'undefined') {
          // Find the named node; only use the first one found, since the rest of the code assumes there's only one node
          modal = self.S('#' + target.data(self.data_attr('reveal-id'))).first()
        } else {
          modal = self.S(this.scope)

          ajax_settings = target
        }
      } else {
        modal = self.S(this.scope)
      }

      var settings = modal.data(self.attr_name(true) + '-init')
      settings = settings || this.settings

      if (modal.hasClass('open') && target !== undefined && target.attr('data-reveal-id') == modal.attr('id')) {
        return self.close(modal)
      }

      if (!modal.hasClass('open')) {
        var open_modal = self.S('[' + self.attr_name() + '].open')

        if (typeof modal.data('css-top') === 'undefined') {
          modal.data('css-top', parseInt(modal.css('top'), 10))
            .data('offset', this.cache_offset(modal))
        }

        modal.attr('tabindex', '0').attr('aria-hidden', 'false')

        this.key_up_on(modal)    // PATCH #3: turning on key up capture only when a reveal window is open

        // Prevent namespace event from triggering twice
        modal.on('open.fndtn.reveal', function (e) {
          if (e.namespace !== 'fndtn.reveal') return
        })

        modal.on('open.fndtn.reveal').trigger('open.fndtn.reveal')

        if (open_modal.length < 1) {
          this.toggle_bg(modal, true)
        }

        if (typeof ajax_settings === 'string') {
          ajax_settings = {
            url: ajax_settings
          }
        }

        var openModal = function () {
          if (open_modal.length > 0) {
            if (settings.multiple_opened) {
              self.to_back(open_modal)
            } else {
              self.hide(open_modal, settings.css.close)
            }
          }

          // bl: add the open_modal that isn't already in the background to the openModals array
          if (settings.multiple_opened) {
            openModals.push(modal)
          }

          self.show(modal, settings.css.open)
        }

        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
          openModal()
        } else {
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null
          $.extend(ajax_settings, {
            success: function (data, textStatus, jqXHR) {
              if ($.isFunction(old_success)) {
                var result = old_success(data, textStatus, jqXHR)
                if (typeof result === 'string') {
                  data = result
                }
              }

              if (typeof options !== 'undefined' && typeof options.replaceContentSel !== 'undefined') {
                modal.find(options.replaceContentSel).html(data)
              } else {
                modal.html(data)
              }

              self.S(modal).foundation('section', 'reflow')
              self.S(modal).children().foundation()

              openModal()
            }
          })

          // check for if user initalized with error callback
          if (settings.on_ajax_error !== $.noop) {
            $.extend(ajax_settings, {
              error: settings.on_ajax_error
            })
          }

          $.ajax(ajax_settings)
        }
      }
      self.S(window).trigger('resize')
    },

    close: function (modal) {
      var modal = modal && modal.length ? modal : this.S(this.scope),
        open_modals = this.S('[' + this.attr_name() + '].open'),
        settings = modal.data(this.attr_name(true) + '-init') || this.settings,
        self = this

      if (open_modals.length > 0) {
        modal.removeAttr('tabindex', '0').attr('aria-hidden', 'true')

        this.locked = true
        this.key_up_off(modal)   // PATCH #3: turning on key up capture only when a reveal window is open

        modal.trigger('close.fndtn.reveal')

        if ((settings.multiple_opened && open_modals.length === 1) || !settings.multiple_opened || modal.length > 1) {
          self.toggle_bg(modal, false)
          self.to_front(modal)
        }

        if (settings.multiple_opened) {
          var isCurrent = modal.is(':not(.toback)')
          self.hide(modal, settings.css.close, settings)
          if (isCurrent) {
            // remove the last modal since it is now closed
            openModals.pop()
          } else {
            // if this isn't the current modal, then find it in the array and remove it
            openModals = $.grep(openModals, function (elt) {
              var isThis = elt[0] === modal[0]
              if (isThis) {
                // since it's not currently in the front, put it in the front now that it is hidden
                // so that if it's re-opened, it won't be .toback
                self.to_front(modal)
              }
              return !isThis
            })
          }
          // finally, show the next modal in the stack, if there is one
          if (openModals.length > 0) {
            self.to_front(openModals[openModals.length - 1])
          }
        } else {
          self.hide(open_modals, settings.css.close, settings)
        }
      }
    },

    close_targets: function () {
      var base = '.' + this.settings.dismiss_modal_class

      if (this.settings.close_on_background_click) {
        return base + ', .' + this.settings.bg_class
      }

      return base
    },

    toggle_bg: function (modal, state) {
      if (this.S('.' + this.settings.bg_class).length === 0) {
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})
          .appendTo('body').hide()
      }

      var visible = this.settings.bg.filter(':visible').length > 0
      if (state != visible) {
        if (state == undefined ? visible : !state) {
          this.hide(this.settings.bg)
        } else {
          this.show(this.settings.bg)
        }
      }
    },

    show: function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,
          root_element = settings.root_element,
          context = this

        if (el.parent(root_element).length === 0) {
          var placeholder = el.wrap('<div style="display: none;" />').parent()

          el.on('closed.fndtn.reveal.wrapped', function () {
            el.detach().appendTo(placeholder)
            el.unwrap().unbind('closed.fndtn.reveal.wrapped')
          })

          el.detach().appendTo(root_element)
        }

        var animData = getAnimationData(settings.animation)
        if (!animData.animate) {
          this.locked = false
        }
        if (animData.pop) {
          css.top = $(window).scrollTop() - el.data('offset') + 'px'
          var end_css = {
            top: $(window).scrollTop() + el.data('css-top') + 'px',
            opacity: 1
          }

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                context.locked = false
                el.trigger('opened.fndtn.reveal')
              })
              .addClass('open')
          }, settings.animation_speed / 2)
        }

        css.top = $(window).scrollTop() + el.data('css-top') + 'px'

        if (animData.fade) {
          var end_css = {opacity: 1}

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                context.locked = false
                el.trigger('opened.fndtn.reveal')
              })
              .addClass('open')
          }, settings.animation_speed / 2)
        }

        return el.css(css).show().css({opacity: 1}).addClass('open').trigger('opened.fndtn.reveal')
      }

      var settings = this.settings

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeIn(settings.animation_speed / 2)
      }

      this.locked = false

      return el.show()
    },

    to_back: function (el) {
      el.addClass('toback')
    },

    to_front: function (el) {
      el.removeClass('toback')
    },

    hide: function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init'),
          context = this
        settings = settings || this.settings

        var animData = getAnimationData(settings.animation)
        if (!animData.animate) {
          this.locked = false
        }
        if (animData.pop) {
          var end_css = {
            top: -$(window).scrollTop() - el.data('offset') + 'px',
            opacity: 0
          }

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                context.locked = false
                el.css(css).trigger('closed.fndtn.reveal')
              })
              .removeClass('open')
          }, settings.animation_speed / 2)
        }

        if (animData.fade) {
          var end_css = {opacity: 0}

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                context.locked = false
                el.css(css).trigger('closed.fndtn.reveal')
              })
              .removeClass('open')
          }, settings.animation_speed / 2)
        }

        return el.hide().css(css).removeClass('open').trigger('closed.fndtn.reveal')
      }

      var settings = this.settings

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeOut(settings.animation_speed / 2)
      }

      return el.hide()
    },

    close_video: function (e) {
      var video = $('.flex-video', e.target),
        iframe = $('iframe', video)

      if (iframe.length > 0) {
        iframe.attr('data-src', iframe[0].src)
        iframe.attr('src', iframe.attr('src'))
        video.hide()
      }
    },

    open_video: function (e) {
      var video = $('.flex-video', e.target),
        iframe = video.find('iframe')

      if (iframe.length > 0) {
        var data_src = iframe.attr('data-src')
        if (typeof data_src === 'string') {
          iframe[0].src = iframe.attr('data-src')
        } else {
          var src = iframe[0].src
          iframe[0].src = undefined
          iframe[0].src = src
        }
        video.show()
      }
    },

    data_attr: function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str
      }

      return str
    },

    cache_offset: function (modal) {
      var offset = modal.show().height() + parseInt(modal.css('top'), 10) + modal.scrollY

      modal.hide()

      return offset
    },

    off: function () {
      $(this.scope).off('.fndtn.reveal')
    },

    reflow: function () {}
  }

  /*
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}
   */
  function getAnimationData (str) {
    var fade = /fade/i.test(str)
    var pop = /pop/i.test(str)
    return {
      animate: fade || pop,
      pop: pop,
      fade: fade
    }
  }
}(jQuery, window, window.document))

/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function () {
	// dummy
}

Base.extend = function (_instance, _static) { // subclass
  'use strict';

  var extend = Base.prototype.extend

	// build the prototype
  Base._prototyping = true

  var proto = new this()

  extend.call(proto, _instance)

  proto.base = function () {
	// call this method from any other method to invoke that method's ancestor
}

  delete Base._prototyping

	// create the wrapper for the constructor function
	// var constructor = proto.constructor.valueOf(); //-dean
  var constructor = proto.constructor
  var klass = proto.constructor = function () {
  if (!Base._prototyping) {
    if (this._constructing || this.constructor == klass) { // instantiation
    this._constructing = true
    constructor.apply(this, arguments)
    delete this._constructing
  } else if (arguments[0] !== null) { // casting
  return (arguments[0].extend || extend).call(arguments[0], proto)
}
  }
}

	// build the class interface
  klass.ancestor = this
  klass.extend = this.extend
  klass.forEach = this.forEach
  klass.implement = this.implement
  klass.prototype = proto
  klass.toString = this.toString
  klass.valueOf = function (type) {
		// return (type == "object") ? klass : constructor; //-dean
  return (type == 'object') ? klass : constructor.valueOf()
};
  extend.call(klass, _static)
	// class initialisation
  if (typeof klass.init === 'function') klass.init()
  return klass
}

Base.prototype = {
  extend: function (source, value) {
    if (arguments.length > 1) { // extending with a name/value pair
    var ancestor = this[source]
    if (ancestor && (typeof value === 'function') && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
  var method = value.valueOf()
				// override
  value = function () {
  var previous = this.base || Base.prototype.base
  this.base = ancestor
  var returnValue = method.apply(this, arguments)
  this.base = previous
  return returnValue
};
				// point to the underlying method
  value.valueOf = function (type) {
    return (type == 'object') ? value : method
  };
  value.toString = Base.toString
}
    this[source] = value
  } else if (source) { // extending with an object literal
  var extend = Base.prototype.extend
			// if this object has a customised extend method then use it
  if (!Base._prototyping && typeof this !== 'function') {
  extend = this.extend || extend
}
  var proto = {toSource: null}
			// do the "toString" and other methods manually
  var hidden = ['constructor', 'toString', 'valueOf']
			// if we are prototyping then include the constructor
  var i = Base._prototyping ? 0 : 1
  while (key = hidden[i++]) {
  if (source[key] != proto[key]) {
    extend.call(this, key, source[key])
				}
}
			// copy each of the source object's properties to this object
  for (var key in source) {
    if (!proto[key]) extend.call(this, key, source[key])
  }
}
    return this
  }
}

// initialise
Base = Base.extend({
  constructor: function () {
    this.extend(arguments[0])
  }
}, {
  ancestor: Object,
  version: '1.1',

  forEach: function (object, block, context) {
    for (var key in object) {
    if (this.prototype[key] === undefined) {
    block.call(context, object[key], key, object)
  }
  }
  },

  implement: function () {
    for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'function') {
				// if it's a function, call it
    arguments[i](this.prototype)
  } else {
				// add the interface using the extend method
    this.prototype.extend(arguments[i])
  }
  }
    return this
  },

  toString: function () {
    return String(this.valueOf())
  }
})
/* jshint smarttabs:true */

var FlipClock;

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  'use strict';

	/**
	 * FlipFlock Helper
	 *
	 * @param  object  A jQuery object or CSS select
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default
	 */

  FlipClock = function (obj, digit, options) {
    if (digit instanceof Object && digit instanceof Date === false) {
    options = digit
    digit = 0
  }

    return new FlipClock.Factory(obj, digit, options)
  };

	/**
	 * The global FlipClock.Lang object
	 */

  FlipClock.Lang = {}

	/**
	 * The Base FlipClock class is used to extend all other FlipFlock
	 * classes. It handles the callbacks and the basic setters/getters
	 *
	 * @param 	object  An object of the default properties
	 * @param 	object  An object of properties to override the default
	 */

  FlipClock.Base = Base.extend({

		/**
		 * Build Date
		 */

  buildDate: '2014-10-06',

		/**
		 * Version
		 */

  version: '0.7.5',

		/**
		 * Sets the default options
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */

  constructor: function (_default, options) {
    if (typeof _default !== 'object') {
    _default = {}
  }
    if (typeof options !== 'object') {
    options = {}
  }
    this.setOptions($.extend(true, {}, _default, options))
  },

		/**
		 * Delegates the callback to the defined method
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */

  callback: function (method) {
		 	if (typeof method === 'function') {
   var args = []

   for (var x = 1; x <= arguments.length; x++) {
  if (arguments[x]) {
    args.push(arguments[x])
  }
}

   method.apply(this, args)
 }
  },

		/**
		 * Log a string into the console if it exists
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */

  log: function (str) {
    if (window.console && console.log) {
    console.log(str)
  }
  },

		/**
		 * Get an single option value. Returns false if option does not exist
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */

  getOption: function (index) {
    if (this[index]) {
    return this[index]
  }
    return false
  },

		/**
		 * Get all options
		 *
		 * @return	bool
		 */

  getOptions: function () {
    return this
  },

		/**
		 * Set a single option value
		 *
		 * @param 	string 	The name of the option
		 * @param 	mixed 	The value of the option
		 */

  setOption: function (index, value) {
    this[index] = value
  },

		/**
		 * Set a multiple options by passing a JSON object
		 *
		 * @param 	object 	The object with the options
		 * @param 	mixed 	The value of the option
		 */

  setOptions: function (options) {
    for (var key in options) {
	  			if (typeof options[key] !== 'undefined') {
		  			this.setOption(key, options[key])
		  		}
		  	}
  }

})
}(jQuery));

/* jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  'use strict';

	/**
	 * The FlipClock Face class is the base class in which to extend
	 * all other FlockClock.Face classes.
	 *
	 * @param 	object  The parent FlipClock.Factory object
	 * @param 	object  An object of properties to override the default
	 */

  FlipClock.Face = FlipClock.Base.extend({

		/**
		 * Sets whether or not the clock should start upon instantiation
		 */

    autoStart: true,

		/**
		 * An array of jQuery objects used for the dividers (the colons)
		 */

    dividers: [],

		/**
		 * An array of FlipClock.List objects
		 */

    factory: false,

		/**
		 * An array of FlipClock.List objects
		 */

    lists: [],

		/**
		 * Constructor
		 *
		 * @param 	object  The parent FlipClock.Factory object
		 * @param 	object  An object of properties to override the default
		 */

    constructor: function (factory, options) {
    this.dividers = []
    this.lists = []
    this.base(options)
    this.factory = factory
  },

		/**
		 * Build the clock face
		 */

    build: function () {
    if (this.autoStart) {
    this.start()
  }
  },

		/**
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param	mixed 	The divider label text
		 * @param	mixed	Set true to exclude the dots in the divider.
		 *					If not set, is false.
		 */

    createDivider: function (label, css, excludeDots) {
    if (typeof css === 'boolean' || !css) {
    excludeDots = css
    css = label
  }

    var dots = [
    '<span class="' + this.factory.classes.dot + ' top"></span>',
    '<span class="' + this.factory.classes.dot + ' bottom"></span>'
  ].join('')

    if (excludeDots) {
  dots = ''
}

    label = this.factory.localize(label)

    var html = [
  '<span class="' + this.factory.classes.divider + ' ' + (css || '').toLowerCase() + '">',
  '<span class="' + this.factory.classes.label + '">' + (label || '') + '</span>',
  dots,
  '</span>'
]

  var $html = $(html.join(''))

    this.dividers.push($html)

    return $html
  },

		/**
		 * Creates a FlipClock.List object and appends it to the DOM
		 *
		 * @param	mixed 	The digit to select in the list
		 * @param	object  An object to override the default properties
		 */

    createList: function (digit, options) {
    if (typeof digit === 'object') {
    options = digit
    digit = 0
  }

    var obj = new FlipClock.List(this.factory, digit, options)

    this.lists.push(obj)

    return obj
  },

		/**
		 * Triggers when the clock is reset
		 */

    reset: function () {
    this.factory.time = new FlipClock.Time(
				this.factor,
				this.factory.original ? Math.round(this.factory.original) : 0,
    {
      minimumDigits: this.factory.minimumDigits
    }
			)

    this.flip(this.factory.original, false)
  },

		/**
		 * Append a newly created list to the clock
		 */

    appendDigitToClock: function (obj) {
    obj.$el.append(false)
  },

		/**
		 * Add a digit to the clock face
		 */

    addDigit: function (digit) {
    var obj = this.createList(digit, {
    classes: {
    active: this.factory.classes.active,
    before: this.factory.classes.before,
    flip: this.factory.classes.flip
  }
  })

    this.appendDigitToClock(obj)
  },

		/**
		 * Triggers when the clock is started
		 */

    start: function () {},

		/**
		 * Triggers when the time on the clock stops
		 */

    stop: function () {},

		/**
		 * Auto increments/decrements the value of the clock face
		 */

    autoIncrement: function () {
    if (!this.factory.countdown) {
    this.increment()
  }  else {
    this.decrement()
  }
  },

		/**
		 * Increments the value of the clock face
		 */

    increment: function () {
    this.factory.time.addSecond()
  },

		/**
		 * Decrements the value of the clock face
		 */

    decrement: function () {
    if (this.factory.time.getTimeSeconds() == 0) {
	        	this.factory.stop()
  }			else {
    this.factory.time.subSecond()
  }
  },

		/**
		 * Triggers when the numbers on the clock flip
		 */

    flip: function (time, doNotAddPlayClass) {
    var t = this

    $.each(time, function (i, digit) {
  var list = t.lists[i]

  if (list) {
  if (!doNotAddPlayClass && digit != list.digit) {
    list.play()
  }

  list.select(digit)
}
  else {
  t.addDigit(digit)
}
})
  }

  })
}(jQuery));

/* jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  'use strict';

	/**
	 * The FlipClock Factory class is used to build the clock and manage
	 * all the public methods.
	 *
	 * @param 	object  A jQuery object or CSS selector used to fetch
	 				    the wrapping DOM nodes
	 * @param 	mixed   This is the digit used to set the clock. If an
	 				    object is passed, 0 will be used.
	 * @param 	object  An object of properties to override the default
	 */

  FlipClock.Factory = FlipClock.Base.extend({

		/**
		 * The clock's animation rate.
		 *
		 * Note, currently this property doesn't do anything.
		 * This property is here to be used in the future to
		 * programmaticaly set the clock's animation speed
		 */

    animationRate: 1000,

		/**
		 * Auto start the clock on page load (True|False)
		 */

    autoStart: true,

		/**
		 * The callback methods
		 */

    callbacks: {
    destroy: false,
    create: false,
    init: false,
    interval: false,
    start: false,
    stop: false,
    reset: false
  },

		/**
		 * The CSS classes
		 */

    classes: {
    active: 'flip-clock-active',
    before: 'flip-clock-before',
    divider: 'flip-clock-divider',
    dot: 'flip-clock-dot',
    label: 'flip-clock-label',
    flip: 'flip',
    play: 'play',
    wrapper: 'flip-clock-wrapper'
  },

		/**
		 * The name of the clock face class in use
		 */

    clockFace: 'HourlyCounter',

		/**
		 * The name of the clock face class in use
		 */

    countdown: false,

		/**
		 * The name of the default clock face class to use if the defined
		 * clockFace variable is not a valid FlipClock.Face object
		 */

    defaultClockFace: 'HourlyCounter',

		/**
		 * The default language
		 */

    defaultLanguage: 'english',

		/**
		 * The jQuery object
		 */

    $el: false,

		/**
		 * The FlipClock.Face object
		 */

    face: true,

		/**
		 * The language object after it has been loaded
		 */

    lang: false,

		/**
		 * The language being used to display labels (string)
		 */

    language: 'english',

		/**
		 * The minimum digits the clock must have
		 */

    minimumDigits: 0,

		/**
		 * The original starting value of the clock. Used for the reset method.
		 */

    original: false,

		/**
		 * Is the clock running? (True|False)
		 */

    running: false,

		/**
		 * The FlipClock.Time object
		 */

    time: false,

		/**
		 * The FlipClock.Timer object
		 */

    timer: false,

		/**
		 * The jQuery object (depcrecated)
		 */

    $wrapper: false,

		/**
		 * Constructor
		 *
		 * @param   object  The wrapping jQuery object
		 * @param	object  Number of seconds used to start the clock
		 * @param	object 	An object override options
		 */

    constructor: function (obj, digit, options) {
    if (!options) {
  options = {}
}

    this.lists = []
    this.running = false
    this.base(options)

    this.$el = $(obj).addClass(this.classes.wrapper)

			// Depcrated support of the $wrapper property.
    this.$wrapper = this.$el

    this.original = (digit instanceof Date) ? digit : (digit ? Math.round(digit) : 0)

    this.time = new FlipClock.Time(this, this.original, {
  minimumDigits: this.minimumDigits,
  animationRate: this.animationRate
})

    this.timer = new FlipClock.Timer(this, options)

    this.loadLanguage(this.language)

    this.loadClockFace(this.clockFace, options)

    if (this.autoStart) {
  this.start()
}
},

		/**
		 * Load the FlipClock.Face object
		 *
		 * @param	object  The name of the FlickClock.Face class
		 * @param	object 	An object override options
		 */

    loadClockFace: function (name, options) {
    var face, suffix = 'Face', hasStopped = false

    name = name.ucfirst() + suffix

  if (this.face.stop) {
    this.stop()
    hasStopped = true
  }

    this.$el.html('')

    this.time.minimumDigits = this.minimumDigits

    if (FlipClock[name]) {
  face = new FlipClock[name](this, options)
}  else {
  face = new FlipClock[this.defaultClockFace + suffix](this, options)
}

    face.build()

    this.face = face

    if (hasStopped) {
    this.start()
  }

    return this.face
  },

		/**
		 * Load the FlipClock.Lang object
		 *
		 * @param	object  The name of the language to load
		 */

    loadLanguage: function (name) {
    var lang

    if (FlipClock.Lang[name.ucfirst()]) {
  lang = FlipClock.Lang[name.ucfirst()]
}  else if (FlipClock.Lang[name]) {
    lang = FlipClock.Lang[name]
  }  else {
    lang = FlipClock.Lang[this.defaultLanguage]
  }

    return this.lang = lang
  },

		/**
		 * Localize strings into various languages
		 *
		 * @param	string  The index of the localized string
		 * @param	object  Optionally pass a lang object
		 */

    localize: function (index, obj) {
    var lang = this.lang

    if (!index) {
  return null
}

    var lindex = index.toLowerCase()

    if (typeof obj === 'object') {
  lang = obj
}

    if (lang && lang[lindex]) {
    return lang[lindex]
  }

    return index
  },

		/**
		 * Starts the clock
		 */

    start: function (callback) {
    var t = this

    if (!t.running && (!t.countdown || t.countdown && t.time.time > 0)) {
  t.face.start(t.time)
  t.timer.start(function () {
  t.flip()

  if (typeof callback === 'function') {
  callback()
}
})
}  else {
  t.log('Trying to start timer when countdown already at 0')
}
  },

		/**
		 * Stops the clock
		 */

    stop: function (callback) {
    this.face.stop()
    this.timer.stop(callback)

    for (var x in this.lists) {
  if (this.lists.hasOwnProperty(x)) {
    this.lists[x].stop()
  }
}
  },

		/**
		 * Reset the clock
		 */

    reset: function (callback) {
    this.timer.reset(callback)
    this.face.reset()
  },

		/**
		 * Sets the clock time
		 */

    setTime: function (time) {
    this.time.time = time
    this.flip(true)
  },

		/**
		 * Get the clock time
		 *
		 * @return  object  Returns a FlipClock.Time object
		 */

    getTime: function (time) {
    return this.time
  },

		/**
		 * Changes the increment of time to up or down (add/sub)
		 */

    setCountdown: function (value) {
    var running = this.running

    this.countdown = !!value

  if (running) {
    this.stop()
    this.start()
  }
  },

		/**
		 * Flip the digits on the clock
		 *
		 * @param  array  An array of digits
		 */
    flip: function (doNotAddPlayClass) {
    this.face.flip(false, doNotAddPlayClass)
  }

  })
}(jQuery));

/* jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  'use strict';

	/**
	 * The FlipClock List class is used to build the list used to create
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific digit.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an
	 *				    object is passed, 0 will be used.
	 * @param 	object  An object of properties to override the default
	 */

  FlipClock.List = FlipClock.Base.extend({

		/**
		 * The digit (0-9)
		 */

    digit: 0,

		/**
		 * The CSS classes
		 */

    classes: {
    active: 'flip-clock-active',
    before: 'flip-clock-before',
    flip: 'flip'
  },

		/**
		 * The parent FlipClock.Factory object
		 */

    factory: false,

		/**
		 * The jQuery object
		 */

    $el: false,

		/**
		 * The jQuery object (deprecated)
		 */

    $obj: false,

		/**
		 * The items in the list
		 */

    items: [],

		/**
		 * The last digit
		 */

    lastDigit: 0,

		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties
		 */

    constructor: function (factory, digit, options) {
    this.factory = factory
    this.digit = digit
    this.lastDigit = digit
    this.$el = this.createList()

			// Depcrated support of the $obj property.
    this.$obj = this.$el

    if (digit > 0) {
  this.select(digit)
}

    this.factory.$el.append(this.$el)
  },

		/**
		 * Select the digit in the list
		 *
		 * @param  int  A digit 0-9
		 */

    select: function (digit) {
    if (typeof digit === 'undefined') {
    digit = this.digit
  }  else {
    this.digit = digit
  }

    if (this.digit != this.lastDigit) {
    var $delete = this.$el.find('.' + this.classes.before).removeClass(this.classes.before)

    this.$el.find('.' + this.classes.active).removeClass(this.classes.active)
													  .addClass(this.classes.before)

    this.appendListItem(this.classes.active, this.digit)

    $delete.remove()

    this.lastDigit = this.digit
  }
  },

		/**
		 * Adds the play class to the DOM object
		 */

    play: function () {
    this.$el.addClass(this.factory.classes.play)
  },

		/**
		 * Removes the play class to the DOM object
		 */

    stop: function () {
    var t = this

    setTimeout(function () {
  t.$el.removeClass(t.factory.classes.play)
}, this.factory.timer.interval)
  },

		/**
		 * Creates the list item HTML and returns as a string
		 */

    createListItem: function (css, value) {
    return [
  '<li class="' + (css || '') + '">',
  '<a href="#">',
  '<div class="up">',
  '<div class="shadow"></div>',
  '<div class="inn">' + (value || '') + '</div>',
  '</div>',
  '<div class="down">',
  '<div class="shadow"></div>',
  '<div class="inn">' + (value || '') + '</div>',
  '</div>',
  '</a>',
  '</li>'
].join('')
  },

		/**
		 * Append the list item to the parent DOM node
		 */

    appendListItem: function (css, value) {
    var html = this.createListItem(css, value)

    this.$el.append(html)
  },

		/**
		 * Create the list of digits and appends it to the DOM object
		 */

    createList: function () {
    var lastDigit = this.getPrevDigit() ? this.getPrevDigit() : this.digit

    var html = $([
  '<ul class="' + this.classes.flip + ' ' + (this.factory.running ? this.factory.classes.play : '') + '">',
  this.createListItem(this.classes.before, lastDigit),
  this.createListItem(this.classes.active, this.digit),
  '</ul>'
].join(''))

    return html
  },

    getNextDigit: function () {
    return this.digit == 9 ? 0 : this.digit + 1
  },

    getPrevDigit: function () {
    return this.digit == 0 ? 9 : this.digit - 1
  }

  })
}(jQuery));

/* jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  'use strict';

	/**
	 * Capitalize the first letter in a string
	 *
	 * @return string
	 */

  String.prototype.ucfirst = function () {
    return this.substr(0, 1).toUpperCase() + this.substr(1)
  };

	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default
	 */

  $.fn.FlipClock = function (digit, options) {
    return new FlipClock($(this), digit, options)
  };

	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default
	 */

  $.fn.flipClock = function (digit, options) {
    return $.fn.FlipClock(digit, options)
  };
}(jQuery));

/* jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  'use strict';

	/**
	 * The FlipClock Time class is used to manage all the time
	 * calculations.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an
	 *				    object is passed, 0 will be used.
	 * @param 	object  An object of properties to override the default
	 */

  FlipClock.Time = FlipClock.Base.extend({

		/**
		 * The time (in seconds) or a date object
		 */

    time: 0,

		/**
		 * The parent FlipClock.Factory object
		 */

    factory: false,

		/**
		 * The minimum number of digits the clock face must have
		 */

    minimumDigits: 0,

		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties
		 */

    constructor: function (factory, time, options) {
    if (typeof options !== 'object') {
    options = {}
  }

    if (!options.minimumDigits) {
    options.minimumDigits = factory.minimumDigits
  }

    this.base(options)
    this.factory = factory

    if (time) {
  this.time = time
}
  },

		/**
		 * Convert a string or integer to an array of digits
		 *
		 * @param   mixed  String or Integer of digits
		 * @return  array  An array of digits
		 */

    convertDigitsToArray: function (str) {
    var data = []

    str = str.toString()

    for (var x = 0; x < str.length; x++) {
  if (str[x].match(/^\d*$/g)) {
    data.push(str[x])
  }
}

    return data
  },

		/**
		 * Get a specific digit from the time integer
		 *
		 * @param   int    The specific digit to select from the time
		 * @return  mixed  Returns FALSE if no digit is found, otherwise
		 *				   the method returns the defined digit
		 */

    digit: function (i) {
    var timeStr = this.toString()
    var length = timeStr.length

    if (timeStr[length - i])	 {
  return timeStr[length - i]
}

    return false
  },

		/**
		 * Formats any array of digits into a valid array of digits
		 *
		 * @param   mixed  An array of digits
		 * @return  array  An array of digits
		 */

    digitize: function (obj) {
    var data = []

    $.each(obj, function (i, value) {
  value = value.toString()

  if (value.length == 1) {
  value = '0' + value
}

  for (var x = 0; x < value.length; x++) {
    data.push(value.charAt(x))
  }
})

    if (data.length > this.minimumDigits) {
  this.minimumDigits = data.length
}

    if (this.minimumDigits > data.length) {
    for (var x = data.length; x < this.minimumDigits; x++) {
    data.unshift('0')
  }
  }

    return data
  },

		/**
		 * Gets a new Date object for the current time
		 *
		 * @return  array  Returns a Date object
		 */

    getDateObject: function () {
    if (this.time instanceof Date) {
    return this.time
  }

    return new Date((new Date()).getTime() + this.getTimeSeconds() * 1000)
  },

		/**
		 * Gets a digitized daily counter
		 *
		 * @return  object  Returns a digitized object
		 */

    getDayCounter: function (includeSeconds) {
    var digits = [
    this.getDays(),
    this.getHours(true),
    this.getMinutes(true)
  ];

    if (includeSeconds) {
    digits.push(this.getSeconds(true))
  }

    return this.digitize(digits)
  },

		/**
		 * Gets number of days
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */

    getDays: function (mod) {
    var days = this.getTimeSeconds() / 60 / 60 / 24

    if (mod) {
  days = days % 7
}

    return Math.floor(days)
  },

		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */

    getHourCounter: function () {
    var obj = this.digitize([
    this.getHours(),
    this.getMinutes(true),
    this.getSeconds(true)
  ])

    return obj
  },

		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */

    getHourly: function () {
    return this.getHourCounter()
  },

		/**
		 * Gets number of hours
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */

    getHours: function (mod) {
    var hours = this.getTimeSeconds() / 60 / 60

    if (mod) {
  hours = hours % 24
}

    return Math.floor(hours)
  },

		/**
		 * Gets the twenty-four hour time
		 *
		 * @return  object  returns a digitized object
		 */

    getMilitaryTime: function (date, showSeconds) {
    if (typeof showSeconds === 'undefined') {
    showSeconds = true
  }

    if (!date) {
    date = this.getDateObject()
  }

    var data = [
    date.getHours(),
    date.getMinutes()
  ];

    if (showSeconds === true) {
    data.push(date.getSeconds())
  }

    return this.digitize(data)
  },

		/**
		 * Gets number of minutes
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */

    getMinutes: function (mod) {
    var minutes = this.getTimeSeconds() / 60

    if (mod) {
  minutes = minutes % 60
}

    return Math.floor(minutes)
  },

		/**
		 * Gets a minute breakdown
		 */

    getMinuteCounter: function () {
    var obj = this.digitize([
    this.getMinutes(),
    this.getSeconds(true)
  ])

    return obj
  },

		/**
		 * Gets time count in seconds regardless of if targetting date or not.
		 *
		 * @return  int   Returns a floored integer
		 */

    getTimeSeconds: function (date) {
    if (!date) {
    date = new Date()
  }

    if (this.time instanceof Date) {
    if (this.factory.countdown) {
    return Math.max(this.time.getTime() / 1000 - date.getTime() / 1000, 0)
  } else {
    return date.getTime() / 1000 - this.time.getTime() / 1000
}
  } else {
    return this.time
  }
  },

		/**
		 * Gets the current twelve hour time
		 *
		 * @return  object  Returns a digitized object
		 */

    getTime: function (date, showSeconds) {
    if (typeof showSeconds === 'undefined') {
    showSeconds = true
  }

    if (!date) {
    date = this.getDateObject()
  }

    console.log(date)
			
    var hours = date.getHours()
    var merid = hours > 12 ? 'PM' : 'AM'
    var data = [
  hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours),
  date.getMinutes()
]

  if (showSeconds === true) {
    data.push(date.getSeconds())
  }

    return this.digitize(data)
  },

		/**
		 * Gets number of seconds
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a ceiled integer
		 */

    getSeconds: function (mod) {
    var seconds = this.getTimeSeconds()

    if (mod) {
  if (seconds == 60) {
    seconds = 0
  }  else {
    seconds = seconds % 60
  }
}

    return Math.ceil(seconds)
  },

		/**
		 * Gets number of weeks
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */

    getWeeks: function (mod) {
    var weeks = this.getTimeSeconds() / 60 / 60 / 24 / 7

    if (mod) {
  weeks = weeks % 52
}

    return Math.floor(weeks)
  },

		/**
		 * Removes a specific number of leading zeros from the array.
		 * This method prevents you from removing too many digits, even
		 * if you try.
		 *
		 * @param   int    Total number of digits to remove
		 * @return  array  An array of digits
		 */

    removeLeadingZeros: function (totalDigits, digits) {
    var total = 0
    var newArray = []

    $.each(digits, function (i, digit) {
  if (i < totalDigits) {
    total += parseInt(digits[i], 10)
  }  else {
    newArray.push(digits[i])
  }
})

    if (total === 0) {
  return newArray
}

    return digits
  },

		/**
		 * Adds X second to the current time
		 */

    addSeconds: function (x) {
    if (this.time instanceof Date) {
    this.time.setSeconds(this.time.getSeconds() + x)
  }  else {
    this.time += x
  }
  },

		/**
		 * Adds 1 second to the current time
		 */

    addSecond: function () {
    this.addSeconds(1)
  },

		/**
		 * Substracts X seconds from the current time
		 */

    subSeconds: function (x) {
    if (this.time instanceof Date) {
    this.time.setSeconds(this.time.getSeconds() - x)
  }  else {
    this.time -= x
  }
  },

		/**
		 * Substracts 1 second from the current time
		 */

    subSecond: function () {
    this.subSeconds(1)
  },

		/**
		 * Converts the object to a human readable string
		 */

    toString: function () {
    return this.getTimeSeconds().toString()
  }

		/*
		getYears: function() {
			return Math.floor(this.time / 60 / 60 / 24 / 7 / 52);
		},

		getDecades: function() {
			return Math.floor(this.getWeeks() / 10);
		} */
  })
}(jQuery));

/* jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  'use strict';

	/**
	 * The FlipClock.Timer object managers the JS timers
	 *
	 * @param	object  The parent FlipClock.Factory object
	 * @param	object  Override the default options
	 */

  FlipClock.Timer = FlipClock.Base.extend({

		/**
		 * Callbacks
		 */

    callbacks: {
    destroy: false,
    create: false,
    init: false,
    interval: false,
    start: false,
    stop: false,
    reset: false
  },

		/**
		 * FlipClock timer count (how many intervals have passed)
		 */

    count: 0,

		/**
		 * The parent FlipClock.Factory object
		 */

    factory: false,

		/**
		 * Timer interval (1 second by default)
		 */

    interval: 1000,

		/**
		 * The rate of the animation in milliseconds (not currently in use)
		 */

    animationRate: 1000,

		/**
		 * Constructor
		 *
		 * @return	void
		 */

    constructor: function (factory, options) {
    this.base(options)
    this.factory = factory
    this.callback(this.callbacks.init)
    this.callback(this.callbacks.create)
  },

		/**
		 * This method gets the elapsed the time as an interger
		 *
		 * @return	void
		 */

    getElapsed: function () {
    return this.count * this.interval
  },

		/**
		 * This method gets the elapsed the time as a Date object
		 *
		 * @return	void
		 */

    getElapsedTime: function () {
    return new Date(this.time + this.getElapsed())
  },

		/**
		 * This method is resets the timer
		 *
		 * @param 	callback  This method resets the timer back to 0
		 * @return	void
		 */

    reset: function (callback) {
    clearInterval(this.timer)
    this.count = 0
    this._setInterval(callback)
    this.callback(this.callbacks.reset)
  },

		/**
		 * This method is starts the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */

    start: function (callback) {
    this.factory.running = true
    this._createTimer(callback)
    this.callback(this.callbacks.start)
  },

		/**
		 * This method is stops the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */

    stop: function (callback) {
    this.factory.running = false
    this._clearInterval(callback)
    this.callback(this.callbacks.stop)
    this.callback(callback)
  },

		/**
		 * Clear the timer interval
		 *
		 * @return	void
		 */

    _clearInterval: function () {
    clearInterval(this.timer)
  },

		/**
		 * Create the timer object
		 *
		 * @param 	callback  A function that is called once the timer is created
		 * @return	void
		 */

    _createTimer: function (callback) {
    this._setInterval(callback)
  },

		/**
		 * Destroy the timer object
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */

    _destroyTimer: function (callback) {
    this._clearInterval()
    this.timer = false
    this.callback(callback)
    this.callback(this.callbacks.destroy)
  },

		/**
		 * This method is called each time the timer interval is ran
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */

    _interval: function (callback) {
    this.callback(this.callbacks.interval)
    this.callback(callback)
    this.count++
  },

		/**
		 * This sets the timer interval
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */

    _setInterval: function (callback) {
    var t = this

    t._interval(callback)

    t.timer = setInterval(function () {
  t._interval(callback)
}, this.interval)
  }

  })
}(jQuery));

(function ($) {
	/**
	 * Twenty-Four Hour Clock Face
	 *
	 * This class will generate a twenty-four our clock for FlipClock.js
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

  FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 */

    constructor: function (factory, options) {
    this.base(factory, options)
  },

		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.
		 */

    build: function (time) {
    var t = this
    var children = this.factory.$el.find('ul')

    if (!this.factory.time.time) {
  this.factory.original = new Date()

  this.factory.time = new FlipClock.Time(this.factory, this.factory.original)
}

    var time = time || this.factory.time.getMilitaryTime(false, this.showSeconds)

  if (time.length > children.length) {
    $.each(time, function (i, digit) {
    t.createList(digit)
  })
}

    this.createDivider()
    this.createDivider()

    $(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el)
    $(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el)

    this.base()
  },

		/**
		 * Flip the clock face
		 */

    flip: function (time, doNotAddPlayClass) {
    this.autoIncrement()

    time = time || this.factory.time.getMilitaryTime(false, this.showSeconds)

  this.base(time, doNotAddPlayClass)
  }

  })
}(jQuery));
(function ($) {
	/**
	 * Counter Clock Face
	 *
	 * This class will generate a generice flip counter. The timer has been
	 * disabled. clock.increment() and clock.decrement() have been added.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

  FlipClock.CounterFace = FlipClock.Face.extend({

		/**
		 * Tells the counter clock face if it should auto-increment
		 */

    shouldAutoIncrement: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 */

    constructor: function (factory, options) {
    if (typeof options !== 'object') {
  options = {}
}

    factory.autoStart = !!options.autoStart

  if (options.autoStart) {
    this.shouldAutoIncrement = true
  }

    factory.increment = function () {
    factory.countdown = false
    factory.setTime(factory.getTime().getTimeSeconds() + 1)
  };

    factory.decrement = function () {
    factory.countdown = true
    var time = factory.getTime().getTimeSeconds()
    if (time > 0) {
  factory.setTime(time - 1)
}
  };

    factory.setValue = function (digits) {
    factory.setTime(digits)
  };

    factory.setCounter = function (digits) {
    factory.setTime(digits)
  };

    this.base(factory, options)
  },

		/**
		 * Build the clock face
		 */

    build: function () {
    var t = this
    var children = this.factory.$el.find('ul')
    var time 	 = this.factory.getTime().digitize([this.factory.getTime().time])

    if (time.length > children.length) {
  $.each(time, function (i, digit) {
    var list = t.createList(digit)

    list.select(digit)
  })
			}

    $.each(this.lists, function (i, list) {
    list.play()
  })

  this.base()
  },

		/**
		 * Flip the clock face
		 */

    flip: function (time, doNotAddPlayClass) {
    if (this.shouldAutoIncrement) {
    this.autoIncrement()
  }

    if (!time) {
    time = this.factory.getTime().digitize([this.factory.getTime().time])
  }

    this.base(time, doNotAddPlayClass)
  },

		/**
		 * Reset the clock face
		 */

    reset: function () {
    this.factory.time = new FlipClock.Time(
				this.factory,
				this.factory.original ? Math.round(this.factory.original) : 0
			)

    this.flip()
  }
  })
}(jQuery));
(function ($) {
	/**
	 * Daily Counter Clock Face
	 *
	 * This class will generate a daily counter for FlipClock.js. A
	 * daily counter will track days, hours, minutes, and seconds. If
	 * the number of available digits is exceeded in the count, a new
	 * digit will be created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

  FlipClock.DailyCounterFace = FlipClock.Face.extend({

    showSeconds: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 */

    constructor: function (factory, options) {
    this.base(factory, options)
  },

		/**
		 * Build the clock face
		 */

    build: function (time) {
    var t = this
    var children = this.factory.$el.find('ul')
    var offset = 0

    time = time || this.factory.time.getDayCounter(this.showSeconds)

  if (time.length > children.length) {
    $.each(time, function (i, digit) {
    t.createList(digit)
  })
}

    if (this.showSeconds) {
    $(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el)
  }  else			{
    offset = 2
  }

    $(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4 + offset].$el)
    $(this.createDivider('Hours')).insertBefore(this.lists[this.lists.length - 6 + offset].$el)
    $(this.createDivider('Days', true)).insertBefore(this.lists[0].$el)

    this.base()
  },

		/**
		 * Flip the clock face
		 */

    flip: function (time, doNotAddPlayClass) {
    if (!time) {
    time = this.factory.time.getDayCounter(this.showSeconds)
  }

    this.autoIncrement()

    this.base(time, doNotAddPlayClass)
  }

  })
}(jQuery));
(function ($) {
	/**
	 * Hourly Counter Clock Face
	 *
	 * This class will generate an hourly counter for FlipClock.js. An
	 * hour counter will track hours, minutes, and seconds. If number of
	 * available digits is exceeded in the count, a new digit will be
	 * created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

  FlipClock.HourlyCounterFace = FlipClock.Face.extend({

		// clearExcessDigits: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 */

    constructor: function (factory, options) {
    this.base(factory, options)
  },

		/**
		 * Build the clock face
		 */

    build: function (excludeHours, time) {
    var t = this
    var children = this.factory.$el.find('ul')

    time = time || this.factory.time.getHourCounter()

  if (time.length > children.length) {
    $.each(time, function (i, digit) {
    t.createList(digit)
  })
}

    $(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el)
    $(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4].$el)

    if (!excludeHours) {
  $(this.createDivider('Hours', true)).insertBefore(this.lists[0].$el)
}

    this.base()
  },

		/**
		 * Flip the clock face
		 */

    flip: function (time, doNotAddPlayClass) {
    if (!time) {
    time = this.factory.time.getHourCounter()
  }

    this.autoIncrement()

    this.base(time, doNotAddPlayClass)
  },

		/**
		 * Append a newly created list to the clock
		 */

    appendDigitToClock: function (obj) {
    this.base(obj)

    this.dividers[0].insertAfter(this.dividers[0].next())
  }

  })
}(jQuery));
(function ($) {
	/**
	 * Minute Counter Clock Face
	 *
	 * This class will generate a minute counter for FlipClock.js. A
	 * minute counter will track minutes and seconds. If an hour is
	 * reached, the counter will reset back to 0. (4 digits max)
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

  FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({

    clearExcessDigits: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 */

    constructor: function (factory, options) {
    this.base(factory, options)
  },

		/**
		 * Build the clock face
		 */

    build: function () {
    this.base(true, this.factory.time.getMinuteCounter())
  },

		/**
		 * Flip the clock face
		 */

    flip: function (time, doNotAddPlayClass) {
    if (!time) {
    time = this.factory.time.getMinuteCounter()
  }

    this.base(time, doNotAddPlayClass)
  }

  })
}(jQuery));
(function ($) {
	/**
	 * Twelve Hour Clock Face
	 *
	 * This class will generate a twelve hour clock for FlipClock.js
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

  FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({

		/**
		 * The meridium jQuery DOM object
		 */

    meridium: false,

		/**
		 * The meridium text as string for easy access
		 */

    meridiumText: 'AM',

		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.
		 */

    build: function () {
    var t = this

    var time = this.factory.time.getTime(false, this.showSeconds)

    this.base(time)
    this.meridiumText = this.getMeridium()
    this.meridium = $([
  '<ul class="flip-clock-meridium">',
  '<li>',
  '<a href="#">' + this.meridiumText + '</a>',
  '</li>',
  '</ul>'
].join(''))

    this.meridium.insertAfter(this.lists[this.lists.length - 1].$el)
  },

		/**
		 * Flip the clock face
		 */

    flip: function (time, doNotAddPlayClass) {
    if (this.meridiumText != this.getMeridium()) {
    this.meridiumText = this.getMeridium()
    this.meridium.find('a').html(this.meridiumText)
  }
    this.base(this.factory.time.getTime(false, this.showSeconds), doNotAddPlayClass)
  },

		/**
		 * Get the current meridium
		 *
		 * @return  string  Returns the meridium (AM|PM)
		 */

    getMeridium: function () {
    return new Date().getHours() >= 12 ? 'PM' : 'AM'
  },

		/**
		 * Is it currently in the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */

    isPM: function () {
    return this.getMeridium() == 'PM'
},

		/**
		 * Is it currently before the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */

    isAM: function () {
    return this.getMeridium() == 'AM'
}

  })
}(jQuery));
(function ($) {
    /**
     * FlipClock Arabic Language Pack
     *
     * This class will be used to translate tokens into the Arabic language.
     *
     */

  FlipClock.Lang.Arabic = {

    'years': 'سنوات',
    'months': 'شهور',
    'days': 'أيام',
    'hours': 'ساعات',
    'minutes': 'دقائق',
    'seconds': 'ثواني'

  }

    /* Create various aliases for convenience */

  FlipClock.Lang['ar'] = FlipClock.Lang.Arabic
  FlipClock.Lang['ar-ar'] = FlipClock.Lang.Arabic
  FlipClock.Lang['arabic'] = FlipClock.Lang.Arabic
}(jQuery));
(function ($) {
	/**
	 * FlipClock Danish Language Pack
	 *
	 * This class will used to translate tokens into the Danish language.
	 *
	 */

  FlipClock.Lang.Danish = {

    'years': 'År',
    'months': 'Måneder',
    'days': 'Dage',
    'hours': 'Timer',
    'minutes': 'Minutter',
    'seconds': 'Sekunder'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['da'] = FlipClock.Lang.Danish
  FlipClock.Lang['da-dk'] = FlipClock.Lang.Danish
  FlipClock.Lang['danish'] = FlipClock.Lang.Danish
}(jQuery));
(function ($) {
	/**
	 * FlipClock German Language Pack
	 *
	 * This class will used to translate tokens into the German language.
	 *
	 */

  FlipClock.Lang.German = {

    'years': 'Jahre',
    'months': 'Monate',
    'days': 'Tage',
    'hours': 'Stunden',
    'minutes': 'Minuten',
    'seconds': 'Sekunden'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['de'] = FlipClock.Lang.German
  FlipClock.Lang['de-de'] = FlipClock.Lang.German
  FlipClock.Lang['german'] = FlipClock.Lang.German
}(jQuery));
(function ($) {
	/**
	 * FlipClock English Language Pack
	 *
	 * This class will used to translate tokens into the English language.
	 *
	 */

  FlipClock.Lang.English = {

    'years': 'Years',
    'months': 'Months',
    'days': 'Days',
    'hours': 'Hours',
    'minutes': 'Minutes',
    'seconds': 'Seconds'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['en'] = FlipClock.Lang.English
  FlipClock.Lang['en-us'] = FlipClock.Lang.English
  FlipClock.Lang['english'] = FlipClock.Lang.English
}(jQuery));
(function ($) {
	/**
	 * FlipClock Spanish Language Pack
	 *
	 * This class will used to translate tokens into the Spanish language.
	 *
	 */

  FlipClock.Lang.Spanish = {

    'years': 'A&#241;os',
    'months': 'Meses',
    'days': 'D&#237;as',
    'hours': 'Horas',
    'minutes': 'Minutos',
    'seconds': 'Segundo'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['es'] = FlipClock.Lang.Spanish
  FlipClock.Lang['es-es'] = FlipClock.Lang.Spanish
  FlipClock.Lang['spanish'] = FlipClock.Lang.Spanish
}(jQuery));
(function ($) {
	/**
	 * FlipClock Finnish Language Pack
	 *
	 * This class will used to translate tokens into the Finnish language.
	 *
	 */

  FlipClock.Lang.Finnish = {

    'years': 'Vuotta',
    'months': 'Kuukautta',
    'days': 'Päivää',
    'hours': 'Tuntia',
    'minutes': 'Minuuttia',
    'seconds': 'Sekuntia'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['fi'] = FlipClock.Lang.Finnish
  FlipClock.Lang['fi-fi'] = FlipClock.Lang.Finnish
  FlipClock.Lang['finnish'] = FlipClock.Lang.Finnish
}(jQuery));

(function ($) {
  /**
   * FlipClock Canadian French Language Pack
   *
   * This class will used to translate tokens into the Canadian French language.
   *
   */

  FlipClock.Lang.French = {

    'years': 'Ans',
    'months': 'Mois',
    'days': 'Jours',
    'hours': 'Heures',
    'minutes': 'Minutes',
    'seconds': 'Secondes'

  }

  /* Create various aliases for convenience */

  FlipClock.Lang['fr'] = FlipClock.Lang.French
  FlipClock.Lang['fr-ca'] = FlipClock.Lang.French
  FlipClock.Lang['french'] = FlipClock.Lang.French
}(jQuery));

(function ($) {
	/**
	 * FlipClock Italian Language Pack
	 *
	 * This class will used to translate tokens into the Italian language.
	 *
	 */

  FlipClock.Lang.Italian = {

    'years': 'Anni',
    'months': 'Mesi',
    'days': 'Giorni',
    'hours': 'Ore',
    'minutes': 'Minuti',
    'seconds': 'Secondi'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['it'] = FlipClock.Lang.Italian
  FlipClock.Lang['it-it'] = FlipClock.Lang.Italian
  FlipClock.Lang['italian'] = FlipClock.Lang.Italian
}(jQuery));

(function ($) {
  /**
   * FlipClock Latvian Language Pack
   *
   * This class will used to translate tokens into the Latvian language.
   *
   */

  FlipClock.Lang.Latvian = {

    'years': 'Gadi',
    'months': 'Mēneši',
    'days': 'Dienas',
    'hours': 'Stundas',
    'minutes': 'Minūtes',
    'seconds': 'Sekundes'

  }

  /* Create various aliases for convenience */

  FlipClock.Lang['lv'] = FlipClock.Lang.Latvian
  FlipClock.Lang['lv-lv'] = FlipClock.Lang.Latvian
  FlipClock.Lang['latvian'] = FlipClock.Lang.Latvian
}(jQuery));
(function ($) {
    /**
     * FlipClock Dutch Language Pack
     *
     * This class will used to translate tokens into the Dutch language.
     */

  FlipClock.Lang.Dutch = {

    'years': 'Jaren',
    'months': 'Maanden',
    'days': 'Dagen',
    'hours': 'Uren',
    'minutes': 'Minuten',
    'seconds': 'Seconden'

  }

    /* Create various aliases for convenience */

  FlipClock.Lang['nl'] = FlipClock.Lang.Dutch
  FlipClock.Lang['nl-be'] = FlipClock.Lang.Dutch
  FlipClock.Lang['dutch'] = FlipClock.Lang.Dutch
}(jQuery));

(function ($) {
	/**
	 * FlipClock Norwegian-Bokmål Language Pack
	 *
	 * This class will used to translate tokens into the Norwegian language.
	 *
	 */

  FlipClock.Lang.Norwegian = {

    'years': 'År',
    'months': 'Måneder',
    'days': 'Dager',
    'hours': 'Timer',
    'minutes': 'Minutter',
    'seconds': 'Sekunder'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['no'] = FlipClock.Lang.Norwegian
  FlipClock.Lang['nb'] = FlipClock.Lang.Norwegian
  FlipClock.Lang['no-nb'] = FlipClock.Lang.Norwegian
  FlipClock.Lang['norwegian'] = FlipClock.Lang.Norwegian
}(jQuery));

(function ($) {
	/**
	 * FlipClock Portuguese Language Pack
	 *
	 * This class will used to translate tokens into the Portuguese language.
	 *
	 */

  FlipClock.Lang.Portuguese = {

    'years': 'Anos',
    'months': 'Meses',
    'days': 'Dias',
    'hours': 'Horas',
    'minutes': 'Minutos',
    'seconds': 'Segundos'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['pt'] = FlipClock.Lang.Portuguese
  FlipClock.Lang['pt-br'] = FlipClock.Lang.Portuguese
  FlipClock.Lang['portuguese'] = FlipClock.Lang.Portuguese
}(jQuery));
(function ($) {
  /**
   * FlipClock Russian Language Pack
   *
   * This class will used to translate tokens into the Russian language.
   *
   */

  FlipClock.Lang.Russian = {

    'years': 'лет',
    'months': 'месяцев',
    'days': 'дней',
    'hours': 'часов',
    'minutes': 'минут',
    'seconds': 'секунд'

  }

  /* Create various aliases for convenience */

  FlipClock.Lang['ru'] = FlipClock.Lang.Russian
  FlipClock.Lang['ru-ru'] = FlipClock.Lang.Russian
  FlipClock.Lang['russian'] = FlipClock.Lang.Russian
}(jQuery));
(function ($) {
	/**
	 * FlipClock Swedish Language Pack
	 *
	 * This class will used to translate tokens into the Swedish language.
	 *
	 */

  FlipClock.Lang.Swedish = {

    'years': 'År',
    'months': 'Månader',
    'days': 'Dagar',
    'hours': 'Timmar',
    'minutes': 'Minuter',
    'seconds': 'Sekunder'

  };

	/* Create various aliases for convenience */

  FlipClock.Lang['sv'] = FlipClock.Lang.Swedish
  FlipClock.Lang['sv-se'] = FlipClock.Lang.Swedish
  FlipClock.Lang['swedish'] = FlipClock.Lang.Swedish
}(jQuery))

/*
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/* JS Lint helpers: */
/* global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/* jslint nomen: true, continue:true */

if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F () {}
    F.prototype = obj
    return new F()
  };
}
(function ($, window, document) {
  var Carousel = {
      init: function (options, el) {
        var base = this

        base.$elem = $(el)
        base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options)

        base.userOptions = options
        base.loadContent()
      },

      loadContent: function () {
        var base = this, url

        function getData (data) {
              var i, content = ''
              if (typeof base.options.jsonSuccess === 'function') {
                base.options.jsonSuccess.apply(this, [data])
              } else {
                for (i in data.owl) {
                    if (data.owl.hasOwnProperty(i)) {
                        content += data.owl[i].item
                      }
                  }
                base.$elem.html(content)
              }
              base.logIn()
            }

        if (typeof base.options.beforeInit === 'function') {
            base.options.beforeInit.apply(this, [base.$elem])
          }

        if (typeof base.options.jsonPath === 'string') {
            url = base.options.jsonPath
            $.getJSON(url, getData)
          } else {
            base.logIn()
          }
      },

      logIn: function () {
        var base = this

        base.$elem.data('owl-originalStyles', base.$elem.attr('style'))
                      .data('owl-originalClasses', base.$elem.attr('class'))

        base.$elem.css({opacity: 0})
        base.orignalItems = base.options.items
        base.checkBrowser()
        base.wrapperWidth = 0
        base.checkVisible = null
        base.setVars()
      },

      setVars: function () {
        var base = this
        if (base.$elem.children().length === 0) { return false }
        base.baseClass()
        base.eventTypes()
        base.$userItems = base.$elem.children()
        base.itemsAmount = base.$userItems.length
        base.wrapItems()
        base.$owlItems = base.$elem.find('.owl-item')
          base.$owlWrapper = base.$elem.find('.owl-wrapper')
          base.playDirection = 'next'
          base.prevItem = 0
        base.prevArr = [0]
        base.currentItem = 0
        base.customEvents()
        base.onStartup()
      },

      onStartup: function () {
        var base = this
        base.updateItems()
        base.calculateAll()
        base.buildControls()
        base.updateControls()
        base.response()
        base.moveEvents()
        base.stopOnHover()
        base.owlStatus()

        if (base.options.transitionStyle !== false) {
              base.transitionTypes(base.options.transitionStyle)
            }
        if (base.options.autoPlay === true) {
            base.options.autoPlay = 5000
          }
        base.play()

        base.$elem.find('.owl-wrapper').css('display', 'block')

          if (!base.$elem.is(':visible')) {
            base.watchVisibility()
          } else {
            base.$elem.css('opacity', 1)
          }
        base.onstartup = false
        base.eachMoveUpdate()
        if (typeof base.options.afterInit === 'function') {
              base.options.afterInit.apply(this, [base.$elem])
            }
      },

      eachMoveUpdate: function () {
        var base = this

        if (base.options.lazyLoad === true) {
              base.lazyLoad()
            }
        if (base.options.autoHeight === true) {
            base.autoHeight()
          }
        base.onVisibleItems()

        if (typeof base.options.afterAction === 'function') {
              base.options.afterAction.apply(this, [base.$elem])
            }
      },

      updateVars: function () {
        var base = this
        if (typeof base.options.beforeUpdate === 'function') {
              base.options.beforeUpdate.apply(this, [base.$elem])
            }
        base.watchVisibility()
        base.updateItems()
        base.calculateAll()
        base.updatePosition()
        base.updateControls()
        base.eachMoveUpdate()
        if (typeof base.options.afterUpdate === 'function') {
              base.options.afterUpdate.apply(this, [base.$elem])
            }
      },

      reload: function () {
        var base = this
        window.setTimeout(function () {
              base.updateVars()
            }, 0)
      },

      watchVisibility: function () {
        var base = this

        if (base.$elem.is(':visible') === false) {
              base.$elem.css({opacity: 0})
              window.clearInterval(base.autoPlayInterval)
              window.clearInterval(base.checkVisible)
            } else {
              return false
            }
        base.checkVisible = window.setInterval(function () {
            if (base.$elem.is(':visible')) {
                base.reload()
                base.$elem.animate({opacity: 1}, 200)
                window.clearInterval(base.checkVisible)
              }
          }, 500)
      },

      wrapItems: function () {
        var base = this
        base.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>')
          base.$elem.find('.owl-wrapper').wrap('<div class="owl-wrapper-outer">')
          base.wrapperOuter = base.$elem.find('.owl-wrapper-outer')
          base.$elem.css('display', 'block')
        },

      baseClass: function () {
        var base = this,
            hasBaseClass = base.$elem.hasClass(base.options.baseClass),
            hasThemeClass = base.$elem.hasClass(base.options.theme)

        if (!hasBaseClass) {
              base.$elem.addClass(base.options.baseClass)
            }

        if (!hasThemeClass) {
            base.$elem.addClass(base.options.theme)
          }
      },

      updateItems: function () {
        var base = this, width, i

        if (base.options.responsive === false) {
              return false
            }
        if (base.options.singleItem === true) {
            base.options.items = base.orignalItems = 1
            base.options.itemsCustom = false
            base.options.itemsDesktop = false
            base.options.itemsDesktopSmall = false
            base.options.itemsTablet = false
            base.options.itemsTabletSmall = false
            base.options.itemsMobile = false
            return false
          }

        width = $(base.options.responsiveBaseWidth).width()

        if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
              base.options.items = base.orignalItems
            }
        if (base.options.itemsCustom !== false) {
                // Reorder array by screen size
            base.options.itemsCustom.sort(function (a, b) { return a[0] - b[0] })

              for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                if (base.options.itemsCustom[i][0] <= width) {
                    base.options.items = base.options.itemsCustom[i][1]
                  }
              }
          } else {
            if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                  base.options.items = base.options.itemsDesktop[1]
                }

            if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                base.options.items = base.options.itemsDesktopSmall[1]
              }

            if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                base.options.items = base.options.itemsTablet[1]
              }

            if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                base.options.items = base.options.itemsTabletSmall[1]
              }

            if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                base.options.items = base.options.itemsMobile[1]
              }
          }

            // if number of items is less than declared
        if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
            base.options.items = base.itemsAmount
          }
      },

      response: function () {
        var base = this,
            smallDelay,
            lastWindowWidth;

        if (base.options.responsive !== true) {
            return false
          }
        lastWindowWidth = $(window).width()

        base.resizer = function () {
              if ($(window).width() !== lastWindowWidth) {
                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval)
                  }
                window.clearTimeout(smallDelay)
                smallDelay = window.setTimeout(function () {
                      lastWindowWidth = $(window).width()
                      base.updateVars()
                    }, base.options.responsiveRefreshRate)
              }
            }
        $(window).resize(base.resizer)
      },

      updatePosition: function () {
        var base = this
        base.jumpTo(base.currentItem)
        if (base.options.autoPlay !== false) {
              base.checkAp()
            }
      },

      appendItemsSizes: function () {
        var base = this,
            roundPages = 0,
            lastItem = base.itemsAmount - base.options.items

        base.$owlItems.each(function (index) {
              var $this = $(this)
              $this
                    .css({'width': base.itemWidth})
                    .data('owl-item', Number(index))

              if (index % base.options.items === 0 || index === lastItem) {
                  if (!(index > lastItem)) {
                    roundPages += 1
                  }
                }
              $this.data('owl-roundPages', roundPages)
            })
        },

      appendWrapperSizes: function () {
        var base = this,
            width = base.$owlItems.length * base.itemWidth

        base.$owlWrapper.css({
              'width': width * 2,
              'left': 0
            })
        base.appendItemsSizes()
      },

      calculateAll: function () {
        var base = this
        base.calculateWidth()
        base.appendWrapperSizes()
        base.loops()
        base.max()
      },

      calculateWidth: function () {
        var base = this
        base.itemWidth = Math.round(base.$elem.width() / base.options.items)
      },

      max: function () {
        var base = this,
            maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1
        if (base.options.items > base.itemsAmount) {
              base.maximumItem = 0
              maximum = 0
              base.maximumPixels = 0
            } else {
              base.maximumItem = base.itemsAmount - base.options.items
              base.maximumPixels = maximum
            }
        return maximum
      },

      min: function () {
        return 0
      },

      loops: function () {
        var base = this,
            prev = 0,
            elWidth = 0,
            i,
            item,
            roundPageNum;

        base.positionsInArray = [0]
        base.pagesInArray = []

        for (i = 0; i < base.itemsAmount; i += 1) {
              elWidth += base.itemWidth
              base.positionsInArray.push(-elWidth)

              if (base.options.scrollPerPage === true) {
                  item = $(base.$owlItems[i])
                  roundPageNum = item.data('owl-roundPages')
                  if (roundPageNum !== prev) {
                    base.pagesInArray[prev] = base.positionsInArray[i]
                    prev = roundPageNum
                  }
                }
            }
      },

      buildControls: function () {
        var base = this
        if (base.options.navigation === true || base.options.pagination === true) {
              base.owlControls = $('<div class="owl-controls"/>').toggleClass('clickable', !base.browser.isTouch).appendTo(base.$elem)
            }
        if (base.options.pagination === true) {
            base.buildPagination()
          }
        if (base.options.navigation === true) {
            base.buildButtons()
          }
      },

      buildButtons: function () {
        var base = this,
            buttonsWrapper = $('<div class="owl-buttons"/>')
          base.owlControls.append(buttonsWrapper)

        base.buttonPrev = $('<div/>', {
              'class': 'owl-prev',
              'html': base.options.navigationText[0] || ''
            })

        base.buttonNext = $('<div/>', {
              'class': 'owl-next',
              'html': base.options.navigationText[1] || ''
            })

        buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext)

        buttonsWrapper.on('touchstart.owlControls mousedown.owlControls', 'div[class^="owl"]', function (event) {
              event.preventDefault()
            })

          buttonsWrapper.on('touchend.owlControls mouseup.owlControls', 'div[class^="owl"]', function (event) {
            event.preventDefault()
            if ($(this).hasClass('owl-next')) {
                  base.next()
                } else {
                  base.prev()
                }
          })
      },

      buildPagination: function () {
        var base = this

        base.paginationWrapper = $('<div class="owl-pagination"/>')
          base.owlControls.append(base.paginationWrapper)

        base.paginationWrapper.on('touchend.owlControls mouseup.owlControls', '.owl-page', function (event) {
              event.preventDefault()
              if (Number($(this).data('owl-page')) !== base.currentItem) {
                  base.goTo(Number($(this).data('owl-page')), true)
                }
            })
      },

      updatePagination: function () {
        var base = this,
            counter,
            lastPage,
            lastItem,
            i,
            paginationButton,
            paginationButtonInner;

        if (base.options.pagination === false) {
            return false
          }

        base.paginationWrapper.html('')

          counter = 0
        lastPage = base.itemsAmount - base.itemsAmount % base.options.items

        for (i = 0; i < base.itemsAmount; i += 1) {
              if (i % base.options.items === 0) {
                counter += 1
                if (lastPage === i) {
                      lastItem = base.itemsAmount - base.options.items
                    }
                paginationButton = $('<div/>', {
                    "class": 'owl-page'
                  })
                paginationButtonInner = $('<span></span>', {
                      'text': base.options.paginationNumbers === true ? counter : '',
                      'class': base.options.paginationNumbers === true ? 'owl-numbers' : ''
                    })
                paginationButton.append(paginationButtonInner)

                paginationButton.data('owl-page', lastPage === i ? lastItem : i)
                paginationButton.data('owl-roundPages', counter)

                base.paginationWrapper.append(paginationButton)
              }
            }
        base.checkPagination()
      },
      checkPagination: function () {
        var base = this
        if (base.options.pagination === false) {
              return false
            }
        base.paginationWrapper.find('.owl-page').each(function () {
            if ($(this).data('owl-roundPages') === $(base.$owlItems[base.currentItem]).data('owl-roundPages')) {
                base.paginationWrapper
                        .find('.owl-page')
                        .removeClass('active')
                  $(this).addClass('active')
                }
          })
      },

      checkNavigation: function () {
        var base = this

        if (base.options.navigation === false) {
              return false
            }
        if (base.options.rewindNav === false) {
            if (base.currentItem === 0 && base.maximumItem === 0) {
                base.buttonPrev.addClass('disabled')
                  base.buttonNext.addClass('disabled')
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                  base.buttonPrev.addClass('disabled')
                  base.buttonNext.removeClass('disabled')
                } else if (base.currentItem === base.maximumItem) {
                  base.buttonPrev.removeClass('disabled')
                  base.buttonNext.addClass('disabled')
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                  base.buttonPrev.removeClass('disabled')
                  base.buttonNext.removeClass('disabled')
                }
          }
      },

      updateControls: function () {
        var base = this
        base.updatePagination()
        base.checkNavigation()
        if (base.owlControls) {
              if (base.options.items >= base.itemsAmount) {
                base.owlControls.hide()
              } else {
                base.owlControls.show()
              }
            }
      },

      destroyControls: function () {
        var base = this
        if (base.owlControls) {
              base.owlControls.remove()
            }
      },

      next: function (speed) {
        var base = this

        if (base.isTransition) {
              return false
            }

        base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1
        if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
              if (base.options.rewindNav === true) {
                base.currentItem = 0
                speed = 'rewind'
                } else {
                base.currentItem = base.maximumItem
                return false
              }
            }
        base.goTo(base.currentItem, speed)
      },

      prev: function (speed) {
        var base = this

        if (base.isTransition) {
              return false
            }

        if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
            base.currentItem = 0
          } else {
            base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1
          }
        if (base.currentItem < 0) {
            if (base.options.rewindNav === true) {
                base.currentItem = base.maximumItem
                speed = 'rewind'
                } else {
                base.currentItem = 0
                return false
              }
          }
        base.goTo(base.currentItem, speed)
      },

      goTo: function (position, speed, drag) {
        var base = this,
            goToPixel;

        if (base.isTransition) {
            return false
          }
        if (typeof base.options.beforeMove === 'function') {
            base.options.beforeMove.apply(this, [base.$elem])
          }
        if (position >= base.maximumItem) {
            position = base.maximumItem
          } else if (position <= 0) {
              position = 0
            }

        base.currentItem = base.owl.currentItem = position
        if (base.options.transitionStyle !== false && drag !== 'drag' && base.options.items === 1 && base.browser.support3d === true) {
              base.swapSpeed(0)
              if (base.browser.support3d === true) {
                  base.transition3d(base.positionsInArray[position])
                } else {
                  base.css2slide(base.positionsInArray[position], 1)
                }
              base.afterGo()
              base.singleItemTransition()
              return false
            }
        goToPixel = base.positionsInArray[position]

        if (base.browser.support3d === true) {
              base.isCss3Finish = false

              if (speed === true) {
                  base.swapSpeed('paginationSpeed')
                  window.setTimeout(function () {
                    base.isCss3Finish = true
                  }, base.options.paginationSpeed)
                } else if (speed === 'rewind') {
                  base.swapSpeed(base.options.rewindSpeed)
                  window.setTimeout(function () {
                      base.isCss3Finish = true
                    }, base.options.rewindSpeed)
                } else {
                  base.swapSpeed('slideSpeed')
                  window.setTimeout(function () {
                    base.isCss3Finish = true
                  }, base.options.slideSpeed)
                }
              base.transition3d(goToPixel)
            } else {
              if (speed === true) {
                base.css2slide(goToPixel, base.options.paginationSpeed)
              } else if (speed === 'rewind') {
                  base.css2slide(goToPixel, base.options.rewindSpeed)
                } else {
                  base.css2slide(goToPixel, base.options.slideSpeed)
                }
            }
        base.afterGo()
      },

      jumpTo: function (position) {
        var base = this
        if (typeof base.options.beforeMove === 'function') {
              base.options.beforeMove.apply(this, [base.$elem])
            }
        if (position >= base.maximumItem || position === -1) {
            position = base.maximumItem
          } else if (position <= 0) {
              position = 0
            }
        base.swapSpeed(0)
        if (base.browser.support3d === true) {
              base.transition3d(base.positionsInArray[position])
            } else {
              base.css2slide(base.positionsInArray[position], 1)
            }
        base.currentItem = base.owl.currentItem = position
        base.afterGo()
      },

      afterGo: function () {
        var base = this

        base.prevArr.push(base.currentItem)
        base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2]
        base.prevArr.shift(0)

        if (base.prevItem !== base.currentItem) {
              base.checkPagination()
              base.checkNavigation()
              base.eachMoveUpdate()

              if (base.options.autoPlay !== false) {
                  base.checkAp()
                }
            }
        if (typeof base.options.afterMove === 'function' && base.prevItem !== base.currentItem) {
            base.options.afterMove.apply(this, [base.$elem])
          }
      },

      stop: function () {
        var base = this
        base.apStatus = 'stop'
          window.clearInterval(base.autoPlayInterval)
      },

      checkAp: function () {
        var base = this
        if (base.apStatus !== 'stop') {
              base.play()
            }
      },

      play: function () {
        var base = this
        base.apStatus = 'play'
          if (base.options.autoPlay === false) {
            return false
          }
        window.clearInterval(base.autoPlayInterval)
        base.autoPlayInterval = window.setInterval(function () {
              base.next(true)
            }, base.options.autoPlay)
      },

      swapSpeed: function (action) {
        var base = this
        if (action === 'slideSpeed') {
              base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed))
            } else if (action === 'paginationSpeed') {
              base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed))
            } else if (typeof action !== 'string') {
              base.$owlWrapper.css(base.addCssSpeed(action))
            }
      },

      addCssSpeed: function (speed) {
        return {
            "-webkit-transition": 'all ' + speed + 'ms ease',
            "-moz-transition": 'all ' + speed + 'ms ease',
            "-o-transition": 'all ' + speed + 'ms ease',
            "transition": 'all ' + speed + 'ms ease'
          }
      },

      removeTransition: function () {
        return {
            "-webkit-transition": '',
            "-moz-transition": '',
            "-o-transition": '',
            "transition": ''
          }
      },

      doTranslate: function (pixels) {
        return {
            "-webkit-transform": 'translate3d(' + pixels + 'px, 0px, 0px)',
            "-moz-transform": 'translate3d(' + pixels + 'px, 0px, 0px)',
            "-o-transform": 'translate3d(' + pixels + 'px, 0px, 0px)',
            "-ms-transform": 'translate3d(' + pixels + 'px, 0px, 0px)',
            "transform": 'translate3d(' + pixels + 'px, 0px,0px)'
          }
      },

      transition3d: function (value) {
        var base = this
        base.$owlWrapper.css(base.doTranslate(value))
      },

      css2move: function (value) {
        var base = this
        base.$owlWrapper.css({'left': value})
      },

      css2slide: function (value, speed) {
        var base = this

        base.isCssFinish = false
        base.$owlWrapper.stop(true, true).animate({
              'left': value
            }, {
              duration: speed || base.options.slideSpeed,
              complete: function () {
                base.isCssFinish = true
              }
            })
      },

      checkBrowser: function () {
        var base = this,
            translate3D = 'translate3d(0px, 0px, 0px)',
            tempElem = document.createElement('div'),
            regex,
            asSupport,
            support3d,
            isTouch;

        tempElem.style.cssText = '  -moz-transform:' + translate3D +
                                  '; -ms-transform:' + translate3D +
                                  '; -o-transform:' + translate3D +
                                  '; -webkit-transform:' + translate3D +
                                  '; transform:' + translate3D
        regex = /translate3d\(0px, 0px, 0px\)/g
        asSupport = tempElem.style.cssText.match(regex)
        support3d = (asSupport !== null && asSupport.length === 1)

        isTouch = 'ontouchstart' in window || window.navigator.msMaxTouchPoints

        base.browser = {
              'support3d': support3d,
              'isTouch': isTouch
            }
      },

      moveEvents: function () {
        var base = this
        if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
              base.gestures()
              base.disabledEvents()
            }
      },

      eventTypes: function () {
        var base = this,
            types = ['s', 'e', 'x']

          base.ev_types = {}

        if (base.options.mouseDrag === true && base.options.touchDrag === true) {
              types = [
                "touchstart.owl mousedown.owl",
                "touchmove.owl mousemove.owl",
                "touchend.owl touchcancel.owl mouseup.owl"
              ]
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
              types = [
                "touchstart.owl",
                "touchmove.owl",
                "touchend.owl touchcancel.owl"
              ]
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
              types = [
                "mousedown.owl",
                "mousemove.owl",
                "mouseup.owl"
              ]
            }

        base.ev_types.start = types[0]
        base.ev_types.move = types[1]
        base.ev_types.end = types[2]
      },

      disabledEvents: function () {
        var base = this
        base.$elem.on('dragstart.owl', function (event) { event.preventDefault() })
          base.$elem.on('mousedown.disableTextSelect', function (e) {
            return $(e.target).is('input, textarea, select, option')
          })
        },

      gestures: function () {
            /* jslint unparam: true */
        var base = this,
            locals = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
              }

        base.isCssFinish = true

        function getTouches (event) {
              if (event.touches !== undefined) {
                return {
                    x: event.touches[0].pageX,
                    y: event.touches[0].pageY
                  }
              }

              if (event.touches === undefined) {
                if (event.pageX !== undefined) {
                    return {
                        x: event.pageX,
                        y: event.pageY
                      }
                  }
                if (event.pageX === undefined) {
                    return {
                        x: event.clientX,
                        y: event.clientY
                      }
                  }
              }
            }

        function swapEvents (type) {
            if (type === 'on') {
                $(document).on(base.ev_types.move, dragMove)
                $(document).on(base.ev_types.end, dragEnd)
              } else if (type === 'off') {
                  $(document).off(base.ev_types.move)
                  $(document).off(base.ev_types.end)
                }
          }

        function dragStart (event) {
            var ev = event.originalEvent || event || window.event,
                position;

            if (ev.which === 3) {
                return false
              }
            if (base.itemsAmount <= base.options.items) {
                return;
              }
            if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                return false
              }
            if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                return false
              }

            if (base.options.autoPlay !== false) {
                window.clearInterval(base.autoPlayInterval)
              }

            if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass('grabbing')) {
                base.$owlWrapper.addClass('grabbing')
                }

            base.newPosX = 0
            base.newRelativeX = 0

            $(this).css(base.removeTransition())

            position = $(this).position()
            locals.relativePos = position.left

            locals.offsetX = getTouches(ev).x - position.left
            locals.offsetY = getTouches(ev).y - position.top

            swapEvents('on')

              locals.sliding = false
            locals.targetElement = ev.target || ev.srcElement
          }

        function dragMove (event) {
            var ev = event.originalEvent || event || window.event,
                minSwipe,
                maxSwipe;

            base.newPosX = getTouches(ev).x - locals.offsetX
            base.newPosY = getTouches(ev).y - locals.offsetY
            base.newRelativeX = base.newPosX - locals.relativePos

            if (typeof base.options.startDragging === 'function' && locals.dragging !== true && base.newRelativeX !== 0) {
                  locals.dragging = true
                  base.options.startDragging.apply(base, [base.$elem])
                }

            if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                if (ev.preventDefault !== undefined) {
                    ev.preventDefault()
                  } else {
                    ev.returnValue = false
                  }
                locals.sliding = true
              }

            if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                $(document).off('touchmove.owl')
                }

            minSwipe = function () {
                return base.newRelativeX / 5
              };

            maxSwipe = function () {
                return base.maximumPixels + base.newRelativeX / 5
              };

            base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe())
            if (base.browser.support3d === true) {
                  base.transition3d(base.newPosX)
                } else {
                  base.css2move(base.newPosX)
                }
          }

        function dragEnd (event) {
            var ev = event.originalEvent || event || window.event,
                newPosition,
                handlers,
                owlStopEvent;

            ev.target = ev.target || ev.srcElement

            locals.dragging = false

            if (base.browser.isTouch !== true) {
                  base.$owlWrapper.removeClass('grabbing')
                }

            if (base.newRelativeX < 0) {
                base.dragDirection = base.owl.dragDirection = 'left'
                } else {
                base.dragDirection = base.owl.dragDirection = 'right'
                }

            if (base.newRelativeX !== 0) {
                newPosition = base.getNewPosition()
                base.goTo(newPosition, false, 'drag')
                  if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                    $(ev.target).on('click.disable', function (ev) {
                        ev.stopImmediatePropagation()
                        ev.stopPropagation()
                        ev.preventDefault()
                        $(ev.target).off('click.disable')
                        })
                    handlers = $._data(ev.target, 'events').click
                    owlStopEvent = handlers.pop()
                    handlers.splice(0, 0, owlStopEvent)
                  }
              }
            swapEvents('off')
            }
        base.$elem.on(base.ev_types.start, '.owl-wrapper', dragStart)
      },

      getNewPosition: function () {
        var base = this,
            newPosition = base.closestItem()

        if (newPosition > base.maximumItem) {
              base.currentItem = base.maximumItem
              newPosition = base.maximumItem
            } else if (base.newPosX >= 0) {
              newPosition = 0
              base.currentItem = 0
            }
        return newPosition
      },
      closestItem: function () {
        var base = this,
            array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
            goal = base.newPosX,
            closest = null

        $.each(array, function (i, v) {
              if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === 'left') {
                closest = v
                if (base.options.scrollPerPage === true) {
                      base.currentItem = $.inArray(closest, base.positionsInArray)
                    } else {
                      base.currentItem = i
                    }
              } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === 'right') {
                  if (base.options.scrollPerPage === true) {
                    closest = array[i + 1] || array[array.length - 1]
                    base.currentItem = $.inArray(closest, base.positionsInArray)
                  } else {
                    closest = array[i + 1]
                    base.currentItem = i + 1
                  }
                }
            })
        return base.currentItem
      },

      moveDirection: function () {
        var base = this,
            direction;
        if (base.newRelativeX < 0) {
            direction = 'right'
              base.playDirection = 'next'
            } else {
            direction = 'left'
              base.playDirection = 'prev'
            }
        return direction
      },

      customEvents: function () {
            /* jslint unparam: true */
        var base = this
        base.$elem.on('owl.next', function () {
              base.next()
            })
          base.$elem.on('owl.prev', function () {
            base.prev()
          })
          base.$elem.on('owl.play', function (event, speed) {
            base.options.autoPlay = speed
            base.play()
            base.hoverStatus = 'play'
            })
        base.$elem.on('owl.stop', function () {
              base.stop()
              base.hoverStatus = 'stop'
            })
        base.$elem.on('owl.goTo', function (event, item) {
              base.goTo(item)
            })
          base.$elem.on('owl.jumpTo', function (event, item) {
            base.jumpTo(item)
          })
        },

      stopOnHover: function () {
        var base = this
        if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
              base.$elem.on('mouseover', function () {
                base.stop()
              })
              base.$elem.on('mouseout', function () {
                if (base.hoverStatus !== 'stop') {
                    base.play()
                  }
              })
            }
      },

      lazyLoad: function () {
        var base = this,
            i,
            $item,
            itemNumber,
            $lazyImg,
            follow;

        if (base.options.lazyLoad === false) {
            return false
          }
        for (i = 0; i < base.itemsAmount; i += 1) {
            $item = $(base.$owlItems[i])

            if ($item.data('owl-loaded') === 'loaded') {
                  continue
                }

            itemNumber = $item.data('owl-item')
              $lazyImg = $item.find('.lazyOwl')

              if (typeof $lazyImg.data('src') !== 'string') {
                $item.data('owl-loaded', 'loaded')
                  continue;
              }
            if ($item.data('owl-loaded') === undefined) {
                $lazyImg.hide()
                $item.addClass('loading').data('owl-loaded', 'checked')
                }
            if (base.options.lazyFollow === true) {
                follow = itemNumber >= base.currentItem
              } else {
                follow = true
              }
            if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                base.lazyPreload($item, $lazyImg)
              }
          }
      },

      lazyPreload: function ($item, $lazyImg) {
        var base = this,
            iterations = 0,
            isBackgroundImg;

        if ($lazyImg.prop('tagName') === 'DIV') {
            $lazyImg.css('background-image', 'url(' + $lazyImg.data('src') + ')')
              isBackgroundImg = true
          } else {
            $lazyImg[0].src = $lazyImg.data('src')
            }

        function showImage () {
            $item.data('owl-loaded', 'loaded').removeClass('loading')
              $lazyImg.removeAttr('data-src')
              if (base.options.lazyEffect === 'fade') {
                $lazyImg.fadeIn(400)
              } else {
                $lazyImg.show()
              }
            if (typeof base.options.afterLazyLoad === 'function') {
                base.options.afterLazyLoad.apply(this, [base.$elem])
              }
          }

        function checkLazyImage () {
            iterations += 1
            if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                  showImage()
                } else if (iterations <= 100) { // if image loads in less than 10 seconds
                  window.setTimeout(checkLazyImage, 100)
                } else {
                  showImage()
                }
          }

        checkLazyImage()
      },

      autoHeight: function () {
        var base = this,
            $currentimg = $(base.$owlItems[base.currentItem]).find('img'),
            iterations;

        function addHeight () {
            var $currentItem = $(base.$owlItems[base.currentItem]).height()
            base.wrapperOuter.css('height', $currentItem + 'px')
              if (!base.wrapperOuter.hasClass('autoHeight')) {
                window.setTimeout(function () {
                    base.wrapperOuter.addClass('autoHeight')
                    }, 0)
              }
          }

        function checkImage () {
            iterations += 1
            if (base.completeImg($currentimg.get(0))) {
                  addHeight()
                } else if (iterations <= 100) { // if image loads in less than 10 seconds
                  window.setTimeout(checkImage, 100)
                } else {
                  base.wrapperOuter.css('height', '') // Else remove height attribute
                }
          }

        if ($currentimg.get(0) !== undefined) {
            iterations = 0
            checkImage()
          } else {
            addHeight()
          }
      },

      completeImg: function (img) {
        var naturalWidthType

        if (!img.complete) {
              return false
            }
        naturalWidthType = typeof img.naturalWidth
        if (naturalWidthType !== 'undefined' && img.naturalWidth === 0) {
              return false
            }
        return true
      },

      onVisibleItems: function () {
        var base = this,
            i;

        if (base.options.addClassActive === true) {
            base.$owlItems.removeClass('active')
            }
        base.visibleItems = []
        for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
              base.visibleItems.push(i)

              if (base.options.addClassActive === true) {
                  $(base.$owlItems[i]).addClass('active')
                }
            }
        base.owl.visibleItems = base.visibleItems
      },

      transitionTypes: function (className) {
        var base = this
            // Currently available: "fade", "backSlide", "goDown", "fadeUp"
        base.outClass = 'owl-' + className + '-out'
          base.inClass = 'owl-' + className + '-in'
        },

      singleItemTransition: function () {
        var base = this,
            outClass = base.outClass,
            inClass = base.inClass,
            $currentItem = base.$owlItems.eq(base.currentItem),
            $prevItem = base.$owlItems.eq(base.prevItem),
            prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
            origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
            animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend'

        base.isTransition = true

        base.$owlWrapper
                .addClass('owl-origin')
                .css({
                  '-webkit-transform-origin': origin + 'px',
                  '-moz-perspective-origin': origin + 'px',
                  'perspective-origin': origin + 'px'
                })
        function transStyles (prevPos) {
              return {
                "position": 'relative',
                "left": prevPos + 'px'
              }
            }

        $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                  base.endPrev = true
                  $prevItem.off(animEnd)
                  base.clearTransStyle($prevItem, outClass)
                })

          $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                  base.endCurrent = true
                  $currentItem.off(animEnd)
                  base.clearTransStyle($currentItem, inClass)
                })
        },

      clearTransStyle: function (item, classToRemove) {
        var base = this
        item.css({
              'position': '',
              'left': ''
            }).removeClass(classToRemove)

        if (base.endPrev && base.endCurrent) {
              base.$owlWrapper.removeClass('owl-origin')
              base.endPrev = false
              base.endCurrent = false
              base.isTransition = false
            }
      },

      owlStatus: function () {
        var base = this
        base.owl = {
              'userOptions': base.userOptions,
              'baseElement': base.$elem,
              'userItems': base.$userItems,
              'owlItems': base.$owlItems,
              'currentItem': base.currentItem,
              'prevItem': base.prevItem,
              'visibleItems': base.visibleItems,
              'isTouch': base.browser.isTouch,
              'browser': base.browser,
              'dragDirection': base.dragDirection
            }
      },

      clearEvents: function () {
        var base = this
        base.$elem.off('.owl owl mousedown.disableTextSelect')
          $(document).off('.owl owl')
          $(window).off('resize', base.resizer)
      },

      unWrap: function () {
        var base = this
        if (base.$elem.children().length !== 0) {
              base.$owlWrapper.unwrap()
              base.$userItems.unwrap().unwrap()
              if (base.owlControls) {
                  base.owlControls.remove()
                }
            }
        base.clearEvents()
        base.$elem
                .attr('style', base.$elem.data('owl-originalStyles') || '')
                .attr('class', base.$elem.data('owl-originalClasses'))
      },

      destroy: function () {
        var base = this
        base.stop()
        window.clearInterval(base.checkVisible)
        base.unWrap()
        base.$elem.removeData()
      },

      reinit: function (newOptions) {
        var base = this,
            options = $.extend({}, base.userOptions, newOptions)
        base.unWrap()
        base.init(options, base.$elem)
      },

      addItem: function (htmlString, targetPosition) {
        var base = this,
            position;

        if (!htmlString) { return false }

        if (base.$elem.children().length === 0) {
            base.$elem.append(htmlString)
            base.setVars()
            return false
          }
        base.unWrap()
        if (targetPosition === undefined || targetPosition === -1) {
              position = -1
            } else {
              position = targetPosition
            }
        if (position >= base.$userItems.length || position === -1) {
            base.$userItems.eq(-1).after(htmlString)
          } else {
            base.$userItems.eq(position).before(htmlString)
          }

        base.setVars()
      },

      removeItem: function (targetPosition) {
        var base = this,
            position;

        if (base.$elem.children().length === 0) {
            return false
          }
        if (targetPosition === undefined || targetPosition === -1) {
            position = -1
          } else {
            position = targetPosition
          }

        base.unWrap()
        base.$userItems.eq(position).remove()
        base.setVars()
      }

    }

  $.fn.owlCarousel = function (options) {
      return this.each(function () {
        if ($(this).data('owl-init') === true) {
            return false
          }
        $(this).data('owl-init', true)
        var carousel = Object.create(Carousel)
        carousel.init(options, this)
        $.data(this, 'owlCarousel', carousel)
      })
    }

  $.fn.owlCarousel.options = {

      items: 5,
      itemsCustom: false,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
      singleItem: false,
      itemsScaleUp: false,

      slideSpeed: 200,
      paginationSpeed: 800,
      rewindSpeed: 1000,

      autoPlay: false,
      stopOnHover: false,

      navigation: false,
      navigationText: ['prev', 'next'],
      rewindNav: true,
      scrollPerPage: false,

      pagination: true,
      paginationNumbers: false,

      responsive: true,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window,

      baseClass: 'owl-carousel',
      theme: 'owl-theme',

      lazyLoad: false,
      lazyFollow: true,
      lazyEffect: 'fade',

      autoHeight: false,

      jsonPath: false,
      jsonSuccess: false,

      dragBeforeAnimFinish: true,
      mouseDrag: true,
      touchDrag: true,

      addClassActive: false,
      transitionStyle: false,

      beforeUpdate: false,
      afterUpdate: false,
      beforeInit: false,
      afterInit: false,
      beforeMove: false,
      afterMove: false,
      afterAction: false,
      startDragging: false,
      afterLazyLoad: false
    }
}(jQuery, window, document))
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function (window, document, undefined) {
  var version = '2.8.3',

      Modernizr = {},

    /* >>cssclasses */
    // option for enabling the HTML classes to be added
      enableClasses = true,
    /* >>cssclasses */

      docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
      mod = 'modernizr',
      modElem = document.createElement(mod),
      mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
      inputElem /* >>inputelem */ = document.createElement('input') /* >>inputelem */,

    /* >>smile */
      smile = ':)',
    /* >>smile */

      toString = {}.toString,

    // TODO :: make the prefixes more granular
    /* >>prefixes */
    // List of property values to set for css tests. See ticket #21
      prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /* >>prefixes */

    /* >>domprefixes */
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
      omPrefixes = 'Webkit Moz O ms',

      cssomPrefixes = omPrefixes.split(' '),

      domPrefixes = omPrefixes.toLowerCase().split(' '),
    /* >>domprefixes */

    /* >>ns */
      ns = {'svg': 'http://www.w3.org/2000/svg'},
    /* >>ns */

      tests = {},
      inputs = {},
      attrs = {},

      classes = [],

      slice = classes.slice,

      featureName, // used in testing loop

    /* >>teststyles */
    // Inject element with style element and some CSS rules
      injectElementWithStyles = function (rule, callback, nodes, testnames) {
        var style, ret, node, docOverflow,
        div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
        body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
        fakeBody = body || document.createElement('body')

        if (parseInt(nodes, 10)) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
        while (nodes--) {
          node = document.createElement('div')
          node.id = testnames ? testnames[nodes] : mod + (nodes + 1)
          div.appendChild(node)
        }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
        style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('')
        div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
        (body ? div : fakeBody).innerHTML += style
        fakeBody.appendChild(div)
        if (!body) {
          // avoid crashing IE8, if background image is used
        fakeBody.style.background = ''
          // Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
        fakeBody.style.overflow = 'hidden'
        docOverflow = docElement.style.overflow
        docElement.style.overflow = 'hidden'
        docElement.appendChild(fakeBody)
      }

        ret = callback(div, rule)
      // If this is done after page load we don't want to remove the body so check if body exists
        if (!body) {
        fakeBody.parentNode.removeChild(fakeBody)
        docElement.style.overflow = docOverflow
      } else {
        div.parentNode.removeChild(div)
      }

        return !!ret
    },
    /* >>teststyles */

    /* >>mq */
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
      testMediaQuery = function (mq) {
        var matchMedia = window.matchMedia || window.msMatchMedia
        if (matchMedia) {
        return matchMedia(mq) && matchMedia(mq).matches || false
      }

        var bool

        injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function (node) {
        bool = (window.getComputedStyle
                  ? getComputedStyle(node, null)
                  : node.currentStyle)['position'] == 'absolute'
      })

      return bool
     },
     /* >>mq */

    /* >>hasevent */
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
      isEventSupported = (function () {
        var TAGNAMES = {
        'select': 'input',
        'change': 'input',
        'submit': 'form',
        'reset': 'form',
        'error': 'img',
        'load': 'img',
        'abort': 'img'
      }

        function isEventSupported (eventName, element) {
        element = element || document.createElement(TAGNAMES[eventName] || 'div')
        eventName = 'on' + eventName

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element

        if (!isSupported) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if (!element.setAttribute) {
            element = document.createElement('div')
          }
          if (element.setAttribute && element.removeAttribute) {
            element.setAttribute(eventName, '')
            isSupported = is(element[eventName], 'function')

            // If property was created, "remove it" (by setting value to `undefined`)
            if (!is(element[eventName], 'undefined')) {
              element[eventName] = undefined
            }
            element.removeAttribute(eventName)
          }
        }

        element = null
        return isSupported
      }
        return isEventSupported
      })(),
    /* >>hasevent */

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
      _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp

  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property)
      }
    }    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'))
      }
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

  if (!Function.prototype.bind) {
    Function.prototype.bind = function bind (that) {
        var target = this

        if (typeof target !== 'function') {
          throw new TypeError()
        }

        var args = slice.call(arguments, 1),
          bound = function () {
            if (this instanceof bound) {
              var F = function () {}
              F.prototype = target.prototype
              var self = new F()

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              )
              if (Object(result) === result) {
                return result
              }
              return self
            } else {
              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              )
            }
            }

        return bound
      }
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
  function setCss (str) {
    mStyle.cssText = str
  }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
  function setCssAll (str1, str2) {
    return setCss(prefixes.join(str1 + ';') + (str2 || ''))
  }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
  function is (obj, type) {
    return typeof obj === type
  }

    /**
     * contains returns a boolean for if substr is found within str.
     */
  function contains (str, substr) {
    return !!~('' + str).indexOf(substr)
  }

    /* >>testprop */

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

  function testProps (props, prefixed) {
    for (var i in props) {
        var prop = props[i]
        if (!contains(prop, '-') && mStyle[prop] !== undefined) {
              return prefixed == 'pfx' ? prop : true
            }
      }
    return false
  }
    /* >>testprop */

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
  function testDOMProps (props, obj, elem) {
    for (var i in props) {
        var item = obj[props[i]]
        if (item !== undefined) {
                // return the property name as a string
              if (elem === false) return props[i]

                // let's bind a function
              if (is(item, 'function')) {
                  // default to autobind unless override
                  return item.bind(elem || obj)
                }

                // return the unbound function or obj or value
              return item
            }
      }
    return false
  }

    /* >>testallprops */
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
  function testPropsAll (prop, prefixed, elem) {
    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
          props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ')

        // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
          return testProps(props, prefixed)

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ')
          return testDOMProps(props, prefixed, elem)
        }
  }
    /* >>testallprops */

    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

  tests['flexbox'] = function () {
    return testPropsAll('flexWrap')
  };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

  tests['flexboxlegacy'] = function () {
    return testPropsAll('boxDirection')
  };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

  tests['canvas'] = function () {
    var elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
  };

  tests['canvastext'] = function () {
    return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'))
  };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

  tests['webgl'] = function () {
    return !!window.WebGLRenderingContext
  };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

  tests['touch'] = function () {
    var bool

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true
        } else {
          injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function (node) {
            bool = node.offsetTop === 9
          })
        }

    return bool
  };

    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

  tests['geolocation'] = function () {
    return 'geolocation' in navigator
  };

  tests['postmessage'] = function () {
    return !!window.postMessage
  };

    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
  tests['websqldatabase'] = function () {
    return !!window.openDatabase
  };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
  tests['indexedDB'] = function () {
    return !!testPropsAll('indexedDB', window)
  };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
  tests['hashchange'] = function () {
    return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7)
  };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
  tests['history'] = function () {
    return !!(window.history && history.pushState)
  };

  tests['draganddrop'] = function () {
    var div = document.createElement('div')
    return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)
  };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
  tests['websockets'] = function () {
    return 'WebSocket' in window || 'MozWebSocket' in window
  };

    // css-tricks.com/rgba-browser-support/
  tests['rgba'] = function () {
        // Set an rgba() color and check the returned value

    setCss('background-color:rgba(150,255,150,.5)')

    return contains(mStyle.backgroundColor, 'rgba')
  };

  tests['hsla'] = function () {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

    setCss('background-color:hsla(120,40%,100%,.5)')

    return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla')
  };

  tests['multiplebgs'] = function () {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

    setCss('background:url(https://),url(https://),red url(https://)')

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

    return (/(url\s*\(.*?){3}/).test(mStyle.background)
  };

    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

  tests['backgroundsize'] = function () {
    return testPropsAll('backgroundSize')
  };

  tests['borderimage'] = function () {
    return testPropsAll('borderImage')
  };

    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

  tests['borderradius'] = function () {
    return testPropsAll('borderRadius')
  };

    // WebOS unfortunately false positives on this test.
  tests['boxshadow'] = function () {
    return testPropsAll('boxShadow')
  };

    // FF3.0 will false positive on this test
  tests['textshadow'] = function () {
    return document.createElement('div').style.textShadow === ''
  };

  tests['opacity'] = function () {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

    setCssAll('opacity:.55')

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
    return (/^0.55$/).test(mStyle.opacity)
  };

    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   goo.gl/v3V4Gp
  tests['cssanimations'] = function () {
    return testPropsAll('animationName')
  };

  tests['csscolumns'] = function () {
    return testPropsAll('columnCount')
  };

  tests['cssgradients'] = function () {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

    var str1 = 'background-image:',
        str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        str3 = 'linear-gradient(left top,#9f9, white);'

    setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        )

    return contains(mStyle.backgroundImage, 'gradient')
  };

  tests['cssreflections'] = function () {
    return testPropsAll('boxReflect')
  };

  tests['csstransforms'] = function () {
    return !!testPropsAll('transform')
  };

  tests['csstransforms3d'] = function () {
    var ret = !!testPropsAll('perspective')

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
    if (ret && 'webkitPerspective' in docElement.style) {
          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3
          })
        }
    return ret
  };

  tests['csstransitions'] = function () {
    return testPropsAll('transition')
  };

    /* >>fontface */
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
  tests['fontface'] = function () {
    var bool

    injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function (node, rule) {
          var style = document.getElementById('smodernizr'),
            sheet = style.sheet || style.styleSheet,
            cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : ''

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0
        })

      return bool
  };
    /* >>fontface */

    // CSS generated content detection
  tests['generatedcontent'] = function () {
    var bool

    injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function (node) {
          bool = node.offsetHeight >= 3
        })

      return bool
  };

    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

  tests['video'] = function () {
    var elem = document.createElement('video'),
        bool = false

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
    try {
          if (bool = !!elem.canPlayType) {
            bool = new Boolean(bool)
            bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '')

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '')

            bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '')
          }
        } catch (e) { }

    return bool
  };

  tests['audio'] = function () {
    var elem = document.createElement('audio'),
        bool = false

    try {
          if (bool = !!elem.canPlayType) {
            bool = new Boolean(bool)
            bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')
            bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '')

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
            bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')
            bool.m4a = (elem.canPlayType('audio/x-m4a;') ||
                              elem.canPlayType('audio/aac;')).replace(/^no$/, '')
          }
        } catch (e) { }

    return bool
  };

    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

  tests['localstorage'] = function () {
    try {
        localStorage.setItem(mod, mod)
        localStorage.removeItem(mod)
        return true
      } catch (e) {
        return false
      }
  }

  tests['sessionstorage'] = function () {
      try {
        sessionStorage.setItem(mod, mod)
        sessionStorage.removeItem(mod)
        return true
      } catch (e) {
        return false
      }
    }

  tests['webworkers'] = function () {
      return !!window.Worker
    }

  tests['applicationcache'] = function () {
    return !!window.applicationCache
  };

    // Thanks to Erik Dahlstrom
  tests['svg'] = function () {
    return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect
  };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
  tests['inlinesvg'] = function () {
    var div = document.createElement('div')
    div.innerHTML = '<svg/>'
    return (div.firstChild && div.firstChild.namespaceURI) == ns.svg
  };

    // SVG SMIL animation
  tests['smil'] = function () {
    return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')))
  };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
  tests['svgclippaths'] = function () {
    return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')))
  };

    /* >>webforms */
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
  function webforms () {
        /* >>input */
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
    Modernizr['input'] = (function (props) {
        for (var i = 0, len = props.length; i < len; i++) {
            attrs[ props[i] ] = !!(props[i] in inputElem)
          }
        if (attrs.list) {
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
            attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement)
          }
        return attrs
      })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '))
        /* >>input */

        /* >>inputtypes */
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
    Modernizr['inputtypes'] = (function (props) {
          for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {
              inputElem.setAttribute('type', inputElemType = props[i])
              bool = inputElem.type !== 'text'

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
              if (bool) {
                  inputElem.value = smile
                  inputElem.style.cssText = 'position:absolute;visibility:hidden;'

                  if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
                      docElement.appendChild(inputElem)
                      defaultView = document.defaultView

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool = defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0)

                      docElement.removeChild(inputElem)
                    } else if (/^(search|tel)$/.test(inputElemType)) {
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if (/^(url|email)$/.test(inputElemType)) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false
                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile
                    }
                }

              inputs[ props[i] ] = !!bool
            }
          return inputs
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '))
        /* >>inputtypes */
  }
    /* >>webforms */

    // End of test definitions
    // -----------------------

    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
  for (var feature in tests) {
    if (hasOwnProp(tests, feature)) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
        featureName = feature.toLowerCase()
        Modernizr[featureName] = tests[feature]()

        classes.push((Modernizr[featureName] ? '' : 'no-') + featureName)
      }
  }

    /* >>webforms */
    // input tests need to run.
  Modernizr.input || webforms()
    /* >>webforms */

    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
  Modernizr.addTest = function (feature, test) {
       if (typeof feature === 'object') {
         for (var key in feature) {
           if (hasOwnProp(feature, key)) {
             Modernizr.addTest(key, feature[ key ])
           }
         }
       } else {
         feature = feature.toLowerCase()

         if (Modernizr[feature] !== undefined) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr
         }

         test = typeof test === 'function' ? test() : test

         if (typeof enableClasses !== 'undefined' && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature
         }
         Modernizr[feature] = test
       }

       return Modernizr // allow chaining.
     }

    // Reset modElem.cssText to nothing to reduce memory footprint.
  setCss('')
  modElem = inputElem = null

    /* >>shiv */
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function (window, document) {
        /* jshint evil:true */
        /** version */
      var version = '3.7.0'

        /** Preset options */
      var options = window.html5 || {}

        /** Used to skip problem elements */
      var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i

        /** Not all elements can be cloned in IE **/
      var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i

        /** Detect whether the browser supports default html5 styles */
      var supportsHtml5Styles

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
      var expando = '_html5shiv'

        /** The id for the the documents expando */
      var expanID = 0

        /** Cached data for each document */
      var expandoData = {}

        /** Detect whether the browser supports unknown elements */
      var supportsUnknownElements;

      (function () {
        try {
            var a = document.createElement('a')
            a.innerHTML = '<xyz></xyz>'
            // if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a)

            supportsUnknownElements = a.childNodes.length == 1 || (function () {
              // assign a false positive if unable to shiv
              (document.createElement)('a')
              var frag = document.createDocumentFragment()
              return (
                typeof frag.cloneNode === 'undefined' ||
                typeof frag.createDocumentFragment === 'undefined' ||
                typeof frag.createElement === 'undefined'
              )
            }())
          } catch (e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true
            supportsUnknownElements = true
          }
        }())

        /* -------------------------------------------------------------------------- */

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
      function addStyleSheet (ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement

          p.innerHTML = 'x<style>' + cssText + '</style>'
          return parent.insertBefore(p.lastChild, parent.firstChild)
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
      function getElements () {
        var elements = html5.elements
        return typeof elements === 'string' ? elements.split(' ') : elements
      }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
      function getExpandoData (ownerDocument) {
        var data = expandoData[ownerDocument[expando]]
        if (!data) {
            data = {}
            expanID++
            ownerDocument[expando] = expanID
            expandoData[expanID] = data
          }
        return data
      }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
      function createElement (nodeName, ownerDocument, data) {
        if (!ownerDocument) {
            ownerDocument = document
          }
        if (supportsUnknownElements) {
            return ownerDocument.createElement(nodeName)
          }
        if (!data) {
            data = getExpandoData(ownerDocument)
          }
        var node

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode()
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode()
          } else {
            node = data.createElem(nodeName)
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node
      }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
      function createDocumentFragment (ownerDocument, data) {
        if (!ownerDocument) {
            ownerDocument = document
          }
        if (supportsUnknownElements) {
            return ownerDocument.createDocumentFragment()
          }
        data = data || getExpandoData(ownerDocument)
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length
        for (;i < l; i++) {
            clone.createElement(elems[i])
          }
        return clone
      }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
      function shivMethods (ownerDocument, data) {
        if (!data.cache) {
            data.cache = {}
            data.createElem = ownerDocument.createElement
            data.createFrag = ownerDocument.createDocumentFragment
            data.frag = data.createFrag()
          }

        ownerDocument.createElement = function (nodeName) {
            // abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName)
            }
            return createElement(nodeName, ownerDocument, data)
          }

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function (nodeName) {
                                                            data.createElem(nodeName)
                                                            data.frag.createElement(nodeName)
                                                            return 'c("' + nodeName + '")'
                                                          }) +
            ');return n}'
                                                         )(html5, data.frag)
      }

        /* -------------------------------------------------------------------------- */

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
      function shivDocument (ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document
          }
        var data = getExpandoData(ownerDocument)

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         )
          }
        if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data)
          }
        return ownerDocument
      }

        /* -------------------------------------------------------------------------- */

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
      var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
        'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
        'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
        'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
        'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
        'type': 'default',

          // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,

          // creates a shived element
        createElement: createElement,

          // creates a shived documentFragment
        createDocumentFragment: createDocumentFragment
      }

        /* -------------------------------------------------------------------------- */

        // expose html5
      window.html5 = html5

        // shiv the document
      shivDocument(document)
    }(this, document))
    /* >>shiv */

    // Assign private properties to the return object with prefix
  Modernizr._version = version

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /* >>prefixes */
  Modernizr._prefixes = prefixes
    /* >>prefixes */
    /* >>domprefixes */
  Modernizr._domPrefixes = domPrefixes
  Modernizr._cssomPrefixes = cssomPrefixes
    /* >>domprefixes */

    /* >>mq */
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
  Modernizr.mq = testMediaQuery
    /* >>mq */

    /* >>hasevent */
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
  Modernizr.hasEvent = isEventSupported
    /* >>hasevent */

    /* >>testprop */
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
  Modernizr.testProp = function (prop) {
      return testProps([prop])
    }
    /* >>testprop */

    /* >>testallprops */
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
  Modernizr.testAllProps = testPropsAll
    /* >>testallprops */

    /* >>teststyles */
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
  Modernizr.testStyles = injectElementWithStyles
    /* >>teststyles */

    /* >>prefixed */
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

  Modernizr.prefixed = function (prop, obj, elem) {
      if (!obj) {
        return testPropsAll(prop, 'pfx')
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem)
      }
    }
    /* >>prefixed */

    /* >>cssclasses */
    // Remove "no-js" class from <html> element, if it exists:
  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '')
    /* >>cssclasses */

  return Modernizr
})(this, this.document)

/*

    countUp.js
    (c) 2014-2015 @inorganik
    Licensed under the MIT license.

*/

// target = id of html element or var of previously selected html element where counting occurs
// startVal = the value you want to begin at
// endVal = the value you want to arrive at
// decimals = number of decimal places, default 0
// duration = duration of animation in seconds, default 2
// options = optional object of options (see below)

var CountUp = function (target, startVal, endVal, decimals, duration, options) {
    // make sure requestAnimationFrame and cancelAnimationFrame are defined
    // polyfill for browsers without native support
    // by Opera engineer Erik Möller
  var lastTime = 0
  var vendors = ['webkit', 'moz', 'ms', 'o']
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
      window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
    }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime()
        var timeToCall = Math.max(0, 16 - (currTime - lastTime))
        var id = window.setTimeout(function () { callback(currTime + timeToCall) },
              timeToCall)
        lastTime = currTime + timeToCall
        return id
      };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
        clearTimeout(id)
      };
  }

     // default options
  this.options = {
    useEasing: true, // toggle easing
    useGrouping: true, // 1,000,000 vs 1000000
    separator: ',', // character to use as a separator
    decimal: '.', // character to use as a decimal
    postFormatter: null // post formatter to run after internal formatting
  }
    // extend default options with passed options object
  for (var key in options) {
      if (options.hasOwnProperty(key)) {
        this.options[key] = options[key]
      }
    }
  if (this.options.separator === '') this.options.useGrouping = false
  if (!this.options.prefix) this.options.prefix = ''
  if (!this.options.suffix) this.options.suffix = ''

  this.d = (typeof target === 'string') ? document.getElementById(target) : target
  this.startVal = Number(startVal)
  this.endVal = Number(endVal)
  this.countDown = (this.startVal > this.endVal)
  this.frameVal = this.startVal
  this.decimals = Math.max(0, decimals || 0)
  this.dec = Math.pow(10, this.decimals)
  this.duration = Number(duration) * 1000 || 2000
  var self = this

  this.version = function () { return '1.6.1' }

    // Print value to target
  this.printValue = function (value) {
    var result = (!isNaN(value)) ? self.formatNumber(value) : '--'
    if (self.d.tagName == 'INPUT') {
          this.d.value = result
        }      else if (self.d.tagName == 'text' || self.d.tagName == 'tspan') {
        this.d.textContent = result
      }      else {
        this.d.innerHTML = result
      }
  }

    // Robert Penner's easeOutExpo
  this.easeOutExpo = function (t, b, c, d) {
      return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b
    }
  this.count = function (timestamp) {
    if (!self.startTime) self.startTime = timestamp

    self.timestamp = timestamp

    var progress = timestamp - self.startTime
    self.remaining = self.duration - progress

        // to ease or not to ease
    if (self.options.useEasing) {
          if (self.countDown) {
            self.frameVal = self.startVal - self.easeOutExpo(progress, 0, self.startVal - self.endVal, self.duration)
          } else {
            self.frameVal = self.easeOutExpo(progress, self.startVal, self.endVal - self.startVal, self.duration)
          }
        } else {
          if (self.countDown) {
            self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration))
          } else {
            self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration)
          }
        }

        // don't go past endVal since progress can exceed duration in the last frame
    if (self.countDown) {
        self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal
      } else {
        self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal
      }

        // decimal
    self.frameVal = Math.floor(self.frameVal * self.dec) / self.dec

        // format and print value
    self.printValue(self.frameVal)

        // whether to continue
    if (progress < self.duration) {
          self.rAF = requestAnimationFrame(self.count)
        } else {
          if (self.callback) self.callback()
        }
  }
    // start your animation
  this.start = function (callback) {
      self.callback = callback
      self.rAF = requestAnimationFrame(self.count)
      return false
    }
    // toggles pause/resume animation
  this.pauseResume = function () {
    if (!self.paused) {
        self.paused = true
        cancelAnimationFrame(self.rAF)
      } else {
        self.paused = false
        delete self.startTime
        self.duration = self.remaining
        self.startVal = self.frameVal
        requestAnimationFrame(self.count)
      }
  }
    // reset to startVal so animation can be run again
  this.reset = function () {
      self.paused = false
      delete self.startTime
      self.startVal = startVal
      cancelAnimationFrame(self.rAF)
      self.printValue(self.startVal)
    }
    // pass a new endVal and start animation
  this.update = function (newEndVal) {
    cancelAnimationFrame(self.rAF)
    self.paused = false
    delete self.startTime
    self.startVal = self.frameVal
    self.endVal = Number(newEndVal)
    self.countDown = (self.startVal > self.endVal)
    self.rAF = requestAnimationFrame(self.count)
  };
  this.formatNumber = function (nStr) {
    nStr = nStr.toFixed(self.decimals)
    nStr += ''
    var x, x1, x2, rgx
    x = nStr.split('.')
    x1 = x[0]
    x2 = x.length > 1 ? self.options.decimal + x[1] : ''
    rgx = /(\d+)(\d{3})/
    if (self.options.useGrouping) {
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + self.options.separator + '$2')
          }
        }
    var value = self.options.prefix + x1 + x2 + self.options.suffix
    if (self.options.postFormatter != null) {
          value = self.options.postFormatter(value)
        }
    return value
  };

    // format startVal on initialization
  self.printValue(self.startVal)
};

// Example:
// var numAnim = new countUp("SomeElementYouWantToAnimate", 0, 99.99, 2, 2.5);
// numAnim.start();
// numAnim.update(135);
// with optional callback:
// numAnim.start(someMethodToCallOnComplete);

(function () {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function (fn, me) { return function () { return fn.apply(me, arguments) } },
    indexOf = [].indexOf || function (item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i } return -1 }

  Util = (function () {
    function Util () {}

    Util.prototype.extend = function (custom, defaults) {
      var key, value
      for (key in defaults) {
        value = defaults[key]
        if (custom[key] == null) {
          custom[key] = value
        }
      }
      return custom
    }

    Util.prototype.isMobile = function (agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
    }

    Util.prototype.createEvent = function (event, bubble, cancel, detail) {
      var customEvent
      if (bubble == null) {
        bubble = false
      }
      if (cancel == null) {
        cancel = false
      }
      if (detail == null) {
        detail = null
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent')
        customEvent.initCustomEvent(event, bubble, cancel, detail)
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject()
        customEvent.eventType = event
      } else {
        customEvent.eventName = event
      }
      return customEvent
    }

    Util.prototype.emitEvent = function (elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event)
      } else if (event in (elem != null)) {
        return elem[event]()
      } else if (('on' + event) in (elem != null)) {
        return elem['on' + event]()
      }
    }

    Util.prototype.addEvent = function (elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false)
      } else if (elem.attachEvent != null) {
        return elem.attachEvent('on' + event, fn)
      } else {
        return elem[event] = fn
      }
    }

    Util.prototype.removeEvent = function (elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false)
      } else if (elem.detachEvent != null) {
        return elem.detachEvent('on' + event, fn)
      } else {
        return delete elem[event]
      }
    }

    Util.prototype.innerHeight = function () {
      if ('innerHeight' in window) {
        return window.innerHeight
      } else {
        return document.documentElement.clientHeight
      }
    }

    return Util
  })()

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function () {
    function WeakMap () {
      this.keys = []
      this.values = []
    }

    WeakMap.prototype.get = function (key) {
      var i, item, j, len, ref
      ref = this.keys
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i]
        if (item === key) {
          return this.values[i]
        }
      }
    }

    WeakMap.prototype.set = function (key, value) {
      var i, item, j, len, ref
      ref = this.keys
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i]
        if (item === key) {
          this.values[i] = value
          return
        }
      }
      this.keys.push(key)
      return this.values.push(value)
    }

    return WeakMap
  })())

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function () {
    function MutationObserver () {
      if (typeof console !== 'undefined' && console !== null) {
        console.warn('MutationObserver is not supported by your browser.')
      }
      if (typeof console !== 'undefined' && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.')
      }
    }

    MutationObserver.notSupported = true

    MutationObserver.prototype.observe = function () {}

    return MutationObserver
  })())

  getComputedStyle = this.getComputedStyle || function (el, pseudo) {
    this.getPropertyValue = function (prop) {
      var ref
      if (prop === 'float') {
        prop = 'styleFloat'
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function (_, _char) {
          return _char.toUpperCase()
        })
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null
    }
    return this
  }

  getComputedStyleRX = /(\-([a-z]){1})/g

  this.WOW = (function () {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null
    }

    function WOW (options) {
      if (options == null) {
        options = {}
      }
      this.scrollCallback = bind(this.scrollCallback, this)
      this.scrollHandler = bind(this.scrollHandler, this)
      this.resetAnimation = bind(this.resetAnimation, this)
      this.start = bind(this.start, this)
      this.scrolled = true
      this.config = this.util().extend(options, this.defaults)
      this.animationNameCache = new WeakMap()
      this.wowEvent = this.util().createEvent(this.config.boxClass)
    }

    WOW.prototype.init = function () {
      var ref
      this.element = window.document.documentElement
      if ((ref = document.readyState) === 'interactive' || ref === 'complete') {
        this.start()
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start)
      }
      return this.finished = []
    }

    WOW.prototype.start = function () {
      var box, j, len, ref
      this.stopped = false
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }.call(this))
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }.call(this))
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle()
        } else {
          ref = this.boxes
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j]
            this.applyStyle(box, true)
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(window, 'scroll', this.scrollHandler)
        this.util().addEvent(window, 'resize', this.scrollHandler)
        this.interval = setInterval(this.scrollCallback, 50)
      }
      if (this.config.live) {
        return new MutationObserver((function (_this) {
          return function (records) {
            var k, len1, node, record, results
            results = []
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k]
              results.push(function () {
                var l, len2, ref1, results1
                ref1 = record.addedNodes || []
                results1 = []
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l]
                  results1.push(this.doSync(node))
                }
                return results1
              }.call(_this))
            }
            return results
          }
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        })
      }
    }

    WOW.prototype.stop = function () {
      this.stopped = true
      this.util().removeEvent(window, 'scroll', this.scrollHandler)
      this.util().removeEvent(window, 'resize', this.scrollHandler)
      if (this.interval != null) {
        return clearInterval(this.interval)
      }
    }

    WOW.prototype.sync = function (element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element)
      }
    }

    WOW.prototype.doSync = function (element) {
      var box, j, len, ref, results
      if (element == null) {
        element = this.element
      }
      if (element.nodeType !== 1) {
        return
      }
      element = element.parentNode || element
      ref = element.querySelectorAll('.' + this.config.boxClass)
      results = []
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j]
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box)
          this.all.push(box)
          if (this.stopped || this.disabled()) {
            this.resetStyle()
          } else {
            this.applyStyle(box, true)
          }
          results.push(this.scrolled = true)
        } else {
          results.push(void 0)
        }
      }
      return results
    }

    WOW.prototype.show = function (box) {
      this.applyStyle(box)
      box.className = box.className + ' ' + this.config.animateClass
      if (this.config.callback != null) {
        this.config.callback(box)
      }
      this.util().emitEvent(box, this.wowEvent)
      this.util().addEvent(box, 'animationend', this.resetAnimation)
      this.util().addEvent(box, 'oanimationend', this.resetAnimation)
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation)
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation)
      return box
    }

    WOW.prototype.applyStyle = function (box, hidden) {
      var delay, duration, iteration
      duration = box.getAttribute('data-wow-duration')
      delay = box.getAttribute('data-wow-delay')
      iteration = box.getAttribute('data-wow-iteration')
      return this.animate((function (_this) {
        return function () {
          return _this.customStyle(box, hidden, duration, delay, iteration)
        }
      })(this))
    }

    WOW.prototype.animate = (function () {
      if ('requestAnimationFrame' in window) {
        return function (callback) {
          return window.requestAnimationFrame(callback)
        }
      } else {
        return function (callback) {
          return callback()
        }
      }
    })()

    WOW.prototype.resetStyle = function () {
      var box, j, len, ref, results
      ref = this.boxes
      results = []
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j]
        results.push(box.style.visibility = 'visible')
      }
      return results
    }

    WOW.prototype.resetAnimation = function (event) {
      var target
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement
        return target.className = target.className.replace(this.config.animateClass, '').trim()
      }
    }

    WOW.prototype.customStyle = function (box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box)
      }
      box.style.visibility = hidden ? 'hidden' : 'visible'
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        })
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        })
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        })
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      })
      return box
    }

    WOW.prototype.vendors = ['moz', 'webkit']

    WOW.prototype.vendorSet = function (elem, properties) {
      var name, results, value, vendor
      results = []
      for (name in properties) {
        value = properties[name]
        elem['' + name] = value
        results.push(function () {
          var j, len, ref, results1
          ref = this.vendors
          results1 = []
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j]
            results1.push(elem['' + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value)
          }
          return results1
        }.call(this))
      }
      return results
    }

    WOW.prototype.vendorCSS = function (elem, property) {
      var j, len, ref, result, style, vendor
      style = getComputedStyle(elem)
      result = style.getPropertyCSSValue(property)
      ref = this.vendors
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j]
        result = result || style.getPropertyCSSValue('-' + vendor + '-' + property)
      }
      return result
    }

    WOW.prototype.animationName = function (box) {
      var animationName
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText
      } catch (_error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name')
      }
      if (animationName === 'none') {
        return ''
      } else {
        return animationName
      }
    }

    WOW.prototype.cacheAnimationName = function (box) {
      return this.animationNameCache.set(box, this.animationName(box))
    }

    WOW.prototype.cachedAnimationName = function (box) {
      return this.animationNameCache.get(box)
    }

    WOW.prototype.scrollHandler = function () {
      return this.scrolled = true
    }

    WOW.prototype.scrollCallback = function () {
      var box
      if (this.scrolled) {
        this.scrolled = false
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }.call(this))
        if (!(this.boxes.length || this.config.live)) {
          return this.stop()
        }
      }
    }

    WOW.prototype.offsetTop = function (element) {
      var top
      while (element.offsetTop === void 0) {
        element = element.parentNode
      }
      top = element.offsetTop
      while (element = element.offsetParent) {
        top += element.offsetTop
      }
      return top
    }

    WOW.prototype.isVisible = function (box) {
      var bottom, offset, top, viewBottom, viewTop
      offset = box.getAttribute('data-wow-offset') || this.config.offset
      viewTop = window.pageYOffset
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset
      top = this.offsetTop(box)
      bottom = top + box.clientHeight
      return top <= viewBottom && bottom >= viewTop
    }

    WOW.prototype.util = function () {
      return this._util != null ? this._util : this._util = new Util()
    }

    WOW.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }

    return WOW
  })()
}).call(this)

/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!(function (t) { "use strict"; "function"===typeof define && define.amd ? define(['jquery'], t):'undefined'!=typeof module && module.exports ? module.exports = t(require('jquery')):t(jQuery) }(function (t) {
var e = -1, o = -1, i = function (t) { return parseFloat(t) || 0 }, a = function (e) { var o = 1, a = t(e), n = null, r = []; return a.each(function () { var e = t(this), a = e.offset().top - i(e.css('margin-top')), s = r.length > 0 ? r[r.length - 1]:null; null === s ? r.push(e):Math.floor(Math.abs(n - a)) <= o ? r[r.length - 1] = s.add(e):r.push(e), n = a }), r }, n = function (e) {
var o = {
  byRow: !0, property: "height", target: null, remove: !1}; return "object"===typeof e ? t.extend(o, e):('boolean'==typeof e ? o.byRow = e:'remove'===e && (o.remove = !0), o)
}, r = t.fn.matchHeight = function (e) { var o = n(e); if (o.remove) { var i = this; return this.css(o.property, ""), t.each(r._groups, function (t, e) { e.elements = e.elements.not(i) }), this } return this.length <= 1 && !o.target ? this:(r._groups.push({elements: this, options: o}), r._apply(this, o), this) }; r.version = "0.7.0", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
r._afterUpdate = null, r._rows = a, r._parse = i, r._parseOptions = n, r._apply = function (e, o) { var s = n(o), h = t(e), l = [h], c = t(window).scrollTop(), p = t('html').outerHeight(!0), d = h.parents().filter(':hidden'); return d.each(function () { var e = t(this); e.data('style-cache', e.attr('style')) }), d.css('display', "block"), s.byRow && !s.target && (h.each(function () { var e = t(this), o = e.css('display'); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data('style-cache', e.attr('style')), e.css({display: o, "padding-top": "0",
  "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0",
"border-bottom-width": "0",
height: "100px", overflow: "hidden"})
}), l = a(h), h.each(function () { var e = t(this); e.attr('style', e.data('style-cache') || "") })), t.each(l, function (e, o) { var a = t(o), n = 0; if (s.target)n = s.target.outerHeight(!1); else { if (s.byRow && a.length <= 1) return void a.css(s.property, ""); a.each(function () {
var e = t(this), o = e.attr('style'), i = e.css('display'); "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"); var a = {
  display: i}; a[s.property] = "", e.css(a), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr('style', o):e.css('display', "")
})
}a.each(function () { var e = t(this), o = 0; s.target && e.is(s.target) || ('border-box'!==e.css('box-sizing') && (o += i(e.css('border-top-width')) + i(e.css('border-bottom-width')), o += i(e.css('padding-top')) + i(e.css('padding-bottom'))), e.css(s.property, n - o + "px")) }) }), d.each(function () { var e = t(this); e.attr('style', e.data('style-cache') || null) }), r._maintainScroll && t(window).scrollTop(c / p * t('html').outerHeight(!0)),
this }, r._applyDataApi = function () { var e = {}; t('[data-match-height], [data-mh]').each(function () { var o = t(this), i = o.attr('data-mh') || o.attr('data-match-height'); i in e ? e[i] = e[i].add(o):e[i] = o }), t.each(e, function () { this.matchHeight(!0) }) }; var s = function (e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) }; r._update = function (i, a) {
if (a && "resize" === a.type) { var n = t(window).width(); if (n === e) return; e = n;
}i ? -1 === o && (o = setTimeout(function () { s(a), o = -1 }, r._throttle)):s(a) }, t(r._applyDataApi), t(window).bind('load', function (t) { r._update(!1, t) }), t(window).bind('resize orientationchange', function (t) { r._update(!0, t) }) }))
// # sourceMappingURL=components.js.map
