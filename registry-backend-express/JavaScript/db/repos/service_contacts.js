
let cs= {};

class ClientGeneralRepository {
  constructor(db,pgp){
    this.db = db;
    this.pgp = pgp;
    // set-up all ColumnSet objects, if needed:
     cs = new pgp.helpers.ColumnSet(['owner_id','value','type']);
  }

  async add(name,data,id){
    let values = []
    let date = new Date(Date.now());
    // if not Empty array

    if(data.length>0){
      data.forEach((item)=>{
        values.push({owner_id:id,value:item.email,type:item.type})
      });
      const query = this.pgp.helpers.insert(values,cs,name);
      this.db.none(query)
      .then(data => {
          return 'success'
      })
      .catch(error => {
          return 'error'
      });
    }
    else{
      return null
    }
  }
  async findDataById(name,id){

    const table = new this.pgp.helpers.TableName({table:name});
    return this.db.any('SELECT owner_id,value,type FROM $1 WHERE owner_id=$2',[table,+id]);
  }


  async delete_one_or_many(name,data,owner_id){
    const table = new this.pgp.helpers.TableName({table:name});
    let values = '';
    if (data.length>0){
     data.forEach((item)=>{

       values = values + "('" + item.email + "','" + item.type + "'),"
     })
     values = values.slice(0,-1);

     return this.db.none('DELETE FROM $3 WHERE owner_id=$1 AND (value,type) IN ($2^)',[+owner_id,values,table]);
    }
    else {
      return null
    }
  }


  async delete(name,owner_id){
      const table = new this.pgp.helpers.TableName({table:name});
      return this.db.none('DELETE FROM $1 WHERE owner_id=$2',[table,+owner_id]);
  }





 // Not implemented yet






  // edit not yet implemented





}

module.exports = ClientGeneralRepository;