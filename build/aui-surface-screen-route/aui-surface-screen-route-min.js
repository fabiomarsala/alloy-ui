YUI.add("aui-surface-screen-route",function(e,t){e.ScreenRoute=e.Base.create("screenRoute",e.Base,[],{matchesPath:function(t){var n=this.get("path");return e.Lang.isString(n)?t===n:e.Lang.isFunction(n)?n(t):e.instanceOf(n,RegExp)?t.search(n)>-1:null},_validatePath:function(t){return e.Lang.isString(t)||e.Lang.isFunction(t)||e.instanceOf(t,RegExp)},_validateScreen:function(t){return e.Lang.isFunction(t)}},{ATTRS:{path:{validator:"_validatePath"},screen:{validator:"_validateScreen"}}})},"3.0.3-deprecated.50",{requires:["base-build"]});
