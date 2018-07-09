/*
* @Author: Winfred
* @Date:   2018-07-06 22:40:24
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-09 22:35:16
*/

'use strict';
/*
1,引入vue-router
2，new  router
3，配置路由
4，导出
5，实例挂载
 */

;
(function(window,VueRouter,Home, HeroList,HeroCreat,HeroShow){
	const router = new VueRouter({
		routes : [
			{path:'/',component:Home},
			{path:'/heros/create',component:HeroCreat},
			{path:'/heros/show/:id',component:HeroShow},
			{path:'/heros',component:HeroList}
		],
		linkActiveClass:'active'
	})
	window.router=router
})(window,VueRouter, Home, HeroList,HeroCreat,HeroShow)