(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+Oou":function(e,t,n){},FyPc:function(e,t,n){var o=n("dunj"),i=n("V9xz"),a=n("ut/Y");e.exports=function(e,t){return e&&e.length?o(e,a(t,2),i):void 0}},Km7g:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=n("uSmJ"),r=n("9Hrx"),s=n("zsIr"),c=n("TSYQ"),u=n.n(c),l=n("0b+E"),p=n("kJAl"),f=n.n(p),d=(n("O3Zb"),n("qKvR")),h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).onMouseOver=function(){t.props.setCurrentPet(t.props.pet)},t.onMouseLeave=function(){t.props.emptyCurrentPet()},t}Object(r.a)(t,e);var n=t.prototype;return n.getClassName=function(){var e=this.props.className;return u()(e,"DvsIcon__container")},n.render=function(){return Object(d.a)("div",{className:this.getClassName()},Object(d.a)("img",{src:f.a,alt:"Data Visualization Society unique member icon",className:"DvsIcon"}))},t}(o.Component),m=n("uRdJ"),v=n("sEfC"),b=n.n(v),g=n("mROD"),y=n("w18J"),O=n("FyPc"),_=n.n(O),w=n("LZ5Q"),j=n("vHEj"),S=function(e){return e},D=function(e){if(null==e)return S;var t,n,o=e.scale[0],i=e.scale[1],a=e.translate[0],r=e.translate[1];return function(e,s){s||(t=n=0);var c=2,u=e.length,l=new Array(u);for(l[0]=(t+=e[0])*o+a,l[1]=(n+=e[1])*i+r;c<u;)l[c]=e[c],++c;return l}};function k(e,t){var n=t.id,o=t.bbox,i=null==t.properties?{}:t.properties,a=M(e,t);return null==n&&null==o?{type:"Feature",properties:i,geometry:a}:null==o?{type:"Feature",id:n,properties:i,geometry:a}:{type:"Feature",id:n,bbox:o,properties:i,geometry:a}}function M(e,t){var n=D(e.transform),o=e.arcs;function i(e,t){t.length&&t.pop();for(var i=o[e<0?~e:e],a=0,r=i.length;a<r;++a)t.push(n(i[a],a));e<0&&function(e,t){for(var n,o=e.length,i=o-t;i<--o;)n=e[i],e[i++]=e[o],e[o]=n}(t,r)}function a(e){return n(e)}function r(e){for(var t=[],n=0,o=e.length;n<o;++n)i(e[n],t);return t.length<2&&t.push(t[0]),t}function s(e){for(var t=r(e);t.length<4;)t.push(t[0]);return t}function c(e){return e.map(s)}return function e(t){var n,o=t.type;switch(o){case"GeometryCollection":return{type:o,geometries:t.geometries.map(e)};case"Point":n=a(t.coordinates);break;case"MultiPoint":n=t.coordinates.map(a);break;case"LineString":n=r(t.arcs);break;case"MultiLineString":n=t.arcs.map(r);break;case"Polygon":n=c(t.arcs);break;case"MultiPolygon":n=t.arcs.map(c);break;default:return null}return{type:o,coordinates:n}}(t)}n("ZoSx");var V=function(e){function t(){var t;return(t=e.call(this)||this).setSkill=function(e){return e.map((function(e){var t=[{name:"data",value:e.data},{name:"visualization",value:e.visualization},{name:"society",value:e.society}],n=_()(t,"value");return e.skill=n.name})),e},t.state={worldData:[],data:[]},t.user=i.a.createRef(),t}Object(r.a)(t,e);var n=t.prototype;return n.projection=function(){return Object(w.a)().scale(100).translate([500,275])},n.setUser=function(){var e=this.user.getBoundingClientRect().y,t=this.user.getBoundingClientRect().x;this.props.setUserOffsets(e,t)},n.componentDidMount=function(){var e=this;fetch("https://unpkg.com/world-atlas@1.1.4/world/110m.json").then((function(t){200===t.status?t.json().then((function(t){var n,o;e.setState({worldData:(n=t,o=t.objects.countries,"string"==typeof o&&(o=n.objects[o]),"GeometryCollection"===o.type?{type:"FeatureCollection",features:o.geometries.map((function(e){return k(n,e)}))}:k(n,o)).features,data:e.setSkill(e.props.dsvData)}),e.props.setLoading(),e.setUser()})):console.log("There was a problem: "+t.status)}))},n.componentDidUpdate=function(e,t){null!==e.containerWidth&&e.containerWidth!==this.props.containerWidth&&this.setUser()},n.determineStrengthHex=function(e){return"data"===e?"#29B6A8":"visualization"===e?"#F4AE05":"#9769F8"},n.render=function(){var e=this,t=this.props,n=t.containerWidth,o=t.showMap,a=t.showData,r=t.showViz,s=t.showSociety,c=t.isLoaded;return Object(d.a)("div",{className:"DVSMap"},Object(d.a)(i.a.Fragment,null,Object(d.a)("svg",{width:n,viewBox:"0 0 900 400"},Object(d.a)("g",{className:"countries"},this.state.worldData.map((function(t,n){return Object(d.a)("path",{key:"path-"+n,d:Object(j.a)().projection(e.projection())(t),className:"country",fill:"#F7F5F9",stroke:"#FFFFFF",strokeWidth:1,fillOpacity:o?1:0,strokeOpacity:o?1:0})}))),Object(d.a)("g",{className:"markers"},this.state.data.map((function(t,n){return"data"===t.skill?Object(d.a)("circle",{key:"marker-"+n,cx:e.projection()([t.long,t.lat])[0],cy:e.projection()([t.long,t.lat])[1],r:2.4,fill:e.determineStrengthHex(t.skill),className:"DVSMap__marker",onMouseEnter:function(o){return e.onMouseEnter(t,n)},onMouseLeave:function(t){return e.onMouseLeave(null)},fillOpacity:a?1:0}):"visualization"===t.skill?Object(d.a)("circle",{key:"marker-"+n,cx:e.projection()([t.long,t.lat])[0],cy:e.projection()([t.long,t.lat])[1],r:2.4,fill:e.determineStrengthHex(t.skill),className:"DVSMap__marker",onMouseEnter:function(o){return e.onMouseEnter(t,n)},onMouseLeave:function(t){return e.onMouseLeave(null)},fillOpacity:r?1:0}):"society"===t.skill&&Object(d.a)("circle",{key:"marker-"+n,cx:e.projection()([t.long,t.lat])[0],cy:e.projection()([t.long,t.lat])[1],r:2.4,fill:e.determineStrengthHex(t.skill),className:"DVSMap__marker",onMouseEnter:function(o){return e.onMouseEnter(t,n)},onMouseLeave:function(t){return e.onMouseLeave(null)},fillOpacity:s?1:0})}))),c&&Object(d.a)("g",null,Object(d.a)("circle",{ref:function(t){e.user=t},cx:this.projection()([this.props.userCoords.longitude,this.props.userCoords.latitude])[0],cy:this.projection()([this.props.userCoords.longitude,this.props.userCoords.latitude])[1],r:3,fill:"#FFCF5C",fillOpacity:0,className:"DVSMap__marker DVSMap__marker--user"})))))},t}(o.Component),C=n("yLQo"),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).setUserOffsets=function(e,t){e-=12,t-=10,n.setState({userTop:e,userLeft:t})},n.setLoading=function(){n.setState({isLoaded:!0})},n.state={containerWidth:null,isLoaded:!1,userTop:null,userLeft:null},n.chartContainer=i.a.createRef(),n.fitParentContainer=n.fitParentContainer.bind(Object(m.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.setInitialFit=function(){setTimeout(function(){this.fitParentContainer()}.bind(this),10)},n.componentDidMount=function(){this.setInitialFit(),window.addEventListener("resize",b()(this.fitParentContainer,1e3))},n.componentWillUnmount=function(){window.removeEventListener("resize",b()(this.fitParentContainer,1e3))},n.fitParentContainer=function(){var e=this.state,t=e.containerHeight,n=e.containerWidth,o=this.chartContainer.current.getBoundingClientRect().width,i=this.chartContainer.current.getBoundingClientRect().height;(n!==o||t!==i)&&this.setState({containerWidth:o,containerHeight:i})},n.render=function(){var e=this.state,t=e.containerHeight,n=e.containerWidth,o=e.isLoaded,a=e.userTop,r=e.userLeft,s=this.props,c=s.showData,u=s.showViz,l=s.showSociety,p=s.showMe,f=s.showMap;return Object(d.a)("div",{className:"DVSMapContainer",ref:this.chartContainer},this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?Object(d.a)(i.a.Fragment,null,p&&o&&Object(d.a)("div",{className:"DVSMap__marker--you",style:{top:a+"px",left:r+"px"}},Object(d.a)(g.a,null)),Object(d.a)(V,{containerWidth:n,containerHeight:t,dsvData:this.props.dsvData,setLoading:this.setLoading,userCoords:this.props.coords,setUserOffsets:this.setUserOffsets,isLoaded:o,showMap:f,showData:c,showViz:u,showSociety:l})):Object(d.a)(i.a.Fragment,null,Object(d.a)(g.a,{size:"xl",spin:!0,className:"DVSMap__spinner"}),Object(d.a)(y.a,null,"Loading")):Object(d.a)(y.a,null,"Geolocation is not enabled"):Object(d.a)(y.a,null,"Your browser does not support Geolocation"))},t}(o.Component),P=Object(C.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(E),N=n("uggX"),T=n.n(N),L=(n("+Oou"),[{name:"data",color:"#29B6A8"},{name:"visualization",color:"#F4AE05"},{name:"society",color:"#9769F8"}]),z=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleData=function(e){"data"===e?(n.trackEvent("DVS | toggled Data"),n.setState((function(e){return{showData:!e.showData}}))):"visualization"===e?(n.trackEvent("DVS | toggled Viz"),n.setState((function(e){return{showViz:!e.showViz}}))):"society"===e?(n.trackEvent("DVS | toggled Society"),n.setState((function(e){return{showSociety:!e.showSociety}}))):"map"===e?(n.trackEvent("DVS | toggled Map"),n.setState((function(e){return{showMap:!e.showMap}}))):(n.trackEvent("DVS | toggled Spooch"),n.setState((function(e){return{showMe:!e.showMe}})))},n.setUserOffsets=function(e,t){n.setState({userTopOffset:e,userLeftOffset:t})},n.trackEvent=function(e){l.a.event({category:"User",action:e})},n.state={userTopOffset:null,userLeftOffset:null,showData:!0,showViz:!0,showSociety:!0,showMe:!0,showMap:!0},n}Object(r.a)(t,e);var n=t.prototype;return n.initializeReactGA=function(){l.a.initialize("UA-130275221-1"),l.a.pageview("/dvs")},n.componentDidMount=function(){this.initializeReactGA(),console.log("initialize dvs")},n.render=function(){var e=this,t=this.state,n=t.showData,o=t.showViz,i=t.showSociety,a=t.showMe,r=t.showMap;return Object(d.a)("div",{className:"DVSPage SinglePage"},Object(d.a)("div",{className:"DVSContainer"},Object(d.a)("div",{className:"DVS__section DVS__section--info"},Object(d.a)("div",{className:"DVS__credential"},Object(d.a)("div",{className:"DVS__icon"},Object(d.a)(h,null)),Object(d.a)(s.a,{to:"/",className:"DVS__link"},Object(d.a)(y.a,{category:"primary"},"← Marguerite.io"))),Object(d.a)("h1",null,"Data Visualization Society"),Object(d.a)("p",null,"This map shows the locations of ",Object(d.a)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.datavisualizationsociety.com/"},"DVS")," sign-ups between February 20, 2019 and March 9, 2019."),Object(d.a)("div",{className:"DVS__InfoKey"},Object(d.a)("p",null,"Each member was asked to rank their skills in the following categories: ",Object(d.a)("strong",null,"data"),", ",Object(d.a)("strong",null,"visualization"),", and ",Object(d.a)("strong",null,"society"),". The color represents the member's highest ranked skill."),Object(d.a)("div",{className:"DVS__key__container"},L.map((function(t,a){return Object(d.a)("div",{key:a,className:u()("DVS__key",{"DVS__key--inactive":"data"===t.name?!n:"visualization"===t.name?!o:!i}),onClick:function(){return e.toggleData(t.name)}},Object(d.a)("span",{className:"DVS__key__color",style:{background:t.color}}),Object(d.a)("span",{className:"DVS__key__color",style:{background:t.color}}),Object(d.a)(y.a,{className:"DVS__key__label"},t.name))})),Object(d.a)("div",{className:u()("DVS__key",{"DVS__key--inactive":!r}),onClick:function(){return e.toggleData("map")}},Object(d.a)("span",{className:"DVS__key__color DVS__key__color--map"}),Object(d.a)(y.a,{className:"DVS__key__label"},"Map")),Object(d.a)("div",{className:u()("DVS__key",{"DVS__key--inactive":!a}),onClick:function(){return e.toggleData("me")}},Object(d.a)(g.a,{className:"DVS__key__spooch"}),Object(d.a)(y.a,{className:"DVS__key__label"},"You"))))),Object(d.a)("div",{className:"DVS__section DVS__section--map"},Object(d.a)(P,{setUserOffsets:this.setUserOffsets,dsvData:T.a,setLoading:this.setLoading,showMap:r,showMe:a,showData:n,showViz:o,showSociety:i}))))},t}(o.Component),x=n("okzv");t.default=function(){return Object(d.a)(a.a,{className:"DVS__layout"},Object(d.a)(x.a,{title:"Data Visualization Society: Challenge #1"}),Object(d.a)(z,null))}},O3Zb:function(e,t,n){},QIyF:function(e,t,n){var o=n("Kz5y");e.exports=function(){return o.Date.now()}},V9xz:function(e,t){e.exports=function(e,t){return e>t}},ZoSx:function(e,t,n){},dunj:function(e,t,n){var o=n("/9aa");e.exports=function(e,t,n){for(var i=-1,a=e.length;++i<a;){var r=e[i],s=t(r);if(null!=s&&(void 0===c?s==s&&!o(s):n(s,c)))var c=s,u=r}return u}},kJAl:function(e,t,n){e.exports=n.p+"static/dvs-icon-2321d5aeb2a5811da69e606602203ad5.png"},sEfC:function(e,t,n){var o=n("GoyQ"),i=n("QIyF"),a=n("tLB3"),r=Math.max,s=Math.min;e.exports=function(e,t,n){var c,u,l,p,f,d,h=0,m=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=c,o=u;return c=u=void 0,h=t,p=e.apply(o,n)}function y(e){return h=e,f=setTimeout(_,t),m?g(e):p}function O(e){var n=e-d;return void 0===d||n>=t||n<0||v&&e-h>=l}function _(){var e=i();if(O(e))return w(e);f=setTimeout(_,function(e){var n=t-(e-d);return v?s(n,l-(e-h)):n}(e))}function w(e){return f=void 0,b&&c?g(e):(c=u=void 0,p)}function j(){var e=i(),n=O(e);if(c=arguments,u=this,d=e,n){if(void 0===f)return y(d);if(v)return clearTimeout(f),f=setTimeout(_,t),g(d)}return void 0===f&&(f=setTimeout(_,t)),p}return t=a(t)||0,o(n)&&(m=!!n.leading,l=(v="maxWait"in n)?r(a(n.maxWait)||0,t):l,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==f&&clearTimeout(f),h=0,c=d=u=f=void 0},j.flush=function(){return void 0===f?p:w(i())},j}},uRdJ:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},yLQo:function(e,t,n){"use strict";var o,i=n("zgO2"),a=(o=i)&&o.__esModule?o:{default:o};e.exports={geolocated:a.default,geoPropTypes:i.geoPropTypes}},zgO2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.geoPropTypes=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),r=c(a),s=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e){return"Geolocated("+(e.displayName||e.name||"Component")+")"}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.positionOptions,n=void 0===t?{enableHighAccuracy:!0,maximumAge:0,timeout:1/0}:t,c=e.isOptimisticGeolocationEnabled,d=void 0===c||c,h=e.userDecisionTimeout,m=void 0===h?null:h,v=e.suppressLocationOnMount,b=void 0!==v&&v,g=e.watchPosition,y=void 0!==g&&g,O=e.geolocationProvider,_=void 0===O?"undefined"!=typeof navigator&&navigator.geolocation:O;return function(e){var t=function(t){function a(e){u(this,a);var t=l(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={coords:null,isGeolocationAvailable:Boolean(_),isGeolocationEnabled:d,positionError:null},t.isCurrentlyMounted=!1,t.onPositionError=t.onPositionError.bind(t),t.onPositionSuccess=t.onPositionSuccess.bind(t),t.cancelUserDecisionTimeout=t.cancelUserDecisionTimeout.bind(t),t.getLocation=t.getLocation.bind(t),t}return p(a,t),i(a,[{key:"cancelUserDecisionTimeout",value:function(){this.userDecisionTimeoutId&&clearTimeout(this.userDecisionTimeoutId)}},{key:"onPositionError",value:function(e){this.cancelUserDecisionTimeout(),this.isCurrentlyMounted&&this.setState({coords:null,isGeolocationAvailable:this.state.isGeolocationAvailable,isGeolocationEnabled:!1,positionError:e}),this.props.onError&&this.props.onError(e)}},{key:"onPositionSuccess",value:function(e){this.cancelUserDecisionTimeout(),this.isCurrentlyMounted&&this.setState({coords:e.coords,isGeolocationAvailable:this.state.isGeolocationAvailable,isGeolocationEnabled:!0,positionError:null}),this.props.onSuccess&&this.props.onSuccess(e)}},{key:"getLocation",value:function(){var e=this;if(!_||!_.getCurrentPosition||!_.watchPosition)throw new Error("The provided geolocation provider is invalid");var t=(y?_.watchPosition:_.getCurrentPosition).bind(_);m&&(this.userDecisionTimeoutId=setTimeout((function(){e.onPositionError()}),m)),this.watchId=t(this.onPositionSuccess,this.onPositionError,n)}},{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,b||this.getLocation()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.cancelUserDecisionTimeout(),y&&_.clearWatch(this.watchId)}},{key:"render",value:function(){return r.default.createElement(e,o({},this.state,this.props))}}]),a}(a.Component);return t.displayName=f(e),t.propTypes={onError:s.default.func,onSuccess:s.default.func},t}};t.geoPropTypes={coords:s.default.shape({latitude:s.default.number,longitude:s.default.number,altitude:s.default.number,accuracy:s.default.number,altitudeAccuracy:s.default.number,heading:s.default.number,speed:s.default.number}),isGeolocationAvailable:s.default.bool,isGeolocationEnabled:s.default.bool,positionError:s.default.shape({code:s.default.oneOf([1,2,3]),message:s.default.string}),watchPosition:s.default.bool}}}]);
//# sourceMappingURL=component---src-pages-dvs-js-997b9d0ff3ef7d4f629b.js.map