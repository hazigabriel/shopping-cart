import hokusai from "../images/books/hokusai.jpg"
import rome from "../images/books/inheritance-of-rome.jpg"
import worldHistory from "../images/books/little-world-history.jpg"
import mesopotamia from "../images/books/mesopotamia.jpg"
import peru1 from "../images/books/peru-1.jpg"
import peru2 from "../images/books/peru-2.jpg"
import renaissance from "../images/books/renaissance-to-goya.jpg"

const books =  [
    {
        id: "b1",
        name: "Peru: a journey in time",
        description: <div className="productDescription">
                        <p>
                            The environments of the Central Andean region in Peru, South America, are some of the most geographically rich and diverse in the world. This publication highlights the history, beliefs and cultural achievements of the different peoples who lived in these remarkable landscapes from 1500 BC to the arrival of Europeans in the 1500s, and the importance of their legacy up until today.</p>
                        <p>
                            Over thousands of years, the people of the Andes have approached agriculture, economy, gender, power and belief in fascinating ways. Many archaeological sites in Peru are uniquely preserved, and the book discusses key examples with a thematic and geographical approach. The vibrant and varied material depicted includes ceramics, colourful textiles, golden objects and wooden carvings, drawn from the British Museum and museums and collections in Peru and beyond. When juxtaposed with breathtaking photography of archaeological sites and landscapes, they reveal new narratives about the country’s rich history.                           
                        </p>
                    </div>,
        image: [peru1, peru2],
        price: 24.99,
        dimensions: "H25 x L22cm ",
        weight: "1.05Kg ",
        pages: 240,
        material: false,
    },
    {
        id: "b2",
        name: "A Little History of the World: Illustrated Edition",
        description: <div className="productDescription">
                        <p>
                            E. H. Gombrich's A Little History of the World, an engaging and lively book written for readers both young and old, vividly brings the full span of human experience on Earth to life, from the stone age to the atomic age. Gombrich's text paints a colourful picture of wars and conquests; of grand works of art; of the advances and limitations of science; of remarkable people and remarkable events.
                        </p>
                        <p>
                            But Gombrich was, first and foremost, the best-known art historian of his time; his beloved Little History suggests illustrations on every page. Featuring more than two hundred illustrations, most in colour, this beautiful edition incorporates a wide range of images, showing us the earliest cave paintings, the classic sculptures of the ancient Greeks, beautiful Islamic calligraphy, oil portraits of the mighty through the ages, and much more.                           
                        </p>
                        <p>
                            With a high-grade design, fine paper, and classic binding, this enhanced edition will have an important place on family bookshelves for many years to come.
                        </p>
                    </div>,
        image: [worldHistory],
        price: 17.99,
        dimensions: "H22.7 x L18.6cm ",
        weight: "0.89kg ",
        pages: 364,
        material: false,
    },
    {
        id: "b3",
        name: "Hokusai: A Life in Drawing",
        description: <div className="productDescription">
                        <p>
                            Hokusai: the blue, foam-crested wave rearing above Mount Fuji; the celebrated volcano idealized and reinvented by the artist in every nuance of view, season and painting; extraordinary bridges, the waterfalls of Japan, the contortions, costumes, gestures - the very breath of men, women, peasants, townsmen, warriors, artisans, leaping horses, birds, insects, fish, almost live on the ground on which they are painted - the countless imaginative drawings or the lively sketches done on the spot for the Manga, Hokusai's record of shapes and forms drawn from life or imagined over time. With a body of work comprising more than 30,000 drawings and paintings, Hokusai (1760-1849) was the most prolific, varied and indisputably the most creative artist of old Japan. A universal genius in everything that constituted drawing and painting in his time, he practised all genres of ukiyo-e, those `images of the floating world', as his contemporaries liked to describe their pleasures and their daily life.
                        </p>
                        <p>
                            This book traces the career of this child from a working-class district of old Tokyo, then known as Edo, evoking the special atmosphere of this great city and of Japanese life, when Japan - closed to foreigners - developed in a vacuum a powerfully original culture. Hokusai became one of the great masters of the woodcut, this `brush gone wild', as he called himself, being rediscovered by the Impressionists and aesthetes at the end of the 19th century. He remains one of the greatest and - thanks to his personality - one of the most attractive figures of world art.                         
                        </p>
                    </div>,
        image: [hokusai],
        price: 24.99,
        dimensions: "H22.6 x L16cm ",
        weight: "0.85kg",
        pages: 224,
        material: false,
    },
    {
        id: "b4",
        name: "Renaissance to Goya: Prints and Drawings from Spain, Hardback",
        description: <div className="productDescription">
                        <p>
                            This beautiful and comprehensive volume of prints and drawings examines the history of graphic practice in Spain for the first time, providing an overview of more than four hundred years of artistic production and revealing how each region of Spain was an independent centre of artistic activity.
                        </p>
                        <p>
                            Renaissance to Goya includes exquisite examples of prints and drawings from the late fifteenth century through to the Golden Age of the seventeenth century, featuring key woks from Berruguete, the Carducho brothers, Murillo, Ribera, Zurbarán and the extraordinary drawings of Valázquez.                           
                        </p>
                        <p>
                            The book concludes with the Enlightenment and a remarkable collection of Goya prints, and works by Goya’s contemporaries; Lucas, Camaron and the Tiepolo family of Madrid. Featured are over 150 illustrations from the British Museum’s collection, one of the finest outside of Spain, last shown in the 1970s and never before catalogued, alongside key works from institutions across Spain.
                        </p>
                    </div>,
        image: [renaissance],
        price: 44.99,
        dimensions: "H29.5 x L23.5cm",
        weight: "2kg",
        pages: 320,
        material: false,
    },
    {
        id: "b5",
        name: "The Inheritance of Rome: A History of Europe from 400 to 1000",
        description: <div className="productDescription">
                        <p>
                            The world known as the 'Dark Ages', often seen as a time of barbarism, was in fact the crucible in which modern Europe would be created.
                        </p>
                        <p>
                            Chris Wickham's acclaimed history shows how this period, encompassing peoples such as Goths, Franks, Vandals, Byzantines, Arabs, Anglo-Saxons and Vikings, was central to the development of our history and culture. From the collapse of the Roman Empire to the establishment of new European states, and from Ireland to Constantinople, the Baltic to the Mediterranean, this landmark work makes sense of a time of invasion and turbulence, but also of continuity, creativity and achievement.                           
                        </p>
                    </div>,
        image: [rome],
        price: 14.99,
        dimensions: "H19.8 x L12.9cm ",
        weight: "0.50kg",
        pages: 688,
        material: false,
    },
    {
        id: "b6",
        name: "Mesopotamia: The Invention of the City",
        description: <div className="productDescription">
                        <p>
                            Situated in an area roughly corresponding to present-day Iraq, Mesopotamia is one of the great, ancient civilizations, though it is still relatively unknown. Yet, over 7,000 years ago in Mesopotamia, the very first cities were created.
                        </p>
                        <p>
                            This is the first book to reveal how life was lived in ten Mesopotamian cities: from Eridu, the Mesopotamian Eden, to that potent symbol of decadence, Babylon - the first true metropolis: multicultural, multi-ethnic, the last centre of a dying civilization.                           
                        </p>
                    </div>,
        image: [mesopotamia],
        price: 12.99,
        dimensions: "H19.8 x L12.9cm ",
        weight: "0.29 kg",
        pages: 400,
        material: false,
    },
    
    

]

export default books