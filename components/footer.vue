<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="card-group">
          <div class="col-lg-4">
            <div class="card h-100 shadow-none">
              <div class="card-body">
                <h5 class="card-title fw-bold text-uppercase">Certificações</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <img
                      src="https://ik.imagekit.io/8z4sc6x4w/Dec9/Construtora_Polo/certifacacao-construtora-polo-pbqph.jpg?updatedAt=1680306012328"
                      class="mt-lg-2" alt="PBQPH">
                  </li>
                  <li class="list-inline-item">
                    <img
                      src="https://ik.imagekit.io/8z4sc6x4w/Dec9/Construtora_Polo/certifacacao-construtora-polo-iso9001.jpg?updatedAt=1680306012306"
                      alt="ISO 9001">
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card h-100 shadow-none">
              <div class="card-body">
                <h5 class="card-title fw-bold text-uppercase">Siga nas Redes</h5>
                <ul class="list-inline social-icon-list">
                  <li class="list-inline-item">
                    <a href="#" target="_blank">
                      <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank">
                      <font-awesome-icon :icon="['fab', 'square-facebook']" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank">
                      <font-awesome-icon :icon="['fab', 'youtube']" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank">
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="card h-100 shadow-none">
              <div class="card-body">
                <h5 class="card-title fw-bold text-uppercase">Fale com a gente</h5>
                <ul class="list-inline contact-list">
                  <li class="list-inline-item">
                    <p class="number-phone"><span>24</span> 3346.2508</p>
                    <p class="text-phone text-uppercase fw-bolder">Construtora</p>
                  </li>
                  <li class="list-inline-item ps-lg-5">
                    <p class="number-phone"><span>24</span> 99952.5998</p>
                    <p class="text-phone text-uppercase fw-bolder">Coordenação de venda</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ADDRESS -->
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="fw-bold text-uppercase">Volta Redonda</p>
          <address>Av. Pará, 479 - Vila Mury - Volta Redonda / RJ</address>
        </div>
      </div>
    </div>
    <!-- ./ADDRESS -->

    <!-- COPY -->
    <div class="copy mt-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p>2023 . Construtora Polo</p>
          </div>
          <div class="col-lg-6 d-flex justify-content-end">
            <p>Desenvolvido por DEC9</p>
          </div>
        </div>
      </div>
    </div>
    <!-- ./COPY -->

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
