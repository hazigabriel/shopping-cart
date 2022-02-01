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
import cat1 from "../images/replicas/egyptean-cat-1.jpg"
import cat2 from "../images/replicas/egyptean-cat-2.jpg"
import athlete1 from "../images/replicas/athlete-1.jpg"
import athlete2 from "../images/replicas/athlete-2.jpg"

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
        price: 39.99,
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
        price: 1599.99,
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
        price: 59.99,
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
        price: 124.99,
        dimensions: "H33 x W9 x L20cm ",
        weight: "4.80Kg ",
        pages: false,
        material: "Resin",
    },
    {
        id: "r6",
        name: "Egyptian Cat Bronze Replica",
        description: <div className="productDescription">
                        <p>
                            Exclusive to the Fake British Museum, a bronze replica of a statue of the cat goddess Bastet, based on an original artefact from the Fake British Museum's collection.
                        </p>
                        <p>
                            The bronze original dates from around 664-30 BC and is shown in the classic seated position. The cat wears a basket-shaped amulet and counterpoise incised around the neck. The earrings have been added to the piece in a similar style to those that would have been on the original.                         
                        </p>
                        <p>
                            The Gayer-Anderson Cat is a sacred temple cat sculpture from the Late Period of ancient Egypt. The regal and highly decorated bronze statue wears gold earrings and a gold nose ring. Her silver breastplate is decorated with the sacred eye of the god Horus, beneath which is an ornamental scarab and silvered disc. The cat represents the goddess Bastet and is named after Major Robert Grenville Gayer-Anderson who donated the cat to the British Museum in 1939. Cats were highly revered in ancient Egypt and were often found in temples as Bastet’s representative.
                        </p>
                    </div>,
        image: [cat1, cat2],
        price: 99.99,
        dimensions: "H10.5 x W3.5 x L6.5cm",
        weight: "0.28Kg",
        pages: false,
        material: "Oxidised Bronze with gold plated brass earrings",
    },
    {
        id: "r7",
        name: "Head of a Victorious Athlete Replica",
        description: <div className="productDescription">
                        <p>
                            A resin replica bust of a bronze known as the Benevento Head.
                        </p>
                        <p>
                            Also known as ‘The Head of a Victorious Athlete’, the original dates to around 50 BC and was found during an excavation of Herculaneum. The head was likely to have been mounted on a marble hermaic pillar, and was decorated with glass inlays for the eyes and red copper lips. The olive crown on his head reference the prizes awarded to victorious athletes at the Olympian games.
                        </p>
                        <p>
                            The original bronze is currently housed in the Musée du Louvre, Paris.
                        </p>
                        <p>
                            An extraordinary home ornament inspired by the long-held influence of Ancient Greek statue in art and architecture.
                        </p>
                    </div>,
        image: [athlete1, athlete2],
        price: 474.99,
        dimensions: "H44 x W20 x L22cm",
        weight: "7.50Kg",
        pages: false,
        material: "Hand-finished resin",
    }
    

    

]

export default replicas