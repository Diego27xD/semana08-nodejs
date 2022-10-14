import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async(req, res)=> {
    try {
        const users = await prisma.user.findMany({
            include:{
                playlist:true
            }
        })
        res.json({
            ok: true,
            data: users
        })
    } catch (error) {
        res.json({
            ok: false,
            error:error.message
        })
    }
    
}

//Crear
//Registro de usuarios
export const create = async(req, res)=>{
    try {
        const {body} = req
        const result = await prisma.user.create({
            data: {
                ...body
            }
        })
        res.json(result)
    } catch (error) {
        res.json({
            ok: false,
            error:error.message
        })
    }
    
}
//Login de usuarios
export const login =  async(req, res)=>{
    try {
        const { email, password } = req.body
    const result = await prisma.user.findMany({
        where: {
            AND: [{email: email},{password: password}]
        },
    })
    res.json({
        ok: true,
        data: result
    })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message
        })
    }
}


//Mostrar
export const findOneUser =  async(req, res)=>{
    try {
        const { id } = req.params
        const user = await prisma.user.findMany({
            where:{
                id : Number(id)
            } 
        })
        res.json({
            ok: true,
            data:user
        })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message
        })
    }
    
}

//Actualizar
export const update = async(req, res)=>{
    try {
        const {id} = req.params
        const { body } = req
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data:{
                ...body
            }
        })
        res.json({
            ok: true,
            data:user
        })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message
        })
    }
    
}

//Eliminar

export const destroy = async(req, res)=>{
    try {
        const {id} = req.params
        await prisma.user.delete({
            where: {id: Number(id)}
        })
        res.json({
            ok: true,
            message: "Eliminado satisfactoriamente"
        })
    } catch (error) {
        res.json({
            ok: false,
            data: error.message
        })
    }
    
}

