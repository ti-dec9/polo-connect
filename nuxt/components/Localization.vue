<template>
  <section class="localization">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <p class="title mt-lg-3">Localização</p>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div class="col-lg-6 bg-blue">
              <address class="address text-uppercase">
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                Rua Pedro Maria Net, 45 - Aterrado - Volta Redonda / RJ
              </address>
            </div>
            <div class="col-lg-6 bg-grayscale-dark">
              <form class="form-custom" id="form-route-address">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-outline">
                      <input type="text" name="phone" id="Whatsapp" class="form-control" required />
                      <label class="form-label" for="Whatsapp">Digite o seu cep</label>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="arrow">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <button type="button" id="btn-submit" class="btn btn-link text-uppercase">
                      Ver rota
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Localization'
}
</script>
