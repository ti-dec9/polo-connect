<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <img src="~/assets/images/about-polo-connect.jpg" data-aos="fade-right" class="img-about img-fluid" alt="About Polo Connect">
        </div>
        <div class="col-lg-7 mt-custom">
          <div class="row">
            <div class="col-lg-8 mt-5">
              <p><h4>O empreendimento pensado desde o início em <strong>conectividade</strong></h4></p>
            </div>
            <div class="col-lg-8 mt-5">
              <p>Além de toda infraestrutura, o prédio contará com
            facilidades tecnológicas que irão axiliar e trazer
            mais segurança ao dia a dia dos moradores.</p>
            </div>
            <div class="col-lg-12 mt-5">
              <address class="address text-uppercase">
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                Rua Pedro Maria Net, 45 - Aterrado - Volta Redonda / RJ
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
