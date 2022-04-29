export default class Functions {

    static ErrorsList(chave, resp){
        let space = []
        if(resp.status != 200 & resp.status != 201 & resp.status != 204){
            try {
                space.push(this.terceiro(chave, resp))
            }catch(e){
                try{
                    space.push(this.primeiro(chave, resp))
                }catch(e){
                    space.push(this.segundo(chave, resp))
                }
            }
        }else if(resp.status == 200 | resp.status == 201 | resp.status == 204){
            space.push({
                status: resp.status,
                key:   chave,
                value: "OK"
            })  
        }
        return space[0]
    }

    static primeiro(chave, resp) {
        let space = []
        space.push({
            status: resp.status,
            key:   chave,
            value: resp.body.error.type
        })
        if(space[0] != undefined){
            return space[0]
        }
    }

    static segundo(chave, resp) {
        let space = []
        space.push({
            status: resp.status,
            key:   chave,
            value: resp.body
        })
        if(space[0] != undefined){
            return space[0]
        }
    }

    static terceiro(chave, resp) {
        let space = []
        space.push({
            status: resp.status,
            key:   chave,
            value: resp.body.error.message
        })
        if(space[0] != undefined){
            return space[0]
        }
    }
}
