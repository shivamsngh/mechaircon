/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{render(){return t("div",null,t("ma-navbar",null),t("main",null,t("stencil-router",null,t("stencil-route",{url:"/",component:"app-home",exact:!0}),t("stencil-route",{url:"/about",component:"ma-about"}),t("stencil-route",{url:"/services",component:"ma-services"}),t("stencil-route",{url:"/team",component:"ma-team"}),t("stencil-route",{url:"/clients",component:"ma-clients"}))),t("ma-footer",null))}static get is(){return"app-root"}static get style(){return"header{background:#5851ff;color:#fff;height:56px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}"}}class a{render(){return t("footer",{class:"footer is-paddingless has-background-dark has-text-light has-text-centered"},t("sub",null,"©All contents copyright of Mech Aircon Pvt. Ltd."))}static get is(){return"ma-footer"}static get style(){return""}}class s{componentDidLoad(){const t=Array.prototype.slice.call(this.elem.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(t=>{t.addEventListener("click",()=>{const e=t.attributes.getNamedItem("data-target").value,a=this.elem.querySelector(e);console.log("$target",a),t.classList.toggle("is-active"),a.classList.toggle("is-active")})})}render(){return t("div",null,t("nav",{class:"navbar is-transparent"},t("div",{class:"navbar-brand"},t("stencil-route-link",{class:"navbar-item ",url:"/"},t("a",{class:"navbar-item"},t("img",{src:"assets/img/gear.svg",alt:"Logo"})," ",t("span",{class:"title has-text-dark"},"MECH AIRCON"))),t("span",{class:"navbar-burger burger","data-target":"#navbarMenuHeroB"},t("span",null),t("span",null),t("span",null))),t("div",{id:"navbarMenuHeroB",class:"navbar-menu"},t("div",{class:"navbar-end"},t("stencil-route-link",{url:"/about",class:"navbar-item"},t("a",{class:"button is-transparent"},"About")),t("stencil-route-link",{url:"/services",class:"navbar-item"},t("a",{class:"button is-transprent"},"Services")),t("stencil-route-link",{url:"/clients",class:"navbar-item"},t("a",{class:"button is-transparent"},"Clients")),t("stencil-route-link",{url:"/team",class:"navbar-item"},t("a",{class:"button is-transparent"},"Team")),t("stencil-route-link",{class:"navbar-item",url:"/contact"},t("span",{class:"navbar-item"},t("a",{class:"button is-info is-inverted"},t("span",{class:"icon"},t("i",{class:"fab fa-github"})),t("span",null,"Contact"))))))))}static get is(){return"ma-navbar"}static get properties(){return{elem:{elementRef:!0}}}static get style(){return""}}export{e as AppRoot,a as MaFooter,s as MaNavbar};