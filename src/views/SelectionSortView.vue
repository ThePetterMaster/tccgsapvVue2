<template>
<div>
  <NavComponente/>
  <div class="container">
    <div class="boxcontainer"> 
      <div v-bind:id=" `box${index}`" class="box" v-for="(elemento, index) in oredenados" :key="index">
        {{elemento}}
      </div>
      
      <div id="i"><div id="borda"></div>i</div>
      <div id="j"><div id="borda"></div>j</div>
      
      
      
    </div>
    <div class="imagemContainer">
      <img src="./sort.png" alt="Selection Sort" width="500" height="500" />
      <div id="bordacodigo"></div>
    </div>
    <!-- <input @click="selectionSort" type="submit" class="btn btn-primary" data-toggle="button" value="Ordenar"/> -->
  </div>
  
<input @click="selectionSort" type="submit" class="btn btn-primary" data-toggle="button" value="Ordenar"/>
  <!-- <button @click="selectionSort">Ordenar</button> -->
  
  
</div>



</template>

<script>

import gsap from 'gsap'
import Vue from 'vue'

var tl = gsap.timeline()
export default {
  name: 'HomeView',
  data() {
    return {
      larguraDaTela: window.innerWidth,
  
      elementos:[4,3,2,1],
      oredenados:[1,2,3,4],
      
    };
  },
  mounted() {


    gsap.set("#bordacodigo",{scale: 0}) 
    gsap.set("#i",{scale: 0})
    gsap.set("#j",{scale: 0})   

    for (var i = 0; i < this.elementos.length; i++) {
      gsap.set(`#box${this.oredenados.indexOf(this.elementos[i])}` ,{ x: (i-this.oredenados.indexOf(this.elementos[i]))*100});

    }
  },
  methods: {
    selectionSort() { 
      tl.set("#bordacodigo",{scale: 1})
      tl.to( "#bordacodigo", { y:-27*8.5  });
      
      


      for (var i = 0; i < this.elementos.length; i++) {
         gsap.set(`#box${this.oredenados.indexOf(this.elementos[i])}` ,{ x: (i-this.oredenados.indexOf(this.elementos[i]))*100});

      }
     
  
      let n = this.elementos.length;
 
      var i=0
      var j=i+1  
      for( i = 0; i < n; i++) {  
        tl.set("#i",{scale: 1})
        tl.to( "#bordacodigo", { y:-27*7.5  });
    
  
       tl.set("#i",{scale: 1})
       tl.fromTo( "#i",{ x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(i-1)) }, { x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(i))  });
        var min = i;
        tl.to( "#bordacodigo", { y:-27*6.5  });
        
          for( j = i+1; j < n; j++){
            tl.to( "#bordacodigo", { y:-27*5.5  });

          
            tl.to( "#bordacodigo", { y:-27*4.5  });
              if(this.elementos[j] < this.elementos[min]) {
               
                  min=j;
                  tl.to( "#bordacodigo", { y:-27*3.5  });

              }
              tl.to( "#bordacodigo", { y:-27*2.5  });
            tl.set("#j",{scale: 1})  
            
               tl.fromTo( "#j",{ x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(j-1)) }, { x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(j))  });
          }
          tl.to( "#bordacodigo", { y:-27*1.5  });
          tl.to( "#bordacodigo", { y:-27*0.5  });
          if (min != i) {
            

            tl.to( "#bordacodigo", { y:27*0.5  });
            tl.to( "#bordacodigo", { y:27*1.5  });
            tl.to( "#bordacodigo", { y:27*2.5  });
            



              tl.to(`#box${this.oredenados.indexOf(this.elementos[i])}`, { 
                duration: 0.3,
                backgroundColor: 'orange',
                yoyo: true,
                repeat: 2,
              });
              tl.to(`#box${this.oredenados.indexOf(this.elementos[min])}`, { 
                duration: 0.3,
                backgroundColor: 'orange',
                yoyo: true,
                repeat: 2,
              },"<");
              tl.to(`#box${this.oredenados.indexOf(this.elementos[i])}`, { 
                duration: 0.3,
                backgroundColor: 'red',
              });
              tl.to(`#box${this.oredenados.indexOf(this.elementos[min])}`, { 
                duration: 0.3,
                backgroundColor: 'red',
              },"<");

              
              tl.to(`#box${this.oredenados.indexOf(this.elementos[i])}`, { 
              duration: 1,ease: "sine.out",
              y: -150,
            });
              tl.to(`#box${this.oredenados.indexOf(this.elementos[min])}`, { 
              duration: 1,ease: "sine.out",
              y: -150,

            },"<");
  

  
    
          
          tl.to( `#box${this.oredenados.indexOf(this.elementos[min])}`, {x: (this.oredenados.indexOf(this.elementos[min])-i)*100,duration: 2,ease: "sine.out", });

       
    

          tl.to( `#box${this.oredenados.indexOf(this.elementos[i])}`, {x: (min-this.oredenados.indexOf(this.elementos[i]))*100,duration: 2,ease: "sine.out", },"<");

            
              tl.to(`#box${this.oredenados.indexOf(this.elementos[i])}`, { 
              duration: 1,ease: "sine.out",
              y: 0,
            });
              tl.to(`#box${this.oredenados.indexOf(this.elementos[min])}`, { 
              duration: 1,ease: "sine.out",
              y: 0,

            },"<");
            if((this.oredenados.indexOf(this.elementos[min])-i)==0){
              tl.to(`#box${this.oredenados.indexOf(this.elementos[min])}`, { 
                duration: 0.3,
                backgroundColor: 'green',
                yoyo: true,
                repeat: 2,
              });
            }
            if((min-this.oredenados.indexOf(this.elementos[i]))==0){
              tl.to(`#box${this.oredenados.indexOf(this.elementos[i])}`, { 
                duration: 0.3,
                backgroundColor: 'green',
                yoyo: true,
                repeat: 2,
              });
            }
  

              let tmp = this.elementos[i];
         
              this.elementos[i]=this.elementos[min];
      
              this.elementos[min]=tmp;
        
          
   
          }
          tl.to( "#bordacodigo", { y:27*3.5  });
      }
      tl.to( "#bordacodigo", { y:27*4.5  });

        tl.set("#i",{scale: 0})
        tl.set("#j",{scale: 0})
        tl.set("#bordacodigo",{scale: 0})
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



</style>