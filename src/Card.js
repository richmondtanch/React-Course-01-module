import Concept from "./Concept"

const card = (props) => {
  console.log(props.concepts[1]);
  return (
    
      <div>
        <ul id="concepts">
          <Concept concept={props.concepts[0]}></Concept>
          <Concept concept={props.concepts[1]}></Concept>
          <Concept concept={props.concepts[2]}></Concept>
        </ul>
      </div>
    
  );
}

export default card;
