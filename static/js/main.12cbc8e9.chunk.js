(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(54)},22:function(e,a,t){},24:function(e,a,t){},28:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),o=(t(22),t(4)),s=t(1),u=(t(24),t(2)),i=t(5),m=Object(n.createContext)(null),d=function(e){var a=e.children,t=Object(n.useState)(""),r=Object(u.a)(t,2),c=r[0],o=r[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),d=i[0],f=i[1],p=Object(n.useState)(null),v=Object(u.a)(p,2),E=v[0],g=v[1],j=Object(n.useState)([{player:!1,puntaje:0,jug:"X"},{player:!1,puntaje:0,jug:"O"}]),b=Object(u.a)(j,2),y=b[0],N=b[1],h=Object(n.useState)(!0),x=Object(u.a)(h,2),O=x[0],C=x[1],w=Object(n.useState)(!0),J=Object(u.a)(w,2),k=J[0],S=J[1],X=Object(n.useState)([{celda:"A1",valor:""},{celda:"A2",valor:""},{celda:"A3",valor:""},{celda:"B1",valor:""},{celda:"B2",valor:""},{celda:"B3",valor:""},{celda:"C1",valor:""},{celda:"C2",valor:""},{celda:"C3",valor:""}]),T=Object(u.a)(X,2),G=T[0],B=T[1],F=Object(n.useState)(!1),A=Object(u.a)(F,2),H=A[0],P=A[1],I=Object(n.useState)(!1),M=Object(u.a)(I,2),L=M[0],U=M[1],R=Object(n.useState)(!1),D=Object(u.a)(R,2),q=D[0],z=D[1],K=Object(n.useState)(!1),Q=Object(u.a)(K,2),V=Q[0],W=Q[1];return l.a.createElement(m.Provider,{value:{jugador1:c,setJugador1:o,jugador2:d,setJugador2:f,setXoO:g,XoO:E,players:y,setPlayers:N,errorNoHayJug1:O,seterrorNoHayJug1:C,errorNoHayJug2:k,seterrorNoHayJug2:S,customModalStyles:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255,0.15)"},content:{position:"absolute",backgroundColor:"white",top:"50%",left:"50%",right:"10%",bottom:"-20%",marginRight:"-50%",transform:"translate(-50%, -50%)",transition:"linear",opacity:"100%"}},posiciones:G,setPosiciones:B,posicionesCopia:[{celda:"A1",valor:""},{celda:"A2",valor:""},{celda:"A3",valor:""},{celda:"B1",valor:""},{celda:"B2",valor:""},{celda:"B3",valor:""},{celda:"C1",valor:""},{celda:"C2",valor:""},{celda:"C3",valor:""}],confeti:H,setConfeti:P,modalIsOpen:L,setIsOpen:U,empate:q,setEmpate:z,ganno:V,setGanno:W}},a)},f=function(){var e=Object(n.useContext)(m),a=e.setJugador1,t=e.setJugador2,r=e.setXoO,c=e.jugador1,o=e.jugador2,d=e.players,f=e.setPlayers,p=e.errorNoHayJug1,v=e.seterrorNoHayJug1,E=e.errorNoHayJug2,g=e.seterrorNoHayJug2,j=Object(n.useState)(!1),b=Object(u.a)(j,2),y=b[0],N=b[1],h=Object(n.useState)(!1),x=Object(u.a)(h,2),O=x[0],C=x[1],w=Object(s.f)(),J=function(e){C(!1);for(var a=!0,t=0;t<d.length;t++)if(!d[t].player||!(d[t].player.length<=9)){a=!1,console.log();break}if(d[0].player===d[1].player)return C(!0);(a||!1!==O)&&(N(!0),setTimeout(function(){r(e),w("/Etapa2Greelow/juego")},2e3))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex justify-content-around  align-items-center vh-100"},l.a.createElement("div",{className:"startup"},y?l.a.createElement("div",{className:"d-flex justify-content-around  align-items-center"},l.a.createElement(i.a,{color:"#00BFFF",height:40,width:40})):l.a.createElement("div",{className:"startUpBox border rounded shadow-xl p-5"},l.a.createElement("div",{className:"text-center "},l.a.createElement("h1",null,"TaTeTi"),l.a.createElement("h3",null,"Elijan sus nombres y luego quien empieza"),l.a.createElement("p",{className:O?"text-danger":"d-none"},"Los nombres no pueden ser iguales")),l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement("div",{className:" palabraStartUp text-center m-3"},l.a.createElement("h1",{className:"palabraStartUp d-flex justify-content-around align-items-center"},c),l.a.createElement("input",{className:"m-2",value:c,onChange:function(e){return function(e,t){var n=d.map(function(a){return a.jug===t&&(a.player=e),a});f(n),c.length>=10?a(c.slice(0,-1)):a(e),v(!1),""===e&&v(!0)}(e.target.value,"X")},placeholder:"Jugador 1"}),l.a.createElement("h6",{className:p?"text-danger":"d-none"},"Completa el Jugador 1"),l.a.createElement("h6",{className:c.length>=10?"text-danger":"d-none"},"(Debe ser menos de 10 letras)")),l.a.createElement("h2",{className:"d-flex justify-content-around align-items-center mt-5"},"vs"),l.a.createElement("div",{className:"palabraStartUp text-center m-3"},l.a.createElement("h1",{className:" d-flex justify-content-around align-items-center"},o),l.a.createElement("input",{className:"m-2",value:o,onChange:function(e){return function(e,a){var n=d.map(function(t){return t.jug===a&&(t.player=e),t});f(n),o.length>=10?t(o.slice(0,-1)):t(e),g(!1),""===e&&g(!0)}(e.target.value,"O")},placeholder:"Jugador 2"}),l.a.createElement("h6",{className:E?"text-danger":"d-none"},"Completa el Jugador 2"),l.a.createElement("h6",{className:o.length>=10?"text-danger":"d-none"},"(Debe ser menos de 10 letras)"))),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("div",{className:"btn btn-dark m-1 text-center",onClick:function(){return J("X")}},l.a.createElement("h4",null,"X")),l.a.createElement("div",{className:"btn btn-dark m-1 text-center",onClick:function(){return J("O")}},l.a.createElement("h4",null,"O")))))),l.a.createElement("div",{className:"d-flex justify-content-around  align-items-center vh-100"}))},p=(t(26),t(28),t(15)),v=t.n(p),E=t(16),g=t.n(E),j=t(9),b=t.n(j),y=function(){var e=Object(n.useContext)(m),a=e.XoO,t=e.setXoO,r=e.jugador1,c=e.jugador2,o=e.players,u=e.setPlayers,d=e.customModalStyles,f=e.posiciones,p=e.setPosiciones,E=e.posicionesCopia,j=e.confeti,y=e.setConfeti,N=e.modalIsOpen,h=e.setIsOpen,x=e.empate,O=e.setEmpate,C=e.ganno,w=e.setGanno;function J(){h(!1)}var k=Object(s.f)(),S=function(){O(!1),y(!1),h(!1),p(E),k("/Etapa2Greelow/")};r&&c||setTimeout(function(){k("/Etapa2Greelow/")},3e3);var X=f[0].valor,T=f[1].valor,G=f[2].valor,B=f[3].valor,F=f[4].valor,A=f[5].valor,H=f[6].valor,P=f[7].valor,I=f[8].valor;return Object(n.useEffect)(function(){if(X+T+G===3||X+T+G===0||B+F+A===3||B+F+A===0||H+P+I===3||H+P+I===0||X+B+H===3||X+B+H===0||T+F+P===3||T+F+P===0||G+A+I===3||G+A+I===0||X+F+I===3||X+F+I===0||G+F+H===3||G+F+H===0){w(!0);var e=o.map(function(e){return e.jug!==a&&(e.puntaje++,h(!0),y(!0),setTimeout(function(){y(!1)},1e5)),e});u(e)}else w(!1),""!==X&&""!==T&&""!==G&&""!==B&&""!==F&&""!==A&&""!==H&&""!==P&&""!==I&&(O(!0),h(!0))},[f]),l.a.createElement("div",null,r&&c?l.a.createElement("div",{className:"vh-100 "}," ",l.a.createElement("button",{className:"btn outline-primary m-1"},l.a.createElement("h1",{className:"text-primary float",onClick:function(){return S()}},"\u2b05")),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center "},l.a.createElement(g.a,{isOpen:N,onRequestClose:J,style:d,ariaHideApp:!1},l.a.createElement("div",{className:"d-flex justify-content-around align-items-center"},l.a.createElement("h2",null,x?"Empataron :(":"X"===a?"Ganaste! "+o[0].player:"Ganaste! "+o[1].player)),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center"},l.a.createElement("div",null,l.a.createElement("h5",{className:"d-flex justify-content-around"},"El conteo va:"," "),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center"},l.a.createElement("div",{className:"m-3"},l.a.createElement("p",{className:"bg-secondary rounded p-3"},o[0].puntaje)),l.a.createElement("h4",null,o[0].player," vs ",o[1].player),l.a.createElement("div",{className:"m-3"},l.a.createElement("p",{className:"bg-secondary rounded p-3"},o[1].puntaje))),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("button",{className:"btn btn-success ",onClick:function(){return function(){var e=o.map(function(e){return e.puntaje=0,e});u(e)}()}},"Resetear Conteo")))),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center m-4 "},l.a.createElement("div",{className:"cajaModal row d-flex justify-content-center align-items-center"},f.map(function(e){return l.a.createElement("div",{key:e.celda,id:e.celda,className:"celdaModal col-4 border d-flex justify-content-around align-items-center"},l.a.createElement("h1",{className:1===e.valor?"colorx":"coloro"},1===e.valor?"X":0===e.valor?"O":""))}))),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center m-3 "},l.a.createElement("button",{className:"btn btn-dark",onClick:function(){return S()}},"Inicio"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){return p(E),J(),O(!1),void y(!1)}},"Jugar Otra Ronda"),l.a.createElement("button",{className:"btn btn-danger",onClick:J},"Cerrar")),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center"},l.a.createElement(b.a,{compact:!0,socialMedia:"facebook",url:"https://didiabel.github.io/Etapa2Greelow/",text:"Juga Al TaTeTi"}),l.a.createElement(b.a,{compact:!0,socialMedia:"twitter",url:"https://didiabel.github.io/Etapa2Greelow/",text:"Juga Al TaTeTi"}))),j?l.a.createElement(v.a,{className:"confeti"}):"",l.a.createElement("div",{className:"startUpBox border rounded p-5"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("h1",null,o[0].player,' "',o[0].jug,'"'),l.a.createElement("p",null),l.a.createElement("h1",null," vs "),l.a.createElement("p",null),l.a.createElement("h1",null,'"',o[1].jug,'" ',o[1].player)),l.a.createElement("div",{className:"d-flex justify-content-between"},o.map(function(e){return l.a.createElement("div",{key:e.jug,className:"d-flex "},l.a.createElement("h1",null," ",e.puntaje))})),l.a.createElement("h2",{className:C?"d-none":"d-flex justify-content-around"},"X"===a?"Le toca a: "+o[0].player:"Le toca a: "+o[1].player),l.a.createElement("h2",{className:C?"d-flex justify-content-around":"d-none"},"X"===a?"Ganaste: "+o[0].player:"Ganaste: "+o[1].player),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center "},l.a.createElement("div",{className:"caja row d-flex justify-content-center align-items-center"},f.map(function(e){return l.a.createElement("div",{key:e.celda,id:e.celda,className:"celda col-4 border d-flex justify-content-around align-items-center",onClick:C?function(){return h(!0)}:function(){return function(e){var n=f.map(function(n){return n.celda!==e||""!==n.valor?n:("X"===a?(n.valor=1,t("O")):(n.valor=0,t("X")),n)});p(n)}(e.celda)}},l.a.createElement("h1",{className:1===e.valor?"colorx":"coloro"},1===e.valor?"X":0===e.valor?"O":""))})))))):l.a.createElement("div",{className:"d-flex justify-content-around align-items-center vh-100"},l.a.createElement(i.a,{color:"#00BFFF",height:40,width:40})))};t(49);var N=function(){return l.a.createElement(d,null,l.a.createElement("div",{className:"app"},l.a.createElement(o.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/Etapa2Greelow/",element:l.a.createElement(f,null)}),l.a.createElement(s.a,{path:"/Etapa2Greelow/juego",element:l.a.createElement(y,null)})))))},h=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,55)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),h()}},[[17,3,2]]]);
//# sourceMappingURL=main.12cbc8e9.chunk.js.map