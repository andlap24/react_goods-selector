(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],[,,,,,,,function(e,t,c){e.exports=c(15)},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),s=c(6),n=c.n(s),o=c(1),i=c(2),u=c(4),d=c(3),l=(c(12),c(13),c(14),function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.product,c=e.addProducts,r=e.displayProducts;return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",{className:r.includes(t)?"list__item item--active":"list__item item--unactive",onClick:function(){c(t)}},t))}}]),c}(a.a.Component)),p=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.goods,c=e.counter,r=e.addProducts,s=e.removeProducts,n=e.displayProducts;return a.a.createElement("ul",{className:"App__list list"},t.map((function(e){return a.a.createElement(l,{product:e,addProducts:r,displayProducts:n,key:e})})),a.a.createElement("li",{className:"list__item item--reset",onClick:function(){return s()}},"reset"),a.a.createElement("li",{className:"list__item item--count"},c))}}]),c}(a.a.Component),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={selectedProducts:[],displayProducts:"",isActive:!1},e.addProducts=function(t){var c=e.state.selectedProducts,r=c.indexOf(t);return c.includes(t)?(c.splice(r,1),e.setState({displayProducts:c.join(", ")})):c.includes(t)?void 0:(c.push(t),e.setState({displayProducts:c.join(", ")}))},e.removeProducts=function(){e.setState({selectedProducts:[],displayProducts:"",isActive:!1})},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.state,t=e.selectedProducts,c=e.displayProducts;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"App__title"},"Selected good: ",c),a.a.createElement(p,{goods:m,addProducts:this.addProducts,removeProducts:this.removeProducts,displayProducts:c,counter:t.length}))}}]),c}(a.a.Component);n.a.render(a.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.28bc2edf.chunk.js.map