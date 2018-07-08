/*
* @Author: Winfred
* @Date:   2018-07-08 17:32:15
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-08 21:52:43
*/

'use strict';
(function(window){
	const template =`
 <div>

    <h2 class="sub-header">英雄管理</h2>
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
    created(){
        //请求数据
      axios.get('http://127.0.0.1:3000/heros/', {
        params: {
        }
      })
      .then(response => {
        this.heros = response.data
      })
      .catch(function (error) {
        console.log(error);
      });
    }
	}
	window.HeroList = HeroList
})(window)