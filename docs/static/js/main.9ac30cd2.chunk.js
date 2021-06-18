(this["webpackJsonp30-days-of-postman-leaderboard"]=this["webpackJsonp30-days-of-postman-leaderboard"]||[]).push([[0],{120:function(e,t,a){},162:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(14),c=a.n(r),o=(a(162),a(46)),i=a(47),h=a(57),l=a(56),d=a(122),p=a.n(d),b=a(139),j=a(93),u=a(70),m=a.n(u),f=a(90),v=a(71),O=a.n(v),x=a(133),g=a(135),w=a.n(g),N=a(132),F=a.n(N),D=(a(120),a(13)),k=300,A=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).fetchData=Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O.a.has(n.props,"preFetch")&&n.props.preFetch(),e.next=4,F.a.get("https://88d3ce90-a071-4e4b-84bc-d4092d42c9e8.mock.pstmn.io/leaders");case 4:t=e.sent,(a=O.a.get(t.data,"completions")).forEach((function(e){e.id=e.workspaceId})),a.length>0&&n.setState({rows:a}),O.a.has(n.props,"postFetch")&&n.props.postFetch(),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),n.state={rows:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:O.a.has(this.props,"refreshInterval")&&(k=this.props.refreshInterval),this.intervalId=setInterval((function(){t.fetchData()}),1e3*k);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.props.noembed?"App-datagrid":"leaderboard-embed";return Object(D.jsx)("div",{className:e,children:Object(D.jsx)(x.a,{columns:[{field:"name",headerName:"Name",description:"Name of the user who has completed the challenge",width:432,sortable:!1},{field:"status",headerName:"Status",description:"Status of the challenge",width:80,renderCell:function(e){return"approved"===e.value?Object(D.jsx)(w.a,{className:"verified-user-icon"}):e.value},sortable:!1,filterable:!1,disableColumnMenu:!0},{field:"dateGranted",headerName:"Date of Grant",description:"Date on which the submission was approved",width:240,sortable:!1}],rows:this.state.rows})})}}]),a}(s.a.Component),I=a(136),y=a(16),C=a.p+"static/media/postman.abad9016.jpg",L=a.p+"static/media/badge.cf91726a.png",S=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleFetchData=function(){n.setState({isFetchingData:!0})},n.handleDataFetched=function(){n.setState({isFetchingData:!1})},n.state={isFetchingData:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=p()("App-logo",{rotate:this.state.isFetchingData});return Object(D.jsx)(I.a,{children:Object(D.jsxs)(y.c,{children:[Object(D.jsx)(y.a,{exact:!0,path:"/",children:Object(D.jsxs)("div",{className:"App",children:[Object(D.jsxs)(b.a,{className:"App-header",elevation:3,children:[Object(D.jsx)("img",{className:e,src:C,alt:"Postman Logo"}),Object(D.jsxs)("div",{className:"App-header-menu",children:[Object(D.jsx)("a",{className:"App-header-menu-navbtn",target:"_self",href:"https://postman.com",children:"Home"}),Object(D.jsx)("a",{className:"App-header-menu-navbtn not-first",rel:"noreferrer",target:"_blank",href:"https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/overview",children:"Challenge"})]})]}),Object(D.jsxs)("div",{className:"App-content",children:[Object(D.jsxs)("div",{className:"App-container",children:[Object(D.jsx)("img",{className:"image-centre badge",src:L,alt:"Challenge Badge"}),Object(D.jsx)("h2",{className:"App-container-title",children:"Leaderboard \ud83c\udfc6"}),Object(D.jsxs)("p",{className:"App-container-text",children:["This is an unofficial leaderboard for the ",Object(D.jsx)("strong",{children:"30 Days of Postman"})," challenge \ud83d\ude80"]}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsxs)("p",{children:["It can also be embedded on HTML, Markdown etc. using the following iframe:",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)(j.a,{language:"js",text:'<iframe\n    src="https://harshit-budhraja.github.io/30-days-of-postman-leaderboard/embed"\n    title="Leaderboard Embed"\n    width="800"\n    height="500"\n/>',codeBlock:!0,theme:j.b,showLineNumbers:!1})]})]}),Object(D.jsx)(A,{noembed:!0,preFetch:this.handleFetchData,postFetch:this.handleDataFetched,refreshInterval:120})]})]})}),Object(D.jsx)(y.a,{exact:!0,path:"/embed",children:Object(D.jsx)(A,{})})]})})}}]),a}(n.Component),M=function(e){e&&e instanceof Function&&a.e(155).then(a.bind(null,430)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(S,{})}),document.getElementById("root")),M()}},[[197,152,153]]]);
//# sourceMappingURL=main.9ac30cd2.chunk.js.map