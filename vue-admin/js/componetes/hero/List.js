/*
* @Author: Winfred
* @Date:   2018-07-08 17:32:15
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-10 17:16:53
*/

'use strict';
(function(window){
	const template =`
 <div>

    <h2 class="sub-header">英雄管理</h2>
    <router-link to="/heros/create" class="btn btn-success">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>英雄名称</th>
            <th>职业</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hero,index) in heros">
            <td>{{ index+1 }}</td>
            <td>{{ hero.name }}</td>
            <td>{{ hero.job }}</td>
            <td>
              <router-link :to="'/heros/show/'+hero._id">查看</router-link>
              <router-link :to="'/heros/update/'+hero._id">编辑</router-link>
              <a href="javascript:;" @click.prevent="remove(hero._id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
	`

  // //请求数据
  // axios.get('http://127.0.0.1:3000/heros/', {
  //   params: {
  //   }
  // })
  // .then(function (response) {
  //   console.log(response.data);
  //   this.data = response.data
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

	const HeroList ={
		template,
    data(){
      return {
        heros:[{
          id:1,
          name:'jack',
          job:'warer'
      }]
      }
    },
    methods:{
      remove(id){
        if(!confirm('Are you sure?')) return
        axios.delete(`api/heros/${id}`)
          .then(res => {
            this.getHeros()
          })
          .catch(err=>{
            console.log(err)
          })
      },
      getHeros(){
        axios.get('/api/heros/')
          .then(response => {
            this.heros = response.data
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    created(){
        // 在 created 中是最早拿到 data 数据的生命钩子
        //请求数据
        this.getHeros()
    }
    

	}
	window.HeroList = HeroList
})(window)