// gsap.set('.box', {
//   y: 300,
//   // opacity: 0
// })
// gsap.to('.box', {
//   x: 300,
//   // delay: 5,
//   duration: 2,
//   // rotation: 360,
//   // opacity: 1
//   // border: '10px solid orange',
//   // borderRadius: '50%',
//   // repeat: -1, // -1 means repeat infinitely
//   repeat: 5,
//   // repeatDelay: 1,
//   // yoyo: true,
//   // stagger: 0.5
//   // ease: 'linear',
//   ease: 'bounce',
//   // ease: 'power1.in',
//   // ease: 'back.out',
//   // ease: 'elastic.out',
// })

// const obj = { num: 0 }
// gsap.to(obj, {
//   duration: 2,
//   num: 100,
//   onUpdate: () => { console.log(obj.num) }
// })

// gsap.from('.box', {
//   duration: 2,
//   width: 10,
//   height: 10,
//   opacity: 0,
//   stagger: 0.5
// })
// gsap.to('.box', {
//   duration: 1,
//   x: 100,
//   stagger: 0.3,
//   delay: 1
// })
const tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  default: { duration: 0.5 }
})
tl.from('.box', {
  // duration: 1,
  width: 10,
  height: 10,
  opacity: 0,
  stagger: 0.5
})
tl.to('.box', {
  // duration: 1,
  x: 100,
  stagger: 0.3,
}, '+=1')
