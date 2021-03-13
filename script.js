const dragables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')


dragables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})


containers.forEach(container => {
    container.addEventListener('dragover', (e) =>
    {
        e.preventDefault()
        const afterElement = specifyPosition(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        console.log(afterElement);
        if (afterElement === null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }
        
        
    })
})

const specifyPosition = (container, position)  => {
    const dragArr = [...container.querySelectorAll('.draggable:not(.dragging')]
     return   dragArr.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = position - box.top - box.height / 2
            console.log(offset);
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset,
                         element: child,
                        }
            } else {
                return closest
            }
    
        }, { offset: Number.NEGATIVE_INFINITY }).element
    } 