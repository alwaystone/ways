//单独抽取出来用于截取当前项目路径的根节点，每个页面都需要引入
function getRootPath(){  
    var projectName=window.document.location.pathname.substring(0,pathName.substr(1).indexOf('/')+1);  
    return(projectName);
} 