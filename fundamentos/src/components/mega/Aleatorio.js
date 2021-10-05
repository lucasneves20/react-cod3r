function Generation(base) {
    let mega = []

    function Creator() {
        for (let i = 0; i < base; i++) {

            let result = Math.floor(Math.random() * (1 - 60) + 60)
            if (mega[i] <= mega[i - 1]) {
                i--
            } else {
                mega.push(result)
            }

        }

        mega.sort((a, b) => a - b)
    }
    Creator()
    return mega;
}

export default Generation