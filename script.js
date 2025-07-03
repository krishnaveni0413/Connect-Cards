
let s11=document.querySelector("#s1")
let af1=document.querySelector("#af")
let remove1=document.querySelector("#remove")

af1.addEventListener('click',function(){
    s11.innerHTML="Friends"
    s11.style.color="green"

})
remove1.addEventListener('click',function(){
    s11.innerHTML="Strangers"
    s11.style.color="red"

})


let btn1=document.querySelector("#kk")
let st=document.querySelector("#str")
let check=0

btn1.addEventListener("click", function(){

    if(check==0){
        st.innerHTML="friends"
        st.style.color="green"
        btn1.innerHTML="Remove Friends"
        check=1
    }else{
        st.innerHTML="Strangers"
        st.style.color="red"
        btn1.innerHTML="Add Friends"
        check=0
    }
   
    
})