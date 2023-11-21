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
          * Regras retiradas do site oficial da GOV : https://www.gov.br/saude/pt-br/composicao/saes/sangue
        </strong>
      </p>
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