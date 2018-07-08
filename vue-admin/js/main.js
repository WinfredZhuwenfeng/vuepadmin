/*
* @Author: Winfred
* @Date:   2018-07-06 20:29:14
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-06 23:02:41
*/

'use strict';
;
(function(window,Vue,App,router){
	new Vue({
	el:'#app',
	router,//挂载路由
	template:'<App></App>',
	data:{
			title:'hello'			
		},
	components:{
		App
	},
	router
})
})(window,Vue,App,router)