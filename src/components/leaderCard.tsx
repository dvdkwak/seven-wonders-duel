import './leaderCard.css';

const leaderCard = (props: any) => {

    return(
        <div className="leaderCard">
            <h1>{props.leader.getName()}</h1>
            <p>{props.leader.getExtraTurn()}</p>
            <p>{props.leader.getStartBias()}</p>
            <p>{props.leader.getPreferedChoice()}</p>
        </div>
    );
}

export default leaderCard;