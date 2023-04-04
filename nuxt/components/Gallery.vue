<template>
  <section class="gallery">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <!-- Pills navs -->
          <ul class="nav nav-pills pills-primary mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="ex3-tab-1" data-mdb-toggle="pill" href="#ex3-pills-1" role="tab"
                aria-controls="ex3-pills-1" aria-selected="true">Galeria de Imagens</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="ex3-tab-2" data-mdb-toggle="pill" href="#ex3-pills-2" role="tab"
                aria-controls="ex3-pills-2" aria-selected="false">Plantas</a>
            </li>
          </ul>
          <!-- Pills navs -->

          <!-- Pills content -->
          <div class="tab-content" id="ex2-content">
            <div class="tab-pane fade show active" id="ex3-pills-1" role="tabpanel" aria-labelledby="ex3-tab-1">
              <div class="row">
                <div class="col-lg-9">
                  <!-- Tab content -->
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                      aria-labelledby="v-pills-home-tab">
                      <img src="https://placehold.co/600x350" class="img-fluid" alt="">
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      Profile content
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                      aria-labelledby="v-pills-messages-tab">
                      Messages content
                    </div>
                  </div>
                  <!-- Tab content -->
                </div>
                <div class="col-lg-2">
                  <!-- Tab navs -->
                  <div class="nav flex-column nav-pills text-center" id="v-pills-tab" role="tablist"
                    aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-mdb-toggle="pill" href="#v-pills-home"
                      role="tab" aria-controls="v-pills-home" aria-selected="true">Área de Lazer</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-mdb-toggle="pill" href="#v-pills-profile" role="tab"
                      aria-controls="v-pills-profile" aria-selected="false">Fachada</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-mdb-toggle="pill" href="#v-pills-messages"
                      role="tab" aria-controls="v-pills-messages" aria-selected="false">Entertainment</a>
                  </div>
                  <!-- Tab navs -->
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="ex3-pills-2" role="tabpanel" aria-labelledby="ex3-tab-2">
              Tab 2 content
            </div>
          </div>
          <!-- Pills content -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>
