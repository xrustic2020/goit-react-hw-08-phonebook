(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{136:function(t,e,n){t.exports={title:"Section_title__1tqr1"}},137:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(136),a=n.n(c),r=n(3);function s(t){var e=t.title,n=t.children,c=t.customClass,s=void 0===c?"":c;return Object(r.jsxs)("section",{className:s&&s,children:[Object(r.jsx)("h2",{className:a.a.title,children:e}),n]})}},138:function(t,e,n){t.exports={label:"InputField_label__34Nki",input:"InputField_input__32gyy"}},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(138),a=n.n(c),r=n(3),s=function(t){var e=t.labelName,n=t.type,c=t.name,s=t.value,i=t.handler;return Object(r.jsxs)("label",{className:a.a.label,children:[Object(r.jsx)("span",{children:e}),Object(r.jsx)("input",{type:n,name:c,className:a.a.input,value:s,onChange:function(t){return i(t.target.value)}})]})}},149:function(t,e,n){t.exports={form:"ContactForm_form__3RsOF",overlay:"ContactForm_overlay__ithOz"}},152:function(t,e,n){t.exports={filter:"Filter_filter__2w4sL",label:"Filter_label__3SrdN",input:"Filter_input__2jPPl"}},154:function(t,e,n){t.exports={listItem:"ContactItem_listItem__l3gc2",fullName:"ContactItem_fullName__3s-xt"}},156:function(t,e,n){t.exports={container:"ContactList_container__1aKlu"}},160:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return at}));var c=n(20),a=n(21),r=n.n(a),s=n(140),i=n(13),o=i.a.getRequest,u=i.a.getSuccess,l=i.a.getError,d=i.a.addedRequest,b=i.a.addedSuccess,f=i.a.addedError,j=i.a.deleteRequest,m=i.a.deleteSuccess,h=i.a.deleteError;r.a.defaults.baseURL="https://connections-api.herokuapp.com/";var O={getContacts:function(){return function(t){t(o()),r.a.get("/contacts").then((function(e){var n=e.data;t(u(n))})).catch((function(e){return t(l(e))}))}},addedContact:function(t){return function(e){e(d()),r.a.post("/contacts",t).then((function(t){var n=t.data;e(b(n)),s.b.success('Contact "'.concat(n.name,'" with number "').concat(n.number,'" has been successfully created'))})).catch((function(t){return e(f(t))}))}},deleteContact:function(t){var e=t.id,n=t.name;return function(t){t(j()),r.a.delete("/contacts/".concat(e)).then((function(){t(m(e)),s.b.success('Contact "'.concat(n,'" successfully deleted'))})).catch((function(e){return t(h(e))}))}}},x=n(34),p=function(t){return t.contacts.filter},v=function(t){return t.contacts.loading},_=Object(x.a)([function(t){return t.contacts.items},p],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),C=n(16),N=n(0),g=n(6),F=n(141),y=n(151),w=n.n(y),I=n(158),S=n(149),k=n.n(S),A=(n(150),n(41).a.store);var R=n(139),z=n(3),L=function(t){var e=t.onAddedContact,n=t.setFilter,c=Object(N.useState)(""),a=Object(F.a)(c,2),r=a[0],i=a[1],o=Object(N.useState)(""),u=Object(F.a)(o,2),l=u[0],d=u[1],b=function(t){t.preventDefault();var c=function(t,e,n){if(t){if(e)return A.getState().contacts.items.find((function(e){return e.name===t}))?(s.b.warn('"'.concat(t,'" is already in contacts')),void n(t)):{name:t,number:e};s.b.error('the "Number" field must contain the contact number')}else s.b.error('the "Name" field must contain the name of the contact')}(r,l,n);i(""),d(""),c&&e(c)};return Object(z.jsxs)("form",{onSubmit:function(t){return b(t)},className:k.a.form,children:[Object(z.jsxs)("div",{className:k.a.overlay,children:[Object(z.jsx)(R.a,{labelName:"Name",type:"text",name:"name",value:r,handler:i}),Object(z.jsx)(R.a,{labelName:"Number",type:"number",name:"number",value:l,handler:d})]}),Object(z.jsx)(I.a,{type:"submit",variant:"contained",color:"primary",size:"small",startIcon:Object(z.jsx)(w.a,{}),children:"Add contact"})]})},q=Object(c.b)(null,(function(t){return{onAddedContact:function(e){return t(O.addedContact(e))},setFilter:function(e){return t(i.a.setFilter(e))}}}))(L),D=n(159),E=n(153),J=n.n(E),P=n(152),K=n.n(P),U=function(t){var e=t.filter,n=t.setFilter,c=t.onReset;return Object(z.jsxs)("div",{className:K.a.filter,children:[Object(z.jsxs)("label",{children:[Object(z.jsx)("span",{className:K.a.label,children:"Filter"}),Object(z.jsx)("input",{type:"text",name:"filter",className:K.a.input,value:e,onChange:function(t){return n(t.target.value)}})]}),Object(z.jsx)(D.a,{"aria-label":"delete",onClick:function(){c(),s.b.success("Filter cleaned successfully")},children:e&&Object(z.jsx)(J.a,{})})]})},B=Object(c.b)((function(t){return{filter:p(t)}}),(function(t){return{setFilter:function(e){return t(i.a.setFilter(e))},onReset:function(){return t(i.a.resetFilter(""))}}}))(U),G=n(155),H=n.n(G),M=n(154),Q=n.n(M),T=function(t){var e=t.contact,n=t.onDeleteContact,c=e.name,a=e.number;return Object(z.jsxs)("li",{className:Q.a.listItem,children:[Object(z.jsxs)("div",{className:Q.a.fullName,children:[Object(z.jsxs)("span",{children:[c,": "]}),Object(z.jsx)("span",{children:a})]}),Object(z.jsx)(D.a,{"aria-label":"Delete",onClick:function(){return n(e)},children:Object(z.jsx)(H.a,{})})]})},V=Object(c.b)(null,(function(t){return{onDeleteContact:function(e){return t(O.deleteContact(e))}}}))(T),W=n(156),X=n.n(W),Y=function(t){var e=t.contacts;return Object(z.jsx)("ul",{className:X.a.container,children:e.map((function(t){return Object(z.jsx)(V,{contact:t},t.id)}))})},Z=Object(c.b)((function(t){return{contacts:_(t)}}))(Y),$=n(63),tt=n(137),et=n(37),nt=function(t){var e=t.loading,n=t.getContacts,c=t.isAuthorization;return Object(N.useEffect)((function(){c&&n()}),[]),Object(z.jsxs)($.a,{children:[e&&Object(z.jsx)(et.a,{}),c?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(tt.a,{title:"Added Form",children:Object(z.jsx)(q,{})}),Object(z.jsx)(tt.a,{title:"Contacts",children:Object(z.jsxs)("div",{children:[Object(z.jsx)(B,{}),Object(z.jsx)(Z,{})]})})]}):Object(z.jsx)(g.a,{to:"/"}),Object(z.jsx)(s.a,{})]})},ct={getContacts:O.getContacts},at=Object(c.b)((function(t){return{loading:v(t),isAuthorization:C.c.getIsAuthorization(t)}}),ct)(nt)}}]);
//# sourceMappingURL=Contacts.18da4e69.chunk.js.map