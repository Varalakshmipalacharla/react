import React from 'react';
import Flower from '../src/images/flower.jpg';
import Toy from '../src/images/Toy.jpg';
import Fruit from '../src/images/fruit.jpg';
const Sample = () => {
    const things = [
        {
        name: "Flower",
        description: 'A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants.' ,
        img : <img src={Flower} alt="flower" width="300px" height="300px" />},
        {
        name: "Fruit",
        description: 'fruit, the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Thus, apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.' ,
        img : <img src={Fruit} alt="flower" width="300px" height="300px" />
    },
        {
        name: "Toy",
        description: 'A toy is an item that is used primarily by children though may also be marketed to adults under certain circumstances. Playing with toys can be an enjoyable means of training young children for life experiences. Different materials like wood, clay, paper, and plastic are used to make toys.' ,
        img : <img src={Toy} alt="flower" width="300px" height="300px" />
    }
    ]
    return (
        <span>
        {things.map((i) => <div style={{display: 'inline'}}><section>
            <h4>{i.name}</h4>
            <span>{i.img}</span>
            <p>{i.description}</p>
            </section>
            </div>) 
            }
        </span>
    );
}

export default Sample;