(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[5],{1016:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c,o,i=n(11),r=n(10),j=n(0),a=n(6),d=n(2),l=n(4),b=n(23),s=n(89),O=n(29),x=n(48),u=n(323),p=n(21),h=n(379),g=n(107),f=n(26),v=n(38),y=n(79),m=n(728),T=n(139),I=n(181),k=n(182),E=n(199),N=n(1);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var S=Object(l.e)(d.i)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(f.a)().account,n=Object(b.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),l=r[0],A=r[1],C=Object(j.useState)(a.c),w=Object(i.a)(C,2),K=w[0],q=w[1],B=Object(j.useState)(null),L=Object(i.a)(B,2),X=L[0],D=L[1],J=Object(g.b)(null!==K&&void 0!==K?K:void 0,null!==X&&void 0!==X?X:void 0),M=Object(i.a)(J,2),P=M[0],F=M[1],G=Object(v.g)();Object(j.useEffect)((function(){F&&G(F)}),[F,G]);var R=P===g.a.NOT_EXISTS||Boolean(P===g.a.EXISTS&&F&&a.d.equal(F.reserve0.raw,a.d.BigInt(0))&&a.d.equal(F.reserve1.raw,a.d.BigInt(0))),V=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===F||void 0===F?void 0:F.liquidityToken),W=Boolean(V&&a.d.greaterThan(V.raw,a.d.BigInt(0))),Y=Object(j.useCallback)((function(e){l===o.TOKEN0?q(e):D(e)}),[l]),_=Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsx)(d.eb,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),z=Object(d.ub)(Object(N.jsx)(h.a,{onCurrencySelect:Y,showCommonBases:!0,selectedCurrency:null!==(e=l===o.TOKEN0?X:K)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(z,1)[0];return Object(N.jsx)(E.a,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(k.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(N.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(N.jsx)(S,{endIcon:Object(N.jsx)(d.r,{}),onClick:function(){H(),A(o.TOKEN0)},children:K?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:K}),Object(N.jsx)(d.eb,{ml:"8px",children:K.symbol})]}):Object(N.jsx)(d.eb,{ml:"8px",children:n("Select a Token")})}),Object(N.jsx)(O.b,{children:Object(N.jsx)(d.a,{})}),Object(N.jsx)(S,{endIcon:Object(N.jsx)(d.r,{}),onClick:function(){H(),A(o.TOKEN1)},children:X?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:X}),Object(N.jsx)(d.eb,{ml:"8px",children:X.symbol})]}):Object(N.jsx)(d.eb,{as:p.d,children:n("Select a Token")})}),W&&Object(N.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(N.jsx)(d.eb,{textAlign:"center",children:n("Pool Found!")}),Object(N.jsx)(m.a,{to:"/pool",children:Object(N.jsx)(d.eb,{textAlign:"center",children:n("Manage this pool.")})})]}),K&&X?P===g.a.EXISTS?W&&F?Object(N.jsx)(u.a,{pair:F}):Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(d.eb,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(X)),children:Object(N.jsx)(d.eb,{textAlign:"center",children:n("Add Liquidity")})})]})}):R?Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(d.eb,{textAlign:"center",children:n("No pool found.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(X)),children:n("Create pool.")})]})}):P===g.a.INVALID?Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsx)(d.eb,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):P===g.a.LOADING?Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsxs)(d.eb,{textAlign:"center",children:[n("Loading"),Object(N.jsx)(I.a,{})]})})}):null:_]})]})})}},728:function(e,t,n){"use strict";var c,o=n(10),i=n(78),r=n(4),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);