(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[6],{1018:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var i=n(42),a=n(5),c=n.n(a),r=n(32),o=n(16),l=n(11),s=n(10),d=n(0),u=n(4),b=n(3),j=n(6),O=n(2),v=n(47),x=n(23),m=n(35),p=n(29),h=n(152),C=n(171),f=n(323),y=n(182),R=n(21),I=n(131),E=n(89),g=n(48),T=n(34),U=n(26),w=n(44),Y=n(56),N=n(217),_=n(82),S=n(728),k=n(30),A=n(139);var B=n(49),P=n(52),D=n(181),L=n(25),q=n(107),Q=n(183),V=n(85),z=n(79),M=n(279);function F(){return Object(L.c)((function(e){return e.burn}))}var H,W=n(38),G=n(199),J=n(1),K=u.e.div(H||(H=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function X(e){var t,n,a,s,u,H,X,Z,$,ee,te,ne,ie,ae,ce,re,oe,le,se,de,ue,be=e.history,je=e.match.params,Oe=je.currencyIdA,ve=je.currencyIdB,xe=null!==(t=Object(w.c)(Oe))&&void 0!==t?t:void 0,me=null!==(n=Object(w.c)(ve))&&void 0!==n?n:void 0,pe=Object(U.a)(),he=pe.account,Ce=pe.chainId,fe=pe.library,ye=Object(d.useMemo)((function(){return[Object(B.b)(xe,Ce),Object(B.b)(me,Ce)]}),[xe,me,Ce]),Re=Object(l.a)(ye,2),Ie=Re[0],Ee=Re[1],ge=Object(x.b)().t,Te=F(),Ue=Te.independentField,we=Te.typedValue,Ye=function(e,t){var n,i,a,c,r,s=Object(U.a)(),d=s.account,u=s.chainId,b=F(),O=b.independentField,v=b.typedValue,m=Object(x.b)().t,p=Object(q.b)(e,t),h=Object(l.a)(p,2)[1],C=Object(z.e)(null!==d&&void 0!==d?d:void 0,[null===h||void 0===h?void 0:h.liquidityToken]),f=null===C||void 0===C?void 0:C[null!==(n=null===h||void 0===h||null===(i=h.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],y=[Object(B.b)(e,u),Object(B.b)(t,u)],R=y[0],I=y[1],E=(a={},Object(o.a)(a,M.a.CURRENCY_A,R),Object(o.a)(a,M.a.CURRENCY_B,I),Object(o.a)(a,M.a.LIQUIDITY,null===h||void 0===h?void 0:h.liquidityToken),a),g=Object(Q.a)(null===h||void 0===h?void 0:h.liquidityToken),T=h&&g&&f&&R&&j.d.greaterThanOrEqual(g.raw,f.raw)?new j.j(R,h.getLiquidityValue(R,g,f,!1).raw):void 0,w=h&&g&&f&&I&&j.d.greaterThanOrEqual(g.raw,f.raw)?new j.j(I,h.getLiquidityValue(I,g,f,!1).raw):void 0,Y=(c={},Object(o.a)(c,M.a.CURRENCY_A,T),Object(o.a)(c,M.a.CURRENCY_B,w),c),N=new j.f("0","100");if(O===M.a.LIQUIDITY_PERCENT)N=new j.f(v,"100");else if(O===M.a.LIQUIDITY){if(null===h||void 0===h?void 0:h.liquidityToken){var _=Object(V.a)(v,h.liquidityToken);_&&f&&!_.greaterThan(f)&&(N=new j.f(_.raw,f.raw))}}else if(E[O]){var S=Object(V.a)(v,E[O]),k=Y[O];S&&k&&!S.greaterThan(k)&&(N=new j.f(S.raw,k.raw))}var A,P,D=(r={},Object(o.a)(r,M.a.LIQUIDITY_PERCENT,N),Object(o.a)(r,M.a.LIQUIDITY,f&&N&&N.greaterThan("0")?new j.j(f.token,N.multiply(f.raw).quotient):void 0),Object(o.a)(r,M.a.CURRENCY_A,R&&N&&N.greaterThan("0")&&T?new j.j(R,N.multiply(T.raw).quotient):void 0),Object(o.a)(r,M.a.CURRENCY_B,I&&N&&N.greaterThan("0")&&w?new j.j(I,N.multiply(w.raw).quotient):void 0),r);return d||(A=m("Connect Wallet")),D[M.a.LIQUIDITY]&&D[M.a.CURRENCY_A]&&D[M.a.CURRENCY_B]||(A=null!==(P=A)&&void 0!==P?P:m("Enter an amount")),{pair:h,parsedAmounts:D,error:A}}(null!==xe&&void 0!==xe?xe:void 0,null!==me&&void 0!==me?me:void 0),Ne=Ye.pair,_e=Ye.parsedAmounts,Se=Ye.error,ke=function(){var e=Object(L.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(M.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,Ae=!Se,Be=Object(d.useState)(!1),Pe=Object(l.a)(Be,2),De=Pe[0],Le=Pe[1],qe=Object(d.useState)(!1),Qe=Object(l.a)(qe,2),Ve=Qe[0],ze=Qe[1],Me=Object(d.useState)(""),Fe=Object(l.a)(Me,2),He=Fe[0],We=Fe[1],Ge=Object(N.a)(),Je=Object(W.o)(),Ke=Object(l.a)(Je,1)[0],Xe=($={},Object(o.a)($,M.a.LIQUIDITY_PERCENT,_e[M.a.LIQUIDITY_PERCENT].equalTo("0")?"0":_e[M.a.LIQUIDITY_PERCENT].lessThan(new j.f("1","100"))?"<1":_e[M.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)($,M.a.LIQUIDITY,Ue===M.a.LIQUIDITY?we:null!==(a=null===(s=_e[M.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==a?a:""),Object(o.a)($,M.a.CURRENCY_A,Ue===M.a.CURRENCY_A?we:null!==(u=null===(H=_e[M.a.CURRENCY_A])||void 0===H?void 0:H.toSignificant(6))&&void 0!==u?u:""),Object(o.a)($,M.a.CURRENCY_B,Ue===M.a.CURRENCY_B?we:null!==(X=null===(Z=_e[M.a.CURRENCY_B])||void 0===Z?void 0:Z.toSignificant(6))&&void 0!==X?X:""),$),Ze=null===(ee=_e[M.a.LIQUIDITY_PERCENT])||void 0===ee?void 0:ee.equalTo(new j.f("1")),$e=Object(Y.f)(null===Ne||void 0===Ne||null===(te=Ne.liquidityToken)||void 0===te?void 0:te.address),et=Object(d.useState)(null),tt=Object(l.a)(et,2),nt=tt[0],it=tt[1],at=Object(P.b)(_e[M.a.LIQUIDITY],T.t),ct=Object(l.a)(at,2),rt=ct[0],ot=ct[1];function lt(){return(lt=Object(r.a)(c.a.mark((function e(){var t,n,i,a,r,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($e&&Ne&&fe&&Ge){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=_e[M.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,$e.nonces(he);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],a={name:"Snow LPs",version:"1",chainId:Ce,verifyingContract:Ne.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:he,spender:T.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Ge.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:a,primaryType:"Permit",message:o}),fe.send("eth_signTypedData_v4",[he,l]).then(b.splitSignature).then((function(e){it({v:e.v,r:e.r,s:e.s,deadline:Ge.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&ot()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var st=Object(d.useCallback)((function(e,t){return it(null),ke(e,t)}),[ke]),dt=Object(d.useCallback)((function(e){return st(M.a.LIQUIDITY,e)}),[st]),ut=Object(d.useCallback)((function(e){return st(M.a.CURRENCY_A,e)}),[st]),bt=Object(d.useCallback)((function(e){return st(M.a.CURRENCY_B,e)}),[st]),jt=Object(_.d)();function Ot(){return vt.apply(this,arguments)}function vt(){return(vt=Object(r.a)(c.a.mark((function e(){var t,n,a,r,l,s,d,u,b,O,x,m,p,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ce&&fe&&he&&Ge){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=_e[M.a.CURRENCY_A],a=_e[M.a.CURRENCY_B],n&&a){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.h)(Ce,fe,he),t={},Object(o.a)(t,M.a.CURRENCY_A,Object(k.c)(n,Ke)[0]),Object(o.a)(t,M.a.CURRENCY_B,Object(k.c)(a,Ke)[0]),l=t,xe&&me){e.next=9;break}throw new Error("missing tokens");case 9:if(s=_e[M.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=me===j.c,u=xe===j.c||d,Ie&&Ee){e.next=16;break}throw new Error("could not wrap");case 16:if(rt!==P.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?Ie.address:Ee.address,s.raw.toString(),l[d?M.a.CURRENCY_A:M.a.CURRENCY_B].toString(),l[d?M.a.CURRENCY_B:M.a.CURRENCY_A].toString(),he,Ge.toHexString()]):(b=["removeLiquidity"],O=[Ie.address,Ee.address,s.raw.toString(),l[M.a.CURRENCY_A].toString(),l[M.a.CURRENCY_B].toString(),he,Ge.toHexString()]),e.next=25;break;case 20:if(null===nt){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?Ie.address:Ee.address,s.raw.toString(),l[d?M.a.CURRENCY_A:M.a.CURRENCY_B].toString(),l[d?M.a.CURRENCY_B:M.a.CURRENCY_A].toString(),he,nt.deadline,!1,nt.v,nt.r,nt.s]):(b=["removeLiquidityWithPermit"],O=[Ie.address,Ee.address,s.raw.toString(),l[M.a.CURRENCY_A].toString(),l[M.a.CURRENCY_B].toString(),he,nt.deadline,!1,nt.v,nt.r,nt.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(O)).then(k.b).catch((function(t){console.error("estimateGas failed",e,O,t)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return v.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],h=x[m],ze(!0),e.next=38,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:h}])).then((function(e){var t,n;ze(!1),jt(e,{summary:"Remove ".concat(null===(t=_e[M.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===xe||void 0===xe?void 0:xe.symbol," and ").concat(null===(n=_e[M.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===me||void 0===me?void 0:me.symbol)}),We(e.hash)})).catch((function(e){ze(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xt(){var e,t;return Object(J.jsxs)(p.a,{gap:"md",children:[Object(J.jsxs)(R.b,{align:"flex-end",children:[Object(J.jsx)(O.eb,{fontSize:"24px",children:null===(e=_e[M.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(J.jsxs)(R.c,{gap:"4px",children:[Object(J.jsx)(g.a,{currency:xe,size:"24px"}),Object(J.jsx)(O.eb,{fontSize:"24px",ml:"10px",children:null===xe||void 0===xe?void 0:xe.symbol})]})]}),Object(J.jsx)(R.c,{children:Object(J.jsx)(O.a,{width:"16px"})}),Object(J.jsxs)(R.b,{align:"flex-end",children:[Object(J.jsx)(O.eb,{fontSize:"24px",children:null===(t=_e[M.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(J.jsxs)(R.c,{gap:"4px",children:[Object(J.jsx)(g.a,{currency:me,size:"24px"}),Object(J.jsx)(O.eb,{fontSize:"24px",ml:"10px",children:null===me||void 0===me?void 0:me.symbol})]})]}),Object(J.jsx)(O.eb,{small:!0,textAlign:"left",pt:"12px",children:ge("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Ke/100})})]})}function mt(){var e,t,n;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(R.b,{children:[Object(J.jsx)(O.eb,{children:ge("%assetA%/%assetB% Burned",{assetA:null!==(e=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===me||void 0===me?void 0:me.symbol)&&void 0!==t?t:""})}),Object(J.jsxs)(R.c,{children:[Object(J.jsx)(g.b,{currency0:xe,currency1:me,margin:!0}),Object(J.jsx)(O.eb,{children:null===(n=_e[M.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ne&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(R.b,{children:[Object(J.jsx)(O.eb,{children:ge("Price")}),Object(J.jsxs)(O.eb,{children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," = ",Ie?Ne.priceOf(Ie).toSignificant(6):"-"," ",null===me||void 0===me?void 0:me.symbol]})]}),Object(J.jsxs)(R.b,{children:[Object(J.jsx)("div",{}),Object(J.jsxs)(O.eb,{children:["1 ",null===me||void 0===me?void 0:me.symbol," = ",Ee?Ne.priceOf(Ee).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]})]}),Object(J.jsx)(O.i,{disabled:!(rt===P.a.APPROVED||null!==nt),onClick:Ot,children:ge("Confirm")})]})}var pt=ge("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(ne=null===(ie=_e[M.a.CURRENCY_A])||void 0===ie?void 0:ie.toSignificant(6))&&void 0!==ne?ne:"",symbolA:null!==(ae=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==ae?ae:"",amountB:null!==(ce=null===(re=_e[M.a.CURRENCY_B])||void 0===re?void 0:re.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(oe=null===me||void 0===me?void 0:me.symbol)&&void 0!==oe?oe:""}),ht=Object(d.useCallback)((function(e){st(M.a.LIQUIDITY_PERCENT,e.toString())}),[st]),Ct=xe===j.c||me===j.c,ft=Boolean(Ce&&(xe&&Object(j.n)(j.m[Ce],xe)||me&&Object(j.n)(j.m[Ce],me))),yt=Object(d.useCallback)((function(e){ve&&Object(A.a)(e)===ve?be.push("/remove/".concat(Object(A.a)(e),"/").concat(Oe)):be.push("/remove/".concat(Object(A.a)(e),"/").concat(ve))}),[Oe,ve,be]),Rt=Object(d.useCallback)((function(e){Oe&&Object(A.a)(e)===Oe?be.push("/remove/".concat(ve,"/").concat(Object(A.a)(e))):be.push("/remove/".concat(Oe,"/").concat(Object(A.a)(e)))}),[Oe,ve,be]),It=Object(d.useCallback)((function(){it(null),He&&st(M.a.LIQUIDITY_PERCENT,"0"),We("")}),[st,He]),Et=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),a=Object(l.a)(i,2),c=a[0],r=a[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[c,s]}(Number.parseInt(_e[M.a.LIQUIDITY_PERCENT].toFixed(0)),ht),gt=Object(l.a)(Et,2),Tt=gt[0],Ut=gt[1],wt=Object(O.ub)(Object(J.jsx)(h.c,{title:ge("You will receive"),customOnDismiss:It,attemptingTxn:Ve,hash:He||"",content:function(){return Object(J.jsx)(h.a,{topContent:xt,bottomContent:mt})},pendingText:pt}),!0,!0,"removeLiquidityModal"),Yt=Object(l.a)(wt,1)[0];return Object(J.jsxs)(G.a,{children:[Object(J.jsxs)(y.a,{children:[Object(J.jsx)(y.b,{backTo:"/pool",title:ge("Remove %assetA%-%assetB% liquidity",{assetA:null!==(le=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==le?le:"",assetB:null!==(se=null===me||void 0===me?void 0:me.symbol)&&void 0!==se?se:""}),subtitle:ge("To receive %assetA% and %assetB%",{assetA:null!==(de=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==de?de:"",assetB:null!==(ue=null===me||void 0===me?void 0:me.symbol)&&void 0!==ue?ue:""}),noConfig:!0}),Object(J.jsxs)(O.m,{children:[Object(J.jsxs)(p.a,{gap:"20px",children:[Object(J.jsxs)(R.b,{children:[Object(J.jsx)(O.eb,{children:ge("Amount")}),Object(J.jsx)(O.i,{variant:"text",scale:"sm",onClick:function(){return Le(!De)},children:ge(De?"Simple":"Detailed")})]}),!De&&Object(J.jsxs)(K,{children:[Object(J.jsxs)(O.eb,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Xe[M.a.LIQUIDITY_PERCENT],"%"]}),Object(J.jsx)(O.bb,{name:"lp-amount",min:0,max:100,value:Tt,onValueChanged:function(e){return Ut(Math.ceil(e))},mb:"16px"}),Object(J.jsxs)(O.A,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(J.jsx)(O.i,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(J.jsx)(O.i,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(J.jsx)(O.i,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(J.jsx)(O.i,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!De&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(p.b,{children:Object(J.jsx)(O.d,{color:"textSubtle",width:"24px",my:"16px"})}),Object(J.jsxs)(p.a,{gap:"10px",children:[Object(J.jsx)(O.eb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:ge("You will receive")}),Object(J.jsxs)(E.c,{children:[Object(J.jsxs)(O.A,{justifyContent:"space-between",mb:"8px",children:[Object(J.jsxs)(O.A,{children:[Object(J.jsx)(g.a,{currency:xe}),Object(J.jsx)(O.eb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===xe||void 0===xe?void 0:xe.symbol})]}),Object(J.jsx)(O.eb,{small:!0,children:Xe[M.a.CURRENCY_A]||"-"})]}),Object(J.jsxs)(O.A,{justifyContent:"space-between",children:[Object(J.jsxs)(O.A,{children:[Object(J.jsx)(g.a,{currency:me}),Object(J.jsx)(O.eb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===me||void 0===me?void 0:me.symbol})]}),Object(J.jsx)(O.eb,{small:!0,children:Xe[M.a.CURRENCY_B]||"-"})]}),Ce&&(ft||Ct)?Object(J.jsx)(R.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:Ct?Object(J.jsx)(S.a,{to:"/remove/".concat(xe===j.c?j.m[Ce].address:Oe,"/").concat(me===j.c?j.m[Ce].address:ve),children:ge("Receive WCRAB",{token:m.g})}):ft?Object(J.jsx)(S.a,{to:"/remove/".concat(xe&&Object(j.n)(xe,j.m[Ce])?m.g:Oe,"/").concat(me&&Object(j.n)(me,j.m[Ce])?m.g:ve),children:ge("Receive CRAB",{token:m.g})}):null}):null]})]})]}),De&&Object(J.jsxs)(O.h,{my:"16px",children:[Object(J.jsx)(C.a,{value:Xe[M.a.LIQUIDITY],onUserInput:dt,onMax:function(){st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,disableCurrencySelect:!0,currency:null===Ne||void 0===Ne?void 0:Ne.liquidityToken,pair:Ne,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(J.jsx)(p.b,{children:Object(J.jsx)(O.d,{width:"24px",my:"16px"})}),Object(J.jsx)(C.a,{hideBalance:!0,value:Xe[M.a.CURRENCY_A],onUserInput:ut,onMax:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:xe,label:ge("Output"),onCurrencySelect:yt,id:"remove-liquidity-tokena"}),Object(J.jsx)(p.b,{children:Object(J.jsx)(O.a,{width:"24px",my:"16px"})}),Object(J.jsx)(C.a,{hideBalance:!0,value:Xe[M.a.CURRENCY_B],onUserInput:bt,onMax:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:me,label:ge("Output"),onCurrencySelect:Rt,id:"remove-liquidity-tokenb"})]}),Ne&&Object(J.jsxs)(p.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(J.jsx)(O.eb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:ge("Prices")}),Object(J.jsxs)(E.c,{children:[Object(J.jsxs)(O.A,{justifyContent:"space-between",children:[Object(J.jsxs)(O.eb,{small:!0,color:"textSubtle",children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," ="]}),Object(J.jsxs)(O.eb,{small:!0,children:[Ie?Ne.priceOf(Ie).toSignificant(6):"-"," ",null===me||void 0===me?void 0:me.symbol]})]}),Object(J.jsxs)(O.A,{justifyContent:"space-between",children:[Object(J.jsxs)(O.eb,{small:!0,color:"textSubtle",children:["1 ",null===me||void 0===me?void 0:me.symbol," ="]}),Object(J.jsxs)(O.eb,{small:!0,children:[Ee?Ne.priceOf(Ee).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]})]})]}),Object(J.jsx)(O.h,{position:"relative",mt:"16px",children:he?Object(J.jsxs)(R.b,{children:[Object(J.jsx)(O.i,{variant:rt===P.a.APPROVED||null!==nt?"success":"primary",onClick:function(){return lt.apply(this,arguments)},disabled:rt!==P.a.NOT_APPROVED||null!==nt,width:"100%",mr:"0.5rem",children:rt===P.a.PENDING?Object(J.jsx)(D.a,{children:ge("Enabling")}):rt===P.a.APPROVED||null!==nt?ge("Enabled"):ge("Enable")}),Object(J.jsx)(O.i,{variant:!Ae&&_e[M.a.CURRENCY_A]&&_e[M.a.CURRENCY_B]?"danger":"primary",onClick:function(){Yt()},width:"100%",disabled:!Ae||null===nt&&rt!==P.a.APPROVED,children:Se||ge("Remove")})]}):Object(J.jsx)(I.a,{})})]})]}),Ne?Object(J.jsx)(p.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(J.jsx)(f.a,{showUnwrapped:ft,pair:Ne})}):null]})}},728:function(e,t,n){"use strict";var i,a=n(10),c=n(78),r=n(4),o=Object(r.e)(c.a)(i||(i=Object(a.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);