<template>
	<div id="indexContent" class="indexbox">
		<div class="cn-box">
			<h3>
				首页板块
			</h3>
			<ul>
				<li>123123</li>
				<li>123123</li>
				<li>123123</li>
				<li>123123</li>
				<li>123123</li>
				<li>123123</li>
			</ul>
		</div>
		<button v-on:click="$emit('changetit', '首页')">emit tithe</button>	
	</div>
  
</template>

<script>
export default {
	name: 'index',
	created() {
		this.$emit('changetit', '首页')
	},
}
</script>

<style lang="less" scoped>
.indexbox{
	background: #f6f6f6;
}
.cn-box{
  width: 1440px;
  margin: 0 auto;
}
.cn-grid-1{
  width: 10%;
}
</style>
