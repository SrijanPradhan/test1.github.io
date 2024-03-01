var tl = gsap.timeline ()

tl.from (".loader img", {
    x:0,
    y:0,
    duration:0.1,
    opacity:0
})

tl.to (".loader img", {
    x:0,
    y:0,
    opacity:0,
    duration:0.3,
    delay:0.5
})

tl.to (".loader .left-door", {
    x:-1000,
    duration:1,
    
})
tl.to (".loader .right-door", {
    x:1000,
    duration:1,
}, "-=1")

tl.to (".loader", {
    opacity: 0
})

tl.to (".loader", {
    display:"none"
})