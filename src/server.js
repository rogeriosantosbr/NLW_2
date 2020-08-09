const proffys = [ { name: "Diego Fernandes" ,
     avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
     whatsapp: "5445443343" ,
     bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
     subject: "Química",
     cost: "20" ,
     weekday: [0],
     time_from: [720],
     time_to: [1220]
    },

    { name: "Teste Fernandes" ,
     avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
     whatsapp: "5445443343" ,
     bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
     subject: "Química",
     cost: "20" ,
     weekday: [1],
     time_from: [720],
     time_to: [1220]
    },
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const express = require ('express')
const server = express()
const nunjucks = require ('nunjucks')



function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 
    return subjects [position]
}



function pageLanding(req,res){
    return res.render(__dirname + "/views/index.html")
}

function study(req,res){
    const filters = req.query
    return res.render(__dirname + "/views/study.html", { proffys, filters , subjects} )
}

function giveClasses(req,res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    

    if (isNotEmpty){
        console.log(data.name)
        console.log(data.subject)
        console.log(data)
        console.log(getSubject(data.subject))

        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")

    }
    
    return res.render(__dirname + "/views/give-classes.html", {subjects})
}


nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})



server.use(express.static("public"))
.get("/",pageLanding )
.get("/study", study)
.get("/give-classes", giveClasses)
.listen(5000)


//npm run dev