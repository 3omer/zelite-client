(function(e){function t(t){for(var n,o,r=t[0],c=t[1],l=t[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/zelite-client/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0d66":function(e,t,s){e.exports=s.p+"img/switch1.ab3dad7d.png"},1:function(e,t){},2:function(e,t){},"2ceb":function(e,t,s){"use strict";s("cb76")},3:function(e,t){},4:function(e,t){},"4e00":function(e,t,s){e.exports=s.p+"img/zelite_logo_title_side.d7de951f.png"},5:function(e,t){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("header",[s("AppHeader")],1),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row vh-100"},[s("nav",{staticClass:"col-md-3 p-0 border-right d-none d-md-block bg-white vh-10 border border-top-0"},[s("NavLinks")],1),s("main",{staticClass:"col col-md-7 col-lg-6 px-2 my-2 mx-auto",attrs:{role:"main"}},[s("router-view")],1)])])])},i=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggleMenu"}},[s("div",{staticClass:"d-md-none"},[s("NavLinks")],1)]),e.user.email?s("div",{staticClass:"user-status d-flex justify-content-between align-items-center border p-2 px-3"},[s("div",{staticClass:"user media text-secondary"},[s("div",{staticClass:"media-body"},[s("small",{staticClass:"user-name"},[e._v(e._s(e.user.email))]),s("br")])]),s("button",{staticClass:"btn btn-sm btn-dark",on:{click:e.btnLogout}},[e._v(" Logout ")])]):e._e()])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-md navbar-dark gradient-blue px-1"},[n("a",{staticClass:"navbar-brand bg-white align-bottom rounded",attrs:{href:"/"}},[n("img",{staticClass:"img-fluid",attrs:{src:s("4e00"),width:"110",alt:""}})]),n("div",{staticClass:"border border-white rounded"},[n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggleMenu"}},[n("span",{staticClass:"navbar-toggler-icon"})])])])}],c=(s("d3b7"),s("96cf"),s("1da1")),l=s("bc3a"),u=s.n(l),d="https://zelite.herokuapp.com/api/v1";u.a.defaults.baseURL=d;var m,p,f={signup:"/register",login:"/login",logout:"/logout",devices:"/devices",MQTTConfig:"/mqtt"},v=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,s,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post(f.signup,{username:t,email:s,password:n}).then((function(e){return e.data})).catch((function(e){return Promise.reject(y(e))})));case 1:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post(f.login,{email:t,password:s}).then((function(e){return e.data})).catch((function(e){return console.error(e),Promise.reject(y(e))})));case 1:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),b=function(e){return{Authorization:"Bearer ".concat(e)}},h=function(e){return u.a.post(f.logout,{},{headers:b(e)}).then((function(e){return e.data.message||"You logged out"})).catch((function(e){return console.error(e),Promise.reject(y(e))}))},C=function(e){return u.a.get(f.devices,{headers:b(e)}).then((function(e){return e.data})).catch((function(e){return console.error(e),Promise.reject(y(e))}))},_=function(e,t){return u.a.post(f.devices,t,{headers:b(e)}).then((function(e){return e.data})).catch((function(e){return console.error(e),Promise.reject(y(e))}))},E=function(e,t){var s=f.devices+"/"+t;return u.a.delete(s,{headers:b(e)}).catch((function(e){return console.error(e),Promise.reject(y(e))}))},T=function(e){return u.a.get(f.MQTTConfig,{headers:b(e)}).then((function(e){return e.data})).catch((function(e){return console.error(e),Promise.reject(y(e))}))},w=function(e,t){return u.a.post(f.MQTTConfig,t,{headers:b(e)}).then((function(e){return e.data})).catch((function(e){console.error(e),Promise.reject(y(e))}))},y=function(e){var t={};if(e.response&&e.response.data)return t.data=e.response.data,t.statusCode=e.response.status,t;if(e.request)return t.statusCode=-1,t.message="It seems like you are not connected !",t;throw e},S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list-group-flush"},[s("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"home"}},[s("i",{staticClass:"bi bi-house"}),e._v(" Home ")]),s("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"dashboard"}},[s("i",{staticClass:"bi bi-speedometer"}),e._v(" Dashboard ")]),s("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"manager"}},[s("i",{staticClass:"bi bi-gear"}),e._v(" Manager ")]),s("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"about"}},[s("i",{staticClass:"bi bi-info-circle"}),e._v(" About ")])],1)},D=[],x={},k=x,O=(s("c145"),s("2877")),$=Object(O["a"])(k,S,D,!1,null,null,null),L=$.exports,j={name:"AppHeader",components:{NavLinks:L},computed:{user:function(){return this.$store.state.user}},methods:{btnLogout:function(){var e=this;console.log("btnLogout()"),h(this.user.token).then((function(t){console.log("Logging out - success",t),e.$store.commit("DEL_USER"),e.$router.push("/")})).catch((function(e){console.log("Logging out - failed",e)}))}}},A=j,M=Object(O["a"])(A,o,r,!1,null,null,null),I=M.exports,P={name:"App",components:{AppHeader:I,NavLinks:L}},N=P,F=(s("034f"),Object(O["a"])(N,a,i,!1,null,null,null)),Q=F.exports,R=(s("4de4"),s("c740"),s("caad"),s("d81d"),s("ade3")),q=s("2909"),U=s("5530"),V=s("2f62"),B=(s("25f0"),s("e7fc")),H="zelite_user_test",G={keepalive:30,clientId:H,protocolId:"MQIsdp",protocolVersion:3,clean:!0,reconnectPeriod:3e3,connectTimeout:3e4,rejectUnauthorized:!1},z=function(e,t){return m||(console.log("connecting mqtt client .. .",{host:e}),m=B.connect(e,Object(U["a"])(Object(U["a"])({},G),t)),m.on("error",(function(e){console.error("MQTT: error",e.message)})),m)},W=function(e,t){var s=z();return new Promise((function(n,a){s||a("Client is not intialized"),s.unsubscribe(e),s.subscribe(e,(function(e){e&&a(e),n(!0)})),s.on("message",(function(s,n){e==s&&t(n.toString())}))}))},K=function(e,t){return new Promise((function(s,n){m.publish(e,t,{qos:1,retain:!0},(function(e){e&&n(e),s(!0)}))}))},J={getClient:z,setTopicListner:W,publishData:K},Y=J,Z={};Z.SET_NETWORK_STATUS="SET_NETWORK_STATUS",Z.SET_USER="SET_USER",Z.DEL_USER="DEL_USER",Z.SET_DEVICES="SET_DEVICES",Z.ADD_DEVICE="ADD_DEVICE",Z.DELETE_DEVICE="DELETE_DEVICE",Z.SET_MQTT_CONFIG="SET_MQTT_CONFIG",Z.SET_DEVICE_STATE="SET_DEVICE_STATE",Z.SET_MQTT_STATUS="SET_MQTT_STATUS",Z.SET_DEVICES_LOADING="SET_DEVICES_LOADING",n["a"].use(V["a"]);var X={};try{X=JSON.parse(localStorage.getItem("user"))||X}catch(ws){console.error(ws.message),localStorage.removeItem("user")}var ee=new V["a"].Store({state:{user:X,networkStatus:"",devices:[],devicesLoading:!0,MQTTConfig:{username:"",password:"",host:""},mqttStatus:"not connected"},mutations:(p={},Object(R["a"])(p,Z.SET_NETWORK_ERROR,(function(e,t){e.networkStatus=t})),Object(R["a"])(p,Z.SET_USER,(function(e,t){var s=t.token,a=t.user;n["a"].set(e.user,"username",a.username),n["a"].set(e.user,"email",a.email),n["a"].set(e.user,"token",s),localStorage.setItem("user",JSON.stringify(Object(U["a"])(Object(U["a"])({},a),{},{token:s})))})),Object(R["a"])(p,Z.DEL_USER,(function(e){var t,s,n=null;e.user=Object(U["a"])(Object(U["a"])({},e.user),{username:t,email:s,token:n}),localStorage.removeItem("user")})),Object(R["a"])(p,Z.SET_DEVICES,(function(e,t){e.devices=Object(q["a"])(t)})),Object(R["a"])(p,Z.ADD_DEVICE,(function(e,t){e.devices.push(t)})),Object(R["a"])(p,Z.SET_DEVICE_STATE,(function(e,t){console.log("MUTATUIN:SET_DEVICE_STATE",t.key);var s=e.devices.findIndex((function(e){return e.key==t.key})),a=e.devices[s];"switch"===a.type?a.isOn=t.newState:a.value=t.newState,n["a"].set(e.devices,s,a)})),Object(R["a"])(p,Z.SET_DEVICES_LOADING,(function(e,t){e.devicesLoading=t})),Object(R["a"])(p,Z.DELETE_DEVICE,(function(e,t){var s=e.devices.findIndex((function(e){return e.key==t}));n["a"].delete(e.devices,s)})),Object(R["a"])(p,Z.SET_MQTT_CONFIG,(function(e,t){n["a"].set(e.MQTTConfig,"username",t.credentials.username),n["a"].set(e.MQTTConfig,"password",t.credentials.password),n["a"].set(e.MQTTConfig,"host",t.host),n["a"].set(e.MQTTConfig,"secure",t.secure)})),Object(R["a"])(p,Z.SET_MQTT_STATUS,(function(e,t){e.mqttStatus=t})),p),getters:{token:function(e){return e.user.token},switchDevices:function(e){return e.devices.filter((function(e){return"switch"==e.type}))},sensorDevices:function(e){return e.devices.filter((function(e){return"sensor"==e.type}))}},actions:{loadDevices:function(e){var t=e.commit,s=e.getters;return t(Z.SET_DEVICES_LOADING,!0),t(Z.SET_DEVICES,[]),C(s.token).then((function(e){console.log("Devices loaded - count",e.devices.length);var s=e.devices.map((function(e){return"switch"===e.type?e.isOn=void 0:e.value=void 0,e}));t(Z.SET_DEVICES,s),t(Z.SET_DEVICES_LOADING,!1)})).catch((function(e){console.log("Loading data failed",e),-1===e.statusCode?t(Z.SET_NETWORK_STATUS,"connection failed"):[401,404,422].includes(e.statusCode)?(t(Z.DEL_USER),document.location.reload()):document.location.reload()}))},loadMQTTConfig:function(e){var t=e.commit,s=e.getters;return T(s.token).then((function(e){console.log("MQTTConfig- loaded",{config:e}),e.host="ws://127.0.0.1:8883",e.secure=!1,t(Z.SET_MQTT_CONFIG,e)})).catch((function(e){console.log(e)}))},connectMqtt:function(e){var t=e.commit,s="wss://test.mosquitto.org:8081",n=Y.getClient(s);n.on("connect",(function(){console.log("MQTT connected",{host:s}),t(Z.SET_MQTT_STATUS,"connected")})),n.on("disconect",(function(){t(Z.SET_MQTT_STATUS,"disconnected")})),n.on("error",(function(e){console.log("MQTT-ERROR:",e.message)}))},doSubscribe:function(e){Y.setTopicListner(e.topic)}}}),te=s("8c4f"),se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},ne=[],ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Card",{staticClass:"bg-light p-2 d-flex flex-column"},[s("router-link",{staticClass:"btn btn-lg btn-primary m-2",attrs:{to:"signup"}},[s("i",{staticClass:"bi bi-person-lines-fill"}),e._v("Signup ")]),s("router-link",{staticClass:"btn btn-lg btn-outline-primary m-2",attrs:{to:"login"}},[s("i",{staticClass:"bi bi-box-arrow-in-right"}),e._v("Login ")]),s("router-link",{staticClass:"btn btn-lg btn-secondary m-2",attrs:{to:"about"}},[s("i",{staticClass:"bi bi-question-circle"}),e._v("Help ")])],1)},ie=[],oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rounded-3 shadow-sm"},[e._t("default")],2)},re=[],ce={name:"Card"},le=ce,ue=Object(O["a"])(le,oe,re,!1,null,null,null),de=ue.exports,me={components:{Card:de},data:function(){return{client:void 0}}},pe=me,fe=Object(O["a"])(pe,ae,ie,!1,null,null,null),ve=fe.exports,ge={name:"Home",components:{HelloWorld:ve}},be=ge,he=Object(O["a"])(be,se,ne,!1,null,null,null),Ce=he.exports,_e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"dashboard"}},[0==e.$store.state.devices.length?s("Card",{staticClass:"alert alert-info text-center"},[e._v(" It looks like you didn't add any devices yet ! "),s("br"),e._v(" Head to the "),s("router-link",{attrs:{to:"manager"}},[e._v(" Manager ")]),e._v(" and start adding devices ")],1):e._e(),s("SensorList"),s("SwitchList")],1)},Ee=[],Te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Card",{staticClass:"my-2 pb-2 bg-light"},[s("div",{staticClass:"h3"},[s("span",{staticClass:"badge gradient-blue px-3"},[e._v("Switches")])]),s("div",{staticClass:"mx-0 mx-md-2"},[e.$store.state.devicesLoading?s("ele-spinner"):e._e(),e._l(e.switches,(function(e){return s("SwitchDevice",{key:e.id,attrs:{device:e}})}))],2)])},we=[],ye=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"switch p-2 m-1 my-3 bg-white shadow-sm rounded-3"},[s("div",{staticClass:"row"},[e._m(0),s("div",{staticClass:"device-details col-7 col-sm-4  px-2 m-1"},[s("div",{staticClass:"device-name h6"},[s("span",[s("i",{staticClass:"bi bi-chevron-right"}),e._v(" "+e._s(e.device.name)+" ")])]),s("div",{staticClass:"device-place"},[s("span",[s("i",{staticClass:"bi bi-geo-alt"}),e._v(" "+e._s(e.device.place)+" ")])]),s("div",{staticClass:"device-port"},[s("span",[s("i",{staticClass:"bi bi-cpu"}),e._v(" "+e._s(e.device.port)+" ")])])]),s("div",{staticClass:"options col-12 col-sm-5 mx-auto my-1 my-sm-0 d-flex flex-column"},[s("ele-action-btn",{staticClass:"btn-primary",attrs:{"is-loading":e.isLoading,"is-disabled":e.isDisabled,title:e.btnTitle},on:{click:e.btnPower}},[s("i",{staticClass:"bi bi-power",attrs:{slot:"icon"},slot:"icon"})])],1)])])},Se=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon col-3 col-sm-2 rounded-circle d-flex align-items-center justify-content-center"},[n("img",{staticClass:"img-fluid",attrs:{src:s("0d66"),width:"100px"}})])}],De=(s("b0c0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"btn",attrs:{disabled:e.isDisabled},on:{click:function(t){return e.$emit("click")}}},[e.isLoading?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.$slots.icon?[e.isLoading?e._e():e._t("icon")]:e._e(),e._v(" "+e._s(e.title)+" ")],2)}),xe=[],ke={name:"EleBtnAction",props:["isLoading","isDisabled","title"]},Oe=ke,$e=Object(O["a"])(Oe,De,xe,!1,null,null,null),Le=$e.exports,je={name:"SwitchDevice",components:{eleActionBtn:Le},props:{device:Object},data:function(){return{isLoading:!0,isDisabled:!0}},computed:{btnTitle:function(){return this.device.isOn?"TURN OFF":"TURN ON"}},created:function(){var e=this;this.lockBtn(!0),Y.setTopicListner(this.device.topic,(function(t){console.log("switch",e.device.name," received ",t),e.device.isOn="1"===t,e.lockBtn(!1)})).then((function(){console.log("switch.listner - set")})).catch((function(e){console.log("switch.listner - error",e)}))},beforeDestroy:function(){Y.getClient().removeAllListeners()},methods:{btnPower:function(){this.lockBtn(!0);var e=this.device.isOn?"0":"1";Y.publishData(this.device.topic,e).then((function(){console.log("switch state published")})).catch((function(e){console.log("swicth.publish.error",e)}))},lockBtn:function(e){this.isLoading=this.isDisabled=e}}},Ae=je,Me=(s("2ceb"),Object(O["a"])(Ae,ye,Se,!1,null,null,null)),Ie=Me.exports,Pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ne=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"spinner-border text-secondary m-2",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[e._v("Loading...")])])])}],Fe={},Qe=Fe,Re=Object(O["a"])(Qe,Pe,Ne,!1,null,null,null),qe=Re.exports,Ue={components:{SwitchDevice:Ie,Card:de,eleSpinner:qe},computed:{switches:function(){return this.$store.getters.switchDevices}}},Ve=Ue,Be=(s("d17f"),Object(O["a"])(Ve,Te,we,!1,null,null,null)),He=Be.exports,Ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Card",{staticClass:"bg-light pb-2"},[s("div",{staticClass:"h3"},[s("span",{staticClass:"badge gradient-blue px-3"},[e._v("Sensors")])]),e.$store.state.devicesLoading?s("ele-spinner"):e._e(),s("div",{staticClass:"d-flex flex-wrap mx-0 mx-md-2 device-list"},e._l(e.sensors,(function(e){return s("SensorDevice",{key:e.key,attrs:{device:e}})})),1)],1)},ze=[],We=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sensor d-flex m-1 p-1 bg-white rounded-pill shadow-sm"},[s("div",{staticClass:"sensor-value bg-light m-1 rounded-circle text-center p-3 border border-secondary"},[s("span",{staticClass:"text-small"},[e._v(e._s(e.device.value||"-/-"))])]),s("div",{staticClass:"device-details align-self-end"},[s("div",{staticClass:"device-name h6"},[s("span",[s("i",{staticClass:"bi bi-chevron-right"}),e._v(" "+e._s(e.device.name)+" ")])]),s("div",{staticClass:"device-place"},[s("span",[s("i",{staticClass:"bi bi-geo-alt"}),e._v(" "+e._s(e.device.place)+" ")])]),s("div",{staticClass:"device-port"},[s("span",[s("i",{staticClass:"bi bi-cpu"}),e._v(" "+e._s(e.device.port)+" ")])])])])},Ke=[],Je={name:"SensorDevice",props:{device:Object},mounted:function(){var e=this;Y.setTopicListner(this.device.topic,(function(t){e.device.value=t})).then((function(){console.log("Sesnor.lisnter - set")})).catch((function(e){console.log("sensor.listner - err",e)}))}},Ye=Je,Ze=(s("fa61"),Object(O["a"])(Ye,We,Ke,!1,null,null,null)),Xe=Ze.exports,et={name:"SensorList",components:{SensorDevice:Xe,Card:de,eleSpinner:qe},computed:{sensors:function(){return this.$store.getters.sensorDevices},devicesLoading:function(){return this.$store.state.devicesLoading}},mounted:function(){}},tt=et,st=(s("75fd"),Object(O["a"])(tt,Ge,ze,!1,null,null,null)),nt=st.exports,at={name:"Dashboard",components:{SwitchList:He,SensorList:nt,Card:de},data:function(){return{mqttClient:void 0}},computed:{MQTTConfig:function(){return this.$store.state.MQTTConfig},mqttStatus:function(){return this.mqttClient.connected?"connected":"disconnected"}},created:function(){var e=this;console.log("Dashboard:created()"),this.$store.dispatch("connectMqtt").then((function(){e.$store.dispatch("loadMQTTConfig").then((function(){console.log("Dashboard: Devices loaded, MQTT is configured"),e.$store.dispatch("loadDevices")}))}))}},it=at,ot=Object(O["a"])(it,_e,Ee,!1,null,null,null),rt=ot.exports,ct=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("signup-form")],1)},lt=[],ut=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Form",{staticClass:"p-2",scopedSlots:e._u([{key:"title",fn:function(){return[s("h3",[e._v("Create Account")])]},proxy:!0},e.error?{key:"errors",fn:function(){return[e._v(" "+e._s(e.error)+" ")]},proxy:!0}:null,{key:"form",fn:function(){return[s("form",{attrs:{id:"registerForm",method:"POST"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":""!=e.validationFeedbacks.username},attrs:{id:"username",type:"text",name:"username",value:"",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),s("div",{staticClass:"invalid-feedback text-danger"},[e._v(" "+e._s(e.validationFeedbacks.username)+" ")])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":""!=e.validationFeedbacks.email},attrs:{id:"email",type:"email",name:"email",value:"",placeholder:"Email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("div",{staticClass:"invalid-feedback text-danger"},[e._v(" "+e._s(e.validationFeedbacks.email)+" ")])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":""!=e.validationFeedbacks.password},attrs:{id:"password",type:"password",name:"password",value:"",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.validationFeedbacks.password)+" ")])]),s("div",{staticClass:"border-top p-2"},[s("eleActionBtn",{staticClass:"btn-primary mx-2",attrs:{title:"Register","is-disabled":e.isDisabled,"is-loading":e.isDisabled,type:"submit"}}),s("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"login"}},[e._v(" I have account ")])],1)])]},proxy:!0}],null,!0)})},dt=[],mt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Card",[e.$slots.title?s("div",[e._t("title"),s("hr")],2):e._e(),e.$slots.errors?s("div",{staticClass:"alert alert-danger"},[e._t("errors")],2):e._e(),e._t("form")],2)},pt=[],ft={name:"Form",components:{Card:de}},vt=ft,gt=Object(O["a"])(vt,mt,pt,!1,null,null,null),bt=gt.exports,ht={name:"SignupForm",components:{Form:bt,eleActionBtn:Le},data:function(){return{username:"",email:"",password:"",error:"",isDisabled:!1,validationErrors:{}}},computed:{validationFeedbacks:function(){return{username:"".concat(this.validationErrors.username||""),email:"".concat(this.validationErrors.email||""),password:"".concat(this.validationErrors.password||"")}}},methods:{onSubmit:function(){var e=this;console.log("SignupForm:onSubmit()"),this.isDisabled=!0,this.error="",this.validationErrors={},v(this.username,this.email,this.password).then((function(t){console.log("signup passed",{data:t}),e.error="",e.$router.push("login")})).catch((function(t){e.isDisabled=!1,400===t.statusCode?e.validationErrors=t.data.messages:-1===t.statusCode&&(e.error=t.mesaage)}))}}},Ct=ht,_t=(s("8afd"),Object(O["a"])(Ct,ut,dt,!1,null,null,null)),Et=_t.exports,Tt={name:"Signup",components:{SignupForm:Et}},wt=Tt,yt=Object(O["a"])(wt,ct,lt,!1,null,null,null),St=yt.exports,Dt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("login-form")],1)},xt=[],kt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Form",{staticClass:"p-2",scopedSlots:e._u([{key:"title",fn:function(){return[s("h3",[e._v("Login")])]},proxy:!0},e.error?{key:"errors",fn:function(){return[e._v(" "+e._s(e.error)+" ")]},proxy:!0}:null,{key:"form",fn:function(){return[s("form",{attrs:{id:"loginForm",method:"POST",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",type:"text",name:"email",placeholder:"Email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("div",{staticClass:"invalid-feedback"})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",value:"",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("div",{staticClass:"invalid-feedback"})]),s("div",{staticClass:"border-top p-2 text-center"},[s("eleActionBtn",{staticClass:"btn-primary mx-2",attrs:{title:"Login","is-disabled":e.isDisabled,"is-loading":e.isDisabled,type:"submit"}}),s("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"signup"}},[e._v(" I don't have account ")])],1)])]},proxy:!0}],null,!0)})},Ot=[],$t={name:"LoginForm",components:{Form:bt,eleActionBtn:Le},data:function(){return{email:"",password:"",error:null,validationErrors:{},isDisabled:!1}},methods:{onSubmit:function(){var e=this;console.log("LoginForm:onSubmit()"),this.isDisabled=!0,this.error="",g(this.email,this.password).then((function(t){console.log("login passed"),e.error=null,e.validationErrors={},e.$store.commit("SET_USER",t),e.$router.push("dashboard"),e.isDisabled=!1})).catch((function(t){console.error("login failed",t),e.isDisabled=!1,e.password="",-1===t.statusCode?e.error=t.message:400===t.statusCode?(e.validationErrors=t.data.messages,e.error=e.validationErrors?"email and password are required":t.data.message):401===t.statusCode?e.error=t.data.message:e.error=t.message||t.status}))}}},Lt=$t,jt=Object(O["a"])(Lt,kt,Ot,!1,null,null,null),At=jt.exports,Mt={name:"Login",components:{LoginForm:At}},It=Mt,Pt=Object(O["a"])(It,Dt,xt,!1,null,null,null),Nt=Pt.exports,Ft=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h5",[e._v("Manager")]),s("div",{staticClass:"accordion",attrs:{id:"settingsAccordion"}},[s("div",{staticClass:"accordion-item"},[e._m(0),s("div",{staticClass:"accordion-collapse collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-bs-parent":"#settingsAccordion"}},[s("div",{staticClass:"accordion-body bg-light"},[s("div",{staticClass:"mb-2"},[s("button",{staticClass:"btn btn-primary mx-2",on:{click:e.btnAddDevice}},[e._v(" Add Device ")]),s("button",{staticClass:"btn btn-primary mx-2",on:{click:e.btnMyDevices}},[e._v(" My Devices ")])]),s("Card",{staticClass:"p-2 bg-white"},["DevicesTable"==e.selectedComponent?s("DevicesTable"):e._e(),"NewDeviceForm"==e.selectedComponent?s("NewDeviceForm"):e._e()],1)],1)])]),s("div",{staticClass:"accordion-item"},[e._m(1),s("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-bs-parent":"#settingsAccordion"}},[s("div",{staticClass:"accordion-body"},[s("div",[s("MQTTConfig")],1)])])])])])},Qt=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[s("button",{staticClass:"accordion-button",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[s("i",{staticClass:"bi bi-ui-checks-grid"}),e._v(" Devices Manager ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",{staticClass:"accordion-header",attrs:{id:"headingTwo"}},[s("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[s("i",{staticClass:"bi bi-globe"}),e._v(" MQTT Connection Manager ")])])}],Rt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticClass:"table table-hover",attrs:{id:"deviceManager"}},[e._m(0),s("tbody",e._l(e.devices,(function(t){return s("tr",{key:t.key},[s("th",[e._v(e._s(t.port))]),s("td",[e._v(e._s(t.name))]),s("td",[e._v(e._s(t.place))]),s("td",[s("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.topic}})]),s("td",[s("eleActionBtn",{staticClass:"btn-danger",attrs:{"is-disabled":e.isDisabled,"is-loading":e.isLoading},on:{click:function(s){return e.btnDelete(t.key)}}},[s("i",{staticClass:"bi bi-trash",attrs:{slot:"icon"},slot:"icon"})])],1)])})),0)])},qt=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[e._v(" Port ")]),s("th",{attrs:{scope:"col"}},[e._v(" Name ")]),s("th",{attrs:{scope:"col"}},[e._v(" Place ")]),s("th",{attrs:{scope:"col"}},[e._v(" MQTT-Topic ")]),s("th",{attrs:{scope:"col"}})])])}],Ut={name:"DevicesTable",components:{eleActionBtn:Le},data:function(){return{isLoading:!1,isDisabled:!1}},computed:{devices:function(){return this.$store.state.devices}},methods:{btnDelete:function(e){var t=this;console.log("btnDelete()",e),this.isLoading=this.isDisabled=!0,E(this.$store.getters.token,e).then((function(){console.log("Deleted"),t.$store.commit(Z.DELETE_DEVICE,e),t.isLoading=t.isDisabled=!1})).catch((function(e){console.log(e),t.isLoading=t.isDisabled=!1,t.isLoading=t.isDisabled=!1,e.statusCode,e.statusCode}))}}},Vt=Ut,Bt=Object(O["a"])(Vt,Rt,qt,!1,null,null,null),Ht=Bt.exports,Gt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Form",{staticClass:"shadow-none",scopedSlots:e._u([e.error?{key:"errors",fn:function(){return[e._v(" "+e._s(e.error)+" ")]},proxy:!0}:null,{key:"form",fn:function(){return[s("form",{attrs:{id:"loginForm",method:"POST"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":e.validationErrors.name},attrs:{id:"name",type:"text",name:"name",placeholder:"Your device name eg. light",autocomplete:"name",required:""},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.validationFeedbacks.name)+" ")])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.place,expression:"form.place"}],staticClass:"form-control",class:{"is-invalid":e.validationErrors.place},attrs:{id:"place",type:"text",name:"place",placeholder:"place",autocomplete:"place",required:""},domProps:{value:e.form.place},on:{input:function(t){t.target.composing||e.$set(e.form,"place",t.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.validationFeedbacks.place)+" ")])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.port,expression:"form.port"}],staticClass:"form-control",class:{"is-invalid":e.validationErrors.port},attrs:{id:"port",name:"port",placeholder:"Port number",type:"number"},domProps:{value:e.form.port},on:{input:function(t){t.target.composing||e.$set(e.form,"port",t.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.validationFeedbacks.port)+" ")])]),s("div",{},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.form.type,expression:"form.type"}],staticClass:"form-select",class:{"is-invalid":e.validationErrors.type},attrs:{id:"type",name:"type"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"type",t.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:""}},[e._v(" Select a device type from this menu ")]),s("option",{attrs:{value:"switch"}},[e._v(" Switch ")]),s("option",{attrs:{value:"sensor"}},[e._v(" Sensor ")])]),s("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.validationFeedbacks.type)+" ")])]),s("div",{staticClass:"border-top p-2"},[e.info?s("div",{staticClass:"alert alert-success m-1"},[s("span",[e._v(e._s(e.info))])]):e._e(),s("eleActionBtn",{staticClass:"btn-primary",attrs:{title:"Create","is-disabled":e.isDisabled,"is-loading":e.isLoading,type:"submit"}})],1)])]},proxy:!0}],null,!0)})},zt=[],Wt={name:"NewDeviceForm",components:{Form:bt,eleActionBtn:Le},data:function(){return{form:{name:"",place:"",type:"Select a device type from this menu",port:void 0},validationErrors:{},isLoading:!1,isDisabled:!1,info:"",error:""}},computed:{validationFeedbacks:function(){return{name:"".concat(this.validationErrors.name||""),place:"".concat(this.validationErrors.place||""),type:"".concat(this.validationErrors.type||""),port:"".concat(this.validationErrors.port||"")}}},methods:{onSubmit:function(){var e=this;console.log("onSubmit()"),this.isDisabled=!0,this.isLoading=!0,this.info="";var t={name:this.form.name,place:this.form.place,port:this.form.port,type:this.form.type};_(this.$store.getters.token,t).then((function(t){t.device||(e.error="Sorry something went wrong"),e.error="",e.$store.commit(Z.ADD_DEVICE,t.device),e.form={name:"",place:"",port:void 0},e.info="Device is added successfully !",e.isLoading=!1,e.isDisabled=!1})).catch((function(t){e.isLoading=!1,e.isDisabled=!1,-1===t.statusCode?e.error="Something went wrong, try again.":400===t.statusCode?e.validationErrors=t.data.messages:[401,422,403].includes(t.statusCode)?(e.$store.commit(Z.DEL_USER),e.$router.push("login")):e.error="Something went wrong"}))}}},Kt=Wt,Jt=Object(O["a"])(Kt,Gt,zt,!1,null,null,null),Yt=Jt.exports,Zt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h5",[e._v("MQTT Credentilas")]),s("div",{staticClass:"alert alert-warning"},[e._v(" Keep this secret ")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("username")]),s("Toggled",{attrs:{flag:e.userConfirmed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.config.username,expression:"config.username"}],staticClass:"form-control",attrs:{id:"username",type:"text"},domProps:{value:e.config.username},on:{input:function(t){t.target.composing||e.$set(e.config,"username",t.target.value)}}})])],1),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[e._v("password")]),s("Toggled",{attrs:{flag:e.userConfirmed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.config.password,expression:"config.password"}],staticClass:"form-control",attrs:{id:"password",type:"text"},domProps:{value:e.config.password},on:{input:function(t){t.target.composing||e.$set(e.config,"password",t.target.value)}}})])],1),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userConfirmed,expression:"userConfirmed"}],staticClass:"form-check-input",attrs:{id:"confirmed",type:"checkbox",name:"confirmed"},domProps:{checked:Array.isArray(e.userConfirmed)?e._i(e.userConfirmed,null)>-1:e.userConfirmed},on:{change:function(t){var s=e.userConfirmed,n=t.target,a=!!n.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);n.checked?o<0&&(e.userConfirmed=s.concat([i])):o>-1&&(e.userConfirmed=s.slice(0,o).concat(s.slice(o+1)))}else e.userConfirmed=a}}}),e._v(" I know what I am doing ")]),s("Toggled",{attrs:{flag:e.userConfirmed}},[s("button",{staticClass:"btn btn-danger mx-2",on:{click:e.btnChange}},[e._v(" Change ")])]),s("hr"),s("h5",[e._v("Connection Settings")]),s("div",{staticClass:"alert alert-danger"},[e._v(" Do not change unless You know what are you doing ")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"host"}},[e._v("host")]),s("div",{staticClass:"col"},[s("input",{staticClass:"form-control",attrs:{id:"host",type:"text",disabled:""},domProps:{value:e.config.host}})])])],1)},Xt=[],es=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._t("default")],2)},ts=[],ss={name:"ToggledInput",props:["flag"],watch:{flag:function(){this.flag?this.$el.firstElementChild.removeAttribute("disabled"):this.$el.firstElementChild.setAttribute("disabled",this.flag)}},mounted:function(){this.$el.firstElementChild.setAttribute("disabled",this.flag)}},ns=ss,as=Object(O["a"])(ns,es,ts,!1,null,null,null),is=as.exports,os={name:"MQTTConfig",components:{Toggled:is},data:function(){return{userConfirmed:!1,error:""}},computed:{config:function(){return this.$store.state.MQTTConfig}},methods:{btnChange:function(){var e=this;console.log("btnChange()"),w(this.$store.getters.token,{username:this.config.username,password:this.config.password}).then((function(){console.log("MQTT credentials updated")})).catch((function(t){400===t.statusCode?e.error="mqtt username and passowrd are required":e.error=t.message||t.status}))},btnReload:function(){this.$store.dispatch("loadMQTTConfig")}}},rs=os,cs=Object(O["a"])(rs,Zt,Xt,!1,null,null,null),ls=cs.exports,us={name:"Manager",components:{NewDeviceForm:Yt,DevicesTable:Ht,Card:de,MQTTConfig:ls},data:function(){return{selectedComponent:Ht.name}},computed:{devices:function(){return this.$store.state.devices}},methods:{btnAddDevice:function(){this.selectedComponent="NewDeviceForm"},btnMyDevices:function(){this.selectedComponent="DevicesTable"}}},ds=us,ms=Object(O["a"])(ds,Ft,Qt,!1,null,null,null),ps=ms.exports,fs=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Card",{staticClass:"bg-light p-2 d-flex flex-column"},[s("h5",[e._v("Reach")]),s("a",{staticClass:"btn btn-lg btn-outline-secondary m-2",attrs:{href:"#",target:"blank"}},[s("i",{staticClass:"bi bi-envelope-open-fill"}),e._v("omarosmandev@gmail.com ")]),s("a",{staticClass:"btn btn-lg btn-dark m-2",attrs:{href:"https://github.com/3omer/zelite",target:"blank"}},[s("i",{staticClass:"bi bi-github"}),e._v("Zelite Platform ")])])},vs=[],gs={components:{Card:de},data:function(){return{client:void 0}}},bs=gs,hs=Object(O["a"])(bs,fs,vs,!1,null,null,null),Cs=hs.exports;n["a"].use(te["a"]);var _s=[{path:"/",name:"Home",component:Ce,alias:"/home"},{path:"/dashboard",name:"dashboard",component:rt,meta:{requiresAuth:!0}},{path:"/signup",name:"signup",component:St,meta:{forAnonymous:!0}},{path:"/login",name:"login",component:Nt,meta:{forAnonymous:!0}},{path:"/manager",name:"manger",component:ps,meta:{requiresAuth:!0}},{path:"/about",name:"About",component:Cs}],Es=new te["a"]({linkExactActiveClass:"active",routes:_s});Es.beforeEach((function(e,t,s){var n=Es.app.$store.state.user,a=e.matched.some((function(e){return e.meta.requiresAuth})),i=e.matched.some((function(e){return e.meta.forAnonymous}));return a&&!n.token?s("login"):i&&n.token?s("home"):s()}));var Ts=Es;s("7b17"),s("ab8b"),s("cd74");n["a"].config.productionTip=!1,new n["a"]({router:Ts,store:ee,render:function(e){return e(Q)}}).$mount("#app")},"5a8d":function(e,t,s){},6:function(e,t){},7:function(e,t){},"75fd":function(e,t,s){"use strict";s("a891")},8:function(e,t){},"85ec":function(e,t,s){},"8afd":function(e,t,s){"use strict";s("e979")},a891:function(e,t,s){},aad7:function(e,t,s){},c145:function(e,t,s){"use strict";s("f689")},cb76:function(e,t,s){},d17f:function(e,t,s){"use strict";s("5a8d")},e979:function(e,t,s){},f689:function(e,t,s){},fa61:function(e,t,s){"use strict";s("aad7")}});
//# sourceMappingURL=app.b63a0c52.js.map