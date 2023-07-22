import { Link } from "wouter";
import  YourComponent  from "../../components/YourComponent"
import { useData } from "../../hooks";
import { useRoute } from "wouter" 
import { useQuery } from "react-query"
import { dogData } from "../../services/dogs"

const Map = () => {
    const [, params] = useRoute("/map/:dogname");

  const { data: dog, isFetching } = useQuery(["dog", params], () => dogData(params));
  console.log("78978", dog)
    return (<>
            <div>
                <p>This screen presents the data of the dog "{params?.dogname}"</p>
            </div>
            <p>Chenil: {dog?.data?.dog?.chenil}</p>
            <p>Medicines: {dog?.data?.dog?.array_agg}</p>
            <p>Food: {dog?.data?.dog?.foodname}</p>
            <p>Eat Behavior: {dog?.data?.dog?.eatbehavior}</p>
            <p>Castrated: {dog?.data?.dog?.castrated}</p>
            <YourComponent>
                
            
            </YourComponent>
            <Link to="/">Listado perritos</Link>
            </>
    )
}

export default Map;