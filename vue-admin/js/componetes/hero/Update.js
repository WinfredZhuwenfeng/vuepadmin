/*
* @Author: Winfred
* @Date:   2018-07-08 17:32:56
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-10 10:51:03
*/

'use strict';
;
(function(window,axios){
	const template = `
	<div>
		<h2>编辑英雄</h2>
		<form @submit.prevent="update">
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
	const HeroUpdate = {
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
		created(){
			const id = this.$route.params.id
			axios.get(`api/heros/${id}`)
				.then(res => {
					this.hero = (res.data)[0]
				})
				.catch(err =>{console.log(err)})
		},
		methods:{			
			update(){
				const id = this.hero._id
				axios.patch(`api/heros/${id}`,this.hero)
				.then(res =>{
					router.replace('/heros')
				})
			}
		}
	}
	window.HeroUpdate=HeroUpdate
})(window,axios)