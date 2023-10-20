const films = [
  {
    id: 1,
    img: "assets/image/127 Hours.jpg",
    title: "127 Hours",
    year: 2011,
    nation: "USA",
    info: "127 Hours is a 2010 biographical survival drama film co-written, produced and directed by Danny Boyle. The film stars James Franco, Kate Mara, Amber Tamblyn and Clémence Poésy. In the film, canyoneer Aron Ralston must find a way to escape after he gets trapped by a boulder in an isolated slot canyon in Bluejohn Canyon, southeastern Utah, in April 2003. It is a British and American venture produced by Pathé, Everest Entertainment, Film4 Productions, HandMade Films and Cloud Eight Films.",
    clip: "https://www.youtube.com/embed/OlhLOWTnVoQ?si=f4ojpMKk9TOqT930",
  },

  {
    id: 2,
    img: "assets/image/Avatar.jpg",
    title: "Avatar",
    year: 2009,
    nation: "USA",
    info: "Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez,[6] and Sigourney Weaver. It is the first installment in the Avatar film series. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.[a] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.[10]",
    clip: "https://www.youtube.com/embed/5PSNL1qE6VY?si=x61-a9FW4Phf9rv0",
  },

  {
    id: 3,
    img: "assets/image/Fantastic Four.jpg",
    title: "Fantastic Four",
    year: 2015,
    nation: "USA",
    info: "Fantastic Four (styled as FANT4STIC) is a 2015 superhero film based on the Marvel Comics superhero team of the same name. Directed by Josh Trank, who co-wrote the screenplay with Jeremy Slater and Simon Kinberg, it stars Miles Teller, Michael B. Jordan, Kate Mara, Jamie Bell and Toby Kebbell. The film follows a group of intelligent teenagers that build a transdimensional portal, causing them to gain superhuman abilities.",
    clip: "https://www.youtube.com/embed/_rRoD28-WgU?si=vPLvKSRkMKPiZFJn",
  },

  {
    id: 4,
    img: "assets/image/Gridiron Gang.jpg",
    title: "Gridiron Gang",
    year: 2006,
    nation: "USA",
    info: "Gridiron Gang is a 1993 documentary film about the Kilpatrick Mustangs' inaugural season in 1990. The film won an Outstanding Individual Achievement Award in Information Programming at the 43rd Primetime Emmy Awards.[1] Louis Gossett Jr. hosted the documentary. Several scenes from the film are shown during the credits of the 2006 film Gridiron Gang, which was based on the Mustangs' 1990 season.[2]",
    clip: "https://www.youtube.com/embed/KxJHxL7pi54?si=TEbncnKwELVTPUOq",
  },

  {
    id: 5,
    img: "assets/image/Hurricane.jpg",
    title: "The Hurricane",
    year: 1999,
    nation: "USA",
    info: "The Hurricane is a 1999 American biographical sports drama film directed and produced by Norman Jewison. The film stars Denzel Washington as Rubin The Hurricane Carter, a former middleweight boxer who was wrongly convicted for a triple murder in a bar in Paterson, New Jersey. The script was adapted by Armyan Bernstein and Dan Gordon from Carter's 1974 autobiography The Sixteenth Round: From Number 1 Contender To 45472 and the 1991 non-fiction work Lazarus and the Hurricane: The Freeing of Rubin The Hurricane Carter by Sam Chaiton and Terry Swinton.",
    clip: "https://www.youtube.com/embed/cjXOUZtKV28?si=rAbj2TPY8IpGfAvL",
  },

  {
    id: 6,
    img: "assets/image/Justice League.jpg",
    title: "Justice League",
    year: 2017,
    nation: "USA",
    info: "Justice League is a 2017 American superhero film based on the DC Comics superhero team of the same name. Produced by Warner Bros. Pictures, DC Films, RatPac-Dune Entertainment,[b] Atlas Entertainment, and Cruel and Unusual Films and distributed by Warner Bros. Pictures, it is the fifth installment in the DC Extended Universe (DCEU). Directed by Zack Snyder and written by Chris Terrio and Joss Whedon, the film features an ensemble cast including Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, following the events of Batman v Superman: Dawn of Justice (2016) Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after the death of Superman to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
    clip: "https://www.youtube.com/embed/3cxixDgHUYw?si=d5kHC6-AvfcG3Hsg",
  },

  {
    id: 7,
    img: "assets/image/The Runner.jpg",
    title: "The Runner",
    year: 2015,
    nation: "USA",
    info: "The Runner is a 2015 American political drama film written and directed by Austin Stark in his feature directorial debut.[4] The film stars Nicolas Cage, Connie Nielsen, Peter Fonda and Sarah Paulson.The film was released on August 7, 2015, in a limited release and through video on demand by Alchemy.[5]",
    clip: "https://www.youtube.com/embed/sG3YXUBoroM?si=7eqqiSOazUYUBGxW",
  },

  {
    id: 8,
    img: "assets/image/XMEN.jpg",
    title: "XMEN",
    year: 2014,
    nation: "USA",
    info: "X-Men: Days of Future Past is a 2014 American superhero film directed by Bryan Singer and written by Simon Kinberg, based on the Marvel Comics superhero team the X-Men. It is the fifth mainline installment of the X-Men film series, a sequel to X-Men: The Last Stand (2006) and X-Men: First Class (2011), and a follow-up to The Wolverine (2013). The film stars an ensemble cast, including Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence, Halle Berry, Anna Paquin, Elliot Page, Peter Dinklage, Ian McKellen, and Patrick Stewart. The story is inspired by the 1981 Uncanny X-Men storyline “Days of Future Past” by Chris Claremont and John Byrne. It focuses on two time periods, with Logan traveling back in time to 1973 to change history and prevent an event that results in unspeakable destruction for both humans and mutants 1.",
    clip: "https://www.youtube.com/embed/T-WhiMGfHIs?si=JFZMhGiMsrPXwQSo",
  },

  {
    id: 9,
    img: "assets/image/Wanderlust.jpg",
    title: "Wanderlust",
    year: 2012,
    nation: "USA",
    info: "Wanderlust is a 2012 American comedy film directed by David Wain and written by Wain and Ken Marino, who also produced with Judd Apatow and Paul Rudd. The film stars Jennifer Aniston and Rudd as a married couple who try to escape modern society by finding themselves on a commune in Georgia, after the economy crashes down on their dreams in New York City.",
    clip: "https://www.youtube.com/embed/Oz7xMY1AbbI?si=ZfdKJMH58hWARdEU",
  },
];

export default films;
