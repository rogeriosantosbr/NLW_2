document.querySelector("#add-time").addEventListener('click',cloneField)


function cloneField(){
    //console.log("Clone Fields");
    const NewNodeContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    const nodes = NewNodeContainer.querySelectorAll('input');
    
    nodes.forEach(function(nodes){
        nodes.value = "";
    })

    document.querySelector('#schedule-items').appendChild(NewNodeContainer)
}
