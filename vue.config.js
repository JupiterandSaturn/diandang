module.exports={
    devServer:{
        port:8080,
        host:"127.0.0.1",
        open:true,
        proxy:{
            "/diandang":{
                target:"http://39.97.42.25:8080",
                changeOrigin:true,
                pathRewrite:{
                    "^/diandang":"/"
                }
            }
        }

    }
}

