const JSONServer= require ('json-server')   //json server ne import cheythu
const MPServer=JSONServer.create()  //media player inu vendi oru server create cheythu athil create nn ulla method call cheythu
const router=JSONServer.router('db.json') // jsonserver il db file ne connect cheythu
const middleware=JSONServer.defaults()  // frontend il js format il ayakkina data ivde json format il store aavanam athin oru middleware venam


const PORT= 3000 || process.env.PORT  // run cheyyan oru port venam. by default 3000 allengi dynamically ethelum port il pova
MPServer.use(middleware)  //router neyum middleware neyum use cheyyanam. middleware kazhinj maathram router
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`Media-player running at port ${PORT} & waiting for the client request....`);
    
}) //media player connect aayi kainjal oru message inu vendi