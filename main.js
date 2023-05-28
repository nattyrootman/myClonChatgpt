
//#0c0c26
//#18181c
//#00001e


function op(){
  let side=document.getElementById("side");
  let main=document.getElementById('clos');

 let scr=document.getElementById('mai')
 let h=document.getElementById('open');
 let m=document.getElementById('inp');
  if (side.style.width="0px") {
  
  side.style.width="250px";
  main.style.marginLeft='270px';
 // main.style.marginTop='50px';
  main.style.display="block";
  
  document.body.style.position="fixed";
  m.disabled=true;
  scr.style.overflowY='hidden';
 
  }}
  
  
 function clos(){
 
 closed()
}

// function closed(){}
 let scr=document.getElementById('mai');
 
 let side=document.getElementById("side");
 let main=document.getElementById('clos');
 let h=document.getElementById('home');
 let m2=document.getElementById('inp');
 
 function closed(){
  
 if (side.style.width="220px") {
 
 side.style.width="0px";
 main.style.marginLeft='0px';
 main.style.display="";
 
 document.body.style.position="";
 
 m2.disabled=false;
 scr.style.overflowY='auto';
 
 }}
 // end of clode function
 
 
 
let m=document.querySelector('.mainDiv')
let icon=document.querySelector('#img')

 async function sendData(){
  
let stry=document.getElementById('hi');
let p=document.createElement('p');
let c=document.createElement('p')
let stoc=document.createElement('p');
let out =document.createElement('p');
let pr=document.createElement('pre');
let code=document.createElement("code")
let his=document.getElementById('histo')
let inp=document.getElementById('inp');
let lo=document.querySelector('.load')
let one=document.getElementById('one')
let two=document.querySelector('two')
let thre=document.querySelector('three')


const keys='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';

if(inp.value.trim()==''){
alert("le champ ne peut pas être vide")
  
}else{
  
lo.style.visibility='visible'

//lo.scrollIntoView();

 const option={
   method:'POST',
   headers:{
'Authorization':`Bearer ${keys}`,
 'Content-Type':'application/json'
     
   },
   body:JSON.stringify({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content:inp.value}],
   })
 
 }
 

p.textContent=inp.value;
stoc.textContent = inp.value

his.append(p)
stry.append(stoc)
lo.scrollIntoView(false)

inp.value=''
inp.disabled=true
  
await fetch('https://api.openai.com/v1/chat/completions'
,option).then((res)=>{
  return res.json()
  
}).then((data)=>{
  
 icon.style.disabled=true;
lo.style.visibility='hidden'
m.style.display='none'

let te =data.choices[0].message.content;

code.textContent = data.choices[0].message.content

//p.textContent = inp.value;
//stoc.textContent = inp.value

let b = document.createAttribute('class')
//b.value ='language-dart'


//code.setAttributeNode(b);

code.className='language-dart'
stry.append(stoc);
  //code.append(out)
pr.append(code)
his.append(pr)

 Prism.highlightAll()
  
  code.style.whiteSpace='pre-wrap'
  code.style.fontSize='14px'
  

p.scrollIntoView(false)
out.scrollIntoView(false)

inp.disabled=false

}).catch((err)=>{
  
  alert(err)
  
 let e='une erreur s est passée'
  c.textContent=`${e}\n${err}`
  c.style.backgroundColor='#ff6666'
  inp.disabled=false
  
  his.append(c)
  lo.style.visibility='hidden'
  inp.value=''
  
 
  
})
 }
 
 stoc.addEventListener('click',()=>{
  
   his.textContent=''
    his.append(p)
    pr.append(code)
    his.append(pr)
 
 })
 
}
 
 

  
let on=document.getElementById('one')
let two=document.getElementById('two')
let thr=document.getElementById('three')
let inp=document.getElementById('inp');

on.addEventListener('click',()=>{
inp.textContent=on.textContent;

 closed ()

})

two.addEventListener('click',()=>{
  
   inp.textContent=two.textContent
   
})
 
 thr.addEventListener('click',()=>{
   
   inp.textContent=thr.textContent;
   
 })

  

 scr.addEventListener('click',closed)
 
  

    
 function post(){
   sendData()
   
 }
 
function down(){
   
let m=document.querySelector('.mainDiv')
 m.scrollIntoView(false)
   
 }
 
  down()
  
 
 function newchat(){
let his=document.getElementById('histo')
   
   m.style.display='grid'
   his.textContent='';
 
  }
    
 
 function plus (){
   
   newchat()

 }
 
function newch(){
   
   newchat()
 }
  
  
  
  





