import { useEffect, useState } from "react" //Weather app
import { MDBInput, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit'
//Weather icons
import haze from '/weather/haze.png'
import rain from '/weather/rain.png'
import cloud from '/weather/cloud.png'
import clear from '/weather/clear.png'
import mist from '/weather/mist.png'
import ErrPage from "./ErrPage"

const Weather = () => {
    const [city, setCity] = useState("") //input city value
    const [data, setData] = useState("")
    const [error, setError] = useState("")


    const API_KEY = "fb5d15574b566badac5bca2a50870923"  //Weather  key

    //Fetch api from server
    const fetchData = () => {
        if (city == "") {
            alert("Enter city name please!")
        } else {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                .then(res => res.json())
                .then(result => {
                    if (result.cod == "404") {
                        setError("please enter correct name of city!")
                    } else {
                        setData(result)
                    }
                })

        }
        setCity("")

    }
  
    
    return (
        <>
            <div className="container w-50 text-center shadow-4 p-3 mt-5">
                <h2>Weather App</h2>

                <div className='d-flex'>
                    <MDBInput label="City Name" id="form1" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    <button className='btn btn-primary btn-sm mx-1' onClick={fetchData}>Search</button>
                </div>
                {/* this is show for error page */}
                {
                    error && !data ? <ErrPage error={error} /> : null

                }
                {
                    data && <div className="d-flex justify-content-center mt-4">
                        <MDBCard className='w-75'>
                            <MDBCardBody>
                                <MDBCardTitle>City: {data.name}</MDBCardTitle>
                                <MDBCardTitle>Temp: {Math.trunc(data.main.temp)} °C</MDBCardTitle>
                                <img src={data.weather[0].main == "Haze" ? haze : ""} width={100} />
                                <img src={data.weather[0].main == "Rain" ? rain : ""} width={100} />
                                <img src={data.weather[0].main == "Clouds" ? cloud : ""} width={100} />
                                <img src={data.weather[0].main == "Clear" ? clear : ""} width={100} />
                                <img src={data.weather[0].main == "Mist" ? mist : ""} width={100} />
                                <MDBCardText>{data.weather[0].description}</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                }

            </div>
        </>
    )
}

export default Weather
