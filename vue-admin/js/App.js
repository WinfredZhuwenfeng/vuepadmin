/*
 * @Author: Winfred
 * @Date:   2018-07-06 20:25:27
 * @Last Modified by:   Winfred
 * @Last Modified time: 2018-07-06 23:09:13
 */



;(function(window,Navbar,Sidebar,router){
	const template = `
		<div>
			<app-navbar></app-navbar>
			<app-sidebar></app-sidebar>
			<div class='class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"'>
				<router-view></router-view>
			</div>	    	    
		</div>
	`
    const App = {
        template,
        components:{
        	AppNavbar:Navbar,
        	// AppNavbar:{template:'<h1>123</h1>'}
        	AppSidebar:Sidebar
        }
    }

    window.App = App
})(window,Navbar,Sidebar,router)
