<template>
  <section class="interest">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2>Tem interesse?</h2>
          <p class="text-uppercase fw-bold">Sua experiência começa aqui.</p>
          <p>Preencha o formulário ou escolha uma das opções de contato abaixo para falar conosco:</p>
          <div class="row mt-lg-5">
            <div class="col-lg-4 d-flex align-items-end">
              <div class="wrapper-icons">
                <div class="icon text-center">
                  <a href="#"><font-awesome-icon :icon="['fas', 'mobile-retro']" /></a>
                </div>
                <p>Ligamos pra você</p>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-end">
              <div class="wrapper-icons">
                <div class="icon text-center">
                  <a href="#"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
                </div>
                <p>Fale por Whatsapp</p>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-end">
              <div class="wrapper-icons">
                <div class="icon text-center">
                  <a href="#"><font-awesome-icon :icon="['fas', 'headset']" /></a>
                </div>
                <p>Fale com um consultor</p>
              </div>
            </div>
          </div>
        </div>
        <!-- FORM -->
        <div class="col-lg-4">
          <form class="row form-custom" id="form-request-quote">
            <div class="col-12 mt-5">
              <div class="form-outline">
                <input type="text" name="name" id="nome" class="form-control" required />
                <label class="form-label" for="nome">Nome</label>
              </div>
            </div>
            <div class="col-12 mt-5 mt-md-input">
              <div class="form-outline">
                <input type="text" name="phone" id="telefone" class="form-control" required />
                <label class="form-label" for="telefone">Telefone</label>
              </div>
            </div>
            <div class="col-12 mt-5">
              <div class="form-outline">
                <input type="email" name="email" id="email" class="form-control" required />
                <label class="form-label" for="email">E-mail</label>
              </div>
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
            <div class="col mt-5 d-flex justify-content-center">
              <button type="submit" id="btn-submit" class="btn btn-send hvr-sweep-to-right">
                Saiba mais
              </button>
            </div>
          </form>
        </div>
         <!-- ./FORM -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Interest'
}
</script>
