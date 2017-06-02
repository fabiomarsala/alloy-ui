if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-data-editor/aui-data-editor.js']) {
   __coverage__['build/aui-data-editor/aui-data-editor.js'] = {"path":"build/aui-data-editor/aui-data-editor.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":46}}},"2":{"name":"(anonymous_2)","line":38,"loc":{"start":{"line":38,"column":17},"end":{"line":38,"column":28}}},"3":{"name":"(anonymous_3)","line":64,"loc":{"start":{"line":64,"column":16},"end":{"line":64,"column":27}}},"4":{"name":"(anonymous_4)","line":74,"loc":{"start":{"line":74,"column":13},"end":{"line":74,"column":24}}},"5":{"name":"(anonymous_5)","line":84,"loc":{"start":{"line":84,"column":13},"end":{"line":84,"column":24}}},"6":{"name":"(anonymous_6)","line":97,"loc":{"start":{"line":97,"column":23},"end":{"line":97,"column":34}}},"7":{"name":"(anonymous_7)","line":107,"loc":{"start":{"line":107,"column":26},"end":{"line":107,"column":37}}},"8":{"name":"(anonymous_8)","line":117,"loc":{"start":{"line":117,"column":25},"end":{"line":117,"column":36}}},"9":{"name":"(anonymous_9)","line":128,"loc":{"start":{"line":128,"column":17},"end":{"line":128,"column":33}}},"10":{"name":"(anonymous_10)","line":142,"loc":{"start":{"line":142,"column":20},"end":{"line":142,"column":39}}},"11":{"name":"(anonymous_11)","line":160,"loc":{"start":{"line":160,"column":19},"end":{"line":160,"column":37}}},"12":{"name":"(anonymous_12)","line":208,"loc":{"start":{"line":208,"column":21},"end":{"line":208,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":265,"column":112}},"2":{"start":{"line":9,"column":0},"end":{"line":18,"column":17}},"3":{"start":{"line":29,"column":0},"end":{"line":262,"column":3}},"4":{"start":{"line":39,"column":8},"end":{"line":40,"column":36}},"5":{"start":{"line":42,"column":8},"end":{"line":42,"column":79}},"6":{"start":{"line":44,"column":8},"end":{"line":44,"column":70}},"7":{"start":{"line":46,"column":8},"end":{"line":46,"column":44}},"8":{"start":{"line":47,"column":8},"end":{"line":47,"column":50}},"9":{"start":{"line":48,"column":8},"end":{"line":48,"column":48}},"10":{"start":{"line":50,"column":8},"end":{"line":54,"column":11}},"11":{"start":{"line":65,"column":8},"end":{"line":65,"column":38}},"12":{"start":{"line":75,"column":8},"end":{"line":75,"column":21}},"13":{"start":{"line":85,"column":8},"end":{"line":87,"column":9}},"14":{"start":{"line":86,"column":12},"end":{"line":86,"column":24}},"15":{"start":{"line":88,"column":8},"end":{"line":88,"column":31}},"16":{"start":{"line":98,"column":8},"end":{"line":98,"column":44}},"17":{"start":{"line":108,"column":8},"end":{"line":108,"column":50}},"18":{"start":{"line":118,"column":8},"end":{"line":118,"column":48}},"19":{"start":{"line":129,"column":8},"end":{"line":129,"column":54}},"20":{"start":{"line":131,"column":8},"end":{"line":131,"column":37}},"21":{"start":{"line":132,"column":8},"end":{"line":132,"column":56}},"22":{"start":{"line":143,"column":8},"end":{"line":143,"column":81}},"23":{"start":{"line":145,"column":8},"end":{"line":150,"column":9}},"24":{"start":{"line":146,"column":12},"end":{"line":146,"column":32}},"25":{"start":{"line":149,"column":12},"end":{"line":149,"column":32}},"26":{"start":{"line":161,"column":8},"end":{"line":166,"column":9}},"27":{"start":{"line":162,"column":12},"end":{"line":162,"column":36}},"28":{"start":{"line":165,"column":12},"end":{"line":165,"column":36}},"29":{"start":{"line":209,"column":16},"end":{"line":211,"column":20}}},"branchMap":{"1":{"line":85,"type":"if","locations":[{"start":{"line":85,"column":8},"end":{"line":85,"column":8}},{"start":{"line":85,"column":8},"end":{"line":85,"column":8}}]},"2":{"line":145,"type":"if","locations":[{"start":{"line":145,"column":8},"end":{"line":145,"column":8}},{"start":{"line":145,"column":8},"end":{"line":145,"column":8}}]},"3":{"line":161,"type":"if","locations":[{"start":{"line":161,"column":8},"end":{"line":161,"column":8}},{"start":{"line":161,"column":8},"end":{"line":161,"column":8}}]}},"code":["(function () { YUI.add('aui-data-editor', function (A, NAME) {","","/**"," * The Data Editor Component"," *"," * @module aui-data-editor"," */","","var CSS_EDITOR = A.getClassName('data', 'editor'),","    CSS_EDITOR_CONTENT_INNER = A.getClassName('data', 'editor', 'content', 'inner'),","    CSS_EDITOR_LABEL = A.getClassName('data', 'editor', 'label'),","    CSS_EDITOR_REQUIRED_LABEL = A.getClassName('data', 'editor', 'required', 'label'),","","    TPL_EDITOR = '<div class=\"' + CSS_EDITOR + '\">' +","        '<div><label class=\"' + CSS_EDITOR_LABEL + ' control-label\"></label>' +","        '<label class=\"' + CSS_EDITOR_REQUIRED_LABEL + ' control-label\">{required}</label></div>' +","        '<div class=\"' + CSS_EDITOR_CONTENT_INNER + '\"></div>' +","        '</div>';","","/**"," * A base class for Data Editor. All data editors should extend from this."," *"," * @class A.DataEditor"," * @extends A.Base"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.DataEditor = A.Base.create('data-editor', A.Base, [], {","    TPL_EDITOR_CONTENT: '<div></div>',","","    /**","     * Constructor for the `A.DataEditor`. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var contentNode,","            node = this.get('node');","","        contentNode = A.Lang.sub(this.TPL_EDITOR_CONTENT, this.get('strings'));","","        node.one('.' + CSS_EDITOR_CONTENT_INNER).setHTML(contentNode);","","        this._uiSetLabel(this.get('label'));","        this._uiSetRequired(this.get('required'));","        this._uiSetVisible(this.get('visible'));","","        this.after({","            labelChange: this._afterLabelChange,","            requiredChange: this._afterRequiredChange,","            visibleChange: this._afterVisibleChange","        });","    },","","    /**","     * Destructor lifecycle implementation for the `A.DataEditor` class.","     * Lifecycle.","     *","     * @method destructor","     * @protected","     */","    destructor: function() {","        this.get('node').remove(true);","    },","","    /**","     * Returns `true` if this edited value has no elements.","     * This should be overridden by subclasses, otherwise it always returns `false`.","     *","     * @method isEmpty","     */","    isEmpty: function() {","        return false;","    },","","    /**","     * If the data editor is required and empty this will return false.","     *","     * @method isValid","     * @return {Boolean}","     */","    isValid: function() {","        if(!this.get('required')) {","            return true;","        }","        return !this.isEmpty();","    },","","    /**","     * Fired after the `label` attribute is set.","     *","     * @method _afterLabelChange","     * @protected","     */","    _afterLabelChange: function() {","        this._uiSetLabel(this.get('label'));","    },","","    /**","     * Fired after the `required` attribute is set.","     *","     * @method _afterRequiredChange","     * @protected","     */","    _afterRequiredChange: function() {","        this._uiSetRequired(this.get('required'));","    },","","    /**","     * Fired after the `visible` attribute is set.","     *","     * @method _afterVisibleChange","     * @protected","     */","    _afterVisibleChange: function() {","        this._uiSetVisible(this.get('visible'));","    },","","    /**","     * Updates the ui according to the value of the `label` attribute.","     *","     * @method _uiSetLabel","     * @param {String} label","     * @protected","     */","    _uiSetLabel: function(label) {","        var labelNode = this.get('node').one('label');","","        labelNode.set('text', label);","        labelNode.toggleView(A.Lang.trim(label) !== '');","    },","","    /**","     * Updates the ui according to the value of the `required` attribute.","     *","     * @method _uiSetRequired","     * @param required","     * @protected","     */","    _uiSetRequired: function(required) {","        var requiredNode = this.get('node').one('.' + CSS_EDITOR_REQUIRED_LABEL);","","        if (required) {","            requiredNode.show();","        }","        else {","            requiredNode.hide();","        }","    },","","    /**","     * Updates the ui according to the value of the `visible` attribute.","     *","     * @method _uiSetVisible","     * @param visible","     * @protected","     */","    _uiSetVisible: function(visible) {","        if (visible) {","            this.get('node').show();","        }","        else {","            this.get('node').hide();","        }","    }","}, {","    /**","     * Static property used to define the default attribute configuration","     * for the `A.DataEditor`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * The value after edition.","         *","         * @attribute editedValue","         * @default null","         * @type *","         */","        editedValue: {","            value: null","        },","","        /**","         * The label to be used by this boolean editor.","         *","         * @attribute label","         * @default ''","         * @type String","         */","        label: {","            value: ''","        },","","        /**","         * The node where the editor UI is rendered.","         *","         * @attribute node","         * @type Node","         */","        node: {","            readOnly: true,","            valueFn: function() {","                return A.Node.create(A.Lang.sub(TPL_EDITOR, {","                    required: this.get('strings').required","                }));","            }","        },","","        /**","         * The value to be edited.","         *","         * @attribute originalValue","         * @default null","         * @type *","         */","        originalValue: {","            value: null","        },","","        /**","         * Defines if the data editor is required or not.","         *","         * @attribute required","         * @default false","         */","        required: {","            validator: A.Lang.isBoolean,","            value: false","        },","","        /**","         * Collection of strings used to label elements of the UI.","         *","         * @attribute strings","         * @type {Object}","         */","        strings: {","            value: {","                required: 'REQUIRED'","            },","            writeOnce: true","        },","","        /**","         * Determines if `DataEditor` is visible or not.","         *","         * @attribute visible","         * @default false","         * @type Boolean","         */","        visible: {","            validator: A.Lang.isBoolean,","            value: true","        }","    }","});","","","}, '3.0.3-deprecated.50', {\"requires\": [\"aui-classnamemanager\", \"base-build\", \"node-base\"], \"skinnable\": true});","","}());"]};
}
var __cov_TePcNprVCKzRhno2CtcQWQ = __coverage__['build/aui-data-editor/aui-data-editor.js'];
__cov_TePcNprVCKzRhno2CtcQWQ.s['1']++;YUI.add('aui-data-editor',function(A,NAME){__cov_TePcNprVCKzRhno2CtcQWQ.f['1']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['2']++;var CSS_EDITOR=A.getClassName('data','editor'),CSS_EDITOR_CONTENT_INNER=A.getClassName('data','editor','content','inner'),CSS_EDITOR_LABEL=A.getClassName('data','editor','label'),CSS_EDITOR_REQUIRED_LABEL=A.getClassName('data','editor','required','label'),TPL_EDITOR='<div class="'+CSS_EDITOR+'">'+'<div><label class="'+CSS_EDITOR_LABEL+' control-label"></label>'+'<label class="'+CSS_EDITOR_REQUIRED_LABEL+' control-label">{required}</label></div>'+'<div class="'+CSS_EDITOR_CONTENT_INNER+'"></div>'+'</div>';__cov_TePcNprVCKzRhno2CtcQWQ.s['3']++;A.DataEditor=A.Base.create('data-editor',A.Base,[],{TPL_EDITOR_CONTENT:'<div></div>',initializer:function(){__cov_TePcNprVCKzRhno2CtcQWQ.f['2']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['4']++;var contentNode,node=this.get('node');__cov_TePcNprVCKzRhno2CtcQWQ.s['5']++;contentNode=A.Lang.sub(this.TPL_EDITOR_CONTENT,this.get('strings'));__cov_TePcNprVCKzRhno2CtcQWQ.s['6']++;node.one('.'+CSS_EDITOR_CONTENT_INNER).setHTML(contentNode);__cov_TePcNprVCKzRhno2CtcQWQ.s['7']++;this._uiSetLabel(this.get('label'));__cov_TePcNprVCKzRhno2CtcQWQ.s['8']++;this._uiSetRequired(this.get('required'));__cov_TePcNprVCKzRhno2CtcQWQ.s['9']++;this._uiSetVisible(this.get('visible'));__cov_TePcNprVCKzRhno2CtcQWQ.s['10']++;this.after({labelChange:this._afterLabelChange,requiredChange:this._afterRequiredChange,visibleChange:this._afterVisibleChange});},destructor:function(){__cov_TePcNprVCKzRhno2CtcQWQ.f['3']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['11']++;this.get('node').remove(true);},isEmpty:function(){__cov_TePcNprVCKzRhno2CtcQWQ.f['4']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['12']++;return false;},isValid:function(){__cov_TePcNprVCKzRhno2CtcQWQ.f['5']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['13']++;if(!this.get('required')){__cov_TePcNprVCKzRhno2CtcQWQ.b['1'][0]++;__cov_TePcNprVCKzRhno2CtcQWQ.s['14']++;return true;}else{__cov_TePcNprVCKzRhno2CtcQWQ.b['1'][1]++;}__cov_TePcNprVCKzRhno2CtcQWQ.s['15']++;return!this.isEmpty();},_afterLabelChange:function(){__cov_TePcNprVCKzRhno2CtcQWQ.f['6']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['16']++;this._uiSetLabel(this.get('label'));},_afterRequiredChange:function(){__cov_TePcNprVCKzRhno2CtcQWQ.f['7']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['17']++;this._uiSetRequired(this.get('required'));},_afterVisibleChange:function(){__cov_TePcNprVCKzRhno2CtcQWQ.f['8']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['18']++;this._uiSetVisible(this.get('visible'));},_uiSetLabel:function(label){__cov_TePcNprVCKzRhno2CtcQWQ.f['9']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['19']++;var labelNode=this.get('node').one('label');__cov_TePcNprVCKzRhno2CtcQWQ.s['20']++;labelNode.set('text',label);__cov_TePcNprVCKzRhno2CtcQWQ.s['21']++;labelNode.toggleView(A.Lang.trim(label)!=='');},_uiSetRequired:function(required){__cov_TePcNprVCKzRhno2CtcQWQ.f['10']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['22']++;var requiredNode=this.get('node').one('.'+CSS_EDITOR_REQUIRED_LABEL);__cov_TePcNprVCKzRhno2CtcQWQ.s['23']++;if(required){__cov_TePcNprVCKzRhno2CtcQWQ.b['2'][0]++;__cov_TePcNprVCKzRhno2CtcQWQ.s['24']++;requiredNode.show();}else{__cov_TePcNprVCKzRhno2CtcQWQ.b['2'][1]++;__cov_TePcNprVCKzRhno2CtcQWQ.s['25']++;requiredNode.hide();}},_uiSetVisible:function(visible){__cov_TePcNprVCKzRhno2CtcQWQ.f['11']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['26']++;if(visible){__cov_TePcNprVCKzRhno2CtcQWQ.b['3'][0]++;__cov_TePcNprVCKzRhno2CtcQWQ.s['27']++;this.get('node').show();}else{__cov_TePcNprVCKzRhno2CtcQWQ.b['3'][1]++;__cov_TePcNprVCKzRhno2CtcQWQ.s['28']++;this.get('node').hide();}}},{ATTRS:{editedValue:{value:null},label:{value:''},node:{readOnly:true,valueFn:function(){__cov_TePcNprVCKzRhno2CtcQWQ.f['12']++;__cov_TePcNprVCKzRhno2CtcQWQ.s['29']++;return A.Node.create(A.Lang.sub(TPL_EDITOR,{required:this.get('strings').required}));}},originalValue:{value:null},required:{validator:A.Lang.isBoolean,value:false},strings:{value:{required:'REQUIRED'},writeOnce:true},visible:{validator:A.Lang.isBoolean,value:true}}});},'3.0.3-deprecated.50',{'requires':['aui-classnamemanager','base-build','node-base'],'skinnable':true});
