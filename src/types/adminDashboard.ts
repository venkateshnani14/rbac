export interface tableDataType  {
     user:string,
     email:string,
     role:string,
     permissions?:{
          read:boolean,
          write:boolean,
          delete:boolean
     }
}