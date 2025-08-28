var tl = gsap.timeline({scrollTrigger:{
    trigger:"#two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:"1"
}})
tl.to("#fanta",{
    top:"130%",
    left:"-5%",
},"orange")

tl.to("#orange1",{
    top:"160%",
    left:"20%",
},"orange")

tl.to("#orange2",{
    width:"17%",
    top:"168%",
    right:"5%",
},"orange")

tl.to("#leaf1",{
    rotate:"360",
    width:"20%",
    top:"100%",
    left:"80%",
},"orange")

tl.to("#leaf2",{
    rotate:"360",
    width:"30%",
    top:"120%",
    left:"-8%",
},"orange")

var tl1 = gsap.timeline({scrollTrigger:{
    trigger:"#three",
    start:"0% 95%",
    end:"70% 75%",
    scrub:"1",
    
}})
tl1.from("#org",{
    opacity:"0",
    rotate:"90",
    left:"-50%",
    top:"110%",
},"together")

tl1.from("#cocacola",{
    rotate:"90",
    left:"-50%",
    top:"100%",
},"together")
tl1.from("#pepsi",{
    rotate:"90",
    right:"-50%",
    top:"100%",
},"together")

tl1.to("#orange1",{
    left:"50%",
    top:"210%",
},"orange")
tl1.to("#fanta",{
    left:"25%",
    top:"215%",
},"orange")
