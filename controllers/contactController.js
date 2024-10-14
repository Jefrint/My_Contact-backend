 const {pool} = require('../database')
 
 
 // @desc Get all contacts
 //@route Get /get/contacts
const getContact =async (req,res)=>{
    const [contacts]=await pool.query(`select * from contacts`)
   
    res.send(contacts)
    console.log(contacts)
}

 // @desc Get all contacts
 //@route Get /get/contacts
 const getoneContact =async (req,res)=>{

    const [contacts]=await pool.query(`select * from contacts where id=?`,[req.params.id])
   
    res.send(contacts)
    console.log(contacts)
}



 // @desc create contacts
 //@route Post /get/contacts
 const createContact =async (req,res)=>{
    console.log(req.body)
    const {name,id,number}=req.body;
    if(!name || !id || !number ){
        res.status(400);
        throw new Error("all field Mandatory")
    }
    try{    await pool.query(`insert into contacts (name,id,number) values (?,?,?) `,[name,id,number])
        res.send('contact created')
    }
    catch{
        res.status(500).send(`Contact not created try again`);    }
    
}

 // @desc update contacts
 //@route Put /get/contacts
 const updateContact =async (req,res)=>{
    const {name,number}=req.body;
    id=req.params.id
    if(!name || !id || !number ){
        res.status(400);
        throw new Error("all field Mandatory")
    }
    try{
        await pool.query(`UPDATE contacts
SET  number = ?, 
    name = ?
WHERE id = ?;
`,[number,name,id])
res.send(`Contact updated for id-${id} to Name-${name} 
    Number- ${number} `)
    }
    catch{
        res.status(500).send(`Contact not created try again`);    
    }

}

 // @desc delete contacts
 //@route delete /get/contacts
 const deleteContact =(req,res)=>{
    res.json({message:`delete Contacts ${req.params.id}`});
 }




module.exports={getContact ,getoneContact,createContact,updateContact,deleteContact}