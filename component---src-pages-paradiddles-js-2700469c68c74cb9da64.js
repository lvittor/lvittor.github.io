(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4rmH":function(e){e.exports=JSON.parse('[{"date":"2019-11-19","bpm":160},{"date":"2019-11-20","bpm":155},{"date":"2019-11-21","bpm":165},{"date":"2019-11-23","bpm":170},{"date":"2019-11-24","bpm":175}]')},"7ka9":function(e,a,t){},Cy6f:function(e){e.exports=JSON.parse('[{"date":"2019-11-19","bpm":145},{"date":"2019-11-20","bpm":160},{"date":"2019-11-21","bpm":160},{"date":"2019-11-23","bpm":175},{"date":"2019-11-24","bpm":175}]')},DgSJ:function(e,a,t){},FtUV:function(e,a,t){},MN44:function(e,a,t){},PBfk:function(e,a,t){},RR1u:function(e){e.exports=JSON.parse('[{"date":"2019-11-19","bpm":150},{"date":"2019-11-20","bpm":150},{"date":"2019-11-21","bpm":160},{"date":"2019-11-23","bpm":165},{"date":"2019-11-24","bpm":165}]')},dNhx:function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),n=t.n(i),s=t("VphZ"),r=t("uSmJ"),c=t("TqfF"),o=t("okzv"),l=t("TSYQ"),d=t.n(l),m=t("dbrF"),u=t("k1TG"),b=t("8o2o"),_=(t("7ka9"),t("qKvR")),p=Object(i.createContext)(),f=function(e){var a=e.hasNoListener,t=e.dimensions,i=e.children,n=e.onMouseMove,s=e.onMouseEnter,r=e.onMouseLeave;return Object(_.a)(p.Provider,{value:t},Object(_.a)("svg",{className:"Chart",width:t.width,height:t.height},Object(_.a)("g",{transform:"translate("+t.marginLeft+", "+t.marginTop+")"},i),!a&&Object(_.a)("rect",{className:"Chart__listener",x:t.marginLeft,y:t.marginTop,height:t.boundedHeight,width:t.boundedWidth,onMouseMove:n,onMouseLeave:r,onMouseEnter:s})))};f.defaultProps={dimensions:{}};var v=f,O={x:function(e){var a=e.dimensions,t=e.label,i=e.formatTick,n=e.scale,s=Object(b.a)(e,["dimensions","label","formatTick","scale"]),r=n.ticks(7);return Object(_.a)("g",Object(u.a)({className:"Axis AxisHorizontal",transform:"translate(0, "+a.boundedHeight+")"},s),Object(_.a)("line",{className:"Axis__line",x2:a.boundedWidth}),r.map((function(e,a){return Object(_.a)("text",{key:e,className:"Axis__tick",transform:"translate("+n(e)+", 25)"},i(e))})),t&&Object(_.a)("text",{className:"Axis__label",transform:"translate("+a.boundedWidth/2+", 60)"},t))},y:function(e){var a=e.dimensions,t=e.label,i=e.formatTick,n=e.scale,s=Object(b.a)(e,["dimensions","label","formatTick","scale"]),r=a.boundedHeight/70,c=n.ticks(r);return Object(_.a)("g",Object(u.a)({className:"Axis AxisVertical"},s),Object(_.a)("line",{className:"Axis__line",y2:a.boundedHeight}),c.map((function(e,a){return Object(_.a)("text",{key:e,className:"Axis__tick",transform:"translate(-26, "+n(e)+")"},i(e))})),t&&Object(_.a)("text",{className:"Axis__label",style:{transform:"translate(-56px, "+a.boundedHeight/2+"px) rotate(-90deg)"}},t))}},j=function(e){var a=e.dimension,t=Object(b.a)(e,["dimension"]),n=Object(i.useContext)(p),s=O[a];return s?Object(_.a)(s,Object(u.a)({dimensions:n},t)):null};j.defaultProps={dimension:"x",scale:null,formatTick:s.format(",")};var h=j;var x=function(e){var a=e.className,t=e.type,i=e.data,n=e.xAccessor,r=e.yAccessor,c=e.y0Accessor,o=(e.interpolation,Object(b.a)(e,["className","type","data","xAccessor","yAccessor","y0Accessor","interpolation"])),l=s[t]().x(n).y(r);return"area"===t&&l.y0(c).y1(r),Object(_.a)("path",Object(u.a)({},o,{className:d()("Line Line--type-"+t,a),d:l(i)}))};x.defaultProps={type:"line",y0Accessor:0,interpolation:s.curveMonotoneX};var g=x,N=(t("MN44"),s.timeFormat("%A")),y=function(e){var a=e.data,t=e.xAccessor,r=e.yAccessor,c=e.label,o=e.className,l=e.selectedExercise,u=Object(m.c)(),b=u[0],p=u[1],f=Object(i.useState)(!1),O=f[0],j=f[1],x=Object(i.useState)(),y=x[0],T=x[1],A=Object(i.useState)(),w=A[0],L=A[1],E=s.scaleTime().domain(s.extent(a[0],t)).range([0,p.boundedWidth]),S=s.scaleLinear().domain([120,180]).range([p.boundedHeight,0]),M=function(e){return E(t(e))},H=function(e){return S(r(e))};return Object(_.a)("div",{className:d()("Timeline",o),ref:b},w&&Object(_.a)(k,{currentHoveredData:y,currentHoveredCircleCoords:w,dimensions:p,selectedExercise:l}),Object(_.a)(v,{dimensions:p,onMouseMove:function(e){for(var i=e.clientX-e.currentTarget.getBoundingClientRect().x,n=(e.clientY,e.currentTarget.getBoundingClientRect().y,E.invert(i)),c=function(e){return Math.abs(t(e)-n)},o=s.scan(a[0],(function(e,a){return c(e)-c(a)})),l=[],d=0;d<a.length;d++)l.push(a[d][o]);for(var m=[],u=[],b=0;b<l.length;b++){var _=t(l[b]),p=r(l[b]);u.push([_,p]),m.push([E(_),S(p)])}j(!0),T(u),L(m)},onMouseEnter:function(e){},onMouseLeave:function(e){j(!1),T(),L()}},Object(_.a)(h,{dimension:"x",scale:E,formatTick:N}),Object(_.a)(h,{dimension:"y",scale:S,label:c}),O&&Object(_.a)(n.a.Fragment,null,Object(_.a)("rect",{className:"Timeline__hover-line Timeline__hover-line--vertical",width:"1",x:w[0][0],y:0,height:p.boundedHeight,style:{opacity:O?1:0}})),a.map((function(e,a){return Object(_.a)(g,{className:d()("Line--exercise-"+a,{"Line--isDimmed":l<5&&l>0&&l!==a+1}),key:a,data:e,xAccessor:M,yAccessor:H})})),O&&Object(_.a)(n.a.Fragment,null,a.map((function(e,a){return Object(_.a)(C,{className:d()("Circle Circle--exercise-"+a,{"Circle--isDimmed":l<5&&l>0&&l!==a+1}),key:a,cx:w[a][0],cy:w[a][1],style:{opacity:O?1:0}})})))))},C=function(e){var a=e.className,t=e.cx,i=e.cy,n=e.style;return Object(_.a)("circle",{className:d()("Circle",a),r:5,fill:"red",cx:t,cy:i,style:n})},k=function(e){var a=e.currentHoveredCircleCoords,t=e.currentHoveredData,i=e.dimensions,n=e.selectedExercise,s=["A","B","C","D"],r=N(t[0][0]),c=a[0][0]+i.marginLeft,o=i.marginTop;return Object(_.a)("div",{className:"Tooltip__container",style:{opacity:1,left:c+"px",top:o+"px"}},Object(_.a)("div",{className:"Tooltip"},Object(_.a)("div",{className:"Tooltip__date"},r),Object(_.a)("div",{className:"Tooltip__variations"},t.map((function(e,a){return Object(_.a)("div",{className:d()("Tooltip__variation","Tooltip__variation-"+[a],{"Tooltip__variation--isDimmed":n<5&&n>0&&n!==a+1}),key:a},Object(_.a)("span",{className:"Tooltip__variation__dot"}),Object(_.a)("div",{className:"Tooltip__variation__name"},"Variation ",s[a]),Object(_.a)("span",{className:"Tooltip__variation__change"}),Object(_.a)("span",{className:"Tooltip__variation__bpm"},e[1]," bpm"))})))))},T=(t("m1Qc"),function(e){var a=e.variations,t=e.selectedExercise,i=a[t-1];return Object(_.a)("div",{className:"Staff__container"},a[0].map((function(e,a){return Object(_.a)("div",{className:"Staff__highHats__note",key:a},w)})),a[0].map((function(e,a){return Object(_.a)(A,{key:a,variationNote:t?i[a]:""})})))}),A=function(e){var a=e.variationNote;return Object(_.a)("div",{className:"Staff__noteCol"},Object(_.a)("div",{className:d()("Staff__noteCol__note Staff__noteCol__note--snare",{"Staff__noteCol__note--isActive":"l"===a})},L),Object(_.a)("div",{className:d()("Staff__noteCol__note Staff__noteCol__note--bass",{"Staff__noteCol__note--isActive":"r"===a})},L))},w=Object(_.a)("svg",{width:"10",height:"32",viewBox:"0 0 10 32",fill:"none"},Object(_.a)("path",{d:"M9.63896 23.1039V0.0205078H8.70702V22.172L4.97927 25.8997L1.28736 22.172L0.31958 23.1039L4.04733 26.8316L0.31958 30.5594L1.28736 31.4555L4.97927 27.7636L8.70702 31.4555L9.63896 30.5594L5.91121 26.8316L9.63896 23.1039Z"})),L=Object(_.a)("svg",{width:"10",height:"33",viewBox:"0 0 10 33",fill:"none"},Object(_.a)("path",{d:"M9.74211 26.9949C9.74211 27.7986 9.44257 28.6315 8.84348 29.4936C8.21518 30.3118 7.40422 30.9474 6.41062 31.4004C5.43163 31.8388 4.47455 32.0579 3.5394 32.0579C2.70652 32.0579 1.96132 31.8168 1.30379 31.3346C0.675482 30.8525 0.361328 30.2095 0.361328 29.4059C0.361328 28.5438 0.675482 27.7036 1.30379 26.8854C1.59603 26.5639 1.95402 26.2351 2.37776 25.8991C2.8015 25.5484 3.26908 25.205 3.78049 24.8689C4.32113 24.6351 4.81062 24.4671 5.24898 24.3648C5.70194 24.2625 6.1403 24.2114 6.56404 24.2114C7.45536 24.2114 8.2444 24.4598 8.93115 24.9566V0.62793H9.74211V26.9949Z"})),E=(t("DgSJ"),function(e){var a=e.variations,t=e.handleVariationChange,i=e.selectedExercise,n=["A","B","C","D"];return Object(_.a)("div",{className:"Exercises"},Object(_.a)("div",{className:"Exercises__staff"},Object(_.a)(T,{variations:a,selectedExercise:i}),Object(_.a)("div",{className:"Exercises__count"},["1","+","2","+","3","+","4","+"].map((function(e,a){return Object(_.a)("span",{className:"Exercises__count__item",key:a},e)})))),Object(_.a)("div",{className:"Exercises__variations"},a.map((function(e,s){return Object(_.a)("div",{className:d()("Exercises__variation Exercises__variation--"+(s+1),{"Exercises__variation--isActive":i===s+1}),key:s,onClick:function(){return t(i===s+1?"":s+1)}},Object(_.a)("div",{className:"Exercises__variation__title"},Object(_.a)("div",{className:"Exercises__variation__dot"})," Variation ",n[s]),a[s].map((function(e,a){return Object(_.a)("span",{key:a,className:"Exercises__variation__step"},e)})))}))))}),S=t("zsIr"),M=(t("FtUV"),t("Cy6f")),H=t("RR1u"),P=t("4rmH"),V=t("xX9t"),D=s.timeParse("%Y-%m-%d"),F=function(e){return D(e.date)},J=function(e){return e.bpm},B=["r","l","r","r","l","r","l","l"],R=["r","l","l","r","l","r","r","l"],I=["r","r","l","r","l","l","r","l"],z=["r","l","r","l","l","r","l","r"],W=function(){var e=[M,H,P,V],a=[B,R,I,z],t=Object(i.useState)(null),n=t[0],s=t[1];return Object(_.a)("div",{className:"ParadiddleContainer"},Object(_.a)(y,{data:e,xAccessor:F,yAccessor:J,label:"BPM",className:"ParadiddleContainer__timeline",selectedExercise:n}),Object(_.a)("div",{className:"ParadiddleContainer__content"},Object(_.a)("h1",null,"7 Days of Paradiddle Variations 🥁"),Object(_.a)("div",null,"With quarter note high hat pulse"),Object(_.a)(E,{handleVariationChange:function(e){s(e)},variations:a,selectedExercise:n})),Object(_.a)("p",{className:"ParadiddleContainer__description"},"For a week in November I practiced a set of paradiddle drumming variations I was assigned. Not sure which was more fun (work?)—practicing at the kit or developing this chart in ",Object(_.a)(S.a,{doOpenInNewTab:!0,to:"https://codepen.io/marguerite/pen/GRgoxxv"},"vanilla JS + d3")," then ",Object(_.a)(S.a,{doOpenInNewTab:!0,to:"https://github.com/margueriteroth/rosie/tree/master/src/components/Paradiddle"},"React")," 🤔."))};t("PBfk"),a.default=function(){return Object(_.a)(n.a.Fragment,null,Object(_.a)(r.a,{className:"Paradiddles__layout",showFooter:!0},Object(_.a)(o.a,{title:"Paradiddles Data Visualization",image:"https://marguerite.io/og-image-paradiddles.png",twitterImage:"https://marguerite.io/twitter-image-paradiddles.png"}),Object(_.a)(c.a,{size:"l",className:"Paradiddles"},Object(_.a)(W,null))))}},m1Qc:function(e,a,t){},xX9t:function(e){e.exports=JSON.parse('[{"date":"2019-11-19","bpm":140},{"date":"2019-11-20","bpm":150},{"date":"2019-11-21","bpm":155},{"date":"2019-11-23","bpm":165},{"date":"2019-11-24","bpm":165}]')}}]);
//# sourceMappingURL=component---src-pages-paradiddles-js-2700469c68c74cb9da64.js.map