<template>
  <q-page padding>
    <header>
    <p>Regras para doação de Sangue</p>
    </header>
    <body>
      <br>
      <p>
        - Ter idade entre 16 e 69 anos, (menores de 18 anos devem apresentar consentimento formal do responsável legal);
      </p>
      <p>
        - Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.
      </p>
      <p>
        - Apresentar documento de identificação com foto emitido por órgão oficial (Carteira de Identidade, Carteira Nacional de Habilitação, Carteira de Trabalho, Passaporte, Registro Nacional de Estrangeiro, Certificado de Reservista e Carteira Profissional emitida por classe). São aceitos documentos digitais com foto.
      </p>
      <p>
        - Pesar no mínimo 50 kg.
      </p>
      <p>
        - Ter dormido pelo menos 6 horas nas últimas 24 horas.
      </p>
      <p>
        - Estar alimentado. Evitar alimentos gordurosos nas 3 horas que antecedem a doação de sangue. Caso seja após o almoço, aguardar 2 horas.
      </p>
      <p>
        <strong>
          * Regras retiradas do site oficial da GOV : <a href="https://www.gov.br/saude/pt-br/composicao/saes/sangue">https://www.gov.br/saude/pt-br/composicao/saes/sangue</a>
        </strong>
      </p>
      <h5>
        <strong>
          Compartilhe o site e ajude a salvar vidas :
        </strong>
      </h5>
        <div class="row">
          <div class="full-width q-pt-md">
            <q-btn
              label="Compartilhe no Twitter"
              color="blue"
              class="full-width"
              size="lg"
              flat rounded
              href="https://twitter.com/intent/tweet?url=http://localhost:8080/&text=Seja%20um%20doador%20acesse%20:"
            />
          </div>
        </div>
        <div class="row">
          <div class="full-width q-pt-md">
            <q-btn
              label="Compartilhe no whatsapp"
              color="green"
              class="full-width"
              size="lg"
              flat rounded
              href="https://api.whatsapp.com/send?text=[Doação de Sangue] [http://localhost:8080/]"
            />
          </div>
        </div>
    </body>
  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
   name: 'Page-2',
   setup () {
    return {
    }
  }
}
</script>

<style lang="scss">

p {
  font-size: medium;
}
header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      font-size:x-large;
      margin-left: 1rem;
    }
  }

</style>