webpackJsonp([5],{0:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}l(239);var a=l(64),c=l(75),r=n(c),s=l(74),m=n(s);l(82),l(83),l(84),l(1110);var i=l(1),o=l(12),E=l(318).parseQueryString;window.$=l(50);var u=window.$,d=l(76).default,p=i.createClass({displayName:"BodyArticle",getInitialState:function(){return{fontSize:12,article:{}}},componentDidMount:function(){var e=E(location.href).pdId,t=this;u.get(d+"list/q/"+e,function(e){t.setState({article:e.data.rows[0]}),document.oncontextmenu=function(){return!1},document.getElementsByTagName("body")[0].oncopy=function(){return!1}})},handleChangefont:function(e){this.setState({fontSize:e})},render:function(){var e=this.state.article;return i.createElement("div",null,i.createElement("div",{className:"container article"},i.createElement("div",{className:"ad"},i.createElement("img",{style:{width:"100%"},src:l(1457)})),i.createElement("p",{className:"nav_top"},i.createElement("strong",null,"当前位置："),i.createElement("a",null,"经济>税收"),i.createElement("a",null,"北京"),i.createElement("a",null,"市政府文件"),"  >>  ",i.createElement("span",null,"经济")),i.createElement("div",{className:"row title"},i.createElement("div",{className:"col-lg-6 col-xs-12"},i.createElement("p",null,i.createElement("span",null,"主题分类"),i.createElement("a",{href:"#"},e.topicClassify)),i.createElement("p",null,i.createElement("span",null,"发文机构"),i.createElement("a",{href:"#"},e.pubOrg)),i.createElement("p",null,i.createElement("span",{style:{letterSpacing:"5px"}},"有效性"),i.createElement("a",null,e.isEffect?"现行有效":"无效"))),i.createElement("div",{className:"col-lg-6 col-sxs-12"},i.createElement("p",null,i.createElement("span",null,"成文日期"),i.createElement("a",{href:"#"},e.createDate)),i.createElement("p",null,i.createElement("span",null,"发文字号"),i.createElement("a",{href:"#"},e.issuedNum)),i.createElement("p",null,i.createElement("span",null,"原文链接"),i.createElement("a",{href:e.linkAddress},e.link)))),i.createElement("div",{className:"row content"},i.createElement("div",{className:"col-lg-9 col-xs-9"},i.createElement("div",{className:"top text-right"},i.createElement("span",null,"326666"),i.createElement("span",null,"326666"),i.createElement("span",{className:"font"},"字号：",i.createElement("a",{onClick:this.handleChangefont.bind(this,12),style:{color:12===this.state.fontSize&&"#FA5353",fontSize:"24px"}},"A"),i.createElement("a",{onClick:this.handleChangefont.bind(this,14),style:{color:14===this.state.fontSize&&"#FA5353",fontSize:"30px"}},"A"),i.createElement("a",{onClick:this.handleChangefont.bind(this,18),style:{color:18===this.state.fontSize&&"#FA5353",fontSize:"36px"}},"A")),i.createElement("span",null,"打印全文"),i.createElement("span",null,"326666")),i.createElement("div",{className:""},i.createElement("h2",{style:{marginBottom:"20px"},className:"text-center"},e.pdName),i.createElement("p",{style:{fontSize:this.state.fontSize},dangerouslySetInnerHTML:{__html:e.content}})),i.createElement("div",{className:"fenxiang"},i.createElement("ul",null,i.createElement("li",null,"分享到:"),i.createElement("li",null),i.createElement("li",null),i.createElement("li",null)))),i.createElement("div",{className:"col-lg-3 col-xs-3 bg"},i.createElement("div",{className:"right_content"},i.createElement("p",{className:"like"},"猜你喜欢"),i.createElement("div",{className:"pad"},i.createElement("a",{href:"#"},"[政策解读]"),i.createElement("p",null,"北京市政府熟手保证你好"),i.createElement("p",null,i.createElement("span",null,"2016-08-11"),i.createElement("span",{className:"pull-right"},"3.2万"),i.createElement("span",{className:"pull-right"},"3.2万")))),i.createElement("div",{className:"right_content"},i.createElement("p",{className:"like"},"相关政策"),i.createElement("div",{className:"pad"},i.createElement("a",{href:"#"},"[政策解读]"),i.createElement("p",null,"北京市政府熟手保证你好"),i.createElement("p",null,i.createElement("span",null,"2016-08-11"),i.createElement("span",{className:"pull-right"},"3.2万"),i.createElement("span",{className:"pull-right"},"3.2万")))))),i.createElement("div",null,i.createElement(a.BackTop,null))))}});o.render(i.createElement(r.default,null),document.getElementsByClassName("g-hd")[0]),o.render(i.createElement(m.default,null),document.getElementsByClassName("g-ft")[0]),o.render(i.createElement(p,null),document.getElementsByClassName("g-bd")[0])},1110:function(e,t){},1457:function(e,t,l){e.exports=l.p+"./img/a74dd25041e4371d6bdbbebf6d6bc827.png"}});