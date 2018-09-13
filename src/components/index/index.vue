<template>
  <div class="cn-box">
    首页板块
    <div id="scrollwrap">
			<ul class="zRollwrap">
				<li class="zRollist">
					<img src="../../../static/images/data_center_cabling_04.jpg"/>
				</li>
				<li class="zRollist">
					<img src="../../../static/images/data_center_cabling_05.jpg"/>
				</li>
				<li class="zRollist">
					<img src="../../../static/images/data_center_cabling_06.jpg"/>
				</li>
				<li class="zRollist"> 
					<img src="../../../static/images/data_center_cabling_07.jpg"/>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'index'
}
// (function(){
//   var zRoll = function(obj,param){
//     var o = $(obj);
//     var oul = $(obj).find('.zRollwrap');
//     var olist = $(obj).find('.zRollwrap').html();
//     var viewheight = oul.height();
//     console.log(viewheight);
//     let oset = 0;
//     oul.addClass('rolling').html(olist+olist);
//     var roll = function(){			
//       var timeA = setInterval(function(){				
//         oset--;
//         if(oset<-(viewheight)){
//           oset = 0;						
//         }else{
//           oul.css({'top':oset});
//         }			
//       },10);
//       o.on('mouseover',function(){
//         clearInterval(timeA);
//       });			
//     }
//     o.on('mouseout',function(){
//       roll();
//     })
//     return roll();	
//   }
//   window.zRoll = zRoll;
// })();
// $(function(){
//   var a = new zRoll('#scrollwrap')
// })
</script>
<style lang="less" scoped>
.cn-box{
  width: 1440px;
  margin: 0 auto;
}
.cn-grid-1{
  width: 10%;
}
</style>
