<script>
  import { gsap } from "./scripts/gsap.min.js";
  import { ScrollTrigger } from "./scripts/ScrollTrigger.min.js";
  import { CustomEase } from "./scripts/CustomEase.min.js";
  import { onMount } from "svelte";
  	import Modal,{getModal} from './Modal.svelte'
	

	
	let selection
	
	// Callback function provided to the `open` function, it receives the value given to the `close` function call, or `undefined` if the Modal was closed with escape or clicking the X, etc.
		function setSelection(res){
		selection=res
	}

  let heroImageSrc = "img/hero.png";
  let backgroundElement1Src = "img/backgroundElement1.png";
  let backgroundElement2Src = "img/backgroundElement2.png";
  let backgroundElement3Src = "img/backgroundElement3.png";
  let backgroundElement4Src = "img/backgroundElement4.png";
  let backgroundElement5Src = "img/backgroundElement5.png";
  let backgroundElement6Src = "img/backgroundElement6.png";
  let backgroundElement7Src = "img/backgroundElement7.png";
  let backgroundElement8Src = "img/backgroundElement8.png";
  let project1ThumbSrc = "img/project1Thumb.png";
  let project2ThumbSrc = "img/project2Thumb.png";
  let project3ThumbSrc = "img/project3Thumb.png";
  let project4ThumbSrc = "img/project4Thumb.png";
  let linkedinSrc = "img/linkedin.png"
  let instagramSrc = "img/instagram.png"
  let githubSrc = "img/github.png"

  let mailSubject;
  let mailBody;

  gsap.registerPlugin(ScrollTrigger, CustomEase);

  onMount(() => {
    const tl = gsap.timeline();

    // Works
    gsap.to("#backgroundElement2", {
      scrollTrigger: {
        trigger: "#backgroundElement2",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      rotation: 90,
      transformOrigin: "50% 50%",
    });
    gsap.to("#catWork", {
      scrollTrigger: {
        trigger: "#catWork",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      y: 75,
    });
    gsap.to("#catAbout", {
      scrollTrigger: {
        trigger: "#catAbout",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      y: 75,
    });
    gsap.to("#catContact", {
      scrollTrigger: {
        trigger: "#catContact",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      y: 75,
    });
    gsap.to("#backgroundElement4", {
      scrollTrigger: {
        trigger: "#backgroundElement4",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      y: 1000,
      ease: Power1.easeInOut,
    });

    gsap.to("body", {
      scrollTrigger: {
        trigger: "#catContact",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      ease: CustomEase.create(
        "custom",
        "M0,0 C0,0 0.3,0 0.3,0 0.3,0 0.7,1 0.7,1 0.7,1 1,1 1,1 "
      ),
      backgroundColor: "#ffffff",
    });
    gsap.to(".outline", {
      scrollTrigger: {
        trigger: "#catContact",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      ease: CustomEase.create(
        "custom",
        "M0,0 C0,0 0.3,0 0.3,0 0.3,0 0.7,1 0.7,1 0.7,1 1,1 1,1 "
      ),
      color: "#ffffff",
      webkitTextStrokeColor: "#000000",
    });
	gsap.from("input", {
      scrollTrigger: {
        trigger: "#catContact",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      ease: CustomEase.create(
        "custom",
        "M0,0 C0,0 0.3,0 0.3,0 0.3,0 0.7,1 0.7,1 0.7,1 1,1 1,1 "
      ),
      backgroundColor: "#000000",
    });
	gsap.from("textarea", {
      scrollTrigger: {
        trigger: "#catContact",
        scrub: 1,
      }, // start the animation when ".box" enters the viewport (once)
      ease: CustomEase.create(
        "custom",
        "M0,0 C0,0 0.3,0 0.3,0 0.3,0 0.7,1 0.7,1 0.7,1 1,1 1,1 "
      ),
      backgroundColor: "#000000",
    });
  });
</script>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
</svelte:head>
<main>

<!-- the modal without an `id` -->
<Modal id="project1">
	<h1 class="col-lg-5 offset-lg-1">project 1</h1>

	
</Modal>

<Modal id="project2">
	<h1 class="col-lg-5 offset-lg-1">project 2</h1>

	
</Modal>
<Modal id="project3">
	<h1 class="col-lg-5 offset-lg-1">project 3</h1>

	
</Modal>
<Modal id="project4">
	<h1 class="col-lg-5 offset-lg-1">project 4</h1>

	
</Modal>

  <div class="container-fluid p-0">
    <div class="row">
      <img
        src={backgroundElement1Src}
        id="backgroundElement1"
        alt=""
        class="col-lg-5 offset-lg-7"
      />
    </div>
    <div class="row" id="textAndHero">
      <h2 class="outline offset-lg-1 col-lg-6">Welcome To The</h2>
      <h1 class="pink col-lg-7 offset-lg-3 overlayText">Digital World!</h1>
      <img
        src={heroImageSrc}
        id="heroImage"
        alt=""
        class="col-lg-4 offset-lg-1"
      />
    </div>
    <div class="row">
      <img
        id="backgroundElement2"
        src={backgroundElement2Src}
        alt=""
        class="col-lg-2 offset-lg-8"
      />
    </div>
    <div class="row whitespace">.</div>

    <div class="row">
      <h2 class="outline col-lg-6 offset-lg-1">Let's Explore It</h2>
      <h1 id="catWork" class="outline jumboText offset-lg-5 col-lg-6">Work</h1>
      <h1 class="pink col-lg-7 offset-lg-3" id="headerTextWork">Together!</h1>
    </div>
    <div class="row">
      <img
        src={backgroundElement4Src}
        alt=""
        id="backgroundElement4"
        class="col-lg-4 offset-lg-1"
        style="z-index: -1;"
      />
    </div>
    <div class="row" style="margin-top: -2000px;">
      <img src={backgroundElement3Src} alt="" class="col-lg-1 offset-lg-10" />
    </div>
    <div class="row" style="margin-top: -200px;">
      <h1 class="col-lg-5 offset-lg-4 projectTitle">Project #1</h1>
      <img
        src={project1ThumbSrc}
        alt=""
        class="col-lg-4 offset-lg-2"
        style="margin-top: -150px; z-index: -1;"
      />
      <p
        class="col-lg-4 offset-lg-6 projectText"
        style="margin-top: -450px; margin-bottom: 200px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et enim
        est. Nulla et gravida nunc. Sed at maximus nulla. Nunc aliquam, libero
        condimentum venenatis placerat, elit enim convallis lectus, sit amet
        ultrices tortor eros vel est. Suspendisse finibus tempor sem. Duis
        iaculis sollicitudin justo, quis pellentesque arcu vestibulum ac. Nam eu
        maximus nibh, in efficitur justo. Nulla facilisi. Praesent feugiat nibh
        eu lacinia convallis. Suspendisse potenti. Cras at nibh eleifend,
        imperdiet quam sed, malesuada dui. Vestibulum in eleifend diam. Praesent
        lobortis massa sed sodales convallis. In egestas eget mauris in tempor. <br><br>
		<span class="moreLink text-muted" on:click={()=>getModal('project1').open(setSelection)} >Read More  	
&#10140;</span>
      </p>
	  
    </div>
    <div class="row">
      <img src={backgroundElement5Src} alt="" class="col-lg-1 offset-lg-10" />
    </div>
    <div class="row" style="margin-top: -200px;">
      <h1 class="col-lg-5 offset-lg-4 projectTitle">Project #2</h1>
      <img
        src={project2ThumbSrc}
        alt=""
        class="col-lg-4 offset-lg-6"
        style="margin-top: -150px; z-index: -1;"
      />
      <p
        class="col-lg-4 offset-lg-2 projectText"
        style="margin-top: -450px; margin-bottom: 200px;"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et enim
        est. Nulla et gravida nunc. Sed at maximus nulla. Nunc aliquam, libero
        condimentum venenatis placerat, elit enim convallis lectus, sit amet
        ultrices tortor eros vel est. Suspendisse finibus tempor sem. Duis
        iaculis sollicitudin justo, quis pellentesque arcu vestibulum ac. Nam eu
        maximus nibh, in efficitur justo. Nulla facilisi. Praesent feugiat nibh
        eu lacinia convallis. Suspendisse potenti. Cras at nibh eleifend,
        imperdiet quam sed, malesuada dui. Vestibulum in eleifend diam. Praesent
        lobortis massa sed sodales convallis. In egestas eget mauris in tempor.<br><br>
		<span class="moreLink text-muted" on:click={()=>getModal('project2').open(setSelection)} >Read More  	
&#10140;</span>
      </p>
	  
    </div>
    <div class="row">
      <img src={backgroundElement6Src} alt="" class="col-lg-1 offset-lg-10" />
    </div>
    <div class="row" style="margin-top: -200px;">
      <h1 class="col-lg-5 offset-lg-4 projectTitle">Project #3</h1>
      <img
        src={project3ThumbSrc}
        alt=""
        class="col-lg-4 offset-lg-2"
        style="margin-top: -150px; z-index: -1;"
      />
      <p
        class="col-lg-4 offset-lg-6 projectText"
        style="margin-top: -450px; margin-bottom: 200px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et enim
        est. Nulla et gravida nunc. Sed at maximus nulla. Nunc aliquam, libero
        condimentum venenatis placerat, elit enim convallis lectus, sit amet
        ultrices tortor eros vel est. Suspendisse finibus tempor sem. Duis
        iaculis sollicitudin justo, quis pellentesque arcu vestibulum ac. Nam eu
        maximus nibh, in efficitur justo. Nulla facilisi. Praesent feugiat nibh
        eu lacinia convallis. Suspendisse potenti. Cras at nibh eleifend,
        imperdiet quam sed, malesuada dui. Vestibulum in eleifend diam. Praesent
        lobortis massa sed sodales convallis. In egestas eget mauris in tempor.<br><br>
		<span class="moreLink text-muted" on:click={()=>getModal('project3').open(setSelection)} >Read More  	
&#10140;</span>
      </p>
    </div>
    <div class="row">
      <img src={backgroundElement7Src} alt="" class="col-lg-1 offset-lg-10" />
    </div>
    <div class="row" style="margin-top: -200px;">
      <h1 class="col-lg-5 offset-lg-4 projectTitle">Project #4</h1>
      <img
        src={project4ThumbSrc}
        alt=""
        class="col-lg-4 offset-lg-6"
        style="margin-top: -150px; z-index: -1;"
      />
      <p
        class="col-lg-4 offset-lg-2 projectText"
        style="margin-top: -450px; margin-bottom: 200px;"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et enim
        est. Nulla et gravida nunc. Sed at maximus nulla. Nunc aliquam, libero
        condimentum venenatis placerat, elit enim convallis lectus, sit amet
        ultrices tortor eros vel est. Suspendisse finibus tempor sem. Duis
        iaculis sollicitudin justo, quis pellentesque arcu vestibulum ac. Nam eu
        maximus nibh, in efficitur justo. Nulla facilisi. Praesent feugiat nibh
        eu lacinia convallis. Suspendisse potenti. Cras at nibh eleifend,
        imperdiet quam sed, malesuada dui. Vestibulum in eleifend diam. Praesent
        lobortis massa sed sodales convallis. In egestas eget mauris in tempor. <br><br>
		<span class="moreLink text-muted" on:click={()=>getModal('project4').open(setSelection)} >Read More  	
&#10140;</span>
      </p>
    </div>
    <div class="row">
      <h2 class="outline col-lg-6 offset-lg-1">And Make It</h2>
      <h1 id="catAbout" class="outline jumboText offset-lg-5 col-lg-6">
        About
      </h1>
      <h1 class="pink col-lg-7 offset-lg-3" id="headerTextWork">Unique!</h1>
    </div>
    <div class="row">
      <img src={backgroundElement8Src} alt="" class="col-lg-4 offset-lg-7" />
    </div>
    <div class="row">
      <p class="col-lg-7 offset-lg-1" id="aboutText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et enim
        est. Nulla et gravida nunc. Sed at maximus nulla. Nunc aliquam, libero
        condimentum venenatis placerat, elit enim convallis lectus, sit amet
        ultrices tortor eros vel est. Suspendisse finibus tempor sem. Duis
        iaculis sollicitudin justo, quis pellentesque arcu vestibulum ac. Nam eu
        maximus nibh, in efficitur justo. Nulla facilisi. Praesent feugiat nibh
        eu lacinia convallis. Suspendisse potenti. Cras at nibh eleifend,
        imperdiet quam sed, malesuada dui. Vestibulum in eleifend diam. Praesent
        lobortis massa sed sodales convallis. In egestas eget mauris in tempor.
        Maecenas mattis elementum ante, et consectetur tortor faucibus vitae. Ut
        tincidunt, est non porta vehicula, diam lorem ornare urna, nec
        vestibulum sem ligula ut odio. Maecenas sem justo, laoreet et
        consectetur id, dapibus vitae diam. Mauris ac sollicitudin urna, at
        auctor eros. Suspendisse rutrum vehicula pharetra. Fusce accumsan
        malesuada ligula a sagittis. Ut varius pellentesque nisl vitae mollis.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Morbi in gravida magna. Nullam imperdiet, metus vitae
        accumsan sollicitudin, sapien urna vulputate massa, non convallis lacus
        nisi et nisl. Ut a justo sollicitudin, euismod orci sed, condimentum
        turpis. Donec ornare id ante vitae condimentum. Morbi tellus odio,
        molestie quis risus eu, ultricies consectetur ligula. Aliquam vel nisl
        elit. Sed ut iaculis neque. Ut metus orci, ultrices ut lectus non,
        pulvinar auctor quam. Aenean in imperdiet neque.
      </p>
    </div>
    <div class="row">
      <h2 class="outline col-lg-6 offset-lg-1">Let's Reach Out</h2>
      <h1 id="catContact" class="outline jumboText offset-lg-4 col-lg-6">
        Contact
      </h1>
      <h1 class="pink col-lg-7 offset-lg-3" id="headerTextWork">And Talk!</h1>
    </div>
    <div class="row">
      <form class="col-lg-6 offset-lg-1">
        <h2 class="mb-3">Send me an Email</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Subject</label>
          <input
            bind:value={mailSubject}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Message</label>
          <textarea
            bind:value={mailBody}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          />
        </div>
        <a
          class="btn btn-primary"
          href="mailto:noahbeij@gmail.com?&subject={mailSubject}&body={mailBody}"
          >Submit</a
        >
      </form>
    </div>
	<div class="row" style="margin-top: -600px">
		<a href="https://www.linkedin.com/in/noah-beij-6a56a5177/" target="blank" class="icon col-lg-1 offset-lg-10"><img class="w-100" src={instagramSrc} alt=""></a>
		<a href="https://www.instagram.com/dev.nbeij/" target="blank" class="icon col-lg-1 offset-lg-10"><img class="w-100" src={linkedinSrc} alt=""></a>
		<a href="https://github.com/thedutchgunslinger" target="blank" class="icon col-lg-1 offset-lg-10"><img class="w-100" src={githubSrc} alt=""></a>
	</div>
	<div class="d-flex justify-content-center p-5 mt-5">
		<h4>&copy; Noah Beij 2022</h4>
	</div>
  </div>
</main>

<style lang="scss">
  @import "./main.scss";
  :global(body) {
    background: $backgroundColor;
    padding: 0;
    margin: 0;
  }
  .icon {
	margin-bottom: 2rem;
  }
  #textAndHero {
    margin-top: -800px;
  }

  #heroImage {
    margin-top: -150px;
    z-index: -1;
  }
  #backgroundElement1 {
    z-index: -1;
  }
  #backgroundElement2 {
    margin-top: -300px;
  }

  .whitespace {
    height: 400px;
  }

  #catWork {
    margin-top: -175px;
    z-index: -1;
  }
  #catAbout {
    margin-top: -175px;
    z-index: -1;
  }
  #catContact {
    margin-top: -175px;
    z-index: -1;
  }

  #headerTextWork {
    margin-top: -100px;
    margin-bottom: 200px;
  }
  #aboutText {
    font-size: 24px;
    margin-top: -800px;
    margin-bottom: 200px;
  }
  textarea {
    resize: none;
  }
  .moreLink {
	padding: 1rem 0;
	cursor: pointer;
  }
</style>
