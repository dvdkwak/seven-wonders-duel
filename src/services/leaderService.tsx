import Leader from './../models/Leader';

import data from './../data.json';

export default abstract class leaderService
{
    public static getRandomLeader(): Leader
    {
        let leader = new Leader();
        let leaders = data.leaders;
        let n = Math.floor(Math.random() * leaders.length);
        let randomLeaderData = leaders[n];
        leader.setName(randomLeaderData.name);
        leader.setImage(randomLeaderData.image);
        leader.setPreferedChoice(randomLeaderData.prereferedChoice);
        leader.setStartBias(randomLeaderData.startBias);
        randomLeaderData.extraTurn ? leader.setExtraTurn(randomLeaderData.extraTurn) : leader.setExtraTurn('None');
        return leader;
    }

    public static leaderToJSON(leader: Leader)
    {
        let data = {
            name: leader.getName(),
            image: leader.getImage(),
            extraTurn: leader.getExtraTurn(),
            preferedChoice: leader.getPreferedChoice(),
            startBias: leader.getStartBias()
        };
        return data;
    }
}