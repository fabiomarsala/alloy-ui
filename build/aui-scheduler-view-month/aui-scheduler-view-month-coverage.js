if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-scheduler-view-month/aui-scheduler-view-month.js']) {
   __coverage__['build/aui-scheduler-view-month/aui-scheduler-view-month.js'] = {"path":"build/aui-scheduler-view-month/aui-scheduler-view-month.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":55}}},"2":{"name":"(anonymous_2)","line":81,"loc":{"start":{"line":81,"column":19},"end":{"line":81,"column":34}}},"3":{"name":"(anonymous_3)","line":115,"loc":{"start":{"line":115,"column":29},"end":{"line":115,"column":44}}},"4":{"name":"(anonymous_4)","line":126,"loc":{"start":{"line":126,"column":21},"end":{"line":126,"column":32}}},"5":{"name":"(anonymous_5)","line":142,"loc":{"start":{"line":142,"column":21},"end":{"line":142,"column":32}}},"6":{"name":"(anonymous_6)","line":156,"loc":{"start":{"line":156,"column":20},"end":{"line":156,"column":31}}},"7":{"name":"(anonymous_7)","line":171,"loc":{"start":{"line":171,"column":31},"end":{"line":171,"column":61}}},"8":{"name":"(anonymous_8)","line":189,"loc":{"start":{"line":189,"column":35},"end":{"line":189,"column":46}}},"9":{"name":"(anonymous_9)","line":205,"loc":{"start":{"line":205,"column":29},"end":{"line":205,"column":44}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":220,"column":89}},"2":{"start":{"line":10,"column":0},"end":{"line":18,"column":92}},"3":{"start":{"line":29,"column":0},"end":{"line":215,"column":3}},"4":{"start":{"line":82,"column":16},"end":{"line":82,"column":36}},"5":{"start":{"line":83,"column":16},"end":{"line":83,"column":58}},"6":{"start":{"line":85,"column":16},"end":{"line":90,"column":18}},"7":{"start":{"line":116,"column":12},"end":{"line":116,"column":70}},"8":{"start":{"line":127,"column":12},"end":{"line":127,"column":32}},"9":{"start":{"line":129,"column":12},"end":{"line":129,"column":54}},"10":{"start":{"line":130,"column":12},"end":{"line":130,"column":53}},"11":{"start":{"line":132,"column":12},"end":{"line":132,"column":82}},"12":{"start":{"line":143,"column":12},"end":{"line":143,"column":32}},"13":{"start":{"line":145,"column":12},"end":{"line":145,"column":54}},"14":{"start":{"line":146,"column":12},"end":{"line":146,"column":53}},"15":{"start":{"line":148,"column":12},"end":{"line":148,"column":87}},"16":{"start":{"line":157,"column":12},"end":{"line":157,"column":32}},"17":{"start":{"line":159,"column":12},"end":{"line":159,"column":82}},"18":{"start":{"line":161,"column":12},"end":{"line":161,"column":54}},"19":{"start":{"line":162,"column":12},"end":{"line":162,"column":53}},"20":{"start":{"line":164,"column":12},"end":{"line":164,"column":59}},"21":{"start":{"line":165,"column":12},"end":{"line":165,"column":63}},"22":{"start":{"line":167,"column":12},"end":{"line":167,"column":76}},"23":{"start":{"line":169,"column":12},"end":{"line":169,"column":99}},"24":{"start":{"line":171,"column":12},"end":{"line":177,"column":15}},"25":{"start":{"line":172,"column":16},"end":{"line":172,"column":86}},"26":{"start":{"line":174,"column":16},"end":{"line":176,"column":17}},"27":{"start":{"line":175,"column":20},"end":{"line":175,"column":74}},"28":{"start":{"line":190,"column":12},"end":{"line":190,"column":32}},"29":{"start":{"line":191,"column":12},"end":{"line":191,"column":54}},"30":{"start":{"line":192,"column":12},"end":{"line":192,"column":53}},"31":{"start":{"line":194,"column":12},"end":{"line":194,"column":58}},"32":{"start":{"line":206,"column":12},"end":{"line":206,"column":32}},"33":{"start":{"line":208,"column":12},"end":{"line":208,"column":54}},"34":{"start":{"line":209,"column":12},"end":{"line":209,"column":65}},"35":{"start":{"line":211,"column":12},"end":{"line":211,"column":68}},"36":{"start":{"line":217,"column":0},"end":{"line":217,"column":42}}},"branchMap":{"1":{"line":174,"type":"if","locations":[{"start":{"line":174,"column":16},"end":{"line":174,"column":16}},{"start":{"line":174,"column":16},"end":{"line":174,"column":16}}]},"2":{"line":174,"type":"binary-expr","locations":[{"start":{"line":174,"column":20},"end":{"line":174,"column":56}},{"start":{"line":174,"column":60},"end":{"line":174,"column":93}}]}},"code":["(function () { YUI.add('aui-scheduler-view-month', function (A, NAME) {","","/**"," * The Scheduler Component"," *"," * @module aui-scheduler"," * @submodule aui-scheduler-view-month"," */","","var Lang = A.Lang,","    isFunction = Lang.isFunction,","","    DateMath = A.DataType.DateMath,","","    getCN = A.getClassName,","","    CSS_SVM_TABLE_DATA_COL_NOMONTH = getCN('scheduler-view-month', 'table', 'data', 'col', 'nomonth'),","    CSS_SVT_TABLE_DATA_COL_TITLE = getCN('scheduler-view', 'table', 'data', 'col', 'title');","","/**"," * A base class for `SchedulerMonthView`."," *"," * @class A.SchedulerMonthView"," * @extends A.SchedulerTableView"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var SchedulerMonthView = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type {String}","     * @static","     */","    NAME: 'scheduler-view-month',","","    /**","     * Static property used to define the default attribute","     * configuration for the `SchedulerMonthView`.","     *","     * @property ATTRS","     * @type {Object}","     * @static","     */","    ATTRS: {","","        /**","         * Contains the number of Days to display in a month view.","         *","         * @attribute displayDaysInterval","         * @default 42","         * @type {Number}","         * @readOnly","         */","        displayDaysInterval: {","            readOnly: true,","            value: 42","        },","","        /**","         * Determines the name for this month view.","         *","         * @attribute name","         * @default 'month'","         * @type {String}","         */","        name: {","            value: 'month'","        },","","        /**","         * Contains the function that formats the navigation date.","         *","         * @attribute navigationDateFormatter","         * @type {Function}","         */","        navigationDateFormatter: {","            value: function(date) {","                var instance = this;","                var scheduler = instance.get('scheduler');","","                return A.DataType.Date.format(","                    date, {","                        format: '%B %Y',","                        locale: scheduler.get('locale')","                    }","                );","            },","            validator: isFunction","        }","    },","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type {Object}","     * @static","     */","    EXTENDS: A.SchedulerTableView,","","    prototype: {","","        /**","         * Returns a date value of the first day of the month with its time","         * adjusted to midnight.","         *","         * @method getAdjustedViewDate","         * @param {Date} date","         * @return {Date}","         */","        getAdjustedViewDate: function(date) {","            return DateMath.toMidnight(DateMath.findMonthStart(date));","        },","","        /**","         * Returns the value of the date that follows the month view's current","         * date.","         *","         * @method getNextDate","         * @return {Date}","         */","        getNextDate: function() {","            var instance = this;","","            var scheduler = instance.get('scheduler');","            var viewDate = scheduler.get('viewDate');","","            return DateMath.toLastHour(DateMath.add(viewDate, DateMath.MONTH, 1));","        },","","        /**","         * Returns the value of the date that preceeds the month view's current","         * date.","         *","         * @method getPrevDate","         * @return {Date}","         */","        getPrevDate: function() {","            var instance = this;","","            var scheduler = instance.get('scheduler');","            var viewDate = scheduler.get('viewDate');","","            return DateMath.toMidnight(DateMath.subtract(viewDate, DateMath.MONTH, 1));","        },","","        /**","         * Plots all events in the current view.","         *","         * @method plotEvents","         */","        plotEvents: function() {","            var instance = this;","","            A.SchedulerMonthView.superclass.plotEvents.apply(instance, arguments);","","            var scheduler = instance.get('scheduler');","            var viewDate = scheduler.get('viewDate');","","            var monthEnd = DateMath.findMonthEnd(viewDate);","            var monthStart = DateMath.findMonthStart(viewDate);","","            var currentIntervalStart = instance._findCurrentIntervalStart();","","            var colTitleNodes = instance.tableRowContainer.all('.' + CSS_SVT_TABLE_DATA_COL_TITLE);","","            colTitleNodes.each(function(colTitleNode, index) {","                var celDate = DateMath.add(currentIntervalStart, DateMath.DAY, index);","","                if (DateMath.before(celDate, monthStart) || DateMath.after(celDate, monthEnd)) {","                    colTitleNode.addClass(CSS_SVM_TABLE_DATA_COL_NOMONTH);","                }","            });","        },","","        /**","         * Returns the current interval start by finding the first day of the","         * week with the `Scheduler`'s `viewDate`.","         *","         * @method _findCurrentIntervalStart","         * @protected","         * @return {Date} The current interval start from the first day of the","         * week with the `Scheduler`'s `viewDate`.","         */","        _findCurrentIntervalStart: function() {","            var instance = this;","            var scheduler = instance.get('scheduler');","            var viewDate = scheduler.get('viewDate');","","            return instance._findFirstDayOfWeek(viewDate);","        },","","        /**","         * Returns the first day of the week with given `Date`.","         *","         * @method _findFirstDayOfWeek","         * @param {Date} date","         * @protected","         * @return {Date} The first day of the week with given `Date`.","         */","        _findFirstDayOfWeek: function(date) {","            var instance = this;","","            var scheduler = instance.get('scheduler');","            var firstDayOfWeek = scheduler.get('firstDayOfWeek');","","            return DateMath.getFirstDayOfWeek(date, firstDayOfWeek);","        }","","    }","});","","A.SchedulerMonthView = SchedulerMonthView;","","","}, '3.0.3-deprecated.50', {\"requires\": [\"aui-scheduler-view-table\"], \"skinnable\": true});","","}());"]};
}
var __cov_jtVW0lc4g3hUQ_fTUHyFmw = __coverage__['build/aui-scheduler-view-month/aui-scheduler-view-month.js'];
__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['1']++;YUI.add('aui-scheduler-view-month',function(A,NAME){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['1']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['2']++;var Lang=A.Lang,isFunction=Lang.isFunction,DateMath=A.DataType.DateMath,getCN=A.getClassName,CSS_SVM_TABLE_DATA_COL_NOMONTH=getCN('scheduler-view-month','table','data','col','nomonth'),CSS_SVT_TABLE_DATA_COL_TITLE=getCN('scheduler-view','table','data','col','title');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['3']++;var SchedulerMonthView=A.Component.create({NAME:'scheduler-view-month',ATTRS:{displayDaysInterval:{readOnly:true,value:42},name:{value:'month'},navigationDateFormatter:{value:function(date){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['2']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['4']++;var instance=this;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['5']++;var scheduler=instance.get('scheduler');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['6']++;return A.DataType.Date.format(date,{format:'%B %Y',locale:scheduler.get('locale')});},validator:isFunction}},EXTENDS:A.SchedulerTableView,prototype:{getAdjustedViewDate:function(date){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['3']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['7']++;return DateMath.toMidnight(DateMath.findMonthStart(date));},getNextDate:function(){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['4']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['8']++;var instance=this;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['9']++;var scheduler=instance.get('scheduler');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['10']++;var viewDate=scheduler.get('viewDate');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['11']++;return DateMath.toLastHour(DateMath.add(viewDate,DateMath.MONTH,1));},getPrevDate:function(){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['5']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['12']++;var instance=this;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['13']++;var scheduler=instance.get('scheduler');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['14']++;var viewDate=scheduler.get('viewDate');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['15']++;return DateMath.toMidnight(DateMath.subtract(viewDate,DateMath.MONTH,1));},plotEvents:function(){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['6']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['16']++;var instance=this;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['17']++;A.SchedulerMonthView.superclass.plotEvents.apply(instance,arguments);__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['18']++;var scheduler=instance.get('scheduler');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['19']++;var viewDate=scheduler.get('viewDate');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['20']++;var monthEnd=DateMath.findMonthEnd(viewDate);__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['21']++;var monthStart=DateMath.findMonthStart(viewDate);__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['22']++;var currentIntervalStart=instance._findCurrentIntervalStart();__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['23']++;var colTitleNodes=instance.tableRowContainer.all('.'+CSS_SVT_TABLE_DATA_COL_TITLE);__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['24']++;colTitleNodes.each(function(colTitleNode,index){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['7']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['25']++;var celDate=DateMath.add(currentIntervalStart,DateMath.DAY,index);__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['26']++;if((__cov_jtVW0lc4g3hUQ_fTUHyFmw.b['2'][0]++,DateMath.before(celDate,monthStart))||(__cov_jtVW0lc4g3hUQ_fTUHyFmw.b['2'][1]++,DateMath.after(celDate,monthEnd))){__cov_jtVW0lc4g3hUQ_fTUHyFmw.b['1'][0]++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['27']++;colTitleNode.addClass(CSS_SVM_TABLE_DATA_COL_NOMONTH);}else{__cov_jtVW0lc4g3hUQ_fTUHyFmw.b['1'][1]++;}});},_findCurrentIntervalStart:function(){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['8']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['28']++;var instance=this;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['29']++;var scheduler=instance.get('scheduler');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['30']++;var viewDate=scheduler.get('viewDate');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['31']++;return instance._findFirstDayOfWeek(viewDate);},_findFirstDayOfWeek:function(date){__cov_jtVW0lc4g3hUQ_fTUHyFmw.f['9']++;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['32']++;var instance=this;__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['33']++;var scheduler=instance.get('scheduler');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['34']++;var firstDayOfWeek=scheduler.get('firstDayOfWeek');__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['35']++;return DateMath.getFirstDayOfWeek(date,firstDayOfWeek);}}});__cov_jtVW0lc4g3hUQ_fTUHyFmw.s['36']++;A.SchedulerMonthView=SchedulerMonthView;},'3.0.3-deprecated.50',{'requires':['aui-scheduler-view-table'],'skinnable':true});
