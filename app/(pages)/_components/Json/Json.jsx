import PersonCard from './personCard.jsx'; //import your reuseable component

const person = [ //this is a json/object that holds the data for your reuseable component
  { //first object is michelle
    name: 'Michelle', 
    title: 'Tech Lead',
  },
  { //second object is haylie
    name: 'Haylie', 
    title: 'Tech Lead',
  },

];
export default function Json() {
    return (
      <div>
        {person.map((p)=>( //map function
          <PersonCard name={p.name} title={p.title}/> //for every object in the json above, populate the data using the reuseable component PersonCard
        ))}
      </div>
    );
}