import "./Dog.css"
import React, { useEffect, useState } from "react";
import photo from "./DOG/german shepard.jpg"
import grand from "./DOG/grand basset.jpg"
import Hokkaido from "./DOG/Hokkaido.jpg"
import Japanese from "./DOG/Japanese Terrier.jpg"


export default function Dog() {
    const [data, setDogData] = useState({})

    async function Dog1() {
        let url = "https://dogapi.dog/api/v2/breeds";
        const response = await fetch(url);
        const doginfo = await response.json();
        console.log(doginfo);
        setDogData(doginfo)
    };

    useEffect(() => {
        Dog1();
    }, []);


    return (
        <div>
           <h1 style={{textAlign:"center", color:"#640D6B"}}>DOG.COM</h1>
            <div className="animal">
                <div className="text">
                   <h3 className="dog">Dogs are mammals, usually kept as pets or for work on farms or the police. Some dogs are trained to be rescue dogs, and join teams such as mountain rescue. They have been bred by humans from their ancestral wolves. They were the first animals to live with humans, as far as we know.</h3>
                </div>
               <div className="images">      
               <img src={photo} width={300}  className="german" />

                <img src={Japanese} width={300} className="japanese" />
                       
                <img src={grand} width={300} className="grand" />
                
                <img src={Hokkaido} width={300} className="Hook" />    
                </div>  
            </div>

                <div className="grid-container">
                    {data.data?.map((item) => (
                        <div className="start">
                            <div>
                            <p class="grid-item "><b>Type: </b>{item.type}</p>
                            <p class="grid-item "><b>Name: </b>{item.attributes.name}</p>
                            <p class="grid-item "><b>Description: </b>{item.attributes.description}</p>
                            </div>
                       

                            <div className="maxx">
                            <div className="max"><b>Max Life: </b>{item.attributes.life.max}</div>
                            <div className="max"><b>Min Life: </b>{item.attributes.life.min}</div>
                            <div className="max"><b>Female Max weight: </b>{item.attributes.male_weight.max}</div>
                            <div className="max"><b>Female Min weight: </b>{item.attributes.male_weight.min}</div>
                            <div className="max"><b>Female Max weight: </b>{item.attributes.female_weight.max}</div>
                            <div className="max"><b>Female Min weight: </b>{item.attributes.female_weight.min}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            );
}
