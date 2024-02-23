"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7721],{617721:function(F,d,t){t.r(d),t.d(d,{default:function(){return T}});var h=t(9783),x=t.n(h),j=t(168400),u=t.n(j),p=t(667294),C=t(343156),y=t(647759),b=t(693967),A=t.n(b),M=t(385956),I=t(438199),S=t(548657),L=t(879587),N=t(796586),r=t(785893),O=function(e){var n=e.num,l=n===void 0?3:n;return(0,r.jsx)("li",{children:Array.from({length:l}).map(function(a,i){return(0,r.jsx)(S.Z.Avatar,{size:"small",active:!0,style:{marginInlineStart:i===0?0:-8}},i)})})},P=function(e){var n=e.item,l=n===void 0?{}:n,a=l.username,i=l.url,s=e.loading;return s?(0,r.jsx)(O,{}):a!=null&&a.includes("github-actions")?null:(0,r.jsx)(L.Z,{title:a,children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/".concat(a),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(N.C,{size:"small",src:i,alt:a,children:a})})})})},Z=P,m,c,f,g,z=(0,y.kc)(function(o){var e=o.token,n=o.css;return{contributorsList:n(m||(m=u()([`
    margin-top: 120px !important;
  `]))),listMobile:n(c||(c=u()([`
    margin: 1em 0 !important;
  `]))),title:n(f||(f=u()([`
    font-size: 12px;
    opacity: 0.5;
    margin-bottom: 8px;
  `]))),list:n(g||(g=u()([`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all `,`;
      margin-inline-end: -8px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `])),e.motionDurationSlow)}}),$=function(e){var n=e.filename,l=(0,M.useIntl)(),a=l.formatMessage,i=z(),s=i.styles,D=(0,p.useContext)(I.Z),B=D.isMobile;return n?(0,r.jsxs)("div",{className:A()(s.contributorsList,x()({},s.listMobile,B)),children:[(0,r.jsx)("div",{className:s.title,children:a({id:"app.content.contributors"})}),(0,r.jsx)(C.Z,{cache:!0,repo:"ant-design",owner:"ant-design",fileName:n,className:s.list,renderItem:function(v,E){return(0,r.jsx)(Z,{item:v,loading:E},v==null?void 0:v.url)}})]}):null},T=$}}]);
