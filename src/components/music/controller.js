import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

//?LISTAR TODAS LAS CANCIONES
export const findAll = async (req, res) => {
    try {
        const songs = await prisma.song.findMany({
            include:{
                Playlist: true,
            }
        });

        res.status(200).json({
            ok:true,
            data: songs
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
      
      const song = await prisma.song.create({
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

//?READ ONE SONG BY ID
export const findOneSong = async(req, res) => {
    try {
        const { id } = req.params
        const song = await prisma.song.findUnique({
            where:{
                id: Number(id)
            },

            include:{
                Playlist: true,
            }
        })

        res.json({
            ok:true,
            data: song
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
        const dato = await prisma.song.update({
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
        await prisma.song.delete({
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
    
