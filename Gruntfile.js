module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src:'./baidu.html',  //原文件
                dest:"dist/baidu.html" //压缩后文件目录
            }
        },
        cssmin:{
            'dist/baidu.min.css':'baidu.css'
        },
        uglify:{
            'dist/baidu.min.js':'baidu.js'
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //定义构建的任务清单
    grunt.registerTask('default',['htmlmin']);
    grunt.registerTask('default',['cssmin']);
    grunt.registerTask('default',['uglify']);
    
}