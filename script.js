let inputTask =document.querySelector("input")
        let addBtn =document.querySelector(".add")
        let initBox =document.querySelector(".init")
        let boxes=document.querySelectorAll('.box')
        let drag=null
        addBtn.addEventListener('click', _=>{
            if (!inputTask.value ==" ") {
                initBox.innerHTML+=`<p  class="task" draggable=true> ${inputTask.value}</p>`
                inputTask.value=""
            }
            else alert("Please enter task")

            dragItems()
        })
        function dragItems(){
            let tasks=document.querySelectorAll('.task');
            tasks.forEach(task=>{
                task.addEventListener('dragstart',_=>{
                    drag=task
                    task.style.opacity="0.5"
                })
            // =========================
                task.addEventListener('dragend',_=>{
                    drag=null
                    task.style.opacity="1"
                })
            
                boxes.forEach(box=>{ 
                    box.addEventListener('dragover',function(e){
                        e.preventDefault()
                    this.style.boxShadow=`5px 5px 10px #000`
                    this.children[0].style.display="block"
                    })
                    // ----------------------
                    box.addEventListener('dragleave',function(){
                        
                         this.style.backgroundColor="#303443"
                         this.children[0].style.display="none"
                         this.style.boxShadow=`none`
                    })
                    box.addEventListener('drop',function(){
                        if (box.classList.contains('finshed'))
                        {
                            drag.style.backgroundColor="red"
                            drag.style.textDecoration="line-through"
                        }
                        else if(box.classList.contains('working'))
                        {
                            drag.style.backgroundColor="#8bc34a"
                            drag.style.textDecoration="none"

                        }
                        else if(box.classList.contains('pending'))
                        {
                            drag.style.backgroundColor="#673ab7"
                            drag.style.textDecoration="none"
                        }
                        else if(box.classList.contains('init'))
                        {
                            drag.style.backgroundColor="#2196f3"
                            drag.style.textDecoration="none"
                        }
                         this.append(drag)
                         this.style.backgroundColor="#303443"
                         this.children[0].style.display="none"
                         this.style.boxShadow=`none`
                    })
                })
         })
        }
