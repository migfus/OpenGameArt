const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/(Index)-BaoWplX9.js',
            'assets/utils-DTVDdLMG.js',
            'assets/dist-DheK3WGR.js',
            'assets/index.esm-CVQ9ohcb.js',
            'assets/ArtCard-WARVeBgx.js',
            'assets/ArtCard-DNZ6ccCU.css',
            'assets/ArtCardLoader-BgWo2PIi.js',
            'assets/NotifyBanner-CxxirRFJ.js',
            'assets/(Index)-DI7lu8DV.js',
            'assets/(Show)-8uTOXv1w.js',
            'assets/(Index)-CGafEx49.js',
            'assets/keyboard-Dcsxp-mV.js',
            'assets/(Index)-CPpL01oz.css',
            'assets/(Index)-Du_OMb86.js',
            'assets/(Index)-DLY0um-_.css',
            'assets/(Index)-DDR-JfUz.js',
            'assets/(Index)-Os0L-3Kw.css'
        ])
) => i.map((i) => d[i])
import {
    A as e,
    B as t,
    Ct as n,
    E as r,
    F as i,
    G as a,
    I as o,
    J as s,
    K as c,
    L as l,
    M as u,
    O as d,
    P as f,
    Q as p,
    R as m,
    S as h,
    St as g,
    T as _,
    Tt as v,
    U as y,
    V as b,
    W as x,
    X as S,
    Y as C,
    Z as w,
    _ as T,
    _t as ee,
    a as te,
    at as ne,
    b as re,
    c as ie,
    et as E,
    f as D,
    g as ae,
    h as O,
    ht as k,
    it as A,
    j,
    k as M,
    l as oe,
    m as se,
    nt as ce,
    o as le,
    p as ue,
    pt as N,
    rt as P,
    t as F,
    tt as de,
    u as fe,
    v as pe,
    w as me,
    wt as he
} from './utils-DTVDdLMG.js'
import { a as ge, c as I, i as _e, l as ve, o as L, r as ye, s as R } from './dist-DheK3WGR.js'
import { n as be, r as xe, t as Se } from './index.esm-CVQ9ohcb.js'
import { a as Ce, c as z, d as B, f as V, i as we, l as Te, n as H, o as U, r as Ee, s as De, t as W, u as G } from './keyboard-Dcsxp-mV.js'
var Oe = 24,
    ke = L(`AffiliateStore`, () => {
        let e = k([]),
            t = N({ loading: !1 })
        async function n() {
            let t = e.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Oe))
            await Promise.all(
                t.map(async (t) => {
                    let n = await r(t.id, t.title)
                    if (n) {
                        let t = e.value.findIndex((e) => e.id === n.id)
                        t !== -1 && (e.value[t] = n)
                    }
                })
            )
        }
        async function r(e, t) {
            try {
                let { data: n } = await I.put(`/affiliates/uwu`, { method: `refresh`, title: t, id: e })
                return n
            } catch {
                console.log(`error on ArtStore/refreshArt()`)
            }
        }
        return { affiliates: e, config: t, checkAffiliatesForRefresh: n }
    }),
    Ae = 24,
    je = { id: 0, name: `All`, icon: `pixelarticons:checkbox-on-sharp` },
    Me = L(`ArtStore`, () => {
        let e = ae(),
            t = k(ve.CancelToken.source()),
            n = k(ve.CancelToken.source()),
            r = k([]),
            i = k([]),
            a = k([]),
            o = ye(`art_types`, [je]),
            s = N({ search: ``, selected_art_type: o.value[0] }),
            c = k(0),
            l = 0,
            u = k(``),
            d = N({ loading: !1, lazy_page: 1, lazy_loading: !1 })
        async function f(e = l) {
            let t = r.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Ae))
            await Promise.all(
                t.map(async (e) => {
                    let t = await h(e.id)
                    if (t) {
                        let e = r.value.findIndex((e) => e.id === t.id)
                        e !== -1 && (r.value[e] = t)
                    }
                })
            )
        }
        async function p() {
            let e = a.value.filter(
                (e) => (
                    console.log(e.id),
                    console.log(Math.abs(T(e.updated_at).diff(T(), `hours`, !0))),
                    e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Ae
                )
            )
            await Promise.all(
                e.map(async (e) => {
                    let t = await h(e.id)
                    if (t) {
                        let e = a.value.findIndex((e) => e.id === t.id)
                        e !== -1 && (a.value[e] = t)
                    }
                })
            )
        }
        async function m() {
            let e = i.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Ae))
            await Promise.all(
                e.map(async (e) => {
                    let t = await h(e.id)
                    if (t) {
                        let e = i.value.findIndex((e) => e.id === t.id)
                        e !== -1 && (i.value[e] = t)
                    }
                })
            )
        }
        async function h(e) {
            try {
                let { data: t } = await I.put(`/arts/${e}`, { method: `refresh` }, { cancelToken: n.value.token })
                return t
            } catch (e) {
                if (ve.isCancel(e)) return
                console.log(`error on ArtStore/refreshArt()`)
            }
        }
        async function g(t = 1) {
            ;(t === 1 && (l++, n.value.cancel(`Cancelled by getArts(1)`), (n.value = ve.CancelToken.source())), (d.loading = !0))
            try {
                e.replace({ query: { search: s.search, field_art_type_tid: s.selected_art_type.id } })
                let { data: n } = await I.get(`/arts`, { params: { search: s.search, page: t, field_art_type_tid: s.selected_art_type.id } })
                ;((r.value = []),
                    (r.value = n.data),
                    (u.value = n.url),
                    console.log(`getArts Data`, n.data),
                    (c.value = n.total_result),
                    (o.value = [je, ...n.art_types]),
                    (d.lazy_page = 1))
            } catch (e) {
                console.log(`erro on ArtStore/getArts()`, e)
            }
            d.loading = !1
        }
        async function _() {
            d.lazy_loading = !0
            try {
                let { data: e } = await I.get(`/arts`, {
                    params: { search: s.search, page: d.lazy_page, field_art_type_tid: s.selected_art_type.id, lazy: !0 }
                })
                ;(r.value.push(...e.data), f(l))
            } catch (e) {
                console.log(`erro on ArtStore/lazyGetArts()`, e)
            }
            d.lazy_loading = !1
        }
        function v(e = `Requests Cancelled`) {
            ;(t.value.cancel(e), (t.value = ve.CancelToken.source()))
        }
        function y() {
            ce(
                () => s.selected_art_type,
                async () => {
                    ;(await g(1), f())
                }
            )
        }
        return {
            cancelSource: t,
            arts: r,
            new_arts: i,
            weekly_arts: a,
            config: d,
            search_query: s,
            total_result: c,
            art_types: o,
            search_url: u,
            checkWeeklyArtsForRefresh: p,
            checkNewArtsForRefresh: m,
            checkExploreArtsForRefresh: f,
            getArts: g,
            cancelAllRequests: v,
            lazyGetArts: _,
            mountables: y
        }
    }),
    Ne = 24,
    Pe = L(`CollectionStore`, () => {
        let e = k([]),
            t = k([]),
            n = N({ loading: !1 })
        async function r() {
            let n = e.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Ne))
            await Promise.all(
                n.map(async (t) => {
                    let n = await i(t.id)
                    if (n) {
                        let t = e.value.findIndex((e) => e.id === n.id)
                        t !== -1 && (e.value[t] = n)
                    }
                })
            )
            let r = t.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Ne))
            await Promise.all(
                r.map(async (e) => {
                    let n = await i(e.id)
                    if (n) {
                        let e = t.value.findIndex((e) => e.id === n.id)
                        e !== -1 && (t.value[e] = n)
                    }
                })
            )
        }
        async function i(e) {
            try {
                let { data: t } = await I.put(`/collections/${e}`, { method: `refresh` })
                return t
            } catch {
                console.log(`error on CollectionStore/refreshCollection()`)
            }
        }
        return { collections: e, new_collections: t, config: n, checkCollectionForRefresh: r }
    }),
    Fe = 24,
    Ie = L(`ForumStore`, () => {
        let e = k([]),
            t = k([]),
            n = N({ loading: !1, lazy_loading: !1, lazy_page: 1 })
        async function r() {
            let n = t.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Fe))
            await Promise.all(
                n.map(async (t) => {
                    let n = await i(t.id)
                    if (n) {
                        let t = e.value.findIndex((e) => e.id === n.id)
                        t !== -1 && (e.value[t] = n)
                    }
                })
            )
            let r = t.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Fe))
            await Promise.all(
                r.map(async (e) => {
                    let n = await i(e.id)
                    if (n) {
                        let e = t.value.findIndex((e) => e.id === n.id)
                        e !== -1 && (t.value[e] = n)
                    }
                })
            )
        }
        async function i(e) {
            try {
                let { data: t } = await I.put(`/forums/${e}`, { method: `refresh` })
                return t
            } catch {
                console.log(`error on ForumStore/refreshForum()`)
            }
        }
        return { forums: e, recent_forums: t, config: n, checkForumForRefresh: r }
    }),
    Le = 24,
    Re = L(`PostStore`, () => {
        let e = k([]),
            t = k([]),
            n = N({ loading: !1 })
        async function r() {
            let n = e.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Le))
            await Promise.all(
                n.map(async (t) => {
                    let n = await i(t.id)
                    if (n) {
                        let t = e.value.findIndex((e) => e.id === n.id)
                        t !== -1 && (e.value[t] = n)
                    }
                })
            )
            let r = t.value.filter((e) => (e.updated_at == null ? !0 : Math.abs(T(e.updated_at).diff(T(), `hours`, !0)) >= Le))
            await Promise.all(
                r.map(async (e) => {
                    let n = await i(e.id)
                    if (n) {
                        let e = t.value.findIndex((e) => e.id === n.id)
                        e !== -1 && (t.value[e] = n)
                    }
                })
            )
        }
        async function i(e) {
            try {
                let { data: t } = await I.put(`/posts/${e}`, { method: `refresh` })
                return t
            } catch {
                console.log(`error on PostStore/refreshPost()`)
            }
        }
        return { posts: e, recent_posts: t, config: n, checkPostForRefresh: r }
    }),
    ze = L(`navigationStore`, () => {
        let e = Me(),
            { new_arts: t, weekly_arts: n } = R(e),
            { checkWeeklyArtsForRefresh: r, checkNewArtsForRefresh: i } = e,
            a = Ie(),
            { recent_forums: o } = R(a),
            { checkForumForRefresh: s } = a,
            c = Pe(),
            { new_collections: l } = R(c),
            { checkCollectionForRefresh: u } = c,
            d = ke(),
            { affiliates: f } = R(d),
            { checkAffiliatesForRefresh: p } = d,
            { recent_posts: m } = R(Re()),
            h = N({ latest_banner_title: ``, donation_monthly_value: `` }),
            g = N({ loading: !1, lazy_loading: !1, lazy_lock: !1 })
        async function _() {
            try {
                g.loading = !0
                let { data: e } = await I.get(``)
                ;((l.value = e.recent_collections),
                    (o.value = e.recent_forum),
                    (f.value = e.affiliates),
                    (n.value = e.weekly_arts),
                    (t.value = e.new_arts),
                    (m.value = e.posts),
                    Object.assign(h, { latest_banner_title: e.latest_banner_title, donation_monthly_value: e.donation_monthly_value }),
                    (g.loading = !1),
                    i(),
                    r(),
                    s(),
                    u(),
                    p())
            } catch {
                be({ group: `error`, title: `Network Error`, content: `API error` })
            }
        }
        return { navigation_data: h, config: g, getData: _ }
    }),
    Be = { class: `flex gap-2 items-center` },
    Ve = { href: `https://discord.com/invite/yDaQ4NcCux`, target: `_blank`, class: `flex gap-1 items-center hover:bg-brand-950 px-2 rounded transition-all` },
    He = { href: `https://www.patreon.com/opengameart`, target: `_blank`, class: `flex gap-1 items-center hover:bg-brand-950 transition-all px-2 rounded` },
    Ue = { class: `size-4` },
    We = { key: 0, class: `flex items-center` },
    Ge = { href: `https://www.patreon.com/opengameart`, target: `_blank`, class: `gap-2 items-center flex hover:bg-brand-950 transition-all px-2 rounded` },
    Ke = { key: 1, class: `flex items-center` },
    qe = { href: `https://www.patreon.com/opengameart`, target: `_blank`, class: `gap-2 items-center flex hover:bg-brand-950 transition-all px-2 rounded` },
    Je = { class: `text-xs dotgothic16-regular` },
    Ye = o({
        __name: `TopBanner`,
        props: { modelValue: { type: Boolean }, modelModifiers: {} },
        emits: [`update:modelValue`],
        setup(e) {
            let t = ze(),
                r = E(e, `modelValue`),
                { navigation_data: a, config: o } = R(t)
            return (e, t) => (
                s(),
                u(
                    `div`,
                    {
                        class: n([
                            `bg-linear-to-r from-[#31575c] to-[#60458c] px-6 py-2 font-semibold flex justify-between gap-2 text-brand-50 sticky transition-all duration-500`,
                            r.value ? `-translate-y-40` : `translate-y-0`
                        ])
                    },
                    [
                        M(`div`, Be, [
                            M(`a`, Ve, [
                                i(g(D), { icon: `streamline-pixel:logo-discord`, class: `size-4` }),
                                (t[0] ||= M(`p`, { class: `text-sm` }, `Discord`, -1))
                            ]),
                            M(`a`, He, [
                                M(`div`, Ue, [i(g(D), { icon: `streamline-logos:patreon-logo-block`, class: `size-4` })]),
                                (t[1] ||= M(`p`, { class: `text-sm` }, `Donate`, -1))
                            ])
                        ]),
                        g(o).loading
                            ? (s(),
                              u(`div`, We, [
                                  M(`a`, Ge, [
                                      i(g(D), { icon: `pixel:heart-solid`, class: `sizer-4` }),
                                      (t[2] ||= M(`div`, { class: `text-xs dotgothic16-regular w-16 bg-dark-002 h-4 rounded-lg animate-pulse` }, null, -1))
                                  ])
                              ]))
                            : (s(),
                              u(`div`, Ke, [
                                  M(`a`, qe, [i(g(D), { icon: `pixel:heart-solid`, class: `sizer-4` }), M(`p`, Je, v(g(a).donation_monthly_value), 1)])
                              ]))
                    ],
                    2
                )
            )
        }
    })
function Xe(e) {
    typeof queueMicrotask == `function`
        ? queueMicrotask(e)
        : Promise.resolve()
              .then(e)
              .catch((e) =>
                  setTimeout(() => {
                      throw e
                  })
              )
}
function Ze() {
    let e = [],
        t = {
            addEventListener(e, n, r, i) {
                return (e.addEventListener(n, r, i), t.add(() => e.removeEventListener(n, r, i)))
            },
            requestAnimationFrame(...e) {
                let n = requestAnimationFrame(...e)
                t.add(() => cancelAnimationFrame(n))
            },
            nextFrame(...e) {
                t.requestAnimationFrame(() => {
                    t.requestAnimationFrame(...e)
                })
            },
            setTimeout(...e) {
                let n = setTimeout(...e)
                t.add(() => clearTimeout(n))
            },
            microTask(...e) {
                let n = { current: !0 }
                return (
                    Xe(() => {
                        n.current && e[0]()
                    }),
                    t.add(() => {
                        n.current = !1
                    })
                )
            },
            style(e, t, n) {
                let r = e.style.getPropertyValue(t)
                return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                        Object.assign(e.style, { [t]: r })
                    })
                )
            },
            group(e) {
                let t = Ze()
                return (e(t), this.add(() => t.dispose()))
            },
            add(t) {
                return (
                    e.push(t),
                    () => {
                        let n = e.indexOf(t)
                        if (n >= 0) for (let t of e.splice(n, 1)) t()
                    }
                )
            },
            dispose() {
                for (let t of e.splice(0)) t()
            }
        }
    return t
}
var Qe = Object.defineProperty,
    $e = (e, t, n) => (t in e ? Qe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
    et = (e, t, n) => ($e(e, typeof t == `symbol` ? t : t + ``, n), n),
    tt = new (class {
        constructor() {
            ;(et(this, `current`, this.detect()), et(this, `currentId`, 0))
        }
        set(e) {
            this.current !== e && ((this.currentId = 0), (this.current = e))
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === `server`
        }
        get isClient() {
            return this.current === `client`
        }
        detect() {
            return typeof window > `u` || typeof document > `u` ? `server` : `client`
        }
    })()
function K(e) {
    if (tt.isServer) return null
    if (e instanceof Node) return e.ownerDocument
    if (e != null && e.hasOwnProperty(`value`)) {
        let t = B(e)
        if (t) return t.ownerDocument
    }
    return document
}
var nt = [
        `[contentEditable=true]`,
        `[tabindex]`,
        `a[href]`,
        `area[href]`,
        `button:not([disabled])`,
        `iframe`,
        `input:not([disabled])`,
        `select:not([disabled])`,
        `textarea:not([disabled])`
    ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(`,`),
    q = ((e) => (
        (e[(e.First = 1)] = `First`),
        (e[(e.Previous = 2)] = `Previous`),
        (e[(e.Next = 4)] = `Next`),
        (e[(e.Last = 8)] = `Last`),
        (e[(e.WrapAround = 16)] = `WrapAround`),
        (e[(e.NoScroll = 32)] = `NoScroll`),
        e
    ))(q || {}),
    rt = ((e) => ((e[(e.Error = 0)] = `Error`), (e[(e.Overflow = 1)] = `Overflow`), (e[(e.Success = 2)] = `Success`), (e[(e.Underflow = 3)] = `Underflow`), e))(
        rt || {}
    ),
    it = ((e) => ((e[(e.Previous = -1)] = `Previous`), (e[(e.Next = 1)] = `Next`), e))(it || {})
function at(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(nt)).sort((e, t) => Math.sign((e.tabIndex || 2 ** 53 - 1) - (t.tabIndex || 2 ** 53 - 1)))
}
var ot = ((e) => ((e[(e.Strict = 0)] = `Strict`), (e[(e.Loose = 1)] = `Loose`), e))(ot || {})
function st(e, t = 0) {
    return e === K(e)?.body
        ? !1
        : G(t, {
              0() {
                  return e.matches(nt)
              },
              1() {
                  let t = e
                  for (; t !== null; ) {
                      if (t.matches(nt)) return !0
                      t = t.parentElement
                  }
                  return !1
              }
          })
}
function ct(e) {
    let t = K(e)
    y(() => {
        t && !st(t.activeElement, 0) && J(e)
    })
}
var lt = ((e) => ((e[(e.Keyboard = 0)] = `Keyboard`), (e[(e.Mouse = 1)] = `Mouse`), e))(lt || {})
typeof window < `u` &&
    typeof document < `u` &&
    (document.addEventListener(
        `keydown`,
        (e) => {
            e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = ``)
        },
        !0
    ),
    document.addEventListener(
        `click`,
        (e) => {
            e.detail === 1
                ? delete document.documentElement.dataset.headlessuiFocusVisible
                : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = ``)
        },
        !0
    ))
function J(e) {
    e?.focus({ preventScroll: !0 })
}
var ut = [`textarea`, `input`].join(`,`)
function dt(e) {
    return e?.matches?.call(e, ut) ?? !1
}
function ft(e, t = (e) => e) {
    return e.slice().sort((e, n) => {
        let r = t(e),
            i = t(n)
        if (r === null || i === null) return 0
        let a = r.compareDocumentPosition(i)
        return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}
function pt(e, t) {
    return mt(at(), t, { relativeTo: e })
}
function mt(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
    let a = (Array.isArray(e) ? (e.length > 0 ? e[0].ownerDocument : document) : e?.ownerDocument) ?? document,
        o = Array.isArray(e) ? (n ? ft(e) : e) : at(e)
    ;(i.length > 0 && o.length > 1 && (o = o.filter((e) => !i.includes(e))), (r ??= a.activeElement))
    let s = (() => {
            if (t & 5) return 1
            if (t & 10) return -1
            throw Error(`Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last`)
        })(),
        c = (() => {
            if (t & 1) return 0
            if (t & 2) return Math.max(0, o.indexOf(r)) - 1
            if (t & 4) return Math.max(0, o.indexOf(r)) + 1
            if (t & 8) return o.length - 1
            throw Error(`Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last`)
        })(),
        l = t & 32 ? { preventScroll: !0 } : {},
        u = 0,
        d = o.length,
        f
    do {
        if (u >= d || u + d <= 0) return 0
        let e = c + u
        if (t & 16) e = (e + d) % d
        else {
            if (e < 0) return 3
            if (e >= d) return 1
        }
        ;((f = o[e]), f?.focus(l), (u += s))
    } while (f !== a.activeElement)
    return (t & 6 && dt(f) && f.select(), 2)
}
function ht() {
    return /iPhone/gi.test(window.navigator.platform) || (/Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0)
}
function gt() {
    return /Android/gi.test(window.navigator.userAgent)
}
function _t() {
    return ht() || gt()
}
function vt(e, t, n) {
    tt.isServer ||
        P((r) => {
            ;(document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n)))
        })
}
function yt(e, t, n) {
    tt.isServer ||
        P((r) => {
            ;(window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n)))
        })
}
function bt(e, t, n = d(() => !0)) {
    function r(r, i) {
        if (!n.value || r.defaultPrevented) return
        let a = i(r)
        if (a === null || !a.getRootNode().contains(a)) return
        let o = (function e(t) {
            return typeof t == `function` ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
        })(e)
        for (let e of o) {
            if (e === null) continue
            let t = e instanceof HTMLElement ? e : B(e)
            if ((t != null && t.contains(a)) || (r.composed && r.composedPath().includes(t))) return
        }
        return (!st(a, ot.Loose) && a.tabIndex !== -1 && r.preventDefault(), t(r, a))
    }
    let i = k(null)
    ;(vt(
        `pointerdown`,
        (e) => {
            n.value && (i.value = e.composedPath?.call(e)?.[0] || e.target)
        },
        !0
    ),
        vt(
            `mousedown`,
            (e) => {
                n.value && (i.value = e.composedPath?.call(e)?.[0] || e.target)
            },
            !0
        ),
        vt(
            `click`,
            (e) => {
                _t() || (i.value &&= (r(e, () => i.value), null))
            },
            !0
        ),
        vt(`touchend`, (e) => r(e, () => (e.target instanceof HTMLElement ? e.target : null)), !0),
        yt(`blur`, (e) => r(e, () => (window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null)), !0))
}
function xt(e, t) {
    if (e) return e
    let n = t ?? `button`
    if (typeof n == `string` && n.toLowerCase() === `button`) return `button`
}
function St(e, t) {
    let n = k(xt(e.value.type, e.value.as))
    return (
        a(() => {
            n.value = xt(e.value.type, e.value.as)
        }),
        P(() => {
            var e
            n.value || (B(t) && B(t) instanceof HTMLButtonElement && !((e = B(t)) != null && e.hasAttribute(`type`)) && (n.value = `button`))
        }),
        n
    )
}
function Ct(e) {
    return [e.screenX, e.screenY]
}
function wt() {
    let e = k([-1, -1])
    return {
        wasMoved(t) {
            let n = Ct(t)
            return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : ((e.value = n), !0)
        },
        update(t) {
            e.value = Ct(t)
        }
    }
}
function Tt({ container: e, accept: t, walk: n, enabled: r }) {
    P(() => {
        let i = e.value
        if (!i || (r !== void 0 && !r.value)) return
        let a = K(e)
        if (!a) return
        let o = Object.assign((e) => t(e), { acceptNode: t }),
            s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1)
        for (; s.nextNode(); ) n(s.currentNode)
    })
}
var Et = ((e) => ((e[(e.None = 1)] = `None`), (e[(e.Focusable = 2)] = `Focusable`), (e[(e.Hidden = 4)] = `Hidden`), e))(Et || {}),
    Dt = o({
        name: `Hidden`,
        props: { as: { type: [Object, String], default: `div` }, features: { type: Number, default: 1 } },
        setup(e, { slots: t, attrs: n }) {
            return () => {
                let { features: r, ...i } = e
                return U({
                    ourProps: {
                        'aria-hidden': (r & 2) == 2 ? !0 : (i[`aria-hidden`] ?? void 0),
                        hidden: (r & 4) == 4 ? !0 : void 0,
                        style: {
                            position: `fixed`,
                            top: 1,
                            left: 1,
                            width: 1,
                            height: 0,
                            padding: 0,
                            margin: -1,
                            overflow: `hidden`,
                            clip: `rect(0, 0, 0, 0)`,
                            whiteSpace: `nowrap`,
                            borderWidth: `0`,
                            ...((r & 4) == 4 && (r & 2) != 2 && { display: `none` })
                        }
                    },
                    theirProps: i,
                    slot: {},
                    attrs: n,
                    slots: t,
                    name: `Hidden`
                })
            }
        }
    })
function Ot(e) {
    function t() {
        document.readyState !== `loading` && (e(), document.removeEventListener(`DOMContentLoaded`, t))
    }
    typeof window < `u` && typeof document < `u` && (document.addEventListener(`DOMContentLoaded`, t), t())
}
var Y = []
Ot(() => {
    function e(e) {
        e.target instanceof HTMLElement &&
            e.target !== document.body &&
            Y[0] !== e.target &&
            (Y.unshift(e.target), (Y = Y.filter((e) => e != null && e.isConnected)), Y.splice(10))
    }
    ;(window.addEventListener(`click`, e, { capture: !0 }),
        window.addEventListener(`mousedown`, e, { capture: !0 }),
        window.addEventListener(`focus`, e, { capture: !0 }),
        document.body.addEventListener(`click`, e, { capture: !0 }),
        document.body.addEventListener(`mousedown`, e, { capture: !0 }),
        document.body.addEventListener(`focus`, e, { capture: !0 }))
})
function kt(e) {
    throw Error(`Unexpected object: ` + e)
}
var X = ((e) => (
    (e[(e.First = 0)] = `First`),
    (e[(e.Previous = 1)] = `Previous`),
    (e[(e.Next = 2)] = `Next`),
    (e[(e.Last = 3)] = `Last`),
    (e[(e.Specific = 4)] = `Specific`),
    (e[(e.Nothing = 5)] = `Nothing`),
    e
))(X || {})
function At(e, t) {
    let n = t.resolveItems()
    if (n.length <= 0) return null
    let r = t.resolveActiveIndex(),
        i = r ?? -1
    switch (e.focus) {
        case 0:
            for (let e = 0; e < n.length; ++e) if (!t.resolveDisabled(n[e], e, n)) return e
            return r
        case 1:
            i === -1 && (i = n.length)
            for (let e = i - 1; e >= 0; --e) if (!t.resolveDisabled(n[e], e, n)) return e
            return r
        case 2:
            for (let e = i + 1; e < n.length; ++e) if (!t.resolveDisabled(n[e], e, n)) return e
            return r
        case 3:
            for (let e = n.length - 1; e >= 0; --e) if (!t.resolveDisabled(n[e], e, n)) return e
            return r
        case 4:
            for (let r = 0; r < n.length; ++r) if (t.resolveId(n[r], r, n) === e.id) return r
            return r
        case 5:
            return null
        default:
            kt(e)
    }
}
function jt(e, t, n, r) {
    tt.isServer ||
        P((i) => {
            ;((e ??= window), e.addEventListener(t, n, r), i(() => e.removeEventListener(t, n, r)))
        })
}
var Mt = ((e) => ((e[(e.Forwards = 0)] = `Forwards`), (e[(e.Backwards = 1)] = `Backwards`), e))(Mt || {})
function Nt() {
    let e = k(0)
    return (
        yt(`keydown`, (t) => {
            t.key === `Tab` && (e.value = t.shiftKey ? 1 : 0)
        }),
        e
    )
}
function Pt(e) {
    if (!e) return new Set()
    if (typeof e == `function`) return new Set(e())
    let t = new Set()
    for (let n of e.value) {
        let e = B(n)
        e instanceof HTMLElement && t.add(e)
    }
    return t
}
var Ft = ((e) => (
        (e[(e.None = 1)] = `None`),
        (e[(e.InitialFocus = 2)] = `InitialFocus`),
        (e[(e.TabLock = 4)] = `TabLock`),
        (e[(e.FocusLock = 8)] = `FocusLock`),
        (e[(e.RestoreFocus = 16)] = `RestoreFocus`),
        (e[(e.All = 30)] = `All`),
        e
    ))(Ft || {}),
    It = Object.assign(
        o({
            name: `FocusTrap`,
            props: {
                as: { type: [Object, String], default: `div` },
                initialFocus: { type: Object, default: null },
                features: { type: Number, default: 30 },
                containers: { type: [Object, Function], default: k(new Set()) }
            },
            inheritAttrs: !1,
            setup(e, { attrs: t, slots: n, expose: r }) {
                let i = k(null)
                r({ el: i, $el: i })
                let o = d(() => K(i)),
                    s = k(!1)
                ;(a(() => (s.value = !0)),
                    c(() => (s.value = !1)),
                    Rt(
                        { ownerDocument: o },
                        d(() => s.value && !!(e.features & 16))
                    ))
                let l = zt(
                    { ownerDocument: o, container: i, initialFocus: d(() => e.initialFocus) },
                    d(() => s.value && !!(e.features & 2))
                )
                Bt(
                    { ownerDocument: o, container: i, containers: e.containers, previousActiveElement: l },
                    d(() => s.value && !!(e.features & 8))
                )
                let u = Nt()
                function f(e) {
                    let t = B(i)
                    t &&
                        ((e) => e())(() => {
                            G(u.value, {
                                [Mt.Forwards]: () => {
                                    mt(t, q.First, { skipElements: [e.relatedTarget] })
                                },
                                [Mt.Backwards]: () => {
                                    mt(t, q.Last, { skipElements: [e.relatedTarget] })
                                }
                            })
                        })
                }
                let p = k(!1)
                function h(e) {
                    e.key === `Tab` &&
                        ((p.value = !0),
                        requestAnimationFrame(() => {
                            p.value = !1
                        }))
                }
                function g(t) {
                    if (!s.value) return
                    let n = Pt(e.containers)
                    B(i) instanceof HTMLElement && n.add(B(i))
                    let r = t.relatedTarget
                    r instanceof HTMLElement &&
                        r.dataset.headlessuiFocusGuard !== `true` &&
                        (Vt(n, r) ||
                            (p.value
                                ? mt(B(i), G(u.value, { [Mt.Forwards]: () => q.Next, [Mt.Backwards]: () => q.Previous }) | q.WrapAround, {
                                      relativeTo: t.target
                                  })
                                : t.target instanceof HTMLElement && J(t.target)))
                }
                return () => {
                    let r = {},
                        a = { ref: i, onKeydown: h, onFocusout: g },
                        { features: o, initialFocus: s, containers: c, ...l } = e
                    return m(_, [
                        !!(o & 4) && m(Dt, { as: `button`, type: `button`, 'data-headlessui-focus-guard': !0, onFocus: f, features: Et.Focusable }),
                        U({ ourProps: a, theirProps: { ...t, ...l }, slot: r, attrs: t, slots: n, name: `FocusTrap` }),
                        !!(o & 4) && m(Dt, { as: `button`, type: `button`, 'data-headlessui-focus-guard': !0, onFocus: f, features: Et.Focusable })
                    ])
                }
            }
        }),
        { features: Ft }
    )
function Lt(e) {
    let t = k(Y.slice())
    return (
        ce(
            [e],
            ([e], [n]) => {
                n === !0 && e === !1
                    ? Xe(() => {
                          t.value.splice(0)
                      })
                    : n === !1 && e === !0 && (t.value = Y.slice())
            },
            { flush: `post` }
        ),
        () => t.value.find((e) => e != null && e.isConnected) ?? null
    )
}
function Rt({ ownerDocument: e }, t) {
    let n = Lt(t)
    ;(a(() => {
        P(
            () => {
                t.value || (e.value?.activeElement === e.value?.body && J(n()))
            },
            { flush: `post` }
        )
    }),
        c(() => {
            t.value && J(n())
        }))
}
function zt({ ownerDocument: e, container: t, initialFocus: n }, r) {
    let i = k(null),
        o = k(!1)
    return (
        a(() => (o.value = !0)),
        c(() => (o.value = !1)),
        a(() => {
            ce(
                [t, n, r],
                (a, s) => {
                    if (a.every((e, t) => s?.[t] === e) || !r.value) return
                    let c = B(t)
                    c &&
                        Xe(() => {
                            if (!o.value) return
                            let t = B(n),
                                r = e.value?.activeElement
                            if (t) {
                                if (t === r) {
                                    i.value = r
                                    return
                                }
                            } else if (c.contains(r)) {
                                i.value = r
                                return
                            }
                            ;(t ? J(t) : mt(c, q.First | q.NoScroll) === rt.Error && console.warn(`There are no focusable elements inside the <FocusTrap />`),
                                (i.value = e.value?.activeElement))
                        })
                },
                { immediate: !0, flush: `post` }
            )
        }),
        i
    )
}
function Bt({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, i) {
    jt(
        e.value?.defaultView,
        `focus`,
        (e) => {
            if (!i.value) return
            let a = Pt(n)
            B(t) instanceof HTMLElement && a.add(B(t))
            let o = r.value
            if (!o) return
            let s = e.target
            s && s instanceof HTMLElement ? (Vt(a, s) ? ((r.value = s), J(s)) : (e.preventDefault(), e.stopPropagation(), J(o))) : J(r.value)
        },
        !0
    )
}
function Vt(e, t) {
    for (let n of e) if (n.contains(t)) return !0
    return !1
}
function Ht(e) {
    let t = ee(e.getSnapshot())
    return (
        c(
            e.subscribe(() => {
                t.value = e.getSnapshot()
            })
        ),
        t
    )
}
function Ut(e, t) {
    let n = e(),
        r = new Set()
    return {
        getSnapshot() {
            return n
        },
        subscribe(e) {
            return (r.add(e), () => r.delete(e))
        },
        dispatch(e, ...i) {
            let a = t[e].call(n, ...i)
            a && ((n = a), r.forEach((e) => e()))
        }
    }
}
function Wt() {
    let e
    return {
        before({ doc: t }) {
            let n = t.documentElement
            e = (t.defaultView ?? window).innerWidth - n.clientWidth
        },
        after({ doc: t, d: n }) {
            let r = t.documentElement,
                i = r.clientWidth - r.offsetWidth,
                a = e - i
            n.style(r, `paddingRight`, `${a}px`)
        }
    }
}
function Gt() {
    return ht()
        ? {
              before({ doc: e, d: t, meta: n }) {
                  function r(e) {
                      return n.containers.flatMap((e) => e()).some((t) => t.contains(e))
                  }
                  t.microTask(() => {
                      if (window.getComputedStyle(e.documentElement).scrollBehavior !== `auto`) {
                          let n = Ze()
                          ;(n.style(e.documentElement, `scrollBehavior`, `auto`), t.add(() => t.microTask(() => n.dispose())))
                      }
                      let n = window.scrollY ?? window.pageYOffset,
                          i = null
                      ;(t.addEventListener(
                          e,
                          `click`,
                          (t) => {
                              if (t.target instanceof HTMLElement)
                                  try {
                                      let n = t.target.closest(`a`)
                                      if (!n) return
                                      let { hash: a } = new URL(n.href),
                                          o = e.querySelector(a)
                                      o && !r(o) && (i = o)
                                  } catch {}
                          },
                          !0
                      ),
                          t.addEventListener(e, `touchstart`, (e) => {
                              if (e.target instanceof HTMLElement)
                                  if (r(e.target)) {
                                      let n = e.target
                                      for (; n.parentElement && r(n.parentElement); ) n = n.parentElement
                                      t.style(n, `overscrollBehavior`, `contain`)
                                  } else t.style(e.target, `touchAction`, `none`)
                          }),
                          t.addEventListener(
                              e,
                              `touchmove`,
                              (e) => {
                                  if (e.target instanceof HTMLElement) {
                                      if (e.target.tagName === `INPUT`) return
                                      if (r(e.target)) {
                                          let t = e.target
                                          for (
                                              ;
                                              t.parentElement &&
                                              t.dataset.headlessuiPortal !== `` &&
                                              !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                                          )
                                              t = t.parentElement
                                          t.dataset.headlessuiPortal === `` && e.preventDefault()
                                      } else e.preventDefault()
                                  }
                              },
                              { passive: !1 }
                          ),
                          t.add(() => {
                              ;(n !== (window.scrollY ?? window.pageYOffset) && window.scrollTo(0, n),
                                  i && i.isConnected && (i.scrollIntoView({ block: `nearest` }), (i = null)))
                          }))
                  })
              }
          }
        : {}
}
function Kt() {
    return {
        before({ doc: e, d: t }) {
            t.style(e.documentElement, `overflow`, `hidden`)
        }
    }
}
function qt(e) {
    let t = {}
    for (let n of e) Object.assign(t, n(t))
    return t
}
var Z = Ut(() => new Map(), {
    PUSH(e, t) {
        let n = this.get(e) ?? { doc: e, count: 0, d: Ze(), meta: new Set() }
        return (n.count++, n.meta.add(t), this.set(e, n), this)
    },
    POP(e, t) {
        let n = this.get(e)
        return (n && (n.count--, n.meta.delete(t)), this)
    },
    SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
        let r = { doc: e, d: t, meta: qt(n) },
            i = [Gt(), Wt(), Kt()]
        ;(i.forEach(({ before: e }) => e?.(r)), i.forEach(({ after: e }) => e?.(r)))
    },
    SCROLL_ALLOW({ d: e }) {
        e.dispose()
    },
    TEARDOWN({ doc: e }) {
        this.delete(e)
    }
})
Z.subscribe(() => {
    let e = Z.getSnapshot(),
        t = new Map()
    for (let [n] of e) t.set(n, n.documentElement.style.overflow)
    for (let n of e.values()) {
        let e = t.get(n.doc) === `hidden`,
            r = n.count !== 0
        ;(((r && !e) || (!r && e)) && Z.dispatch(n.count > 0 ? `SCROLL_PREVENT` : `SCROLL_ALLOW`, n), n.count === 0 && Z.dispatch(`TEARDOWN`, n))
    }
})
function Jt(e, t, n) {
    let r = Ht(Z),
        i = d(() => {
            let t = e.value ? r.value.get(e.value) : void 0
            return t ? t.count > 0 : !1
        })
    return (
        ce(
            [e, t],
            ([e, t], [r], i) => {
                if (!e || !t) return
                Z.dispatch(`PUSH`, e, n)
                let a = !1
                i(() => {
                    a ||= (Z.dispatch(`POP`, r ?? e, n), !0)
                })
            },
            { immediate: !0 }
        ),
        i
    )
}
var Yt = new Map(),
    Xt = new Map()
function Zt(e, t = k(!0)) {
    P((n) => {
        if (!t.value) return
        let r = B(e)
        if (!r) return
        n(function () {
            if (!r) return
            let e = Xt.get(r) ?? 1
            if ((e === 1 ? Xt.delete(r) : Xt.set(r, e - 1), e !== 1)) return
            let t = Yt.get(r)
            t &&
                (t[`aria-hidden`] === null ? r.removeAttribute(`aria-hidden`) : r.setAttribute(`aria-hidden`, t[`aria-hidden`]),
                (r.inert = t.inert),
                Yt.delete(r))
        })
        let i = Xt.get(r) ?? 0
        ;(Xt.set(r, i + 1),
            i === 0 && (Yt.set(r, { 'aria-hidden': r.getAttribute(`aria-hidden`), inert: r.inert }), r.setAttribute(`aria-hidden`, `true`), (r.inert = !0)))
    })
}
function Qt({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
    let r = k(null),
        i = K(r)
    function a() {
        let n = []
        for (let t of e) t !== null && (t instanceof HTMLElement ? n.push(t) : `value` in t && t.value instanceof HTMLElement && n.push(t.value))
        if (t != null && t.value) for (let e of t.value) n.push(e)
        for (let e of i?.querySelectorAll(`html > *, body > *`) ?? [])
            e !== document.body &&
                e !== document.head &&
                e instanceof HTMLElement &&
                e.id !== `headlessui-portal-root` &&
                (e.contains(B(r)) || e.contains(B(r)?.getRootNode()?.host) || n.some((t) => e.contains(t)) || n.push(e))
        return n
    }
    return {
        resolveContainers: a,
        contains(e) {
            return a().some((t) => t.contains(e))
        },
        mainTreeNodeRef: r,
        MainTreeNode() {
            return n == null ? m(Dt, { features: Et.Hidden, ref: r }) : null
        }
    }
}
var $t = Symbol(`ForcePortalRootContext`)
function en() {
    return t($t, !1)
}
var tn = o({
        name: `ForcePortalRoot`,
        props: { as: { type: [Object, String], default: `template` }, force: { type: Boolean, default: !1 } },
        setup(e, { slots: t, attrs: n }) {
            return (
                C($t, e.force),
                () => {
                    let { force: r, ...i } = e
                    return U({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: n, name: `ForcePortalRoot` })
                }
            )
        }
    }),
    nn = Symbol(`StackContext`),
    rn = ((e) => ((e[(e.Add = 0)] = `Add`), (e[(e.Remove = 1)] = `Remove`), e))(rn || {})
function an() {
    return t(nn, () => {})
}
function on({ type: e, enabled: t, element: n, onUpdate: r }) {
    let i = an()
    function o(...e) {
        ;(r?.(...e), i(...e))
    }
    ;(a(() => {
        ce(
            t,
            (t, r) => {
                t ? o(0, e, n) : r === !0 && o(1, e, n)
            },
            { immediate: !0, flush: `sync` }
        )
    }),
        c(() => {
            t.value && o(1, e, n)
        }),
        C(nn, o))
}
var sn = Symbol(`DescriptionContext`)
function cn() {
    let e = t(sn, null)
    if (e === null) throw Error(`Missing parent`)
    return e
}
function ln({ slot: e = k({}), name: t = `Description`, props: n = {} } = {}) {
    let r = k([])
    function i(e) {
        return (
            r.value.push(e),
            () => {
                let t = r.value.indexOf(e)
                t !== -1 && r.value.splice(t, 1)
            }
        )
    }
    return (C(sn, { register: i, slot: e, name: t, props: n }), d(() => (r.value.length > 0 ? r.value.join(` `) : void 0)))
}
o({
    name: `Description`,
    props: { as: { type: [Object, String], default: `p` }, id: { type: String, default: null } },
    setup(e, { attrs: t, slots: n }) {
        let r = e.id ?? `headlessui-description-${V()}`,
            i = cn()
        return (
            a(() => c(i.register(r))),
            () => {
                let { name: a = `Description`, slot: o = k({}), props: s = {} } = i,
                    { ...c } = e
                return U({
                    ourProps: { ...Object.entries(s).reduce((e, [t, n]) => Object.assign(e, { [t]: g(n) }), {}), id: r },
                    theirProps: c,
                    slot: o.value,
                    attrs: t,
                    slots: n,
                    name: a
                })
            }
        )
    }
})
function un(e) {
    let t = K(e)
    if (!t) {
        if (e === null) return null
        throw Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)
    }
    let n = t.getElementById(`headlessui-portal-root`)
    if (n) return n
    let r = t.createElement(`div`)
    return (r.setAttribute(`id`, `headlessui-portal-root`), t.body.appendChild(r))
}
var dn = new WeakMap()
function fn(e) {
    return dn.get(e) ?? 0
}
function pn(e, t) {
    let n = t(fn(e))
    return (n <= 0 ? dn.delete(e) : dn.set(e, n), n)
}
var mn = o({
        name: `Portal`,
        props: { as: { type: [Object, String], default: `div` } },
        setup(e, { slots: n, attrs: i }) {
            let o = k(null),
                s = d(() => K(o)),
                u = en(),
                f = t(_n, null),
                p = k(u === !0 || f == null ? un(o.value) : f.resolveTarget())
            p.value && pn(p.value, (e) => e + 1)
            let h = k(!1)
            ;(a(() => {
                h.value = !0
            }),
                P(() => {
                    u || (f != null && (p.value = f.resolveTarget()))
                }))
            let g = t(hn, null),
                _ = !1,
                v = l()
            return (
                ce(o, () => {
                    if (_ || !g) return
                    let e = B(o)
                    e && (c(g.register(e), v), (_ = !0))
                }),
                c(() => {
                    var e
                    let t = s.value?.getElementById(`headlessui-portal-root`)
                    !t ||
                        p.value !== t ||
                        pn(p.value, (e) => e - 1) ||
                        p.value.children.length > 0 ||
                        (e = p.value.parentElement) == null ||
                        e.removeChild(p.value)
                }),
                () => {
                    if (!h.value || p.value === null) return null
                    let t = { ref: o, 'data-headlessui-portal': `` }
                    return m(r, { to: p.value }, U({ ourProps: t, theirProps: e, slot: {}, attrs: i, slots: n, name: `Portal` }))
                }
            )
        }
    }),
    hn = Symbol(`PortalParentContext`)
function gn() {
    let e = t(hn, null),
        n = k([])
    function r(t) {
        return (n.value.push(t), e && e.register(t), () => i(t))
    }
    function i(t) {
        let r = n.value.indexOf(t)
        ;(r !== -1 && n.value.splice(r, 1), e && e.unregister(t))
    }
    let a = { register: r, unregister: i, portals: n }
    return [
        n,
        o({
            name: `PortalWrapper`,
            setup(e, { slots: t }) {
                return (C(hn, a), () => t.default?.call(t))
            }
        })
    ]
}
var _n = Symbol(`PortalGroupContext`),
    vn = o({
        name: `PortalGroup`,
        props: { as: { type: [Object, String], default: `template` }, target: { type: Object, default: null } },
        setup(e, { attrs: t, slots: n }) {
            return (
                C(
                    _n,
                    N({
                        resolveTarget() {
                            return e.target
                        }
                    })
                ),
                () => {
                    let { target: r, ...i } = e
                    return U({ theirProps: i, ourProps: {}, slot: {}, attrs: t, slots: n, name: `PortalGroup` })
                }
            )
        }
    }),
    yn = ((e) => ((e[(e.Open = 0)] = `Open`), (e[(e.Closed = 1)] = `Closed`), e))(yn || {}),
    bn = Symbol(`DialogContext`)
function xn(e) {
    let n = t(bn, null)
    if (n === null) {
        let t = Error(`<${e} /> is missing a parent <Dialog /> component.`)
        throw (Error.captureStackTrace && Error.captureStackTrace(t, xn), t)
    }
    return n
}
var Sn = `DC8F892D-2EBD-447C-A4C8-A03058436FF4`,
    Cn = o({
        name: `Dialog`,
        inheritAttrs: !1,
        props: {
            as: { type: [Object, String], default: `div` },
            static: { type: Boolean, default: !1 },
            unmount: { type: Boolean, default: !0 },
            open: { type: [Boolean, String], default: Sn },
            initialFocus: { type: Object, default: null },
            id: { type: String, default: null },
            role: { type: String, default: `dialog` }
        },
        emits: { close: (e) => !0 },
        setup(e, { emit: n, attrs: r, slots: i, expose: o }) {
            let s = e.id ?? `headlessui-dialog-${V()}`,
                c = k(!1)
            a(() => {
                c.value = !0
            })
            let l = !1,
                u = d(() =>
                    e.role === `dialog` || e.role === `alertdialog`
                        ? e.role
                        : (l ||
                              ((l = !0),
                              console.warn(
                                  `Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
                              )),
                          `dialog`)
                ),
                f = k(0),
                p = Ee(),
                h = d(() => (e.open === Sn && p !== null ? (p.value & H.Open) === H.Open : e.open)),
                g = k(null),
                _ = d(() => K(g))
            if ((o({ el: g, $el: g }), !(e.open !== Sn || p !== null))) throw Error('You forgot to provide an `open` prop to the `Dialog`.')
            if (typeof h.value != `boolean`)
                throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value === Sn ? void 0 : e.open}`)
            let v = d(() => (c.value && h.value ? 0 : 1)),
                b = d(() => v.value === 0),
                x = d(() => f.value > 1),
                S = t(bn, null) !== null,
                [w, T] = gn(),
                {
                    resolveContainers: ee,
                    mainTreeNodeRef: te,
                    MainTreeNode: ne
                } = Qt({ portals: w, defaultContainers: [d(() => A.panelRef.value ?? g.value)] }),
                re = d(() => (x.value ? `parent` : `leaf`)),
                ie = d(() => (p === null ? !1 : (p.value & H.Closing) === H.Closing)),
                E = d(() => (S || ie.value ? !1 : b.value))
            Zt(
                d(
                    () =>
                        Array.from(_.value?.querySelectorAll(`body > *`) ?? []).find((e) =>
                            e.id === `headlessui-portal-root` ? !1 : e.contains(B(te)) && e instanceof HTMLElement
                        ) ?? null
                ),
                E
            )
            let D = d(() => (x.value ? !0 : b.value))
            ;(Zt(
                d(
                    () =>
                        Array.from(_.value?.querySelectorAll(`[data-headlessui-portal]`) ?? []).find((e) => e.contains(B(te)) && e instanceof HTMLElement) ??
                        null
                ),
                D
            ),
                on({
                    type: `Dialog`,
                    enabled: d(() => v.value === 0),
                    element: g,
                    onUpdate: (e, t) => {
                        if (t === `Dialog`) return G(e, { [rn.Add]: () => (f.value += 1), [rn.Remove]: () => --f.value })
                    }
                }))
            let ae = ln({ name: `DialogDescription`, slot: d(() => ({ open: h.value })) }),
                O = k(null),
                A = {
                    titleId: O,
                    panelRef: k(null),
                    dialogState: v,
                    setTitleId(e) {
                        O.value !== e && (O.value = e)
                    },
                    close() {
                        n(`close`, !1)
                    }
                }
            ;(C(bn, A),
                bt(
                    ee,
                    (e, t) => {
                        ;(e.preventDefault(), A.close(), y(() => t?.focus()))
                    },
                    d(() => !(!b.value || x.value))
                ))
            let j = d(() => !(x.value || v.value !== 0))
            return (
                jt(_.value?.defaultView, `keydown`, (e) => {
                    j.value && (e.defaultPrevented || (e.key === W.Escape && (e.preventDefault(), e.stopPropagation(), A.close())))
                }),
                Jt(
                    _,
                    d(() => !(ie.value || v.value !== 0 || S)),
                    (e) => ({ containers: [...(e.containers ?? []), ee] })
                ),
                P((e) => {
                    if (v.value !== 0) return
                    let t = B(g)
                    if (!t) return
                    let n = new ResizeObserver((e) => {
                        for (let t of e) {
                            let e = t.target.getBoundingClientRect()
                            e.x === 0 && e.y === 0 && e.width === 0 && e.height === 0 && A.close()
                        }
                    })
                    ;(n.observe(t), e(() => n.disconnect()))
                }),
                () => {
                    let { open: t, initialFocus: n, ...a } = e,
                        o = {
                            ...r,
                            ref: g,
                            id: s,
                            role: u.value,
                            'aria-modal': v.value === 0 ? !0 : void 0,
                            'aria-labelledby': O.value,
                            'aria-describedby': ae.value
                        },
                        c = { open: v.value === 0 }
                    return m(tn, { force: !0 }, () => [
                        m(mn, () =>
                            m(vn, { target: g.value }, () =>
                                m(tn, { force: !1 }, () =>
                                    m(
                                        It,
                                        {
                                            initialFocus: n,
                                            containers: ee,
                                            features: b.value
                                                ? G(re.value, { parent: It.features.RestoreFocus, leaf: It.features.All & ~It.features.FocusLock })
                                                : It.features.None
                                        },
                                        () =>
                                            m(T, {}, () =>
                                                U({
                                                    ourProps: o,
                                                    theirProps: { ...a, ...r },
                                                    slot: c,
                                                    attrs: r,
                                                    slots: i,
                                                    visible: v.value === 0,
                                                    features: De.RenderStrategy | De.Static,
                                                    name: `Dialog`
                                                })
                                            )
                                    )
                                )
                            )
                        ),
                        m(ne)
                    ])
                }
            )
        }
    })
;(o({
    name: `DialogOverlay`,
    props: { as: { type: [Object, String], default: `div` }, id: { type: String, default: null } },
    setup(e, { attrs: t, slots: n }) {
        let r = e.id ?? `headlessui-dialog-overlay-${V()}`,
            i = xn(`DialogOverlay`)
        function a(e) {
            e.target === e.currentTarget && (e.preventDefault(), e.stopPropagation(), i.close())
        }
        return () => {
            let { ...o } = e
            return U({
                ourProps: { id: r, 'aria-hidden': !0, onClick: a },
                theirProps: o,
                slot: { open: i.dialogState.value === 0 },
                attrs: t,
                slots: n,
                name: `DialogOverlay`
            })
        }
    }
}),
    o({
        name: `DialogBackdrop`,
        props: { as: { type: [Object, String], default: `div` }, id: { type: String, default: null } },
        inheritAttrs: !1,
        setup(e, { attrs: t, slots: n, expose: r }) {
            let i = e.id ?? `headlessui-dialog-backdrop-${V()}`,
                o = xn(`DialogBackdrop`),
                s = k(null)
            return (
                r({ el: s, $el: s }),
                a(() => {
                    if (o.panelRef.value === null) throw Error(`A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.`)
                }),
                () => {
                    let { ...r } = e,
                        a = { id: i, ref: s, 'aria-hidden': !0 }
                    return m(tn, { force: !0 }, () =>
                        m(mn, () =>
                            U({
                                ourProps: a,
                                theirProps: { ...t, ...r },
                                slot: { open: o.dialogState.value === 0 },
                                attrs: t,
                                slots: n,
                                name: `DialogBackdrop`
                            })
                        )
                    )
                }
            )
        }
    }))
var wn = o({
        name: `DialogPanel`,
        props: { as: { type: [Object, String], default: `div` }, id: { type: String, default: null } },
        setup(e, { attrs: t, slots: n, expose: r }) {
            let i = e.id ?? `headlessui-dialog-panel-${V()}`,
                a = xn(`DialogPanel`)
            r({ el: a.panelRef, $el: a.panelRef })
            function o(e) {
                e.stopPropagation()
            }
            return () => {
                let { ...r } = e
                return U({
                    ourProps: { id: i, ref: a.panelRef, onClick: o },
                    theirProps: r,
                    slot: { open: a.dialogState.value === 0 },
                    attrs: t,
                    slots: n,
                    name: `DialogPanel`
                })
            }
        }
    }),
    Tn = o({
        name: `DialogTitle`,
        props: { as: { type: [Object, String], default: `h2` }, id: { type: String, default: null } },
        setup(e, { attrs: t, slots: n }) {
            let r = e.id ?? `headlessui-dialog-title-${V()}`,
                i = xn(`DialogTitle`)
            return (
                a(() => {
                    ;(i.setTitleId(r), c(() => i.setTitleId(null)))
                }),
                () => {
                    let { ...a } = e
                    return U({ ourProps: { id: r }, theirProps: a, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: n, name: `DialogTitle` })
                }
            )
        }
    }),
    En = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g
function Dn(e) {
    let t = e.innerText ?? ``,
        n = e.cloneNode(!0)
    if (!(n instanceof HTMLElement)) return t
    let r = !1
    for (let e of n.querySelectorAll(`[hidden],[aria-hidden],[role="img"]`)) (e.remove(), (r = !0))
    let i = r ? (n.innerText ?? ``) : t
    return (En.test(i) && (i = i.replace(En, ``)), i)
}
function On(e) {
    let t = e.getAttribute(`aria-label`)
    if (typeof t == `string`) return t.trim()
    let n = e.getAttribute(`aria-labelledby`)
    if (n) {
        let e = n
            .split(` `)
            .map((e) => {
                let t = document.getElementById(e)
                if (t) {
                    let e = t.getAttribute(`aria-label`)
                    return typeof e == `string` ? e.trim() : Dn(t).trim()
                }
                return null
            })
            .filter(Boolean)
        if (e.length > 0) return e.join(`, `)
    }
    return Dn(e).trim()
}
function kn(e) {
    let t = k(``),
        n = k(``)
    return () => {
        let r = B(e)
        if (!r) return ``
        let i = r.innerText
        if (t.value === i) return n.value
        let a = On(r).trim().toLowerCase()
        return ((t.value = i), (n.value = a), a)
    }
}
var An = ((e) => ((e[(e.Open = 0)] = `Open`), (e[(e.Closed = 1)] = `Closed`), e))(An || {}),
    jn = ((e) => ((e[(e.Pointer = 0)] = `Pointer`), (e[(e.Other = 1)] = `Other`), e))(jn || {})
function Mn(e) {
    requestAnimationFrame(() => requestAnimationFrame(e))
}
var Nn = Symbol(`MenuContext`)
function Pn(e) {
    let n = t(Nn, null)
    if (n === null) {
        let t = Error(`<${e} /> is missing a parent <Menu /> component.`)
        throw (Error.captureStackTrace && Error.captureStackTrace(t, Pn), t)
    }
    return n
}
var Fn = o({
        name: `Menu`,
        props: { as: { type: [Object, String], default: `template` } },
        setup(e, { slots: t, attrs: n }) {
            let r = k(1),
                i = k(null),
                a = k(null),
                o = k([]),
                s = k(``),
                c = k(null),
                l = k(1)
            function u(e = (e) => e) {
                let t = c.value === null ? null : o.value[c.value],
                    n = ft(e(o.value.slice()), (e) => B(e.dataRef.domRef)),
                    r = t ? n.indexOf(t) : null
                return (r === -1 && (r = null), { items: n, activeItemIndex: r })
            }
            let f = {
                menuState: r,
                buttonRef: i,
                itemsRef: a,
                items: o,
                searchQuery: s,
                activeItemIndex: c,
                activationTrigger: l,
                closeMenu: () => {
                    ;((r.value = 1), (c.value = null))
                },
                openMenu: () => (r.value = 0),
                goToItem(e, t, n) {
                    let r = u(),
                        i = At(e === X.Specific ? { focus: X.Specific, id: t } : { focus: e }, {
                            resolveItems: () => r.items,
                            resolveActiveIndex: () => r.activeItemIndex,
                            resolveId: (e) => e.id,
                            resolveDisabled: (e) => e.dataRef.disabled
                        })
                    ;((s.value = ``), (c.value = i), (l.value = n ?? 1), (o.value = r.items))
                },
                search(e) {
                    let t = s.value === `` ? 1 : 0
                    s.value += e.toLowerCase()
                    let n = (c.value === null ? o.value : o.value.slice(c.value + t).concat(o.value.slice(0, c.value + t))).find(
                            (e) => e.dataRef.textValue.startsWith(s.value) && !e.dataRef.disabled
                        ),
                        r = n ? o.value.indexOf(n) : -1
                    r === -1 || r === c.value || ((c.value = r), (l.value = 1))
                },
                clearSearch() {
                    s.value = ``
                },
                registerItem(e, t) {
                    let n = u((n) => [...n, { id: e, dataRef: t }])
                    ;((o.value = n.items), (c.value = n.activeItemIndex), (l.value = 1))
                },
                unregisterItem(e) {
                    let t = u((t) => {
                        let n = t.findIndex((t) => t.id === e)
                        return (n !== -1 && t.splice(n, 1), t)
                    })
                    ;((o.value = t.items), (c.value = t.activeItemIndex), (l.value = 1))
                }
            }
            return (
                bt(
                    [i, a],
                    (e, t) => {
                        var n
                        ;(f.closeMenu(), st(t, ot.Loose) || (e.preventDefault(), (n = B(i)) == null || n.focus()))
                    },
                    d(() => r.value === 0)
                ),
                C(Nn, f),
                Ce(d(() => G(r.value, { 0: H.Open, 1: H.Closed }))),
                () => U({ ourProps: {}, theirProps: e, slot: { open: r.value === 0, close: f.closeMenu }, slots: t, attrs: n, name: `Menu` })
            )
        }
    }),
    In = o({
        name: `MenuButton`,
        props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: `button` }, id: { type: String, default: null } },
        setup(e, { attrs: t, slots: n, expose: r }) {
            let i = e.id ?? `headlessui-menu-button-${V()}`,
                a = Pn(`MenuButton`)
            r({ el: a.buttonRef, $el: a.buttonRef })
            function o(e) {
                switch (e.key) {
                    case W.Space:
                    case W.Enter:
                    case W.ArrowDown:
                        ;(e.preventDefault(),
                            e.stopPropagation(),
                            a.openMenu(),
                            y(() => {
                                var e
                                ;((e = B(a.itemsRef)) == null || e.focus({ preventScroll: !0 }), a.goToItem(X.First))
                            }))
                        break
                    case W.ArrowUp:
                        ;(e.preventDefault(),
                            e.stopPropagation(),
                            a.openMenu(),
                            y(() => {
                                var e
                                ;((e = B(a.itemsRef)) == null || e.focus({ preventScroll: !0 }), a.goToItem(X.Last))
                            }))
                        break
                }
            }
            function s(e) {
                switch (e.key) {
                    case W.Space:
                        e.preventDefault()
                        break
                }
            }
            function c(t) {
                e.disabled ||
                    (a.menuState.value === 0
                        ? (a.closeMenu(), y(() => B(a.buttonRef)?.focus({ preventScroll: !0 })))
                        : (t.preventDefault(), a.openMenu(), Mn(() => B(a.itemsRef)?.focus({ preventScroll: !0 }))))
            }
            let l = St(
                d(() => ({ as: e.as, type: t.type })),
                a.buttonRef
            )
            return () => {
                let r = { open: a.menuState.value === 0 },
                    { ...u } = e
                return U({
                    ourProps: {
                        ref: a.buttonRef,
                        id: i,
                        type: l.value,
                        'aria-haspopup': `menu`,
                        'aria-controls': B(a.itemsRef)?.id,
                        'aria-expanded': a.menuState.value === 0,
                        onKeydown: o,
                        onKeyup: s,
                        onClick: c
                    },
                    theirProps: u,
                    slot: r,
                    attrs: t,
                    slots: n,
                    name: `MenuButton`
                })
            }
        }
    }),
    Ln = o({
        name: `MenuItems`,
        props: {
            as: { type: [Object, String], default: `div` },
            static: { type: Boolean, default: !1 },
            unmount: { type: Boolean, default: !0 },
            id: { type: String, default: null }
        },
        setup(e, { attrs: t, slots: n, expose: r }) {
            let i = e.id ?? `headlessui-menu-items-${V()}`,
                a = Pn(`MenuItems`),
                o = k(null)
            ;(r({ el: a.itemsRef, $el: a.itemsRef }),
                Tt({
                    container: d(() => B(a.itemsRef)),
                    enabled: d(() => a.menuState.value === 0),
                    accept(e) {
                        return e.getAttribute(`role`) === `menuitem`
                            ? NodeFilter.FILTER_REJECT
                            : e.hasAttribute(`role`)
                              ? NodeFilter.FILTER_SKIP
                              : NodeFilter.FILTER_ACCEPT
                    },
                    walk(e) {
                        e.setAttribute(`role`, `none`)
                    }
                }))
            function s(e) {
                var t
                switch ((o.value && clearTimeout(o.value), e.key)) {
                    case W.Space:
                        if (a.searchQuery.value !== ``) return (e.preventDefault(), e.stopPropagation(), a.search(e.key))
                    case W.Enter:
                        if ((e.preventDefault(), e.stopPropagation(), a.activeItemIndex.value !== null)) {
                            let e = a.items.value[a.activeItemIndex.value]
                            ;(t = B(e.dataRef.domRef)) == null || t.click()
                        }
                        ;(a.closeMenu(), ct(B(a.buttonRef)))
                        break
                    case W.ArrowDown:
                        return (e.preventDefault(), e.stopPropagation(), a.goToItem(X.Next))
                    case W.ArrowUp:
                        return (e.preventDefault(), e.stopPropagation(), a.goToItem(X.Previous))
                    case W.Home:
                    case W.PageUp:
                        return (e.preventDefault(), e.stopPropagation(), a.goToItem(X.First))
                    case W.End:
                    case W.PageDown:
                        return (e.preventDefault(), e.stopPropagation(), a.goToItem(X.Last))
                    case W.Escape:
                        ;(e.preventDefault(), e.stopPropagation(), a.closeMenu(), y(() => B(a.buttonRef)?.focus({ preventScroll: !0 })))
                        break
                    case W.Tab:
                        ;(e.preventDefault(), e.stopPropagation(), a.closeMenu(), y(() => pt(B(a.buttonRef), e.shiftKey ? q.Previous : q.Next)))
                        break
                    default:
                        e.key.length === 1 && (a.search(e.key), (o.value = setTimeout(() => a.clearSearch(), 350)))
                        break
                }
            }
            function c(e) {
                switch (e.key) {
                    case W.Space:
                        e.preventDefault()
                        break
                }
            }
            let l = Ee(),
                u = d(() => (l === null ? a.menuState.value === 0 : (l.value & H.Open) === H.Open))
            return () => {
                var r
                let o = { open: a.menuState.value === 0 },
                    { ...l } = e
                return U({
                    ourProps: {
                        'aria-activedescendant': a.activeItemIndex.value === null || (r = a.items.value[a.activeItemIndex.value]) == null ? void 0 : r.id,
                        'aria-labelledby': B(a.buttonRef)?.id,
                        id: i,
                        onKeydown: s,
                        onKeyup: c,
                        role: `menu`,
                        tabIndex: 0,
                        ref: a.itemsRef
                    },
                    theirProps: l,
                    slot: o,
                    attrs: t,
                    slots: n,
                    features: De.RenderStrategy | De.Static,
                    visible: u.value,
                    name: `MenuItems`
                })
            }
        }
    }),
    Rn = o({
        name: `MenuItem`,
        inheritAttrs: !1,
        props: { as: { type: [Object, String], default: `template` }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } },
        setup(e, { slots: t, attrs: n, expose: r }) {
            let i = e.id ?? `headlessui-menu-item-${V()}`,
                o = Pn(`MenuItem`),
                s = k(null)
            r({ el: s, $el: s })
            let l = d(() => (o.activeItemIndex.value === null ? !1 : o.items.value[o.activeItemIndex.value].id === i)),
                u = kn(s),
                f = d(() => ({
                    disabled: e.disabled,
                    get textValue() {
                        return u()
                    },
                    domRef: s
                }))
            ;(a(() => o.registerItem(i, f)),
                c(() => o.unregisterItem(i)),
                P(() => {
                    o.menuState.value === 0 &&
                        l.value &&
                        o.activationTrigger.value !== 0 &&
                        y(() => {
                            var e
                            return (e = B(s))?.scrollIntoView?.call(e, { block: `nearest` })
                        })
                }))
            function p(t) {
                if (e.disabled) return t.preventDefault()
                ;(o.closeMenu(), ct(B(o.buttonRef)))
            }
            function m() {
                if (e.disabled) return o.goToItem(X.Nothing)
                o.goToItem(X.Specific, i)
            }
            let h = wt()
            function g(e) {
                h.update(e)
            }
            function _(t) {
                h.wasMoved(t) && (e.disabled || l.value || o.goToItem(X.Specific, i, 0))
            }
            function v(t) {
                h.wasMoved(t) && (e.disabled || (l.value && o.goToItem(X.Nothing)))
            }
            return () => {
                let { disabled: r, ...a } = e,
                    c = { active: l.value, disabled: r, close: o.closeMenu }
                return U({
                    ourProps: {
                        id: i,
                        ref: s,
                        role: `menuitem`,
                        tabIndex: r === !0 ? void 0 : -1,
                        'aria-disabled': r === !0 ? !0 : void 0,
                        onClick: p,
                        onFocus: m,
                        onPointerenter: g,
                        onMouseenter: g,
                        onPointermove: _,
                        onMousemove: _,
                        onPointerleave: v,
                        onMouseleave: v
                    },
                    theirProps: { ...n, ...a },
                    slot: c,
                    attrs: n,
                    slots: t,
                    name: `MenuItem`
                })
            }
        }
    })
function zn(e) {
    let t = { called: !1 }
    return (...n) => {
        if (!t.called) return ((t.called = !0), e(...n))
    }
}
function Bn(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}
function Vn(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}
var Hn = ((e) => ((e.Finished = `finished`), (e.Cancelled = `cancelled`), e))(Hn || {})
function Un(e, t) {
    let n = Ze()
    if (!e) return n.dispose
    let { transitionDuration: r, transitionDelay: i } = getComputedStyle(e),
        [a, o] = [r, i].map((e) => {
            let [t = 0] = e
                .split(`,`)
                .filter(Boolean)
                .map((e) => (e.includes(`ms`) ? parseFloat(e) : parseFloat(e) * 1e3))
                .sort((e, t) => t - e)
            return t
        })
    return (a === 0 ? t(`finished`) : n.setTimeout(() => t(`finished`), a + o), n.add(() => t(`cancelled`)), n.dispose)
}
function Wn(e, t, n, r, i, a) {
    let o = Ze(),
        s = a === void 0 ? () => {} : zn(a)
    return (
        Vn(e, ...i),
        Bn(e, ...t, ...n),
        o.nextFrame(() => {
            ;(Vn(e, ...n), Bn(e, ...r), o.add(Un(e, (n) => (Vn(e, ...r, ...t), Bn(e, ...i), s(n)))))
        }),
        o.add(() => Vn(e, ...t, ...n, ...r, ...i)),
        o.add(() => s(`cancelled`)),
        o.dispose
    )
}
function Q(e = ``) {
    return e.split(/\s+/).filter((e) => e.length > 1)
}
var Gn = Symbol(`TransitionContext`),
    Kn = ((e) => ((e.Visible = `visible`), (e.Hidden = `hidden`), e))(Kn || {})
function qn() {
    return t(Gn, null) !== null
}
function Jn() {
    let e = t(Gn, null)
    if (e === null) throw Error(`A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.`)
    return e
}
function Yn() {
    let e = t(Xn, null)
    if (e === null) throw Error(`A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.`)
    return e
}
var Xn = Symbol(`NestingContext`)
function Zn(e) {
    return `children` in e ? Zn(e.children) : e.value.filter(({ state: e }) => e === `visible`).length > 0
}
function Qn(e) {
    let t = k([]),
        n = k(!1)
    ;(a(() => (n.value = !0)), c(() => (n.value = !1)))
    function r(r, i = z.Hidden) {
        let a = t.value.findIndex(({ id: e }) => e === r)
        a !== -1 &&
            (G(i, {
                [z.Unmount]() {
                    t.value.splice(a, 1)
                },
                [z.Hidden]() {
                    t.value[a].state = `hidden`
                }
            }),
            !Zn(t) && n.value && e?.())
    }
    function i(e) {
        let n = t.value.find(({ id: t }) => t === e)
        return (n ? n.state !== `visible` && (n.state = `visible`) : t.value.push({ id: e, state: `visible` }), () => r(e, z.Unmount))
    }
    return { children: t, register: i, unregister: r }
}
var $n = De.RenderStrategy,
    er = o({
        props: {
            as: { type: [Object, String], default: `div` },
            show: { type: [Boolean], default: null },
            unmount: { type: [Boolean], default: !0 },
            appear: { type: [Boolean], default: !1 },
            enter: { type: [String], default: `` },
            enterFrom: { type: [String], default: `` },
            enterTo: { type: [String], default: `` },
            entered: { type: [String], default: `` },
            leave: { type: [String], default: `` },
            leaveFrom: { type: [String], default: `` },
            leaveTo: { type: [String], default: `` }
        },
        emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 },
        setup(e, { emit: t, attrs: r, slots: i, expose: o }) {
            let s = k(0)
            function l() {
                ;((s.value |= H.Opening), t(`beforeEnter`))
            }
            function u() {
                ;((s.value &= ~H.Opening), t(`afterEnter`))
            }
            function f() {
                ;((s.value |= H.Closing), t(`beforeLeave`))
            }
            function p() {
                ;((s.value &= ~H.Closing), t(`afterLeave`))
            }
            if (!qn() && we()) return () => m(nr, { ...e, onBeforeEnter: l, onAfterEnter: u, onBeforeLeave: f, onAfterLeave: p }, i)
            let h = k(null),
                g = d(() => (e.unmount ? z.Unmount : z.Hidden))
            o({ el: h, $el: h })
            let { show: _, appear: v } = Jn(),
                { register: y, unregister: b } = Yn(),
                x = k(_.value ? `visible` : `hidden`),
                S = { value: !0 },
                w = V(),
                T = { value: !1 },
                ee = Qn(() => {
                    !T.value && x.value !== `hidden` && ((x.value = `hidden`), b(w), p())
                })
            ;(a(() => {
                c(y(w))
            }),
                P(() => {
                    if (g.value === z.Hidden && w) {
                        if (_.value && x.value !== `visible`) {
                            x.value = `visible`
                            return
                        }
                        G(x.value, { hidden: () => b(w), visible: () => y(w) })
                    }
                }))
            let te = Q(e.enter),
                ne = Q(e.enterFrom),
                re = Q(e.enterTo),
                ie = Q(e.entered),
                E = Q(e.leave),
                D = Q(e.leaveFrom),
                ae = Q(e.leaveTo)
            a(() => {
                P(() => {
                    if (x.value === `visible`) {
                        let e = B(h)
                        if (e instanceof Comment && e.data === ``) throw Error('Did you forget to passthrough the `ref` to the actual DOM node?')
                    }
                })
            })
            function O(e) {
                let t = S.value && !v.value,
                    n = B(h)
                !n ||
                    !(n instanceof HTMLElement) ||
                    t ||
                    ((T.value = !0),
                    _.value && l(),
                    _.value || f(),
                    e(
                        _.value
                            ? Wn(n, te, ne, re, ie, (e) => {
                                  ;((T.value = !1), e === Hn.Finished && u())
                              })
                            : Wn(n, E, D, ae, ie, (e) => {
                                  ;((T.value = !1), e === Hn.Finished && (Zn(ee) || ((x.value = `hidden`), b(w), p())))
                              })
                    ))
            }
            return (
                a(() => {
                    ce(
                        [_],
                        (e, t, n) => {
                            ;(O(n), (S.value = !1))
                        },
                        { immediate: !0 }
                    )
                }),
                C(Xn, ee),
                Ce(d(() => G(x.value, { visible: H.Open, hidden: H.Closed }) | s.value)),
                () => {
                    let { appear: t, show: a, enter: o, enterFrom: s, enterTo: c, entered: l, leave: u, leaveFrom: d, leaveTo: f, ...p } = e,
                        m = { ref: h }
                    return U({
                        theirProps: { ...p, ...(v.value && _.value && tt.isServer ? { class: n([r.class, p.class, ...te, ...ne]) } : {}) },
                        ourProps: m,
                        slot: {},
                        slots: i,
                        attrs: r,
                        features: $n,
                        visible: x.value === `visible`,
                        name: `TransitionChild`
                    })
                }
            )
        }
    }),
    tr = er,
    nr = o({
        inheritAttrs: !1,
        props: {
            as: { type: [Object, String], default: `div` },
            show: { type: [Boolean], default: null },
            unmount: { type: [Boolean], default: !0 },
            appear: { type: [Boolean], default: !1 },
            enter: { type: [String], default: `` },
            enterFrom: { type: [String], default: `` },
            enterTo: { type: [String], default: `` },
            entered: { type: [String], default: `` },
            leave: { type: [String], default: `` },
            leaveFrom: { type: [String], default: `` },
            leaveTo: { type: [String], default: `` }
        },
        emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 },
        setup(e, { emit: t, attrs: n, slots: r }) {
            let i = Ee(),
                o = d(() => (e.show === null && i !== null ? (i.value & H.Open) === H.Open : e.show))
            P(() => {
                if (![!0, !1].includes(o.value)) throw Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')
            })
            let s = k(o.value ? `visible` : `hidden`),
                c = Qn(() => {
                    s.value = `hidden`
                }),
                l = k(!0),
                u = { show: o, appear: d(() => e.appear || !l.value) }
            return (
                a(() => {
                    P(() => {
                        ;((l.value = !1), o.value ? (s.value = `visible`) : Zn(c) || (s.value = `hidden`))
                    })
                }),
                C(Xn, c),
                C(Gn, u),
                () => {
                    let i = Te(e, [`show`, `appear`, `unmount`, `onBeforeEnter`, `onBeforeLeave`, `onAfterEnter`, `onAfterLeave`]),
                        a = { unmount: e.unmount }
                    return U({
                        ourProps: { ...a, as: `template` },
                        theirProps: {},
                        slot: {},
                        slots: {
                            ...r,
                            default: () => [
                                m(
                                    tr,
                                    {
                                        onBeforeEnter: () => t(`beforeEnter`),
                                        onAfterEnter: () => t(`afterEnter`),
                                        onBeforeLeave: () => t(`beforeLeave`),
                                        onAfterLeave: () => t(`afterLeave`),
                                        ...n,
                                        ...a,
                                        ...i
                                    },
                                    r.default
                                )
                            ]
                        },
                        attrs: {},
                        features: $n,
                        visible: s.value === `visible`,
                        name: `Transition`
                    })
                }
            )
        }
    }),
    rr = [`href`, `type`, `disabled`],
    ir = [`type`, `disabled`],
    ar = o({
        __name: `AppButton`,
        props: {
            icon: {},
            color: {},
            type: {},
            alignment: {},
            size: {},
            href: {},
            external_link: { type: Boolean },
            disabled: { type: Boolean },
            loading: { type: Boolean },
            iconOnly: { type: Boolean }
        },
        setup(t) {
            let r = t,
                i = k(!1),
                a = d(() => {
                    if (r.disabled) return `bg-gray-200 text-gray-400 cursor-not-allowed`
                    switch (r.color) {
                        case `brand`:
                            return `bg-brand-900 hover:bg-brand-700 text-brand-50 focus:ring-brand-500 `
                        case `danger`:
                            return `bg-red-50 text-red-700 hover:bg-red-100 focus:ring-red-500 `
                        case `transparent`:
                            return `bg-inherit shadow-none hover:shadow-none focus:ring-none`
                        default:
                            return `bg-dark-001 hover:bg-brand-900 text-brand-200 focus:ring-brand-500 `
                    }
                }),
                o = d(() => {
                    if (r.disabled) return `text-gray-400`
                    switch (r.color) {
                        case `danger`:
                            return `text-red-700`
                        case `brand`:
                            return `text-brand-50`
                        default:
                            return `text-brand-200`
                    }
                }),
                c = d(() => {
                    switch (r.alignment) {
                        case `l`:
                            return `justify-left`
                        default:
                            return `justify-center`
                    }
                }),
                l = d(() => {
                    switch (r.size) {
                        case `transparent`:
                            return `text-sm p-0`
                        case `sm`:
                            return `text-xs font px-3 py-2`
                        default:
                            return `text-sm px-4 py-2`
                    }
                })
            return (d, f) => {
                let m = p(`RouterLink`)
                return (
                    s(),
                    e(fe, null, {
                        default: A(() => [
                            t.external_link
                                ? (s(),
                                  u(
                                      `a`,
                                      {
                                          key: 0,
                                          href: t.disabled ? `#` : t.href,
                                          target: `_blank`,
                                          type: t.type,
                                          disabled: t.loading || t.disabled,
                                          class: n([
                                              a.value,
                                              c.value,
                                              l.value,
                                              `border border-brand-900 inline-flex rounded-2xl font-medium hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-offset-2 transition-all cursor-pointer object-shadow`
                                          ]),
                                          onClick: (f[0] ||= (e) => (i.value = !0))
                                      },
                                      [
                                          t.loading
                                              ? (s(),
                                                e(
                                                    g(D),
                                                    {
                                                        key: 0,
                                                        icon: `memory:border-bottom`,
                                                        class: n([t.color == `transparent` ? `size-5` : (t.iconOnly, `size-4`), `retro-spinner`, o.value])
                                                    },
                                                    null,
                                                    8,
                                                    [`class`]
                                                ))
                                              : t.icon
                                                ? (s(),
                                                  e(
                                                      g(D),
                                                      {
                                                          key: 1,
                                                          icon: t.icon,
                                                          class: n([r.size == `sm` && `h-[15px] w-[15px] mt-[1px]`, `-ml-1 mr-2 h-5 w-5`, o.value]),
                                                          'aria-hidden': `true`
                                                      },
                                                      null,
                                                      8,
                                                      [`icon`, `class`]
                                                  ))
                                                : j(``, !0),
                                          w(d.$slots, `default`)
                                      ],
                                      10,
                                      rr
                                  ))
                                : t.href
                                  ? (s(),
                                    e(
                                        m,
                                        {
                                            key: 1,
                                            to: t.disabled ? `#` : t.href,
                                            'aria-disabled': t.loading || t.disabled,
                                            class: n([
                                                a.value,
                                                c.value,
                                                l.value,
                                                `border border-brand-900 inline-flex rounded-2xl font-medium hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-offset-2 transition-all cursor-pointer object-shadow`
                                            ]),
                                            onClick: (f[1] ||= (e) => (i.value = !0))
                                        },
                                        {
                                            default: A(() => [
                                                t.loading
                                                    ? (s(),
                                                      e(
                                                          g(D),
                                                          {
                                                              key: 0,
                                                              icon: `memory:border-bottom`,
                                                              class: n([t.color == `transparent` ? `size-5` : (t.iconOnly, `size-4`), `retro-spinner`, o.value])
                                                          },
                                                          null,
                                                          8,
                                                          [`class`]
                                                      ))
                                                    : t.icon
                                                      ? (s(),
                                                        e(
                                                            g(D),
                                                            {
                                                                key: 1,
                                                                icon: t.icon,
                                                                class: n([r.size == `sm` && ``, `size-4`, o.value]),
                                                                'aria-hidden': `true`
                                                            },
                                                            null,
                                                            8,
                                                            [`icon`, `class`]
                                                        ))
                                                      : j(``, !0),
                                                w(d.$slots, `default`)
                                            ]),
                                            _: 3
                                        },
                                        8,
                                        [`to`, `aria-disabled`, `class`]
                                    ))
                                  : (s(),
                                    u(
                                        `button`,
                                        {
                                            key: 2,
                                            type: t.type,
                                            disabled: t.loading || t.disabled,
                                            class: n([
                                                a.value,
                                                c.value,
                                                l.value,
                                                t.color == `transparent` ? `p-0 m-0 ` : ``,
                                                `border border-brand-900 rounded-2xl font-medium hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-offset-2 transition-all flex items-center gap-2 cursor-pointer object-shadow`
                                            ]),
                                            onClick: (f[2] ||= (e) => (i.value = !0))
                                        },
                                        [
                                            t.loading
                                                ? (s(),
                                                  e(
                                                      g(D),
                                                      {
                                                          key: 0,
                                                          icon: `memory:border-bottom`,
                                                          class: n([t.color == `transparent` ? `size-5` : (t.iconOnly, `size-4`), `retro-spinner`, o.value])
                                                      },
                                                      null,
                                                      8,
                                                      [`class`]
                                                  ))
                                                : t.icon
                                                  ? (s(),
                                                    e(
                                                        g(D),
                                                        {
                                                            key: 1,
                                                            icon: t.icon,
                                                            class: n([t.color == `transparent` ? `size-5` : (t.iconOnly, `size-4`), o.value])
                                                        },
                                                        null,
                                                        8,
                                                        [`icon`, `class`]
                                                    ))
                                                  : j(``, !0),
                                            t.iconOnly ? j(``, !0) : w(d.$slots, `default`, { key: 2 })
                                        ],
                                        10,
                                        ir
                                    ))
                        ]),
                        _: 3
                    })
                )
            }
        }
    }),
    or = { class: `fixed inset-0 z-10 w-screen overflow-y-auto` },
    sr = { class: `flex min-h-full items-end justify-center py-4 text-center sm:items-center sm:p-0` },
    cr = { class: `mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-950` },
    lr = { class: `mt-3 text-center sm:mt-5` },
    ur = { class: `flex gap-4 justify-center text-brand-300` },
    dr = {
        href: `https://github.com/migfus/OpenGameArtTestDesign`,
        target: `_blank`,
        class: `mt-2 flex flex-col items-center gap-1 hover:bg-brand-950 transition-all p-2 rounded-xl`
    },
    fr = {
        href: `https://trello.com/b/q3T00dXn/oga-ui-test`,
        target: `_blank`,
        class: `mt-2 flex flex-col items-center gap-1 hover:bg-brand-950 transition-all p-2 rounded-xl`
    },
    pr = { class: `mt-5 sm:mt-6 gap-2 flex flex-col` },
    mr = o({
        __name: `WarningModal`,
        setup(t) {
            let n = ye(`warning_modal`, !0)
            return (t, r) => (
                s(),
                e(
                    g(nr),
                    { as: `template`, show: g(n) },
                    {
                        default: A(() => [
                            i(
                                g(Cn),
                                { as: `div`, class: `relative z-10` },
                                {
                                    default: A(() => [
                                        i(
                                            g(er),
                                            {
                                                as: `template`,
                                                enter: `ease-out duration-300`,
                                                'enter-from': `opacity-0`,
                                                'enter-to': `opacity-100`,
                                                leave: `ease-in duration-200`,
                                                'leave-from': `opacity-100`,
                                                'leave-to': `opacity-0`
                                            },
                                            {
                                                default: A(() => [
                                                    ...(r[1] ||= [
                                                        M(`div`, { class: `fixed inset-0 bg-brand-950/25 transition-opacity backdrop-blur-md` }, null, -1)
                                                    ])
                                                ]),
                                                _: 1
                                            }
                                        ),
                                        M(`div`, or, [
                                            M(`div`, sr, [
                                                i(
                                                    g(er),
                                                    {
                                                        as: `template`,
                                                        enter: `ease-out duration-300`,
                                                        'enter-from': `opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95`,
                                                        'enter-to': `opacity-100 translate-y-0 sm:scale-100`,
                                                        leave: `ease-in duration-200`,
                                                        'leave-from': `opacity-100 translate-y-0 sm:scale-100`,
                                                        'leave-to': `opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95`
                                                    },
                                                    {
                                                        default: A(() => [
                                                            i(
                                                                g(wn),
                                                                {
                                                                    class: `relative transform overflow-hidden sm:rounded-2xl bg-dark-001 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6 w-full mb-11 sm:max-w-sm`
                                                                },
                                                                {
                                                                    default: A(() => [
                                                                        M(`div`, null, [
                                                                            M(`div`, cr, [
                                                                                i(g(D), {
                                                                                    icon: `memory:alpha-x`,
                                                                                    class: `h-6 w-6 text-brand-300`,
                                                                                    'aria-hidden': `true`
                                                                                })
                                                                            ]),
                                                                            M(`div`, lr, [
                                                                                i(
                                                                                    g(Tn),
                                                                                    { as: `h3`, class: `text-base font-semibold leading-6 text-brand-200` },
                                                                                    {
                                                                                        default: A(() => [
                                                                                            ...(r[2] ||= [f(`This is not an official OpenGameArt`, -1)])
                                                                                        ]),
                                                                                        _: 1
                                                                                    }
                                                                                ),
                                                                                (r[5] ||= M(
                                                                                    `div`,
                                                                                    { class: `mt-2` },
                                                                                    [
                                                                                        M(
                                                                                            `p`,
                                                                                            { class: `text-sm text-gray-500` },
                                                                                            `Just for a bored developer that is exploring web design.`
                                                                                        )
                                                                                    ],
                                                                                    -1
                                                                                )),
                                                                                M(`div`, ur, [
                                                                                    M(`a`, dr, [
                                                                                        i(g(D), { icon: `mdi:github`, class: `size-8 text-brand-200` }),
                                                                                        (r[3] ||= M(`p`, { class: `text-xs` }, `Open Source`, -1))
                                                                                    ]),
                                                                                    M(`a`, fr, [
                                                                                        i(g(D), { icon: `mdi:trello`, class: `size-8 text-brand-200` }),
                                                                                        (r[4] ||= M(`p`, { class: `text-xs` }, `Dev Status`, -1))
                                                                                    ])
                                                                                ])
                                                                            ])
                                                                        ]),
                                                                        M(`div`, pr, [
                                                                            i(
                                                                                ar,
                                                                                { icon: `memory:alert-circle`, onClick: (r[0] ||= (e) => (n.value = !1)) },
                                                                                { default: A(() => [...(r[6] ||= [f(`I understand and explore`, -1)])]), _: 1 }
                                                                            ),
                                                                            i(
                                                                                ar,
                                                                                {
                                                                                    href: `https://opengameart.org/`,
                                                                                    externalLinkOnly: ``,
                                                                                    icon: `memory:arrow-right-up`,
                                                                                    color: `brand`
                                                                                },
                                                                                {
                                                                                    default: A(() => [...(r[7] ||= [f(`Go to Official OpenGameArt.org`, -1)])]),
                                                                                    _: 1
                                                                                }
                                                                            )
                                                                        ])
                                                                    ]),
                                                                    _: 1
                                                                }
                                                            )
                                                        ]),
                                                        _: 1
                                                    }
                                                )
                                            ])
                                        ])
                                    ]),
                                    _: 1
                                }
                            )
                        ]),
                        _: 1
                    },
                    8,
                    [`show`]
                )
            )
        }
    }),
    hr = { class: `text-sm` },
    gr = o({
        __name: `FooterNavigation`,
        props: { modelValue: { type: Boolean }, modelModifiers: {} },
        emits: [`update:modelValue`],
        setup(e) {
            let t = E(e, `modelValue`),
                r = O(),
                o = [
                    { display_name: `Home`, name: `home`, icon: `memory:home-thatched`, href: `` },
                    { name: `explore`, display_name: `Explore`, icon: `memory:search`, href: `` },
                    { name: `forums`, display_name: `Forums`, icon: `memory:chat`, href: `` },
                    { name: `art_collections`, display_name: `Art Collections`, icon: `pixelarticons:heart`, href: `` }
                ],
                c = k(!0),
                l = 0,
                d = () => {
                    let e = window.scrollY
                    ;(e > l ? (c.value = !1) : (c.value = !0), (l = e))
                }
            return (
                a(() => window.addEventListener(`scroll`, d)),
                x(() => window.removeEventListener(`scroll`, d)),
                (e, a) => {
                    let l = p(`RouterLink`)
                    return (
                        s(),
                        u(
                            `div`,
                            {
                                class: n([
                                    c.value ? `translate-y-0` : `translate-y-full`,
                                    `fixed bg-dark-001/75 backdrop-blur-lg bottom-0 w-full gap-2 transition-all z-20`
                                ])
                            },
                            [
                                (s(),
                                u(
                                    _,
                                    null,
                                    S(o, (e) =>
                                        i(
                                            l,
                                            {
                                                to: { name: e.name },
                                                class: n([
                                                    g(r).name == e.name ? `bg-brand-950/75 backdrop-blur-lg` : `hover:bg-brand-950`,
                                                    `flex flex-col items-center py-2 flex-1 transition-all`
                                                ])
                                            },
                                            {
                                                default: A(() => [
                                                    i(g(D), { icon: e.icon, class: `size-6` }, null, 8, [`icon`]),
                                                    M(`p`, hr, v(e.display_name), 1)
                                                ]),
                                                _: 2
                                            },
                                            1032,
                                            [`to`, `class`]
                                        )
                                    ),
                                    64
                                )),
                                M(
                                    `div`,
                                    {
                                        onClick: (a[0] ||= (e) => (t.value = !0)),
                                        class: n([
                                            t.value ? `bg-brand-950` : `hover:bg-brand-950`,
                                            `flex flex-col items-center py-2 flex-1 cursor-pointer transition-all`
                                        ])
                                    },
                                    [i(g(D), { icon: `memory:format-align-justify`, class: `size-6` }), (a[1] ||= M(`p`, { class: `text-sm` }, `More`, -1))],
                                    2
                                )
                            ],
                            2
                        )
                    )
                }
            )
        }
    }),
    _r = o({
        __name: `OtherLinksLoader`,
        setup(t) {
            let n = [0, 1, 2, 3, 4]
            return (t, r) => (
                s(),
                e(
                    oe,
                    { class: `flex flex-col gap-2` },
                    {
                        default: A(() => [
                            (s(),
                            u(
                                _,
                                null,
                                S(n, (e, t) =>
                                    M(
                                        `div`,
                                        {
                                            class: `bg-brand-950 mx-2 rounded-xl h-7 animate-pulse`,
                                            style: he({ animationDelay: `${e * g(100)}ms`, transitionDelay: `${e * g(100)}ms` }),
                                            onAnimationendOnce: (r[0] ||= (...e) => g(F) && g(F)(...e)),
                                            onTransitionendOnce: (r[1] ||= (...e) => g(F) && g(F)(...e))
                                        },
                                        null,
                                        36
                                    )
                                ),
                                64
                            ))
                        ]),
                        _: 1
                    }
                )
            )
        }
    }),
    vr = `modulepreload`,
    yr = function (e) {
        return `/build/` + e
    },
    br = {},
    $ = function (e, t, n) {
        let r = Promise.resolve()
        if (t && t.length > 0) {
            let e = document.getElementsByTagName(`link`),
                i = document.querySelector(`meta[property=csp-nonce]`),
                a = i?.nonce || i?.getAttribute(`nonce`)
            function o(e) {
                return Promise.all(
                    e.map((e) =>
                        Promise.resolve(e).then(
                            (e) => ({ status: `fulfilled`, value: e }),
                            (e) => ({ status: `rejected`, reason: e })
                        )
                    )
                )
            }
            r = o(
                t.map((t) => {
                    if (((t = yr(t, n)), t in br)) return
                    br[t] = !0
                    let r = t.endsWith(`.css`),
                        i = r ? `[rel="stylesheet"]` : ``
                    if (n)
                        for (let n = e.length - 1; n >= 0; n--) {
                            let i = e[n]
                            if (i.href === t && (!r || i.rel === `stylesheet`)) return
                        }
                    else if (document.querySelector(`link[href="${t}"]${i}`)) return
                    let o = document.createElement(`link`)
                    if (
                        ((o.rel = r ? `stylesheet` : vr),
                        r || (o.as = `script`),
                        (o.crossOrigin = ``),
                        (o.href = t),
                        a && o.setAttribute(`nonce`, a),
                        document.head.appendChild(o),
                        r)
                    )
                        return new Promise((e, n) => {
                            ;(o.addEventListener(`load`, e), o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))))
                        })
                })
            )
        }
        function i(e) {
            let t = new Event(`vite:preloadError`, { cancelable: !0 })
            if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e
        }
        return r.then((t) => {
            for (let e of t || []) e.status === `rejected` && i(e.reason)
            return e().catch(i)
        })
    },
    xr = ue({
        history: se(),
        routes: [
            { path: `/`, name: `home`, component: () => $(() => import(`./(Index)-BaoWplX9.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])) },
            { path: `/explore`, name: `explore`, component: () => $(() => import(`./(Index)-DI7lu8DV.js`), __vite__mapDeps([8, 1, 2, 4, 5, 6])) },
            { path: `/contents/:id`, name: `Content`, component: () => $(() => import(`./(Show)-8uTOXv1w.js`), __vite__mapDeps([9, 1, 2, 4, 5])) },
            {
                path: `/art_collections`,
                name: `Art Collections`,
                component: () => $(() => import(`./(Index)-BaoWplX9.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]))
            },
            { path: `/forums`, name: `forums`, component: () => $(() => import(`./(Index)-BaoWplX9.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])) },
            { path: `/faqs`, name: `faqs`, component: () => $(() => import(`./(Index)-CGafEx49.js`), __vite__mapDeps([10, 1, 11, 2, 3, 7, 12])) },
            {
                path: `/leaderboards`,
                name: `leaderboards`,
                component: () => $(() => import(`./(Index)-BaoWplX9.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]))
            },
            {
                path: `/login`,
                name: `login`,
                component: () => $(() => import(`./(Index)-Du_OMb86.js`), __vite__mapDeps([13, 1, 2, 3, 14])),
                meta: { guest: !0 }
            },
            {
                path: `/dashboard`,
                name: `dashboard`,
                component: () => $(() => import(`./(Index)-Du_OMb86.js`), __vite__mapDeps([13, 1, 2, 3, 14])),
                meta: { auth: !0 }
            },
            {
                path: `/account-settings`,
                name: `account-settings`,
                component: () => $(() => import(`./(Index)-Du_OMb86.js`), __vite__mapDeps([13, 1, 2, 3, 14])),
                meta: { auth: !0 }
            },
            { path: `/:pathMatch(.*)*`, name: `NotFound`, component: () => $(() => import(`./(Index)-DDR-JfUz.js`), __vite__mapDeps([15, 1, 16])) }
        ]
    })
xr.beforeEach((e) => {
    let t = localStorage.getItem(`token`)
    if ((e.meta.guest && t) || (e.meta.auth && !t)) return { name: `home` }
})
var Sr = L(`auth.store`, () => {
        let e = k([]),
            t = ye(`auth`, null, te()),
            n = ye(`token`, ``),
            r = N({ username: `migfus20@gmail.com`, password: `#On.09109123.t.62` }),
            i = N({ loading: !1 }),
            a = ye(`friends`, [], te()),
            o = N({ password: `` })
        async function s() {
            let { data: t } = await I.get(`/art-previews`)
            e.value = t
        }
        async function c() {
            i.loading = !0
            try {
                let { data: e } = await I.post(`/login`, r)
                e
                    ? ((t.value = e.auth),
                      (n.value = e.token),
                      xr.push({ name: `home` }),
                      be({ group: `success`, title: t.value.username, content: `Welcome back!` }),
                      u())
                    : ((t.value = null), (n.value = null))
            } catch {
                o.password = `Invalid Username/Email or Password`
            }
            i.loading = !1
        }
        async function l() {
            i.loading = !0
            let { data: e } = await I.post(`/logout`, { token: n.value })
            ;(e &&
                ((t.value = null),
                (n.value = null),
                xr.push({ name: `login` }),
                be({ group: `success`, title: `Log-out`, content: `See you!` }),
                (a.value = [])),
                (i.loading = !1))
        }
        async function u() {
            let { data: e } = await I.get(`/friends`)
            a.value = e
        }
        return { art_previews: e, auth: t, form: r, config: i, token: n, friends: a, errors: o, getArtPreviews: s, login: c, logout: l }
    }),
    Cr = { class: `flex` },
    wr = { class: `flex flex-col gap-8 overflow-y-auto scrollbar-hide rounded-xl text-brand-200 pt-2` },
    Tr = { class: `flex flex-col gap-1 px-2` },
    Er = [`href`],
    Dr = [`src`],
    Or = { key: 1, class: `size-6 text-brand-200 rounded-full border border-brand-900 flex-none bg-brand-900 animate-pulse` },
    kr = { class: `truncate grow` },
    Ar = { class: `truncate text-sm` },
    jr = { key: 0, class: `text-xs font-normal truncate` },
    Mr = { key: 1, class: `text-xs font-normal truncate bg-brand-900 h-2.5 animate-pulse rounded-xl` },
    Nr = { key: 2, class: `text-xs flex-none` },
    Pr = { class: `flex flex-col gap-1 px-2` },
    Fr = [`href`],
    Ir = [`src`],
    Lr = { key: 1, class: `size-6 bg-brand-950 rounded-full border border-brand-900 flex-none animate-pulse` },
    Rr = { class: `truncate grow` },
    zr = { class: `truncate text-sm` },
    Br = { key: 0, class: `text-xs font-normal truncate` },
    Vr = { key: 1, class: `text-xs font-normal truncate bg-brand-900 h-2.5 animate-pulse rounded-xl` },
    Hr = { key: 2, class: `text-xs flex-none` },
    Ur = { class: `flex flex-col gap-1 px-2` },
    Wr = [`href`],
    Gr = { class: `flex gap-2 items-center truncate` },
    Kr = [`src`],
    qr = { class: `truncate text-sm` },
    Jr = { class: `flex flex-col gap-1 px-2 mb-12` },
    Yr = {
        href: `https://github.com/migfus/OpenGameArtTestDesign`,
        target: `_blank`,
        class: `flex items-center gap-2 font-semibold hover:bg-brand-950 px-4 py-2 rounded-xl transition-all`
    },
    Xr = {
        href: `https://trello.com/b/q3T00dXn/oga-ui-test`,
        target: `_blank`,
        class: `flex items-center gap-2 font-semibold hover:bg-brand-950 px-4 py-2 rounded-xl transition-all`
    },
    Zr = o({
        __name: `SideNavigationContent`,
        props: { on_mobile: { type: Boolean } },
        emits: [`close_sidebar`],
        setup(t, { emit: r }) {
            let a = O(),
                o = r,
                c = Sr(),
                l = ze(),
                f = Ie(),
                { new_collections: m } = R(Pe()),
                { affiliates: h } = R(ke()),
                { recent_forums: y } = R(f),
                b = [
                    {
                        image_url: `https://images.unsplash.com/photo-1761839257046-84e95464cc52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8`
                    },
                    {
                        image_url: `https://plus.unsplash.com/premium_photo-1762518577411-27d3695b994b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8`
                    },
                    {
                        image_url: `https://images.unsplash.com/photo-1734526040622-a3e96b679f80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8`
                    },
                    {
                        image_url: `https://images.unsplash.com/photo-1761839258830-81f87b1c6d62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8`
                    }
                ]
            d(() => (c.token ? b : []))
            let x = [
                {
                    name: `Explore`,
                    links: [
                        { name: `home`, display_name: `Home`, href: `/`, icon: `pixelarticons:home` },
                        { name: `explore`, display_name: `Explore`, href: `/`, icon: `pixelarticons:search` },
                        { name: `art_collections`, display_name: `Art Collections`, href: `/`, icon: `pixelarticons:heart` },
                        { name: `forums`, display_name: `Forums`, href: `/`, icon: `pixelarticons:message-image` },
                        { name: `faqs`, display_name: `FAQs`, href: `/`, icon: `pixelarticons:info-box` },
                        { name: `leaderboards`, display_name: `Leaderboards`, href: `/`, icon: `pixelarticons:chart` }
                    ]
                }
            ]
            return (r, d) => {
                let f = p(`RouterLink`)
                return (
                    s(),
                    u(`div`, Cr, [
                        M(
                            `div`,
                            {
                                class: n([
                                    t.on_mobile ? `` : `hidden md:flex`,
                                    `flex-col gap-2 h-min-[calc(100vh-7rem)] justify-between border-r border-brand-950 px-2 py-2 flex-none relative`
                                ])
                            },
                            [
                                i(
                                    oe,
                                    { class: `flex flex-col gap-2` },
                                    {
                                        default: A(() => [
                                            i(
                                                f,
                                                {
                                                    to: `/`,
                                                    class: n([
                                                        `bg-brand-950 flex justify-center items-center rounded-xl border border-brand-900 size-10 hover:bg-dark-001 transition-all`
                                                    ])
                                                },
                                                { default: A(() => [i(g(D), { icon: `ic:baseline-plus`, class: `size-6 text-brand-200` })]), _: 1 }
                                            )
                                        ]),
                                        _: 1
                                    }
                                ),
                                i(fe, null, {
                                    default: A(() => [
                                        g(c).token
                                            ? (s(),
                                              e(
                                                  f,
                                                  {
                                                      key: 0,
                                                      to: `/`,
                                                      class: `bg-brand-950/75 flex justify-center items-center rounded-xl border border-brand-900 backdrop-blur-lg size-10 fixed bottom-2 hover:bg-dark-001 transition-all`
                                                  },
                                                  { default: A(() => [i(g(D), { icon: `memory:apps`, class: `size-6 text-brand-200` })]), _: 1 }
                                              ))
                                            : (s(),
                                              e(
                                                  f,
                                                  {
                                                      key: 1,
                                                      to: { name: `login` },
                                                      class: `bg-brand-950/75 flex justify-center items-center rounded-xl border border-brand-900 backdrop-blur-lg size-10 fixed bottom-2 hover:bg-dark-001 transition-all`
                                                  },
                                                  { default: A(() => [i(g(D), { icon: `memory:login`, class: `size-6 text-brand-200` })]), _: 1 }
                                              ))
                                    ]),
                                    _: 1
                                })
                            ],
                            2
                        ),
                        M(
                            `div`,
                            {
                                class: n([
                                    t.on_mobile ? `border-none` : `hidden md:flex border-r`,
                                    `flex-col gap-2 h-min-[calc(100vh-7rem)] justify-between  border-brand-950 py-2 w-60 flex-none`
                                ])
                            },
                            [
                                M(`div`, wr, [
                                    i(
                                        oe,
                                        { class: `-mt-8` },
                                        {
                                            default: A(() => [
                                                (s(),
                                                u(
                                                    _,
                                                    null,
                                                    S(x, (t, r) =>
                                                        M(
                                                            `div`,
                                                            {
                                                                class: `flex flex-col gap-1 px-2 transition-all`,
                                                                style: he({ animationDelay: `${r * 100}ms`, transitionDelay: `${r * 100}ms` }),
                                                                onAnimationendOnce: (d[1] ||= (...e) => g(F) && g(F)(...e)),
                                                                onTransitionendOnce: (d[2] ||= (...e) => g(F) && g(F)(...e))
                                                            },
                                                            [
                                                                M(`p`, null, v(t.name), 1),
                                                                (s(!0),
                                                                u(
                                                                    _,
                                                                    null,
                                                                    S(
                                                                        t.links,
                                                                        (t) => (
                                                                            s(),
                                                                            e(
                                                                                f,
                                                                                {
                                                                                    to: { name: t.name },
                                                                                    onClick: (d[0] ||= (e) => o(`close_sidebar`)),
                                                                                    class: n([
                                                                                        g(a).name == t.name ? `bg-brand-950` : ``,
                                                                                        `flex items-center gap-2 font-semibold hover:bg-brand-950 p-2 px-4 rounded-xl transition-all`
                                                                                    ])
                                                                                },
                                                                                {
                                                                                    default: A(() => [
                                                                                        i(g(D), { icon: t.icon, class: `size-6 text-brand-200` }, null, 8, [
                                                                                            `icon`
                                                                                        ]),
                                                                                        M(`p`, null, v(t.display_name), 1)
                                                                                    ]),
                                                                                    _: 2
                                                                                },
                                                                                1032,
                                                                                [`to`, `class`]
                                                                            )
                                                                        )
                                                                    ),
                                                                    256
                                                                ))
                                                            ],
                                                            36
                                                        )
                                                    ),
                                                    64
                                                ))
                                            ]),
                                            _: 1
                                        }
                                    ),
                                    M(`div`, Tr, [
                                        (d[12] ||= M(`p`, { class: `mx-2` }, `New Collections`, -1)),
                                        g(l).config.loading
                                            ? (s(), e(_r, { key: 0 }))
                                            : (s(),
                                              e(
                                                  oe,
                                                  { key: 1 },
                                                  {
                                                      default: A(() => [
                                                          (s(!0),
                                                          u(
                                                              _,
                                                              null,
                                                              S(
                                                                  g(m),
                                                                  (e, t) => (
                                                                      s(),
                                                                      u(
                                                                          `a`,
                                                                          {
                                                                              href: `https://opengameart.org/content/${e.id}`,
                                                                              onClick: (d[3] ||= (e) => o(`close_sidebar`)),
                                                                              class: `flex items-center gap-2 font-semibold hover:bg-brand-950 px-4 py-2 rounded-xl transition-all`,
                                                                              style: he({ animationDelay: `${t * 100}ms`, transitionDelay: `${t * 100}ms` }),
                                                                              onAnimationendOnce: (d[4] ||= (...e) => g(F) && g(F)(...e)),
                                                                              onTransitionendOnce: (d[5] ||= (...e) => g(F) && g(F)(...e))
                                                                          },
                                                                          [
                                                                              e.user
                                                                                  ? (s(),
                                                                                    u(
                                                                                        `img`,
                                                                                        {
                                                                                            key: 0,
                                                                                            src: e.user.image_url,
                                                                                            class: `size-6 text-brand-200 rounded-full border border-brand-900`
                                                                                        },
                                                                                        null,
                                                                                        8,
                                                                                        Dr
                                                                                    ))
                                                                                  : (s(), u(`div`, Or)),
                                                                              M(`div`, kr, [
                                                                                  M(`p`, Ar, v(e.title), 1),
                                                                                  e.user ? (s(), u(`p`, jr, v(e.user?.username), 1)) : (s(), u(`p`, Mr))
                                                                              ]),
                                                                              e.created_at ? (s(), u(`p`, Nr, v(g(le)(e.created_at)), 1)) : j(``, !0)
                                                                          ],
                                                                          44,
                                                                          Er
                                                                      )
                                                                  )
                                                              ),
                                                              256
                                                          ))
                                                      ]),
                                                      _: 1
                                                  }
                                              ))
                                    ]),
                                    M(`div`, Pr, [
                                        (d[13] ||= M(`p`, { class: `mx-2` }, `Recent Forums`, -1)),
                                        g(l).config.loading
                                            ? (s(), e(_r, { key: 0 }))
                                            : (s(),
                                              e(
                                                  oe,
                                                  { key: 1 },
                                                  {
                                                      default: A(() => [
                                                          (s(!0),
                                                          u(
                                                              _,
                                                              null,
                                                              S(
                                                                  g(y),
                                                                  (e, t) => (
                                                                      s(),
                                                                      u(
                                                                          `a`,
                                                                          {
                                                                              href: `https://opengameart.org/forumtopic/${e.id}`,
                                                                              onClick: (d[6] ||= (e) => o(`close_sidebar`)),
                                                                              class: `flex items-center gap-2 font-semibold hover:bg-brand-950 px-4 py-2 rounded-xl transition-all justify-between`,
                                                                              style: he({ animationDelay: `${t * 100}ms`, transitionDelay: `${t * 100}ms` }),
                                                                              onAnimationendOnce: (d[7] ||= (...e) => g(F) && g(F)(...e)),
                                                                              onTransitionendOnce: (d[8] ||= (...e) => g(F) && g(F)(...e))
                                                                          },
                                                                          [
                                                                              e.user
                                                                                  ? (s(),
                                                                                    u(
                                                                                        `img`,
                                                                                        {
                                                                                            key: 0,
                                                                                            src: e.user.image_url,
                                                                                            class: `size-6 text-brand-200 rounded-full border border-brand-900`
                                                                                        },
                                                                                        null,
                                                                                        8,
                                                                                        Ir
                                                                                    ))
                                                                                  : (s(), u(`img`, Lr)),
                                                                              M(`div`, Rr, [
                                                                                  M(`p`, zr, v(e.title), 1),
                                                                                  e.user ? (s(), u(`p`, Br, v(e.user?.username), 1)) : (s(), u(`p`, Vr))
                                                                              ]),
                                                                              e.created_at ? (s(), u(`p`, Hr, v(g(le)(e.created_at)), 1)) : j(``, !0)
                                                                          ],
                                                                          44,
                                                                          Fr
                                                                      )
                                                                  )
                                                              ),
                                                              256
                                                          ))
                                                      ]),
                                                      _: 1
                                                  }
                                              ))
                                    ]),
                                    M(`div`, Ur, [
                                        (d[14] ||= M(`p`, { class: `mx-2` }, `Affiliates`, -1)),
                                        g(l).config.loading
                                            ? (s(), e(_r, { key: 0 }))
                                            : (s(),
                                              e(
                                                  oe,
                                                  { key: 1 },
                                                  {
                                                      default: A(() => [
                                                          (s(!0),
                                                          u(
                                                              _,
                                                              null,
                                                              S(
                                                                  g(h),
                                                                  (t, n) => (
                                                                      s(),
                                                                      u(
                                                                          `a`,
                                                                          {
                                                                              href: t.id,
                                                                              onClick: (d[9] ||= (e) => o(`close_sidebar`)),
                                                                              class: `flex items-center gap-2 font-semibold hover:bg-brand-950 px-4 py-2 rounded-xl transition-all justify-between cursor-pointer`,
                                                                              style: he({ animationDelay: `${n * 100}ms`, transitionDelay: `${n * 100}ms` }),
                                                                              onAnimationendOnce: (d[10] ||= (...e) => g(F) && g(F)(...e)),
                                                                              onTransitionendOnce: (d[11] ||= (...e) => g(F) && g(F)(...e))
                                                                          },
                                                                          [
                                                                              M(`div`, Gr, [
                                                                                  t.image_url
                                                                                      ? (s(),
                                                                                        u(
                                                                                            `img`,
                                                                                            { key: 0, src: t.image_url, class: `size-4 flex-none` },
                                                                                            null,
                                                                                            8,
                                                                                            Kr
                                                                                        ))
                                                                                      : (s(),
                                                                                        e(g(D), {
                                                                                            key: 1,
                                                                                            icon: `memory:arrow-right-circle`,
                                                                                            class: `size-4 flex-none`
                                                                                        })),
                                                                                  M(`p`, qr, v(t.title), 1)
                                                                              ])
                                                                          ],
                                                                          44,
                                                                          Wr
                                                                      )
                                                                  )
                                                              ),
                                                              256
                                                          ))
                                                      ]),
                                                      _: 1
                                                  }
                                              ))
                                    ]),
                                    M(`div`, Jr, [
                                        (d[17] ||= M(`p`, { class: `mx-2` }, `Development`, -1)),
                                        M(`a`, Yr, [i(g(D), { icon: `mdi:github` }), (d[15] ||= M(`p`, { class: `` }, `Open Source`, -1))]),
                                        M(`a`, Xr, [i(g(D), { icon: `mdi:trello` }), (d[16] ||= M(`p`, { class: `` }, `Progress`, -1))])
                                    ])
                                ]),
                                i(fe, null, {
                                    default: A(() => [
                                        g(c).token
                                            ? (s(),
                                              e(
                                                  f,
                                                  {
                                                      key: 0,
                                                      to: { name: `account-settings` },
                                                      class: n([
                                                          t.on_mobile ? `w-60` : `w-56`,
                                                          `bg-brand-950/75 flex justify-between px-4 items-center rounded-xl border border-brand-900 backdrop-blur-lg h-10 fixed bottom-2 text-brand-200 ml-2 hover:bg-dark-001`
                                                      ])
                                                  },
                                                  {
                                                      default: A(() => [
                                                          (d[18] ||= M(`p`, null, `Account Settings`, -1)),
                                                          i(g(D), { icon: `memory:dot-hexagon`, class: `size-6 text-brand-200` })
                                                      ]),
                                                      _: 1
                                                  },
                                                  8,
                                                  [`class`]
                                              ))
                                            : j(``, !0)
                                    ]),
                                    _: 1
                                })
                            ],
                            2
                        )
                    ])
                )
            }
        }
    }),
    Qr = { class: n([`h-full flex`]) },
    $r = { class: `fixed inset-0 flex flex-row-reverse` },
    ei = { class: `absolute right-full bottom-4 flex mr-2 justify-center pt-5 -mb-2` },
    ti = { class: `flex grow flex-col gap-y-5 overflow-y-auto bg-dark-001 pb-4 relative` },
    ni = { class: `flex h-16 shrink-0 items-center bg-brand-950 px-6 relative` },
    ri = [`src`],
    ii = { class: `flex -mt-4` },
    ai = o({
        __name: `SideNavigation`,
        props: {
            top_navigation_hidden: { type: Boolean, required: !0 },
            top_navigation_hiddenModifiers: {},
            show_side_navigation: { type: Boolean, required: !0 },
            show_side_navigationModifiers: {}
        },
        emits: [`update:top_navigation_hidden`, `update:show_side_navigation`],
        setup(e) {
            let t = ze(),
                r = E(e, `top_navigation_hidden`),
                o = de(`content_scroll`),
                l = window.scrollY,
                d = E(e, `show_side_navigation`),
                f = window.location.origin
            function m() {
                if (o.value) {
                    let e = o.value.scrollTop
                    ;(e > l && e > 50 ? (r.value = !0) : (r.value = !1), (l = e))
                }
            }
            return (
                a(async () => {
                    ;(t.getData(), await y(), o.value && o.value.addEventListener(`scroll`, m, { passive: !0 }))
                }),
                c(() => {
                    o.value && o.value.removeEventListener(`scroll`, m)
                }),
                (e, t) => {
                    let r = p(`RouterLink`)
                    return (
                        s(),
                        u(`div`, Qr, [
                            i(
                                g(nr),
                                { as: `template`, show: d.value },
                                {
                                    default: A(() => [
                                        i(
                                            g(Cn),
                                            { as: `div`, class: `relative z-50 md:hidden`, onClose: (t[2] ||= (e) => (d.value = !1)) },
                                            {
                                                default: A(() => [
                                                    i(
                                                        g(er),
                                                        {
                                                            as: `template`,
                                                            enter: `transition-opacity ease-linear duration-300`,
                                                            'enter-from': `opacity-0`,
                                                            'enter-to': `opacity-100`,
                                                            leave: `transition-opacity ease-linear duration-300`,
                                                            'leave-from': `opacity-100`,
                                                            'leave-to': `opacity-0`
                                                        },
                                                        {
                                                            default: A(() => [...(t[4] ||= [M(`div`, { class: `fixed inset-0 bg-gray-900/80` }, null, -1)])]),
                                                            _: 1
                                                        }
                                                    ),
                                                    M(`div`, $r, [
                                                        i(
                                                            g(er),
                                                            {
                                                                as: `template`,
                                                                enter: `transition ease-in-out duration-300 transform`,
                                                                'enter-from': `translate-x-full`,
                                                                'enter-to': `translate-x-0`,
                                                                leave: `transition ease-in-out duration-300 transform`,
                                                                'leave-from': `translate-x-0`,
                                                                'leave-to': `translate-x-full`
                                                            },
                                                            {
                                                                default: A(() => [
                                                                    i(
                                                                        g(wn),
                                                                        { class: `relative flex w-full max-w-xs flex-1` },
                                                                        {
                                                                            default: A(() => [
                                                                                i(
                                                                                    g(er),
                                                                                    {
                                                                                        as: `template`,
                                                                                        enter: `ease-in-out duration-300`,
                                                                                        'enter-from': `opacity-0`,
                                                                                        'enter-to': `opacity-100`,
                                                                                        leave: `ease-in-out duration-300`,
                                                                                        'leave-from': `opacity-100`,
                                                                                        'leave-to': `opacity-0`
                                                                                    },
                                                                                    {
                                                                                        default: A(() => [
                                                                                            M(`div`, ei, [
                                                                                                M(
                                                                                                    `button`,
                                                                                                    {
                                                                                                        type: `button`,
                                                                                                        class: `rounded-2xl`,
                                                                                                        onClick: (t[0] ||= (e) => (d.value = !1))
                                                                                                    },
                                                                                                    [
                                                                                                        (t[5] ||= M(
                                                                                                            `span`,
                                                                                                            { class: `sr-only` },
                                                                                                            `Close sidebar`,
                                                                                                            -1
                                                                                                        )),
                                                                                                        i(g(D), {
                                                                                                            icon: `iconoir:xmark`,
                                                                                                            class: `size-10 text-brand-50 cursor-pointer bg-brand-950 p-2 rounded-xl border border-brand-900`
                                                                                                        })
                                                                                                    ]
                                                                                                ),
                                                                                                i(
                                                                                                    r,
                                                                                                    { to: `/`, class: `gap-4 items-center hidden md:flex` },
                                                                                                    {
                                                                                                        default: A(() => [
                                                                                                            ...(t[6] ||= [
                                                                                                                M(
                                                                                                                    `p`,
                                                                                                                    {
                                                                                                                        class: `text-xs press-start-2p-regular flex flex-wrap w-42 text-center`
                                                                                                                    },
                                                                                                                    `Winter Game Jam 2025`,
                                                                                                                    -1
                                                                                                                )
                                                                                                            ])
                                                                                                        ]),
                                                                                                        _: 1
                                                                                                    }
                                                                                                )
                                                                                            ])
                                                                                        ]),
                                                                                        _: 1
                                                                                    }
                                                                                ),
                                                                                M(`div`, ti, [
                                                                                    M(`div`, ni, [
                                                                                        i(
                                                                                            r,
                                                                                            { to: `/`, class: `flex gap-4 items-center` },
                                                                                            {
                                                                                                default: A(() => [
                                                                                                    M(
                                                                                                        `img`,
                                                                                                        {
                                                                                                            src: `${g(f)}/images/icon.png`,
                                                                                                            class: `size-10 image-rendering-pixelated`,
                                                                                                            style: { 'image-rendering': `pixelated` }
                                                                                                        },
                                                                                                        null,
                                                                                                        8,
                                                                                                        ri
                                                                                                    ),
                                                                                                    (t[7] ||= M(
                                                                                                        `p`,
                                                                                                        { class: `text-3xl anek-latin text-brand-200` },
                                                                                                        `OpenGameArt`,
                                                                                                        -1
                                                                                                    )),
                                                                                                    (t[8] ||= M(
                                                                                                        `p`,
                                                                                                        {
                                                                                                            class: `absolute rotate-5 bg-yellow-900/75 px-20 text-yellow-50`
                                                                                                        },
                                                                                                        `Not Official`,
                                                                                                        -1
                                                                                                    ))
                                                                                                ]),
                                                                                                _: 1
                                                                                            }
                                                                                        )
                                                                                    ]),
                                                                                    M(`div`, ii, [
                                                                                        i(Zr, {
                                                                                            on_mobile: ``,
                                                                                            onClose_sidebar: (t[1] ||= (e) => (d.value = !1))
                                                                                        })
                                                                                    ])
                                                                                ])
                                                                            ]),
                                                                            _: 1
                                                                        }
                                                                    )
                                                                ]),
                                                                _: 1
                                                            }
                                                        )
                                                    ])
                                                ]),
                                                _: 1
                                            }
                                        )
                                    ]),
                                    _: 1
                                },
                                8,
                                [`show`]
                            ),
                            i(Zr, { class: `` }),
                            M(
                                `div`,
                                { class: n([`overflow-y-auto h-min-[calc(100vh-7rem)] grow`]), ref_key: `content_scroll`, ref: o },
                                [w(e.$slots, `default`)],
                                512
                            ),
                            i(gr, { class: `flex md:hidden`, modelValue: d.value, 'onUpdate:modelValue': (t[3] ||= (e) => (d.value = e)) }, null, 8, [
                                `modelValue`
                            ])
                        ])
                    )
                }
            )
        }
    }),
    oi = { class: `relative cursor-pointer` },
    si = [`src`, `alt`],
    ci = { class: `py-2` },
    li = o({
        __name: `ProfileDropdown`,
        setup(t) {
            let r = Sr(),
                a = [
                    { href: { name: `dashboard` }, name: `Dashboard`, icon: `pixelarticons:grid` },
                    { href: { name: `account-settings` }, name: `Account Settings`, icon: `memory:dot-hexagon` }
                ]
            return (t, o) => {
                let c = p(`RouterLink`)
                return (
                    s(),
                    e(
                        g(Fn),
                        { as: `div`, class: `inline-block text-left` },
                        {
                            default: A(() => [
                                M(`div`, null, [
                                    i(g(In), null, {
                                        default: A(() => [
                                            M(`div`, oi, [
                                                M(
                                                    `img`,
                                                    {
                                                        src: g(r).auth.image_url,
                                                        class: `size-8 rounded-full ring-2 ring-brand-900 transition-all hover:ring-4 cursor-pointer`,
                                                        alt: g(r).auth.username
                                                    },
                                                    null,
                                                    8,
                                                    si
                                                ),
                                                i(g(D), { icon: `pixelarticons:chevron-down`, class: `size-4 absolute bottom-0 right-0 bg-dark-001 rounded` })
                                            ])
                                        ]),
                                        _: 1
                                    })
                                ]),
                                i(
                                    pe,
                                    {
                                        'enter-active-class': `transition ease-out duration-100`,
                                        'enter-from-class': `transform opacity-0 scale-95`,
                                        'enter-to-class': `transform opacity-100 scale-100`,
                                        'leave-active-class': `transition ease-in duration-75`,
                                        'leave-from-class': `transform opacity-100 scale-100`,
                                        'leave-to-class': `transform opacity-0 scale-95`
                                    },
                                    {
                                        default: A(() => [
                                            i(
                                                g(Ln),
                                                {
                                                    class: `absolute right-2 z-20 mt-2 w-48 origin-top-right rounded-xl bg-dark-001/90 shadow-lg backdrop-blur-sm border border-brand-950`
                                                },
                                                {
                                                    default: A(() => [
                                                        M(`div`, ci, [
                                                            (s(),
                                                            u(
                                                                _,
                                                                null,
                                                                S(a, (e) =>
                                                                    i(
                                                                        g(Rn),
                                                                        null,
                                                                        {
                                                                            default: A(({ active: t }) => [
                                                                                i(
                                                                                    c,
                                                                                    {
                                                                                        to: e.href,
                                                                                        class: n([
                                                                                            t ? `bg-brand-950 ` : ``,
                                                                                            ` text-brand-300 px-4 py-2 text-sm flex gap-2 items-center`
                                                                                        ])
                                                                                    },
                                                                                    {
                                                                                        default: A(() => [
                                                                                            i(g(D), { icon: e.icon, class: `size-4` }, null, 8, [`icon`]),
                                                                                            M(`p`, null, v(e.name), 1)
                                                                                        ]),
                                                                                        _: 2
                                                                                    },
                                                                                    1032,
                                                                                    [`to`, `class`]
                                                                                )
                                                                            ]),
                                                                            _: 2
                                                                        },
                                                                        1024
                                                                    )
                                                                ),
                                                                64
                                                            )),
                                                            M(
                                                                `form`,
                                                                { onSubmit: (o[0] ||= me((e) => g(r).logout(), [`prevent`])) },
                                                                [
                                                                    i(g(Rn), null, {
                                                                        default: A(({ active: t }) => [
                                                                            M(
                                                                                `button`,
                                                                                {
                                                                                    type: `submit`,
                                                                                    class: n([
                                                                                        t ? `bg-brand-950` : ``,
                                                                                        ` text-brand-300 w-full px-4 py-2 text-left text-sm cursor-pointer flex gap-2 items-center`
                                                                                    ])
                                                                                },
                                                                                [
                                                                                    g(r).config.loading
                                                                                        ? (s(),
                                                                                          e(g(D), {
                                                                                              key: 0,
                                                                                              icon: `memory:border-bottom`,
                                                                                              class: `size-4 retro-spinner`
                                                                                          }))
                                                                                        : (s(),
                                                                                          e(g(D), { key: 1, icon: `pixelarticons:logout`, class: `size-4` })),
                                                                                    (o[1] ||= M(`p`, null, `Sign out`, -1))
                                                                                ],
                                                                                2
                                                                            )
                                                                        ]),
                                                                        _: 1
                                                                    })
                                                                ],
                                                                32
                                                            )
                                                        ])
                                                    ]),
                                                    _: 1
                                                }
                                            )
                                        ]),
                                        _: 1
                                    }
                                )
                            ]),
                            _: 1
                        }
                    )
                )
            }
        }
    }),
    ui = { class: `relative` },
    di = { key: 0, class: `block text-sm font-medium leading-6 text-brand-50` },
    fi = [`id`, `name`, `type`, `placeholder`],
    pi = { key: 2, for: `password`, class: `block text-sm font-medium text-red-600` },
    mi = o({
        __name: `AppInput`,
        props: b(
            { error: {}, name: {}, type: {}, placeholder: {}, size: {}, noLabel: { type: Boolean }, injectCSS: {}, color: {}, loading: { type: Boolean } },
            { modelValue: {}, modelModifiers: {} }
        ),
        emits: b([`focus`], [`update:modelValue`]),
        setup(t, { emit: r }) {
            let i = t,
                a = E(t, `modelValue`),
                o = r,
                c = d(() => {
                    switch (i.size) {
                        case `sm`:
                            return `text-sm h-[34px]`
                        case `xs`:
                            return `text-xs h-[30px]`
                        default:
                            return ``
                    }
                })
            return (r, l) => (
                s(),
                e(fe, null, {
                    default: A(() => [
                        M(`div`, ui, [
                            i.noLabel ? j(``, !0) : (s(), u(`label`, di, v(i.name), 1)),
                            ne(
                                M(
                                    `input`,
                                    {
                                        'onUpdate:modelValue': (l[0] ||= (e) => (a.value = e)),
                                        id: t.name,
                                        name: t.name,
                                        type: t.type ?? `text`,
                                        placeholder: t.placeholder ?? ``,
                                        class: n([
                                            c.value,
                                            t.injectCSS,
                                            t.color == `white` ? `bg-white` : `bg-dark-001`,
                                            t.error && `border-red-500`,
                                            `w-full rounded-3xl border border-brand-900 placeholder-brand-900 focus:border-brand-500 focus:outline-none focus:ring-brand-500 h-8 py-4 px-3 text-brand-200 font-semibold`
                                        ]),
                                        autocomplete: `off`,
                                        onFocus: (l[1] ||= (e) => o(`focus`, !0)),
                                        onBlur: (l[2] ||= (e) => o(`focus`, !1))
                                    },
                                    null,
                                    42,
                                    fi
                                ),
                                [[h, a.value]]
                            ),
                            t.loading ? (s(), e(g(D), { key: 1, icon: `memory:border-bottom`, class: `retro-spinner absolute top-8.5 right-3` })) : j(``, !0),
                            i.error ? (s(), u(`label`, pi, v(i.error), 1)) : j(``, !0)
                        ])
                    ]),
                    _: 1
                })
            )
        }
    }),
    hi = L(`SearchStore`, () => {
        let e = ae(),
            t = k({ search: `` }),
            n = _e(`search_history`, [], localStorage, { serializer: { read: (e) => (e ? JSON.parse(e) : null), write: (e) => JSON.stringify(e) } })
        function r() {
            let r = t.value.search.trim()
            r &&
                (n.value.some((e) => e.content === r) ||
                    (n.value.push({ content: r, created_at: new Date().toISOString() }), n.value.length > 6 && n.value.shift()),
                e.push({ path: `/explore`, query: t.value }))
        }
        function i(e) {
            ;((n.value = n.value.filter((t) => t.created_at !== e)),
                be({ group: `success`, title: `Removed from history`, content: `The search term has been removed from your history` }))
        }
        return { search_filters: t, search_history: n, submit_search: r, removeFromHistory: i }
    }),
    gi = { class: `py-2 first:rounded-t-3xl last:rounded-b-3xl` },
    _i = { class: `truncate-start` },
    vi = { class: `truncate` },
    yi = { class: `group-hover:hidden transition-all` },
    bi = o({
        __name: `SearchDropdown`,
        setup(t) {
            let r = O(),
                a = hi(),
                { search_history: o, search_filters: c } = R(a),
                { submit_search: l, removeFromHistory: d } = a,
                f = k(!1)
            return (t, d) => {
                let m = p(`RouterLink`)
                return (
                    s(),
                    e(
                        g(Fn),
                        { as: `div`, class: `text-left flex items-center -mr-3 relative z-20` },
                        {
                            default: A(() => [
                                i(ar, { href: `/explore`, iconOnly: ``, icon: `pixelarticons:search`, class: `sm:hidden` }),
                                g(r).path === `/explore`
                                    ? j(``, !0)
                                    : (s(),
                                      u(
                                          `form`,
                                          { key: 0, onSubmit: (d[2] ||= me((e) => g(l)(), [`prevent`])), class: `hidden sm:flex`, ref: `input_ref` },
                                          [
                                              i(
                                                  mi,
                                                  {
                                                      name: `Search`,
                                                      modelValue: g(c).search,
                                                      'onUpdate:modelValue': (d[0] ||= (e) => (g(c).search = e)),
                                                      noLabel: ``,
                                                      placeholder: `Search`,
                                                      onFocus: (d[1] ||= (e) => (f.value = e))
                                                  },
                                                  null,
                                                  8,
                                                  [`modelValue`]
                                              )
                                          ],
                                          544
                                      )),
                                i(
                                    pe,
                                    {
                                        'enter-active-class': `transition ease-out duration-100`,
                                        'enter-from-class': `transform opacity-0 scale-95`,
                                        'enter-to-class': `transform opacity-100 scale-100`,
                                        'leave-active-class': `transition ease-in duration-75`,
                                        'leave-from-class': `transform opacity-100 scale-100`,
                                        'leave-to-class': `transform opacity-0 scale-95`
                                    },
                                    {
                                        default: A(() => [
                                            f.value
                                                ? (s(),
                                                  e(
                                                      g(Ln),
                                                      {
                                                          key: 0,
                                                          static: ``,
                                                          class: `absolute right-0 top-7 z-20 mt-2 w-50 origin-top-right rounded-3xl bg-dark-001/90 shadow-lg backdrop-blur-sm border border-brand-950`
                                                      },
                                                      {
                                                          default: A(() => [
                                                              M(`div`, gi, [
                                                                  g(c).search
                                                                      ? (s(),
                                                                        e(
                                                                            g(Rn),
                                                                            { key: 0 },
                                                                            {
                                                                                default: A(({ active: e }) => [
                                                                                    i(
                                                                                        m,
                                                                                        {
                                                                                            to: `/explore?search=${g(c).search}`,
                                                                                            class: n([
                                                                                                e ? `bg-brand-950 ` : ``,
                                                                                                ` text-brand-300 px-4 py-2 text-sm flex gap-2 items-center `
                                                                                            ])
                                                                                        },
                                                                                        { default: A(() => [M(`p`, _i, v(g(c).search), 1)]), _: 1 },
                                                                                        8,
                                                                                        [`to`, `class`]
                                                                                    )
                                                                                ]),
                                                                                _: 1
                                                                            }
                                                                        ))
                                                                      : j(``, !0),
                                                                  (s(!0),
                                                                  u(
                                                                      _,
                                                                      null,
                                                                      S(
                                                                          [...g(o)].reverse(),
                                                                          (t) => (
                                                                              s(),
                                                                              e(
                                                                                  g(Rn),
                                                                                  { key: t.created_at },
                                                                                  {
                                                                                      default: A(({ active: e }) => [
                                                                                          i(
                                                                                              m,
                                                                                              {
                                                                                                  to: `/explore?search=${t.content}`,
                                                                                                  class: n([
                                                                                                      e ? `bg-brand-950 ` : ``,
                                                                                                      ` text-brand-300 px-4 py-2 text-sm flex gap-2 items-center justify-between group`
                                                                                                  ])
                                                                                              },
                                                                                              {
                                                                                                  default: A(() => [
                                                                                                      M(`p`, vi, v(t.content), 1),
                                                                                                      M(`p`, yi, v(g(ie)(t.created_at)), 1),
                                                                                                      i(
                                                                                                          g(D),
                                                                                                          {
                                                                                                              onClick: me(
                                                                                                                  (e) => g(a).removeFromHistory(t.created_at),
                                                                                                                  [`prevent`]
                                                                                                              ),
                                                                                                              icon: `pixelarticons:trash`,
                                                                                                              class: `group-hover:inline hidden transition-all hover:bg-dark-001`
                                                                                                          },
                                                                                                          null,
                                                                                                          8,
                                                                                                          [`onClick`]
                                                                                                      )
                                                                                                  ]),
                                                                                                  _: 2
                                                                                              },
                                                                                              1032,
                                                                                              [`to`, `class`]
                                                                                          )
                                                                                      ]),
                                                                                      _: 2
                                                                                  },
                                                                                  1024
                                                                              )
                                                                          )
                                                                      ),
                                                                      128
                                                                  ))
                                                              ])
                                                          ]),
                                                          _: 1
                                                      }
                                                  ))
                                                : j(``, !0)
                                        ]),
                                        _: 1
                                    }
                                )
                            ]),
                            _: 1
                        }
                    )
                )
            }
        }
    }),
    xi = { class: `flex gap-4 items-center overflow-y-auto` },
    Si = [`src`],
    Ci = { class: `flex gap-4 items-center` },
    wi = o({
        __name: `TopNavigation`,
        props: { top_navigation_hidden: { type: Boolean, required: !0 }, top_navigation_hiddenModifiers: {} },
        emits: [`update:top_navigation_hidden`],
        setup(t) {
            let r = E(t, `top_navigation_hidden`),
                a = Sr(),
                o = window.location.origin
            return (t, c) => {
                let l = p(`RouterLink`)
                return (
                    s(),
                    u(
                        `div`,
                        {
                            class: n([
                                `bg-brand-950 px-6 py-2 font-semibold flex justify-between gap-2 text-brand-200 h-18 border-b border-brand-900 overflow-visible transition-all duration-500`
                            ]),
                            style: he({ height: `${r.value ? `0px` : `70px`}` })
                        },
                        [
                            M(`div`, xi, [
                                i(
                                    l,
                                    { to: `/`, class: `flex gap-4 items-center` },
                                    {
                                        default: A(() => [
                                            M(
                                                `img`,
                                                {
                                                    src: `${g(o)}/images/icon.png`,
                                                    class: `size-10 image-rendering-pixelated`,
                                                    style: { 'image-rendering': `pixelated` }
                                                },
                                                null,
                                                8,
                                                Si
                                            ),
                                            (c[0] ||= M(`p`, { class: `text-3xl anek-latin hidden md:flex` }, `OpenGameArt.org`, -1)),
                                            (c[1] ||= M(
                                                `p`,
                                                { class: `absolute rotate-5 bg-yellow-900/75 px-20 hidden md:flex text-yellow-50 text-lg` },
                                                `Not Official`,
                                                -1
                                            )),
                                            (c[2] ||= M(`p`, { class: `absolute rotate-15 bg-yellow-900/75 text-yellow-50 md:hidden` }, `Not Official`, -1))
                                        ]),
                                        _: 1
                                    }
                                )
                            ]),
                            M(`div`, Ci, [
                                i(bi),
                                i(ar, { size: `sm`, icon: `memory:plus`, icon_only: ``, class: `inline lg:hidden` }),
                                i(
                                    ar,
                                    { size: `sm`, icon: `memory:plus`, class: `lg:flex hidden` },
                                    { default: A(() => [...(c[3] ||= [f(`Submit Art`, -1)])]), _: 1 }
                                ),
                                i(g(D), {
                                    icon: `pixelarticons:volume-2`,
                                    class: `size-6 text-brand-200 transition-all rounded hover:bg-dark-001 cursor-pointer`
                                }),
                                i(g(D), {
                                    icon: `pixelarticons:notification`,
                                    class: `size-6 text-brand-200 transition-all rounded hover:bg-dark-001 cursor-pointer`
                                }),
                                g(a).auth
                                    ? (s(), e(li, { key: 0 }))
                                    : (s(),
                                      e(
                                          l,
                                          { key: 1, to: { name: `login` }, class: `relative cursor-pointer` },
                                          {
                                              default: A(() => [
                                                  i(ar, { icon: `memory:login` }, { default: A(() => [...(c[4] ||= [f(`Sign Up`, -1)])]), _: 1 })
                                              ]),
                                              _: 1
                                          }
                                      ))
                            ])
                        ],
                        4
                    )
                )
            }
        }
    }),
    Ti = { class: `fixed inset-0 flex items-end justify-end p-6 px-4 py-6 pointer-events-none z-30 pt-16` },
    Ei = { class: `w-full max-w-sm` },
    Di = { class: `pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5` },
    Oi = { class: `p-4` },
    ki = { class: `flex items-start` },
    Ai = { class: `shrink-0` },
    ji = { class: `ml-3 w-0 flex-1 pt-0.5` },
    Mi = { class: `text-md font-medium text-light-001` },
    Ni = { class: `mt-1 text-sm text-brand-300` },
    Pi = { class: `ml-4 flex shrink-0` },
    Fi = [`onClick`],
    Ii = o({
        __name: `NotiWindTemplate`,
        props: { groupName: {} },
        setup(t) {
            return (n, r) => (
                s(),
                e(
                    g(Se),
                    { group: t.groupName, position: `bottom` },
                    {
                        default: A(() => [
                            M(`div`, Ti, [
                                M(`div`, Ei, [
                                    i(
                                        g(xe),
                                        {
                                            enter: `transform ease-out duration-300 transition`,
                                            'enter-from': `translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4`,
                                            'enter-to': `translate-y-0 opacity-100 sm:translate-x-0`,
                                            leave: `transition ease-in duration-500`,
                                            'leave-from': `opacity-100`,
                                            'leave-to': `opacity-0`,
                                            move: `transition duration-500`,
                                            'move-delay': `delay-300`
                                        },
                                        {
                                            default: A(({ notifications: n, close: a }) => [
                                                (s(!0),
                                                u(
                                                    _,
                                                    null,
                                                    S(
                                                        n,
                                                        (n) => (
                                                            s(),
                                                            u(
                                                                `div`,
                                                                {
                                                                    class: `flex w-full max-w-sm mx-auto mt-2 overflow-hidden rounded-xl object-shadow shadow-md bg-dark-001/90 backdrop-blur-sm`,
                                                                    key: n.id
                                                                },
                                                                [
                                                                    M(`div`, Di, [
                                                                        M(`div`, Oi, [
                                                                            M(`div`, ki, [
                                                                                M(`div`, Ai, [
                                                                                    t.groupName == `success`
                                                                                        ? (s(),
                                                                                          e(g(D), {
                                                                                              key: 0,
                                                                                              icon: `memory:check`,
                                                                                              class: `h-6 w-6 text-brand-300`,
                                                                                              'aria-hidden': `true`
                                                                                          }))
                                                                                        : (s(),
                                                                                          e(g(D), {
                                                                                              key: 1,
                                                                                              icon: `material-symbols:close-rounded`,
                                                                                              class: `h-6 w-6 text-red-400`,
                                                                                              'aria-hidden': `true`
                                                                                          }))
                                                                                ]),
                                                                                M(`div`, ji, [M(`p`, Mi, v(n.title), 1), M(`p`, Ni, v(n.content), 1)]),
                                                                                M(`div`, Pi, [
                                                                                    M(
                                                                                        `button`,
                                                                                        {
                                                                                            onClick: (e) => a(n.id),
                                                                                            type: `button`,
                                                                                            class: `object-shadow inline-flex rounded-md bg-brand-950 text-brand-300 hover:text-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:ring-offset-2`
                                                                                        },
                                                                                        [
                                                                                            (r[0] ||= M(`span`, { class: `sr-only` }, `Close`, -1)),
                                                                                            i(g(D), {
                                                                                                icon: `material-symbols:close-rounded`,
                                                                                                class: `size-6`,
                                                                                                'aria-hidden': `true`
                                                                                            })
                                                                                        ],
                                                                                        8,
                                                                                        Fi
                                                                                    )
                                                                                ])
                                                                            ])
                                                                        ])
                                                                    ])
                                                                ]
                                                            )
                                                        )
                                                    ),
                                                    128
                                                ))
                                            ]),
                                            _: 1
                                        }
                                    )
                                ])
                            ])
                        ]),
                        _: 1
                    },
                    8,
                    [`group`]
                )
            )
        }
    }),
    Li = o({
        __name: `NotiWind`,
        setup(e) {
            return (e, t) => (s(), u(_, null, [i(Ii, { groupName: `success` }), i(Ii, { groupName: `error` })], 64))
        }
    }),
    Ri = { class: `bg-dark-001 flex flex-col text-brand-200` }
re(
    o({
        __name: `App`,
        setup(e) {
            let t = k(!1),
                n = k(!1)
            return (e, r) => {
                let a = p(`RouterView`)
                return (
                    s(),
                    u(`div`, Ri, [
                        i(Li),
                        i(Ye, { modelValue: t.value, 'onUpdate:modelValue': (r[0] ||= (e) => (t.value = e)) }, null, 8, [`modelValue`]),
                        i(
                            wi,
                            {
                                top_navigation_hidden: t.value,
                                'onUpdate:top_navigation_hidden': (r[1] ||= (e) => (t.value = e)),
                                show_side_navigation: n.value,
                                'onUpdate:show_side_navigation': (r[2] ||= (e) => (n.value = e))
                            },
                            null,
                            8,
                            [`top_navigation_hidden`, `show_side_navigation`]
                        ),
                        i(
                            ai,
                            {
                                top_navigation_hidden: t.value,
                                'onUpdate:top_navigation_hidden': (r[3] ||= (e) => (t.value = e)),
                                show_side_navigation: n.value,
                                'onUpdate:show_side_navigation': (r[4] ||= (e) => (n.value = e))
                            },
                            { default: A(() => [i(a)]), _: 1 },
                            8,
                            [`top_navigation_hidden`, `show_side_navigation`]
                        ),
                        i(mr)
                    ])
                )
            }
        }
    })
)
    .use(ge())
    .use(xr)
    .mount(`#app`)
export { er as a, Cn as c, Re as d, Me as f, nr as i, St as l, Sr as n, wn as o, ar as r, Tn as s, mi as t, ze as u }
