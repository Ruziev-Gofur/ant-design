(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8384],{438746:function(de,A,n){"use strict";n.d(A,{Z:function(){return R}});var $=n(97857),x=n.n($),s=n(952677),f=n.n(s),F=n(805574),P=n.n(F),J=n(385956),h=n(667294),k=n(302559);function C(j){return j.replace("-cn","").replace(/\/$/,"")}function R(){var j=(0,J.useLocation)(),z=j.search,N=(0,k.default)(),L=P()(N,2),c=L[1],v=h.useCallback(function(m,r){var u=C(m);if(c==="cn"&&(u="".concat(u,"-cn")),z&&(u="".concat(u).concat(z)),r){var l;f()(r)==="object"?l=r[c]:l=r,u="".concat(u,"#").concat(l)}return u},[c,z]);return x()(x()({},j),{},{pathname:C(j.pathname),getLink:v})}},858992:function(de,A,n){"use strict";n.r(A),n.d(A,{default:function(){return tt}});var $=n(97857),x=n.n($),s=n(667294),f=n(385956),F=n(9783),P=n.n(F),J=n(168400),h=n.n(J),k=n(805574),C=n.n(k),R=n(639389),j=n.n(R),z=n(944226),N=n(11739),L=n(879587),c=n(106750),v=n(707898),m=n(647759),r=n(693967),u=n.n(r),l=n(826961),U=n.n(l),G=n(438746),e=n(785893),g=function(t){var o=t.children;return(0,e.jsx)("div",{className:"browser-mockup with-url",children:o})},O=g,K=function(t){var o=t.children,i=(0,s.useState)(!1),d=C()(i,2),y=d[0],T=d[1];return(0,s.useLayoutEffect)(function(){T(!0)},[]),y?o:null},S=K,oe=function(){return(0,e.jsx)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:(0,e.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})},Ce=function(t){return(0,e.jsx)(j(),x()({component:oe},t))},Ne=Ce,je=n(941346),ue=n(185209),Ae=n(468990),Be=n(224292),Le=n.n(Be),me=n(626826),ve=n(915660),Q=n.n(ve),Ze=n(728207),Fe=n(302559),ze=n(965516),re=function(t){var o=t.error,i=ze.Z.useToken(),d=i.token;return o?(0,e.jsx)(N.Z,{banner:!0,type:"error",message:o.toString(),style:{color:d.colorError}}):null},pe=re,Se,fe,be=(0,m.kc)(function(a){var t=a.token,o=a.css,i=t.colorBgContainer,d=t.colorIcon;return{editor:o(Se||(Se=h()([`
      // override dumi editor styles
      .dumi-default-source-code-editor {
        .dumi-default-source-code {
          background: `,`;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre,
        .dumi-default-source-code-editor-textarea {
          padding: 12px 16px;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre {
          font-size: 13px;
          line-height: 2;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        // disable dumi default copy button
        .dumi-default-source-code-copy {
          display: none;
        }

        &::after {
          border-radius: 0 !important;
        }

        &:hover:not(:focus-within) {
          &::after {
            box-shadow: 0 0 0 1px `,` inset;
          }
        }
      }
    `])),i,t.colorPrimaryBorderHover),editableIcon:o(fe||(fe=h()([`
      position: absolute;
      z-index: 2;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 16px;
      inset-inline-end: 56px;
      color: `,`;
    `])),d)}}),Ue={cn:{demoEditable:"\u7F16\u8F91 Demo \u53EF\u5B9E\u65F6\u9884\u89C8"},en:{demoEditable:"Edit demo with real-time preview"}},Ee="hide-live-demo-tip",Pe=function(t){var o=(0,s.useState)(!1),i=C()(o,2),d=i[0],y=i[1],T=be(),B=T.styles,M=(0,Fe.default)(Ue),w=C()(M,1),b=w[0];(0,s.useEffect)(function(){var V=!localStorage.getItem(Ee);V&&y(!0)},[]);var Z=function(X){y(X),X||localStorage.setItem(Ee,"true")};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:B.editor,children:[(0,e.jsx)(Ze.Z,{lang:t.lang,initialValue:t.initialValue,onChange:t.onChange}),(0,e.jsx)(pe,{error:t.error})]}),(0,e.jsx)(L.Z,{title:b.demoEditable,open:d,onOpenChange:Z,children:(0,e.jsx)(R.EditFilled,{className:B.editableIcon})})]})},he=Pe,Oe,Me,ge,De=(0,m.kc)(function(a){var t=a.token,o=a.css,i=t.colorIcon,d=t.antCls;return{code:o(Oe||(Oe=h()([`
      position: relative;
      margin-top: -16px;
    `]))),copyButton:o(Me||(Me=h()([`
      color: `,`;
      position: absolute;
      z-index: 2;
      top: 16px;
      inset-inline-end: 16px;
      width: 32px;
      text-align: center;
      padding: 0;
    `])),i),copyIcon:o(ge||(ge=h()([`
      `,`-typography-copy {
        position: relative;
        margin-inline-start: 0;

        // expand clickable area
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          left: -9px;
          bottom: -5px;
          right: -9px;
        }
      }
      `,"-typography-copy:not(",`-typography-copy-success) {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }
    `])),d,d,d,i,i)}}),Ke={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};function Ve(a){return Le()(a,[[function(t){return me.isElement(t)&&me.getTagName(t)==="pre"},function(t,o){var i=me.getAttributes(t);return(0,e.jsx)("pre",{className:"language-".concat(i.lang),children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:i.highlighted}})},o)}]])}var We=function(t){var o=t.sourceCode,i=o===void 0?"":o,d=t.jsxCode,y=d===void 0?"":d,T=t.styleCode,B=T===void 0?"":T,M=t.entryName,w=t.onCodeTypeChange,b=t.onSourceChange,Z=t.error,V={};i&&(V.tsx=""),y&&(V.jsx=""),B&&(V.style="");var X=s.useState(V),ae=C()(X,2),Y=ae[0],ie=ae[1],ee={tsx:i==null?void 0:i.trim(),jsx:y==null?void 0:y.trim(),style:B==null?void 0:B.trim()};(0,s.useEffect)(function(){var D={tsx:Q().highlight(i,Q().languages.javascript,"jsx"),jsx:Q().highlight(y,Q().languages.javascript,"jsx"),style:Q().highlight(B,Q().languages.css,"css")};Object.keys(D).forEach(function(ne){D[ne]||delete D[ne]}),ie(D)},[y,i,B]);var H=Object.keys(Y),se=De(),_=se.styles,E=(0,s.useMemo)(function(){return H.map(function(D){return{label:Ke[D],key:D,children:(0,e.jsxs)("div",{className:_.code,children:[D==="tsx"?(0,e.jsx)(he,{error:Z,lang:D,initialValue:ee[D],onChange:function(Re){b==null||b(P()({},M,Re))}}):Ve(["pre",{lang:D,highlighted:Y[D]}]),(0,e.jsx)(je.ZP,{type:"text",className:_.copyButton,children:(0,e.jsx)(ue.Z.Text,{className:_.copyIcon,copyable:{text:ee[D]}})})]})}})},[JSON.stringify(Y),_.code,_.copyButton,_.copyIcon]);return H.length?H.length===1?(0,e.jsx)(he,{error:Z,lang:H[0],initialValue:ee[H[0]],onChange:function(ne){b==null||b(P()({},M,ne))}}):(0,e.jsx)(Ae.Z,{centered:!0,className:"highlight",onChange:w,items:E}):null},He=We,On=function(){return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})})},Mn=function(t){return(0,e.jsx)(j(),x()({component:On},t))},Dn=Mn,Rn=n(148050),Tn=function(t){var o=t.color,i=o===void 0?"currentColor":o;return(0,e.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:i,children:[(0,e.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,e.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]})},In=function(t){return(0,e.jsx)(j(),x()({component:Tn},t))},Nn=In,An=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:(0,e.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})})},Bn=function(t){return(0,e.jsx)(j(),x()({component:An},t))},Zn=Bn,Fn=n(438199),zn=n(373638),Qe,Un=N.Z.ErrorBoundary;function Kn(a){return U().compressToBase64(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}var xe=function(t){var o=t.type,i=t.demo;window.gtag&&window.gtag("event","demo",{event_category:o,event_label:i})},$e;function Vn(){var a=(0,s.useState)(!1),t=C()(a,2),o=t[0],i=t[1];return(0,s.useEffect)(function(){var d;(d=$e)!==null&&d!==void 0||($e=new Promise(function(y){(0,zn.qE)(function(T){return y(T!=="timeout"&&T!=="error")})})),$e.then(i)},[]),o}var Wn=(0,m.kc)(function(a){var t=a.token,o=t.borderRadius;return{codeHideBtn:(0,m.iv)(Qe||(Qe=h()([`
      position: sticky;
      bottom: 0;
      z-index: 1;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 `,"px ",`px;
      border-top: 1px solid `,`;
      color: `,`;
      transition: all 0.2s ease-in-out;
      background-color: `,`;
      cursor: pointer;
      &:hover {
        color: `,`;
      }
      span {
        margin-right: `,`px;
      }
    `])),o,o,t.colorSplit,t.colorTextSecondary,t.colorBgElevated,t.colorPrimary,t.marginXXS)}}),Hn=function(t){var o=t.asset,i=t.expand,d=t.iframe,y=t.demoUrl,T=t.children,B=t.title,M=t.description,w=t.originDebug,b=t.jsx,Z=t.style,V=t.compact,X=t.background,ae=t.filename,Y=t.version,ie=t.simplify,ee=t.clientOnly,H=t.pkgDependencyList,se=(0,f.useSiteData)(),_=se.pkg,E=(0,G.Z)(),D=Wn(),ne=D.styles,Re="index.tsx",ln=o.dependencies[Re].value,ot=Vn(),ke=(0,s.useRef)(null),dn=(0,s.useRef)(null),Ge=(0,f.useLiveDemo)(o.id,{iframe:!!d,containerRef:dn}),rt=Ge.node,at=Ge.error,it=Ge.setSource,un=(0,s.useRef)(null),mn=(0,s.useRef)(null),vn=(0,s.useRef)(null),pn=(0,s.useRef)(null),st=(0,s.useState)(!1),fn=C()(st,2),ce=fn[0],we=fn[1],ct=(0,s.useState)("tsx"),hn=C()(ct,2),lt=hn[0],dt=hn[1],ut=(0,s.useContext)(Fn.Z),te=ut.theme,mt=E.hash,vt=E.pathname,pt=E.search,ft="https://ant.design".concat(vt).concat(pt,"#").concat(o.id),ht=(0,s.useState)(!1),gn=C()(ht,2),gt=gn[0],xt=gn[1];(0,s.useEffect)(function(){var p=/preview-(\d+)-ant-design/;xt(p.test(window.location.hostname))},[]);var xn=function(I){we(function(le){return!le}),xe({type:"expand",demo:I})};(0,s.useEffect)(function(){if(o.id===mt.slice(1)){var p;(p=un.current)===null||p===void 0||p.click()}},[]),(0,s.useEffect)(function(){we(i)},[i]);var yt=!d&&ee?(0,e.jsx)(S,{children:T}):T;ke.current||(ke.current=d?(0,e.jsx)(O,{children:(0,e.jsx)("iframe",{src:y,height:d===!0?void 0:d,title:"demo",className:"iframe-demo"})}):yt);var Ct=u()("code-box",{expand:ce,"code-box-debug":w,"code-box-simplify":ie}),ye=B,jt=u()("highlight-wrapper",{"highlight-wrapper-expand":ce}),_e=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');<\/script>
        </body>
      </html>
    `,Lt={compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},q=lt==="tsx"?"tsx":"js",W=b.split(`
`).reduce(function(p,I){var le=I.match(/import .+? from '(.+)';$/);if(le!=null&&le[1]){var Je,Xe,Ie=le[1].split("/"),Ye=Ie[0].startsWith("@")?"".concat(Ie[0],"/").concat(Ie[1]):Ie[0];(Je=p[Ye])!==null&&Je!==void 0||(p[Ye]=(Xe=H[Ye])!==null&&Xe!==void 0?Xe:"latest")}return p},{antd:_.version});W["@ant-design/icons"]="latest",q==="tsx"&&(W["@types/react"]="^18.0.0",W["@types/react-dom"]="^18.0.0"),W.react="^18.0.0",W["react-dom"]="^18.0.0";var St={title:"".concat(ye," - antd@").concat(W.antd),html:_e,js:`const { createRoot } = ReactDOM;
`.concat(b.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js","antd@".concat(_.version,"/dist/antd-with-locales.min.js"),"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(function(p){return"https://unpkg.com/".concat(p)}).join(";"),js_pre_processor:"typescript"},bt={title:"".concat(ye," - antd@").concat(W.antd),js:"".concat(/import React(\D*)from 'react';/.test(b)?"":`import React from 'react';
`,`import { createRoot } from 'react-dom/client';
`).concat(b.replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),css:"",json:JSON.stringify({name:"antd-demo",dependencies:W},null,2)},Te=q==="tsx"?ln:b,yn="import React from 'react';",Cn=/import React(\D*)from 'react';/,jn=Te.match(Cn);if(jn){var Et=C()(jn,1);yn=Et[0],Te=Te.replace(Cn,"").trim()}var Ln=`
`.concat(yn,`
import './index.css';
`).concat(Te,`
    `).trim(),Sn=(Z||"").trim().replace(new RegExp("#".concat(o.id,"\\s*"),"g"),"").replace("</style>","").replace("<style>",""),bn=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,Pt={title:"".concat(ye," - antd@").concat(W.antd),main:"index.js",dependencies:x()(x()({},W),{},{"rc-util":H["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"}),devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},Ot={files:P()(P()(P()({"package.json":{content:Pt},"index.css":{content:Sn}},"index.".concat(q),{content:bn}),"demo.".concat(q),{content:Ln}),"index.html",{content:_e})},En={title:"".concat(ye," - antd@").concat(W.antd),template:"create-react-app",dependencies:W,description:"",files:P()(P()(P()({"index.css":Sn},"index.".concat(q),bn),"demo.".concat(q),Ln),"index.html",_e)};q==="tsx"&&(En.files["tsconfig.json"]=JSON.stringify(Lt,null,2));var Mt=te.includes("dark")?"#303030":"#f0f2f5",Dt={padding:d||V?0:void 0,overflow:d||V?"hidden":void 0,backgroundColor:X==="grey"?Mt:void 0},Pn=(0,e.jsxs)("section",{className:Ct,id:o.id,children:[(0,e.jsx)("section",{className:"code-box-demo",style:Dt,ref:dn,children:rt||(0,e.jsx)(Un,{children:(0,e.jsx)(s.StrictMode,{children:ke.current})})}),!ie&&(0,e.jsxs)("section",{className:"code-box-meta markdown",children:[(0,e.jsxs)("div",{className:"code-box-title",children:[(0,e.jsx)(L.Z,{title:w?(0,e.jsx)(f.FormattedMessage,{id:"app.demo.debug"}):"",children:(0,e.jsx)("a",{href:"#".concat(o.id),ref:un,children:ye})}),(0,e.jsx)(Rn.default,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.content.edit-demo"}),filename:ae})]}),M&&(0,e.jsx)("div",{className:"code-box-description",dangerouslySetInnerHTML:{__html:M}}),(0,e.jsxs)(c.Z,{wrap:"wrap",gap:"middle",className:"code-box-actions",children:[gt&&(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.online"}),children:(0,e.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:ft,children:(0,e.jsx)(R.LinkOutlined,{"aria-label":"open in new tab",className:"code-box-online"})})}),ot?(0,e.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:vn,onClick:function(){var I;xe({type:"riddle",demo:o.id}),(I=vn.current)===null||I===void 0||I.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(bt)}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.riddle"}),children:(0,e.jsx)(Zn,{className:"code-box-riddle"})})]}):null,(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.stackblitz"}),children:(0,e.jsx)("span",{className:"code-box-code-action",onClick:function(){xe({type:"stackblitz",demo:o.id}),z.Z.openProject(En,{openFile:["demo.".concat(q)]})},children:(0,e.jsx)(R.ThunderboltOutlined,{className:"code-box-stackblitz",style:{transform:"scale(1.2)"}})})}),(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:pn,onClick:function(){var I;xe({type:"codepen",demo:o.id}),(I=pn.current)===null||I===void 0||I.submit()},children:[(0,e.jsx)(S,{children:(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(St)})}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.codepen"}),children:(0,e.jsx)(Ne,{className:"code-box-codepen"})})]}),(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:mn,onClick:function(){var I;xe({type:"codesandbox",demo:o.id}),(I=mn.current)===null||I===void 0||I.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"parameters",value:Kn(JSON.stringify(Ot))}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.codesandbox"}),children:(0,e.jsx)(Dn,{className:"code-box-codesandbox"})})]}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.separate"}),children:(0,e.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:y,children:(0,e.jsx)(Nn,{className:"code-box-separate"})})}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.code.".concat(ce?"hide":"show")}),children:(0,e.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,e.jsx)("img",{alt:"expand code",src:te!=null&&te.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:ce?"code-expand-icon-hide":"code-expand-icon-show",onClick:function(){return xn(o.id)}}),(0,e.jsx)("img",{alt:"expand code",src:te!=null&&te.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:ce?"code-expand-icon-show":"code-expand-icon-hide",onClick:function(){return xn(o.id)}})]})})]})]}),ce&&(0,e.jsxs)("section",{className:jt,children:[(0,e.jsx)(He,{sourceCode:ln,jsxCode:b,styleCode:Z,error:at,entryName:Re,onCodeTypeChange:dt,onSourceChange:it}),(0,e.jsxs)("div",{tabIndex:0,role:"button",className:ne.codeHideBtn,onClick:function(){return we(!1)},children:[(0,e.jsx)(R.UpOutlined,{}),(0,e.jsx)(f.FormattedMessage,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return(0,s.useEffect)(function(){if(Z){var p=document.createElement("style");return p.type="text/css",p.innerHTML=Z,p["data-demo-url"]=y,document.head.appendChild(p),function(){document.head.removeChild(p)}}},[Z,y]),Y?(0,e.jsx)(v.Z.Ribbon,{text:Y,color:Y.includes("<")?"red":void 0,children:Pn}):Pn},$n=Hn,kn=n(15009),qe=n.n(kn),Gn=n(899289),wn=n.n(Gn),_n=n(471232),Jn=n(820640),Xn=n.n(Jn),Yn=n(124220),en,nn,tn,on,rn,an,sn,cn,Qn=(0,m.kc)(function(a){var t=a.token,o=a.css;return{wrapper:o(en||(en=h()([`
    border: 1px solid `,`;
    border-radius: `,`px;
    padding: 20px 24px 40px;
    position: relative;
    margin-bottom: `,`px;
  `])),t.colorBorderSecondary,t.borderRadius,t.marginLG),title:o(nn||(nn=h()([`
    font-size: `,`px;
    font-weight: `,`;
    color: `,`;

    &:hover {
      color: `,`;
    }
  `])),t.fontSizeLG,t.fontWeightStrong,t.colorTextHeading,t.colorTextHeading),description:o(tn||(tn=h()([`
    margin-top: `,`px;
  `])),t.margin),demo:o(on||(on=h()([`
    margin-top: `,`px;
    display: flex;
    justify-content: center;
  `])),t.marginLG),copy:o(rn||(rn=h()([`
    position: absolute;
    inset-inline-end: 20px;
    inset-block-start: 20px;
    cursor: pointer;
  `]))),copyTip:o(an||(an=h()([`
    color: `,`;
  `])),t.colorTextTertiary),copiedTip:o(sn||(sn=h()([`
    .anticon {
      color: `,`;
    }
  `])),t.colorSuccess),tip:o(cn||(cn=h()([`
    color: `,`;
    margin-top: 40px;
  `])),t.colorTextTertiary)}}),qn=function(t){var o=t.children,i=t.title,d=t.description,y=t.tip,T=t.asset,B=Qn(),M=B.styles,w=(0,s.useRef)(null),b=s.useState(!1),Z=C()(b,2),V=Z[0],X=Z[1],ae=_n.Z.useApp(),Y=ae.message,ie=function(){var ee=wn()(qe()().mark(function H(){var se;return qe()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(E.prev=0,!w.current){E.next=8;break}return E.next=4,(0,Yn.Sg)(w.current);case 4:se=E.sent,Xn()(JSON.stringify(se.toSketchJSON())),X(!0),setTimeout(function(){X(!1)},5e3);case 8:E.next=13;break;case 10:E.prev=10,E.t0=E.catch(0),Y.error("\u590D\u5236\u5931\u8D25");case 13:case"end":return E.stop()}},H,null,[[0,10]])}));return function(){return ee.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:M.wrapper,id:T.id,children:[(0,e.jsx)("a",{className:M.title,href:"#".concat(T.id),children:i}),d&&(0,e.jsx)("div",{className:M.description,dangerouslySetInnerHTML:{__html:d}}),(0,e.jsx)("div",{className:M.copy,children:V?(0,e.jsxs)("div",{className:M.copiedTip,children:[(0,e.jsx)(R.CheckOutlined,{}),(0,e.jsx)("span",{style:{marginLeft:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,e.jsxs)("div",{onClick:ie,className:M.copyTip,children:[(0,e.jsx)(R.SketchOutlined,{}),(0,e.jsx)("span",{style:{marginLeft:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,e.jsx)("div",{className:M.demo,ref:w,children:o}),(0,e.jsx)("div",{className:M.tip,children:y})]})},et=qn,nt=function(t){var o=(0,f.useTabMeta)();return(o==null?void 0:o.frontmatter.title)==="Design"?(0,e.jsx)(et,x()({},t)):(0,e.jsx)($n,x()({},t))},tt=nt},148050:function(de,A,n){"use strict";n.r(A);var $=n(168400),x=n.n($),s=n(667294),f=n(639389),F=n.n(f),P=n(879587),J=n(647759),h=n(785893),k,C="https://github.com/ant-design/ant-design/edit/master/",R=(0,J.kc)(function(z){var N=z.token,L=z.css,c=N.colorIcon,v=N.colorText,m=N.iconCls;return{editButton:L(k||(k=x()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),m,c,v)}}),j=function(N){var L=N.title,c=N.filename,v=R(),m=v.styles;return(0,h.jsx)(P.Z,{title:L,children:(0,h.jsx)("a",{className:m.editButton,href:"".concat(C).concat(c),target:"_blank",rel:"noopener noreferrer",children:(0,h.jsx)(f.EditOutlined,{})})})};A.default=j},373638:function(de,A,n){"use strict";n.d(A,{J1:function(){return C},Is:function(){return L},Fy:function(){return j},KE:function(){return k},qE:function(){return R}});var $=n(661227),x=n(805574),s=n(97857),f=n(385564),F=n(842348),P=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),J={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":P?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function h(c,v,m,r){var u=c.map(function(e){return e.meta}).filter(function(e){return!e.skip}),l=[],U=function(g,O){return(g.order||0)-(O.order||0)};u.sort(U).forEach(function(e){if(e.category&&(e.category=e.category[v]||e.category),e.type&&(e.type=e.type[v]||e.type),e!=null&&e.title&&(e.title=e.title[v]||e.title),!e.category){l.push(e);return}if(e.category==="Components"&&e.type){var g=l.find(function(S){return(S==null?void 0:S.title)===e.type});g||(g={type:"type",title:e.type,children:[],order:r[e.type]},l.push(g)),g.children=g.children||[],g.children.push(e);return}var O=l.find(function(S){return(S==null?void 0:S.title)===e.category});if(O||(O={type:"category",title:e.category,children:[],order:m[e.category]},l.push(O)),O.children=O.children||[],e.type){var K=O.children.filter(function(S){return(S==null?void 0:S.title)===e.type})[0];K||(K={type:"type",title:e.type,children:[],order:r[e.type]},O.children.push(K)),K.children=K.children||[],K.children.push(e)}else O.children.push(e)});function G(e){return e.sort(U).map(function(g){return g.children?_objectSpread(_objectSpread({},g),{},{children:G(g.children)}):g})}return G(l)}function k(c){return/-cn\/?$/.test(c)}function C(c,v,m,r){var u=c.startsWith("/")?c:"/".concat(c),l;if(v?u==="/"?l="/index-cn":u.endsWith("/")?l=u.replace(/\/$/,"-cn/"):(l="".concat(u,"-cn"),l=l.replace(/(-cn)+/,"-cn")):l=/\/?index-cn/.test(u)?"/":u.replace("-cn",""),r){var U=r[v?"zhCN":"enUS"];l+="#".concat(U)}return{pathname:l,search:m}}function R(c){var v="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",m=new Image,r,u=function(U){r||(r=!0,m.src="",c(U))};return m.onload=function(){return u("responded")},m.onerror=function(){return u("error")},m.src=v,setTimeout(function(){return u("timeout")},1500)}function j(){var c="test",v=window.localStorage;try{return v.setItem(c,"1"),v.removeItem(c),!0}catch(m){return!1}}function z(c){return new Promise(function(v,m){var r=document.createElement("script");r.type="text/javascript",r.src=c,r.onload=v,r.onerror=m,document.head.appendChild(r)})}function N(c){var v=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(c))return"";var m=flattenDeep(c.filter(function(r){if(Array.isArray(r)){var u=_slicedToArray(r,1),l=u[0];return l==="p"}return!1}).map(function(r){var u=flatten(r),l=_toArray(u),U=l[0],G=l.slice(1),e=G.filter(function(g){return typeof g=="string"&&!v.includes(g)}).join("");return[U,e]})).find(function(r){return r&&typeof r=="string"&&!v.includes(r)});return m}var L=function(){return J}},824422:function(de,A,n){"use strict";n.d(A,{Z:function(){return $.Z}});var $=n(199100)},471232:function(de,A,n){"use strict";n.d(A,{Z:function(){return U}});var $=n(97857),x=n.n($),s=n(805574),f=n.n(s),F=n(667294),P=n(693967),J=n.n(P),h=n(73287),k=n(215570),C=n(269924),R=n(890887),j=n(414466),z=n(9783),N=n.n(z),L=n(286665),c=function(e){var g=e.componentCls,O=e.colorText,K=e.fontSize,S=e.lineHeight,oe=e.fontFamily;return N()({},g,{color:O,fontSize:K,lineHeight:S,fontFamily:oe})},v=function(){return{}},m=(0,L.I$)("App",c,v),r=n(785893),u=function(){return F.useContext(j.Z)},l=function(e){var g=e.prefixCls,O=e.children,K=e.className,S=e.rootClassName,oe=e.message,Ce=e.notification,Ne=e.style,je=e.component,ue=je===void 0?"div":je,Ae=(0,F.useContext)(h.E_),Be=Ae.getPrefixCls,Le=Be("app",g),me=m(Le),ve=f()(me,3),Q=ve[0],Ze=ve[1],Fe=ve[2],ze=J()(Ze,Le,K,S,Fe),re=(0,F.useContext)(j.J),pe=F.useMemo(function(){return{message:x()(x()({},re.message),oe),notification:x()(x()({},re.notification),Ce)}},[oe,Ce,re.message,re.notification]),Se=(0,k.Z)(pe.message),fe=f()(Se,2),be=fe[0],Ue=fe[1],Ee=(0,R.Z)(pe.notification),Pe=f()(Ee,2),he=Pe[0],Oe=Pe[1],Me=(0,C.Z)(),ge=f()(Me,2),De=ge[0],Ke=ge[1],Ve=F.useMemo(function(){return{message:be,notification:he,modal:De}},[be,he,De]),We=ue===!1?F.Fragment:ue,He={className:ze,style:Ne};return Q((0,r.jsx)(j.Z.Provider,{value:Ve,children:(0,r.jsx)(j.J.Provider,{value:pe,children:(0,r.jsxs)(We,x()(x()({},ue===!1?void 0:He),{},{children:[Ke,Ue,Oe,O]}))})}))};l.useApp=u;var U=l},991343:function(){},824654:function(){}}]);
