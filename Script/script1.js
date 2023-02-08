window.onload = function(){

    //for accessing form elements
    var formHandler = document.forms.form;
    //selects category from radio butons
    var cotainercat =document.querySelector(".category");
    //select container to store qoute for ctaegory love
    var containerLove = document.querySelector(".love");
    //select container to store qoute for ctaegory Morning
    var containerMorning = document.querySelector(".Morning");
    //select container to store qoute for ctaegory Aniversary
    var containerAniversary = document.querySelector(".Aniversary");
    //select container to store qoute for ctaegory Holidays
    var containerHolidays = document.querySelector(".Holidays");
    //select container to store qoute for ctaegory other
    var containerOther = document.querySelector(".other");
    //selects button from category love 
    var lovebtn = document.getElementById("l-ove");
    //selects button from category Morning 
    var morningbtn = document.getElementById("M-orning");
    //selects button from category Aniversary 
    var Aniversarybtn = document.getElementById("A-niversary");
    //selects button from category Holidays 
    var holidaybtn = document.getElementById("H-olidays");
    //selects button from category other 
    var otherbtn = document.getElementById("o-ther");
    //this seclects inputs from user
    var userinput = document.getElementById("qoutessel");

   // localStorage.removeItem("qoutes");
    //localStorage.removeItem("cat");

    //getting items from localstorage and storing them in variable storedqoutes
    var storedqoutes = JSON.parse(localStorage.getItem("qoutes"));
    //getting items from localstorage and storing them in variable storedcats
    var storedcats = JSON.parse(localStorage.getItem("cat"));

    /*this function initially disables the morning,Aniversary,Holidays,other
    qoutes so thant love qoutes only be visible becuse it is first category 
    and user must be able to see one.*/
    function disable(){
            $(".love").css({'display':'block'});
            $(".Morning").css({'display':'none'});
            $(".Aniversary").css({'display':'none'});
            $(".Holidays").css({'display':'none'});
            $(".other").css({'display':'none'});
    }
    disable();
    /*this function initially disables the morning,Aniversary,Holidays,other
    buttons so that love buttons only be visible becuse it is first button
    displaying categories and user must be able to see one.*/
    function btndisable(){
        $(lovebtn).css({'background-color':'#f7aef8'});
        $(morningbtn).css({'background-color':'#b388eb'});
        $(Aniversarybtn).css({'background-color':'#b388eb'});
        $(holidaybtn).css({'background-color':'#b388eb'});
        $(otherbtn).css({'background-color':'#b388eb'});
    }
    btndisable();

        /*this is fblocks checks for avalable storedqoutes and 
        and stored categoryies then sends the data to addqoutes items which 
        displayes the data into categories container*/
        if(storedqoutes && storedcats){
            for(var i=0;i<=storedqoutes.length;i++){
                addQoutes(storedqoutes[i],storedcats[i]);
            }
            
        }

        /*this is button on click events which just unables and disables the 
        i know this is too much repetative code i tryied using function but 
        i couldn't get the logic right*/

        lovebtn.addEventListener("click",()=>{
            $(".love").css({'display':'block'});
            $(".Morning").css({'display':'none'});
            $(".Aniversary").css({'display':'none'});
            $(".Holidays").css({'display':'none'});
            $(".other").css({'display':'none'});

            $(lovebtn).css({'background-color':'#f7aef8'});
            $(morningbtn).css({'background-color':'#b388eb'});
            $(Aniversarybtn).css({'background-color':'#b388eb'});
            $(holidaybtn).css({'background-color':'#b388eb'});
            $(otherbtn).css({'background-color':'#b388eb'});
        });
        //this function highlights morning qoutes and disapear other categories.
       morningbtn.addEventListener("click",()=>{
             $(".Morning").css({'display':'block'});
            $(".love").css({'display':'none'});
            $(".Aniversary").css({'display':'none'});
            $(".Holidays").css({'display':'none'});
            $(".other").css({'display':'none'});


            $(lovebtn).css({'background-color':'#b388eb'});
            $(morningbtn).css({'background-color':'#f7aef8'});
            $(Aniversarybtn).css({'background-color':'#b388eb'});
            $(holidaybtn).css({'background-color':'#b388eb'});
            $(otherbtn).css({'background-color':'#b388eb'});
            
       });

        //this function highlights Holidays qoutes and disapear other categories.
       holidaybtn.addEventListener("click",()=>{
        $(".Holidays").css({'display':'block'});
            $(".love").css({'display':'none'});
            $(".Aniversary").css({'display':'none'});
            $(".Morning").css({'display':'none'});
            $(".other").css({'display':'none'});


            $(lovebtn).css({'background-color':'#b388eb'});
            $(morningbtn).css({'background-color':'#b388eb'});
            $(Aniversarybtn).css({'background-color':'#b388eb'});
            $(holidaybtn).css({'background-color':'#f7aef8'});
            $(otherbtn).css({'background-color':'#b388eb'});

    });

     //this function highlights Aniversary qoutes and disapear other categories.
    Aniversarybtn.addEventListener("click",()=>{
        $(".Aniversary").css({'display':'block'});
            $(".love").css({'display':'none'});
            $(".Morning").css({'display':'none'});
            $(".Holidays").css({'display':'none'});
            $(".other").css({'display':'none'});

            $(lovebtn).css({'background-color':'#b388eb'});
            $(morningbtn).css({'background-color':'#b388eb'});
            $(Aniversarybtn).css({'background-color':'#f7aef8'});
            $(holidaybtn).css({'background-color':'#b388eb'});
            $(otherbtn).css({'background-color':'#b388eb'});

    });

     //this function highlights other qoutes and disapear other categories.
    otherbtn.addEventListener("click",()=>{
        $(".other").css({'display':'block'});
        $(".love").css({'display':'none'});
        $(".Aniversary").css({'display':'none'});
        $(".Holidays").css({'display':'none'});
        $(".Morning").css({'display':'none'});

        $(lovebtn).css({'background-color':'#b388eb'});
        $(morningbtn).css({'background-color':'#b388eb'});
        $(Aniversarybtn).css({'background-color':'#b388eb'});
        $(holidaybtn).css({'background-color':'#b388eb'});
        $(otherbtn).css({'background-color':'#f7aef8'});
    });

    //this statements calls submit function when submit button is cliked
    formHandler.onsubmit = submit;

    //when submit button is clicked this function call addQoutes function
    function submit(){

        addQoutes();
        return false;
    }

    //this the main function and logic of the website.
    /* this takes two parameters qoutes and category which comes from local 
    storage not the ones entered by user*/
    function addQoutes(qoute1,cat1){
        //this gets the category from form from html
        var category = formHandler.qoutecat.value;
        //this takes the userinput from html page
        var qoute= userinput.value;

        /*this if block checks the qoutes and category coming from local storage
        //is null or not if it is not null then i am assigning them to the qoute 
        //and category function.*/
        if(qoute1 && cat1){
            qoute = qoute1.Text;
            console.log(qoute);
            category = cat1.categorys;
            console.log(category);
        }
        /*this if blocks check the qoutes and category are not blank 
         */
        if (qoute && category) {
            console.log("this is happning");
            const qouteelemetn = document.createElement("li");
            var categoryp = document.createElement("span");
            const btncopy = document.createElement("button");
            btncopy.innerText = "copy";
            const btndelete = document.createElement("button");
            btndelete.innerText = "delete";
            qouteelemetn.innerText = qoute;
            categoryp.innerText = category;
            
            btndelete.addEventListener("click", () =>{
                qouteelemetn.remove();
                categoryp.remove();
                btncopy.remove();
                btndelete.remove();
                storage();
            });
            //button copy copies the qoute. the code was from w3school.
            btncopy.addEventListener("click",()=>{
                userinput.value =  qouteelemetn.innerText;
                userinput.setSelectionRange(0, 99999);
                navigator.clipboard.writeText( userinput.value);
                alert("Copied the text: " +  userinput.value);
                userinput.value = '';

            });

            //this statement checks the cate gory is love or not
            if(category === "love"){
                //this adds the elements entered by user and retrives from 
                //local storage
                containerLove.appendChild(qouteelemetn);
                cotainercat.appendChild(categoryp);
                containerLove.appendChild(btncopy);
                containerLove.appendChild(btndelete);
                storage();
                //this emties the text area.
                userinput.value = '';
            }
            /*this is repetative and i colud have done it other way but they
            //wys wre not working.
            //this is doing same thing as love but it checks the category equals 
            //morning or not*/
            else if(category === "Morning"){
                containerMorning.appendChild(qouteelemetn);
                cotainercat.appendChild(categoryp);
                containerMorning.appendChild(btncopy);
                containerMorning.appendChild(btndelete);
                storage();
                userinput.value = '';

            }
            /*this is repetative and i colud have done it other way but they
            //wys wre not working.
            //this is doing same thing as love but it checks the category equals 
            //Aniversary or not*/
            else if(category === "Aniversary"){
                containerAniversary.appendChild(qouteelemetn);
                cotainercat.appendChild(categoryp);
                containerAniversary.appendChild(btncopy);
                containerAniversary.appendChild(btndelete);
                storage();
                userinput.value = '';
            }
             /*this is repetative and i colud have done it other way but they
            //wys wre not working.
            //this is doing same thing as love but it checks the category equals 
            //Holidays or not*/
            else if(category === "Holidays"){
                containerHolidays.appendChild(qouteelemetn);
                cotainercat.appendChild(categoryp);
                containerHolidays.appendChild(btncopy);
                containerHolidays.appendChild(btndelete);
                storage();
                userinput.value = '';
            }
            /*this is repetative and i colud have done it other way but they
            //wys wre not working.
            //this is doing same thing as love but it checks the category equals 
            //other or not*/
            else if(category === "other"){
                containerOther.appendChild(qouteelemetn);
                cotainercat.appendChild(categoryp);
                containerOther.appendChild(btncopy);
                containerOther.appendChild(btndelete);
                storage();
                userinput.value = '';
            }
            else{
                return false;
            }
        }
        //this is funcction storage which stores the data on the local storage.
    function storage(){
        //this statements gets all the li's in the html file becuse the user
        //entered data is in the li for temporary.
        const qouteelemetn = document.querySelectorAll("li");
        //this selects all the spans becuse the spans have the value of category
        //getting it directly from the form gives too many  null values.
        const categoryspan = document.querySelectorAll("span");
        //this array cat stores the categories
        const cat = [];
        //this array stores the qoutes.
        const qoutes = [];
        //this if block checks theqoute element is null or not if it is null 
        //then data will not be pused into arrays.
        if(qouteelemetn.innerText !== null){
            categoryspan.forEach((categoryspan)=>{
                cat.push({
                    categorys: categoryspan.innerText
                });
            });
            qouteelemetn.forEach((qouteelemetn) =>{
                qoutes.push({
                    Text: qouteelemetn.innerText
                });
            });
            //this saves the stores the cat and qoutes array in the local storage
            localStorage.setItem("cat",JSON.stringify(cat));
            localStorage.setItem("qoutes",JSON.stringify(qoutes));
        }

    }
}
}