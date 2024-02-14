
import {reaction_service} from '../service/index.js'
export const saveReactions = async (req, res) => {
    try{
        const response = await reaction_service.saveReaction(req)
        
        return res.status(201).json({response})
    }catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}

export const getReactions = async (req, res) => {
    try{
        const response = await reaction_service.getReactions()
        return res.status(200).json(response)
    }catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}

export const updateReaction = async (req, res) => {
    try{
        const response = await reaction_service.updateReaction(req)
        return res.status(202).json(response)
    }
    catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}

export const removeReaction = async (req, res) => {
    try{
        const response = await reaction_service.removeReaction(req)
        return res.status(202).json(response)
    }catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}
export default{
    removeReaction,
    updateReaction,
    getReactions,
    saveReactions,
}