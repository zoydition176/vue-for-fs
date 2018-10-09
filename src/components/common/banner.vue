<template>
  <div class="s-box afb-box">
    <div class="s-md-brand afb-brand">
      <div class="s-ab-bg" style=""></div>
      <div class="s-brand-txt">
        <h3>飞速(FS)企业账期申请</h3>
        <p>
          做项目，缺资金？<br>先拿货后付款，凭信誉即可享受免息账期
        </p>
      </div>
    </div>
    <div class="afb-brand-m">
      <img src="img/switches_image/jhjbanner.jpg" alt="" />
    </div>
    
    <div class="afb-content">
      <div class="afb-title">
        <h3>
          企业账期&账期订单
        </h3>
        <p>
          企业账期是指，凡是以公司、政府、学校等机构为单位的企业采购，均可申请企业账期，申请通过飞速(FS)平台审核后，
          获得相应额度和天数的账期授信，享受先拿货，后结款服务。账期订单是已获得账期授信的企业在飞速(FS)下的采购订单，
          账期订单需签订账期合同，合同具有法律约束力，定义购买细节和双方义务，供应商按照合同要求提供商品或服务，
          购买方须按照合同规定期限内支付货款。
        </p>
      </div>
      
      
      
      
    </div>
    
    
    
  </div>
</template>

<script>
export default {
  name: "banner"
}
</script>

<style scoped>
.afb-brand{
	/* background: url(../img/ApplyForBill/zq_01_banner.jpg) no-repeat center; */
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
