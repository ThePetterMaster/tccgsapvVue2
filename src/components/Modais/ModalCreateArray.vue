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

          <div class="table-responsive max-height-content-detail-big p-2">



      <div class="modal-body">
        <p>Inputs</p>
        <div class="d-flex flex-row justify-content-center">
          <input  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  maxlength="1" class="form-control inputs"  v-for="(elemento, index) in array" :key="index" v-model="array[index]">

  
        </div>

   
      </div>


            <div class="modal-footer">


    
              <input  @click="fechouModal" type="submit" class="btn btn-primary" data-toggle="button" value="Fechar"/>
            </div>
            <input  @click="pop" type="submit" class="btn btn-primary" data-toggle="button" value="Pop"/>
            <input  @click="push" type="submit" class="btn btn-primary" data-toggle="button" value="Push"/>
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
    pop(){
      this.array.pop()
    },
    push(){
      this.array.push(undefined)
    },
    fechouModal(){
      //não fnciona menor que 2
      //não funciona input vazio
      for(let i=0;i<this.array.length;i++){
        this.array[i]=Number(this.array[i])
      }
      console.log("array do modal "+this.array)
      this.$emit('closeModalCadastro')
      this.$emit('mandouArray',this.array)
    }



  },
};
</script>
<style scoped>
.inputs{
  width: 35px;
  height: 35px;
}
</style>
