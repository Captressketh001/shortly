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
         <transition-group>
        <li class="toggle" @click="displayMenu"><img src="/images/icon-hamburger.svg" alt=""></li>
     </transition-group>
       
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
      <!-- <main> -->
        <div class="link-section">
            <div class="link-input-container">
                <!-- <label for="name">df</label> -->
                <input type="url" name="" id="" placeholder="Shorten a link here...">
                <button type="submit">Shorten It!</button>
            </div>
            <div class="link-list">
              <div class="link-content">
                <p class="long-link">https://frontmentor.io</p>
                <p class="short-link">https://relink/re4/</p>
                <button>Copy</button>
              </div>
              <div class="link-content">
                <p class="long-link">https://frontmentor.io</p>
                <p class="short-link">https://relink/re4/</p>
                <button style="background-color:hsl(257, 27%, 26%)">Copied!</button>
              </div>
              <div class="link-content">
                <p class="long-link">https://frontmentor.io</p>
                <p class="short-link">https://relink/re4/</p>
                <button>Copy</button>
              </div>
               <div class="link-content">
                 <p class="long-link">https://frontmentor.io</p>
                <p class="short-link">https://relink/re4/</p>
                <button>Copy</button>
              </div>
            </div>
            <div class="link-stat">
                <div class="link-stat-description">
                  <h1>Advanced Statistics</h1>
                  <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                </div>
            </div>
            <span></span>
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
        <footer>
          <div>
            <ul class="footer-logo">
              <li><img src="/images/logo_white.svg" alt="logo"></li>
            </ul>
            <ul class="footer-items">
              <li>
                <h4>Features</h4>
              </li>
              <li><a href="#">Link Shortening</a></li>
              <li><a href="#">Branded Links</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
            <ul class="footer-items">
              <li>
                <h4>Resources</h4>
              </li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
            <ul class="footer-items">
              <li>
                <h4>Company</h4>
              </li>
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul class="social-icon">
              <li><font-awesome-icon icon='fa-brands fa-square-facebook'/></li>
              <li><font-awesome-icon icon='fa-brands fa-twitter'/></li>
              <li><font-awesome-icon icon='fa-brands fa-pinterest'/></li>
              <li><font-awesome-icon icon='fa-brands fa-instagram'/></li>
              <!-- <li><img src="/images/icon-facebook.svg" alt="icon-facebook"></li>
              <li><img src="/images/icon-twitter.svg" alt="icon-twitter"></li>
              <li><img src="/images/icon-pinterest.svg" alt="icon-pinterest"></li>
              <li><img src="/images/icon-instagram.svg" alt="icon-instagram"></li> -->
            </ul>
            </div>
        </footer>
        </div>
       
      
    
    </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'App',
  components: {
    // FontAwesomeIcon
  },
  data (){
    return {
      showMenu:false
    }
  },
  methods:{
    displayMenu (){
      if (this.showMenu == false){
        this.showMenu = true
      }else{
        this.showMenu = false
      }
    }
  }
}
</script>

<style>

</style>
