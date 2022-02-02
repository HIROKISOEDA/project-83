var mouserodent = "empty"
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var color = "aliceblue"
var width_of_line = 5;

var w = screen.width

var new_width = screen.width - 70
var new_height = screen.height - 300

if(w < 992)
{
    document.getElementById("myCanvas").width = new_width
    document.getElementById("myCanvas").height = new_height
}

canvas.addEventListener("touchstart", touch_start)

function touch_start(e){
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop

}

canvas.addEventListener("touchmove", touch_move)

function touch_move(u){
    current_position_of_x = u.touches[0].clientX - canvas.offsetLeft
    current_position_of_y = u.touches[0].clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width_of_line

    ctx.moveTo(last_position_of_x,last_position_of_y)
    ctx.lineTo(current_position_of_x,current_position_of_y)
    ctx.stroke()
}
canvas.addEventListener("mousedown", mouse_down)
 function mouse_down(e){
     mouserodent = "Mousedown"
     color = document.getElementById("color").value
     width_of_line = document.getElementById("width_of_line").value
 } 

 canvas.addEventListener("mouseup", mouse_up)
 function mouse_up(e){
mouserodent = "Mouseup"
 }

 canvas.addEventListener("mouseleave", mouse_leave)
function mouse_leave(e){
    mouserodent = "Mouseleave"
}

 canvas.addEventListener("mousemove", mouse_move)
 function mouse_move(e){
 current_position_of_x = e.clientX -canvas.offsetLeft
 current_position_of_y = e.clientY -canvas.offsetTop
 
 if(mouserodent == "Mousedown"){
     ctx.beginPath()
     ctx.strokeStyle = color
     ctx.lineWidth = width_of_line
     
     ctx.moveTo(last_position_of_x, last_position_of_y)
     ctx.lineTo(current_position_of_x, current_position_of_y)
     ctx.stroke()
 }
 last_position_of_x = current_position_of_x
 last_position_of_y = current_position_of_y
 }
