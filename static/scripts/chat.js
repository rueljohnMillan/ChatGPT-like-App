// Collapsible
var coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}
function view() {
    
    const output = document.getElementById("chatbox");
    if(localStorage.getItem('data') != null){

        var myData = JSON.parse(localStorage.getItem('data'));
            output.innerHTML = "";
            myData.forEach(({ message, timestamp }) => {
               output.innerHTML += `<div><hr><h6>${timestamp}</h6> <h2>${message}</h2><hr></div>
               `;
            });

        }

}
view ();
 





    

    function sendButton(){

            var new_data = {
                "message": document.getElementById('textInput').value,
                "timestamp": getTime()
            }

            if(localStorage.getItem('data') == null){
                localStorage.setItem('data', '[]');
            }

            var old_data = JSON.parse(localStorage.getItem('data'));
            old_data.push(new_data);

            localStorage.setItem('data', JSON.stringify(old_data));
            document.getElementById('textInput').value="";
            view ();

         
            }
            function getTime() {
                let today = new Date();
                let month = today.getMonth();
                let date = today.getDate();
                let year = today.getFullYear();
                hours = today.getHours();
                minutes = today.getMinutes();
            
                var months = ["Jan", "Feb","Mar", "Apr","May", "Jun","Jul", "Aug","Sep", "Oct","Nov","Dec"];
            
                let ampm = 'AM';
                                    if (hours > 11) {
                                    ampm = 'PM';
                                    }
            
            
            
                
            
            
                if(date < 10){
                   // date =  "0" + date;
                }
            
            
                if(month < 10){
                  //  month =  "0" + month;
                }
            
                if(year < 10){
                    year =  "0" + year;
                }
                
                if (hours < 10) {
                    hours = "0" + hours;
                }
            
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
            
                
            
                let time = months[month]    +  " "+ date + ", " + year + " " + hours + ":" + minutes +" "+ ampm;
                return time;
            }
            
            

            


