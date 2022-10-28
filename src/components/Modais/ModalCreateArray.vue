<template>
  <div class="modal fade show h-90 overflow-auto" id="modal-dialog modal-xl" style="display: block" aria-modal="true"
    role="dialog">
    <div class="modal-dialog modal-xl p-3">
      <div>
        <div class="modal-content border-rounded-detail">
          <div class="
              modal-header
              background-principal
              text-color-principal
              card-item-result
            ">
            <h5 class="modal-title mx-auto my-0">Diga os elementos do vetor</h5>

          </div>
            <h7>Não coloque valores repetidos</h7>
            <h7>Não coloque valor vazio no vetor</h7>
          <div class="table-responsive max-height-content-detail-big p-2">



      <div class="modal-body">
        <p>Inputs</p>
        <div class="d-flex flex-row justify-content-center">
          <input  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  maxlength="2" class="form-control inputs mr-1"  v-for="(elemento, index) in array" :key="index" v-model="array[index]">

  
        </div>

   
      </div>


            <div class="modal-footer">


    
              <input  @click="fechouModal" type="submit" class="btn btn-primary" data-toggle="button" value="Fechar"/>
            </div>
            <input  @click="pop" type="submit" class="btn btn-primary mr-2" data-toggle="button" value="Retirar"/>
            <input  @click="push" type="submit" class="btn btn-primary" data-toggle="button" value="Adicionar"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>





export default {
  name: "ModalConsultaPessoa",

  data() {
    return {
      array:[4,3,2,1],
    };
  },


  created() { },
  methods: {
    findUndefined(array){
      for(let i=0;i<array.length;i++){
        if(array[i]==undefined){
          return true
        }
      }
      return false
    },
    pop(){
      console.log("Antes do pop: "+this.array)
      console.log("Tamanho antes do pop: "+this.array.length)
      if(this.array.length>1){
        this.array.pop()
      }
      console.log("Depois do pop: "+this.array)
      console.log("Tamanho depois do pop: "+this.array.length)
    },
    push(){
      console.log("Antes do push: "+this.array)
      console.log("Tamanho antes do push: "+this.array.length)
      if (this.array.length<7){
        this.array.push(undefined)
      }
      console.log("Depois do push: "+this.array)
      console.log("Tamanho depois do push: "+this.array.length)
    },
    fechouModal(){
      //não fnciona menor que 2
      //não funciona input vazio
      if(this.findUndefined(this.array)){
        Toast.fire('Não é premitido campos vazios!!', '', 'error')
      }else{
        for(let i=0;i<this.array.length;i++){
          this.array[i]=Number(this.array[i])
        }
        console.log("array do modal "+this.array)
        console.log("Tamanho array do modal "+this.array.length)
        this.$emit('closeModalCadastro')
        this.$emit('mandouArray',this.array)
      }

    }



  },
};
</script>
<style scoped>
.inputs{
  width: 45px;
  height: 45px;
}
</style>
