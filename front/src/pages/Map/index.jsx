import { Link } from "wouter";
import { useData } from "../../hooks";
import { useRoute } from "wouter"
import { useQuery } from "react-query"
import { dogData } from "../../services/dogs"
import { useDelete } from "../../hooks/useDog";
import Button from "../../components/Button";

const Map = () => {
  const { eraseDog } = useDelete();
  const [, params] = useRoute("/map/:dogname");

  const { data: dog, isFetching } = useQuery(["dog", params], () => dogData(params));

  const handleDelete = () => {
    
    const confirmed = window.confirm("Are you sure you want to delete this dog?");
    if (confirmed) {
      eraseDog(params); 
      window.location.href = "/";
      
    }
  };

  return (<>
    <div>
      <p>This screen presents the data of the dog "{params?.dogname}"</p>
    </div>
    <p>Chenil: {dog?.data?.dog?.chenil}</p>
    <p>Medicines: {dog?.data?.dog?.array_agg}</p>
    <p>Food: {dog?.data?.dog?.foodname}</p>
    <p>Eat Behavior: {dog?.data?.dog?.eatbehavior}</p>
    <p>Castrated: {dog?.data?.dog?.castrated}</p>
    <div>
      <Button onClick={handleDelete}> Sashay</Button>
    </div>
   
    <Link to="/">Listado perritos</Link>
  </>
  )
}

export default Map;