import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

//?LISTAR TODAS LAS CANCIONES
export const findAll = async (req, res) => {
    try {
        const list = await prisma.playlist.findMany();

        res.status(200).json({
            ok:true,
            data: list,
        })
    } catch (error) {
        res.json({
            ok:false,
            data: error.message,
        })
    }
}

//?CREATE
export const create  = async (req, res) => {
    try {
      const { body } = req;
      
      const song = await prisma.playlist.create({
        data:{
            ...body,
        }
      });
      
      res.json({
        ok:true,
        message: "Registro satisfactorio!!!",
        data: song
      })
    } catch (error) {
        res.json({
            ok:false,
            data:error.message
        })
    }
}

//?READ PLAYLIST SONG BY ID
export const findOneSong = async(req, res) => {
    try {
        const { id } = req.params
        const list = await prisma.playlist.findUnique({
            where:{
                id: Number(id)
            },
        })
        const { idSong } = list
        const song = await prisma.song.findMany({
            where:{
                id: Number(idSong)
            }
        })
        res.json({
            ok:true,
            data: {
                list,
                song
            }
            
        })
    } catch (error) {
        res.json({
            ok:false,
            error:error.message
        })
    }
}

//?UPDATE
export const update = async (req,res) => {
    try{
        const { id } = req.params
        const { body } = req
        const dato = await prisma.playlist.update({
            where:{
                id:Number(id)
            },
            data:{
                ...body
            }
        });
        res.json({
            ok:true,
            data: dato
        })
    }catch(error){
        res.json({
            ok:false,
            error: error.message
        })
    }
}

//?DELETE
export const destroy = async (req,res) => {
    try{
        const {id} = req.params
        await prisma.playlist.delete({
            where:{id:Number(id)}
        })
        
        res.json({
            ok:true,
            message: "Eliminado correctamente"
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message,
        })
    }
}
    
