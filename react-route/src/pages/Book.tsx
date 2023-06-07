import { useParams } from 'react-router-dom';


const Book = () => {
    const {id} = useParams();

  return (
    <div>The Book is {id}</div>
  )
}

export default Book