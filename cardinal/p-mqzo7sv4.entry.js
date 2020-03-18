import{r as t,h as e,g as s}from"./p-9835b40a.js";import{l as i,s as n,c as o}from"./p-869e3fb2.js";import{T as c}from"./p-61f24b9e.js";import{C as r}from"./p-ec895615.js";function l(){let t=this.element,e=Array.from(this.element.querySelectorAll("psk-chapter"));this.activeChapter=null;const s=t.scrollTop,n=t.offsetHeight;let o=function(t){let e=[];return t.forEach(t=>{const s=t.getAttribute("guid");if(!s)return null;const n=t.getElementsByClassName("card psk-card")?t.getElementsByClassName("card psk-card")[0]:null;if(!n)return null;const o=function(t,e){let s=t.offsetTop;const n=t.offsetHeight;let o=e[e.length-1]?e[e.length-1]:null;if(o){let{verticalOffset:c,height:r}=o;if(c>s||c+r>s+n){const n=i(t,"psk-chapter",2),o=e.find(t=>n&&t.guid===n.getAttribute("guid"));o&&(s+=o.verticalOffset)}}return s}(n,e);e.push({guid:s,height:n.offsetHeight,verticalOffset:o,title:t.title})}),e}(e);h.call(this,o,s,n)}function h(t,e,s){let i=t.find(t=>e<=t.verticalOffset&&t.verticalOffset+t.height<=e+s);if(i)return void(this.activeChapter=i.guid);let n=t.filter(t=>e>=t.verticalOffset&&(e+s<=t.verticalOffset+t.height||e<=t.verticalOffset+t.height));n.length>0?this.activeChapter=n[n.length-1].guid:t.length>0&&(this.activeChapter=t[0].guid)}var a=function(t,e,s,i){var n,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(c=(o<3?n(c):o>3?n(e,s,c):n(e,s))||c);return o>3&&c&&Object.defineProperty(e,s,c),c};const p=class{constructor(e){t(this,e),this.hasToc=!1,this.activeChapter=null,this.chapters=[],this.navClass="",this.title="",this.componentFullyLoaded=!1,this.__handleScrollEvent=t=>{let e=this;t.preventDefault(),t.stopImmediatePropagation(),clearTimeout(this.__isScrolling),this.__isScrolling=setTimeout((function(){l.call(e)}),100)}}render(){this.hasToc&&this._sendTableOfContentChapters();const t=e("div",{class:"toc"},e("slot",{name:"toc"}));return e("div",{class:"main-container"},e("nav",{class:this.navClass},e("h3",null,this.title)),e("div",{class:"page-content"},this.componentFullyLoaded&&this.hasToc&&t,e("div",{class:"container"},this.componentFullyLoaded?e("div",{class:"container-content"},e("slot",null)):e("psk-ui-loader",{shouldBeRendered:!0}))))}receiveChapters(t){if(t.stopImmediatePropagation(),!t.detail)return;const e=Object.assign({},t.detail),s=this.chapters.findIndex(t=>e.guid===t.guid),i=[...this.chapters];if(-1===s)return i.push(Object.assign({},e)),void(this.chapters=JSON.parse(JSON.stringify(i)));i[s]=Object.assign({},e),this.chapters=JSON.parse(JSON.stringify(i))}_checkForChapterScrolling(){if(-1===window.location.href.indexOf("chapter="))return;const t=window.location.href.split("chapter=")[1];setTimeout(()=>{n(t,this.element)},50)}_sendTableOfContentChapters(){o("psk-send-toc",{bubbles:!0,composed:!0,cancelable:!0,detail:{chapters:this.chapters,active:this.activeChapter}},!0)}connectedCallback(){null!==this.element.querySelector("psk-toc")&&(this.element.querySelector("psk-toc").setAttribute("slot","toc"),this.hasToc=!0)}componentDidLoad(){this.componentFullyLoaded=!0,this._checkForChapterScrolling(),this.element.addEventListener("scroll",this.__handleScrollEvent,!0)}disconnectedCallback(){this.element.removeEventListener("scroll",this.__handleScrollEvent,!0)}get element(){return s(this)}};a([r()],p.prototype,"hasToc",void 0),a([c({description:"This property will be used as the title for the page.",isMandatory:!1,propertyType:"string"})],p.prototype,"title",void 0),a([c({description:"This property is the name of the table of content.",isMandatory:!1,propertyType:"string"})],p.prototype,"tocTitle",void 0);export{p as psk_page};