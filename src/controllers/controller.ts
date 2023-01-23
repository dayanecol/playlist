import { Request, Response } from "express";
import { Music, Favorite } from "../protocols/Music.js"
import { musicSchema, isFavoriteSchema } from "../schemas/schema.js";
import { insertUnique, selectAll, selectAlbum, removeUnique, updateUnique} from "../repositories/repository.js";

async function getPlaylist (req: Request,res: Response){

    try {
        const playlist = (await selectAll()).rows;
        res.status(200).send(playlist)
        return;
    } catch (error) {
        res.status(500).send({ message: error });
        return;
    }
    
}

async function postNewMusic (req: Request,res: Response):Promise<void>{

    const music = req.body as Music;
    
    const musicValidation = musicSchema.validate(music,{ abortEarly: false });

    if (musicValidation.error){
        const errors = musicValidation.error.details.map((error)=>error.message);
        res.status(422).send({ message:errors });
        return;
    }
    try {
        await insertUnique(music);
        
        res.sendStatus(201);
        return;
    } catch (error) {
        res.status(500).send({ message: error });
        return;
    }
    
}

async function editMusicInfo (req: Request,res: Response){

    const { id } = req.params;
    const isFavorite =  req.body as Favorite;
    let statusMessage: string;

    const validation = isFavoriteSchema.validate( isFavorite,{ abortEarly: false });
    if (validation.error){
        const errors = validation.error.details.map((error)=>error.message);
        res.status(422).send({ message:errors });
        return;
    }
    
    if (isFavorite.isFavorite){statusMessage="This is a favorited music now"}
    else {statusMessage= "This is not a favorited music now"}

    try {
        await updateUnique(isFavorite,Number(id));
        
        res.status(200).send({ message: statusMessage });
        return;
    } catch (error) {
        res.status(500).send({ message: error });
        return;
    }
    
}

async function deleteMusic (req: Request,res: Response){

    const { id } = req.params;

    try {
        await removeUnique(Number(id));
        res.status(200).send({ message: "music deleted successfully"})
    } catch (error) {
        res.status(500).send({ message: error });
        return;
    }
}

async function getAlbum (req: Request,res: Response){
    const { album } = req.params;

    try {
        const albumResult = (await selectAlbum(album)).rows;
        res.status(200).send(albumResult)
        return;
    } catch (error) {
        res.status(500).send({ message: error });
        return;
    }
    
}

export {
    postNewMusic,
    getPlaylist,
    deleteMusic,
    editMusicInfo,
    getAlbum
}