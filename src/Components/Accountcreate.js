<html>

    <head>
         <h2> Create an account</h2>
         <style>

             .btn1
             {
                 background-color:green;
                 color:white;
                 height:40px;
                 width:100px;
                 margin: 20px;
                 font-size: 17px;


             }
             .btn2
             {
                 background-color: red;
                 color:white;
                 height:40px;
                 width:100px;
                 font-size: 17px;
             }
             container
             {

                width:100%;
                height:100vh;
                background:white;
                display:flex;
                align-items:center;

             }
             form
             {
                 background:rgb(169, 147, 171);
                 display:flex;
                 flex-direction: column;
                 padding: 7vw 37vw;
                 width:90%;
                 max-width: 600px;
                 border-radius:10px;
             }

             h2
             {
                 color:rgb(213, 63, 12);
                 font-size:bold;
                 font-size:30px;
                
             }

         </style>
        
    </head>

     <body>
         
  <div class="container">
    <form id="form">
            <input type="text" id=username placeholder=" Frist Name" style="height: 30px; width: 400px;" required/>
            <br/><br/>
            <input type="text"  id=lastname placeholder=" Last Name"  style="height: 30px; width: 400px;" required />
            <br/><br/>
            <input type="number" id=mobilenumber placeholder=" Mobile number"  style="height: 30px; width: 400px;" required/>
            <br/><br/>
            <input type="text" id=email placeholder=" Enter your Email"  style="height: 30px; width: 400px;" required/><br/>
            <br/>
            <input type="password"  id= password placeholder=" Enter your Password"  style="height: 30px; width: 400px;" required/><br/>
            <br/><br/>
        <span>
            <button class="btn1" type="submit" value="Submit">Submit</button>
            <button class="btn2" type="Clear" value="Clear">Clear</button>
        </span>
    </form>
</div>
    </body>

    <script>

             var form = document.getElementById('form')

             form.addEventListener('submit',function(event)

             {

                 event.preventDefault() //prevents the form fromautosubmitting

                 var username = document.getElementById('username').value

                 console.log(username)

                 var lastname = document.getElementById('lastname').value

                 console.log(lastname)

                 var mobilenumber = document.getElementById('mobilenumber').value

                 console.log(mobilenumber)

                 var email = document.getElementById('email').value

                 console.log(email)

                 var password = document.getElementById('password').value

                 console.log(password) 

             })
                          let btnClear=document.querySelector('button');
                          let inputs=document.querySelectorAll('input');

                          btnClear.addEventListener('click',() => {

                              inputs.forEach(input => input.value = '');

                          });
            
             
             
             
    </script>


</html>