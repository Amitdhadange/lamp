    var text= gsap.timeline({
    scrollTrigger:{
        trigger:`.page2`,
        start:`top 90%`,
        end:`top 10%`,
        // markers:true,
        scrub:.5
    }
})
text.from(".page2>.right>h3",{
    top:`20%`,
    opacity:0
})
text.from(".page2>.right>h1",{
    top:`20%`,
    opacity:0
})
text.from(".page2>.right>p",{
    top:`20%`,
    opacity:0
})
text.from(".page2>.right>button",{
    top:`20%`,
    opacity:0
})
var pic= gsap.timeline({
    scrollTrigger:{
        trigger:`.page2`,
        start:`top 90%`,
        end:`top 10%`,
        // markers:true,
        scrub:.5,
        // duration:100
    }
})
pic.from(".page2>.left",{
    x:`-80%`,
    duration:1,

})



var text= gsap.timeline({
    scrollTrigger:{
        trigger:`.page3`,
        start:`top 80%`,
        end:`top 10%`,
        // markers:true,
        scrub:.5
    }
})
text.from(".page3>.left1>h3",{
    top:`20%`,
    opacity:0,
    duration:5,
})
text.from(".page3>.left1>h1",{
    top:`20%`,
    opacity:0,
    duration:5,

})
text.from(".page3>.left1>p",{
    top:`20%`,
    opacity:0,
    duration:5,

})
text.from(".page3>.left1>button",{
    top:`20%`,
    opacity:0,
    duration:10,

})
var pic1= gsap.timeline({
    scrollTrigger:{
        trigger:`.page3`,
        start:`top 90%`,
        end:`top 10%`,
        // markers:true,
        scrub:.5,
        // duration:100
    }
})
pic1.from(".page3>.right1",{
    x:`80%`,
    // duration:1,
})


var text= gsap.timeline({
    scrollTrigger:{
        trigger:`.page4`,
        start:`top 90%`,
        end:`top 10%`,
        // markers:true,
        scrub:.5
    }
})
text.from(".page4>.right2>h3",{
    top:`20%`,
    opacity:0
})
text.from(".page4>.right2>h1",{
    top:`20%`,
    opacity:0
})
text.from(".page4>.right2>p",{
    top:`20%`,
    opacity:0
})
text.from(".page4>.right2>button",{
    top:`20%`,
    opacity:0
})
var pic= gsap.timeline({
    scrollTrigger:{
        trigger:`.page4`,
        start:`top 90%`,
        end:`top 10%`,
        // markers:true,
        scrub:.5,
        // duration:100
    }
})
pic.from(".page4>.left2",{
    x:`-80%`,
    duration:1,

})

