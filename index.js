$(function() {
    //add item function
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault()
        //get input 
        const add = $(this).find('input[name="shopping-list-entry"]').val()
        $('.shopping-list').append(output(add))
        
    })
    //delete function
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) { 
        console.log(this)
        console.log($(this))
        this.closest('li').remove() 
    })
    
    //check function 
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) { 
        console.log(this)
        console.log($(this))
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked') 
    })

    /*$('.shopping-list').on('click', '.shopping-item-toggle', function (event) { 
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked'); });*/
    
})

function output(add) {
    return `<li>
    <span class="shopping-item">${add}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
}