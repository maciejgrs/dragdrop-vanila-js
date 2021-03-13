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
        container.appendChild(draggable)
        console.log('draggggin');
    })
})

const specifyPosition = (container, position)  => {
const dragArr = [...container.querySelectorAll('.draggable:not(.dragging')]
    dragArr.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        console.log(box);

    }, { offset: Number.POSITIVE_INFINITY })
} 