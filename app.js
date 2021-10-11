 Vue.createApp({
     data() {
         return {
             perspective: 100,
             rotateY: 0,
             rotateX: 0,
             rotateZ: 0
         }
     },
     methods: {
         reset() {
             this.perspective = 100,
                 this.rotateY = 0,
                 this.rotateX = 0,
                 this.rotateZ = 0

         },
         copy() {
             const el = document.createElement('textarea')
             el.setAttribute('readonly', '')
             el.style.position = 'absolute'
             el.style.left = '-9999px'
             el.value = `transform:${this.box.transform}`
             document.body.appendChild(el)
             el.select()
             document.execCommand('copy')
             document.body.removeChild(el)
         }

     },
     computed: {
         box() {
             return {
                 transform: `  perspective(${this.perspective}px) 
                 rotateY(${this. rotateY}deg)
                 rotateX(${this. rotateX}deg)  
                 rotateZ(${this. rotateZ}deg) `
             }
         }

     },

 }).mount('#app')