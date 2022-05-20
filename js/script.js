let fileInput = document.querySelector('input');
 fileInput.addEventListener('change',function(ev){
     [...this.files].forEach(file=>{
        if(file.type.startsWith('image/')){
            let reader = new FileReader();
            reader.onload = function(){
                let img = document.createElement('img');
                img.setAttribute('src',reader.result);
                let button = document.createElement('button');
                button.innerText = 'X';
                document.querySelector('.main').appendChild(button);
                document.querySelector('.main').appendChild(img);
                button.addEventListener('click',function(){
                    document.querySelector('img').remove();
                })
            }
            reader.readAsDataURL(file);
        }
        else{
            console.log('format duzgun deil');
            this.value = '';
        }
        
     })
 })