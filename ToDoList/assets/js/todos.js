// Check off specific Todos by Clicking
// Note the commented out code is a problem because
// The dynamically rendered li's are not getting this toggle class

// $('li').click(function (){
//     $(this).toggleClass("completed")
// })

// ul must be selected because in jQuery
// listeners can only be added to elements that exist
// when the ul code below is run the 1st time
// this means simply the dynamic rendered li's
// cannot have listeners added to them

// the selector li states that when an li inside of ul is clicked
// run this code

$('ul').on('click','li',function (){
    $(this).toggleClass("completed")
})

$('ul').on('click', 'span',function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        const todoText = $(this).val()
        $(this).val("")
    //    create a new li and add to ul
        $('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
    }
});

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle()
})
