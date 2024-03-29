$("document").ready(function(){

    let bar = new ProgressBar.Line("#html",{
        strokeWidth: 4,
        trailWidth: 4,
        color: "#fad",
        duration: 1400,
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
    })
    bar.animate(0.7)

    let bar2 = new ProgressBar.Line("#css",{
        strokeWidth: 4,
        trailWidth: 4,
        color: "orange",
        duration: 1400,
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
    })
    bar2.animate(0.47)
    let bar3 = new ProgressBar.Line("#js",{
        strokeWidth: 4,
        trailWidth: 4,
        color: "#880",
        duration: 1400,
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
    })
    bar3.animate(0.57)
    let bar4 = new ProgressBar.Line("#ps",{
        strokeWidth: 4,
        trailWidth: 4,
        color: "#a60",
        duration: 1400,
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
    })
    bar4.animate(0.87)
    let bar5 = new ProgressBar.Line("#ai",{
        strokeWidth: 4,
        trailWidth: 4,
        color: "#a09",
        duration: 1400,
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
    })
    bar5.animate(0.77)
    let bar6 = new ProgressBar.Line("#of",{
        strokeWidth: 4,
        trailWidth: 4,
        color: "#053",
        duration: 1400,
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
    })
    bar6.animate(0.47)
})