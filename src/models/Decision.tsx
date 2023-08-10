export default class Decision
{
    protected direction: string = '';
    protected choice: Array<string> = [];
    protected extraTurn: string = '';

    getDirection()
    {
        return this.direction;
    }

    setDirection(direction: string)
    {
        this.direction = direction;
    }

    getChoice()
    {
        return this.choice;
    }

    setChoice(choice: Array<string>)
    {
        this.choice = choice
    }

    getExtraTurn()
    {
        return this.extraTurn;
    }

    setExtraTurn(extraTurn: string)
    {
        this.extraTurn = extraTurn;
    }
}