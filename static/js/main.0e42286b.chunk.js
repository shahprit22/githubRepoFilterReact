(this.webpackJsonpgithub_repository_filters=this.webpackJsonpgithub_repository_filters||[]).push([[0],{30:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),s=n.n(c),o=n(25),i=(n(30),n(4)),u=n(5),l=n(7),h=n(6),j=n(11),p=n.n(j),b=n(1),d=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("input",{type:"text",placeholder:"...Search",onChange:this.props.handleSearch})}}]),n}(r.Component),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={content:[],searchValue:"",contentfilter:[]},e.handleSearch=function(t){var n=e.state.content,r=n.filter((function(e){return e.name.toLowerCase().startsWith(t.currentTarget.value.toLowerCase())}));e.setState({contentfilter:r,searchValue:t.currentTarget.value.toLowerCase()},(function(){""===e.state.searchValue&&e.setState({contentfilter:n})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://api.github.com/users/".concat(this.props.userName,"/repos");p.a.get(t).then((function(t){return e.setState({content:t.data,error:null,contentfilter:t.data})})).catch((function(t){return e.setState({error:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(e.userName!==this.props.userName){var n="https://api.github.com/users/".concat(this.props.userName,"/repos");p.a.get(n).then((function(e){return t.setState({content:e.data,error:null,contentfilter:e.data})})).catch((function(e){return t.setState({error:e})}))}}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.contentfilter;return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("h1",{children:["Welcome ",this.props.userName]}),t?Object(b.jsx)("h1",{children:"Please enter valid username"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{handleSearch:this.handleSearch}),Object(b.jsx)("ul",{children:n.map((function(e){return Object(b.jsx)("li",{children:e.name},e.id)}))})]})]})}}]),n}(r.Component),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:"",userName:null},e.handleChange=function(t){e.setState({user:t.currentTarget.value})},e.handleClick=function(){var t=""===e.state.user?null:e.state.user;e.setState({userName:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.user,n=e.userName;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Welcome to Github"}),Object(b.jsx)("label",{children:"Username : "}),Object(b.jsx)("input",{type:"text",value:t,onChange:this.handleChange}),Object(b.jsx)("button",{onClick:this.handleClick,children:"Find Repo"}),n?Object(b.jsx)(f,{userName:n}):Object(b.jsx)("h1",{children:"Please Enter Username"})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),O()}},[[55,1,2]]]);
//# sourceMappingURL=main.0e42286b.chunk.js.map