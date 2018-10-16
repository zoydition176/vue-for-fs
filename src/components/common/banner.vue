<template>
  <div class="vfs-banner banner-md">
    <div class="vfs-banner-bg" style="background-image:url(http://www.feisu.com/includes/templates/fiberstore/images/specials/optic-fiber-solution/ofs-banner-1010.jpg)">
		  <h3>大标题</h3>
			<p>小标题</p>
		</div>
  </div>
</template>

<script>
export default {
  name: "banner"
}
</script>

<style scoped>
.banner-md{
	height: 460px;
}
.vfs-banner-bg{
	background-position: center;
	background-repeat: no-repeat;
}
.afb-brand .s-brand-txt h3{
	font-size: 48px;
	font-weight: 600;
	padding-bottom: 18px;
	color: #FFFFFF;
	position: relative;
}
.afb-brand .s-brand-txt p{
	font-size: 20px;
	line-height: 32px;
	padding-top: 14px;
	letter-spacing: 1px;
}
.afb-brand .s-brand-txt h3:after{
	content: '';
	display: block;
	position: absolute;
	height: 4px;
	width: 60px;
	background: #FFFFFF;
	bottom: 0px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	transform: translateX(-50%);
}
.afb-brand-m{
	display: none;
}
.afb-content{
	width: 1440px;
	margin: 0 auto;
}
.afb-title{
	width: 1000px;
	margin: 0 auto;
	text-align: center;
}
.afb-title h3{
	color: #666666;
	font-size: 30px;
	font-weight: 400;
	line-height: 36px;
	padding: 70px 0 26px;
}
.afb-title p{
	color: #999999;
	font-size: 14px;
	line-height: 30px;
}
</style>
