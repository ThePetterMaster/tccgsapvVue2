<template>
  <div>
    
   
       <ModalConsultaPessoa
        v-show="isModalVisible"
        @closeModalCadastro="closeModal"
        @mandouArray="mandouArray"
      />
      <div class="modal-backdrop fade show" v-show="isModalVisible"></div> 
  
    
    <NavComponente/>
    <transition name="fade">
    <div  class="container">
      <div  class="boxcontainer"> 
        <div  v-bind:id=" `box${index}`" class="box" v-for="(elemento, index) in elementos" :key="index" >
          {{elemento}}
        </div>
        
        <div id="i"><div id="borda"></div>i</div>
        <div id="j"><div id="borda"></div>j</div>
        <div id="min">min</div>
        
        
        
      </div>
      <div  class="imagemContainer">
        <img  src="@/assets/bubbleSort.png" alt="Bubble Sort" width="700" height="500" />
        <div id="bordacodigo"></div>
      </div>
      <!-- <input @click="selectionSort" type="submit" class="btn btn-primary" data-toggle="button" value="Ordenar"/> -->
    </div>
    </transition>
    
    <input @click="bubbleSort" type="submit" class="btn btn-primary" data-toggle="button" value="Ordenar"/>
    <input @click="reverter" type="submit" class="btn btn-primary" data-toggle="button" value="Reverter"/>
    <input @click="pausar" type="submit" class="btn btn-primary" data-toggle="button" value="Pausar/Continuar"/>
    <!-- <button @click="selectionSort">Ordenar</button> -->
  
    
    
  </div>
  
  
  
  </template>
  
  <script>
  
  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/TextPlugin";
  
  gsap.registerPlugin(TextPlugin);
  
  import ModalConsultaPessoa from "../components/Modais/ModalCreateArray.vue"
  import Vue from 'vue'
  
  var tl = gsap.timeline()
  
  export default {
    components: {  ModalConsultaPessoa },
    name: 'HomeView',
    data() {
      return {
        larguraDaTela: window.innerWidth,
        isModalVisible: true,
        elementos:[4,3,2,1],
        oredenados:[1,2,3,4],
        show:false,
        min:undefined
        
      };
    },
    mounted() {
      this.show=!this.show
  
      gsap.set("#bordacodigo",{scale: 0}) 
      gsap.set("#i",{scale: 0})
      gsap.set("#j",{scale: 0})  
      gsap.set("#min",{scale: 0})  
  
      // for (var i = 0; i < this.elementos.length; i++) {
      //   gsap.set(`#box${this.oredenados.indexOf(this.elementos[i])}` ,{ x: (i-this.oredenados.indexOf(this.elementos[i]))*100});
  
      // }
    },
    created(){
  
    },
    methods: {
      mandouArray(array){
        // console.log("mandou o array")
        if(array.length>=this.elementos.length){
          // console.log("array>=elementos")
          // console.log(array)
          for(let i=0;i<array.length;i++){
          if(this.elementos[i]!=undefined){
            this.$set(this.elementos, i, array[i])
          }else{
            this.elementos.push( array[i])
          }
        }
        for(let i=0;i<array.length;i++){
          if(this.elementos[i]!=undefined){
            this.$set(this.oredenados, i, array[i])
          }else{
            this.oredenados.push()
          }
        }
        this.oredenados.sort()
        // console.log("oredenados "+this.oredenados)
        // console.log("elementos "+this.elementos)
      }else{
        // console.log("array<elementos")
        for(let i=0;i<this.elementos.length;i++){
          if(array[i]!=undefined){
            this.$set(this.elementos, i, array[i])
          }else{
            this.elementos.pop()
          }
        }
        for(let i=0;i<this.oredenados.length;i++){
          if(array[i]!=undefined){
            this.$set(this.oredenados, i, array[i])
          }else{
            this.oredenados.pop()
          }
        }
        this.oredenados.sort()
        // console.log("oredenados "+this.oredenados)
        // console.log("elementos "+this.elementos)
      }
  
        
      },
      pausar(){
        tl.paused(!tl.paused())
      },
      reverter(){
        tl.reversed(!tl.reversed())
      },
      showModal() {
        this.isModalVisible = true;
      },
  
      closeModal() {
        this.isModalVisible = false;
      },
  
      bubbleSort() {
        for (var i = 0; i < this.elementos.length; i++) {
          gsap.set(`#box${this.oredenados.indexOf(this.elementos[i])}` ,{ x: (i-this.oredenados.indexOf(this.elementos[i]))*100});

        }
        var length = this.elementos.length;  
        for (var i = 0; i < length; i++) { 
          tl.set("#i",{scale: 1})
          tl.fromTo( "#i",{ x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(i-1)) }, { x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(i))  });
          for (var j = 0; j < (length - i -1); j++) { 
            tl.set("#j",{scale: 1})  
            tl.fromTo( "#j",{ x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(j-1)) }, { x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(j))  });

            if(this.elementos[j] > this.elementos[j+1]) {
              tl.to(`#box${this.oredenados.indexOf(this.elementos[j])}`, { 
                duration: 0.3,
                backgroundColor: 'orange',
                yoyo: true,
                repeat: 2,
              });
              tl.to(`#box${this.oredenados.indexOf(this.elementos[j+1])}`, { 
                duration: 0.3,
                backgroundColor: 'orange',
                yoyo: true,
                repeat: 2,
              },"<");
              tl.to(`#box${this.oredenados.indexOf(this.elementos[j])}`, { 
                duration: 0.3,
                backgroundColor: 'red',
              });
              tl.to(`#box${this.oredenados.indexOf(this.elementos[j+1])}`, { 
                duration: 0.3,
                backgroundColor: 'red',
              },"<");
              tl.to(`#box${this.oredenados.indexOf(this.elementos[j])}`, { 
              duration: 1,ease: "sine.out",
              y: -150,
            });
              tl.to(`#box${this.oredenados.indexOf(this.elementos[j+1])}`, { 
              duration: 1,ease: "sine.out",
              y: -150,

            },"<");
            tl.to( `#box${this.oredenados.indexOf(this.elementos[j+1])}`, {x: (j-this.oredenados.indexOf(this.elementos[j+1]))*100,duration: 2,ease: "sine.out", });

            
          tl.to( `#box${this.oredenados.indexOf(this.elementos[j])}`, {x: ((j+1)-this.oredenados.indexOf(this.elementos[j]))*100,duration: 2,ease: "sine.out", },"<");
 
       
            tl.to(`#box${this.oredenados.indexOf(this.elementos[j])}`, { 
              duration: 1,ease: "sine.out",
              y: 0,
            });
              tl.to(`#box${this.oredenados.indexOf(this.elementos[j+1])}`, { 
              duration: 1,ease: "sine.out",
              y: 0,

            },"<");
              if(((j+1)-this.oredenados.indexOf(this.elementos[j]))==0){
              tl.to(`#box${this.oredenados.indexOf(this.elementos[j])}`, { 
                duration: 0.3,
                backgroundColor: 'green',
                yoyo: true,
                repeat: 2,
              });
            }

              let tmp = this.elementos[j];
              this.$set(this.elementos, j, this.elementos[j+1])
              this.$set(this.elementos, j+1, tmp)

  
 

            } 
          }  
  
        }
        tl.to(`#box0`, { 
                duration: 0.3,
                backgroundColor: 'green',
                yoyo: true,
                repeat: 2,
              });
        tl.set("#i",{scale: 0})
        tl.set("#j",{scale: 0})
      }
  
    }
    
  }
  
  </script>
  
  <style scoped>
  .box {
    background-color: red;
    height: 100px;
    width: 100px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 120px;
    position: static;
    border-radius: 25px;
  }
  .boxcontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
    width: 700px;
    
  
  } 
  .container {
  
    display: flex;
     align-items: center;
     justify-content: space-between;
     
  } 
  .imagemContainer{
      display: flex;
     align-items: center;
     justify-content: center;
     width: 50rem;
     
  }
  #i{
    position:absolute;
    font-size: 50px;
    margin-top:70px
  }
  #j{
    position:absolute;
    font-size: 50px;
    margin-top:70px
  }
  #min{
    position:absolute;
    font-size: 50px;
    margin-top:70px
  }
  #borda{
    background-color: white;
    border-style: solid;
    border-width: 4px;
    height: 100px;
    width: 100px;
    opacity:0.5;
    border-radius: 25px;
  }
  
  #bordacodigo{
    height: 27px;
    width: 500px;
    position:absolute;
    background-color: white;
    border-style: solid;
    border-width: 4px;
    opacity:0.5;
  }
  
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .fade-enter-from{
    opacity: 0;
  } 
  .fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 1;
  }
  .fade-enter-active /* .fade-leave-active below version 2.1.8 */ {
    transition: all 2s ease;
  }
  
  
  
  </style>