(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(e,t,a){"use strict";a(7);var i=a(0),r=a.n(i),n=a(63),s=a.n(n);a.d(t,"a",function(){return s.a});a(196),r.a.createContext({})},191:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var i=a(202),r=a.n(i),n=a(203),s=a.n(n),c=new r.a(s.a),o=c.rhythm},193:function(e,t,a){"use strict";var i=a(189),r=a(7),n=(a(0),a(191)),s=i.a.div.withConfig({displayName:"layout___StyledDiv",componentId:"sc-4dh0yk-0"})(["margin:0 auto;max-width:1200px;min-height:100%;padding:",";padding-top:",";display:flex;justify-content:center;flex-wrap:wrap;"],function(e){return e._css},function(e){return e._css2});t.a=function(e){var t=e.children;return Object(r.a)(s,{_css:Object(n.a)(2),_css2:Object(n.a)(1.5)},t)}},194:function(e,t,a){"use strict";var i=a(7),r=(a(0),a(190)),n=a(199),s=a.n(n);a(182);t.a=function(e){return Object(i.a)("header",{className:"toolbar"},Object(i.a)("nav",{className:"toolbar__navigation"},Object(i.a)(r.a,{to:"/"},Object(i.a)("img",{className:"toolbar__logo",src:s.a,style:{height:"40px"},alt:"GVV Logo"})),Object(i.a)("h2",{className:"toolbar__title"},Object(i.a)("span",{style:{color:"white"}},"GVV")," PROPIEDADES"),Object(i.a)("div",{className:"spacer"}),Object(i.a)("div",{className:"toolbar__navigation-items"},Object(i.a)("ul",null,Object(i.a)("li",null,Object(i.a)(r.a,{to:"/"},"Inicio")),Object(i.a)("li",null,Object(i.a)(r.a,{to:"/venta"},"Venta")),Object(i.a)("li",null,Object(i.a)(r.a,{to:"/arriendo"},"Arriendo")),Object(i.a)("li",null,Object(i.a)(r.a,{to:"/contacto"},"Contacto"))))))}},195:function(e,t,a){"use strict";var i=a(7),r=(a(0),a(183),a(192));t.a=function(){return Object(i.a)("div",{className:"footer"},Object(i.a)("ul",{className:"footer__contact"},Object(i.a)("li",null,Object(i.a)(r.g,null)," +569 9335 6611"),Object(i.a)("a",{href:"mailto: corredora@gvvpropiedades.com"},Object(i.a)("li",null,Object(i.a)(r.d,null)," corredora@gvvpropiedades.com")),Object(i.a)("li",null,Object(i.a)(r.f,null)," Lincoyan 435, 2do Piso, Oficina D, Concepción")))}},196:function(e,t,a){var i;e.exports=(i=a(198))&&i.default||i},197:function(e,t,a){"use strict";a(28),a(19),a(8),a(50),a(89),a(214);var i=a(17);t.__esModule=!0,t.default=void 0;var r,n=i(a(44)),s=i(a(65)),c=i(a(131)),o=i(a(132)),u=i(a(0)),l=i(a(66)),d=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},M=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),N=function(e){var t=d(e),a=M(t);return g[a]||!1},f="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,j="undefined"!=typeof window,D=j&&window.IntersectionObserver,T=new WeakMap;function p(e){return e.map(function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},i&&u.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),u.default.createElement("source",{media:r,srcSet:a,sizes:n}))})}function O(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function y(e){return e.map(function(e){var t=e.src,a=e.media,i=e.tracedSVG;return u.default.createElement("source",{key:t,media:a,srcSet:i})})}function z(e){return e.map(function(e){var t=e.src,a=e.media,i=e.base64;return u.default.createElement("source",{key:t,media:a,srcSet:i})})}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(T.has(e.target)){var t=T.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),T.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),T.set(e,t)),function(){a.unobserve(e),T.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+u+s+c+a+i+t+n+r+o+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=u.default.createElement(m,(0,o.default)({src:t},r));return a.length>1?u.default.createElement("picture",null,i(a),n):n},m=u.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,l=e.onError,d=e.loading,M=e.draggable,g=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return u.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:l,ref:t,loading:d,draggable:M,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var b=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=j&&N(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!f&&D&&!t.critical&&!a.seenBefore;var i=t.critical||j&&(f||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=u.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:N(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=N(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=M(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,c=void 0===s?{}:s,l=e.placeholderStyle,M=void 0===l?{}:l,g=e.placeholderClassName,N=e.fluid,f=e.fixed,j=e.backgroundColor,D=e.durationFadeIn,T=e.Tag,O=e.itemProp,I=e.loading,L=e.draggable,b=!1===this.state.fadeIn||this.state.imgLoaded,S=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,o.default)({opacity:b?1:0,transition:S?"opacity "+D+"ms":"none"},c),E="boolean"==typeof j?"lightgray":j,v={transitionDelay:D+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},S&&v,c,M),x={title:t,alt:this.state.isVisible?"":a,style:k,className:g};if(N){var Q=N,C=Q[0];return u.default.createElement(T,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},u.default.createElement(T,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),E&&u.default.createElement(T,{title:t,style:(0,o.default)({backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&v)}),C.base64&&u.default.createElement(w,{src:C.base64,spreadProps:x,imageVariants:Q,generateSources:z}),C.tracedSVG&&u.default.createElement(w,{src:C.tracedSVG,spreadProps:x,imageVariants:Q,generateSources:y}),this.state.isVisible&&u.default.createElement("picture",null,p(Q),u.default.createElement(m,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:I,draggable:L})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t,loading:I},C,{imageVariants:Q}))}}))}if(f){var U=f,Y=U[0],V=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},n);return"inherit"===n.display&&delete V.display,u.default.createElement(T,{className:(i||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},E&&u.default.createElement(T,{title:t,style:(0,o.default)({backgroundColor:E,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},S&&v)}),Y.base64&&u.default.createElement(w,{src:Y.base64,spreadProps:x,imageVariants:U,generateSources:z}),Y.tracedSVG&&u.default.createElement(w,{src:Y.tracedSVG,spreadProps:x,imageVariants:U,generateSources:y}),this.state.isVisible&&u.default.createElement("picture",null,p(U),u.default.createElement(m,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:I,draggable:L})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t,loading:I},Y,{imageVariants:U}))}}))}return null},t}(u.default.Component);b.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),A=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});b.propTypes={resolutions:S,sizes:A,fixed:l.default.oneOfType([S,l.default.arrayOf(S)]),fluid:l.default.oneOfType([A,l.default.arrayOf(A)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var E=b;t.default=E},198:function(e,t,a){"use strict";a.r(t);a(18);var i=a(0),r=a.n(i),n=a(90);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},199:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwNCIgaGVpZ2h0PSI5NTAiIHZpZXdCb3g9IjAgMCAxMTA0IDk1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPg0KPHBhdGggZD0iTTEzNy41NDkgMjA4LjkwNkw3Ni42MDQxIDkzNi40MjlIMEw1Ny4wMDI1IDMyMS45OTJMMTM3LjU0OSAyMDguOTA2WiIgZmlsbD0iI0VBQUMwOCIvPg0KPHBhdGggZD0iTTEwMDcuOCAzMjcuMjgxTDEwNTIuOTcgOTM2LjQyOEgxMTA0TDEwNTUuOSA0MDcuMzI5TDEwMDcuOCAzMjcuMjgxWiIgZmlsbD0iI0VBQUMwOCIvPg0KPHBhdGggZD0iTTM3MS4zMDUgMTM5LjIzN0wyMjEuOTI2IDkzNi40MjlINTQyLjA4NlYwTDM3MS4zMDUgMTM5LjIzN1pNNTEwLjc2OSA3ODYuNzEyTDI2OS42OTIgODY2Ljc2TDI4My40MzUgNzgzLjIxOEw1MTAuNzY5IDcwMS40NzJWNzg2LjcxMlpNNTEwLjc2OSA2NjEuNDQ5TDI4Ni44MTQgNzQzLjE5NEwzMDAuNTU5IDY1OS42NTFMNTEwLjc2OSA1NzYuMTFWNjYxLjQ0OVpNNTEwLjc2OSA1MzYuMDg1TDMwNy40MyA2MTQuMzM4TDMyMS4xNzQgNTMwLjc5NUw1MTAuNzY5IDQ1MC43NDhWNTM2LjA4NVpNNTEwLjc2OSA0MTIuNTJMMzMxLjk4OCA0OTQuMzY1TDM0NS43MzEgNDEwLjgyMkw1MTAuNzY5IDMyNy4yODFWNDEyLjUyWk01MTAuNzY5IDI4NS40NkwzNTIuNjA0IDM2OS4wMDFMMzY2LjM0NyAyODUuNDZMNTEwLjc2OSAyMDAuMTIxVjI4NS40NlpNNTEwLjc2OSAxNjEuODk0TDM3My4yMTkgMjQzLjYzOUwzOTIuODIgMTYxLjg5NEw1MTAuNjU3IDc2LjU1NTJWMTYxLjg5NEg1MTAuNzY5WiIgZmlsbD0iI0VBQUMwOCIvPg0KPHBhdGggZD0iTTY5Ny4zMjMgMTA0LjQwMkw1NTkuNzczIDBWOTM2LjQyOUg4NzAuMTM0TDY5Ny4zMjMgMTA0LjQwMlpNNTc5LjQ4OCA3Ni41NTUyTDY4MS42NjQgMTQwLjkzM0w3MDAuMzY0IDIxNS43OTJMNTc5LjQ4OCAxNTMuMTFWNzYuNTU1MlpNNTc5LjQ4OCAyMDAuMjIxTDcwMC4zNjQgMjUyLjAyM0w3MTUuMDA5IDMyMy43ODdMNTc5LjQ4OCAyNzYuNzc2VjIwMC4yMjFaTTU3OS40ODggMzIzLjc4N0w3MTUuMDA5IDM2OS4xMDJMNzMzLjU5OCA0NDcuMzUzTDU3OS40ODggNDAwLjM0MlYzMjMuNzg3Wk01NzkuNDg4IDQ0Ny4yNTRMNzMzLjU5OCA0OTQuMjY1TDc1My4zMTEgNTg1Ljk5Mkw1NzkuNDg4IDUzMi40OTNWNDQ3LjI1NFpNNTc5LjQ4OCA1NzAuOTJMNzU4LjI2OSA2MjcuNTEzTDc3Ny41MzIgNzEzLjA1TDU3OS40ODggNjU0LjA2M1Y1NzAuOTJaTTU3OS40ODggNjk0LjQ4Nkw3NzcuNTMyIDc1OC4wNjVMNzk5LjcyNCA4MzcuOTE1TDU3OS40ODggNzc5LjQyNVY2OTQuNDg2WiIgZmlsbD0iI0VBQUMwOCIvPg0KPHBhdGggZD0iTTE1My4yMDggMjE1Ljg5MUw5MC4zNDc3IDkzNi40MjhIMjA4LjE4M0wyMjQuNDA1IDg0Ny41OTZMMTE1LjY5NSA4MjIuMzQ0TDExOS42MzggNzgxLjQyMkwyMzEuMDUyIDgxMS42NjVMMjM2LjIzNCA3ODMuNDE4TDEyMS42NjUgNzUzLjk3M0wxMjUuNjA4IDcxMy4wNUwyNDIuNzY4IDc0Ny44ODVMMjQ3Ljk1IDcxOS4yMzlMMTI2Ljg0NyA2ODcuNzk4TDEzMC43OSA2NDYuODc2TDI1NC40ODQgNjg0LjEwNkwyNTkuNzc4IDY1NS4wNjFMMTMzLjQ5NCA2MjAuNTI2TDEzNy40MzcgNTc5LjYwNEwyNjYuMTk4IDYyMC4yMjZMMjcxLjYwNiA1OTAuNzgyTDEzNy40MzcgNTUzLjE1M0wxNDEuMzggNTEyLjIzMUwyNzQuODc0IDU1NS4zNDlWNTcyLjgxN0wzMDAuNDQ1IDQzMy40OFYyNzEuNTg1TDE1My4yMDggMjE1Ljg5MVpNMjc3LjkxNSA1MjQuODA3TDE0Ni4zMzYgNDgyLjk4NkwxNTAuMjc5IDQ0Mi4wNjRMMjc3LjkxNSA0ODguMTc2VjUyNC44MDdaTTI4MC44NDQgNDU3LjczNEwxNTIuODcgNDE3LjAxMUwxNTYuODEzIDM3Ni4wODhMMjgwLjg0NCA0MjEuMTAzVjQ1Ny43MzRaTTI4My44ODUgMzkwLjc2MUwxNjAuMDggMzUxLjYzNEwxNjQuMDIzIDMxMC43MTJMMjgzLjg4NSAzNTQuMjI5VjM5MC43NjFaTTI4Ni44MTQgMzIzLjc4N0wxNjMuMDA5IDI4NC42NjFMMTY2Ljk1MiAyNDMuNzM4TDI4Ni44MTQgMjg3LjI1NlYzMjMuNzg3WiIgZmlsbD0iI0VBQUMwOCIvPg0KPHBhdGggZD0iTTk5Ny44ODIgMzE4LjQ5OEw4NTAuNTMgMzcwLjdMODI0Ljk1OSA2NTIuNjY2TDgzOC43MDIgNzEyLjY1MUwxMDAyLjg0IDY3Ni43MkwxMDA1Ljc3IDcyNC4xM0w4NDguMTY2IDc1NC4wNzRMODU0LjgxMiA3ODMuMzE4TDEwMDcuNjggNzU2LjM3TDEwMTIuNDEgODA3LjQ3Mkw4NjQuNSA4MjUuODM5TDg4OS44NDcgOTM2LjQyOUgxMDM1LjI4TDk5Ny44ODIgMzE4LjQ5OFpNODYzLjcxMSAzOTkuMDQ2TDk4NC40NzUgMzU5LjcyTDk4Ni42MTYgNDA0LjYzNEw4NjAuNDQ0IDQzOC4zNzFMODYzLjcxMSAzOTkuMDQ2Wk04NTcuMTc3IDQ2MS44MjdMOTkwLjY3MSA0MjUuMTk3TDk5My4yNjIgNDY1LjUyTDg1My43OTggNTAxLjE1M0w4NTcuMTc3IDQ2MS44MjdaTTg1MC41MyA1MjQuNTA4TDk5My4yNjIgNDg1LjE4Mkw5OTUuNDAzIDUyNy44MDNMODQ3LjI2MyA1NjMuODMzTDg1MC41MyA1MjQuNTA4Wk04NDMuOTk2IDU4Ny4yODlMOTk3LjU0NCA1NDcuOTY0TDk5OS4zNDYgNTkxLjI4Mkw4NDAuNzMxIDYyNi42MTVMODQzLjk5NiA1ODcuMjg5Wk04MzQuMTk2IDY4OS4yOTdMODM3LjQ2NCA2NTAuMDcxTDk5OS40NTggNjEwLjc0NUwxMDAyLjk1IDY1Mi4xNjdMODM0LjE5NiA2ODkuMjk3WiIgZmlsbD0iI0VBQUMwOCIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4NCjxyZWN0IHdpZHRoPSIxMTA0IiBoZWlnaHQ9Ijk1MCIgZmlsbD0id2hpdGUiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},214:function(e,t,a){"use strict";a(215)("fixed",function(e){return function(){return e(this,"tt","","")}})},215:function(e,t,a){var i=a(6),r=a(9),n=a(38),s=/"/g,c=function(e,t,a,i){var r=String(n(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=2-0c5c0c4ec651ac4abf61.js.map