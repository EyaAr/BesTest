/*

const lesson= (req, res, next) => {
    let lesson = new lesson ({
        title: req.body.title,
        subject:req.body.subject,
        level:req.body.level, 
        price:req.body.price, 
        description:req.body.description,
        createdAt:Date.now()

    }) 
    if(req.files){
    req.files.forEach(function(files, index, arr){
        path =path + files.path + ','
    })

    path = path.substring(0, path.lastIndexOf(","))
    lesson.type = path
}
lesson.save().then(response => {
    res.json({
        message: 'success'
    })
})
.catch(error =>{
    res.json({
        message: 'echec'
    })
})

}
*/