const charactersName = [
  "Wildmutt",
  "Four Arms",
  "Grey Matter",
  "Kineceleran",
  "Upgrade",
  "Diamondhead",
  "Ripjaws",
  "Stinkfly",
  "Cannonbolt",
  "Ghostfreak",
  "Heatblast",
];

const charactersIntro = [
  `Wildmutt appears to be a large orange dog-like creature with no eyes, ears, nose, or tail. He stands on all fours and his movements are somewhat apelike. His teeth are very defined and his bottom jaw sticks out of his mouth`,
  `Four Arms is a humanoid alien that is approximately twelve feet tall, has well-developed muscles, two pairs of four-fingered arms, and red skin. A black stripe goes from his chin to his lower lip, and he has four eyes: a main pair and a smaller pair below them, while he lacks ears or nose. He has whisker-like spikes on each forearm.`,
  `Grey Matter is a grey-skinned, frog-like, bipedal alien that is only four inches tall with large green eyes, which have rectangular pupils and horizontal eyelids.`,
  `Kinecelerans have blue faces and skin. They have long, prehensile tails that may or may not have black stripes on them. Their arms end in three fingered hands. Their feet have wheels on them, which enables them to travel quickly. They have white eyes (although XLR8 has green ones due to the Omnitrix).`,
  `Upgrade has a black exterior with green stripes that resemble circuitry all over him. The green circle on his head is his eye, which glows whenever he talks. His body is made up of billions of small cell-like creatures called nanites.`,
  `Being a silicon-based life form made of super-hard, green/blue diamond-like material, Diamondhead's body is composed of durable pale green crystals. He sports four crystal shards on his back and has a sharp head.`,
  `Ripjaws shares a number of traits with Earth's aquatic life, such as an alligator, an eel, a leech, an anglerfish, and a shark. He can change between a fishtail with triangular lines or legs at will and has a phosphorescent light on his head.`,
  `Stinkfly has a bug/insect body and four insect-like flat legs with two arms, whose hands are human-style ones with three clawed fingers. He has four small eyes on long stalks connected to his large head, which can all be moved around independently from each other. His wings are light green and very fragile with lines on them, and his limbs are a brown-greenish color. His tail is an ultra sensitive receptor, making it like an antenna.`,
  `Cannonbolt is a hulking, broad-shouldered alien covered in natural, yellow armor plating on his back, shoulders, and the backs of his arms. He is mostly white with black on his upper half and has four claws on both of his hands, having a color scheme and claws similar to that of a panda. Cannonbolt is covered in fur across the thickest parts of his body, while every other part except for his elbows and knees is short fur.`,
  `Ghostfreak is a phantom/ghost-like alien with a gaseous appearance and claw-like hands, and grey skin with black lines running all over him. His skin is removable with black and white striped tentacles underneath it, however his true form is unknown.`,
  `Heatblast is a plasma-based life-form whose body is composed of a super hot inner plasma body covered by dark reddish brown volcanic rocks.As a fire-based entity, his body radiates high amounts of heat. His feet have a slight oval-like design with only two toes and one back toe. His tongue is also made of fire while his collarbone resembles a volcano which generates a fiery "hair" that covers his head, leaving his mask-like face visible with no nose or ears.`,
];
function imgSlider(src, index) {
  let content = document.querySelector(".content");

  content.innerHTML = `
        <div class="textBox">
            <h2 class="titleText">${charactersName[index]}</h2>
            <p class="introduceText">
                ${charactersIntro[index]}
            </p>
            <a href="#" class="transformations">Transformations</a>
        </div>
        <div class="imgBox">
            <img src="${src}" />
        </div>
        `;
}

const silhouetteName = [
  "wildmutt_silhouette",
  "fourarm_silhouette",
  "gary_silhouette",
  "kineceleran_silhouette",
  "upgrade_silhouette",
  "diamondheat_silhouette",
  "ripjaws_silhouette",
  "stinkfly_silhouette",
  "cannonbolt_silhouette",
  "ghostfreak_silhouette",
  "heatblast_silhouette",
];

const changeSilhouette = () => {
  let silhouette = document.querySelector(".silhouette").style;
  let i = 0;
  setInterval(() => {
    if (i == silhouetteName.length) i = 0;
    silhouette.background = `url('./assets/img/silhouett/${silhouetteName[i]}.png') no-repeat center center`;
    silhouette.backgroundSize = "contain";
    i++;
  }, 150);
};

changeSilhouette();
