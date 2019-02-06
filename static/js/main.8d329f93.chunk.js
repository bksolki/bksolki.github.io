(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(355)},349:function(e,t,a){},352:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getPromotion",function(){return V}),a.d(n,"addPromotion",function(){return _}),a.d(n,"editPromotion",function(){return J}),a.d(n,"deletePromotion",function(){return W}),a.d(n,"showModalPromotion",function(){return B}),a.d(n,"hideModalPromotion",function(){return K});var r={};a.r(r),a.d(r,"authError",function(){return ie}),a.d(r,"loginLoad",function(){return le}),a.d(r,"loginUser",function(){return ue}),a.d(r,"logoutUser",function(){return me});var o=a(1),c=a.n(o),i=a(7),l=a.n(i),s=a(22),u=a(368);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(14),p=a(15),d=a(17),h=a(16),f=a(18),b=a(370),g=a(369),E=a(357),O=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement(E.a,{to:(this.props.authenticated,"/"),className:"logo"},"UserNames"),c.a.createElement("nav",null,this.props.authenticated?c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(E.a,{to:"/logout"},"Signout"))):null))}}]),t}(c.a.Component);var y=Object(s.b)(function(e){return{authenticated:e.auth.authenticated}})(O),v=a(356),C=a(358),j=a(10),k=a(161),P=a.n(k),S=v.a.SubMenu,M=[],D="dark",I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={theme:D,current:[],submenu:M},a.handleClick=function(e){"control"!==e.key?a.props.history.push("/control/"+e.key):a.props.history.push("/control"),a.setState({current:[e.key]})},a.changeTheme=function(e){D=e?"dark":"light",a.setState({theme:e?"dark":"light"})},a.menuChange=function(e){M=e},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history.location.pathname,t=e.lastIndexOf("/"),a=e.substring(t+1);a&&this.setState({current:[a]})}},{key:"render",value:function(){return c.a.createElement("div",{id:"left-sidebar"},c.a.createElement("div",{className:"clock-time"},c.a.createElement(P.a,{format:"DD/MM/YY HH:mm:ss",ticking:!0,timezone:"Asia/Bangkok"}),c.a.createElement(C.a,{size:"small",checked:"dark"===this.state.theme,onChange:this.changeTheme,checkedChildren:"Dark",unCheckedChildren:"Light"})),c.a.createElement(v.a,{onOpenChange:this.menuChange,theme:this.state.theme,onClick:this.handleClick,style:{width:180,height:"100vh"},defaultOpenKeys:this.state.submenu,selectedKeys:this.state.current,mode:"inline"},c.a.createElement(v.a.Item,{key:"check-bill"},c.a.createElement(j.a,{type:"audit"}),"Check bill"),c.a.createElement(v.a.Item,{key:"reservations"},c.a.createElement(j.a,{type:"qrcode"}),"Reservations"),c.a.createElement(S,{key:"sub1",title:c.a.createElement("span",null,c.a.createElement(j.a,{type:"setting"}),c.a.createElement("span",null,"Setting"))},c.a.createElement(v.a.Item,{key:"setting-promotion"},"Promotion"),c.a.createElement(v.a.Item,{key:"setting-member"},"Member"),c.a.createElement(v.a.Item,{key:"setting-userAdmin"},"User Admin"))))}}]),t}(c.a.Component),x=a(47),N="AUTH_USER",w="UNAUTH_USER",T="LOGIN_LOADING",L="FETCH_PROMOTIONS",U="ADD_PROMOTIONS",A="EDIT_PROMOTIONS",z="DEL_PROMOTIONS",Y="SHOW_MODAL_PROMOTIONS",R="HIDE_MODAL_PROMOTIONS",H=a(45),F=a.n(H);function V(){var e=JSON.parse(localStorage.getItem("promotions"));return{type:L,payload:e.promotionData}}function _(e){if(e){var t=JSON.parse(localStorage.getItem("promotions")),a=(t=t.promotionData).length-1,n=e;return n.key=t[a].key+1,n.createDate=n.lastUpdate=F()().format("DD-MM-YYYY, HH:mm"),t.push(n),localStorage.setItem("promotions",JSON.stringify({promotionData:t})),{type:U,payload:t}}}function J(e){if(e){var t=JSON.parse(localStorage.getItem("promotions"));t=t.promotionData;for(var a=0;a<t.length;a++)t[a].key===e.key&&(e.createDate=t[a].createDate,t[a]=e,t[a].lastUpdate=F()().format("DD-MM-YYYY, HH:mm"));return localStorage.setItem("promotions",JSON.stringify({promotionData:t})),{type:A,payload:t}}}function W(e){if(e){var t=JSON.parse(localStorage.getItem("promotions"));return t=(t=t.promotionData).filter(function(t){return t.key!==e.key}),localStorage.setItem("promotions",JSON.stringify({promotionData:t})),{type:z,payload:t}}}function B(){return{type:Y,payload:!0}}function K(){return{type:R,payload:!1}}var q=a(92),G=a(159),$=a(363),Q=a(366),X=a(85),Z=a(359),ee=a(360),te=a(364),ae=G.a.Option,ne={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}},re={totalPrice:{borderBottom:"1px solid #000"},bill:{borderBottom:"3px double"},textRight:{textAlign:"right"}},oe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={promotionData:[],totalPrice:459,pricePerson:459,promotionSelect:null,totalCustomers:1,promotionMessage:"",discountPrice:0,promotionApply:!1,visible:!1},a.promotionsChange=function(e){a.setState({promotionSelect:e})},a.customersChange=function(e){a.setState({totalCustomers:Object(q.parseInt)(e)})},a.calculatorPrice=function(e,t){var n=Object(x.a)(Object(x.a)(a)),r=a.state,o=r.totalPrice,c=r.pricePerson,i=r.promotionData;if(e){var l,s=function(t,a){var r=e*c,i=0;a&&(r-=i=r*a/100),t&&(r-=i=t*c),r===o&&0!==i||n.setState({totalPrice:r.toLocaleString(),discountPrice:i}),l=r};if(s(),t){a.setState({promotionMessage:""});var u=i.filter(function(e){return e.couponCode===t})[0];if(u.minPrice){if(l<u.minPrice)return a.setState({promotionMessage:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e07\u0e34\u0e19\u0e44\u0e21\u0e48\u0e16\u0e36\u0e07\u0e02\u0e31\u0e49\u0e19\u0e15\u0e48\u0e33\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14 ("+u.minPrice.toLocaleString()+" \u0e1a\u0e32\u0e17)"}),!1;s()}if(u.minCustomers||u.maxCustomers){if(e<u.minCustomers)return a.setState({promotionMessage:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e44\u0e21\u0e48\u0e16\u0e36\u0e07\u0e02\u0e31\u0e49\u0e19\u0e15\u0e48\u0e33\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14 ("+u.minCustomers+" \u0e04\u0e19)"}),!1;if(e>u.maxCustomers&&0!==u.maxCustomers)return a.setState({promotionMessage:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e40\u0e01\u0e34\u0e19\u0e08\u0e33\u0e19\u0e27\u0e19\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14 ("+u.maxCustomers+" \u0e04\u0e19)"}),!1;s()}if(u.discountPercent)a.setState({promotionMessage:"Discount ("+u.discountPercent+"%)"}),s(null,u.discountPercent);else{if(!u.discountPerson)return!1;a.setState({promotionMessage:"Discount \u0e08\u0e33\u0e19\u0e27\u0e19\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32 ("+u.discountPerson+" \u0e17\u0e48\u0e32\u0e19)"}),s(u.discountPerson,null)}}else s()}},a.handleOk=function(e){a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||a.setState({visible:!0})})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillUpdate",value:function(e,t){this.state.promotionSelect===t.promotionSelect&&this.state.totalCustomers===t.totalCustomers||this.calculatorPrice(t.totalCustomers,t.promotionSelect)}},{key:"componentDidMount",value:function(){this.props.getPromotion()}},{key:"componentWillReceiveProps",value:function(e){e.data&&this.setState({promotionData:e.data})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,a=t.promotionData,n=t.totalPrice,r=t.promotionMessage,o=t.totalCustomers,i=t.discountPrice,l=t.pricePerson;return c.a.createElement("div",null,c.a.createElement("h5",null,"Buffet per person as 459 baht."),c.a.createElement($.a,{onSubmit:this.handleSubmit},c.a.createElement($.a.Item,Object.assign({},ne,{label:"Number customers"}),e("customers",{rules:[{required:!0,message:"Please input customers"}],initialValue:1})(c.a.createElement(Q.a,{size:"large",min:1,max:100,onChange:this.customersChange,precision:0}))),c.a.createElement($.a.Item,Object.assign({},ne,{label:"Select Promotion",hasFeedback:!0,validateStatus:null}),e("promotions",{rules:[]})(c.a.createElement(G.a,{onChange:this.promotionsChange},a.map(function(e,t){return c.a.createElement(ae,{value:e.couponCode,key:t},e.couponCode)}))),c.a.createElement("h5",null,r)),c.a.createElement($.a.Item,{wrapperCol:{span:12,offset:5}},c.a.createElement(X.a,{type:"primary",htmlType:"submit"},"View Billing"))),c.a.createElement(Z.a,null,c.a.createElement(ee.a,{span:8,offset:5},c.a.createElement("h3",null,"Total price"),c.a.createElement("h2",{style:re.totalPrice},n))),c.a.createElement(te.a,{visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleOk,footer:[c.a.createElement(X.a,{key:"submit",type:"primary",loading:this.state.loading,onClick:this.handleOk},"OK")]},c.a.createElement("h3",null,"Scale 360 Buffet Billing"),c.a.createElement("h4",null,"\u0e43\u0e1a\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e01\u0e47\u0e1a\u0e40\u0e07\u0e34\u0e19"),c.a.createElement(Z.a,null,c.a.createElement(ee.a,{span:12},"\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48 : Re-001"),c.a.createElement(ee.a,{span:12},"\u0e42\u0e15\u0e4a\u0e30 : \u0e42\u0e15\u0e4a\u0e30 001")),c.a.createElement(Z.a,null,c.a.createElement(ee.a,{span:24},"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48-\u0e40\u0e27\u0e25\u0e32 : ",F()().format("DD-MM-YYYY, HH:mm"))),c.a.createElement("hr",null),c.a.createElement(Z.a,null,c.a.createElement(ee.a,{span:8},"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"),c.a.createElement(ee.a,{span:8},"\u0e08\u0e33\u0e19\u0e27\u0e19"),c.a.createElement(ee.a,{span:8,className:"text-right"},"\u0e23\u0e32\u0e04\u0e32")),c.a.createElement(Z.a,null,c.a.createElement(ee.a,{span:8},"\u0e1a\u0e38\u0e1f\u0e40\u0e1f\u0e15\u0e4c 459"),c.a.createElement(ee.a,{span:8},o),c.a.createElement(ee.a,{span:8,className:"text-right"},(o*l).toLocaleString())),c.a.createElement("hr",null),c.a.createElement(Z.a,null,c.a.createElement(ee.a,{span:8,offset:8},"\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14"),c.a.createElement(ee.a,{span:8,className:"text-right"},i)),c.a.createElement(Z.a,null,c.a.createElement(ee.a,{span:8,offset:8},"\u0e22\u0e2d\u0e14\u0e01\u0e48\u0e2d\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14"),c.a.createElement(ee.a,{span:8,className:"text-right"},(o*l).toLocaleString())),c.a.createElement(Z.a,null,c.a.createElement(ee.a,{span:8,offset:8},"\u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e34\u0e49\u0e19"),c.a.createElement(ee.a,{span:8,style:re.bill},c.a.createElement("h2",{className:"text-right"},n)))))}}]),t}(c.a.Component);oe=$.a.create()(oe);var ce=Object(s.b)(function(e){return{data:e.promotions.data}},n)(oe);a(367);function ie(e,t){return{type:e,payload:t}}function le(e,t){return{type:e,payload:t}}var se=[{key:1,discountPercent:"15",discountPerson:null,couponCode:"LUCKY ONE",minPrice:1e3,minCustomers:null,maxCustomers:null,createDate:"06-02-2019, 09:00",lastUpdate:"06-02-2019, 09:00"},{key:2,discountPercent:null,discountPerson:"1",couponCode:"4PAY3",minPrice:null,minCustomers:4,maxCustomers:4,createDate:"06-02-2019, 09:00",lastUpdate:"06-02-2019, 09:00"},{key:3,discountPercent:"20",discountPerson:null,couponCode:"LUCKY TWO",minPrice:null,minCustomers:2,maxCustomers:2,createDate:"06-02-2019, 09:00",lastUpdate:"06-02-2019, 09:00"},{key:4,discountPercent:"25",discountPerson:null,couponCode:"6000up",minPrice:6e3,minCustomers:null,maxCustomers:null,createDate:"06-02-2019, 09:00",lastUpdate:"06-02-2019, 09:00"}];function ue(e){return function(t){t(le(T,!0)),localStorage.setItem("user",JSON.stringify({token:"test",iat:new Date},"test-secret")),localStorage.setItem("promotions",JSON.stringify({promotionData:se})),t({type:N}),setTimeout(function(){e.history.push("/control/check-bill")},1500)}}function me(e){return function(t){localStorage.removeItem("user"),t({type:w}),e.history.push("/")}}var pe=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"TEST Reservations")}}]),t}(c.a.Component),de=Object(s.b)(null,r)(pe),he=a(361),fe=a(362),be=a(365),ge={labelCol:{xs:{span:24},sm:{span:10}},wrapperCol:{xs:{span:24},sm:{span:14}}},Ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},a.handleOk=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(a.setState({loading:!0}),setTimeout(function(){if(a.setState({loading:!1}),a.props.hideModalPromotion(),a.props.modalData){var e=a.props.modalData.key;e?(t.key=e,a.props.editPromotion(t)):a.props.addPromotion(t)}},1e3))})},a.handleCancel=function(e){a.props.hideModalPromotion()},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,a=t.visible,n=t.modalData;return c.a.createElement("div",null,c.a.createElement(te.a,{title:"Add Promotion",visible:a,onOk:this.handleOk,onCancel:this.handleCancel,footer:[c.a.createElement(X.a,{key:"back",onClick:this.handleCancel},"Cancel"),c.a.createElement(X.a,{key:"submit",type:"primary",loading:this.state.loading,onClick:this.handleOk},Object(q.isEmpty)(n)?"Add":"Save Edit")]},c.a.createElement($.a,null,c.a.createElement($.a.Item,Object.assign({},ge,{label:"Coupon Code"}),e("couponCode",{rules:[{required:!0,message:"Please input coupon code"}],initialValue:n.couponCode?n.couponCode:""})(c.a.createElement(be.a,null))),c.a.createElement($.a.Item,Object.assign({},ge,{label:"Discount %"}),e("discountPercent",{rules:[],initialValue:n.discountPercent?n.discountPercent:0})(c.a.createElement(Q.a,{min:0,max:100,precision:0}))),c.a.createElement($.a.Item,Object.assign({},ge,{label:"Discount Person"}),e("discountPerson",{rules:[],initialValue:n.discountPerson?n.discountPerson:0})(c.a.createElement(Q.a,{min:0,max:100,precision:0}))),c.a.createElement($.a.Item,Object.assign({},ge,{label:"Min Price"}),e("minPrice",{rules:[],initialValue:n.minPrice?n.minPrice:0})(c.a.createElement(Q.a,{min:0,precision:0}))),c.a.createElement($.a.Item,Object.assign({},ge,{label:"Min customers"}),e("minCustomers",{rules:[],initialValue:n.minCustomers?n.minCustomers:0})(c.a.createElement(Q.a,{min:0,max:100,precision:0}))),c.a.createElement($.a.Item,Object.assign({},ge,{label:"Max customers"}),e("maxCustomers",{rules:[],initialValue:n.maxCustomers?n.maxCustomers:0})(c.a.createElement(Q.a,{min:0,max:100,precision:0}))))))}}]),t}(c.a.Component);Ee=$.a.create()(Ee);var Oe=Object(s.b)(null,n)(Ee),ye=te.a.confirm,ve=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],pagination:{},loading:!1,visible:!1,sortedInfo:{},modalData:{}},a.handleTableChange=function(e,t,n){a.setState({sortedInfo:n})},a.editPromotion=function(e){a.props.showModalPromotion(),a.setState({modalData:e})},a.deletePromotion=function(e){var t=Object(x.a)(Object(x.a)(a)).props;ye({title:'Are you sure delete "'+e.couponCode+'" ?',okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){t.deletePromotion(e)}})},a.showModal=function(){a.props.showModalPromotion(),a.setState({modalData:{}})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getPromotion()}},{key:"componentWillReceiveProps",value:function(e){e.data&&this.setState({data:e.data,visible:e.visible})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.pagination,r=t.loading,o=t.sortedInfo,i=[{title:"Coupon Code",dataIndex:"couponCode",sorter:function(e,t){return e.couponCode.length-t.couponCode.length},sortOrder:"couponCode"===o.columnKey&&o.order},{title:"Discount %",dataIndex:"discountPercent",sorter:function(e,t){return e.discountPercent-t.discountPercent},sortOrder:"discountPercent"===o.columnKey&&o.order},{title:"Min Price",dataIndex:"minPrice",sorter:function(e,t){return e.minPrice-t.minPrice},sortOrder:"minPrice"===o.columnKey&&o.order},{title:"Min Customers",dataIndex:"minCustomers",sorter:function(e,t){return e.minCustomers-t.minCustomers},sortOrder:"minCustomers"===o.columnKey&&o.order},{title:"Discount Person",dataIndex:"discountPerson"},{title:"Create Date",dataIndex:"createDate"},{title:"Last Update",dataIndex:"lastUpdate"},{title:"Action",key:"action",width:120,render:function(t,a){return c.a.createElement("span",null,c.a.createElement("a",{href:"javascript:;",onClick:function(){return e.editPromotion(a)}},"Edit"),c.a.createElement(he.a,{type:"vertical"}),c.a.createElement("a",{href:"javascript:;",onClick:function(){return e.deletePromotion(a)}},"Delete"))}}];return c.a.createElement("div",null,c.a.createElement("h3",null,"Promotion List"),c.a.createElement(Z.a,null,c.a.createElement(ee.a,null,c.a.createElement(X.a,{type:"primary",style:{marginBottom:5},onClick:this.showModal},"Add"))),c.a.createElement(fe.a,{columns:i,dataSource:a,pagination:n,loading:r,onChange:this.handleTableChange}),c.a.createElement(Oe,this.state))}}]),t}(c.a.Component);var Ce=Object(s.b)(function(e){return{data:e.promotions.data,visible:e.promotions.visible}},n)(ve),je=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"TEST Member")}}]),t}(c.a.Component),ke=Object(s.b)(null,r)(je),Pe=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"TEST UserAdmin")}}]),t}(c.a.Component),Se=Object(s.b)(null,r)(Pe),Me=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(y,null),c.a.createElement("div",{className:"content-with-sidebar"},c.a.createElement(b.a,null,c.a.createElement(g.a,{exact:!0,path:"/control/check-bill",component:ce}),c.a.createElement(g.a,{exact:!0,path:"/control/reservations",component:de}),c.a.createElement(g.a,{exact:!0,path:"/control/setting-promotion",component:Ce}),c.a.createElement(g.a,{exact:!0,path:"/control/setting-member",component:ke}),c.a.createElement(g.a,{exact:!0,path:"/control/setting-userAdmin",component:Se}),c.a.createElement(g.a,{exact:!0,path:"*",render:function(){return c.a.createElement("div",null,"No Match 404 Page")}}))),c.a.createElement(I,this.props))}}]),t}(c.a.Component),De=a(31),Ie=(a(349),$.a.Item);var xe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,iconLoading:!1,businessId:!1},a.enterLoading=function(){a.setState({loading:!0})},a.enterIconLoading=function(){a.setState({iconLoading:!0})},a.handleSubmit=function(e){e.preventDefault();var t={submitTime:F()().format()};a.props.form.validateFields(function(e,n){if(!e){a.setState({iconLoading:!0});var r=a.props,o=Object(De.a)({},n,r,t);r.loginUser(o)}})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));e&&e.token&&this.props.history.push("/control/check-bill")}},{key:"componentWillReceiveProps",value:function(e){e.loading||this.setState({loading:!1,iconLoading:!1})}},{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldsError,r=t.getFieldError,o=t.isFieldTouched,i=o("username")&&r("username"),l=o("password")&&r("password");return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login-warpper"},c.a.createElement("div",{className:"login-logo"},c.a.createElement("svg",null,c.a.createElement("g",{id:"logo_scale"},c.a.createElement("path",{d:"M20.2,16.8c-1.5,0-2.7,1.2-2.7,2.7c0,1.5,1.2,2.7,2.7,2.7s2.7-1.2,2.7-2.7C22.8,17.9,21.6,16.8,20.2,16.8z"}),c.a.createElement("path",{d:"M18.7,0c-3.6,0-6.7,2.9-6.5,6.5c0,0.3,0.1,0.6,0.1,0.9c0,0.1,0,0.3,0,0.4c0,0,0,0,0,0.1c0,0.1,0,0.3,0,0.4\r c0,1.6-0.4,2.7-1.1,3.4c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-1.2,1.2-2.9,1.5-3.6,1.3c-0.7-0.2-1.4-0.4-2.1-0.4\r c-3,0-5.4,2.4-5.4,5.4s2.4,5.4,5.4,5.4c0.2,0,0.4,0,0.6,0c5.5-0.4,6.4,3,6.6,4.4c0,0.1,0,0.3,0,0.4c0,2,1.6,3.6,3.6,3.6\r c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.8-3.6-3.6c-0.3,0-0.7,0.1-0.7,0.1c-1.7,0.1-5-0.6-4.8-5.9c0-0.2,0-0.5,0-0.7c0,0,0,0,0,0\r c0.6-6.1,6.7-5.1,8-5.1c3.6,0,6.5-2.9,6.5-6.5C25.3,2.9,22.3,0,18.7,0z M5.4,21c-1.5,0-2.8-1.2-2.8-2.8c0-1.5,1.2-2.8,2.8-2.8\r s2.8,1.2,2.8,2.8C8.1,19.8,6.9,21,5.4,21z M16.1,26.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7\r S15.2,26.6,16.1,26.6z M18.7,9.9c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4C22.1,8.4,20.6,9.9,18.7,9.9z\r "}),c.a.createElement("path",{d:"M121.5,17.3c1.6-0.4,2.8-1.8,2.8-4.1c0-3.1-2.8-4.8-6-4.8c-3.9,0-6.1,2-6.3,5c0,0.1,0,0.1,0,0.2\r c0,0.4,0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8c0,0,0,0,0,0h0c0.2-2.2,1.8-3.7,4.8-3.7c2.4,0,4.4,1.2,4.4,3.4c0,2.3-1.4,3.5-3.9,3.5\r h-1.9v0c-0.3,0-0.6,0.3-0.6,0.6s0.3,0.6,0.6,0.6v0h0.1c0,0,0,0,0,0c0,0,0,0,0,0h1.9c2.6,0,4.3,1.1,4.3,3.7c0,2.6-2,4.1-5,4.1\r c-3.1,0-4.8-1.4-5-3.7h0c0-0.4-0.4-0.7-0.8-0.7c-0.4,0-0.7,0.3-0.8,0.7h0c0.3,3,2.5,5.1,6.6,5.1c3.8,0,6.6-2.1,6.6-5.4\r C124.9,19.3,123.5,17.6,121.5,17.3z"}),c.a.createElement("path",{d:"M134,15.1c-2.6,0-4.8,1.4-5.6,3.2c0-4,1.1-8.5,5.7-8.5c2.2,0,3.8,1,4.1,2.6h0c0.1,0.4,0.4,0.7,0.7,0.7\r c0.4,0,0.7-0.3,0.7-0.7l0-0.1c0-0.1,0,0,0-0.1c0-0.1,0-0.2-0.1-0.2c-0.6-2-2.6-3.5-5.5-3.5c-5.6,0-7.3,5.1-7.3,10.1\r c0,6.2,3.2,8.7,7.1,8.7c3.9,0,6.4-2.5,6.4-6.1C140.4,17.7,137.7,15.1,134,15.1z M133.9,25.8c-2.9,0-5.1-2.1-5.1-4.8\r c0-2.6,2.3-4.5,5.1-4.5c3,0,4.9,2,4.9,4.6C138.8,23.9,136.9,25.8,133.9,25.8z"}),c.a.createElement("path",{d:"M149.3,8.4c-4.5,0-7.4,3.6-7.4,9.4c0,5.8,2.9,9.4,7.4,9.4c4.5,0,7.4-3.6,7.4-9.4C156.7,12,153.8,8.4,149.3,8.4\r z M149.3,25.8c-3.5,0-5.8-3-5.8-7.9c0-5,2.3-7.9,5.8-7.9c3.4,0,5.8,3,5.8,7.9C155.1,22.8,152.8,25.8,149.3,25.8z"}),c.a.createElement("path",{d:"M36.4,17l-1.7-0.4c-2-0.4-3.1-0.8-3.1-2.3c0-1.3,1.2-2,2.9-2c1.7,0,2.7,0.6,3.1,1.4c0,0,0,0,0,0\r c0.1,0.2,0.2,0.4,0.4,0.6c0.4,0.4,1.1,0.5,1.7,0.3c0.2-0.1,0.4-0.2,0.6-0.3c0.5-0.4,0.7-1.1,0.5-1.7c0,0,0-0.1,0-0.1\r c-0.1-0.1-0.1-0.3-0.2-0.4c-0.9-1.7-2.8-2.8-6.1-2.8c-3.9,0-6.5,2-6.5,5.1c0,2.8,1.8,4.4,5.2,5l1.7,0.4c2.4,0.5,3,1,3,2.3\r c0,1.4-1.4,2.1-3.3,2.1c-1.8,0-2.9-0.5-3.4-1.4c0,0,0,0,0,0c-0.1-0.3-0.4-0.6-0.7-0.8c-0.4-0.2-0.9-0.3-1.3-0.2\r c-0.2,0-0.3,0.1-0.4,0.2c-0.6,0.4-1,1.1-0.8,1.9c0,0.1,0.1,0.2,0.1,0.2c0.1,0.1,0.1,0.2,0.2,0.4c1.1,1.7,3.1,2.8,6.4,2.8\r c4.4,0,7-2,7-5.3C41.6,19.2,39.8,17.6,36.4,17z"}),c.a.createElement("path",{d:"M79.4,9.7c-0.5-0.4-1.1-0.5-1.7-0.3c-0.2,0.1-0.4,0.2-0.5,0.3c-0.4,0.3-0.7,0.8-0.7,1.3v0.1V12\r c-1.4-1.6-3.4-2.7-5.9-2.7c-4.9,0-8.5,4-8.5,9c0,5.1,3.6,9,8.5,9c2.5,0,4.5-1.1,5.9-2.7V25v0.1c0,0.2,0,0.4,0.1,0.6\r c0.2,0.7,0.8,1.1,1.4,1.2c0.2,0,0.4,0,0.6,0c0.1,0,0.2,0,0.3-0.1c0.7-0.2,1.2-0.9,1.2-1.5v-0.4V11.3v-0.4c0-0.1,0-0.2-0.1-0.4\r C79.9,10.2,79.7,9.9,79.4,9.7z M71.1,24c-3,0-5.1-2.4-5.1-5.7c0-3.3,2.2-5.7,5.1-5.7c2.9,0,5.2,2.4,5.2,5.7\r C76.3,21.7,74,24,71.1,24z"}),c.a.createElement("path",{d:"M86.1,0.9h-0.5c-0.1,0-0.2,0-0.4,0.1C85.2,1,85.1,1,85,1.1c0,0-0.1,0-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1\r c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.1,0.2c0,0,0,0,0,0.1c0,0.1-0.1,0.2-0.1,0.3\r c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2l0,0v22.2l0,0\r c0,0.2,0,0.3,0.1,0.5c0.2,0.7,0.8,1.1,1.4,1.2c0.2,0,0.5,0,0.7,0c0.1,0,0.2,0,0.2-0.1c0.7-0.2,1.2-0.9,1.3-1.6v-0.2V2.9V2.7\r c0-0.2,0-0.4-0.1-0.6C87.5,1.4,86.8,1,86.1,0.9z"}),c.a.createElement("path",{d:"M52.5,12.7c2.3,0,3.8,1.1,4.4,2.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0\r c0.1,0.2,0.2,0.4,0.3,0.5c0.5,0.5,1.3,0.8,2,0.5c0.3-0.1,0.6-0.3,0.8-0.5c0.4-0.4,0.6-1.1,0.4-1.7c0-0.1,0-0.1,0-0.2\r c-0.1-0.2-0.1-0.3-0.2-0.5c-1.2-2.4-3.8-4.3-7.8-4.3c-5.1,0-9,4-9,9c0,5,3.9,9,9,9c4.1,0,6.7-2,7.9-4.5c0-0.1,0.1-0.2,0.1-0.3\r c0.2-0.4,0.2-0.8,0-1.3c-0.1-0.3-0.2-0.5-0.4-0.7c-0.5-0.5-1.2-0.7-1.9-0.5c-0.3,0.1-0.5,0.3-0.7,0.5c-0.2,0.2-0.3,0.4-0.4,0.6\r c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0.1,0,0.1-0.1,0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c-0.6,1.4-2,2.5-4.3,2.5\r c-3.1,0-5.2-2.3-5.2-5.6C47.3,15,49.5,12.7,52.5,12.7z"}),c.a.createElement("path",{d:"M99.8,9.3c-5,0-8.7,3.9-8.7,9c0,5.2,3.7,9,8.8,9c3.4,0,5.9-1.5,7.3-3.6c0.1-0.1,0.2-0.2,0.2-0.4\r c0.1-0.2,0.1-0.4,0.1-0.7c0-0.4-0.2-0.8-0.4-1.1c-0.3-0.4-0.8-0.6-1.3-0.6c-0.5,0-1,0.3-1.3,0.6c-0.1,0.1-0.2,0.2-0.2,0.4\r c0,0.1,0,0.1-0.1,0.2c-0.6,1.2-2.1,2-4.1,2c-2.7,0-4.7-1.6-5.2-4.5h13.4c0.1-0.5,0.1-1,0.1-1.5C108.4,13.2,104.9,9.3,99.8,9.3z\r M95,16.9c0.5-2.8,2.3-4.4,4.9-4.4c2.5,0,4.4,1.6,4.8,4.4H95z"})))),c.a.createElement($.a,{onSubmit:this.handleSubmit,className:"login-form"},c.a.createElement(Ie,{style:{marginBottom:"14px"},validateStatus:i?"error":"",help:i||""},a("username",{rules:[{required:!0,message:"Please input your username!"}]})(c.a.createElement(be.a,{prefix:c.a.createElement(j.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),c.a.createElement(Ie,{validateStatus:l?"error":"",help:l||""},a("password",{rules:[{required:!0,message:"Please input your Password!"}]})(c.a.createElement(be.a,{prefix:c.a.createElement(j.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),c.a.createElement(Z.a,{className:"text-center"},c.a.createElement(X.a,{type:"primary",htmlType:"submit",disabled:(e=n(),Object.keys(e).some(function(t){return e[t]})),className:"login-form-button",loading:this.state.iconLoading,onClick:this.enterIconLoading},"Log in"))),c.a.createElement(Z.a,{className:"version-log"},c.a.createElement("small",{style:{color:"#f5f5f5"}},"Scale buffet \xa9 Verion 1.0.0"))))}}]),t}(c.a.Component);xe=$.a.create()(xe);var Ne=Object(s.b)(function(e){return{errorMessage:e.auth.error,loading:e.auth.loginLoad}},r)(xe),we=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.props.logoutUser(this.props)}},{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(c.a.Component),Te=Object(s.b)(null,r)(we),Le=function(e){var t=function(t){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,t),Object(p.a)(a,[{key:"componentWillMount",value:function(){this.props.authenticated||this.props.history.push("/login")}},{key:"componentWillUpdate",value:function(e){e.authenticated||this.props.history.push("/login")}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),a}(c.a.Component);return Object(s.b)(function(e){return{authenticated:e.auth.authenticated}})(t)},Ue=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"404 , page not found")}}]),t}(c.a.Component),Ae=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b.a,null,c.a.createElement(g.a,{exact:!0,path:"/",component:Ne}),c.a.createElement(g.a,{exact:!0,path:"/logout",component:Te}),c.a.createElement(g.a,{path:"/control",component:Le(Me)}),c.a.createElement(g.a,{component:Ue})))}}]),t}(c.a.Component),ze=a(55),Ye=(a(351),a(177)),Re=Object(ze.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILURE":return Object(De.a)({},e,{error:{login:t.payload}});case N:return Object(De.a)({},e,{authenticated:!0,error:{}});case w:return Object(De.a)({},e,{authenticated:!1,error:{}});case T:return Object(De.a)({},e,{loginLoad:t.payload})}return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS":return Object(De.a)({list:t.payload},e)}return e},promotions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:case U:case A:case z:return Object(De.a)({},e,{data:t.payload});case Y:case R:return Object(De.a)({},e,{visible:t.payload})}return e}}),He=[Ye.a];var Fe=Object(ze.d)(Re,ze.a.apply(void 0,He)),Ve=(a(352),JSON.parse(localStorage.getItem("user")));Ve&&Ve.token&&Fe.dispatch({type:N});var _e=document.getElementById("content-root");l.a.render(c.a.createElement(s.a,{store:Fe},c.a.createElement(u.a,null,c.a.createElement(Ae,null))),_e),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[180,2,1]]]);
//# sourceMappingURL=main.8d329f93.chunk.js.map