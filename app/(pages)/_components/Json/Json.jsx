import PersonCard from './personCard.jsx';

const person = [
  {
    name: 'Michelle',
    title: 'Tech Lead',
  },
  {
    name: 'Haylier',
    title: 'Tech Lead',
  },

];
export default function Json() {
    return (
      <div>
        {person.map((p)=>(
          <PersonCard name={p.name} title={p.title}/>
        ))}
      </div>
    );
}