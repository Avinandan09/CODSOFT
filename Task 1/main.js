const scrollRevealer = {
    distance: "60px",
    origin: "bottom",
    duration: 2000
};

ScrollReveal().reveal(".container-left h1",{
    ...scrollRevealer
})

ScrollReveal().reveal(".container-left .Book-Button",{
    ...scrollRevealer,
    delay:400,
})

ScrollReveal().reveal(".container-right .first",{
    duration:1000,
    delay:1500,
})

ScrollReveal().reveal(".container-right .second",{
    duration:1000,
    delay:2000,
})



