"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(Dn,N,n){n.d(N,{Z:function(){return sn},f:function(){return j}});var J=n(667294),j=J.createContext(!1);function sn(){return J.useContext(j)}},438746:function(Dn,N,n){n.d(N,{Z:function(){return p}});var J=n(97857),j=n.n(J),sn=n(952677),f=n.n(sn),w=n(805574),D=n.n(w),pn=n(385956),l=n(667294),R=n(302559);function M(F){return F.replace("-cn","").replace(/\/$/,"")}function p(){var F=(0,pn.useLocation)(),on=F.search,Q=(0,R.default)(),u=D()(Q,2),o=u[1],c=l.useCallback(function(e,b){var m=M(e);if(o==="cn"&&(m="".concat(m,"-cn")),on&&(m="".concat(m).concat(on)),b){var S;f()(b)==="object"?S=b[o]:S=b,m="".concat(m,"#").concat(S)}return m},[o,on]);return j()(j()({},F),{},{pathname:M(F.pathname),getLink:c})}},361446:function(Dn,N,n){var J=n(805574),j=n.n(J),sn=n(719632),f=n.n(sn),w=n(667294),D=n(844183),pn=n(566254),l=n(385956),R=n(472638),M=n(438746),p=n(785893),F=function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=(0,l.useFullSidebarData)(),o=(0,M.Z)(),c=o.pathname,e=o.search,b=(0,l.useSidebarData)(),m=Q.before,S=Q.after,rn=(0,w.useMemo)(function(){var _,s=f()(b!=null?b:[]);if(c.startsWith("/docs/spec")){var L=s.splice(0,1);s.push.apply(s,f()(L))}if(c.startsWith("/docs/react")){var O,z=(O=Object.entries(u).find(function(H){var E=j()(H,1),T=E[0];return T.startsWith("/changelog")}))===null||O===void 0?void 0:O[1];z&&s.splice(1,0,z[0])}if(c.startsWith("/changelog")){var A,K=(A=Object.entries(u).find(function(H){var E=j()(H,1),T=E[0];return T.startsWith("/docs/react")}))===null||A===void 0?void 0:A[1];K&&(s.unshift(K[0]),s.push.apply(s,f()(K.slice(1))))}var V=function(E){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return E&&T&&(0,p.jsx)(D.Z,{color:E==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:E.replace("VERSION",pn.Z)})};return(_=s==null?void 0:s.reduce(function(H,E){if(E!=null&&E.title)if(c.startsWith("/docs/spec")){var T,Y,mn=E.children.reduce(function(y,h){var d,x,k=(d=(x=h.frontmatter)===null||x===void 0?void 0:x.type)!==null&&d!==void 0?d:"default";return y[k]||(y[k]=[]),y[k].push(h),y},{}),dn=[];dn.push.apply(dn,f()((T=(Y=mn.default)===null||Y===void 0?void 0:Y.map(function(y){return{label:(0,p.jsxs)(R.Z,{to:"".concat(y.link).concat(e),children:[m,y==null?void 0:y.title,S]}),key:y.link.replace(/(-cn$)/g,"")}}))!==null&&T!==void 0?T:[])),Object.entries(mn).forEach(function(y){var h=j()(y,2),d=h[0],x=h[1];d!=="default"&&dn.push({type:"group",label:d,key:d,children:x==null?void 0:x.map(function(k){return{label:(0,p.jsxs)(R.Z,{to:"".concat(k.link).concat(e),children:[m,k==null?void 0:k.title,S]}),key:k.link.replace(/(-cn$)/g,"")}})})}),H.push({label:E==null?void 0:E.title,key:E==null?void 0:E.title,children:dn})}else{var bn;H.push({type:"group",label:E==null?void 0:E.title,key:E==null?void 0:E.title,children:(bn=E.children)===null||bn===void 0?void 0:bn.map(function(y){var h,d;return{label:(0,p.jsxs)(R.Z,{to:"".concat(y.link).concat(e),style:{display:"flex",alignItems:"center"},children:[m,(0,p.jsx)("span",{children:y==null?void 0:y.title},"english"),(0,p.jsx)("span",{className:"chinese",children:(h=y.frontmatter)===null||h===void 0?void 0:h.subtitle},"chinese"),V((d=y.frontmatter)===null||d===void 0?void 0:d.tag,!m&&!S),S]}),key:y.link.replace(/(-cn$)/g,"")}})})}else{var Z=E.children||[];Z.every(function(y){var h;return y==null||(h=y.frontmatter)===null||h===void 0?void 0:h.date})&&Z.sort(function(y,h){var d,x;return((d=y.frontmatter)===null||d===void 0?void 0:d.date)>((x=h.frontmatter)===null||x===void 0?void 0:x.date)?-1:1}),H.push.apply(H,f()(Z.map(function(y){return{label:(0,p.jsxs)(R.Z,{to:"".concat(y.link).concat(e),style:{display:"flex",alignItems:"center"},children:[m,y==null?void 0:y.title,V(y.frontmatter.tag,!m&&!S),S]}),key:y.link.replace(/(-cn$)/g,"")}})))}return H},[]))!==null&&_!==void 0?_:[]},[b,u,c,e,Q]);return[rn,c]};N.Z=F},148050:function(Dn,N,n){n.r(N);var J=n(168400),j=n.n(J),sn=n(667294),f=n(639389),w=n.n(f),D=n(879587),pn=n(647759),l=n(785893),R,M="https://github.com/ant-design/ant-design/edit/master/",p=(0,pn.kc)(function(on){var Q=on.token,u=on.css,o=Q.colorIcon,c=Q.colorText,e=Q.iconCls;return{editButton:u(R||(R=j()([`
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
    `])),e,o,c)}}),F=function(Q){var u=Q.title,o=Q.filename,c=p(),e=c.styles;return(0,l.jsx)(D.Z,{title:u,children:(0,l.jsx)("a",{className:e.editButton,href:"".concat(M).concat(o),target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(f.EditOutlined,{})})})};N.default=F},787729:function(Dn,N,n){n.r(N),n.d(N,{default:function(){return ao}});var J=n(805574),j=n.n(J),sn=n(693967),f=n.n(sn),w=n(727484),D=n.n(w),pn=n(533852),l=n(667294),R=n(75529),M=n(715778),p=n(385956),F=n(302559),on=n(438746),Q=n(168400),u=n.n(Q),o=n(370917),c=n(647759),e=n(785893),b,m={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},S=function(){var t=(0,c.Fg)(),r=function v(C){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return g<=10?`
.palette-`.concat(C,"-").concat(g,` {
  background: `).concat(t["".concat(C,"-").concat(g)],`;
}
`).concat(v(C,g+1),`
    `):""},i=function v(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return C<=13?`
.palette-gray-`.concat(C,` {
  background: `).concat(m[C],`;
}
`).concat(v(C+1),`
    `):""};return(0,e.jsx)(o.xB,{styles:(0,o.iv)(b||(b=u()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),t.colorError,r("blue"),r("purple"),r("cyan"),r("green"),r("magenta"),r("red"),r("volcano"),r("orange"),r("gold"),r("yellow"),r("lime"),r("geekblue"),i())})},rn=S,_,s=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(_||(_=u()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},L,O=function(){var a=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(L||(L=u()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},z,A=function(){var a=(0,c.Fg)(),t=a.anchorTop;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(z||(z=u()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),t)})},K=n(510274),V,H=function(){var t=(0,c.Fg)(),r=t.antCls,i=t.colorPrimary;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(V||(V=u()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),t.colorText,t.colorTextHeading,t.fontFamily,t.colorTextHeading,t.fontFamily,t.colorSplit,r,r,t.siteMarkdownCodeBg,t.colorSplit,t.codeFamily,t.siteMarkdownCodeBg,t.borderRadius,t.colorText,Math.max(t.fontSize-1,12),t.siteMarkdownCodeBg,t.borderRadius,t.colorTextSecondary,t.colorSplit,t.colorSplit,r,t.colorTextSecondary,t.colorText,t.colorSplit,t.colorSplit,t.colorSplit,t.colorSplit,Math.max(t.fontSize-1,12),t.codeFamily,t.lineHeight,t.colorSplit,t.colorText,t.magenta7,Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),r,r,r,i,new K.C(i).setAlpha(.75).toHex8String(),r,r,t.colorWhite,r,new K.C(i).setAlpha(.75).toHexString(),r,r,new K.C(i).setAlpha(.75).toHexString(),r,r,r,r,new K.C(i).setAlpha(.6).toHexString(),r,r,r)})},E=H,T,Y=function(){var a=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(T||(T=u()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius,a.colorText)})},mn,dn=function(){var t=(0,c.Fg)(),r=t.antCls,i=t.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(mn||(mn=u()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          &.code-box-simplify {
            border-radius: 0;
            margin-bottom: 0;

            .code-box-demo {
              padding: 0;
              border-bottom: 0;
            }
          }

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),t.lineWidth*2,t.colorBgContainer,t.colorSplit,t.borderRadiusLG,t.colorText,t.colorBgContainer,t.colorBgContainer,t.borderRadiusLG,t.borderRadiusLG,t.colorPrimary,t.colorBgContainer,t.borderRadius,t.borderRadius,t.colorText,t.fontSize,i,t.colorTextSecondary,t.colorText,r,r,t.colorText,t.colorSplit,t.fontSize,t.borderRadius,t.borderRadius,t.colorSplit,r,r,t.borderRadius,t.borderRadius,t.colorBgContainer,t.colorSplit,t.colorSplit,t.colorTextSecondary,t.colorText,i,t.colorBgContainer,i,t.green6,t.colorBgContainer,t.purple3,t.purple6,r)})},bn=dn,Z,y=function(){var a=(0,c.Fg)(),t=a.antCls,r=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(Z||(Z=u()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),r,t,a.colorPrimary,r,t)})},h,d=function(){var a=(0,c.Fg)(),t=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(h||(h=u()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,t,a.colorLinkHover)})},x,k=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(x||(x=u()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},B,nn=function(){var a=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(B||(B=u()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},an,vn=function(){var a=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(an||(an=u()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},yn,wn=function(){var a=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(yn||(yn=u()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},gn,hn="dumi-default-",Mn=function(){var a=(0,c.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(gn||(gn=u()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),hn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,hn,a.colorBgElevated,a.colorBgElevated,hn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},An,En=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(An||(An=u()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Tn=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O,{}),(0,e.jsx)(A,{}),(0,e.jsx)(E,{}),(0,e.jsx)(Y,{}),(0,e.jsx)(bn,{}),(0,e.jsx)(y,{}),(0,e.jsx)(d,{}),(0,e.jsx)(k,{}),(0,e.jsx)(nn,{}),(0,e.jsx)(vn,{}),(0,e.jsx)(wn,{}),(0,e.jsx)(En,{}),(0,e.jsx)(rn,{}),(0,e.jsx)(s,{}),(0,e.jsx)(Mn,{})]})},Ln=Tn,On=n(97857),P=n.n(On),q=n(9783),Sn=n.n(q),Cn=n(639389),Hn=n.n(Cn),Nn=n(469181),Kn=n(344682),Zn=n(11739),Wn=n(709894),Rn=n(883458),ae=n(722449),ie="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Jn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Qn=function(t){var r=t.direction;return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:r==="ltr"?ie:Jn})})},le=function(t){return(0,e.jsx)(Hn(),P()(P()({},t),{},{component:function(){return(0,e.jsx)(Qn,{direction:t.direction})}}))},pe=le,et=n(840070),Bn=n(373638),ee=n(438199),me,ge,tt=(0,c.kc)(function(a){var t=a.token,r=a.css,i=t.headerHeight,v=t.colorTextHeading,C=t.fontFamily,g=t.mobileMaxWidth;return{logo:r(me||(me=u()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,v,C,i,v,g),title:r(ge||(ge=u()([`
      line-height: 32px;
    `])))}}),ot=function(t){var r=t.isZhCN,i=(0,p.useLocation)(),v=i.search,C=tt(),g=C.styles;return(0,e.jsx)("h1",{children:(0,e.jsxs)(p.Link,{to:Bn.J1("/",r,v),className:g.logo,children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,e.jsx)("span",{className:g.title,children:"Ant Design"})]})})},rt=ot,at=n(719632),it=n.n(at),he=n(24768),Yn=n(472638),fe,xe,lt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},st=(0,c.kc)(function(a){var t=a.token,r=t.antCls,i=t.iconCls,v=t.fontFamily,C=t.headerHeight,g=t.menuItemBorder,$=t.colorPrimary,I=t.colorText;return{nav:(0,c.iv)(fe||(fe=u()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),v,r,r,r,40+12*2,C,C,g,I,r,i,r,$,r,r),popoverMenuNav:(0,c.iv)(xe||(xe=u()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),r,r,r,r,r)}}),dt=function(a){var t,r,i=a.isZhCN,v=a.isMobile,C=a.responsive,g=a.directionText,$=a.onLangChange,I=a.onDirectionChange,G=(0,p.useLocation)(),X=G.pathname,cn=G.search,un=(0,F.default)(lt),ln=j()(un,1),en=ln[0],kn=(0,p.useFullSidebarData)(),W=((t=kn["/docs/blog"])===null||t===void 0||(t=t[0])===null||t===void 0?void 0:t.children)||[],fn=st(),U=fn.styles,jn=v?"inline":"horizontal",zn=X.split("/").filter(function(Vn){return Vn}).slice(0,-1).join("/"),In=zn||"home";X.startsWith("/changelog")?In="docs/react":X.startsWith("/docs/resources")&&(In="docs/resources");var xn,Fn=[{label:(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,e.jsx)(p.FormattedMessage,{id:"app.header.lang"}),onClick:$,key:"switch-lang"},{label:g,onClick:I,key:"switch-direction"}];v?xn=Fn:C==="crowded"&&(xn=[{label:(0,e.jsx)(Cn.MenuOutlined,{}),key:"additional",children:[].concat(Fn)}]);var Un=[{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/spec/introduce",i,cn),children:en.design}),key:"docs/spec"},{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/react/introduce",i,cn),children:en.development}),key:"docs/react"},{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/components/overview/",i,cn),children:en.components}),key:"components"},W.length?{label:(0,e.jsx)(Yn.Z,{to:Bn.J1(W.sort(function(Vn,ce){var Xn,qn;return((Xn=Vn.frontmatter)===null||Xn===void 0?void 0:Xn.date)>((qn=ce.frontmatter)===null||qn===void 0?void 0:qn.date)?-1:1})[0].link,i,cn),children:en.blog}),key:"docs/blog"}:null,{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/resources",i,cn),children:en.resources}),key:"docs/resources"},i?{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,e.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(it()((r=xn)!==null&&r!==void 0?r:[]));return(0,e.jsx)(he.Z,{mode:jn,selectedKeys:[In],className:U.nav,disabledOverflow:!0,items:Un,style:{borderRight:0}})},ct=n(879587),ve,be,ye,we,Ce,Gn="1.2em",ut=(0,c.kc)(function(a){var t=a.token,r=a.css,i=t.colorText,v=t.colorBorder,C=t.colorBgContainer,g=t.colorBgTextHover,$=t.borderRadius,I=t.controlHeight,G=t.motionDurationMid;return{btn:r(ve||(ve=u()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,v,I,I,$,G,G,g,Gn,Gn,Gn),innerDiv:r(be||(be=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Gn,Gn),labelStyle:r(ye||(ye=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Gn,i,i),label1Style:r(we||(we=u()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,C),label2Style:r(Ce||(Ce=u()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),pt=function(t){var r=t.label1,i=t.label2,v=t.tooltip1,C=t.tooltip2,g=t.value,$=t.pure,I=t.onClick,G=ut(),X=G.styles,cn=X.btn,un=X.innerDiv,ln=X.labelStyle,en=X.label1Style,kn=X.label2Style,W=(0,e.jsx)("button",{onClick:I,className:cn,"aria-label":t["aria-label"],children:(0,e.jsxs)("div",{className:"btn-inner",children:[$&&(g===1?r:i),!$&&(0,e.jsxs)("div",{className:un,children:[(0,e.jsx)("span",{className:f()(ln,g===1?en:kn),children:r}),(0,e.jsx)("span",{className:f()(ln,g===1?kn:en),children:i})]})]})},"lang-button");return v||C?(0,e.jsx)(ct.Z,{title:g===1?v:C,children:W}):W},se=pt,je,Se,ke,Ee,Me,Te,Be=1120,Ae=1200,mt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},gt=(0,c.kc)(function(a){var t=a.token,r=a.css,i="#ced4d9";return{header:r(je||(je=u()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),t.colorBgContainer,t.boxShadowTertiary,t.mobileMaxWidth,i,i,i),menuRow:r(Se||(Se=u()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:r(ke||(ke=u()([`
      width: 16px;
    `]))),popoverMenu:Sn()({width:300},"".concat(t.antCls,"-popover-inner-content"),{padding:0}),banner:r(Ee||(Ee=u()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(Me||(Me=u()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),t.mobileMaxWidth),icon:r(Te||(Te=u()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),ht=function(){var t=(0,F.default)(mt),r=j()(t,2),i=r[0],v=r[1],C=(0,p.useSiteData)(),g=C.pkg,$=(0,Bn.Is)(),I=(0,l.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),G=j()(I,2),X=G[0],cn=G[1],un=(0,l.useContext)(ee.Z),ln=un.direction,en=un.isMobile,kn=un.bannerVisible,W=un.updateSiteConfig,fn=(0,l.useRef)(null),U=(0,p.useLocation)(),jn=U.pathname,zn=U.search,In=gt(),xn=In.styles,Fn=(0,l.useCallback)(function(){cn(function(tn){return P()(P()({},tn),{},{menuVisible:!1})})},[]),Un=(0,l.useCallback)(function(){cn(function(tn){return P()(P()({},tn),{},{windowWidth:window.innerWidth})})},[]),Vn=(0,l.useCallback)(function(){cn(function(tn){return P()(P()({},tn),{},{menuVisible:!0})})},[]),ce=(0,l.useCallback)(function(tn){cn(function(Pn){return P()(P()({},Pn),{},{menuVisible:tn})})},[]),Xn=function(){W({direction:ln!=="rtl"?"rtl":"ltr"})},qn=function(){W({bannerVisible:!1}),Bn.Fy()&&localStorage.setItem(et.ANT_DESIGN_NOT_SHOW_BANNER,D()().toISOString())};(0,l.useEffect)(function(){Fn()},[U]),(0,l.useEffect)(function(){return Un(),window.addEventListener("resize",Un),function(){window.removeEventListener("resize",Un),fn.current&&clearTimeout(fn.current)}},[]);var io=(0,l.useCallback)(function(tn){var Pn=window.location.href,re=window.location.pathname;if(/overview/.test(re)&&/0?[1-39][0-3]?x/.test(tn)){window.location.href=Pn.replace(window.location.origin,tn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(tn)?"":"/react","/introduce")).replace(/\/$/,"");return}var ne=new URL(Pn.replace(window.location.origin,tn));ne.host.includes("antgroup")?(ne.pathname="".concat(ne.pathname.replace(/\/$/,""),"/"),window.location.href=ne.toString()):window.location.href=ne.href.replace(/\/$/,"")},[]),Ge=(0,l.useCallback)(function(){var tn="".concat(window.location.protocol,"//"),Pn=window.location.href.slice(tn.length);Bn.Fy()&&localStorage.setItem("locale",Bn.KE(jn)?"en-US":"zh-CN"),window.location.href=tn+Pn.replace(window.location.pathname,Bn.J1(jn,!Bn.KE(jn),zn).pathname)},[U]),lo=(0,l.useMemo)(function(){return ln!=="rtl"?"RTL":"LTR"},[ln]),so=(0,l.useMemo)(function(){return ln==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[ln]),co=X.menuVisible,oe=X.windowWidth,Xe=X.searching,Je=P()(Sn()({},g.version,g.version),$==null?void 0:$.docVersions),uo=Object.keys(Je).map(function(tn){return{value:Je[tn],label:tn}}),Qe=["","index","index-cn"].includes(jn),Ye=v==="cn",po=ln==="rtl",ue=null;oe<Be?ue="crowded":oe<Ae&&(ue="narrow");var mo=f()(xn.header,"clearfix",{"home-header":Qe}),qe={isZhCN:Ye,isRTL:po},_e=(0,e.jsx)(dt,P()(P()({},qe),{},{responsive:ue,isMobile:en,directionText:lo,onLangChange:Ge,onDirectionChange:Xn}),"nav"),_n=[_e,(0,e.jsx)(Nn.Z,{className:"version",size:"small",defaultValue:g.version,onChange:io,dropdownStyle:so,popupMatchSelectWidth:!1,getPopupContainer:function(Pn){return Pn.parentNode},options:uo},"version"),(0,e.jsx)(se,{onClick:Ge,value:Bn.KE(jn)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,e.jsx)(se,{onClick:Xn,value:ln==="rtl"?2:1,label1:(0,e.jsx)(pe,{className:xn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.jsx)(pe,{className:xn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(se,{value:1,label1:(0,e.jsx)(Cn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];oe<Be?_n=Xe?[]:[_e]:oe<Ae&&(_n=Xe?[]:_n);var nt=Qe?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.jsxs)("header",{className:mo,children:[en&&(0,e.jsx)(Kn.Z,{overlayClassName:xn.popoverMenu,placement:"bottomRight",content:_n,trigger:"click",open:co,arrow:{pointAtCenter:!0},onOpenChange:ce,children:(0,e.jsx)(Cn.MenuOutlined,{className:"nav-phone-icon",onClick:Vn})}),Ye&&kn&&(0,e.jsx)(R.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,e.jsx)(Zn.Z,{className:xn.banner,message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:en?i.shortMessage:i.message}),(0,e.jsx)("a",{className:xn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var Pn,re;(Pn=(re=window).gtag)===null||Pn===void 0||Pn.call(re,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:qn})}),(0,e.jsxs)(Wn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,e.jsx)(Rn.Z,P()(P()({},nt[0]),{},{children:(0,e.jsx)(rt,P()(P()({},qe),{},{location:U}))})),(0,e.jsxs)(Rn.Z,P()(P()({},nt[1]),{},{className:xn.menuRow,children:[(0,e.jsx)("div",{className:"nav-search-wrapper",children:(0,e.jsx)(ae.ZP,{})}),!en&&_n]}))]})]})},ft=ht,go=n(945462),Le=n(777502),xt=function(t){var r=t.children,i=t.title,v=t.desc;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(p.Helmet,{children:[(0,e.jsx)("title",{children:i}),(0,e.jsx)("meta",{property:"og:title",content:i}),v&&(0,e.jsx)("meta",{name:"description",content:v})]}),(0,e.jsx)("div",{style:{minHeight:"100vh"},children:r}),(0,e.jsx)(Le.default,{})]})},vt=xt,bt=n(86198),Pe=n(185209),yt=function(){var t=(0,p.useRouteMeta)(),r=l.useMemo(function(){var g;if(!t.frontmatter.subtitle&&!t.frontmatter.title)g="404 Not Found - Ant Design";else{var $;g="".concat(t.frontmatter.subtitle||""," ").concat((($=t.frontmatter)===null||$===void 0?void 0:$.title)||""," - Ant Design")}var I=t.frontmatter.description||"";return[g,I]},[t]),i=j()(r,2),v=i[0],C=i[1];return(0,e.jsxs)(p.Helmet,{children:[(0,e.jsx)("title",{children:v}),(0,e.jsx)("meta",{property:"og:title",content:v}),C&&(0,e.jsx)("meta",{name:"description",content:C})]})},De=yt,wt=n(148050),Ct=n(468990),jt=n(823493),St=n.n(jt),kt=n(658192),ze,Fe,Oe,Ie=["scroll","resize"],Et=(0,c.kc)(function(a){var t=a.token,r=a.css,i=t.boxShadowSecondary,v=t.antCls;return{affixTabs:r(ze||(ze=u()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity 0.3s,
        transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,v,v,v),affixTabsFixed:r(Fe||(Fe=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Oe||(Oe=u()([`
      text-transform: capitalize;
    `])))}}),Ne=32,Mt=function(){var t=l.useRef(null),r=l.useRef([]),i=l.useState(!1),v=j()(i,2),C=v[0],g=v[1],$=l.useState(void 0),I=j()($,2),G=I[0],X=I[1],cn=Et(),un=cn.styles,ln=un.affixTabs,en=un.affixTabsFixed,kn=un.span;function W(U){var jn=document.getElementById(U);if(jn){var zn=jn.offsetTop-t.current.offsetHeight-Ne;(0,kt.Z)(zn)}}l.useEffect(function(){var U=document.querySelectorAll("h2[id]");r.current=Array.from(U).map(function(jn){var zn=jn.id;return zn}),g(!0)},[]),l.useEffect(function(){var U=decodeURIComponent((location.hash||"").slice(1));U&&W(U)},[C]);var fn=l.useMemo(function(){function U(){for(var jn=window,zn=jn.scrollY,In=t.current.offsetHeight,xn=r.current.length-1;xn>=0;xn-=1){var Fn=r.current[xn],Un=document.getElementById(Fn),Vn=Un.offsetTop-In-Ne;if(Vn<=zn){X(Fn);return}}X(void 0)}return St()(U)},[]);return l.useEffect(function(){return Ie.forEach(function(U){return window.addEventListener(U,fn)}),fn(),function(){Ie.forEach(function(U){return window.removeEventListener(U,fn)})}},[]),(0,e.jsx)("div",{className:f()(ln,G&&en),ref:t,children:(0,e.jsx)(Ct.Z,{activeKey:G,onChange:W,items:r.current.map(function(U){return{key:U,label:(0,e.jsx)("span",{className:kn,children:U.replace(/-/g," ")})}})})})},Tt=Mt,Re,He,Ze,We=40,te=1208,de=24,Bt=(0,c.kc)(function(a){var t=a.token,r=a.css,i=t.antCls;return{resourcePage:r(Re||(Re=u()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),te),resourceContent:r(He||(He=u()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),We,te,de,i),banner:r(Ze||(Ze=u()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),We,te,te,de,de)}}),At=function(t){var r,i=t.children,v=Bt(),C=v.styles,g=(0,p.useRouteMeta)();return(0,e.jsx)(R.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,e.jsxs)(bt.Z,{children:[(0,e.jsx)(De,{}),(0,e.jsxs)("div",{id:"resources-page",className:C.resourcePage,children:[(0,e.jsx)(Tt,{}),(0,e.jsxs)("div",{className:C.banner,children:[(0,e.jsxs)(Pe.Z.Title,{style:{fontSize:30},children:[(r=g.frontmatter)===null||r===void 0?void 0:r.title,(0,e.jsx)(wt.default,{title:(0,e.jsx)(p.FormattedMessage,{id:"app.content.edit-page"}),filename:g.frontmatter.filename})]}),(0,e.jsx)("section",{children:g.frontmatter.description})]}),(0,e.jsx)("div",{className:C.resourceContent,children:i}),(0,e.jsx)(Le.default,{})]})]})})},Lt=At,Pt=n(106750),Dt=n(217187),zt=n(524229),Ft=n(548657),Ot=n(442708),It=function(t){var r=t.children,i=t.fallback,v=i===void 0?(0,e.jsx)(Ft.Z.Input,{active:!0,size:"small"}):i,C=t.delay,g=C===void 0?200:C;return(0,e.jsx)(Ot.df,{triggerOnce:!0,delay:g,children:function(I){var G=I.inView,X=I.ref;return(0,e.jsx)("div",{ref:X,children:(0,e.jsx)(l.Suspense,{fallback:v,children:G?r:(0,e.jsx)("span",{})})})}})},$n=It,$e,Nt=l.lazy(function(){return Promise.all([n.e(3156),n.e(7721)]).then(n.bind(n,617721))}),Rt=l.lazy(function(){return n.e(9148).then(n.bind(n,349148))}),Ht=l.lazy(function(){return n.e(8301).then(n.bind(n,368301))}),Zt=l.lazy(function(){return n.e(8598).then(n.bind(n,458598))}),Wt=l.lazy(function(){return Promise.resolve().then(n.bind(n,777502))}),$t=l.lazy(function(){return n.e(6720).then(n.bind(n,366720))}),Ut=l.lazy(function(){return Promise.all([n.e(9285),n.e(5926)]).then(n.bind(n,615926))}),Vt=l.lazy(function(){return Promise.resolve().then(n.bind(n,148050))}),Kt=(0,c.kc)(function(a){var t=a.token,r=a.css;return{articleWrapper:r($e||($e=u()([`
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
  `])),t.screenLG)}}),Gt=function(t){var r,i,v,C=t.children,g=(0,p.useRouteMeta)(),$=(0,on.Z)(),I=$.pathname,G=$.hash,X=(0,l.useContext)(ee.Z),cn=X.direction,un=Kt(),ln=un.styles,en=(0,Dt.Z)(!1),kn=j()(en,2),W=kn[0],fn=kn[1],U=(0,l.useMemo)(function(){var xn;return((xn=g.toc)===null||xn===void 0?void 0:xn.filter(function(Fn){return Fn._debug_demo}).map(function(Fn){return Fn.id}))||[]},[g]),jn=U.includes(G.slice(1));(0,l.useLayoutEffect)(function(){fn(jn)},[]);var zn=(0,l.useMemo)(function(){return{showDebug:W,setShowDebug:fn}},[W,U]),In=cn==="rtl";return(0,e.jsx)(zt.Z.Provider,{value:zn,children:(0,e.jsxs)(Rn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)(Ht,{showDebug:W,debugDemos:U})}),(0,e.jsxs)("article",{className:f()(ln.articleWrapper,{rtl:In}),children:[(r=g.frontmatter)!==null&&r!==void 0&&r.title?(0,e.jsxs)(Pe.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,e.jsxs)(Pt.Z,{gap:"small",children:[(0,e.jsx)("div",{children:(i=g.frontmatter)===null||i===void 0?void 0:i.title}),(0,e.jsx)("div",{children:(v=g.frontmatter)===null||v===void 0?void 0:v.subtitle}),!I.startsWith("/components/overview")&&(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)(Vt,{title:(0,e.jsx)(p.FormattedMessage,{id:"app.content.edit-page"}),filename:g.frontmatter.filename})})]}),I.startsWith("/components/")&&(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)(Ut,{pathname:I})})]}):null,(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)(Zt,{})}),!g.frontmatter.__autoDescription&&g.frontmatter.description,(0,e.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:C}),(0,e.jsx)($n,{children:(0,e.jsx)(Rt,{zhihuLink:g.frontmatter.zhihu_url,yuqueLink:g.frontmatter.yuque_url,juejinLink:g.frontmatter.juejin_url})}),(0,e.jsx)($n,{fallback:(0,e.jsx)("div",{style:{height:50,marginTop:120}}),children:(0,e.jsx)(Nt,{filename:g.frontmatter.filename})})]}),(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)($t,{rtl:In})}),(0,e.jsx)(Wt,{})]})})},Xt=Gt,Jt=n(650010),Qt=n(361446),Ue,Ve,Yt=(0,c.kc)(function(a){var t=a.token,r=a.css,i=t.antCls,v=t.fontFamily,C=t.colorSplit;return{asideContainer:r(Ue||(Ue=u()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),v,i,i,i,i,i,i,C,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:r(Ve||(Ve=u()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),t.headerHeight+t.contentMarginTop,t.headerHeight+t.contentMarginTop)}}),qt=function(){var t=(0,p.useSidebarData)(),r=(0,l.useContext)(ee.Z),i=r.isMobile,v=r.theme,C=Yt(),g=C.styles,$=(0,Qt.Z)(),I=j()($,2),G=I[0],X=I[1],cn=v.includes("dark"),un=(0,c.Fg)(),ln=un.colorBgContainer,en=(0,e.jsx)(R.ZP,{theme:{components:{Menu:{itemBg:ln,darkItemBg:ln}}},children:(0,e.jsx)(he.Z,{items:G,inlineIndent:30,className:g.asideContainer,mode:"inline",theme:cn?"dark":"light",selectedKeys:[X],defaultOpenKeys:t==null?void 0:t.map(function(kn){var W=kn.title;return W}).filter(Boolean)})});return i?(0,e.jsx)(Jt.Z,{children:en},"Mobile-menu"):(0,e.jsx)(Rn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:g.mainMenu,children:(0,e.jsx)("section",{className:"main-menu-inner",children:en})})},_t=qt,Ke,no=(0,c.kc)(function(a){var t=a.css,r=a.token;return{main:t(Ke||(Ke=u()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),eo=function(t){var r=t.children,i=no(),v=i.styles;return(0,e.jsxs)("main",{className:v.main,children:[(0,e.jsx)(De,{}),(0,e.jsx)(_t,{}),(0,e.jsx)(Xt,{children:r})]})},to=eo,oo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},ro=function(){var t=(0,p.useOutlet)(),r=(0,on.Z)(),i=r.pathname,v=r.search,C=r.hash,g=(0,F.default)(oo),$=j()(g,2),I=$[0],G=$[1],X=(0,l.useRef)(null),cn=(0,l.useContext)(ee.Z),un=cn.direction,ln=(0,p.useSiteData)(),en=ln.loading;(0,l.useLayoutEffect)(function(){G==="cn"?D().locale("zh-cn"):D().locale("en")},[]),(0,l.useEffect)(function(){var W=document.getElementById("nprogress-style");W&&(X.current=setTimeout(function(){var fn;(fn=W.parentNode)===null||fn===void 0||fn.removeChild(W)},0))},[]),(0,l.useEffect)(function(){var W=C.replace("#","");if(W){var fn;(fn=document.getElementById(decodeURIComponent(W)))===null||fn===void 0||fn.scrollIntoView()}},[en,C]),(0,l.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+v)},[r]);var kn=l.useMemo(function(){return["","/"].some(function(W){return W===i})||["/index"].some(function(W){return i.startsWith(W)})?(0,e.jsx)(vt,{title:I.title,desc:I.description,children:t}):i.startsWith("/docs/resource")?(0,e.jsx)(Lt,{children:t}):i.startsWith("/theme-editor")?t:(0,e.jsx)(to,{children:t})},[i,t]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(p.Helmet,{encodeSpecialCharacters:!1,children:[(0,e.jsx)("html",{lang:G==="cn"?"zh-CN":G,"data-direction":un,className:f()({rtl:un==="rtl"})}),(0,e.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,e.jsx)("meta",{property:"og:description",content:I.description}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,e.jsxs)(R.ZP,{direction:un,locale:G==="cn"?M.default:void 0,children:[(0,e.jsx)(Ln,{}),(0,e.jsx)(ft,{}),kn]})]})},ao=ro},840070:function(Dn,N,n){n.r(N),n.d(N,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return A},default:function(){return H}});var J=n(97857),j=n.n(J),sn=n(805574),f=n.n(sn),w=n(667294),D=n(900210),pn=n(368655),l=n(359020),R=n(965516),M=n(471232),p=n(385956),F=n(49313),on=n(217187),Q=n(438746),u=n(513769),o=n.n(u),c=n(75529),e=n(647759),b=n(438199),m=n(785893),S=["children","theme"],rn=64,_=38,s=function(T){var Y=T.children,mn=T.theme,dn=o()(T,S),bn=(0,w.useContext)(c.ZP.ConfigContext),Z=bn.getPrefixCls,y=bn.iconPrefixCls,h=Z(),d=R.Z.useToken(),x=d.token,k=(0,w.useContext)(b.Z),B=k.bannerVisible;return w.useEffect(function(){c.ZP.config({theme:mn})},[mn]),(0,m.jsx)(e.f6,j()(j()({},dn),{},{theme:mn,customToken:{headerHeight:rn,bannerHeight:_,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:x.colorFillTertiary,antCls:".".concat(h),iconCls:".".concat(y),marginFarXS:x.marginXXL/6*7,marginFarSM:x.marginXXL/3*5,marginFar:x.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:rn+x.margin+(B?_:0)},children:Y}))},L=s,O=w.lazy(function(){return Promise.all([n.e(7898),n.e(4137),n.e(263)]).then(n.bind(n,531434))}),z=768,A="ANT_DESIGN_NOT_SHOW_BANNER",K=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return T.map(function(Y){return Y==="dark"?R.Z.darkAlgorithm:Y==="compact"?R.Z.compactAlgorithm:null}).filter(Boolean)},V=function(){var T=(0,p.useOutlet)(),Y=(0,Q.Z)(),mn=Y.pathname,dn=(0,p.useSearchParams)(),bn=f()(dn,2),Z=bn[0],y=bn[1],h=(0,on.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),d=f()(h,2),x=d[0],k=x.theme,B=k===void 0?[]:k,nn=x.direction,an=x.isMobile,vn=x.bannerVisible,yn=vn===void 0?!1:vn,wn=d[1],gn=(0,w.useCallback)(function(q){wn(function(Hn){return j()(j()({},Hn),q)});var Sn=Z.toString(),Cn=Z;Object.entries(q).forEach(function(Hn){var Nn=f()(Hn,2),Kn=Nn[0],Zn=Nn[1];if(Kn==="direction"&&(Zn==="rtl"?Cn.set("direction","rtl"):Cn.delete("direction")),Kn==="theme"){var Wn;Cn=(0,p.createSearchParams)(j()(j()({},Cn),{},{theme:Zn.filter(function(Rn){return Rn!=="light"})})),(Wn=document.querySelector("html"))===null||Wn===void 0||Wn.setAttribute("data-prefers-color",Zn.includes("dark")?"dark":"light")}}),Cn.toString()!==Sn&&y(Cn)},[Z,y]),hn=function(){gn({isMobile:window.innerWidth<z})};(0,w.useEffect)(function(){var q=Z.getAll("theme"),Sn=Z.get("direction");return wn({theme:q,direction:Sn==="rtl"?"rtl":"ltr"}),hn(),window.addEventListener("resize",hn),function(){window.removeEventListener("resize",hn)}},[]);var Mn=w.useMemo(function(){return{direction:nn,updateSiteConfig:gn,theme:B,isMobile:an,bannerVisible:yn}},[an,nn,gn,B,yn]),An=w.useMemo(function(){return{algorithm:K(B),token:{motion:!B.includes("motion-off")},cssVar:!0,hashed:!1}},[B]),En=w.useState(function(){return(0,D.createCache)()}),Tn=f()(En,1),Ln=Tn[0];(0,p.useServerInsertedHTML)(function(){var q=(0,D.extractStyle)(Ln,{plain:!0,types:"style"});return(0,m.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:q}})}),(0,p.useServerInsertedHTML)(function(){var q=(0,D.extractStyle)(Ln,{plain:!0,types:["cssVar","token"]});return(0,m.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:q}})}),(0,p.useServerInsertedHTML)(function(){return(0,m.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,l.$Z)()}})});var On=mn.startsWith("/~demos"),P=T;return On||(P=(0,m.jsxs)(M.Z,{children:[T,(0,m.jsx)(w.Suspense,{children:(0,m.jsx)(O,{value:B,onChange:function(Sn){return gn({theme:Sn})}})})]})),(0,m.jsx)(F.f.Provider,{value:B.includes("dark"),children:(0,m.jsx)(D.StyleProvider,{cache:Ln,linters:[D.legacyNotSelectorLinter,D.parentSelectorLinter,D.NaNLinter],children:(0,m.jsx)(b.Z.Provider,{value:Mn,children:(0,m.jsx)(L,{theme:An,children:(0,m.jsx)(pn.HappyProvider,{disabled:!B.includes("happy-work"),children:P})})})})})},H=V},777502:function(Dn,N,n){n.r(N),n.d(N,{default:function(){return L}});var J=n(805574),j=n.n(J),sn=n(168400),f=n.n(sn),w=n(639389),D=n(510274),pn=n(647759),l=n(385956),R=n(391298),M=n(667294),p=n(630770),F=n(302559),on=n(438746),Q=n(438199),u=n(693399),o=n(785893),c="ant-where-checker",e={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function b(){var O=(0,F.default)(e),z=j()(O,1),A=z[0],K=M.useState(!0),V=j()(K,2),H=V[0],E=V[1];return M.useEffect(function(){var T=document.createElement("p");T.className=c,T.style.position="fixed",T.style.pointerEvents="none",T.style.visibility="hidden",T.style.width="0",document.body.appendChild(T),(0,u.updateCSS)(`
:where(.`.concat(c,`) {
  content: "__CHECK__";
}
    `),c);var Y=getComputedStyle(T),mn=Y.content;E(String(mn).includes("CHECK")),document.body.removeChild(T),(0,u.removeCSS)(c)},[]),H?null:(0,o.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[A.whereNotSupport," ",(0,o.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:A.whereDocUrl,children:A.whereDocTitle})]})})}var m,S,rn={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},_=function(){var z=(0,M.useContext)(Q.Z),A=z.isMobile;return(0,pn.kc)(function(K){var V=K.token,H=K.css,E=new D.C((0,p.Z)("#f0f3fa","#fff")).onBackground(V.colorBgContainer).toHexString();return{holder:H(m||(m=f()([`
      background: `,`;
    `])),E),footer:H(S||(S=f()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),E,V.colorTextSecondary,V.colorText,A?60:0,A?20:0,V.marginXXL,V.fontSize)}})()},s=function(){var z=(0,on.Z)(),A=(0,F.default)(rn),K=j()(A,2),V=K[0],H=K[1],E=_(),T=E.styles,Y=z.getLink,mn=M.useMemo(function(){var dn=H==="cn",bn={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:dn?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:dn?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:dn?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},Z={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,o.jsx)(w.AntDesignOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,o.jsx)(w.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,o.jsx)(w.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(w.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,o.jsx)(w.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};dn&&Z.items.push({icon:(0,o.jsx)(w.UsergroupAddOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:Y("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var y={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,o.jsx)(w.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(w.HistoryOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:Y("/changelog"),LinkComponent:l.Link},{icon:(0,o.jsx)(w.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:Y("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,o.jsx)(w.BugOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,o.jsx)(w.IssuesCloseOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,o.jsx)(w.MessageOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,o.jsx)(w.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,o.jsx)(w.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},h={icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,o.jsx)(w.BgColorsOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:Y("/theme-editor"),LinkComponent:l.Link}]};return[bn,Z,y,h]},[H,z.search]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(R.Z,{columns:mn,className:T.footer,bottom:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,o.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,o.jsx)("div",{children:V.owner})]})}),(0,o.jsx)(b,{})]})},L=s},373638:function(Dn,N,n){n.d(N,{J1:function(){return M},Is:function(){return u},Fy:function(){return F},KE:function(){return R},qE:function(){return p}});var J=n(661227),j=n(805574),sn=n(97857),f=n(385564),w=n(842348),D=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),pn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":D?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function l(o,c,e,b){var m=o.map(function(s){return s.meta}).filter(function(s){return!s.skip}),S=[],rn=function(L,O){return(L.order||0)-(O.order||0)};m.sort(rn).forEach(function(s){if(s.category&&(s.category=s.category[c]||s.category),s.type&&(s.type=s.type[c]||s.type),s!=null&&s.title&&(s.title=s.title[c]||s.title),!s.category){S.push(s);return}if(s.category==="Components"&&s.type){var L=S.find(function(A){return(A==null?void 0:A.title)===s.type});L||(L={type:"type",title:s.type,children:[],order:b[s.type]},S.push(L)),L.children=L.children||[],L.children.push(s);return}var O=S.find(function(A){return(A==null?void 0:A.title)===s.category});if(O||(O={type:"category",title:s.category,children:[],order:e[s.category]},S.push(O)),O.children=O.children||[],s.type){var z=O.children.filter(function(A){return(A==null?void 0:A.title)===s.type})[0];z||(z={type:"type",title:s.type,children:[],order:b[s.type]},O.children.push(z)),z.children=z.children||[],z.children.push(s)}else O.children.push(s)});function _(s){return s.sort(rn).map(function(L){return L.children?_objectSpread(_objectSpread({},L),{},{children:_(L.children)}):L})}return _(S)}function R(o){return/-cn\/?$/.test(o)}function M(o,c,e,b){var m=o.startsWith("/")?o:"/".concat(o),S;if(c?m==="/"?S="/index-cn":m.endsWith("/")?S=m.replace(/\/$/,"-cn/"):(S="".concat(m,"-cn"),S=S.replace(/(-cn)+/,"-cn")):S=/\/?index-cn/.test(m)?"/":m.replace("-cn",""),b){var rn=b[c?"zhCN":"enUS"];S+="#".concat(rn)}return{pathname:S,search:e}}function p(o){var c="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",e=new Image,b,m=function(rn){b||(b=!0,e.src="",o(rn))};return e.onload=function(){return m("responded")},e.onerror=function(){return m("error")},e.src=c,setTimeout(function(){return m("timeout")},1500)}function F(){var o="test",c=window.localStorage;try{return c.setItem(o,"1"),c.removeItem(o),!0}catch(e){return!1}}function on(o){return new Promise(function(c,e){var b=document.createElement("script");b.type="text/javascript",b.src=o,b.onload=c,b.onerror=e,document.head.appendChild(b)})}function Q(o){var c=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(o))return"";var e=flattenDeep(o.filter(function(b){if(Array.isArray(b)){var m=_slicedToArray(b,1),S=m[0];return S==="p"}return!1}).map(function(b){var m=flatten(b),S=_toArray(m),rn=S[0],_=S.slice(1),s=_.filter(function(L){return typeof L=="string"&&!c.includes(L)}).join("");return[rn,s]})).find(function(b){return b&&typeof b=="string"&&!c.includes(b)});return e}var u=function(){return pn}},647727:function(Dn,N,n){n.d(N,{Z:function(){return J.Z}});var J=n(843534)},471232:function(Dn,N,n){n.d(N,{Z:function(){return rn}});var J=n(97857),j=n.n(J),sn=n(805574),f=n.n(sn),w=n(667294),D=n(693967),pn=n.n(D),l=n(73287),R=n(215570),M=n(269924),p=n(890887),F=n(414466),on=n(9783),Q=n.n(on),u=n(286665),o=function(s){var L=s.componentCls,O=s.colorText,z=s.fontSize,A=s.lineHeight,K=s.fontFamily;return Q()({},L,{color:O,fontSize:z,lineHeight:A,fontFamily:K})},c=function(){return{}},e=(0,u.I$)("App",o,c),b=n(785893),m=function(){return w.useContext(F.Z)},S=function(s){var L=s.prefixCls,O=s.children,z=s.className,A=s.rootClassName,K=s.message,V=s.notification,H=s.style,E=s.component,T=E===void 0?"div":E,Y=(0,w.useContext)(l.E_),mn=Y.getPrefixCls,dn=mn("app",L),bn=e(dn),Z=f()(bn,3),y=Z[0],h=Z[1],d=Z[2],x=pn()(h,dn,z,A,d),k=(0,w.useContext)(F.J),B=w.useMemo(function(){return{message:j()(j()({},k.message),K),notification:j()(j()({},k.notification),V)}},[K,V,k.message,k.notification]),nn=(0,R.Z)(B.message),an=f()(nn,2),vn=an[0],yn=an[1],wn=(0,p.Z)(B.notification),gn=f()(wn,2),hn=gn[0],Mn=gn[1],An=(0,M.Z)(),En=f()(An,2),Tn=En[0],Ln=En[1],On=w.useMemo(function(){return{message:vn,notification:hn,modal:Tn}},[vn,hn,Tn]),P=T===!1?w.Fragment:T,q={className:x,style:H};return y((0,b.jsx)(F.Z.Provider,{value:On,children:(0,b.jsx)(F.J.Provider,{value:B,children:(0,b.jsxs)(P,j()(j()({},T===!1?void 0:q),{},{children:[Ln,yn,Mn,O]}))})}))};S.useApp=m;var rn=S},86198:function(Dn,N,n){n.d(N,{Z:function(){return y}});var J=n(719632),j=n.n(J),sn=n(9783),f=n.n(sn),w=n(805574),D=n.n(w),pn=n(513769),l=n.n(pn),R=n(97857),M=n.n(R),p=n(667294),F=n(693967),on=n.n(F),Q=n(518475),u=n(73287),o=n(121790),c=n(45598),e=n(296708);function b(h,d,x){if(typeof x=="boolean")return x;if(h.length)return!0;var k=(0,c.default)(d);return k.some(function(B){return B.type===e.Z})}var m=n(900210),S=n(286665),rn=function(d){var x=d.componentCls,k=d.bodyBg,B=d.lightSiderBg,nn=d.lightTriggerBg,an=d.lightTriggerColor;return f()({},"".concat(x,"-sider-light"),f()(f()({background:B},"".concat(x,"-sider-trigger"),{color:an,background:nn}),"".concat(x,"-sider-zero-width-trigger"),{color:an,background:nn,border:"1px solid ".concat(k),borderInlineStart:0}))},_=rn,s=function(d){var x=d.antCls,k=d.componentCls,B=d.colorText,nn=d.triggerColor,an=d.footerBg,vn=d.triggerBg,yn=d.headerHeight,wn=d.headerPadding,gn=d.headerColor,hn=d.footerPadding,Mn=d.triggerHeight,An=d.zeroTriggerHeight,En=d.zeroTriggerWidth,Tn=d.motionDurationMid,Ln=d.motionDurationSlow,On=d.fontSize,P=d.borderRadius,q=d.bodyBg,Sn=d.headerBg,Cn=d.siderBg;return f()(f()(f()(f()({},k,M()(M()(f()(f()(f()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:q,"&, *":{boxSizing:"border-box"}},"&".concat(k,"-has-sider"),f()({flexDirection:"row"},"> ".concat(k,", > ").concat(k,"-content"),{width:0})),"".concat(k,"-header, &").concat(k,"-footer"),{flex:"0 0 auto"}),"".concat(k,"-sider"),{position:"relative",minWidth:0,background:Cn,transition:"all ".concat(Tn,", background 0s"),"&-children":f()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(x,"-menu").concat(x,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:Mn},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:Mn,color:nn,lineHeight:(0,m.unit)(Mn),textAlign:"center",background:vn,cursor:"pointer",transition:"all ".concat(Tn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:yn,insetInlineEnd:d.calc(En).mul(-1).equal(),zIndex:1,width:En,height:An,color:nn,fontSize:d.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Cn,borderStartStartRadius:0,borderStartEndRadius:P,borderEndEndRadius:P,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Ln," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Ln),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:d.calc(En).mul(-1).equal(),borderStartStartRadius:P,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:P}}}}),_(d)),{},{"&-rtl":{direction:"rtl"}})),"".concat(k,"-header"),f()({height:yn,padding:wn,color:gn,lineHeight:(0,m.unit)(yn),background:Sn},"".concat(x,"-menu"),{lineHeight:"inherit"})),"".concat(k,"-footer"),{padding:hn,color:B,fontSize:On,background:an}),"".concat(k,"-content"),{flex:"auto",color:B,minHeight:0})},L=function(d){var x=d.colorBgLayout,k=d.controlHeight,B=d.controlHeightLG,nn=d.colorText,an=d.controlHeightSM,vn=d.marginXXS,yn=d.colorTextLightSolid,wn=d.colorBgContainer,gn=B*1.25;return{colorBgHeader:"#001529",colorBgBody:x,colorBgTrigger:"#002140",bodyBg:x,headerBg:"#001529",headerHeight:k*2,headerPadding:"0 ".concat(gn,"px"),headerColor:nn,footerPadding:"".concat(an,"px ").concat(gn,"px"),footerBg:x,siderBg:"#001529",triggerHeight:B+vn*2,triggerBg:"#002140",triggerColor:yn,zeroTriggerWidth:B,zeroTriggerHeight:B,lightSiderBg:wn,lightTriggerBg:wn,lightTriggerColor:nn}},O=(0,S.I$)("Layout",function(h){return[s(h)]},L,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),z=n(785893),A=["prefixCls","suffixCls","className","tagName"],K=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function V(h){var d=h.suffixCls,x=h.tagName,k=h.displayName;return function(B){var nn=p.forwardRef(function(an,vn){return(0,z.jsx)(B,M()({ref:vn,suffixCls:d,tagName:x},an))});return nn}}var H=p.forwardRef(function(h,d){var x=h.prefixCls,k=h.suffixCls,B=h.className,nn=h.tagName,an=l()(h,A),vn=p.useContext(u.E_),yn=vn.getPrefixCls,wn=yn("layout",x),gn=O(wn),hn=D()(gn,3),Mn=hn[0],An=hn[1],En=hn[2],Tn=k?"".concat(wn,"-").concat(k):wn;return Mn((0,z.jsx)(nn,M()({className:on()(x||Tn,B,An,En),ref:d},an)))}),E=p.forwardRef(function(h,d){var x=p.useContext(u.E_),k=x.direction,B=p.useState([]),nn=D()(B,2),an=nn[0],vn=nn[1],yn=h.prefixCls,wn=h.className,gn=h.rootClassName,hn=h.children,Mn=h.hasSider,An=h.tagName,En=h.style,Tn=l()(h,K),Ln=(0,Q.default)(Tn,["suffixCls"]),On=p.useContext(u.E_),P=On.getPrefixCls,q=On.layout,Sn=P("layout",yn),Cn=b(an,hn,Mn),Hn=O(Sn),Nn=D()(Hn,3),Kn=Nn[0],Zn=Nn[1],Wn=Nn[2],Rn=on()(Sn,f()(f()({},"".concat(Sn,"-has-sider"),Cn),"".concat(Sn,"-rtl"),k==="rtl"),q==null?void 0:q.className,wn,gn,Zn,Wn),ae=p.useMemo(function(){return{siderHook:{addSider:function(Jn){vn(function(Qn){return[].concat(j()(Qn),[Jn])})},removeSider:function(Jn){vn(function(Qn){return Qn.filter(function(le){return le!==Jn})})}}}},[]);return Kn((0,z.jsx)(o.V.Provider,{value:ae,children:(0,z.jsx)(An,M()(M()({ref:d,className:Rn,style:M()(M()({},q==null?void 0:q.style),En)},Ln),{},{children:hn}))}))}),T=V({tagName:"div",displayName:"Layout"})(E),Y=V({suffixCls:"header",tagName:"header",displayName:"Header"})(H),mn=V({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(H),dn=V({suffixCls:"content",tagName:"main",displayName:"Content"})(H),bn=T,Z=bn;Z.Header=Y,Z.Footer=mn,Z.Content=dn,Z.Sider=e.Z,Z._InternalSiderContext=e.D;var y=Z},715778:function(Dn,N,n){n.r(N),n.d(N,{default:function(){return F}});var J=n(174219),j=n(97857),sn=n.n(j),f=n(585369),w={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},D=w,pn={lang:sn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},f.Z),timePickerLocale:sn()({},D)};pn.lang.ok="\u786E\u5B9A";var l=pn,R=l,M="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",p={locale:"zh-cn",Pagination:J.Z,DatePicker:l,TimePicker:D,Calendar:R,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:M,method:M,array:M,object:M,number:M,date:M,boolean:M,integer:M,float:M,regexp:M,email:M,url:M,hex:M},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},F=p}}]);
