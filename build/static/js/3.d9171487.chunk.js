(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__36hQ5"}},49:function(e,t,c){e.exports={comments:"Comments_comments__1ndQL"}},50:function(e,t,c){e.exports={form:"NewCommentForm_form__ajq7I",loading:"NewCommentForm_loading__2_iUg",control:"NewCommentForm_control__tImcZ",actions:"NewCommentForm_actions__17603"}},51:function(e,t,c){e.exports={item:"CommentItem_item__2AFne"}},52:function(e,t,c){e.exports={comments:"CommentsList_comments__33CSI"}},54:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(48),m=c.n(a),r=c(0),j=function(e){return Object(r.jsxs)("figure",{className:m.a.quote,children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsx)("figcaption",{children:e.author})]})},i=c(20),d=c(49),u=c.n(d),l=c(50),b=c.n(l),x=c(18),O=c(19),h=c(13),f=function(e){var t=Object(n.useRef)(),c=Object(x.a)(O.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]);var j=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(r.jsxs)("form",{className:b.a.form,onSubmit:j,children:["pending"===o&&Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(h.a,{})}),Object(r.jsxs)("div",{className:b.a.control,onSubmit:j,children:[Object(r.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(r.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(r.jsx)("div",{className:b.a.actions,children:Object(r.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=c(51),_=c.n(p),N=function(e){return Object(r.jsx)("li",{className:_.a.item,children:Object(r.jsx)("p",{children:e.text})})},C=c(52),g=c.n(C),v=function(e){return Object(r.jsx)("ul",{className:g.a.comments,children:e.comments.map((function(e){return Object(r.jsx)(N,{text:e.text},e.id)}))})},q=function(){var e,t=Object(n.useState)(!1),c=Object(i.a)(t,2),o=c[0],a=c[1],m=Object(s.j)(),j=Object(x.a)(O.c),d=j.sendRequest,l=j.status,b=j.data,p=m.quoteId,_=Object(n.useCallback)((function(){d(p)}),[d,p]);"pending"===l&&(e=Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(h.a,{})})),"completed"===l&&(b||b.length>0)&&(e=Object(r.jsx)(v,{comments:b})),"completed"===l&(!b||0===b.length)&&(e=Object(r.jsx)("p",{className:"centered",children:"No comments were added yet!"}));return Object(n.useEffect)((function(){d(p)}),[p,d]),Object(r.jsxs)("section",{className:u.a.comments,children:[Object(r.jsx)("h2",{children:"User Comments"}),!o&&Object(r.jsx)("button",{className:"btn",onClick:function(){a(!0)},children:"Add a Comment"}),o&&Object(r.jsx)(f,{quoteId:p,onAddedComment:_}),e]})};t.default=function(){var e=Object(x.a)(O.e,!0),t=e.sendRequest,c=e.status,a=e.data,m=(e.error,Object(s.k)()),i=Object(s.j)().quoteId;return Object(n.useEffect)((function(){t(i)}),[t,i]),"pending"===c?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(h.a,{})}):(a.text,Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(j,{text:a.text,author:a.author}),Object(r.jsx)(s.c,{path:m.path,exact:!0,children:Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(o.b,{className:"btn--flat",to:"".concat(m.url,"/comments"),children:"Load Comments"})})}),Object(r.jsx)(s.c,{path:"".concat(m.path,"/comments"),children:Object(r.jsx)(q,{})})]}))}}}]);
//# sourceMappingURL=3.d9171487.chunk.js.map