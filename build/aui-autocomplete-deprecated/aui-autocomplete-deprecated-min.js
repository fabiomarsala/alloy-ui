YUI.add("aui-autocomplete-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=n.isString,s=n.isNull,o=n.isFunction,u=e.getClassName,a=e.Event.KeyMap,f="alert",l="content",c="helper",h="hidden",p="icon",d="item",v="list",m="loading",t="autocomplete",g="reset",y="results",b="selected",w="icon-circle-arrow-down",E=f,S=m,x=u(t,b),T=u(c,h),N=u(t,v,d),C=u(c,g),k=u(t,y),L=u(t,y,l),A="BACKSPACE",O="TAB",M="ENTER",_="ALT",D="ESC",P="UP",H="DOWN",B="RIGHT",j="WIN_IME",F={node:null,points:["tl","bl"]},I="boundingBox",q="contentBox",R=e.Component.create({NAME:t,ATTRS:{alwaysShowContainer:{value:!1},autoHighlight:{value:!0},applyLocalFilter:{value:null},button:{value:!0},dataSource:{value:null},dataSourceType:{value:null},delimChar:{value:null,setter:function(t){return i(t)&&t.length>0?t=[t]:r(t)||(t=e.Attribute.INVALID_VALUE),t}},forceSelection:{value:!1},input:{value:null},matchKey:{value:0},maxResultsDisplayed:{value:10},minQueryLength:{value:1},queryDelay:{value:.2,getter:function(e){return e*1e3}},queryInterval:{value:.5,getter:function(e){return e*1e3}},queryMatchCase:{value:!1},queryMatchContains:{value:!1},queryQuestionMark:{value:!0},schema:{value:null},schemaType:{value:"",validator:i},suppressInputUpdate:{value:!1},typeAhead:{value:!1},typeAheadDelay:{value:.2,getter:function(e){return e*1e3}},uniqueName:{value:null}},prototype:{initializer:function(t){var n=this;n._overlayAlign=e.mix({},F),n._createDataSource()},renderUI:function(){var e=this;e._renderInput(),e._renderOverlay()},bindUI:function(){var t=this,n=t.button,r=t.inputNode;t.dataSource.on("request",e.bind(n.set,n,p,S)),n.on("click",t._onButtonMouseDown,t),r.on("blur",t._onTextboxBlur,t),r.on("focus",t._onTextboxFocus,t),r.on("keydown",t._onTextboxKeyDown,t),r.on("keypress",t._onTextboxKeyPress,t),r.on("keyup",t._onTextboxKeyUp,t);var i=t.overlay.get(I);i.on("click",t._onContainerClick,t),i.on("mouseout",t._onContainerMouseout,t),i.on("mouseover",t._onContainerMouseover,t),i.on("scroll",t._onContainerScroll,t),t.publish("containerCollapse"),t.publish("containerExpand"),t.publish("containerPopulate"),t.publish("dataError"),t.publish("dataRequest"),t.publish("dataReturn"),t.publish("itemArrowFrom"),t.publish("itemArrowTo"),t.publish("itemMouseOut"),t.publish("itemMouseOver"),t.publish("itemSelect"),t.publish("selectionEnforce"),t.publish("textboxBlur"),t.publish("textboxChange"),t.publish("textboxFocus"),t.publish("textboxKey"),t.publish("typeAhead"),t.publish("unmatchedItemSelect"),t.overlay.after("visibleChange",t._realignContainer,t)},syncUI:function(){var e=this;e.inputNode.setAttribute("autocomplete","off")},destructor:function(){var e=this;e.overlay.destroy()},doBeforeExpandContainer:function(){return!0},doBeforeLoadData:function(e){return!0},filterResults:function(e){var t=this,n=e.callback,s=e.request,o=e.response;n&&n.argument&&n.argument.query&&(s=n.argument.query);if(s){var u=t.dataSource,a=o.results,f=[],l=!1,c=t.get("matchKey"),h=t.get("queryMatchCase"),p=t.get("queryMatchContains"),d=s=="*",v=t.get("schema.resultFields");for(var m=a.length-1;m>=0;m--){var g=a[m],y=null;i(g)?y=g:r(g)?y=g[0]:v&&(y=g[c||v[0]]);if(i(y)){var b=-1;h?b=y.indexOf(decodeURIComponent(s)):b=y.toLowerCase().indexOf(decodeURIComponent(s).toLowerCase()),(d||!p&&b===0||p&&b>-1)&&f.unshift(g)}}o.results=f}return o},formatResult:function(e,t,n){return n||""},generateRequest:function(e){return{request:e}},handleResponse:function(e){var t=this;t._populateList(e);var n=w;e.error&&(n=E),t.button.set(p,n)},sendQuery:function(e){var t=this;t.set("focused",null);var n=e;t.get("delimChar")&&(e=t.inputNode.get("value")+e),t._sendQuery(n)},_clearInterval:function(){var e=this;e._queryIntervalId&&(clearInterval(e._queryIntervalId),e._queryIntervalId=null)},_clearSelection:function(){var e=this,t=e.get("delimChar"),n={previous:"",query:e.inputNode.get("value")};t&&(n=e._extractQuery(e.inputNode.get("value"))),e.fire("selectionEnforce",n.query)},_createDataSource:function(){var t=this;t._queryTask=e.debounce(t.sendQuery,t.get("queryDelay"),t);var n=t.get("dataSource"),r=n,s=t.get("dataSourceType");n instanceof e.DataSource.Local||(s||(s="Local",o(r)?s="Function":i(r)&&(s="IO")),n=new e.DataSource[s]({source:r})),n.on("error",t.handleResponse,t),n.after("response",t.handleResponse,t),s=n.name,s=="dataSourceLocal"&&t.set("applyLocalFilter",!0),t.set("dataSource",n),t.set("dataSourceType",s),t.dataSource=n;var u=t.get("schema");if(u)if(u.fn)t.dataSource.plug(u);else{var a=t.get("schemaType"),f={array:e.Plugin.DataSourceArraySchema,json:e.Plugin.DataSourceJSONSchema,text:e.Plugin.DataSourceTextSchema,xml:e.Plugin.DataSourceXMLSchema};a=a.toLowerCase()||"array",t.dataSource.plug({fn:f[a],cfg:{schema:u}})}t.set("schema",u)},_enableIntervalDetection:function(){var t=this,n=t.get("queryInterval");!t._queryIntervalId&&n&&(t._queryInterval=setInterval(e.bind(t._onInterval,t),n))},_extractQuery:function(e){var t=this,n=t.get("delimChar"),r=-1,i=n.length-1,s,o,u;for(;i>=0;i--)s=e.lastIndexOf(n[i]),s>r&&(r=s);if(n[i]==" ")for(var a=n.length-1;a>=0;a--)if(e[r-1]==n[a]){r--;break}if(r>-1){o=r+1;while(e.charAt(o)==" ")o+=1;u=e.substring(0,o),e=e.substring(o)}else u="";return{previous:u,query:e}},_focus:function(){var e=this;setTimeout(function(){e.inputNode.focus()},0)},_jumpSelection:function(){var e=this;e._elCurListItem?e._selectItem(e._elCurListItem):e._toggleContainer(!1)},_moveSelection:function(e){var t=this;if(t.overlay.get("visible")){var n=t._elCurListItem,r=-1;n&&(r=Number(n.getAttribute("data-listItemIndex")));var i=r-1;a.isKey(e,H)&&(i=r+1),i==-1&&(i=t._displayedItems-1),i>=t._displayedItems&&(i=0);if(i<-2)return;n&&(t._toggleHighlight(n,"from"),t.fire("itemArrowFrom",n));if(i==-1){t.get("delimChar")?t.inputNode.set("value",t._pastSelections+t._currentQuery):t.inputNode.set("value",t._currentQuery);return}if(i==-2){t._toggleContainer(!1);return}var s=t.resultList.get("childNodes").item(i),o=t.overlay.get(q),u=o.getStyle("overflow"),f=o.getStyle("overflowY"),l=u=="auto"||
u=="scroll"||f=="auto"||f=="scroll";if(l&&i>-1&&i<t._displayedItems){var c=-1,h=s.get("offsetTop"),p=h+s.get("offsetHeight"),d=o.get("offsetHeight"),v=o.get("scrollTop"),m=d+v;a.isKey(e,H)?p>m?c=p-d:p<v&&(c=h):h<d?c=h:h>m&&(c=p-d),c>-1&&o.set("scrollTop",c)}t._toggleHighlight(s,"to"),t.fire("itemArrowTo",s),t.get("typeAhead")&&t._updateValue(s)}},_onButtonMouseDown:function(e){var t=this;e.halt(),t._focus(),t._sendQuery(t.inputNode.get("value")+"*")},_onContainerClick:function(e){var t=this,n=e.target,r=n.get("nodeName").toLowerCase();e.halt();while(n&&r!="table"){switch(r){case"body":return;case"li":t._toggleHighlight(n,"to"),t._selectItem(n);return;default:}n=n.get("parentNode"),n&&(r=n.get("nodeName").toLowerCase())}},_onContainerMouseout:function(e){var t=this,n=e.target,r=n.get("nodeName").toLowerCase();while(n&&r!="table"){switch(r){case"body":return;case"li":t._toggleHighlight(n,"from"),t.fire("itemMouseOut",n);break;case"ul":t._toggleHighlight(t._elCurListItem,"to");break;case"div":if(n.hasClass(k)){t._overContainer=!1;return}break;default:}n=n.get("parentNode"),n&&(r=n.get("nodeName").toLowerCase())}},_onContainerMouseover:function(e){var t=this,n=e.target,r=n.get("nodeName").toLowerCase();while(n&&r!="table"){switch(r){case"body":return;case"li":t._toggleHighlight(n,"to"),t.fire("itemMouseOut",n);break;case"div":if(n.hasClass(k)){t._overContainer=!0;return}break;default:}n=n.get("parentNode"),n&&(r=n.get("nodeName").toLowerCase())}},_onContainerScroll:function(e){var t=this;t._focus()},_onInterval:function(){var e=this,t=e.inputNode.get("value"),n=e._lastValue;t!=n&&(e._lastValue=t,e._sendQuery(t))},_onTextboxBlur:function(e){var t=this;if(!t._overContainer||a.isKey(t._keyCode,O)){if(!t._itemSelected){var n=t._textMatchesOption(),r=t.overlay.get("visible");!r||r&&s(n)?t.get("forceSelection")?t._clearSelection():t.fire("unmatchedItemSelect",t._currentQuery):t.get("forceSelection")&&t._selectItem(n)}t._clearInterval(),t.blur(),t._initInputValue!==t.inputNode.get("value")&&t.fire("textboxChange"),t.fire("textboxBlur"),t._toggleContainer(!1)}else t._focus()},_onTextboxFocus:function(e){var t=this;t.get("focused")||(t.inputNode.setAttribute("autocomplete","off"),t.focus(),t._initInputValue=t.inputNode.get("value"),t.fire("textboxFocus"))},_onTextboxKeyDown:function(e){var t=this,n=e.keyCode;t._typeAheadDelayId!=-1&&clearTimeout(t._typeAheadDelayId),e.isKey(O)?t._elCurListItem?(t.get("delimChar")&&t._keyCode!=n&&t.overlay.get("visible")&&e.halt(),t._selectItem(t._elCurListItem)):t._toggleContainer(!1):e.isKey(M)?t._elCurListItem?(t._keyCode!=n&&t.overlay.get("visible")&&e.halt(),t._selectItem(t._elCurListItem)):t._toggleContainer(!1):e.isKey(D)?t._toggleContainer(!1):e.isKey(P)?t.overlay.get("visible")&&(e.halt(),t._moveSelection(n)):e.isKey(B)?t._jumpSelection():e.isKey(H)?t.overlay.get("visible")&&(e.halt(),t._moveSelection(n)):(t._itemSelected=!1,t._toggleHighlight(t._elCurListItem,"from"),t.fire("textboxKey",n)),e.isKey(_)&&t._enableIntervalDetection(),t._keyCode=n},_onTextboxKeyPress:function(e){var t=this,n=e.keyCode;e.isKey(O)?t.overlay.get("visible")&&(t.get("delimChar")&&e.halt(),t._elCurListItem?t._selectItem(t._elCurListItem):t._toggleContainer(!1)):e.isKey(M)&&t.overlay.get("visible")&&(e.halt(),t._elCurListItem?t._selectItem(t._elCurListItem):t._toggleContainer(!1)),e.isKey(j)&&t._enableIntervalDetection()},_onTextboxKeyUp:function(e){var t=this,n=t.inputNode,r=n.get("value");if(e.isSpecialKey()&&!e.isKey(A))return;t._queryTask(r)},_populateList:function(e){var t=this;t._typeAheadDelayId!=-1&&clearTimeout(t._typeAheadDelayId);var n=e.request,s=e.response,o=e.callback,u=n=="*";o&&o.argument&&o.argument.query&&(e.request=n=o.argument.query);var a=t.doBeforeLoadData(e);if(a&&!e.error){t.fire("dataReturn",e);var f=t.get("focused");if(u||f||f===null){var l=decodeURIComponent(n);t._currentQuery=l,t._itemSelected=!1;var c=e.response.results,h=Math.min(c.length,t.get("maxResultsDisplayed")),p=t.get("schema.resultFields"),d=t.get("matchKey");!d&&p?d=p[0]:d=d||0;if(h>0){var v=t.resultList.get("childNodes");v.each(function(e,n,s){if(n<h){var o=c[n],u="";i(o)?u=o:r(o)?u=o[0]:u=o[d],e._resultMatch=u,e._resultData=o,e.html(t.formatResult(o,l,u)),e.removeClass(T)}else e.addClass(T)}),t._displayedItems=h,t.fire("containerPopulate",n,c);if(n!="*"&&t.get("autoHighlight")){var m=t.resultList.get("firstChild");t._toggleHighlight(m,"to"),t.fire("itemArrowTo",m),t._typeAhead(m,n)}else t._toggleHighlight(t._elCurListItem,"from");a=t.doBeforeExpandContainer(n,c),t._toggleContainer(a)}else t._toggleContainer(!1);return}}else t.fire("dataError",n)},_realignContainer:function(e){var t=this,n=t._overlayAlign;e.newVal&&t.overlay._uiSetAlign(n.node,n.points)},_renderInput:function(){var t=this,n=t.get(q),r=t.get("input"),i={field:{labelText:!1},icons:[{icon:"icon-circle-arrow-down",id:"trigger",handler:{fn:t._onButtonMouseDown,context:t}}]},s=null,o=null;r&&(r=e.one(r),i.field.node=r,s=r.next(),o=r.get("parentNode"));var u=(new e.Combobox(i)).render(n);if(o){var a=u.get("boundingBox");o.insertBefore(a,s)}t.inputNode=u.get("node"),t.button=u.icons.item(0),t.set("uniqueName",e.stamp(t.inputNode))},_renderListElements:function(){var e=this,t=e.get("maxResultsDisplayed"),n=e.resultList,r=[];while(t--)r[t]='<li class="'+T+" "+N+'" data-listItemIndex="'+t+'"></li>';n.html(r.join(""))},_renderOverlay:function(){var t=this,n=t._overlayAlign;n.node=t.inputNode;var r=new e.OverlayBase({align:n,bodyContent:"<ul></ul>",visible:!1,width:t.inputNode.get("offsetWidth"),zIndex:1}),i=r.get(q);r.get(I).addClass(k),i.addClass(L),r.render(),r.addTarget(t),t.overlay=r,t.resultList=i.one("ul"),t.resultList.addClass(C),t._renderListElements()},_selectItem:function(e){var t=this;t._itemSelected=!0,t._updateValue(e),t._pastSelections=t.inputNode.get("value"),t._clearInterval(),t.fire("itemSelect",e,e._resultData),t._toggleContainer(!1)},_sendQuery:function(e){var t=this;if(t.get("disabled")){t._toggleContainer(!1);return}var n=
t.get("delimChar"),r=t.get("minQueryLength");if(n){var i=t._extractQuery(e);e=i.query,t._pastSelections=i.previous}if(e&&e.length<r||!e&&r>0){t._queryTask.cancel(),t._toggleContainer(!1);return}e=encodeURIComponent(e),t.get("applyLocalFilter")&&t.dataSource.on("response",t.filterResults,t);var s=t.generateRequest(e);t.fire("dataRequest",e,s),t.dataSource.sendRequest(s)},_textMatchesOption:function(){var e=this,t=null,n=e._displayedItems,r=e.resultList.get("childNodes");for(var i=0;i<n.length;i++){var s=r.item(i),o=(""+s._resultMatch).toLowerCase();if(o==e._currentQuery.toLowerCase()){t=s;break}}return t},_toggleContainer:function(e){var t=this,n=t.overlay;if(t.get("alwaysShowContainer")&&n.get("visible"))return;e||(t._toggleHighlight(t._elCurListItem,"from"),t._displayedItems=0,t._currentQuery=null),e?(n.show(),t.fire("containerExpand")):(n.hide(),t.fire("containerCollapse"))},_toggleHighlight:function(e,t){var n=this;e&&(n._elCurListItem&&(n._elCurListItem.removeClass(x),n._elCurListItem=null),t=="to"&&(e.addClass(x),n._elCurListItem=e))},_typeAhead:function(t,n){var r=this;if(!r.get("typeAhead")||a.isKey(r._keyCode,A))return;var i=e.Node.getDOMNode(r.inputNode);if(i.setSelectionRange||i.createTextRange)r._typeAheadDelayId=setTimeout(function(){var e=i.value,s=e.length;r._updateValue(t);var o=i.value.length;r.inputNode.selectText(s,o);var u=i.value.substr(s,o);r.fire("typeAhead",n,u)},r.get("typeAheadDelay"))},_updateValue:function(e){var t=this;if(!t.get("suppressInputUpdate")){var n=t.inputNode,r=e._resultMatch,i=t.get("delimChar");i=i&&i[0]||i;var s="";i?(s=t._pastSelections,s+=r+i,i!=" "&&(s+=" ")):s=r,n.set("value",s),n.get("type")=="textarea"&&n.set("scrollTop",n.get("scrollHeight"));var o=s.length;n.selectText(o,o),t._elCurListItem=e}},_currentQuery:null,_displayedItems:0,_elCurListItem:null,_initInputValue:null,_itemSelected:!1,_keyCode:null,_lastValue:null,_overContainer:!1,_pastSelections:"",_typeAheadDelayId:-1}});e.AutoCompleteDeprecated=R},"3.0.3-deprecated.50",{requires:["aui-base-deprecated","aui-overlay-base-deprecated","datasource","dataschema","aui-form-combobox-deprecated"],skinnable:!0});
