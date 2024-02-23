"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8301],{368301:function(wn,Q,t){t.r(Q);var ln=t(97857),f=t.n(ln),cn=t(168400),a=t.n(cn),sn=t(667294),dn=t(605071),q=t(647759),w=t(693967),o=t.n(w),nn=t(385956),E=t(785893),O,en,tn,un=(0,q.kc)(function(M){var c=M.token,D=M.css,T=c.antCls;return{toc:D(O||(O=a()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),T,T),tocWrapper:D(en||(en=a()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - `,`px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),c.headerHeight+c.contentMarginTop-8,c.borderRadius,c.purple6,c.purple5,c.headerHeight+c.contentMarginTop+24,c.screenLG),articleWrapper:D(tn||(tn=a()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),c.screenLG)}}),fn=function(c){var D=c.showDebug,T=c.debugDemos,C=T===void 0?[]:T,vn=un(),$=vn.styles,K=(0,q.Fg)(),R=(0,nn.useRouteMeta)(),P=(0,nn.useTabMeta)(),hn=function(v){var x;return{href:"#".concat(v.id),title:v.title,key:v.id,children:(x=v.children)===null||x===void 0?void 0:x.filter(function(S){return D||!C.includes(S.id)}).map(function(S){return{key:S.id,href:"#".concat(S.id),title:(0,E.jsx)("span",{className:o()(C.includes(S.id)&&"toc-debug"),children:S==null?void 0:S.title})}})}},gn=(0,sn.useMemo)(function(){return((P==null?void 0:P.toc)||R.toc).reduce(function(A,v){if(v.depth===2)A.push(f()({},v));else if(v.depth===3){var x=A[A.length-1];x&&(x.children=x.children||[],x.children.push(f()({},v)))}return A},[])},[P==null?void 0:P.toc,R.toc]);return R.frontmatter.toc?(0,E.jsx)("section",{className:$.tocWrapper,children:(0,E.jsx)(dn.Z,{className:$.toc,affix:!1,targetOffset:K.anchorTop,showInkInFixed:!0,items:gn.map(hn)})}):null};Q.default=fn},605071:function(wn,Q,t){t.d(Q,{Z:function(){return Un}});var ln=t(97857),f=t.n(ln),cn=t(9783),a=t.n(cn),sn=t(719632),dn=t.n(sn),q=t(805574),w=t.n(q),o=t(667294),nn=t(693967),E=t.n(nn),O=t(656790),en=t(517423),tn=t(982673),un=t(658192),fn=t(252901),M=t(73287),c=t(670544),D=o.createContext(void 0),T=D,C=t(785893),vn=function(n){var e=n.href,s=n.title,h=n.prefixCls,u=n.children,U=n.className,g=n.target,j=n.replace,N=o.useContext(T),L=N||{},X=L.registerLink,H=L.unregisterLink,Z=L.scrollTo,W=L.onClick,_=L.activeLink,mn=L.direction;o.useEffect(function(){return X==null||X(e),function(){H==null||H(e)}},[e]);var b=function(B){j&&(B.preventDefault(),window.location.replace(e)),W==null||W(B,{title:s,href:e}),Z==null||Z(e)};if(!1)var pn;var F=o.useContext(M.E_),G=F.getPrefixCls,m=G("anchor",h),rn=_===e,An=E()("".concat(m,"-link"),U,a()({},"".concat(m,"-link-active"),rn)),Cn=E()("".concat(m,"-link-title"),a()({},"".concat(m,"-link-title-active"),rn));return(0,C.jsxs)("div",{className:An,children:[(0,C.jsx)("a",{className:Cn,href:e,title:typeof s=="string"?s:"",target:g,onClick:b,children:s}),mn!=="horizontal"?u:null]})},$=vn,K=t(900210),R=t(548073),P=t(286665),hn=t(986943),gn=function(n){var e=n.componentCls,s=n.holderOffsetBlock,h=n.motionDurationSlow,u=n.lineWidthBold,U=n.colorPrimary,g=n.lineType,j=n.colorSplit,N=n.calc;return a()({},"".concat(e,"-wrapper"),a()(a()(a()({marginBlockStart:N(s).mul(-1).equal(),paddingBlockStart:s},e,f()(f()({},(0,R.Wf)(n)),{},a()({position:"relative",paddingInlineStart:u},"".concat(e,"-link"),a()(a()({paddingBlock:n.linkPaddingBlock,paddingInline:"".concat((0,K.unit)(n.linkPaddingInlineStart)," 0"),"&-title":f()(f()({},R.vS),{},{position:"relative",display:"block",marginBlockEnd:n.anchorTitleBlock,color:n.colorText,transition:"all ".concat(n.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},"&-active > ".concat(e,"-link-title"),{color:n.colorPrimary}),"".concat(e,"-link"),{paddingBlock:n.anchorPaddingBlockSecondary})))),"&:not(".concat(e,"-wrapper-horizontal)"),a()({},e,a()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat((0,K.unit)(u)," ").concat(g," ").concat(j),content:'" "'}},"".concat(e,"-ink"),a()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(h," ease-in-out"),width:u,backgroundColor:U},"&".concat(e,"-ink-visible"),{display:"inline-block"})))),"".concat(e,"-fixed ").concat(e,"-ink ").concat(e,"-ink"),{display:"none"}))},A=function(n){var e=n.componentCls,s=n.motionDurationSlow,h=n.lineWidthBold,u=n.colorPrimary;return a()({},"".concat(e,"-wrapper-horizontal"),a()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"".concat((0,K.unit)(n.lineWidth)," ").concat(n.lineType," ").concat(n.colorSplit),content:'" "'}},e,a()(a()({overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},"".concat(e,"-link:first-of-type"),{paddingInline:0}),"".concat(e,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(s," ease-in-out, width ").concat(s," ease-in-out"),height:h,backgroundColor:u})))},v=function(n){return{linkPaddingBlock:n.paddingXXS,linkPaddingInlineStart:n.padding}},x=(0,P.I$)("Anchor",function(d){var n=d.fontSize,e=d.fontSizeLG,s=d.paddingXXS,h=d.calc,u=(0,hn.TS)(d,{holderOffsetBlock:s,anchorPaddingBlockSecondary:h(s).div(2).equal(),anchorTitleBlock:h(n).div(14).mul(3).equal(),anchorBallSize:h(e).div(2).equal()});return[gn(u),A(u)]},v);function S(){return window}function bn(d,n){if(!d.getClientRects().length)return 0;var e=d.getBoundingClientRect();return e.width||e.height?n===window?(n=d.ownerDocument.documentElement,e.top-n.clientTop):e.top-n.getBoundingClientRect().top:e.top}var In=/#([\S ]+)$/,$n=function(n){var e,s=n.rootClassName,h=n.prefixCls,u=n.className,U=n.style,g=n.offsetTop,j=n.affix,N=j===void 0?!0:j,L=n.showInkInFixed,X=L===void 0?!1:L,H=n.children,Z=n.items,W=n.direction,_=W===void 0?"vertical":W,mn=n.bounds,b=n.targetOffset,pn=n.onClick,F=n.onChange,G=n.getContainer,m=n.getCurrentAnchor,rn=n.replace;if(!1)var An;var Cn=o.useState([]),xn=w()(Cn,2),B=xn[0],Bn=xn[1],Xn=o.useState(null),On=w()(Xn,2),V=On[0],Hn=On[1],Sn=o.useRef(V),Mn=o.useRef(null),yn=o.useRef(null),En=o.useRef(!1),an=o.useContext(M.E_),Zn=an.direction,z=an.anchor,Fn=an.getTargetContainer,Gn=an.getPrefixCls,y=Gn("anchor",h),Rn=(0,c.Z)(y),Vn=x(y,Rn),Ln=w()(Vn,3),Jn=Ln[0],Yn=Ln[1],Qn=Ln[2],J=(e=G!=null?G:Fn)!==null&&e!==void 0?e:S,kn=JSON.stringify(B),qn=(0,O.zX)(function(r){B.includes(r)||Bn(function(i){return[].concat(dn()(i),[r])})}),ne=(0,O.zX)(function(r){B.includes(r)&&Bn(function(i){return i.filter(function(l){return l!==r})})}),ee=function(){var i,l=(i=Mn.current)===null||i===void 0?void 0:i.querySelector(".".concat(y,"-link-title-active"));if(l&&yn.current){var k=yn.current.style,p=_==="horizontal";k.top=p?"":"".concat(l.offsetTop+l.clientHeight/2,"px"),k.height=p?"":"".concat(l.clientHeight,"px"),k.left=p?"".concat(l.offsetLeft,"px"):"",k.width=p?"".concat(l.clientWidth,"px"):"",p&&(0,en.Z)(l,{scrollMode:"if-needed",block:"nearest"})}},te=function(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,p=[],_n=J();if(i.forEach(function(I){var Y=In.exec(I==null?void 0:I.toString());if(Y){var Wn=document.getElementById(Y[1]);if(Wn){var zn=bn(Wn,_n);zn<l+k&&p.push({link:I,top:zn})}}}),p.length){var on=p.reduce(function(I,Y){return Y.top>I.top?Y:I});return on.link}return""},Tn=(0,O.zX)(function(r){if(Sn.current!==r){var i=typeof m=="function"?m(r):r;Hn(i),Sn.current=i,F==null||F(r)}}),Pn=o.useCallback(function(){if(!En.current){var r=te(B,b!==void 0?b:g||0,mn);Tn(r)}},[kn,b,g]),jn=o.useCallback(function(r){Tn(r);var i=In.exec(r);if(i){var l=document.getElementById(i[1]);if(l){var k=J(),p=(0,tn.Z)(k,!0),_n=bn(l,k),on=p+_n;on-=b!==void 0?b:g||0,En.current=!0,(0,un.Z)(on,{getContainer:J,callback:function(){En.current=!1}})}}},[b,g]),re=E()(Yn,Qn,Rn,s,"".concat(y,"-wrapper"),a()(a()({},"".concat(y,"-wrapper-horizontal"),_==="horizontal"),"".concat(y,"-rtl"),Zn==="rtl"),u,z==null?void 0:z.className),ae=E()(y,a()({},"".concat(y,"-fixed"),!N&&!X)),oe=E()("".concat(y,"-ink"),a()({},"".concat(y,"-ink-visible"),V)),ie=f()(f()({maxHeight:g?"calc(100vh - ".concat(g,"px)"):"100vh"},z==null?void 0:z.style),U),le=function r(i){return Array.isArray(i)?i.map(function(l){return(0,o.createElement)($,f()(f()({replace:rn},l),{},{key:l.key}),_==="vertical"&&r(l.children))}):null},Nn=(0,C.jsx)("div",{ref:Mn,className:re,style:ie,children:(0,C.jsxs)("div",{className:ae,children:[(0,C.jsx)("span",{className:oe,ref:yn}),"items"in n?le(Z):H]})});o.useEffect(function(){var r=J();return Pn(),r==null||r.addEventListener("scroll",Pn),function(){r==null||r.removeEventListener("scroll",Pn)}},[kn]),o.useEffect(function(){typeof m=="function"&&Tn(m(Sn.current||""))},[m]),o.useEffect(function(){ee()},[_,m,kn,V]);var ce=o.useMemo(function(){return{registerLink:qn,unregisterLink:ne,scrollTo:jn,activeLink:V,onClick:pn,direction:_}},[V,pn,jn,_]);return Jn((0,C.jsx)(T.Provider,{value:ce,children:N?(0,C.jsx)(fn.Z,{offsetTop:g,target:J,children:Nn}):Nn}))},Kn=$n,Dn=Kn;Dn.Link=$;var Un=Dn}}]);
