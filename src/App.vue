<template>
  <div id="app" style="background:#fff">
    <main>
	 <transition name="fade" mode="out-in" v-on:after-enter="" appear>
      <router-view></router-view>
	 </transition>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{

    }
  },
  beforeMount(){
    this.$store.state.from_city=JSON.parse(localStorage.getItem('from_city'))
    this.$store.state.to_city=JSON.parse(localStorage.getItem('to_city'))

    if(this.$store.state.from_city != null && this.$store.state.to_city != null){
      //this.$router.push('/bus')
    }
  }
}
</script>

<style>
body{

  font-family: 'Cutive' ! important;


}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v28/2fcrYFNaTjcS6g4U3t-Y5RV6cRhDpPC5P4GCEJpqGoc.woff) format('woff');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}


.preloader {
  background: #159756;
  width: 100%;
  height: 5px;
  -moz-animation: bg_animation 4s linear infinite;
  -webkit-animation: bg_animation 4s linear infinite;
  animation: bg_animation 4s linear infinite;
}
.preloader:before {
  display: block;
  content: '';
  margin: auto;
  width: 0px;
  height: 5px;
  -moz-animation: color_animation 4s linear infinite;
  -webkit-animation: color_animation 4s linear infinite;
  animation: color_animation 4s linear infinite;
}

@-moz-keyframes bg_animation {
  0% {
    background: #159756;
  }
  24% {
    background: #159756;
  }
  25% {
    background: #da4733;
  }
  49% {
    background: #da4733;
  }
  50% {
    background: #3b78e7;
  }
  74% {
    background: #3b78e7;
  }
  75% {
    background: #fdba2c;
  }
  100% {
    background: #fdba2c;
  }
}
@-webkit-keyframes bg_animation {
  0% {
    background: #159756;
  }
  24% {
    background: #159756;
  }
  25% {
    background: #da4733;
  }
  49% {
    background: #da4733;
  }
  50% {
    background: #3b78e7;
  }
  74% {
    background: #3b78e7;
  }
  75% {
    background: #fdba2c;
  }
  100% {
    background: #fdba2c;
  }
}
@keyframes bg_animation {
  0% {
    background: #159756;
  }
  24% {
    background: #159756;
  }
  25% {
    background: #da4733;
  }
  49% {
    background: #da4733;
  }
  50% {
    background: #3b78e7;
  }
  74% {
    background: #3b78e7;
  }
  75% {
    background: #fdba2c;
  }
  100% {
    background: #fdba2c;
  }
}
@-moz-keyframes color_animation {
  0% {
    background: #da4733;
    width: 0%;
  }
  24.99% {
    background: #da4733;
    width: 100%;
  }
  25% {
    background: #3b78e7;
    width: 0%;
  }
  49.99% {
    background: #3b78e7;
    width: 100%;
  }
  50% {
    background: #fdba2c;
    width: 0%;
  }
  74.99% {
    background: #fdba2c;
    width: 100%;
  }
  75% {
    background: #159756;
    width: 0%;
  }
  100% {
    background: #159756;
    width: 100%;
  }
}
@-webkit-keyframes color_animation {
  0% {
    background: #da4733;
    width: 0%;
  }
  24.99% {
    background: #da4733;
    width: 100%;
  }
  25% {
    background: #3b78e7;
    width: 0%;
  }
  49.99% {
    background: #3b78e7;
    width: 100%;
  }
  50% {
    background: #fdba2c;
    width: 0%;
  }
  74.99% {
    background: #fdba2c;
    width: 100%;
  }
  75% {
    background: #159756;
    width: 0%;
  }
  100% {
    background: #159756;
    width: 100%;
  }
}
@keyframes color_animation {
  0% {
    background: #da4733;
    width: 0%;
  }
  24.99% {
    background: #da4733;
    width: 100%;
  }
  25% {
    background: #3b78e7;
    width: 0%;
  }
  49.99% {
    background: #3b78e7;
    width: 100%;
  }
  50% {
    background: #fdba2c;
    width: 0%;
  }
  74.99% {
    background: #fdba2c;
    width: 100%;
  }
  75% {
    background: #159756;
    width: 0%;
  }
  100% {
    background: #159756;
    width: 100%;
  }
}

.application .theme--dark.toolbar .btn, .application .theme--dark.toolbar .btn .icon {
  color: #000 ! important;
}


.application .theme--dark.toolbar .btn .icon {
    color:#616A6B;
    float:left;
    margin-bottom:1.6vh;

}
#search{
padding-right:2vh;
}

.input-group--text-field input {
    outline:none;
    box-shadow: none;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 9VH;
    min-width: 0;
  /*  overflow: hidden;*/
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 30vh;
    margin-left: 1.1vh;
    margin-right: 1.1vh;
    padding-top:3vh;
    color:#BFC9CA;
    float:right;




}
.application--light .input-group:not(.input-group--error) .input-group__details:before {
     background-color:transparent;
}
.application--light .input-group:not(.input-group--error) .input-group__details:after{
     background-color:transparent;
}
.input-group__details {
    display: -webkit-box;
    display: -ms-flexbox;
    /* display: flex; */
    padding-top: 1vh;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 100%;
    flex: 1 0 100%;
    font-size:0.5vh;
    min-height: 2vh;
  /*  overflow: hidden;*/
    position: relative;
    /* width: 100%; */
    height: 10vh;
    background:transparent;
    padding-bottom:0vh;

}
.application>main>.container {
    min-height: 100vh;
    padding-top: 15vh;
    padding-left:1vh;

}
#example-2{
/*overflow:hidden;*/
scroll:no;
position:fixed;
width:100%;
height:100%;
font-family: 'Cutive';


}

#recent {
    padding-right: 2px;
    color: #616A6B;
    font-size: 2.1vh;
    margin-bottom: 0vh;
    font-style: normal;
    font-weight: 350;
    /* padding-bottom: 0vh; */
    padding-top: 0.02%;
}
#recent2{
  padding-right:2px;
  color:#616A6B;
  font-size: 15px;
margin-bottom: 0vh;
font-style: normal;
font-weight: 350;

}
.application--light .divider {

    padding-right:0px;
    margin-left:8.5vh;
}
svg{
 margin-left:0px;
 font-weight:300;
}
#recenticon{
float:left;
margin-left:2vh;
margin-top:-0.3vh;
BORDER-RADIUS:100%;
}

.toolbar__content {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 8.5vh;
    padding-top: 0.5%;
    margin-top: 1vh;
    margin-bottom: 0vh;
    margin-left: -0.5vh;
}
.application--light .input-group input, .application--light .input-group textarea {
    color:#616A6B;
    padding-top:0.5vh;


}
#gps{
    margin-bottom:2vh;
    margin-top:0.2vh;
    color:#BFC9CA;
}
#testing {
    font-size: 3vh;
    MARGIN-TOP: 9vh;
    /* MARGIN-BOTTOM: 0VH; */
}
::-webkit-input-placeholder { /* Chrome */
  color:#BFC9CA;
  font-size:2.5vh;
  padding-top:0.3vh;
}
@font-fiber_manual_record {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;

  margin-bottom:1vh;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;

  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
.application .theme--dark.toolbar .btn, .application .theme--dark.toolbar .btn .icon {
color: #000;
}
.application .theme--dark.toolbar .btn, .application .theme--dark.toolbar .btn .icon {
  color: #000 ! important;
}
.navigation-drawer navigation-drawer--absolute navigation-drawer--close navigation-drawer--is-booted navigation-drawer--temporary theme--light{
height: 100%;
   width: 70%;
}
.toolbar--fixed+main {
    padding-top: 0px;
}

.toolbar__content {

}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}

</style>
