(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],[,,,,,,,function(e,t,c){e.exports=c(15)},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(6),s=c.n(a),i=c(1),o=c(2),u=c(4),l=c(3),d=(c(12),c(13),c(14),function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.product,c=e.addProducts,n=e.isActive;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:n?"list__item item--active":"list__item item--unactive",onClick:function(){c(t),n=!n}},t))}}]),c}(r.a.Component)),m=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.goods,c=e.isActive,n=e.counter,a=e.addProducts,s=e.removeProducts;return r.a.createElement("ul",{className:"App__list list"},t.map((function(e){return r.a.createElement(d,{product:e,addProducts:a,isActive:c})})),r.a.createElement("li",{className:"list__item item--reset",onClick:function(){return s()}},"reset"),r.a.createElement("li",{className:"list__item item--count"},n))}}]),c}(r.a.Component),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={selectedProducts:[],temp:"",isActive:!1},e.addProducts=function(t){var c=e.state.selectedProducts,n=c.indexOf(t);return c.includes(t)?(c.splice(n,1),e.setState({temp:c.join(", ")})):c.includes(t)?void 0:(c.push(t),e.setState({temp:c.join(", ")}))},e.removeProducts=function(){e.setState({selectedProducts:[],temp:"",isActive:!1})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state,t=e.selectedProducts,c=e.isActive;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App__title"},"Selected good: ",this.state.temp),r.a.createElement(m,{goods:p,isActive:c,addProducts:this.addProducts,removeProducts:this.removeProducts,counter:t.length}))}}]),c}(r.a.Component);s.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.0d83a336.chunk.js.map