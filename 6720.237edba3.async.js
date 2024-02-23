"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6720],{366720:function(J,E,n){n.r(E);var N=n(805574),M=n.n(N),L=n(97857),r=n.n(L),T=n(168400),o=n.n(T),s=n(639389),Q=n.n(s),y=n(647759),d=n(667294),I=n(693967),g=n.n(I),R=n(361446),K=n(438199),i=n(785893),O,p,h,x,B=(0,y.kc)(function(l){var a=l.token,e=l.css,_=a.colorSplit,t=a.iconCls,u=a.fontSizeIcon;return{prevNextNav:e(O||(O=o()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),_),pageNav:e(p||(p=o()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),t,u),prevNav:e(h||(h=o()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:e(x||(x=o()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),U=function l(a){return Array.isArray(a)?a.reduce(function(e,_){if(!_)return e;if("children"in _&&_.children){var t;return e.concat((t=l(_.children))!==null&&t!==void 0?t:[])}return e.concat(_)},[]):null},W=function(a){var e=a.rtl,_=B(),t=_.styles,u={className:"footer-nav-icon-before"},P={className:"footer-nav-icon-after"},S=e?(0,i.jsx)(s.RightOutlined,r()({},u)):(0,i.jsx)(s.LeftOutlined,r()({},u)),z=e?(0,i.jsx)(s.LeftOutlined,r()({},P)):(0,i.jsx)(s.RightOutlined,r()({},P)),Z=(0,R.Z)({before:S,after:z}),b=M()(Z,2),D=b[0],j=b[1],k=(0,d.useContext)(K.Z),F=k.isMobile,G=(0,d.useMemo)(function(){var m=U(D);if(!m)return[null,null];var c=-1;return m.forEach(function(A,H){A&&A.key===j&&(c=H)}),[m[c-1],m[c+1]]},[D,j]),C=M()(G,2),v=C[0],f=C[1];return F?null:(0,i.jsxs)("section",{className:t.prevNextNav,children:[v&&d.cloneElement(v.label,{className:g()(t.pageNav,t.prevNav,v.className)}),f&&d.cloneElement(f.label,{className:g()(t.pageNav,t.nextNav,f.className)})]})};E.default=W}}]);
