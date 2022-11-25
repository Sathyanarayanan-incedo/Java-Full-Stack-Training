var resources = [
    {id:1, name:"Ram", role:"Engineer"},
    {id:2, name:"Sam", role:"Engineer"},
    {id:3, name:"Sathya", role:"Lead"},
    {id:4, name:"Alekhya", role:"Lead"}
];

module.exports.getAllResources = async (req,res,next) => {
    res.send(resources);
}

module.exports.getResourceById = async (req,res,next) => {
    var id = parseInt(req.params.id);
    res.send(resources[resources.findIndex(element => element.id === id)]);
}

module.exports.getResourcesByRole = async (req,res,next) => {
    var role = req.params.role;
    let temp = []
    for (let i=0;i<resources.length;i++)
        if(resources[i].role == role)
            temp.push(resources[i]);
    res.send(temp);
}

module.exports.addResource = async (req,res,next) => {
    let data = req.body;
    resources.push(data);
    res.send(resources);
}

module.exports.updateResource = async (req,res,next) => {
    let id = parseInt(req.params.id);
    resources.splice(resources.findIndex(element => element.id === id),1,req.body);
    res.send(resources);
}