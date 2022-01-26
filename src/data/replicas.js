import anubis1 from "../images/replicas/anubis-ornament-1.jpg"
import anubis2 from "../images/replicas/anubis-ornament-2.jpg"
import babylon1 from "../images/replicas/babylonian-tablet-1.jpg"
import babylon2 from "../images/replicas/babylonian-tablet-2.jpg"
import fuji1 from "../images/replicas/fuji-wave-screen-1.jpg"
import fuji2 from "../images/replicas/fuji-wave-screen-2.jpg"
import ife1 from "../images/replicas/head-of-ife-1.jpg"
import ife2 from "../images/replicas/head-of-ife-2.jpg"
import rosetta1 from "../images/replicas/rosetta-stone-1.jpg"
import rosetta2 from "../images/replicas/rosetta-stone-2.jpg"


const replicas =  [
    {
        id: "r1",
        name: "Fuji Wave Byobu Screen",
        description: <div className="productDescription">
                        <p>
                            A handmade folding screen featuring a design based on the Fuji Wave..
                        </p>
                        <p>
                            Byōbu is a form of Japanese art in which intricately detailed images are painted onto connected folding screens. The original function of byōbu screens was for protection from wind, although they were frequently used as room dividers for privacy or simply as decoration.                          
                        </p>
                    </div>,
        image: [fuji1, fuji2],
        price: 40.00,
        dimensions: "H18.5 x W0.5 x L27cm ",
        weight: "0.12kg ",
        pages: false,
        material: false,
    },
    {
        id: "r2",
        name: "Anubis on Plinth Ornament",
        description: <div className="productDescription">
                        <p>
                            A small ornament showing a seated Anubis, the ancient Egyptian god of the dead.
                        </p>
                        <p>
                            Here, Anubis is shown on a golden plinth adorned with hieroglyphs. The ornament is based on a statue found at the tomb of Tutankhamun, an Egyptian pharaoh of the 18th dynasty.                          
                        </p>
                    </div>,
        image: [anubis1, anubis2],
        price: 6.99,
        dimensions: "H10 x W4.5 x L8cm ",
        weight: "0.140kg ",
        pages: false,
        material: "Resin",
    },
    {
        id: "r3",
        name: "The Head of Ife Replica",
        description: <div className="productDescription">
                        <p>
                            A replica of the beautiful bronze Head of Ife.
                        </p>
                        <p>
                            This striking replica has been cast and hand-finished in high-quality resin, and is based on the original which is now housed in the British Museum’s collection.                          
                        </p>
                        <p>
                            The beautifully detailed original brass sculpture represents the Ooni, or king, of the Yoruba Peoples of Ife, and dates to around the 14th-15th century. The head was discovered in Ife, Nigeria, in 1938, and is an extraordinary example of the sophisticated naturalistic craftsmanship found in Sub-Saharan Africa.
                        </p>
                    </div>,
        image: [ife1, ife2],
        price: 1600,
        dimensions: "H35 x W13.5 x L18cm m",
        weight: "1.35kg ",
        pages: false,
        material: "High quality hand-finished resin ",
    },
    {
        id: "r4",
        name: "Babylonian Tablet Replica",
        description: <div className="productDescription">
                        <p>
                            Expertly crafted from resin, this tablet is presented on a stand.
                        </p>
                        <p>
                            The original black diorite tablet was sculpted in around 875-850 BC, and shows the priest Nabu-aplu-iddina standing with his right hand raised in the presence of Nabu-aplu-iddina, the 6th king of the kingdom of Babylon (ruled 888-855 BC).
                        </p>
                    </div>,
        image: [babylon1, babylon2],
        price: 60.00,
        dimensions: "H21.5 x W5.5 x L12cm",
        weight: "1.04kg ",
        pages: false,
        material: "Resin",
    },
    {
        id: "r5",
        name: "Rosetta Stone Sculpture",
        description: <div className="productDescription">
                        <p>
                            Soldiers in Napoleon’s army discovered the Rosetta Stone in 1799 while digging the foundations of an addition to a fort near the town of el-Rashid (Rosetta). Exhibited in the British Museum since 1802, the Rosetta Stone was the key to unlocking the ability to read and translate ancient Egyptian hieroglyphs. The Stone contains the same decree in three different scripts, and scholars were able to use the Greek and Egyptian Demotic sections to decipher the ancient hieroglyphs. The text contains a decree passed by priests in 196 BC to honour King Ptolemy V for his services to Egypt.
                        </p>
                        <p>
                            An inspiring ornament to sit on the desk of any language lover.                         
                        </p>
                    </div>,
        image: [rosetta1, rosetta2],
        price: 125.00,
        dimensions: "H33 x W9 x L20cm ",
        weight: "4.80Kg ",
        pages: false,
        material: "Resin",
    }
    

    

]

export default replicas