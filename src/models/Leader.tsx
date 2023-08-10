export default class Leader
{
    protected name: string = '';
    protected image: string = '';
    protected extraTurn: string = '';
    protected startBias: string = '';
    protected preferedChoice: string = '';

    constructor(name: string = 'David the great')
    {
        this.setName(name);
    }

    getName()
    {
        return this.name;
    }

    setName(name: string)
    {
        this.name = name;
    }

    getImage()
    {
        return this.image;
    }

    setImage(image: string)
    {
        this.image = image;
    }

    getExtraTurn()
    {
        return this.extraTurn;
    }

    setExtraTurn(extraTurn: string)
    {
        this.extraTurn = extraTurn;
    }

    getStartBias()
    {
        return this.startBias;
    }

    setStartBias(startBias: string)
    {
        this.startBias = startBias;
    }

    getPreferedChoice()
    {
        return this.preferedChoice;
    }

    setPreferedChoice(preferedChoice: string)
    {
        this.preferedChoice = preferedChoice;
    }
}