import React, {useEffect} from 'react'
import axios from 'axios'
export const Fetchdata = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://www.acovitweb.com/ws_epay_proxirest_test/convive');
            console.log(response.data);
          } catch (error) {
            console.error("Error sending message:");
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
    Fetchdata
    </div>
  )
}
