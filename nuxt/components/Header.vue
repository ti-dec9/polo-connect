<template>
  <header class="header">
    <div class="overlay"></div>
    <video autoplay muted loop class="video">
      <source src="https://ik.imagekit.io/8z4sc6x4w/Dec9/Construtora_Polo/vt-polo-connect.mp4?updatedAt=1680126125960"
        type="video/mp4">
      <source src="https://simonsautobody.com/assets/public/video/video-sab.webm" type="video/webm">
      Your browser doesn't support HTML5 video tag.
    </video>

    <div class="container container-video">
      <div class="row">
        <div class="col-lg-6 mt-4 mb-3">
          <img
            src="https://ik.imagekit.io/8z4sc6x4w/Dec9/Construtora_Polo/logo-polo-connect-base-white.png?updatedAt=1680293216898"
            class="logo" />
          <!-- <p>
          <h1 class="fs-5 fw-normal">Futuro é estar conectado ao que te faz bem!</h1>
          </p> -->
        </div>

      </div>
    </div>


    <!-- <div class="container container-video h-100">
      <div class="d-flex text-left h-100">
        <div class="my-auto w-100 text-white">
          <div class="row">
            <div class="col-md-12 p-t-50">
              <div class="text-center text-uppercase">
                <form class="row gy-2 gx-3 align-items-center d-flex justify-content-center form-custom" id="form-contact-header">
                  <div class="col-lg-12">
                    <h5 class="text-center title text-white text-uppercase">
                      Preencha e Receba <span>informações privilegiadas sobre este empreendimento</span>
                    </h5>
                  </div>
                  <div class="col mt-5">
                    <div class="form-outline">
                      <input type="text" name="name" id="nome" class="form-control" required />
                      <label class="form-label" for="nome">Nome</label>
                    </div>
                  </div>
                  <div class="col mt-5 mt-md-input">
                    <div class="form-outline">
                      <input type="text" name="lastname" id="sobrenome" class="form-control" required />
                      <label class="form-label" for="nome">Sobrenome</label>
                    </div>
                  </div>
                  <div class="col mt-5">
                    <div class="form-outline">
                      <input type="email" name="email" id="email" class="form-control" required />
                      <label class="form-label" for="email">E-mail</label>
                    </div>
                  </div>
                  <div class="col mt-5">
                    <div class="form-outline">
                      <input type="text" name="phone" id="Whatsapp" class="form-control" required />
                      <label class="form-label" for="Whatsapp">Whatsapp</label>
                    </div>
                  </div>
                  <div class="col mt-5 d-flex justify-content-center">
                    <button type="submit" id="btn-submit"
                      class="btn btn-send pulsate-fwd hvr-sweep-to-right">
                      Me cadastrar
                    </button>
                  </div>
                  <div class="col-lg-12 d-flex justify-content-center mt-5">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="form11Example2" checked />
                      <label class="text-white txt-lgpd">
                        De acordo com a Lei Geral de Proteção de Dados, concordo em
                        fornecer
                        os
                        dados acima para que a Construtora Polo entre em contato comigo
                        para
                        apresentar
                        produtos e serviços. Seu nome, e-mail e telefone serão usados
                        com a
                        finalidade de
                        uma oportunidade, de acordo com a nossa <strong><a
                            href="https://construtorapolo.com.br/politica-privacidade">Política de
                            Privacidade</a></strong>.
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
