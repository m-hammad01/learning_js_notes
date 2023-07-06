const dog = () => {
    const sound = 'woof'
    return {
        talk: () => console.log(sound)
    }
}

const sniffles = dog()

sniffles.talk()
$('button.myButton').click(sniffles.talk)