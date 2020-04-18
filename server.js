const express=require('express')
const app=express()


app.use(time=(req,res,next)=>{
  let requestAt=new Date()
  let time=requestAt.getHours()
  if((time<8)||(time>17)){

 return res.send('Our office is closed now come back later')
  }
  else {return res.send('our office is open how can we serve you? ')}
  next()
})
app.get('accueil/contact',(req,res)=>{
res.sendfile(__dirname+'/contact.html')

})
app.get('accueil/home',(req,res)=>{
    res.sendfile(__dirname+'/home.html')
    
    })
    app.get('accueil/ourservices',(req,res)=>{
        res.sendfile(__dirname+'/ourservices.html')
        
        })



app.listen(3000,(err)=>{
if(err)console.log("server is not runing")
else console.log("server is runing on port 3000")
})