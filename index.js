var app = new Vue({
    el: '#app',
    data: {
        inputCSS: '',
        file: null
    },
    computed: {
        outputCSS: function () {
          return this.inputCSS.replace(/(\r\n|\n|\r|\s)/gm,"")
        },
        reduceRate: function(){
            inputBytes = encodeURI(this.inputCSS).split(/%..|./).length - 1;
            outputBytes = encodeURI(this.outputCSS).split(/%..|./).length - 1;
            rate= ((100*outputBytes)/inputBytes)-100 || 0
            return Math.abs(rate).toFixed(2) || 0
        },
    },
  })

  