class Token {
    isValid(token){
        const payload = this.payload(token);
        if(payload){
           return payload.aud == "1" ? true : false
        }

        return false
    }
    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }

}

export default Token = new Token()