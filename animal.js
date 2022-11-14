//creating element function
function element(ele) {
  return document.createElement(ele);
}
//h1 element for Heading
const h1 = element("h1");
h1.innerText = "Random animals";
h1.className = " col text-center text-success";
//div for animal image and name
const div = element("div");
div.className = "col text-center fs-4 m-1";
//divinfo for animal information
const divinfo = element("div");
divinfo.className = "d-flex justify-content-center";
const span = element("span");
span.className =
  "   bg-primary text-white rounded-3 bg-opacity-75 text-start fs-4 m-1";

//Api fetching the url
async function animal() {
  try {
    const response = await fetch(
      "https://zoo-animal-api.herokuapp.com/animals/rand"
    );
    const animalData = await response.json();
    console.log(animalData);
    div.innerText = "";
    divinfo.innerText = "";

    //Animal type
    const type = element("p");
    type.innerText = `Type: "${animalData.animal_type}"`;
    //Animal name
    const aname = element("span");
    aname.className = "fst-italic";
    aname.innerText = `Name: '${animalData.name}'`;
    //Animal image
    const image = element("img");
    image.src = animalData.image_link;
    image.classList.add("image");

    //Function for display animal information
    function info() {
      span.innerText = "";
      const diet = element("p");
      diet.innerText = `Diet: "${animalData.diet}"`;
      const location = element("p");
      location.innerText = `Region: "${animalData.geo_range}"`;
      const place = element("p");
      place.innerText = `Place: "${animalData.habitat}"`;
      const years = element("p");
      years.innerText = `Life: "${animalData.lifespan}"years`;
      span.append(diet, location, place, years);
      divinfo.append(span);
      div.append(divinfo);
    }
    //Event for info button
    infoBtn.addEventListener("click", info);

    //appending animal detail to body
    div.append(aname, type, image);
    document.body.append(div);
  } catch (error) {
    console.log(error);
  }
}
animal();
//Button div
const divBtn = element("div");
divBtn.className = "text-center";
//next button
const nextBtn = element("button");
nextBtn.innerText = "Next";
nextBtn.id = "next";
nextBtn.type = "button";
nextBtn.className = "btn btn-outline-info btn-lg m-2";
//event for next btn
nextBtn.addEventListener("click", animal);

//information botton
const infoBtn = element("button");
infoBtn.innerText = "Info";
infoBtn.id = "info";
infoBtn.className = "btn btn-outline-info btn-lg m-2";

//appending heading and buttons to body

divBtn.append(nextBtn, infoBtn);
document.body.append(h1, divBtn);
