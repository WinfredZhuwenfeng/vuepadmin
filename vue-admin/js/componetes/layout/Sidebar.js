/*
* @Author: Winfred
* @Date:   2018-07-06 21:48:16
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-08 17:51:52
*/

'use strict';
;
(function(window){
	const template =`
<div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <router-link to = '/' tag='li' exact><a>Home</a></router-link>
          <router-link to = 'heros' tag='li'><a>英雄管理</a></router-link>
          <router-link to = 'Foo' tag='li'><a>Foo</a></router-link>
        </ul>
      </div>
    </div>
    </div>	      
	`
	const Sidebar = {
		template
	}
	window.Sidebar=Sidebar
})(window)