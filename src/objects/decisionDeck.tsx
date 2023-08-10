import Decision from './../models/Decision';

import data from './../data.json';

export default class decisionDeck
{
    decisions: Array<Decision> = [];

    constructor()
    {
        this.loadDecisions();
    }

    loadDecisions(): void
    {
        data.decisions.map((decisionData) => {
            let decision = new Decision();
            decision.setChoice(decisionData.choice);
            decision.setDirection(decisionData.direction);
            decisionData.extraTurn ? decision.setExtraTurn(decisionData.extraTurn) : decision.setExtraTurn('None');
            this.decisions.push(decision);
        });
    }
}