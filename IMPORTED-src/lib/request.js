const URL = "https://rickandmortyapi.com/api/character/"

class Http{
    static instance = new Http()

    get_characters = async() =>{
        try{
            const request = await fetch (`${URL}`)
            const response = await request.json()
            return response.results
    
        }catch(err){
            throw new Error(err);
        }
    }
    get_character = async(id) => {
        try{
            const request = await fetch (`${URL}${id}`)
            const response = await request.json()
            return response
    
        }catch(err){
            throw new Error(err);
        }
    }
}
export default Http;