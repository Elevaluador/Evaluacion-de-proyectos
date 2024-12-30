const express = require('express');
//const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
// Motor de plantilla
app.set("view engine", "ejs");
app.set("views",__dirname + "/rutas")


app.use(express.static(__dirname + "/public"))


app.get("/", (req,res) => {
    res.render("index", {titulo:"Asesoría y Apoyo universitaria en Evaluación de Proyectos",metadescription:"¿Buscas apoyo Universitario en la evaluación de proyectos? Te ofrecemos asesoría Personalizada y clases particulares de finanzas para estudiantes.", robots:"index,follow",paginacss:"./css/paginas/home.css", paginajs:"./js/main.js"})
})

app.get("/calculadora-mercado-objetivo",(req,res)=>{
    res.render("calculadora",{ titulo:"Así Define tu Mercado Objetivo en Perú:Calculadora Gratis",
        metadescription:"¿Quieres definir tu mercado objetivo? Usa mi calculadora gratuita para identificar a tu público ideal en minutos y conocer el tamaño de tu mercado", robots:"index,follow", paginacss:"./css/paginas/calculadora.css", paginajs:"./js/paginas/calculadora.js"})
})

app.get("/politica-cookies", (req,res)=> {
    res.render("politica-cookies",{titulo: "",metadescription:"",robots:"noindex,nofollow",paginacss:"./css/paginas/cookies.css",paginajs:""

    })
})

app.get("/politica-privacidad",(req,res)=>{
    res.render("politica-privacidad",{titulo:"",metadescription:"",robots:"noindex,nofollow",paginacss:"./css/paginas/privacidad.css",paginajs:""

    })
})

app.use((req,res,next )=>
    {
        res.status(404).render("404", {titulo: "Uy estudiante, has caido en la pagina 404", metadescription:"revisa uno de los enlaces que te muestro a continuacion", robots:"noindex,nofollow", paginacss:"./css/paginas/404.css"})
    })

    // iniciar el servidor 
    app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
