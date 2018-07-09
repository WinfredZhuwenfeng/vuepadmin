/*
 * @Author: Winfred
 * @Date:   2018-07-08 17:32:27
 * @Last Modified by:   Winfred
 * @Last Modified time: 2018-07-09 21:57:25
 */

'use strict';;
(function(window, axios) {
    const template = `
	<div>
		<h2>添加英雄</h2>
		<form @submit.prevent="create">
		  <div class="form-group">
		    <label for="exampleInputEmail1">英雄名称</label>
		    <input type="text" class="form-control" v-model="hero.name">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">英雄定位</label>
		    <input type="text" class="form-control" v-model="hero.job">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">背景故事</label>
		    <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="hero.story"></textarea>
		  </div>
		  <button type="submit" class="btn btn-success">保存</button>
		</form>
	</div>
	`

    const HeroCreat = {
        template,
        data(){
        	return {
        		hero:{
        			name:'',
        			job:'',
        			story:''
        		}
        	}
        },
        methods: {
        	/*
        	1.点击事件
        	2.序列化数据
        	3。发送请求
        	4.清空表单
        	5.显示list
        	 */
            create() {
            	axios.post('/api/heros',this.hero)
						  .then( response =>{
						  	console.log(111)

						  	console.log(this.hero)
						    router.replace('/heros')
						  })
						  .catch(function (error) {
						    console.log(error);

						  });
            }
        }
    }
    window.HeroCreat = HeroCreat
})(window,axios)
