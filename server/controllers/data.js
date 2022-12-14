import GroupData from '../models/groupData.js'

export const getData = async (req, res)=> {
    try {
        const data = await GroupData.find();
        res.status(200).json(data);
        console.log(data);
    } catch (err) {
        console.log(err.message);
        res.status(404).json({message: err.message});
    }
}

export const getGroup = async (req, res)=> {
    try {
        const group = req.params.group;
        console.log(group);
        const data = await GroupData.findOne({Name: group});
        res.status(200).json(data);
        console.log(data);
    } catch (err) {
        console.log(err.message);
        res.status(404).json({message: err.message});
    }
}

export const getComments = async (req, res)=> {
    try {
        const group = req.params.group;
        const data = await GroupData.findOne({Name: group}, ['Num Comments']);
        res.status(200).json(data['Num Comments']);
        console.log(data);
    } catch (err) {
        console.log(err.message);
        res.status(404).json({message: err.message});
    }
}

export const getScores = async (req, res)=> {
    try {
        const group = req.params.group;
        const data = await GroupData.findOne({Name: group}, ['Scores']);
        res.status(200).json(data['Scores']);
        console.log(data);
    } catch (err) {
        console.log(err.message);
        res.status(404).json({message: err.message});
    }
}