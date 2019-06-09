(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,n,t){e.exports=t(343)},343:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"getGeneration",function(){return de}),t.d(r,"getGenerationError",function(){return ge}),t.d(r,"showAllGeneration",function(){return he});var a={};t.r(a),t.d(a,"getPokemon",function(){return tn}),t.d(a,"getPokemonError",function(){return rn}),t.d(a,"pokemonPagination",function(){return an}),t.d(a,"updatePokemonPagination",function(){return on}),t.d(a,"responsePokemonData",function(){return cn}),t.d(a,"getAllPokemons",function(){return un});var o=t(0),i=t.n(o),c=t(22),u=t.n(c),l=t(23),s=t(20),m=t(24),f=t(105),p=t(14),d=Object(p.a)({basename:"/"}),g=t(18),h={loading:!0},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_POKEMON":return Object(g.a)({},e,{payload:{loading:!1,pokemon:n.pokemon,image:n.image}});case"GET_POKEMON_ERROR":return Object(g.a)({},e,{payload:{loading:!0,error:n.error}});default:return Object(g.a)({},e)}},y={loading:!0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SHOW_PAGINATION":return Object(g.a)({},e,{payload:{limit:n.limit+150}});case"GET_POKEMON_ERROR":return Object(g.a)({},e,{payload:{loading:!0,error:n.error}});default:return Object(g.a)({},e)}},O={payload:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_POKEMON":return Object(g.a)({},e,{payload:{loading:!1,generation:n.generation}});case"GET_POKEMON_ERROR":return Object(g.a)({},e,{payload:{loading:!0,error:n.error}});default:return Object(g.a)({},e)}},k=Object(s.c)({pokemon:b,generation:E,pagination:v,router:Object(m.connectRouter)(d)}),j=[Object(m.routerMiddleware)(d),f.a],w=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),G=Object(s.e)(Object(m.connectRouter)(d)(k),Object(s.d)(s.a.apply(void 0,j),w));console.log(G.getState());var P=G,x=t(73),A=t(346),S=t(347),_=t(52),I=t(53),D=t(56),R=t(54),T=t(57),N=t(5),M=t(6),C=t(348),K={primary:"#DC0A2D",secondary:"#0449A8",primaryDarken:"#A80221",secondaryDarken:"#0187D9",secondaryLight:"#039ADA",flying:"#A890F0",bug:"#A8B820",dark:"#705848",eletric:"#F8D030",fairy:"#EE99AC",ghost:"#705898",ice:"#98D8D8",normal:"#A8A878",poison:"#A040A0",rock:"#B8A038",ground:"#E0C068",steel:"#B8B8D0",water:"#6890F0",fighting:"#C03028",psychic:"#F85888",grass:"#78C850",fire:"#F08030",dragon:"#7038F8",light:"#f3f3f3",white:"#fff",grey:"#D9D9D9",coolGrey:"#212121",regular:"#333",shadow:"rgba(223, 234, 235, 0.3)"},V={regular:400,bold:700};t(76);function B(){var e=Object(N.a)(["\n  background-color: ",";\n\n  .navbar-brand {\n    color: ",";\n    font-weight: ",";\n  }\n"]);return B=function(){return e},e}var F=Object(M.a)(C.a)(B(),function(e){return e.background||K.primary},function(e){return e.color||K.white},V.bold),X=function(e){var n=e.title;return i.a.createElement(F,null,i.a.createElement(F.Brand,{href:"#home"},n))},L=t(11);function U(){var e=Object(N.a)(["\n  background: red;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: red;\n  color: white;\n  text-align: center;\n"]);return U=function(){return e},e}function W(){var e=Object(N.a)(["\n  color: ",";\n\n  p {\n    color: ",";\n  }\n\n"]);return W=function(){return e},e}var H=Object(M.a)(L.e)(W(),function(e){return e.color||K.light},K.white),J=Object(M.a)(L.c)(U()),q=function(e){e.params;return i.a.createElement(J,{container:!0},i.a.createElement(L.c,{item:!0,xs:12},i.a.createElement(H,{style:{color:"white"},variant:"body1"},"Made with ",i.a.createElement("span",{role:"img","aria-label":"Emoticon de cora\xe7\xe3o"},"\ufe0f\u2764\ufe0f"))))};function z(){var e=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: "," !important;\n\n  p {\n    font-weight: ",";\n    color: "," !important;\n    padding-right: 1em;\n  } \n\n  :hover {\n    transform: scale(1.2);\n    background-color: "," !important;\n  }\n"]);return z=function(){return e},e}function Q(){var e=Object(N.a)(["\n  color: "," !important;\n  padding-top: 0.4em;\n  padding-bottom: 0.4em;\n\n  ::first-letter {\n    text-transform: uppercase !important;\n  }\n  \n  :hover {\n      color: "," !important;\n  }\n"]);return Q=function(){return e},e}var Y={cardPokemon:{height:300,width:200}},Z=Object(M.a)(L.e)(Q(),K.coolGrey,K.light),$=Object(M.a)(L.d)(z(),K.light,V.bold,K.coolGrey,K.primary);function ee(){var e=Object(N.a)([""]);return ee=function(){return e},e}function ne(){var e=Object(N.a)(["\n  flex-grow: 1;\n  min-height: 100vh;\n  background-color: ",";\n  color: ",";\n"]);return ne=function(){return e},e}var te=Object(M.a)(L.c)(ne(),function(e){return e.background||K.coolGrey},function(e){return e.color||K.coolGrey}),re=(M.a.img(ee()),t(345)),ae=function(e){var n=e.generations;e.nextPage;return i.a.createElement(te,{container:!0,justify:"center",alignItems:"center"},n.map(function(e){return e.map(function(e){return i.a.createElement(L.c,{item:!0,xs:12,sm:4,align:"center",key:e},i.a.createElement(L.a,{component:re.a,to:{pathname:"/pokedex",state:{limit:"".concat(e)}}},i.a.createElement($,{style:Y.cardPokemon,elevation:4},i.a.createElement(Z,{align:"center",variant:"title"},e))))})}))};function oe(){var e=Object(N.a)(["\n  color: "," !important;\n"]);return oe=function(){return e},e}function ie(){var e=Object(N.a)([""]);return ie=function(){return e},e}function ce(){var e=Object(N.a)(["\n  flex-grow: 1;\n  min-height: 100vh;\n"]);return ce=function(){return e},e}var ue=Object(M.a)(L.c)(ce()),le=Object(M.a)(L.c)(ie()),se=Object(M.a)(L.b)(oe(),function(e){return e.spinnercolor||K.primary}),me=function(e){var n=e.show,t=e.color;return!!n&&i.a.createElement(ue,{container:!0,justify:"center",alignItems:"center",spacing:16},i.a.createElement(le,{item:!0},i.a.createElement(se,{spinnercolor:t||K.primary})))},fe=function(e){return!!e.show&&e.children},pe=["Gera\xe7\xe3o I","Gera\xe7\xe3o II","Gera\xe7\xe3o III","Gera\xe7\xe3o IV","Gera\xe7\xe3o V","Gera\xe7\xe3o VI"];function de(e){return{type:"GET_POKEMON",generation:e}}function ge(e){return{type:"GET_POKEMON_ERROR",error:e}}function he(){return function(e){e(de(pe))}}var be=function(e){function n(e){var t;return Object(_.a)(this,n),(t=Object(D.a)(this,Object(R.a)(n).call(this,e))).state={loading:!0,generations:[]},t}return Object(T.a)(n,e),Object(I.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.showAllGeneration(),setTimeout(function(){e.showAllGeneration(),e.setState({loading:!1})},500)}},{key:"showAllGeneration",value:function(){var e=this.state.generations,n=this.props.generation;e.push(n.payload.generation)}},{key:"render",value:function(){var e=this.state,n=e.loading,t=e.generations;return i.a.createElement("div",null,i.a.createElement(X,{title:"AwesomePokedex",background:"coral"}),i.a.createElement(te,{container:!0,justify:"center",alignItems:"center"},i.a.createElement(me,{show:n}),i.a.createElement(fe,{show:!n},i.a.createElement(ae,{generations:t})),i.a.createElement(q,null)))}}]),n}(o.Component),ye=Object(l.connect)(function(e){return e},r)(be),ve=t(45),Oe=t.n(ve),Ee=t(47),ke=t.n(Ee),je=t(46),we=t.n(je),Ge=t(48),Pe=t.n(Ge);function xe(){var e=Object(N.a)(["\n  background-color: "," !important;\n  color: "," !important;\n  border-radius: 3px !important;\n  padding-left: 0.8em !important;\n  padding-right: 0.8em !important;\n"]);return xe=function(){return e},e}function Ae(){var e=Object(N.a)(["\n  padding-right: 1em;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]);return Ae=function(){return e},e}function Se(){var e=Object(N.a)(["\n  background-color: "," !important;\n\n  p {\n    font-weight: ",";\n    color: "," !important;\n    padding-right: 1em;\n  }\n"]);return Se=function(){return e},e}function _e(){var e=Object(N.a)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 1em;\n"]);return _e=function(){return e},e}function Ie(){var e=Object(N.a)(["\n  color: "," !important;\n  padding-top: 0.4em;\n  padding-bottom: 0.4em;\n\n  ::first-letter {\n    text-transform: uppercase !important;\n  }\n"]);return Ie=function(){return e},e}function De(){var e=Object(N.a)([""]);return De=function(){return e},e}function Re(){var e=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10em;\n  width: 100%;\n  background-color: ",";\n"]);return Re=function(){return e},e}function Te(){var e=Object(N.a)(["\n  /* position: absolute;  */\n"]);return Te=function(){return e},e}var Ne={root:{flexGrow:1},cardPokemon:{height:300,width:200,margin:16},media:{height:140}},Me=M.a.img(Te()),Ce=M.a.div(Re(),K.grey),Ke=(Object(M.a)(Oe.a)(De()),Object(M.a)(ke.a)(Ie(),K.coolGrey)),Ve=M.a.div(_e()),Be=Object(M.a)(we.a)(Se(),K.light,V.bold,K.coolGrey),Fe=M.a.div(Ae()),Xe=Object(M.a)(Pe.a)(xe(),function(e){return e.background},K.white),Le=t(37),Ue=t.n(Le),We=function(e){var n=e.pokemons;return i.a.createElement(Ue.a,{align:"center",container:!0,style:Ne.root},n.map(function(e){return e.pokemon.map(function(n){return i.a.createElement(Ue.a,{item:!0,xs:12,sm:2,key:n.id},i.a.createElement(Be,{style:Ne.cardPokemon,elevation:2},i.a.createElement(Ke,{align:"right",variant:"body1"},"#",n.id),i.a.createElement(Ce,null,i.a.createElement(Me,{src:"".concat(e.image).concat(n.name,".gif")})),i.a.createElement(Ke,{variant:"title"},n.name),i.a.createElement(Ve,null,n.types.map(function(e,n){return i.a.createElement(Xe,{key:n,label:e.type.name,background:"poison"===e.type.name?K.poison:"grass"===e.type.name?K.grass:"bug"===e.type.name?K.bug:"fire"===e.type.name?K.fire:"water"===e.type.name?K.water:"flying"===e.type.name?K.flying:"normal"===e.type.name?K.normal:"ground"===e.type.name?K.ground:"electric"===e.type.name?K.eletric:"fairy"===e.type.name?K.fairy:"fighting"===e.type.name?K.fighting:"psychic"===e.type.name?K.psychic:"rock"===e.type.name?K.rock:"steel"===e.type.name?K.steel:"dragon"===e.type.name?K.dragon:null})})),i.a.createElement(Fe,null)))})}))};We.defaultProps={pokemons:[]};var He=We,Je=function(e){var n=e.pokemons;return i.a.createElement("div",null,i.a.createElement(X,{title:"AwesomePokedex"}),i.a.createElement(te,{container:!0},i.a.createElement(He,{pokemons:n}),i.a.createElement(q,null)))},qe=t(71),ze=t.n(qe),Qe=t(111),Ye=t(72),Ze=t.n(Ye),$e="http://pokestadium.com/sprites/xy/",en=[],nn=[];function tn(e,n){return{type:"GET_POKEMON",pokemon:e,image:n}}function rn(e){return{type:"GET_POKEMON_ERROR",error:e}}function an(e){return{type:"SHOW_PAGINATION",limit:e}}function on(e){return function(n){console.log("estou funcionando"),n(an(e))}}function cn(e,n){e.data.results.map(function(e){return en.push(e.url)}),en.forEach(function(e){Ze.a.get(e).then(function(e){var t=e.data;nn.push(t),nn.sort(function(e,n){return e.id-n.id}),n(tn(nn,$e))}).catch(function(e){n(rn(e))})})}var un=function(e,n){return function(){var t=Object(Qe.a)(ze.a.mark(function t(r){var a,o,i;return ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=function(e){return e},a=function(e){return e},t.prev=2,t.next=5,Ze()({method:"get",url:"".concat("https://pokeapi.co/api/v2/pokemon/","?offset=").concat(e,"&limit=").concat(n),headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8"}}).then(function(e){console.log(e),cn(e,r)}).catch(function(e){r(rn(e))});case 5:return i=t.sent,t.abrupt("return",a(i));case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",o(t.t0));case 12:case"end":return t.stop()}},t,null,[[2,9]])}));return function(e){return t.apply(this,arguments)}}()},ln=function(e){function n(e){var t;return Object(_.a)(this,n),(t=Object(D.a)(this,Object(R.a)(n).call(this,e))).state={loading:!0,imagePokemon:null,allPokemons:[],activePage:1,generation:t.props.location.state.limit,offSet:0,limit:0},t}return Object(T.a)(n,e),Object(I.a)(n,[{key:"componentWillMount",value:function(){var e=this.state.generation;this.whichGenerationShows(e)}},{key:"componentDidMount",value:function(){var e=this,n=this.state,t=n.limit,r=n.offSet;this.props.getAllPokemons(r,t),setTimeout(function(){e.setAllPokemons(),e.setState({loading:!1})},1e3)}},{key:"componentDidUpdate",value:function(){}},{key:"setAllPokemons",value:function(){var e=this.state.allPokemons,n=this.props.pokemon;e.push(n.payload)}},{key:"handleSearchInput",value:function(e){this.setState({search:e.target.value})}},{key:"whichGenerationShows",value:function(e){switch(e){case"Gera\xe7\xe3o I":this.setState({offSet:0,limit:151});break;case"Gera\xe7\xe3o II":this.setState({offSet:151,limit:251});break;case"Gera\xe7\xe3o III":this.setState({offSet:251,limit:351});break;case"Gera\xe7\xe3o IV":this.setState({offSet:351,limit:451});break;case"Gera\xe7\xe3o V":this.setState({offSet:451,limit:551});break;case"Gera\xe7\xe3o VI":this.setState({offSet:551,limit:651});break;default:this.setState({offSet:252,limit:351})}}},{key:"render",value:function(){var e=this.state,n=e.loading,t=e.allPokemons;this.state.activePage;return i.a.createElement(te,null,i.a.createElement(me,{show:n}),i.a.createElement(fe,{show:!n},i.a.createElement(Je,{title:"AwesomePokedex",pokemons:t})))}}]),n}(o.Component),sn=Object(l.connect)(function(e){return e},a)(ln),mn=x.b.div({enter:{opacity:1,delay:300,beforeChildren:!0},exit:{opacity:0}}),fn=function(){return i.a.createElement(m.ConnectedRouter,{history:d},i.a.createElement(A.a,{render:function(e){var n=e.location;return i.a.createElement(x.a,null,i.a.createElement(mn,{key:n.pathname},i.a.createElement(S.a,{location:n},i.a.createElement(A.a,{exact:!0,path:"/",render:function(e){return i.a.createElement(ye,Object.assign({},e,{params:"leticia"}))},key:"home"}),i.a.createElement(A.a,{path:"/pokedex",render:function(e){return i.a.createElement(sn,e)},key:"pokedex"}))))}}))},pn=function(){return i.a.createElement(l.Provider,{store:P},i.a.createElement(fn,null))};u.a.render(i.a.createElement(pn,null),document.getElementById("root"))},76:function(e,n){}},[[210,1,2]]]);
//# sourceMappingURL=main.0d20a51f.chunk.js.map