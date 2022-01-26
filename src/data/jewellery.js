import greekHorse1 from "../images/jewellery/greek-horse-1.jpg"
import greekHorse2 from "../images/jewellery/greek-horse-2.jpg"
import broch from "../images/jewellery/green-rose-broch.jpg"
import horus1 from "../images/jewellery/horus-necklance-1.jpg"
import horus2 from "../images/jewellery/horus-necklance-2.jpg"
import bull from "../images/jewellery/lamassu-winged-bull-cuffins.jpg"
import persianNecklance from "../images/jewellery/persian-necklance.jpg"
import ramBracelet from "../images/jewellery/ram-bracelet.jpg"

const jewellery =  [
    {
        id: "j1",
        name: "Greek Horse Necklace",
        description: <div className="productDescription">
                        <p>
                                A pendant necklace with a Greek horse charm, inspired by representations of horses in ancient Greek art.
                        </p>
                        <p>
                            In early Greek culture, the horse was a symbol of the human ability to domesticate animals and therefore utilise their power. There are many examples of horses represented in art and mythology, such as the Homeric legend of the Trojan Horse, or the famous winged horse Pegasus.                          
                        </p>
                    </div>,
        image: [greekHorse1, greekHorse2],
        price: 35.00,
        dimensions: "Length: 46cm, Pendant: L4 x W3cm",
        weight: "0.01kg ",
        pages: false,
        material: "Bronze pendant, gold-plated necklace ",
    },
    {
        id: "j2",
        name: "Ram's Head Cuff Bracelet",
        description: <div className="productDescription">
                        <p>
                            Crafted from 24 carat gold-plated brass, this bangle is adjustable for a flexible fit. It is inspired by a pair of open-ended silver-plated bronze bangles which featured gold ram’s heads, and which date to around 475-400 BC. The originals were discovered during the 19th century in Cyprus by British scholar J.A.R. Munro
                        </p>
                        <p>
                            Decorative jewellery played an essential role in ancient Greek life, ritual and death. Greeks used jewellery to display wealth and prestige in society.                           
                        </p>
                    </div>,
        image: [ramBracelet],
        price: 120.00,
        dimensions: "Dia.8cm ",
        weight: "0.060Kg",
        pages: false,
        material: "24 carat gold-plated brass",
    },
    {
        id: "j3",
        name: "Long Persian Agate Necklace",
        description: <div className="productDescription">
                        <p>
                            Inspired by Persian jewellery, a bright and beautiful necklace featuring banded agate beads.
                        </p>
                        <p>
                            The impressive stone beads of this necklace are interspersed with elaborate gold-plated spacer beads, and finished with a gold-plated s-catch.                           
                        </p>
                        <p>
                            Discovered in the 3rd century BC by Greek philosopher Theophrastus, agate was first found along the Achates River which gave the stone its name. Agate exists in a variety of colours and patterns, including the banded agate used for this striking necklace.
                        </p>
                    </div>,
        image: [persianNecklance],
        price: 200.00,
        dimensions: "Length: 150cm ",
        weight: "0.04Kg",
        pages: false,
        material: "Gold-plate, agate",
    },
    {
        id: "j4",
        name: "Lamassu Winged Bull Cufflinks",
        description: <div className="productDescription">
                        <p>
                            A pair of brass cufflinks featuring ancient Assyrian lammasu.
                        </p>
                        <p>
                            The design of these cufflinks have been inspired by ancient Assyrian sculpture.
                        </p>
                        <p>
                            The Assyrian lamassu, or winged bulls, were stone mythological guardians. Positioned to be viewed in relief or in the round, they were often placed at gateways of Assyrian citadels or palaces to protect them from demonic forces. King Ashurbanipal of the Assyrian empire kept winged bull figures in the entrance to the throne room of his palace.                           
                        </p>
                    </div>,
        image: [bull],
        price: 45.00,
        dimensions: "H2.7 x W1.9 x L2cm",
        weight: "0.02Kg",
        pages: false,
        material: "Brass",
    },
    {
        id: "j5",
        name: "Lapis Horus Pendant Necklace",
        description: <div className="productDescription">
                        <p>
                            This beautiful pendant has been crafted of gold-plated sterling silver, and shows the god Horus in the form of a falcon perched atop a deep blue lapis lazuli stone. 
                        </p>
                        <p>
                            Horus was the ancient Egyptian god of the sky, whose right eye was thought to be the sun, and whose left eye, the moon. According to myth, Horus was defeated in a fight by the desert god Set during which his left eye was damaged, and later healed by Thoth, leading to the ‘broken’ appearance of the moon in the night sky.                          
                        </p>
                        <p>
                            The stone lapis lazuli was highly prized in ancient Egypt, where it was inlaid into jewellery and ornaments including death masks and shabtis.
                        </p>
                    </div>,
        image: [horus1, horus2],
        price: 120.00,
        dimensions: "Length: 44cm, Pendant: L2.5 x W1cm",
        weight: "0.30Kg ",
        pages: false,
        material: "Gold-plated sterling silver, lapis lazuli",
    },
    {
        id: "j6",
        name: "Victorian Green Rose Brooch",
        description: <div className="productDescription">
                        <p>
                            The design of the brooch is based on an original French piece that is housed within the British Museum’s collection. The brooch, which dates to c.1890, is based on a spray of "rosa canina" dog-roses, which are pave-set with green chrysoberyl stones, and surrounded by delicately detailed gold-plated leaves. The brooch was part of the 1978 Hull Grundy gift, and showcases Anne Hull Grundy’s passion for Victorian botanical jewellery.
                        </p>
                       
                    </div>,
        image: [broch],
        price: 115.00,
        dimensions: "Length: 44cm, Pendant: L1 x W1cm   ",
        weight: "0.10 Kg ",
        pages: false,
        material: "Pewter and Swarovski crystal",
    },
    

]

export default jewellery