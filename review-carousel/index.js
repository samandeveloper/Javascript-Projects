// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

  let clicks = 0
  let newArrayName = []
  let newArrayJob = []
  let newArrayInfo = []
  let newArrayImage = []

  const authorsImage = document.getElementById("person-img")
  const authorsName = document.getElementById("author")
  const authorsJob = document.getElementById("job")
  const authorsInfo = document.getElementById("info")
  const prevBtn = document.getElementsByClassName("prev-btn")[0]
  const nextBtn = document.getElementsByClassName("next-btn")[0]
  const surpriseBtn = document.getElementsByClassName("random-btn")[0]

  //work with buttons
  nextBtn.addEventListener("click", nextFunc)
  prevBtn.addEventListener("click", prevFunc)
  surpriseBtn.addEventListener("click", surpriseFunc)

  for(let i=0 ; i<reviews.length ; i++){
    newArrayImage.push(reviews[i].img)
    newArrayName.push(reviews[i].name)
    newArrayJob.push(reviews[i].job)
    newArrayInfo.push(reviews[i].text)
  }
  function shared(clicks){
    authorsImage.src = newArrayImage[clicks]       //we should use src for images
    authorsName.textContent = newArrayName[clicks]
    authorsJob.textContent = newArrayJob[clicks]
    authorsInfo.textContent = newArrayInfo[clicks]
  }

  function nextFunc(){
    clicks++
    if(clicks>reviews.length-1){
    clicks = 0;
    }
    shared(clicks)
  }

  function prevFunc(){
    clicks--
    if(clicks<0){
      clicks = reviews.length -1;
    }
    shared(clicks)
  }

  function surpriseFunc(){
    let random = Math.floor(Math.random()*reviews.length)
    shared(random)
  }
