AFRAME.registerComponent('car', {
  schema:{
      position:{type:'number', default:{x: -4, y:4, z: 8.2}},
      rotation:{type: 'number', default:{x: 0, y: 90, z: 0}}
  },
  init:function(){

    this.el.setAttribute('position', this.data.position)
    this.el.setAttribute('position', this.data.rotation)
  },
  update: function() {
    window.addEventListener("click" , e => {
      this.data.clickCounter = this.data.clickCounter + 1
      if(this.data.clickCounter === 1) {
          const rotation = {x: 0, y: 20, z: 0}
          this.el.setAttribute("rotation", rotation)
      } else(this.data.clickCounter === 2)
       {
        const rotation = {x: 0, y: 100, z: 0}
      }
    })
  }

})
