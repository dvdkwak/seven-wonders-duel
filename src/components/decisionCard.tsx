import './decisionCard.css';

const decisionCard = (props: any) => {

    return(
        <div className="decisionCard">
            <p>{props.decision.getChoice()}</p>
            <p>{props.decision.getExtraTurn()}</p>
            <p>{props.decision.getDirection()}</p>
        </div>
    );
}

export default decisionCard;