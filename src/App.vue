<template>
    <div>
    <nav>
      <ul class="menu">
        <li class="logo"><img src="/images/logo.svg" alt=""></li>
        <li class="list">Features</li>
        <li class="list">Pricing</li>
        <li class="resources list">Resources</li>
        <li class="list login">Login</li>
        <li class="list signup"><a class="button" href="#">Sign Up</a> </li>
        <li class="toggle" @click="displayMenu"><img src="/images/icon-hamburger.svg" alt=""></li>     
      </ul>
    </nav>
      <div class="wrapper" v-show="showMenu">
        <ul class="">
          <li>Features</li>
          <li>Pricing</li>
          <li class="resources">Resources</li>
          <li>Login</li>
          <li class="sign-up">Sign Up</li>
        </ul>
      </div>
      <div class="intro-section" v-vue-aos="{animationClass:'fadeIn animated'}">
        
        <div class="intro-text">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button>Get Started</button>
        </div>
        <div class="intro-img" v-show="showMenu == false">
          <img src="/images/illustration-working.svg" alt="" >
        </div>
      </div>
      <div class="link-section">
            <div class="link-input-container">
              <div :class="{invalid: errorData}">
                  <input type="url" :class="{invalid: errorData}" placeholder="Shorten a link here..." v-model="formData.url" @focus="clearError">
                  <span v-if="errorData">Please add a link</span>
              </div>
              <button type="submit" @click="getShortLink">Shorten It!</button>
            </div>
            <div class="link-list">
              <TransitionGroup name="list">
              <div class="link-content" v-for="link in shortenedLink" :key="link" >
                <p class="long-link">{{link.oldLink}}</p>
                <p class="short-link">{{link.shortenedLink}}</p>
                <button v-if="!link.copied" @click="copiedLink(link.shortenedLink)">Copy</button>
                <button v-else class="copied">Copied!</button>
              </div>
              </TransitionGroup>
            </div>
            <div class="link-stat">
                <div class="link-stat-description">
                  <h1>Advanced Statistics</h1>
                  <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                </div>
            </div>
            <!-- <span class="connector"></span> -->
        <div class="link-body">
          <div class="link-items brand">
            <h2>Brand Recognition</h2>
            <p>Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div class="link-items detailed">
            <h2>Detailed Records</h2>
            <p>Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.</p>
          </div>
          <div class="link-items customizable">
            <h2>Fully Customizable</h2>
            <p>Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.</p>
          </div>
        </div>
         <div class="call-to-action">
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </div>
          <Footer/>
      </div>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{Footer},
  data (){
    return {
      showMenu:false,
      formData:{
        url:'',
        domain:'bit.ly'
      },
      errorData:false,
      shortenedLink:[]
    }
  },
  methods:{
    displayMenu (){
      if (this.showMenu == false){
        this.showMenu = true
      }else{
        this.showMenu = false
      }
    },
    validateURL(){
      this.clearError()
      if(this.formData.url === '') {
				this.errorData = true;
				return true;
			}
      return false
    },
    clearError(){
        this.errorData = false
    },
    getShortLink(){
      if(this.validateURL()){
        return
      }
      this.$store.dispatch('getLink', this.formData)
        .then(res =>{
          if(res.status){
            this.$store.dispatch('setLink', res.data)
            const newResult = {
              oldLink: res.data.result.original_link,
              shortenedLink: res.data.result.full_short_link,
              copied: false,
            };
            this.shortenedLink.unshift(newResult) 
            this.updateLocalStorage()
            this.formData.url = ''
            this.shortenedLink = JSON.parse(localStorage.getItem("shortLinks")) || this.shortenedLink
            return
          }
        }).catch(e =>{
          console.log(e)
        })
    },
    copiedLink(link) {
      let selectLink = this.shortenedLink.find(
        item => item.shortenedLink === link
      );
      navigator.clipboard.writeText(link);
      selectLink.copied = true;
      this.updateLocalStorage();
    },
    updateLocalStorage(){
        localStorage.setItem(
          "shortLinks",
          JSON.stringify(this.shortenedLink)
        );
    }
  },
  mounted(){
    this.shortenedLink = JSON.parse(localStorage.getItem("shortLinks")) || this.shortenedLink
  }
}
</script>

<style scoped>
  .copied{
    background-color:hsl(257, 27%, 26%)
  }
</style>
